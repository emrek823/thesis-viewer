---
title: Cyberattack Detection in Virtualized Microgrids Using LightGBM and Knowledge-Distilled
  Classifiers
authors:
- Osasumwen Cedric Ogiesoba-Eguakun
- Suman Rath
date: '2026-01-07'
categories:
- eess.SY
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.03495v1
paper_id: 2601.03495v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/eess-SY
- topic/cs-AI
---

# Cyberattack Detection in Virtualized Microgrids Using LightGBM and Knowledge-Distilled Classifiers

**Authors:** Osasumwen Cedric Ogiesoba-Eguakun, Suman Rath

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** eess.SY, cs.AI

[PDF](https://arxiv.org/pdf/2601.03495v1)

## Abstract

Modern microgrids depend on distributed sensing and communication interfaces, making them increasingly vulnerable to cyber physical disturbances that threaten operational continuity and equipment safety. In this work, a complete virtual microgrid was designed and implemented in MATLAB/Simulink, integrating heterogeneous renewable sources and secondary controller layers. A structured cyberattack framework was developed using MGLib to inject adversarial signals directly into the secondary control pathways. Multiple attack classes were emulated, including ramp, sinusoidal, additive, coordinated stealth, and denial of service behaviors. The virtual environment was used to generate labeled datasets under both normal and attack conditions. The datasets trained Light Gradient Boosting Machine (LightGBM) models to perform two functions: detecting the presence of an intrusion (binary) and distinguishing among attack types (multiclass). The multiclass model attained 99.72% accuracy and a 99.62% F1 score, while the binary model attained 94.8% accuracy and a 94.3% F1 score. A knowledge-distillation step reduced the size of the multiclass model, allowing faster predictions with only a small drop in performance. Real-time tests showed a processing delay of about 54 to 67 ms per 1000 samples, demonstrating suitability for CPU-based edge deployment in microgrid controllers. The results confirm that lightweight machine learning based intrusion detection methods can provide fast, accurate, and efficient cyberattack detection without relying on complex deep learning models. Key contributions include: (1) development of a complete MATLAB-based virtual microgrid, (2) structured attack injection at the control layer, (3) creation of multiclass labeled datasets, and (4) design of low-cost AI models suitable for practical microgrid cybersecurity.

## Notes

