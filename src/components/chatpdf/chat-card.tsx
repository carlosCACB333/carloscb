"use client";
import { deleteChatpdf } from "@/action/chatpdf";
import { Chatpdf } from "@/pb/chatpdf_pb";
import { FORM_INIT, formatDateFromObject } from "@/utils";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { includes } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFormState } from "react-dom";
import { SubmitButton } from "../common/submit-button";
import { MdClose } from "react-icons/md";

interface Props {
  chat: Chatpdf.AsObject;
}
export const ChatCard = ({ chat }: Props) => {
  const deleteChatpdfWithId = deleteChatpdf.bind(null, chat.id);
  const [state, dispatch] = useFormState(deleteChatpdfWithId, FORM_INIT);
  const pathname = usePathname();

  return (
    <Link
      data-active={includes(pathname, chat.id)}
      className={clsx(
        "rounded-lg p-4 bg-content1 flex justify-between items-center",
        "hover:opacity-80 cursor-pointer data-[active=true]:text-primary"
      )}
      href={`/ia/chat-pdf/${chat.id}`}
    >
      <div>
        <h3 className="font-bold">{chat.name}</h3>
        <p className="text-tiny">{formatDateFromObject(chat.createdat)}</p>
      </div>

      <form action={dispatch}>
        <SubmitButton size="sm" isIconOnly>
          <MdClose />
        </SubmitButton>
      </form>
    </Link>
  );
};
