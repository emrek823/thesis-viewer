---
title: Fixed-Budget Parameter-Efficient Training with Frozen Encoders Improves Multimodal
  Chest X-Ray Classification
authors:
- Md Ashik Khan
- Md Nahid Siddique
date: '2025-12-25'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21508v1
paper_id: 2512.21508v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
---

# Fixed-Budget Parameter-Efficient Training with Frozen Encoders Improves Multimodal Chest X-Ray Classification

**Authors:** Md Ashik Khan, Md Nahid Siddique

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.21508v1)

## Abstract

Multimodal chest X-Ray analysis often fine-tunes large vision-language models, which is computationally costly. We study parameter-efficient training (PET) strategies, including frozen encoders, BitFit, LoRA, and adapters for multi-label classification on the Indiana University Chest X-Ray dataset (3,851 image-report pairs; 579 test samples). To mitigate data leakage, we redact pathology terms from reports used as text inputs while retaining clinical context. Under a fixed parameter budget (2.37M parameters, 2.51% of total), all PET variants achieve AUROC between 0.892 and 0.908, outperforming full fine-tuning (0.770 AUROC), which uses 94.3M trainable parameters, a 40x reduction. External validation on CheXpert (224,316 images, 58x larger) confirms scalability: all PET methods achieve >0.69 AUROC with <9% trainable parameters, with Adapter achieving best performance (0.7214 AUROC). Budget-matched comparisons reveal that vision-only models (0.653 AUROC, 1.06M parameters) outperform budget-matched multimodal models (0.641 AUROC, 1.06M parameters), indicating improvements arise primarily from parameter allocation rather than cross-modal synergy. While PET methods show degraded calibration (ECE: 0.29-0.34) compared to simpler models (ECE: 0.049), this represents a tractable limitation addressable through post-hoc calibration methods. These findings demonstrate that frozen encoder strategies provide superior discrimination at substantially reduced computational cost, though calibration correction is essential for clinical deployment.

## Notes

