---
type: research
topic: "SMB Follow-On Due Diligence + Multimodal Foundation Model Landscape"
date: 2026-01-05
assessment: ANSWERED
confidence: HIGH
rounds: 2
vault_sources: 15
web_sources: 18
---

# SMB Has Delivered; Market Validates Thesis; Epic Is The Risk

SMB has executed well since August 2025—technical validation at MSK, Sanofi deal closing, strong pharma pipeline, and 3 ICLR papers accepted. The multimodal foundation model thesis is validated by $200M+ deals (Tempus-AstraZeneca) and competitor capitalization ($76M Bioptimus). The critical risk is Epic Curiosity: 100B patient events, 90%+ hospital distribution, same world-model architecture. SMB's edge is pharma focus and JEPA architecture on dynamic tasks—but the window is narrowing.

**Confidence: HIGH** on progress and market validation. **MEDIUM** on competitive moat durability.

---

## Track 1: SMB Progress Since August 2025

### Technical Validation ✓

| Metric | SMB (JEPA) | Baseline | Delta |
|--------|------------|----------|-------|
| MSK Oncology AUROC | 0.727 | 0.687 (Qwen3-VL) | +5.8% |
| Treatment Change Prediction | 0.78 | 0.70 | +11.4% |
| SFT-only vs SFT+JEPA | 0.727 | 0.715 | +1.7% |
| Sarcoma (heterogeneous) | — | — | +8.5% |

**Source:** [[08_report/03_why_smb_tech_wins.md]]:25-34

The JEPA architecture specifically excels on **dynamic tasks** (treatment response, progression) where LLMs fail. On static classification, LLMs remain competitive—the lift is task-specific.

**Publications:**
- 3 papers accepted at **ICLR 2026**: GenVarFormer, KRONOS (graph-LLM), EHR Foundation Model
- Model weights **public on HuggingFace**: `standardmodelbio/SMB-v1-1.7B-Structure`

**Source:** [[08_report/01_progress_since_seed.md]]:13-17

### Commercial Traction ✓

**Sanofi Deal:**
- POC: $360K closing
- Full contract: $4.8M expected March/April 2026 ($800K × 6 therapeutic areas)

**Source:** [[Sources/Granola/SMB __ Virtue-2025-10-16_13-03-36.md]]:14-16

**Pharma Pipeline:**
| Partner | Status |
|---------|--------|
| GSK | Meeting scheduled |
| IQVIA | $44M proposal submitted |
| AstraZeneca | NDA stage |
| BMS | Under VP review |
| Tempus | Seeking SMB as genomics FM partner ($4-6M sliding scale) |

**Source:** [[08_report/01_progress_since_seed.md]]:26-29, [[Sources/Granola/SMB __ Virtue-2025-11-21_15-32-49.md]]:11-16

**AMC Partnerships:**
MSK (validation complete), MD Anderson (active), Yale, UCSD, Mount Sinai, Mayo Clinic

**Source:** [[08_report/01_progress_since_seed.md]]:49-53

### Team Evolution ✓

8-person team with exceptional velocity:

| Person | Background | Signal |
|--------|------------|--------|
| Kevin Brown (CEO) | BMS oncology FM lead, Siemens federated learning | Built same thing inside pharma; knows why it fails |
| Irsyad Adam | Genentech/AbbVie multimodal | ICLR submission + PhD defense in first month |
| David Laprade | Stripe distributed systems | Infrastructure at scale |
| Zekai Chen | ACL submissions | Produced successful ACL paper in 1 week |

**Source:** [[virtue-_-why-we-invested-in-standard-model-bio-the-universa-0e5d6a71.md]]:84-92, [[2025-12-26_manifesto-2d5f3898.md]]:120-130

### Data Acquisition

- 1M oncology CTs from Gradient for **$150K** (delivered Dec 29)
- Radiology prioritized as "standard of care longitudinal modality"
- Nash Bio partnership: exclusive Vanderbilt multimodal data access

**Source:** [[Sources/Granola/SMB __ Virtue.md]]:60-63

