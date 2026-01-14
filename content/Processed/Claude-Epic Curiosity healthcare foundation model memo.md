---
processed: 2026-01-12
themes:
  - foundation-models
  - healthcare-ai
  - data-platforms
  - EHR
  - clinical-decision-support
---

# Epic Curiosity (CoMET): Research Memo

**Created:** 2026-01-12

## Executive Summary

**Curiosity** is Epic's proprietary healthcare foundation model family, built on the **Cosmos Medical Event Transformer (CoMET)** architecture. It represents Epic's bet that longitudinal EHR data—not images or text—is the substrate for predicting clinical futures. Trained on **115 billion medical events from 118 million patients**, CoMET autoregressively simulates patient health trajectories to power risk prediction, prognosis, and operational forecasting.

**Key insight:** This is *not* a chatbot or clinical documentation tool. It's a *patient trajectory simulator*—closer to a weather forecasting model for healthcare than to GPT.

---

## What Is It?

### Core Concept

Curiosity learns temporal patterns from sequences of medical events (diagnoses, labs, medications, procedures, encounters) to generate probabilistic simulations of a patient's future health trajectory. Given a patient's history, it outputs:

- **Event probabilities**: P(pancreatic cancer within 2 years)
- **Time-to-event distributions**: Expected time to 30-day readmission
- **Differential trajectories**: Multiple plausible futures accounting for uncertainty

### Technical Architecture

| Specification | Value |
|---------------|-------|
| **Architecture** | Decoder-only transformer (Qwen2 base, random init) |
| **Model sizes** | 62M (CoMET-S), 119M (CoMET-M), 1B (CoMET-L) |
| **Training data** | 118M patients, 115B events, 151B tokens |
| **Context window** | 8,192 tokens |
| **Vocabulary** | 7,105 tokens (structured medical events) |

### Tokenization Approach

Unlike language models with BPE tokenization, CoMET uses **domain-specific medical event tokens**:

| Category | Tokens | Representation |
|----------|--------|----------------|
| Diagnoses | 2,429 | ICD-10-CM (split into 3 sub-tokens) |
| Labs | 1,010 | 1,000 LOINC codes + 10 quantile buckets |
| Medications | 289 | ATC codes (3 sub-tokens) |
| Procedures | 1,500 | CPT codes (top 97.3% coverage) |
| Chief complaints | 1,298 | Name + body location |
| Encounters | 226 | Start/end by type |
| Time intervals | 13 | 1-5 min → 6+ months |
| Demographics | 37 | Sex, race, age buckets |

---

## How It Works

### Training

Standard next-token prediction on chronologically-ordered medical event sequences. The scaling law study found:

- **α = 0.520, β = 0.512** (compute-optimal scaling exponents)
- **1,000:1 token-to-parameter ratio**—far higher than natural language models, suggesting medical event data is "simpler" structurally than free text

### Inference: Simulation-Based Prediction

This is the key innovation. Rather than fine-tuning for specific tasks:

1. **Prompt** with patient's history up to prediction point
2. **Generate n trajectories** via autoregressive sampling (temperature=1)
3. **Aggregate via Monte Carlo** to compute probabilities

> "Predictions for any target are obtained from these simulated trajectories, enabling broad, out-of-the-box use on downstream tasks without task-specific fine-tuning."

This means **one model powers all prediction tasks**—no separate models for readmission, mortality, specific disease risk, etc.

---

## Performance (78 Benchmark Tasks)

### Where It Excels

| Task | AUCROC | Notes |
|------|--------|-------|
| Chronic Heart Failure (1yr) | 0.925 | Strong |
| Diabetic Retinopathy (1yr) | 0.908 | Strong |
| Type 2 Diabetes ASCVD (1yr) | 0.875 | Strong |
| Sickle Cell Crisis | 0.913 | PR-AUC 0.844 |
| 30-day readmission | 0.770 | vs. 0.718 supervised baseline |
| Inpatient labs | 0.899 | PR-AUC for generation |

### Key Finding

> "Remarkably for a foundation model with generic pretraining and simulation-based inference, CoMET generally outperformed or matched task-specific supervised models on these tasks, without requiring task-specific fine-tuning."

On **incident disease prediction** (2-year horizon), CoMET-L outperformed supervised baselines on PR-AUC across all 6 tasks tested.

### Where It Struggles

- **Hyperlipidemia-specific outcomes**: Underperformed supervised models (unclear why)
- **Lab value precision**: Bucketing into 10 quantiles loses clinically significant small changes (HbA1c MAE: 1.21)
- **Context window limits**: Many patients exceed 8,192 tokens, requiring truncation that loses early history

---

## The Cosmos Data Moat

### Scale

| Metric | Value |
|--------|-------|
| Patient records | 300M+ |
| Pediatric records | 50M |
| Rare disease records | 13M |
| Hospitals | 1,760+ |
| Clinics | 38,000+ |
| Health systems | 310 |
| Encounters | 16.3B |

