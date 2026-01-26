---
title: 'TransportAgents: a multi-agents LLM framework for traffic accident severity
  prediction'
authors:
- Zhichao Yang
- Jiashu He
- Jinxuan Fan
- Cirillo Cinzia
date: '2026-01-21'
categories:
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.15519v1
arxiv_id: 2601.15519v1
tags:
- paper
- alphaxiv/hot
- topic/cs-AI
---

# TransportAgents: a multi-agents LLM framework for traffic accident severity prediction

**Authors:** Zhichao Yang, Jiashu He, Jinxuan Fan, Cirillo Cinzia

**Date:** 2026-01-21 | **Categories:** cs.AI

[PDF](https://arxiv.org/pdf/2601.15519v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15519v1)

## Abstract

Accurate prediction of traffic crash severity is critical for improving emergency response and public safety planning. Although recent large language models (LLMs) exhibit strong reasoning capabilities, their single-agent architectures often struggle with heterogeneous, domain-specific crash data and tend to generate biased or unstable predictions. To address these limitations, this paper proposes TransportAgents, a hybrid multi-agent framework that integrates category-specific LLM reasoning with a multilayer perceptron (MLP) integration module. Each specialized agent focuses on a particular subset of traffic information, such as demographics, environmental context, or incident details, to produce intermediate severity assessments that are subsequently fused into a unified prediction. Extensive experiments on two complementary U.S. datasets, the Consumer Product Safety Risk Management System (CPSRMS) and the National Electronic Injury Surveillance System (NEISS), demonstrate that TransportAgents consistently outperforms both traditional machine learning and advanced LLM-based baselines. Across three representative backbones, including closed-source models such as GPT-3.5 and GPT-4o, as well as open-source models such as LLaMA-3.3, the framework exhibits strong robustness, scalability, and cross-dataset generalizability. A supplementary distributional analysis further shows that TransportAgents produces more balanced and well-calibrated severity predictions than standard single-agent LLM approaches, highlighting its interpretability and reliability for safety-critical decision support applications.

## Notes

