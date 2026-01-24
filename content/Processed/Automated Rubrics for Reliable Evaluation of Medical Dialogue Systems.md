---
title: Automated Rubrics for Reliable Evaluation of Medical Dialogue Systems
authors:
- Yinzhu Chen
- Abdine Maiga
- Hossein A. Rahmani
- Emine Yilmaz
date: '2026-01-21'
categories:
- cs.CL
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.15161v1
arxiv_id: 2601.15161v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
- topic/cs-AI
---

# Automated Rubrics for Reliable Evaluation of Medical Dialogue Systems

**Authors:** Yinzhu Chen, Abdine Maiga, Hossein A. Rahmani, Emine Yilmaz

**Date:** 2026-01-21 | **Categories:** cs.CL, cs.AI

[PDF](https://arxiv.org/pdf/2601.15161v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15161v1)

## Abstract

Large Language Models (LLMs) are increasingly used for clinical decision support, where hallucinations and unsafe suggestions may pose direct risks to patient safety. These risks are particularly challenging as they often manifest as subtle clinical errors that evade detection by generic metrics, while expert-authored fine-grained rubrics remain costly to construct and difficult to scale. In this paper, we propose a retrieval-augmented multi-agent framework designed to automate the generation of instance-specific evaluation rubrics. Our approach grounds evaluation in authoritative medical evidence by decomposing retrieved content into atomic facts and synthesizing them with user interaction constraints to form verifiable, fine-grained evaluation criteria. Evaluated on HealthBench, our framework achieves a Clinical Intent Alignment (CIA) score of 60.12%, a statistically significant improvement over the GPT-4o baseline (55.16%). In discriminative tests, our rubrics yield a mean score delta ($μ_Δ = 8.658$) and an AUROC of 0.977, nearly doubling the quality separation achieved by GPT-4o baseline (4.972). Beyond evaluation, our rubrics effectively guide response refinement, improving quality by 9.2% (from 59.0% to 68.2%). This provides a scalable and transparent foundation for both evaluating and improving medical LLMs. The code is available at https://anonymous.4open.science/r/Automated-Rubric-Generation-AF3C/.

## Notes

