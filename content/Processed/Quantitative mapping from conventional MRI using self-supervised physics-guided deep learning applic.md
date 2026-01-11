---
title: 'Quantitative mapping from conventional MRI using self-supervised physics-guided
  deep learning: applications to a large-scale, clinically heterogeneous dataset'
authors:
- Jelmer van Lune
- Stefano Mandija
- Oscar van der Heide
- Matteo Maspero
- Martin B. Schilder
- Jan Willem Dankbaar
- Cornelis A. T. van den Berg
- Alessandro Sbrizzi
date: '2026-01-08'
categories:
- physics.med-ph
- cs.CV
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.05063v1
arxiv_id: 2601.05063v1
tags:
- paper
- alphaxiv/hot
- topic/physics-med-ph
- topic/cs-CV
- topic/cs-LG
---

# Quantitative mapping from conventional MRI using self-supervised physics-guided deep learning: applications to a large-scale, clinically heterogeneous dataset

**Authors:** Jelmer van Lune, Stefano Mandija, Oscar van der Heide, Matteo Maspero, Martin B. Schilder...

**Date:** 2026-01-08 | **Categories:** physics.med-ph, cs.CV, cs.LG

[PDF](https://arxiv.org/pdf/2601.05063v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.05063v1)

## Abstract

Magnetic resonance imaging (MRI) is a cornerstone of clinical neuroimaging, yet conventional MRIs provide qualitative information heavily dependent on scanner hardware and acquisition settings. While quantitative MRI (qMRI) offers intrinsic tissue parameters, the requirement for specialized acquisition protocols and reconstruction algorithms restricts its availability and impedes large-scale biomarker research. This study presents a self-supervised physics-guided deep learning framework to infer quantitative T1, T2, and proton-density (PD) maps directly from widely available clinical conventional T1-weighted, T2-weighted, and FLAIR MRIs. The framework was trained and evaluated on a large-scale, clinically heterogeneous dataset comprising 4,121 scan sessions acquired at our institution over six years on four different 3 T MRI scanner systems, capturing real-world clinical variability. The framework integrates Bloch-based signal models directly into the training objective. Across more than 600 test sessions, the generated maps exhibited white matter and gray matter values consistent with literature ranges. Additionally, the generated maps showed invariance to scanner hardware and acquisition protocol groups, with inter-group coefficients of variation $\leq$ 1.1%. Subject-specific analyses demonstrated excellent voxel-wise reproducibility across scanner systems and sequence parameters, with Pearson $r$ and concordance correlation coefficients exceeding 0.82 for T1 and T2. Mean relative voxel-wise differences were low across all quantitative parameters, especially for T2 ($<$ 6%). These results indicate that the proposed framework can robustly transform diverse clinical conventional MRI data into quantitative maps, potentially paving the way for large-scale quantitative biomarker research.

## Notes

