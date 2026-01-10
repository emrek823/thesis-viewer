---
title: Training-Free Adaptation of New-Generation LLMs using Legacy Clinical Models
authors:
- Sasha Ronaghi
- Chloe Stanwyck
- Asad Aali
- Amir Ronaghi
- Miguel Fuentes
- Tina Hernandez-Boussard
- Emily Alsentzer
date: '2026-01-06'
categories:
- cs.CL
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.03423v1
arxiv_id: 2601.03423v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
- topic/cs-AI
---

# Training-Free Adaptation of New-Generation LLMs using Legacy Clinical Models

**Authors:** Sasha Ronaghi, Chloe Stanwyck, Asad Aali, Amir Ronaghi, Miguel Fuentes...

**Date:** 2026-01-06 | **Categories:** cs.CL, cs.AI

[PDF](https://arxiv.org/pdf/2601.03423v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.03423v1)

## Abstract

Adapting language models to the clinical domain through continued pretraining and fine-tuning requires costly retraining for each new model generation. We propose Cross-Architecture Proxy Tuning (CAPT), a model-ensembling approach that enables training-free adaptation of state-of-the-art general-domain models using existing clinical models. CAPT supports models with disjoint vocabularies, leveraging contrastive decoding to selectively inject clinically relevant signals while preserving the general-domain model's reasoning and fluency. On six clinical classification and text-generation tasks, CAPT with a new-generation general-domain model and an older-generation clinical model consistently outperforms both models individually and state-of-the-art ensembling approaches (average +17.6% over UniTE, +41.4% over proxy tuning across tasks). Through token-level analysis and physician case studies, we demonstrate that CAPT amplifies clinically actionable language, reduces context errors, and increases clinical specificity.

## Notes

