"use client";

import { useState, useEffect, useCallback } from "react";

interface Props {
  selectedText: string;
  position: { x: number; y: number };
  thesisTitle: string;
  onClose: () => void;
  onSubmit: (content: string, selectedText: string, email?: string) => void;
  isLoading?: boolean;
}

export function AnnotationPopover({
  selectedText,
  position,
  thesisTitle,
  onClose,
  onSubmit,
  isLoading,
}: Props) {
  const [commentText, setCommentText] = useState("");
  const [email, setEmail] = useState("");
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleCommentSubmit = () => {
    if (!commentText.trim()) return;
    if (!email.trim()) {
      setShowEmailPrompt(true);
      return;
    }
    onSubmit(commentText, selectedText, email);
  };

  // Calculate safe position
  const safeX = Math.min(Math.max(position.x, 220), window.innerWidth - 220);
  const safeY = Math.min(position.y + 30, window.innerHeight - 500);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Popover */}
      <div
        className="fixed z-50 w-[min(90vw,440px)] bg-white border border-gray-200 rounded-xl shadow-xl transform -translate-x-1/2"
        style={{ left: safeX, top: safeY, maxHeight: "70vh" }}
      >
        <div className="p-4 flex flex-col" style={{ maxHeight: "70vh" }}>
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-mono font-bold text-sm">Add Comment</h3>
            <button
              onClick={onClose}
              aria-label="Close comment form"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Selected text preview */}
          <div className="mb-3 p-2 bg-gray-50 rounded-lg border-l-2 border-accent shrink-0">
            <p className="text-xs text-gray-500 mb-1">Selected text:</p>
            <p className="text-sm text-gray-700 line-clamp-3">&ldquo;{selectedText}&rdquo;</p>
          </div>

          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="What's your thought on this?"
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-accent mb-3"
            rows={4}
            autoFocus
          />
          {showEmailPrompt ? (
            <div className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-accent"
                autoFocus
              />
              <button
                onClick={handleCommentSubmit}
                disabled={isLoading || !commentText.trim() || !email.trim()}
                className="w-full px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Send Comment
              </button>
            </div>
          ) : (
            <button
              onClick={handleCommentSubmit}
              disabled={isLoading || !commentText.trim()}
              className="w-full px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Add Comment
            </button>
          )}
        </div>
      </div>
    </>
  );
}
