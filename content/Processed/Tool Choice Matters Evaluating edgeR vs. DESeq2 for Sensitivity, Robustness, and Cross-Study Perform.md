---
title: 'Tool Choice Matters: Evaluating edgeR vs. DESeq2 for Sensitivity, Robustness,
  and Cross-Study Performance'
authors:
- Mostafa Rezapour
date: '2026-01-07'
categories:
- q-bio.GN
pdf_url: https://arxiv.org/pdf/2601.04122v1
paper_id: 2601.04122v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/q-bio-GN
---

# Tool Choice Matters: Evaluating edgeR vs. DESeq2 for Sensitivity, Robustness, and Cross-Study Performance

**Authors:** Mostafa Rezapour

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** q-bio.GN

[PDF](https://arxiv.org/pdf/2601.04122v1)

## Abstract

Differential gene expression (DGE) analysis is foundational to transcriptomic research, yet tool selection can substantially influence results. This study presents a comprehensive comparison of two widely used DGE tools, edgeR and DESeq2, using real and semi-simulated bulk RNA-Seq datasets spanning viral, bacterial, and fibrotic conditions. We evaluated tool performance across three key dimensions: (1) sensitivity to sample size and robustness to outliers; (2) classification performance of uniquely identified gene sets within the discovery dataset; and (3) generalizability of tool-specific gene sets across independent studies. First, both tools showed similar responses to simulated outliers, with Jaccard similarity between the DEG sets from perturbed and original (unperturbed) data decreasing as more outliers were added. Second, classification models trained on tool-specific genes showed that edgeR achieved higher F1 scores in 9 of 13 contrasts and more frequently reached perfect or near-perfect precision. Dolan-More performance profiles further indicated that edgeR maintained performance closer to optimal across a greater proportion of datasets. Third, in cross-study validation using four independent SARS-CoV-2 datasets, gene sets uniquely identified by edgeR yielded higher AUC, precision, and recall in classifying samples from held-out datasets. This pattern was consistent across folds, with some test cases achieving perfect separation using edgeR-specific genes. In contrast, DESeq2-specific genes showed lower and more variable performance across studies. Overall, our findings highlight that while DESeq2 may identify more DEGs even under stringent significance conditions, edgeR yields more robust and generalizable gene sets for downstream classification and cross-study replication, which underscores key trade-offs in tool selection for transcriptomic analyses.

## Notes

