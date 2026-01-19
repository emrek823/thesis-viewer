---
title: Human-AI Co-design for Clinical Prediction Models
authors:
- Jean Feng
- Avni Kothari
- Patrick Vossler
- Andrew Bishara
- Lucas Zier
- Newton Addo
- Aaron Kornblith
- Yan Shuo Tan
- Chandan Singh
date: '2026-01-14'
categories:
- cs.AI
- cs.CL
- stat.ME
pdf_url: https://arxiv.org/pdf/2601.09072v1
arxiv_id: 2601.09072v1
tags:
- paper
- alphaxiv/hot
- topic/cs-AI
- topic/cs-CL
- topic/stat-ME
---

# Human-AI Co-design for Clinical Prediction Models

**Authors:** Jean Feng, Avni Kothari, Patrick Vossler, Andrew Bishara, Lucas Zier...

**Date:** 2026-01-14 | **Categories:** cs.AI, cs.CL, stat.ME

[PDF](https://arxiv.org/pdf/2601.09072v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.09072v1)

## Abstract

Developing safe, effective, and practically useful clinical prediction models (CPMs) traditionally requires iterative collaboration between clinical experts, data scientists, and informaticists. This process refines the often small but critical details of the model building process, such as which features/patients to include and how clinical categories should be defined. However, this traditional collaboration process is extremely time- and resource-intensive, resulting in only a small fraction of CPMs reaching clinical practice. This challenge intensifies when teams attempt to incorporate unstructured clinical notes, which can contain an enormous number of concepts. To address this challenge, we introduce HACHI, an iterative human-in-the-loop framework that uses AI agents to accelerate the development of fully interpretable CPMs by enabling the exploration of concepts in clinical notes. HACHI alternates between (i) an AI agent rapidly exploring and evaluating candidate concepts in clinical notes and (ii) clinical and domain experts providing feedback to improve the CPM learning process. HACHI defines concepts as simple yes-no questions that are used in linear models, allowing the clinical AI team to transparently review, refine, and validate the CPM learned in each round. In two real-world prediction tasks (acute kidney injury and traumatic brain injury), HACHI outperforms existing approaches, surfaces new clinically relevant concepts not included in commonly-used CPMs, and improves model generalizability across clinical sites and time periods. Furthermore, HACHI reveals the critical role of the clinical AI team, such as directing the AI agent to explore concepts that it had not previously considered, adjusting the granularity of concepts it considers, changing the objective function to better align with the clinical objectives, and identifying issues of data bias and leakage.

## Notes

