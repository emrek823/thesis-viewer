---
type: investment-memo-research
company: Standard Model Biomedicine
date: 2026-01-10
assessment: COMPREHENSIVE
confidence: HIGH
purpose: Technical positioning analysis for investment memo update
---

# Standard Model Biomedicine: Technical Deep Dive
## Investment Memo Research — January 2026

---

# Executive Summary

**Standard Model Biomedicine occupies a unique technical position in the biomedical AI landscape.** They are the only company building a true "patient world model" using Joint-Embedding Predictive Architecture (JEPA) that integrates molecular→cellular→clinical scales into a unified representation.

**Key findings:**
1. **Architectural Innovation**: First to apply JEPA to patient biology — a bet on causal dynamics over pattern matching
2. **Multi-scale Integration**: Only company fusing genomics (GenVarFormer), cellular (Graph-LLM), and whole-patient (EHR-NEP) into shared embedding space
3. **SOTA Performance**: GenVarFormer achieves 26× improvement on mutation→expression prediction; NEP beats specialized EHR models by 7.2% C-index
4. **Risk Profile**: Under-resourced (~$10M vs. $225M+ competitors), unproven JEPA stability in biology, no commercial validation

**The bet**: Integration across biological scales matters more than depth in any single modality. If JEPA works for patient modeling, SMB has architectural moat.

---

# Table of Contents

