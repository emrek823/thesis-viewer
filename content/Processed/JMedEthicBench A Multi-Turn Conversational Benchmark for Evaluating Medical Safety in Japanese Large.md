---
title: 'JMedEthicBench: A Multi-Turn Conversational Benchmark for Evaluating Medical
  Safety in Japanese Large Language Models'
authors:
- Junyu Liu
- Zirui Li
- Qian Niu
- Zequn Zhang
- Yue Xun
- Wenlong Hou
- Shujun Wang
- Yusuke Iwasawa
- Yutaka Matsuo
- Kan Hatakeyama-Sato
date: '2026-01-04'
categories:
- cs.CL
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.01627v1
arxiv_id: 2601.01627v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
- topic/cs-AI
---

# JMedEthicBench: A Multi-Turn Conversational Benchmark for Evaluating Medical Safety in Japanese Large Language Models

**Authors:** Junyu Liu, Zirui Li, Qian Niu, Zequn Zhang, Yue Xun...

**Date:** 2026-01-04 | **Categories:** cs.CL, cs.AI

[PDF](https://arxiv.org/pdf/2601.01627v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.01627v1)

## Abstract

As Large Language Models (LLMs) are increasingly deployed in healthcare field, it becomes essential to carefully evaluate their medical safety before clinical use. However, existing safety benchmarks remain predominantly English-centric, and test with only single-turn prompts despite multi-turn clinical consultations. To address these gaps, we introduce JMedEthicBench, the first multi-turn conversational benchmark for evaluating medical safety of LLMs for Japanese healthcare. Our benchmark is based on 67 guidelines from the Japan Medical Association and contains over 50,000 adversarial conversations generated using seven automatically discovered jailbreak strategies. Using a dual-LLM scoring protocol, we evaluate 27 models and find that commercial models maintain robust safety while medical-specialized models exhibit increased vulnerability. Furthermore, safety scores decline significantly across conversation turns (median: 9.5 to 5.0, $p < 0.001$). Cross-lingual evaluation on both Japanese and English versions of our benchmark reveals that medical model vulnerabilities persist across languages, indicating inherent alignment limitations rather than language-specific factors. These findings suggest that domain-specific fine-tuning may accidentally weaken safety mechanisms and that multi-turn interactions represent a distinct threat surface requiring dedicated alignment strategies.

## Notes

