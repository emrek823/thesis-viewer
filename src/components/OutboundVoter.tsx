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
  vote: number | null;
}

interface Pattern {
  signal: string;
  count: number;
}

interface OutboundData {
  candidates: Candidate[];
  voteCounts: Record<number, number>;
  patterns: { good: Pattern[]; bad: Pattern[] };
  total: number;
}

export function OutboundVoter() {
  const [data, setData] = useState<OutboundData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showPatterns, setShowPatterns] = useState(false);
  const [showProfile, setShowProfile] = useState(true);

  const loadData = useCallback(async () => {
    const res = await fetch("/api/outbound");
    const json = await res.json();
    setData(json);

    // Find first unvoted candidate
    const firstUnvoted = json.candidates.findIndex((c: Candidate) => !c.voted);
    setCurrentIndex(firstUnvoted >= 0 ? firstUnvoted : 0);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const vote = async (rating: number) => {
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
        vote: rating,
      }),
    });

    // Update local state
    setData((prev) => {
      if (!prev) return prev;
      const newCandidates = [...prev.candidates];
      newCandidates[currentIndex] = { ...candidate, voted: true, vote: rating };
      return {
        ...prev,
        candidates: newCandidates,
        voteCounts: {
          ...prev.voteCounts,
          [rating]: (prev.voteCounts[rating] || 0) + 1,
        },
      };
    });

    // Move to next unvoted
    let next = currentIndex + 1;
    while (next < data.candidates.length && data.candidates[next]?.voted) {
      next++;
    }
    if (next >= data.candidates.length) next = 0; // wrap around
    setCurrentIndex(next);
  };

  const goTo = (index: number) => {
    if (data && index >= 0 && index < data.candidates.length) {
      setCurrentIndex(index);
    }
  };

  // Keyboard shortcuts: 1-5 for rating, arrow keys for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= "1" && e.key <= "5") {
        vote(parseInt(e.key));
      } else if (e.key === "ArrowLeft") {
        goTo(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        goTo(currentIndex + 1);
      }
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
  const reviewed = Object.values(voteCounts).reduce((a, b) => a + b, 0);
  const candidate = candidates[currentIndex];

  const ratingLabels: Record<number, string> = {
    1: "Skip",
    2: "Meh",
    3: "Maybe",
    4: "Good",
    5: "Great",
  };

  const ratingColors: Record<number, string> = {
    1: "bg-gray-200 hover:bg-gray-300 text-gray-600",
    2: "bg-red-100 hover:bg-red-200 text-red-700",
    3: "bg-yellow-100 hover:bg-yellow-200 text-yellow-700",
    4: "bg-green-100 hover:bg-green-200 text-green-700",
    5: "bg-emerald-200 hover:bg-emerald-300 text-emerald-800",
  };

  return (
    <div className="flex gap-6 h-[calc(100vh-200px)] min-h-[600px]">
      {/* Left side: Candidate card */}
      <div className="w-1/3 min-w-[350px] flex flex-col">
        {/* Stats bar */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <span className="text-gray-500">
            {reviewed}/{candidates.length} rated
          </span>
          <div className="flex gap-2">
            {[5, 4, 3, 2, 1].map((r) => (
              <span
                key={r}
                className={`text-xs px-2 py-0.5 rounded ${
                  r >= 4 ? "text-green-600" : r === 3 ? "text-yellow-600" : "text-gray-400"
                }`}
              >
                {r}★ {voteCounts[r] || 0}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-30"
          >
            ← Prev
          </button>
          <span className="text-sm text-gray-500">
            {currentIndex + 1} of {candidates.length}
          </span>
          <button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === candidates.length - 1}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-30"
          >
            Next →
          </button>
        </div>

        {/* Candidate card */}
        <div className="card-nintendo bg-white p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                candidate.bucket === "academic"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {candidate.bucket}
            </span>
            {candidate.voted && (
              <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">
                Rated: {candidate.vote}★
              </span>
            )}
          </div>

          <h2 className="font-mono font-bold text-xl mb-2">{candidate.name}</h2>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {candidate.role || "No role specified"}
          </p>

          <div className="bg-gray-50 p-3 rounded-lg mb-4 text-sm flex-1">
            <div className="text-gray-500 mb-1">📋 Thesis:</div>
            <div className="font-medium">{candidate.thesis}</div>
          </div>

          {/* 1-5 Rating buttons */}
          <div className="space-y-2">
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((r) => (
                <button
                  key={r}
                  onClick={() => vote(r)}
                  className={`py-3 rounded-lg font-bold text-lg transition active:scale-95 ${ratingColors[r]}`}
                >
                  {r}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-2 text-xs text-center text-gray-500">
              {[1, 2, 3, 4, 5].map((r) => (
                <span key={r}>{ratingLabels[r]}</span>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-3">
            Press 1-5 to rate · ←→ to navigate
          </p>
        </div>

        {/* Patterns toggle */}
        <button
          onClick={() => setShowPatterns(!showPatterns)}
          className="mt-4 text-xs text-gray-500 hover:text-accent"
        >
          {showPatterns ? "Hide" : "Show"} Patterns
        </button>

        {showPatterns && (
          <div className="card-nintendo bg-white p-4 mt-2">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="text-xs font-bold text-green-600 mb-2">👍 HIGH RATED</h4>
                {patterns.good.length > 0 ? (
                  <ul className="space-y-1">
                    {patterns.good.slice(0, 5).map((p) => (
                      <li key={p.signal} className="flex justify-between text-xs">
                        <span>{p.signal}</span>
                        <span className="text-green-600">{p.count}x</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-xs">Rate 4-5 to see</p>
                )}
              </div>
              <div>
                <h4 className="text-xs font-bold text-red-500 mb-2">👎 LOW RATED</h4>
                {patterns.bad.length > 0 ? (
                  <ul className="space-y-1">
                    {patterns.bad.slice(0, 5).map((p) => (
                      <li key={p.signal} className="flex justify-between text-xs">
                        <span>{p.signal}</span>
                        <span className="text-red-500">{p.count}x</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-xs">Rate 1-2 to see</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right side: LinkedIn profile */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-600">LinkedIn Profile</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="text-xs text-gray-500 hover:text-accent"
            >
              {showProfile ? "Hide" : "Show"} Preview
            </button>
            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              Open in new tab →
            </a>
          </div>
        </div>

        {showProfile ? (
          <div className="flex-1 card-nintendo bg-white overflow-hidden">
            <iframe
              src={candidate.linkedin}
              className="w-full h-full border-0"
              title={`LinkedIn profile of ${candidate.name}`}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>
        ) : (
          <div className="flex-1 card-nintendo bg-gray-50 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <p className="mb-2">Profile preview hidden</p>
              <a
                href={candidate.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Open LinkedIn →
              </a>
            </div>
          </div>
        )}

        <p className="text-xs text-gray-400 mt-2 text-center">
          Note: LinkedIn may block preview. Click "Open in new tab" if needed.
        </p>
      </div>
    </div>
  );
}
