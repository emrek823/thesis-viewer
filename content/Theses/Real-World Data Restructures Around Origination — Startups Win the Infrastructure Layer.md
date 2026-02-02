## Overview

The RWD market hit $2.38B in 2025 and projects to $6.1B by 2032 (14.4% CAGR), but the economics are restructuring away from aggregators toward data originators going direct. The delta: only 12 drugs in 14 years included RWE under prior FDA rules; December 2025 guidance removed the patient-level data requirement, opening regulatory floodgates. Commissioner Makary: "Removing unnecessary barriers... submit whatever real-world data you want." The mechanism: data originators (CVS, Optum, Evernorth) realized their liberal licensing terms let aggregators capture value they should own. Inovalon was one of the first to pull data from DRG, forcing direct contracts while prohibiting reselling. This model extended to Evernorth, CVS/Caremark, OptumRx, Change, and FinThrive — restricting fields of use, applications of use (Evernorth prohibits underwriting), and techniques of use (banning AI/ML training). PurpleLab's CEO: "High licensing costs put gross margins and free cash flow at the mercy of our data suppliers."

The gap: no single data originator has full coverage of claims, structured EHR, and unstructured documents/notes — and no data marketplace does either. Study of 18K geriatric patients showed falls, malnutrition, and social isolation require claims + structured EMR + free-text NLP to identify. FDA now requires computable phenotypes, data validation, distributed networks, and Common Data Models (OMOP, Sentinel) for regulatory submissions — raw data aggregators fail these requirements. The winners: startups that build the infrastructure layer originators need but can't build — privacy/clean rooms solving AI licensing restrictions, FHIR translation for regulatory compliance, unstructured data processing at scale. Flatiron's clinical research sale and Roche's $3.2B writeoff prove captive data models structurally fail; Datavant's neutral infrastructure ($1B+ revenue, $7B valuation, 80K+ hospitals, profitable) validates the alternative.

**How this evolved:**
- *2026-02-01:* **V15 TITLE-FIRST REBUILD** — Scope tightened to match title. Removed sources about claims editing, diagnostics business models, payer operations, market intelligence, and general healthcare AI (wrong markets). Kept only sources about RWD market structure, FDA policy, originator behavior, and infrastructure layer. Removed Tuva/data transformation (different market).
- *2026-02-01:* **V14 REBUILD** — Full evidence re-extraction from 23 source files. Sharpened Overview with exact numbers. Updated quotes with source attribution.
- *2026-02-01:* **V13 MIGRATION** — Consolidated inline citations to Evidence table. Replaced checkbox format with bold headers. Sharpened bull/bear cases.

---

## Bull Case

**Data originators are going direct — and squeezing aggregators.** CVS RWD, Evernorth Clinical Trials Service, Optum Life Sciences, Blue Health Intelligence, Carelon Insights (Elevance), and Forsyth Health (Express Scripts + Centene JV) all bypass aggregators entirely. Inovalon was one of the first to pull their data from DRG, forcing aggregators to contract directly while prohibiting reselling — this model has extended industry-wide. The 40% of pharma RWD budget going to large aggregators is "ripe for disruption" according to two-thirds of survey respondents.

> "High licensing costs put gross margins and free cash flow at the mercy of our data suppliers... restrictions on fields of use, applications of use, techniques of use." — [[purple-lab-bbc2149a]]

**FDA removed the patient-level data barrier — the biggest regulatory shift in a decade.** December 2025 guidance explicitly accepts de-identified datasets for drug and device submissions. The 50+ page guidance formalizes computable phenotypes, distributed networks, and Common Data Models. January 2026 Bayesian methodology guidance opens adaptive trial design using RWD in pivotal trials. FHIR becoming mandatory for regulatory submissions — OMOP-to-FHIR translation tools emerging from JHU and Georgia Tech.

> "FDA eliminates major barrier using real-world evidence in drug and device application reviews." — [FDA Press Release, Dec 2025]

