import { anthropic } from "@ai-sdk/anthropic";
import { streamText, tool } from "ai";
import { z } from "zod";
import { getThesis } from "@/lib/theses";

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages, thesisSlug } = await req.json();

  const thesis = thesisSlug ? getThesis(thesisSlug) : null;

  let systemPrompt = `You are a sharp, critical research partner for a healthcare VC firm. Your job is to stress-test investment theses, not validate them.

## Your Role
- Challenge assumptions with evidence
- Find gaps in reasoning or missing market dynamics
- Surface counter-evidence and bear cases
- When asked, propose specific edits (exact text that could be added/changed)
- Search the web when you need current data, competitor info, or to validate claims

## Style
- Be direct and concise. No fluff.
- Lead with the insight, not preamble
- Use numbers when available
- If you don't know, say so and search
- When proposing edits, use this format:

**Proposed Edit:**
> [Section Name]
>
> [Exact text to add or replace]

## What Makes a Good Thesis
- Clear, falsifiable take with conviction
- Quantified market dynamics (not just TAM)
- Specific timing catalysts
- Honest bear case with real risks
- Concrete startup opportunities with wedges`;

  if (thesis) {
    systemPrompt += `

---

## Current Thesis: ${thesis.title}
**Maturity:** ${thesis.maturity}

${thesis.content}

---

## Cited Sources (${thesis.sources.length}):
${thesis.sources
  .slice(0, 10) // Limit to first 10 sources to manage context
  .map(
    (s) => `
### ${s.title}
${s.content.slice(0, 1500)}${s.content.length > 1500 ? "..." : ""}
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
          "Search the web for current information, market data, competitor updates, regulatory news, or to validate claims in the thesis. Use this when you need fresh data or to fact-check.",
        parameters: z.object({
          query: z
            .string()
            .describe("The search query - be specific and include relevant context like company names, dates, or market segments"),
        }),
        execute: async ({ query }) => {
          // Use Anthropic's built-in web search via a separate call
          // For now, return a placeholder - we'll use the client-side approach
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
                    content: `Search for: ${query}. Return a concise summary of the most relevant findings with sources.`,
                  },
                ],
              }),
            }
          );

          if (!response.ok) {
            return { error: "Web search failed", query };
          }

          const data = await response.json();

          // Extract text content from response
          const textContent = data.content
            ?.filter((c: { type: string }) => c.type === "text")
            ?.map((c: { text: string }) => c.text)
            ?.join("\n");

          return {
            query,
            results: textContent || "No results found",
          };
        },
      }),
    },
    maxSteps: 5, // Allow multiple tool uses
  });

  return result.toDataStreamResponse();
}
