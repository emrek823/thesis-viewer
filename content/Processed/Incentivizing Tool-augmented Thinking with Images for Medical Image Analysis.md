---
title: Incentivizing Tool-augmented Thinking with Images for Medical Image Analysis
authors:
- Yankai Jiang
- Yujie Zhang
- Peng Zhang
- Yichen Li
- Jintai Chen
- Xiaoming Shi
- Shihui Zhen
date: '2025-12-16'
source: arxiv
categories:
- cs.AI
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.14157v1
arxiv_id: 2512.14157v1
tags:
- paper
- source/arxiv
- alphaxiv/hot
- topic/cs-AI
- topic/cs-CV
---

# Incentivizing Tool-augmented Thinking with Images for Medical Image Analysis

**Authors:** Yankai Jiang, Yujie Zhang, Peng Zhang, Yichen Li, Jintai Chen (+2 more)

**Date:** 2025-12-16

**Source:** arxiv | **Categories:** cs.AI, cs.CV

[PDF](https://arxiv.org/pdf/2512.14157v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.14157v1)

## Abstract

Recent reasoning based medical MLLMs have made progress in generating step by step textual reasoning chains. However, they still struggle with complex tasks that necessitate dynamic and iterative focusing on fine-grained visual regions to achieve precise grounding and diagnosis. We introduce Ophiuchus, a versatile, tool-augmented framework that equips an MLLM to (i) decide when additional visual evidence is needed, (ii) determine where to probe and ground within the medical image, and (iii) seamlessly weave the relevant sub-image content back into an interleaved, multimodal chain of thought. In contrast to prior approaches limited by the performance ceiling of specialized tools, Ophiuchus integrates the model's inherent grounding and perception capabilities with external tools, thereby fostering higher-level reasoning. The core of our method is a three-stage training strategy: cold-start training with tool-integrated reasoning data to achieve basic tool selection and adaptation for inspecting key regions; self-reflection fine-tuning to strengthen reflective reasoning and encourage revisiting tool outputs; and Agentic Tool Reinforcement Learning to directly optimize task-specific rewards and emulate expert-like diagnostic behavior. Extensive experiments show that Ophiuchus consistently outperforms both closed-source and open-source SOTA methods across diverse medical benchmarks, including VQA, detection, and reasoning-based segmentation. Our approach illuminates a path toward medical AI agents that can genuinely "think with images" through tool-integrated reasoning. Datasets, codes, and trained models will be released publicly.

## Notes

<!-- Add your notes here -->
