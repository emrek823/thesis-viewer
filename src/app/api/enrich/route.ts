import { NextRequest, NextResponse } from "next/server";

const EXA_API_KEY = process.env.EXA_API_KEY;

interface ExaResult {
  title: string;
  url: string;
  publishedDate?: string;
  author?: string;
  text?: string;
}

interface ExaResponse {
  results: ExaResult[];
}

async function exaSearch(query: string, options: Record<string, unknown> = {}): Promise<ExaResult[]> {
  if (!EXA_API_KEY) {
    console.error("EXA_API_KEY not configured");
    return [];
  }

  try {
    const response = await fetch("https://api.exa.ai/search", {
      method: "POST",
      headers: {
        "x-api-key": EXA_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        numResults: 5,
        contents: { text: true },
        ...options,
      }),
    });

    if (!response.ok) {
      console.error("Exa API error:", response.status, await response.text());
      return [];
    }

    const data: ExaResponse = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Exa search error:", error);
    return [];
  }
}

export async function POST(request: NextRequest) {
  const { name, linkedin, role, company } = await request.json();

  if (!name) {
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  }

  // Calculate date 2 months ago
  const twoMonthsAgo = new Date();
  twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
  const startDate = twoMonthsAgo.toISOString();

  // Extract company from role if not provided
  const companyName = company || extractCompany(role);

  // Run searches in parallel
  const [profileResults, recentResults] = await Promise.all([
    // Profile/background search (exclude LinkedIn - can't get text from it)
    exaSearch(`${name} ${companyName} professional background`, {
      numResults: 5,
      excludeDomains: ["linkedin.com"],
    }),
    // Recent activity search (last 2 months)
    exaSearch(`"${name}" ${companyName}`, {
      numResults: 5,
      startPublishedDate: startDate,
    }),
  ]);

  // Build profile summary from results
  const profileSummary = buildProfileSummary(name, role, profileResults);
  const recentActivity = buildRecentActivity(recentResults);

  // Generate Happenstance query
  const happenstanceQuery = generateHappenstanceQuery(name, role, companyName);

  return NextResponse.json({
    profile: profileSummary,
    recent: recentActivity,
    happenstance: happenstanceQuery,
    raw: {
      profileResults: profileResults.slice(0, 3),
      recentResults: recentResults.slice(0, 5),
    },
  });
}

function extractCompany(role: string): string {
  // Try to extract company name from role string
  // Common patterns: "VP at Company", "Director, Company", "Title - Company"
  const patterns = [
    /at\s+([A-Z][A-Za-z0-9\s&]+)/,
    /,\s*([A-Z][A-Za-z0-9\s&]+)$/,
    /-\s*([A-Z][A-Za-z0-9\s&]+)$/,
    /\|\s*([A-Z][A-Za-z0-9\s&]+)/,
  ];

  for (const pattern of patterns) {
    const match = role.match(pattern);
    if (match) return match[1].trim();
  }

  return "";
}

function buildProfileSummary(name: string, role: string, results: ExaResult[]): string {
  if (results.length === 0) {
    return `${name} - ${role}. No additional profile information found.`;
  }

  // Combine relevant snippets
  const snippets = results
    .filter((r) => r.text)
    .map((r) => r.text?.substring(0, 300))
    .join(" ");

  if (!snippets) {
    return `${name} - ${role}. Found ${results.length} results but no text content.`;
  }

  // Return first 500 chars of combined snippets
  return snippets.substring(0, 500) + (snippets.length > 500 ? "..." : "");
}

function buildRecentActivity(results: ExaResult[]): Array<{
  title: string;
  url: string;
  date: string;
  snippet: string;
}> {
  return results
    .filter((r) => r.title && r.url)
    .map((r) => ({
      title: r.title,
      url: r.url,
      date: r.publishedDate
        ? new Date(r.publishedDate).toLocaleDateString()
        : "Recent",
      snippet: r.text?.substring(0, 150) || "",
    }));
}

function generateHappenstanceQuery(name: string, role: string, company: string): {
  slackQuery: string;
  emailSubject: string;
  emailBody: string;
} {
  const queryText = company
    ? `Who knows ${name} at ${company}?`
    : `Who knows ${name} (${role})?`;

  return {
    slackQuery: `@happenstance ${queryText}`,
    emailSubject: `Connection search: ${name}`,
    emailBody: `${queryText}\n\nContext: Looking for warm intro paths to ${name} for research conversation about healthcare AI.`,
  };
}
