---
title: Prompt engineering does not universally improve Large Language Model performance
  across clinical decision-making tasks
authors:
- Mengdi Chai
- Ali R. Zomorrodi
date: '2025-12-28'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2512.22966v1
arxiv_id: 2512.22966v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
---

# Prompt engineering does not universally improve Large Language Model performance across clinical decision-making tasks

**Authors:** Mengdi Chai, Ali R. Zomorrodi

**Date:** 2025-12-28 | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2512.22966v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.22966v1)

## Abstract

Large Language Models (LLMs) have demonstrated promise in medical knowledge assessments, yet their practical utility in real-world clinical decision-making remains underexplored. In this study, we evaluated the performance of three state-of-the-art LLMs-ChatGPT-4o, Gemini 1.5 Pro, and LIama 3.3 70B-in clinical decision support across the entire clinical reasoning workflow of a typical patient encounter. Using 36 case studies, we first assessed LLM's out-of-the-box performance across five key sequential clinical decision-making tasks under two temperature settings (default vs. zero): differential diagnosis, essential immediate steps, relevant diagnostic testing, final diagnosis, and treatment recommendation. All models showed high variability by task, achieving near-perfect accuracy in final diagnosis, poor performance in relevant diagnostic testing, and moderate performance in remaining tasks. Furthermore, ChatGPT performed better under the zero temperature, whereas LIama showed stronger performance under the default temperature. Next, we assessed whether prompt engineering could enhance LLM performance by applying variations of the MedPrompt framework, incorporating targeted and random dynamic few-shot learning. The results demonstrate that prompt engineering is not a one-size-fit-all solution. While it significantly improved the performance on the task with lowest baseline accuracy (relevant diagnostic testing), it was counterproductive for others. Another key finding was that the targeted dynamic few-shot prompting did not consistently outperform random selection, indicating that the presumed benefits of closely matched examples may be counterbalanced by loss of broader contextual diversity. These findings suggest that the impact of prompt engineering is highly model and task-dependent, highlighting the need for tailored, context-aware strategies for integrating LLMs into healthcare.

## Notes

