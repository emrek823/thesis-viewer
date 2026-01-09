---
title: 'IBISAgent: Reinforcing Pixel-Level Visual Reasoning in MLLMs for Universal
  Biomedical Object Referring and Segmentation'
authors:
- Yankai Jiang
- Qiaoru Li
- Binlu Xu
- Haoran Sun
- Chao Ding
- Junting Dong
- Yuxiang Cai
- Xuhong Zhang
- Jianwei Yin
date: '2026-01-06'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.03054v1
arxiv_id: 2601.03054v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# IBISAgent: Reinforcing Pixel-Level Visual Reasoning in MLLMs for Universal Biomedical Object Referring and Segmentation

**Authors:** Yankai Jiang, Qiaoru Li, Binlu Xu, Haoran Sun, Chao Ding...

**Date:** 2026-01-06 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.03054v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.03054v1)

## Abstract

Recent research on medical MLLMs has gradually shifted its focus from image-level understanding to fine-grained, pixel-level comprehension. Although segmentation serves as the foundation for pixel-level understanding, existing approaches face two major challenges. First, they introduce implicit segmentation tokens and require simultaneous fine-tuning of both the MLLM and external pixel decoders, which increases the risk of catastrophic forgetting and limits generalization to out-of-domain scenarios. Second, most methods rely on single-pass reasoning and lack the capability to iteratively refine segmentation results, leading to suboptimal performance. To overcome these limitations, we propose a novel agentic MLLM, named IBISAgent, that reformulates segmentation as a vision-centric, multi-step decision-making process. IBISAgent enables MLLMs to generate interleaved reasoning and text-based click actions, invoke segmentation tools, and produce high-quality masks without architectural modifications. By iteratively performing multi-step visual reasoning on masked image features, IBISAgent naturally supports mask refinement and promotes the development of pixel-level visual reasoning capabilities. We further design a two-stage training framework consisting of cold-start supervised fine-tuning and agentic reinforcement learning with tailored, fine-grained rewards, enhancing the model's robustness in complex medical referring and reasoning segmentation tasks. Extensive experiments demonstrate that IBISAgent consistently outperforms both closed-source and open-source SOTA methods. All datasets, code, and trained models will be released publicly.

## Notes

