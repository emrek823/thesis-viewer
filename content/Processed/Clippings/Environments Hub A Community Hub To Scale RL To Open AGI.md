---
title: "Environments Hub: A Community Hub To Scale RL To Open AGI"
source: "https://www.primeintellect.ai/blog/environments"
published:
created: 2025-12-16
description: "RL environments are the playgrounds where agents learn. Until now, they've been fragmented, closed, and hard to share. We are launching the Environments Hub to change that: an open, community-powered platform that gives environments a true home.Environments define the world, rules and feedback loop of state, action and reward. From games to coding tasks to dialogue, they're the contexts where AI learns, without them, RL is just an algorithm with nothing to act on."
tags:
  - "clippings"
processed: 2025-12-16
themes:
  - rl-environments
  - commoditization
  - open-source
---
[Next Steps: Providing The Full-Stack Open AGI Infrastructure](https://www.primeintellect.ai/blog/#next-steps-providing-the-full-stack-open-agi-infrastructure)

[Features](https://www.primeintellect.ai/blog/#features)

[Developing and Sharing Environments](https://www.primeintellect.ai/blog/#developing-and-sharing-environments)

[Evals](https://www.primeintellect.ai/blog/#evals)

[RL Training](https://www.primeintellect.ai/blog/#rl-training)

[Sandboxes](https://www.primeintellect.ai/blog/#sandboxes)

[Contributors](https://www.primeintellect.ai/blog/#contributors)

[Next Steps: Providing Full-Stack AGI Infrastructure](https://www.primeintellect.ai/blog/#next-steps-providing-full-stack-agi-infrastructure)

Authors

Announcements

August 27, 2025

RL environments are the playgrounds where agents learn. Until now, they’ve been fragmented, closed, and hard to share. We are launching the Environments Hub to change that: an open, community-powered platform that gives environments a true home.

Environments define the world, rules and feedback loop of state, action and reward. From games to coding tasks to dialogue, they’re the contexts where AI learns, without them, RL is just an algorithm with nothing to act on.

Environments sit at the center of current AI progress. Each new one expands what we can train, study, and evaluate, making open models more competitive. By lowering the friction to build, share, and reuse environments, the Hub enables anyone in the world to contribute directly to open-source AGI progress.

In last week’s private beta, over 30 researchers and companies contributed environments to the Hub. Starting today, we’re opening it up to everyone - building the open alternative to the closed research tooling of big labs, with infra for RL, Reinforcement Fine-tuning (RFT), compute, and inference. We want to ensure that the next wave of startups, AI progress and adoption is built on open rails and open models, and not fed into the walled gardens of big labs, ultimately entrenching their lead.

![](https://www.youtube.com/watch?v=XT7k82bEz4o)

### Motivation

Most current discussion around RL environments centers on a wave of startups whose business model is to build and sell them exclusively to a handful of large closed labs.

This trend poses both a serious risk and an opportunity. If high-quality environments remain expensive and closed, open-source models will fall further behind. But if a robust ecosystem of open-source environments and training tools emerges, open-source can set the state of the art.

Right now, open research lacks the tools to study many of the questions big labs consider most critical. With this release, we aim to change that. The Environment Hub, together with the RL infrastructure we’re building around it, is designed to enable the next wave of startups and AI progress to be built on open rails and open models.

## Features

## Evals

Create and explore evaluation reports for environments for various models.

![](https://cdn.prod.website-files.com/66239f0441b09824acb92c7e/68af4fd1e0df157c356e0b1b_evals.png)

## RL Training

Environments are natively supported in our scalable [https://github.com/PrimeIntellect-ai/prime-rl](https://github.com/PrimeIntellect-ai/prime-rl) trainer.

![](https://cdn.prod.website-files.com/66239f0441b09824acb92c7e/68af4fe4ac828dbbbc85b31d_var0092.png)

## Sandboxes

We’re also launching sandboxes in beta that plug directly into Verifier Environments for secure code execution.

![](https://cdn.prod.website-files.com/66239f0441b09824acb92c7e/68af51de5486f781d66173f7_sandboxes.png)

## Contributors

A big thank you to all contributors during last week’s beta. Special shoutout to Arcee AI, [Hud.so](http://hud.so/), WhyPhy Labs, Groq, and the many individuals who contributed their first environments to the hub!

![](https://cdn.prod.website-files.com/66239f0441b09824acb92c7e/68af51f9d33899f790709e3c_contr.png)

With this launch, we’re also opening up a list of open and in-progress RFCs and bounties [here](https://docs.google.com/spreadsheets/d/13UDfRDjgIZXsMI2s9-Lmn8KSMMsgk2_zsfju6cx_pNU/edit?usp=sharing). The tasks we’re sourcing are intentional. We want to collectively build towards a state-of-the-art open INTELLECT-3 model in agentic and coding tasks.

Let us know if you'd like to claim a lock on one (via an initial draft PR / design doc) by messaging [Will](https://x.com/willccbb) or [Johannes](https://x.com/johannes_hage) on X or opening a PR to [https://github.com/PrimeIntellect-ai/prime-environments](https://github.com/PrimeIntellect-ai/prime-environments).

If you are interested in RL environments that don't have a bounty figure listed yet, just ask and we'll figure something out based on the difficulty scale we're using.

We are also opening up [applications](https://form.typeform.com/to/ibQawo5e) for novel environments and evals. Researchers accepted in this program will receive compute for running experiments, a stipend and support from our internal research team. Some moonshot examples of environments and evals we’d be especially excited about:

- Robust code-quality evaluations for agentic software engineering
- Evaluating usage of filesystems and memory for long-running tasks
- Adaptive coherent instruction-following for realistic multi-turn interactions
- High-quality creative writing and style adherence
- Generative generalist reward models with process critiques
- Harness and task design for interactive data science + machine learning, such as:
	- Environments for NanoGPT speedrun optimizations
	- Terminal-friendly data visualization
	- Research plan generation, with recent notable papers as golden targets