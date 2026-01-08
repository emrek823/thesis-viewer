---
title: 'MambaFormer: Token-Level Guided Routing Mixture-of-Experts for Accurate and
  Efficient Clinical Assistance'
authors:
- Hamad Khan
- Saddam Hussain Khan
date: '2026-01-03'
categories:
- cs.CV
- cs.AI
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.01260v1
arxiv_id: 2601.01260v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
- topic/cs-CL
---

# MambaFormer: Token-Level Guided Routing Mixture-of-Experts for Accurate and Efficient Clinical Assistance

**Authors:** Hamad Khan, Saddam Hussain Khan

**Date:** 2026-01-03 | **Categories:** cs.CV, cs.AI, cs.CL

[PDF](https://arxiv.org/pdf/2601.01260v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.01260v1)

## Abstract

The deployment of large language models (LLMs) in real-world clinical applications is constrained by the fundamental trade-off between computational cost and the efficiency of linear-time models. To address this, we propose an LLM-based MambaFormer hybrid Mixture-of-Experts (MoE) framework for efficient medical question-answering (QA) and clinical assistance. The MambaFormer employs a lightweight gating mechanism that performs token-level dynamic routing to a customized Transformer expert (ET5) for short, complex queries or to a State Space Model expert (EMamba) for long, high-throughput sequences. The customized EMamba and ET5 models are tailored to accommodate input sequence dimensionality, embedding structure, sequence length, and target-specific output heads, and are fine-tuned through transfer learning on a new, custom-designed DentalQA dataset. Moreover, intelligent routing decisions are driven by the contextual complexity of token embeddings, normalized sequence length, and domain-aware features, thereby enforcing a Pareto-optimal trade-off between inference latency and prediction accuracy. Furthermore, a novel utility-guided multi-objective loss jointly optimizes decisions, router parameters, routing behavior, expert utilization, and computational cost by adaptively regulating token-level expert activation. Finally, the proposed MambaFormer is cross-validated (holdout) for medical QA on the new, custom-designed DentalQA and PubMedQA datasets and compared with state-of-the-art techniques. The proposed MambaFormer outperforms (BERTScore = 0.9180) with ultra-low latency (0.077 s), delivering a 24.4 speedup over T5-Large and establishing a scalable solution for resource-constrained clinical deployment.

## Notes

