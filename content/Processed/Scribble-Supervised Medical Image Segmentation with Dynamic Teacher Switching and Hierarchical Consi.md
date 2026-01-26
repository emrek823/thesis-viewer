---
title: Scribble-Supervised Medical Image Segmentation with Dynamic Teacher Switching
  and Hierarchical Consistency
authors:
- Thanh-Huy Nguyen
- Hoang-Loc Cao
- Dat T. Chung
- Mai-Anh Vu
- Thanh-Minh Nguyen
- Minh Le
- Phat K. Huynh
- Ulas Bagci
date: '2026-01-21'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.14563v2
arxiv_id: 2601.14563v2
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# Scribble-Supervised Medical Image Segmentation with Dynamic Teacher Switching and Hierarchical Consistency

**Authors:** Thanh-Huy Nguyen, Hoang-Loc Cao, Dat T. Chung, Mai-Anh Vu, Thanh-Minh Nguyen...

**Date:** 2026-01-21 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.14563v2) | [AlphaXiv](https://alphaxiv.org/abs/2601.14563v2)

## Abstract

Scribble-supervised methods have emerged to mitigate the prohibitive annotation burden in medical image segmentation. However, the inherent sparsity of these annotations introduces significant ambiguity, which results in noisy pseudo-label propagation and hinders the learning of robust anatomical boundaries. To address this challenge, we propose SDT-Net, a novel dual-teacher, single-student framework designed to maximize supervision quality from these weak signals. Our method features a Dynamic Teacher Switching (DTS) module to adaptively select the most reliable teacher. This selected teacher then guides the student via two synergistic mechanisms: high-confidence pseudo-labels, refined by a Pick Reliable Pixels (PRP) mechanism, and multi-level feature alignment, enforced by a Hierarchical Consistency (HiCo) module. Extensive experiments on the ACDC and MSCMRseg datasets demonstrate that SDT-Net achieves state-of-the-art performance, producing more accurate and anatomically plausible segmentation.

## Notes

