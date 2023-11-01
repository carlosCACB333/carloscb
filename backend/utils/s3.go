package utils

import (
	"bytes"
	"context"
	"time"

	"github.com/carlosCACB333/cb-grpc/libs"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

func PutObject(bucket string, key string, file []byte, contentType string) error {

	// Get S3 Client
	s3Client := libs.GetS3Client()

	// Upload file
	_, err := s3Client.PutObject(context.TODO(), &s3.PutObjectInput{
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

func DeleteObject(bucket string, key string) error {

	// Get S3 Client
	s3Client := libs.GetS3Client()

	// Delete file
	_, err := s3Client.DeleteObject(context.TODO(), &s3.DeleteObjectInput{
		Bucket: aws.String(bucket),
		Key:    aws.String(key),
	})
	if err != nil {
		return err
	}

	return nil

}

func GetPresignUrl(bucket string, key string, contenType string) (string, error) {
	s3Client := libs.GetS3Client()
	presign := s3.NewPresignClient(s3Client)
	presignedUrl, err := presign.PresignGetObject(context.Background(),
		&s3.GetObjectInput{
			Bucket:                     aws.String(bucket),
			Key:                        aws.String(key),
			ResponseContentDisposition: aws.String("inline"),
			ResponseContentType:        aws.String(contenType),
		},
		s3.WithPresignExpires(time.Minute*5),
	)
	if err != nil {
		return "", err
	}
	return presignedUrl.URL, nil
}
