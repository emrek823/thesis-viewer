"use client";

import { useState, useMemo, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

interface Props {
  selectedText: string;
  mode: "comment" | "suggest";
  position: { x: number; y: number };
  thesisTitle: string;
  thesisSlug?: string;
  onClose: () => void;
  onSubmit: (content: string, selectedText: string, mode: "comment" | "suggest", email?: string, chatContext?: string) => void;
  isLoading?: boolean;
}

function getMessageText(message: { parts?: Array<{ type: string; text?: string }>; content?: string }): string {
  // AI SDK v5: messages have parts array
  if (message.parts && message.parts.length > 0) {
    return message.parts
      .filter((p) => p.type === "text" && p.text)
      .map((p) => p.text)
      .join("");
  }
  // Fallback: check for content string (older format)
  if (typeof message.content === "string") {
    return message.content;
  }
  return "";
}

function parseRewriteBlock(content: string): string | null {
  const match = content.match(/```rewrite\n([\s\S]*?)```/);
  return match ? match[1].trim() : null;
}

export function AnnotationPopover({
  selectedText,
  mode,
  position,
  thesisTitle,
  thesisSlug,
  onClose,
  onSubmit,
  isLoading: externalLoading,
}: Props) {
  const [input, setInput] = useState("");
  const [proposedRewrite, setProposedRewrite] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);

  // Comment mode uses simple text input
  const [commentText, setCommentText] = useState("");

  const [error, setError] = useState<string | null>(null);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/section-chat",
        body: () => ({ thesisSlug, selectedText }),
      }),
    [thesisSlug, selectedText]
  );

  const { messages, sendMessage, status } = useChat({
    transport,
    onError: (err) => {
      console.error("[AnnotationPopover] Chat error:", err);
      setError(err.message || "Failed to get AI response");
    },
  });

  const isStreaming = status === "streaming" || status === "submitted";

  // Parse rewrite blocks from latest assistant message
  useEffect(() => {
    const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant");
    if (lastAssistant) {
      const text = getMessageText(lastAssistant);
      const rewrite = parseRewriteBlock(text);
      if (rewrite) {
        setProposedRewrite(rewrite);
      }
    }
  }, [messages]);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;
    setError(null); // Clear previous errors
    try {
      await sendMessage({ text: input });
      setInput("");
    } catch (err) {
      console.error("[AnnotationPopover] Send error:", err);
      setError(err instanceof Error ? err.message : "Failed to send message");
    }
  };

  const handleSendRewrite = async () => {
    if (!proposedRewrite) return;
    if (!email.trim()) {
      setShowEmailPrompt(true);
      return;
    }
    setSending(true);

    const suggestionContent = `**Original:**\n"${selectedText}"\n\n**Proposed Rewrite:**\n"${proposedRewrite}"`;
    const chatContext = messages.map((m) => `${m.role}: ${getMessageText(m).slice(0, 200)}`).join("\n\n");

    onSubmit(suggestionContent, selectedText, "suggest", email, chatContext);
    setSending(false);
  };

  const handleCommentSubmit = () => {
    if (!commentText.trim()) return;
    if (!email.trim()) {
      setShowEmailPrompt(true);
      return;
    }
    onSubmit(commentText, selectedText, "comment", email);
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
        className="fixed z-50 w-[440px] bg-white border border-gray-200 rounded-xl shadow-xl transform -translate-x-1/2"
        style={{ left: safeX, top: safeY, maxHeight: "70vh" }}
      >
        <div className="p-4 flex flex-col" style={{ maxHeight: "70vh" }}>
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-mono font-bold text-sm">
              {mode === "comment" ? "Add Comment" : "Edit with AI"}
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
          <div className="mb-3 p-2 bg-gray-50 rounded-lg border-l-2 border-accent shrink-0">
            <p className="text-xs text-gray-500 mb-1">Selected text:</p>
            <p className="text-sm text-gray-700 line-clamp-3">&ldquo;{selectedText}&rdquo;</p>
          </div>

          {mode === "comment" ? (
            /* Comment mode - simple text input */
            <>
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
                    disabled={externalLoading || !commentText.trim() || !email.trim()}
                    className="w-full px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Send Comment
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleCommentSubmit}
                  disabled={externalLoading || !commentText.trim()}
                  className="w-full px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Add Comment
                </button>
              )}
            </>
          ) : (
            /* Suggest mode - AI chat */
            <>
              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto mb-3 space-y-3 min-h-[120px] max-h-[280px]">
                {messages.length === 0 && !isStreaming && (
                  <div className="text-center text-gray-400 text-sm py-4">
                    <p className="mb-2">Ask the AI to improve this text</p>
                    <div className="space-y-1.5 text-left max-w-xs mx-auto">
                      <button
                        onClick={() => setInput("Make this more specific with data")}
                        className="w-full text-left px-2 py-1.5 text-xs bg-gray-50 hover:bg-gray-100 rounded transition-colors"
                      >
                        &ldquo;Make this more specific with data&rdquo;
                      </button>
                      <button
                        onClick={() => setInput("Find evidence to support this claim")}
                        className="w-full text-left px-2 py-1.5 text-xs bg-gray-50 hover:bg-gray-100 rounded transition-colors"
                      >
                        &ldquo;Find evidence to support this claim&rdquo;
                      </button>
                      <button
                        onClick={() => setInput("Tighten this up - more concise")}
                        className="w-full text-left px-2 py-1.5 text-xs bg-gray-50 hover:bg-gray-100 rounded transition-colors"
                      >
                        &ldquo;Tighten this up - more concise&rdquo;
                      </button>
                    </div>
                  </div>
                )}

                {messages.map((m) => {
                  const messageText = getMessageText(m);
                  const rewrite = parseRewriteBlock(messageText);
                  const textWithoutRewrite = messageText.replace(/```rewrite[\s\S]*?```/g, "").trim();

                  return (
                    <div
                      key={m.id}
                      className={m.role === "user" ? "ml-8" : "mr-2"}
                    >
                      <div
                        className={`rounded-lg px-3 py-2 text-sm ${
                          m.role === "user"
                            ? "bg-accent text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{textWithoutRewrite || messageText}</div>
                      </div>

                      {/* Show rewrite block as special card */}
                      {rewrite && (
                        <div className="mt-2 border border-green-200 rounded-lg p-3 bg-green-50">
                          <p className="text-xs font-medium text-green-800 mb-1">Proposed Rewrite:</p>
                          <p className="text-sm text-green-900">{rewrite}</p>
                        </div>
                      )}
                    </div>
                  );
                })}

                {isStreaming && (
                  <div className="mr-2">
                    <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-500">
                      Thinking...
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mr-2">
                    <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-sm text-red-600">
                      Error: {error}
                    </div>
                  </div>
                )}
              </div>

              {/* Chat input */}
              <form onSubmit={handleChatSubmit} className="flex gap-2 shrink-0">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="How should this change?"
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-accent"
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={isStreaming || !input.trim()}
                  className="px-3 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>

              {/* Send to Team button - appears when rewrite is proposed */}
              {proposedRewrite && (
                <div className="mt-3 space-y-2">
                  {showEmailPrompt && (
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email to send"
                      className="w-full px-3 py-2 text-sm border border-green-200 rounded-lg focus:outline-none focus:border-green-500"
                      autoFocus
                    />
                  )}
                  <button
                    onClick={handleSendRewrite}
                    disabled={sending || (showEmailPrompt && !email.trim())}
                    className="w-full px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
                  >
                    {sending ? "Sending..." : showEmailPrompt ? "Send to Team" : "Send to Team"}
                  </button>
                </div>
              )}

              <p className="mt-2 text-xs text-gray-400 text-center">
                {proposedRewrite
                  ? (showEmailPrompt ? "Enter your email to send" : "Click to send suggestion")
                  : "AI will search the web and propose edits"}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
