// Convert Obsidian [[wikilinks]] to regular links
// Only thesis links become clickable; sources render as plain text

import fs from "fs";
import path from "path";

const THESES_DIR = path.join(process.cwd(), "content/Theses");

// Cache for file lookups
let thesisSlugs: Set<string> | null = null;

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

export function resolveWikilinks(content: string): string {
  const theses = getThesisSlugs();

  // [[Link]] -> [Link](/thesis/Link) for theses, or just "Link" for sources
  // [[Link|Display]] -> [Display](/thesis/Link) for theses, or just "Display" for sources
  return content.replace(
    /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
    (match, link, display) => {
      const text = display || link;
      const slug = link.trim();

      // Check if it's a thesis - make it a link
      if (theses.has(slug)) {
        return `[${text}](/thesis/${encodeURIComponent(slug)})`;
      }

      // Sources and other wikilinks render as plain text (italic for emphasis)
      return `*${text}*`;
    }
  );
}
