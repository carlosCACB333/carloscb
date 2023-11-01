package servers

import (
	"context"
	"sort"

	model "github.com/carlosCACB333/cb-grpc/models"
	"github.com/carlosCACB333/cb-grpc/pb"
	"github.com/carlosCACB333/cb-grpc/utils"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
	"gorm.io/gorm"
)

type ChatpdfMessageServer struct {
	pb.UnimplementedChatpdfMessageServiceServer
	Config *utils.Config
	DB     *gorm.DB
}

func NewChatpdfMessageServer(cfg *utils.Config, db *gorm.DB) *ChatpdfMessageServer {
	return &ChatpdfMessageServer{Config: cfg, DB: db}
}

func (s *ChatpdfMessageServer) GetLastChatpdfMessage(req *pb.GenericReq, stream pb.ChatpdfMessageService_GetLastChatpdfMessageServer) error {
	db := s.DB
	chatId := req.GetId()
	uid := stream.Context().Value(utils.UID).(string)
	var chat model.Chatpdf
	var messages []model.ChatpdfMessage

	// validate if chat exists and belongs to user
	if err := db.Where("id = ? AND user_id = ?", chatId, uid).First(&chat).Error; err != nil {
		return status.Errorf(codes.NotFound, "Chat no encontrado")
	}

	if err := db.Where("chatpdf_id = ?", chat.ID).Order("created_at desc").Limit(6).Find(&messages).Error; err != nil {
		return status.Errorf(codes.NotFound, "No se encontraron los mensajes")

	}

	sort.Slice(messages, func(i, j int) bool {
		return messages[i].CreatedAt.Before(messages[j].CreatedAt)
	})

	for i := len(messages) - 1; i >= 0; i-- {
		message := messages[i]
		stream.Send(&pb.ChatpdfMessage{
			Id:        message.ID,
			ChatpdfID: message.ChatpdfID,
			Content:   message.Content,
			Role:      message.Role,
			CreatedAt: timestamppb.New(message.CreatedAt),
			UpdatedAt: timestamppb.New(message.UpdatedAt),
		})
	}

	return nil
}

func (s *ChatpdfMessageServer) CreateChatpdfMessage(ctx context.Context, req *pb.CreateChatpdfMessageReq) (*pb.GenericRes, error) {
	db := s.DB
	chatId := req.GetChatpdfID()
	uid := ctx.Value(utils.UID).(string)
	chat := model.Chatpdf{}
	if err := db.Where("id = ? AND user_id = ?", chatId, uid).First(&chat).Error; err != nil {
		return nil, status.Errorf(codes.NotFound, "Chat no encontrado")
	}

	message := model.ChatpdfMessage{
		Model:     model.Model{ID: utils.NewID()},
		ChatpdfID: chat.ID,
		Content:   req.GetContent(),
		Role:      req.GetRole(),
	}

	if err := utils.ValidateFields(message); err != nil {
		return nil, err
	}

	if err := db.Create(&message).Error; err != nil {
		return nil, status.Errorf(codes.Internal, "Error al crear el mensaje")

	}

	return &pb.GenericRes{
		Status:  pb.Status_OK,
		Message: "Mensaje creado",
	}, nil

}

func (s *ChatpdfMessageServer) DelteChatpdfMessage(ctx context.Context, req *pb.GenericReq) (*pb.GenericRes, error) {
	msgId := req.GetId()
	db := s.DB

	var message model.ChatpdfMessage
	if err := db.Where("id = ?", msgId).First(&message).Error; err != nil {
		return nil, status.Errorf(codes.NotFound, "Mensaje no encontrado")
	}

	if err := db.Delete(&message).Error; err != nil {
		return nil, status.Errorf(codes.Internal, "Error al eliminar el mensaje")
	}

	return &pb.GenericRes{
		Status:  pb.Status_OK,
		Message: "Mensaje eliminado",
	}, nil

}
