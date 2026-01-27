---
title: 'Cite-While-You-Generate: Training-Free Evidence Attribution for Multimodal
  Clinical Summarization'
authors:
- Qianqi Yan
- Huy Nguyen
- Sumana Srivatsa
- Hari Bandi
- Xin Eric Wang
- Krishnaram Kenthapadi
date: '2026-01-23'
categories:
- cs.CL
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.16397v1
arxiv_id: 2601.16397v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
- topic/cs-AI
---

# Cite-While-You-Generate: Training-Free Evidence Attribution for Multimodal Clinical Summarization

**Authors:** Qianqi Yan, Huy Nguyen, Sumana Srivatsa, Hari Bandi, Xin Eric Wang...

**Date:** 2026-01-23 | **Categories:** cs.CL, cs.AI

[PDF](https://arxiv.org/pdf/2601.16397v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.16397v1)

## Abstract

Trustworthy clinical summarization requires not only fluent generation but also transparency about where each statement comes from. We propose a training-free framework for generation-time source attribution that leverages decoder attentions to directly cite supporting text spans or images, overcoming the limitations of post-hoc or retraining-based methods. We introduce two strategies for multimodal attribution: a raw image mode, which directly uses image patch attentions, and a caption-as-span mode, which substitutes images with generated captions to enable purely text-based alignment. Evaluations on two representative domains: clinician-patient dialogues (CliConSummation) and radiology reports (MIMIC-CXR), show that our approach consistently outperforms embedding-based and self-attribution baselines, improving both text-level and multimodal attribution accuracy (e.g., +15% F1 over embedding baselines). Caption-based attribution achieves competitive performance with raw-image attention while being more lightweight and practical. These findings highlight attention-guided attribution as a promising step toward interpretable and deployable clinical summarization systems.

## Notes

