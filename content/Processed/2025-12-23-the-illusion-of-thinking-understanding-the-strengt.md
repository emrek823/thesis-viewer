---
url: https://machinelearning.apple.com/research/illusion-of-thinking
title: "The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity"
clipped: 2025-12-23 11:16
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity

> Source: [https://machinelearning.apple.com/research/illusion-of-thinking](https://machinelearning.apple.com/research/illusion-of-thinking)

[research area Speech and Natural Language Processing](/research/?domain=Speech%20and%20Natural%20Language%20Processing) | [conference NeurIPS](/research/?event=NeurIPS)

[content type paper](/research/) | published June 2025

# The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity

AuthorsParshin Shojaee\*†, Iman Mirzadeh\*, Keivan Alizadeh, Maxwell Horton, Samy Bengio, Mehrdad Farajtabar

[View publication](https://arxiv.org/abs/2506.06941)

Copy Bibtex

Recent generations of frontier language models have introduced Large Reasoning Models (LRMs) that generate detailed thinking processes before providing answers. While these models demonstrate improved performance on reasoning benchmarks, their fundamental capabilities, scaling properties, and limitations remain insufficiently understood. Current evaluations primarily focus on established mathematical and coding benchmarks, emphasizing final answer accuracy. However, this evaluation paradigm often suffers from data contamination and does not provide insights into the reasoning traces’ structure and quality. In this work, we systematically investigate these gaps with the help of controllable puzzle environments that allow precise manipulation of compositional complexity while maintaining consistent logical structures. This setup enables the analysis of not only final answers but also the internal reasoning traces, offering insights into how LRMs “think”. Through extensive experimentation across diverse puzzles, we show that frontier LRMs face a complete accuracy collapse beyond certain complexities. Moreover, they exhibit a counter-intuitive scaling limit: their reasoning effort increases with problem complexity up to a point, then declines despite having an adequate token budget. By comparing LRMs with their standard LLM counterparts under equivalent inference compute, we identify three performance regimes: (1) low-complexity tasks where standard models surprisingly outperform LRMs, (2) medium-complexity tasks where additional thinking in LRMs demonstrates advantage, and (3) high-complexity tasks where both models experience complete collapse. We found that LRMs have limitations in exact computation: they fail to use explicit algorithms and reason inconsistently across puzzles. We also investigate the reasoning traces in more depth, studying the patterns of explored solutions and analyzing the models’ computational behavior, shedding light on their strengths, limitations, and ultimately raising crucial questions about their true reasoning capabilities.

* \* Equal contribution
* † Work done while at Apple

[![Diagram illustrating a system that verifies both final answers and intermediate reasoning steps to analyze model behavior.](https://mlr.cdn-apple.com/media/main_figure_f794f49488.png)](https://mlr.cdn-apple.com/media/main_figure_f794f49488.png)

Figure 1: Our setup enables verification of both final answers and intermediate reasoning traces, allowing detailed analysis of model thinking behavior.

## Related readings and updates.

[### Apple Machine Learning Research at NeurIPS 2025](/research/neurips-2025)

November 21, 2025 |  | [conference NeurIPS](/highlights?event=NeurIPS)

Apple researchers advance AI and ML through fundamental research, and to support the broader research community and help accelerate progress in this field, we share much of this work through publications and engagement at conferences.

Next month, the 39th annual [Conference on Neural Information Processing Systems (NeurIPS)](https://neurips.cc), will be held in San Diego, California, with a satellite event also taking place in Mexico City,…

[Read more](/research/neurips-2025)

[### TASER: Translation Assessment via Systematic Evaluation and Reasoning](/research/taser)

October 2, 2025 | [research area Methods and Algorithms](/research/?domain=Methods%20and%20Algorithms), [research area Speech and Natural Language Processing](/research/?domain=Speech%20and%20Natural%20Language%20Processing)

We introduce TASER (Translation Assessment via Systematic Evaluation and Reasoning), a metric that uses Large Reasoning Models (LRMs) for automated translation quality assessment. TASER harnesses the explicit reasoning capabilities of LRMs to conduct systematic, step-by-step evaluation of translation quality. We evaluate TASER on the WMT24 Metrics Shared Task across both reference-based and reference-free scenarios, demonstrating state-of-the-art…

[Read more](/research/taser)

![Bottom banner](https://mlr.cdn-apple.com/media/Discover_1440x420_2x_9c465d585e.jpg)

## Discover opportunities in Machine Learning.

Our research in machine learning breaks new ground every day.

[Work with us](/work-with-us)