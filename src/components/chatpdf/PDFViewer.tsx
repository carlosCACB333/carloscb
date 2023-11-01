
import { FC } from "react";

interface Props {
  url?: string;
}
export const PDFViewer: FC<Props> = ({ url }) => {

  if (!url) return null;

  return (
    <iframe
      className="h-full w-full"
      title="Tu PDF"
      src={url}
      content="application/pdf"
    ></iframe>
  );
};
