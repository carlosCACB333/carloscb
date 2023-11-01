package libs

import (
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type JWTManager struct {
	Secret   string
	Duration time.Duration
}

func NewJWTManager(secret string, duration time.Duration) *JWTManager {
	return &JWTManager{
		Secret:   secret,
		Duration: duration,
	}
}

func (m *JWTManager) Generate(ID string) (string, time.Time, error) {
	exp := time.Now().Add(m.Duration)
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"id":  ID,
		"exp": exp.Unix(),
	})

	token, err := claims.SignedString([]byte(m.Secret))
	if err != nil {
		return "", exp, err
	}
	return token, exp, nil
}

func (m *JWTManager) Validate(token string) (string, error) {
	claims := jwt.MapClaims{}
	_, err := jwt.ParseWithClaims(token, claims, func(token *jwt.Token) (interface{}, error) {
		return []byte(m.Secret), nil
	})
	if err != nil {
		return "", err
	}
	userID := claims["id"]
	if userID == nil {
		return "", err
	}

	return userID.(string), nil
}
