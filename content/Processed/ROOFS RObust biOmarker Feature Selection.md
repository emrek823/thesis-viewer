---
title: 'ROOFS: RObust biOmarker Feature Selection'
authors:
- Anastasiia Bakhmach
- Paul Dufossé
- Andrea Vaglio
- Florence Monville
- Laurent Greillier
- Fabrice Barlési
- Sébastien Benzekry
date: '2026-01-08'
categories:
- stat.ML
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.05151v1
arxiv_id: 2601.05151v1
tags:
- paper
- alphaxiv/hot
- topic/stat-ML
- topic/cs-LG
---

# ROOFS: RObust biOmarker Feature Selection

**Authors:** Anastasiia Bakhmach, Paul Dufossé, Andrea Vaglio, Florence Monville, Laurent Greillier...

**Date:** 2026-01-08 | **Categories:** stat.ML, cs.LG

[PDF](https://arxiv.org/pdf/2601.05151v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.05151v1)

## Abstract

Feature selection (FS) is essential for biomarker discovery and in the analysis of biomedical datasets. However, challenges such as high-dimensional feature space, low sample size, multicollinearity, and missing values make FS non-trivial. Moreover, FS performances vary across datasets and predictive tasks. We propose roofs, a Python package available at https://gitlab.inria.fr/compo/roofs, designed to help researchers in the choice of FS method adapted to their problem. Roofs benchmarks multiple FS methods on the user's data and generates reports that summarize a comprehensive set of evaluation metrics, including downstream predictive performance estimated using optimism correction, stability, reliability of individual features, and true positive and false positive rates assessed on semi-synthetic data with a simulated outcome. We demonstrate the utility of roofs on data from the PIONeeR clinical trial, aimed at identifying predictors of resistance to anti-PD-(L)1 immunotherapy in lung cancer. The PIONeeR dataset contained 374 multi-source blood and tumor biomarkers from 435 patients. A reduced subset of 214 features was obtained through iterative variance inflation factor pre-filtering. Of the 34 FS methods gathered in roofs, we evaluated 23 in combination with 11 classifiers (253 models in total) and identified a filter based on the union of Benjamini-Hochberg false discovery rate-adjusted p-values from t-test and logistic regression as the optimal approach, outperforming other methods including the widely used LASSO. We conclude that comprehensive benchmarking with roofs has the potential to improve the robustness and reproducibility of FS discoveries and increase the translational value of clinical models.

## Notes

