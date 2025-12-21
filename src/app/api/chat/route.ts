import { anthropic } from "@ai-sdk/anthropic";
import { streamText, tool } from "ai";
import { z } from "zod";
import { getThesis } from "@/lib/theses";
import { parseThesis, formatThesisStructure } from "@/lib/thesis-parser";

export const maxDuration = 60;

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

## Cited Sources (${thesis.sources.length}):
${thesis.sources
  .slice(0, 8)
  .map(
    (s) => `
### ${s.title}
${s.content.slice(0, 1200)}${s.content.length > 1200 ? "..." : ""}
`
  )
  .join("\n")}`;
  }

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: systemPrompt,
    messages,
    tools: {
      webSearch: tool({
        description:
          "Search the web for current information, market data, competitor updates, regulatory news, or to validate claims in the thesis.",
        parameters: z.object({
          query: z
            .string()
            .describe("The search query - be specific"),
        }),
        execute: async ({ query }) => {
          const response = await fetch(
            `https://api.anthropic.com/v1/messages`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.ANTHROPIC_API_KEY!,
                "anthropic-version": "2023-06-01",
              },
              body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 1024,
                tools: [
                  {
                    type: "web_search_20250305",
                    name: "web_search",
                    max_uses: 3,
                  },
                ],
                messages: [
                  {
                    role: "user",
                    content: `Search for: ${query}. Return a concise summary of findings with sources.`,
                  },
                ],
              }),
            }
          );

          if (!response.ok) {
            return { error: "Web search failed", query };
          }

          const data = await response.json();
          const textContent = data.content
            ?.filter((c: { type: string }) => c.type === "text")
            ?.map((c: { text: string }) => c.text)
            ?.join("\n");

          return { query, results: textContent || "No results found" };
        },
      }),
    },
    maxSteps: 5,
  });

  return result.toDataStreamResponse();
}
