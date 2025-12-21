"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

interface Props {
  content: string;
}

export function SourceContent({ content }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) => {
          if (href?.startsWith("/")) {
            return (
              <Link href={href} className="text-accent hover:underline">
                {children}
              </Link>
            );
          }
          return (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {children}
            </a>
          );
        },
        table: ({ children }) => (
          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">{children}</table>
          </div>
        ),
        th: ({ children }) => (
          <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left text-sm font-semibold">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-gray-300 px-4 py-2 text-sm">
            {children}
          </td>
        ),
        code: ({ className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          const isInline = !match && !className;

          if (isInline) {
            return (
              <code
                className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            );
          }

          return (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-accent pl-4 italic text-gray-700 my-4">
            {children}
          </blockquote>
        ),
        h1: ({ children }) => (
          <h1 className="text-2xl font-bold font-mono mt-8 mb-4">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-bold font-mono mt-6 mb-3">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-bold font-mono mt-4 mb-2">{children}</h3>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside my-4 space-y-1">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside my-4 space-y-1">{children}</ol>
        ),
        p: ({ children }) => (
          <p className="my-3 leading-relaxed">{children}</p>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
