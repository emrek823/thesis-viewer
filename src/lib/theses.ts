import fs from "fs";
import path from "path";
import matter from "gray-matter";

const THESES_DIR = path.join(process.cwd(), "content/Theses");
const PROCESSED_DIR = path.join(process.cwd(), "content/Processed");

export interface Thesis {
  slug: string;
  title: string;
  content: string;
  maturity: "Hypothesis" | "Emerging" | "Established" | "Conviction";
  take: string;
  sources: Source[];
}

export interface Source {
  slug: string;
  title: string;
  content: string;
  date?: string;
}

function extractMaturity(content: string): Thesis["maturity"] {
  const maturityMatch = content.match(
    /\*\*Maturity:\*\*\s*(Hypothesis|Emerging|Established|Conviction)/i
  );
  if (maturityMatch) {
    return maturityMatch[1] as Thesis["maturity"];
  }
  // Try table format
  const tableMatch = content.match(
    /\|\s*Maturity\s*\|\s*(Hypothesis|Emerging|Established|Conviction)/i
  );
  if (tableMatch) {
    return tableMatch[1] as Thesis["maturity"];
  }
  return "Hypothesis";
}

function extractTake(content: string): string {
  // Look for "The Take" or "## The Take" section
  const takeMatch = content.match(
    /(?:##?\s*)?(?:The\s+)?Take[:\s]*\n+([\s\S]*?)(?=\n##|\n\*\*|$)/i
  );
  if (takeMatch) {
    // Get first paragraph
    const firstPara = takeMatch[1].split("\n\n")[0].trim();
    return firstPara.slice(0, 300) + (firstPara.length > 300 ? "..." : "");
  }
  // Fallback: first paragraph after title
  const lines = content.split("\n").filter((l) => l.trim());
  for (const line of lines.slice(1)) {
    if (!line.startsWith("#") && !line.startsWith("|") && line.length > 50) {
      return line.slice(0, 300) + (line.length > 300 ? "..." : "");
    }
  }
  return "";
}

function extractSources(content: string): string[] {
  const sources: string[] = [];
  // Look for wikilinks in evidence tables or citations
  const wikilinks = content.match(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g);
  if (wikilinks) {
    for (const link of wikilinks) {
      const match = link.match(/\[\[([^\]|]+)/);
      if (match) {
        sources.push(match[1]);
      }
    }
  }
  return Array.from(new Set(sources));
}

export function getAllTheses(): Thesis[] {
  if (!fs.existsSync(THESES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(THESES_DIR).filter((f) => f.endsWith(".md"));

  return files.map((filename) => {
    const filePath = path.join(THESES_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(fileContent);

    const slug = filename.replace(".md", "");
    const title = slug.replace(/-/g, " ");

    return {
      slug,
      title,
      content,
      maturity: extractMaturity(content),
      take: extractTake(content),
      sources: [],
    };
  });
}

export function getThesis(slug: string): Thesis | null {
  const filePath = path.join(THESES_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  const sourceNames = extractSources(content);
  const sources = sourceNames
    .map((name) => getSource(name))
    .filter((s): s is Source => s !== null);

  return {
    slug,
    title: slug.replace(/-/g, " "),
    content,
    maturity: extractMaturity(content),
    take: extractTake(content),
    sources,
  };
}

export function getSource(name: string): Source | null {
  // Try direct path
  let filePath = path.join(PROCESSED_DIR, `${name}.md`);

  if (!fs.existsSync(filePath)) {
    // Try finding in subdirectories
    const searchDirs = [PROCESSED_DIR];
    for (const dir of searchDirs) {
      if (!fs.existsSync(dir)) continue;
      const found = findFile(dir, `${name}.md`);
      if (found) {
        filePath = found;
        break;
      }
    }
  }

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return {
    slug: name,
    title: data.title || name.replace(/-/g, " "),
    content,
    date: data.date,
  };
}

function findFile(dir: string, filename: string): string | null {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const found = findFile(fullPath, filename);
      if (found) return found;
    } else if (entry.name === filename) {
      return fullPath;
    }
  }
  return null;
}

export function getAllSources(): Source[] {
  if (!fs.existsSync(PROCESSED_DIR)) {
    return [];
  }

  const sources: Source[] = [];

  function walkDir(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.name.endsWith(".md")) {
        const fileContent = fs.readFileSync(fullPath, "utf-8");
        const { content, data } = matter(fileContent);
        const slug = entry.name.replace(".md", "");
        sources.push({
          slug,
          title: data.title || slug.replace(/-/g, " "),
          content,
          date: data.date,
        });
      }
    }
  }

  walkDir(PROCESSED_DIR);
  return sources;
}
