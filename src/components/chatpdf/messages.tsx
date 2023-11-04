"use client";

import React, { useEffect } from "react";
import { Message, useChat } from "ai/react";
import { CircularProgress, Input } from "@nextui-org/react";
import { MessageItem } from "./message-item";
import { SubmitButton } from "../common/submit-button";
import { clearChatpdfMessage } from "@/action/chatpdf";

interface Props {
  chatId: string;
  initialMessages: Message[];
}
export const Messages = ({ chatId, initialMessages }: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const clearChatpdfMessageWithId = clearChatpdfMessage.bind(null, chatId);

  const { input, handleInputChange, handleSubmit, messages, isLoading } =
    useChat({
      initialMessages,
      api: "/api/boot",
      body: {
        chatId,
      },
    });

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="h-[inherit] scroll overflow-y-auto relative px-4 flex flex-col gap-2"
    >
      <header className="sticky top-0 bg-background">
        <h2 className="text-lg font-bold text-center">Tus conversaciones</h2>
      </header>

      <main className="flex-1">
        {messages?.map((message) => {
          return <MessageItem key={message.id} message={message} />;
        })}
        {isLoading && (
          <div className="flex justify-center">
            <CircularProgress size="sm" />
          </div>
        )}
        {messages?.length > 0 && (
          <form
            className="mt-4 flex justify-center"
            action={clearChatpdfMessageWithId}
          >
            <SubmitButton variant="flat" color="danger">
              Limpiar chat
            </SubmitButton>
          </form>
        )}
      </main>

      <footer className="sticky bottom-0 bg-background">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            size="lg"
            value={input}
            onChange={handleInputChange}
            variant="underlined"
            placeholder="¿Qué quieres saber...?"
            aria-label="input de mensaje para el chatbot"
          />
        </form>
      </footer>
    </div>
  );
};
