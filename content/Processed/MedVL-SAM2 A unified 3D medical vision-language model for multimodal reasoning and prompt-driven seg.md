---
title: 'MedVL-SAM2: A unified 3D medical vision-language model for multimodal reasoning
  and prompt-driven segmentation'
authors:
- Yang Xing
- Jiong Wu
- Savas Ozdemir
- Ying Zhang
- Yang Yang
- Wei Shao
- Kuang Gong
date: '2026-01-14'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.09879v1
arxiv_id: 2601.09879v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# MedVL-SAM2: A unified 3D medical vision-language model for multimodal reasoning and prompt-driven segmentation

**Authors:** Yang Xing, Jiong Wu, Savas Ozdemir, Ying Zhang, Yang Yang...

**Date:** 2026-01-14 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.09879v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.09879v1)

## Abstract

Recent progress in medical vision-language models (VLMs) has achieved strong performance on image-level text-centric tasks such as report generation and visual question answering (VQA). However, achieving fine-grained visual grounding and volumetric spatial reasoning in 3D medical VLMs remains challenging, particularly when aiming to unify these capabilities within a single, generalizable framework. To address this challenge, we proposed MedVL-SAM2, a unified 3D medical multimodal model that concurrently supports report generation, VQA, and multi-paradigm segmentation, including semantic, referring, and interactive segmentation. MedVL-SAM2 integrates image-level reasoning and pixel-level perception through a cohesive architecture tailored for 3D medical imaging, and incorporates a SAM2-based volumetric segmentation module to enable precise multi-granular spatial reasoning. The model is trained in a multi-stage pipeline: it is first pre-trained on a large-scale corpus of 3D CT image-text pairs to align volumetric visual features with radiology-language embeddings. It is then jointly optimized with both language-understanding and segmentation objectives using a comprehensive 3D CT segmentation dataset. This joint training enables flexible interaction via language, point, or box prompts, thereby unifying high-level visual reasoning with spatially precise localization. Our unified architecture delivers state-of-the-art performance across report generation, VQA, and multiple 3D segmentation tasks. Extensive analyses further show that the model provides reliable 3D visual grounding, controllable interactive segmentation, and robust cross-modal reasoning, demonstrating that high-level semantic reasoning and precise 3D localization can be jointly achieved within a unified 3D medical VLM.

## Notes

