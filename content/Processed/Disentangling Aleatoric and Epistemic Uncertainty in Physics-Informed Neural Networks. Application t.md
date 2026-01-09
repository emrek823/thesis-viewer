---
title: Disentangling Aleatoric and Epistemic Uncertainty in Physics-Informed Neural
  Networks. Application to Insulation Material Degradation Prognostics
authors:
- Ibai Ramirez
- Jokin Alcibar
- Joel Pino
- Mikel Sanz
- Jose I. Aizpurua
date: '2026-01-07'
categories:
- cs.LG
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.03673v1
paper_id: 2601.03673v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
- topic/cs-AI
---

# Disentangling Aleatoric and Epistemic Uncertainty in Physics-Informed Neural Networks. Application to Insulation Material Degradation Prognostics

**Authors:** Ibai Ramirez, Jokin Alcibar, Joel Pino, Mikel Sanz, Jose I. Aizpurua

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** cs.LG, cs.AI

[PDF](https://arxiv.org/pdf/2601.03673v1)

## Abstract

Physics-Informed Neural Networks (PINNs) provide a framework for integrating physical laws with data. However, their application to Prognostics and Health Management (PHM) remains constrained by the limited uncertainty quantification (UQ) capabilities. Most existing PINN-based prognostics approaches are deterministic or account only for epistemic uncertainty, limiting their suitability for risk-aware decision-making. This work introduces a heteroscedastic Bayesian Physics-Informed Neural Network (B-PINN) framework that jointly models epistemic and aleatoric uncertainty, yielding full predictive posteriors for spatiotemporal insulation material ageing estimation. The approach integrates Bayesian Neural Networks (BNNs) with physics-based residual enforcement and prior distributions, enabling probabilistic inference within a physics-informed learning architecture. The framework is evaluated on transformer insulation ageing application, validated with a finite-element thermal model and field measurements from a solar power plant, and benchmarked against deterministic PINNs, dropout-based PINNs (d-PINNs), and alternative B-PINN variants. Results show that the proposed B-PINN provides improved predictive accuracy and better-calibrated uncertainty estimates than competing approaches. A systematic sensitivity study further analyzes the impact of boundary-condition, initial-condition, and residual sampling strategies on accuracy, calibration, and generalization. Overall, the findings highlight the potential of Bayesian physics-informed learning to support uncertainty-aware prognostics and informed decision-making in transformer asset management.

## Notes

