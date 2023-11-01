package servers

import (
	"context"

	"github.com/carlosCACB333/cb-grpc/pb"
	"github.com/carlosCACB333/cb-grpc/utils"
	"github.com/carlosCACB333/cb-grpc/worker"
	"github.com/hibiken/asynq"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
)

type UtilServer struct {
	pb.UnimplementedUtilServiceServer
	Config          *utils.Config
	DB              *gorm.DB
	TaskDistributor worker.TaskDistributor
}

func NewUtilServer(
	cfg *utils.Config,
	db *gorm.DB,
	distributor worker.TaskDistributor,
) *UtilServer {

	return &UtilServer{
		Config:          cfg,
		DB:              db,
		TaskDistributor: distributor,
	}
}

func (s *UtilServer) SendEmail(ctx context.Context, req *pb.SendEmailReq) (*pb.SendEmailRes, error) {
	taskOpts := []asynq.Option{
		asynq.MaxRetry(10),
		asynq.Queue(worker.QUEUE_SEND_EMAILS),
	}
	payload := &worker.PayloadGenericSendEmails{
		Emails:  req.GetTo(),
		Subject: req.GetSubject(),
		Body:    req.GetBody(),
	}
	err := s.TaskDistributor.DistributeTaskGenericSendEmails(ctx, payload, taskOpts...)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "could not distribute task: %v", err)
	}

	return &pb.SendEmailRes{
		Status:  "COMPLETED",
		Message: "Email sent",
	}, nil
}
