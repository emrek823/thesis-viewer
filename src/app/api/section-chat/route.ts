import { anthropic } from "@ai-sdk/anthropic";
import { streamText, stepCountIs, convertToModelMessages } from "ai";
import { getThesis } from "@/lib/theses";

export const maxDuration = 60;

const webSearchTool = anthropic.tools.webSearch_20250305({
  maxUses: 3,
});

export async function POST(req: Request) {
  const { messages, thesisSlug, selectedText } = await req.json();

  const thesis = thesisSlug ? getThesis(thesisSlug) : null;

  let systemPrompt = `You are a sharp research editor helping improve a specific section of an investment thesis. Your job is to help rewrite the selected text to be more precise, evidence-backed, and compelling.

## Your Role
- Focus ONLY on improving the selected text
- Use web search to find supporting evidence or counter-evidence
- Propose specific rewrites, not vague suggestions
- Be concise and direct

## How to Propose Edits

When you have a suggested rewrite, format it like this:

\`\`\`rewrite
[Your improved version of the text - ready to paste]
\`\`\`

Always explain briefly WHY you're suggesting the change (new evidence found, clarity improvement, etc.)

## Guidelines
- Keep the same general length unless expansion is needed for evidence
- Maintain the thesis's voice and style
- Cite specific sources when adding claims
- If you searched the web, reference what you found`;

  if (thesis) {
    systemPrompt += `

---

## Context: ${thesis.title}
**Maturity:** ${thesis.maturity}

## Selected Text to Improve:
"${selectedText}"

## Full Thesis (for context):
${thesis.content.slice(0, 3000)}${thesis.content.length > 3000 ? "\n\n[...truncated...]" : ""}`;
  } else {
    systemPrompt += `

---

## Selected Text to Improve:
"${selectedText}"`;
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
