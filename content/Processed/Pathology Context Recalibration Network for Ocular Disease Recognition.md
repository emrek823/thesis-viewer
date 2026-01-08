---
title: Pathology Context Recalibration Network for Ocular Disease Recognition
authors:
- Zunjie Xiao
- Xiaoqing Zhang
- Risa Higashita
- Jiang Liu
date: '2025-12-30'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2512.24066v1
arxiv_id: 2512.24066v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# Pathology Context Recalibration Network for Ocular Disease Recognition

**Authors:** Zunjie Xiao, Xiaoqing Zhang, Risa Higashita, Jiang Liu

**Date:** 2025-12-30 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2512.24066v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.24066v1)

## Abstract

Pathology context and expert experience play significant roles in clinical ocular disease diagnosis. Although deep neural networks (DNNs) have good ocular disease recognition results, they often ignore exploring the clinical pathology context and expert experience priors to improve ocular disease recognition performance and decision-making interpretability. To this end, we first develop a novel Pathology Recalibration Module (PRM) to leverage the potential of pathology context prior via the combination of the well-designed pixel-wise context compression operator and pathology distribution concentration operator; then this paper applies a novel expert prior Guidance Adapter (EPGA) to further highlight significant pixel-wise representation regions by fully mining the expert experience prior. By incorporating PRM and EPGA into the modern DNN, the PCRNet is constructed for automated ocular disease recognition. Additionally, we introduce an Integrated Loss (IL) to boost the ocular disease recognition performance of PCRNet by considering the effects of sample-wise loss distributions and training label frequencies. The extensive experiments on three ocular disease datasets demonstrate the superiority of PCRNet with IL over state-of-the-art attention-based networks and advanced loss methods. Further visualization analysis explains the inherent behavior of PRM and EPGA that affects the decision-making process of DNNs.

## Notes

