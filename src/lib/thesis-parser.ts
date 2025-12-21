export interface ThesisSection {
  id: string;
  title: string;
  level: number; // 1 = h1, 2 = h2, etc.
  paragraphs: ThesisParagraph[];
  startLine: number;
  endLine: number;
  raw: string;
}

export interface ThesisParagraph {
  id: string;
  text: string;
  sectionId: string;
  sectionTitle: string;
  index: number; // paragraph index within section
  startLine: number;
  endLine: number;
}

export interface ParsedThesis {
  sections: ThesisSection[];
  paragraphs: ThesisParagraph[];
  raw: string;
}

export function parseThesis(content: string): ParsedThesis {
  const lines = content.split("\n");
  const sections: ThesisSection[] = [];
  const paragraphs: ThesisParagraph[] = [];

  let currentSection: ThesisSection | null = null;
  let currentParagraphLines: string[] = [];
  let currentParagraphStart = 0;
  let paragraphIndex = 0;

  const flushParagraph = (endLine: number) => {
    if (currentParagraphLines.length === 0) return;

    const text = currentParagraphLines.join("\n").trim();
    if (!text || text.startsWith("|") || text.startsWith("```")) {
      // Skip tables and code blocks as paragraphs
      currentParagraphLines = [];
      return;
    }

    if (currentSection) {
      const para: ThesisParagraph = {
        id: `${currentSection.id}-p${paragraphIndex}`,
        text,
        sectionId: currentSection.id,
        sectionTitle: currentSection.title,
        index: paragraphIndex,
        startLine: currentParagraphStart,
        endLine,
      };
      currentSection.paragraphs.push(para);
      paragraphs.push(para);
      paragraphIndex++;
    }

    currentParagraphLines = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const headerMatch = line.match(/^(#{1,4})\s+(.+)$/);

    if (headerMatch) {
      // Flush current paragraph
      flushParagraph(i - 1);

      // Close previous section
      if (currentSection) {
        currentSection.endLine = i - 1;
        currentSection.raw = lines
          .slice(currentSection.startLine, i)
          .join("\n");
      }

      // Start new section
      const level = headerMatch[1].length;
      const title = headerMatch[2].trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      currentSection = {
        id,
        title,
        level,
        paragraphs: [],
        startLine: i,
        endLine: lines.length - 1,
        raw: "",
      };
      sections.push(currentSection);
      paragraphIndex = 0;
      currentParagraphStart = i + 1;
    } else if (line.trim() === "") {
      // Empty line = paragraph break
      flushParagraph(i - 1);
      currentParagraphStart = i + 1;
    } else {
      currentParagraphLines.push(line);
    }
  }

  // Flush final paragraph and section
  flushParagraph(lines.length - 1);
  if (currentSection) {
    currentSection.endLine = lines.length - 1;
    currentSection.raw = lines.slice(currentSection.startLine).join("\n");
  }

  return { sections, paragraphs, raw: content };
}

export function findParagraphByText(
  parsed: ParsedThesis,
  searchText: string
): ThesisParagraph | null {
  // Find the paragraph that contains the search text
  const normalized = searchText.toLowerCase().trim();

  for (const para of parsed.paragraphs) {
    if (para.text.toLowerCase().includes(normalized)) {
      return para;
    }
  }

  return null;
}

export function getSurroundingContext(
  parsed: ParsedThesis,
  paragraph: ThesisParagraph,
  contextSize: number = 1
): { before: ThesisParagraph[]; after: ThesisParagraph[] } {
  const sectionParas = parsed.paragraphs.filter(
    (p) => p.sectionId === paragraph.sectionId
  );
  const idx = sectionParas.findIndex((p) => p.id === paragraph.id);

  return {
    before: sectionParas.slice(Math.max(0, idx - contextSize), idx),
    after: sectionParas.slice(idx + 1, idx + 1 + contextSize),
  };
}

export function formatThesisStructure(parsed: ParsedThesis): string {
  let output = "## Thesis Structure\n\n";

  for (const section of parsed.sections) {
    const indent = "  ".repeat(section.level - 1);
    output += `${indent}### ${section.title}\n`;

    for (const para of section.paragraphs) {
      const preview =
        para.text.slice(0, 100) + (para.text.length > 100 ? "..." : "");
      output += `${indent}  [${para.id}] ${preview}\n`;
    }
    output += "\n";
  }

  return output;
}
