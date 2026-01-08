---
title: 'HELM-BERT: A Transformer for Medium-sized Peptide Property Prediction'
authors:
- Seungeon Lee
- Takuto Koyama
- Itsuki Maeda
- Shigeyuki Matsumoto
- Yasushi Okuno
date: '2025-12-29'
categories:
- cs.LG
- q-bio.BM
pdf_url: https://arxiv.org/pdf/2512.23175v1
arxiv_id: 2512.23175v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/q-bio-BM
---

# HELM-BERT: A Transformer for Medium-sized Peptide Property Prediction

**Authors:** Seungeon Lee, Takuto Koyama, Itsuki Maeda, Shigeyuki Matsumoto, Yasushi Okuno

**Date:** 2025-12-29 | **Categories:** cs.LG, q-bio.BM

[PDF](https://arxiv.org/pdf/2512.23175v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.23175v1)

## Abstract

Therapeutic peptides have emerged as a pivotal modality in modern drug discovery, occupying a chemically and topologically rich space. While accurate prediction of their physicochemical properties is essential for accelerating peptide development, existing molecular language models rely on representations that fail to capture this complexity. Atom-level SMILES notation generates long token sequences and obscures cyclic topology, whereas amino-acid-level representations cannot encode the diverse chemical modifications central to modern peptide design. To bridge this representational gap, the Hierarchical Editing Language for Macromolecules (HELM) offers a unified framework enabling precise description of both monomer composition and connectivity, making it a promising foundation for peptide language modeling. Here, we propose HELM-BERT, the first encoder-based peptide language model trained on HELM notation. Based on DeBERTa, HELM-BERT is specifically designed to capture hierarchical dependencies within HELM sequences. The model is pre-trained on a curated corpus of 39,079 chemically diverse peptides spanning linear and cyclic structures. HELM-BERT significantly outperforms state-of-the-art SMILES-based language models in downstream tasks, including cyclic peptide membrane permeability prediction and peptide-protein interaction prediction. These results demonstrate that HELM's explicit monomer- and topology-aware representations offer substantial data-efficiency advantages for modeling therapeutic peptides, bridging a long-standing gap between small-molecule and protein language models.

## Notes

