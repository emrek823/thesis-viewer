---
title: 'Inside Out: Evolving User-Centric Core Memory Trees for Long-Term Personalized
  Dialogue Systems'
authors:
- Jihao Zhao
- Ding Chen
- Zhaoxin Fan
- Kerun Xu
- Mengting Hu
- Bo Tang
- Feiyu Xiong
- Zhiyu li
date: '2026-01-08'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.05171v1
arxiv_id: 2601.05171v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
---

# Inside Out: Evolving User-Centric Core Memory Trees for Long-Term Personalized Dialogue Systems

**Authors:** Jihao Zhao, Ding Chen, Zhaoxin Fan, Kerun Xu, Mengting Hu...

**Date:** 2026-01-08 | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2601.05171v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.05171v1)

## Abstract

Existing long-term personalized dialogue systems struggle to reconcile unbounded interaction streams with finite context constraints, often succumbing to memory noise accumulation, reasoning degradation, and persona inconsistency. To address these challenges, this paper proposes Inside Out, a framework that utilizes a globally maintained PersonaTree as the carrier of long-term user profiling. By constraining the trunk with an initial schema and updating the branches and leaves, PersonaTree enables controllable growth, achieving memory compression while preserving consistency. Moreover, we train a lightweight MemListener via reinforcement learning with process-based rewards to produce structured, executable, and interpretable {ADD, UPDATE, DELETE, NO_OP} operations, thereby supporting the dynamic evolution of the personalized tree. During response generation, PersonaTree is directly leveraged to enhance outputs in latency-sensitive scenarios; when users require more details, the agentic mode is triggered to introduce details on-demand under the constraints of the PersonaTree. Experiments show that PersonaTree outperforms full-text concatenation and various personalized memory systems in suppressing contextual noise and maintaining persona consistency. Notably, the small MemListener model achieves memory-operation decision performance comparable to, or even surpassing, powerful reasoning models such as DeepSeek-R1-0528 and Gemini-3-Pro.

## Notes

