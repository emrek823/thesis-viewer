"use client";

import { useState, useEffect, useCallback } from "react";

interface Candidate {
  name: string;
  role: string;
  bucket: string;
  linkedin: string;
  thesis: string;
  outreach_angle?: string;
  voted: boolean;
  vote: "up" | "down" | "skip" | null;
}

interface Pattern {
  signal: string;
  count: number;
}

interface OutboundData {
  candidates: Candidate[];
  voteCounts: { up: number; down: number; skip: number };
  patterns: { good: Pattern[]; bad: Pattern[] };
  total: number;
}

export function OutboundVoter() {
  const [data, setData] = useState<OutboundData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showPatterns, setShowPatterns] = useState(false);

  const loadData = useCallback(async () => {
    const res = await fetch("/api/outbound");
    const json = await res.json();
    setData(json);

    // Find first unvoted candidate
    const firstUnvoted = json.candidates.findIndex((c: Candidate) => !c.voted);
    setCurrentIndex(firstUnvoted >= 0 ? firstUnvoted : json.candidates.length);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const vote = async (type: "up" | "down" | "skip") => {
    if (!data || currentIndex >= data.candidates.length) return;

    const candidate = data.candidates[currentIndex];

    await fetch("/api/outbound", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        linkedin: candidate.linkedin,
        name: candidate.name,
        role: candidate.role,
        bucket: candidate.bucket,
        vote: type,
      }),
    });

    // Update local state
    setData((prev) => {
      if (!prev) return prev;
      const newCandidates = [...prev.candidates];
      newCandidates[currentIndex] = { ...candidate, voted: true, vote: type };
      return {
        ...prev,
        candidates: newCandidates,
        voteCounts: {
          ...prev.voteCounts,
          [type]: prev.voteCounts[type] + 1,
        },
      };
    });

    // Move to next unvoted
    let next = currentIndex + 1;
    while (next < data.candidates.length && data.candidates[next].voted) {
      next++;
    }
    setCurrentIndex(next);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") vote("down");
      else if (e.key === "ArrowRight") vote("up");
      else if (e.key === "ArrowDown") vote("skip");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        <div className="animate-pulse">Loading candidates...</div>
      </div>
    );
  }

  if (!data || data.candidates.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="pixel-header text-sm mb-4">NO CANDIDATES</p>
        <p className="text-sm">Add candidates to content/outbound/candidates.json</p>
      </div>
    );
  }

  const { candidates, voteCounts, patterns } = data;
  const reviewed = voteCounts.up + voteCounts.down + voteCounts.skip;
  const allDone = currentIndex >= candidates.length;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Stats bar */}
      <div className="flex items-center justify-between mb-6 text-sm">
        <div className="flex gap-4">
          <span className="text-gray-500">
            {reviewed}/{candidates.length} reviewed
          </span>
          <span className="text-green-600">👍 {voteCounts.up}</span>
          <span className="text-red-500">👎 {voteCounts.down}</span>
          <span className="text-gray-400">⏭ {voteCounts.skip}</span>
        </div>
        <button
          onClick={() => setShowPatterns(!showPatterns)}
          className="text-xs text-gray-500 hover:text-accent"
        >
          {showPatterns ? "Hide" : "Show"} Patterns
        </button>
      </div>

      {/* Patterns panel */}
      {showPatterns && (
        <div className="card-nintendo bg-white p-4 mb-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="pixel-header text-xs text-green-600 mb-2">
                👍 GOOD SIGNALS
              </h4>
              {patterns.good.length > 0 ? (
                <ul className="text-sm space-y-1">
                  {patterns.good.map((p) => (
                    <li key={p.signal} className="flex justify-between">
                      <span>{p.signal}</span>
                      <span className="text-green-600 font-mono">{p.count}x</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-sm">Vote to see patterns</p>
              )}
            </div>
            <div>
              <h4 className="pixel-header text-xs text-red-500 mb-2">
                👎 BAD SIGNALS
              </h4>
              {patterns.bad.length > 0 ? (
                <ul className="text-sm space-y-1">
                  {patterns.bad.map((p) => (
                    <li key={p.signal} className="flex justify-between">
                      <span>{p.signal}</span>
                      <span className="text-red-500 font-mono">{p.count}x</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-sm">Vote to see patterns</p>
              )}
            </div>
          </div>
        </div>
      )}

      {allDone ? (
        /* All done screen */
        <div className="card-nintendo bg-white p-8 text-center">
          <h2 className="pixel-header text-lg mb-4">ALL DONE! 🎉</h2>
          <p className="text-gray-600 mb-6">
            Reviewed {reviewed} candidates
          </p>
          <div className="flex justify-center gap-8 text-lg">
            <span className="text-green-600">👍 {voteCounts.up}</span>
            <span className="text-red-500">👎 {voteCounts.down}</span>
            <span className="text-gray-400">⏭ {voteCounts.skip}</span>
          </div>

          {/* Show liked candidates */}
          {voteCounts.up > 0 && (
            <div className="mt-8 text-left">
              <h3 className="pixel-header text-xs text-gray-500 mb-3">
                👍 LIKED CANDIDATES
              </h3>
              <div className="space-y-2">
                {candidates
                  .filter((c) => c.vote === "up")
                  .map((c) => (
                    <a
                      key={c.linkedin}
                      href={c.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-green-50 border border-green-200 rounded hover:bg-green-100 transition"
                    >
                      <div className="font-medium">{c.name}</div>
                      <div className="text-sm text-gray-600">{c.role}</div>
                    </a>
                  ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Candidate card */
        <div className="card-nintendo bg-white p-6">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                candidates[currentIndex].bucket === "academic"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {candidates[currentIndex].bucket}
            </span>
            <span className="text-xs text-gray-400">
              {currentIndex + 1} of {candidates.length}
            </span>
          </div>

          <h2 className="font-mono font-bold text-xl mb-2">
            {candidates[currentIndex].name}
          </h2>

          <p className="text-gray-600 mb-4">
            {candidates[currentIndex].role || "No role specified"}
          </p>

          <div className="bg-gray-50 p-3 rounded-lg mb-4 text-sm">
            <span className="text-gray-500">📋 Thesis:</span>{" "}
            {candidates[currentIndex].thesis}
          </div>

          <a
            href={candidates[currentIndex].linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 hover:underline mb-6 text-sm"
          >
            View LinkedIn Profile →
          </a>

          {/* Vote buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => vote("down")}
              className="flex-1 py-4 text-3xl bg-red-100 hover:bg-red-200 rounded-xl transition active:scale-95"
            >
              👎
            </button>
            <button
              onClick={() => vote("skip")}
              className="flex-1 py-4 text-lg bg-gray-100 hover:bg-gray-200 rounded-xl transition active:scale-95"
            >
              Skip
            </button>
            <button
              onClick={() => vote("up")}
              className="flex-1 py-4 text-3xl bg-green-100 hover:bg-green-200 rounded-xl transition active:scale-95"
            >
              👍
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            ← = 👎 &nbsp;&nbsp; → = 👍 &nbsp;&nbsp; ↓ = skip
          </p>
        </div>
      )}
    </div>
  );
}
