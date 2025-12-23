---
title: 'IMILIA: interpretable multiple instance learning for inflammation prediction
  in IBD from H&E whole slide images'
authors:
- Thalyssa Baiocco-Rodrigues
- Antoine Olivier
- Reda Belbahri
- Thomas Duboudin
- Pierre-Antoine Bannier
- Benjamin Adjadj
- Katharina Von Loga
- Nathan Noiry
- Maxime Touzot
- Hector Roux de Bezieux
date: '2025-12-15'
source: arxiv
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.13440v1
arxiv_id: 2512.13440v1
tags:
- paper
- source/arxiv
- alphaxiv/hot
- topic/cs-CV
---

# IMILIA: interpretable multiple instance learning for inflammation prediction in IBD from H&E whole slide images

**Authors:** Thalyssa Baiocco-Rodrigues, Antoine Olivier, Reda Belbahri, Thomas Duboudin, Pierre-Antoine Bannier (+5 more)

**Date:** 2025-12-15

**Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.13440v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.13440v1)

## Abstract

As the therapeutic target for Inflammatory Bowel Disease (IBD) shifts toward histologic remission, the accurate assessment of microscopic inflammation has become increasingly central for evaluating disease activity and response to treatment. In this work, we introduce IMILIA (Interpretable Multiple Instance Learning for Inflammation Analysis), an end-to-end framework designed for the prediction of inflammation presence in IBD digitized slides stained with hematoxylin and eosin (H&E), followed by the automated computation of markers characterizing tissue regions driving the predictions. IMILIA is composed of an inflammation prediction module, consisting of a Multiple Instance Learning (MIL) model, and an interpretability module, divided in two blocks: HistoPLUS, for cell instance detection, segmentation and classification; and EpiSeg, for epithelium segmentation. IMILIA achieves a cross-validation ROC-AUC of 0.83 on the discovery cohort, and a ROC-AUC of 0.99 and 0.84 on two external validation cohorts. The interpretability module yields biologically consistent insights: tiles with higher predicted scores show increased densities of immune cells (lymphocytes, plasmocytes, neutrophils and eosinophils), whereas lower-scored tiles predominantly contain normal epithelial cells. Notably, these patterns were consistent across all datasets. Code and models to partially replicate the results on the public IBDColEpi dataset can be found at https://github.com/owkin/imilia.

## Notes

<!-- Add your notes here -->
