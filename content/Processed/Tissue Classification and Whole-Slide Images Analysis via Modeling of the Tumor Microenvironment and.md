---
title: Tissue Classification and Whole-Slide Images Analysis via Modeling of the Tumor
  Microenvironment and Biological Pathways
authors:
- Junzhuo Liu
- Xuemei Du
- Daniel Reisenbuchler
- Ye Chen
- Markus Eckstein
- Christian Matek
- Friedrich Feuerhake
- Dorit Merhof
date: '2026-01-13'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.08336v1
arxiv_id: 2601.08336v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# Tissue Classification and Whole-Slide Images Analysis via Modeling of the Tumor Microenvironment and Biological Pathways

**Authors:** Junzhuo Liu, Xuemei Du, Daniel Reisenbuchler, Ye Chen, Markus Eckstein...

**Date:** 2026-01-13 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.08336v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.08336v1)

## Abstract

Automatic integration of whole slide images (WSIs) and gene expression profiles has demonstrated substantial potential in precision clinical diagnosis and cancer progression studies. However, most existing studies focus on individual gene sequences and slide level classification tasks, with limited attention to spatial transcriptomics and patch level applications. To address this limitation, we propose a multimodal network, BioMorphNet, which automatically integrates tissue morphological features and spatial gene expression to support tissue classification and differential gene analysis. For considering morphological features, BioMorphNet constructs a graph to model the relationships between target patches and their neighbors, and adjusts the response strength based on morphological and molecular level similarity, to better characterize the tumor microenvironment. In terms of multimodal interactions, BioMorphNet derives clinical pathway features from spatial transcriptomic data based on a predefined pathway database, serving as a bridge between tissue morphology and gene expression. In addition, a novel learnable pathway module is designed to automatically simulate the biological pathway formation process, providing a complementary representation to existing clinical pathways. Compared with the latest morphology gene multimodal methods, BioMorphNet's average classification metrics improve by 2.67%, 5.48%, and 6.29% for prostate cancer, colorectal cancer, and breast cancer datasets, respectively. BioMorphNet not only classifies tissue categories within WSIs accurately to support tumor localization, but also analyzes differential gene expression between tissue categories based on prediction confidence, contributing to the discovery of potential tumor biomarkers.

## Notes

