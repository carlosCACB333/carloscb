package utils

import (
	"os"
	"strconv"
	"time"
)

type Config struct {
	Environment          string
	HttpPort             string
	GrpcPort             string
	DBUrl                string
	AccessTokenDuration  time.Duration
	RefreshTokenDuration time.Duration
	JWTSecret            string
	RedisAddr            string
	EmailUser            string
	EmailPass            string
	
}

func LoadConfig() (*Config, error) {
	AccessTokenDuration, err := strconv.Atoi(os.Getenv("ACCESS_TOKEN_DURATION"))
	if err != nil {
		return nil, err
	}

	RefreshTokenDuration, err := strconv.Atoi(os.Getenv("REFRESH_TOKEN_DURATION"))
	if err != nil {
		return nil, err
	}

	c := &Config{
		Environment:          os.Getenv("STAGE"),
		HttpPort:             os.Getenv("HTTP_PORT"),
		GrpcPort:             os.Getenv("GRPC_PORT"),
		DBUrl:                os.Getenv("DB_URl"),
		AccessTokenDuration:  time.Duration(AccessTokenDuration) * time.Hour,
		RefreshTokenDuration: time.Duration(RefreshTokenDuration) * time.Hour,
		JWTSecret:            os.Getenv("JWT_SECRET"),
		RedisAddr:            os.Getenv("REDIS_HOST")+":"+os.Getenv("REDIS_PORT"),
		EmailUser:            os.Getenv("AUTHOR_EMAIL"),
		EmailPass:            os.Getenv("AUTHOR_EMAIL_PASS"),
		
	}

	return c, nil
}