**Neutral infrastructure beats captive data — Flatiron proves it.** Paradigm Health acquired Flatiron's clinical research business December 2025; Roche wrote off $3.2B (Flatiron + Spark goodwill impairment). Core failure: "Flatiron's association with Roche has deterred rival drugmakers from engaging." Datavant's neutral model: $1B+ revenue, profitable, cash-flow positive, 80K+ hospitals, VP managing $100M P&L with Epic/Cerner API integration. Acquired Aetion July 2025 for end-to-end RWE platform with 300+ data partners; acquired Ontellus for $1B-$1.5B transforming into vertically integrated ROI + record retrieval.

> "Data commoditized; value accrues to the normalization/orchestration layer." — [[tegus-calls-on-interop-8d257b4b]]

**Clean rooms solve the AI data licensing problem originators created.** Data originators explicitly restrict AI/ML training, synthetic data, and resale. Clean rooms enable limited-term, scoped access with controlled outputs — model results only, not raw data. Datavant + AWS Clean Rooms validated with top-20 pharma. TripleBlind: privacy-preserving computation eliminates de-identification requirements; claims "43 zettabytes of data inaccessible due to privacy."

> "Data owners are resisting LLM training due to perpetual license risks." — [[purple-lab-bbc2149a]]

---

## Bear Case

**Originators may successfully go direct without needing startup infrastructure.** CVS, Optum, and Evernorth are all building proprietary data platforms and AI-driven analytics solutions. Inovalon has 336M+ patients, 62B medical events, 750K+ connected providers, and FHIR-enabled DataStream API. Epic Curiosity foundation model trained on 115B events from 118M patients across 1,760+ hospitals — 50% EHR market share creates structural data moat. If each spends $100M+ on internal capabilities, they become the infrastructure and don't need startups.

> "Legacy businesses with technology as an afterthought versus a focus... a (sometimes misplaced) confidence in the value of their data independent of other similar data sets." — [[purple-lab-bbc2149a]]

**Incumbents have massive scale and existing relationships.** IQVIA holds 33% health analytics share; Optum holds 24% combined. If IQVIA adds clean rooms, FHIR tooling, and unstructured data processing while Datavant shifts from linking to full validation — incumbents capture infrastructure before startups scale. Datavant's Ontellus acquisition shows even neutral players are vertically integrating — the "neutrality" positioning may erode.

> "Heterogeneous populations, supportive-not-pivotal quality remain main rejection drivers for FDA RWD submissions." — [RAPS, Sept 2025]

**LLMs commoditize extraction but not validation.** Clinical NLP achieves 88-93% F1 on 200M+ Epic notes, but "robust validation needed" — no LLM is FDA-approved for clinical use. Flatiron developed VALID Framework as "first comprehensive validation framework for model-extracted data in oncology industry." If validation achieves FDA acceptance before startups establish position, processing layer commoditizes to incumbents who already have regulatory relationships.

**What would have to be true for you to be wrong?** Two paths break this thesis. First, data originators successfully go direct to pharma AND build adequate technology internally — Epic Curiosity (115B events, 118M patients) shows this is technically feasible; if CVS, Optum, and Evernorth each build competitive analytics platforms with full multi-modal coverage, they become the infrastructure and don't need startups. Second, IQVIA and Datavant both successfully pivot to next-gen infrastructure (clean rooms, FHIR, unstructured data) before startups achieve scale — the window closes.

---

## Startup Opportunities

**1. Privacy & Clean Room Infrastructure (Emerging — compliance-driven)**
Data originators explicitly restrict AI/ML training, synthetic data, and resale. Clean rooms enable limited-term, scoped access with controlled outputs — model results only, not raw data. Datavant + AWS Clean Rooms validated with top-20 pharma. TripleBlind: privacy-preserving computation eliminates de-identification requirements.
*The edge:* Every pharma company trying to use AI on healthcare data needs compliant infrastructure. Build for healthcare-specific compliance requirements AWS/Snowflake won't prioritize. Consent infrastructure (HealthEx $14M GC-led, FHIR Consent standard compatible) is adjacent wedge.
*Buyers:* Pharma AI teams, health systems licensing data, digital health companies needing compliant access.
*Risk:* AWS/Snowflake add healthcare-specific clean rooms. Datavant already has validated partnerships.

