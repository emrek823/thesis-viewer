![[Images/proteomics-platforms-capture-recurring-revenue.png]]

# Thesis: Proteomics Platforms Capture Recurring Revenue — Genomics Giants Become Acquirers by 2028

## Investment Take

**Consensus believes:** Genomics companies (Illumina, Thermo) own the diagnostic infrastructure. Proteomics is research-only, fragmented across incompatible platforms (mass spec, Olink, SomaLogic, Alamar). AI protein models are the next big platform bet.

**Actually:** DNA is once-and-done—you sequence once and the medical utility is mostly cancer ([[Alex __ Emre]]). Proteins change constantly (weekly, monthly, yearly), creating recurring testing at tens of dollars per sample. The business model difference is stark: Quanterix runs 80% recurring revenue while genomics companies face commoditization pressure. Genomics giants already see this—Thermo paid $3.1B for Olink, Illumina is acquiring SomaLogic. They're becoming acquirers, not builders, in proteomics.

The AI protein design angle is real but the moat is misunderstood. Models commoditize—open-source (Boltz-1, RFDiffusion) catches private models within standard deviation. EvolutionaryScale ($142M seed) collapsed into nonprofit in 2025 with no business model. But multi-property optimization datasets (expression, stability, immunogenicity, PK/PD) remain scarce (<1,000 antibodies for non-binding properties vs millions for binding). Preclinical developability costs range $100k-$27M per compound—whoever owns those datasets captures that value. Chai's $1.3B valuation bets on this; the market says molecules > models.

