---
title: An Allele-Centric Pan-Graph-Matrix Representation for Scalable Pangenome Analysis
authors:
- Roberto Garrone
date: '2025-12-24'
categories:
- q-bio.GN
- cs.DB
- cs.DS
pdf_url: https://arxiv.org/pdf/2512.21320v1
paper_id: 2512.21320v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/q-bio-GN
- topic/cs-DB
- topic/cs-DS
---

# An Allele-Centric Pan-Graph-Matrix Representation for Scalable Pangenome Analysis

**Authors:** Roberto Garrone

**Date:** 2025-12-24 | **Source:** arxiv | **Categories:** q-bio.GN, cs.DB, cs.DS

[PDF](https://arxiv.org/pdf/2512.21320v1)

## Abstract

Population-scale pangenome analysis increasingly requires representations that unify single-nucleotide and structural variation while remaining scalable across large cohorts. Existing formats are typically sequence-centric, path-centric, or sample-centric, and often obscure population structure or fail to exploit carrier sparsity. We introduce the H1 pan-graph-matrix, an allele-centric representation that encodes exact haplotype membership using adaptive per-allele compression. By treating alleles as first-class objects and selecting optimal encodings based on carrier distribution, H1 achieves near-optimal storage across both common and rare variants. We further introduce H2, a path-centric dual representation derived from the same underlying allele-haplotype incidence information that restores explicit haplotype ordering while remaining exactly equivalent in information content. Using real human genome data, we show that this representation yields substantial compression gains, particularly for structural variants, while remaining equivalent in information content to pangenome graphs. H1 provides a unified, population-aware foundation for scalable pangenome analysis and downstream applications such as rare-variant interpretation and drug discovery.

## Notes

