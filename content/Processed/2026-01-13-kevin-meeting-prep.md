---
type: meeting-prep
company: Standard Model Bio
date: 2026-01-13
meeting_with: Kevin Brown (CEO)
---

# Kevin Meeting Prep — January 2026

Three questions to validate during conversation.

---

## 0. Business Model Shift: Why Model Licensing Changes Everything

### The January 2026 Paradigm Shift

Three deals in one week validated that pharma will pay for **models, not molecules**:

| Deal | Structure | Implication |
|------|-----------|-------------|
| **GSK-Noetik** | $50M + 5-year subscription | Pay for virtual cell models |
| **Chai-Lilly** | Platform deployment + exclusive model | Pay for capabilities |
| **Boltz-Pfizer** | Exclusive fine-tuning on Pfizer data | Pay for customization |

**The valuation arbitrage:**
- Same $50M ARR as biotech: $150-250M valuation (3-5x)
- Same $50M ARR as software: $500-750M valuation (10-15x)
- Chai raised at $1.3B on zero approved drugs — that's software economics

### How SMB Compares to Chai and Noetik

|  | Chai | Noetik | SMB |
|--|------|--------|-----|
| **Focus** | Molecular structure | Cellular/spatial (TME) | Patient outcomes |
| **Data** | Lab data (proteins) | Single-cell omics | EHR + genomics + imaging |
| **Use case** | Drug design | Target discovery | Trial acceleration |
| **Architecture** | Diffusion | Transformer | JEPA world model |
| **Geographic moat** | None | Some | Strong (clinical data regional) |
| **First deal** | Lilly (platform) | GSK ($50M) | Sanofi ($4.8M pending) |

### Why SMB's Clinical Focus is Differentiated

