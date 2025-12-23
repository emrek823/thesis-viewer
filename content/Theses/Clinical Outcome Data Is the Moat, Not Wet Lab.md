# Thesis: Clinical Outcome Data Is the Moat, Not Wet Lab

## Investment Take

Foundation models in biology commoditize faster than in language—open-source parity in 12-18 months. Structure prediction is solved (AlphaFold). Binding prediction is commoditizing. **The thesis has shifted: Chai-2's 86% developability validation proves computational moats are possible, but clinical translation remains the ultimate test.**

Chai-2 achieved 16% binding hit rate (100x improvement) and 86% developability on par with therapeutic antibodies. This proves the binding-to-druggable gap is solvable computationally. But 86% developability in silico still requires Phase I/II/III validation. **The moat moved downstream—from wet lab discovery data to clinical outcome data.**

PROTON (Dec 2025) validates this: graph transformer hypotheses were tested in n=610,524 patient EHRs at Mass General Brigham—five predicted drugs showed reduced 7-year dementia risk (HR=0.63, 95% CI: 0.53-0.75, p<1×10⁻⁷) ([[Graph AI generates neurological hypotheses validated in molecular, organoid, and clinical systems]]). The differentiator is validation against real patient outcomes at population scale, not model architecture.

G2P Bio reinforces: 9 of 11 existing mutation-effect models perform worse than random on real human data. Their SLMM trained on population outcomes achieved 20x improvement (ΔBIC 556 vs 27) ([[GPT_Bio_Pitch_Deck]]). Data refinement > model architecture.

**How this evolved:**
- *2025-12-20:* Started as "wet lab is the moat." Chai-2's 86% developability validation challenged this—computational methods can solve binding-to-druggable gap.
- *2025-12-21:* Added PROTON validation (n=610,524 patients). Moat shifted from "wet lab data" to "clinical outcome data"—Phase II/III results become the new training signal.
- *2025-12-21:* Lilly TuneLab: $1B worth of proprietary drug disposition + safety + preclinical data now available via federated learning to biotech partners. Signals pharma willing to share preclinical data (downstream of clinical). **Major thesis implication:** If Lilly opens $1B in data, pharma data moats are eroding. The new moat is truly downstream—Phase II/III outcome data and real-world evidence where competitive risk is lower.

---

## Bull Case

- [x] **Computational developability is solved.** Chai-2 proved 86% developability computationally. Wet lab no longer required for discovery.
  - *Evidence:* [[Chai Discovery unveils Chai-2 with 86% developability and 16% hit rate]] — 16% hit rate (100x improvement), 86% developability on par with therapeutic antibodies

- [ ] **Clinical outcome data compounds.** Whoever accumulates Phase II/III data first trains better models. Early movers have flywheel advantage.
  - *Evidence:* [[Graph AI generates neurological hypotheses validated in molecular, organoid, and clinical systems]] — PROTON validated in 610K patients. Population-scale clinical data differentiates.

- [ ] **Open-source stalls at binding, not developability.** RFdiffusion + Boltz-2 solve structure. Developability requires proprietary failure data (aggregation, immunogenicity, expression).
  - *Evidence:* Needs validation — track open-source developability benchmarks

---

## Bear Case

- [ ] **Open-source catches up.** If RFdiffusion + AlphaFold3 + Boltz-2 reaches 10%+ hit rates within 18 months, computational moats erode. Platforms become commodity services.
  - *Evidence:* [[How to Train a State-of-the-Art Pathology Foundation Model with $1.6k]] — SOTA pathology on 12K slides for $1.6K. Cost commoditization is real.

- [ ] **Clinical failures reset narrative.** If Absci's ABS-101, Insilico's Rentosertib fail, "AI-discovered" becomes stigma. BenevolentAI's 90% valuation collapse shows market unforgiving.
  - *Evidence:* Needs monitoring — track Phase II/III results from AI platforms

