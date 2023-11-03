package utils

import (
	"bytes"
	"context"
	"time"

	"github.com/carlosCACB333/cb-grpc/libs"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

func PutObject(ctx context.Context, bucket string, key string, file []byte, contentType string) error {

	s3Client := libs.GetS3Client()
	_, err := s3Client.PutObject(ctx, &s3.PutObjectInput{
		Bucket: aws.String(bucket),
		Key:    aws.String(key),
		Body:   bytes.NewReader(file),
		Metadata: map[string]string{
			"Content-Type": contentType,
		},
	})
	if err != nil {
		return err
	}

	return nil

}

func DeleteObject(ctx context.Context, bucket string, key string) error {

	s3Client := libs.GetS3Client()
	_, err := s3Client.DeleteObject(ctx, &s3.DeleteObjectInput{
		Bucket: aws.String(bucket),
		Key:    aws.String(key),
	})
	return err
}

func GetPresignUrl(ctx context.Context, bucket string, key string, contenType string) (string, error) {
	s3Client := libs.GetS3Client()
	presign := s3.NewPresignClient(s3Client)
	presignedUrl, err := presign.PresignGetObject(ctx,
		&s3.GetObjectInput{
			Bucket:                     aws.String(bucket),
			Key:                        aws.String(key),
			ResponseContentDisposition: aws.String("inline"),
			ResponseContentType:        aws.String(contenType),
		},
		s3.WithPresignExpires(time.Minute*1),
	)
	if err != nil {
		return "", err
	}
	return presignedUrl.URL, nil
}
