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
}

interface Vote {
  linkedin: string;
  name: string;
  role: string;
  bucket: string;
  vote: number; // 1-5 rating
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

  const votesByUrl = new Map(votesData.votes.map((v) => [v.linkedin, v]));

  const enrichedCandidates = candidates.map((c) => {
    const vote = votesByUrl.get(c.linkedin);
    return {
      ...c,
      voted: !!vote,
      vote: vote?.vote || null,
    };
  });

  // Count votes by rating (1-5)
  const voteCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const v of votesData.votes) {
    if (v.vote >= 1 && v.vote <= 5) {
      voteCounts[v.vote]++;
    }
  }

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

  if (!linkedin || vote === undefined) {
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
    vote: Number(vote),
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

    // Extract role signals
    if (role.includes("vp") || role.includes("vice president")) keywords.push("VP-level");
    if (role.includes("director")) keywords.push("Director-level");
    if (role.includes("head of")) keywords.push("Head of...");
    if (role.includes("chief") || role.includes("cto") || role.includes("cmo")) keywords.push("C-level");
    if (role.includes("phd") || role.includes("ph.d")) keywords.push("PhD");
    if (role.includes("professor") || role.includes("researcher")) keywords.push("Academic");
    if (role.includes("payer") || role.includes("health plan") || role.includes("insurance")) keywords.push("Payer");
    if (role.includes("provider") || role.includes("health system") || role.includes("hospital")) keywords.push("Provider");
    if (role.includes("clinical")) keywords.push("Clinical focus");
    if (role.includes("ai") || role.includes("ml") || role.includes("machine learning")) keywords.push("AI/ML title");
    if (role.includes("innovation")) keywords.push("Innovation");
    if (role.includes("cms") || role.includes("government") || role.includes("federal")) keywords.push("Government");
    if (role.includes("google") || role.includes("microsoft") || role.includes("amazon")) keywords.push("Big Tech");
    if (role.includes("startup") || role.includes("founder")) keywords.push("Startup");

    // Bucket signal
    keywords.push(`${v.bucket.charAt(0).toUpperCase() + v.bucket.slice(1)} bucket`);

    // Categorize by rating
    const isGood = v.vote >= 4; // 4-5 = good
    const isBad = v.vote <= 2;  // 1-2 = bad

    for (const kw of keywords) {
      if (isGood) {
        goodSignals[kw] = (goodSignals[kw] || 0) + 1;
      } else if (isBad) {
        badSignals[kw] = (badSignals[kw] || 0) + 1;
      }
    }
  }

  return {
    good: Object.entries(goodSignals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([signal, count]) => ({ signal, count })),
    bad: Object.entries(badSignals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([signal, count]) => ({ signal, count })),
  };
}
