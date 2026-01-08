---
url: https://arxiv.org/html/2509.25721v2
title: "The AI Productivity Index (APEX)"
clipped: 2025-12-23 13:01
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# The AI Productivity Index (APEX)

> Source: [https://arxiv.org/html/2509.25721v2](https://arxiv.org/html/2509.25721v2)

# The AI Productivity Index (APEX)

Bertie Vidgen1  Abby Fennelly1  Evan Pinnix1  Chirag Mahapatra1  
  
Zach Richards1  Austin Bridges1  Calix Huang1  Ben Hunsberger1  
  
Fez Zafar1  Brendan Foody1  Dominic Barton  
  
Cass R. Sunstein2  Eric Topol3  Osvald Nitski1
  
1Mercor  2Harvard Law School  3The Scripps Research Institute
Email: apex@mercor.com, osvald@mercor.com

###### Abstract

We introduce the first version of the AI Productivity Index (APEX), a benchmark for assessing whether frontier AI models can perform knowledge work with high economic value.
APEX addresses one of the largest inefficiencies in AI research: outside of coding, benchmarks often fail to test economically relevant capabilities.
APEX-v1.0 contains 200 test cases and covers four domains: investment banking, management consulting, law, and primary medical care.
It was built in three steps.
First, we sourced experts with top-tier experience e.g., investment bankers from Goldman Sachs.
Second, experts created prompts that reflect high-value tasks in their day-to-day work.
Third, experts created rubrics for evaluating model responses.
We evaluate 23 frontier models on APEX-v1.0 using an LM judge.
GPT 5 (Thinking = High) achieves the highest mean score (64.2%), followed by Grok 4 (61.3%) and Gemini 2.5 Flash (Thinking = On) (60.4%).
Qwen 3 235B is the best performing open-source model and seventh best overall.
There is a large gap between the performance of even the best models and human experts, highlighting the need for better measurement of models’ ability to produce economically valuable work.

## 1 Introduction

Benchmarks help the AI community track progress, assess model capabilities, and hillclimb performance (Kiela et al., [2021](https://arxiv.org/html/2509.25721v2#bib.bib18); Schwartz et al., [2025](https://arxiv.org/html/2509.25721v2#bib.bib28); Weidinger et al., [2025](https://arxiv.org/html/2509.25721v2#bib.bib32)).
However, most benchmarks measure abstract model capabilities, rather than economically valuable outputs.
The true economic impact of advances in frontier AI, and the potential of models to replace or augment human work, remains unquantified (Topol, [2019](https://arxiv.org/html/2509.25721v2#bib.bib30); Cahn, [2024](https://arxiv.org/html/2509.25721v2#bib.bib6); Bar-Gill and Sunstein, [2025](https://arxiv.org/html/2509.25721v2#bib.bib3)).
This gap between (1) what benchmarks evaluate and (2) what AI is actually being used for in production is one of the biggest obstacles to creating real-world value.
To solve this problem, we have created the first version of the AI Productivity Index (APEX-v1.0), working with a team of industry experts.
The purpose of APEX is to set a goal for AI progress that is aligned with economically useful tasks in the real-world.

![Refer to caption](graphs/meanscore.png)

Figure 1: Models’ mean score on APEX-v1.0. Models are ranked in descending order. The labels in parentheses indicate the “Thinking” settings used where a choice is available.

![Refer to caption](graphs/splash.png)

Figure 2: Workflow for creating the AI Productivity Index (APEX-v1.0). Quality control is applied at every step in production to ensure that prompts and rubrics are high-quality.

APEX-v1.0 will remain a closed heldout dataset for rigorous evaluation of frontier models on their ability to execute tasks across four high-value knowledge jobs: investment banking associate, management consultant, big law associate, and primary care physician (MD).
Each prompt in APEX-v1.0 is a knowledge task that would take an expert between 1 and 8 hours to complete (with a mean of 3.5), and requires sophisticated reasoning.
Prompts are provided with evidence sources, and a rubric of prompt-specific quality criteria.
We use the rubrics to autograde responses using a panel of judge LMs, which is highly correlated with human grades (see Section [4](https://arxiv.org/html/2509.25721v2#S4 "4 Grading responses with a panel of LM judges ‣ The AI Productivity Index (APEX)")). An example prompt and part of a rubric is given in Figure [3](https://arxiv.org/html/2509.25721v2#S1.F3 "Figure 3 ‣ 1 Introduction ‣ The AI Productivity Index (APEX)"), and complete examples for each domain are given in Appendix [D](https://arxiv.org/html/2509.25721v2#A4 "Appendix D Example prompts and rubrics for each domain ‣ The AI Productivity Index (APEX)").
We have produced a public-facing leaderboard for APEX-v1.0 with results for 23 models from 13 providers.111See [mercor.com/apex](https://mercor.com/apex/). 13 models are closed source and 10 are open source. Contact us to submit your model for testing.

Table 1: Overview of APEX-v1.0. Mean number of criteria and sources per case, and mean number of tokens in all the sources combined per case, and mean number of tokens in the prompt.

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Domain | |  | | --- | | No. of | | cases | | |  | | --- | | No. of | | criteria | | |  | | --- | | No. of | | sources | | |  | | --- | | No. of tokens | | in all sources | | |  | | --- | | No. of tokens | | in prompt | |
| Medicine | 50 | 36.20 | 6.50 | 41,443 | 242 |
| Law | 50 | 27.74 | 7.02 | 31,029 | 494 |
| Management Consulting | 50 | 32.10 | 5.20 | 18,445 | 587 |
| Investment Banking | 50 | 20.32 | 4.62 | 15,787 | 398 |
| Mean | 50 | 29.09 | 5.83 | 26,676 | 430 |

![Refer to caption](graphs/example.png)

Figure 3: Example rubric for Law (ID 1045) with the first 8 criteria out of 22 total. It is supported by 8 evidence sources, which total to under 100,000 tokens. ID 1045 is not part of the APEX-v1.0 heldout test set. It was created concurrently by the same group of experts.

## 2 Dataset overview

APEX-v1.0 comprises n=200n=200 cases, split evenly across the four domains, as shown in Table [1](https://arxiv.org/html/2509.25721v2#S1.T1 "Table 1 ‣ 1 Introduction ‣ The AI Productivity Index (APEX)"). Every case was created and reviewed by experts with extensive industry experience.

### 2.1 Expert sourcing and vetting

Experts were sourced through the Mercor platform.
We targeted experts with appropriate experience, such as 3+ years at a top consulting firm, and prioritized experts with data labeling experience.
Once sourced, experts completed a 30 to 45-minute interview. Experts who demonstrated excellent domain knowledge, strong communication and reasoning skills, and understood the potential role of AI in their industry, were paid to complete a 1-2 hour assessment that tested their ability to write prompts and rubrics. If they successfully completed the assessment, they were contracted to work on APEX-v1.0.
Throughout the project we continually checked in with the experts, gave qualitative feedback, and as needed offboarded under-performers.
In total, 76 experts, with a mean experience of 7.25 years, contributed at least one case to APEX-v1.0.

* •

  Investment Banking: Twenty investment bankers with between 2 and 18 years of experience, and a mean of 8.7 years. They have held positions at firms including Goldman Sachs, Evercore, and JPMorgan.
* •

  Management Consulting: Eighteen management consultants with between 2 and 20 years of experience, and a mean of 6.9 years. They have held positions at firms including McKinsey, BCG and Bain.
* •

  Law: Twenty lawyers, with experience at Big Law firms, with between 3 and 22 years of experience, and a mean of 5 years. They have held positions at firms including Latham & Watkins, Skadden, and Cravath, Swaine & Moore, and hold JDs from institutions including Harvard, Yale, Stanford, and other Top 14 US Law Schools.
* •

  Medicine: Eighteen physicians with between 3 and 22 years of clinical experience in primary care, and a mean of 8.8 years. They have experience at hospitals including Brigham & Women’s and Mount Sinai, and hold MDs from institutions including the University of Pennsylvania, Northwestern, Cornell, and other top US medical schools.

![Refer to caption](graphs/responselength.png)

Figure 4: Median, mean and standard deviation of the length of model responses on APEX-v1.0, measured in characters and split by model. We clip mean minus standard deviation at 0 for readability.

### 2.2 Expert creation of the prompts and quality-assessment rubrics

On joining the project, experts outlined the 3-5 most common tasks in their day-to-day work, describing the seniority and expertise required.
An overview, with an estimate of their prevalence, is given in Appendix [C](https://arxiv.org/html/2509.25721v2#A3 "Appendix C Workflows reported by experts in each domain ‣ The AI Productivity Index (APEX)").
We used this information to steer the creation of prompts in APEX-v1.0, ensuring they have fidelity to the real distribution of economically-valuable tasks.
For each case, experts found or created the evidence sources (if suitable sources were not freely available, such as patient records).
We allowed both PDFs and CSVs, up to a maximum combined length of 100,000 tokens, checked against OpenAI’s tokenizer for GPT 4o.222See [openai.com/tokenizer](https://platform.openai.com/tokenizer). This ensures the sources fit within the context window of all tested models.

Experts created a rubric of quality criteria for each prompt, decomposing the hard-to-measure concept of response “quality” into testable discrete components (Saad-Falcon et al., [2024](https://arxiv.org/html/2509.25721v2#bib.bib27); Arora et al., [2025](https://arxiv.org/html/2509.25721v2#bib.bib1); Starace et al., [2025](https://arxiv.org/html/2509.25721v2#bib.bib29)).
Each criterion is an objective, well-specified and self-contained statement about the response, phrased as a descriptive claim. They are analogous to unit tests for code, and can be assessed as Pass or Fail.
For instance, if the prompt asks the model to analyze the growth opportunities for the five largest US Airlines in 2025, one criterion in the rubric could stipulate “The response identifies Delta airlines as one of the five largest airlines in the USA by market capitalization in 2025.”
We aim for parsimonious rubrics: more criteria create a more fine-grained signal to assess the quality of responses but can also encourage unnecessarily long answers if badly constructed.

### 2.3 Quality control

Experts created and submitted each prompt for review. They were then approved or rejected by reviewers.
For rejections, the reviewers could either remove the prompt from product or request specific changes so it would met the quality bar. After the prompt was approved the contributor created the quality rubric, which was then reviewed.
Multiple rounds of review help to ensure the data points meet the requirements of the task, are varied in terms of topic, style and model behavior, and are sufficiently challenging. Experts start as contributors and, only if they perform exceptionally well and demonstrate strong understanding of the task requirements, can be promoted to reviewers.
We use in-house LM-powered reviewing tools that give experts immediate feedback on their work. Experts always remain responsible for the quality of their submissions.
In total, 300 prompts were started by contributors, of which 200 were approved by reviewers and added to APEX-v1.0.

### 2.4 Dataset description

The mean number of tokens per prompt is 430, ranging from 75 to 2,806, and the mean number of characters is 2,029.
The length of prompts differs across domains. The mean number of tokens for medicine is 242 and for management consulting is 587, over twice as many. Our qualitative review suggests this is because the medicine prompts rely more on the source evidence to specify the details of the prompt compared with the other domains.
The mean number of criteria per rubric is 29.09, ranging from 7 to 54, with 5,818 criteria in total.
There are large differences in the mean criterion count per rubric across domains, from 20.32 for investment banking to 36.20 for medicine. Our qualitative review suggests this is because rubrics in medicine tend to be very precise about outcomes, often referencing specific industry-standard guidelines and regulations. However, it is difficult to generalize as there is a large spread of values in every domain.
The mean number of evidence sources for each case is 5.83, ranging from 1 to 18.
The mean number of tokens for all sources associated with each case is 26,677, ranging from 89 to 93,667.

Table 2: Performance and rankings of models on APEX-v1.0 across four metrics: mean score (%), pairwise wins (%), times ranked first (%), and times ranked last (%). For the first three metrics, a higher score is better. For the % of times that a model is ranked last, a lower score is better. Models are grouped by whether they are closed source (top section) or open source (bottom section).

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | | Mean Score | | Pairwise Wins | | Ranked 1st | | Ranked Last | |
| Model | Provider | % | Rank | % | Rank | % | Rank | % | Rank |
| Nova Pro (Thinking = CoT) | Amazon | 36.3 | 20 | 20.5 | 20 | 0.0 | 19 | 7.0 | 4 |
| Opus 4.1 (Thinking = On) | Anthropic | 55.3 | 12 | 55.5 | 13 | 2.0 | 11 | 0.0 | 17 |
| Opus 4 (Thinking = On) | Anthropic | 53.6 | 15 | 50.9 | 15 | 0.5 | 17 | 1.0 | 8 |
| Sonnet 4 (Thinking = On) | Anthropic | 54.4 | 14 | 54.3 | 14 | 1.0 | 15 | 0.0 | 17 |
| Gemini 2.5 Flash (Thinking = On) | Google | 60.4 | 3 | 69.6 | 3 | 11.5 | 3 | 0.5 | 10 |
| Gemini 2.5 Pro (Thinking = On) | Google | 60.1 | 4 | 69.2 | 4 | 5.0 | 6 | 0.5 | 10 |
| GPT 5 (Thinking = High) | OpenAI | 64.2 | 1 | 77.5 | 1 | 27.5 | 1 | 0.0 | 17 |
| o3 Pro (Thinking = High) | OpenAI | 60.0 | 5 | 67.7 | 7 | 2.0 | 11 | 0.5 | 10 |
| o3 (Thinking = High) | OpenAI | 59.9 | 6 | 67.9 | 6 | 3.5 | 8 | 0.0 | 17 |
| o4 mini (Thinking = High) | OpenAI | 56.3 | 11 | 58.5 | 11 | 2.0 | 11 | 0.0 | 17 |
| GPT 4o | OpenAI | 35.9 | 21 | 18.2 | 21 | 0.5 | 17 | 14.0 | 2 |
| Grok 4 | xAI | 61.3 | 2 | 72.5 | 2 | 9.5 | 4 | 0.0 | 17 |
| Grok 3 | xAI | 59.3 | 8 | 66.3 | 8 | 3.5 | 8 | 0.5 | 10 |
| DeepSeek R1 | DeepSeek | 57.6 | 9 | 63.1 | 9 | 13.5 | 2 | 1.0 | 8 |
| Gemma 3 27B | Google | 36.6 | 19 | 21.5 | 19 | 0.0 | 19 | 5.0 | 5 |
| Llama 4 Maverick | Meta | 44.7 | 17 | 32.5 | 17 | 1.0 | 15 | 2.0 | 6 |
| Phi 4 Multimodal | Microsoft | 20.7 | 23 | 4.3 | 23 | 0.0 | 19 | 50.5 | 1 |
| Mistral Medium 3 | Mistral | 43.0 | 18 | 31.3 | 18 | 0.0 | 19 | 0.5 | 10 |
| Kimi K2 Instruct | Moonshot | 51.1 | 16 | 47.4 | 16 | 2.0 | 11 | 0.5 | 10 |
| Nemotron Super v1 49B | Nvidia | 32.5 | 22 | 14.9 | 22 | 0.0 | 19 | 14.0 | 2 |
| GPT OSS 120B (Thinking = Medium) | OpenAI | 57.1 | 10 | 61.5 | 10 | 7.5 | 5 | 0.5 | 10 |
| Qwen 3 235B | Qwen | 59.8 | 7 | 68.3 | 5 | 5.0 | 6 | 0.0 | 17 |
| GLM 4.5 | Z | 55.1 | 13 | 56.5 | 12 | 2.5 | 10 | 2.0 | 6 |

## 3 Experimental setup

### 3.1 Models selection and access

We tested 23 models on APEX-v1.0. All models 

[... truncated ...]