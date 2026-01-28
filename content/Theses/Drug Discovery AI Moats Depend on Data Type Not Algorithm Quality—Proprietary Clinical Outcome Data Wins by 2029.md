## The Take

**Consensus:** AI drug discovery moats come from the best algorithms -- whoever builds the most sophisticated foundation model or computational platform captures the market. Investors chase model architecture, parameter counts, and benchmark performance. $17B+ invested since 2019 on this assumption.

**Today:** The algorithm layer is commoditizing faster than anyone expected, but that does not mean algorithms are irrelevant -- it means the TYPE of problem determines whether algorithms or data dominate. Structure prediction is solved (OpenFold3 matched AlphaFold3 in weeks). Binding prediction is competitive (Chai-2 at 16% hit rate, 100x improvement). But clinical translation remains stuck at historic baselines (Phase II ~40%, same as traditional). The moat is not "data beats algorithms" generically -- it is that specific categories of data compound in ways algorithms cannot replicate, and the scarcest data sits furthest downstream: clinical outcomes from real patients.

The hierarchy: **Algorithms < Wet Lab Experimental Data < Clinical Outcome Data**. Each layer is harder to generate, harder to commoditize, and more predictive of real-world drug success. The key insight is mechanical: algorithms commoditize because they can be reproduced from public training data (PDB structures, published sequences). Wet lab data commoditizes slower because it requires physical infrastructure and time. Clinical outcome data barely commoditizes at all because it requires patients, years, and regulatory frameworks -- and it has geographic moats (European-trained CVD models overestimate risk on Canadian data; European-to-African ancestry PRS retains only 20-40% accuracy).

**The case FOR pure algorithm performance winning:** Chai-2 achieved 86% developability (on par with therapeutic antibodies) plus 16% binding hit rate -- purely computational. RFdiffusion3 designs DNA binders and advanced enzymes at all-atom resolution with fewer than 100 designs needed. If computational platforms achieve reliable zero-shot clinical translation -- predicting not just molecular properties but patient outcomes -- algorithms win outright. Isomorphic Labs (AlphaFold3 developer) is testing this with partnerships across Lilly, Novartis, and J&J. The computational-first path is real: $1.3B raised by Chai, $1.3B by Xaira, on zero clinical assets.

**The case AGAINST algorithm dominance:** 9 out of 11 mutation-effect models perform worse than random on human population data. OpenFold3 matched AlphaFold3 in weeks -- algorithm advantages compress to months, not years. 180 lines of Boltz-2 code won the Adaptyv Nipah competition. RFdiffusion3 is MIT-licensed. The open-source ecosystem (Ovo, OpenFold3, Boltz-2) provides end-to-end pipelines anyone can use. If your moat is the model, it evaporates on a preprint timeline.

**What TYPE of data builds the moat, and WHY?**

Three categories, each with distinct mechanics:

1. **Assay/screening data** (wet lab). Recursion's 65PB phenomics dataset, Insitro's iPSC screens, Lila Sciences' "trillions of scientific reasoning tokens" from autonomous labs. This data requires physical experiments that take time and capital to run. The flywheel: ML predictions generate experiment designs, experiments produce training signal, better models produce smarter experiments. Each cycle adds proprietary data competitors cannot replicate without building equivalent infrastructure. Recursion's REC-4881 positive Phase 1b/2 proves the flywheel works.

2. **Developability/failure data** (manufacturing). Aggregation, viscosity, immunogenicity, expression yield -- these kill 90% of molecules that bind well. Pharma companies possess this data but do not share it (competitive and legal concerns). No public dataset exists. This is the hardest near-term data to acquire because it requires either (a) running thousands of programs that fail, or (b) convincing pharma to contribute anonymized failure data. Chai-2's 86% developability hit rate challenges this moat computationally, but real-world manufacturing validation at scale remains unproven.

3. **Clinical outcome data** (patients). PROTON validated in n=610,524 patients (HR=0.63, p<10^-7). Projects with human genetic linkage show 73% active/successful vs 43% without (2x success rate). Tempus projects $1.6B revenue by 2026 from combined genomics + data platform. Datavant shows 300% trial tokenization growth since 2022, ~270 trials by end 2024. This data has geographic moats (coding systems, formularies, care pathways differ by country), ancestry moats (PRS accuracy drops linearly with genetic distance, r=-0.95), and time moats (longitudinal outcomes require years of follow-up). No algorithm can manufacture this -- it exists only in hospital systems, biobanks, and payer databases.

**How do you GET this data?** Three acquisition paths:
- **Build it** (Recursion model): invest $500M+ in automated wet labs, run millions of experiments, accumulate proprietary screening data. Capital-intensive, 5+ year build, but creates flywheel that compounds. Physical AI labs (Periodic Labs $300M seed, Lila Sciences $550M, Medra $52M) are collapsing the cost of this path.
- **License it** (Tempus/Datavant model): partner with health systems for EHR-linked biobank data, tokenize patient records for trial matching. Network effects compound -- Datavant's 100B+ patient records across 200+ organizations create connectivity moat. Requires trust, compliance infrastructure, and multi-year institutional relationships.
- **Generate it via platform** (Lilly TuneLab model): offer computational tools to pharma/biotech, collect their experimental results via federated learning. $1B+ Lilly data monetized to 1,300+ biotech companies through Benchling. Risk: if federated learning works perfectly, data moats erode.

**The business model shift matters:** GSK paid $50M for Noetik's foundation models (not drug candidates). Chai-Lilly signed "one of pharma's largest AI software deals." Boltz-Pfizer got paid for exclusive model training. This is SaaS economics applied to biotech -- recurring revenue, platform risk not clinical risk, 10-15x revenue multiples vs 3-5x for pipeline biotech. Same $50M ARR = $500-750M as software vs $150-250M as biotech. But BenevolentAI collapsed 90%, Exscientia dropped 81% -- market still punishes AI biotechs for clinical failures regardless of structure.

