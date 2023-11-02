package servers

import (
	"context"
	"fmt"
	"os"
	"strings"
	"sync"

	model "github.com/carlosCACB333/cb-grpc/models"
	"github.com/carlosCACB333/cb-grpc/pb"
	"github.com/carlosCACB333/cb-grpc/utils"
	"github.com/carlosCACB333/cb-grpc/worker"
	"github.com/sashabaranov/go-openai"
	"github.com/tmc/langchaingo/schema"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
	"gorm.io/gorm"
)

type ChatpdfServer struct {
	pb.UnimplementedChatpdfServiceServer
	Config          *utils.Config
	DB              *gorm.DB
	TaskDistributor worker.TaskDistributor
}

func NewChatpdfServer(
	cfg *utils.Config,
	db *gorm.DB,
	distributor worker.TaskDistributor,
) *ChatpdfServer {

	return &ChatpdfServer{
		Config:          cfg,
		DB:              db,
		TaskDistributor: distributor,
	}
}

func (s *ChatpdfServer) GetContext(ctx context.Context, req *pb.GetContextReq) (*pb.GetContextRes, error) {
	userId := ctx.Value(utils.UID).(string)
	chatID := req.GetChatId()
	query := req.GetQuery()

	var chat model.Chatpdf
	if err := s.DB.Where("id = ? AND user_id = ?", chatID, userId).First(&chat).Error; err != nil {
		return nil, status.Error(codes.NotFound, "No se ha encontrado el chat")
	}

	c, err := utils.GetContext(ctx, query, chat.Key, 10)
	if err != nil {
		fmt.Println(err)
		return nil, status.Error(codes.Internal, "No se ha podido obtener el contexto")
	}

	return &pb.GetContextRes{
		Context: c,
	}, nil
}
func (s *ChatpdfServer) GetContextWithoutAuth(ctx context.Context, req *pb.GetContextReq) (*pb.GetContextRes, error) {

	chatID := req.GetChatId()
	query := req.GetQuery()

	var chat model.Chatpdf
	if err := s.DB.Where("id = ?", chatID).First(&chat).Error; err != nil {
		return nil, status.Error(codes.NotFound, "No se ha encontrado el chat")
	}

	c, err := utils.GetContext(ctx, query, chat.Key, 10)
	if err != nil {
		fmt.Println(err)
		return nil, status.Error(codes.Internal, "No se ha podido obtener el contexto")
	}

	return &pb.GetContextRes{
		Context: c,
	}, nil
}

func (s *ChatpdfServer) GetChatpdfs(req *pb.EmptyReq, stream pb.ChatpdfService_GetChatpdfsServer) error {
	userId := stream.Context().Value(utils.UID).(string)
	var chats []model.Chatpdf
	res := s.DB.
		Order("created_at desc").
		Where("user_id = ?", userId).
		Find(&chats)
	if res.Error != nil {
		return status.Error(codes.NotFound, "No se ha encontrado el chat")
	}

	for _, chat := range chats {
		if err := stream.Send(&pb.Chatpdf{
			Id:          chat.ID,
			Name:        chat.Name,
			Key:         chat.Key,
			UserID:      chat.UserID,
			ContentType: chat.ContentType,
			CreatedAt:   timestamppb.New(chat.CreatedAt),
			UpdatedAt:   timestamppb.New(chat.UpdatedAt),
		}); err != nil {
			return status.Error(codes.Internal, "No se ha podido enviar el chat")
		}
	}

	return nil

}

