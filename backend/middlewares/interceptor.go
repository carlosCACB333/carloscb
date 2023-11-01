package mdw

import (
	"context"
	"time"

	"github.com/carlosCACB333/cb-grpc/libs"
	"github.com/carlosCACB333/cb-grpc/utils"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"

	"google.golang.org/grpc/status"
)

var (
	PUBLICMETHODS = map[string]bool{
		"/grpc.reflection.v1alpha.ServerReflection/ServerReflectionInfo": true,
		"/pb.AuthService/Login":                         true,
		"/pb.AuthService/Signup":                        true,
		"/pb.UserService/CreateOrUpdateUserWithoutAuth": true,
		"/pb.UserService/DeleteUserWithoutAuth":         true,
	}
)

type ServerStream struct {
	ss  grpc.ServerStream
	ctx context.Context
}

func (s *ServerStream) SetHeader(m metadata.MD) error  { return s.ss.SetHeader(m) }
func (s *ServerStream) SendHeader(m metadata.MD) error { return s.ss.SendHeader(m) }
func (s *ServerStream) SetTrailer(m metadata.MD)       { s.ss.SetTrailer(m) }
func (s *ServerStream) Context() context.Context       { return s.ctx }
func (s *ServerStream) SendMsg(m any) error            { return s.ss.SendMsg(m) }
func (s *ServerStream) RecvMsg(m any) error            { return s.ss.RecvMsg(m) }

type Interceptor struct {
	jwtManager *libs.JWTManager
}

func NewInterceptor(jwtManager *libs.JWTManager) *Interceptor {
	return &Interceptor{
		jwtManager: jwtManager,
	}
}

func (i *Interceptor) Unary() grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req interface{},
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler,
	) (interface{}, error) {
		start := time.Now()

		id, err := i.authorize(ctx, info.FullMethod)
		if err != nil {
			i.logger("GRPC", info.FullMethod, time.Since(start), err)
			return nil, err
		}
		newCtx := context.WithValue(ctx, utils.UID, id)
		resHandler, errHandler := handler(newCtx, req)

		i.logger("GRPC", info.FullMethod, time.Since(start), errHandler)

		return resHandler, errHandler
	}
}

func (i *Interceptor) Stream() grpc.StreamServerInterceptor {
	return func(
		srv interface{},
		stream grpc.ServerStream,
		info *grpc.StreamServerInfo,
		handler grpc.StreamHandler,
	) error {
		start := time.Now()

		id, err := i.authorize(stream.Context(), info.FullMethod)
		if err != nil {
			i.logger("GRPC", info.FullMethod, time.Since(start), err)
			return err
		}

		newCtx := context.WithValue(stream.Context(), utils.UID, id)

		errHandler := handler(srv, &ServerStream{stream, newCtx})

		i.logger("GRPC", info.FullMethod, time.Since(start), errHandler)

		return errHandler
	}
}

func (i *Interceptor) authorize(ctx context.Context, method string) (string, error) {
	if _, ok := PUBLICMETHODS[method]; ok {
		return "", nil
	}

	token := utils.GetBererAuth(ctx)
	if token == "" {
		return "", status.Error(codes.Unauthenticated, "No se ha enviado el token")
	}
	resulChain := make(chan string)

	go func() {
		resulChain <- i.validateClerkToken(token)
	}()
	go func() {
		resulChain <- i.validateJWTToken(token)
	}()

	var userID string
	for i := 0; i < 2; i++ {
		if userID = <-resulChain; userID != "" {
			break
		}
	}

	if userID == "" {
		return "", status.Error(codes.Unauthenticated, "Token invalido")
	}

	return userID, nil

}

func (i *Interceptor) validateJWTToken(token string) string {

	id, err := i.jwtManager.Validate(token)

	if err != nil {
		return ""
	}
	return id
}

func (i *Interceptor) validateClerkToken(token string) string {
	client := libs.ClerkClient()
	sessClaims, err := client.VerifyToken(token)
	if err != nil {
		return ""
	}
	ClerkUser, e := client.Users().Read(sessClaims.Claims.Subject)
	if e != nil || ClerkUser == nil {
		return ""
	}

	return ClerkUser.ID
}

func (i *Interceptor) logger(
	protocol string,
	method string,
	duration time.Duration,
	err error,

) {
	l := log.Info()
	if err != nil {
		l = log.Error().Err(err)
	}

	statusCode := codes.Unknown
	if st, ok := status.FromError(err); ok {
		statusCode = st.Code()
	}

	l.
		Str("protocol", protocol).
		Str("method", method).
		Str("duration", duration.String()).
		Int("status", int(statusCode)).
		Str("status_text", statusCode.String()).
		Msg("GRPC Request")
}
