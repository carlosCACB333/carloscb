package utils

import (
	"context"

	"github.com/carlosCACB333/cb-grpc/libs"

	openai "github.com/sashabaranov/go-openai"
)

func GetEmbddingsPDF(ctx context.Context, texts []string) ([]openai.Embedding, error) {
	oia := libs.OpenIA()
	emb, err := oia.CreateEmbeddings(ctx, openai.EmbeddingRequest{
		Input: texts,
		Model: openai.AdaEmbeddingV2,
	})
	if err != nil {
		return nil, err
	}
	return emb.Data, nil
}
