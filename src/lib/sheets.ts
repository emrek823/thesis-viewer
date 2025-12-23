import { google } from "googleapis";

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

function getAuth() {
  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET
  );

  oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
  });

  return oauth2Client;
}

function getSheets() {
  return google.sheets({ version: "v4", auth: getAuth() });
}

export interface Candidate {
  name: string;
  role: string;
  bucket: string;
  linkedin: string;
  thesis: string;
  rating: number | null;
  ratedAt: string | null;
}

export async function getCandidates(): Promise<Candidate[]> {
  if (!SPREADSHEET_ID) {
    console.warn("No GOOGLE_SHEET_ID configured, using fallback");
    return [];
  }

  try {
    const sheets = getSheets();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Candidates!A2:G100",
    });

    const rows = response.data.values || [];
    return rows.map((row) => ({
      name: row[0] || "",
      role: row[1] || "",
      bucket: row[2] || "",
      linkedin: row[3] || "",
      thesis: row[4] || "",
      rating: row[5] ? parseInt(row[5]) : null,
      ratedAt: row[6] || null,
    }));
  } catch (error) {
    console.error("Error fetching candidates from Sheets:", error);
    return [];
  }
}

export async function updateRating(
  linkedin: string,
  rating: number
): Promise<boolean> {
  if (!SPREADSHEET_ID) {
    console.warn("No GOOGLE_SHEET_ID configured");
    return false;
  }

  try {
    const sheets = getSheets();

    // First, find the row with this LinkedIn URL
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Candidates!A2:G100",
    });

    const rows = response.data.values || [];
    const rowIndex = rows.findIndex((row) => row[3] === linkedin);

    if (rowIndex === -1) {
      console.error("LinkedIn URL not found:", linkedin);
      return false;
    }

    // Update the rating and timestamp (columns F and G, 1-indexed row)
    const rowNumber = rowIndex + 2; // +2 because of header and 0-indexing
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `Candidates!F${rowNumber}:G${rowNumber}`,
      valueInputOption: "RAW",
      requestBody: {
        values: [[rating, timestamp]],
      },
    });

    return true;
  } catch (error) {
    console.error("Error updating rating:", error);
    return false;
  }
}

export async function addCandidate(candidate: Omit<Candidate, "rating" | "ratedAt">): Promise<boolean> {
  if (!SPREADSHEET_ID) {
    console.warn("No GOOGLE_SHEET_ID configured");
    return false;
  }

  try {
    const sheets = getSheets();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Candidates!A:G",
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          candidate.name,
          candidate.role,
          candidate.bucket,
          candidate.linkedin,
          candidate.thesis,
          "",
          ""
        ]],
      },
    });

    return true;
  } catch (error) {
    console.error("Error adding candidate:", error);
    return false;
  }
}
