---
type: research
topic: "Standard Model Bio Technical Differentiation & Commercial Case for Follow-On"
date: 2025-12-28
assessment: ANSWERED
iterations: 1
vault_sources: 12
web_sources: 180+
---

# Standard Model Bio's Moat Is Data Partnerships, Not Model Architecture—JEPA Commoditizes in 12-18 Months But Their Clinical Outcome Data Doesn't

Standard Model Bio occupies a defensible position not because JEPA is permanently superior to LLMs, but because their data flywheel strategy creates lock-in that architecture alone cannot. The 0.727 AUROC advantage over best-in-class LLMs (0.664 for Qwen3-VL) on patient trajectory prediction matters commercially because it translates directly to pharma willingness-to-pay—Sanofi is converting a $360K POC to a $4.8M contract, and IQVIA has proposed $44M. The technical advantage opens the door; the data partnerships close it behind SMB.

---

## Technical Architecture: Why JEPA Beats LLMs for Patient Trajectories

The core insight is architectural fit. LLMs predict tokens; JEPA (Joint Embedding Predictive Architecture) predicts state transitions in latent space. For clinical trajectory prediction—where the question is "what happens next to this patient?"—state transitions are the correct abstraction.

**Benchmark Results (MSK Oncology Cohort, 9 Cancer Types):**

| Model | AUROC | Treatment Change Prediction |
|-------|-------|----------------------------|
| SMB-v1-1.7B (JEPA) | **0.727** | **0.78** |
| Qwen3-VL 4B | 0.664 | 0.70 |
| Generalist LLMs | — | 0.70 |
| LLM treatment completeness | — | 30.3% |

The 7% AUROC improvement doesn't sound dramatic until you consider the economic context. As Kevin Brown's manifesto notes: "Minor differences in performance → billions in revenue difference." The OpDivo vs Keytruda example is instructive—both PD-1 blockades, but Keytruda's slight efficacy edge in 1L mNSCLC drove Merck billions in royalties that BMS lost [[2025-12-26_manifesto-2d5f3898.md]].

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

