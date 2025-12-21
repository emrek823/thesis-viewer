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
}

export function AnnotationPopover({
  selectedText,
  mode,
  position,
  thesisTitle,
  onClose,
  onSubmit,
  isLoading,
}: Props) {
  const [content, setContent] = useState("");
  const [replacementText, setReplacementText] = useState("");
  const [editMode, setEditMode] = useState<"comment" | "replace" | "insert">(
    mode === "comment" ? "comment" : "replace"
  );

  const handleSubmit = () => {
    let finalContent = "";

    if (editMode === "comment") {
      finalContent = content;
    } else if (editMode === "replace") {
      finalContent = `REPLACE:\n"${selectedText}"\n\nWITH:\n"${replacementText || content}"`;
    } else {
      finalContent = `AFTER:\n"${selectedText}"\n\nINSERT:\n"${content}"`;
    }

    if (!finalContent.trim()) return;
    onSubmit(finalContent, selectedText, mode);
  };

  // Calculate safe position
  const safeX = Math.min(Math.max(position.x, 220), window.innerWidth - 220);
  const safeY = Math.min(position.y + 30, window.innerHeight - 400);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Popover */}
      <div
        className="fixed z-50 w-[400px] bg-white border border-gray-200 rounded-xl shadow-xl transform -translate-x-1/2"
        style={{ left: safeX, top: safeY }}
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

          {/* Mode selector for suggest */}
          {mode === "suggest" && (
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setEditMode("replace")}
                className={`flex-1 px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                  editMode === "replace"
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                Replace
              </button>
              <button
                onClick={() => setEditMode("insert")}
                className={`flex-1 px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                  editMode === "insert"
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                Insert After
              </button>
            </div>
          )}

          {/* Input */}
          <div className="mb-3">
            {editMode === "replace" && mode === "suggest" ? (
              <>
                <p className="text-xs text-gray-500 mb-1">Replace with:</p>
                <textarea
                  value={replacementText}
                  onChange={(e) => setReplacementText(e.target.value)}
                  placeholder="Enter the replacement text..."
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-accent"
                  rows={4}
                  autoFocus
                />
              </>
            ) : (
              <>
                <p className="text-xs text-gray-500 mb-1">
                  {editMode === "comment" ? "Your comment:" : "Text to insert:"}
                </p>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder={
                    editMode === "comment"
                      ? "What's your thought on this?"
                      : "Enter text to insert after the selection..."
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-accent"
                  rows={4}
                  autoFocus
                />
              </>
            )}
          </div>

          {/* Preview for edits */}
          {mode === "suggest" && (editMode === "replace" ? replacementText : content) && (
            <div className="mb-3 p-2 bg-gray-50 rounded-lg text-xs">
              <p className="text-gray-500 mb-1">Preview:</p>
              {editMode === "replace" ? (
                <div>
                  <span className="bg-red-100 text-red-800 line-through">{selectedText.slice(0, 50)}</span>
                  <span> → </span>
                  <span className="bg-green-100 text-green-800">{replacementText.slice(0, 50)}</span>
                </div>
              ) : (
                <div>
                  <span className="text-gray-700">{selectedText.slice(0, 30)}...</span>
                  <span className="bg-green-100 text-green-800 mx-1">[+ {content.slice(0, 30)}...]</span>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              disabled={
                isLoading ||
                (editMode === "replace" && mode === "suggest" ? !replacementText.trim() : !content.trim())
              }
              className="flex-1 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {mode === "comment" ? "Add Comment" : "Send Suggestion"}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
          </div>

          <p className="mt-2 text-xs text-gray-400 text-center">
            Sent to team for review
          </p>
        </div>
      </div>
    </>
  );
}
