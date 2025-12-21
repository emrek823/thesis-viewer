import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { thesis, suggestion, chatContext } = await req.json();

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Slack webhook not configured" },
      { status: 500 }
    );
  }

  const message = {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `📝 Thesis Suggestion: ${thesis}`,
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Suggestion:*\n${suggestion}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Chat Context:*\n${chatContext.slice(0, 2000)}${chatContext.length > 2000 ? "..." : ""}`,
        },
      },
    ],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`Slack responded with ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send to Slack:", error);
    return NextResponse.json(
      { error: "Failed to send suggestion" },
      { status: 500 }
    );
  }
}
