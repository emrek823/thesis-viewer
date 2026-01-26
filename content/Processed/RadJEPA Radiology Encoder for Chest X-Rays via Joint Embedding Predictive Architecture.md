---
title: 'RadJEPA: Radiology Encoder for Chest X-Rays via Joint Embedding Predictive
  Architecture'
authors:
- Anas Anwarul Haq Khan
- Mariam Husain
- Kshitij Jadhav
date: '2026-01-22'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.15891v1
arxiv_id: 2601.15891v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# RadJEPA: Radiology Encoder for Chest X-Rays via Joint Embedding Predictive Architecture

**Authors:** Anas Anwarul Haq Khan, Mariam Husain, Kshitij Jadhav

**Date:** 2026-01-22 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.15891v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15891v1)

## Abstract

Recent advances in medical vision language models guide the learning of visual representations; however, this form of supervision is constrained by the availability of paired image text data, raising the question of whether robust radiology encoders can be learned without relying on language supervision. In this work, we introduce RadJEPA, a self-supervised framework built on a Joint Embedding Predictive Architecture that learns without language supervision. Pre-trained solely on unlabeled chest X-ray images, the model learns to predict latent representations of masked image regions. This predictive objective differs fundamentally from both image text pre-training and DINO-style self-distillation: rather than aligning global representations across views or modalities, RadJEPA explicitly models latent-space prediction. We evaluate the learned encoder on disease classification, semantic segmentation, and report generation tasks. Across benchmarks, RadJEPA achieves performance exceeding state-of-the-art approaches, including Rad-DINO.

## Notes

