---
title: Evaluating Large Vision-language Models for Surgical Tool Detection
authors:
- Nakul Poudel
- Richard Simon
- Cristian A. Linte
date: '2026-01-23'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.16895v1
arxiv_id: 2601.16895v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# Evaluating Large Vision-language Models for Surgical Tool Detection

**Authors:** Nakul Poudel, Richard Simon, Cristian A. Linte

**Date:** 2026-01-23 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.16895v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.16895v1)

## Abstract

Surgery is a highly complex process, and artificial intelligence has emerged as a transformative force in supporting surgical guidance and decision-making. However, the unimodal nature of most current AI systems limits their ability to achieve a holistic understanding of surgical workflows. This highlights the need for general-purpose surgical AI systems capable of comprehensively modeling the interrelated components of surgical scenes. Recent advances in large vision-language models that integrate multimodal data processing offer strong potential for modeling surgical tasks and providing human-like scene reasoning and understanding. Despite their promise, systematic investigations of VLMs in surgical applications remain limited. In this study, we evaluate the effectiveness of large VLMs for the fundamental surgical vision task of detecting surgical tools. Specifically, we investigate three state-of-the-art VLMs, Qwen2.5, LLaVA1.5, and InternVL3.5, on the GraSP robotic surgery dataset under both zero-shot and parameter-efficient LoRA fine-tuning settings. Our results demonstrate that Qwen2.5 consistently achieves superior detection performance in both configurations among the evaluated VLMs. Furthermore, compared with the open-set detection baseline Grounding DINO, Qwen2.5 exhibits stronger zero-shot generalization and comparable fine-tuned performance. Notably, Qwen2.5 shows superior instrument recognition, while Grounding DINO demonstrates stronger localization.

## Notes

