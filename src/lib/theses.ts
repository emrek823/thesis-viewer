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
  type?: string;
  folder?: string;
}

export interface SourceWithBacklinks extends Source {
  backlinks: { slug: string; title: string; maturity: Thesis["maturity"] }[];
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

/**
 * Sanitize thesis content for external/public viewing:
 * - Remove everything after Open Questions section (Evidence, Confidence, etc.)
 * - Strip wiki links [[...]]
 * - Remove first H1 if it matches the title (prevents duplicate title)
 */
function sanitizeForExternal(content: string, title: string): string {
  let sanitized = content;

  // 1. Truncate after Open Questions section
  // Keep Open Questions but remove Evidence, Confidence, and anything after
  const openQuestionsMatch = sanitized.match(
    /(## Open Questions[\s\S]*?)(?=\n---\n\n## Evidence|\n## Evidence|\n---\n\n\*Confidence|\n\*Confidence|$)/i
  );
  if (openQuestionsMatch) {
    // Find where Open Questions starts and keep everything up to end of that section
    const beforeOpenQuestions = sanitized.substring(
      0,
      sanitized.indexOf("## Open Questions")
    );
    sanitized = beforeOpenQuestions + openQuestionsMatch[1].trim();
  } else {
    // Fallback: just cut at Evidence or Confidence
    const evidenceIdx = sanitized.indexOf("\n## Evidence");
    const confidenceIdx = sanitized.search(/\n\*Confidence:/);
    const cutIdx = Math.min(
      evidenceIdx > 0 ? evidenceIdx : Infinity,
      confidenceIdx > 0 ? confidenceIdx : Infinity
    );
    if (cutIdx !== Infinity) {
      sanitized = sanitized.substring(0, cutIdx).trim();
    }
  }

  // 2. Strip wiki links [[Source/Path/File]] or [[link|display text]]
  // Replace with just the display text or nothing
  sanitized = sanitized.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2"); // [[path|text]] -> text
  sanitized = sanitized.replace(/\[\[[^\]]+\]\]/g, ""); // [[path]] -> empty

  // Clean up any orphaned citation markers (e.g., "> quote\n> ")
  sanitized = sanitized.replace(/>\s*\n>\s*$/gm, "");

  // 3. Remove first H1 if it matches the title (case-insensitive, trimmed)
  const h1Match = sanitized.match(/^# (.+)\n/);
  if (h1Match) {
    const h1Title = h1Match[1].trim();
    // Compare normalized versions
    if (h1Title.toLowerCase() === title.toLowerCase()) {
      sanitized = sanitized.replace(/^# .+\n+/, "");
    }
  }

  return sanitized.trim();
}

export function getAllTheses(): Thesis[] {
  if (!fs.existsSync(THESES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(THESES_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const filePath = path.join(THESES_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { content } = matter(fileContent);

      const slug = filename.replace(".md", "");
      // Title is the slug itself (filenames are now human-readable)
      const title = slug;

      // Skip empty files or files named "Theses"
      if (!content.trim() || slug.toLowerCase() === "theses") {
        return null;
      }

      return {
        slug,
        title,
        content: sanitizeForExternal(content, title),
        maturity: extractMaturity(content),
        take: extractTake(content),
        sources: [],
      };
    })
    .filter((t): t is NonNullable<typeof t> => t !== null);
}

export function getThesis(slug: string): Thesis | null {
  // Block access to "Theses" file
  if (slug.toLowerCase() === "theses") {
    return null;
  }

  const filePath = path.join(THESES_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  // Skip empty files
  if (!content.trim()) {
    return null;
  }

  const title = slug;

  // Note: We extract sources from raw content before sanitizing
  const sourceNames = extractSources(content);
  const sources = sourceNames
    .map((name) => getSource(name))
    .filter((s): s is Source => s !== null);

  return {
    slug,
    title,
    content: sanitizeForExternal(content, title),
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

  try {
    const { content, data } = matter(fileContent);
    // gray-matter auto-parses dates to Date objects, convert back to string
    // Check both 'date' and 'published' fields
    const rawDate = data.date || data.published;
    let dateStr: string | undefined;
    if (rawDate) {
      dateStr = rawDate instanceof Date ? rawDate.toISOString().split('T')[0] : String(rawDate);
    }
    return {
      slug: name,
      title: data.title || name.replace(/-/g, " "),
      content,
      date: dateStr,
    };
  } catch {
    // If frontmatter parsing fails, return content as-is
    // Strip any malformed frontmatter
    const contentWithoutFrontmatter = fileContent.replace(/^---[\s\S]*?---\n?/, "");
    return {
      slug: name,
      title: name.replace(/-/g, " "),
      content: contentWithoutFrontmatter,
    };
  }
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

  function walkDir(dir: string, folder: string = "") {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath, entry.name);
      } else if (entry.name.endsWith(".md")) {
        const fileContent = fs.readFileSync(fullPath, "utf-8");
        const slug = entry.name.replace(".md", "");

        try {
          const { content, data } = matter(fileContent);
          // gray-matter auto-parses dates to Date objects, convert back to string
          // Check both 'date' and 'published' fields
          const rawDate = data.date || data.published;
          let dateStr: string | undefined;
          if (rawDate) {
            dateStr = rawDate instanceof Date ? rawDate.toISOString().split('T')[0] : String(rawDate);
          }
          sources.push({
            slug,
            title: data.title || slug.replace(/-/g, " "),
            content,
            date: dateStr,
            type: data.type,
            folder: folder || undefined,
          });
        } catch {
          // Handle malformed frontmatter
          const contentWithoutFrontmatter = fileContent.replace(/^---[\s\S]*?---\n?/, "");
          sources.push({
            slug,
            title: slug.replace(/-/g, " "),
            content: contentWithoutFrontmatter,
            folder: folder || undefined,
          });
        }
      }
    }
  }

  walkDir(PROCESSED_DIR);
  return sources;
}

export function getSourceWithBacklinks(slug: string): SourceWithBacklinks | null {
  const source = getSource(slug);
  if (!source) return null;

  // Find all theses that cite this source
  const theses = getAllTheses();
  const backlinks: SourceWithBacklinks["backlinks"] = [];

  for (const thesis of theses) {
    const thesisPath = path.join(THESES_DIR, `${thesis.slug}.md`);
    if (!fs.existsSync(thesisPath)) continue;

    const content = fs.readFileSync(thesisPath, "utf-8");
    // Check if this thesis cites the source
    if (content.includes(`[[${slug}]]`) || content.includes(`[[${slug}|`)) {
      backlinks.push({
        slug: thesis.slug,
        title: thesis.title,
        maturity: thesis.maturity,
      });
    }
  }

  // Get folder info
  let folder: string | undefined;
  const found = findFileWithPath(PROCESSED_DIR, `${slug}.md`);
  if (found) {
    const relativePath = path.relative(PROCESSED_DIR, found);
    const parts = relativePath.split(path.sep);
    if (parts.length > 1) {
      folder = parts[0];
    }
  }

  return {
    ...source,
    folder,
    backlinks,
  };
}

function findFileWithPath(dir: string, filename: string): string | null {
  if (!fs.existsSync(dir)) return null;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const found = findFileWithPath(fullPath, filename);
      if (found) return found;
    } else if (entry.name === filename) {
      return fullPath;
    }
  }
  return null;
}
