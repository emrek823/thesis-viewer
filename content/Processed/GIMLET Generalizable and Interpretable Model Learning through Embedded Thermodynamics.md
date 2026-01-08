---
title: 'GIMLET: Generalizable and Interpretable Model Learning through Embedded Thermodynamics'
authors:
- Suguru Shiratori
- Elham Kiyani
- Khemraj Shukla
- George Em Karniadakis
date: '2025-12-22'
categories:
- physics.flu-dyn
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.19936v1
arxiv_id: 2512.19936v1
tags:
- paper
- alphaxiv/hot
- topic/physics-flu-dyn
- topic/cs-LG
---

# GIMLET: Generalizable and Interpretable Model Learning through Embedded Thermodynamics

**Authors:** Suguru Shiratori, Elham Kiyani, Khemraj Shukla, George Em Karniadakis

**Date:** 2025-12-22 | **Categories:** physics.flu-dyn, cs.LG

[PDF](https://arxiv.org/pdf/2512.19936v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.19936v1)

## Abstract

We develop a data-driven framework for discovering constitutive relations in models of fluid flow and scalar transport. Our approach infers unknown closure terms in the governing equations (gray-box discovery) under the assumption that the temporal derivative, convective transport, and pressure-gradient contributions are known. The formulation is rooted in a variational principle from nonequilibrium thermodynamics, where the dynamics is defined by a free-energy functional and a dissipation functional. The unknown constitutive terms arise as functional derivatives of these functionals with respect to the state variables. To enable a flexible and structured model discovery, the free-energy and dissipation functionals are parameterized using neural networks, while their functional derivatives are obtained via automatic differentiation. This construction enforces thermodynamic consistency by design, ensuring monotonic decay of the total free energy and non-negative entropy production. The resulting method, termed GIMLET (Generalizable and Interpretable Model Learning through Embedded Thermodynamics), avoids reliance on a predefined library of candidate functions, unlike sparse regression or symbolic identification approaches. The learned models are generalizable in that functionals identified from one dataset can be transferred to distinct datasets governed by the same underlying equations. Moreover, the inferred free-energy and dissipation functions provide direct physical interpretability of the learned dynamics. The framework is demonstrated on several benchmark systems, including the viscous Burgers equation, the Kuramoto--Sivashinsky equation, and the incompressible Navier--Stokes equations for both Newtonian and non-Newtonian fluids.

## Notes

