![[Images/real-world-data-infrastructure-becomes-pharma-critical-path.png]]

## The Take

**FDA removed major RWD submission barrier December 2025—no longer requiring individual patient-level data access. Only 12 drugs in 14 years included RWE under prior rules. Quality infrastructure becomes the moat.**

Precision medicine market expanding from $119B (2025) to $537B (2035) at 16.26% CAGR. FDA's RWD guidance requires specific infrastructure: computable phenotypes, data validation, distributed networks, Common Data Models (OMOP, Sentinel), QA/QC audit trails. Raw data aggregators fail these requirements. Companies solving data QUALITY—consent, structuring, validation, regulatory compliance—capture the value layer.

Commissioner Makary: "We're removing unnecessary barriers that have prevented us from using powerful real-world evidence to get life-changing treatments to patients faster." This creates DEMAND for quality infrastructure, not a relaxation of standards.

**In 3-5 years:** RWD infrastructure required for all pharma regulatory submissions. 2-3 platforms dominate quality/validation layer. Traditional CROs must integrate RWD infrastructure or lose relevance. Rare disease trials become feasible through distributed data networks.

**How this evolved:**
- *2026-01-26:* **REBUILD** — Ran 5 contrarian queries. FDA removed individual patient-level data requirement Dec 2025—BULLISH for quality infrastructure. Common rejection reasons: heterogeneous populations, supportive-not-pivotal evidence quality. No evidence FDA reversing RWD acceptance. LLM extraction achieves 88-93% F1 but validation layer still critical. Contrarian threats: FDA requirements remain "soft"; open-source validation commoditizes.
- *2026-01-09:* Added FDA deregulation evidence and Bayesian guidance.
- *2026-01-05:* Created from /new-thesis clustering.

---

## Mechanism

[PHARMA COMPANIES] require [RWD INFRASTRUCTURE] for [REGULATORY SUBMISSIONS] because [FDA FORMALIZES COMPUTABLE PHENOTYPES, DATA VALIDATION, QUALITY REQUIREMENTS] → [DATA QUALITY/VALIDATION PLATFORMS WIN; RAW DATA AGGREGATORS WITHOUT QUALITY LAYER LOSE]

---

## Investment Take

**Today:** FDA is formalizing RWD for regulatory decisions, creating specific infrastructure requirements that raw data aggregators cannot meet. The December 2025 announcement explicitly removed previous requirements for individual patient-level data access—acknowledging that granular data requirements limited rather than expanded RWE's practical use.

**Market dynamics:** Only 12 drugs in 14 years included RWE under prior rules. The barrier removal signals FDA intent to accelerate RWE adoption. Commissioner Makary framed it as "removing unnecessary barriers"—this creates demand for quality infrastructure, not a relaxation of standards.

**What FDA requires for acceptance:**
1. **Computable phenotypes** — algorithmic patient population definitions
2. **Data validation** — accuracy, completeness, traceability documentation
3. **Distributed data networks** — federated queries across institutions
4. **Common Data Models** — standardized schemas (OMOP, Sentinel)
5. **QA/QC for regulatory submissions** — audit trails and provenance

**Common rejection reasons:** FDA official updates cite heterogeneous patient populations and studies providing supportive-not-pivotal evidence as main rejection drivers. This is a QUALITY problem, not a VOLUME problem.

**LLM impact:** LLMs achieve 88-93% F1 on clinical NLP extraction, but "LLMs can produce errors and hallucinations—robust validation approaches needed." The moat isn't extraction (commoditizing); it's validation that makes LLM-extracted data FDA-acceptable.

**In 3-5 years:** RWD infrastructure becomes required layer for all pharma regulatory submissions. 2-3 platforms dominate quality/validation layer (Datavant, Veeva, potentially Tempus). Traditional CROs must integrate RWD infrastructure. Raw data aggregators commoditize unless they add quality layer.

---

## Bull Case

