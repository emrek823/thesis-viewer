import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const HAPPENSTANCE_EMAIL = "agent@happenstance.ai";

function getAuth() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });
  return oauth2Client;
}

// POST: Send query to Happenstance
export async function POST(request: NextRequest) {
  const { name, role, company, linkedin, candidateRow } = await request.json();

  if (!name) {
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  }

  const companyName = company || extractCompany(role);
  const query = companyName
    ? `Who knows ${name} at ${companyName}?`
    : `Who knows ${name} (${role})?`;

  const emailBody = `${query}

Context: Looking for warm intro paths to ${name} for research conversation about healthcare AI.

LinkedIn: ${linkedin || "N/A"}
Role: ${role || "N/A"}

---
(Automated query from Virtue VC outbound system)`;

  try {
    const auth = getAuth();
    const gmail = google.gmail({ version: "v1", auth });

    // Create email
    const subject = `Connection search: ${name}`;
    const message = [
      `To: ${HAPPENSTANCE_EMAIL}`,
      `Subject: ${subject}`,
      `Content-Type: text/plain; charset=utf-8`,
      "",
      emailBody,
    ].join("\n");

    const encodedMessage = Buffer.from(message)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: encodedMessage,
      },
    });

    // Update sheet to mark as "checking"
    if (candidateRow && process.env.GOOGLE_SHEET_ID) {
      const sheets = google.sheets({ version: "v4", auth });
      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: `Candidates!H${candidateRow}`,
        valueInputOption: "RAW",
        requestBody: {
          values: [["Checking..."]],
        },
      });
    }

    return NextResponse.json({
      status: "sent",
      query,
      message: `Email sent to ${HAPPENSTANCE_EMAIL}`
    });
  } catch (error) {
    console.error("Gmail send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

// GET: Check inbox for Happenstance responses and update sheet
export async function GET() {
  try {
    const auth = getAuth();
    const gmail = google.gmail({ version: "v1", auth });

    // Search for emails from Happenstance in last 24 hours
    const response = await gmail.users.messages.list({
      userId: "me",
      q: `from:${HAPPENSTANCE_EMAIL} newer_than:1d`,
      maxResults: 20,
    });

    const messages = response.data.messages || [];
    const results: Array<{
      subject: string;
      snippet: string;
      body: string;
      candidateName: string | null;
    }> = [];

    for (const msg of messages) {
      const full = await gmail.users.messages.get({
        userId: "me",
        id: msg.id!,
        format: "full",
      });

      const headers = full.data.payload?.headers || [];
      const subject = headers.find((h) => h.name === "Subject")?.value || "";
      const snippet = full.data.snippet || "";

      // Extract body
      let body = "";
      if (full.data.payload?.body?.data) {
        body = Buffer.from(full.data.payload.body.data, "base64").toString();
      } else if (full.data.payload?.parts) {
        const textPart = full.data.payload.parts.find(
          (p) => p.mimeType === "text/plain"
        );
        if (textPart?.body?.data) {
          body = Buffer.from(textPart.body.data, "base64").toString();
        }
      }

      // Try to extract candidate name from subject
      const nameMatch = subject.match(/Connection search: (.+)/);
      const candidateName = nameMatch ? nameMatch[1] : null;

      results.push({
        subject,
        snippet,
        body: body.substring(0, 1000),
        candidateName,
      });

      // If we found a candidate name, update the sheet
      if (candidateName && process.env.GOOGLE_SHEET_ID) {
        await updateSheetWithWarmPath(auth, candidateName, body);
      }
    }

    return NextResponse.json({
      found: results.length,
      results,
    });
  } catch (error) {
    console.error("Gmail read error:", error);
    return NextResponse.json({ error: "Failed to check inbox" }, { status: 500 });
  }
}

async function updateSheetWithWarmPath(
  auth: ReturnType<typeof getAuth>,
  candidateName: string,
  responseBody: string
) {
  const sheets = google.sheets({ version: "v4", auth });

  // Find the row with this candidate
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Candidates!A2:H100",
  });

  const rows = response.data.values || [];
  const rowIndex = rows.findIndex(
    (row) => row[0]?.toLowerCase() === candidateName.toLowerCase()
  );

  if (rowIndex === -1) {
    console.log(`Candidate not found: ${candidateName}`);
    return;
  }

  // Parse response to extract key info
  const warmPath = parseHappenstanceResponse(responseBody);

  // Update column H (Warm Path)
  const rowNumber = rowIndex + 2;
  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `Candidates!H${rowNumber}`,
    valueInputOption: "RAW",
    requestBody: {
      values: [[warmPath]],
    },
  });
}

function parseHappenstanceResponse(body: string): string {
  // Extract key connections from Happenstance response
  // This will vary based on their response format

  // Look for patterns like "X knows Y" or "mutual connections"
  const lines = body.split("\n").filter((l) => l.trim());

  // Take first few meaningful lines as summary
  const summary = lines
    .filter((l) =>
      l.includes("knows") ||
      l.includes("connection") ||
      l.includes("mutual") ||
      l.includes("worked with") ||
      l.includes("met")
    )
    .slice(0, 3)
    .join("; ");

  return summary || body.substring(0, 200);
}

function extractCompany(role: string): string {
  const patterns = [
    /at\s+([A-Z][A-Za-z0-9\s&]+)/,
    /,\s*([A-Z][A-Za-z0-9\s&]+)$/,
    /-\s*([A-Z][A-Za-z0-9\s&]+)$/,
  ];
  for (const pattern of patterns) {
    const match = role.match(pattern);
    if (match) return match[1].trim();
  }
  return "";
}
