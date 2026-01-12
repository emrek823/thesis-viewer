"use client";

import { useRef, useState, useCallback } from "react";
import { ThesisContent } from "./ThesisContent";
import { SelectionToolbar } from "./SelectionToolbar";
import { AnnotationPopover } from "./AnnotationPopover";

interface Annotation {
  id: string;
  selectedText: string;
  content: string;
  mode: "comment" | "suggest";
  position: { x: number; y: number };
}

interface Props {
  content: string;
  thesisTitle: string;
  thesisSlug: string;
}

export function ThesisWithAnnotations({ content, thesisTitle, thesisSlug }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [popover, setPopover] = useState<{
    show: boolean;
    mode: "comment" | "suggest";
    selectedText: string;
    position: { x: number; y: number };
  } | null>(null);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleComment = useCallback((text: string, position: { x: number; y: number }) => {
    setPopover({ show: true, mode: "comment", selectedText: text, position });
  }, []);

  const handleSuggestEdit = useCallback((text: string, position: { x: number; y: number }) => {
    setPopover({ show: true, mode: "suggest", selectedText: text, position });
  }, []);

  const handleSubmit = async (content: string, selectedText: string, mode: "comment" | "suggest", email?: string, chatContext?: string) => {
    setSending(true);

    try {
      // Send to Slack via API
      const response = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          thesis: thesisTitle,
          suggestion: `**${mode === "comment" ? "Comment" : "Edit Suggestion"}**\n\n**On text:** "${selectedText}"\n\n**${mode === "comment" ? "Comment" : "Suggested change"}:** ${content}`,
          chatContext: chatContext || `Inline ${mode} on thesis: ${thesisTitle}`,
          email,
        }),
      });

      if (response.ok) {
        // Add to local annotations
        setAnnotations((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            selectedText,
            content,
            mode,
            position: popover?.position || { x: 0, y: 0 },
          },
        ]);
        setToast(mode === "comment" ? "Comment sent!" : "Suggestion sent!");
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
        onSuggestEdit={handleSuggestEdit}
      />

      {/* Annotation popover */}
      {popover?.show && (
        <AnnotationPopover
          selectedText={popover.selectedText}
          mode={popover.mode}
          position={popover.position}
          thesisTitle={thesisTitle}
          thesisSlug={thesisSlug}
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

      {/* Annotation indicators (subtle dots on the side) */}
      {annotations.length > 0 && (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
          {annotations.map((ann) => (
            <div
              key={ann.id}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                ann.mode === "comment" ? "bg-yellow-400" : "bg-accent"
              }`}
              title={`${ann.mode}: ${ann.content.slice(0, 50)}...`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
