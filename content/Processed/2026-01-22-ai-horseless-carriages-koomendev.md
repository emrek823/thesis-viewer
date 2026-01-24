---
url: https://koomen.dev/essays/horseless-carriages/
title: "AI Horseless Carriages | koomen.dev"
clipped: 2026-01-22 12:28
source: browser-history
---

# AI Horseless Carriages | koomen.dev

> Source: [https://koomen.dev/essays/horseless-carriages/](https://koomen.dev/essays/horseless-carriages/)

# AI Horseless Carriages

I noticed something interesting the other day: I enjoy using AI to build software more than I enjoy using most AI applications--software built with AI.

When I use AI to build software I feel like I can create almost anything I can imagine very quickly. AI feels like a power tool. It's a lot of fun.

Many AI apps don't feel like that. Their AI features feel tacked-on and useless, even counter-productive.

I am beginning to suspect that these apps are the ["horseless carriages"](#horseless-carriages) of the AI era. They're bad because they mimic old ways of building software that unnecessarily constrain the AI models they're built with.

To illustrate what I mean by that, I'll start with an example of a badly designed AI app.

## [#](#gmails-ai-assistant)Gmail's AI assistant

A little while ago, the Gmail team released a new feature giving users the ability to generate email drafts from scratch using Google's flagship AI model, Gemini. This is what it looks like:

![Gmail's Gemini email draft feature with a prompt I've written](/images/gmail_prompt.png)

Gmail's Gemini email draft generation feature

Here I've added a prompt to the interface requesting a draft for an email to my boss. Let's see what Gemini returns:

![Gmail's Gemini email draft generation feature response](/images/gmail_response.png)

Gmail's Gemini email draft generation feature response

As you can see, Gemini has produced perfectly reasonable draft that unfortunately doesn’t sound anything like an email that I would actually write. If I'd written this email myself, it would have sounded something like this:

Hey garry, my daughter woke up with the flu so I won't make it in today

The email I would have written

The tone of the draft isn't the only problem. The email I'd have written is actually shorter than the original prompt, which means I spent more time asking Gemini for help than I would have if I'd just written the draft myself. Remarkably, the Gmail team has shipped a product that perfectly captures the experience of managing an underperforming employee.

Millions of Gmail users have had this experience and I'm sure many of them have concluded that AI isn't smart enough to write good emails yet.

This could not be further from the truth: Gemini is an astonishingly powerful model that is more than capable of writing good emails. Unfortunately, the Gmail team designed an app that prevents it from doing so.

## [#](#a-better-email-assistant)A better email assistant

To illustrate this point, here's a simple demo of an AI email assistant that, if Gmail had shipped it, would actually save me a lot of time:

Email Reading Agent System PromptYou are an email labeling assistant. Analyze the following email and take the appropriate actions.
If the email is...
...from my wife Sumana: draft a reply & label: Personal, red, priority 0
...from my boss Garry: draft a reply & label: YC, orange, 1
...from anyone else with an @yc.com addr: draft a reply & label: YC, orange, 2
...from a founder (NOT @yc.com): draft a reply & label: Founders, blue, 2
...tech-related, e.g. a forum digest: label: Tech, gray, 3
...trying to sell me something: archive
Context for draft replies:
You're Pete, a 43 year old husband to Sumana, father, programmer, and YC Partner.
You're very busy and so is everyone you correspond with, so you do your best to keep your emails as short as possible and to the point. You avoid all unnecessary words and you often omit punctuation or leave misspellings unaddressed because it's not a big deal and you'd rather save the time. You prefer one-line emails. Do your best to be kind, and don't be so informal that it comes across as rude.
Emojis and soft language are OK in personal emails, but not for anything else.

Available Tools

`labelEmail(label, color, priority)`

`archiveEmail()`

`draftReply(body)`

You have access to the following tools:
labelEmail: Use this tool to label an email with a specific category, color, and priority level.
Arguments: { "label": string, "color": string, "priority": number }
archiveEmail: Use this tool to archive an email that doesn't need to be labeled.
Arguments: None
draftReply: Use this tool to draft a reply to the email.
Arguments: { "body": string }
You MUST respond using only these tools. Do not respond with plain text or explanations.
You can use any combination of these tools in your response.
Example usage for a single tool:
<tool>labelEmail({"label": "Personal", "color": "red", "priority": 0})</tool>
OR
<tool>archiveEmail()</tool>
OR
<tool>draftReply({"body": "Thanks for letting me know. I'll be there on Wednesday."})</tool>
Example usage for multiple tools:
<tool>labelEmail({"label": "YC", "color": "orange", "priority": 1})</tool>
<tool>draftReply({"body": "Hi Garry, Wednesday works for me. Looking forward to our walk."})</tool>

Process Emails

Email Inbox (12)

Alex Chen

advice on fundraising

▶

TechCrunch Weekly

This Week in Tech: AI Developments and M...

▶

HackerNews Digest

Top Stories: New Programming Languages o...

▶

Sumana

dinner tonight

▶

Garry Tan

reschedule

▶

Gustaf Alströmer

founder intro?

▶

The Verge Updates

Latest Product Launches and Industry New...

▶

DevOps Pro Team

Security Solutions for Growing Companies

▶

DataAnalytics Plus

Special Pricing on Data Analytics Tools

▶

Mark at Enterprise Tools

Transform Your Workflow with Our Platfor...

▶

Sarah from SaaS Solutions

Exclusive Offer for New Customers

▶

Maya Rodriguez

Technical co-founder?

▶

A demo of an actually useful email assistant using OpenAI's gpt-4o-mini under the hood

This demo uses AI to *read* emails instead of write them from scratch. Each email is categorized and prioritized, and some are auto-archived while others get an automatically-drafted reply. The assistant processes emails individually according to a custom "System Prompt" that explains exactly how I want each one handled. You can try your own labeling logic by editing the System Prompt.

It's obvious how much more powerful this approach is, so why didn't the Gmail team build it this way? To answer this question, let's look more closely at the problems with their design. We'll start with its generic tone.

## [#](#ai-slop)AI Slop

The draft that Gmail's AI assistant produced is wordy and weirdly formal and so un-Pete that if I actually sent it to Garry, he’d probably mistake it for some kind of phishing attack. It’s AI Slop.

Everyone who has used an LLM to do any writing has had this experience. It’s so common that most of us have unconsciously adopted strategies for avoiding it when writing prompts. The simplest such strategy is just writing more detailed instructions that steer the LLM in the right direction, like this:

let my boss garry know that my daughter woke up with the flu and that I won't be able to come in to the office today. Use no more than one line for the entire email body. Make it friendly but really concise. Don't worry about punctuation or capitalization. Sign off with “Pete” or “pete” and not “Best Regards, Pete” and certainly not “Love, Pete”

Prompt hacking our way to success

Here's a little draft-writer demo you can use to compare my original prompt with this expanded one:

Your Request

Generate Draft

Email Draft

Your generated email will appear here...

A dummy version of Gmail's draft generator that uses gpt-4o-mini under the hood

The generated draft sounds better, but this is obviously dumb. The new prompt is even longer than the original, and I'd need to write something like this out every time I want a new email written.

There is a simple solution to this problem that many AI app developers seem to be missing: let me write my own "System Prompt".

## [#](#system-prompts-and-user-prompts)System Prompts and User Prompts

Viewed from the outside, large language models are actually really simple. They read in a stream of words, the “prompt”, and then start predicting the words, one after another, that are likely to come next, the “response”.

The important thing to note here is that all of the input and all of the output is text. The LLM's user interface is just text1.

LLM providers like OpenAI and Anthropic have adopted a convention to help make prompt writing easier: they split the prompt into two components: a **System Prompt** and a **User Prompt**, so named because in many API applications the app developers write the System Prompt and the user writes the User Prompt.

Combined Prompt

System Prompt: Instructions that define the assistant's behavior...

User Prompt: Specific query or instruction from the user...

Large Language Model

Processes the combined prompt and generates a response

The System Prompt explains to the model how to accomplish a particular set of tasks, and is re-used over and over again. The User Prompt describes a specific task to be done.

You can think of the System Prompt as a function, the User Prompt as its input, and the model's response as its output:

You have access to the following tool. Use ONLY this tool to return your response.
computeAnswer: { "answer" : "numerical answer to the question" }
Example responses:
{ "answer" : "250" }
{ "answer" : "two hundred and fifty" }

System Prompt (function)

User Prompt (input)

Response (output)

Generate Output

A simple demonstration of the system/user prompt relationship using gpt-4o-mini

In my original example, the User Prompt was

Let my boss Garry know that my daughter woke up with the flu this morning and that I won't be able to come in to the office today.

My original User Prompt

Google keeps the System Prompt a secret, but judging by the output we can guess what it looks like:

You are a helpful email-writing assistant responsible for writing emails on behalf of a Gmail user. Follow the user’s instructions and use a formal, businessy tone and correct punctuation so that it’s obvious the user is smart and serious.

Gmail's email-draft-writer System Prompt (presumably)

Of course I'm being glib here, but the problem is not just that the Gmail team wrote a bad system prompt. The problem is that I'm not allowed to change it.

## [#](#the-pete-system-prompt)The Pete System Prompt

If, instead of forcing me to use their one-size-fits-all System Prompt, Gmail let me write my own, it would look something like this:

You're Pete, a 43 year old husband, father, programmer, and YC Partner.

You're very busy and so is everyone you correspond with, so you do your best to keep your emails as short as possible and to the point. You avoid all unnecessary words and you often omit punctuation or leave misspellings unaddressed because it's not a big deal and you'd rather save the time. You prefer one-line emails.

Do your best to be kind, and don't be so informal that it comes across as rude.

The Pete System Prompt

Intuitively, you can see what's going on here: when I write my own System Prompt, I'm teaching the LLM to write emails the way that I would. Does it work? Let's give it a try.

System Prompt

User Prompt

Generate Draft

Email Draft

Your generated email will appear here...

Depending on the System Prompt, gpt-4o-mini returns dramatically different responses to the same User Prompt

Try generating a draft using the (imagined) Gmail System Prompt, and then do the same with the "Pete System Prompt" above. The "Pete" version will give you something like this:

Garry, my daughter has the flu. I can't come in today.

An email draft generated using the Pete System Prompt

It's perfect. That was so easy!

Not only is the output better for this particular draft, it's going to be better for *every* draft going forward because the System Prompt is reused over and over again. No more banging my head against the wall explaining over and over to Gemini how to write like me!

And the best part of all? Teaching a model like this is surprisingly fun.

Spend a few minutes thinking about how YOU write email. Try writing a "You System Prompt" and see what happens. If the output doesn't look right, try to imagine what you left out of your explanation and try it again. Repeat that a few times until the output starts to feel right to you.

Better yet, try it with a few other User Prompts. For example, see if you can get the LLM to write these emails in your voice:

Let my wife know I'll be home from work late and will miss dinner

Personal email User Prompt

Write an email to comcast customer service explaining that they accidentally double billed you last month.

Customer support request User Prompt

There's something magical about teaching an LLM to solve a problem the same way you would and watching it succeed. Surprisingly, it's actually easier than teaching a human because, unlike a human, an LLM will give you instantaneous, honest feedback about whether your explanation was good enough or not. If you get an email draft you're happy with, your explanation was sufficient. If you don't, it wasn't.

By exposing the System Prompt and making it editable, we've created a product experience that produces better results and is actually fun to use.

As of April 2025 most AI still apps don't ([intentionally](https://x.com/jobergum/status/1913481778175631436)) expose their system prompts. Why not?

## [#](#horseless-carriages)Horseless Carriages

Whenever a new technology is invented, the first tools built with it inevitably fail because they mimic the old way of doing things. “Horseless carriage” refers to the early motor car designs that borrowed heavily from the horse-drawn carriages that preceded them. Here’s an example of an 1803 Steam Carriage design I found on [Wikipedia](https://en.wikipedia.org/wiki/Horseless_carriage):

![Steam carriage](/images/steam-carriage.png)

Trevithick's London Steam Carriage of 1803

The brokenness of this design was invisible to everyone at the time and laughably obvious after the fact.

Imagine living in 1806 and riding on one of these for the first time. Even if the wooden frame held together long enough to get you where you were going, the wooden seats and lack of suspension would have made the ride unbearable.

You'd probably think "there's no way I'd choose an engine over a horse". And you'd have been right, at least until the automobile was invented.

I suspect we are living through a similar period with AI applications. Many of them are infuriatingly useless in the same way that Gmail's Gemini integration is.

The "old world thinking" that gave us the original horseless carriage was swapping a horse out for an engine without redesigning the vehicle to handle higher speeds. What is the old world thinking constraining these AI apps?

## [#](#old-world-thinking)Old world thinking

Up until very recently, if you wanted a computer to do something you had two options for making that happen:

1. Write a program
2. Use a program written by someone else

Programming is hard, so most of us choose option 2 most of the time. It's why I'd rather pay a few dollars for an off-the-shelf app th

[... truncated ...]