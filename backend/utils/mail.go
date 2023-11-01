package utils

import (
	"bytes"
	"fmt"
	"html/template"
	"net/smtp"
)

// EmailSender struct
type EmailSender struct {
	To       []string
	Subject  string
	Cfg      *Config
	Data     map[string]any
	Template string
}

func (s *EmailSender) Send() error {

	// smtp server configuration.
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"

	// Authentication.
	auth := smtp.PlainAuth("", s.Cfg.EmailUser, s.Cfg.EmailPass, smtpHost)
	if s.Template == "" {
		s.Template = "views/generic-email.html"
	}
	t, _ := template.ParseFiles(s.Template)

	var body bytes.Buffer

	mimeHeaders := "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\n\n"
	body.Write([]byte(fmt.Sprintf("Subject: %s \n%s\n\n", s.Subject, mimeHeaders)))

	t.Execute(&body, s.Data)

	// Sending email.
	return smtp.SendMail(smtpHost+":"+smtpPort, auth, s.Cfg.EmailUser, s.To, body.Bytes())

}
