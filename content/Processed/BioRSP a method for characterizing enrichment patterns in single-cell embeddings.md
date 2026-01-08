---
title: 'BioRSP: a method for characterizing enrichment patterns in single-cell embeddings'
authors:
- Yao, Z.
- Chen, J. Y.
date: '2025-12-29'
categories:
- bioinformatics
pdf_url: https://www.biorxiv.org/content/10.1101/2024.06.25.599250v2.full.pdf
paper_id: biorxiv_10.1101_2024.06.25.599250
source: biorxiv
tags:
- paper
- source/biorxiv
- topic/bioinformatics
---

# BioRSP: a method for characterizing enrichment patterns in single-cell embeddings

**Authors:** Yao, Z., Chen, J. Y.

**Date:** 2025-12-29 | **Source:** biorxiv | **Categories:** bioinformatics

[PDF](https://www.biorxiv.org/content/10.1101/2024.06.25.599250v2.full.pdf)

## Abstract

Low-dimensional embeddings such as UMAP and t-SNE are routinely used to visually interpret high-dimensional omics data, yet claims based on embedding geometry are often qualitative, embedding-sensitive, and weakly calibrated. We present BioRSP (Biological Radar Scanning Plots), a geometry-first framework that quantifies how a user-defined foreground subset is distributed across the embedding footprint of a fixed analysis set. BioRSP converts 2D coordinates to polar form around a robust vantage point, scans the set by angle, and computes a radar profile that summarizes signed radial enrichment of foreground relative to background within sliding angular windows using a distance-based radial discrepancy. The profile is reduced to interpretable summaries including anisotropy magnitude, peak directionality, and coverage, and is accompanied by explicit adequacy rules and subsampling-based stability diagnostics so the method can abstain when the geometry is underpowered. We demonstrate BioRSP in a community-standard human kidney single-nucleus reference by analyzing thick ascending limb (TAL) nuclei using published UMAP coordinates and a standardized within-set top-decile foreground rule. Within TAL, BioRSP distinguishes sharply localized rim-enrichment patterns, broadly supported but structured within-type heterogeneity, and near-isotropic profiles, with anisotropy spanning more than an order of magnitude in the pooled TAL analysis. Donor-aware reruns show that per-donor adequacy is frequently limiting, but that directional profiles are stable when donor-level support is sufficient. BioRSP is provided as open-source software producing standardized plots, summary tables, and run manifests to support reproducible embedding-aligned enrichment analysis.

## Notes

