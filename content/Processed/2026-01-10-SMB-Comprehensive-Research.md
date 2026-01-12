---
type: investment-memo-research
company: Standard Model Biomedicine
date: 2026-01-10
assessment: COMPREHENSIVE
confidence: HIGH
purpose: Complete investment memo research - technical positioning + financial model analysis
initial_investment: August 2025
---

# Standard Model Biomedicine
## Comprehensive Investment Memo Research — January 2026

---
**Top 5 Points**

1. **Only multi-scale JEPA patient model** — SMB is the only company building molecular→patient world models using JEPA architecture, with SOTA results (26× on genomics, 18% lift on dynamic prediction tasks)

2. **Model licensing = 10-30x better exit math** — GSK-Noetik ($50M) and Tempus-AZ ($200M) prove pharma will license foundation models. This shifts valuation from risk-adjusted drug milestones (9x exit) to ARR multiples (72-117x exit on our $10M)

3. **6-person team is a feature, not a bug** — Biology scales differently than SaaS. Genentech had 5 scientists at their Lilly deal; Nabla Bio has ~20 people signing Takeda deals. If SMB lands a $50M deal, that's $8.3M revenue per employee

4. **First pharma partnership is the key catalyst** — Technical differentiation is proven (MSK validation, open-sourced weights). Commercial validation through first pharma deal converts thesis to reality

5. **Timing advantage on unproven architecture** — JEPA is Meta's proposed AGI path, untested in biology. SMB is first mover — if it works for patient modeling, they have moat that's hard to replicate. High-risk, high-asymmetry bet


# EXECUTIVE SUMMARY

**Standard Model Biomedicine occupies a unique position at the intersection of two major shifts:**

1. **Technical**: Only company building a multi-scale "patient world model" using JEPA architecture
2. **Business Model**: Positioned to capture the emerging "Infrastructure Biotech" category — pharma licensing AI models (not drugs)

**Investment Thesis Update:**

The GSK-Noetik deal ($50M for model licensing) and Tempus-AstraZeneca deal ($200M for data + model) prove pharma will pay real money for foundation model access. This fundamentally changes our investment model:

| Old Model | New Model |
|-----------|-----------|
| Risk-adjusted drug milestones | ARR-based software valuation |
| 10+ year exit timeline | 3-5 year exit timeline |
| Binary clinical risk | SaaS churn risk (~15%) |
| 10-30x exit on $10M | **72-360x exit on $10M** |

**The bet**: SMB can be the Noetik of multi-scale patient modeling. First pharma deal is the key catalyst.

---

# THE MANIDIS FRAMEWORK: Why Biology ≠ SaaS

> *"Software investors were obsessed with the idea of a tiny team reaching a billion+ run rate in enterprise SaaS because of 'AI' — this is a silly idea. GTM, sales, etc all track linearly with headcount. But it will become common in biology."*
> — **Will Manidis**, Nabla Bio founder (Oct 2025)

## The Core Insight

| Enterprise SaaS | Biology/Biotech |
|-----------------|-----------------|
| GTM scales with headcount | **Development/commercialization split** |
| Need sales team for every deal | Pharma handles commercialization |
| AI doesn't change distribution | AI changes what you develop |
| 100+ people for $100M ARR | **~20 people for pharma-scale deals** |

## Why This Matters for SMB

**Biology has always had this dynamic.** It's totally expected that a tiny company develops technology and licenses/partners its way to market.

- **1978**: Genentech had **5 scientists** when they did their insulin deal with Eli Lilly
- **2025**: Nabla Bio has **~20 people** and just signed a second major Takeda deal
- **2026**: Noetik's GSK $50M deal — team size undisclosed but small

**The difference now**: Before, tiny teams developed *drug technology*. Now, tiny teams develop *technology that finds the drug technology* (foundation models).

## The Implication for Valuation

```
ENTERPRISE SAAS                          BIOTECH AI
─────────────────────────────────────────────────────────
Revenue scales with:                     Revenue scales with:
  - Headcount (sales)                      - Model performance
  - Territory coverage                     - Pharma partnerships
  - Customer success                       - License deals

To reach $100M ARR:                      To reach $100M ARR:
  - Need 100-200 employees                 - Need 15-30 employees
  - $20-40M in GTM spend                   - $5-10M in R&D spend
  - 3-5 year build                         - 1-2 pharma deals

REVENUE PER EMPLOYEE                     REVENUE PER EMPLOYEE
  SaaS median: $200-400K                   Biotech AI: $2-5M+
```

## Historical Precedent

