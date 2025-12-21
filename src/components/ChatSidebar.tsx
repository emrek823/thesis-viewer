"use client";

import { useChat } from "ai/react";
import { useState } from "react";

interface Props {
  thesisSlug: string;
  thesisTitle: string;
}

interface EditOption {
  title: string;
  description: string;
  section: string;
}

export function ChatSidebar({ thesisSlug, thesisTitle }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showProposeFlow, setShowProposeFlow] = useState(false);
  const [editOptions, setEditOptions] = useState<EditOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<EditOption | null>(null);
  const [proposedEdit, setProposedEdit] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [loadingOptions, setLoadingOptions] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading, append } =
    useChat({
      body: { thesisSlug },
    });

  const generateEditOptions = async () => {
    if (messages.length === 0) return;

    setLoadingOptions(true);
    setShowProposeFlow(true);

    // Ask Claude to analyze the conversation and suggest edit options
    const chatSummary = messages
      .map((m) => `${m.role}: ${m.content.slice(0, 500)}`)
      .join("\n\n");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          thesisSlug,
          messages: [
            ...messages,
            {
              role: "user",
              content: `Based on our conversation, suggest 3 specific edits I could make to this thesis. For each, give:
1. A short title (5-7 words)
2. What section it would go in
3. One sentence describing the change

Format as JSON array: [{"title": "...", "section": "...", "description": "..."}]

Only return the JSON, nothing else.`,
            },
          ],
        }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullResponse = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          fullResponse += decoder.decode(value);
        }
      }

      // Parse the streamed response to extract JSON
      // The response is in data stream format, need to extract the text
      const textMatch = fullResponse.match(/\[[\s\S]*?\]/);
      if (textMatch) {
        const options = JSON.parse(textMatch[0]);
        setEditOptions(options);
      }
    } catch (error) {
      console.error("Failed to generate options:", error);
      setEditOptions([
        {
          title: "Add point from discussion",
          section: "The Take",
          description: "Incorporate key insight from our conversation",
        },
        {
          title: "Strengthen bear case",
          section: "Bear Case",
          description: "Add risks we discussed",
        },
        {
          title: "Update market dynamics",
          section: "How The Market Works",
          description: "Refine based on new information",
        },
      ]);
    } finally {
      setLoadingOptions(false);
    }
  };

  const generateProposedEdit = async (option: EditOption) => {
    setSelectedOption(option);
    setSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          thesisSlug,
          messages: [
            ...messages,
            {
              role: "user",
              content: `Draft the exact text for this edit:

**Edit:** ${option.title}
**Section:** ${option.section}
**Goal:** ${option.description}

Write 2-4 paragraphs of thesis-quality prose that could be directly added or used to replace existing content. Be specific, use numbers where available, and maintain the thesis voice. Start with the text directly, no preamble.`,
            },
          ],
        }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullResponse = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          // Extract text from the data stream format
          const lines = chunk.split("\n");
          for (const line of lines) {
            if (line.startsWith("0:")) {
              try {
                const text = JSON.parse(line.slice(2));
                fullResponse += text;
                setProposedEdit(fullResponse);
              } catch {
                // ignore parse errors
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("Failed to generate edit:", error);
    } finally {
      setSending(false);
    }
  };

  const handleSendProposal = async () => {
    if (!proposedEdit.trim() || !selectedOption) return;

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
          suggestion: `**${selectedOption.title}**\n\n**Section:** ${selectedOption.section}\n\n**Proposed Text:**\n${proposedEdit}`,
          chatContext,
        }),
      });

      if (response.ok) {
        setSent(true);
        setShowProposeFlow(false);
        setSelectedOption(null);
        setProposedEdit("");
        setEditOptions([]);
        setTimeout(() => setSent(false), 3000);
      }
    } catch (error) {
      console.error("Failed to send proposal:", error);
    } finally {
      setSending(false);
    }
  };

  const resetProposeFlow = () => {
    setShowProposeFlow(false);
    setSelectedOption(null);
    setProposedEdit("");
    setEditOptions([]);
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
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white border border-gray-200 rounded-xl shadow-xl flex flex-col z-50">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-mono font-bold text-sm">
              {showProposeFlow ? "Propose Edit" : "Chat with Thesis"}
            </h3>
            <div className="flex items-center gap-2">
              {sent && (
                <span className="text-xs text-green-600">Sent!</span>
              )}
              {showProposeFlow && (
                <button
                  onClick={resetProposeFlow}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  ← Back to chat
                </button>
              )}
            </div>
          </div>

          {/* Propose Edit Flow */}
          {showProposeFlow ? (
            <div className="flex-1 overflow-y-auto p-4">
              {loadingOptions ? (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-sm">Analyzing conversation...</p>
                </div>
              ) : !selectedOption ? (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 mb-4">
                    Based on our discussion, here are suggested edits:
                  </p>
                  {editOptions.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => generateProposedEdit(option)}
                      className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-accent hover:bg-gray-50 transition-colors"
                    >
                      <p className="font-medium text-sm">{option.title}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {option.section} · {option.description}
                      </p>
                    </button>
                  ))}
                  <button
                    onClick={resetProposeFlow}
                    className="w-full text-center text-sm text-gray-500 hover:text-gray-700 py-2"
                  >
                    Or describe your own edit...
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-sm">{selectedOption.title}</p>
                    <p className="text-xs text-gray-500">{selectedOption.section}</p>
                  </div>

                  {sending && !proposedEdit ? (
                    <div className="text-center py-8 text-gray-500">
                      <p className="text-sm">Drafting edit...</p>
                    </div>
                  ) : (
                    <>
                      <div className="border border-gray-200 rounded-lg p-3 max-h-64 overflow-y-auto">
                        <p className="text-xs text-gray-500 mb-2">Proposed text:</p>
                        <div className="text-sm whitespace-pre-wrap">{proposedEdit}</div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={handleSendProposal}
                          disabled={sending || !proposedEdit}
                          className="flex-1 px-4 py-2 bg-accent text-white text-sm rounded-lg hover:bg-accent-hover disabled:opacity-50"
                        >
                          Send to Team
                        </button>
                        <button
                          onClick={() => {
                            setSelectedOption(null);
                            setProposedEdit("");
                          }}
                          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                        >
                          Try Another
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center text-gray-500 text-sm py-8">
                    <p className="mb-2">Challenge this thesis</p>
                    <p className="text-xs text-gray-400">
                      Ask about gaps, bear cases, or missing evidence
                    </p>
                  </div>
                )}
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`${m.role === "user" ? "ml-8" : "mr-8"}`}
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

              {/* Input */}
              <div className="px-4 py-3 border-t border-gray-200">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="What's weak about this thesis?"
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
                {messages.length > 0 && (
                  <button
                    onClick={generateEditOptions}
                    className="mt-2 w-full text-center text-xs text-accent hover:underline py-1"
                  >
                    ✏️ Propose an edit based on this conversation
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
