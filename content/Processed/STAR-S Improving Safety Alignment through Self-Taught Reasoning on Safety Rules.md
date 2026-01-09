---
title: 'STAR-S: Improving Safety Alignment through Self-Taught Reasoning on Safety
  Rules'
authors:
- Di Wu
- Yanyan Zhao
- Xin Lu
- Mingzhe Li
- Bing Qin
date: '2026-01-07'
categories:
- cs.AI
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.03537v1
paper_id: 2601.03537v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-AI
- topic/cs-CL
---

# STAR-S: Improving Safety Alignment through Self-Taught Reasoning on Safety Rules

**Authors:** Di Wu, Yanyan Zhao, Xin Lu, Mingzhe Li, Bing Qin

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** cs.AI, cs.CL

[PDF](https://arxiv.org/pdf/2601.03537v1)

## Abstract

Defending against jailbreak attacks is crucial for the safe deployment of Large Language Models (LLMs). Recent research has attempted to improve safety by training models to reason over safety rules before responding. However, a key issue lies in determining what form of safety reasoning effectively defends against jailbreak attacks, which is difficult to explicitly design or directly obtain. To address this, we propose \textbf{STAR-S} (\textbf{S}elf-\textbf{TA}ught \textbf{R}easoning based on \textbf{S}afety rules), a framework that integrates the learning of safety rule reasoning into a self-taught loop. The core of STAR-S involves eliciting reasoning and reflection guided by safety rules, then leveraging fine-tuning to enhance safety reasoning. Repeating this process creates a synergistic cycle. Improvements in the model's reasoning and interpretation of safety rules allow it to produce better reasoning data under safety rule prompts, which is then utilized for further training. Experiments show that STAR-S effectively defends against jailbreak attacks, outperforming baselines. Code is available at: https://github.com/pikepokenew/STAR_S.git.

## Notes

