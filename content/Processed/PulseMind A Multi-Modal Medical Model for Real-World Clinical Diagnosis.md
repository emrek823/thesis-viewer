---
title: 'PulseMind: A Multi-Modal Medical Model for Real-World Clinical Diagnosis'
authors:
- Jiao Xu
- Junwei Liu
- Jiangwei Lao
- Qi Zhu
- Yunpeng Zhao
- Congyun Jin
- Shinan Liu
- Zhihong Lu
- Lihe Zhang
- Xin Chen
date: '2026-01-12'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.07344v1
arxiv_id: 2601.07344v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# PulseMind: A Multi-Modal Medical Model for Real-World Clinical Diagnosis

**Authors:** Jiao Xu, Junwei Liu, Jiangwei Lao, Qi Zhu, Yunpeng Zhao...

**Date:** 2026-01-12 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.07344v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.07344v1)

## Abstract

Recent advances in medical multi-modal models focus on specialized image analysis like dermatology, pathology, or radiology. However, they do not fully capture the complexity of real-world clinical diagnostics, which involve heterogeneous inputs and require ongoing contextual understanding during patient-physician interactions. To bridge this gap, we introduce PulseMind, a new family of multi-modal diagnostic models that integrates a systematically curated dataset, a comprehensive evaluation benchmark, and a tailored training framework. Specifically, we first construct a diagnostic dataset, MediScope, which comprises 98,000 real-world multi-turn consultations and 601,500 medical images, spanning over 10 major clinical departments and more than 200 sub-specialties. Then, to better reflect the requirements of real-world clinical diagnosis, we develop the PulseMind Benchmark, a multi-turn diagnostic consultation benchmark with a four-dimensional evaluation protocol comprising proactiveness, accuracy, usefulness, and language quality. Finally, we design a training framework tailored for multi-modal clinical diagnostics, centered around a core component named Comparison-based Reinforcement Policy Optimization (CRPO). Compared to absolute score rewards, CRPO uses relative preference signals from multi-dimensional com-parisons to provide stable and human-aligned training guidance. Extensive experiments demonstrate that PulseMind achieves competitive performance on both the diagnostic consultation benchmark and public medical benchmarks.

## Notes

