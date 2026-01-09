---
title: Edge-aware GAT-based protein binding site prediction
authors:
- Weisen Yang
- Hanqing Zhang
- Wangren Qiu
- Xuan Xiao
- Weizhong Lin
date: '2026-01-05'
categories:
- cs.LG
- q-bio.QM
pdf_url: https://arxiv.org/pdf/2601.02138v1
arxiv_id: 2601.02138v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/q-bio-QM
---

# Edge-aware GAT-based protein binding site prediction

**Authors:** Weisen Yang, Hanqing Zhang, Wangren Qiu, Xuan Xiao, Weizhong Lin

**Date:** 2026-01-05 | **Categories:** cs.LG, q-bio.QM

[PDF](https://arxiv.org/pdf/2601.02138v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.02138v1)

## Abstract

Accurate identification of protein binding sites is crucial for understanding biomolecular interaction mechanisms and for the rational design of drug targets. Traditional predictive methods often struggle to balance prediction accuracy with computational efficiency when capturing complex spatial conformations. To address this challenge, we propose an Edge-aware Graph Attention Network (Edge-aware GAT) model for the fine-grained prediction of binding sites across various biomolecules, including proteins, DNA/RNA, ions, ligands, and lipids. Our method constructs atom-level graphs and integrates multidimensional structural features, including geometric descriptors, DSSP-derived secondary structure, and relative solvent accessibility (RSA), to generate spatially aware embedding vectors. By incorporating interatomic distances and directional vectors as edge features within the attention mechanism, the model significantly enhances its representation capacity. On benchmark datasets, our model achieves an ROC-AUC of 0.93 for protein-protein binding site prediction, outperforming several state-of-the-art methods. The use of directional tensor propagation and residue-level attention pooling further improves both binding site localization and the capture of local structural details. Visualizations using PyMOL confirm the model's practical utility and interpretability. To facilitate community access and application, we have deployed a publicly accessible web server at http://119.45.201.89:5000/. In summary, our approach offers a novel and efficient solution that balances prediction accuracy, generalization, and interpretability for identifying functional sites in proteins.

## Notes

