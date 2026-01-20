---
title: 'UniX: Unifying Autoregression and Diffusion for Chest X-Ray Understanding
  and Generation'
authors:
- Ruiheng Zhang
- Jingfeng Yao
- Huangxuan Zhao
- Hao Yan
- Xiao He
- Lei Chen
- Zhou Wei
- Yong Luo
- Zengmao Wang
- Lefei Zhang
date: '2026-01-16'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.11522v1
arxiv_id: 2601.11522v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# UniX: Unifying Autoregression and Diffusion for Chest X-Ray Understanding and Generation

**Authors:** Ruiheng Zhang, Jingfeng Yao, Huangxuan Zhao, Hao Yan, Xiao He...

**Date:** 2026-01-16 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.11522v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.11522v1)

## Abstract

Despite recent progress, medical foundation models still struggle to unify visual understanding and generation, as these tasks have inherently conflicting goals: semantic abstraction versus pixel-level reconstruction. Existing approaches, typically based on parameter-shared autoregressive architectures, frequently lead to compromised performance in one or both tasks. To address this, we present UniX, a next-generation unified medical foundation model for chest X-ray understanding and generation. UniX decouples the two tasks into an autoregressive branch for understanding and a diffusion branch for high-fidelity generation. Crucially, a cross-modal self-attention mechanism is introduced to dynamically guide the generation process with understanding features. Coupled with a rigorous data cleaning pipeline and a multi-stage training strategy, this architecture enables synergistic collaboration between tasks while leveraging the strengths of diffusion models for superior generation. On two representative benchmarks, UniX achieves a 46.1% improvement in understanding performance (Micro-F1) and a 24.2% gain in generation quality (FD-RadDino), using only a quarter of the parameters of LLM-CXR. By achieving performance on par with task-specific models, our work establishes a scalable paradigm for synergistic medical image understanding and generation. Codes and models are available at https://github.com/ZrH42/UniX.

## Notes