**Chai and Noetik solve preclinical problems.** They predict molecular structure and cellular behavior. But:
- Phase II failure rate still 71% (AI hasn't changed this)
- Pharma's biggest cost is clinical trials ($1-2B per approved drug)
- Enrollment delays cost ~$15M per day for a successful asset

**SMB solves clinical problems.** Their JEPA architecture predicts:
- Which patients will respond to treatment (enrollment optimization)
- When patients will become trial-eligible (site selection)
- Treatment change trajectories (adaptive trial design)

**The business model logic:**
- Chai/Noetik: "We'll help you find better drug candidates"
- SMB: "We'll help you run faster, cheaper trials with the candidates you already have"

Pharma can always find more drug candidates. They can't always run trials faster. SMB's clinical focus means:
1. **Faster time-to-value** — trials run in months, not years
2. **Immediate ROI** — enrollment acceleration has measurable $$ impact
3. **Less clinical risk** — SMB doesn't bet on any specific drug working

### What This Means for Kevin Conversation

**Question to probe:** "Chai and Noetik both just signed $50M+ deals. You're different because you're clinical, not preclinical. But does pharma understand the distinction? Are you getting positioned correctly in BD conversations, or lumped with 'AI drug discovery'?"

**Question to probe:** "Sanofi is paying for clinical trial acceleration. Is that a scalable use case — can you sell the same thing to 10 pharmas? Or is each deal bespoke?"

**Question to probe:** "Noetik got GSK $50M on virtual cell models. What's the SMB equivalent anchor deal? What would a $50M SMB deal look like?"

---

## 1. What Have They Proven with Tech? Is JEPA the Future?

### JEPA Performance Validated at MSK

**Core proof point:** JEPA outperforms LLMs exactly where it should — on dynamic/trajectory prediction tasks.

| Task Type | LLM/Baseline | JEPA | Lift |
|-----------|--------------|------|------|
| Static (Mortality) | 0.68 | 0.70 | +3% |
| **Dynamic (Treatment Change)** | 0.66 | **0.78** | **+18%** |

SMB validated against MSK oncology data (MSK-CHORD benchmark):
- Pancreatic Stage IV: Prior SOTA 0.66 → NEP 0.68 (+3.5%)
- Prostate I-III: 0.80 → 0.86 (+7.5%)
- CRC I-III: 0.77 → 0.81 (+5.2%)

**GenVarFormer (molecular scale):** 26x improvement over baselines on mutation→expression prediction (r=0.219 vs 0.0081). First model to generalize to unseen genes AND unseen samples simultaneously.

### Why JEPA Over LLMs?

The architectural thesis: **"Language is NOT a sufficient proxy for disease biology."**

- LLMs predict next token; clinicians need trajectory predictions
- GPT-4 achieves just 30.3% completeness on oncology treatment decisions
- Nature Methods 2025: "None of the deep learning models was able to consistently outperform mean prediction or linear model" on gene perturbation — scGPT and Geneformer perform WORSE than simple baselines

**JEPA trains on (Pre-State + Intervention) → (Post-State)** — forces the model to learn causal laws of tumor progression and therapy response.

### External Validation

Yann LeCun just raised ~$500M at $3.5B for AMI Labs — doubling down on JEPA as path to AGI. SMB is first mover applying this to patient modeling. If JEPA works for biology, the moat is architectural (hard to replicate).

### Technical Risk to Probe

Pure JEPA suffers from training collapse (constant outputs). SMB uses hybrid SFT+JEPA optimization — SFT anchors to clinical outcomes, JEPA learns dynamics. **Ask Kevin:** How stable is this at scale? What's the failure mode if it doesn't work?

---

## 2. Why is the Data Strategy Correct?

### A) Why Data Improves the Model

**The scaling thesis:** Whoever trains on the most human patient data wins.

Noetik limited to 1K NSCLC patients. SMB targets broad multi-modal (EHR + genomics + imaging + pathology) across institutions → "plurality of data" where not working with SMB limits performance.

**Kevin's evidence from Jan 8 call:**

> "1B to 8B parameter model: saturates on mortality prediction. But significant improvement on rare diseases/complex conditions (sarcomas). Better toxic adverse event prediction at larger scale."

This is the key insight: **scale doesn't help on easy problems (mortality), it helps on hard problems (rare diseases, toxicity).** That's exactly where pharma needs help — common diseases are well-studied, rare/complex conditions are where trials fail.

**Other empirical evidence:**
- Label efficiency: With only 100 samples, NEP matches LLM2Vec with 20x more data
- GenVarFormer patient embeddings outperform ground-truth gene expression for survival (0.71 vs 0.57 C-index)

**Capital deployment:** Aggressively acquiring datasets — 1M oncology CTs from Gradient for $150K (10x volume = 10x price, economies of scale).

### B) Why Working with AMCs Leads to Data

**6 AMC partnerships in progress:**

- **MSK** — validation complete, benchmarks published (core pathology dataset)
- **MD Anderson** — 3 active projects (cardiotoxicity prediction)
- **Yale** — active collaboration (EHR + imaging)
- **UCSD** — 2 projects (700K EHRs + images)
- **Mount Sinai** — expanding with Ben Glicksberg (whole exome sequencing)
- **Mayo** — in-person visit requested

**The flywheel:** Provide value to AMCs (free models, SBIR/ARPA collabs, publications) → get data → train better weights → win pharma deals → fund more data acquisition.

**Onboarding velocity improving:**
- MD Anderson: 2-3 hours to surpass prior SOTA (was several calls initially)
- Yale: 1 hour conversation
- Target: 2-3 minutes with install script for smaller models

### Risk to Probe

Are these partnerships exclusive? If MSK can also work with Tempus, Bioptimus, or Google — who owns the trained model weights? What's the renewal structure?

---

## 3. Recent BD Progress

### Sanofi (Primary Contract) — 98% Confidence

- **Signed:** €360K pilot completed
- **Pending:** $4.8M expanded deal, expected March-April 2026
- Use case: Clinical trial acceleration (enrollment, site selection)
- BD team trying to inject but limited influence
- Galen's budget approved for larger deal

### JPM Week Pipeline (Jan 2026)

**Tempus** (highest priority)
- Meeting with Eric Lefoski + Ryan Fukushima (Pathos co-founder)
- Tempus behind on multimodal despite good resourcing — seeking SMB as foundation model partner

**BMS**
- Digital Health team (reports to Greg Meyer CTO)
- CMO recreated SMB multimodal figure from town hall
- $10M data deal signed but foundation model NOT in SOW — Tempus redlined it. Gap for SMB.

**AstraZeneca** — meeting scheduled, complex (close relationship with Tempus)

**GSK** — meeting with Kim Branson next week

**IQVIA** — $44M proposal submitted via Nvidia intro. Milestone structure: $1M first, larger subsequent.

**UK NHS** — pilot proposed at Oxford with UK Minister of Health (ex-Perspectum). Timeline ~2 quarters.

### Investor Meetings (Series A Prep)

JPM meetings with: Lux, GV, North Pond, Pioneer, Bessemer, Sunflower

- Bessemer conversation positive — target 10-20% dilution (prefer lower end)
- Sunflower flying to SF specifically for meeting (front-running JPM)
- GV confirmed, Kleiner Perkins rescheduled

### Key Signal from Market

Kevin's read on market: "Dam breaking, fast followers coming." GSK-Noetik ($50M), Chai-Lilly, Boltz-Pfizer all prove pharma paying real money for foundation model access.

Internal Virtue view: "We could easily put another $1-2M out of core into SMB right now and risk-reward still fine."

---

## Questions for Kevin

### Tech
1. How stable is hybrid SFT+JEPA optimization at scale? What happens if JEPA component diverges?
2. MSK validation is strong — can you replicate at 2+ additional cancer centers by mid-2026?
3. Epic Curiosity launches Feb 2026 with 100B+ events — how do you differentiate?

### Data
4. Are AMC partnerships exclusive? Who owns trained model weights?
5. What's the threshold for "plurality of data" — at what point does not working with SMB limit performance?
6. Federated learning infrastructure — how far along is it?

### BD
7. Tempus meeting is highest priority — what's the play? Partner or competitor?
8. BMS angle: Tempus redlined foundation model from $10M data deal. Can you fill that gap?
9. What's backup plan if Sanofi slips? 10.9 months runway.

---

## Bottom Line

**Bull case:** Only multi-scale JEPA patient model in market. SOTA results validated at MSK. Sanofi $4.8M imminent. Market window opening (GSK-Noetik, Chai-Lilly). Yann LeCun $500M AMI raise validates JEPA bet.

**Bear case:** Epic already building with 300M-patient data moat. AMC partnerships likely non-exclusive. JEPA training instability acknowledged (hybrid patch). 10.9 months runway — Series A urgency if Sanofi slips.

**Key inflection:** Sanofi contract closure (Mar-Apr 2026). If it closes, risk-reward asymmetric. If it slips, runway becomes critical.
