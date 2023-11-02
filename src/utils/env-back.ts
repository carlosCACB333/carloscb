
export const ALLOWED_LOCALES = ["es", "en"];
export const AUTHOR_EMAIL = process.env.EMAIL_USER || "";
export const GRAPHCMS_URL = process.env.GRAPHCMS_URL || "";
export const GRAPHCMS_TOKEN = process.env.GRAPHCMS_TOKEN || "";
export const __PROD__ = process.env.NODE_ENV === "production";
export const GRPC_URL = process.env.BACK_HOST + ":" + process.env.GRPC_PORT
export const SITE_URL = process.env.SITE_URL || "";
export const REVALIDATE = +(process.env.REVALIDATE || 60);
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
export const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET!
export const ASSISTANT_CHAT_ID = process.env.ASSISTANT_CHAT_ID!

