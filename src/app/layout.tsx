import "@/styles/globals.css";
import "katex/dist/katex.min.css";
import { Metadata } from "next";
import { clsx } from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontRoboto } from "@/config/fonts";
import { Locale } from "@/generated/graphql";
import { Cmdk } from "@/components/common/cmdk";
import { getAuthor } from "@/action";
import { LayoutProps } from "@/interfaces";

export default async function RootLayout({
  children,
}: LayoutProps) {

  return (
    <html suppressHydrationWarning dir="ltr" lang="es">
      <head />
      <body
        className={clsx(
          "scroll overflow-x-clip antialiased min-h-screen bg-background",
          fontRoboto.className
        )}
      >
        <Providers
          themeProps={{ attribute: "class", defaultTheme: "dark" }}
        >
          {children}
          <Cmdk />
        </Providers>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const author = await getAuthor(Locale.Es);
  const authorName = author?.firstName + " " + author?.lastName;
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: authorName,
      template: `${authorName} | %s`,
    },
    description: author?.bio?.toString(),
    authors: [
      {
        name: authorName,
        url: "/",
      },
    ],
    keywords: author?.keywords || [],
    creator: authorName,

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
    openGraph: {
      type: "website",
      locale: "es_PE",
      siteName: "carloscb",
      title: authorName,
      description: author?.bio?.toString(),
      images: [
        {
          url: "/banner.png",
          width: 1540,
          height: 806,
          alt: authorName,
        },
      ],
    },
  };
}
