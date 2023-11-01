package utils

import (
	"bytes"
	"context"

	"github.com/tmc/langchaingo/documentloaders"
	"github.com/tmc/langchaingo/schema"
	"github.com/tmc/langchaingo/textsplitter"
)

func GetContentPDF(b []byte, size int64) []schema.Document {

	f := bytes.NewReader(b)
	pdf := documentloaders.NewPDF(f, size)
	doc, err := pdf.LoadAndSplit(context.TODO(), textsplitter.RecursiveCharacter{
		Separators: []string{"\n\n", "\n", " ", ""},
		ChunkSize:  200,
	})
	if err != nil {
		return nil
	}
	return doc
}
