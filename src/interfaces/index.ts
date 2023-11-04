export * from "./contact";
export * from "./chatpdf";

import { Locale } from "@/generated/graphql";
import { STATUS } from "@/utils";

export interface PageProps {
  params: {
    locale: Locale;
    [key: string]: string;
  };
  searchParams: { [key: string]: string };
}

export interface LayoutProps {
  params: {
    locale: Locale;
    [key: string]: string;
  };
  children: React.ReactNode;
}

export interface Toc {
  title: string;
  url: string;
  children: { title: string; url: string }[];
}

export interface SearchResultItem {
  content: string;
  objectID: string;
  url: string;
  type: "lvl1" | "lvl2" | "lvl3";
  hierarchy: {
    lvl1: string | null;
    lvl2?: string | null;
    lvl3?: string | null;
  };
}

export interface Route {
  key: string;
  title: string;
  path: string;
}

export interface Response<T> {
  data?: T;
  status: number;
  message: string;
  [key: string]: any;
}

export type GPTRole = "function" | "system" | "user" | "assistant";

export interface FormState<T> {
  status: STATUS;
  message: string;
  errors:
    | {
        [key in keyof T]?: string[] | undefined;
      }
    | null;
}
