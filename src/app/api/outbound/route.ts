import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const CANDIDATES_PATH = path.join(
  process.cwd(),
  "content/outbound/candidates.json"
);
const VOTES_PATH = path.join(process.cwd(), "content/outbound/votes.json");

interface Candidate {
  name: string;
  role: string;
  bucket: string;
  linkedin: string;
  thesis: string;
  outreach_angle?: string;
}

interface Vote {
  linkedin: string;
  name: string;
  role: string;
  bucket: string;
  vote: "up" | "down" | "skip";
  timestamp: string;
}

interface VotesData {
  votes: Vote[];
  updated_at: string | null;
}

async function getCandidates(): Promise<Candidate[]> {
  try {
    const data = await fs.readFile(CANDIDATES_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function getVotes(): Promise<VotesData> {
  try {
    const data = await fs.readFile(VOTES_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return { votes: [], updated_at: null };
  }
}

async function saveVotes(votesData: VotesData): Promise<void> {
  votesData.updated_at = new Date().toISOString();
  await fs.writeFile(VOTES_PATH, JSON.stringify(votesData, null, 2));
}

export async function GET() {
  const candidates = await getCandidates();
  const votesData = await getVotes();

  const votedUrls = new Set(votesData.votes.map((v) => v.linkedin));

  const enrichedCandidates = candidates.map((c) => ({
    ...c,
    voted: votedUrls.has(c.linkedin),
    vote: votesData.votes.find((v) => v.linkedin === c.linkedin)?.vote || null,
  }));

  const voteCounts = {
    up: votesData.votes.filter((v) => v.vote === "up").length,
    down: votesData.votes.filter((v) => v.vote === "down").length,
    skip: votesData.votes.filter((v) => v.vote === "skip").length,
  };

  // Calculate patterns
  const patterns = calculatePatterns(votesData.votes);

  return NextResponse.json({
    candidates: enrichedCandidates,
    voteCounts,
    patterns,
    total: candidates.length,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { linkedin, name, role, bucket, vote } = body;

  if (!linkedin || !vote) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const votesData = await getVotes();

  // Remove existing vote for this person if any
  votesData.votes = votesData.votes.filter((v) => v.linkedin !== linkedin);

  // Add new vote
  votesData.votes.push({
    linkedin,
    name,
    role,
    bucket,
    vote,
    timestamp: new Date().toISOString(),
  });

  await saveVotes(votesData);

  return NextResponse.json({ status: "ok" });
}

function calculatePatterns(votes: Vote[]) {
  const goodSignals: Record<string, number> = {};
  const badSignals: Record<string, number> = {};

  for (const v of votes) {
    const role = (v.role || "").toLowerCase();
    const keywords: string[] = [];

    if (role.includes("vp") || role.includes("vice president")) keywords.push("VP-level");
    if (role.includes("director")) keywords.push("Director-level");
    if (role.includes("head of")) keywords.push("Head of...");
    if (role.includes("chief")) keywords.push("C-level");
    if (role.includes("phd")) keywords.push("PhD");
    if (role.includes("payer")) keywords.push("Payer focus");
    if (role.includes("clinical")) keywords.push("Clinical focus");
    if (role.includes("ai") || role.includes("ml")) keywords.push("AI/ML title");
    if (role.includes("innovation")) keywords.push("Innovation role");
    if (role.includes("cms") || role.includes("government")) keywords.push("Government");
    if (role.includes("health system") || role.includes("hospital")) keywords.push("Health System");

    keywords.push(`Bucket: ${v.bucket}`);

    for (const kw of keywords) {
      if (v.vote === "up") {
        goodSignals[kw] = (goodSignals[kw] || 0) + 1;
      } else if (v.vote === "down") {
        badSignals[kw] = (badSignals[kw] || 0) + 1;
      }
    }
  }

  return {
    good: Object.entries(goodSignals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([signal, count]) => ({ signal, count })),
    bad: Object.entries(badSignals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([signal, count]) => ({ signal, count })),
  };
}
