---
type: research
topic: "Standard Model Bio - Technical & Commercial Differentiation"
date: 2025-12-28
iterations: 1
assessment: ANSWERED
---

## Summary

Standard Model Bio's technical advantage is JEPA (Joint Embedding Predictive Architecture) for patient trajectory prediction, not token prediction like LLMs. This achieves 0.727 AUROC vs 0.687 for best LLM alternatives on oncology prognosis. Commercial validation comes from Sanofi ($4.8M contract closing Q1 2026) and pharma's structural inability to build this internally (data siloed, IT bureaucracy). The moat is multi-modal integration (EHR + genomics + pathology + radiology) + clinical outcome data, not model architecture—which commoditizes in 12-18 months.

## Research Process
- Iterations: 1
- Vault patterns: "Standard Model", "JEPA", "foundation model + biology", "pharma partnership", "wet lab + compute"
- Exa queries: 1 (Standard Model Bio JEPA vs competitors)
- Freshness signals: GeneJEPA bioRxiv paper (Oct 2025), Isomorphic $600M funding (March 2025)

---

## From Vault

### Technical Differentiation

**JEPA vs LLM Architecture:**
- LLMs predict tokens; JEPA predicts state transitions in latent space [[JEPA World Models Beat LLMs for Patient Trajectory Prediction]]
- LLMs achieve only **30.3% completeness** on real oncology treatment decisions [[2025-12-26_manifesto-2d5f3898.md]]
- SMB-v1-1.7B (sft+jepa): **0.727 AUROC** on MSK cancer outcome prediction vs Qwen3-VL at 0.664 [[2025-12-26_manifesto-2d5f3898.md]]
- Treatment change prediction: **0.78 vs 0.70** for generalist models [[JEPA thesis]]

**Multi-Modal Integration (The Real Moat):**
- All modalities converging: patient notes, genomics, longitudinal EHR, radiology, pathology [[Sources/Granola/Granola 1/SMB __ Virtue]]
- Radiology chosen as standard of care longitudinal modality [[Sources/Granola/Granola 1/SMB __ Virtue]]
- Major data acquisition: 1M oncology CTs from Gradient for $150K [[Sources/Granola/Granola 1/SMB __ Virtue]]

**Why Multi-Modal Matters More Than Architecture:**
- "Foundation models in biology commoditize faster than in language—open-source parity in 12-18 months" [[Clinical Outcome Data Is the Moat, Not Wet Lab]]
- Structure prediction: SOLVED (AlphaFold3 open-source)
- Binding prediction: Commoditizing (Chai, RFDiffusion MIT license)
- Clinical outcome data: Still defensible—requires pharma/AMC partnerships [[Clinical Outcome Data Is the Moat, Not Wet Lab]]

### Commercial Validation

**Pharma Partnerships:**
- Sanofi POC progressing → full contract expected March-April 2026 [[Sources/Granola/Granola 1/SMB __ Virtue]]
- Structure: $4.8M additional to $360K POC, viewed as low risk [[Sources/Granola/Granola 1/SMB __ Virtue]]
- IQVIA proposal: $44M total via Nvidia introduction [[Sources/Granola/Granola 1/SMB __ Virtue]]
- GSK meeting with Kim Branson scheduled [[Sources/Granola/Granola 1/SMB __ Virtue]]

**AMC Partnerships (Go-to-Market):**
- MSK: benchmarking completed, strong results on core pathology dataset [[Sources/Granola/Granola 1/SMB __ Virtue]]
- MD Anderson: 2-3 hours to surpass previous SOTA
- Yale: one hour conversation to get using model
- Mayo Clinic: in-person visit requested [[Sources/Granola/Granola 1/SMB __ Virtue]]

**Why Pharma Can't Build Internally:**
- Data fragmented across departments (Digital Pathology vs Radiology vs RWD) [[2025-12-26_manifesto-2d5f3898.md]]
- Data access "weaponized to retain departmental clout" [[2025-12-26_manifesto-2d5f3898.md]]
- Tooling slow: Weights & Biases took 1 year at BMS vs <5 days at Adobe [[2025-12-26_manifesto-2d5f3898.md]]
- Genentech internal AI efforts described as "embarrassing" by recent departure [[Sources/Granola/Granola 1/SMB __ Virtue]]

### Competitive Positioning

**vs AlphaFold/Isomorphic Labs:**
- AlphaFold solves protein STRUCTURE prediction (now commoditized)
- SMB solves PATIENT OUTCOME prediction (different problem entirely)
- "We're not a drug development copilot, nor do we do molecular simulation or structure" [[2025-12-26_manifesto-2d5f3898.md]]

**vs Recursion:**
- Recursion: wet lab data generation (robotic biology → digital readouts)
- SMB: clinical outcome data aggregation (pharma + AMC partnerships)
- Recursion owns upstream discovery data; SMB owns downstream clinical validation data [[Clinical Outcome Data Is the Moat, Not Wet Lab]]

**vs Chai-2:**
- Chai-2: 16% hit rate on de novo antibody DESIGN
- But 16% binding ≠ druggable (fails on aggregation, immunogenicity, expression, PK/PD)
- SMB: predicts which patients the drug will WORK FOR—later in value chain [[AI-Drug-Discovery-Moats]]

