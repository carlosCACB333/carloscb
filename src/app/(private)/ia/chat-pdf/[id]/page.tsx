import Loading from "@/app/loading";
import { ChatpdfMessages } from "@/components/chatpdf/chatpdf-messages";
import { ChatpdfViewer } from "@/components/chatpdf/chatpdf-viewer";
import { PageProps } from "@/interfaces";
import { Suspense } from "react";

export default async function ChatpdfDetail({ params }: PageProps) {
  return (
    <section className="flex-1 h-full lg:flex">
      <div className="h-full flex-1 px-4">
        <Suspense fallback={<Loading />}>
          <ChatpdfViewer id={params.id} />
        </Suspense>
      </div>
      <div className="h-full w-full max-w-md">
        <Suspense fallback={<Loading />}>
          <ChatpdfMessages id={params.id} />
        </Suspense>
      </div>
    </section>
  );
}
