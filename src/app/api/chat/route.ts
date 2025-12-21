import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { getThesis } from "@/lib/theses";

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages, thesisSlug } = await req.json();

  const thesis = thesisSlug ? getThesis(thesisSlug) : null;

  let systemPrompt = `You are a research assistant helping analyze investment theses for a healthcare-focused VC firm.

Be concise and direct. Focus on mechanisms, numbers, and investment implications.
When referencing sources, be specific about which source supports which claim.
If asked to suggest edits, format them clearly so they can be copied.`;

  if (thesis) {
    systemPrompt += `

## Current Thesis: ${thesis.title}

### Maturity: ${thesis.maturity}

### Content:
${thesis.content}

### Available Sources (${thesis.sources.length}):
${thesis.sources
  .map(
    (s) => `
#### ${s.title}
${s.content.slice(0, 2000)}${s.content.length > 2000 ? "..." : ""}
`
  )
  .join("\n")}`;
  }

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}