**In 3-5 years:**
- **Winners:** Clinical outcome data platforms (Tempus, Datavant, Veeva) that own the scarcest data layer. Wet-lab-integrated companies (Recursion, Absci) with proprietary experimental flywheels. Model licensing companies (Chai, Noetik) that structure as software businesses -- IF they demonstrate renewal/NRR. Physical AI lab companies (Periodic Labs, Lila Sciences, Medra) that collapse wet lab costs 10x.
- **Losers:** Algorithm-only companies without proprietary data generation. Pure computational startups that can be replicated by open-source in months. Service CROs without ML integration. Raw data aggregators without quality/validation layers.
- **Market structure:** Drug discovery bifurcates into computational-first ($5-10B, algorithm performance matters for novel targets) and data-integrated ($10-15B, clinical translation proven). Health data networks consolidate into 2-3 winners. Model licensing becomes standard pharma procurement (36% concentration among top 5 providers). Physical AI labs become the "picks and shovels" infrastructure layer.

**How this evolved:**
- *2025-12-20:* Chai-2 proved computational methods solve binding-to-druggable gap (86% developability)
- *2025-12-21:* PROTON validated in 610K patients -- moat shifted to clinical outcome data
- *2025-12-27:* OpenMidnight at $1.6K proved foundation models commoditize
- *2025-12-29:* Recursion REC-4881 positive Phase 1b/2 -- first major clinical validation of wet lab flywheel
- *2026-01-07:* Three theses (Wet Lab Flywheels, Protein Design Software, Clinical Outcome Data) merged
- *2026-01-09:* GSK-Noetik ($50M model license) confirms pharma paying for models not drugs
- *2026-01-12:* Thermo-NVIDIA "lab-in-the-loop" partnership -- incumbents responding defensively to Physical AI
- *2026-01-26:* OpenFold3 matched AlphaFold3; RFdiffusion3 open-sourced; Tempus projecting $1.6B; AI drug Phase II still ~40%
- *2026-01-27:* **CONSOLIDATED** — Merged Drug Discovery Data Beats Algorithms, Physical AI Labs, AI Biotech Model Licensing, Real-World Data Infrastructure, and archived AI-Drug-Discovery-Moats into unified thesis. Added both-sides algorithm analysis, data type mechanics, and acquisition path specifics. Contrarian threats: algorithm breakthrough closes clinical translation gap (LOW probability but HIGH impact); federated learning erodes data moats (MEDIUM).

---

## Bull Case

