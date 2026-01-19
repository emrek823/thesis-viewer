---
title: 'CalPro: Prior-Aware Evidential--Conformal Prediction with Structure-Aware
  Guarantees for Protein Structures'
authors:
- Ibne Farabi Shihab
- Sanjeda Akter
- Anuj Sharma
date: '2026-01-12'
categories:
- cs.LG
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.07201v1
arxiv_id: 2601.07201v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/cs-AI
---

# CalPro: Prior-Aware Evidential--Conformal Prediction with Structure-Aware Guarantees for Protein Structures

**Authors:** Ibne Farabi Shihab, Sanjeda Akter, Anuj Sharma

**Date:** 2026-01-12 | **Categories:** cs.LG, cs.AI

[PDF](https://arxiv.org/pdf/2601.07201v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.07201v1)

## Abstract

Deep protein structure predictors such as AlphaFold provide confidence estimates (e.g., pLDDT) that are often miscalibrated and degrade under distribution shifts across experimental modalities, temporal changes, and intrinsically disordered regions. We introduce CalPro, a prior-aware evidential-conformal framework for shift-robust uncertainty quantification. CalPro combines (i) a geometric evidential head that outputs Normal-Inverse-Gamma predictive distributions via a graph-based architecture; (ii) a differentiable conformal layer that enables end-to-end training with finite-sample coverage guarantees; and (iii) domain priors (disorder, flexibility) encoded as soft constraints. We derive structure-aware coverage guarantees under distribution shift using PAC-Bayesian bounds over ambiguity sets, and show that CalPro maintains near-nominal coverage while producing tighter intervals than standard conformal methods in regions where priors are informative. Empirically, CalPro exhibits at most 5% coverage degradation across modalities (vs. 15-25% for baselines), reduces calibration error by 30-50%, and improves downstream ligand-docking success by 25%. Beyond proteins, CalPro applies to structured regression tasks in which priors encode local reliability, validated on non-biological benchmarks.

## Notes

