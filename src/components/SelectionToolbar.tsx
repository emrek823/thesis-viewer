"use client";

import { useEffect, useState, useCallback } from "react";

interface Position {
  x: number;
  y: number;
}

interface Props {
  containerRef: React.RefObject<HTMLElement>;
  onComment: (text: string, position: Position) => void;
  onSuggestEdit: (text: string, position: Position) => void;
}

export function SelectionToolbar({ containerRef, onComment, onSuggestEdit }: Props) {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState("");

  const handleSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.toString().trim()) {
      setShow(false);
      return;
    }

    const text = selection.toString().trim();
    if (text.length < 5) {
      setShow(false);
      return;
    }

    // Check if selection is within our container
    const range = selection.getRangeAt(0);
    const container = containerRef.current;
    if (!container || !container.contains(range.commonAncestorContainer)) {
      setShow(false);
      return;
    }

    const rect = range.getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
    setSelectedText(text);
    setShow(true);
  }, [containerRef]);

  useEffect(() => {
    document.addEventListener("mouseup", handleSelection);
    document.addEventListener("keyup", handleSelection);

    return () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("keyup", handleSelection);
    };
  }, [handleSelection]);

  const handleComment = () => {
    onComment(selectedText, position);
    setShow(false);
    window.getSelection()?.removeAllRanges();
  };

  const handleSuggestEdit = () => {
    onSuggestEdit(selectedText, position);
    setShow(false);
    window.getSelection()?.removeAllRanges();
  };

  if (!show) return null;

  return (
    <div
      className="fixed z-50 flex gap-1 bg-white border border-gray-200 rounded-lg shadow-lg p-1 transform -translate-x-1/2 -translate-y-full"
      style={{ left: position.x, top: position.y }}
    >
      <button
        onClick={handleComment}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        Comment
      </button>
      <button
        onClick={handleSuggestEdit}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Edit with AI
      </button>
    </div>
  );
}
