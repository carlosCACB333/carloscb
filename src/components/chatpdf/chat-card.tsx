"use client";

import { deleteChatpdf } from "@/grpc/chatpdf";
import { Chatpdf } from "@/pb/chatpdf_pb";
import { STATUS, formatDateFromObject } from "@/utils";
import { Button, Card, CardBody, CircularProgress } from "@nextui-org/react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import { util } from "zod";

interface Props {
  chat: Chatpdf.AsObject;
}
export const ChatCard: FC<Props> = ({ chat }) => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const { push, refresh, replace, } = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    const res = await deleteChatpdf(chat.id);
    setIsDeleting(false);
    if (res.status !== STATUS.OK) {
      toast.error(res.message);
      return;
    }
    toast.success(res.message);
    refresh();
    if (id === chat.id) {
      replace(`/ia/chat-pdf`, {});
    }
  };


  return (
    <Card
      key={chat.id}
      className={clsx("hover:opacity-80 cursor-pointer", {
        "bg-primary-900 dark:bg-primary-200": id === chat.id,
      })}
    >
      <CardBody
        className="relative"
        onClick={() => {
          push(`/ia/chat-pdf/${chat.id}`);
        }}
      >
        <h3 className="font-bold">{chat.name}</h3>
        <p className="text-tiny">{formatDateFromObject(chat.createdat)}</p>

        <Button
          className="absolute top-0 right-0"
          isIconOnly
          variant="light"
          onClick={handleDelete}
          disabled={isDeleting}
          aria-label="Eliminar"
        >
          {isDeleting ? <CircularProgress size="sm" /> : <MdClose />}
        </Button>
      </CardBody>
    </Card>
  );
};
