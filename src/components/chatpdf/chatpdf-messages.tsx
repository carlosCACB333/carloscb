import { grpcGetLastChatpdfMessages } from "@/grpc/chatpdf-messages";
import { Message } from "ai/react";
import { notFound } from "next/navigation";
import { Messages } from "./messages";

interface Props {
  id: string;
}
export const ChatpdfMessages = async ({ id }: Props) => {
  const { data } = await grpcGetLastChatpdfMessages(id);
  if (!data) return notFound();
  const initialMsg: Message[] =
    data.map((msg) => ({
      id: msg.id,
      content: msg.content,
      role: msg.role as any,
      createdAt: new Date(msg.createdat.seconds * 1000),
    })) || [];

  const sorted = initialMsg.sort((a, b) => {
    if (a.createdAt! < b.createdAt!) return -1;
    if (a.createdAt! > b.createdAt!) return 1;
    return 0;
  });

  return <Messages chatId={id} initialMessages={sorted} />;
};
