import { LayoutProps } from "@/interfaces";
import { Metadata } from "next";

const IALayout = ({ children }: LayoutProps) => {
  return <div className="">{children}</div>;
};

export default IALayout;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "IA",
      template: `IA | %s`,
    },
    keywords: [
      "ia",
      "inteligencia artificial",
      "chat",
      "pdf",
      "chat-pdf",
      "openai",
      "gpt-3",
    ],
    openGraph: {
      type: "website",
      title: "IA",
      description: "Aquí encontrarás la inteligencia artificial que necesitas",
      locale: "es_PE",
      siteName: "carloscb",
      images: [
        {
          url: "/ia.webp",
          width: 464,
          height: 488,
          alt: "IA",
        },
      ],
    },
  };
}
