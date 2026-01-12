import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const EXA_API_KEY = process.env.EXA_API_KEY;
const VAULT_PATH = process.env.VAULT_PATH || "/Users/virtue/Desktop/Obsidian Vault/LLM_Second_Brain";
const THESES_PATH = path.join(VAULT_PATH, "Theses");

interface ExaResult {
  title: string;
  url: string;
  text?: string;
  author?: string;
}

interface OpenQuestion {
  text: string;
  section: "bull" | "bear";
  validation?: string;
}

interface Candidate {
  name: string;
  role: string;
  bucket: string;
  linkedin: string;
  thesis: string;
  source_question: string;
}

// GET: List available theses
export async function GET() {
  try {
    const files = await fs.readdir(THESES_PATH);
    const theses = files
      .filter((f) => f.endsWith(".md"))
      .map((f) => ({
        filename: f,
        title: f.replace(".md", ""),
      }));
    return NextResponse.json({ theses });
  } catch (error) {
    console.error("Error reading theses:", error);
    return NextResponse.json({ error: "Failed to read theses" }, { status: 500 });
  }
}

// POST: Generate candidates for a thesis
export async function POST(request: NextRequest) {
  const { thesis } = await request.json();

  if (!thesis) {
    return NextResponse.json({ error: "Thesis filename required" }, { status: 400 });
  }

  if (!EXA_API_KEY) {
    return NextResponse.json({ error: "EXA_API_KEY not configured" }, { status: 500 });
  }

  try {
    // 1. Read thesis file
    const thesisPath = path.join(THESES_PATH, thesis);
    const content = await fs.readFile(thesisPath, "utf-8");

    // 2. Extract open questions (unchecked items with validation needs)
    const openQuestions = extractOpenQuestions(content);

    if (openQuestions.length === 0) {
      return NextResponse.json({
        message: "No open questions found in thesis",
        candidates: [],
      });
    }

    // 3. Generate Exa queries for each open question
    const allCandidates: Candidate[] = [];
    const thesisTitle = thesis.replace(".md", "");

    for (const question of openQuestions) {
      const queries = generateExaQueries(question);

      for (const query of queries) {
        const results = await exaSearch(query);
        const candidates = parseLinkedInResults(results, thesisTitle, question.text);
        allCandidates.push(...candidates);
      }
    }

    // 4. Dedupe by LinkedIn URL
    const seen = new Set<string>();
    const uniqueCandidates = allCandidates.filter((c) => {
      if (seen.has(c.linkedin)) return false;
      seen.add(c.linkedin);
      return true;
    });

    // 5. Load existing candidates and dedupe against them
    const existingPath = path.join(process.cwd(), "content/outbound/candidates.json");
    let existing: Candidate[] = [];
    try {
      const existingData = await fs.readFile(existingPath, "utf-8");
      existing = JSON.parse(existingData);
    } catch {
      // File doesn't exist, that's fine
    }

    const existingUrls = new Set(existing.map((c) => c.linkedin));
    const newCandidates = uniqueCandidates.filter((c) => !existingUrls.has(c.linkedin));

    // 6. Append new candidates to file
    if (newCandidates.length > 0) {
      const updated = [...existing, ...newCandidates];
      await fs.writeFile(existingPath, JSON.stringify(updated, null, 2));
    }

    return NextResponse.json({
      message: `Found ${newCandidates.length} new candidates`,
      openQuestions: openQuestions.map((q) => q.text),
      newCandidates,
      totalCandidates: existing.length + newCandidates.length,
    });
  } catch (error) {
    console.error("Discovery error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

function extractOpenQuestions(content: string): OpenQuestion[] {
  const questions: OpenQuestion[] = [];
  const lines = content.split("\n");

  let currentSection: "bull" | "bear" | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track which section we're in
    if (line.includes("## Bull Case")) {
      currentSection = "bull";
    } else if (line.includes("## Bear Case")) {
      currentSection = "bear";
    } else if (line.startsWith("## ") && !line.includes("Bull") && !line.includes("Bear")) {
      currentSection = null;
    }

    // Find unchecked items: - [ ]
    if (currentSection && line.match(/^-\s*\[\s*\]/)) {
      const text = line.replace(/^-\s*\[\s*\]\s*/, "").replace(/\*\*([^*]+)\*\*/, "$1").trim();

      // Look for validation hint in next lines
      let validation = "";
      for (let j = i + 1; j < Math.min(i + 3, lines.length); j++) {
        if (lines[j].includes("Needs validation:") || lines[j].includes("*Needs")) {
          validation = lines[j].replace(/.*Needs validation:\s*/, "").replace(/\*/g, "").trim();
          break;
        }
      }

      questions.push({ text, section: currentSection, validation });
    }
  }

  return questions;
}

function generateExaQueries(question: OpenQuestion): string[] {
  const queries: string[] = [];
  const text = question.text.toLowerCase();
  const validation = question.validation?.toLowerCase() || "";

  // Extract key entities and concepts
  const combined = `${text} ${validation}`;

  // Pharma-related queries
  if (combined.includes("pharma") || combined.includes("drug") || combined.includes("trial")) {
    queries.push("VP AI machine learning pharma drug discovery linkedin");
    queries.push("Director clinical trial innovation pharma linkedin");
    queries.push("Head computational biology biopharma linkedin");
  }

  // Academic medical center queries
  if (combined.includes("dana-farber") || combined.includes("md anderson") || combined.includes("msk") || combined.includes("academic") || combined.includes("replicate")) {
    queries.push("Dana-Farber AI machine learning oncology linkedin");
    queries.push("MD Anderson computational oncology informatics linkedin");
    queries.push("clinical informatics oncology professor linkedin");
  }

  // Health system / data queries
  if (combined.includes("data") || combined.includes("health system") || combined.includes("access")) {
    queries.push("Director research data partnerships health system linkedin");
    queries.push("Chief data officer academic medical center linkedin");
    queries.push("VP clinical data warehouse healthcare linkedin");
  }

  // Payer queries
  if (combined.includes("payer") || combined.includes("insur") || combined.includes("health plan")) {
    queries.push("VP AI machine learning health plan payer linkedin");
    queries.push("Director analytics UnitedHealth Anthem Cigna linkedin");
  }

  // AI/ML research queries
  if (combined.includes("reasoning") || combined.includes("llm") || combined.includes("model")) {
    queries.push("clinical AI evaluation researcher linkedin");
    queries.push("healthcare foundation model researcher linkedin");
  }

  // Default: generate from validation hint
  if (queries.length === 0 && validation) {
    queries.push(`${validation.split(",")[0]} healthcare AI linkedin`);
  }

  // Fallback
  if (queries.length === 0) {
    queries.push("healthcare AI executive linkedin");
  }

  return queries.slice(0, 3); // Max 3 queries per question
}

async function exaSearch(query: string): Promise<ExaResult[]> {
  try {
    const response = await fetch("https://api.exa.ai/search", {
      method: "POST",
      headers: {
        "x-api-key": EXA_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        numResults: 10,
        type: "neural",
        useAutoprompt: true,
        includeDomains: ["linkedin.com"],
        contents: { text: { maxCharacters: 500 } },
      }),
    });

    if (!response.ok) {
      console.error("Exa API error:", response.status, await response.text());
      return [];
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Exa search error:", error);
    return [];
  }
}

function isOrganization(name: string): boolean {
  const lower = name.toLowerCase();

  // Organization keywords
  const orgKeywords = [
    "institute", "university", "hospital", "center", "centre",
    "foundation", "association", "society", "corporation", "corp",
    "inc", "llc", "ltd", "company", "group", "partners",
    "health system", "medical center", "clinic", "laboratory",
    "pharma", "therapeutics", "biosciences", "biotech",
    "research", "sciences", "analytics", "solutions", "services",
    "network", "alliance", "consortium", "organization"
  ];

  for (const keyword of orgKeywords) {
    if (lower.includes(keyword)) return true;
  }

  // Too many words = likely org (people usually have 2-4 words)
  const wordCount = name.split(/\s+/).length;
  if (wordCount > 5) return true;

  // All caps = likely acronym/org
  if (name === name.toUpperCase() && name.length > 3) return true;

  // Contains numbers (except common suffixes like "III")
  if (/\d/.test(name) && !/\b(I{1,3}|IV|V|VI{0,3}|2nd|3rd)\b/i.test(name)) return true;

  return false;
}

function parseLinkedInResults(results: ExaResult[], thesis: string, sourceQuestion: string): Candidate[] {
  const candidates: Candidate[] = [];

  for (const result of results) {
    const url = result.url;
    let profileUrl = "";
    let name = "";
    let role = "";

    // Handle different LinkedIn URL types
    if (url.includes("linkedin.com/in/")) {
      // Direct profile URL
      profileUrl = url.split("?")[0]; // Remove query params
      const title = result.title || "";
      name = title.split(" - ")[0].split(" | ")[0].trim();
      if (title.includes(" - ")) {
        role = title.split(" - ").slice(1).join(" - ").replace(" | LinkedIn", "").trim();
      }
    } else if (url.includes("linkedin.com/posts/")) {
      // Post URL - extract username from path
      // Format: linkedin.com/posts/username_postid
      const match = url.match(/linkedin\.com\/posts\/([^_]+)/);
      if (match) {
        const username = match[1];
        profileUrl = `https://www.linkedin.com/in/${username}`;
        // Name is usually the author
        name = result.author || "";
        // Role from title (posts often have "Title | Author" format)
        const title = result.title || "";
        // Extract role from the post title
        const rolePart = title.split(" | ")[0];
        if (rolePart && !rolePart.includes(name)) {
          role = rolePart;
        }
      }
    } else if (url.includes("linkedin.com/jobs/")) {
      // Skip job postings - they're not people
      continue;
    } else if (url.includes("linkedin.com/company/")) {
      // Skip company pages
      continue;
    }

    // Skip if we couldn't extract profile URL or name
    if (!profileUrl || !name || name.length < 3) continue;

    // Clean up name (remove trailing punctuation, "MD", etc. that might be attached)
    name = name.replace(/[,|].*$/, "").trim();

    // Filter out organizations (not people)
    if (isOrganization(name)) continue;

    // Determine bucket based on role
    const roleLower = (role || "").toLowerCase();
    const bucket =
      roleLower.includes("professor") ||
      roleLower.includes("phd") ||
      roleLower.includes("researcher") ||
      roleLower.includes("scientist") ||
      roleLower.includes("academic") ||
      name.toLowerCase().includes("phd") ||
      name.toLowerCase().includes("md")
        ? "academic"
        : "industry";

    candidates.push({
      name,
      role: role || "Unknown",
      bucket,
      linkedin: profileUrl,
      thesis,
      source_question: sourceQuestion,
    });
  }

  return candidates;
}