### Computational Commoditization Proves Data > Algorithms
- [x] **Protein design becomes software.** RFdiffusion3 open-sourced: 168M params, 10x faster than RFD2, 37/41 enzyme benchmarks, all-atom resolution. <100 designs needed vs tens of thousands. ([[2025-12-29-rfdiffusion3-protein-design-at-all-atom-resolution]])
- [x] **OpenFold3 matches AlphaFold3.** Trained on 300K+ experimental + 13M synthetic structures. Adopted by Novo Nordisk, Outpace Bio, Bayer Crop Science -- matched proprietary performance in weeks. ([Nature](https://www.nature.com/articles/d41586-025-03546-y))
- [x] **Binding + developability solved computationally.** Chai-2 achieved 86% developability and 16% hit rate (100x improvement). 93% binding retention in full-length IgGs. GPCR binders, peptide-MHC with single-residue specificity validated. ([[Chai Discovery unveils Chai-2 with 86% developability and 16% hit rate]])
- [x] **Foundation models commoditize.** OpenMidnight achieved SOTA pathology on 12K slides for $1.6K. Training cost not correlated with benchmark performance. ([[How to Train a State-of-the-Art Pathology Foundation Model with $1.6k]])
- [x] **180 lines of code won Nipah competition.** Boltz-2 (MIT license) in 180 LOC won the Adaptyv in-silico competition -- algorithmic barriers collapsing. ([[2026-01-09-180-lines-of-code-to-win-the-in-silico-portion-of]])
- [x] **Ovo ecosystem provides end-to-end open-source protein design pipelines.** No proprietary tools required for standard workflows. ([bioRxiv](https://www.biorxiv.org/content/10.1101/2025.11.27.691041v1))

### Wet Lab Data Creates Near-Term Moats
- [x] **Recursion flywheel producing clinical assets.** 65PB phenomics platform. Positive Phase 1b/2 for REC-4881 -- first major clinical validation. $B+ partnerships (Recursion-Roche, Insitro-BMS). ([[Recursion Boltz-2 Partnership and REC-4881 Results]])
- [x] **Lila Sciences generating "internet-scale" autonomous lab data.** Claims trillions of scientific reasoning tokens from autonomous labs. Discovered hundreds of novel antibodies and peptides. $1.3B valuation. ([Lila Sciences](https://www.lila.ai/news/scaling-autonomous-science-to-build-scientific-superintelligence))
- [x] **Physical AI labs collapsing wet lab costs.** $900M+ deployed in 2025: Periodic Labs ($300M seed, a16z, $1B pre-money), Lila Sciences ($550M), Medra ($52M, Genentech customer). Medra automated LabChip GX in 3 months vs 12+ month industry standard. ([[2026-01-08-charles-yang-autonomous-labs-precall]])
- [x] **Execution layer commoditizing.** Physical Intelligence pi-0 open-sourced with 1-20 hours fine-tuning sufficient for new tasks. VLA models enable telling robots "what to do" not "how to do it." ([[Open Sourcing π0]])
- [x] **Specialized models outperform general-purpose on complex tasks.** Domain-specific data provides lasting advantage over general foundation models. ([[DNA Foundation Models Benchmark - Nature Communications 2025]])
- [x] **Lilly TuneLab monetizes wet lab data as platform.** $1B+ proprietary data monetized to 1,300+ biotech companies via federated learning through Benchling. ([[2026-01-08-benchling-and-lilly-tunelab-partner-to-democratize]])

### Clinical Outcome Data Is the Ultimate Moat
- [x] **Population-scale validation differentiates.** PROTON validated in n=610,524 patients; 5 drugs reduced dementia risk (HR=0.63, p<10^-7). ([[Graph AI generates neurological hypotheses validated in molecular, organoid, and clinical systems]])
- [x] **Existing models fail on real human data.** 9/11 mutation-effect models perform worse than random on human population data. G2P Bio's SLMM trained on population outcomes achieved 20x improvement. ([[GPT_Bio_Pitch_Deck]])
- [x] **$1B+ moats exist in outcome-linked data.** Tempus projecting $1.6B revenue by 2026 (up from $693M in 2024). "Robust data moat, expanding test portfolio, and software ambitions position it for potential winner-take-all dominance." ([Seeking Alpha](https://seekingalpha.com/article/4854303-tempus-ai-a-healthcare-hyper-growth-opportunity-for-the-risk-tolerant))
- [x] **Clinical outcome data compounds via network effects.** Datavant: 300% trial tokenization growth since 2022, ~270 trials by end 2024. 100B+ patient records across 200+ organizations. ([[datavant-corporate-overview-deck-2-22-20-1-1-b6910f1a]])
- [x] **Human genetic linkage predicts clinical success.** Projects with human genetic linkage: 73% active/successful vs 43% without (2x success rate). ([[the-role-of-human-genetics-in-drug-discovery-9e4348fe]])
- [x] **FDA formalizing RWD for regulatory decisions.** December 2025: removed patient-level data requirement. Only 12 drugs in 14 years included RWE under prior rules. Commissioner Makary: "removing unnecessary barriers." Creates DEMAND for quality data infrastructure. ([FDA Press Release](https://www.fda.gov/news-events/press-announcements/fda-eliminates-major-barrier-using-real-world-evidence-drug-and-device-application-reviews))

### Data Geography Creates Regional Moats
- [x] **Clinical/EHR data does not transfer across geographies.** US-developed CVD models overestimate risk on Canadian data. Coding systems (ICD-10-CM vs Chinese GB/T), formularies, care pathways differ. 46% of CVD prediction models from European research with unclear global generalizability. ([[2026-01-09-ai-drug-discovery-model-licensing-sea-change]])
- [x] **Genomics has severe ancestry transferability gaps.** European-to-African ancestry PRS: only 20-40% accuracy retained. Accuracy correlates linearly with genetic distance (r=-0.95). ([Nature 2023](https://www.nature.com/articles/s41586-023-06079-4))
- [x] **Molecular/protein data is globally portable.** AlphaFold trained on global PDB works everywhere. Proteins fold the same way regardless of geography. ([[2026-01-09-ai-drug-discovery-model-licensing-sea-change]])

### Business Model Arbitrage
- [x] **Model licensing replaces biobucks.** GSK-Noetik ($50M, 5-year subscription), Chai-Lilly (platform + exclusive model), Boltz-Pfizer (exclusive fine-tuning), Isomorphic-J&J (3rd pharma partnership). ([[2026-01-09-ai-drug-discovery-model-licensing-sea-change]], [[2026-01-25-pharma-bets-big-on-ai-platforms-with-flurry-of-new]])
- [x] **2-3x valuation arbitrage.** Same $50M ARR: $150-250M as biotech (3-5x) vs $500-750M as software (10-15x). Chai valued at $1.3B on zero approvals. ([[Sources/Research/2026-01-09-model-licensing-economics-deep-dive]])
- [x] **120 AI drug discovery deals in 2025.** 23% of all deals since 2017. Upfront payments rose to 27% of total deal value (~$800M, median $41M). ([[2026-01-25-pharma-bets-big-on-ai-platforms-with-flurry-of-new]])
- [x] **Precision medicine market $119B to $537B by 2035.** 16.26% CAGR creates massive demand for data infrastructure. ([[precision-medicine-market]])

---

## Bear Case

- [x] **AI drugs not proven in clinic.** $17B+ invested since 2019, zero FDA approvals. 8 programs in clinic as of 2025. Phase II success ~40%, same as historic baseline. "AI can predict chemistry, but biology remains maddeningly complex." ([PitchBook](https://pitchbook.com/news/articles/why-ai-drug-discovery-isnt-the-layup-vcs-expected), [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S135964462400134X))
- [x] **BenevolentAI 90% collapse, Exscientia 81% drop.** First-generation AI drug discovery overpromised. BenevolentAI: failed eczema trial, 180 layoffs, delisted. Exscientia sold to Recursion at fraction of prior cap. Market punishes AI biotechs for clinical failure regardless of software structure. ([[Labiotech: AI Biotech Bubble]], [[BioPharma Dive: Recursion Exscientia Merger]])
- [x] **Open-source catching proprietary in months.** OpenFold3 matching AlphaFold3. RFdiffusion3 MIT-licensed. Boltz-2 MIT-licensed. Ovo ecosystem end-to-end. 180 LOC won Nipah. Algorithm moats compress to preprint timelines. ([Nature](https://www.nature.com/articles/d41586-025-03546-y))
- [x] **Recursion discontinued lead programs.** REC-994 and REC-2282 discontinued after Phase II showed only "trend" toward efficacy. Shares fell double digits. Revenue dropped 80% Q3 2025 ($5.2M vs $26.1M Q3 2024). ([[STAT News: AI Drug Discovery Beginning or End]])
- [x] **Thermo-NVIDIA defending the gap.** January 2026 partnership for "lab-in-the-loop" with DGX Spark and BioNeMo. If software orchestration solves 80% of lab automation problem, Physical AI startups face incumbents with distribution. ([Thermo Fisher-NVIDIA](https://ir.thermofisher.com/investors/news-events/news/news-details/2026/Thermo-Fisher-Scientific-Announces-Strategic-Collaboration-With-NVIDIA-Leveraging-AI-to-Advance-Scientific-Instrumentation-and-Accelerate-Laboratory-Performance/default.aspx))
- [x] **90% of automation failures are process failures.** Technical interoperability challenges persist. Robots generate terabytes per hour but most stays on edge. "Understand your bottlenecks before you automate them." ([Deloitte](https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/physical-ai-humanoid-robots.html))
- [ ] **Federated learning erodes data moats.** Lilly TuneLab enables cross-pharma outcome sharing. If frictionless federated data markets emerge, network effects do not compound and data moats erode.
- [ ] **Pharma builds not buys.** GSK $30B investment, 40% of pharma leaders planning mixed internal/external AI. Lilly building AI supercomputer with Nvidia. If build beats buy, platform licensing revenue does not recur.
- [ ] **FDA requires traditional validation regardless.** No accelerated pathways specifically for AI-designed therapeutics. Regulatory timelines may not compress even if discovery accelerates.
- [ ] **Algorithms achieve clinical translation.** If a computational-first platform (Chai, Isomorphic) demonstrates >50% Phase II success without proprietary clinical data, the entire data moat thesis collapses. Low probability but high impact.

- [ ] **Biotech funding crash threatens wet lab data flywheels.** Biotech startup funding crashed from $2.6B (Q1 2025) to $900M (Q2 2025), 65% decline. Companies reducing pipelines, laying off. Challenges sustaining expensive wet lab data flywheels ($500M+) when broader biotech funding contracting severely. ([[2025-12-23-the-state-of-the-emerging-biotech-market-bio]])

- [ ] **pLMs capture surface patterns, not deep biology.** pLMs "do not learn the biophysics of proteins, but rather store common sequence motifs and contacts"; for many downstream tasks performance is driven by early layer features and "does not scale well with pre-training" — suggests commoditization since models capture surface patterns. ([[20250206636901v1full-40ebd674]])

- [ ] **Algorithmic innovation still provides meaningful DTI gains.** DTI-GP Gaussian process architecture "outperforms state-of-the-art" for drug-target interaction prediction through novel Bayesian operations — algorithmic innovation still providing performance gains, challenging "algorithms commoditize" for DTI specifically. ([[DTI-GP Bayesian operations for drug-target interactions using deep kernel Gaussian processes]])

- [ ] **AI capital allocation bubble risk.** Howard Marks (Oaktree): AI responsible for "75% of gains, 80% of profits, 90% of capex" in S&P 500. "Newness plays a huge part... leading to asset prices not justified on the basis of predictable earning power." Raises capital allocation risk for AI drug discovery companies valued on promise vs clinical outcomes. ([[2025-12-23-is-it-a-bubble]])

**What would have to be true for me to be wrong?** Two paths to being wrong. First: algorithms leap from molecular prediction to clinical prediction without intermediary data. If Isomorphic or Chai demonstrate that AlphaFold-class models can predict Phase II outcomes from molecular structure alone, data moats become irrelevant -- the entire discovery-to-clinic pipeline becomes software. This would require solving biology at a level that no current model approaches, but the pace of progress (OpenFold3 in weeks, Chai-2 86% developability) means dismissing this path entirely would be complacent. Second: federated learning makes all pharma data liquid. If Lilly TuneLab-style platforms enable cross-institutional data sharing without IP leakage, the scarcity that creates data moats disappears. Early signals suggest this is technically feasible but organizationally difficult -- pharma competitive dynamics and legal frameworks resist data sharing even when anonymized.

---

## Timeline

**Now -> 2026:**
- Track Phase II/III results from AI programs (Absci ABS-101, Insilico Rentosertib, Recursion pipeline)
- Monitor OpenFold3, RFdiffusion3 adoption vs proprietary alternatives
- Watch for 3+ more $50M+ model licensing deals (validates business model shift)
- Physical AI lab pilots going to production (Periodic Labs, Lila Sciences 235K sq ft Cambridge facility, Medra 100-robot Bay Area lab)
- FDA barrier removal operational by Feb 2026 -- watch first RWD-influenced approval
- Entry point: companies with >100K patient records linked to longitudinal outcomes + quality/validation infrastructure

**2027 -> 2028:**
- First AI-discovered drug FDA approval (or high-profile failure) sets market narrative
- Open-source computational tools reach parity on standard benchmarks
- Critical threshold: AI-discovered drugs show 50% Phase II success (vs 30% baseline)
- First model licensing renewal cycles test NRR (GSK-Noetik, Chai-Lilly)
- Market bifurcation: computational-first vs data-integrated becomes clear
- Physical AI startups reach $100M+ revenue run rate (or fail from capital intensity)
- 10+ FDA decisions significantly influenced by RWD

**2029+:**
- Health data networks consolidate into 2-3 dominant platforms
- Clinical outcome data licensing becomes primary revenue model ($50B+ TAM potential)
- Drug discovery looks like software development (design in-silico, validate via automated contract labs)
- Physical AI labs become standard infrastructure (new instrument prime emerges or incumbents successfully acquire/integrate)
- RWD infrastructure required for all pharma regulatory submissions

---

## Startup Opportunities

**1. Clinical Outcome Data Network (Datavant/Tempus model)**
- Why this follows: Winner-take-most network effects proven. Datavant 300% trial tokenization growth. Tempus $1.6B projected revenue. FDA formalizing RWD requirements.
- Wedge: Rare disease patient communities, advocacy group partnerships. LLM-based data extraction from unstructured EHR (88-93% F1) PLUS validation layer that makes output FDA-acceptable.
- Risk: Privacy regulations tightening. IQVIA/Optum add quality layer. Pharma builds internal. Network effects require scale that is hard to bootstrap.

**2. Population Genomics Validation Platform (G2P model)**
- Why this follows: 9/11 models fail on real human data. Projects with genetic linkage show 2x success rate. Altos Labs paid $100K and changed R&D based on G2P analysis.
- Wedge: Biobank partnerships (UK Biobank, All of Us). Sell validation services to pharma. Prove that population-scale outcome data predicts clinical success.
- Risk: Biobank access increasingly competitive. Geographic moats limit generalizability.

**3. Vertical-Specific Autonomous Lab (Physical AI)**
- Why this follows: $900M+ deployed to gap. Incumbent instruments structurally blocked (82.6% recurring revenue from consumables). Researchers report 9-18 months getting instruments to talk. No new instrument prime in 40 years.
- Wedge: Pick ONE workflow (reaction optimization, catalyst screening) and make it fully autonomous. Government labs first (DOE relationships), then commercial pharma.
- Risk: Capital intensity ($20M+ lab build). Thermo-NVIDIA "lab-in-the-loop" could solve orchestration. Process failures (90%) dominate technology failures.

**4. Developability Data Aggregator**
- Why this follows: 90% of binders fail on developability (aggregation, viscosity, immunogenicity). No public dataset exists. Pharma has the data but does not share it.
- Wedge: Biosimilar developers (less IP sensitivity) contribute manufacturing data for benchmarking. Expand to AI platforms (Chai, Xaira) that need developability prediction.
- Risk: Pharma data sharing resistance. Chai-2 86% computational developability may erode data value. Antitrust if too concentrated.

**5. Cloud Biotech Platform (Asset-Light Drug Discovery)**
- Why this follows: RFdiffusion3, OpenFold3, Boltz-2 make "100 designs to find a winner" economically viable. Physical AI labs collapse validation costs. Model licensing creates revenue before clinical risk.
- Wedge: Design in-silico using open-source tools, validate through Physical AI contract labs, license models to pharma via Noetik/Chai-style deals.
- Risk: Phase II bottleneck persists regardless of discovery speed. Zero AI drugs approved yet. Capital markets may not fund asset-light biotech.

---

## Watch For

**If RIGHT (thesis plays out):**
- AI-discovered drugs show higher Phase II success rates than 30% industry baseline
- Tempus, Datavant command premium valuations vs computational-only companies
- Open-source models achieve benchmark parity but lag on clinical translation
- Pharma M&A targets shift from "best AI" to "best outcome data assets"
- Startup achieves IND with <$10M and <18 months from concept (Physical AI + open-source stack)
- More $50M+ model licensing deals in 2026 (GSK-Noetik is template)
- Physical AI startup signs $50M+ multi-year pharma contract
- FDA approves drug with RWD as primary efficacy evidence

**If WRONG (thesis fails):**
- Computational-first company (Chai, Isomorphic) achieves >50% Phase II success without proprietary clinical data
- Open-source tools achieve equivalent clinical translation rates
- AI-discovered drugs fail Phase II/III at rates equal or worse than traditional
- Lilly TuneLab and federated learning create liquid market for outcome data, eroding scarcity
- FDA requires traditional validation pathways regardless of in-silico accuracy
- Insilico INS018_055 fails Phase II -- furthest AI-discovered drug, would reset narrative
- Thermo-NVIDIA "lab-in-the-loop" achieves 10,000+ orchestration deployments, making Physical AI startups unnecessary
- GSK-Noetik does not renew -- model licensing is one-time, not recurring

---

## Evidence

### Computational Commoditization Evidence
| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-29 | [[2025-12-29-rfdiffusion3-protein-design-at-all-atom-resolution]] | Research | RFdiffusion3 open-source: 168M params, 10x faster than RFD2. 37/41 enzyme benchmarks. All-atom resolution. |
| 2025-06-30 | [[Chai Discovery unveils Chai-2 with 86% developability and 16% hit rate]] | Company | "16% hit rate (100x improvement), 86% developability on par with therapeutic antibodies." |
| 2025-12-17 | [[How to Train a State-of-the-Art Pathology Foundation Model with $1.6k]] | Research | "SOTA pathology on 12K slides for $1.6K. Training cost not correlated with benchmark performance." |
| 2025-12-29 | [[Structure Prediction Commoditizes - AlphaFold3 vs Boltz vs Chai]] | Research | Boltz-2 and Chai-1 match AlphaFold3 accuracy. Structure prediction commoditized. |
| 2026-01-09 | [[2026-01-09-180-lines-of-code-to-win-the-in-silico-portion-of]] | Technical | 180 LOC + Boltz-2 wins Adaptyv Nipah competition. |
| 2026-01-26 | Web: [OpenFold3](https://www.businesswire.com/news/home/20251028507233/en/) | Research | OpenFold3 preview matches AlphaFold3, adopted by Novo Nordisk, Outpace Bio, Bayer. |
| 2026-01-26 | Web: [Ovo Ecosystem](https://www.biorxiv.org/content/10.1101/2025.11.27.691041v1) | Research | Ovo: open-source ecosystem for de novo protein design, end-to-end pipelines. |
| 2025-12 | [[A Comparative Review of Deep Learning Methods for RNA Tertiary Structure Prediction]] | Research | 6 DL models for RNA 3D structure: "each model predicts the best structure for certain RNAs" — no single algorithm dominates. Common scoring functions cannot reliably identify best prediction. Validates algorithm commoditization. |
| 2024-08 | [[2026-01-22-meditab-scaling-medical-tabular-data-predictors-vi]] | News | MediTab (IJCAI 2024): LLM-based approach outperforms supervised XGBoost by 8.9% and 17.2% on patient/trial outcome prediction. Data engineering (consolidation, enrichment) matters more than algorithm design. |
| 2025-09 | [[2025-12-29-rna-structure-prediction-is-hard-how-much-does-tha]] | News | AlphaFold3 does not solve RNA structure outright; "can be outperformed through tailored methods." Only 7,759 RNA structures in PDB vs 216,212 proteins (June 2024). Accuracy drops to TM<0.1 for structures least similar to training set. |
| 2025-02 | [[20250206636901v1full-40ebd674]] | Research | SAEs on ESM-2 reveal family-specific latents mirroring known sequence-homology groupings; pLMs learn internal representations of protein families; linear probes match or outperform base ESM embeddings on downstream tasks. |
| 2025-02 | [[20250206636901v1full-40ebd674]] | Research | CHALLENGE: pLMs "do not learn the biophysics of proteins, but rather store common sequence motifs"; performance driven by early layer features and "does not scale well with pre-training" — models capture surface patterns not deep biology. |
| 2025-12 | [[DTI-GP Bayesian operations for drug-target interactions using deep kernel Gaussian processes]] | Research | CHALLENGE: DTI-GP "outperforms state-of-the-art" for drug-target interaction prediction via novel Bayesian operations — algorithmic innovation still providing meaningful gains in computational layer for DTI specifically. |

### Clinical Outcome Data Moat Evidence
| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-13 | [[Graph AI generates neurological hypotheses validated in molecular, organoid, and clinical systems]] | Research | "PROTON validated in n=610,524 patients. 5 drugs reduced dementia risk (HR=0.63, p<10^-7)." |
| 2025-12-20 | [[GPT_Bio_Pitch_Deck]] | Company | "9/11 models fail on real human data. 20x improvement. Clean human signal extraction is the missing piece." |
| 2025-12-28 | [[datavant-corporate-overview-deck-2-22-20-1-1-b6910f1a]] | Company | "100B+ patient records, 200+ orgs. Winner-take-most connectivity layer." |
| 2025-12-28 | [[initiating-coverage-of-a-differentiated-specialty-laboratory-9f1a7e9c]] | Research | "Tempus: $1B+ platform investment over 9 years... significant capital to catch up." |
| 2026-01-26 | Web: [Tempus Revenue](https://finance.yahoo.com/news/tempus-ai-revenue-mix-2026-144100757.html) | News | Tempus projecting $1.6B revenue by 2026 (up from $693M in 2024). |
| 2026-01-26 | Web: [Datavant Tokenization](https://www.datavant.com/real-world-data-rwd/datavant-analysis-2025-trends-in-clinical-trial-tokenization-and-real-world-data-linkage) | Research | 300% trial tokenization growth since 2022. ~270 trials by end 2024. |
| 2026-01 | [[Inferring Clinically Relevant Molecular Subtypes of Pancreatic Cancer from Routine Histopathology Us]] | Research | PanSubNet: AUC 88.5% (internal), 84.0% (external TCGA) for predicting therapy-relevant subtypes from H&E slides in n=1,055 patients. Paired clinical data across 2 multi-institutional cohorts is the moat, not the DL model. |
| 2025-09 | [[Martin Naley and Emre Karatas]] | Operator | Resonata extracts care options from trials.gov + prescribing info, matches against patient data via Picnic Health partnership. Algorithm is generic; patient data partnerships (Picnic Health, Quest) are the moat. |
| 2025-10 | [[Sean W Doolan and Rowland Pettit + Ming Yang Lu]] | Operator | Aevius: proprietary labels for 100+ outcome classifiers on 7M longitudinal patient records; biopharma pilots for RWE, trial selection, rare disease ID. Validates clinical outcome data moat over algorithm quality. |
| 2025-08 | [[Kaiser]] | Operator | Kaiser Northern California: 15M+ patients, 28 years multi-modal data (imaging, pathology, claims, SDOH, biobank); "one of the most rich datasets I have ever seen"; data "sits there eroding in value"; commercialization via royalties. Standard Model Bio evaluating as customer. |
| 2023-08 | [[symposium-lab-seed-ext-v12-572dbed7]] | Research | Symposium Lab: 32% of Phase 3 failures from poor patient ID/selection; 1/3 of trial duration spent on patient identification; $19M median trial cost vs $3B total dev cost; 120,000 trials in early phases; $4.8B TAM. Validates clinical outcome data accumulation via trial design optimization. |
| 2025-12 | [[biostack-1876d87e]] | Research | BioStack: "The bottleneck isn't algorithms — it's access to quality data"; natural language access to 60 databases/150+ tools; 8-12 weeks saved, 65% cost reduction per design cycle; spent <$2K to reach 30 active users. |

### Wet Lab Data & Physical AI Evidence
| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-29 | [[Recursion Boltz-2 Partnership and REC-4881 Results]] | Company | Positive Phase 1b/2 for REC-4881. 65PB proprietary data moat. |
| 2025-12-29 | [[DNA Foundation Models Benchmark - Nature Communications 2025]] | Research | Specialized models outperform general-purpose on complex tasks. |
| 2025-12-29 | [[2025-12-21-lilly-launches-tunelab-platform-to-give-biotechnol]] | News | Lilly TuneLab: $1B+ proprietary data via federated learning to 1,300+ biotechs. |
| 2026-01 | [[2026-01-08-charles-yang-autonomous-labs-precall]] | Research | $900M+ deployed: Periodic Labs $300M, Lila $550M, Medra $52M. "No new instrument prime in 40 years." |
| 2026-01 | [[2026-01-05-incumbent-blockers-thermo-danaher]] | Research | TMO 82.6% recurring revenue; DHR 48 acquisitions; API licensing blocks open automation. |
| 2025-12 | [[Open Sourcing π0]] | Research | Execution layer commoditizing; 1-20 hours fine-tuning sufficient for new tasks. |
| 2026-01 | Web: [Lila Sciences](https://www.lila.ai/news/scaling-autonomous-science-to-build-scientific-superintelligence) | Company | "Trillions of scientific reasoning tokens; discovered hundreds of novel antibodies/peptides." |
| 2026-01 | Web: [Thermo-NVIDIA](https://ir.thermofisher.com/investors/news-events/news/news-details/2026/Thermo-Fisher-Scientific-Announces-Strategic-Collaboration-With-NVIDIA-Leveraging-AI-to-Advance-Scientific-Instrumentation-and-Accelerate-Laboratory-Performance/default.aspx) | News | "Lab-in-the-loop" vision; DGX Spark, BioNeMo; software orchestration. |
| 2026-01 | Web: [Deloitte Physical AI](https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/physical-ai-humanoid-robots.html) | Research | "90% of automation failures are process failures." |
| 2025-12 | [[Measuring AI's capability to accelerate biological research in the wet lab]] | News | GPT-5 improved molecular cloning efficiency 79x via novel mechanism (RAPF-HiFi) with no human intervention. Introduced RecA + gp32 enzyme combination never co-used before. Robot achieved 89% of human performance. Validates physical AI labs collapse wet lab costs. |
| 2025-12 | [[NeurIPS 2025 Biology's Transformer Moment]] | News | Chai-2: 16% hit rate on de novo antibody designs (vs <1% traditional) with 86% developability; Pearl surpasses AlphaFold3; PerturBench: foundation models fail at perturbation prediction — algorithm layer commoditizing while wet lab/clinical outcome data remain scarce. |
| 2026-01 | [[MORPHFED Federated Learning for Cross-institutional Blood Morphology Analysis]] | Research | MORPHFED: federated learning achieves "strong cross-site performance and improved generalization to unseen institutions" without exchanging data — supports concern that federated learning could erode data moats. |

### Model Licensing & Business Model Evidence
| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2026-01-09 | [[2026-01-09-ai-drug-discovery-model-licensing-sea-change]] | Research | GSK-Noetik $50M, Chai-Lilly, Boltz-Pfizer. Biobucks to SaaS. |
| 2026-01-26 | [[2026-01-25-pharma-bets-big-on-ai-platforms-with-flurry-of-new]] | News | "120 AI deals in 2025. Upfront payments 27% of total (~$800M, median $41M)." |
| 2026-01-09 | [[2026-01-09-chai-discovery-announces-collaboration-with-eli-li]] | News | "One of pharma's largest AI software deals." Double-digit hit rates. |
| 2026-01-08 | [[2026-01-08-gsk-noetik-sign-cancer-deal-on-ai-virtual-cell-mod]] | News | "$50M for 5-year model license. 'New paradigm for AI-focused biotech.'" |
| 2026-01-08 | [[2026-01-08-benchling-and-lilly-tunelab-partner-to-democratize]] | News | "Lilly TuneLab: $1B+ data monetized via Benchling to 1,300+ biotechs." |
| 2026-01-09 | [[Sources/Research/2026-01-09-model-licensing-economics-deep-dive]] | Research | "Same $50M ARR = $200M (4x biotech) vs $600M (12x SaaS)." |
| 2026-01 | [[2026-01-24-vice-president-business-development-chai-discove]] | News | Chai Discovery: $230M raised ($130M Series B, $1.3B valuation). VP BD managing "many transactions in motion." CRO agreements/data-generation partners and "novel IP frameworks." Confirms AI model licensing SaaS business model. |
| 2025-12 | [[kevin-brown---jpm-gameplan-b3da0417]] | Research | Standard Model Bio JPM strategy: targeting $40M raise; Sanofi "imminent" with "1/2 of Phase I in silico" goal; customers include MD Anderson, UCSD, Mt Sinai, UK Biobank; Tempus "buys a lot of models"; "we want to be the standard representation of what it means to be a patient." |
| 2025-08 | [[Virtue VC & FCA VP Catch-up]] | Operator | Standard Model Bio: multimodal foundation models for pharma using imaging + genomics data. Real world data spend decreasing due to efficiency: "buying one Symphony dataset vs five." |
| 2026-01 | [[2026-01-24-team---noetik]] | News | Noetik CEO Ron Alfa (ex-SVP/Head of Research at Recursion, seed through IPO): "translation gap between basic drug discovery science and therapeutics success in the clinic" — clinical translation is the unsolved layer, not molecular design. |

### AI Drug Clinical Pipeline Evidence
| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2026-01-26 | Web: [PitchBook](https://pitchbook.com/news/articles/why-ai-drug-discovery-isnt-the-layup-vcs-expected) | News | "$17B+ invested since 2019, zero approvals. Phase II ~40%." |
| 2026-01-26 | Web: [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S135964462400134X) | Research | "Phase I 80-90% success, Phase II ~40%. AI predicts chemistry, biology remains complex." |
| 2025-12 | [[Labiotech: AI Biotech Bubble]] | News | BenevolentAI: 90% stock collapse, 180 layoffs, delisted. |
| 2025-12 | [[BioPharma Dive: Recursion Exscientia Merger]] | News | Exscientia 81% drop, merged with Recursion. |
| 2025-12 | [[STAT News: AI Drug Discovery Beginning or End]] | News | Recursion discontinued REC-994, REC-2282 after Phase II. Revenue $5.2M vs $26.1M Q3 2024. |
| 2026-01 | [[amgen-buys-protein-degrading-startup-dark-blue-for-up-to-840m]] | News | Amgen acquiring Dark Blue Therapeutics for up to $840M for preclinical protein degrader targeting AML. Large pharma pays premium ($840M preclinical) for novel modality access rather than building internally. |
| 2026-01 | [[epibiologics-raises-107m-for-its-protein-degrading-cancer-drug]] | News | EpiBiologics raised $107M Series B for bispecific antibody protein degraders (EGFR-targeting EPI-326), co-led by GV and J&J Innovation with Novartis Venture Fund. Pharma corporate VCs actively funding novel modality startups. |
| 2025-07 | [[2025-12-23-the-state-of-the-emerging-biotech-market-bio]] | News | CHALLENGE: Biotech startup funding crashed from $2.6B (Q1 2025) to $900M (Q2 2025), 65% decline. 65 layoffs in Q1 2025 alone. Challenges sustaining expensive wet lab data flywheels ($500M+) in contracting biotech funding environment. |
| 2025-12 | [[2025-12-23-is-it-a-bubble]] | News | CHALLENGE: Howard Marks: AI responsible for "75% of gains, 80% of profits, 90% of capex" in S&P 500. "Newness plays a huge part... leading to asset prices not justified on predictable earning power." Capital allocation risk for AI drug discovery companies valued on promise. |

### Data Transferability Evidence
| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2023 | [Nature](https://www.nature.com/articles/s41586-023-06079-4) | Research | PRS accuracy: European to African only 20-40% retained. r=-0.95 with genetic distance. |
| 2024 | [Nature Medicine](https://www.nature.com/articles/s41591-024-03113-4) | Research | Medical imaging AI uses "demographic shortcuts." Fairness degrades in new populations. |

### Regulatory / RWD Evidence
| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12 | [FDA Press Release](https://www.fda.gov/news-events/press-announcements/fda-eliminates-major-barrier-using-real-world-evidence-drug-and-device-application-reviews) | Policy | "Removed patient-level data requirement. Only 12 drugs in 14 years included RWE." |
| 2026-01 | [[real-world-data--assessing-electronic-health-records-and-med-0088ee5f]] | Policy | FDA 50+ page guidance: validation, computable phenotypes, distributed networks. |
| 2026-01 | [[precision-medicine-market]] | Research | "$119B (2025) to $537B (2035) at 16.26% CAGR." |
| 2026-01 | [[Sources/Policy/Federal-Register/2026-01-12-Use-of-Bayesian-Methodology-in-Clinical-Trials-of-Drug-and-Biological-Products;-]] | Policy | FDA draft guidance on Bayesian methodology for pivotal trials. |
| 2025-12 | [[2025-12-18-NIH-Controlled-Access-Data-Policy-and-Proposed-Revisions-to-NIH-Genomic-Data-Sha]] | Policy | NIH proposing standardized controlled-access data policy for genomic data sharing — confirms genomic data has geographic/regulatory moats requiring institutional access frameworks, not just algorithms. |

---

## Open Questions

**What is the true Phase II success rate for AI-discovered drugs?**
OPEN: Phase II ~40%, comparable to historic baseline. 8 programs in clinic, 21 expected by end 2026. Need n=20+ Phase II results for statistical significance. Track: Absci ABS-101, Insilico Rentosertib, Recursion pipeline.

**Will federated learning erode data moats?**
OPEN: Lilly TuneLab technically feasible, 1,300+ biotechs via Benchling. But pharma competitive dynamics resist sharing. Monitor adoption rates and whether contributors gain or lose relative advantage.

**Does the model licensing business model have NRR?**
OPEN: First renewal cycles 2027-2028. GSK-Noetik 5-year term means definitive data in 2031. If NRR <100%, SaaS thesis weakens and these become biotech companies again.

**Will Physical AI labs productize within 3 years?**
OPEN: $900M+ deployed but 90% of automation failures are process failures. Monitor Periodic Labs, Lila Sciences, Medra for production deployments and error rates.

**Does pharma build or buy computational capability?**
OPEN: 40% plan mixed strategy. Lilly building supercomputer AND signed Chai deal. If pharma ML hiring accelerates to $400K+ senior ML engineer salaries, build trend is real.

---

## Related Theses

- [[Physical AI Labs Capture Instrument Gap---Thermo-Danaher Business Model Blocks Response by 2030]] -- Infrastructure layer enabling wet lab cost collapse
- [[AI Biotech Model Licensing Captures SaaS Multiples---Drug Deals Become Software Deals by 2028]] -- Business model shift; same tech, 2-3x valuation as software
- [[Real-World Data Infrastructure Becomes Pharma Critical Path---Data Quality Beats Volume by 2028]] -- FDA formalization of RWD creates demand for quality infrastructure
- [[Biotech Operations Intelligence Captures Trial Ops---Point Solutions Become Platforms]] -- Adjacent thesis on clinical operations software

---

*Created: 2026-01-07 (original Drug Discovery Data Beats Algorithms)*
*Consolidated: 2026-01-27 -- Merged 5 theses: Drug Discovery Data Beats Algorithms, archived AI-Drug-Discovery-Moats, Physical AI Labs (infrastructure layer), AI Biotech Model Licensing (business model evidence), Real-World Data Infrastructure (regulatory/clinical data evidence). Added both-sides algorithm analysis, data type mechanics, acquisition path specifics.*
*Merged from: Drug Discovery Data Beats Algorithms + AI-Drug-Discovery-Moats (archived) + Physical AI Labs (relevant infrastructure) + AI Biotech Model Licensing (business model) + Real-World Data Infrastructure (regulatory)*
*Key insight: The moat is not "data beats algorithms" generically. It is that specific data types -- assay/screening, developability/failure, clinical outcomes -- each have distinct acquisition mechanics, geographic constraints, and commoditization timelines. Clinical outcome data is scarcest and most defensible. Algorithms matter for novel design but compress to open-source on preprint timelines. Startups win by controlling data acquisition at one layer and compounding proprietary signal.*

*Confidence: MEDIUM-HIGH -- 80+ sources, Recursion clinical validation, Tempus $1.6B growth, OpenFold3 commoditization confirmed, $900M+ Physical AI deployment, GSK-Noetik model licensing validated, FDA RWD barrier removal. Downgraded from HIGH because: zero AI drugs approved, Phase II ~40% unchanged, BenevolentAI/Exscientia collapses show market punishes clinical failure, federated learning threat to data moats is real.*
*Last rebuilt: 2026-01-27*

*Contrarian threats: (1) Algorithm breakthrough closes clinical translation gap without intermediary data -- LOW probability, HIGH impact. (2) Federated learning makes pharma data liquid -- MEDIUM probability, MEDIUM impact. (3) AI drugs fail Phase II repeatedly, resetting entire narrative -- MEDIUM probability, HIGH impact.*
