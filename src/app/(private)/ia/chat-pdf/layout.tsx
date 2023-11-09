import { DropFile } from "@/components/chatpdf/drop-file";
import { Footer } from "@/components/common/footer";
import { LayoutProps } from "@/interfaces";
import clsx from "clsx";
import React from "react";
import { getpGetAllChatpdfs } from "@/grpc/chatpdf";
import { ChatCard } from "@/components/chatpdf/chat-card";
import { Metadata, ResolvingMetadata } from "next";

const IALayout = async ({ children }: LayoutProps) => {
  const data = await getpGetAllChatpdfs();

  return (
    <main className="lg:h-[calc(100vh-4rem)] flex flex-col gap-2 lg:flex-row">
      <aside
        className={clsx(
          "rounded-lg max-w-sm w-full scroll overflow-y-auto relative",
          "px-4 flex flex-col gap-2"
        )}
      >
        <header className="sticky top-0 bg-background z-10">
          <br />
          <h2 className="text-2xl">Tus pdfs</h2>
          <DropFile />
          <br />
        </header>
        <div className="flex flex-1 flex-col gap-2 h-full">
          {data?.data?.map((chat) => {
            return <ChatCard key={chat.id} chat={chat} />;
          })}
        </div>
        <div className="hidden lg:block sticky bottom-0 bg-background z-10 py-4">
          <Footer />
        </div>
      </aside>

      {children}
    </main>
  );
};

export default IALayout;

export async function generateMetadata(
  {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMeta = await parent;
  const { openGraph } = parentMeta;
  return {
    title: {
      default: "Chat-pdf",
      template: "Chat-pdf | %s",
    },
    description:
      "Chatea directamente con una inteligencia artificial sobre tus pdfs",
    openGraph: {
      title: "chat-pdf",
      description:
        "Chatea directamente con una inteligencia artificial sobre tus pdfs",
      images: openGraph?.images,
      type: "website",
    },
  };
}
