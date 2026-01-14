---
title: 'Atlas: Orchestrating Heterogeneous Models and Tools for Multi-Domain Complex
  Reasoning'
authors:
- Jinyang Wu
- Guocheng Zhai
- Ruihan Jin
- Jiahao Yuan
- Yuhao Shen
- Shuai Zhang
- Zhengqi Wen
- Jianhua Tao
date: '2026-01-07'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.03872v1
arxiv_id: 2601.03872v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
---

# Atlas: Orchestrating Heterogeneous Models and Tools for Multi-Domain Complex Reasoning

**Authors:** Jinyang Wu, Guocheng Zhai, Ruihan Jin, Jiahao Yuan, Yuhao Shen...

**Date:** 2026-01-07 | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2601.03872v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.03872v1)

## Abstract

The integration of large language models (LLMs) with external tools has significantly expanded the capabilities of AI agents. However, as the diversity of both LLMs and tools increases, selecting the optimal model-tool combination becomes a high-dimensional optimization challenge. Existing approaches often rely on a single model or fixed tool-calling logic, failing to exploit the performance variations across heterogeneous model-tool pairs. In this paper, we present ATLAS (Adaptive Tool-LLM Alignment and Synergistic Invocation), a dual-path framework for dynamic tool usage in cross-domain complex reasoning. ATLAS operates via a dual-path approach: (1) \textbf{training-free cluster-based routing} that exploits empirical priors for domain-specific alignment, and (2) \textbf{RL-based multi-step routing} that explores autonomous trajectories for out-of-distribution generalization. Extensive experiments across 15 benchmarks demonstrate that our method outperforms closed-source models like GPT-4o, surpassing existing routing methods on both in-distribution (+10.1%) and out-of-distribution (+13.1%) tasks. Furthermore, our framework shows significant gains in visual reasoning by orchestrating specialized multi-modal tools.

## Notes