- [ ] **No AI drugs approved yet.** Despite $3.2B invested, BCG couldn't determine if AI drugs progress faster than conventional. Bubble risk if optimism not matched by reality.
  - *Evidence:* Needs monitoring — Track Phase II/III results from AI platforms (8 programs in clinic as of 2025)

---

## Startup Opportunities

**1. Clinical Outcome Data Platform**
- Aggregate Phase II/III outcome data across programs, offer prediction services
- Why this follows: Chai-2 proved developability. Next moat is clinical outcomes.
- Wedge: Start with failed programs (less IP sensitivity), aggregate learnings
- Risk: Pharma won't share clinical data (competitive), privacy constraints

**2. Population Genomics Validation (G2P model)**
- Clean signal extraction from biobanks for target validation
- Why this follows: 9/11 models fail on real human data. Population outcomes beat cell lines.
- Validation: Altos Labs paid $100K, changed R&D priorities ([[GPT_Bio_Pitch_Deck]])
- Risk: Requires biobank partnerships; 7-year technical moat may limit fast followers

**3. Pathology-Based Molecular Inference**
- H&E → molecular inference at 75% cost reduction ($500-1,500 vs $3,000-8,000)
- Why this follows: 70% of oncology decisions rely solely on H&E morphology
- EXAONE Path 2.5 validates multi-modal pathology approach ([[EXAONE Path 2.5 Pathology Foundation Model with Multi-Omics Alignment]])
- Risk: Regulatory pathway for clinical claims, large training datasets required

---

## Open Questions

**When does open-source achieve 10%+ hit rates?**
→ ANSWERED (Dec 2025): **Open-source already hitting 10-100%.** BindCraft (AlphaFold2-based, open-source): 10-100% experimental success rates for de novo binders. Latent-X: >90% on macrocyclic peptides. RFdiffusion3: "order of magnitude improvement over RFD2." **Computational binding moats ARE commoditizing.** This validates thesis shift: moat is clinical outcome data, not binding prediction. Invest in companies with Phase II/III outcome data, not model architecture.

**Can platform-only models reach $1B+ without drug pipeline?**
→ OPEN: Schrödinger lesson—decades on software, realized needed own pipeline. If all platform-only plays pivot to hybrid, pipeline required for $1B+.

**Will clinical outcome data accumulate or remain siloed?**
→ OPEN: If federated learning enables cross-pharma outcome sharing, data flywheel viable. If each pharma keeps outcomes siloed, no network effects.

**Does pharma build or buy computational capability?**
→ OPEN: GSK's $30B model vs 120 partnerships in 2025. Track Top 10 pharma AI hiring vs partnership announcements.

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-06-30 | [[Chai Discovery unveils Chai-2 with 86% developability and 16% hit rate]] | Company | 16% hit rate (100x improvement), 86% developability. Proves binding-to-druggable gap solvable computationally. |
| 2025-12-21 | [[Graph AI generates neurological hypotheses validated in molecular, organoid, and clinical systems]] | Research | PROTON validated in n=610,524 patients. 5 drugs reduced dementia risk (HR=0.63). |
| 2025-12-20 | [[GPT_Bio_Pitch_Deck]] | Company | 20x improvement (ΔBIC 556 vs 27). 9/11 models fail on real human data. |
| 2025-12-20 | [[Virtue Mango]] | Operator | Multi-modal convergence. $4.8M Sanofi contract. SOTA cancer outcomes. |
| 2025-12-17 | [[How to Train a State-of-the-Art Pathology Foundation Model with $1.6k]] | Research | SOTA pathology on 12K slides for $1.6K. Cost commoditization real. |
| 2025-12-21 | [[EXAONE Path 2.5 Pathology Foundation Model with Multi-Omics Alignment]] | Research | Multi-modal pathology foundation model for cancer progression. |
| 2025-12-21 | [[2025-12-21-lilly-launches-tunelab-platform-to-give-biotechnol]] | Company | Lilly TuneLab: $1B+ proprietary data (drug disposition, safety, preclinical) via federated learning. Pharma opening preclinical data—moat moves to Phase II/III outcomes. |
