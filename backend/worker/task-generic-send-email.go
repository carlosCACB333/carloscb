package worker

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/carlosCACB333/cb-grpc/utils"
	"github.com/hibiken/asynq"
	"github.com/rs/zerolog/log"
)

const (
	TASK_GENERIC_SEND_EMAILS = "[TASK] SEND_GENERIC_EMAILS"
)

type PayloadGenericSendEmails struct {
	Emails  []string `json:"emails"`
	Subject string   `json:"subject"`
	Body    string   `json:"body"`
}

func (d *RedisTaskDistributor) DistributeTaskGenericSendEmails(
	ctx context.Context,
	payload *PayloadGenericSendEmails,
	opts ...asynq.Option,
) error {
	jsonPayload, err := json.Marshal(payload)
	if err != nil {
		return err
	}

	task := asynq.NewTask(TASK_GENERIC_SEND_EMAILS, jsonPayload, opts...)
	info, err := d.client.EnqueueContext(ctx, task)
	if err != nil {
		return err
	}
	log.Info().
		Str("task", TASK_GENERIC_SEND_EMAILS).
		Str("id", info.ID).
		Str("type", info.Type).
		Bytes("payload", info.Payload).
		Str("queue", info.Queue).
		Int("max retry", info.MaxRetry).
		Msg("task enqueued")
	return nil
}

func (d *RedisTaskProcessor) ProcessTaskGenericSendEmails(ctx context.Context, t *asynq.Task) error {

	var payload PayloadGenericSendEmails
	if err := json.Unmarshal(t.Payload(), &payload); err != nil {
		return fmt.Errorf("could not unmarshal payload: %w", asynq.SkipRetry)
	}

	// TODO: send email

	sender := utils.EmailSender{
		Cfg:     d.cfg,
		To:      payload.Emails,
		Subject: payload.Subject,
		Data: map[string]any{
			"Title":   "Nuevo mensaje",
			"Message": payload.Body,
		},
	}
	if err := sender.Send(); err != nil {
		return fmt.Errorf("could not send email: %w", asynq.SkipRetry)
	}

	log.Info().
		Str("task", TASK_SEND_VERIFY_EMAIL).
		Str("type", t.Type()).
		Bytes("payload", t.Payload()).
		Msg("task processed")
	return nil

}