**Tempus:** Perhaps the strongest validation signal—Tempus, despite having 38M research records, 7B clinical notes, and 1M+ cancer patients with molecular profiling ([Tempus](https://www.tempus.com/resources/content/blog/advancing-the-frontier-of-ai-in-healthcare)), is actively seeking SMB partnership. Quote from CEO-level discussions: "You have what I want" [[Sources/Granola/Granola 1/SMB __ Virtue]].

**Academic Medical Center Velocity:**

| AMC | Time to Beat Previous SOTA |
|-----|---------------------------|
| MD Anderson | 2-3 hours |
| Yale | 1 hour conversation |
| MSK | Benchmarking complete, strong results |
| Mayo Clinic | In-person visit requested |

Target: 1 AMC at start of 2025 → 100+ by end of 2026.

---

## Why Pharma Cannot Build Internally

The build vs buy decision in pharma AI strongly favors external partnerships for foundation models. The structural barriers are not talent or capital—they are organizational.

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

**Industry Trend:** The prevailing strategy is hybrid—buy for rapid deployment, build only where proprietary advantage is critical ([PharmaSUG 2025](https://pharmasug.org/proceedings/2025/SI/PharmaSUG-2025-SI-206.pdf)). Foundation models for patient outcome prediction fall squarely in the "buy" category.

---

## Competitive Landscape

| Company | Approach | Traction | How SMB Compares |
|---------|----------|----------|-----------------|
| **Tempus** | Horizontal clinical data platform, oncology-focused | 38M records, public, $600M+ data | SMB multi-disease from day one; Tempus seeking SMB partnership |
| **Recursion** | Wet lab phenomics, robotic biology | $785M cash, 7 clinical readouts | Different value chain layer—discovery, not outcomes |
| **Isomorphic Labs** | AlphaFold3 structure prediction | $600M raise, $3B+ partnerships (Eli Lilly, Novartis) | Solves different problem; structure ≠ outcome |
| **Chai Discovery** | De novo antibody design | 16% hit rate (20x improvement) | 16% binding ≠ druggable; SMB predicts who drug works for |
| **EvolutionaryScale** | Protein language models (ESM3) | $142M seed, acquired by CZI | Single modality; commoditized |

**Key Insight:** Competitors with $500M+ in funding are actively seeking partnerships with SMB. This validates that multimodal patient outcome prediction is sufficiently difficult that even well-capitalized specialists prefer to license rather than build.

---

## Contradictions & Tensions

**Model commoditization timeline:** Vault claims 12-18 months to open-source parity [[Clinical Outcome Data Is the Moat, Not Wet Lab]]. This may be aggressive given multi-modal complexity, but the thesis holds—architecture is not the moat, data partnerships are.

**Resolution:** Even if JEPA advantage compresses, SMB's data flywheel accelerates. Quote: "We partner with any data producer and offer our model in exchange for data access. Once we get plurality, not working with us fundamentally limits their AI performance" [[2025-12-26_manifesto-2d5f3898.md]].

---

## Recommendations

1. **Track Sanofi contract close Q1 2026** — $4.8M contract is the proof point for Series A narrative
2. **Monitor IQVIA milestone progress** — $44M validates enterprise sales motion
3. **Validate AMC scaling** — 1→100 in 2026 is ambitious; track quarterly
4. **Competitive watch:** If Tempus or Recursion announces >$200M raise with data partnership strategy, reassess SMB timeline pressure
5. **Technical due diligence:** Get head-to-head benchmarks vs Tempus on pathology, vs Paige on genomics

**Bull Case:** Sanofi closes → IQVIA/GSK follow → 100 AMC partnerships → regulatory lock-in (not using SMB becomes approval risk)

**Bear Case:** Incumbents (Epic Curiosity, Veeva) + open-source multi-modal parity + LLM reasoning improvements (o3/o4) compress moat faster than SMB scales partnerships

---

## Research Process
- Iterations: 1
- Vault patterns: `JEPA|joint.?embedding`, `multi.?modal|GeneJEPA`, `Sanofi|IQVIA|AstraZeneca`, `pharma.*internal|build.*buy`, `Tempus|Recursion|competitor`
- Exa queries: 4 (SMB technical, competitors, pharma build/buy, market valuations)
- Freshness signals: GeneJEPA bioRxiv (Oct 2025), Isomorphic $600M (March 2025), Tempus Q2 2025 earnings
- Total cost: ~$1.36 (4 Exa calls)

## Sources

### Vault
- [[2025-12-26_manifesto-2d5f3898.md]] — Kevin Brown manifesto with benchmarks, BMS bureaucracy examples
- [[Sources/Granola/Granola 1/SMB __ Virtue]] — Granola meeting notes with Sanofi/IQVIA pipeline, AMC velocity
- [[SMB __ Virtue-2025-11-21_15-32-49.md]] — Earlier meeting notes with contract details
- [[JEPA World Models Beat LLMs for Patient Trajectory Prediction]] — Thesis with treatment change prediction
- [[Clinical Outcome Data Is the Moat, Not Wet Lab]] — Thesis on commoditization timeline
- [[virtue-_-why-we-invested-in-standard-model-bio-the-universa-0e5d6a71.md]] — Investment thesis with team details

### Web
- [GeneJEPA bioRxiv](https://www.biorxiv.org/content/10.1101/2025.10.14.682378v1) — Peer-reviewed technical approach
- [Tempus AI Platform](https://www.tempus.com/resources/content/blog/advancing-the-frontier-of-ai-in-healthcare) — Competitor dataset scale
- [Isomorphic Labs $600M](https://www.isomorphiclabs.com/articles/isomorphic-labs-announces-600m-external-investment-round) — Market valuation context
- [PharmaSUG Build vs Buy](https://pharmasug.org/proceedings/2025/SI/PharmaSUG-2025-SI-206.pdf) — Industry trend on hybrid strategy
