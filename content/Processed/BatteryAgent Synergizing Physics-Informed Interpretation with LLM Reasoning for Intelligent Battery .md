---
title: 'BatteryAgent: Synergizing Physics-Informed Interpretation with LLM Reasoning
  for Intelligent Battery Fault Diagnosis'
authors:
- Songqi Zhou
- Ruixue Liu
- Boman Su
- Jiazhou Wang
- Yixing Wang
- Benben Jiang
date: '2025-12-31'
categories:
- cs.AI
- eess.SY
pdf_url: https://arxiv.org/pdf/2512.24686v1
arxiv_id: 2512.24686v1
tags:
- paper
- alphaxiv/hot
- topic/cs-AI
- topic/eess-SY
---

# BatteryAgent: Synergizing Physics-Informed Interpretation with LLM Reasoning for Intelligent Battery Fault Diagnosis

**Authors:** Songqi Zhou, Ruixue Liu, Boman Su, Jiazhou Wang, Yixing Wang...

**Date:** 2025-12-31 | **Categories:** cs.AI, eess.SY

[PDF](https://arxiv.org/pdf/2512.24686v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.24686v1)

## Abstract

Fault diagnosis of lithium-ion batteries is critical for system safety. While existing deep learning methods exhibit superior detection accuracy, their "black-box" nature hinders interpretability. Furthermore, restricted by binary classification paradigms, they struggle to provide root cause analysis and maintenance recommendations. To address these limitations, this paper proposes BatteryAgent, a hierarchical framework that integrates physical knowledge features with the reasoning capabilities of Large Language Models (LLMs). The framework comprises three core modules: (1) A Physical Perception Layer that utilizes 10 mechanism-based features derived from electrochemical principles, balancing dimensionality reduction with physical fidelity; (2) A Detection and Attribution Layer that employs Gradient Boosting Decision Trees and SHAP to quantify feature contributions; and (3) A Reasoning and Diagnosis Layer that leverages an LLM as the agent core. This layer constructs a "numerical-semantic" bridge, combining SHAP attributions with a mechanism knowledge base to generate comprehensive reports containing fault types, root cause analysis, and maintenance suggestions. Experimental results demonstrate that BatteryAgent effectively corrects misclassifications on hard boundary samples, achieving an AUROC of 0.986, which significantly outperforms current state-of-the-art methods. Moreover, the framework extends traditional binary detection to multi-type interpretable diagnosis, offering a new paradigm shift from "passive detection" to "intelligent diagnosis" for battery safety management.

## Notes

