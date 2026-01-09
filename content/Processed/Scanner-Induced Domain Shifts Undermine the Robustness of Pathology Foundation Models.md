---
title: Scanner-Induced Domain Shifts Undermine the Robustness of Pathology Foundation
  Models
authors:
- Erik Thiringer
- Fredrik K. Gustafsson
- Kajsa Ledesma Eriksson
- Mattias Rantalainen
date: '2026-01-07'
categories:
- eess.IV
- cs.CV
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.04163v1
paper_id: 2601.04163v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/eess-IV
- topic/cs-CV
- topic/cs-LG
---

# Scanner-Induced Domain Shifts Undermine the Robustness of Pathology Foundation Models

**Authors:** Erik Thiringer, Fredrik K. Gustafsson, Kajsa Ledesma Eriksson, Mattias Rantalainen

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** eess.IV, cs.CV, cs.LG

[PDF](https://arxiv.org/pdf/2601.04163v1)

## Abstract

Pathology foundation models (PFMs) have become central to computational pathology, aiming to offer general encoders for feature extraction from whole-slide images (WSIs). Despite strong benchmark performance, PFM robustness to real-world technical domain shifts, such as variability from whole-slide scanner devices, remains poorly understood. We systematically evaluated the robustness of 14 PFMs to scanner-induced variability, including state-of-the-art models, earlier self-supervised models, and a baseline trained on natural images. Using a multiscanner dataset of 384 breast cancer WSIs scanned on five devices, we isolated scanner effects independently from biological and laboratory confounders. Robustness is assessed via complementary unsupervised embedding analyses and a set of clinicopathological supervised prediction tasks. Our results demonstrate that current PFMs are not invariant to scanner-induced domain shifts. Most models encode pronounced scanner-specific variability in their embedding spaces. While AUC often remains stable, this masks a critical failure mode: scanner variability systematically alters the embedding space and impacts calibration of downstream model predictions, resulting in scanner-dependent bias that can impact reliability in clinical use cases. We further show that robustness is not a simple function of training data scale, model size, or model recency. None of the models provided reliable robustness against scanner-induced variability. While the models trained on the most diverse data, here represented by vision-language models, appear to have an advantage with respect to robustness, they underperformed on downstream supervised tasks. We conclude that development and evaluation of PFMs requires moving beyond accuracy-centric benchmarks toward explicit evaluation and optimisation of embedding stability and calibration under realistic acquisition variability.

## Notes

