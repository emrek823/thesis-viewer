// Convert Obsidian [[wikilinks]] to regular links
// Checks if link matches a thesis or source and routes appropriately

import fs from "fs";
import path from "path";

const THESES_DIR = path.join(process.cwd(), "content/Theses");
const PROCESSED_DIR = path.join(process.cwd(), "content/Processed");

// Cache for file lookups
let thesisSlugs: Set<string> | null = null;
let sourceSlugs: Set<string> | null = null;

function getThesisSlugs(): Set<string> {
  if (thesisSlugs) return thesisSlugs;
  thesisSlugs = new Set();
  if (fs.existsSync(THESES_DIR)) {
    const files = fs.readdirSync(THESES_DIR).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      thesisSlugs.add(file.replace(".md", ""));
    }
  }
  return thesisSlugs;
}

function getSourceSlugs(): Set<string> {
  if (sourceSlugs) return sourceSlugs;
  sourceSlugs = new Set();

  function walkDir(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.name.endsWith(".md")) {
        sourceSlugs!.add(entry.name.replace(".md", ""));
      }
    }
  }

  walkDir(PROCESSED_DIR);
  return sourceSlugs;
}

export function resolveWikilinks(content: string): string {
  const theses = getThesisSlugs();
  const sources = getSourceSlugs();

  // [[Link]] -> [Link](/thesis/Link) or [Link](/source/Link)
  // [[Link|Display]] -> [Display](/thesis/Link) or [Display](/source/Link)
  return content.replace(
    /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
    (match, link, display) => {
      const text = display || link;
      const slug = link.trim();

      // Check if it's a thesis
      if (theses.has(slug)) {
        return `[${text}](/thesis/${encodeURIComponent(slug)})`;
      }

      // Check if it's a source
      if (sources.has(slug)) {
        return `[${text}](/source/${encodeURIComponent(slug)})`;
      }

      // Default to source (most wikilinks in theses are sources)
      return `[${text}](/source/${encodeURIComponent(slug)})`;
    }
  );
}
