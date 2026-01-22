---
title: Resource-Conscious RL Algorithms for Deep Brain Stimulation
authors:
- Arkaprava Gupta
- Nicholas Carter
- William Zellers
- Prateek Ganguli
- Benedikt Dietrich
- Vibhor Krishna
- Parasara Sridhar Duggirala
- Samarjit Chakraborty
date: '2026-01-19'
categories:
- cs.LG
- eess.SY
pdf_url: https://arxiv.org/pdf/2601.12699v1
arxiv_id: 2601.12699v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/eess-SY
---

# Resource-Conscious RL Algorithms for Deep Brain Stimulation

**Authors:** Arkaprava Gupta, Nicholas Carter, William Zellers, Prateek Ganguli, Benedikt Dietrich...

**Date:** 2026-01-19 | **Categories:** cs.LG, eess.SY

[PDF](https://arxiv.org/pdf/2601.12699v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.12699v1)

## Abstract

Deep Brain Stimulation (DBS) has proven to be a promising treatment of Parkinson's Disease (PD). DBS involves stimulating specific regions of the brain's Basal Ganglia (BG) using electric impulses to alleviate symptoms of PD such as tremors, rigidity, and bradykinesia. Although most clinical DBS approaches today use a fixed frequency and amplitude, they suffer from side effects (such as slurring of speech) and shortened battery life of the implant. Reinforcement learning (RL) approaches have been used in recent research to perform DBS in a more adaptive manner to improve overall patient outcome. These RL algorithms are, however, too complex to be trained in vivo due to their long convergence time and requirement of high computational resources.   We propose a new Time & Threshold-Triggered Multi-Armed Bandit (T3P MAB) RL approach for DBS that is more effective than existing algorithms. Further, our T3P agent is lightweight enough to be deployed in the implant, unlike current deep-RL strategies, and even forgoes the need for an offline training phase. Additionally, most existing RL approaches have focused on modulating only frequency or amplitude, and the possibility of tuning them together remains greatly unexplored in the literature. Our RL agent can tune both frequency and amplitude of DBS signals to the brain with better sample efficiency and requires minimal time to converge. We implement an MAB agent for DBS for the first time on hardware to report energy measurements and prove its suitability for resource-constrained platforms. Our T3P MAB algorithm is deployed on a variety of microcontroller unit (MCU) setups to show its efficiency in terms of power consumption as opposed to other existing RL approaches used in recent work.

## Notes

