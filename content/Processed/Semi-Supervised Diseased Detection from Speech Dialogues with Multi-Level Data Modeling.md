---
title: Semi-Supervised Diseased Detection from Speech Dialogues with Multi-Level Data
  Modeling
authors:
- Xingyuan Li
- Mengyue Wu
date: '2026-01-08'
categories:
- cs.SD
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.04744v1
arxiv_id: 2601.04744v1
tags:
- paper
- alphaxiv/hot
- topic/cs-SD
- topic/cs-AI
---

# Semi-Supervised Diseased Detection from Speech Dialogues with Multi-Level Data Modeling

**Authors:** Xingyuan Li, Mengyue Wu

**Date:** 2026-01-08 | **Categories:** cs.SD, cs.AI

[PDF](https://arxiv.org/pdf/2601.04744v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.04744v1)

## Abstract

Detecting medical conditions from speech acoustics is fundamentally a weakly-supervised learning problem: a single, often noisy, session-level label must be linked to nuanced patterns within a long, complex audio recording. This task is further hampered by severe data scarcity and the subjective nature of clinical annotations. While semi-supervised learning (SSL) offers a viable path to leverage unlabeled data, existing audio methods often fail to address the core challenge that pathological traits are not uniformly expressed in a patient's speech. We propose a novel, audio-only SSL framework that explicitly models this hierarchy by jointly learning from frame-level, segment-level, and session-level representations within unsegmented clinical dialogues. Our end-to-end approach dynamically aggregates these multi-granularity features and generates high-quality pseudo-labels to efficiently utilize unlabeled data. Extensive experiments show the framework is model-agnostic, robust across languages and conditions, and highly data-efficient-achieving, for instance, 90\% of fully-supervised performance using only 11 labeled samples. This work provides a principled approach to learning from weak, far-end supervision in medical speech analysis.

## Notes

