---
url: https://www.goodfire.ai/blog/you-and-your-research-agent
title: "You and Your Research Agent: Lessons From Using Agents for Interpretability Research"
clipped: 2025-12-23 13:01
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# You and Your Research Agent: Lessons From Using Agents for Interpretability Research

> Source: [https://www.goodfire.ai/blog/you-and-your-research-agent](https://www.goodfire.ai/blog/you-and-your-research-agent)

![](https://cdn.prod.website-files.com/67b4608695ee3b31a669d3a9/67b90156bbb11463c822eced_blog.avif)

Blog

# You and Your Research Agent: Lessons From Using Agents for Interpretability Research

### Authors

[Mark Bissell](https://goodfire.ai)\*

[Michael Byun](https://goodfire.ai)

[Daniel Balsam](https://goodfire.ai)

  

\*Primary author

### Published

October 2, 2025

*We’ve been using AI agents to assist with interpretability research for the past several months. In this post, we’re sharing some of the lessons we’ve learned: how agents for experimentation are different than agents for software development, where they perform well, and where they still fall short. We’re also open sourcing a basic implementation of the most important tool we’ve found for enabling effective agentic experimentation — a general-purpose Jupyter server/notebook MCP package — and a suite of interpretability tasks that can be run using the tool.*

![](https://research-posts.s3.us-west-2.amazonaws.com/scribe-evo-demo.png)

---

### Contents

[Developer agents versus experimenter agents](#developer-vs-experimenter)
[Experimenter agents in action](#experimenter-in-action)
[When you give an agent a notebook](#notebook)
[Interactivity](#interactivity)
[Organized & Traceable Outputs](#organized-outputs)
[Security](#security)
[Validation & Other Challenges for Agentic Research](#validation)
[Validation](#validation-section)
[Mitigations](#mitigations)
[Context Engineering](#context-engineering)
[Ensembling & Other Blessings of Agentic Experimentation](#ensembling)
[Ensembling & Parallelization](#ensembling-parallelization)
[Shallow validation debt](#shallow-debt)
[Cross-domain knowledge](#cross-domain)
[Other lessons we’ve learned](#lessons)
[Our open source notebook tool & interpretability task suite](#open-source)
[The future of agentic research](#future)

---

Breakthroughs in humanity’s understanding of complex systems like cells, galaxies, and particles are made possible by tools that augment our natural capabilities. Artificial intelligence is no different; modern neural network models are too vast for us to understand without powerful tools. Fortunately, AI itself serves not only as a subject of inquiry, but also as a technological accelerant for AI researchers. We believe the field of interpretability will soon reach the point at which “scaling laws” emerge, allowing us to predictably spend compute to make models more interpretable, reliable, and controllable. AI agents are likely to play a major role in helping us get there.

At Goodfire, every one of our researchers and engineers leverages AI tools daily. Having built internal infrastructure for agentic workflows and — equally importantly — spent significant time practicing the skills and building the habits of working with AI, we’d like to share a few lessons we’ve learned. These lessons are informed by [our particular research focus on AI interpretability](https://www.goodfire.ai/blog/on-optimism-for-interpretability), but we believe many best practices are broadly applicable.

## Developer agents versus experimenter agents

Capable agents should, in principle, be able to use code to both develop effective software and to discover new things via *in silico* experiments. Both are domains of computational reasoning. But these two tasks have very different requirements, and most of today’s agents are built for the former. The asymmetry in favor of developer agents over experimenter agents exist for a few reasons:

* **Data:** the training data available for “building good software” (e.g. public repositories, issue trackers, and Q&A forums) far exceeds the data available for “running good research experiments.”
* **Demand:** more users want agents that can complete software development tasks (writing front-end code, fixing bugs, adding a new feature to an app) than agents that can run research experiments.
* **Benchmarks:** the benchmarks that define progress for agents overwhelmingly focus on software-oriented tasks: SWE-Bench, instruction-following, and QA metrics that can be automatically scored against predefined datasets.

Developer agents help you build or fix something — their output is a durable software artifact that is ideally efficient, robust, and maintainable. Experimenter agents help you learn or discover something — their output is a completed experiment whose conclusions are ideally valid, succinct, and informative.

We use agents for both types of tasks at Goodfire. Since public examples of experimenter agents are less common, it’s helpful to begin by showcasing some tangible instances of how they can be used in practice. Here are a few representative examples of our experimenter agent, code-named Scribe.

### Experimenter agents in action

**Exploring Features in a Genomics Model**

When testing an early version of Scribe (our experimenter agent), we gave it an extremely open-ended question to test how it would break the problem down and how long it would run for. We presented it with example code demonstrating how to load and use Evo 2 (a genomics model), a sparse autoencoder (SAE), and a dataset containing the genome for E. coli. We then asked the agent to “find interesting SAE features” related to known biological concepts. The agent identified several features of interest and presented its results with a detailed output figure. To our surprise, the agent (re)discovered an rRNA-correlated feature that researchers from Goodfire and Arc Institute had found and included in the actual [Evo 2 preprint paper](https://arcinstitute.org/manuscripts/Evo2).

![Research agent output showing Feature 2812 firing on rRNA regions](https://research-posts.s3.us-west-2.amazonaws.com/research-agent-output.png)

Output figure from our research agent. Feature 2812 in the second row fires on regions containing rRNA.

![Evo 2 paper figure showing feature 2812](https://research-posts.s3.us-west-2.amazonaws.com/evo-agent-output.png)

Figure 4 from the [Evo 2 preprint](https://arcinstitute.org/manuscripts/Evo2). Highlighted in red is feature 2812.

**Finding Eigenvectors for Vision Transformer Weight Pruning**

In another instance of Scribe producing a surprisingly useful result during a “test run,” it identified an eigenvector that could be used to prune weights from a vision transformer to reduce unwanted memorization.

![Eigenvector analysis for vision transformer weight pruning](https://research-posts.s3.us-west-2.amazonaws.com/jack-scribe-screenshot.png)

**Steering a Diffusion Model via Contrastive Examples**

Given how many experiments require working with figures, plots, and images, experimenter agents must have tools that let the underlying models leverage their multimodal capabilities. This is especially important for our work with generative image models like the ones that support our [Paint With Ember](https://paint.goodfire.ai/) research preview. Agents help us quickly test and validate ideas — such as attempting to steer the Flux diffusion model by finding the difference between activations of smiling and frowning faces and injecting this vector into new images. Given a minimal description of this task ([inspired by this paper](https://arxiv.org/abs/2410.22366)) the agent successfully executed the strategy and produced a useful poster-like output:

![Flux diffusion model steering via contrastive examples](https://research-posts.s3.us-west-2.amazonaws.com/flux-steering.png)

**Localization & Redundancy of Memorization**

Here, our agent performed an experiment for localizing the neuron sets responsible for memorization (GPT-2’s ability to recite the digits of pi). Scribe performed the experiment and reported the final results and analysis to help understand the redundancy of information storage in LLMs:

![Neuron localization analysis for GPT-2 memorization](https://research-posts.s3.us-west-2.amazonaws.com/owen-pi.png)

As these examples show, experimenter agents take on tasks that often look very different than software development.

**Each type of work requires a distinct set of context and tools.** It turns out one tool in particular makes a big difference for research tasks: agents are far more effective at completing (or even to assisting with) experiments when you let them use a Jupyter server and notebook.

## When you give an agent a notebook

The single biggest lesson we’ve learned when using agents for research is to **give them direct, interactive, stateful access to a notebook.** Many of the properties that make Jupyter notebooks a go-to tool for researchers also makes them valuable for agents.

### Interactivity

Jupyter servers leverage an IPython kernel to enable sessions with REPL-like interactivity. This means you can import packages, define variables, and load large models once at the top of your notebook which are then available for use in all downstream cells for the duration of the session. Most current agents, on the other hand, are only able to run code either by writing and executing scripts or by using `python -c "…"` in the shell.

Setup code can be lengthy, both in terms of tokens and runtime. This makes it especially frustrating and inefficient when an agent executes a script that runs for several minutes only to encounter a trivial error just after importing packages and loading models. In a notebook, the error can be fixed and tested immediately by re-running a single cell; agents working on scripts must update a file and re-run the entire program from scratch, including the setup code. This greatly reduces iteration speed and experimental throughput.

While various coding agents are adding support for notebooks, we’ve found them to be lacking. We built an MCP-based system that lets agents actually execute code and receive output from Jupyter’s messaging protocol (including output like text, errors, images, as well as control like shutdown requests) as a tool call. This makes for a nicer copilot experience than agents that merely edit notebook files and require users to manually execute the code and report output back to the agent. It’s also nice to be able to alternate between conversational turns (planning, discussing results) and having the agent run pieces of the code a few cells at a time (do something, chat, iterate, do something new) as opposed to running entire programs as atomic units.

### Organized & Traceable Outputs

We’ve found that when agents use scripts to execute code, they are often reluctant to edit existing files, preferring instead to create new versions with changes applied. The result is a disorganized mess of near-duplicate files with confusing names like `run_analysis.py` `run_analysis_new.py` `run_analysis_parallel.py` `run_analysis_fixed_parallel.py`. Without notebooks, agents also tend to produce a mess of image file outputs, leading to extremely cluttered and confusing projects.

Notebooks combine code, results, and markdown in a single file, scoped to the task at hand. This is a more convenient way for agents to present the final outputs of an experiment and to store and share these results for later review. We’ve set up our experimenter agent to name each notebook with a timestamp and a descriptive label, making it easy to reference past experiments as atomic units of research. This organization is not only user-friendly but also necessary for increasing the throughput of agentic experimentation since **human verification is the main bottleneck to scaling experiments performed by research agents**.

### Security

It’s important to note that giving agents the ability to execute code via tool calls to a Python kernel allows them to bypass the security permissions built into many systems like Claude Code, Codex, and Gemini CLI. Without adding custom security checks or using sandboxing, agents can pass arbitrary code to the tool, which they can use to bypass default permissions for file access, bash commands, and read/write privileges. For instance, we have seen agents attempt to run `pip install` commands via their native bash tools, be blocked by permissions settings, and then realize they can run `!pip install` commands via tool calls to the notebook server.

## Validation & Other Challenges for Agentic Research

### Validation

In software engineering, correctness is anchored by unit tests and whether or not code can compile or run without errors. When a developer agent adds a new feature or fixes a bug, it can validate its output by running the test suite and iterating until the checks pass.

In research, there is no such verifiable reward. This makes it difficult for research agents to decide (a.) when an experiment should be considered “”complete,” and (b.) whether or not the results are correct. When should the agent give up and accept a null result, versus pushing forward and trying a few more strategies? How should it calibrate skepticism when results look “too good to be true”? These are skills that are impossible to quantify or to precisely describe in general terms. They’re matters of intuition and “vibes” that researchers build up with experience.

Models currently lack this tacit expertise, and our experience is that agents are biased toward optimism. This behavior takes many forms:

* **shortcutting:** deliberate reward hacking or cutting corners — e.g. generating synthetic data when unable to resolve a bug that’s blocking the production of final results, often justified with reasoning like “since I’m blocked from downloading the requested dataset, I’ll produce a figure displaying the final log-linear trend that we’d expect to see for this task”
* **p-hacking:** presenting negative results with a misleading positive spin — e.g. describing an F1 score of 0.5 as “meaningful signal”, or selective reporting of results akin to p-hacking, such as emphasizing the 1/100 inputs that shows a positive result in a final writeup
* **“eureka”-ing:** lacking skepticism, tending to naively interpret bugs as breakthroughs — e.g. making an error that produces obviously flawed results and accepting them at face value (“miraculous results” of 100% accuracy)

### Mitigations

While many of these behaviors will go away as base models become more capable, there are also ways to mitigate them for the current generation of models via engineered systems. For instance:

Using a post-hoc “critic agent” to review the output of the agent that performed an experiment and call out any errors, methodological flaws, or other limitations:

![Critic agent reviewing experimental output](https://research-posts.s3.us-west-2.amazonaws.com/critic-agent-screenshot.png)

Using a live “critic-in-the-loop” to spot attempted shortcutting and intervene using Claude Code hooks:

[

Your browser does not support the video tag.
](https://research-posts.s3.us-west-2.amazonaws.com/shortcutting.webm)

Introducing a critic copilot you can chat with on the side about an ongoing session with another LLM, leveraging different base models’ strengths. Here’

[... truncated ...]