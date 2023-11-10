"use client";
import { Code } from "@nextui-org/code";
import { Link } from "@nextui-org/link";
import { clsx } from "@nextui-org/shared-utils";
import { Snippet } from "@nextui-org/snippet";
import { Language } from "prism-react-renderer";
import { FC, HTMLAttributes } from "react";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkUnwrapImages from "remark-unwrap-images";
import { Blockquote } from "../common/blockquote";
import Codeblock from "../common/codeblock";
import { VirtualAnchor, virtualAnchorEncode } from "../common/virtual-anchor";

export interface LinkedHeadingProps extends HTMLAttributes<HTMLHeadElement> {
  as: keyof JSX.IntrinsicElements;
  linked?: boolean;
}

const linkedLevels: Record<string, number> = {
  h1: 0,
  h2: 1,
  h3: 2,
  h4: 3,
};

const LinkedHeading: React.FC<LinkedHeadingProps> = ({
  as,
  linked = true,
  id: idProp,
  className,
  children,
}) => {
  const Component = as;

  const level = linkedLevels[as] || 1;

  let id = idProp || virtualAnchorEncode(children as string);

  return (
    <Component
      className={clsx({ "linked-heading": linked }, linked ? {} : className, {
        "text-2xl mt-6": level === 1,
        "text-xl mt-5": level === 2,
        "text-lg mt-4": level === 3,
        "text-base mt-3": level === 4,
      })}
      data-id={id}
      data-level={level}
      data-name={children}
      id={id}
    >
      {linked ? (
        <VirtualAnchor id={id}>{children}</VirtualAnchor>
      ) : (
        <>{children}</>
      )}
    </Component>
  );
};

const InlineCode = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Code color="primary" size="sm">
      {children}
    </Code>
  );
};

const CodeComponent = ({
  className,
  children,
  meta,
}: {
  children?: React.ReactNode;
  className?: string;
  meta?: string;
}) => {
  const isMultiLine = (children as string)?.split?.("\n")?.length > 2;
  const language = (className?.replace(/language-/, "") ?? "jsx") as Language;
  const codeString = String(children).trim();

  if (!className) {
    return <InlineCode>{children}</InlineCode>;
  }

  return (
    <Snippet
      disableTooltip
      fullWidth
      hideSymbol
      classNames={{
        base: clsx(
          "px-0 bg-content2 my-4",
          {
            "items-start": isMultiLine,
          },
          className
        ),
        pre: "font-light w-full text-sm",
        copyButton: "text-lg text-zinc-500 mr-2",
      }}
      codeString={codeString}
    >
      <Codeblock
        codeString={codeString}
        language={language}
        metastring={meta}
      />
    </Snippet>
  );
};

const LinkComponent = ({
  href,
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) => {
  const isExternal = href?.startsWith("http");

  return (
    <Link href={href} isExternal={isExternal} showAnchorIcon={isExternal}>
      {children}
    </Link>
  );
};

export const MDXContent: FC<{ children?: string }> = ({ children }) => {
  return (
    <Markdown
      remarkPlugins={[remarkBreaks, remarkUnwrapImages, remarkMath, remarkGfm]}
      rehypePlugins={[rehypeSlug, rehypeKatex]}
      components={{
        h1: ({ ...props }) => (
          <LinkedHeading as="h1" linked={false} {...props} />
        ),
        h2: ({ ...props }) => <LinkedHeading as="h2" {...props} />,
        h3: ({ ...props }) => <LinkedHeading as="h3" {...props} />,
        h4: ({ ...props }) => <LinkedHeading as="h4" {...props} />,
        strong: ({ ...props }) => <strong {...props} />,
        table: ({ className, ...props }) => (
          <table
            className={"border-collapse border-spacing-0 w-full " + className}
            {...props}
          />
        ),
        thead: ({ className, ...props }) => (
          <thead
            className={clsx(
              "[&>tr]:h-12",
              "[&>tr>th]:py-0",
              "[&>tr>th]:align-middle",
              "[&>tr>th]:bg-default-400/20",
              "dark:[&>tr>th]:bg-default-600/10",
              "[&>tr>th]:text-default-600 [&>tr>th]:text-xs",
              "[&>tr>th]:text-left [&>tr>th]:pl-2",
              "[&>tr>th:first-child]:rounded-l-lg",
              "[&>tr>th:last-child]:rounded-r-lg",
              className
            )}
            {...props}
          />
        ),

        tr: ({ className, ...props }) => (
          <tr
            className={clsx(
              "[&>td]:border-b border-default-100 dark:[&>td]:border-default-600/10",
              className
            )}
            {...props}
          />
        ),

        td: ({ className, ...props }) => (
          <td
            className={clsx(
              "text-sm p-2 max-w-[200px] overflow-auto whitespace-normal break-normal",
              className
            )}
            {...props}
          />
        ),

        code: ({ children, className }) => (
          <CodeComponent className={className}>{children}</CodeComponent>
        ),
        ul: ({ className, ...props }) => (
          <ul
            className={clsx(`ml-4 [&>li>strong]:text-cyan-600`, className)}
            {...props}
          />
        ),
        ol: ({ className, ...props }) => (
          <ul
            className={clsx(`ml-4 [&>li>strong]:text-cyan-600`, className)}
            {...props}
          />
        ),

        li: ({ className, ...props }) => (
          <li
            className={clsx(
              "relative",
              "before:absolute before:content[''] before:bg-cyan-600 before:inline-block ",
              "before:w-1.5  before:h-1.5 before:rounded-full before:mr-1 before:self-center",
              "before:right-full before:top-2.5",
              className
            )}
            {...props}
          />
        ),
        a: ({ ...props }) => <LinkComponent {...props} />,
        blockquote: ({ ...props }) => (
          <Blockquote color={"primary" as any} {...props} />
        ),
      }}
    >
      {children}
    </Markdown>
  );
};
