## Overview

We've been investing across the pharma tech stack over the last few years and the world is evolving. Claims data is table stakes and the value of continual RWD purchases is declining as models can incorporate insights from this data in their model weights. 

The early days were a coverage arms race where aggregators won on breadth. Over the past few years, data originators woke up and started clawing back control. In the current moment, XXX 

| Version | Era | What Data Means | Who Wins | Where Startups Fit |
|---------|-----|-----------------|----------|---------------------|
| **V1.0** | ~2016 | Open pharmacy claims for incentive comp. DRG/Clarivate underwrote the Datavant ecosystem by enabling the next wave of data aggregators. | Aggregators (IQVIA, Symphony) — pure scale game on coverage breadth | Nowhere. Aggregator moat = who has the most claims |
| **V2.0** | 2020-2024 | Open + closed claims spanning medical and pharmacy, clinical + commercial needs. Originators realize liberal licensing terms let aggregators capture their value. Inovalon pulls data from DRG, forces direct contracts, prohibits reselling. Model extends to Evernorth, CVS/Caremark, OptumRx, Change, FinThrive. | Originators squeeze aggregators — restrict fields of use, applications of use (Evernorth prohibits underwriting), techniques of use (ban AI/ML training, synthetic data). | Narrow. Aggregator margins compress but they still intermediate. "High licensing costs put gross margins and free cash flow at the mercy of our data suppliers." — PurpleLab CEO |
| **V3.0** | 2025+ | Claims + structured EHR + unstructured documents/notes. FDA removes patient-level data barrier (Dec 2025 — only 12 drugs in 14 years included RWE under prior rules). FHIR mandated for regulatory submissions. Clean rooms required for AI licensing compliance. | Originators go direct: CVS RWD, Evernorth Clinical Trials, Optum Life Sciences, BHI, Carelon Insights, Forsyth Health (Express Scripts + Centene JV). But **no single originator has full coverage of all three data types** — and no marketplace does either. | **Infrastructure layer**: clean rooms for AI licensing, FHIR translation for regulatory compliance, unstructured processing at scale, first-party origination via services |

The pattern is not that pharma needs more data but that each version restructures who holds power and where value accrues. V1.0 aggregators won on breadth. V2.0 originators clawed back control through licensing restrictions so severe that PurpleLab's own CEO framed it as an existential threat to aggregator economics. V3.0 originators bypass aggregators entirely and go direct to pharma — but they hit a structural gap. A study of 18K geriatric patients showed falls, malnutrition, and social isolation require claims + structured EMR + free-text NLP to identify. No originator covers all three. FDA now requires computable phenotypes, data validation, distributed networks, and Common Data Models (OMOP, Sentinel) for regulatory submissions — raw aggregated data fails these requirements. The 40% of pharma RWD budget going to large aggregators is "ripe for disruption" per two-thirds of survey respondents. The $2.38B market projecting to $6.1B by 2032 (14.4% CAGR) is restructuring around origination, not aggregation.

---

## What This Means for Startups

The infrastructure layer is the wedge because originators need capabilities they structurally cannot build. Five convergences hit simultaneously: beyond-claims data requirements where no originator has full multi-modal coverage; FHIR mandates where most data sits in OMOP or proprietary formats and academic tooling (JHU, Georgia Tech) can't meet commercial demand; clean rooms solving AI licensing restrictions where data owners "are resisting LLM training due to perpetual license risks"; unstructured document processing where NLP achieves 88-93% F1 but no LLM is FDA-approved for clinical use; and market consolidation accelerating as Datavant acquires Aetion (end-to-end RWE, 300+ data partners) and Ontellus ($1B-$1.5B, vertically integrated ROI + record retrieval). The proof that captive data models fail is definitive: Paradigm Health acquired Flatiron's clinical research business December 2025, Roche wrote off $3.2B — core failure was Flatiron's association with Roche deterring rival drugmakers. Datavant's neutral model ($1B+ revenue, profitable, 80K+ hospitals) validates the alternative.

The demand-side evidence is equally clear. The BioMarin/Seagen HEOR expert confirmed pharma never builds unstructured data processing in-house — "the trend is outsourcing everything." ConcertAI NLP feasibility often overpromises: "when you get the full readout, a lot of those patients were not useful." A 6-month chart review became 2 years because sites deprioritize retrospective work. Pharma is structurally dependent on external vendors for this. The Oak Street Medical Director: "data commoditized; value accrues to the normalization/orchestration layer." The startups that win are the ones building what originators need to make their data regulatory-ready and AI-compliant — not the ones trying to out-aggregate the aggregators.

The four wedges: (1) **Privacy/clean rooms** — healthcare-specific compliance that AWS/Snowflake won't prioritize, consent infrastructure (HealthEx $14M GC-led). (2) **FHIR translation** — no-code OMOP-to-FHIR mappers for pharma regulatory affairs, expanding to CMS interop mandates. (3) **Unstructured processing with validation** — the race is to validation, not extraction; LLMs at 88-93% F1 aren't FDA-validated, and Flatiron's VALID Framework is the first attempt. (4) **First-party data origination via services** — build software for payers/providers/HCIT where data rights are a by-product; PurpleLab strategy ($500K-$1M annual value per company via equity/revenue share); Tempus proved it with diagnostics at 72.7% gross margin.

