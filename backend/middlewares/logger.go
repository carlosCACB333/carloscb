package mdw

import (
	"net/http"
	"time"

	"github.com/rs/zerolog/log"
)

type ResponseW struct {
	http.ResponseWriter
	Status int
	Body   []byte
}

func (r *ResponseW) WriteHeader(status int) {
	r.Status = status
	r.ResponseWriter.WriteHeader(status)
}

func (r *ResponseW) Write(b []byte) (int, error) {
	r.Body = b
	return r.ResponseWriter.Write(b)
}

func HttpLogger(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		startTime := time.Now()
		rw := &ResponseW{
			ResponseWriter: w,
			Status:         http.StatusOK,
		}
		handler.ServeHTTP(rw, r)
		endTime := time.Now()

		duration := endTime.Sub(startTime)

		l := log.Info()

		if rw.Status != http.StatusOK {
			l = log.Error().Bytes("body", rw.Body)
		}

		l.
			Str("protocol", "HTTP").
			Str("method", r.Method).
			Str("path", r.URL.Path).
			Str("duration", duration.String()).
			Int("status", rw.Status).
			Str("status_text", http.StatusText(rw.Status)).
			Msg("HTTP Request")
	})
}
