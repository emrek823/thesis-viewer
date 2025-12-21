"use client";

import { useChat } from "ai/react";
import { useState } from "react";

interface Props {
  thesisSlug: string;
  thesisTitle: string;
}

export function ChatSidebar({ thesisSlug, thesisTitle }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [showSuggestForm, setShowSuggestForm] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      body: { thesisSlug },
    });

  const handleSendSuggestion = async () => {
    if (!suggestion.trim()) return;

    setSending(true);
    try {
      const chatContext = messages
        .map((m) => `${m.role}: ${m.content}`)
        .join("\n\n");

      const response = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          thesis: thesisTitle,
          suggestion,
          chatContext,
        }),
      });

      if (response.ok) {
        setSent(true);
        setSuggestion("");
        setShowSuggestForm(false);
        setTimeout(() => setSent(false), 3000);
      }
    } catch (error) {
      console.error("Failed to send suggestion:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent text-white rounded-full shadow-lg hover:bg-accent-hover transition-colors flex items-center justify-center z-50"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white border border-gray-200 rounded-xl shadow-xl flex flex-col z-50">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-mono font-bold text-sm">Chat with Thesis</h3>
            {sent && (
              <span className="text-xs text-green-600">Suggestion sent!</span>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 text-sm py-8">
                <p className="mb-2">Ask questions about this thesis</p>
                <p className="text-xs text-gray-400">
                  e.g., "What's the bear case?" or "Summarize the key sources"
                </p>
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`${
                  m.role === "user" ? "ml-8" : "mr-8"
                }`}
              >
                <div
                  className={`rounded-lg px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-accent text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{m.content}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mr-8">
                <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-500">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Suggest form */}
          {showSuggestForm && (
            <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
              <textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="Describe your suggestion for this thesis..."
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-accent"
                rows={3}
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleSendSuggestion}
                  disabled={sending || !suggestion.trim()}
                  className="flex-1 px-3 py-1.5 bg-accent text-white text-sm rounded-lg hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send to Team"}
                </button>
                <button
                  onClick={() => setShowSuggestForm(false)}
                  className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-200">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about this thesis..."
                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-3 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            {messages.length > 0 && !showSuggestForm && (
              <button
                onClick={() => setShowSuggestForm(true)}
                className="mt-2 text-xs text-accent hover:underline"
              >
                + Suggest an edit to this thesis
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
