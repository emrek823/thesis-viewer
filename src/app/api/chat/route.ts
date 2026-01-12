import { anthropic } from "@ai-sdk/anthropic";
import { streamText, stepCountIs, convertToModelMessages } from "ai";
import { getThesis } from "@/lib/theses";
import { parseThesis, formatThesisStructure } from "@/lib/thesis-parser";

export const maxDuration = 60;

// Anthropic's native web search tool
const webSearchTool = anthropic.tools.webSearch_20250305({
  maxUses: 3,
});

export async function POST(req: Request) {
  const { messages, thesisSlug } = await req.json();

  const thesis = thesisSlug ? getThesis(thesisSlug) : null;
  const parsedThesis = thesis ? parseThesis(thesis.content) : null;

  let systemPrompt = `You are a sharp, critical research partner for a healthcare VC firm. Your job is to stress-test investment theses and help improve them with specific, actionable edits.

## Your Role
- Challenge assumptions with evidence
- Find gaps in reasoning or missing market dynamics
- Surface counter-evidence and bear cases
- When asked for edits, provide EXACT text changes with location

## CRITICAL: Source-Grounded Responses

You have access to the thesis's cited sources below. When making claims or challenging the thesis:

1. **Cite your sources** - When referencing information from a source, use format: "According to [[Source Name]]..." or "(Source Name)"
2. **Flag unsupported claims** - If the thesis makes a claim without source support, explicitly note: "This claim lacks source evidence"
3. **Distinguish evidence types**:
   - SUPPORTED: Claim backed by cited source
   - UNSUPPORTED: Claim in thesis without source
   - CONTRADICTED: Source says something different
   - NEEDS VERIFICATION: Would benefit from additional source
4. **Don't make up numbers** - Only cite specific figures if they appear in sources or thesis

## How to Propose Edits

When suggesting changes, ALWAYS use this format:

\`\`\`edit
SECTION: [Exact section name from thesis]
LOCATION: [Paragraph ID or "after [paragraph ID]" or "replace [paragraph ID]"]
ACTION: [REPLACE | INSERT_AFTER | INSERT_BEFORE]

CURRENT TEXT:
[Copy the exact current text if replacing]

NEW TEXT:
[Your proposed replacement or addition - full paragraphs, ready to paste]
\`\`\`

Example:
\`\`\`edit
SECTION: How The Market Works
LOCATION: replace how-the-market-works-p2
ACTION: REPLACE

CURRENT TEXT:
Foundation models like GPT-4 achieve 30% completeness on trajectory prediction tasks.

NEW TEXT:
Foundation models learn statistical correlations—given features X, predict outcome Y. World models learn system dynamics—given state X and intervention I, simulate trajectory T. This distinction matters: GPT-4's 30% completeness on trajectory prediction reflects pattern matching, not causal reasoning. The Standard Model's JEPA architecture explicitly models temporal dynamics, achieving 72.7% AUROC by predicting how patient states evolve, not just classifying current states.
\`\`\`

## Style
- Be direct and concise. No fluff.
- Lead with the insight, not preamble
- Use numbers when available
- If you don't know, say so and search
- Every edit suggestion must use the \`\`\`edit format above`;

  if (thesis && parsedThesis) {
    // Build structured thesis context
    const structure = formatThesisStructure(parsedThesis);

    systemPrompt += `

---

## Current Thesis: ${thesis.title}
**Maturity:** ${thesis.maturity}

${structure}

---

## Full Thesis Content:

${thesis.content}

---

## Cited Sources (${thesis.sources.length})

These are the primary sources cited in this thesis. Use them to ground your analysis.

${thesis.sources
  .map(
    (s, i) => `
### Source ${i + 1}: ${s.title}
${s.date ? `*Date: ${s.date}*\n` : ""}
${s.content}

---
`
  )
  .join("\n")}`;
  }

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: systemPrompt,
    messages: convertToModelMessages(messages),
    tools: {
      web_search: webSearchTool,
    },
    stopWhen: stepCountIs(5),
  });

  return result.toUIMessageStreamResponse();
}
