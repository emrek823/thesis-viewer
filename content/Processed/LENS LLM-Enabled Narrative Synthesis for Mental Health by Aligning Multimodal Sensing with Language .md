---
title: 'LENS: LLM-Enabled Narrative Synthesis for Mental Health by Aligning Multimodal
  Sensing with Language Models'
authors:
- Wenxuan Xu
- Arvind Pillai
- Subigya Nepal
- Amanda C Collins
- Daniel M Mackin
- Michael V Heinz
- Tess Z Griffin
- Nicholas C Jacobson
- Andrew Campbell
date: '2025-12-28'
categories:
- cs.CL
- cs.AI
pdf_url: https://arxiv.org/pdf/2512.23025v1
arxiv_id: 2512.23025v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
- topic/cs-AI
---

# LENS: LLM-Enabled Narrative Synthesis for Mental Health by Aligning Multimodal Sensing with Language Models

**Authors:** Wenxuan Xu, Arvind Pillai, Subigya Nepal, Amanda C Collins, Daniel M Mackin...

**Date:** 2025-12-28 | **Categories:** cs.CL, cs.AI

[PDF](https://arxiv.org/pdf/2512.23025v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.23025v1)

## Abstract

Multimodal health sensing offers rich behavioral signals for assessing mental health, yet translating these numerical time-series measurements into natural language remains challenging. Current LLMs cannot natively ingest long-duration sensor streams, and paired sensor-text datasets are scarce. To address these challenges, we introduce LENS, a framework that aligns multimodal sensing data with language models to generate clinically grounded mental-health narratives. LENS first constructs a large-scale dataset by transforming Ecological Momentary Assessment (EMA) responses related to depression and anxiety symptoms into natural-language descriptions, yielding over 100,000 sensor-text QA pairs from 258 participants. To enable native time-series integration, we train a patch-level encoder that projects raw sensor signals directly into an LLM's representation space. Our results show that LENS outperforms strong baselines on standard NLP metrics and task-specific measures of symptom-severity accuracy. A user study with 13 mental-health professionals further indicates that LENS-produced narratives are comprehensive and clinically meaningful. Ultimately, our approach advances LLMs as interfaces for health sensing, providing a scalable path toward models that can reason over raw behavioral signals and support downstream clinical decision-making.

## Notes

