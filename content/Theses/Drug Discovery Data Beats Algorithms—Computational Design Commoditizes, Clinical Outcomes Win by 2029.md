![[Images/clinical-outcome-data-becomes-the-drug-discovery-moat.png]]

## 1-2 Sentence Summary

**AI drug discovery moats** come from proprietary data (not model architecture) because: (1) computational design commoditizes (RFdiffusion3 open-source, OpenFold3 matches AlphaFold3), (2) wet lab experimental data creates near-term moats (Recursion 65PB), and (3) clinical outcome data becomes the ultimate defensible asset (Tempus projecting $1.6B revenue by 2026, Datavant 300% trial tokenization growth) → data platforms win; algorithm-only companies become commodity.

---

## Investment Take

**Consensus believes:** Drug discovery AI moats come from model architecture, proprietary algorithms, or the "best" foundation models. Investors chase companies with the largest training datasets of molecular structures or the most sophisticated computational approaches.

**Actually:** The entire computational layer is commoditizing faster than expected:

1. **Design becomes software.** RFdiffusion3 open-source, designs DNA binders and advanced enzymes. OpenFold3 released with preview matching AlphaFold3 performance, already adopted by Novo Nordisk, Outpace Bio, Bayer Crop Science. Fewer than 100 designs need testing to find a successful catalyst, down from tens of thousands. The Ovo ecosystem provides end-to-end open-source protein design pipelines.

2. **Wet lab data creates moats (for now).** Companies that generate proprietary experimental data at scale—Recursion (65PB phenomics), Insitro (iPSC screens)—own the data that computational-only companies can't replicate. The flywheel: ML predictions → experiments → better models.

3. **Clinical outcome data is the ultimate moat.** Population-scale validation in real humans (EHR-linked biobanks, Phase II/III results, RWE) is the scarcest asset. PROTON validated in n=610,524 patients (HR=0.63, p<10^-7). 9/11 mutation-effect models perform worse than random on human population data. Tempus projecting $1.6B revenue by 2026 from combined genomics + data platform.

**The hierarchy:** Algorithms < Wet Lab Data < Clinical Outcome Data

**In 5-10 years:**
- **Winners:** Clinical outcome data platforms (Tempus: projecting $1.6B by 2026; Datavant: 300% trial tokenization growth since 2022, 270 trials by end 2024). Wet lab-integrated companies (Recursion, Insitro) that generate proprietary experimental data. Compute infrastructure (NVIDIA, cloud).
- **Losers:** AI drug discovery companies differentiating on model architecture alone. Pure computational startups without data generation. Service CROs without ML integration.
- **Market structure:** Drug discovery becomes a compute problem with data moats. Health data networks consolidate into winner-take-most connectivity layers. Clinical outcome data licenses become the scarce asset.

**The caveat: AI drugs still haven't proven out clinically.** Despite $17B+ invested since 2019, neither Isomorphic Labs nor any competitor has reached large-scale clinical trials. AI-discovered drugs show 80-90% Phase I success (vs 40-65% baseline) but Phase II success remains at ~40%—comparable to historic industry averages. The divergence between success in early-stage discovery and stubborn challenges of late-stage clinical translation defines the current moment. "AI can predict chemistry, but biology remains maddeningly complex."

**How this evolved:**
- *2025-12-20:* Chai-2 proved computational methods solve binding-to-druggable gap
- *2025-12-21:* PROTON validated in 610K patients—moat shifted to clinical outcome data
- *2025-12-27:* OpenMidnight at $1.6K proved foundation models commoditize
- *2025-12-29:* Recursion REC-4881 positive Phase 1b/2—first major clinical validation
- *2026-01-07:* **MERGED** — Three theses (Wet Lab Flywheels, Protein Design Software, Clinical Outcome Data) combined under unified "data beats algorithms" frame
- *2026-01-09:* **MODEL LICENSING PARADIGM** — GSK-Noetik ($50M model license) confirms pharma paying for models not drug assets
- *2026-01-26:* **REBUILD** — OpenFold3 preview released matching AlphaFold3, adopted by Novo Nordisk. RFdiffusion3 open-sourced. Tempus projecting $1.6B by 2026. AI drug Phase II success rate still ~40% (historic average). $17B+ invested, zero approvals.

---

## Bull Case

