---
title: 'SkinFlow: Efficient Information Transmission for Open Dermatological Diagnosis
  via Dynamic Visual Encoding and Staged RL'
authors:
- Lijun Liu
- Linwei Chen
- Zhishou Zhang
- Meng Tian
- Hengfu Cui
- Ruiyang Li
- Zhaocheng Liu
- Qiang Ju
- Qianxi Li
- Hong-Yu Zhou
date: '2026-01-14'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.09136v1
arxiv_id: 2601.09136v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# SkinFlow: Efficient Information Transmission for Open Dermatological Diagnosis via Dynamic Visual Encoding and Staged RL

**Authors:** Lijun Liu, Linwei Chen, Zhishou Zhang, Meng Tian, Hengfu Cui...

**Date:** 2026-01-14 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.09136v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.09136v1)

## Abstract

General-purpose Large Vision-Language Models (LVLMs), despite their massive scale, often falter in dermatology due to "diffuse attention" - the inability to disentangle subtle pathological lesions from background noise. In this paper, we challenge the assumption that parameter scaling is the only path to medical precision. We introduce SkinFlow, a framework that treats diagnosis as an optimization of visual information transmission efficiency. Our approach utilizes a Virtual-Width Dynamic Vision Encoder (DVE) to "unfold" complex pathological manifolds without physical parameter expansion, coupled with a two-stage Reinforcement Learning strategy. This strategy sequentially aligns explicit medical descriptions (Stage I) and reconstructs implicit diagnostic textures (Stage II) within a constrained semantic space. Furthermore, we propose a clinically grounded evaluation protocol that prioritizes diagnostic safety and hierarchical relevance over rigid label matching. Empirical results are compelling: our 7B model establishes a new state-of-the-art on the Fitzpatrick17k benchmark, achieving a +12.06% gain in Top-1 accuracy and a +28.57% boost in Top-6 accuracy over the massive general-purpose models (e.g., Qwen3VL-235B and GPT-5.2). These findings demonstrate that optimizing geometric capacity and information flow yields superior diagnostic reasoning compared to raw parameter scaling.

## Notes