---

## The Coverage Gap Problem

This thesis breaks if originators successfully go direct AND build adequate technology internally. Epic Curiosity (115B events, 118M patients, ~50% EHR market share) shows this is technically feasible for structured data. Inovalon has 380M+ lives and a FHIR-enabled DataStream API. But Inovalon's own former VP of Sales revealed the structural constraint: their life sciences division was 54 employees competing against IQVIA and Optum with thousands each, running "literally as a start-up" that called themselves "the black sheep of Inovalon." PurpleLab's CEO described the originator profile: "legacy businesses with technology as an afterthought versus a focus... a sometimes misplaced confidence in the value of their data independent of other similar data sets." The originators have the data but not the teams, the technology focus, or the incentive to build infrastructure for competitors.

The second break: IQVIA (33% health analytics share) and Datavant ($7B, adding Aetion + Ontellus) both successfully pivot to next-gen infrastructure before startups achieve scale. Datavant's Ontellus acquisition already shows neutral players vertically integrating — the "neutrality" positioning may erode. And LLMs commoditize extraction fast; if validation achieves FDA acceptance through an incumbent framework (Flatiron VALID), the processing layer collapses to whoever has regulatory relationships. The open questions: will originators build or buy infrastructure (determines platform-scale vs. acqui-hire-scale opportunity)? Does the FHIR mandate materialize as hard requirement or stay as guidance ($100M+ TAM hangs on regulatory timing)? And can validation achieve FDA acceptance before incumbents catch up — first company to get FDA-accepted validation methodology wins the processing layer.

PurpleLab's own strategic response tells you everything about where this market is going. Their plan: become a first-party data originator by providing software/analytics to payers, providers, and HCIT where data rights are a by-product of revenue-generating activity. Even the most sophisticated aggregator in the room sees the future as origination, not aggregation. The question for us is whether the infrastructure layer that makes all of this work consolidates around Datavant or fragments into startup-scale opportunities.