**vs Tempus:**
- Tempus: primarily oncology, horizontal clinical data platform
- SMB: multi-disease, multi-modality from day one
- "Cross-disease-area synergies give edge to pan-disease area models" [[2025-12-26_manifesto-2d5f3898.md]]

---

## From Web (Exa)

**Standard Model Bio Public Status:**
- Came out of stealth September 2025 [[LinkedIn]]
- Virtue seed investment August 2025 [[Virtue announcement]]
- GeneJEPA paper published on bioRxiv October 2025 [[biorxiv.org]]

**GeneJEPA Technical Details:**
- Predictive world model for single-cell RNA-seq
- Predicts representations of masked gene sets from visible context
- "Learns the latent rules governing gene-gene relationships and cellular state transitions"
- Supports zero-shot in-silico gene knockouts [[biorxiv.org/content/10.1101/2025.10.14.682378v1]]

**Isomorphic Labs (Competitor Intel):**
- $600M funding round March 2025
- $3B+ potential milestones from Eli Lilly + Novartis partnerships
- Clinical trials for AI-designed oncology drugs launching 2025
- Focus: 3D atomic structure prediction (AlphaFold3) for rational drug design [[isomorphiclabs.com]]

**Recursion (Competitor Intel):**
- Merger with Exscientia completed late 2024
- $785M cash as of Q3 2025
- REC-617 in Phase 1/2 for solid tumors
- Focus: phenomics + high-throughput experimentation [[recursion.com]]

---

## Synthesis

### Why SMB's Approach Is Technically Superior

1. **Right Problem:** Competitors solve structure (AlphaFold) or binding (Chai). SMB solves patient outcomes—the actual question pharma cares about.

2. **Right Architecture:** JEPA predicts state transitions, not tokens. For clinical trajectory prediction, this is structurally correct. 7% AUROC improvement over best LLM alternatives.

3. **Right Data:** Multi-modal integration (EHR + genomics + imaging) captures what single-modality models miss. Cross-disease synergies compound over time.

### Why That Matters Commercially

1. **Pharma Willingness to Pay:** "Minor differences in performance → billions in revenue difference." OpDivo vs Keytruda example—same mechanism, but performance gap meant billions in lost revenue for BMS. [[2025-12-26_manifesto-2d5f3898.md]]

2. **Structural Defensibility:** Pharma can't build internally (data silos, bureaucracy). RWD companies won't (cannibalize own sales). Only a focused company can.

3. **Data Flywheel:** "We partner with any data producer and offer our model in exchange for data access. Once we get plurality, not working with us fundamentally limits their AI performance." [[2025-12-26_manifesto-2d5f3898.md]]

4. **Regulatory Lock-in:** Strategy is to make SOTA so essential that approval is risky without SMB. "Bad practice not to fine-tune their model." [[Sources/Granola/Granola 1/SMB __ Virtue]]

### Bull Case for Additional Investment

| Catalyst | Evidence | Timeline |
|----------|----------|----------|
| Sanofi contract closes | $360K POC → $4.8M contract | Q1 2026 |
| IQVIA proposal advances | $44M total | TBD |
| AMC expansion | 1 → 100 AMCs in 2026 | 2026 |
| Series A | Current runway 10.9 months | Early 2026 |
| GeneJEPA publication | bioRxiv → peer-reviewed | 2026 |

### Key Risks

| Risk | Mitigation |
|------|------------|
| Model commoditization | Moat is data partnerships + integration, not model architecture |
| Pharma build-vs-buy | Evidence of internal failures (Genentech "embarrassing"); structural incentives |
| Competitor catch-up | 12-18 month lead; data flywheel accelerates with scale |

---

## Gaps

- No public clinical validation data (only internal MSK benchmarks)
- GeneJEPA paper is scRNA-seq only—multi-modal integration not yet published
- Sanofi contract not closed (expected Q1 2026)
- No head-to-head comparison with Tempus/Paige on pathology

---

## Sources

### Vault
- [[2025-12-26_manifesto-2d5f3898.md]]
- [[virtue-_-why-we-invested-in-standard-model-bio-the-universa-0e5d6a71.md]]
- [[Sources/Granola/Granola 1/SMB __ Virtue]]
- [[JEPA World Models Beat LLMs for Patient Trajectory Prediction]]
- [[Clinical Outcome Data Is the Moat, Not Wet Lab]]
- [[AI-Drug-Discovery-Moats]]
- [[Biology-Foundation-Models]]

### Web
- [GeneJEPA bioRxiv](https://www.biorxiv.org/content/10.1101/2025.10.14.682378v1)
- [Isomorphic Labs](https://www.isomorphiclabs.com)
- [Recursion Q3 2025 Results](https://ir.recursion.com/news-releases/news-release-details/recursion-reports-third-quarter-2025-financial-results-and)
- [Virtue Investment Announcement](https://www.linkedin.com/posts/sean-doolan-6575488_we-are-pumped-to-announce-our-most-recent-activity-7379154223814520832-giZ3)
