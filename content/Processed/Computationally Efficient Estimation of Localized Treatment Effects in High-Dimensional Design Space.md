---
title: Computationally Efficient Estimation of Localized Treatment Effects in High-Dimensional
  Design Spaces using Gaussian Process Regression
authors:
- Ahmed, A.
- Rahimian, M. A.
- Chen, Q.
- Kumar, P.
date: '2026-01-06'
categories:
- health-informatics
pdf_url: https://www.medrxiv.org/content/10.64898/2025.12.30.25343216v2.full.pdf
paper_id: medrxiv_10.64898_2025.12.30.25343216
source: medrxiv
tags:
- paper
- source/medrxiv
- topic/health-informatics
---

# Computationally Efficient Estimation of Localized Treatment Effects in High-Dimensional Design Spaces using Gaussian Process Regression

**Authors:** Ahmed, A., Rahimian, M. A., Chen, Q., Kumar, P.

**Date:** 2026-01-06 | **Source:** medrxiv | **Categories:** health-informatics

[PDF](https://www.medrxiv.org/content/10.64898/2025.12.30.25343216v2.full.pdf)

## Abstract

Epidemiological models are widely used to study population-level health dynamics, and population-scale agent-based simulations have proven particularly effective in capturing the complex interactions between individual behaviors and environmental factors. In the context of the opioid epidemic, such models provide a critical tool for evaluating how alternative intervention strategies affect overdose outcomes across heterogeneous communities, supporting the design of locally tailored policies consistent with the principles of precision public health. However, as the number of interventions and their levels increase, the total number of possible combinations of the interventions grows exponentially, becoming prohibitively large for simulation to evaluate each combination exhaustively. In this paper, we develop a two-level metamodel framework, comprising a Gaussian process regression (GPR) followed by a response function, and apply it to efficiently estimate county-level treatment effects on overdose deaths per 100,000 people. At the contextual level, we train a GPR on a sample set of simulation output, learning a smooth mapping from intervention parameters to simulated outcome for each county. To ensure robust performance, we engineer input features, including demographic and socioeconomic covariates, and employ a composite kernel that combines a radial basis function (RBF) component for smooth variation with a periodic component to capture the spatial structure of counties. At the outcome level, the posterior means of the GPR are combined through a response function to generate outcome (i.e., overdose death rate) estimates for a given treatment condition. Using a calibrated opioid epidemic simulation model informed by county-level overdose mortality and treatment dispensing data, our two-level metamodel achieves low relative error (~ 5%) averaged across all treatment conditions and counties. Compared to exhaustive simulation, this reduced the number of runs by more than 90% while maintaining accuracy in estimating county-level treatment effects. In contrast to classical designs such as fractional factorial or Latin hypercube sampling, our approach leverages spatial correlations and posterior uncertainty to direct sampling more efficiently. This yields a practical decision-support tool for policymakers, enabling rapid evaluation of alternative resource-allocation strategies to mitigate the opioid epidemic in local communities, while also providing a general analytical framework to guide precision public health interventions in broader epidemic settings.

## Notes

