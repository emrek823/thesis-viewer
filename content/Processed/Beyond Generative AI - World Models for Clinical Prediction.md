---
title: "Beyond Generative AI: World Models for Clinical Prediction, Counterfactuals, and Planning"
source: "https://arxiv.org/abs/2511.16333"
author:
  - "NeurIPS 2025 Workshop"
published: 2025-11-25
created: 2025-12-29
description: "First focused review of world models in healthcare, introducing L1-L4 capability framework. Argues LLMs lack physical foundation and temporal reasoning required for clinical support."
tags:
  - "clippings"
---

## Key Findings

**Why World Models for Healthcare:**
Recent generative models lack physical foundation and temporal reasoning required for clinical decision support. As scaling language models show diminishing returns for grounded clinical reasoning, world models are gaining traction because they learn multimodal, temporally coherent, and action-conditioned representations that reflect the physical and causal structure of care.

**L1-L4 Capability Framework:**
To compare heterogeneous methods, the authors introduce a capability rubric:
- **L1**: Temporal prediction
- **L2**: Action-conditioned prediction
- **L3**: Counterfactual rollouts for decision support
- **L4**: Planning/control

**Current State:** Most reviewed systems achieve L1-L2, with fewer instances of L3 and rare L4.

**Three Domains Surveyed:**
1. **Medical imaging and diagnostics** - longitudinal tumor simulation, projection-transition modeling, and JEPA-style predictive representation learning
2. **Disease progression modeling** - generative event forecasting from EHRs at scale
3. **Robotic surgery and surgical planning** - action-conditioned guidance and control

**Key Gaps Identified:**
- Under-specified action spaces and safety constraints
- Weak interventional validation
- Incomplete multimodal state construction
- Limited trajectory-level uncertainty calibration

## Relevance to JEPA Thesis

This paper validates that JEPA-style architectures are emerging specifically in medical imaging as an alternative to pure generative approaches. The L1-L4 framework maps directly to what Standard Model is attempting: trajectory prediction (L1-L2) moving toward counterfactual analysis (L3) for clinical decision support.

**Critical insight:** The paper explicitly names "JEPA-style predictive representation learning" as one of the approaches being explored in medical imaging diagnostics, providing academic validation of the architecture's relevance to healthcare.
