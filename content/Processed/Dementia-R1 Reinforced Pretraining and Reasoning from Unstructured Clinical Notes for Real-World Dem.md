---
title: 'Dementia-R1: Reinforced Pretraining and Reasoning from Unstructured Clinical
  Notes for Real-World Dementia Prognosis'
authors:
- Choonghan Kim
- Hyunmin Hwang
- Hangeol Chang
- Jaemin Kim
- Jinse Park
- Jae-Sung Lim
- Jong Chul Ye
date: '2026-01-06'
categories:
- cs.CL
- cs.AI
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.03018v1
arxiv_id: 2601.03018v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
- topic/cs-AI
- topic/cs-LG
---

# Dementia-R1: Reinforced Pretraining and Reasoning from Unstructured Clinical Notes for Real-World Dementia Prognosis

**Authors:** Choonghan Kim, Hyunmin Hwang, Hangeol Chang, Jaemin Kim, Jinse Park...

**Date:** 2026-01-06 | **Categories:** cs.CL, cs.AI, cs.LG

[PDF](https://arxiv.org/pdf/2601.03018v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.03018v1)

## Abstract

While Large Language Models (LLMs) have shown strong performance on clinical text understanding, they struggle with longitudinal prediction tasks such as dementia prognosis, which require reasoning over complex, non-monotonic symptom trajectories across multiple visits. Standard supervised training lacks explicit annotations for symptom evolution, while direct Reinforcement Learning (RL) is hindered by sparse binary rewards. To address this challenge, we introduce Dementia-R1, an RL-based framework for longitudinal dementia prognosis from unstructured clinical notes. Our approach adopts a Cold-Start RL strategy that pre-trains the model to predict verifiable clinical indices extracted from patient histories, enhancing the capability to reason about disease progression before determining the final clinical status. Extensive experiments demonstrate that Dementia-R1 achieves an F1 score of 77.03% on real-world unstructured clinical datasets. Notably, on the ADNI benchmark, our 7B model rivals GPT-4o, effectively capturing fluctuating cognitive trajectories. Code is available at https://anonymous.4open.science/r/dementiar1-CDB5

## Notes