### Participation

- **38%** of Epic customers actively contribute
- **50%+** signed up (pipeline)
- **Cannot be purchased**—only accessible via participating organizations

### Data Quality Advantages

- **Longitudinal**: Full patient timelines, not episodic snapshots
- **Integrated**: Inpatient + outpatient in single record
- **Beyond claims**: Vitals, patient-generated data, SDoH assessments
- **Structured**: Native EHR structured data, not NLP-extracted

---

## Why Valuable

### 1. Structural Moat

Epic's position creates a self-reinforcing flywheel:

```
More health systems → More Cosmos data → Better models →
More clinical value → More adoption → More data
```

With **~50% EHR market share** and **70% of hospital discharges**, Epic has data access no competitor can replicate. Cosmos participation is opt-in and *cannot be purchased*.

### 2. Foundation Model Economics

Traditional approach: Build N separate models for N prediction tasks, each requiring:
- Labeled training data
- Task-specific feature engineering
- Ongoing maintenance

CoMET approach: One pretrained model powers all tasks via simulation. This enables:
- **Rapid expansion** to new use cases
- **Zero-shot generalization** to rare conditions
- **Reduced validation burden** per task

### 3. Clinical Workflow Integration

Unlike standalone AI companies, Epic owns the EHR interface. Curiosity insights can be surfaced:
- In physician workflows at decision points
- In patient MyChart for engagement
- In operational dashboards for administrators
- In research tools for population health

### 4. Differentiated Approach

| Competitor | Data Type | Strength | Weakness |
|------------|-----------|----------|----------|
| **Tempus** | Genomics + radiology | Multimodal, precision medicine | Less longitudinal depth |
| **Google Med-PaLM** | Medical text | Reasoning, Q&A | No patient-specific data |
| **Epic Curiosity** | Structured EHR events | Longitudinal trajectories, scale | No imaging/genomics (yet) |

---

## Limitations & Risks

### Technical

1. **Context window**: 8,192 tokens forces truncation of long patient histories
2. **Lab discretization**: 10 quantile buckets lose precision for borderline values
3. **Data gaps**: Patients receiving care outside Cosmos network have incomplete records
4. **Phenotype validity**: ICD-10 codes don't always match clinical reality

### Deployment

1. **Validation burden**: Each clinical use case requires prospective validation before deployment
2. **Liability unclear**: Who's responsible when predictions are wrong?
3. **Algorithmic bias**: Model inherits biases in how care was historically delivered

### Strategic

1. **Antitrust exposure**: Particle Health lawsuit (Sept 2024) alleges monopoly behavior
2. **Health system dependence**: Model value depends on continued Cosmos participation
3. **Competitor response**: Google, Microsoft, Amazon all investing in healthcare AI

---

## Timeline

| Date | Milestone |
|------|-----------|
| 2019 | Cosmos launched |
| Aug 2025 | CoMET paper published (arXiv:2508.12104) |
| Aug 2025 | Curiosity announced at Epic UGM |
| **Feb 2026** | Virtual lab access for Cosmos researchers |
| TBD | Clinical workflow integration (case-by-case) |

---

## Bottom Line

**Curiosity represents Epic's play to convert its EHR dominance into AI dominance.** The technical approach—treating medical events as a "language" for autoregressive modeling—is sound and shows genuine scaling properties. The 78-task benchmark results are impressive for a zero-shot foundation model.

**The moat is data, not model architecture.** Any sufficiently capitalized team could replicate the transformer training. What they *cannot* replicate is access to 115 billion medical events from 300M patients across 1,760 hospitals.

**Key questions:**
- Will prospective validation match retrospective benchmarks?
- How will Epic handle liability for AI-influenced decisions?
- Can competitors access equivalent data through other means?

---

## Sources

- [Curiosity: A New Medical Intelligence for Clinical and Operational Insights | Epic](https://www.epic.com/epic/post/curiosity-a-new-medical-intelligence-for-clinical-and-operational-insights/)
- [Generative Medical Event Models Improve with Scale (arXiv:2508.12104)](https://arxiv.org/abs/2508.12104)
- [Epic unveils AI agents, showcases new foundational models | Healthcare IT News](https://www.healthcareitnews.com/news/epic-unveils-ai-agents-showcases-new-foundational-models)
- [About | Epic Cosmos](https://cosmos.epic.com/about/)
- [The Cosmos Collaborative (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8775787/)
- [Epic's Grand AI Gamble | HealthLeaders](https://www.healthleadersmedia.com/innovation/epics-grand-ai-gamble-can-ehr-giant-truly-build-connected-healthcare-universe)
- [Exploratory Analysis of Epic's Market Share | Health Data Atlas](https://healthdataatlas.com/2025/02/13/exploratory-analysis-of-epics-market-share/)
- [Epic revenue, funding & news | Sacra](https://sacra.com/c/epic/)
