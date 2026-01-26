---
title: Empowering LLMs for Structure-Based Drug Design via Exploration-Augmented Latent
  Inference
authors:
- Xuanning Hu
- Anchen Li
- Qianli Xing
- Jinglong Ji
- Hao Tuo
- Bo Yang
date: '2026-01-20'
categories:
- cs.LG
- cs.AI
- q-bio.QM
pdf_url: https://arxiv.org/pdf/2601.15333v1
arxiv_id: 2601.15333v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/cs-AI
- topic/q-bio-QM
---

# Empowering LLMs for Structure-Based Drug Design via Exploration-Augmented Latent Inference

**Authors:** Xuanning Hu, Anchen Li, Qianli Xing, Jinglong Ji, Hao Tuo...

**Date:** 2026-01-20 | **Categories:** cs.LG, cs.AI, q-bio.QM

[PDF](https://arxiv.org/pdf/2601.15333v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15333v1)

## Abstract

Large Language Models (LLMs) possess strong representation and reasoning capabilities, but their application to structure-based drug design (SBDD) is limited by insufficient understanding of protein structures and unpredictable molecular generation. To address these challenges, we propose Exploration-Augmented Latent Inference for LLMs (ELILLM), a framework that reinterprets the LLM generation process as an encoding, latent space exploration, and decoding workflow. ELILLM explicitly explores portions of the design problem beyond the model's current knowledge while using a decoding module to handle familiar regions, generating chemically valid and synthetically reasonable molecules. In our implementation, Bayesian optimization guides the systematic exploration of latent embeddings, and a position-aware surrogate model efficiently predicts binding affinity distributions to inform the search. Knowledge-guided decoding further reduces randomness and effectively imposes chemical validity constraints. We demonstrate ELILLM on the CrossDocked2020 benchmark, showing strong controlled exploration and high binding affinity scores compared with seven baseline methods. These results demonstrate that ELILLM can effectively enhance LLMs capabilities for SBDD.

## Notes

