---
title: "Nicolay Gerold"
source: "https://nicolaygerold.com/posts/tool-search-should-not-be-just-search-but-discovery"
author:
published: 2001-12-15
created: 2025-12-17
description: "Writing about software, AI, and coding agents."
tags:
  - "clippings"
---
Anthropic released `tool_search` a couple of weeks back. Since then, I have been trying to get the experience down to something I can ship to users. To be frank, it has been disappointing. The last two weeks, I have been yelling at my laptop a bunch - maybe even a lot.

Tool search "defers" loading the tools until the user asks for them or the model needs them (in theory). If you are working with LLMs, you probably get what this means, if you don't it's probably just a bit of blabla. So let me take a slight tangent and explain tool use in LLMs first.

## Tools are sent to the endpoint as an extra argument

API Call

client.ts

1

const stream = client.messages.stream ({

2

system,// system prompt

3

tools,// tool definitions

4

messages,// conversation history

5

});

What the model sees

Press play to see how messages stack

0 / 7

So for each inference (turn of the LLM), the system prompt, a list of tools, and a list of messages.

LLMs are trained to pay special attention to the tool definitions. In the input, they sit right next to the system prompt. Each tool has a name, a description, which tells the model when and how to use it, and an input schema, which defines the arguments. A simple `read_file` tool looks like this:

```json
{

  "name": "read_file",

  "description": "Reads a file",

  "inputSchema": {

    "type": "object",

    "properties": {

      "file_path": {

        "type": "string",

        "description": "The absolute path to the file to read"

      }

    }

  }

}
```

This is a bit simplified to what you would actually send, but it should give you a good idea what the model sees and how it knows how to call tools.

When the model decides to use a tool, it will generate a JSON like this:

```json
{

  "type": "tool",

  "name": "read_file",

  "args": {

    "file_path": "/Users/nicolaygerold/Documents/nicolay-obsidian/01_areas/pb_personal_blog/agents-and-humans-need-better-tools-to-engineer-context-not-bigger-windows.md"

  }

}
```

For coding agents, the tool definitions can get quite large. The more complex the tool, the more information I have to pack into the description to tell the model, when and how to use it. I have written a few tool descriptions with around 1.000 tokens, which I narrowed down over time as models became more capable. Even if I give the agent only 20 builtin tools, this can sum up to 20.000 tokens on a 200.000 context window (Opus 4.5).

But the user can also bring his own tools. MCPs are often so poorly defined that a single MCP server can carry another 20.0000 tokens.

Add MCP Servers

Context Window Budget

Context used 20.0k / 200.0k tokens (10.0%)

System prompt

11 builtin tools

System

Builtin tools

MCP tools

Builtin Tools 11 / 11

read edit\_file create\_file grep bash glob librarian oracle finder web\_search fetch\_web

Context budget looks healthy

Token counts are illustrative

All in all, a lot of users are already above 30% of the context window before they have written a single instructions.

## The solution sounds simple: load the tool definitions just-in-time.

But it's not.

Claude Code's `search_tool` is a tool in itself. The model can call it with regex pattern (`mcp|linear`) or a set of keywords. `search_tool` runs the regex on the tool names and definitions and returns the matching set of tools in all it's glory: the full tool name, tool definition, and tool schemas. The search queries tend to be so general that you load most of the context, just later.

In my experiments, I have split this up into two tools: `search_tool` and `load_tool`. It forces the model to load the full tool definition only once it has decided this one tool is the right one to call. The cost are negligible, it only adds a little bit of extra latency.

1

Single-step: search\_tool

search\_tool(" linear ")

Context added 0 tokens

2

Two-step: search\_tool → load\_tool

search\_tool(" linear ")

Model decides which tool to load:

Context added 0 tokens

Token counts are illustrative

This gets the context usage down to a level, where I thought deferring the loading makes sense. But running with deferred tools all week, I have been running into another issue: the model won't even search for tools it does not know exists. Tools don't have a short preamble that I can put in the system prompt to tell the model "hey, you can search for these tools and this is what they are for". It's not in the tool specification. I could try to generate one for each MCP tool (this will be my next experiment). But for now, most of the deferred tools are just ignored, even if I tell the model to "use the librarian to look up this repo", it will just start to fetch the url or use bash.

It gets messier when two (or more) tools do similar things (*tool overlap*). Imagine this: I have a `grep` tool that the model can use to search for a pattern in a directory and I have a `finder` tool which is a subagent for searching for full features. When I defer the `grep` tool and don't defer the `finder`, it won't even consider `grep`. I cannot tell the model when it should use `grep` over `finder` in a short preamble with 60 characters.

Search assumes the model already knows what to look for and thinks it has a reason to look beyond the tool already in front of it. I think what we have to build isn't search but discovery - how do you tell the models what tools are available so it can self-discover them, how do you surface tools the model doesn't know to ask about? I don't have an answer yet.

My next experiments:

- Generating short preambles, like a table of contents for tools
- Creating hooks that pull in the tool definitions deterministically (on certain keywords or other tool calls)
- MCPs as skills (more to come:))