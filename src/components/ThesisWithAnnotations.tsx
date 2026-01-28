"use client";

import { useRef, useState, useCallback } from "react";
import { ThesisContent } from "./ThesisContent";
import { SelectionToolbar } from "./SelectionToolbar";
import { AnnotationPopover } from "./AnnotationPopover";

interface Props {
  content: string;
  thesisTitle: string;
  thesisSlug: string;
}

export function ThesisWithAnnotations({ content, thesisTitle, thesisSlug }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [popover, setPopover] = useState<{
    show: boolean;
    selectedText: string;
    position: { x: number; y: number };
  } | null>(null);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleComment = useCallback((text: string, position: { x: number; y: number }) => {
    setPopover({ show: true, selectedText: text, position });
  }, []);

  const handleSubmit = async (content: string, selectedText: string, email?: string) => {
    setSending(true);

    try {
      const response = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          thesis: thesisTitle,
          suggestion: `**Comment**\n\n**On text:** "${selectedText}"\n\n**Comment:** ${content}`,
          email,
        }),
      });

      if (response.ok) {
        setToast("Comment sent!");
        setTimeout(() => setToast(null), 3000);
      } else {
        setToast("Failed to send. Try again.");
        setTimeout(() => setToast(null), 3000);
      }
    } catch (error) {
      console.error("Failed to submit:", error);
      setToast("Failed to send. Try again.");
      setTimeout(() => setToast(null), 3000);
    } finally {
      setSending(false);
      setPopover(null);
    }
  };

  return (
    <div className="relative">
      {/* Main content */}
      <div ref={containerRef as React.RefObject<HTMLDivElement>} className="prose max-w-none">
        <ThesisContent content={content} />
      </div>

      {/* Selection toolbar */}
      <SelectionToolbar
        containerRef={containerRef as React.RefObject<HTMLElement>}
        onComment={handleComment}
      />

      {/* Annotation popover */}
      {popover?.show && (
        <AnnotationPopover
          selectedText={popover.selectedText}
          position={popover.position}
          thesisTitle={thesisTitle}
          onClose={() => setPopover(null)}
          onSubmit={handleSubmit}
          isLoading={sending}
        />
      )}

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50">
          {toast}
        </div>
      )}
    </div>
  );
}