**How this evolved:**
- *2026-02-08:* **V16 STYLE REBUILD** — Rewrote in Clinical AI Evaluation Ladder style. PurpleLab V1.0/V2.0/V3.0 framework as organizing spine. Collapsed Bull/Bear/Startup Opportunities into three narrative sections. Integrated Tegus expert evidence (Inovalon VP, BioMarin HEOR manager) into the argument.
- *2026-02-01:* **V15 TITLE-FIRST REBUILD** — Scope tightened to match title. Removed sources about claims editing, diagnostics business models, payer operations, market intelligence, and general healthcare AI (wrong markets). Kept only sources about RWD market structure, FDA policy, originator behavior, and infrastructure layer. Removed Tuva/data transformation (different market).
- *2026-02-01:* **V14 REBUILD** — Full evidence re-extraction from 23 source files. Sharpened Overview with exact numbers. Updated quotes with source attribution.
- *2026-02-01:* **V13 MIGRATION** — Consolidated inline citations to Evidence table. Replaced checkbox format with bold headers. Sharpened bull/bear cases.

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12 | [[purple-lab-bbc2149a]] | Company | V3.0: Data originators go direct. CVS RWD, Evernorth Clinical Trials, Optum Life Sciences, BHI, Carelon Insights, Forsyth Health bypass aggregators |
| 2025-12 | [[purple-lab-bbc2149a]] | Company | Inovalon pulled data from DRG, forced direct contracts, prohibited reselling. Evernorth prohibits underwriting. AI/ML training restricted |
| 2025-12 | [[purple-lab-bbc2149a]] | Company | No Data Originator has full coverage of Claims, Structured EHR and Unstructured Documents & Notes |
| 2025-12 | [[purple-lab-bbc2149a]] | Company | 5 convergences: beyond-claims data, FHIR mandate, clean rooms, agentic AI/MCP, market consolidation |
| 2025-12 | [FDA Press Release](https://www.fda.gov/news-events/press-announcements/fda-eliminates-major-barrier-using-real-world-evidence-drug-and-device-application-reviews) | Policy | FDA removed patient-level data requirement; only 12 drugs in 14 years included RWE; Makary: "removing unnecessary barriers" |
| 2025-12 | [Federal Register](https://www.federalregister.gov/documents/2025/12/18/2025-23252/use-of-real-world-evidence-to-support-regulatory-decision-making-for-medical-devices-guidance-for) | Policy | Final guidance supersedes 2017; operationalizes Feb 2026 |
| 2026-01 | [[real-world-data--assessing-electronic-health-records-and-med-0088ee5f]] | Policy | FDA 50+ page guidance: computable phenotypes, data validation, distributed networks, Common Data Models |
| 2026-01 | [[Sources/Policy/Federal-Register/2026-01-12-Use-of-Bayesian-Methodology-in-Clinical-Trials-of-Drug-and-Biological-Products;-]] | Policy | FDA draft guidance on Bayesian methodology for pivotal clinical trials |
| 2025-12 | [Fierce Biotech](https://www.fiercebiotech.com/cro/paradigm-health-raises-78m-revamp-clinical-research-process-inks-deal-roches-flatiron) | News | Paradigm Health acquired Flatiron clinical research Dec 2025; Roche wrote off $3.2B |
| 2025-01 | [Datavant $7B](https://bestofai.com/article/what-7-billion-datavant-is-looking-for-in-a-healthcare-acquisition) | News | Datavant: $1B+ revenue, profitable, $7B valuation, 80K+ hospitals |
| 2026-01 | [[tegus-calls-on-interop-8d257b4b]] | Operator | Data commoditized; value accrues to normalization/orchestration layer |
| 2026-01 | [[2026-01-10-pharma-saas-what-wins]] | Analysis | Datavant acquired Aetion July 2025 for end-to-end RWE; 300+ data partners. Neutral infrastructure beats captive data |
| 2025 | [TriNetX Survey](https://trinetx.com/real-world-resources/ai-real-world-data-and-inclusion-in-pharma-2025-industry-survey-report/) | Research | 40% pharma executives rate RWD "critical"; 58% "very important"; $300M average savings |
| 2025 | [Coherent Market Insights](https://www.coherentmarketinsights.com/market-insight/real-world-data-rwd-market-6029) | Research | RWD market $2.38B (2025) to $6.1B (2032) at 14.4% CAGR; North America 42.5% share |
| 2026-01 | [John Snow Labs](https://www.johnsnowlabs.com/what-structured-nlp-does-that-llms-still-cant-precision-extraction-at-billion-document-scale/) | Research | LLMs 88-93% F1 on clinical NLP; 200M+ Epic notes need cohort selection, de-ID, human-in-the-loop |
| 2025-12 | [[rwd-cf3e0145]] | Research | 40% RWD budget to large aggregators; 2/3 agree "ripe for disruption" |
| 2025 | [[tripleblind-healthcare-overview-15410c1b]] | Company | TripleBlind: privacy-preserving computation eliminates de-identification requirements; "43 zettabytes of data inaccessible due to privacy" |
| 2025 | [[inovalon-himss-37a2aec3]] | Company | Inovalon: 336M+ patients, 62B medical events, 750K+ connected providers, FHIR-enabled DataStream API |
| 2025-12 | [[2025-12-21_datavant_expert_call_memo-ab32fda4]] | Operator | Datavant VP manages $100M P&L, 260 employees; Epic/Cerner API integration |
| 2024 | [Roche Finance Report](https://assets.roche.com/f/176343/x/38d96ed8ec/fb24e.pdf) | Company | Roche $3.2B writeoff (Flatiron + Spark goodwill impairment) |
| 2025-12 | [[purplelab-805274ed]] | Company | PurpleLab: incubating AI businesses on data asset. Strategy to become first-party originator via equity/revenue share for data access |
| 2025-12 | [[memo---datavant-ontellus-c377eed2]] | M&A | Datavant acquires Ontellus ($1B-$1.5B est); transforms into vertically integrated ROI + record retrieval; competitors lose neutral API partner |
| 2024-10 | [[2025-12-23-healthex-raises-14m-led-by-general-catalyst-to-emp]] | Funding | HealthEx $14M (GC-led) for AI consent/preference platform; FHIR Consent standard compatible; validates consent origination infrastructure |
| 2025-08 | [[Claude-Epic Curiosity healthcare foundation model memo]] | Company | Epic Curiosity: 115B events, 118M patients, 300M+ records in Cosmos. Originator going direct with AI — ~50% EHR market share moat |
| 2025 | [Mahalo Health](https://www.mahalo.health/insights/top-real-world-evidence-rwe-platforms) | Research | IQVIA 33% + Optum 24% combined health analytics share |
| 2025-09 | [RAPS](https://www.raps.org/news-and-articles/news-articles/2025/9/fda-official-updates-on-advancing-rwe-program,-lis) | Policy | Common FDA rejections: heterogeneous populations, supportive-not-pivotal evidence quality |
| 2026-02 | [[inovalon---former-vp-of-sales-8fbab5a1]] | Operator | Inovalon 380M+ lives data asset going direct to pharma; 54-person life sciences division competing against thousands at IQVIA/Optum |
| 2026-02 | [[former-manager-health-economics-and-outcomes-research-at-sea-e21e8f1b]] | Operator | ConcertAI NLP extraction from unstructured EHR; 6-month chart review study became 2 years; "the trend is outsourcing everything"; data quality attrition critical |

---

*Confidence: HIGH — Data originator power shift is structural (PurpleLab V1.0→V3.0 framework validated by CVS/Evernorth/Optum going direct). FDA barrier removal confirmed December 2025. Flatiron sale + Roche writeoff prove captive models fail. Four convergences (beyond-claims, FHIR, clean rooms, AI licensing restrictions) create distinct startup wedges. Risk is originators building internal infrastructure (Epic Curiosity) or incumbents capturing infrastructure layer before startups scale.*
*Last indexed: 2026-02-08*
*Last rebuilt: 2026-02-08*
