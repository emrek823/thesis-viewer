---
title: 'MDAgent2: Large Language Model for Code Generation and Knowledge Q&A in Molecular
  Dynamics'
authors:
- Zhuofan Shi
- Hubao A
- Yufei Shao
- Mengyan Dai
- Yadong Yu
- Pan Xiang
- Dongliang Huang
- Hongxu An
- Chunxiao Xin
- Haiyang Shen
date: '2026-01-05'
categories:
- cs.CE
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.02075v1
arxiv_id: 2601.02075v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CE
- topic/cs-LG
---

# MDAgent2: Large Language Model for Code Generation and Knowledge Q&A in Molecular Dynamics

**Authors:** Zhuofan Shi, Hubao A, Yufei Shao, Mengyan Dai, Yadong Yu...

**Date:** 2026-01-05 | **Categories:** cs.CE, cs.LG

[PDF](https://arxiv.org/pdf/2601.02075v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.02075v1)

## Abstract

Molecular dynamics (MD) simulations are essential for understanding atomic-scale behaviors in materials science, yet writing LAMMPS scripts remains highly specialized and time-consuming tasks. Although LLMs show promise in code generation and domain-specific question answering, their performance in MD scenarios is limited by scarce domain data, the high deployment cost of state-of-the-art LLMs, and low code executability. Building upon our prior MDAgent, we present MDAgent2, the first end-to-end framework capable of performing both knowledge Q&A and code generation within the MD domain. We construct a domain-specific data-construction pipeline that yields three high-quality datasets spanning MD knowledge, question answering, and code generation. Based on these datasets, we adopt a three stage post-training strategy--continued pre-training (CPT), supervised fine-tuning (SFT), and reinforcement learning (RL)--to train two domain-adapted models, MD-Instruct and MD-Code. Furthermore, we introduce MD-GRPO, a closed-loop RL method that leverages simulation outcomes as reward signals and recycles low-reward trajectories for continual refinement. We further build MDAgent2-RUNTIME, a deployable multi-agent system that integrates code generation, execution, evaluation, and self-correction. Together with MD-EvalBench proposed in this work, the first benchmark for LAMMPS code generation and question answering, our models and system achieve performance surpassing several strong baselines.This work systematically demonstrates the adaptability and generalization capability of large language models in industrial simulation tasks, laying a methodological foundation for automatic code generation in AI for Science and industrial-scale simulations. URL: https://github.com/FredericVAN/PKU_MDAgent2

## Notes

