---
title: 'DuaDeep-SeqAffinity: Dual-Stream Deep Learning Framework for Sequence-Only
  Antigen-Antibody Affinity Prediction'
authors:
- Aicha Boutorh
- Soumia Bouyahiaoui
- Sara Belhadj
- Nour El Yakine Guendouz
- Manel Kara Laouar
date: '2025-12-26'
categories:
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.22007v1
paper_id: 2512.22007v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
---

# DuaDeep-SeqAffinity: Dual-Stream Deep Learning Framework for Sequence-Only Antigen-Antibody Affinity Prediction

**Authors:** Aicha Boutorh, Soumia Bouyahiaoui, Sara Belhadj, Nour El Yakine Guendouz, Manel Kara Laouar

**Date:** 2025-12-26 | **Source:** arxiv | **Categories:** cs.LG

[PDF](https://arxiv.org/pdf/2512.22007v1)

## Abstract

Predicting the binding affinity between antigens and antibodies is fundamental to drug discovery and vaccine development. Traditional computational approaches often rely on experimentally determined 3D structures, which are scarce and computationally expensive to obtain. This paper introduces DuaDeep-SeqAffinity, a novel sequence-only deep learning framework that predicts affinity scores solely from their amino acid sequences using a dual-stream hybrid architecture. Our approach leverages pre-trained ESM-2 protein language model embeddings, combining 1D Convolutional Neural Networks (CNNs) for local motif detection with Transformer encoders for global contextual representation. A subsequent fusion module integrates these multi-faceted features, which are then passed to a fully connected network for final score regression. Experimental results demonstrate that DuaDeep-SeqAffinity significantly outperforms individual architectural components and existing state-of-the-art (SOTA) methods. DuaDeep achieved a superior Pearson correlation of 0.688, an R^2 of 0.460, and a Root Mean Square Error (RMSE) of 0.737, surpassing single-branch variants ESM-CNN and ESM-Transformer. Notably, the model achieved an Area Under the Curve (AUC) of 0.890, outperforming sequence-only benchmarks and even surpassing structure-sequence hybrid models. These findings prove that high-fidelity sequence embeddings can capture essential binding patterns typically reserved for structural modeling. By eliminating the reliance on 3D structures, DuaDeep-SeqAffinity provides a highly scalable and efficient solution for high-throughput screening of vast sequence libraries, significantly accelerating the therapeutic discovery pipeline.

## Notes

