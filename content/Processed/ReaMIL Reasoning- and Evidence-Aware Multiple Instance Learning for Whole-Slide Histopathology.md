---
title: 'ReaMIL: Reasoning- and Evidence-Aware Multiple Instance Learning for Whole-Slide
  Histopathology'
authors:
- Hyun Do Jung
- Jungwon Choi
- Hwiyoung Kim
date: '2026-01-15'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.10073v1
arxiv_id: 2601.10073v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# ReaMIL: Reasoning- and Evidence-Aware Multiple Instance Learning for Whole-Slide Histopathology

**Authors:** Hyun Do Jung, Jungwon Choi, Hwiyoung Kim

**Date:** 2026-01-15 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.10073v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.10073v1)

## Abstract

We introduce ReaMIL (Reasoning- and Evidence-Aware MIL), a multiple instance learning approach for whole-slide histopathology that adds a light selection head to a strong MIL backbone. The head produces soft per-tile gates and is trained with a budgeted-sufficiency objective: a hinge loss that enforces the true-class probability to be $\geq τ$ using only the kept evidence, under a sparsity budget on the number of selected tiles. The budgeted-sufficiency objective yields small, spatially compact evidence sets without sacrificing baseline performance. Across TCGA-NSCLC (LUAD vs. LUSC), TCGA-BRCA (IDC vs. Others), and PANDA, ReaMIL matches or slightly improves baseline AUC and provides quantitative evidence-efficiency diagnostics. On NSCLC, it attains AUC 0.983 with a mean minimal sufficient K (MSK) $\approx 8.2$ tiles at $τ= 0.90$ and AUKC $\approx 0.864$, showing that class confidence rises sharply and stabilizes once a small set of tiles is kept. The method requires no extra supervision, integrates seamlessly with standard MIL training, and naturally yields slide-level overlays. We report accuracy alongside MSK, AUKC, and contiguity for rigorous evaluation of model behavior on WSIs.

## Notes

