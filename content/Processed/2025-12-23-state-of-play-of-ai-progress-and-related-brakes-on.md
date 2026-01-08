---
url: https://www.interconnects.ai/p/brakes-on-an-intelligence-explosion
title: "State of play of AI progress (and related brakes on an intelligence explosion)"
clipped: 2025-12-23 13:00
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# State of play of AI progress (and related brakes on an intelligence explosion)

> Source: [https://www.interconnects.ai/p/brakes-on-an-intelligence-explosion](https://www.interconnects.ai/p/brakes-on-an-intelligence-explosion)

# State of play of AI progress (and related brakes on an intelligence explosion)

### Why I don't think AI 2027 is going to come true.

[Nathan Lambert](https://substack.com/@natolambert)

Apr 30, 2025

120

26

17

Share

Article voiceover

0:00

-19:12

Audio playback is not supported on your browser. Please upgrade.

Intelligence explosions are far from a new idea in the technological discourse. They’re a natural thought experiment that follows from the question: What if progress keeps going?

From [Wikipedia](https://en.wikipedia.org/wiki/Technological_singularity):

> The **technological singularity**—or simply the **singularity**—is a [hypothetical](https://en.wikipedia.org/wiki/Hypothetical) point in time at which technological growth becomes uncontrollable and irreversible, resulting in unforeseeable consequences for [human civilization](https://en.wikipedia.org/wiki/Human_civilization). According to the most popular version of the singularity hypothesis, [I. J. Good](https://en.wikipedia.org/wiki/I._J._Good)'s [intelligence explosion](https://en.wikipedia.org/wiki/Technological_singularity#Intelligence_explosion) model of 1965, an upgradable [intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent) could eventually enter a positive feedback loop of successive [self-improvement](https://en.wikipedia.org/wiki/Recursive_self-improvement) cycles; more intelligent generations would appear more and more rapidly, causing a rapid increase ("explosion") in intelligence which would culminate in a powerful [superintelligence](https://en.wikipedia.org/wiki/Superintelligence), far surpassing all [human intelligence](https://en.wikipedia.org/wiki/Human_intelligence).

Given the recent progress in AI, it’s understandable to revisit these ideas. With the local constraints governing decisions within labs, if you extrapolate them, the natural conclusion is an explosion.

Daniel Kokotajlo et al.’s [AI 2027](https://ai-2027.com/) forecast is far from a simple forecast of what happens without constraints. It’s a well thought out exercise on forecasting that rests on a few key assumptions of AI research progress accelerating due to improvements in extremely strong coding agents that mature into research agents with better experimental understanding. The core idea here is that these stronger AI models enable AI progress to change from 2x speed all the way up to 100x speed in the next few years. This number includes *experiment time* — i.e., the time to train the AIs — not just implementation time.

[![Image](https://substackcdn.com/image/fetch/$s_!AdwB!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa2879b2d-2808-4d79-aa51-dd584750eb24_1200x630.jpeg "Image")](https://substackcdn.com/image/fetch/$s_!AdwB!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa2879b2d-2808-4d79-aa51-dd584750eb24_1200x630.jpeg)

This is very unlikely. This forecast came at a good time for a summary of many ways the AI industry is evolving. What does it mean for AI as a technology to mature? How is AI research changing? What can we expect in a few years?

In summary, AI is getting more robust in areas we know it can work, and we’re consistently finding a few new domains of value where it can work extremely well. There are no signs that language model capabilities are on an arc similar to something like AlphaGo, where reinforcement learning in a narrow domain creates an intelligence way stronger than any human analog.

This post has the following sections:

1. How labs make progress on evaluations,
2. Current AI is broad, not narrow intelligence,
3. Data research is the foundation of algorithmic AI progress,
4. Over-optimism of RL training,

In many ways, this is more a critique of the AGI discourse generally, inspired by AI 2027, rather than a critique specifically of their forecast.

In this post, there will be many technical discussions of rapid, or even accelerating, AI research progress. Much of this falls into a technocentric world view where technical skill and capacity drive progress, but in reality, the biggest thing driving progress in 2025 is likely steep industrial competition (or international competition!). AI development and companies are still a very human problem and competition is the most proven catalyst of performance.

[Share](https://www.interconnects.ai/p/brakes-on-an-intelligence-explosion?utm_source=substack&utm_medium=email&utm_content=share&action=share)

*See [AI 2027](https://ai-2027.com/) in its entirety, [Scott Alexander’s reflections](https://www.astralcodexten.com/p/my-takeaways-from-ai-2027), their [rebuttal to critiques that AI 2027 was ignoring China](https://blog.ai-futures.org/p/why-america-wins), Zvi’s [roundup of discussions](https://thezvi.substack.com/p/ai-2027-responses?open=false#%C2%A7matthew-barnett-debates-how-to-evaluate-the-results), or their [appearance on the Dwarkesh Podcast](https://www.youtube.com/watch?v=htOvH12T7mU&t=8357s&ab_channel=DwarkeshPatel). They definitely did much more editing and cohesiveness checks than I did on this response!*

[![](https://substackcdn.com/image/fetch/$s_!NUK6!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F92b89d28-b224-4f51-b212-fd8031689a9b_2980x2060.png)](https://substackcdn.com/image/fetch/$s_!NUK6!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F92b89d28-b224-4f51-b212-fd8031689a9b_2980x2060.png)

## 1. How labs make progress on evaluations

One of the hardest things to communicate in AI is talking down the various interpretations of evaluation progress looking vertical over time. If the evals are going from 0 to 1 in one year, doesn’t that indicate the AI models are getting better at everything super fast? No, this is all about how evaluations are scoped as “reasonable” in AI development over time.

None of the popular evaluations, such as MMLU, GPQA, MATH, SWE-Bench, etc., that are getting released in a paper and then solved 18 months later are truly held out by the laboratories. They’re training goals. If these evaluations were unseen tests and going vertical, you should be much more optimistic about AI progress, but they aren’t.

Consider a recent evaluation, like Frontier Math or Humanity’s Last Exam. These evaluations are introduced with a performance of about 0-5% on leading models. Soon after the release, new models that could include data formatted for them are scoring above 20% (e.g. o3 and Gemini 2.5 Pro). This evaluation will continue to be the target of leading labs, and many researchers will work on improving performance directly.

With these modern evaluations, they can become increasingly esoteric and hard for the sake of being hard. When will a power user of ChatGPT benefit from a model that solves extremely abstract math problems? Unlikely.

The story above could make more sense for something like MATH, which are hard but not impossible math questions. In the early 2020s, this was extremely hard for language models, but a few clicks of scaling made accurate mathematics a reasonable task, and laboratories quickly added similar techniques to the training data.

So this is how you end up with the plot from Epoch AI below — AI researchers figure out that a new evaluation is fair game for hill climbing with current techniques, and then they go all in on it.

[![](https://substackcdn.com/image/fetch/$s_!N1vi!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe049e13f-36cc-4345-8fa3-7ea6ab683bcb_3008x2084.png)](https://substackcdn.com/image/fetch/$s_!N1vi!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe049e13f-36cc-4345-8fa3-7ea6ab683bcb_3008x2084.png)

Or the analogous version that can look even more shocking — the price falling for certain evaluations. This is from 2 factors — laboratories getting better and better at core abilities in certain evaluations and language model training getting far more efficient. Neither of these means that intelligence is rocketing. This is a normal technological process — extreme efficiency at tasks we know we can do well.

[![](https://substackcdn.com/image/fetch/$s_!RkUC!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06e97bff-ba15-4c22-8933-2a55d7bcd7d6_2400x1619.png)](https://substackcdn.com/image/fetch/$s_!RkUC!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06e97bff-ba15-4c22-8933-2a55d7bcd7d6_2400x1619.png)

In fact it is a common job at AI laboratories to make new data that looks very close to population evaluations. These laboratories can’t train on the test set directly for basic reasons of scientific integrity, but they can pay thousands to millions of dollars for new training data that looks practically identical. This is a very common practice and makes the hillclimbing on evaluations far less extraordinary.

AI capabilities in domains we are measuring aren't accelerating, they’re continuing. At the same time, AI’s abilities are expanding outwards into new domains. AI researchers solve domains when we focus on them, not really by accident. Generalization happens sometimes, but it is messy to track and argue for.

As the price of scaling kicks in, every subsequent task is getting more expensive to solve. The best benchmarks we have are correlated with real, valuable tasks, but many are not.

## 2. Current AI is broad, not narrow intelligence

Instead of thinking of stacking rapid evaluation progress on one line in a cumulative, rapid improvement in intelligence, the above plots should make one think that AI is getting better at many tasks, rather than being superhuman in narrow tasks.

In a few years, we’ll look back and see that AI is now 95% robust on a lot of things that only worked 1-5% of the time today. A bunch of new use cases will surprise us as well. We won’t see AI systems that are so intelligent that they cause seismic shifts in the *nature* of certain domains. Software will still be software. AI will be way better than us at completing a code task and finding a bug, but the stacks we are working on will be largely subject to the same constraints.

Epoch AI had a very complementary post to this view.

[![](https://substackcdn.com/image/fetch/$s_!jhvD!,w_56,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc08d0a94-9216-4b70-b2c4-fee34514c619_600x600.png)Epoch AI

Most AI value will come from broad automation, not from R&D

A popular view about the future impact of AI on the economy is that it will be primarily mediated through AI automation of R&D. In some form or another, this view has been expressed by many influential figures in the industry…

Read more

9 months ago · 1 comment · Ege Erdil and Matthew Barnett](https://epochai.substack.com/p/most-ai-value-will-come-from-broad?utm_source=substack&utm_campaign=post_embed&utm_medium=web)

There are many explanations for why this will be the case. All of them rely on the complexity of the environment we are operating modern AI in being too high relative to the signal for improvement. The AI systems that furthest exceeded human performance in one domain were trained in environments where those domains were the entire world. AlphaGo is the perfect rendition of this.

AI research, software engineering, information synthesis, and all of the techniques needed to *train* a good AI model are not closed systems with simple forms of verification. Some parts of training AI systems are, such as wanting the loss to go down or getting more training tokens through your model, but those aren’t really the limiting factors right now on training.

The Wikipedia page for the singularity has another explanation for this that seems prescient as we open the floodgates to try and apply AI agents to every digital task. Paul Allen thought the deceleratory effects of complexity would be too strong:

> Microsoft co-founder Paul Allen argued the opposite of accelerating returns, the **complexity brake:** the more progress science makes towards understanding intelligence, the more difficult it becomes to make additional progress. A study of the number of patents shows that human creativity does not show accelerating returns, but in fact, as suggested by Joseph Tainter in his The Collapse of Complex Societies, a law of diminishing returns. The number of patents per thousand peaked in the period from 1850 to 1900, and has been declining since. The growth of complexity eventually becomes self-limiting, and leads to a widespread "general systems collapse".

This may be a bit of an extreme case to tell a story, but it is worth considering.

Language models like o3 use a more complex system of tools to gain performance. GPT-4 was just a set of weights to answer every query; now ChatGPT also needs search, code execution, and memory. The more layers there are, the smaller the magnitude of changes we’ll see.

This, of course, needs to be controlled for with inference costs as a constant. We still have many problems in AI that will be “solved” simply by us using 1,000X the inference compute on them.

## 3. Data research is the foundation of algorithmic AI progress

One of the main points of the AI 2027 forecast is that AI research is going to get 2X, then 4X, then 100X, and finally 1,000X as productive as it is today. This is based on end-to-end time for integrating new ideas into models and misinterprets the reality of what machine learning research is bottlenecked on. [Scaling is getting more expensive](https://www.interconnects.ai/p/scaling-realities). We don’t know what paradigm will come after reasoning for inference-time compute.

For machine learning research to accelerate at these rates, it needs to be entirely bottlenecked by compute efficiency and implementation difficulty. Problems like getting the maximum theoretical FLOPs out of Nvidia GPUs and making the loss go as low as possible. These are things that people are currently doing and represent an important area of marginal gains in AI progress in recent years.

ML research is far messier. It is far more reliant on poking around the data, building intuitions, and launching yolo runs based on lingering feelings. AI models in the near future could easily launch yolo runs if we give them the compute, but they’re not using the same motivation for them. AI systems are going towards rapid cycles of trial and error to optimize very narrow signals. These narrow signals, like loss or evaluation scores, mirror very closely to the RL scores that current models are trained on.

These types of impr

[... truncated ...]