"use client";

import { useState } from "react";

interface Props {
  selectedText: string;
  mode: "comment" | "suggest";
  position: { x: number; y: number };
  thesisTitle: string;
  onClose: () => void;
  onSubmit: (content: string, selectedText: string, mode: "comment" | "suggest") => void;
  isLoading?: boolean;
  aiSuggestion?: string;
}

export function AnnotationPopover({
  selectedText,
  mode,
  position,
  thesisTitle,
  onClose,
  onSubmit,
  isLoading,
  aiSuggestion,
}: Props) {
  const [content, setContent] = useState(aiSuggestion || "");
  const [useAi, setUseAi] = useState(false);

  const handleSubmit = () => {
    if (!content.trim()) return;
    onSubmit(content, selectedText, mode);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Popover */}
      <div
        className="fixed z-50 w-96 bg-white border border-gray-200 rounded-xl shadow-xl transform -translate-x-1/2"
        style={{
          left: Math.min(Math.max(position.x, 200), window.innerWidth - 200),
          top: Math.min(position.y + 20, window.innerHeight - 300),
        }}
      >
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-mono font-bold text-sm">
              {mode === "comment" ? "Add Comment" : "Suggest Edit"}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Selected text preview */}
          <div className="mb-3 p-2 bg-gray-50 rounded-lg border-l-2 border-accent">
            <p className="text-xs text-gray-500 mb-1">Selected text:</p>
            <p className="text-sm text-gray-700 line-clamp-3">"{selectedText}"</p>
          </div>

          {/* Input */}
          <div className="mb-3">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={
                mode === "comment"
                  ? "What's your thought on this?"
                  : "How should this be changed?"
              }
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-accent"
              rows={4}
              autoFocus
            />
          </div>

          {/* AI assist toggle for suggest mode */}
          {mode === "suggest" && (
            <div className="mb-3">
              <button
                onClick={() => setUseAi(!useAi)}
                className={`text-xs px-2 py-1 rounded ${
                  useAi
                    ? "bg-accent text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                ✨ Get AI suggestion
              </button>
              {isLoading && (
                <span className="ml-2 text-xs text-gray-500">Thinking...</span>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              disabled={!content.trim() || isLoading}
              className="flex-1 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {mode === "comment" ? "Add Comment" : "Submit Suggestion"}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
          </div>

          <p className="mt-2 text-xs text-gray-400 text-center">
            This will be sent to the Virtue team for review
          </p>
        </div>
      </div>
    </>
  );
}
