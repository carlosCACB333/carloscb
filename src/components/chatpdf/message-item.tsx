"use client"
import { deleteChatpdfMessage } from "@/grpc/chatpdf-messages";
import { formatDate } from "@/utils";
import { Message } from "ai/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React from "react";
import { MdClose } from "react-icons/md";

interface Props {
  message: Message;
}

export const MessageItem = ({ message }: Props) => {
  // create a message item
  const [isDeleting, setIsDeleting] = React.useState(false);
  const { refresh } = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    const res = await deleteChatpdfMessage(message.id);
    setIsDeleting(false);
    refresh()
  };
  return (
    <div
      className={clsx("flex my-2", {
        "justify-end": message.role === "user",
      })}
    >
      <div
        className={clsx("rounded-lg relative", {
          "bg-primary text-primary-foreground": message.role === "user",
          "bg-content1": message.role === "system",
        })}
      >

        <div className=" absolute top-0 right-0">
          <div className={
            clsx("cursor-pointer p-1", {
              "text-divider": isDeleting,
              "cursor-wait": isDeleting,
            })}
            onClick={handleDelete}
          ><MdClose /></div>
        </div>

        <div className="py-2 px-6 ">
          <p>{message.content}</p>
          <p className="text-tiny">{formatDate(message.createdAt!)}</p>
        </div>
      </div>
    </div >
  );
};
