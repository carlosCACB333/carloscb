
import { PDFViewer } from "@/components/chatpdf/PDFViewer";
import { Messages } from "@/components/chatpdf/messages";
import { getFileUrl } from "@/grpc/chatpdf";
import { getLastChatpdfMessages } from "@/grpc/chatpdf-messages";
import { PageProps } from "@/interfaces";
import { Message } from "ai/react";

export default async function ChatpdfDetail({ params }: PageProps) {
  const { data } = await getLastChatpdfMessages(params.id);
  const { data: url } = await getFileUrl(params.id);
  const initialMsg: Message[] =
    data?.map((msg) => ({
      id: msg.id,
      content: msg.content,
      role: msg.role as any,
      createdAt: new Date(msg.createdat.seconds * 1000),
    })) || [];

  return (
    <section className="flex-1 h-full lg:flex">
      <div className="h-full flex-1">
        <PDFViewer url={url} />
      </div>
      <div className="h-full w-full max-w-md">
        <Messages chatId={params.id} initialMessages={initialMsg} />
      </div>
    </section>
  );
}
