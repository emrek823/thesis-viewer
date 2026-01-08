---
title: 'Perceive and Calibrate: Analyzing and Enhancing Robustness of Medical Multi-Modal
  Large Language Models'
authors:
- Dunyuan XU
- Xikai Yang
- Yaoqian Li
- Juzheng Miao
- Jinpeng Li
- Pheng-Ann Heng
date: '2025-12-26'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21964v1
paper_id: 2512.21964v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
---

# Perceive and Calibrate: Analyzing and Enhancing Robustness of Medical Multi-Modal Large Language Models

**Authors:** Dunyuan XU, Xikai Yang, Yaoqian Li, Juzheng Miao, Jinpeng Li...

**Date:** 2025-12-26 | **Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.21964v1)

## Abstract

Medical Multi-modal Large Language Models (MLLMs) have shown promising clinical performance. However, their sensitivity to real-world input perturbations, such as imaging artifacts and textual errors, critically undermines their clinical applicability. Systematic analysis of such noise impact on medical MLLMs remains largely unexplored. Furthermore, while several works have investigated the MLLMs' robustness in general domains, they primarily focus on text modality and rely on costly fine-tuning. They are inadequate to address the complex noise patterns and fulfill the strict safety standards in medicine. To bridge this gap, this work systematically analyzes the impact of various perturbations on medical MLLMs across both visual and textual modalities. Building on our findings, we introduce a training-free Inherent-enhanced Multi-modal Calibration (IMC) framework that leverages MLLMs' inherent denoising capabilities following the perceive-and-calibrate principle for cross-modal robustness enhancement. For the visual modality, we propose a Perturbation-aware Denoising Calibration (PDC) which leverages MLLMs' own vision encoder to identify noise patterns and perform prototype-guided feature calibration. For text denoising, we design a Self-instantiated Multi-agent System (SMS) that exploits the MLLMs' self-assessment capabilities to refine noisy text through a cooperative hierarchy of agents. We construct a benchmark containing 11 types of noise across both image and text modalities on 2 datasets. Experimental results demonstrate our method achieves the state-of-the-art performance across multiple modalities, showing potential to enhance MLLMs' robustness in real clinical scenarios.

## Notes

