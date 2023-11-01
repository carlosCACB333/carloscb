package utils

type key int

const (
	UID                  key = iota
	MAX_CHATPDF_SIZE         = 100000
	USER_STATUS_ACTIVE       = "ACTIVE"
	USER_STATUS_INACTIVE     = "INACTIVE"
	USER_STATUS_PENDING      = "PENDING"
	USER_STATUS_BLOCKED      = "BLOCKED"
	USER_STATUS_DELETED      = "DELETED"
)
