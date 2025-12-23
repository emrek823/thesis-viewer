import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Check if Google Sheets is configured
const USE_SHEETS = !!(
  process.env.GOOGLE_SHEET_ID &&
  process.env.GOOGLE_CLIENT_ID &&
  process.env.GOOGLE_CLIENT_SECRET &&
  process.env.GOOGLE_REFRESH_TOKEN
);

// Fallback paths for local development
const CANDIDATES_PATH = path.join(process.cwd(), "content/outbound/candidates.json");
const VOTES_PATH = path.join(process.cwd(), "content/outbound/votes.json");

interface Candidate {
  name: string;
  role: string;
  bucket: string;
  linkedin: string;
  thesis: string;
  rating?: number | null;
  ratedAt?: string | null;
  warmPath?: string | null;
  rowNumber?: number;
}

interface Vote {
  linkedin: string;
  name: string;
  role: string;
  bucket: string;
  vote: number;
  timestamp: string;
}

interface VotesData {
  votes: Vote[];
  updated_at: string | null;
}

// === Google Sheets functions ===
async function getSheetsData() {
  const { google } = await import("googleapis");

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const sheets = google.sheets({ version: "v4", auth: oauth2Client });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Candidates!A2:H100",
  });

  const rows = response.data.values || [];
  return rows.map((row, index) => ({
    name: row[0] || "",
    role: row[1] || "",
    bucket: row[2] || "",
    linkedin: row[3] || "",
    thesis: row[4] || "",
    rating: row[5] ? parseInt(row[5]) : null,
    ratedAt: row[6] || null,
    warmPath: row[7] || null,
    rowNumber: index + 2, // +2 for header row and 0-indexing
  }));
}

async function updateSheetsRating(linkedin: string, rating: number) {
  const { google } = await import("googleapis");

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const sheets = google.sheets({ version: "v4", auth: oauth2Client });

  // Find the row
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Candidates!A2:G100",
  });

  const rows = response.data.values || [];
  const rowIndex = rows.findIndex((row) => row[3] === linkedin);

  if (rowIndex === -1) return false;

  const rowNumber = rowIndex + 2;
  const timestamp = new Date().toISOString();

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `Candidates!F${rowNumber}:G${rowNumber}`,
    valueInputOption: "RAW",
    requestBody: {
      values: [[rating, timestamp]],
    },
  });

  return true;
}

// === Local file functions (fallback) ===
async function getLocalCandidates(): Promise<Candidate[]> {
  try {
    const data = await fs.readFile(CANDIDATES_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function getLocalVotes(): Promise<VotesData> {
  try {
    const data = await fs.readFile(VOTES_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return { votes: [], updated_at: null };
  }
}

async function saveLocalVotes(votesData: VotesData): Promise<void> {
  votesData.updated_at = new Date().toISOString();
  await fs.writeFile(VOTES_PATH, JSON.stringify(votesData, null, 2));
}

// === API handlers ===
export async function GET() {
  let candidates: Candidate[] = [];
  let voteCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  if (USE_SHEETS) {
    // Use Google Sheets
    try {
      const sheetsData = await getSheetsData();
      candidates = sheetsData.map((c) => ({
        ...c,
        voted: c.rating !== null,
        vote: c.rating,
      }));

      for (const c of sheetsData) {
        if (c.rating && c.rating >= 1 && c.rating <= 5) {
          voteCounts[c.rating]++;
        }
      }
    } catch (error) {
      console.error("Sheets error, falling back to local:", error);
      // Fall through to local
    }
  }

  // Fallback to local files
  if (candidates.length === 0) {
    const localCandidates = await getLocalCandidates();
    const votesData = await getLocalVotes();
    const votesByUrl = new Map(votesData.votes.map((v) => [v.linkedin, v]));

    candidates = localCandidates.map((c) => {
      const vote = votesByUrl.get(c.linkedin);
      return {
        ...c,
        voted: !!vote,
        vote: vote?.vote || null,
      };
    });

    voteCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (const v of votesData.votes) {
      if (v.vote >= 1 && v.vote <= 5) {
        voteCounts[v.vote]++;
      }
    }
  }

  const patterns = calculatePatterns(candidates);

  return NextResponse.json({
    candidates,
    voteCounts,
    patterns,
    total: candidates.length,
    source: USE_SHEETS ? "sheets" : "local",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { linkedin, name, role, bucket, vote } = body;

  if (!linkedin || vote === undefined) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (USE_SHEETS) {
    try {
      const success = await updateSheetsRating(linkedin, Number(vote));
      if (success) {
        return NextResponse.json({ status: "ok", source: "sheets" });
      }
    } catch (error) {
      console.error("Sheets update error:", error);
    }
  }

  // Fallback to local
  const votesData = await getLocalVotes();
  votesData.votes = votesData.votes.filter((v) => v.linkedin !== linkedin);
  votesData.votes.push({
    linkedin,
    name,
    role,
    bucket,
    vote: Number(vote),
    timestamp: new Date().toISOString(),
  });
  await saveLocalVotes(votesData);

  return NextResponse.json({ status: "ok", source: "local" });
}

function calculatePatterns(candidates: Candidate[]) {
  const goodSignals: Record<string, number> = {};
  const badSignals: Record<string, number> = {};

  for (const c of candidates) {
    const vote = (c as any).vote;
    if (!vote) continue;

    const role = (c.role || "").toLowerCase();
    const keywords: string[] = [];

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

    keywords.push(`${c.bucket.charAt(0).toUpperCase() + c.bucket.slice(1)} bucket`);

    const isGood = vote >= 4;
    const isBad = vote <= 2;

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
