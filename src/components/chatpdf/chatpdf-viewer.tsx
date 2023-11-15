import { grpcGetFileUrl } from "@/grpc/chatpdf";
import { FC } from "react";

interface Props {
  id: string;
}
export const ChatpdfViewer: FC<Props> = async ({ id }) => {
  const { data: url } = await grpcGetFileUrl(id);
  if (!url) return null;

  return (
    <iframe
      className="h-full w-full min-h-[60vh]"
      title="Tu PDF"
      src={url}
      content="application/pdf"
    ></iframe>
  );
};
