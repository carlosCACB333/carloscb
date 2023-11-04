import { OpenAI } from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { OPENAI_API_KEY } from "@/utils";
import { grpcCreateChatpdfMessage } from "@/grpc/chatpdf-messages";
import { grpcGetContext } from "@/grpc/chatpdf";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages, chatId } = await req.json();
  const userMsg = messages.at(-1).content as string;
  const { data } = await grpcGetContext(chatId, userMsg);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: `
          Eres un asitente y responde las preguntas de acuerdo al contexto que se te proporcione.
          START CONTEXT BLOCK
          ${data?.context}
          END OF CONTEXT BLOCK
          Ten en cuenta el CONTEXT BLOCK que se te proporcione en una conversación. Si el contexto no proporciona la respuesta a la pregunta responde: "Lo siento, pero  no puedo enocntrar información para tu pregunta". No inventes nada que no se extraigas directamente del contexto
          `,
      },
      ...messages,
    ],
    max_tokens: 200,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  const stream = OpenAIStream(response, {
    onStart: async () => {
      // save user message
      grpcCreateChatpdfMessage(chatId, userMsg, "user");
    },
    onCompletion: async (message) => {
      // save IA message
      grpcCreateChatpdfMessage(chatId, message, "assistant");
    },
  });
  return new StreamingTextResponse(stream);
}
