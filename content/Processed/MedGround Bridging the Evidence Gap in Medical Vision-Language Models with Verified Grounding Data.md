---
title: 'MedGround: Bridging the Evidence Gap in Medical Vision-Language Models with
  Verified Grounding Data'
authors:
- Mengmeng Zhang
- Xiaoping Wu
- Hao Luo
- Fan Wang
- Yisheng Lv
date: '2026-01-11'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.06847v1
arxiv_id: 2601.06847v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# MedGround: Bridging the Evidence Gap in Medical Vision-Language Models with Verified Grounding Data

**Authors:** Mengmeng Zhang, Xiaoping Wu, Hao Luo, Fan Wang, Yisheng Lv

**Date:** 2026-01-11 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.06847v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.06847v1)

## Abstract

Vision-Language Models (VLMs) can generate convincing clinical narratives, yet frequently struggle to visually ground their statements. We posit this limitation arises from the scarcity of high-quality, large-scale clinical referring-localization pairs. To address this, we introduce MedGround, an automated pipeline that transforms segmentation resources into high-quality medical referring grounding data. Leveraging expert masks as spatial anchors, MedGround precisely derives localization targets, extracts shape and spatial cues, and guides VLMs to synthesize natural, clinically grounded queries that reflect morphology and location. To ensure data rigor, a multi-stage verification system integrates strict formatting checks, geometry- and medical-prior rules, and image-based visual judging to filter out ambiguous or visually unsupported samples. Finally, we present MedGround-35K, a novel multimodal medical dataset. Extensive experiments demonstrate that VLMs trained with MedGround-35K consistently achieve improved referring grounding performance, enhance multi-object semantic disambiguation, and exhibit strong generalization to unseen grounding settings. This work highlights MedGround as a scalable, data-driven approach to anchor medical language to verifiable visual evidence. Dataset and code will be released publicly upon acceptance.

## Notes

