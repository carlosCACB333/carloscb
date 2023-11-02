package utils

import "context"

func GetContext(ctx context.Context, query string, namespace string, topK int) (string, error) {
	embed, err := GetEmbddingsPDF(ctx, []string{query})
	if err != nil {
		return "", err
	}
	docs, err := GetTopkMachesFromPinecone(embed[0].Embedding, namespace, topK)
	if err != nil {
		return "", err
	}
	textJoined := ""
	for _, m := range docs.Matches {
		if m.Score > 0.7 {
			textJoined += " " + m.Metadata.Text
		}
	}

	return textJoined, nil
}
