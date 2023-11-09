"use client";

import React, { useEffect, useState } from "react";
import { Message, useChat } from "ai/react";
import { Button, Input } from "@nextui-org/react";
import { clearChatpdfMessage } from "@/action/chatpdf";
import { STATUS } from "@/utils";
import { BootMessageItem } from "./boot-message-item";
import { BiSend } from "react-icons/bi";

interface Props {
  chatId: string;
  initialMessages: Message[];
}
export const Messages = ({ chatId, initialMessages }: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const {
    input,
    handleInputChange,
    handleSubmit,
    messages,
    isLoading,
    setMessages,
  } = useChat({
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

  const handleDelete = async () => {
    setIsDeleting(true);
    const res = await clearChatpdfMessage(chatId);
    if (res.status === STATUS.OK) {
      setMessages([]);
    }
    setIsDeleting(false);
  };

  return (
    <div
      ref={containerRef}
      className="h-[inherit] scroll overflow-y-auto relative px-4 flex flex-col gap-2"
    >
      <header className="sticky top-0 bg-background p-4">
        <h2 className="text-lg font-bold text-center">Tus conversaciones</h2>
      </header>

      <main className="flex-1">
        {messages?.map((m, i) => {
          return (
            <BootMessageItem
              key={m.id}
              message={m}
              isTyping={isLoading && i === messages.length - 1}
            />
          );
        })}

        <div className="my-8 px-6 ">
          {messages?.length > 0 && (
            <Button
              fullWidth
              variant="light"
              color="danger"
              onClick={handleDelete}
              isLoading={isDeleting}
            >
              Limpiar chat
            </Button>
          )}
        </div>
      </main>

      <footer className="sticky bottom-0 bg-background">
        <form onSubmit={handleSubmit}>
          <Input
            aria-label="Input de chatbot"
            value={input}
            onChange={handleInputChange}
            size="lg"
            placeholder="¿Qué quieres saber...?"
            width="100%"
            variant="underlined"
            autoComplete="off"
            endContent={
              <Button
                isIconOnly
                radius="full"
                className="text-xl text-foreground"
                size="sm"
                type="submit"
                aria-label="Enviar mensaje"
                disabled={input === "" || isLoading}
                isLoading={isLoading}
              >
                <BiSend />
              </Button>
            }
          />
        </form>
      </footer>
    </div>
  );
};
