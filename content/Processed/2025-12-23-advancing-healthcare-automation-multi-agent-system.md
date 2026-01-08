---
url: https://arxiv.org/html/2404.17977v2?utm_source=chatgpt.com
title: "Advancing Healthcare Automation: Multi-Agent System for Medical Necessity Justification"
clipped: 2025-12-23 13:00
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Advancing Healthcare Automation: Multi-Agent System for Medical Necessity Justification

> Source: [https://arxiv.org/html/2404.17977v2?utm_source=chatgpt.com](https://arxiv.org/html/2404.17977v2?utm_source=chatgpt.com)

# Advancing Healthcare Automation: Multi-Agent System for Medical Necessity Justification

Himanshu Pandey
  
RISA Labs
  
himanshu@risalabs.ai
  
&Akhil Amod
  
RISA Labs
  
akhil@risalabs.ai
  
&Shivang
  
RISA Labs
  
shivang@risalabs.ai

###### Abstract

Prior Authorization delivers safe, appropriate, and cost-effective care that is medically justified with evidence-based guidelines. However, the process often requires labor-intensive manual comparisons between patient medical records and clinical guidelines, that is both repetitive and time-consuming. Recent developments in Large Language Models (LLMs) have shown potential in addressing complex medical NLP tasks with minimal supervision. This paper explores the application of Multi-Agent System (MAS) that utilize specialized LLM agents to automate Prior Authorization task by breaking them down into simpler and manageable sub-tasks. Our study systematically investigates the effects of various prompting strategies on these agents and benchmarks the performance of different LLMs. We demonstrate that GPT-4 achieves an accuracy of 86.2% in predicting checklist item-level judgments with evidence, and 95.6% in determining overall checklist judgment. Additionally, we explore how these agents can contribute to explainability of steps taken in the process, thereby enhancing trust and transparency in the system.

Advancing Healthcare Automation: Multi-Agent System for Medical Necessity Justification

  

Himanshu Pandey

RISA Labs

himanshu@risalabs.ai
                      

Akhil Amod

RISA Labs

akhil@risalabs.ai
                      

Shivang

RISA Labs

shivang@risalabs.ai

## 1 Introduction

In US healthcare, management of administrative workflows represents a pivotal yet formidable challenge. Physicians, nurses, and administrative personnel frequently allocate a substantial portion of their working hours to these procedural tasks, distracting from their primary focus on patient care. One such workflow, Prior authorization (PA) is a healthcare management process used by insurance entities to determine whether a proposed treatment or service is covered under a patient’s plan before it is approved to be carried out. This process applies to various treatments and services, including medications, imaging, and procedures Madhusoodanan et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib21)). Evaluating a PA application involves assessing medical necessity of patient-specific health records against prevailing coverage guidelines. A major part of these coverage guidelines are clinical guidelines which are systematically developed statements designed to help practitioners make decisions about appropriate health care for specific clinical circumstances. Insurance companies review these clinical guidelines to to justify medical necessity of a procedure or treatment Chambers et al. ([2016](https://arxiv.org/html/2404.17977v2#bib.bib3)).

While Prior Authorization ensures safe, appropriate, cost-effective and evidence based care to all members Jones et al. ([2021](https://arxiv.org/html/2404.17977v2#bib.bib14)), it is a major source of physician and staff burnout as well as job dissatisfaction.There are several ongoing efforts to improve the prior authorization process. High-profile innovations include (1) “gold carding” providers, exempting those who have very high historical approval rates; and (2) automating the process through e-prior auth (e-PA) Lenert et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib18)). e-PA proposes a set of transactions conveying the rules for approval in a standardized query representation in CQL. While such rule based methods are adequate for simple authorization decisions, complex cases with temporal data, evidence of responses and trends in clinical data items can be difficult to represent in CQL’s rule based format Lenert et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib18)). Also, a nationwide survey Salzbrenner et al. ([2022](https://arxiv.org/html/2404.17977v2#bib.bib28)) identified that the use of e-PA was not associated with less provider time or fewer challenges in preparing and submitting PA requests. However, the use of e-PA reported a shorter PA decision time. Additionally, there is an understanding that AI can potentially improve the current state of PA filing Lenert et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib18)).

The introduction of Large Language Models (LLMs) OpenAI ([2024](https://arxiv.org/html/2404.17977v2#bib.bib25)); Touvron et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib31)) has catalyzed a transformative shift in the capabilities of artificial intelligence, enabling the resolution of complex challenges previously inaccessible to conventional AI methods. LLMs excel in interpreting and synthesizing large volumes of unstructured data, enhancing tasks such as natural language understanding Yang et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib37)), sentiment analysis, and automated content creation Zhou et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib39)). Building on this foundation, Multi-Agent Systems, which employs a collective of AI-powered agents, represents an even further advancement Guo et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib10)). This approach decomposes a singular complex task into multiple, manageable sub-tasks and distributes them across multiple agents, each specialized through training for a sub-task. Following this methodology essentially infuses a microservice architecture into the traditional monolithic AI framework, enabling more modular, scalable, and robust AI systems. By integrating the depth and adaptability of LLMs with the collaborative and dynamic nature of Multi-Agent Systems, AI systems can achieve unprecedented levels of performance and versatility across various complex problems Guo et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib10)); He et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib11)).

In this paper, we investigate the application of multi-agent systems for determining medical necessity for a medical procedure. Our contributions are as follows:

* •

  We propose a novel challenge of establishing medical necessity for prior authorizations (PAs) by reasoning on clinical guidelines against patient medical records.
* •

  We decompose the problem statement of PA filing into intermediate sub-tasks, which can then be effectively solved by LLM Agents.
* •

  We demonstrate through extensive experimentations the effect of LLM choice and prompting strategies. Specifically, GPT-4 achieves an accuracy of 86.2% in predicting checklist item-level judgments and 95.6% in determining overall checklist judgment.

## 2 Related Work

Large Language Models (LLMs) have completely changed the landscape of Natural Language Processing (NLP) in the recent years. LLMs have shown emergent abilities Wei et al. ([2022a](https://arxiv.org/html/2404.17977v2#bib.bib34)) in settings like few-shot prompting Brown et al. ([2020](https://arxiv.org/html/2404.17977v2#bib.bib2)) and augmented prompting strategies. Augmented prompting like Chain of Thought (CoT) Wei et al. ([2022b](https://arxiv.org/html/2404.17977v2#bib.bib35)) and Automatic Chain of Thought Zhang et al. ([2022](https://arxiv.org/html/2404.17977v2#bib.bib38)) prompting enables LLMs to solve reasoning tasks using step by step approach. Additionally, instruction fine-tuning with human feedback has made LLMs able to respond to instructions describing unseen tasks Ouyang et al. ([2022](https://arxiv.org/html/2404.17977v2#bib.bib26)). Other advancements include techniques like self-consistency Wang et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib33)) which helps LLMs solve complex tasks using multiple different ways of thinking and prompt gradient descent Pryzant et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib27)) which edits prompt in the opposite semantic direction of the gradient to boost prompt’s performance. Building on this, more dynamic and complex tasks can be tackled by LLM powered Multi Agent Systems (LLM-MAS). These LLM-MAS have collaborative autonomous agents equipped with unique strategies and behaviour Guo et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib10)). This agentic behaviour is based on the idea that LLMs can improve in game-play scenario by using previous experiences and feedback Fu et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib8)); Madaan et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib20)).

LLMs have the potential to disrupt medicine. Models like Med-PaLM Singhal et al. ([2022](https://arxiv.org/html/2404.17977v2#bib.bib30)) outperformed state of the art on all MultiMedBench tasks Tu et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib32)). GPT-4 has consistently outperformed task-specific fine-tuned models and is comparable to human experts on QA datasets Zhou et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib39)). GPT-4 scored 86.65% in United States Medical Licensing Examination (USMLE) where passing percentage was 60% Nori et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib24)). It also demonstrates GPT-4’s capacity for reasoning about concepts tested in USMLE challenge problems, including explanation, counterfactual reasoning, differential diagnosis, and testing strategies. Some recent researches have started to explore the impact of LLMs in discharge summary generation Ellershaw et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib7)); Williams et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib36)), care planning Nashwan and Hani ([2023](https://arxiv.org/html/2404.17977v2#bib.bib23)); Jung et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib15)), Electronic Health Records (EHRs) Cui et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib4)); Ahsan et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib1)). Text-to-SQL parsing has attracted significant interest Li et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib19)). Building on this idea, numerous research efforts, such as EHRSQL Lee et al. ([2022](https://arxiv.org/html/2404.17977v2#bib.bib17)), are focused on extracting data from EHRs. Additionally, there are ongoing efforts to develop solutions for EHR-based question-answering tasks Shi et al. ([2024](https://arxiv.org/html/2404.17977v2#bib.bib29)).

![Refer to caption](extracted/5714167/candidates.png)

Figure 1: Leaf-Level Judgement Prediction where the first agent classifies the documents into supporting and contradictory sets and then the jury agent determines if the checklist item is satisfied.

However, the domain of PA filing is largely untouched by LLMs mainly because of lack of publicly available data despite the understanding that AI can potentially improve its current state Lenert et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib18)). While some efforts have been made to automate PA filing, for example Diane et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib6)) where ChatGPT is utilised to generate PA letters for Orthopedic Surgery Practice, but the process lacks the important step of establishing medical necessity using AI. Another study aims to determine PA Approval for Lumbar Stenosis Surgery with Machine Learning De Barros et al. ([2023](https://arxiv.org/html/2404.17977v2#bib.bib5)) but it uses surgery specific symptoms as input variables which would be difficult to generalize.

## 3 Problem Statement

As mentioned above, the evaluation of medical necessity is conducted through a meticulous comparison between patient medical records and established clinical guidelines. These medical records are systematically structured in a json-like format, usually in FHIR 111https://www.hl7.org/fhir/, within Electronic Health Records (EHRs) systems. Each object (resource) can be of type Patient (Patient Demographics), Observation (Laboratory Results), Procedure (Treatment History), Medication Request, Diagnostic Report etc. We define a set of EHR documents (resources) as 𝒟={d}i=1ND𝒟superscriptsubscript𝑑𝑖1subscript𝑁𝐷\mathcal{D}=\{d\}\_{i=1}^{N\_{D}}caligraphic\_D = { italic\_d } start\_POSTSUBSCRIPT italic\_i = 1 end\_POSTSUBSCRIPT start\_POSTSUPERSCRIPT italic\_N start\_POSTSUBSCRIPT italic\_D end\_POSTSUBSCRIPT end\_POSTSUPERSCRIPT of size NDsubscript𝑁𝐷N\_{D}italic\_N start\_POSTSUBSCRIPT italic\_D end\_POSTSUBSCRIPT

Further, clinical guidelines are formatted in a hierarchical, tree-like structure (referred as checklist in this paper), where each guideline statement (parent node) can encompass an arbitrary number of subordinate child statements (sub-checklist or leaf node) nested within it as shown in Figure [2](https://arxiv.org/html/2404.17977v2#S4.F2 "Figure 2 ‣ 4 Methodology ‣ Advancing Healthcare Automation: Multi-Agent System for Medical Necessity Justification") and [3](https://arxiv.org/html/2404.17977v2#S5.F3 "Figure 3 ‣ 5 Data Collection and Annotation ‣ Advancing Healthcare Automation: Multi-Agent System for Medical Necessity Justification"). Thus, we define a coverage guideline or checklist as 𝒞={c}j=1NC𝒞superscriptsubscript𝑐𝑗1subscript𝑁𝐶\mathcal{C}=\{c\}\_{j=1}^{N\_{C}}caligraphic\_C = { italic\_c } start\_POSTSUBSCRIPT italic\_j = 1 end\_POSTSUBSCRIPT start\_POSTSUPERSCRIPT italic\_N start\_POSTSUBSCRIPT italic\_C end\_POSTSUBSCRIPT end\_POSTSUPERSCRIPT, where c𝑐citalic\_c is a checklist item.

Eventually, the task is to automatically determine the medical necessity Y∈{−1,0,1}𝑌101Y\in\{-1,0,1\}italic\_Y ∈ { - 1 , 0 , 1 } where -1 means the medical necessity is not justified, 1 means it is justified and 0 means there is a lack of sufficient evidence to justify the medical necessity criteria.

Recognizing the importance of transparency in the task, we also aim to provide evidence ℰc={eck}k=1Ncsubscriptℰ𝑐superscriptsubscriptsubscript𝑒subscript𝑐𝑘𝑘1subscript𝑁𝑐\mathcal{E}\_{c}=\{e\_{c\_{k}}\}\_{k=1}^{N\_{c}}caligraphic\_E start\_POSTSUBSCRIPT italic\_c end\_POSTSUBSCRIPT = { italic\_e start\_POSTSUBSCRIPT italic\_c start\_POSTSUBSCRIPT italic\_k end\_POSTSUBSCRIPT end\_POSTSUBSCRIPT } start\_POSTSUBSCRIPT italic\_k = 1 end\_POSTSUBSCRIPT start\_POSTSUPERSCRIPT italic\_N start\_POSTSUBSCRIPT italic\_c end\_POSTSUBSCRIPT end\_POSTSUPERSCRIPT. These evidences can be used downstream to cross-reference medical documents used to establish medical necessity for the procedure.

We aim to construct a machine learning model ℳℳ\mathcal{M}caligraphic\_M such that:

|  |  |  |  |
| --- | --- | --- | --- |
|  | ℳ⁢(𝒟,𝒞)={Y,{ℰc}}⁢∀c∈𝒞ℳ𝒟𝒞𝑌subscriptℰ𝑐for-all𝑐𝒞\mathcal{M}(\mathcal{D},\mathcal{C})=\{Y,\{\mathcal{E}\_{c}\}\}\ \forall c\in% \mathcal{C}caligraphic\_M ( caligraphic\_D , caligraphic\_C ) = { italic\_Y , { caligraphic\_E start\_POSTSUBSCRIPT italic\_c end\_POSTSUBSCRIPT } } ∀ italic\_c ∈ caligraphic\_C |  | (1) |

## 4 Methodology

![Refer to caption](extracted/5714167/child.png)

Figure 2: Bott

[... truncated ...]