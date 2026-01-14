---
url: https://www.atcyrus.com/stories/claude-code-ask-user-question-tool-guide
title: "What is Claude Code's AskUserQuestion tool? How to use it for spec-based development | Cyrus AI Development Agent"
clipped: 2026-01-13 11:32
source: browser-history
---

# What is Claude Code's AskUserQuestion tool? How to use it for spec-based development | Cyrus AI Development Agent

> Source: [https://www.atcyrus.com/stories/claude-code-ask-user-question-tool-guide](https://www.atcyrus.com/stories/claude-code-ask-user-question-tool-guide)

[Stories](/stories)/[Practices](/stories/practices)

# What is Claude Code's AskUserQuestion tool? How to use it for spec-based development

![What is Claude Code's AskUserQuestion tool? How to use it for spec-based development](/_next/image?url=%2Fimages%2Fask-user-question-card.png&w=3840&q=75)

Connor Turland·December 29, 2025·Copy link

The AskUserQuestion tool is quietly becoming one of the most powerful features in Claude Code. Instead of making assumptions and potentially going down the wrong path, Claude can now pause and ask you directly what you want - presenting clear options and gathering the context it needs to do the job right.

> my favorite way to use Claude Code to build large features is spec based  
>   
> start with a minimal spec or prompt and ask Claude to interview you using the AskUserQuestionTool  
>   
> then make a new session to execute the spec [pic.twitter.com/Lwejskje4a](https://t.co/Lwejskje4a)
>
> — Thariq (@trq212) [December 28, 2025](https://twitter.com/trq212/status/2005315275026260309?ref_src=twsrc%5Etfw)

This approach - letting Claude interview you to build a spec before executing - is transforming how developers work with AI coding assistants.

## What is Claude Code's AskUserQuestion tool?

The AskUserQuestion tool allows Claude Code to present you with questions and multiple-choice options during a coding session. Instead of guessing or making assumptions, Claude can pause, ask for clarification, and continue with confidence once you've provided direction.

Here's what it looks like in action in the Claude Code CLI:

![Claude Code CLI showing AskUserQuestion tool with multiple options](/ask-user-question-claude-cli.png)

Notice the multi-step selection interface. Claude presents a question, provides clear options with descriptions, and waits for your input before proceeding. This is the foundation of spec-based development.

## The problem it solves: AI assumptions gone wrong

Every developer who's used AI coding assistants knows this pain:

1. You give Claude a task
2. Claude makes assumptions about implementation details
3. You end up with code that technically works but doesn't match what you actually needed
4. You spend time correcting course or starting over

**The AskUserQuestion tool eliminates this cycle.** When Claude encounters ambiguity - whether it's about architecture, implementation approach, or even just which port your application runs on - it asks rather than assumes.

> 1. Almost always use Plan mode  
> 2. Give Claude a way to verify its output with unit tests, the Claude Chrome extension, or an iOS/Android sim  
> 3. Hold the same bar for human and Claude code. Use /code-review to automate most of code review
>
> — Boris Cherny (@bcherny) [December 27, 2025](https://twitter.com/bcherny/status/2004711722926616680?ref_src=twsrc%5Etfw)

This pairs perfectly with Plan mode. First, let Claude interview you to build a spec. Then execute with confidence.

## How it works: the interview-then-execute pattern

The most effective way to use AskUserQuestion is what developers are calling **spec-based development**:

### Phase 1: The interview

Start with a minimal prompt like:

> "I want to add user authentication to my app. Interview me to build a spec."

Claude will then ask targeted questions:

* What authentication method do you prefer? (OAuth, JWT, session-based)
* Which providers should be supported? (Google, GitHub, email/password)
* Do you need role-based access control?
* What should happen when a session expires?

Each question comes with sensible options based on your codebase context.

### Phase 2: The spec

After gathering your answers, Claude produces a detailed specification document - a clear plan of exactly what will be built and how.

### Phase 3: Execution

Start a new session with the spec as context. Claude executes with precision because all the ambiguity has been resolved upfront.

**The result?** Code that matches your intent on the first try. The ask user question tool makes this possible by front-loading all the decision-making.

## Using AskUserQuestion in Linear with Cyrus

Here's where things get interesting. When you combine the AskUserQuestion tool with Linear issue tracking through Cyrus, you get a collaborative development workflow that works asynchronously.

When Cyrus picks up a Linear issue and needs clarification, it doesn't just stop or make guesses. It asks you directly in Linear:

![Linear issue showing Cyrus asking a question with multiple choice options](/ask-user-question-linear-full.png)

Look at the Activity section. Cyrus has moved the issue to "Needs input" and is asking a specific question: "When the Cyrus service is busy, how should the restart behave?"

The options are clear and actionable:

* Wait and retry: Poll /status repeatedly until idle, then restart
* Fail immediately: Return an error immediately if busy, let the caller handle it
* Queue for later: Schedule restart as a background task that triggers once service becomes idle

You can respond right in Linear by selecting an option from the dropdown:

![Linear dropdown showing filter options for answering Cyrus](/ask-user-question-linear-dropdown.png)

### Why this matters for teams

The Linear integration transforms AskUserQuestion from a local development tool into a **team collaboration feature**:

* **Asynchronous development**: Cyrus works while you're in meetings, asks questions when it needs to, and you respond when you're available
* **Context preservation**: The question and answer become part of the issue history
* **Team visibility**: Anyone on the team can see what questions were asked and how decisions were made
* **No context switching**: Answer questions directly in Linear without switching to a terminal

## The bigger picture

For years, we've obsessed over prompt engineering - crafting the perfect instructions to get AI to do what we want. The AskUserQuestion tool quietly inverts this relationship. Now the model prompts \*you\*.

And it turns out that's exactly what we needed.

When Claude asks "Should this API fail fast or retry with backoff?" before writing a single line of code, something interesting happens: **tradeoffs become explicit**. Instead of discovering buried assumptions during code review, you confront design decisions upfront, when they're cheap to change.

This creates a choose-your-own-adventure pathway through product development. Each question is a fork in the road. Each answer narrows the solution space. By the time Claude starts coding, you've already navigated the decision tree together - and you have a clear record of every choice you made along the way.

**Why this matters for 2026 and beyond:**

As AI agents become more capable, the bottleneck shifts from "can the AI do this?" to "does the AI understand what I actually want?" The teams that figure out human-AI collaboration patterns early will have a significant advantage.

---

*Want to try AskUserQuestion with Linear integration? [Get started with Cyrus](https://app.atcyrus.com/register) and see how AI that asks the right questions changes everything.*