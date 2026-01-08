---
title: "Thread by @byebyescaling"
source: "https://x.com/byebyescaling/status/2003507977974935996"
published: 2025-12-22
created: 2025-12-23
description:
tags:
  - "clippings"
---
**return of the research era ꙮ** @byebyescaling 2025-12-22

Here is why (as an experienced MLE), I feel @supermemory 's approach is 100% completely backwards and breaks under scale :

0\. The architecture behind @supermemory is essentially Vector-RAG with a Linked List. It prioritizes developer velocity over the fundamental mathematical properties required for a high-density memory system.

1\. Linking updates via a "chain" instead of overwriting a central node means simple lookups (e.g., "current favorite food") require $O(N)$ traversal of history. This leads to context bloat and massive LLM compute costs just to reconcile a single entity’s state.

2\. Storing monolithic facts as raw vectors without parsing them into triplets ($Subject, Predicate, Object$) causes semantic regions to overlap. At scale, "Dhravya likes pizza" and "Dhravya’s friend likes pizza" become mathematically inseparable, leading to high-similarity noise and retrieval hallucinations.

3\. You've swapped $O(\\log N)$ structural graph traversal for $O(N)$ global vector similarity scans. For relational queries (e.g., "SF users who like Italian"), you are effectively forcing the LLM to guess connections from a pile of retrieved noise rather than navigating a deterministic index.

4\. Without a schema to act as a denoising autoencoder, you are injecting unnormalized natural language directly into long-term memory. This creates a "Black Box" that is impossible to audit, filter, or analyze with deterministic logic.

This works for personal notes but fails in production. Without an Entity-Centric Index, you will eventually drown in your own unstructured facts.

> 2025-12-22
> 
> The graph architecture behind @supermemory came from pure spite.
> 
> We freaking hated graphs. Our solution? Don't build one.
> 
> Thought from first principles instead:
> 
> \- Memories update
> 
> \- New ideas extend old ones
> 
> \- Everything relates (1-1, 1-many, many-1)
> 
> Turns out that's a graph
> 
> ![why no facts based memory](https://pbs.twimg.com/media/G83j3-6bQAAQ3MK?format=jpg&name=large) ![Image](https://pbs.twimg.com/media/G8zgm8ebsAAnlaN?format=jpg&name=large)

---

**Dhravya Shah** @DhravyaShah [2025-12-23](https://x.com/DhravyaShah/status/2003510173684396265)

thanks you described exactly why we're winning

0\. yes

1\. you're wrong, we don't traverse with llm codegen etc

2\. most customers WANT all memories to be built on top of a single entity anyways. for ex. a user using a chat app. we support multiple entities too, but it's too rare.

---

**return of the research era ꙮ** @byebyescaling [2025-12-23](https://x.com/byebyescaling/status/2003512140876169388)

Hey, interesting reply. Btw I do not believe you are winning, there are about 10 other competitors with more or less exactly the same features.

Are you traversing the graphs at all then? It works passably well for me but seems to blow up when I put in more data than just a few

---

**vintro** @vintrotweets [2025-12-24](https://x.com/vintrotweets/status/2003625292548448556)

graphs look great to humans on twitter tho!

curious what you'd think of an entity (peer) centric schema that's powered my small LLMs doing logical reasoning

side effect: pareto frontier evals, speed, and cost

---

**Courtland Leer** @courtlandleer [2025-12-23](https://x.com/courtlandleer/status/2003604411856425133)

just learned that @supermemory did this too and scored 85.2%...so their solution made gemini 3 pro 6.8% worse

the state of memory evals is a wreck x.com/m\_e\_doria/stat…

> 2025-12-19
> 
> just learned that @supermemory did this too and scored 85.2%...so their solution made gemini 3 pro 6.8% worse
> 
> the state of memory evals is a wreck x.com/m\_e\_doria/stat…

---

**Remus** @remusrisnov [2025-12-24](https://x.com/remusrisnov/status/2003626074643808603)

Would love to talk to you more about this. My DMs are open

---

**swaraj** @swarajb [2025-12-23](https://x.com/swarajb/status/2003543185629544717)

1\. I think this assumes, each the transversal starts at the beginning of the graph, its easy to archive old updates, and only traverse on new updates, basically, you dont need to traverse 50 I like "food\_\_" (pizza) updates

2\. I think this was issue sometimes ago, but newer models