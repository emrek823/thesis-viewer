---
url: https://patternsinthenoise.substack.com/p/notes-from-neurips-2025
title: "Notes from NeurIPS 2025 - by Amir Momen-Roknabadi"
clipped: 2026-01-05 10:16
source: browser-history
---

# Notes from NeurIPS 2025 - by Amir Momen-Roknabadi

> Source: [https://patternsinthenoise.substack.com/p/notes-from-neurips-2025](https://patternsinthenoise.substack.com/p/notes-from-neurips-2025)

# Notes from NeurIPS 2025

[![Amir Momen-Roknabadi's avatar](https://substackcdn.com/image/fetch/$s_!5RG0!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fccafb571-835d-46ac-82a0-35d1b533e071_300x300.png)](https://substack.com/@roknabadi)

[Amir Momen-Roknabadi](https://substack.com/@roknabadi)

Dec 31, 2025

Share

As the year comes to an end, I have been thinking about NeurIPS 2025 and what stayed with me weeks after the conference. I came to the conference thinking that AIxBio at NeurIPS would be a niche field, but it did not end up that way. Biology was not just an AI application area at the conference, it was a robust field with attendees actively engaging with questions about modeling, objectives, evaluation, and agent behavior. Many of the same questions were asked across workshops, talks, and hallway conversations, even when folks were working in very different domains.

One cool theme throughout the conference was moving away from treating models as static objects and toward thinking more about systems. Instead of focusing only on predictive accuracy or benchmark performance, folks were asking how models behave under intervention, how they update when new data arrives, how they fit into longer scientific workflows, and which features are contributing to the output in a meaningful way. A model that predicts a protein structure or a gene expression profile is only addressing a small part of the task. What matters is whether the model can support counterfactual reasoning, whether it knows when it is uncertain, and whether its outputs remain meaningful when assumptions change.

Thanks for reading Patterns in the Noise! Subscribe for free to receive new posts and support my work.

To answer some of these systems questions, several workshops centered on the idea of building general biological simulators, often framed as “virtual cells,” that aim to capture responses to perturbations rather than static correlations. A lot of this is similar to how we think about problems at my company Therna. I have been spending a lot of time on how to tightly couple models with real biological feedback, especially around RNA and lab-in-the-loop systems, and I am hoping we can share more of that before too long.

Another recurring theme was agent behavior. As models are increasingly framed as agents that plan experiments, generate hypotheses, or propose actions, objective functions become central. This felt especially relevant in biological and scientific settings, where optimizing the wrong proxy can easily lead to spurious conclusions. It is not just enough to assume that a clever reward signal or more data would fix these issues. Instead, behaviors such as overconfidence, sycophancy, or even deception are natural outcomes of the objectives we choose. I particularly enjoyed hearing about Yoshua Bengio’s efforts at LawZero on how selecting the right objective functions can lead to a more honest agent.

There was also some discussion of failure. Biological data is noisy, incomplete, and often contradictory. Several people talked about models that can appear to perform well while quietly exploiting dataset artifacts (or batch effects) or ignoring important missing information. This is not entirely different from how humans behave, and at some point we may simply be asking these models to do more than they reasonably can. Compared to previous years, there seemed to be more interest in explicitly characterizing what models do not know, rather than focusing only on average-case performance.

Below are a few papers and directions that influenced how I am thinking now. This is not a ranking or a comprehensive list, just examples that I found particularly thoughtful.

1. **[CellVerse: Do Large Language Models Really Understand Cell Biology?](https://neurips.cc/virtual/2025/loc/san-diego/poster/121757)**This paper treats single-cell analysis as a language-centric QA benchmark and then actually measures what current LLMs can do across tasks that map to how people use single-cell data. General-purpose LLMs show some reasoning capability and outperform specialized models trained on single-cell data. The results also make it clear there is still a lot of work to do, especially on drug response prediction where performance is close to chance.
2. **[Steering the Evolutionary Game: Hierarchical Control of Therapeutic Resistance in Cancer Treatment](https://neurips.cc/virtual/2025/loc/san-diego/126042).** This is not an AI paper in the modern sense, and that is partly why it stood out for me. The work uses evolutionary game theory and hierarchical control to model cancer treatment as a two-timescale system, with fast tumor–immune–drug dynamics and slower microbiome modulation. What I found compelling is the use of Stackelberg-style game formulations to reason about intervention strategies, rather than trying to learn policies end to end. It felt like a good example of how classical control and game-theoretic tools can still be the right abstraction for certain biological problems, especially when the goal is understanding stability and intervention rather than prediction.
3. **[From Base Pairs to Functions: Rich RNA Representations via Multimodal Language Modeling](https://neurips.cc/virtual/2025/loc/san-diego/130724).** I liked this paper because it takes RNA foundation models as structure representation learners, not just sequence models. The core idea is to pretrain an RNA language model with explicit structural information, especially base-pair awareness, rather than hoping structure emerges implicitly from sequence alone. It makes a careful case that RNA structure should be treated as a first-class modality, and that doing so leads to representations that transfer better across tasks rather than just improving a single benchmark.
4. **[Measuring Scientific Capabilities of Language Models with a Systems Biology Dry Lab (SciGym)](https://neurips.cc/virtual/2025/loc/san-diego/poster/121779).** SciGym is interesting because it makes a framework for “LLM scientist” evaluation. The task is iterative: the model proposes perturbations, runs simulations on systems biology models, analyzes the results, and tries to arrive at the underlying mechanism. It felt like a useful stress test with the focus on experiment design and interpretation rather than clever prompting.

Overall, what I took away from this year is a shift in what seems to count as progress. Better benchmarks and larger models still matter, but they no longer feel sufficient on their own. In biological settings, the hard problems show up once models are placed inside systems, asked to reason under intervention, or used iteratively rather than once.

There also seems to be a growing recognition of a kind of language-model mimicry. LLMs feel close to the end of their current scaling path as we know it, largely because they have run out of the type of data that made scaling so effective in the first place. Biology, by contrast, feels like it is just entering its scaling regime. People may be getting a bit ahead of themselves at times. That does not mean we should ignore the lessons from language models, but the biggest one still seems to be that scaling works. The real challenge now is figuring out how to generate and feed the right combinations of data and compute into these systems.

As is always the case, much of the value for me came from conversations outside the talks, including catching up with old friends (as old as middle school!) and collaborators. The receptions hosted by **Tahoe Therapeutics**, **Amplify Partners**, **Blank Bio**, and **the Arc Institute** were especially good for this. The conversations were less about hype and more about what people are actually struggling with in practice.

One moment that stood out was seeing Patrick Collison interviewing Andrej Karpathy at the virtual cell event. It was refreshing to hear a discussion that stayed concrete and reflective, especially given how much speculation there is around AI and science right now. At times, they were honestly more thoughtful about AI–bio questions than many of the biologists I spoke with. That combination of thoughtful technical work during the day and honest, informal conversations in the evening is part of what made this NeurIPS feel impactful for me.

Biology seems to force the AIxBio field to confront questions that are easier to postpone elsewhere. Objective design, robustness to distribution shift, and failure under partial information are not edge cases in biology; rather they are the default. As a result, questions about agent behavior, incentives, and evaluation feel more concrete and less abstract. The most interesting work I saw was not trying to claim general intelligence, but instead was careful about assumptions, explicit about limitations, and focused on whether models can actually support scientific reasoning. That feels like a healthy direction for the field to move in.

Thanks for reading Patterns in the Noise! Subscribe for free to receive new posts and support my work.

Share