### Runway & Fundraising

- ~$2.5M raised to date
- **10.9 months runway** as of Dec 2025
- Series A planned H1 2026 (post-Sanofi signing)
- JPM meetings: Lux, GV, North Pond, Pioneer

**Source:** [[08_report/01_progress_since_seed.md]]:42-45

---

## Track 2: Multimodal Foundation Models in Biomedicine

### Why Multimodal > Single-Modal

**Performance Evidence:**
- Vision-language models achieve **superior zero-shot/few-shot performance** vs single-modality
- Molecule-text fusion **significantly improves** property prediction over structure-only
- Integrating structured EHR + unstructured notes **enhances** patient representation

**Source:** [arXiv Foundation Models in Biomedicine Survey](https://arxiv.org/html/2503.02104)

**Scalability Argument:**
- Single organizations **cannot accumulate sufficient data** across modalities
- 97% of biological/health data is **fragmented and inaccessible** (WEF)
- 80% of data scientist time spent on **data preparation**, not analysis

**Source:** [NPJ Digital Medicine](https://www.nature.com/articles/s41746-025-01992-6)

### State of Research

**Dominant Architectures:**
- Transformer-based (BERT/GPT variants) dominate
- Emerging: State-space models (Mamba), graph transformers, diffusion models
- Hyena operators for long-range genomic context

**Key Benchmarks:**
- 30M single-cell transcriptomes (Geneformer)
- 178M molecules (ChemFM)
- Millions of retinal images (RETFound)

**Critical Gap:** No image-omics foundation models integrating histopathology + genomics exist yet.

**Source:** [arXiv Survey](https://arxiv.org/html/2503.02104), [PMC Challenges Review](https://pmc.ncbi.nlm.nih.gov/articles/PMC12231560/)

### Competitive Landscape

| Company | Funding | Data Scale | Model | Positioning |
|---------|---------|------------|-------|-------------|
| **Bioptimus** | $76M | 500K+ slides, millions of patients | M-Optimus (Dec 2025) | Pathology-first, 50 organ types |
| **Tempus** | Public ($11-14B mcap) | 8M+ patient records, 40M research records | Oncology FM (AZ deal) | Data aggregator, seeking FM partners |
| **Epic Curiosity** | Internal | **100B events, 300M patients** | CoMET decoder-only | 90%+ US hospital distribution |
| **Google DeepMind** | Internal | Research partnerships | C2S-Scale (27B params) | Single-cell focus |
| **SMB** | ~$2.5M | MSK, MD Anderson, AMC partnerships | JEPA 1.7B | Patient trajectory, pharma GTM |

**Source:** [Bioptimus M-Optimus](https://www.bioptimus.com/m-optimus), [Tempus-AZ Deal](https://investors.tempus.com/news-releases/news-release-details/tempus-signs-expanded-strategic-agreements-astrazeneca-and), [Epic Curiosity](https://www.epic.com/epic/post/curiosity-a-new-medical-intelligence-for-clinical-and-operational-insights/), [[08_report/03_why_smb_tech_wins.md]]

### Deal Benchmarks

| Deal | Value | Structure |
|------|-------|-----------|
| Tempus-AstraZeneca-Pathos | **$200M** | Data licensing + model development fees |
| Sanofi-Formation Bio-OpenAI | Multi-year | AI collaboration, first-in-class |
| SMB-Sanofi | **$4.8M** | 6 therapeutic areas |
| IQVIA proposal | **$44M** | Pending decision |

**Source:** [Tempus IR](https://investors.tempus.com/news-releases/news-release-details/tempus-signs-expanded-strategic-agreements-astrazeneca-and), [[08_report/01_progress_since_seed.md]]

### Market Consensus

**Bull Case:**
- Healthcare AI spending: **$1.4B in 2025 (3x 2024)**
- Pharma AI spending: **$3B in 2025**
- 85% goes to startups (not incumbents)
- $236B-$400B pharma revenue at risk from patent cliff 2025-2030
- Precision medicine market: $119B (2025) → $470B (2034) at 16.5% CAGR

**Source:** [[08_report/02_why_now_market.md]]:20-24, :60-65

**Bear Case (from Scale VP analysis):**
- "Software TAM differs fundamentally from wet lab spending"
- Historical precedent: tech investors exit when confronting biotech realities
- ~90% clinical failure rates suggest ML predictions remain incomplete
- "Investors with software-level risk tolerance and biotech-level return expectations will be disappointed"

**Source:** [Scale VP Analysis](https://www.scalevp.com/insights/the-future-of-biological-foundation-models-and-value-creation-in-ai-driven-drug-discovery/)

### Key Bottlenecks

| Bottleneck | Evidence |
|------------|----------|
| **Data Access** | 97% of bio/health data fragmented; privacy regulations limit pooling |
| **Regulatory** | EU AI Act designates healthcare AI as high-risk; harmonization needed with MDR |
| **Interpretability** | Deep learning lacks transparency; critical for clinical adoption |
| **Validation** | "Little evidence exists for AI device effectiveness in practice" |
| **Talent** | "Regulatory auditors not familiar with ML models" |

**Source:** [Frontiers Editorial](https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1744581/full), [PMC Challenges](https://pmc.ncbi.nlm.nih.gov/articles/PMC12231560/)

---

## Risk Assessment

### Epic Curiosity: The Primary Threat

| Factor | Epic | SMB |
|--------|------|-----|
| Data scale | 100B events, 300M patients | MSK + AMC partnerships |
| Distribution | 90%+ US hospitals | Direct pharma sales |
| Architecture | Same world-model concept | JEPA (latent space) |
| Focus | Hospital operations + clinical | Pharma drug development |
| Access | Researcher access Feb 2026 | Available now |

**Why SMB May Still Win:**
1. Epic targets **hospital operations**; SMB targets **pharma R&D** (different buyers)
2. JEPA architecture shows **+5.8% lift on dynamic tasks** where token prediction fails
3. Pharma **cannot use Epic** for proprietary drug development (data governance)
4. SMB has **first-mover** in pharma relationships

**Source:** [[08_report/05_red_team.md]]:7-13, [Epic Curiosity](https://www.epic.com/epic/post/curiosity-a-new-medical-intelligence-for-clinical-and-operational-insights/)

### Risk Probability Matrix (from memo)

| Risk | Probability | Impact |
|------|-------------|--------|
| Epic commoditizes | 30% | High |
| Tempus builds internally | 20% | Medium |
| Execution failure | 25% | High |
| Tech advantage erodes | 35% | Medium |
| Pharma sales stall | 40% | Medium |

**Source:** [[08_report/05_red_team.md]]:102-114

---

## Recommendations

### 1. Investment Decision: PROCEED with Follow-On

The $1.25M follow-on remains justified:
- Technical validation at MSK demonstrates real lift
- Sanofi closing validates pharma WTP
- Pipeline ($44M IQVIA, AZ, BMS) suggests market pull
- Team velocity exceptional

**Trigger to reconsider:** Sanofi deal falls through, Epic outperforms on dynamic tasks, Series A doesn't close by Q2 2026

### 2. Thesis Updates

Update [[Theses/JEPA World Models Displace LLMs for Clinical Decisions.md]]:
- Add Epic Curiosity as validation of world-model thesis (but also competitive threat)
- Note: differentiation is **pharma focus**, not architecture alone
- Add benchmark: +5.8% AUROC lift on dynamic tasks

### 3. Monitoring Triggers

| Event | Action |
|-------|--------|
| Epic Curiosity researcher results (Feb 2026) | Assess performance on dynamic tasks |
| Sanofi contract signing (Mar/Apr 2026) | Confirm commercial thesis |
| Series A close (H1 2026) | Verify institutional validation |
| Bioptimus M-Optimus benchmarks | Compare multimodal performance |

### 4. Diligence Questions for Next Call

- How does SMB plan to compete with Epic's data scale? (Answer likely: pharma focus + JEPA architecture)
- What's the plan if Tempus builds internally vs partners?
- How defensible is the JEPA lift if Epic/Google adopt similar architectures?

---

## Bull Case / Bear Case

**Bull Case:** Pharma cannot access Epic data for proprietary R&D. JEPA architecture proves fundamentally superior for trajectory prediction. SMB becomes the "quiet backbone" for pharma AI. $44M IQVIA deal closes. Winner-take-all dynamics emerge.

**Bear Case:** Epic Curiosity matches JEPA performance on dynamic tasks. Pharma builds in-house (despite Kevin's evidence against). Bioptimus or Tempus achieve multimodal integration first. SMB runway pressures force unfavorable Series A terms.

---

## Sources

### Vault
- [[08_report/01_progress_since_seed.md]] — SMB progress metrics
- [[08_report/02_why_now_market.md]] — Market timing evidence
- [[08_report/03_why_smb_tech_wins.md]] — Technical differentiation
- [[08_report/05_red_team.md]] — Risk assessment
- [[Sources/Granola/SMB __ Virtue-2025-10-16_13-03-36.md]] — Sanofi deal terms
- [[Sources/Granola/SMB __ Virtue-2025-11-21_15-32-49.md]] — Tempus partnership discussions
- [[virtue-_-why-we-invested-in-standard-model-bio-the-universa-0e5d6a71.md]] — Original investment thesis
- [[2025-12-26_manifesto-2d5f3898.md]] — Kevin's manifesto on pharma limitations

### Web
- [Standard Model Bio Blog - Introducing SMB](https://blog.standardmodel.bio/p/introducing-standard-model-biomedicine) — Company positioning
- [arXiv Foundation Models in Biomedicine](https://arxiv.org/html/2503.02104) — Comprehensive landscape survey
- [Bioptimus M-Optimus](https://www.bioptimus.com/m-optimus) — Competitor technical details
- [Tempus-AstraZeneca Deal](https://investors.tempus.com/news-releases/news-release-details/tempus-signs-expanded-strategic-agreements-astrazeneca-and) — Deal benchmark ($200M)
- [Epic Curiosity](https://www.epic.com/epic/post/curiosity-a-new-medical-intelligence-for-clinical-and-operational-insights/) — Competitive threat details
- [Epic Curiosity arXiv](https://arxiv.org/abs/2508.12104) — Technical paper
- [Scale VP Analysis](https://www.scalevp.com/insights/the-future-of-biological-foundation-models-and-value-creation-in-ai-driven-drug-discovery/) — Market skepticism perspective
- [PMC Multimodal Challenges](https://pmc.ncbi.nlm.nih.gov/articles/PMC12231560/) — Technical bottlenecks
- [Frontiers Editorial](https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1744581/full) — Consensus view

---

## Research Process

### Sub-Questions & Confidence

| # | Sub-Question | Confidence |
|---|--------------|------------|
| SQ1 | SMB technical progress | HIGH — MSK benchmarks, ICLR papers, HuggingFace release |
| SQ2 | Commercial traction | HIGH — Sanofi $4.8M, IQVIA $44M proposal, pipeline |
| SQ3 | Team evolution | HIGH — 8 people, strong pedigree, velocity evidence |
| SQ4 | Execution risks | HIGH — Epic identified, probability matrix documented |
| SQ5 | Why multimodal matters | HIGH — Performance evidence from arXiv survey |
| SQ6 | State of research | HIGH — Comprehensive survey, benchmark data |
| SQ7 | Competitors | HIGH — Bioptimus, Tempus, Epic, DeepMind mapped |
| SQ8 | Bottlenecks | HIGH — Data, regulatory, interpretability documented |

### Search Strategy

**Round 1 (Broad):**
- Vault agent: Theses/, Portfolio/, Granola/ for SMB evidence
- Web: SMB company, multimodal FM reviews, competitor comparisons

**Round 2 (Narrow):**
- Epic Curiosity technical details
- Tempus deal terms
- Bottleneck analysis papers
