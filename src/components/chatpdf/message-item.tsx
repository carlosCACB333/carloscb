import { formatDate } from "@/utils";
import { Message } from "ai/react";
import clsx from "clsx";
import React from "react";

interface Props {
  message: Message;
}

export const MessageItem = ({ message }: Props) => {
  return (
    <div
      className={clsx("flex my-2", {
        "justify-end": message.role === "user",
      })}
    >
      <div
        className={clsx("rounded-lg px-4 py-2", {
          "bg-primary text-primary-foreground": message.role === "user",
          "bg-content1": message.role === "system",
        })}
      >
        <p>{message.content}</p>
        <p className="text-tiny">{formatDate(message.createdAt!)}</p>
      </div>
    </div>
  );
};
