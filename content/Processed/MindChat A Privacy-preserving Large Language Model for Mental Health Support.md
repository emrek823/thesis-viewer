---
title: 'MindChat: A Privacy-preserving Large Language Model for Mental Health Support'
authors:
- Dong Xue
- Jicheng Tu
- Ming Wang
- Xin Yan
- Fangzhou Liu
- Jie Hu
date: '2026-01-05'
categories:
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.01993v1
arxiv_id: 2601.01993v1
tags:
- paper
- alphaxiv/hot
- topic/cs-AI
---

# MindChat: A Privacy-preserving Large Language Model for Mental Health Support

**Authors:** Dong Xue, Jicheng Tu, Ming Wang, Xin Yan, Fangzhou Liu...

**Date:** 2026-01-05 | **Categories:** cs.AI

[PDF](https://arxiv.org/pdf/2601.01993v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.01993v1)

## Abstract

Large language models (LLMs) have shown promise for mental health support, yet training such models is constrained by the scarcity and sensitivity of real counseling dialogues. In this article, we present MindChat, a privacy-preserving LLM for mental health support, together with MindCorpus, a synthetic multi-turn counseling dataset constructed via a multi-agent role-playing framework. To synthesize high-quality counseling data, the developed dialogue-construction framework employs a dual closed-loop feedback design to integrate psychological expertise and counseling techniques through role-playing: (i) turn-level critique-and-revision to improve coherence and counseling appropriateness within a session, and (ii) session-level strategy refinement to progressively enrich counselor behaviors across sessions. To mitigate privacy risks under decentralized data ownership, we fine-tune the base model using federated learning with parameter-efficient LoRA adapters and incorporate differentially private optimization to reduce membership and memorization risks. Experiments on synthetic-data quality assessment and counseling capability evaluation show that MindCorpus improves training effectiveness and that MindChat is competitive with existing general and counseling-oriented LLM baselines under both automatic LLM-judge and human evaluation protocols, while exhibiting reduced privacy leakage under membership inference attacks.

## Notes

