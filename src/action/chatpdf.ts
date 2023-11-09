"use server";

import { grpcDeleteChatpdf } from "@/grpc/chatpdf";
import { grpcClearChatpdfMessage } from "@/grpc/chatpdf-messages";
import { FormState } from "@/interfaces";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteChatpdf = async (id: string): Promise<FormState<null>> => {
  const res = await grpcDeleteChatpdf(id);
  revalidatePath("/ia/chat-pdf", "layout");
  return {
    status: res.status,
    message: res.message,
    errors: null,
  };
};

export const clearChatpdfMessage = async (id: string) => {
  return grpcClearChatpdfMessage(id);
};
