import { OpenAI } from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { ASSISTANT_CHAT_ID, OPENAI_API_KEY, STATUS } from '@/utils';
import { getContextWithoutAuth } from '@/grpc/chatpdf';
import { NextResponse } from 'next/server';


const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});


export async function POST(req: Request) {

  try {
    const { messages } = await req.json();
    const userMsg = messages.at(-1).content as string
    const res = await getContextWithoutAuth(ASSISTANT_CHAT_ID, userMsg)
    if (res.status !== STATUS.OK) {
      return NextResponse.json({ ...res }, { status: res.status })
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        {
          role: "system",
          content: `
          Eres el asistente de carlos responde las preguntas de acuerdo al contexto que se te proporcione.
          START CONTEXT BLOCK
          ${res.data?.context}
          END OF CONTEXT BLOCK
          Ten en cuenta el CONTEXT BLOCK que se te proporcione en una conversación. Si el contexto no proporciona la respuesta a la pregunta responde: "Lo siento, pero  no puedo enocntrar información para tu pregunta". No inventes nada que no se extraigas directamente del contexto
          `
        },
        ...messages

      ],
      max_tokens: 200,
      temperature: 0.2,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1,
    })

    const stream = OpenAIStream(response, {});
    return new StreamingTextResponse(stream)
  } catch (error: any) {
    if (error instanceof OpenAI.APIError) {
      const { name, status, headers, message } = error;
      return NextResponse.json({ name, status, headers, message }, { status });
    }
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }

}
