
## Overview

We've been investing across the pharma tech stack for several years, and where value accrues in the real-world data (RWD) stack is shifting. Claims data is table stakes, the value of continual RWD purchases is declining as foundation models incorporate these insights directly in their weights, and both pharma and large foundation model buyers are now looking for broader, deeper datasets (not just small n cohorts for translational research).

The early days (2010s) were a coverage arms race where aggregators won on breadth. DRG and Clarivate underwrote the Datavant ecosystem, enabling a generation of aggregators to resell open pharmacy claims at scale. IQVIA and other aggregators captured a majority of health analytics because the moat was simply who had the most claims. Over the past few years, data originators shifted. [[Sources/Market-Research-PDFs/inovalon---former-vp-of-sales-8fbab5a1|Inovalon]] pulled its data from DRG, forced direct contracts, and prohibited reselling. Evernorth prohibited underwriting use, and by last year CVS, Evernorth, Optum, and Express Scripts were all launching their own life sciences divisions to sell direct to pharma. Even Datavant is evolving from its historical neutral positioning with the [Aetion](https://www.fiercehealthcare.com/health-tech/datavant-acquires-real-world-evidence-company-aetion-boost-its-life-sciences-business) and [[Sources/Market-Research-PDFs/memo---datavant-ontellus-c377eed2|Ontellus]] acquisitions, vertically integrating into analytics and record retrieval.

The dynamic is not just that these buyers need more data (they do) but each iteration of this market restructures where value accrues. The prior era of data aggregation, recycling and re-selling is over. You now must [deliver immediate value to the data originators and owners](https://www.virtuevc.com/writings/why-we-invested-in-standard-model-bio) for the right and privilege to then leverage this data for novel downstream use cases. It is a game of both data access across multiple data types (no one data originator has multi-modal data required across 'omics, imaging, claims, EHR, etc) and superior performance across multiple use cases and sites (where foundation models thrive).

---

## What This Means Going Forward 

Let's walk through both the demand side and supply side.

On the demand side, pharma budgets and behavior are nuanced. Demand for low-quality datasets of the prior RWD era is declining, but demand for performance and business ROI is increasing as pharma adapts to a changing world (drug pricing, LoEs, clinical trial costs, low-hanging fruit is gone, China, etc). In some cases, they are reducing spend on table-stakes claims data because multiple therapeutic area teams used to buy the same dataset internally and do their own slicing and dicing rather than simply sharing the .csv across therapeutic areas or brand teams. They are more savvy buyers today. In other cases, they are moving on from historical RWD vendors of a prior era that everyone piled into in an industry of fast-followers. [[Sources/News/2025-12-paradigm-health-flatiron-roche-fiercebiotech|Paradigm Health's acquisition of Flatiron's clinical research business]] in December 2025 and [[Sources/News/2024-roche-3-2b-writeoff-flatiron-spark|Roche writing off $3.2B]] is one public example. The shape of demand is shifting with more nuance around data quality and breadth, expansion beyond oncology into new therapeutic areas, and a growing internal debate within pharma around buy vs. build.

We are also seeing an entirely new buyer with large foundation model companies spending to acquire population-level datasets to fuel their models. These purchases aren't yet at the same scale as RL environments or labeling companies in general AI space, but there is massive appetite from model companies as they move into the application layer. That appetite creates an opening for startups who can leverage this demand for early validation and revenue — though most companies positioning as "AI-native data" today are still fundamentally aggregators serving a different buyer.

On the supply side (where startups we work with operate), we're thinking about a few main areas:
- **Enabling privacy tech / infra.** This is where companies like Integral and Hermes operate. Security is entirely different in an agent-to-agent world. People want access to their data and HIEs aren't sufficient. We need to think about how we de-identify and access different data types. It's both a technical question (which federated technique?) and a legal/social/policy one (how do we de-identify patient <> provider interaction voice data?).
- **Access to novel data.** Similar to how Sam Altman recently shared that he's looking for acquisitions that are a [[Sources/News/2026-02-sam-altman-tbpn-acquisitions|mix of research and product]], we are looking for companies that combine data generation with product. The era of pure data brokers is ending. Standard Model Bio's give-to-get model is the template: build analytical capabilities that health systems and biopharma need, earn data access as a by-product, and train foundation models on the resulting longitudinal multimodal data. Autoimmune is one example where this gap is acute. Patients average [4+ years to diagnosis](https://www.autoimmuneinstitute.org/articles/examining-pre-autoimmunity-can-autoimmune-disease-be-prevented/), cycling through primary care and specialists while generating fragmented clinical data that no single system captures longitudinally. Standard inflammation markers (CRP, ESR) lack specificity to distinguish autoimmune subtypes early, so by the time patients reach methotrexate or biologics, the pre-diagnosis progression data is lost. There is a growing ecosystem of companies engaging these patients through digital health, patient communities, and DTC diagnostics though whether a patient-centric biobank is defensible without institutional anchoring remains an open question.

The companies we want to work with are the ones building infrastructure that originators need but structurally cannot build themselves. And ideally, they are doing it in a way that creates a defensible data asset or model as a by-product, not just a service layer that gets commoditized.

This thesis breaks if aggregation reconsolidates. There are two ways to make money — bundling and unbundling. The originator power shift we describe above could reverse if a new-generation aggregator uses AI to make data computable at scale and originators revert to licensing because they still can't build software. That bundling cycle has happened before in this market and it could happen again, faster, with AI spend accelerating the consolidation.

What does that company look like?

---

## Sources

- [[Sources/Market-Research-PDFs/networkbio-d3170de7|Network Bio Pitch Deck — RWE 1.0/2.0/3.0 Framework (2022)]]
- [[Sources/Portfolio/Integral/networkbio-integral-d1013912|Network Bio + Integral Notes]]
- [[Sources/Granola/Bobby __ Emre|Bobby (Protege) <> Emre — Labs as primary buyers, deliberately avoiding pharma]]
- [[Sources/Granola/SMB __ Virtue-2026-01-22_12-01-18|SMB <> Virtue (Jan 2026) — AI-native data aggregators framing, Protege/Century Health positioning]]
- [[Sources/Granola/SMB _ Virtue-2026-02-03_10-35-38|SMB / Virtue (Feb 2026) — Noetic/GSK data deal, biobanks + foundation models]]
- [[Sources/Granola/SMB __ Virtue-2026-01-08_11-59-57|SMB <> Virtue (Jan 2026) — Standard Oil strategy, aggressive RWD acquisition, trajectory prediction]]
- [[Sources/Granola/Cody __ Emre|Cody <> Emre — Protege evaluation datasets, SMB partnership]]
- [[Sources/Granola/Najib Jai and Emre Karatas|Najib <> Emre — Protege as marketplace for AI model data layers]]
- [[Sources/Browser-History/2025-12-23-introducing-protege-evaluation-datasets-and-benchm|Protege Data Lab — <5% of 800+ benchmarks meet criteria]]
- [[Sources/Browser-History/2025-12-23-proteges-healthcare-ai-market-map|Protege Healthcare AI Market Map]]
- [[Sources/LLM-Chats/2026-02-08-protege-llms-restructuring-rwd-demand|Protege + LLMs Restructuring RWD Demand (Research Synthesis)]]
- [[Sources/Market-Research-PDFs/purple-lab-bbc2149a|PurpleLab — V1.0/V2.0/V3.0 Framework, originator power shift]]
- [[Sources/Market-Research-PDFs/purplelab-805274ed|PurpleLab — First-party origination strategy]]
- [[Sources/Market-Research-PDFs/tegus-calls-on-interop-8d257b4b|Tegus Interop Calls — Data commoditized, value in orchestration layer]]
- [[Sources/Market-Research-PDFs/rwd-cf3e0145|RWD Survey — 40% to aggregators, "ripe for disruption"]]
- [[Sources/Market-Research-PDFs/inovalon---former-vp-of-sales-8fbab5a1|Inovalon Former VP of Sales — 54-person life sciences division]]
- [[Sources/Market-Research-PDFs/former-manager-health-economics-and-outcomes-research-at-sea-e21e8f1b|BioMarin/Seagen HEOR — "trend is outsourcing everything"]]
- [[Sources/Market-Research-PDFs/real-world-data--assessing-electronic-health-records-and-med-0088ee5f|FDA EHR/Medical Claims Guidance — computable phenotypes, data validation, Common Data Models]]
- [[Sources/Policy/Federal-Register/2026-01-12-Use-of-Bayesian-Methodology-in-Clinical-Trials-of-Drug-and-Biological-Products;-|FDA Bayesian Methodology Draft Guidance (Jan 2026)]]
- [[Sources/Market-Research-PDFs/tripleblind-healthcare-overview-15410c1b|TripleBlind — Privacy-preserving computation, "43 zettabytes inaccessible due to privacy"]]
- [[Sources/Market-Research-PDFs/inovalon-himss-37a2aec3|Inovalon HIMSS — 336M+ patients, 62B events, FHIR-enabled DataStream API]]
- [[Sources/Portfolio/Hermes Health/2025-12-21_datavant_expert_call_memo-ab32fda4|Datavant Expert Call — $100M P&L, 260 employees, Epic/Cerner API integration]]
- [[Sources/Market-Research-PDFs/memo---datavant-ontellus-c377eed2|Datavant Acquires Ontellus ($1B-$1.5B) — vertically integrated ROI + record retrieval]]
- [[Sources/Browser-History/2025-12-23-healthex-raises-14m-led-by-general-catalyst-to-emp|HealthEx $14M (GC-led) — AI consent/preference platform, FHIR Consent compatible]]
- [[Sources/LLM-Chats/Claude-Epic Curiosity healthcare foundation model memo|Epic Curiosity — 115B events, 118M patients, originator going direct with AI]]
- [[Sources/LLM-Chats/2026-01-10-pharma-saas-what-wins|Pharma SaaS: What Wins — Datavant/Aetion, neutral infrastructure beats captive data]]
- [[Sources/News/2026-01-protege-65m-raise-alleywatch|Protege $65M raise — a16z led (AlleyWatch)]]
- [[Sources/News/2025-protege-healthcare-data-ai-out-of-pocket|Getting Healthcare Data to Train an AI Model — with Protege (Out-of-Pocket)]]
- [[Sources/News/2025-bobby-samuels-protege-interview-unite-ai|Bobby Samuels Interview — $30M GMV Y1 (Unite.AI)]]
- [[Sources/News/2024-03-century-health-2m-ai-techcrunch|Century Health $2M — AI-curated EHR (TechCrunch)]]
- [[Sources/News/2024-truveta-language-model|Truveta Language Model — 130M patients (Truveta)]]
- [[Sources/Browser-History/2025-12-21-2025-the-state-of-ai-in-healthcare-menlo-ventures|State of AI in Healthcare 2025 — $1.4B spending, 3x YoY (Menlo Ventures)]]
- [[Sources/News/2025-12-fda-removes-patient-level-data-barrier|FDA Removes Patient-Level Data Barrier (Dec 2025)]]
- [[Sources/Policy/Federal-Register/2025-12-18-Use-of-Real-World-Evidence-To-Support-Regulatory-Decision-Making-for-Medical-Dev|RWE for Medical Devices — Final Guidance, Supersedes 2017 (Federal Register)]]
- [[Sources/News/2025-12-paradigm-health-flatiron-roche-fiercebiotech|Paradigm Health Acquires Flatiron; Roche $3.2B Writeoff (Fierce Biotech)]]
- [[Sources/News/2025-datavant-7b-healthcare-acquisition|Datavant $7B — $1B+ Revenue, 80K+ Hospitals]]
- [[Sources/News/2025-trinetx-rwd-pharma-survey|TriNetX Survey — 40% Rate RWD "Critical," $300M Average Savings]]
- [[Sources/News/2025-rwd-market-coherent-market-insights|RWD Market $2.38B to $6.1B at 14.4% CAGR (Coherent Market Insights)]]
- [[Sources/News/2025-john-snow-labs-llms-clinical-nlp|LLMs 88-93% F1 on Clinical NLP (John Snow Labs)]]
- [[Sources/News/2024-roche-3-2b-writeoff-flatiron-spark|Roche $3.2B Writeoff — Flatiron + Spark (Roche Finance Report)]]
- [[Sources/News/2025-iqvia-optum-health-analytics-share|IQVIA 33% + Optum 24% Health Analytics Share (Mahalo Health)]]
- [[Sources/News/2025-09-fda-rwe-rejections-raps|FDA RWE Rejections — Heterogeneous Populations, Evidence Quality (RAPS)]]
- [[Sources/News/2026-02-sam-altman-tbpn-acquisitions|Sam Altman on Acquisitions: "Mix of Research and Product" (TBPN, Feb 2026)]]

*Last rebuilt: 2026-02-08*
