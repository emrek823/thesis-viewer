---
type: research
topic: "Standard Model Bio Technical Differentiation & Commercial Case for Follow-On"
date: 2025-12-28
assessment: ANSWERED
iterations: 1
vault_sources: 12
web_sources: 15
---

# Standard Model Bio's Moat Is Data Partnerships, Not Model Architecture—JEPA Commoditizes in 12-18 Months But Their Clinical Outcome Data Doesn't

Standard Model Bio occupies a defensible position not because JEPA is permanently superior to LLMs, but because their data flywheel strategy creates lock-in that architecture alone cannot. The 0.727 AUROC advantage over best-in-class LLMs (0.664 for Qwen3-VL) on patient trajectory prediction matters commercially because it translates directly to pharma willingness-to-pay—Sanofi is converting a $360K POC to a $4.8M contract, and IQVIA has proposed $44M. The technical advantage opens the door; the data partnerships close it behind SMB.

---

## Technical Architecture: Why JEPA Beats LLMs for Patient Trajectories

The core insight is architectural fit. LLMs predict tokens; JEPA (Joint Embedding Predictive Architecture) predicts state transitions in latent space. For clinical trajectory prediction—where the question is "what happens next to this patient?"—state transitions are the correct abstraction.

JEPA operates as a **predictive world model** that "takes pairs of related inputs and trains to predict the abstract representation of the next frame" based on current observations—encoding inputs into abstract embeddings that capture "only essential features and omit irrelevant details" rather than working with tokenized sequences ([TuringPost](https://www.turingpost.com/p/jepa)).

**Benchmark Results (MSK Oncology Cohort, 9 Cancer Types):**

| Model | AUROC | Treatment Change Prediction |
|-------|-------|----------------------------|
| SMB-v1-1.7B (JEPA) | **0.727** | **0.78** |
| Qwen3-VL 4B | 0.664 | 0.70 |
| Generalist LLMs | — | 0.70 |
| LLM treatment completeness | — | 30.3% |

[[2025-12-26_manifesto-2d5f3898.md]]

The 6.3% AUROC improvement doesn't sound dramatic until you consider the economic context. As Kevin Brown's manifesto notes: "Minor differences in performance → billions in revenue difference." The OpDivo vs Keytruda example is instructive—both PD-1 blockades, but Keytruda's slight efficacy edge in 1L mNSCLC drove Merck billions in royalties that BMS lost [[2025-12-26_manifesto-2d5f3898.md]].

Standard Model Bio's architecture uses hybrid optimization combining Supervised Fine-Tuning with JEPA objectives to prevent training collapse, structuring data as (Pre-State + Intervention) → (Post-State) to distinguish disease natural history from treatment-specific effects ([Standard Model Blog](https://blog.standardmodel.bio/p/the-patient-is-not-a-document-moving)).

**Multi-Modal Integration Is The Real Technical Moat:**

Single-modality foundation models commoditize in 12-18 months—AlphaFold3 (structure prediction) is now open-source, Chai-2 and RFDiffusion (binding prediction) are MIT-licensed [[Clinical Outcome Data Is the Moat, Not Wet Lab]]. SMB's defensibility comes from integrating modalities that require pharma/AMC partnerships to access:

- Patient notes + longitudinal EHR
- Genomics (whole exome, RNA-seq)
- Digital pathology
- Radiology (1M oncology CTs acquired from Gradient for $150K)

This integration is not replicable by downloading weights from Hugging Face.

---

## Commercial Validation: Pharma Is Paying, Not Just Piloting

**Sanofi:** POC ($360K) progressing to full contract ($4.8M) expected March-April 2026. Sanofi's ambition is aggressive—they want "½ of Phase I to be in silico" with no actual control arms. This isn't incremental AI adoption; it's structural change in how trials are designed [[SMB __ Virtue-2025-11-21_15-32-49.md]].

**IQVIA:** $44M proposal via Nvidia introduction, milestone-based structure starting at $1M [[Sources/Granola/Granola 1/SMB __ Virtue]].

**AstraZeneca:** At NDA stage with weekly meetings [[SMB __ Virtue-2025-11-21_15-32-49.md]].

**Tempus:** Perhaps the strongest validation signal—Tempus, despite having 38M research records, 7B clinical notes, and 1M+ cancer patients with molecular profiling ([Tempus](https://www.tempus.com/resources/content/blog/advancing-the-frontier-of-ai-in-healthcare/)), is actively seeking SMB partnership. Quote from CEO-level discussions: "You have what I want" [[Sources/Granola/Granola 1/SMB __ Virtue]].

**Academic Medical Center Velocity:**

| AMC | Time to Beat Previous SOTA |
|-----|---------------------------|
| MD Anderson | 2-3 hours |
| Yale | 1 hour conversation |
| MSK | Benchmarking complete, strong results |
| Mayo Clinic | In-person visit requested |

Target: 1 AMC at start of 2025 → 100+ by end of 2026 [[Sources/Granola/Granola 1/SMB __ Virtue]].

---

## Why Pharma Cannot Build Internally

The build vs buy decision in pharma AI strongly favors external partnerships for foundation models. The structural barriers are not talent or capital—they are organizational.

**Industry Trends:** 95% of pharmaceutical companies now invest in AI, with spending projected to grow from $4B (2025) to $25B (2030) ([FounderNest](https://www.foundernest.com/insights/pharma-at-an-inflection-point)). Yet only 30% of companies plan to stay fully "build-only"—the majority shifting toward buy or partner strategies ([Bain](https://www.bain.com/about/media-center/press-releases/2024/40-of-pharma-executives-are-baking-expected-savings-from-generative-ai-into-2024-budgets/)).

PharmaSUG research recommends a **hybrid approach**: "Build internal capabilities for high-value, proprietary processes central to competitive advantage; buy established solutions for standardized, non-differentiating functions" ([PharmaSUG 2025](https://pharmasug.org/proceedings/2025/SI/PharmaSUG-2025-SI-206.pdf)). Foundation models for patient outcome prediction fall squarely in the "buy" category.

**Data Fragmentation:**
- Digital pathology + genomics: Research/Drug Discovery silo
- Radiology + trial data (outcomes): Drug Development silo
- RWD/EMR/claims: Separate department
- "Data access weaponized to retain departmental clout" [[2025-12-26_manifesto-2d5f3898.md]]

**IT Bureaucracy:**
- Weights & Biases installation at BMS: **1 year** (contract processing alone)
- Same installation at Adobe: **<5 days** (including negotiation)
- When asked about foundation models, BMS CTO responded: "He asked if I meant MLOps" [[2025-12-26_manifesto-2d5f3898.md]]

**Internal AI Track Record:**
- Genentech internal AI efforts described as "embarrassing" by recent departure [[Sources/Granola/Granola 1/SMB __ Virtue]]
- AI talent from hyperscalers characterizes pharma work as "not just a waste of time, but a waste of life"

---

## Competitive Landscape

| Company | Approach | Traction | How SMB Compares |
|---------|----------|----------|------------------|
| **Tempus** | Horizontal clinical data platform | $693M revenue (2024), 38M records, 50% US oncologists | SMB multi-disease from day one; Tempus seeking SMB partnership |
| **Recursion** | Wet lab phenomics, robotic biology | $785M cash, 7 clinical readouts | Different value chain layer—discovery, not outcomes |
| **Isomorphic Labs** | AlphaFold3 structure prediction | $600M raise, $3B+ partnerships | Solves different problem; structure ≠ outcome |
| **Bioptimus** | H-Optimus pathology foundation model | $76M raised, 2B images trained | Single modality (pathology); SMB is multimodal |
| **IBM BMFM** | Biomedical foundation models | 1B+ molecules, open-source | Discovery-focused; no clinical outcome data |

([Tempus Deep Dive](https://www.bbae.com/blog/tempus-ai-tem-a-deep-dive/), [Bioptimus](https://www.bioptimus.com/), [IBM Research](https://research.ibm.com/projects/biomedical-foundation-models))

**Key Insight:** Competitors with $500M+ in funding are actively seeking partnerships with SMB. This validates that multimodal patient outcome prediction is sufficiently difficult that even well-capitalized specialists prefer to license rather than build.

**GSK-Tempus Deal Context:** GSK committed $70M to Tempus for a three-year oncology collaboration, gaining access to de-identified patient data for trial design and target identification ([GSK Press Release](https://www.gsk.com/en-gb/media/press-releases/gsk-announces-expanded-collaboration-with-tempus-in-precision-medicine-to-accelerate-rd/)). This validates pharma willingness-to-pay for clinical data platforms—and SMB is positioning for similar deals at earlier stage.

---

## Market Context

The AI in pharma market is valued at $1.94B (2025) and projected to reach $16.49B by 2034 (27% CAGR) ([Coherent Solutions](https://www.coherentsolutions.com/insights/artificial-intelligence-in-pharmaceuticals-and-biotechnology-current-trends-and-innovations)).

Key adoption metrics:
- **81% of pharma organizations** deploy AI across R&D programs
- **Phase I success rate (AI-discovered drugs):** 80-90% vs 40-65% traditional
- **Development timeline acceleration:** 40-60% faster
- **AI-driven market share by 2030:** 45-50% of new drug discoveries

([AllAboutAI Drug Development Stats](https://www.allaboutai.com/resources/ai-statistics/drug-development/))

---

## Recommendations

1. **Track Sanofi contract close Q1 2026** — $4.8M contract is the proof point for Series A narrative
2. **Monitor IQVIA milestone progress** — $44M validates enterprise sales motion
3. **Validate AMC scaling** — 1→100 in 2026 is ambitious; track quarterly
4. **Competitive watch:** If Tempus or Recursion announces >$200M raise with data partnership strategy, reassess SMB timeline pressure
5. **Technical due diligence:** Get head-to-head benchmarks vs Tempus on pathology, vs Epic Curiosity on EHR

**Bull Case:** Sanofi closes → IQVIA/GSK follow → 100 AMC partnerships → regulatory lock-in (not using SMB becomes approval risk)

**Bear Case:** Incumbents (Epic Curiosity, Veeva) + open-source multi-modal parity + LLM reasoning improvements (o3/o4) compress moat faster than SMB scales partnerships

---

## Research Process
- Iterations: 1
- Vault patterns: `JEPA|joint.?embedding`, `multi.?modal|GeneJEPA`, `Sanofi|IQVIA|AstraZeneca`, `pharma.*internal|build.*buy`, `Tempus|Recursion|competitor`
- Web queries: 4 (`Standard Model Bio JEPA 2024`, `Tempus AI clinical platform`, `pharma AI build vs buy 2024`, `biomedical foundation model funding 2025`)
- Web sources fetched: 15
- Freshness signals: Tempus Q4 2024 revenue ($693M), GSK-Tempus deal active, Bioptimus $76M (2024)
- Total cost: $0

## Sources

### Vault
- [[2025-12-26_manifesto-2d5f3898.md]] — Kevin Brown manifesto with benchmarks, BMS bureaucracy examples
- [[Sources/Granola/Granola 1/SMB __ Virtue]] — Granola meeting notes with Sanofi/IQVIA pipeline, AMC velocity
- [[SMB __ Virtue-2025-11-21_15-32-49.md]] — Earlier meeting notes with contract details
- [[JEPA World Models Beat LLMs for Patient Trajectory Prediction]] — Thesis with treatment change prediction
- [[Clinical Outcome Data Is the Moat, Not Wet Lab]] — Thesis on commoditization timeline
- [[virtue-_-why-we-invested-in-standard-model-bio-the-universa-0e5d6a71.md]] — Investment thesis with team details

### Web
- [Standard Model Blog - Patient is Not a Document](https://blog.standardmodel.bio/p/the-patient-is-not-a-document-moving) — JEPA architecture deep dive
- [Tempus AI Healthcare Blog](https://www.tempus.com/resources/content/blog/advancing-the-frontier-of-ai-in-healthcare/) — Data scale: 38M records, 7B notes
- [GSK-Tempus Partnership](https://www.gsk.com/en-gb/media/press-releases/gsk-announces-expanded-collaboration-with-tempus-in-precision-medicine-to-accelerate-rd/) — $70M deal terms
- [Bain Pharma AI Survey](https://www.bain.com/about/media-center/press-releases/2024/40-of-pharma-executives-are-baking-expected-savings-from-generative-ai-into-2024-budgets/) — 40% baking AI savings into budgets
- [PharmaSUG Build vs Buy](https://pharmasug.org/proceedings/2025/SI/PharmaSUG-2025-SI-206.pdf) — Hybrid approach recommendation
- [Bioptimus](https://www.bioptimus.com/) — Competitor: $76M, 2B images
- [V-JEPA Meta](https://ai.meta.com/vjepa/) — Architecture validation
- [Tempus Deep Dive](https://www.bbae.com/blog/tempus-ai-tem-a-deep-dive/) — $693M revenue, 50% oncologists
- [Verix Build vs Buy](https://verix.com/build-buy-or-partner-choosing-the-right-path-for-ai-driven-commercial-pharma-operations/) — Partner approach recommended
- [FounderNest Pharma Trends](https://www.foundernest.com/insights/pharma-at-an-inflection-point) — 95% pharma investing in AI
- [AI in Pharma Market](https://www.coherentsolutions.com/insights/artificial-intelligence-in-pharmaceuticals-and-biotechnology-current-trends-and-innovations) — $16.49B by 2034
- [AI Drug Development Stats](https://www.allaboutai.com/resources/ai-statistics/drug-development/) — 81% deploy AI in R&D
- [Tempus One GenAI](https://www.tempus.com/news/tempus-one-introduces-new-genai-capabilities-to-query-millions-of-unstructured-documents-for-research-and-clinical-care/) — LLM capabilities
- [IBM Biomedical Foundation Models](https://research.ibm.com/projects/biomedical-foundation-models) — 1B+ molecules
- [JEPA Architecture Explainer](https://www.turingpost.com/p/jepa) — Technical differentiation