1. [Company Overview](#1-company-overview)
2. [Technical Architecture: The Standard Model Approach](#2-technical-architecture)
3. [GenVarFormer: Molecular Scale](#3-genvarformer)
4. [EHR Foundation Model: Patient Scale](#4-ehr-foundation-model)
5. [SMB-v1 World Model: JEPA Architecture](#5-smb-v1-world-model)
6. [Competitive Landscape](#6-competitive-landscape)
7. [Head-to-Head Comparisons](#7-head-to-head)
8. [Architecture Analysis](#8-architecture-analysis)
9. [Risk Assessment](#9-risk-assessment)
10. [Investment Implications](#10-investment-implications)

---

# 1. Company Overview

## Founding & Team

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
| Aug 2025 | [Your initial investment] |
| Sept 30, 2025 | Out of stealth |
| Sept 2025 | 3 papers published (GenVarFormer, Graph-LLM, EHR-NEP) |
| Oct 2025 | Oncology World Model validated with MSK data |
| Late 2025 | Open-sourced model weights |
| Jan 2026 | Continued development, SMB-v1-Structure released |

## Funding & Resources

| Metric | Standard Model Bio | Context |
|--------|-------------------|---------|
| Total Raised | ~$10M (estimated) | Seed stage |
| Investors | Arkitekt Ventures, Virtue | |
| Employees | ~6 | |
| Compute (disclosed) | 32 NVIDIA H100 GPUs | Evo 2 used 2,000 H100s |
| Data (claimed) | Federated learning across hospitals | Tempus owns 40M records |

---

# 2. Technical Architecture: The Standard Model Approach

## Core Thesis

> "Language is NOT a sufficient proxy for disease biology."

Standard Model argues that existing approaches fail because they:
1. **Compress biology into text** — losing subtle signals humans can't articulate (CT textures, genomic sequences, tumor microenvironment topology)
2. **Optimize for snapshots** — pattern matching instead of causal dynamics
3. **Hit a description ceiling** — optimizing for semantic consistency with doctors rather than biological fidelity

## The Alternative: World Models for Biology

Rather than predicting text tokens, Standard Model predicts **latent states**:

```
Traditional LLM: Input tokens → Next token (text prediction)
Standard Model: State(t) + Intervention → State(t+1) (causal dynamics)
```

**The key insight**: If you train a model on (Pre-State + Intervention) → (Post-State) pairs, you force it to learn **causal laws of how tumors progress and respond to therapy**.

## Four-Component Architecture

### Component 1: Modality Ingestion & Fusion

Raw data from multiple modalities:
- Genomics (whole-genome sequencing)
- Proteomics (protein expression)
- Medical imaging (CT, pathology)
- EHR (diagnoses, procedures, labs, vitals, medications)

Each modality passes through specialized encoders, then a projector maps all encodings into a **universal latent space**.

**Output**: "Fused patient state embedding that retains both high-level semantic context and low-level biological granularity"

### Component 2: State Prediction Engine (The Core)

```
Input:  Current Fused Embedding S(t) + Intervention A(t)
Output: Predicted Next-Time-Point Embedding S(t+1)
```

This is the JEPA core — predicting in latent space rather than generating pixels or text.

### Component 3: Hybrid Optimization

To prevent JEPA training collapse (constant outputs), SMB combines:
- **Supervised Fine-Tuning (SFT)**: Anchors to clinical outcomes
- **JEPA Objective**: Learns underlying state dynamics

Mixed weighting prevents collapse while preserving dynamics learning.

### Component 4: Optimization Loop

Compares predicted S(t+1) against actual patient state from ground-truth follow-up data. Error signals teach the model "causal laws of how tumors progress."

---

# 3. GenVarFormer: Molecular Scale

## The Problem

Cancer biology's fundamental challenge: distinguishing rare "driver" mutations that fuel progression from vast background of "passenger" mutations. Key mechanism: non-coding mutations affect gene expression from **millions of base pairs away**.

**Prior limitations:**
- Existing predictors max at 49 kbp context — 88% of genes have zero mutations in such windows
- Can't handle extreme sparsity of somatic mutations
- Fail to generalize to unseen genes

## Technical Innovation

GenVarFormer handles **16 megabase pair windows** (340× prior work) by only considering mutations and their local context, omitting vast intermediate sequence.

### Architecture Details

| Component | Specification |
|-----------|---------------|
| Model dimension | 64 |
| Attention heads | 4 |
| Transformer layers | 4 |
| Total parameters | **993,000** |
| Context window | 16 Mbp (2²⁴ bp) |

**Input encoding per mutation:**
- **ALT**: Alternative allele → single transformer layer + mean pooling
- **ILEN**: Indel length (symmetric log transform)
- **VAF**: Variant allele fraction
- **Flanking DNA**: 32bp each side → shallow CNN (ConvNova) + mean pooling
- **Position**: Relative to gene start, rounded to nearest hundred → rotary positional embeddings

### Key Technical Advances

1. **Nested Tensors**: Mutation distribution follows Zipf — conventional padding = 100% pad tokens. PyTorch nested tensors eliminate padding entirely.

2. **Bin Packing Sampler**: Custom sampler ensures no batch exceeds mutation limit while maximizing GPU utilization.

3. **Custom RoPE Kernel**: Rotary positional embeddings for arbitrarily-spaced tokens (mutations don't align regularly). Built on FlashAttention.

4. **Loss Function**: Gradient aligned regression — minimizes pairwise distances, critical for expression prediction.

### Training Data

| Attribute | Value |
|-----------|-------|
| Dataset | TCGA breast cancer |
| Samples | 864 |
| Data types | Paired WGS + RNA-seq |
| Preprocessing | InstaPrism in silico purification |
| Batch effects | Regressed out top 10 PCs |
| Gene filter | Mean expression > 1 (log TPM+1) |

### Results

**Gene Expression Prediction (Pearson correlation across samples):**

| Model | Correlation | vs. GVF |
|-------|-------------|---------|
| **GenVarFormer** | **0.2187** | — |
| Mean Subtype Baseline | 0.0749 | 2.9× worse |
| Lasso (Hotspots) | 0.0081 | **27× worse** |
| Borzoi (pretrained) | 0.0043 | 51× worse |

**Key achievement**: First model to generalize to **unseen genes AND unseen samples simultaneously** (r = 0.219).

**Window size ablation:**
| Window | Correlation |
|--------|-------------|
| 524 kbp | ~0.10 |
| 4 Mbp | ~0.11 |
| **16 Mbp** | **0.2187** |

Doubling context from 4M to 16M bp roughly doubles performance.

**Computational efficiency:**
- **1,170× faster inference** than Flashzoi (optimized Borzoi)
- Lower peak GPU memory

### Clinical Utility

Survival prediction in luminal A breast cancer (concordance index):

| Feature Set | C-Index |
|-------------|---------|
| **GVF embeddings** | **0.71 ± 0.14** |
| Ground-truth gene expression | 0.57 ± 0.21 |
| Hotspots | 0.47 ± 0.24 |

**Critical finding**: GVF patient embeddings **outperform ground-truth gene expression** for survival prediction. The model learns signals not captured by expression measurement.

---

# 4. EHR Foundation Model: Patient Scale

## The Problem

EHRs contain rich temporal dynamics, but:
- Most methods treat patient data as static code collections
- Summarize states at specific timepoints
- Fail to model sequential nature of clinical events

**Key limitation of masked language models (BERT-style):**
- Bidirectional attention breaks temporal order
- Can't reason about disease progression

## Next Event Prediction (NEP)

SMB's approach: reformulate EHRs as **timestamped event sequences** and train LLMs to autoregressively predict next clinical events.

```
Traditional EHR encoding: [codes] → embedding (static snapshot)
NEP: [event_1, event_2, ..., event_t] → event_{t+1} (temporal dynamics)
```

### Architecture

| Component | Specification |
|-----------|---------------|
| Base models | Llama-3.1, Qwen2.5 series |
| Fine-tuning | LoRA (rank 16) |
| Training | DeepSpeed ZeRO3, bf16 |
| Batch size | 512 global |
| Learning rate | 5×10⁻⁵ (linear warmup, cosine decay) |
| Steps | ~10,000 (~1 epoch) |
| Max sequence | 4,096 tokens |
| Compute | 32 NVIDIA H100 (80GB) |

### Training Data

| Attribute | Value |
|-----------|-------|
| Patients | 1.2 million |
| Clinical events | ~200 million |
| Indications | 15 (oncology-heavy) |
| Event types | Diagnoses, procedures, medications, labs, vitals |

**Sampling strategy**: Temperature-controlled multinomial (α=0.5) to balance routine labs vs. rare clinically meaningful events.

### Benchmark Results

**Survival Prediction (MSK-CHORD, C-Index):**

| Cancer | Stage | Prior SOTA | LLM2Vec-8B | **NEP-8B** |
|--------|-------|------------|------------|------------|
| Pancreatic | IV | 0.66 | 0.661 | **0.68** (+3.5%) |
| Pancreatic | I-III | 0.68 | 0.634 | **0.71** (+4.4%) |
| Prostate | I-III | 0.80 | 0.817 | **0.86** (+7.5%) |
| CRC | I-III | 0.77 | 0.755 | **0.81** (+5.2%) |
| NSCLC | I-III | 0.75 | 0.725 | **0.77** (+2.7%) |

**NEP outperforms prior SOTA in 7/10 cancer stage subgroups.**

**Clinical Tasks (EHRSHOT, AUROC):**

| Task | CLMBR | NEP-8B | Delta |
|------|-------|--------|-------|
| Hypertension | 0.718 | **0.72** | +0.3% |
| Pancreatic cancer | 0.813 | **0.82** | +0.9% |
| Celiac disease | 0.557 | **0.59** | +5.9% |

**Label Efficiency:**

| Training Samples | LLM2Vec-8B | NEP-8B | Improvement |
|------------------|------------|--------|-------------|
| 100 | 0.546 | **0.577** | +5.7% |
| 1,000 | 0.527 | **0.581** | +10.3% |
| 5,000 | 0.687 | **0.717** | +4.4% |

**With only 100 samples, NEP achieves comparable performance to LLM2Vec with 20× more data.**

---

# 5. SMB-v1 World Model: JEPA Architecture

## The Core Innovation

SMB-v1-Structure (1.7B parameters) is the first **biological world model** using Joint-Embedding Predictive Architecture.

**JEPA vs. Traditional Approaches:**

| Approach | Prediction Target | What It Learns |
|----------|-------------------|----------------|
| LLM (text) | Next token | Language patterns |
| MAE (vision) | Masked pixels | Visual reconstruction |
| **JEPA** | **Latent state** | **Causal dynamics** |

## Training Methodology

Training data structured as cause-and-effect pairs:

```
(State_t + Intervention) → State_{t+1}
```

This forces the model to learn **treatment as catalyst** — explicitly modeling causal relationship between intervention and outcome.

### Hybrid Optimization

Pure JEPA suffers from training collapse (constant outputs). SMB uses mixed weighting:
- **SFT component**: Anchors to clinical outcomes (mortality, progression)
- **JEPA component**: Learns state dynamics

## Evaluation Framework

### Point-in-Time Clinical Decision Nodes

Rather than single labels per patient, SMB created evaluation instances at five decision points:
1. Treatment initiation
2. Treatment change
3. Disease progression
4. Recurrence/relapse
5. End of treatment

24-hour temporal buffer prevents data leakage.

### Downstream Tasks (Linear Probe)

1. **Overall Survival**: Mortality within 12 months
2. **Disease Progression**: Progression within 6 months
3. **Treatment Failure**: Discontinuation within 12 months
4. **Toxicity Events**: Grade 3+ adverse events
5. **Line of Therapy Transfer**: Regimen changes

## Results

### Overall Performance

| Model | AUROC |
|-------|-------|
| Qwen3-VL (8B) | 0.687 |
| SMB-EHR-4B (public data) | 0.708 |
| SMB-v1-1.7B (SFT only) | 0.715 |
| **SMB-v1-1.7B (SFT+JEPA)** | **0.727** |

### Static vs. Dynamic Tasks

**Critical finding**: Performance gap widens on dynamic tasks:

| Task Type | Gradient Boosting | Qwen3-VL (8B) | SMB-v1 (JEPA) |
|-----------|-------------------|---------------|---------------|
| Static (Mortality) | ~0.66 | ~0.68 | ~0.70 |
| **Dynamic (Treatment Change)** | ~0.66 | ~0.70 | **~0.78** |

**+12% advantage on dynamic tasks** — exactly where JEPA should excel.

### Disease-Specific Results

| Disease | SFT Only | SFT+JEPA | Lift |
|---------|----------|----------|------|
| Sarcoma | 0.71 | **0.77** | +8.5% |
| Pancreatic (body progression) | baseline | **+12.6%** | |
| Liver progression | baseline | **+7.7%** | |

**Sarcoma insight**: JEPA excels on heterogeneous diseases where traditional pattern-matching fails. Model learns phenotype from temporal vital/lab trajectories rather than text labels.

### Conclusion from Results

> "The hierarchy of performance is unambiguous: generalist models < specialized public models < specialized privately fine-tuned models < **specialized World Models**"

---

# 6. Competitive Landscape

## Market Map

| Company | Focus | Architecture | Scale | Funding | Open Source |
|---------|-------|--------------|-------|---------|-------------|
| **Standard Model Bio** | Multi-scale patient | JEPA + NEP | 1.7B | ~$10M | Partial |
| Noetik | Virtual cell / TME | 1.5B transformer | 200M cells | $50M+ | No |
| Chai Discovery | Molecular structure | Diffusion + transformer | — | $225M | Chai-1 only |
| Boltz (MIT) | Protein structure | Diffusion | — | Academic | Full |
| Blank Bio | RNA | Transformer | 10M | YC | Partial |
| Evo 2 (Arc) | DNA/genomics | StripedHyena2 | 40B | ~$10M compute | Full |
| Recursion | Phenomics | ViT-MAE | 3.5B images | $688M+ | Phenom-Beta |
| Tempus | Clinical multimodal | Various | 40M records | $1.6B+ | No |
| Insitro | Cellular phenomics | Self-supervised | — | $2.4B val | No |
| BioMap | Life sciences FM | MOE | **210B** | $200M+ | No |
| Bioptimus | Pathology | ViT | 1.1B | $35M | H-optimus-0 |

## Detailed Competitor Profiles

### Noetik (Virtual Cell)

**What they do**: Foundation models for tumor microenvironment simulation.

**OCTO-vc Model**:
- 1.5B parameters
- Trained on 200M tumor/immune cells
- Spatial proteomics + transcriptomics + H&E + DNA + clinical metadata
- Self-supervised "virtual cell simulations"

**Commercial traction**:
- **GSK**: $50M upfront + annual licensing (Jan 2026)
- **Agenus**: Biomarker collaboration (June 2025)

**Differentiation vs. SMB**: Noetik goes deep on cellular/spatial biology. SMB integrates across scales. Different bets.

### Chai Discovery (Molecular Structure)

**What they do**: Structure prediction and antibody design.

**Chai-1 Performance** (vs. AlphaFold3):
- Protein-ligand (PoseBusters): 77% vs. 76%
- Protein-protein: 75.1% DockQ vs. 67.7% (AF-Multimer)
- Antibody-protein: 52.9% vs. 38.0%

**Chai-2**: De novo antibody design with **~20% hit rate** (vs. 0.1% traditional computational methods).

**Funding**: $225M total, $1.3B valuation

**Differentiation vs. SMB**: Chai solves molecular design. SMB solves patient prediction. Not direct competitors.

### Boltz (MIT Jameel Clinic)

**What they do**: Open-source AlphaFold3-class structure prediction.

**Performance** (vs. Chai-1 on CASP15):
- Protein-ligand LDDT-PLI: 65% vs. 40%
- Protein-protein DockQ>0.23: 83% vs. 76%

**Boltz-2**: First DL model approaching physics-based FEP accuracy at 1000× speed.

**License**: MIT (fully open, commercial use allowed)

**Differentiation vs. SMB**: Structure prediction vs. patient trajectories. Different problems.

### Evo 2 (Arc Institute)

**What they do**: DNA foundation model across all domains of life.

**Scale**:
- 40B parameters
- 1M base pair context
- 9.3 trillion nucleotides
- 128,000 whole genomes
- **2,000 H100 GPUs** (~$10M compute)

**Capabilities**:
- 90% accuracy on BRCA1 variant pathogenicity
- Genome-scale sequence design

**Differentiation vs. SMB**: Evo 2 is genomics-only but extremely deep. SMB integrates genomics with other modalities.

### BioMap xTrimo

**What they do**: Largest multi-modal life sciences FM.

**Scale**:
- **210B parameters** (largest in life sciences)
- 10 trillion data points
- 7 modalities: DNA, RNA, protein, cells, text, systems
- NVIDIA Megatron framework, FP8 MOE training

**Commercial**: $2B contract value, 300+ clients, Sanofi partnership

**Differentiation vs. SMB**: BioMap is China-based, focused on protein design. SMB is US-based, focused on clinical prediction.

### Tempus

**What they do**: Data aggregation + clinical AI platform.

**Scale**:
- 40M research records
- 1.5M with matched genomics
- 2M with imaging
- 4,500 hospital partnerships
- $693M revenue (2024)

**Foundation Model Strategy**: $200M AstraZeneca/Pathos partnership for oncology FM

**Differentiation vs. SMB**: Tempus is a *platform* (data aggregation + products). SMB is building a *model* (unified representation). Tempus has data moat; SMB has architectural differentiation.

---

# 7. Head-to-Head Comparisons

## SMB vs. Noetik

| Dimension | SMB | Noetik |
|-----------|-----|--------|
| Architecture | JEPA (patient-level) | Transformer (cell-level) |
| Scale | Molecular→Patient | Cellular focus (TME) |
| Data | Federated (claimed) | Proprietary 200M cells |
| Validation | MSK academic | GSK $50M, Agenus, SITC |
| Strength | Causal dynamics | Spatial biology depth |

**Verdict**: Noetik has more commercial traction. SMB has broader architectural ambition.

## SMB vs. Tempus

| Dimension | SMB | Tempus |
|-----------|-----|--------|
| Data | Federated (claimed) | 40M records owned |
| Model | Unified foundation model | Multiple specialized |
| Revenue | Pre-revenue | $693M (2024) |
| Strategy | Build universal model | Aggregate data + products |

**Verdict**: Tempus has data moat and revenue. SMB has architectural differentiation.

## SMB vs. Evo 2

| Dimension | SMB | Evo 2 |
|-----------|-----|-------|
| Focus | Multi-scale patient | DNA sequence |
| Parameters | 1.7B | 40B |
| Context | — | 1M base pairs |
| Compute | 32 H100s | 2,000 H100s |

**Verdict**: Evo 2 is 60× more resourced but single-modality. SMB integrates across scales.

---

# 8. Architecture Analysis

## Is SMB Using SOTA Architectures?

| Architecture | State of Art? | SMB Using? | Competitors Using |
|--------------|---------------|------------|-------------------|
| Transformer | Yes | ✅ | Everyone |
| ViT (Vision) | Yes | ✅ | Recursion, Bioptimus |
| **JEPA** | **Bleeding edge** | ✅ | **No one else in bio** |
| Diffusion | Yes | ❌ | Chai, Boltz |
| StripedHyena | Yes (efficiency) | ❌ | Evo 2 |
| MOE | Yes (scale) | ❌ | BioMap |

**Assessment**: SMB uses frontier architectures. JEPA is the most novel bet — Meta's proposed path to AGI, but largely unproven in biology.

## JEPA Risk/Reward

**Bull case**:
- JEPA's "predict in latent space" is theoretically superior for causal reasoning
- If it works, SMB has architectural moat no one else is pursuing
- Early results (+8.5% on sarcoma, +12% on dynamic tasks) validate the approach

**Bear case**:
- JEPA training is notoriously unstable (constant output collapse)
- SMB acknowledges using "hybrid optimization" with SFT anchoring — this is a **patch, not a solution**
- No one else in biology is using JEPA — either SMB is ahead or wrong

---

# 9. Risk Assessment

## Technical Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| JEPA training instability | HIGH | Hybrid SFT+JEPA optimization |
| Data access limitations | HIGH | Federated learning (unproven at scale) |
| Compute constraints | MEDIUM | Efficient architectures (993K params for GVF) |
| Multi-scale integration complexity | MEDIUM | Modular design |

## Commercial Risks

| Risk | Severity | Evidence |
|------|----------|----------|
| No pharma partnerships | HIGH | No announced deals |
| Pre-revenue | HIGH | Seed stage |
| Competitor resources | HIGH | Tempus 160×, Recursion 70× funding |

## Execution Risks

| Risk | Severity | Evidence |
|------|----------|----------|
| Small team (6) | MEDIUM | Limits parallelization |
| CEO first-time founder | MEDIUM | Strong technical background mitigates |
| Federated learning unproven | HIGH | No disclosed data partnerships |

---

# 10. Investment Implications

## The Case FOR SMB

1. **Unique technical position**: Only company building multi-scale patient world model with JEPA
2. **SOTA results**: GenVarFormer (26× improvement), NEP (7.2% C-index gain), JEPA (+8.5% sarcoma)
3. **Efficient execution**: 993K parameter model beats billion-parameter competitors
4. **Team pedigree**: BMS, SimBioSys (FDA-cleared), JPMorgan production ML experience
5. **Timing**: If JEPA works for biology, first-mover advantage is significant

## The Case AGAINST SMB

1. **Dramatically under-resourced**: 1/60th compute of Evo 2, 1/160th funding of Tempus
2. **Unproven commercial model**: No pharma partnerships, no revenue
3. **JEPA is high-risk**: Architecture is bleeding-edge but notoriously unstable
4. **Data access unclear**: "Federated learning" is a pitch, not a proven moat
5. **Competition moving fast**: GSK just paid Noetik $50M; Tempus raised $200M for FM

## What to Watch

### Near-term (3-6 months)
- [ ] Pharma partnership announcement
- [ ] Series A raise
- [ ] Additional disease area validation beyond oncology

### Medium-term (6-12 months)
- [ ] Commercial pilot deployments
- [ ] JEPA architecture stability at scale
- [ ] Federated learning partnership announcements

### Long-term (12-24 months)
- [ ] Clinical validation studies
- [ ] Regulatory engagement (FDA)
- [ ] Revenue traction

## Recommendation for Memo

**Frame as:**

> "Standard Model Bio has the most technically differentiated approach in the biomedical foundation model landscape. They're the only company building a true multi-scale patient world model using JEPA architecture — predicting causal dynamics rather than pattern matching.
>
> Their results validate the approach: GenVarFormer achieves 26× improvement on mutation→expression prediction, NEP beats specialized EHR models by 7.2% C-index, and the JEPA world model shows +8.5% lift on heterogeneous cancers where traditional methods fail.
>
> The risk is execution: they're betting on an unproven architecture with 1/60th the compute of well-funded competitors. The thesis is that integration across biological scales matters more than depth in any single modality — and if JEPA works for biology, they have architectural moat.
>
> Key catalyst to watch: First pharma partnership will validate commercial demand for the approach."

---

# Appendix A: Model Specifications

## SMB Product Portfolio

| Model | Parameters | Purpose | GPU Req |
|-------|-----------|---------|---------|
| SMB-v1-Structure | 1.7B | JEPA world model | 16-32GB |
| SMB-EHR-4B | 4B | Clinical event prediction | 24-48GB |
| SMB-Language-8B | 8B | Biomedical text | 32-80GB |
| SMB-Vision-base | 97M | Medical imaging | 4GB |
| SMB-Vision-large | 300M | Medical imaging | 8GB |
| SMB-Vision-risk | 600M | Risk assessment | 16GB |

## GenVarFormer Hyperparameters

| Parameter | Value |
|-----------|-------|
| Learning rate | 10⁻⁴ |
| Weight decay | 0.0 |
| Optimizer | AdamW |
| Beta | (0.9, 0.95) |
| Warmup | 1 epoch |
| Full decay | 3 epochs |
| Model dim | 64 |
| Heads | 4 |
| Layers | 4 |
| Dropout | 0.0 |

## NEP Training Configuration

| Parameter | Value |
|-----------|-------|
| Learning rate | 5×10⁻⁵ |
| Batch size | 512 |
| Steps | ~10,000 |
| LoRA rank | 16 |
| Max sequence | 4,096 |
| Precision | bf16 |
| Optimizer | DeepSpeed ZeRO3 |

---

# Appendix B: Sources

## Primary Sources (Standard Model Bio)
- [Introducing Standard Model Biomedicine](https://blog.standardmodel.bio/p/introducing-standard-model-biomedicine)
- [The Patient is Not a Document - Part 1](https://blog.standardmodel.bio/p/the-patient-is-not-a-document-moving)
- [The Patient is Not a Document - Part 2](https://blog.standardmodel.bio/p/the-patient-is-not-a-document-moving-f88)
- [GenVarFormer Paper (arXiv 2509.25573)](https://arxiv.org/abs/2509.25573)
- [EHR NEP Paper (arXiv 2509.25591)](https://arxiv.org/abs/2509.25591)
- [Model Documentation](https://standardmodelbiomedicineinc.mintlify.app/)
- [GitHub](https://github.com/standardmodelbio)

## Competitor Sources
- [GSK-Noetik Partnership](https://www.businesswire.com/news/home/20260108468293/en/GSK-Licenses-Noetiks-AI-Foundation-Models)
- [Chai Discovery Series B](https://www.businesswire.com/news/home/20251214931432/en/Chai-Discovery-Announces-$130-Million-Series-B)
- [Boltz-1 MIT](https://news.mit.edu/2024/researchers-introduce-boltz-1-open-source-model-predicting-biomolecular-structures-1217)
- [Evo 2 Arc Institute](https://arcinstitute.org/news/evo2)
- [Recursion Phenom MLOps](https://home.mlops.community/public/blogs/the-mlops-behind-recursions-foundation-model-phenom-1)
- [BioMap xTrimo GTC 2025](https://www.geneonline.com/nvidia-gtc-2025-biomaps-xtrimo-the-ai-model-thats-changing-biotech-and-drug-discovery/)
- [Tempus Fuses Program](https://www.tempus.com/news/tempus-introduces-fuses-a-program-designed-to-transform-therapeutic-research/)

## Surveys & Benchmarks
- [Biomedical Foundation Model Survey (arXiv 2503.02104)](https://arxiv.org/html/2503.02104v1)
- [Pathology FM Benchmark (Nature)](https://www.nature.com/articles/s41551-025-01516-3)
- [ABCs of AlphaFold3, Boltz, Chai-1](https://blog.booleanbiotech.com/alphafold3-boltz-chai1)

---

*Document generated: January 10, 2026*
*Research conducted for investment memo update*
