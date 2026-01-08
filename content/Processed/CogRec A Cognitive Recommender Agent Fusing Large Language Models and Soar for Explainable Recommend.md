---
title: 'CogRec: A Cognitive Recommender Agent Fusing Large Language Models and Soar
  for Explainable Recommendation'
authors:
- Jiaxin Hu
- Tao Wang
- Bingsan Yang
- Hongrun Wang
date: '2025-12-30'
categories:
- cs.AI
- cs.IR
pdf_url: https://arxiv.org/pdf/2512.24113v1
paper_id: 2512.24113v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-AI
- topic/cs-IR
---

# CogRec: A Cognitive Recommender Agent Fusing Large Language Models and Soar for Explainable Recommendation

**Authors:** Jiaxin Hu, Tao Wang, Bingsan Yang, Hongrun Wang

**Date:** 2025-12-30 | **Source:** arxiv | **Categories:** cs.AI, cs.IR

[PDF](https://arxiv.org/pdf/2512.24113v1)

## Abstract

Large Language Models (LLMs) have demonstrated a remarkable capacity in understanding user preferences for recommendation systems. However, they are constrained by several critical challenges, including their inherent "Black-Box" characteristics, susceptibility to knowledge hallucination, and limited online learning capacity. These factors compromise their trustworthiness and adaptability. Conversely, cognitive architectures such as Soar offer structured and interpretable reasoning processes, yet their knowledge acquisition is notoriously laborious. To address these complementary challenges, we propose a novel cognitive recommender agent called CogRec which synergizes the strengths of LLMs with the Soar cognitive architecture. CogRec leverages Soar as its core symbolic reasoning engine and leverages an LLM for knowledge initialization to populate its working memory with production rules. The agent operates on a Perception-Cognition-Action(PCA) cycle. Upon encountering an impasse, it dynamically queries the LLM to obtain a reasoned solution. This solution is subsequently transformed into a new symbolic production rule via Soar's chunking mechanism, thereby enabling robust online learning. This learning paradigm allows the agent to continuously evolve its knowledge base and furnish highly interpretable rationales for its recommendations. Extensive evaluations conducted on three public datasets demonstrate that CogRec demonstrates significant advantages in recommendation accuracy, explainability, and its efficacy in addressing the long-tail problem.

## Notes

