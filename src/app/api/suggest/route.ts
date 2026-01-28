import { NextResponse } from "next/server";
import { z } from "zod";
import { headers } from "next/headers";

// --- Input validation ---
const suggestSchema = z.object({
  thesis: z.string().min(1).max(200),
  suggestion: z.string().min(1).max(5000),
  email: z.union([z.string().email(), z.literal("")]).optional(),
});

// --- Slack markdown escaping ---
function escapeSlackMarkdown(text: string): string {
  return text.replace(/[*_`\[\]\\]/g, (ch) => `\\${ch}`);
}

// --- Rate limiting ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Clean up stale entries periodically (prevent unbounded growth)
setInterval(() => {
  const now = Date.now();
  rateLimitMap.forEach((entry, ip) => {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  });
}, RATE_LIMIT_WINDOW_MS);

export async function POST(req: Request) {
  // Rate limit check
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // Parse and validate input
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = suggestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { thesis, suggestion, email } = parsed.data;

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("SLACK_WEBHOOK_URL not configured");
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  // Escape user content for Slack mrkdwn
  const safeThesis = escapeSlackMarkdown(thesis);
  const safeSuggestion = escapeSlackMarkdown(suggestion);
  const safeEmail = email ? escapeSlackMarkdown(email) : "Anonymous";

  const message = {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `Thesis Comment: ${thesis.slice(0, 100)}`,
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*From:* ${safeEmail}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Comment:*\n${safeSuggestion.slice(0, 2900)}`,
        },
      },
    ],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      console.error(`Slack responded with ${response.status}`);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send to Slack:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
