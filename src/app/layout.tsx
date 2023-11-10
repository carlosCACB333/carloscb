import { getAuthor } from "@/action";
import { Cmdk } from "@/components/common/cmdk";
import { fontRoboto } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Locale } from "@/generated/graphql";
import { LayoutProps } from "@/interfaces";
import "@/styles/globals.css";
import { clsx } from "clsx";
import "katex/dist/katex.min.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html suppressHydrationWarning dir="ltr" lang="es">
      <head />
      <body
        className={clsx(
          "scroll overflow-x-clip antialiased min-h-screen bg-background",
          fontRoboto.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fbff" },
    { media: "(prefers-color-scheme: dark)", color: "#07090e" },
  ],
};
