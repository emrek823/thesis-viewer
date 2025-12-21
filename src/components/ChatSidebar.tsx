"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState, useEffect, useMemo } from "react";

interface Props {
  thesisSlug: string;
  thesisTitle: string;
}

interface ParsedEdit {
  section: string;
  location: string;
  action: string;
  currentText: string;
  newText: string;
  raw: string;
}

// Helper to extract text content from v5 message parts
function getMessageText(message: { parts?: Array<{ type: string; text?: string }> }): string {
  if (!message.parts) return "";
  return message.parts
    .filter((p) => p.type === "text" && p.text)
    .map((p) => p.text)
    .join("");
}

function parseEditBlocks(content: string): ParsedEdit[] {
  const edits: ParsedEdit[] = [];
  const editRegex = /```edit\n([\s\S]*?)```/g;
  let match;

  while ((match = editRegex.exec(content)) !== null) {
    const block = match[1];
    const sectionMatch = block.match(/SECTION:\s*(.+)/);
    const locationMatch = block.match(/LOCATION:\s*(.+)/);
    const actionMatch = block.match(/ACTION:\s*(.+)/);
    const currentMatch = block.match(/CURRENT TEXT:\n([\s\S]*?)(?=\n\nNEW TEXT:)/);
    const newMatch = block.match(/NEW TEXT:\n([\s\S]*?)$/);

    if (sectionMatch && newMatch) {
      edits.push({
        section: sectionMatch[1].trim(),
        location: locationMatch?.[1].trim() || "",
        action: actionMatch?.[1].trim() || "REPLACE",
        currentText: currentMatch?.[1].trim() || "",
        newText: newMatch[1].trim(),
        raw: match[0],
      });
    }
  }

  return edits;
}

export function ChatSidebar({ thesisSlug, thesisTitle }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingEdits, setPendingEdits] = useState<ParsedEdit[]>([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [input, setInput] = useState("");

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: () => ({ thesisSlug }),
      }),
    [thesisSlug]
  );

  const { messages, sendMessage, status } = useChat({ transport });

  const isLoading = status === "streaming" || status === "submitted";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    await sendMessage({ text: input });
    setInput("");
  };

  // Parse edit blocks from assistant messages
  useEffect(() => {
    const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant");
    if (lastAssistant) {
      const text = getMessageText(lastAssistant);
      const edits = parseEditBlocks(text);
      setPendingEdits(edits);
    }
  }, [messages]);

  const handleSendEdit = async (edit: ParsedEdit) => {
    setSending(true);
    try {
      const response = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          thesis: thesisTitle,
          suggestion: `**Section:** ${edit.section}\n**Action:** ${edit.action}\n**Location:** ${edit.location}\n\n**Current:**\n${edit.currentText || "(new content)"}\n\n**Proposed:**\n${edit.newText}`,
          chatContext: messages.map((m) => `${m.role}: ${getMessageText(m).slice(0, 300)}`).join("\n\n"),
        }),
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      }
    } catch (error) {
      console.error("Failed to send:", error);
    } finally {
      setSending(false);
    }
  };

  const requestEdit = async () => {
    const editPrompt = "Based on our discussion, propose a specific edit to the thesis. Use the ```edit format with SECTION, LOCATION, ACTION, CURRENT TEXT, and NEW TEXT.";
    await sendMessage({ text: editPrompt });
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
        <div className="fixed bottom-24 right-6 w-[420px] h-[650px] bg-white border border-gray-200 rounded-xl shadow-xl flex flex-col z-50">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-mono font-bold text-sm">Challenge Thesis</h3>
            {sent && <span className="text-xs text-green-600">Sent!</span>}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 text-sm py-8">
                <p className="mb-2">Stress-test this thesis</p>
                <p className="text-xs text-gray-400 mb-4">
                  Ask about gaps, challenge assumptions, find missing evidence
                </p>
                <div className="space-y-2 text-left max-w-xs mx-auto">
                  <button
                    onClick={() => setInput("What's the weakest part of this thesis?")}
                    className="w-full text-left px-3 py-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    "What's the weakest part of this thesis?"
                  </button>
                  <button
                    onClick={() => setInput("What evidence would change your mind on this?")}
                    className="w-full text-left px-3 py-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    "What evidence would change your mind?"
                  </button>
                </div>
              </div>
            )}

            {messages.map((m) => {
              const messageText = getMessageText(m);
              return (
              <div
                key={m.id}
                className={`${m.role === "user" ? "ml-8" : "mr-2"}`}
              >
                <div
                  className={`rounded-lg px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-accent text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {/* Render message, but replace edit blocks with styled versions */}
                  <div className="whitespace-pre-wrap">
                    {m.role === "assistant" && messageText.includes("```edit") ? (
                      <>
                        {messageText.split(/```edit[\s\S]*?```/).map((part, i) => (
                          <span key={i}>{part}</span>
                        ))}
                      </>
                    ) : (
                      messageText
                    )}
                  </div>
                </div>

                {/* Show parsed edits as cards */}
                {m.role === "assistant" && parseEditBlocks(messageText).length > 0 && (
                  <div className="mt-2 space-y-2">
                    {parseEditBlocks(messageText).map((edit, i) => (
                      <div
                        key={i}
                        className="border border-gray-200 rounded-lg p-3 bg-white"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold text-accent">
                            {edit.action}
                          </span>
                          <span className="text-xs text-gray-500">
                            {edit.section}
                          </span>
                        </div>

                        {edit.currentText && (
                          <div className="mb-2">
                            <p className="text-xs text-gray-500 mb-1">Current:</p>
                            <p className="text-xs bg-red-50 text-red-800 p-2 rounded line-through">
                              {edit.currentText.slice(0, 150)}
                              {edit.currentText.length > 150 && "..."}
                            </p>
                          </div>
                        )}

                        <div className="mb-3">
                          <p className="text-xs text-gray-500 mb-1">
                            {edit.currentText ? "Replace with:" : "Add:"}
                          </p>
                          <p className="text-xs bg-green-50 text-green-800 p-2 rounded">
                            {edit.newText.slice(0, 200)}
                            {edit.newText.length > 200 && "..."}
                          </p>
                        </div>

                        <button
                          onClick={() => handleSendEdit(edit)}
                          disabled={sending}
                          className="w-full px-3 py-1.5 bg-accent text-white text-xs rounded hover:bg-accent-hover disabled:opacity-50 transition-colors"
                        >
                          {sending ? "Sending..." : "Send to Team"}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )})}

            {isLoading && (
              <div className="mr-2">
                <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-500">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-200">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Challenge this thesis..."
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
            {messages.length > 0 && pendingEdits.length === 0 && (
              <button
                onClick={requestEdit}
                disabled={isLoading}
                className="mt-2 w-full text-center text-xs text-accent hover:underline py-1 disabled:opacity-50"
              >
                ✏️ Ask for a specific edit
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