- [x] **FDA removed major RWD barrier December 2025** — No longer requiring individual patient-level data access; Commissioner Makary: "removing unnecessary barriers" ([FDA Press Release](https://www.fda.gov/news-events/press-announcements/fda-eliminates-major-barrier-using-real-world-evidence-drug-and-device-application-reviews))
- [x] **Only 12 drugs in 14 years included RWE** — Prior requirements massively limited adoption; barrier removal signals acceleration ([FDA Press Release](https://www.fda.gov/news-events/press-announcements/fda-eliminates-major-barrier-using-real-world-evidence-drug-and-device-application-reviews))
- [x] **FDA formalizing RWD for regulatory decisions** — 50+ page guidance specifies data quality requirements ([[real-world-data--assessing-electronic-health-records-and-med-0088ee5f]])
- [x] **Computable phenotypes required** — Algorithmic patient definitions, not manual chart review ([[real-world-data--assessing-electronic-health-records-and-med-0088ee5f]])
- [x] **Precision medicine market $119B→$537B** — 16.26% CAGR 2025-2035 creates massive demand ([[precision-medicine-market]])
- [x] **Bayesian methodology guidance formalized** — FDA draft guidance on Bayesian methodology for pivotal trials; formalizes adaptive trial design ([[Sources/Policy/Federal-Register/2026-01-12-Use-of-Bayesian-Methodology-in-Clinical-Trials-of-Drug-and-Biological-Products;-]])
- [ ] **First NDA approved with RWD as primary efficacy evidence** — Regulatory precedent needed
- [ ] **Major pharma mandates RWD infrastructure** — Procurement requirement for all trials

---

## Bear Case

- [x] **Common rejection reasons persist** — FDA cites heterogeneous populations, supportive-not-pivotal quality as main rejection drivers; quality bar remains high ([RAPS](https://www.raps.org/news-and-articles/news-articles/2025/9/fda-official-updates-on-advancing-rwe-program,-lis))
- [ ] **FDA reverses RWD acceptance** — Regulatory skepticism returns, traditional trials remain gold standard
- [ ] **Raw data aggregators add quality layer** — IQVIA, Optum build validation infrastructure, compete with specialists
- [ ] **Pharma builds internal infrastructure** — Large pharma invests in owned RWD capabilities
- [ ] **Synthetic data replaces RWD** — AI-generated data eliminates need for real patient data
- [ ] **Privacy regulations restrict data linkage** — State/federal laws prevent cross-institutional data sharing

## The Counter Thesis

If FDA maintains high quality bars and rejection rates persist, the infrastructure opportunity is smaller than expected. The barrier removal helps with process (no patient-level data requirement) but doesn't change the fundamental quality requirements (computable phenotypes, validation, audit trails).

If large raw data aggregators (IQVIA, Optum) successfully add quality/validation layers, they could dominate given existing data relationships. The quality layer may not be a separate market but an add-on feature for existing players.

If pharma companies build successful internal RWD infrastructure (many are investing heavily), the vendor opportunity shrinks. Large pharma may prefer owned capabilities over vendor dependency for regulatory-critical submissions.

The LLM commoditization risk: if LLMs become good enough at validated extraction with built-in hallucination detection and provenance tracking, the validation layer could commoditize too. Open-source quality frameworks (OHDSI/OMOP developments) could make infrastructure a utility.

---

## Timeline

**Now → 2026:**
- FDA continues issuing RWD guidance documents
- Pharma companies pilot RWD for supplementary evidence
- Implementation of Dec 2025 barrier removal (operational by Feb 2026)
- Watch for: First FDA approval citing RWD as significant evidence component

**2027 → 2028:**
- FDA publishes definitive RWD requirements for regulatory submissions
- Major pharma mandates RWD infrastructure for all trials
- Critical threshold: 10+ FDA decisions significantly influenced by RWD
- Data quality infrastructure providers reach $100M+ ARR
- Datavant IPO potential

**2029+:**
- RWD infrastructure required for all pharma regulatory submissions
- 2-3 platforms dominate quality/validation layer
- Traditional CROs must integrate RWD infrastructure or lose relevance
- Rare disease trials become feasible through distributed data networks

---

## Startup Opportunities

**1. Computable Phenotype Platform**
- Why this follows: FDA requires algorithmic patient definitions; no standard solution exists
- Wedge: Partner with academic medical centers to develop and validate phenotypes
- Risk: Pharma builds internal; existing EHR vendors (Epic) bundle phenotype tools

**2. RWD Validation-as-a-Service**
- Why this follows: Every RWD submission requires QA/QC and audit documentation
- Wedge: Regulatory consulting expertise + software automation
- Risk: CROs add validation services; FDA requirements remain soft

**3. Distributed Data Network Operator**
- Why this follows: Federated queries across institutions required for scale
- Wedge: Start with oncology networks, expand to other therapeutic areas
- Risk: Existing networks (Flatiron, Tempus) dominate; data sharing agreements difficult

---

## Watch For

**If RIGHT (thesis plays out):**
- FDA approves drug with RWD as primary efficacy evidence (not just safety)
- Top 10 pharma announces "RWD-first" strategy for trial design
- Data quality infrastructure M&A (major pharma acquires validation platform)
- CRO partnerships with RWD infrastructure providers announced
- Raw data aggregator valuations decline relative to quality-layer providers

**If WRONG (thesis fails):**
- FDA issues guidance restricting RWD to supplementary evidence only
- Major RWD-based regulatory submission rejected for data quality issues
- IQVIA/Optum launch competitive quality/validation products
- Pharma companies build successful internal RWD infrastructure
- Open-source validation frameworks achieve FDA acceptance, commoditize layer

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12 | [FDA Press Release](https://www.fda.gov/news-events/press-announcements/fda-eliminates-major-barrier-using-real-world-evidence-drug-and-device-application-reviews) | Policy | "FDA removed patient-level data requirement; only 12 drugs in 14 years included RWE; Makary: 'removing unnecessary barriers'" |
| 2026-01 | [[real-world-data--assessing-electronic-health-records-and-med-0088ee5f]] | Policy | FDA 50+ page guidance on RWD requirements: validation, computable phenotypes, distributed networks |
| 2026-01 | [[datavant-corporate-overview-deck-2-22-20-1-beb1caaa]] | Company | Datavant positioning as data linkage/quality infrastructure |
| 2026-01 | [[precision-medicine-market]] | Research | "$119B market (2025) expanding to $537B (2035) at 16.26% CAGR" |
| 2026-01 | [[2026-01-09-fda-deregulation-investment-thesis]] | Research | FDA removes RWD submission barriers: "Submit whatever real-world data you want now" — Makary |
| 2026-01 | [Datavant Position](https://www.datavant.com/hipaa-privacy/datavant-supports-fda-guidance-with-a-privacy-first-approach-to-using-real-world-evidence-for-regulatory-decision-making) | Company | 500+ institutions, 60M records, PPRL infrastructure benefits from FDA RWD acceptance |
| 2026-01 | [[Sources/News/2026-01-09/fda-exempts-more-wearable-ai-features-from-oversight]] | Policy | FDA loosens wellness device/AI CDS regulation |
| 2026-01 | [[Sources/Policy/Federal-Register/2026-01-12-Use-of-Bayesian-Methodology-in-Clinical-Trials-of-Drug-and-Biological-Products;-]] | Policy | "FDA draft guidance on Bayesian methodology for pivotal clinical trials" |
| 2026-01 | [RAPS - FDA RWE Rejection Reasons](https://www.raps.org/news-and-articles/news-articles/2025/9/fda-official-updates-on-advancing-rwe-program,-lis) | Policy | "Common rejections: heterogeneous populations, supportive-not-pivotal evidence quality" |
| 2026-01 | [Federal Register - RWE Guidance](https://www.federalregister.gov/documents/2025/12/18/2025-23252/use-of-real-world-evidence-to-support-regulatory-decision-making-for-medical-devices-guidance-for) | Policy | "Final guidance supersedes 2017; operational Feb 2026" |
| 2026-01 | [Springer - RWD Inspections](https://link.springer.com/article/10.1007/s43441-025-00791-1) | Research | "GCP inspections verify quality, integrity, reliability of RWD; challenges: accessing source records, data curation" |
| 2026-01 | [John Snow Labs](https://www.johnsnowlabs.com/what-structured-nlp-does-that-llms-still-cant-precision-extraction-at-billion-document-scale/) | Research | "LLMs achieve 88-93% F1 on clinical NLP but require validation infrastructure; 200M+ Epic notes need cohort selection, de-identification, human-in-the-loop" |

---

*Confidence: MEDIUM — FDA barrier removal is bullish for thesis. Quality requirements remain high (computable phenotypes, validation, audit trails). Common rejection reasons (heterogeneous populations, supportive-only evidence) confirm quality > volume. Risk: large aggregators add quality layer or pharma builds internal.*
*Last rebuilt: 2026-01-26*
*Contrarian threats: FDA quality bar remains high for rejections; IQVIA/Optum could add quality layer; open-source validation frameworks could commoditize*
