---
title: Attention-Based Offline Reinforcement Learning and Clustering for Interpretable
  Sepsis Treatment
authors:
- Punit Kumar
- Vaibhav Saran
- Divyesh Patel
- Nitin Kulkarni
- Alina Vereshchaka
date: '2026-01-20'
categories:
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.14228v1
arxiv_id: 2601.14228v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
---

# Attention-Based Offline Reinforcement Learning and Clustering for Interpretable Sepsis Treatment

**Authors:** Punit Kumar, Vaibhav Saran, Divyesh Patel, Nitin Kulkarni, Alina Vereshchaka

**Date:** 2026-01-20 | **Categories:** cs.LG

[PDF](https://arxiv.org/pdf/2601.14228v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.14228v1)

## Abstract

Sepsis remains one of the leading causes of mortality in intensive care units, where timely and accurate treatment decisions can significantly impact patient outcomes. In this work, we propose an interpretable decision support framework. Our system integrates four core components: (1) a clustering-based stratification module that categorizes patients into low, intermediate, and high-risk groups upon ICU admission, using clustering with statistical validation; (2) a synthetic data augmentation pipeline leveraging variational autoencoders (VAE) and diffusion models to enrich underrepresented trajectories such as fluid or vasopressor administration; (3) an offline reinforcement learning (RL) agent trained using Advantage Weighted Regression (AWR) with a lightweight attention encoder and supported by an ensemble models for conservative, safety-aware treatment recommendations; and (4) a rationale generation module powered by a multi-modal large language model (LLM), which produces natural-language justifications grounded in clinical context and retrieved expert knowledge. Evaluated on the MIMIC-III and eICU datasets, our approach achieves high treatment accuracy while providing clinicians with interpretable and robust policy recommendations.

## Notes

