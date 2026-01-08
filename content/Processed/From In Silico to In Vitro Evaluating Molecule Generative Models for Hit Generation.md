---
title: 'From In Silico to In Vitro: Evaluating Molecule Generative Models for Hit
  Generation'
authors:
- Nagham Osman
- Vittorio Lembo
- Giovanni Bottegoni
- Laura Toni
date: '2025-12-26'
categories:
- cs.LG
- cs.AI
pdf_url: https://arxiv.org/pdf/2512.22031v1
paper_id: 2512.22031v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
- topic/cs-AI
---

# From In Silico to In Vitro: Evaluating Molecule Generative Models for Hit Generation

**Authors:** Nagham Osman, Vittorio Lembo, Giovanni Bottegoni, Laura Toni

**Date:** 2025-12-26 | **Source:** arxiv | **Categories:** cs.LG, cs.AI

[PDF](https://arxiv.org/pdf/2512.22031v1)

## Abstract

Hit identification is a critical yet resource-intensive step in the drug discovery pipeline, traditionally relying on high-throughput screening of large compound libraries. Despite advancements in virtual screening, these methods remain time-consuming and costly. Recent progress in deep learning has enabled the development of generative models capable of learning complex molecular representations and generating novel compounds de novo. However, using ML to replace the entire drug-discovery pipeline is highly challenging. In this work, we rather investigate whether generative models can replace one step of the pipeline: hit-like molecule generation. To the best of our knowledge, this is the first study to explicitly frame hit-like molecule generation as a standalone task and empirically test whether generative models can directly support this stage of the drug discovery pipeline. Specifically, we investigate if such models can be trained to generate hit-like molecules, enabling direct incorporation into, or even substitution of, traditional hit identification workflows. We propose an evaluation framework tailored to this task, integrating physicochemical, structural, and bioactivity-related criteria within a multi-stage filtering pipeline that defines the hit-like chemical space. Two autoregressive and one diffusion-based generative models were benchmarked across various datasets and training settings, with outputs assessed using standard metrics and target-specific docking scores. Our results show that these models can generate valid, diverse, and biologically relevant compounds across multiple targets, with a few selected GSK-3$β$ hits synthesized and confirmed active in vitro. We also identify key limitations in current evaluation metrics and available training data.

## Notes

