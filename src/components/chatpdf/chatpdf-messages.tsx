import { getLastChatpdfMessages } from "@/grpc/chatpdf-messages";
import { Messages } from "./messages";
import { Message } from "ai/react";

interface Props {
  id: string;
}
export const ChatpdfMessages = async ({ id }: Props) => {
  const { data } = await getLastChatpdfMessages(id);
  const initialMsg: Message[] =
    data?.map((msg) => ({
      id: msg.id,
      content: msg.content,
      role: msg.role as any,
      createdAt: new Date(msg.createdat.seconds * 1000),
    })) || [];

  return <Messages chatId={id} initialMessages={initialMsg} />;
};
