---
title: Experience with Single Domain Generalization in Real World Medical Imaging
  Deployments
authors:
- Ayan Banerjee
- Komandoor Srivathsan
- Sandeep K. S. Gupta
date: '2026-01-22'
categories:
- eess.IV
- cs.AI
- cs.CV
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.16359v1
arxiv_id: 2601.16359v1
tags:
- paper
- alphaxiv/hot
- topic/eess-IV
- topic/cs-AI
- topic/cs-CV
---

# Experience with Single Domain Generalization in Real World Medical Imaging Deployments

**Authors:** Ayan Banerjee, Komandoor Srivathsan, Sandeep K. S. Gupta

**Date:** 2026-01-22 | **Categories:** eess.IV, cs.AI, cs.CV, cs.LG

[PDF](https://arxiv.org/pdf/2601.16359v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.16359v1)

## Abstract

A desirable property of any deployed artificial intelligence is generalization across domains, i.e. data generation distribution under a specific acquisition condition. In medical imagining applications the most coveted property for effective deployment is Single Domain Generalization (SDG), which addresses the challenge of training a model on a single domain to ensure it generalizes well to unseen target domains. In multi-center studies, differences in scanners and imaging protocols introduce domain shifts that exacerbate variability in rare class characteristics. This paper presents our experience on SDG in real life deployment for two exemplary medical imaging case studies on seizure onset zone detection using fMRI data, and stress electrocardiogram based coronary artery detection. Utilizing the commonly used application of diabetic retinopathy, we first demonstrate that state-of-the-art SDG techniques fail to achieve generalized performance across data domains. We then develop a generic expert knowledge integrated deep learning technique DL+EKE and instantiate it for the DR application and show that DL+EKE outperforms SOTA SDG methods on DR. We then deploy instances of DL+EKE technique on the two real world examples of stress ECG and resting state (rs)-fMRI and discuss issues faced with SDG techniques.

## Notes

