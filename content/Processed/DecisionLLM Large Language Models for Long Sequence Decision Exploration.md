---
title: 'DecisionLLM: Large Language Models for Long Sequence Decision Exploration'
authors:
- Xiaowei Lv
- Zhilin Zhang
- Yijun Li
- Yusen Huo
- Siyuan Ju
- Xuyan Li
- Chunxiang Hong
- Tianyu Wang
- Yongcai Wang
- Peng Sun
date: '2026-01-15'
categories:
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.10148v1
arxiv_id: 2601.10148v1
tags:
- paper
- alphaxiv/hot
- topic/cs-AI
---

# DecisionLLM: Large Language Models for Long Sequence Decision Exploration

**Authors:** Xiaowei Lv, Zhilin Zhang, Yijun Li, Yusen Huo, Siyuan Ju...

**Date:** 2026-01-15 | **Categories:** cs.AI

[PDF](https://arxiv.org/pdf/2601.10148v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.10148v1)

## Abstract

Long-sequence decision-making, which is usually addressed through reinforcement learning (RL), is a critical component for optimizing strategic operations in dynamic environments, such as real-time bidding in computational advertising. The Decision Transformer (DT) introduced a powerful paradigm by framing RL as an autoregressive sequence modeling problem. Concurrently, Large Language Models (LLMs) have demonstrated remarkable success in complex reasoning and planning tasks. This inspires us whether LLMs, which share the same Transformer foundation, but operate at a much larger scale, can unlock new levels of performance in long-horizon sequential decision-making problem. This work investigates the application of LLMs to offline decision making tasks. A fundamental challenge in this domain is the LLMs' inherent inability to interpret continuous values, as they lack a native understanding of numerical magnitude and order when values are represented as text strings. To address this, we propose treating trajectories as a distinct modality. By learning to align trajectory data with natural language task descriptions, our model can autoregressively predict future decisions within a cohesive framework we term DecisionLLM. We establish a set of scaling laws governing this paradigm, demonstrating that performance hinges on three factors: model scale, data volume, and data quality. In offline experimental benchmarks and bidding scenarios, DecisionLLM achieves strong performance. Specifically, DecisionLLM-3B outperforms the traditional Decision Transformer (DT) by 69.4 on Maze2D umaze-v1 and by 0.085 on AuctionNet. It extends the AIGB paradigm and points to promising directions for future exploration in online bidding.

## Notes

