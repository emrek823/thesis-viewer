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

// Use CLI candidate store directly
const CANDIDATES_PATH = path.join(process.env.HOME || "", ".claude/data/candidates.json");
const VOTES_PATH = path.join(process.cwd(), "content/outbound/votes.json");

interface Candidate {
  name: string;
  role: string;
  bucket: string;
  linkedin: string;
  thesis: string;
  question?: string;
  rating?: number | null;
  ratedAt?: string | null;
  warmPath?: string | null;
  rowNumber?: number;
  // V2 fields
  allTheses?: string[];
  thesisRatings?: Record<string, number | null>;
}

// V2 store types
interface ThesisTag {
  added_at: string;
  source_question: string;
  validation_need?: string;
  source_queries?: string[];
  why_relevant?: string | null;
  rating: number | null;
  rated_at: string | null;
  notes: string | null;
}

interface Person {
  linkedin: string;
  name: string;
  role: string;
  added_at: string;
  affinity: {
    person_id: number | null;
    synced_at: string | null;
    theses_synced: string[];
  };
  thesis_tags: Record<string, ThesisTag>;
}

interface StoreV2 {
  version: number;
  persons: Record<string, Person>;
  analyses: any[];
  meta: any;
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
    const parsed = JSON.parse(data);

    // V2 format: persons dict with thesis_tags
    if (parsed.version === 2 && parsed.persons) {
      const candidates: Candidate[] = [];
      for (const person of Object.values(parsed.persons) as Person[]) {
        for (const [thesis, tag] of Object.entries(person.thesis_tags)) {
          candidates.push({
            name: person.name,
            role: person.role || "Unknown",
            bucket: "research",
            linkedin: person.linkedin,
            thesis: thesis,
            question: tag.validation_need || tag.source_question || "",  // Prefer validation_need
            rating: tag.rating,
            ratedAt: tag.rated_at,
            // V2 fields for UI
            allTheses: Object.keys(person.thesis_tags),
            thesisRatings: Object.fromEntries(
              Object.entries(person.thesis_tags).map(([t, tg]) => [t, (tg as ThesisTag).rating])
            ),
          });
        }
      }
      return candidates;
    }

    // V1 format: candidates array (legacy fallback)
    const candidates = parsed.candidates || parsed;
    return candidates.map((c: any) => ({
      name: c.name,
      role: c.role || "Unknown",
      bucket: c.bucket || "research",
      linkedin: c.linkedin,
      thesis: c.thesis || "",
      question: c.question || "",
      rating: c.rating,
      ratedAt: c.rated_at || c.ratedAt,
    }));
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

// Update rating directly in CLI candidate store (V2 format)
async function updateCliCandidateRating(linkedin: string, rating: number, thesis?: string): Promise<boolean> {
  try {
    const data = await fs.readFile(CANDIDATES_PATH, "utf-8");
    const store = JSON.parse(data);

    // V2 format: persons dict with thesis_tags
    if (store.version === 2 && store.persons) {
      // Normalize LinkedIn URL
      const normalizedLinkedin = linkedin.split("?")[0].replace(/\/$/, "");

      // Find person by LinkedIn (try exact match first, then normalized)
      let person = store.persons[linkedin] || store.persons[normalizedLinkedin];

      // Try to find by iterating if not found
      if (!person) {
        for (const [url, p] of Object.entries(store.persons)) {
          if (url.includes(linkedin.split("/in/")[1] || "")) {
            person = p as Person;
            break;
          }
        }
      }

      if (!person) return false;

      // If thesis specified, rate that specific thesis
      if (thesis && (person as Person).thesis_tags[thesis]) {
        (person as Person).thesis_tags[thesis].rating = rating;
        (person as Person).thesis_tags[thesis].rated_at = new Date().toISOString();
      } else {
        // Find first unrated thesis, or update first thesis
        const thesisTags = (person as Person).thesis_tags;
        const unratedThesis = Object.keys(thesisTags).find(t => thesisTags[t].rating === null);
        const targetThesis = unratedThesis || Object.keys(thesisTags)[0];

        if (targetThesis) {
          thesisTags[targetThesis].rating = rating;
          thesisTags[targetThesis].rated_at = new Date().toISOString();
        }
      }

      if (!store.meta) store.meta = {};
      store.meta.updated_at = new Date().toISOString();
      await fs.writeFile(CANDIDATES_PATH, JSON.stringify(store, null, 2));
      return true;
    }

    // V1 format fallback
    const candidates = store.candidates || [];
    const candidate = candidates.find((c: any) => c.linkedin === linkedin);
    if (!candidate) return false;

    candidate.rating = rating;
    candidate.rated_at = new Date().toISOString();
    store.updated_at = new Date().toISOString();
    await fs.writeFile(CANDIDATES_PATH, JSON.stringify(store, null, 2));
    return true;
  } catch (error) {
    console.error("Error updating CLI store:", error);
    return false;
  }
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

    candidates = localCandidates.map((c) => ({
      ...c,
      voted: c.rating !== null && c.rating !== undefined,
      vote: c.rating || null,
    }));

    voteCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (const c of localCandidates) {
      if (c.rating && c.rating >= 1 && c.rating <= 5) {
        voteCounts[c.rating]++;
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
  const { linkedin, name, role, bucket, vote, thesis } = body;

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

  // Update CLI candidate store directly (pass thesis for V2 format)
  const updated = await updateCliCandidateRating(linkedin, Number(vote), thesis);
  if (updated) {
    return NextResponse.json({ status: "ok", source: "cli-store", thesis });
  }

  // Fallback to separate votes file
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