**2. FHIR Translation & Regulatory Compliance Tooling (Early — mandate-driven)**
FDA signaling FHIR-native regulatory submissions. Most data sits in OMOP or proprietary formats. Academic ecosystems (JHU, Georgia Tech) lead tooling but commercial demand will outpace academic capacity. FDA 50+ page guidance formalizes requirements for computable phenotypes and Common Data Models.
*The edge:* No-code OMOP-to-FHIR mappers for pharma regulatory affairs. Expand to CMS interop mandates. Epic/Oracle won't prioritize regulatory compliance tooling.
*Buyers:* Pharma regulatory affairs, CROs, health systems selling data.
*Risk:* FDA mandate may stall; academic tools may satisfy demand.

**3. Unstructured Clinical Document Processing (Emerging — data expansion-driven)**
V3.0 requires structured EHR + unstructured documents/notes alongside claims. De-identification and tokenization of unstructured data at scale is unsolved. NLP/AI abstraction of clinical narrative (free-text notes, scanned docs, eFaxes) is a new requirement. John Snow Labs achieving 88-93% F1 on clinical NLP but "robust validation needed" for FDA acceptance.
*The edge:* LLMs at 88-93% F1 aren't FDA-validated. Human-in-the-loop validation workflows for regulatory-grade extraction. Race to validation, not extraction.
*Buyers:* Pharma regulatory affairs, clinical research organizations, health systems selling data.
*Risk:* Flatiron VALID Framework may become industry standard before startups scale.

**4. First-Party Data Origination via Services (Emerging — bypass-driven)**
Build software/analytics for payers, providers, or HCIT where data rights are a by-product of revenue-generating activity. PurpleLab strategy: equity/revenue share for data access, $500K-$1M annual value per company. Tempus proved it with diagnostics: tests create data relationships, licensing becomes margin-accretive at 72.7% gross margin on top.
*The edge:* Originators can't restrict what you generate yourself. Bypass the licensing trap entirely.
*Buyers:* N/A — you are the originator; you sell to pharma.
*Risk:* Requires achieving scale in primary revenue-generating service before data licensing becomes meaningful. Tempus model took 7+ years.

---

## Open Questions

**Will originators build or buy infrastructure?** CVS, Optum, and Evernorth are all investing in proprietary platforms. Epic Curiosity represents $100M+ R&D investment in foundation models. If they acquire rather than build, startup M&A opportunity emerges. If they build successfully, infrastructure layer fragments.
Stakes: determines whether startup opportunity is platform-scale or acqui-hire-scale.

**Does FHIR mandate materialize?** FDA signaling but not formalizing. If mandate stalls, translation tooling demand evaporates; if mandate accelerates, every data company scrambles.
Stakes: $100M+ TAM for FHIR tooling hangs on regulatory timing.

**Can validation achieve FDA acceptance before incumbents catch up?** LLM extraction commoditizes fast; validation is the moat. Flatiron's VALID Framework is first validation methodology for LLM-extracted oncology data. First company to get FDA-accepted validation methodology wins the processing layer.
Stakes: defines whether infrastructure opportunity accrues to startups or gets absorbed by IQVIA/Datavant.

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

---

*Confidence: HIGH — Data originator power shift is structural (PurpleLab V3.0 framework validated by CVS/Evernorth/Optum going direct). FDA barrier removal confirmed December 2025. Flatiron sale + Roche writeoff prove captive models fail. Four convergences (beyond-claims, FHIR, clean rooms, AI licensing restrictions) create distinct startup wedges. Risk is originators building internal infrastructure (Epic Curiosity) or incumbents capturing infrastructure layer before startups scale.*
*Last indexed: 2026-02-01*
*Last rebuilt: 2026-02-01*
