"use client";

import { useState } from "react";
import Link from "next/link";
import type { Source } from "@/lib/theses";

interface Props {
  sources: Source[];
}

export function SourcesPanel({ sources }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="sticky top-8">
      <h2 className="font-mono font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">
        Sources ({sources.length})
      </h2>
      <div className="space-y-2">
        {sources.map((source) => (
          <div
            key={source.slug}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() =>
                setExpanded(expanded === source.slug ? null : source.slug)
              }
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between gap-2"
            >
              <span className="font-medium text-sm truncate">
                {source.title}
              </span>
              <svg
                className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
                  expanded === source.slug ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {expanded === source.slug && (
              <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                {source.date && (
                  <div className="text-xs text-gray-500 mb-2">
                    {source.date}
                  </div>
                )}
                <div className="text-sm text-gray-700 max-h-40 overflow-y-auto whitespace-pre-wrap mb-3">
                  {source.content.slice(0, 500)}
                  {source.content.length > 500 && "..."}
                </div>
                <Link
                  href={`/source/${encodeURIComponent(source.slug)}`}
                  className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                >
                  Read full source
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
