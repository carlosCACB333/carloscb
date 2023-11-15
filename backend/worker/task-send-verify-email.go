package worker

import (
	"context"
	"encoding/json"
	"fmt"

	model "github.com/carlosCACB333/cb-grpc/models"
	"github.com/carlosCACB333/cb-grpc/utils"
	"github.com/hibiken/asynq"
	"github.com/rs/zerolog/log"
)

const (
	TASK_SEND_VERIFY_EMAIL = "[TASK] SEND_VERIFY_EMAIL"
)

type PayloadVerifyEmail struct {
	Email string `json:"email"`
}

func (d *RedisTaskDistributor) DistributeTaskSendVerifyEmail(
	ctx context.Context,
	payload *PayloadVerifyEmail,
	opts ...asynq.Option,
) error {
	jsonPayload, err := json.Marshal(payload)
	if err != nil {
		return err
	}

	task := asynq.NewTask(TASK_SEND_VERIFY_EMAIL, jsonPayload, opts...)
	info, err := d.client.EnqueueContext(ctx, task)
	if err != nil {
		return err
	}
	log.Info().
		Str("task", TASK_SEND_VERIFY_EMAIL).
		Str("id", info.ID).
		Str("type", info.Type).
		Bytes("payload", info.Payload).
		Str("queue", info.Queue).
		Int("max retry", info.MaxRetry).
		Msg("task enqueued")
	return nil
}

func (d *RedisTaskProcessor) ProcessTaskSendVerifyEmail(ctx context.Context, t *asynq.Task) error {
	var payload PayloadVerifyEmail
	if err := json.Unmarshal(t.Payload(), &payload); err != nil {
		return fmt.Errorf("could not unmarshal payload: %w", asynq.SkipRetry)
	}

	var user model.User

	if err := d.db.Where("email = ?", payload.Email).First(&user).Error; err != nil {
		// if err == gorm.ErrRecordNotFound {
		// 	return fmt.Errorf("could not find user: %w", asynq.SkipRetry)
		// }
		return err
	}

	// TODO: send email
	subject := "Verify your email"
	body := fmt.Sprintf("Your verification code is %s", utils.NewOtp())

	sender := utils.EmailSender{
		Cfg:     d.cfg,
		To:      []string{user.Email},
		Subject: subject,
		Data: map[string]interface{}{
			"Title":   "Verificar email",
			"Message": body,
		},
	}

	if err := sender.Send(); err != nil {
		return fmt.Errorf("could not send email: %w", asynq.SkipRetry)
	}

	log.Info().
		Str("task", TASK_SEND_VERIFY_EMAIL).
		Str("type", t.Type()).
		Bytes("payload", t.Payload()).
		Str("email", payload.Email).
		Msg("task processed")

	return nil

}
