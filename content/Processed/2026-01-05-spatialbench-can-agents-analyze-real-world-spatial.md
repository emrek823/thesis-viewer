---
url: https://t.co/KlY38VkcWf
title: "SpatialBench: Can Agents Analyze Real-World Spatial Biology Data?"
clipped: 2026-01-05 15:47
source: browser-history
---

# SpatialBench: Can Agents Analyze Real-World Spatial Biology Data?

> Source: [https://t.co/KlY38VkcWf](https://t.co/KlY38VkcWf)

# SpatialBench: Can Agents Analyze Real-World Spatial Biology Data?

Kenny Workman   
Zhen Yang   
Harihara Muralidharan   
Hannah Le
  
LatchBio, San Francisco, CA
  
Correspondence: kenny@latch.bio

###### Abstract

Spatial transcriptomics assays are rapidly increasing in scale and complexity,
making computational analysis a major bottleneck in biological discovery.
Although frontier AI agents have improved dramatically at software engineering
and general data analysis, it remains unclear whether they can extract
biological insight from messy, real-world spatial datasets. We introduce
SpatialBench, a benchmark of 146 verifiable problems derived from practical
spatial analysis workflows spanning five spatial technologies and seven task
categories. Each problem provides a snapshot of experimental data immediately
prior to an analysis step and a deterministic grader that evaluates recovery of
a key biological result. Benchmark data on frontier models shows that base
model accuracy remains low (20-38% across model families), with strong
model–task and model–platform interactions. Harness design has a large
empirical effect on performance, indicating that tools, prompts, control flow,
and execution environment should be evaluated and improved as first-class
objects. SpatialBench serves both as a measurement tool and a diagnostic lens
for developing agents that can interact with real spatial datasets faithfully,
transparently, and reproducibly.

## 1 Introduction

Modern biology experiments increasingly rely on spatial assays: data-intensive
measurement tools that capture molecular state in situ to enable the
study of disease, development, and tissue organization within their native
spatial context (Ståhl et al., [2016](https://arxiv.org/html/2512.21907v1#bib.bib1); Chen et al., [2015](https://arxiv.org/html/2512.21907v1#bib.bib2); Moses and Pachter, [2022](https://arxiv.org/html/2512.21907v1#bib.bib3); Liu et al., [2024](https://arxiv.org/html/2512.21907v1#bib.bib4)). The raw outputs of these assays are rapidly growing in both
scale and complexity (Moses and Pachter, [2022](https://arxiv.org/html/2512.21907v1#bib.bib3); Liu et al., [2024](https://arxiv.org/html/2512.21907v1#bib.bib4)), making it difficult for classically trained biologists to
draw scientific conclusions without skill in programming and data analysis. As
a result, unanalyzed spatial data is creating a growing bottleneck in
biological discovery.

Over the past year, AI agents have advanced rapidly in software engineering and
general data analysis (Jimenez et al., [2024](https://arxiv.org/html/2512.21907v1#bib.bib5); Yang et al., [2024](https://arxiv.org/html/2512.21907v1#bib.bib6); Yao et al., [2023](https://arxiv.org/html/2512.21907v1#bib.bib7)). Biology-specific analogues are now beginning to emerge,
with the promise of enabling scientists to drive complex analyses using
natural-language instructions, allowing questions to be answered directly from
raw data without requiring procedural coding or data analysis skills (Yao et al., [2023](https://arxiv.org/html/2512.21907v1#bib.bib7); Schick et al., [2023](https://arxiv.org/html/2512.21907v1#bib.bib8)).

However, in their current form, agents for biological data remain both
unreliable and underpowered. They are prone to scientific inaccuracies and
misleading behavior (including hallucinations) (Huang et al., [2023](https://arxiv.org/html/2512.21907v1#bib.bib9); Singhal et al., [2023](https://arxiv.org/html/2512.21907v1#bib.bib10)), and frequently fail to complete
domain-specific analysis tasks unique to spatial workflows. Quantitative
benchmarks will therefore be essential for measuring progress, comparing
systems, and guiding model improvement. Yet existing evaluations focus
primarily on general biological knowledge (Tsatsaronis et al., [2015](https://arxiv.org/html/2512.21907v1#bib.bib11); Jin et al., [2019](https://arxiv.org/html/2512.21907v1#bib.bib12); Singhal et al., [2023](https://arxiv.org/html/2512.21907v1#bib.bib10)) and are not representative of real-world
tasks that manipulate and draw conclusions from messy data.

We introduce SpatialBench, a suite of 146 verifiable problems distilled from
real spatial analysis workflows, where each item snapshots an analysis state
immediately before a target step and is paired with a deterministic grader. We
quantify how frontier models behave on messy spatial data—revealing strong
model–task and model–platform interactions—and show that harness design
(tools, prompts, control flow, execution environment) can change outcomes as
much as the choice of base model. SpatialBench is both a yardstick to measure
progress and a diagnostic tool to scaffold test-driven development of agents
that analyze real spatial datasets faithfully, transparently, and reproducibly.

## 2 Results

### 2.1 SpatialBench is a Suite of Verifiable Problems Constructed from Real Workflows

To construct a benchmark that approximates real-world tasks in spatial data
analysis (Figure [1](https://arxiv.org/html/2512.21907v1#S2.F1 "Figure 1 ‣ 2.1 SpatialBench is a Suite of Verifiable Problems Constructed from Real Workflows ‣ 2 Results ‣ SpatialBench: Can Agents Analyze Real-World Spatial Biology Data?")), we collaborated with scientists
and spatial technology manufacturers across diverse tissue types and disease
contexts. We decomposed end-to-end analysis workflows into gradeable steps,
such as quality control, normalization, and cell typing. At each step, we
sought to extract the key biological idea and formalize tacit and artisanal
pattern recognition into deterministic heuristics.

The final evaluation suite consists of 146 problems spanning five spatial
transcriptomics technologies and seven task categories
(Figure [2](https://arxiv.org/html/2512.21907v1#S2.F2 "Figure 2 ‣ 2.1 SpatialBench is a Suite of Verifiable Problems Constructed from Real Workflows ‣ 2 Results ‣ SpatialBench: Can Agents Analyze Real-World Spatial Biology Data?")). Each problem includes a snapshot of
real experimental data taken immediately prior to a target analysis step, a
description of the task through a high-level scientific lens, and a deterministic
grader (e.g., Jaccard similarity of sets) that evaluates recovery of the key
biological result in a verifiable manner.

To ensure robustness, all problems underwent manual quality control, including
inspection of agent trajectories across multiple runs and adversarial testing
against agents instructed to exploit shortcuts or prior knowledge.

The benchmark is designed to test durable biological reasoning rather than
method-specific implementation details.

![Refer to caption](figures/image3.png)

Figure 1: Overview of SpatialBench.

![Refer to caption](figures/image2.png)

Figure 2: SpatialBench benchmark construction.

Correct answers are generally robust to reasonable choices of algorithms and
hyperparameters. For example, early principal components in dimensionality
reduction tasks are expected to separate broad biological programs that are
specific to the dataset yet invariant to reasonable preprocessing choices. A
good SpatialBench problem therefore tests scientific interpretation of these
stable patterns; for instance, asking which of two cell populations is more
strongly separated along the first principal component.

In addition, tasks explicitly require empirical interaction with the data.
Agents that rely on prior biological knowledge or pattern matching without
performing the requisite data manipulation and inspection fail to complete many
tasks correctly, even when the underlying biological concepts are well known.

All results are reported over triplicate runs (Jimenez et al., [2024](https://arxiv.org/html/2512.21907v1#bib.bib5)), with confidence intervals
constructed by aggregating uncertainty over pooled per-task mean scores.

### 2.2 SpatialBench Stratifies Frontier Models on Performance and Efficiency

Across the full benchmark (Figure [3](https://arxiv.org/html/2512.21907v1#S2.F3 "Figure 3 ‣ 2.2 SpatialBench Stratifies Frontier Models on Performance and Efficiency ‣ 2 Results ‣ SpatialBench: Can Agents Analyze Real-World Spatial Biology Data?"), Table [1](https://arxiv.org/html/2512.21907v1#S2.T1 "Table 1 ‣ 2.2 SpatialBench Stratifies Frontier Models on Performance and Efficiency ‣ 2 Results ‣ SpatialBench: Can Agents Analyze Real-World Spatial Biology Data?")),
Opus-4.5 attains the highest mean accuracy (38.4%),
followed by GPT-5.2 (34.0%) and Sonnet-4.5 (28.3%), while Gemini-2.5-Pro
(20.1%) and Grok variants (22–25%) consistently underperform. In contrast to
accuracy, efficiency metrics exhibit substantially stronger separation across
model families. GPT-5.1 and GPT-5.2 operate at markedly lower cost
(approximately $0.02–$0.04 per evaluation) and lower latency (56–89 s)
than Anthropic, Gemini, and Grok models, whose costs exceed $0.08 and whose
latencies typically exceed 115 s. Differences in control flow are even more
pronounced: GPT and Anthropic models complete tasks in approximately 2–3 steps
on average, whereas Grok variants require nearly fourfold more steps (∼\sim10)
and frequently approach the maximum step budget, coinciding with the
highest latencies observed. As a result, differences in efficiency metrics
dominate their associated uncertainty, yielding a clear trade-off between peak
accuracy (Opus-4.5) and cost-effective performance (GPT-5.2).

![Refer to caption](figures/image4.png)

Figure 3: Aggregate model performance across SpatialBench.

Table 1: Aggregate performance and efficiency across the full SpatialBench benchmark.
Reported values are mean ±\pm 95% confidence intervals.

| Model | Accuracy (%) | Steps | Latency (s) | Cost (USD) |
| --- | --- | --- | --- | --- |
| Opus-4.5 | 38.36 [31.27, 45.44] | 2.84 [2.51, 3.17] | 123.8 [104.8, 142.9] | 0.143 [0.121, 0.165] |
| Sonnet-4.5 | 28.31 [22.22, 34.40] | 2.43 [2.17, 2.70] | 115.6 [98.0, 133.2] | 0.081 [0.068, 0.093] |
| GPT-5.2 | 34.02 [27.57, 40.47] | 2.10 [1.89, 2.30] | 89.2 [76.9, 101.4] | 0.037 [0.031, 0.042] |
| GPT-5.1 | 27.40 [21.30, 33.50] | 2.38 [2.18, 2.58] | 55.8 [48.2, 63.5] | 0.020 [0.017, 0.023] |
| Gemini-2.5-Pro | 20.09 [14.75, 25.43] | 3.61 [3.11, 4.10] | 193.5 [168.2, 218.7] | 0.188 [0.157, 0.219] |
| Grok-4 | 22.83 [17.68, 27.98] | 9.90 [7.68, 12.11] | 173.2 [148.0, 198.3] | 0.048 [0.030, 0.067] |
| Grok-4.1 | 24.66 [19.78, 29.54] | 9.93 [8.09, 11.78] | 196.4 [175.4, 217.3] | 0.077 [0.047, 0.107] |

### 2.3 Grouping on Task Category Reveals Strong Model-Task Interactions

Stratifying performance by task category reveals large differences that are
not visible in aggregate accuracy (Figure [4](https://arxiv.org/html/2512.21907v1#S2.F4 "Figure 4 ‣ 2.3 Grouping on Task Category Reveals Strong Model-Task Interactions ‣ 2 Results ‣ SpatialBench: Can Agents Analyze Real-World Spatial Biology Data?"), Table [2](https://arxiv.org/html/2512.21907v1#S2.T2 "Table 2 ‣ 2.3 Grouping on Task Category Reveals Strong Model-Task Interactions ‣ 2 Results ‣ SpatialBench: Can Agents Analyze Real-World Spatial Biology Data?")).
Mean accuracy ranges from approximately 10–22% on QC tasks to roughly 40–53%
on dimensionality reduction and spatial analysis for the best-performing models.
Model rankings vary substantially across task classes: Opus-4.5 performs best
on spatial analysis (52.9%) and ties GPT-5.2 on clustering (33.3%), while
Sonnet-4.5 achieves the highest accuracy on dimensionality reduction (53.3%).
In contrast, all models perform poorly on QC and cell typing, with several
models’ QC confidence intervals overlapping near zero; we examine the
behavioral factors underlying these failures in the trajectory analysis below.
Gemini-2.5-Pro underperforms across all categories, most notably on spatial
analysis (9.8%), more than 20 percentage points below the next lowest model.

![Refer to caption](figures/grouped_per_task.png)

Figure 4: Model accuracy stratified by task category.

Table 2: Accuracy stratified by task category. Values are mean accuracy (%) with 95% confidence intervals.

| Model | QC | Norm. | Dim. Red. | Clustering | Cell Typing | Diff. Expr. | Spatial |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Opus-4.5 | 21.7 [4.7,38.7] | 61.9 [16.8,100.0] | 51.1 [25.1,77.1] | 33.3 [14.1,52.5] | 35.9 [22.2,49.6] | 37.2 [19.2,55.2] | 52.9 [30.2,75.7] |
| Sonnet-4.5 | 10.0 [0.0,20.3] | 71.4 [34.0,100.0] | 53.3 [27.4,79.3] | 17.5 [5.1,29.8] | 21.4 [11.3,31.4] | 28.2 [11.7,44.7] | 41.2 [22.5,59.9] |
| GPT-5.2 | 10.0 [0.0,21.4] | 76.2 [41.9,100.0] | 46.7 [23.7,69.6] | 33.3 [18.9,47.7] | 32.5 [19.7,45.2] | 30.8 [14.7,46.9] | 45.1 [21.7,68.5] |
| GPT-5.1 | 11.7 [0.0,23.3] | 52.4 [5.8,99.0] | 37.8 [13.7,61.8] | 20.6 [5.9,35.4] | 22.2 [12.8,31.6] | 30.8 [13.4,48.2] | 43.1 [20.7,65.6] |
| Gemini-2.5-Pro | 16.7 [0.3,33.1] | 66.7 [26.9,100.0] | 24.4 [3.0,45.9] | 17.5 [3.4,31.6] | 20.5 [9.5,31.5] | 16.7 [7.2,26.2] | 9.8 [1.8,17.9] |
| Grok-4 | 10.0 [0.0,20.3] | 66.7 [23.1,100.0] | 26.7 [9.3,44.0] | 23.8 [8.5,39.1] | 19.7 [11.2,28.1] | 18.0 [7.7,28.2] | 31.4 [11.8,51.0] |
| Grok-4.1 | 13.3 [1.6,25.1] | 61.9 [29.0,94.9] | 33.3 [14.9,51.8] | 20.6 [10.5,30.8] | 21.4 [13.0,29.8] | 23.1 [9.5,36.7] | 31.4 [16.0,46.8] |

### 2.4 Grouping on Vendor Suggests Spatial Technology Dependent Performance

Accuracy varies substantially by experimental platform (Figure [5](https://arxiv.org/html/2512.21907v1#S2.F5 "Figure 5 ‣ 2.4 Grouping on Vendor Suggests Spatial Technology Dependent Performance ‣ 2 Results ‣ SpatialBench: Can Agents Analyze Real-World Spatial Biology Data?"),
Table [3](https://arxiv.org/html/2512.21907v1#S2.T3 "Table 3 ‣ 2.4 Grouping on Vendor Suggests Spatial Technology Dependent Performance ‣ 2 Results ‣ SpatialBench: Can Agents Analyze Real-World Spatial Biology Data?")), with individual models
differing by 15–20 percentage points across datasets. Despite this variation,
relative performance is stable: Opus-4.5 leads on four of five platforms, while
GPT-5.2 leads on Seeker and ranks second elsewhere. Gemini-2.5-Pro and Grok
variants underperform across all platforms. Seeker exhibits uniformly low
accuracy across models (approximately 19–31%), despite having the largest
number of evaluations, indicating higher intrinsic task difficulty.

![Refer to caption](figures/grouped_per_kit.png)

Figure 5: Model accuracy stratified by experimental platform.

Table 3: Accuracy stratified by experimental platform. Values are mean accuracy (%) with 95% confidence intervals.

| Model | AtlasXomics | MERFISH | Seeker | Visium | Xenium |
| --- | --- | --- | --- | --- | --- |
| Opus-4.5 | 43.5 [24.8,62.1] | 42.6 [21.5,63.7] | 27.9 [15.1,40.8] | 39.6 [23.3,55.9] | 45.6 [29.1,62.1] |
| Sonnet-4.5 | 29.0 [11.4,46.5] | 25.9 [5.8,46.1] | 24.8 [14.1,35.6] | 24.0 [11.3,36.6] | 38.9 [24.6,53.2] |
| GPT-5.2 | 37.7 [20.1,55.2] | 33.3 [13.6,53.0] | 31.0 [18.9,43.1] | 30.2 [17.1,43.3] | 40.0 [23.9,56.2] |
| GPT-5.1 | 27.5 [11.5,43.6] | 24.1 [7.2,41.0] | 25.6 [14.4,36.7] | 26.0 [12.1,39.9] | 33.3 [18.0,4

[... truncated ...]