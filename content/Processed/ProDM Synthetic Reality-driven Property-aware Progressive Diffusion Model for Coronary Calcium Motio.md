---
title: 'ProDM: Synthetic Reality-driven Property-aware Progressive Diffusion Model
  for Coronary Calcium Motion Correction in Non-gated Chest CT'
authors:
- Xinran Gong
- Gorkem Durak
- Halil Ertugrul Aktas
- Vedat Cicek
- Jinkui Hao
- Ulas Bagci
- Nilay S. Shah
- Bo Zhou
date: '2025-12-31'
categories:
- cs.CV
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.24948v1
arxiv_id: 2512.24948v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-LG
---

# ProDM: Synthetic Reality-driven Property-aware Progressive Diffusion Model for Coronary Calcium Motion Correction in Non-gated Chest CT

**Authors:** Xinran Gong, Gorkem Durak, Halil Ertugrul Aktas, Vedat Cicek, Jinkui Hao...

**Date:** 2025-12-31 | **Categories:** cs.CV, cs.LG

[PDF](https://arxiv.org/pdf/2512.24948v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.24948v1)

## Abstract

Coronary artery calcium (CAC) scoring from chest CT is a well-established tool to stratify and refine clinical cardiovascular disease risk estimation. CAC quantification relies on the accurate delineation of calcified lesions, but is oftentimes affected by artifacts introduced by cardiac and respiratory motion. ECG-gated cardiac CTs substantially reduce motion artifacts, but their use in population screening and routine imaging remains limited due to gating requirements and lack of insurance coverage. Although identification of incidental CAC from non-gated chest CT is increasingly considered for it offers an accessible and widely available alternative, this modality is limited by more severe motion artifacts. We present ProDM (Property-aware Progressive Correction Diffusion Model), a generative diffusion framework that restores motion-free calcified lesions from non-gated CTs. ProDM introduces three key components: (1) a CAC motion simulation data engine that synthesizes realistic non-gated acquisitions with diverse motion trajectories directly from cardiac-gated CTs, enabling supervised training without paired data; (2) a property-aware learning strategy incorporating calcium-specific priors through a differentiable calcium consistency loss to preserve lesion integrity; and (3) a progressive correction scheme that reduces artifacts gradually across diffusion steps to enhance stability and calcium fidelity. Experiments on real patient datasets show that ProDM significantly improves CAC scoring accuracy, spatial lesion fidelity, and risk stratification performance compared with several baselines. A reader study on real non-gated scans further confirms that ProDM suppresses motion artifacts and improves clinical usability. These findings highlight the potential of progressive, property-aware frameworks for reliable CAC quantification from routine chest CT imaging.

## Notes