**In 5-10 years:** Proteomics diagnostics become standard of care for chronic disease monitoring (Alzheimer's, metabolic syndrome, oncology surveillance). Genomics companies fully acquire or partner with proteomics platforms. Winners: recurring-revenue diagnostics companies (like Quanterix) and AI companies with proprietary multi-property datasets. Losers: pure-play AI model companies without molecules, mass spec platforms that stay research-only.

**How this evolved:**
- *2025-12-12:* [[Alex __ Emre]] — Operator insight: proteins change constantly = recurring tests. OLink $3B validates market. $100B TAM, 5-10% captured.
- *2025-12-23:* AI protein foundation models raised $1B+ but business model unclear. NGS analogy: compute-as-reagent could be $10B+ if elastic like sequencing. But EvolutionaryScale collapse proves models alone don't justify valuations.
- *2025-12-29:* **REBUILD v3.** 14 sources verified. Core thesis holds: proteomics = recurring revenue vs genomics once-and-done. AI protein angle refined—multi-property datasets are the moat, not models.

---

## Bull Case

- [x] **Recurring revenue model proven.** Quanterix: 80% recurring revenue through consumables/reagents, 7 consecutive quarters double-digit growth. ([[Quanterix Q3 2025 earnings - 80% recurring revenue]])

- [x] **Strategic M&A validates market.** Thermo paid $3.1B for Olink (40-50% market share). Illumina acquiring SomaLogic for $425M. Genomics giants recognize proteomics as next frontier. ([[Thermo Fisher acquires Olink for $3.1B]], [[Illumina to acquire SomaLogic for $425M]])

- [x] **Sensitivity breakthroughs enabling new clinical use cases.** Alamar NULISA: 10,000-fold signal-to-noise improvement, attomolar detection (10-100x vs Olink/SomaLogic). Unlocks low-abundance proteins previously undetectable. ([[Alamar Biosciences raises $128M Series C for NULISA proteomics]])

- [x] **AI protein design creates new recurring compute model.** If protein design proves elastic like NGS (which grew $0 to $10B), compute-as-reagent becomes multi-billion market. RamaX enables 1B binder screens in 1-2 weeks, creating design-test-redesign cycles. ([[2025-12-23-on-ai-infrastructure-in-biology]], [[RamaX]])

- [x] **AI hit rates dramatically exceed traditional methods.** Chai-2: 16% de novo antibody hit rate vs <1% traditional. 86% developability. AI-to-validation in <2 weeks. ([[Chai Discovery unveils Chai-2 with 86% developability and 16% hit rate]], [[2025-12-23-neurips-2025-biologys-transformer-moment]])

---

## Bear Case

- [ ] **Reimbursement unclear.** MolDX jurisdictional confusion. Payers demand clinical utility evidence, not just analytical validity. Most tests lack RCT data. PromarkerD got $390.75 Medicare (PLA code), but general proteomics faces "fee schedule paradoxes"—$10-20 fixed rates, 10x pricing variation by coding choice.

- [ ] **Technology fragmentation.** Multiple platforms (mass spec, antibody, aptamer) with no standard. Cross-platform results uncorrelated. Benzon Foundation identified standardization as #1 barrier.

- [ ] **Clinical adoption slow.** Physicians trained on genomics/chemistry panels. Mass spec requires PhD operators. Even affinity platforms need specialized training. No one knows what to do with 11,000 protein values.

- [x] **AI protein models commoditizing rapidly.** Open-source (Boltz-1, RFDiffusion) within standard deviation of private models. EvolutionaryScale ($142M seed 2024) collapsed into nonprofit in 2025. AbCellera CEO: "You don't get credit for academic papers...you get credit for molecules." ([[Models are out, molecules are in as AI startups sprint to clinic]], [[2025-12-23-the-optimistic-case-for-protein-foundation-model-c]])

- [ ] **AI protein patents may not provide moat.** ProteinMPNN generates functional variants at 40% sequence identity—below any patent threshold. CDR-level antibody patents vulnerable to mutation scanning. Structure-based patents not yet established. ([[2025-12-23-boolean-biotech]])

**The counter-thesis:** Genomics expands beyond cancer into polygenic risk scores and pharmacogenomics, making DNA testing recurring (prenatal, wellness, drug dosing). Mass spec achieves <$100/sample with full automation, eliminating affinity platform advantage. AI protein design stays research-only because pharma in-houses capabilities rather than buying from startups.

---

## Timeline

**Now - 2026:** Olink integration into Thermo. SomaLogic close (H1 2026). Watch: Quanterix LucentAD Alzheimer's test at $897 Medicare pricing—first major proteomics reimbursement proof point. Chai and others must show clinical molecule advancement (21 AI biotech programs expected in clinic by end 2026 vs 8 today). Entry point: diagnostics companies with proven recurring revenue.

**2027 - 2028:** First major proteomics clinical utility data (RCT-level evidence for outcomes). Standardization consortia form or FDA mandates cross-platform validation. AI protein companies either show clinical proof-of-concept or consolidate. Key threshold: >$500M revenue proteomics pure-play with >70% recurring.

**2029+:** Proteomics becomes standard in chronic disease management pathways. Genomics giants operate proteomics as business units. AI protein winners are those with proprietary multi-property datasets and clinical-stage molecules. Market structure: 2-3 dominant clinical platforms (like Illumina in genomics), dozens of specialized panels.

---

## Startup Opportunities

**1. Disease-Specific Recurring Proteomics Diagnostics**
- Why this follows: Proteins change = recurring tests = superior LTV. Quanterix proves model with Alzheimer's (12 partnerships). Indication-specific reimbursement path clearer than broad panels.
- Wedge: Start with single chronic disease (diabetic kidney disease, heart failure, autoimmune) where longitudinal monitoring has clear clinical utility. Partner with health systems for outcomes data.
- Risk: Reimbursement uncertainty. Requires clinical validation ($10M+). Platform vendors may launch competing panels.

**2. Proteomics Standardization & QC Platform**
- Why this follows: Benzon Foundation identified standardization as #1 barrier. Cross-platform reproducibility is broken. No one bridges platforms.
- Wedge: QC reagents + reference standards for clinical trials. Software for cross-platform data normalization. Position as neutral arbiter.
- Risk: Platform vendors resist third-party standardization. May require regulatory mandate to create demand.

**3. Multi-Property Protein Optimization Platform (Beyond Binding)**
- Why this follows: Binding commoditized (PDB enables it). Preclinical developability datasets small (<1,000 antibodies) but costs $100k-$27M per compound. Chai's 86% developability shows AI can solve this. ([[2025-12-23-the-optimistic-case-for-protein-foundation-model-c]])
- Wedge: Generate proprietary multi-property datasets (expression, stability, immunogenicity, PK/PD) through high-throughput screening like RamaX. License per-design or take success fees.
- Risk: Open-source may catch up. Pharma may in-house. Patent protection unclear (AI circumvents sequence claims).

**4. AI Clinical Decision Support for Proteomics**
- Why this follows: Physicians can't interpret 11,000 protein values. Need explainable AI that reduces to top 10 actionable insights with evidence links.
- Wedge: Start with research-to-clinical translation for pharma (biomarker selection). Expand to health system clinical decision support.
- Risk: Platform vendors build in-house. Liability concerns. Regulatory pathway unclear for AI interpretation.

---

## Watch For

**If RIGHT (thesis plays out):**
- Quanterix LucentAD achieves >$50M annual revenue by 2026 (validates proteomics reimbursement at scale)
- Another major proteomics M&A >$1B (signals genomics incumbents see strategic value)
- Chai or similar shows clinical-stage molecule with AI-optimized multi-property profile (validates dataset moat thesis)
- Mass spec fails to achieve <$100/sample with <2hrs hands-on by 2027 (affinity platforms maintain clinical advantage)

**If WRONG (thesis fails):**
- Genomics polygenic risk scores gain broad reimbursement (DNA becomes recurring)
- Proteomics reimbursement stays stuck at <$100 per test (business model breaks)
- Open-source AI protein models achieve comparable multi-property optimization (dataset moat disappears)
- Major pharma builds in-house AI protein capabilities, stops licensing from startups

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-12 | [[Alex __ Emre]] | Operator | "Proteins change constantly vs DNA 'once and done.'" TAM ~$100B, 5-10% penetration. Tens of dollars per sample. |
| 2025-11-10 | [[Quanterix Q3 2025 earnings - 80% recurring revenue]] | Company | 80% recurring revenue. 7 consecutive quarters double-digit growth. $897 LucentAD pricing recommendation. |
| 2024-07-10 | [[Thermo Fisher acquires Olink for $3.1B]] | Company | $3.1B acquisition. Olink 40-50% high-plex market share. 5,300+ validated protein targets. |
| 2024-02-26 | [[Alamar Biosciences raises $128M Series C for NULISA proteomics]] | Company | $250M total. NULISA: attomolar sensitivity (10-100x competitors), 10,000-fold signal-to-noise improvement. |
| 2025-09-10 | [[Illumina to acquire SomaLogic for $425M]] | Company | H1 2026 close. SomaLogic: 9,500 unique human protein targets per experiment. |
| 2025-12-23 | [[2025-12-23-neurips-2025-biologys-transformer-moment]] | Article | Chai-2: 16% de novo antibody hit rate (vs <1% traditional). Genesis Pearl beats AlphaFold3 in atomic accuracy. |
| 2025-06-30 | [[Chai Discovery unveils Chai-2 with 86% developability and 16% hit rate]] | Company | 16% hit rate, 86% developability (zero/one flagged problem), <2 weeks AI-to-validation. $130M Series B at $1.3B valuation. |
| 2025-11-23 | [[2025-12-23-on-ai-infrastructure-in-biology]] | Article | NGS: $0 to $10B over 25 years through elasticity. Illumina 72% consumables at 67% gross margin. Natera ($31B) > Illumina ($18B). Compute-as-reagent model. |
| 2025-05-05 | [[2025-12-23-boolean-biotech]] | Article | ProteinMPNN: functional variants at 40% sequence identity—below patent thresholds. CDR-level patents vulnerable to mutation scanning. |
| 2025-10-11 | [[2025-12-23-the-optimistic-case-for-protein-foundation-model-c]] | Article | Binding commoditized. Multi-property optimization (expression, stability, immunogenicity, PK/PD) is real value. Preclinical costs $100k-$27M. Developability datasets <1k antibodies. |
| 2025-12-17 | [[Models are out, molecules are in as AI startups sprint to clinic]] | Article | EvolutionaryScale ($142M seed) folded into Zuckerberg nonprofit 2025. 8 AI programs in clinic now, 21 expected by end 2026. "You get credit for molecules." |
| 2025-09-04 | [[DNA Foundation Models and Their Applications]] | Article | DNA FMs general platform but medical utility limited to cancer. Proteins = 2% of genome, DNA = 98%—highlights genomics once-and-done limitation. |
| 2025-12-16 | [[RamaX]] | Company | 1B binder screens in 1-2 weeks. "RamaX enables rapid feedback loop for binder discovery." AI performance scales with data. |