### Computational Commoditization
- [x] **Protein design becomes software.** RFdiffusion3 open-sourced, designs DNA binders and advanced enzymes with all-atom resolution. 37/41 enzyme benchmarks. <100 designs need testing vs tens of thousands. ([[2025-12-29-rfdiffusion3-protein-design-at-all-atom-resolution]])
- [x] **OpenFold3 matches AlphaFold3.** OpenFold3 preview released, close to matching AlphaFold3 performance. Trained on 300K+ experimentally determined structures + 13M synthetic structures. Already adopted by Novo Nordisk, Outpace Bio, Bayer Crop Science. ([Nature](https://www.nature.com/articles/d41586-025-03546-y), [Business Wire](https://www.businesswire.com/news/home/20251028507233/en/))
- [x] **Computational developability is solved.** Chai-2 achieved 86% developability and 16% hit rate (100x improvement). ([[Chai Discovery unveils Chai-2 with 86% developability and 16% hit rate]])
- [x] **Foundation models commoditize.** OpenMidnight achieved SOTA pathology on 12K slides for $1.6K. Training cost not correlated with performance. ([[How to Train a State-of-the-Art Pathology Foundation Model with $1.6k]])
- [x] **Model licensing replaces biobucks.** GSK-Noetik ($50M upfront for 5-year model license), Chai-Lilly (platform deployment), Boltz-Pfizer (exclusive model training). Pharma pays for computational tools, not drug candidates. ([[2026-01-09-ai-drug-discovery-model-licensing-sea-change]])

### Wet Lab Data Moats
- [x] **Flywheel effects demonstrated.** Recursion's 65PB phenomics platform shows improving predictions with data scale. Positive Phase 1b/2 for REC-4881—first major clinical validation. ([[Recursion Boltz-2 Partnership and REC-4881 Results]])
- [x] **Pharma partnerships validate model.** $B+ partnerships (Recursion-Roche, Insitro-BMS, Lilly TuneLab). Big pharma believes in data moats. ([[2025-12-21-lilly-launches-tunelab-platform-to-give-biotechnol]])
- [ ] **Pure computational struggles.** AI drug discovery companies without wet labs face GTM challenges

### Clinical Outcome Data Moats
- [x] **Population-scale validation differentiates.** PROTON tested in n=610,524 patients; 5 drugs reduced dementia risk (HR=0.63, p<10^-7). The differentiator is validation against real outcomes. ([[Graph AI generates neurological hypotheses validated in molecular, organoid, and clinical systems]])
- [x] **Existing models fail on real human data.** 9/11 mutation-effect models perform worse than random on human population data. G2P Bio's SLMM trained on population outcomes achieved 20x improvement. ([[GPT_Bio_Pitch_Deck]])
- [x] **Clinical outcome data compounds via network effects.** Datavant: 300% growth in trial tokenization since 2022, ~270 trials by end 2024. "Tokenization shifting from emerging concept to foundational practice in clinical development." ([Datavant Analysis](https://www.datavant.com/real-world-data-rwd/datavant-analysis-2025-trends-in-clinical-trial-tokenization-and-real-world-data-linkage))
- [x] **$1B+ moats exist in outcome-linked data.** Tempus projecting $1.6B revenue by 2026 (up from $693M in 2024). "Robust data moat, expanding test portfolio, and software ambitions position it for potential winner-take-all dominance." ([Seeking Alpha](https://seekingalpha.com/article/4854303-tempus-ai-a-healthcare-hyper-growth-opportunity-for-the-risk-tolerant))
- [ ] **Human genetic linkage predicts success.** Projects with human genetic linkage: 73% active/successful vs 43% without. 2x success rate. ([[the-role-of-human-genetics-in-drug-discovery-9e4348fe]])

### Data Geography Creates Regional Moats
- [x] **Clinical/EHR data doesn't transfer across geographies.** US-developed CVD models overestimate risk when applied to Canadian data. Coding systems (ICD-10-CM vs Chinese GB/T), formularies, and care pathways all differ. 46% of CVD prediction models from European research with unclear global generalizability. ([[2026-01-09-ai-drug-discovery-model-licensing-sea-change]])
- [x] **Genomics has severe ancestry transferability gaps.** European → African ancestry PRS: only 20-40% accuracy retention. Accuracy decreases linearly with genetic distance (r = -0.95). This limits cross-population value of genomic datasets. ([Nature 2023](https://www.nature.com/articles/s41586-023-06079-4))
- [x] **Molecular/protein data is globally portable.** AlphaFold trained on global PDB works everywhere. Proteins fold the same way regardless of geography. China's lab data advantage is real for this modality.

**Implication:** Data moats are modality-specific. Lab data (Boltz, Chai) = global competition. Clinical outcome data (SMB, Tempus, Epic) = regional moats. China's 600M covered lives advantage applies to wet lab scale, NOT clinical AI.

---

## Bear Case

- [x] **AI drugs not proven in clinic yet.** Despite $17B+ invested since 2019, zero AI-discovered drugs approved. Neither Isomorphic Labs nor competitors have reached large-scale clinical trials. 8 programs in clinic as of 2025. Bubble risk if optimism not matched by reality. ([PitchBook](https://pitchbook.com/news/articles/why-ai-drug-discovery-isnt-the-layup-vcs-expected))
- [x] **Phase II bottleneck unchanged.** AI-discovered drugs show 80-90% Phase I success but Phase II success rate is ~40%, comparable to historic industry averages. "AI can predict chemistry, but biology remains maddeningly complex." AI speeds discovery, not development. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S135964462400134X))
- [x] **Open-source catching proprietary rapidly.** OpenFold3 matching AlphaFold3, adopted by major pharma. RFdiffusion3 open-source. Ovo ecosystem provides end-to-end open-source protein design. Tool landscape fragmenting but capability democratizing. ([Nature](https://www.nature.com/articles/d41586-025-03546-y))
- [ ] **Federated learning enables data sharing.** If Lilly TuneLab and similar federated approaches enable cross-pharma outcome sharing, data moats erode and network effects don't compound.
- [ ] **Foundation models generalize.** AlphaFold-level breakthroughs could obviate proprietary experimental data.
- [ ] **Regulatory agencies require traditional validation.** FDA has not created accelerated pathways specifically for AI-designed therapeutics.

**The counter-thesis:** If open-source AI achieves comparable clinical translation rates and federated learning enables frictionless outcome data sharing across pharma, then both computational and data moats erode—it becomes commoditized infrastructure. The $17B+ invested may not generate returns if Phase II success rates don't improve.

---

## Timeline

**Now → 2026:**
- Track Phase II/III results from AI-discovered programs (Absci ABS-101, Insilico Rentosertib, Recursion pipeline)
- Monitor OpenFold3, RFdiffusion3 adoption by pharma vs. proprietary alternatives
- Watch Lilly TuneLab adoption and federated learning volumes
- Entry point: Companies with >100K patient records linked to longitudinal outcomes
- Tempus path to profitability (GAAP EPS trending toward breakeven by 2026)

**2027 → 2028:**
- First AI-discovered drug approval (or high-profile failure) sets market narrative
- Open-source computational tools reach parity on standard benchmarks
- Critical threshold: If AI-discovered drugs show 50% Phase II success (vs 30% baseline)
- Market bifurcation: wet lab-integrated vs pure computational becomes clear

**2029+:**
- Health data networks consolidate into 2-3 dominant platforms
- Clinical outcome data licensing becomes primary revenue model
- Drug discovery looks like software development (design in-silico, validate via contract labs)
- Potential: $50B+ TAM in clinical outcome data licensing

---

## Startup Opportunities

### Data Platform Plays
**1. Clinical Outcome Data Network (Datavant/Ciitizen model)**
- Why this follows: Winner-take-most network effects proven. Datavant: 300% trial tokenization growth since 2022.
- Wedge: Rare disease patient communities, advocacy group partnerships. LLM-based data extraction from unstructured EHR.
- Risk: Privacy regulations tightening. Competition from pharma building internal capabilities.

**2. Population Genomics Validation Platform (G2P model)**
- Why this follows: 9/11 models fail on real human data. Altos Labs paid $100K and changed R&D based on G2P Bio analysis.
- Wedge: Start with biobank partnerships (UK Biobank, All of Us). Sell validation services to pharma.
- Risk: Biobank access increasingly competitive.

**3. Outcome-Linked Pathology Intelligence**
- Why this follows: EAGLE (MSK) proved fine-tuned foundation models achieve clinical-grade accuracy when trained on ground truth outcome data.
- Wedge: Partner with academic medical centers with MSK-IMPACT-equivalent molecular ground truth.
- Risk: Regulatory pathway unclear. Requires large institutional partnerships.

### Infrastructure Plays
**4. Cloud Biotech Platform (Asset-Light Drug Discovery)**
- Why this follows: RFdiffusion3, OpenFold3 make "100 designs to find a winner" economically viable.
- Wedge: Design in-silico using open-source tools, validate through contract labs, manufacture via CDMOs.
- Risk: Regulatory path for AI-designed drugs unclear. Phase II bottleneck persists.

---

## Watch For

**If RIGHT (thesis plays out):**
- AI-discovered drugs show higher Phase II success rates than industry baseline (30%)
- Tempus, Datavant, or similar data platforms command premium valuations vs computational-only
- Open-source foundation models achieve parity on benchmarks but lag on clinical translation
- Pharma M&A targets shift from "best AI" to "best outcome data assets"
- Startup achieves IND with <$10M and <18 months from concept
- **More $50M+ model licensing deals announced in 2026** (GSK-Noetik is template)

**If WRONG (thesis fails):**
- Open-source tools achieve equivalent clinical translation rates
- AI-discovered drugs fail Phase II/III at rates equal or worse than traditional discovery
- Lilly TuneLab and federated learning create liquid market for outcome data
- FDA requires traditional validation pathways regardless of in-silico accuracy
- Pure computational company achieves successful drug discovery exit
- **Insilico INS018_055 fails Phase II**—furthest AI-discovered drug, would reset narrative

---

## Evidence

### Computational Commoditization Evidence
| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-29 | [[2025-12-29-rfdiffusion3-protein-design-at-all-atom-resolution]] | Research | RFdiffusion3 open-source: 168M params, 10x faster than RFD2. 37/41 enzyme benchmarks. All-atom resolution. |
| 2025-06-30 | [[Chai Discovery unveils Chai-2 with 86% developability and 16% hit rate]] | Company | "16% hit rate (100x improvement), 86% developability. Binding-to-druggable gap solved computationally." |
| 2025-12-17 | [[How to Train a State-of-the-Art Pathology Foundation Model with $1.6k]] | Research | "SOTA pathology on 12K slides for $1.6K. Training cost not correlated with benchmark performance." |
| 2025-12-29 | [[Structure Prediction Commoditizes - AlphaFold3 vs Boltz vs Chai]] | Research | Boltz-2 and Chai-1 match AlphaFold3 accuracy. Structure prediction commoditized. |
| 2026-01-09 | [[2026-01-09-ai-drug-discovery-model-licensing-sea-change]] | Research | **MODEL LICENSING PARADIGM:** GSK-Noetik $50M, Chai-Lilly, Boltz-Pfizer. Biobucks → SaaS. |
| 2026-01-26 | Web: [OpenFold3](https://www.businesswire.com/news/home/20251028507233/en/) | Research | OpenFold3 preview matches AlphaFold3, adopted by Novo Nordisk, Outpace Bio, Bayer. 300K+ structures. |
| 2026-01-26 | Web: [Ovo Ecosystem](https://www.biorxiv.org/content/10.1101/2025.11.27.691041v1) | Research | Ovo: open-source ecosystem for de novo protein design, end-to-end pipelines. |

### Clinical Outcome Data Moat Evidence
| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-13 | [[Graph AI generates neurological hypotheses validated in molecular, organoid, and clinical systems]] | Research | "PROTON validated in n=610,524 patients. 5 drugs reduced dementia risk (HR=0.63, p<10^-7)." |
| 2025-12-20 | [[GPT_Bio_Pitch_Deck]] | Company | "9/11 models fail on real human data. 20x improvement. Clean human signal extraction is the missing piece." |
| 2025-12-28 | [[datavant-corporate-overview-deck-2-22-20-1-1-b6910f1a]] | Company | "100B+ patient records, 200+ orgs. Winner-take-most connectivity layer." |
| 2025-12-28 | [[initiating-coverage-of-a-differentiated-specialty-laboratory-9f1a7e9c]] | Research | "Tempus: $1B+ platform investment over 9 years... significant capital to catch up." |
| 2026-01-26 | Web: [Tempus Revenue](https://finance.yahoo.com/news/tempus-ai-revenue-mix-2026-144100757.html) | News | Tempus projecting $1.6B revenue by 2026 (up from $693M in 2024). GAAP EPS trending toward breakeven. |
| 2026-01-26 | Web: [Datavant Tokenization](https://www.datavant.com/real-world-data-rwd/datavant-analysis-2025-trends-in-clinical-trial-tokenization-and-real-world-data-linkage) | Research | 300% trial tokenization growth since 2022. ~270 trials by end 2024. "Foundational practice in clinical development." |

### AI Drug Discovery Clinical Evidence
| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-29 | [[Recursion Boltz-2 Partnership and REC-4881 Results]] | Company | Positive Phase 1b/2 for REC-4881—first major clinical validation. 65PB proprietary data moat. |
| 2026-01-26 | Web: [PitchBook AI Drug Discovery](https://pitchbook.com/news/articles/why-ai-drug-discovery-isnt-the-layup-vcs-expected) | News | "$17B+ invested since 2019, zero approvals. Phase II ~40%, comparable to historic averages." |
| 2026-01-26 | Web: [ScienceDirect Analysis](https://www.sciencedirect.com/science/article/pii/S135964462400134X) | Research | "Phase I 80-90% success, Phase II ~40%. AI can predict chemistry, biology remains complex." |

### Wet Lab Data Moat Evidence
| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-29 | [[2025-12-21-lilly-launches-tunelab-platform-to-give-biotechnol]] | News | Lilly TuneLab: $1B+ proprietary data via federated learning. Pharma monetizing wet lab data. |
| 2025-12-29 | [[DNA Foundation Models Benchmark - Nature Communications 2025]] | Research | Specialized models outperform general-purpose on complex tasks. Domain-specific data provides lasting advantage. |

### Data Transferability Evidence
| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2023 | [Nature](https://www.nature.com/articles/s41586-023-06079-4) | Research | PRS accuracy: European → African only 20-40% retained. Accuracy correlates with genetic distance (r = -0.95). |
| 2024 | [Nature Medicine](https://www.nature.com/articles/s41591-024-03113-4) | Research | Medical imaging AI uses "demographic shortcuts"—fairness degrades in new populations. |

---

## Open Questions

**What's the actual failure rate for AI-designed drugs in clinical trials vs traditional?**
→ OPEN: Phase II ~40% comparable to historic. Track Phase 1→2→3 progression rates for Recursion, Isomorphic, Insitro.

**Will open-source (RFdiffusion, OpenFold3) or proprietary (AlphaFold3) dominate?**
→ TRENDING OPEN-SOURCE: OpenFold3 matching AlphaFold3, already adopted by Novo Nordisk. Watch adoption curves.

**How quickly will regulatory agencies adapt?**
→ OPEN: Monitor FDA guidance documents, track breakthrough designations for AI-designed candidates.

**Will federated learning erode data moats?**
→ OPEN: If Lilly TuneLab enables cross-pharma sharing, network effects may not compound.

---

## Related Theses

- [[AI Biotech Model Licensing Captures SaaS Multiples—Drug Deals Become Software Deals by 2028]] — Business model shift; same tech, 2-3x valuation as software vs biotech
- [[Biotech Operations Intelligence Captures Trial Ops—Point Solutions Become Platforms]]
- [[Real-World Data Infrastructure Becomes Pharma Critical Path—Data Quality Beats Volume by 2028]]

---

*Created: 2026-01-07*
*Updated: 2026-01-26 — OpenFold3 preview released matching AlphaFold3. RFdiffusion3 open-sourced. Tempus projecting $1.6B by 2026. AI drug Phase II success still ~40%. $17B+ invested, zero approvals yet.*
*Merged from: Wet Lab Flywheels Create Drug Discovery Data Moats + Protein Design Becomes Software + Clinical Outcome Data Becomes Drug Discovery Moat*
*Key insight: The hierarchy is Algorithms < Wet Lab Data < Clinical Outcome Data. Computational design commoditizes; proprietary data (experimental + clinical outcomes) becomes the moat.*
*Confidence: HIGH (60+ sources, Recursion clinical validation, Tempus growth, OpenFold3 commoditization confirmed, but AI drugs unproven in Phase II)*

*Contrarian threats: AI drugs Phase II success rate still ~40%, same as historic baseline (MEDIUM)—addressed by noting data moats still valuable even if AI doesn't improve Phase II. Open-source catching proprietary faster than expected (MEDIUM)—addressed by thesis: commoditization validates data > algorithms.*
