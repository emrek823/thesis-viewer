## Overview

The RWD market hit $2.38B in 2025 and projects to $6.1B by 2032 (14.4% CAGR), but the economics are restructuring away from aggregators toward data originators going direct. The delta: only 12 drugs in 14 years included RWE under prior FDA rules; December 2025 guidance removed the patient-level data requirement, opening regulatory floodgates. Commissioner Makary: "Removing unnecessary barriers... submit whatever real-world data you want." The mechanism: data originators (CVS, Optum, Evernorth) realized their liberal licensing terms let aggregators capture value they should own. Inovalon was one of the first to pull data from DRG, forcing direct contracts while prohibiting reselling. This model extended to Evernorth, CVS/Caremark, OptumRx, Change, and FinThrive — restricting fields of use, applications of use (Evernorth prohibits underwriting), and techniques of use (banning AI/ML training). Industry analysis shows: "High licensing costs put gross margins and free cash flow at the mercy of our data suppliers."

The gap: no single data originator has full coverage of claims, structured EHR, and unstructured documents/notes — and no data marketplace does either. Study of 18K geriatric patients showed falls, malnutrition, and social isolation require claims + structured EMR + free-text NLP to identify. FDA now requires computable phenotypes, data validation, distributed networks, and Common Data Models (OMOP, Sentinel) for regulatory submissions — raw data aggregators fail these requirements. The winners: startups that build the infrastructure layer originators need but can't build — privacy/clean rooms solving AI licensing restrictions, FHIR translation for regulatory compliance, unstructured data processing at scale. Flatiron's clinical research sale and Roche's $3.2B writeoff prove captive data models structurally fail; Datavant's neutral infrastructure ($1B+ revenue, $7B valuation, 80K+ hospitals, profitable) validates the alternative.

---

## Bull Case

**Data originators are going direct — and squeezing aggregators.** CVS RWD, Evernorth Clinical Trials Service, Optum Life Sciences, Blue Health Intelligence, Carelon Insights (Elevance), and Forsyth Health (Express Scripts + Centene JV) all bypass aggregators entirely. Inovalon was one of the first to pull their data from DRG, forcing aggregators to contract directly while prohibiting reselling — this model has extended industry-wide. The 40% of pharma RWD budget going to large aggregators is "ripe for disruption" according to two-thirds of survey respondents.

**FDA removed the patient-level data barrier — the biggest regulatory shift in a decade.** December 2025 guidance explicitly accepts de-identified datasets for drug and device submissions. The 50+ page guidance formalizes computable phenotypes, distributed networks, and Common Data Models. January 2026 Bayesian methodology guidance opens adaptive trial design using RWD in pivotal trials. FHIR becoming mandatory for regulatory submissions — OMOP-to-FHIR translation tools emerging from JHU and Georgia Tech.

**Neutral infrastructure beats captive data — Flatiron proves it.** Paradigm Health acquired Flatiron's clinical research business December 2025; Roche wrote off $3.2B (Flatiron + Spark goodwill impairment). Core failure: "Flatiron's association with Roche has deterred rival drugmakers from engaging." Datavant's neutral model: $1B+ revenue, profitable, cash-flow positive, 80K+ hospitals. Acquired Aetion July 2025 for end-to-end RWE platform with 300+ data partners; acquired Ontellus for $1B-$1.5B transforming into vertically integrated ROI + record retrieval.

**Clean rooms solve the AI data licensing problem originators created.** Data originators explicitly restrict AI/ML training, synthetic data, and resale. Clean rooms enable limited-term, scoped access with controlled outputs — model results only, not raw data. Datavant + AWS Clean Rooms validated with top-20 pharma. TripleBlind: privacy-preserving computation eliminates de-identification requirements; claims "43 zettabytes of data inaccessible due to privacy."

---

## Bear Case

**Originators may successfully go direct without needing startup infrastructure.** CVS, Optum, and Evernorth are all building proprietary data platforms and AI-driven analytics solutions. Inovalon has 336M+ patients, 62B medical events, 750K+ connected providers, and FHIR-enabled DataStream API. Epic Curiosity foundation model trained on 115B events from 118M patients across 1,760+ hospitals — 50% EHR market share creates structural data moat. If each spends $100M+ on internal capabilities, they become the infrastructure and don't need startups.

**Incumbents have massive scale and existing relationships.** IQVIA holds 33% health analytics share; Optum holds 24% combined. If IQVIA adds clean rooms, FHIR tooling, and unstructured data processing while Datavant shifts from linking to full validation — incumbents capture infrastructure before startups scale. Datavant's Ontellus acquisition shows even neutral players are vertically integrating — the "neutrality" positioning may erode.

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
Build software/analytics for payers, providers, or HCIT where data rights are a by-product of revenue-generating activity. Strategy: equity/revenue share for data access, $500K-$1M annual value per company. Tempus proved it with diagnostics: tests create data relationships, licensing becomes margin-accretive at 72.7% gross margin on top.
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

## Related Theses

- [[Clinical AI Reimbursement Is Opening — Cardiac Imaging Is the Template, FDA Deregulation Accelerates]] — FDA regulatory environment context
- [[Mispriced Healthcare Risk Creates AI Arbitrage Opportunities]] — Different data application (risk pricing vs regulatory submissions)

---

*Confidence: HIGH — Data originator power shift is structural (CVS/Evernorth/Optum going direct). FDA barrier removal confirmed December 2025. Flatiron sale + Roche writeoff prove captive models fail. Four convergences (beyond-claims, FHIR, clean rooms, AI licensing restrictions) create distinct startup wedges. Risk is originators building internal infrastructure (Epic Curiosity) or incumbents capturing infrastructure layer before startups scale.*
