---
title: Inferring Clinically Relevant Molecular Subtypes of Pancreatic Cancer from
  Routine Histopathology Using Deep Learning
authors:
- Abdul Rehman Akbar
- Alejandro Levya
- Ashwini Esnakula
- Elshad Hasanov
- Anne Noonan
- Upender Manne
- Vaibhav Sahai
- Lingbin Meng
- Susan Tsai
- Anil Parwani
date: '2026-01-06'
categories:
- cs.LG
- cs.CV
- eess.IV
pdf_url: https://arxiv.org/pdf/2601.03410v1
arxiv_id: 2601.03410v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/cs-CV
- topic/eess-IV
---

# Inferring Clinically Relevant Molecular Subtypes of Pancreatic Cancer from Routine Histopathology Using Deep Learning

**Authors:** Abdul Rehman Akbar, Alejandro Levya, Ashwini Esnakula, Elshad Hasanov, Anne Noonan...

**Date:** 2026-01-06 | **Categories:** cs.LG, cs.CV, eess.IV

[PDF](https://arxiv.org/pdf/2601.03410v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.03410v1)

## Abstract

Molecular subtyping of PDAC into basal-like and classical has established prognostic and predictive value. However, its use in clinical practice is limited by cost, turnaround time, and tissue requirements, thereby restricting its application in the management of PDAC. We introduce PanSubNet, an interpretable deep learning framework that predicts therapy-relevant molecular subtypes directly from standard H&E-stained WSIs. PanSubNet was developed using data from 1,055 patients across two multi-institutional cohorts (PANCAN, n=846; TCGA, n=209) with paired histology and RNA-seq data. Ground-truth labels were derived using the validated Moffitt 50-gene signature refined by GATA6 expression. The model employs dual-scale architecture that fuses cellular-level morphology with tissue-level architecture, leveraging attention mechanisms for multi-scale representation learning and transparent feature attribution. On internal validation within PANCAN using five-fold cross-validation, PanSubNet achieved mean AUC of 88.5% with balanced sensitivity and specificity. External validation on the independent TCGA cohort without fine-tuning demonstrated robust generalizability (AUC 84.0%). PanSubNet preserved and, in metastatic disease, strengthened prognostic stratification compared to RNA-seq based labels. Prediction uncertainty linked to intermediate transcriptional states, not classification noise. Model predictions are aligned with established transcriptomic programs, differentiation markers, and DNA damage repair signatures. By enabling rapid, cost-effective molecular stratification from routine H&E-stained slides, PanSubNet offers a clinically deployable and interpretable tool for genetic subtyping. We are gathering data from two institutions to validate and assess real-world performance, supporting integration into digital pathology workflows and advancing precision oncology for PDAC.

## Notes