func (s *ChatpdfServer) CreateChatpdf(ctx context.Context, req *pb.CreateChatpdfReq) (*pb.GenericRes, error) {
	userId := ctx.Value(utils.UID).(string)
	chatId := utils.NewID()
	contentType := req.GetContentType()
	name := req.GetName()
	nameSplit := strings.Split(name, ".")
	key := chatId + "." + nameSplit[len(nameSplit)-1]
	imageData := req.GetChunk()
	imageSize := int64(len(imageData))

	// SAVE FILE ON S3
	var uploadChain = make(chan error)
	defer close(uploadChain)
	go func() {
		uploadChain <- utils.PutObject(ctx, os.Getenv("AWS_S3_BUCKET"), key, imageData, contentType)
	}()

	// VECTORIZE FILE
	var vectorizeChain = make(chan []schema.Document)
	defer close(vectorizeChain)
	go func() {
		vectorizeChain <- utils.GetContentPDF(imageData, imageSize)
	}()

	// WAIT FOR UPLOAD AND VECTORIZE
	var docs []schema.Document
	for i := 0; i < 2; i++ {
		select {
		case err := <-uploadChain:
			if err != nil {
				return nil, status.Error(codes.Internal, "No se ha podido guardar el chat")
			}
		case d := <-vectorizeChain:
			if d == nil {
				return nil, status.Error(codes.Internal, "No se ha podido vectorizar el chat")
			}
			docs = d
		}
	}

	texts := []string{}
	for _, d := range docs {
		texts = append(texts, d.PageContent)
	}
	embeddings, err := utils.GetEmbddingsPDF(ctx, texts)
	if err != nil {
		return nil, status.Error(codes.Internal, "No se ha podido obtener los embeddings")
	}

	// SAVE VECTORS ON PINACONE
	var wg sync.WaitGroup
	for i := 0; i < len(docs); i += 100 {
		wg.Add(1)
		end := i + 100
		if end > len(docs) {
			end = len(docs)
		}
		go func(d []schema.Document, e []openai.Embedding) {
			defer wg.Done()
			utils.SaveVectorOnPinacone(d, e, key)

		}(docs[i:end], embeddings[i:end])

	}

	chat := model.Chatpdf{
		Model:       model.Model{ID: chatId},
		Name:        name,
		Key:         key,
		UserID:      userId,
		ContentType: contentType,
	}

	resultInsert := s.DB.Create(&chat)
	wg.Wait()

	if resultInsert.Error != nil {
		return nil, status.Error(codes.Internal, "No se ha podido guardar el chat")
	}

	return &pb.GenericRes{
		Status:  pb.Status_OK,
		Message: "Chat guardado exitosamente",
	}, nil

}

func (s *ChatpdfServer) DeleteChatpdf(ctx context.Context, req *pb.GenericReq) (*pb.GenericRes, error) {

	id := req.GetId()
	uid := ctx.Value(utils.UID).(string)
	var chat model.Chatpdf
	if err := s.DB.Where("id = ? AND user_id = ?", id, uid).First(&chat).Error; err != nil {
		return nil, status.Error(codes.NotFound, "No se ha encontrado el chat")
	}
	// Delete concurrente
	var s3Chain = make(chan error)
	var piconeChain = make(chan error)
	var dbChain = make(chan error)

	go func() {
		s3Chain <- utils.DeleteObject(ctx, os.Getenv("AWS_S3_BUCKET"), chat.Key)
	}()
	go func() {
		piconeChain <- utils.DeleteVectorsByNamespace(chat.Key)
	}()
	go func() {
		dbChain <- s.DB.Select("Messages").Delete(&chat).Error
	}()

	for i := 0; i < 3; i++ {
		select {
		case err := <-s3Chain:
			if err != nil {
				fmt.Println(err)
				return nil, status.Error(codes.Internal, "Error al eliminar el pdf")
			}
		case err := <-piconeChain:
			if err != nil {
				return nil, status.Error(codes.Internal, "Error al eliminar los vectores")
			}
		case err := <-dbChain:
			if err != nil {
				return nil, status.Error(codes.Internal, "Error al eliminar el chat")
			}
		}
	}

	return &pb.GenericRes{
		Status:  pb.Status_OK,
		Message: "Chat eliminado exitosamente",
	}, nil

}

func (s *ChatpdfServer) GetFileUrl(ctx context.Context, req *pb.GenericReq) (*pb.GenericRes, error) {
	id := req.GetId()
	uid := ctx.Value(utils.UID).(string)
	var chat model.Chatpdf
	if err := s.DB.Where("id = ? AND user_id = ?", id, uid).First(&chat).Error; err != nil {
		return nil, status.Error(codes.NotFound, "No se ha encontrado el chat")
	}
	url, err := utils.GetPresignUrl(ctx, os.Getenv("AWS_S3_BUCKET"), chat.Key, chat.ContentType)
	if err != nil {
		return nil, status.Error(codes.Internal, "Error al obtener el pdf")
	}

	return &pb.GenericRes{
		Status:  pb.Status_OK,
		Message: "Url obtenida exitosamente",
		Value:   &url,
	}, nil
}
