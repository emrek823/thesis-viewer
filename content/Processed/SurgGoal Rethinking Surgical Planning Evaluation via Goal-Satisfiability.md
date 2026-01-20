---
title: 'SurgGoal: Rethinking Surgical Planning Evaluation via Goal-Satisfiability'
authors:
- Ruochen Li
- Kun Yuan
- Yufei Xia
- Yue Zhou
- Qingyu Lu
- Weihang Li
- Youxiang Zhu
- Nassir Navab
date: '2026-01-15'
categories:
- cs.CL
- cs.RO
pdf_url: https://arxiv.org/pdf/2601.10455v1
arxiv_id: 2601.10455v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
- topic/cs-RO
---

# SurgGoal: Rethinking Surgical Planning Evaluation via Goal-Satisfiability

**Authors:** Ruochen Li, Kun Yuan, Yufei Xia, Yue Zhou, Qingyu Lu...

**Date:** 2026-01-15 | **Categories:** cs.CL, cs.RO

[PDF](https://arxiv.org/pdf/2601.10455v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.10455v1)

## Abstract

Surgical planning integrates visual perception, long-horizon reasoning, and procedural knowledge, yet it remains unclear whether current evaluation protocols reliably assess vision-language models (VLMs) in safety-critical settings. Motivated by a goal-oriented view of surgical planning, we define planning correctness via phase-goal satisfiability, where plan validity is determined by expert-defined surgical rules. Based on this definition, we introduce a multicentric meta-evaluation benchmark with valid procedural variations and invalid plans containing order and content errors. Using this benchmark, we show that sequence similarity metrics systematically misjudge planning quality, penalizing valid plans while failing to identify invalid ones. We therefore adopt a rule-based goal-satisfiability metric as a high-precision meta-evaluation reference to assess Video-LLMs under progressively constrained settings, revealing failures due to perception errors and under-constrained reasoning. Structural knowledge consistently improves performance, whereas semantic guidance alone is unreliable and benefits larger models only when combined with structural constraints.

## Notes

