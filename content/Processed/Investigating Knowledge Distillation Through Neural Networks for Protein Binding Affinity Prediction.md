---
title: Investigating Knowledge Distillation Through Neural Networks for Protein Binding
  Affinity Prediction
authors:
- Wajid Arshad Abbasi
- Syed Ali Abbas
- Maryum Bibi
- Saiqa Andleeb
- Muhammad Naveed Akhtar
date: '2026-01-07'
categories:
- cs.LG
- cs.AI
- q-bio.BM
- q-bio.MN
- q-bio.QM
pdf_url: https://arxiv.org/pdf/2601.03704v1
paper_id: 2601.03704v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
- topic/cs-AI
- topic/q-bio-BM
---

# Investigating Knowledge Distillation Through Neural Networks for Protein Binding Affinity Prediction

**Authors:** Wajid Arshad Abbasi, Syed Ali Abbas, Maryum Bibi, Saiqa Andleeb, Muhammad Naveed Akhtar

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** cs.LG, cs.AI, q-bio.BM, q-bio.MN, q-bio.QM

[PDF](https://arxiv.org/pdf/2601.03704v1)

## Abstract

The trade-off between predictive accuracy and data availability makes it difficult to predict protein--protein binding affinity accurately. The lack of experimentally resolved protein structures limits the performance of structure-based machine learning models, which generally outperform sequence-based methods. In order to overcome this constraint, we suggest a regression framework based on knowledge distillation that uses protein structural data during training and only needs sequence data during inference. The suggested method uses binding affinity labels and intermediate feature representations to jointly supervise the training of a sequence-based student network under the guidance of a structure-informed teacher network. Leave-One-Complex-Out (LOCO) cross-validation was used to assess the framework on a non-redundant protein--protein binding affinity benchmark dataset. A maximum Pearson correlation coefficient (P_r) of 0.375 and an RMSE of 2.712 kcal/mol were obtained by sequence-only baseline models, whereas a P_r of 0.512 and an RMSE of 2.445 kcal/mol were obtained by structure-based models. With a P_r of 0.481 and an RMSE of 2.488 kcal/mol, the distillation-based student model greatly enhanced sequence-only performance. Improved agreement and decreased bias were further confirmed by thorough error analyses. With the potential to close the performance gap between sequence-based and structure-based models as larger datasets become available, these findings show that knowledge distillation is an efficient method for transferring structural knowledge to sequence-based predictors. The source code for running inference with the proposed distillation-based binding affinity predictor can be accessed at https://github.com/wajidarshad/ProteinAffinityKD.

## Notes