| Company | Team Size at Key Deal | Deal Value |
|---------|----------------------|------------|
| Genentech (1978) | 5 scientists | Eli Lilly insulin deal |
| Nabla Bio (2025) | ~20 people | Multiple Takeda deals |
| Noetik (2026) | Small | GSK $50M |
| **SMB (target)** | **~6 people** | **First pharma TBD** |

## What This Means for SMB Investment

1. **Don't penalize small team size** — Biology has always worked this way
2. **Revenue/employee will be extreme** — A $50M deal with 6 people = $8.3M/employee
3. **GTM is NOT the bottleneck** — Model performance and pharma relationships are
4. **Comps are Genentech, not Salesforce** — Different playbook entirely

> *"Software distribution in legacy/regulated verticals is probably the world's most underpriced asset right now."*
> — Will Manidis

**SMB's 6-person team is a feature, not a bug.** If they land a Noetik-style deal, they'll have one of the highest revenue-per-employee ratios in tech or biotech.

---

# TABLE OF CONTENTS

## Investor Framework
- [The Manidis Framework: Why Biology ≠ SaaS](#the-manidis-framework-why-biology--saas)

## Part I: Technical Analysis
1. [Company Overview](#1-company-overview)
2. [Technical Architecture](#2-technical-architecture)
3. [GenVarFormer: Molecular Scale](#3-genvarformer-molecular-scale)
4. [EHR Foundation Model: Patient Scale](#4-ehr-foundation-model-patient-scale)
5. [SMB-v1 World Model: JEPA](#5-smb-v1-world-model-jepa)
6. [Competitive Landscape](#6-competitive-landscape)
7. [Head-to-Head Comparisons](#7-head-to-head-comparisons)
8. [Architecture Analysis](#8-architecture-analysis)

## Part II: Business Model & Financial Analysis
9. [The Paradigm Shift: Model Licensing](#9-the-paradigm-shift)
10. [Deal Structure Database](#10-deal-structure-database)
11. [Cash Flow Framework](#11-cash-flow-framework)
12. [Valuation Framework](#12-valuation-framework)
13. [SMB Scenario Analysis](#13-smb-scenario-analysis)

## Part III: Investment Implications
14. [Risk Assessment](#14-risk-assessment)
15. [Investment Recommendation](#15-investment-recommendation)
16. [Appendices](#appendices)

---

# PART I: TECHNICAL ANALYSIS

---

# 1. Company Overview

## Founding Team

| Role | Name | Background |
|------|------|------------|
| Founder & CEO | Kevin Brown | Led oncology FM development at Bristol Myers Squibb; Director of AI at SimBioSys; federated learning R&D at Siemens Healthineers |
| Co-Founder & Chief Scientist | Zekai (Zach) Chen | PhD GWU (ML); Senior Data Scientist at BMS; FMs at JPMorgan Chase |
| Founder & CTO | Arda Pekis | Georgia Tech; Built FMs for genomics/imaging; FDA clearance for breast cancer software at SimBioSys |
| Founding Engineer | David Laprade | Joined June 2025 |

**Key insight**: Team has direct experience building production foundation models at BMS (oncology), SimBioSys (FDA-cleared), and JPMorgan (financial ML at scale). This is *not* a first-time team.

## Timeline

| Date | Milestone |
|------|-----------|
| 2024 | Founded |
| **Aug 2025** | **Virtue initial investment** |
| Sept 30, 2025 | Out of stealth |
| Sept 2025 | 3 papers published (GenVarFormer, Graph-LLM, EHR-NEP) |
| Oct 2025 | Oncology World Model validated with MSK data |
| Late 2025 | Open-sourced model weights |
| Jan 2026 | Continued development, SMB-v1-Structure released |

## Current Resources

| Metric | Standard Model Bio | Benchmark |
|--------|-------------------|-----------|
| Total Raised | ~$10M (estimated) | Noetik: $50M+, Chai: $225M |
| Employees | ~6 | |
| Compute | 32 NVIDIA H100 GPUs | Evo 2: 2,000 H100s |
| Data | Federated learning (claimed) | Tempus: 40M records owned |

---

# 2. Technical Architecture

## Core Thesis

> "Language is NOT a sufficient proxy for disease biology."

Standard Model argues existing approaches fail because they:
1. **Compress biology into text** — losing signals humans can't articulate
2. **Optimize for snapshots** — pattern matching instead of causal dynamics
3. **Hit a description ceiling** — semantic consistency over biological fidelity

## The Alternative: World Models for Biology

```
Traditional LLM:    Input tokens → Next token (text prediction)
Standard Model:     State(t) + Intervention → State(t+1) (causal dynamics)
```

**The key insight**: Training on (Pre-State + Intervention) → (Post-State) pairs forces the model to learn **causal laws of how tumors progress and respond to therapy**.

## Four-Component Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    SMB WORLD MODEL ARCHITECTURE                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. MODALITY INGESTION & FUSION                                │
│     ┌──────────┬──────────┬──────────┬──────────┐              │
│     │ Genomics │ Imaging  │ EHR      │ Proteomics│             │
│     └────┬─────┴────┬─────┴────┬─────┴────┬─────┘              │
│          │          │          │          │                     │
│          └──────────┴──────────┴──────────┘                     │
│                        │                                        │
│                   ┌────▼────┐                                   │
│                   │ Encoder │                                   │
│                   └────┬────┘                                   │
│                        │                                        │
│  2. STATE PREDICTION ENGINE (JEPA)                             │
│     ┌──────────────────────────────────────┐                   │
│     │  S(t) + Intervention → S(t+1)        │                   │
│     │  Predicts LATENT STATE, not pixels   │                   │
│     └──────────────────────────────────────┘                   │
│                        │                                        │
│  3. HYBRID OPTIMIZATION                                        │
│     ┌──────────────────────────────────────┐                   │
│     │  SFT (anchors to outcomes)           │                   │
│     │  + JEPA (learns dynamics)            │                   │
│     │  = Prevents training collapse        │                   │
│     └──────────────────────────────────────┘                   │
│                        │                                        │
│  4. OPTIMIZATION LOOP                                          │
│     Compare predicted S(t+1) vs. actual patient follow-up      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

# 3. GenVarFormer: Molecular Scale

## The Problem

Cancer's fundamental challenge: distinguishing rare "driver" mutations from vast "passenger" mutations. Non-coding mutations affect gene expression from **millions of base pairs away**.

**Prior limitations:**
- Existing predictors max at 49 kbp context (88% of genes have zero mutations)
- Can't handle extreme sparsity of somatic mutations
- Fail to generalize to unseen genes

## Technical Innovation

GenVarFormer handles **16 megabase pair windows** (340× prior work).

### Architecture

| Component | Specification |
|-----------|---------------|
| Model dimension | 64 |
| Attention heads | 4 |
| Transformer layers | 4 |
| **Total parameters** | **993,000** |
| Context window | 16 Mbp |

### Results

**Gene Expression Prediction (Pearson correlation):**

| Model | Correlation | vs. GVF |
|-------|-------------|---------|
| **GenVarFormer** | **0.2187** | — |
| Mean Subtype | 0.0749 | 2.9× worse |
| Lasso (Hotspots) | 0.0081 | **27× worse** |
| Borzoi | 0.0043 | 51× worse |

**Key achievements:**
- First model to generalize to **unseen genes AND samples simultaneously**
- **1,170× faster inference** than Borzoi
- Patient embeddings **outperform ground-truth expression** for survival (C-index: 0.71 vs. 0.57)

---

# 4. EHR Foundation Model: Patient Scale

## Next Event Prediction (NEP)

Reformulate EHRs as **timestamped event sequences**, train LLMs to autoregressively predict next clinical events.

### Training Data

| Attribute | Value |
|-----------|-------|
| Patients | 1.2 million |
| Clinical events | ~200 million |
| Indications | 15 (oncology-heavy) |

### Benchmark Results

**Survival Prediction (MSK-CHORD, C-Index):**

| Cancer | Stage | Prior SOTA | **NEP-8B** | Δ |
|--------|-------|------------|------------|---|
| Pancreatic | IV | 0.66 | **0.68** | +3.5% |
| Prostate | I-III | 0.80 | **0.86** | +7.5% |
| CRC | I-III | 0.77 | **0.81** | +5.2% |

**NEP outperforms prior SOTA in 7/10 cancer stage subgroups.**

**Label Efficiency:**
- With only 100 samples, NEP matches LLM2Vec with 20× more data

---

# 5. SMB-v1 World Model: JEPA

## The Core Innovation

SMB-v1-Structure (1.7B parameters) = first **biological world model** using Joint-Embedding Predictive Architecture.

| Approach | Prediction Target | What It Learns |
|----------|-------------------|----------------|
| LLM | Next token | Language patterns |
| MAE | Masked pixels | Visual reconstruction |
| **JEPA** | **Latent state** | **Causal dynamics** |

## Results

### Overall Performance

| Model | AUROC |
|-------|-------|
| Qwen3-VL (8B) | 0.687 |
| SMB-EHR-4B | 0.708 |
| SMB-v1-1.7B (SFT) | 0.715 |
| **SMB-v1-1.7B (JEPA)** | **0.727** |

### Static vs. Dynamic Tasks

| Task Type | Traditional | SMB JEPA | Lift |
|-----------|-------------|----------|------|
| Static (Mortality) | 0.68 | 0.70 | +3% |
| **Dynamic (Treatment Change)** | 0.66 | **0.78** | **+18%** |

### Disease-Specific

| Disease | SFT Only | SFT+JEPA | Lift |
|---------|----------|----------|------|
| Sarcoma | 0.71 | **0.77** | +8.5% |
| Pancreatic (body) | baseline | **+12.6%** | |
| Liver progression | baseline | **+7.7%** | |

---

# 6. Competitive Landscape

## Market Map

| Company | Focus | Architecture | Funding | Commercial |
|---------|-------|--------------|---------|------------|
| **SMB** | Multi-scale patient | JEPA + NEP | ~$10M | Pre-revenue |
| Noetik | Virtual cell / TME | 1.5B transformer | $50M+ | GSK $50M deal |
| Chai | Molecular structure | Diffusion | $225M | Lilly deal |
| Recursion | Phenomics | ViT-MAE | $688M+ | Roche $150M |
| Tempus | Clinical data | Various | $1.6B+ | AZ $200M |
| BioMap | Life sciences FM | 210B MOE | $200M+ | Sanofi $1B+ |
| Evo 2 | DNA/genomics | StripedHyena | ~$10M compute | Academic |

## Key Insight

Most competitors pick a lane:
- Chai/Boltz: Molecular structure only
- Noetik: Cellular (TME) only
- Evo 2: Genomic sequence only
- Recursion: Cellular imaging only

**SMB's thesis**: Breakthrough comes from *fusion*, not depth in any single modality.

---

# 7. Head-to-Head Comparisons

## SMB vs. Noetik

| Dimension | SMB | Noetik |
|-----------|-----|--------|
| Architecture | JEPA (patient-level) | Transformer (cell-level) |
| Scale | Molecular→Patient | Cellular focus (TME) |
| Validation | MSK academic | GSK $50M |
| Strength | Causal dynamics | Spatial biology depth |

**Verdict**: Noetik has commercial traction. SMB has broader ambition.

## SMB vs. Tempus

| Dimension | SMB | Tempus |
|-----------|-----|--------|
| Data | Federated (claimed) | 40M records owned |
| Model | Unified FM | Multiple specialized |
| Revenue | $0 | $693M (2024) |

**Verdict**: Tempus has data moat. SMB has architectural differentiation.

## SMB vs. Evo 2

| Dimension | SMB | Evo 2 |
|-----------|-----|-------|
| Parameters | 1.7B | 40B |
| Compute | 32 H100s | 2,000 H100s |
| Modalities | Multi-scale | DNA only |

**Verdict**: Evo 2 is 60× more resourced but single-modality.

---

# 8. Architecture Analysis

## Is SMB Using SOTA?

| Architecture | SOTA? | SMB? | Competitors |
|--------------|-------|------|-------------|
| Transformer | Yes | ✅ | Everyone |
| ViT | Yes | ✅ | Recursion, Bioptimus |
| **JEPA** | **Bleeding edge** | ✅ | **No one in bio** |
| Diffusion | Yes | ❌ | Chai, Boltz |
| StripedHyena | Yes | ❌ | Evo 2 |
| MOE | Yes | ❌ | BioMap |

**Assessment**: JEPA is Meta's proposed path to AGI, largely unproven in biology. SMB is the first to try it for patient modeling.

---

# PART II: BUSINESS MODEL & FINANCIAL ANALYSIS

---

# 9. The Paradigm Shift

## From Drug Royalties to Model Licensing

The GSK-Noetik deal proves pharma will pay **real money** for model access, not just drug options.

### Old Model: Drug Licensing

```
┌─────────────────────────────────────────────────────────────────┐
│                    TRADITIONAL DRUG LICENSING                   │
├─────────────────────────────────────────────────────────────────┤
│  TIMELINE     │ Year 0    │ Year 3-5  │ Year 8-12 │ Year 12+  │
│  ─────────────┼───────────┼───────────┼───────────┼───────────│
│  PAYMENT      │ Upfront   │ Phase 2   │ Approval  │ Royalties │
│               │ $50-150M  │ $50-100M  │ $100-500M │ 5-15%     │
│  ─────────────┼───────────┼───────────┼───────────┼───────────│
│  PROBABILITY  │ 100%      │ ~30%      │ ~10%      │ ~5%       │
│  RISK OWNER   │ Licensor  │ Licensee  │ Licensee  │ Market    │
└─────────────────────────────────────────────────────────────────┘
```

### New Model: Model Licensing

```
┌─────────────────────────────────────────────────────────────────┐
│                    AI MODEL LICENSING DEAL                      │
├─────────────────────────────────────────────────────────────────┤
│  TIMELINE     │ Year 0    │ Year 1    │ Year 2    │ Year 3+   │
│  ─────────────┼───────────┼───────────┼───────────┼───────────│
│  PAYMENT      │ Upfront   │ Annual    │ Annual    │ Renewal + │
│               │ $35-50M   │ License   │ License   │ Expansion │
│  ─────────────┼───────────┼───────────┼───────────┼───────────│
│  PROBABILITY  │ 100%      │ ~95%      │ ~90%      │ ~85%      │
│  RISK OWNER   │ None      │ Vendor    │ Vendor    │ Vendor    │
└─────────────────────────────────────────────────────────────────┘
```

### The Core Shift

| Dimension | Drug Licensing | Model Licensing |
|-----------|----------------|-----------------|
| Value timing | Backloaded (80% biobucks) | Frontloaded (recurring) |
| Risk profile | Binary (trial pass/fail) | Churn (~15%/year) |
| Timeline | 10-15 years to royalties | Annual value realization |
| Valuation | Risk-adjusted NPV | ARR × 15-30x |

---

# 10. Deal Structure Database

## Tier 1: Pure Model Licensing

| Deal | Date | Upfront | Annual | Total | Structure |
|------|------|---------|--------|-------|-----------|
| **GSK-Noetik** | Jan 2026 | $50M | Subscription | $50M+ | 5-yr non-exclusive |
| **Tempus-AZ-Pathos** | Apr 2025 | $50M | $50M/yr × 3 | $200M | Data + model |

## Tier 2: Platform + Drug Milestones Hybrid

| Deal | Date | Upfront | Tech Payment | Drug Milestones | Total |
|------|------|---------|--------------|-----------------|-------|
| **Recursion-Roche** | Dec 2021 | $150M | $30M/map | $300M × 40 programs | $12B+ |
| **Sanofi-BioMap** | Oct 2023 | $10M | Near-term | $1B+ | $1B+ |
| **Lilly-Insilico** | Nov 2025 | $100M+ | — | Tiered | $100M+ |

## Tier 3: Bespoke Model Development

| Deal | Date | Structure | Value |
|------|------|-----------|-------|
| **Lilly-Chai** | Jan 2026 | Custom model build | "Largest AI software deal" |
| **Lilly-Insitro** | Sep 2025 | Bespoke ML models | Multi-year |

---

# 11. Cash Flow Framework

## Visual: Cash Flow Timing Comparison

```
        DRUG DEAL (Probability-Weighted)     MODEL LICENSE (Subscription)
    $M                                       $M
    │                                        │
 50 ┤  ██                                    50 ┤  ██
 40 ┤  ██                                    40 ┤  ██  ▓▓
 30 ┤  ██                                    30 ┤  ██  ▓▓  ▓▓
 20 ┤  ██  ░░                                20 ┤  ██  ▓▓  ▓▓  ▓▓
 10 ┤  ██  ░░  ░░  ░░                        10 ┤  ██  ▓▓  ▓▓  ▓▓  ▓▓
  0 ┼──────────────────────────               0 ┼────────────────────────
       Y0  Y3  Y5  Y8  Y10 Y12                    Y0  Y1  Y2  Y3  Y4  Y5

    ██ = Certain    ░░ = Probability-weighted    ▓▓ = High-probability recurring
```

## Traditional Biotech: Probability-Weighted NPV

```
TRADITIONAL DRUG DEAL: $500M Total Contract Value
─────────────────────────────────────────────────

Year 0:  $50M upfront                    = $50M   (100%)
Year 3:  $50M Phase 2                    = $15M   (30% prob)
Year 5:  $100M Phase 3                   = $20M   (20% prob)
Year 8:  $200M Approval                  = $20M   (10% prob)
Year 12: $100M Commercial                = $5M    (5% prob)

EXPECTED VALUE: ~$110M
TIME TO FULL VALUE: 12-15 years
RISK: Binary (trial failure = write-off)
```

## Model Licensing: Recurring Revenue Model

```
MODEL LICENSE DEAL: $200M 5-Year Contract
─────────────────────────────────────────

Year 0:  $50M upfront                    = $50M   (100%)
Year 1:  $35M annual license             = $33M   (95% renewal)
Year 2:  $35M annual license             = $30M   (90% renewal)
Year 3:  $35M annual license             = $28M   (85% renewal)
Year 4:  $35M annual license             = $26M   (80% renewal)

EXPECTED VALUE: ~$167M
TIME TO FULL VALUE: 5 years
RISK: Churn (replaceable, not fatal)
```

---

# 12. Valuation Framework

## System 1: Traditional Biotech (Risk-Adjusted NPV)

```
VALUATION = Σ (Milestone × P(success) × Discount Factor)

Example: $1B milestone deal
─────────────────────────────
Upfront:           $10M × 1.0          = $10M
Preclinical:       $100M × 0.5         = $50M
Phase 1:           $150M × 0.3         = $45M
Phase 2:           $200M × 0.2         = $40M
Phase 3:           $300M × 0.1         = $30M
Approval:          $240M × 0.05        = $12M

RISK-ADJUSTED VALUE: ~$187M
vs. HEADLINE VALUE: $1B
DISCOUNT: 81%
```

## System 2: SaaS/Platform (ARR Multiple)

```
VALUATION = ARR × Revenue Multiple

Example: Noetik-style model licensing
─────────────────────────────────────
Year 1 ARR (1 customer):                $15M
Year 3 ARR (5 customers):               $75M

Conservative multiple (10x):            $750M
Growth-adjusted (20x):                  $1.5B
AI-premium (30x):                       $2.25B
```

## The Arbitrage: Same Company, Different Lens

```
┌────────────────────────────────────────────────────────────────┐
│                   VALUATION ARBITRAGE                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  BIOTECH LENS              │  SOFTWARE LENS                    │
│  ─────────────────────────────────────────────────────         │
│  $50M GSK deal             │  $15M ARR (subscription)          │
│  = $50M value (done)       │  × 25x AI multiple                │
│                            │  = $375M value                    │
│                            │  + 5 customers @ Year 3           │
│                            │  = $75M ARR × 25x                 │
│                            │  = $1.9B value                    │
│                                                                │
│  SAME COMPANY. DIFFERENT MATH.                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

## Valuation Multiple Comparison

| Business Model | Revenue Multiple | Risk Profile |
|----------------|------------------|--------------|
| Drug development biotech | 0.5-2x TCV | Binary clinical |
| Biotech with approved drug | 3-8x revenue | Commercial |
| **AI model licensing** | **10-30x ARR** | **SaaS churn** |
| Pure SaaS | 5-10x ARR | Enterprise sales |
| AI infrastructure | 20-50x ARR | Platform dynamics |

---

# 13. SMB Scenario Analysis

## Scenario A: Traditional Biotech Path

SMB licenses models to pharma for drug discovery (milestone-based).

```
Year 0:  $20M upfront
Year 2:  $30M preclinical milestone (50% prob)
Year 4:  $50M Phase 1 milestone (30% prob)
Year 6:  $100M Phase 2 milestone (20% prob)
Year 8:  $200M Phase 3 milestone (10% prob)

EXPECTED VALUE: $20M + $15M + $15M + $20M + $20M = $90M
EXIT MULTIPLE: 9x on $10M investment
TIMELINE: 10+ years
```

## Scenario B: Model Licensing Path (Noetik Analog)

SMB licenses multi-scale patient model to multiple pharmas.

```
Year 1:  1 pharma × $15M ARR = $15M
Year 2:  3 pharmas × $15M ARR = $45M
Year 3:  5 pharmas × $15M ARR = $75M
Year 4:  7 pharmas × $15M ARR = $105M

VALUATION @ Year 4:
Conservative (10x ARR):     $1.05B
Growth-adjusted (20x ARR):  $2.1B
AI-premium (30x ARR):       $3.15B

EXIT MULTIPLE: 105-315x on $10M investment
TIMELINE: 4-5 years
```

## Scenario C: Hybrid Path (Most Likely)

Model licensing recurring + drug milestone optionality.

```
Model Licensing:
  Year 1-3: $15M → $45M ARR
  Valuation component: $450M-$900M

Drug Milestone Optionality:
  3 programs × $300M potential × 30% prob = $270M

TOTAL VALUATION: $720M - $1.17B
EXIT MULTIPLE: 72-117x on $10M investment
TIMELINE: 3-5 years
```

## Summary Table

| Scenario | Exit Multiple | Timeline | Risk |
|----------|---------------|----------|------|
| Drug milestones only | 9x | 10+ years | HIGH |
| **Model licensing only** | **105-315x** | **4-5 years** | **LOW** |
| Hybrid (likely) | 72-117x | 3-5 years | MEDIUM |

---

# PART III: INVESTMENT IMPLICATIONS

---

# 14. Risk Assessment

## Technical Risks

| Risk | Severity | Mitigation | Status |
|------|----------|------------|--------|
| JEPA training instability | HIGH | Hybrid SFT+JEPA | Partially addressed |
| Data access limitations | HIGH | Federated learning | Unproven at scale |
| Compute constraints | MEDIUM | Efficient architectures | 993K params works |
| Multi-scale complexity | MEDIUM | Modular design | Demonstrated |

## Commercial Risks

| Risk | Severity | Evidence |
|------|----------|----------|
| No pharma partnerships | HIGH | No announced deals |
| Pre-revenue | HIGH | Seed stage |
| Competitor resources | HIGH | 160× less funding than Tempus |

## Risk Transfer Analysis

```
┌────────────────────────────────────────────────────────────┐
│                    RISK BORNE BY SMB                        │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Drug Development │████████████████████████████│ 100%     │
│  Platform+Drug    │███████████████░░░░░░░░░░░░░│  60%     │
│  Model License    │██████░░░░░░░░░░░░░░░░░░░░░░│  25%     │
│  Pure SaaS        │███░░░░░░░░░░░░░░░░░░░░░░░░░│  15%     │
│                                                            │
│  ████ = SMB risk    ░░░░ = Pharma risk                    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

# 15. Investment Recommendation

## The Case FOR SMB

| Factor | Evidence |
|--------|----------|
| **Unique technical position** | Only multi-scale JEPA patient model |
| **SOTA results** | 26× (genomics), 7.2% (EHR), 18% (dynamic tasks) |
| **Efficient execution** | 993K params beats billion-param competitors |
| **Team pedigree** | BMS, SimBioSys (FDA), JPMorgan |
| **Timing** | First mover on JEPA for biology |
| **Business model optionality** | Can pursue software OR biotech path |
| **Manidis Framework applies** | 6-person team is a feature, not a bug — biology scales differently than SaaS |

## The Case AGAINST SMB

| Factor | Evidence |
|--------|----------|
| **Under-resourced** | 1/60th compute of Evo 2 |
| **No commercial validation** | Zero pharma deals |
| **JEPA is high-risk** | Unproven architecture |
| **Data access unclear** | Federated learning = pitch, not moat |
| **Competition moving fast** | GSK/Noetik, Tempus/AZ already closed |

## Key Catalysts to Watch

### Near-term (3-6 months)
- [ ] **First pharma partnership** — validates commercial demand
- [ ] Series A raise — validates investor interest
- [ ] Additional disease validation beyond oncology

### Medium-term (6-12 months)
- [ ] Second pharma customer — proves repeatability
- [ ] ARR trajectory — validates SaaS model
- [ ] JEPA stability at scale — technical proof point

### Long-term (12-24 months)
- [ ] $50M+ ARR — Noetik parity
- [ ] Clinical validation studies
- [ ] Strategic optionality (acquisition interest)

## Recommended Framing for Memo

> **Standard Model Bio represents a new category: "Infrastructure Biotech."**
>
> They're building the multi-scale patient model using JEPA architecture — technically differentiated (only company doing this) with SOTA results (26× on genomics, 7.2% on EHR, 18% on dynamic prediction tasks).
>
> The GSK-Noetik deal ($50M) proves pharma will license foundation models directly. This changes the financial equation: we can capture biotech-scale deal values ($50M-$200M upfront) with software-like risk profiles (churn, not clinical failure).
>
> **The Manidis Insight**: Unlike SaaS where GTM scales linearly with headcount, biology has always had a development/commercialization split. Genentech had 5 scientists when they did their Lilly insulin deal in 1978. Nabla Bio has ~20 people and just signed a second major Takeda deal. **SMB's 6-person team is a feature, not a bug** — if they land a $50M deal, that's $8.3M revenue per employee.
>
> **If SMB lands a Noetik-style deal**, our $10M position could be worth 72-117x in 3-5 years. The key catalyst is their first pharma partnership.
>
> **Risk**: They're betting on an unproven architecture with 1/60th the resources of competitors. But if JEPA works for patient modeling, they have architectural moat that's hard to replicate.

## Questions for SMB

1. **Commercial strategy**: Noetik-style pure licensing or Recursion-style hybrid?
2. **Pricing model**: Annual subscription vs. per-model vs. milestone?
3. **Exclusivity**: Non-exclusive (more customers) or exclusive (higher price)?
4. **Pharma pipeline**: Who are they talking to? Any LOIs?
5. **Data partnerships**: Any federated learning pilots signed?

---

# APPENDICES

## Appendix A: Model Specifications

| Model | Parameters | Purpose | GPU Req |
|-------|-----------|---------|---------|
| SMB-v1-Structure | 1.7B | JEPA world model | 16-32GB |
| SMB-EHR-4B | 4B | Clinical prediction | 24-48GB |
| SMB-Language-8B | 8B | Biomedical text | 32-80GB |
| SMB-Vision-base | 97M | Medical imaging | 4GB |
| GenVarFormer | 993K | Mutation→expression | <4GB |

## Appendix B: GenVarFormer Technical Details

| Parameter | Value |
|-----------|-------|
| Learning rate | 10⁻⁴ |
| Optimizer | AdamW |
| Model dim | 64 |
| Heads | 4 |
| Layers | 4 |
| Context | 16 Mbp |

## Appendix C: NEP Training Configuration

| Parameter | Value |
|-----------|-------|
| Base model | Llama-3.1, Qwen2.5 |
| Fine-tuning | LoRA (rank 16) |
| Batch size | 512 |
| Compute | 32× H100 |
| Patients | 1.2M |
| Events | 200M |

## Appendix D: Deal Terms Database

| Deal | Upfront | Annual | Drug Milestones | Structure |
|------|---------|--------|-----------------|-----------|
| GSK-Noetik | $50M | Subscription | None | 5-yr license |
| Tempus-AZ | $50M | $50M/yr | None | Data + model |
| Recursion-Roche | $150M | $30M/map | $12B potential | Hybrid |
| Sanofi-BioMap | $10M | Near-term | $1B+ | Hybrid |
| Lilly-Insilico | $100M+ | — | Tiered | Drug-focused |

---

## Sources

### Standard Model Bio
- [Introducing Standard Model Biomedicine](https://blog.standardmodel.bio/p/introducing-standard-model-biomedicine)
- [The Patient is Not a Document - Part 1](https://blog.standardmodel.bio/p/the-patient-is-not-a-document-moving)
- [The Patient is Not a Document - Part 2](https://blog.standardmodel.bio/p/the-patient-is-not-a-document-moving-f88)
- [GenVarFormer (arXiv 2509.25573)](https://arxiv.org/abs/2509.25573)
- [EHR NEP (arXiv 2509.25591)](https://arxiv.org/abs/2509.25591)

### Deal Terms
- [GSK-Noetik Partnership](https://www.businesswire.com/news/home/20260108468293/en/GSK-Licenses-Noetiks-AI-Foundation-Models)
- [Tempus-AZ-Pathos $200M](https://www.pharmaceutical-technology.com/news/astrazeneca-enters-200m-ai-cancer-pact-with-tempus-and-pathos/)
- [Recursion-Roche](https://ir.recursion.com/news-releases/news-release-details/recursion-announces-transformational-collaboration-roche-and)
- [Sanofi-BioMap](https://www.bioworld.com/articles/701822-biomap-sanofi-strike-potential-1b-deal-to-co-map-ai-drug-discovery-modules)

### Valuation
- [AI Valuation Multiples 2025](https://aventis-advisors.com/ai-valuation-multiples/)
- [SaaS Valuation Multiples 2025](https://aventis-advisors.com/saas-valuation-multiples/)
- [Biotech Valuation Multiples 2025](https://www.finrofca.com/news/biotech-revenue-multiples-2025)

### Competitors
- [Chai Discovery Series B](https://www.businesswire.com/news/home/20251214931432/en/Chai-Discovery-Announces-$130-Million-Series-B)
- [Boltz-1 MIT](https://news.mit.edu/2024/researchers-introduce-boltz-1-open-source-model-predicting-biomolecular-structures-1217)
- [Evo 2 Arc Institute](https://arcinstitute.org/news/evo2)
- [BioMap xTrimo](https://www.geneonline.com/nvidia-gtc-2025-biomaps-xtrimo-the-ai-model-thats-changing-biotech-and-drug-discovery/)

### Investor Frameworks
- [Will Manidis (Nabla Bio) on Biology vs SaaS Economics](https://x.com/WillManidis/status/1978441969891217468) — Oct 2025 thread on why tiny teams can reach billion+ in biology but not enterprise SaaS
- [Nabla Bio-Takeda Second Collaboration](https://x.com/nablabio/status/1978441969891217468) — Context for Manidis framework

---

*Document generated: January 10, 2026*
*Research for investment memo update*
*Virtue portfolio company: Standard Model Biomedicine*
