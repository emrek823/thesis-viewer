---
title: 'SurgWorld: Learning Surgical Robot Policies from Videos via World Modeling'
authors:
- Yufan He
- Pengfei Guo
- Mengya Xu
- Zhaoshuo Li
- Andriy Myronenko
- Dillan Imans
- Bingjie Liu
- Dongren Yang
- Mingxue Gu
- Yongnan Ji
date: '2025-12-29'
categories:
- cs.RO
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.23162v1
arxiv_id: 2512.23162v1
tags:
- paper
- alphaxiv/hot
- topic/cs-RO
- topic/cs-CV
---

# SurgWorld: Learning Surgical Robot Policies from Videos via World Modeling

**Authors:** Yufan He, Pengfei Guo, Mengya Xu, Zhaoshuo Li, Andriy Myronenko...

**Date:** 2025-12-29 | **Categories:** cs.RO, cs.CV

[PDF](https://arxiv.org/pdf/2512.23162v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.23162v1)

## Abstract

Data scarcity remains a fundamental barrier to achieving fully autonomous surgical robots. While large scale vision language action (VLA) models have shown impressive generalization in household and industrial manipulation by leveraging paired video action data from diverse domains, surgical robotics suffers from the paucity of datasets that include both visual observations and accurate robot kinematics. In contrast, vast corpora of surgical videos exist, but they lack corresponding action labels, preventing direct application of imitation learning or VLA training. In this work, we aim to alleviate this problem by learning policy models from SurgWorld, a world model designed for surgical physical AI. We curated the Surgical Action Text Alignment (SATA) dataset with detailed action description specifically for surgical robots. Then we built SurgeWorld based on the most advanced physical AI world model and SATA. It's able to generate diverse, generalizable and realistic surgery videos. We are also the first to use an inverse dynamics model to infer pseudokinematics from synthetic surgical videos, producing synthetic paired video action data. We demonstrate that a surgical VLA policy trained with these augmented data significantly outperforms models trained only on real demonstrations on a real surgical robot platform. Our approach offers a scalable path toward autonomous surgical skill acquisition by leveraging the abundance of unlabeled surgical video and generative world modeling, thus opening the door to generalizable and data efficient surgical robot policies.

## Notes

