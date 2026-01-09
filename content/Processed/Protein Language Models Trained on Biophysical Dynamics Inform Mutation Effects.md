---
title: Protein Language Models Trained on Biophysical Dynamics Inform Mutation Effects
authors:
- Hou, C.
- Zhao, H.
- Shen, Y.
date: '2026-01-07'
categories:
- bioinformatics
pdf_url: https://www.biorxiv.org/content/10.1101/2024.10.11.617911v5.full.pdf
paper_id: biorxiv_10.1101_2024.10.11.617911
source: biorxiv
tags:
- paper
- source/biorxiv
- topic/bioinformatics
---

# Protein Language Models Trained on Biophysical Dynamics Inform Mutation Effects

**Authors:** Hou, C., Zhao, H., Shen, Y.

**Date:** 2026-01-07 | **Source:** biorxiv | **Categories:** bioinformatics

[PDF](https://www.biorxiv.org/content/10.1101/2024.10.11.617911v5.full.pdf)

## Abstract

Structural dynamics are fundamental to protein functions and mutation effects. Current protein deep learning models are predominantly trained on sequence and/or static structure data, which often fail to capture the dynamic nature of proteins. To address this, we introduce SeqDance and ESMDance, two protein language models trained on dynamic biophysical properties derived from molecular dynamics simulations and normal mode analyses of over 64,000 proteins. Both models can be directly applied to predict dynamic properties of unseen ordered and disordered proteins. SeqDance, trained from scratch, has attentions that capture dynamic interaction and co-movement between residues, and its embeddings encode rich representations of protein dynamics that can be further utilized to predict conformational properties beyond the training tasks via transfer learning. SeqDance predicted dynamic property changes reflect mutation effect on protein folding stability. ESMDance, built upon ESM2 (Evolutionary Scale Model II) outputs, substantially outperforms ESM2 in zero-shot prediction of mutation effects for designed and viral proteins which lack evolutionary information. Together, SeqDance and ESMDance offer a new framework for integrating protein dynamics into language models, enabling more generalizable predictions of protein behavior and mutation effects.

## Notes

