---
title: 'CRONOS: Continuous Time Reconstruction for 4D Medical Longitudinal Series'
authors:
- Nico Albert Disch
- Saikat Roy
- Constantin Ulrich
- Yannick Kirchhoff
- Maximilian Rokuss
- Robin Peretzke
- David Zimmerer
- Klaus Maier-Hein
date: '2025-12-18'
source: arxiv
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.16577v1
arxiv_id: 2512.16577v1
tags:
- paper
- source/arxiv
- alphaxiv/hot
- topic/cs-CV
---

# CRONOS: Continuous Time Reconstruction for 4D Medical Longitudinal Series

**Authors:** Nico Albert Disch, Saikat Roy, Constantin Ulrich, Yannick Kirchhoff, Maximilian Rokuss (+3 more)

**Date:** 2025-12-18

**Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.16577v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.16577v1)

## Abstract

Forecasting how 3D medical scans evolve over time is important for disease progression, treatment planning, and developmental assessment. Yet existing models either rely on a single prior scan, fixed grid times, or target global labels, which limits voxel-level forecasting under irregular sampling. We present CRONOS, a unified framework for many-to-one prediction from multiple past scans that supports both discrete (grid-based) and continuous (real-valued) timestamps in one model, to the best of our knowledge the first to achieve continuous sequence-to-image forecasting for 3D medical data. CRONOS learns a spatio-temporal velocity field that transports context volumes toward a target volume at an arbitrary time, while operating directly in 3D voxel space. Across three public datasets spanning Cine-MRI, perfusion CT, and longitudinal MRI, CRONOS outperforms other baselines, while remaining computationally competitive. We will release code and evaluation protocols to enable reproducible, multi-dataset benchmarking of multi-context, continuous-time forecasting.

## Notes

<!-- Add your notes here -->
