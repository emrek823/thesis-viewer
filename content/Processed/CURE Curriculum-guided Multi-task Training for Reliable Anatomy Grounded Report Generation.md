---
title: 'CURE: Curriculum-guided Multi-task Training for Reliable Anatomy Grounded
  Report Generation'
authors:
- Pablo Messina
- Andrés Villa
- Juan León Alcázar
- Karen Sánchez
- Carlos Hinojosa
- Denis Parra
- Álvaro Soto
- Bernard Ghanem
date: '2026-01-21'
categories:
- cs.CV
- cs.AI
- cs.CL
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.15408v1
arxiv_id: 2601.15408v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
- topic/cs-CL
---

# CURE: Curriculum-guided Multi-task Training for Reliable Anatomy Grounded Report Generation

**Authors:** Pablo Messina, Andrés Villa, Juan León Alcázar, Karen Sánchez, Carlos Hinojosa...

**Date:** 2026-01-21 | **Categories:** cs.CV, cs.AI, cs.CL, cs.LG

[PDF](https://arxiv.org/pdf/2601.15408v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15408v1)

## Abstract

Medical vision-language models can automate the generation of radiology reports but struggle with accurate visual grounding and factual consistency. Existing models often misalign textual findings with visual evidence, leading to unreliable or weakly grounded predictions. We present CURE, an error-aware curriculum learning framework that improves grounding and report quality without any additional data. CURE fine-tunes a multimodal instructional model on phrase grounding, grounded report generation, and anatomy-grounded report generation using public datasets. The method dynamically adjusts sampling based on model performance, emphasizing harder samples to improve spatial and textual alignment. CURE improves grounding accuracy by +0.37 IoU, boosts report quality by +0.188 CXRFEScore, and reduces hallucinations by 18.6%. CURE is a data-efficient framework that enhances both grounding accuracy and report reliability. Code is available at https://github.com/PabloMessina/CURE and model weights at https://huggingface.co/pamessina/medgemma-4b-it-cure

## Notes

