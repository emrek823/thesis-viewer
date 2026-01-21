---
title: 'MMedExpert-R1: Strengthening Multimodal Medical Reasoning via Domain-Specific
  Adaptation and Clinical Guideline Reinforcement'
authors:
- Meidan Ding
- Jipeng Zhang
- Wenxuan Wang
- Haiqin Zhong
- Xiaoling Luo
- Wenting Chen
- Linlin Shen
date: '2026-01-16'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.10949v1
arxiv_id: 2601.10949v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# MMedExpert-R1: Strengthening Multimodal Medical Reasoning via Domain-Specific Adaptation and Clinical Guideline Reinforcement

**Authors:** Meidan Ding, Jipeng Zhang, Wenxuan Wang, Haiqin Zhong, Xiaoling Luo...

**Date:** 2026-01-16 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.10949v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.10949v1)

## Abstract

Medical Vision-Language Models (MedVLMs) excel at perception tasks but struggle with complex clinical reasoning required in real-world scenarios. While reinforcement learning (RL) has been explored to enhance reasoning capabilities, existing approaches face critical mismatches: the scarcity of deep reasoning data, cold-start limits multi-specialty alignment, and standard RL algorithms fail to model clinical reasoning diversity. We propose MMedExpert-R1, a novel reasoning MedVLM that addresses these challenges through domain-specific adaptation and clinical guideline reinforcement. We construct MMedExpert, a high-quality dataset of 10K samples across four specialties with step-by-step reasoning traces. Our Domain-Specific Adaptation (DSA) creates specialty-specific LoRA modules to provide diverse initialization, while Guideline-Based Advantages (GBA) explicitly models different clinical reasoning perspectives to align with real-world diagnostic strategies. Conflict-Aware Capability Integration then merges these specialized experts into a unified agent, ensuring robust multi-specialty alignment. Comprehensive experiments demonstrate state-of-the-art performance, with our 7B model achieving 27.50 on MedXpert-MM and 83.03 on OmniMedVQA, establishing a robust foundation for reliable multimodal medical reasoning systems.

## Notes

