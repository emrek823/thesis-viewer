---
url: https://creatoreconomy.so/p/claude-code-tutorial-build-a-youtube-research-agent-in-15-min
title: "Claude Code Tutorial: Build a YouTube Research Agent using Slash Commands"
clipped: 2025-12-24 05:34
source: browser-history
---

# Claude Code Tutorial: Build a YouTube Research Agent using Slash Commands

> Source: [https://creatoreconomy.so/p/claude-code-tutorial-build-a-youtube-research-agent-in-15-min](https://creatoreconomy.so/p/claude-code-tutorial-build-a-youtube-research-agent-in-15-min)

[AI Tutorials & Tools](https://creatoreconomy.so/s/ai-tutorials-and-tools/?utm_source=substack&utm_medium=menu)

# Claude Code Tutorial: Build a YouTube Research Agent using Slash Commands

### Learn how to use slash commands to turn Claude Code into a powerful AI research agent

[![Peter Yang's avatar](https://substackcdn.com/image/fetch/$s_!827n!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd2dbd75e-1c5a-48ab-94ef-b24caea63cdf_1024x1024.png)](https://substack.com/@petergyang)

[Peter Yang](https://substack.com/@petergyang)

Sep 10, 2025

∙ Paid

39

1

Share

Dear subscribers,

Today, I want to show you how to build an AI research agent with Claude Code.

> **Most people use Claude Code for coding, but it's really an everything agent that can automate any task for you.**

In the tutorial below, I walk through how to build a YouTube research agent that finds the best videos from your favorite channels and highlights each creator’s winning formula. You’ll learn about slash commands, permissions, and more.

This agent has already changed the YouTube strategy for me and many of my creator friends. Some quotes from them:

* "Damn it's true what it says."
* "Call this the harsh truth agent."

Timestamps:

* ([00:00](https://www.youtube.com/watch?v=iW0lMW-Ff5I)) Why Claude Code is an everything agent
* ([01:10](https://www.youtube.com/watch?v=iW0lMW-Ff5I&t=70s)) Step 1: Explore solutions with Claude in plan mode
* ([03:08](https://www.youtube.com/watch?v=iW0lMW-Ff5I&t=188s)) Step 2: Set permissions to auto-approve changes
* ([04:49](https://www.youtube.com/watch?v=iW0lMW-Ff5I&t=289s)) Step 3: Write a spec for the slash command
* ([07:56](https://www.youtube.com/watch?v=iW0lMW-Ff5I&t=476s)) Step 4: Convert the spec into a detailed to-do list
* ([08:42](https://www.youtube.com/watch?v=iW0lMW-Ff5I&t=522s)) Step 5: Create the slash command and test with real channel
* ([11:01](https://www.youtube.com/watch?v=iW0lMW-Ff5I&t=661s)) Step 6: Add batch processing to analyze 5 channels at once

**[Watch now on YouTube](https://youtu.be/iW0lMW-Ff5I)** or read the written guide below.

---

Thanks to **[Linear](https://linear.app/partners/behind-the-craft)** for sponsoring this newsletter

[![](https://substackcdn.com/image/fetch/$s_!4hMr!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb813f459-9bf5-4fa6-bf75-4ced5ec32842_1456x636.png)](https://linear.app/partners/behind-the-craft)

I love working with Linear because they share my obsession for product craft and quality. Now they’re bringing the same attention to detail to build an operating system for teams to collaborate with AI agents that can:

* Analyze customer feedback from multiple sources
* Auto-triage tickets and assign owners
* Build complete features from scratch

See for yourself what the difference is by trying Linear Business for 6 months free exclusively for readers of this newsletter.

[Get 6 Months of Linear Free Now](https://linear.app/partners/behind-the-craft)

---

## What we'll build: A YouTube research agent

Let’s create a `/youtube` slash command that analyzes any channel to get the 10 best recent videos and insights on what’s working. Here's the analysis for my channel:

[![](https://substackcdn.com/image/fetch/$s_!3ALK!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15ad68e1-6756-42a2-a682-ac9b62844f07_835x587.png)](https://substackcdn.com/image/fetch/$s_!3ALK!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15ad68e1-6756-42a2-a682-ac9b62844f07_835x587.png)

You can see why I’m doing more tutorials 😅

Here’s the same analysis for Lenny’s channel:

[![](https://substackcdn.com/image/fetch/$s_!8C2F!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9e573bda-1faf-42c4-aeb8-a798d26de29a_1656x638.png)](https://substackcdn.com/image/fetch/$s_!8C2F!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9e573bda-1faf-42c4-aeb8-a798d26de29a_1656x638.png)

I’ll assume that you already have Claude Code installed. If you don’t, follow the instructions from last week’s [beginner’s tutorial](https://creatoreconomy.so/p/claude-code-beginners-tutorial-build-a-movie-app-in-15-minutes).

---

## 1. Explore solutions with Claude

> **Tip: Always start by exploring solutions with Claude in plan mode (shift-tab). It can save you hours of going down the wrong path.**

It's funny that Claude Code and other CLI tools all have a "plan mode" because the models are just way too eager to start coding. Type this prompt into Claude:

```
"I want to build a tool where if I type '/youtube @channelname', it outputs a youtube-research.md file with that channel's top recent videos (title, views, YouTube link) plus a key insight about what content works. Can you suggest 3 ways to get YouTube data with pros/cons?
```

Claude will suggest several approaches including a free tool called **yt-dlp** that can fetch YouTube data without any API keys. I would’ve never found this tool if I didn’t ask Claude to explore solutions first.

---

## 2. Set permissions to auto-approve changes

Before we go further, let's configure permissions so Claude can work without interrupting us every 30 seconds. Type:

```
/permissions
```

Claude will create a .claude/settings.local.json file. Add these specific permissions:

```
{
  "allowedTools": [
    "Read",
    "Write",
    "Bash(npm:*)",
    "Bash(yt-dlp:*)"
  ]
}
```

This lets Claude read, write, and run specific commands (e.g., npm and yt-dlp) without asking you for permission all the time. This way, we can actually get coffee and browse YouTube while Claude works. ☺️

---

## 3. Write a spec for the slash command

> **Tip: Use slash commands to re-use your favorite AI prompts and workflows.**

Now let’s ask Claude to write a spec for our `/youtube` slash command:

## This post is for paid subscribers

[Subscribe](https://creatoreconomy.so/subscribe?simple=true&next=https%3A%2F%2Fcreatoreconomy.so%2Fp%2Fclaude-code-tutorial-build-a-youtube-research-agent-in-15-min&utm_source=paywall&utm_medium=web&utm_content=172305199)

[Already a paid subscriber? **Sign in**](https://substack.com/sign-in?redirect=%2Fp%2Fclaude-code-tutorial-build-a-youtube-research-agent-in-15-min&for_pub=peteryang&change_user=false)

PreviousNext