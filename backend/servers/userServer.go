package servers

import (
	"context"

	model "github.com/carlosCACB333/cb-grpc/models"
	"github.com/carlosCACB333/cb-grpc/pb"
	"github.com/carlosCACB333/cb-grpc/utils"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
)

type UserServer struct {
	pb.UnimplementedUserServiceServer
	Config *utils.Config
	DB     *gorm.DB
}

func NewUserServer(cfg *utils.Config, db *gorm.DB) *UserServer {
	return &UserServer{
		Config: cfg,
		DB:     db,
	}
}

func (s *UserServer) CreateOrUpdateUserWithoutAuth(ctx context.Context, req *pb.CreateOrUpdateUserReq) (*pb.GenericRes, error) {
	user := &model.User{
		Model:     model.Model{ID: req.GetId()},
		Username:  req.GetUsername(),
		Email:     req.GetEmail(),
		FirstName: req.GetFirstName(),
		LastName:  req.GetLastName(),
		Gender:    req.GetGender(),
		Photo:     req.GetPhoto(),
		Phone:     req.GetPhone(),
		Status:    utils.USER_STATUS_ACTIVE,
	}
	if err := s.DB.Save(user).Error; err != nil {
		return nil, status.Error(codes.Internal, "Error al crear o actualizar usuario")
	}
	return &pb.GenericRes{
		Status:  pb.Status_OK,
		Message: "Usuario creado o actualizado correctamente",
	}, nil

}

func (s *UserServer) DeleteUserWithoutAuth(ctx context.Context, req *pb.GenericReq) (*pb.GenericRes, error) {
	user := &model.User{}
	if err := s.DB.Where("id = ?", req.GetId()).First(user).Error; err != nil {
		return nil, status.Error(codes.NotFound, "Usuario no encontrado")
	}

	if err := s.DB.Model(user).Updates(model.User{Status: utils.USER_STATUS_DELETED}).Error; err != nil {
		return nil, status.Error(codes.Internal, "Error al eliminar usuario")
	}

	return &pb.GenericRes{
		Status:  pb.Status_OK,
		Message: "Usuario eliminado correctamente",
	}, nil
}
