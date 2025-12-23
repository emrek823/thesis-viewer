# Thesis: Evaluators + Data Models Are the Moat, Models Commoditize

## Investment Take

Healthcare AI moats are NOT in the model layer—foundation models commoditize in 12-18 months. Durable moats come from three interlocking layers: **evaluators** (domain-specific correctness definitions), **canonical data models** (ontologies encoding structural truth), and **hybrid architecture** (deterministic rules + LLM + human oversight).

Pure LLMs hit 85% accuracy ceiling with 8-15% hallucination rates ([[papers-digest-2025-W51]]). Healthcare requires 95%+. SmarterDX demonstrated the evaluator moat: expert-derived labels + fine-tuning achieved 81%→92% AUROC on complex coding cases—an 11-point lift that came from domain expertise, not model architecture ([[SmarterDx - Smarter by Design]]). Parsed confirmed: "evaluation quality sets the ceiling on model performance" ([[Parsed + Baseten Building Models That Touch Grass]]).

The semantic layer is prerequisite for AI agents. Without canonical definitions of "patient," "encounter," or "margin," agents amplify bad data at scale. Translucent's 5x growth ($625K→$1.8M ARR in 4 months) validates CFO demand for margin visibility built on semantic layer + hybrid architecture ([[Will Detwiler and Emre Karatas]]). Epic's dominance (90%+ US medical records, decade-long migrations, $1B+ switching costs) proves "data model = destiny" ([[Don't Mess With Texas Epic Edition|Texas antitrust case]]).

Labs aren't optimizing for healthcare. OpenAI explicitly focused on "general capability," not ICD-10 coding or prior auth workflows. This creates 18-36 month window for vertical specialists while labs chase AGI.

**Timing catalyst: TEFCA + FDA data centralization.** TEFCA/CMS-Aligned Networks enable real-time appointment and encounter data—but raw data is useless without semantic layer ([[When the Speedboats Hit the Wake]]). FDA centralizing FAERS + Sentinel into unified AI-enabled platform creates new pharmacovigilance data layer ([[POLITICO Pro FDA plans to merge adverse events reporting]]). First to integrate with canonical data models wins.

**How this evolved:**
- *2025-12-20:* Merged three separate theses (Vertical-AI-Moats, Systems-of-Record-AI-Era, Healthcare-AI-Architecture). Realized they're saying the same thing: models commoditize, domain expertise is moat.
- *2025-12-21:* Added fact-checking module evidence (F1=0.86) and EXAONE Path 2.5 multi-modal foundation model ([[Mitigating Hallucinations in Healthcare LLMs with Granular Fact-Checking and Domain-Specific]], [[EXAONE Path 2.5 Pathology Foundation Model with Multi-Omics Alignment]]).
- *2025-12-21:* MSK validation: Abridge has own LLM while Ambience uses OpenAI—yet Abridge only wins 6-7/10 head-to-heads. Own model ≠ durable moat. Oncology ontology matters more than architecture (MSK Abridge Tegus).
- *2025-12-21:* Absorbed policy timing catalysts (TEFCA, FDA adverse events). Data layer expanding but semantic layer is prerequisite.
- *2025-12-21:* Cleveland Clinic Tegus call confirms customer service + smart data elements > model architecture. Ambience 9/10 NPS vs Abridge 6/10—difference is co-development on 300 smart data elements for billing analytics, not LLM capability. "Coding will be a long-term differentiator"—structured capture enables automated RCM.
- *2025-12-21:* **Massive ambient AI data dump validates thesis.** Mayo Clinic: 5,000+ Abridge licenses vs <2,500 Ambience—Abridge winning on Epic integration depth, not model. MaineHealth switched Nuance→Abridge: 97% user retention, 7 min/visit saved, 412 active licenses across 44 specialties. WellSky/Stanford: **$4M first-year reimbursement pickup on $200-600K implementation**—20x ROI. John Muir: Ambience hit 95%→99.9% accuracy only after adding hallucination detection module (proving hybrid architecture required). Datavant: 150%+ NRR, 100B+ patient records—data connectivity moat compounds.
- *2025-12-21:* Absorbed Ambient AI Wars—Abridge Winning on Integration, Not Models. Same mechanism: integration/domain wins, models commoditize. Ambient AI is a specific instance of this broader pattern—Abridge beats Ambience on Epic integration, not LLM quality.
- *2025-12-22:* MSK deep dive confirms. "Abridge has own LLM, Ambience uses OpenAI"—yet Abridge only wins 6-7/10 head-to-heads. Chose Abridge for "ontology for oncology" (400 different cancers, each with own vocabulary). Own LLM ≠ moat; domain ontology = moat ([[Director of Strategy and Innovation Group for Memorial Sloan Kettering Cancer Center _ Abridge _ Tegus]]).
- *2025-12-22:* Tennr validates hybrid architecture pattern. DME customer: 4 months to implement qualifications worker "due to intricate details" + still requires human-in-the-loop because "model can still get confused." 30% productivity lift ($700K avoided hiring), $200K+ annual, 9/10 rating. Customization ("like putty to fill cracks") beats cookie-cutter ([[Executive Vice President at Total Medical Supply Inc _ Tennr _ Tegus]]).
- *2025-12-22:* Second Tennr customer confirms. Neb Medical (DME, 2,500 referral sources): 90-95% still handwritten fax. "Architecture/if-then mapping" was biggest implementation bottleneck—domain rules matter. Went from "hundreds of orders behind daily" to purging queue with 2 FTEs. 9/10 rating, signed multi-year contract ([[Chief Operating Officer at Neb Medical Services _ Tennr _ Tegus]]).
- *2025-12-22:* **MaineHealth deep dive validates integration > models.** $4B system (12 hospitals, 745 clinics) switched Nuance DAX→Abridge. Why: (1) "Epic has a list called peerless—deep connection" (2) physician-led (3) better inpatient templates (4) cheaper. But Ambience advancing on coding—"Cleveland Clinic signed huge contract...way more advanced in coding." Suki rejected: "only worked with smaller organizations." 85% satisfaction, 97% retention, 3-5 extra appointments/day ([[Director at MaineHealth _ Abridge _ Tegus]]).
- *2025-12-22:* **Wrapper risk is real.** Molina uses Autonomize AI (not Anterior)—rates 7.5/10. "It's a wrapper... nothing specific, very generic." GPT/Azure catching up with prompt engineering. Mass adjudication is unmet need. Faxes still dominant—AI fax scanning "able to read doctors' writing" ([[Director of IT Cloud Infrastructure Architect at Molina Healthcare Inc _ Anterior _ Tegus]]).
- *2025-12-22:* **SVB confirms AI coding not autonomous.** Despite 46% hospital adoption in RCM, AI coding "still struggling to work autonomously"—validating hybrid architecture thesis. Provider ops = 44% of healthtech investment ($5.5B YTD). Abridge captured 40% of $1.5B invested in 2025. Key insight: "Capital has moved faster than validation" ([[future-of-healthtech-2025-v2]]).
- *2025-12-22:* **3rd Tennr customer validates contextual AI moat.** MPOWERHealth (intraoperative monitoring, 600 employees, 100K cases/year): 300-400% efficiency gains (6-12 min → 1-3 min per case). Tried Azure ML internally—"couldn't replicate the contextual look" that Tennr has. Key: Tennr reads "completely unstructured, ever-evolving" documents without large training sets. 9.5/10 satisfaction, low six figures annual spend doubling. Human-in-the-loop still required ([[Tennr MPOWERHEALTH]]).
- *2025-12-22:* **SmarterDX founder confirms fine-tuning moat.** Fine-tuned models deliver 30-40% improvement for ICD-10 PCS vs frontier models. "Transforms rejection rate: from rejecting 2 out of 3 to accepting 2 out of 3." OpenAI explicit: "not interested in improving models for operational healthcare within the US." ICD-10 PCS on GPT-5 "still terrible" despite CM improvements. Best-in-class retriever models "nowhere near acceptable for medical applications." Labs not optimizing for healthcare—18-36 month window real ([[Virtue (Sean _ Emre) __ Scott Fleming]]).
- *2025-12-22:* **Interior's DFA ontology is the pattern.** Interior's value-add: "building ontology that converts payer policy PDFs into deterministic finite automaton." LLMs reason within predetermined state transitions rather than open-ended responses. Claims data platform landscape fragmenting: Tuva (data engineer favorite), Accorded (actuary-centric), Zeus (unstructured EMR) ([[AI in Care Delivery (Virtue)]]).
- *2025-12-22:* **Absorbed [[RL + Proprietary Workflows = Enterprise AI Moat]].** Same mechanism: domain-specific fine-tuning + feedback loops beats foundation models. RL framing adds: (1) verifiable environments enable self-improvement (code compiles, claim accepted), (2) online RL creates continuous improvement (Cursor/Cognition tab acceptance), (3) talent scarcity + data governance are real blockers. Moat formula: verifiable + fast feedback + domain expertise ([[RL in Real Life Durable Moats]]).

---

## Bull Case

- [x] **Domain expertise is defensible.** SmarterDX's 11-point AUROC lift came from expert labels, not model architecture. Building equivalent evaluator library takes 3-5 years of domain expert engagement.
  - *Evidence:* [[SmarterDx - Smarter by Design]] — 81%→92% AUROC, ~50% F1 improvement

- [ ] **Regulatory moat compounds.** FDA requiring post-market surveillance for AI/ML devices (mandatory 2024+). Health systems budgeting $1-5M annually for AI governance. Pure LLM can't meet compliance—no audit trail.
  - *Evidence:* [[papers-digest-2025-W51]] — FDA post-market surveillance requirements

- [x] **Labs not optimizing for healthcare.** OpenAI focused on AGI, not ICD-10 coding. 18-36 month window for vertical specialists.
  - *Evidence:* [[Virtue (Sean _ Emre) __ Scott Fleming]] — OpenAI: "not interested in improving models for operational healthcare within the US." ICD-10 PCS "still terrible" on GPT-5.

---

## Bear Case

- [ ] **LLM accuracy improves to 99%+.** If GPT-6/o4 hits 99% on healthcare tasks without domain fine-tuning, hybrid architecture becomes overhead not moat.
  - *Evidence:* Needs monitoring — track MedHELM, MedQA benchmarks quarterly

- [ ] **Warehouses bundle semantic layer.** If Snowflake/Databricks ship "good enough" healthcare ontology at zero marginal cost, standalone opportunity collapses.
  - *Evidence:* Needs monitoring — Snowflake Healthcare Data Cloud announcements

- [ ] **EHR incumbents win distribution.** Epic has 274 AI agent customers, Oracle claims "AI built in not bolted on." If they bundle natively, middleware startups lose.
  - *Evidence:* [[Don't Mess With Texas Epic Edition]] — Epic controls distribution, 43.9% App Orchard share

---

## Startup Opportunities

**1. Evaluator Infrastructure (SmarterDX pattern)**
- Domain-specific correctness definitions + expert labeling methodology
- Why this follows: If evaluator quality sets the ceiling, invest in companies building expert label pipelines
- Sell to: Health systems, payers, RCM companies
- Risk: Open-source evaluation (MedArena, BioArena) may commoditize in 18 months

**2. Healthcare Semantic Layer (Translucent pattern)**
- Canonical data models for patient/encounter/margin across siloed systems
- Why this follows: Agents amplify bad data; semantic layer is prerequisite
- Sell to: CFOs (margin analytics), health system analytics teams
- Risk: Warehouses bundle "good enough" ontology

**3. Hybrid Architecture Platform (Interior/Tennr pattern)**
- DFA + LLM + human oversight for regulated workflows (prior auth, coding)
- Why this follows: 85% LLM ceiling + compliance requirements = hybrid is table stakes
- Sell to: RCM, payers, prior auth vendors
- Risk: If LLM accuracy hits 99%, deterministic layer is overhead

---

## Open Questions

**Will LLM accuracy improvements obsolete hybrid architecture?**
→ OPEN: Track frontier model performance on MedHELM, MedQA quarterly. If GPT-6 hits >95% on medical coding, pivot thesis.

**Do warehouses bundle semantic layer into commodity?**
→ OPEN: Monitor Snowflake/Databricks healthcare announcements. Talk to health system analytics leaders about warehouse-native vs dedicated.

**How fast do evaluators commoditize?**
→ OPEN: Track MedArena/BioArena adoption. If open-source achieves commercial parity in 18 months (not 3+ years), evaluator moat erodes.

**Can middleware defend against EHR native expansion?**
→ OPEN: Track Epic UGM announcements. Interview Saha/Curafi on competitive dynamics with Epic native features.

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-21 | [[Director of Strategy and Innovation Group for Memorial Sloan Kettering Cancer Center _ Abridge _ Tegus]] | Operator | "Abridge has own LLM, Ambience uses OpenAI"—yet 6-7/10 head-to-heads. Ontology > architecture. Stickiness 8/10. |
| 2025-12-20 | [[SmarterDx - Smarter by Design]] | Research | 81%→92% AUROC from expert labels. ~50% F1 improvement. |
| 2025-12-16 | [[Parsed + Baseten Building Models That Touch Grass]] | Research | "Evaluation quality sets ceiling." Specialization beats scale. |
| 2025-12-20 | [[Will Detwiler and Emre Karatas]] | Operator | CFO priority shift: margin analytics now "top 3." Translucent 5x growth. |
| 2025-12-17 | [[Don't Mess With Texas Epic Edition]] | Research | Epic 90%+ records. Migrations take decade, cost $1B+. |
| 2025-12 | [[papers-digest-2025-W51]] | Research | 8-15% hallucination in clinical LLMs. FDA post-market surveillance. |
| 2025-12-21 | [[Mitigating Hallucinations in Healthcare LLMs with Granular Fact-Checking and Domain-Specific]] | Research | Fact-checking modules: 0.89 precision, 0.82 recall, F1=0.86. |
| 2025-12-21 | [[EXAONE Path 2.5 Pathology Foundation Model with Multi-Omics Alignment]] | Research | Multi-modal foundation model (histologic + genomic + epigenetic). |
| 2025-12 | [[Abridge raises $300M Series E at $5.3B valuation]] | Company | $5.3B valuation, 150+ health systems. Ambient AI leader. |
| 2025-12 | [[Tennr raises $101M Series C at $605M valuation]] | Company | $101M raised. 300-400% efficiency. DFA + doc handling. |
| 2021-12 | [[Microsoft completes $19.7B Nuance acquisition]] | Company | $19.7B MSFT acquisition. 550+ health systems. |
| 2025-12-17 | [[When the Speedboats Hit the Wake]] | Research | TEFCA/CMS-Aligned Networks enable real-time data—but raw data useless without semantic layer. |
| 2025-12-19 | [[POLITICO Pro FDA plans to merge adverse events reporting]] | Research | FDA centralizing FAERS + Sentinel. New pharmacovigilance data layer. |
| 2025-12-21 | [[Associate Medical Director of Informatics of Emergency Services at a Clinic _ Ambience Healthcare, Inc. _ Tegus]] | Operator | Cleveland Clinic: Ambience 9/10 vs Abridge 6/10. 300 smart data elements for billing. "Coding is long-term differentiator." Customer service + co-development > model. |
| 2025-12-21 | [[Senior Director of Revenue Cycle - Revenue Integrity at Mayo Clinic _ Ambience Healthcare, Inc. _ Tegus]] | Operator | Mayo: 5,000+ Abridge vs <2,500 Ambience. 15-20% E&M coding accuracy uplift. Multi-tool strategy for vendor resilience. |
| 2025-12-21 | [[Informatics Director at MaineHealth _ Abridge _ Tegus]] | Operator | Nuance→Abridge switch. 97% user retention, 7 min/visit saved, 412 licenses across 44 specialties. |
| 2025-12-21 | [[Senior Director of Revenue Cycle Management at Wellsky _ Abridge _ Tegus]] | Operator | Stanford: $4M first-year pickup on $200-600K implementation. 9/10 rating. Clinical denial >10% pre-implementation. |
| 2025-12-21 | [[Clinical Director of Informatics & Analytics at John Muir Health _ Ambience Healthcare, Inc. _ Tegus]] | Operator | 95%→99.9% accuracy after hallucination detection update. Level 3→Level 4 coding shift. Enterprise license model. |
| 2025-12-21 | [[datavant-corporate-overview-deck-2-22-20-1-0d0cb6be]] | Company | 150%+ NRR, 100B+ patient records, $2B ARR target. Network effects in health data connectivity. |
| 2025-12-22 | [[Director of Strategy and Innovation Group for Memorial Sloan Kettering Cancer Center _ Abridge _ Tegus]] | Operator | MSK $7B enterprise. Abridge wins 6-7/10 vs Ambience. "Own LLM vs OpenAI" - ontology > architecture. 8/10 stickiness. |
| 2025-12-22 | [[Executive Vice President at Total Medical Supply Inc _ Tennr _ Tegus]] | Operator | DME: $200K+ annual, 9/10 rating. 30% productivity lift. 4-month implementation for complex rules. Human-in-the-loop required. |
| 2025-12-22 | [[Chief Operating Officer at Neb Medical Services _ Tennr _ Tegus]] | Operator | 9/10 rating, 5→2 FTEs, "architecture/if-then mapping" was implementation bottleneck. 90-95% handwritten fax. |
| 2025-12-22 | [[Director at MaineHealth _ Abridge _ Tegus]] | Operator | $4B system switched Nuance→Abridge. Epic "peerless" integration. 85% satisfaction, 97% retention. 3-5 extra appts/day. |
| 2025-12-22 | [[Director of IT Cloud Infrastructure Architect at Molina Healthcare Inc _ Anterior _ Tegus]] | Operator | Autonomize 7.5/10. "It's a wrapper." Nothing specific. GPT catching up. Mass adjudication unmet need. |
| 2025-12-22 | [[Tennr MPOWERHEALTH]] | Operator | MPOWERHealth (100K cases/yr): 300-400% efficiency. Tried Azure ML—"couldn't replicate contextual AI." 9.5/10 rating. Human-in-the-loop required. |
| 2025-12-22 | [[Virtue (Sean _ Emre) __ Scott Fleming]] | Operator | SmarterDX founder: 30-40% fine-tuning improvement vs frontier. OpenAI "not interested in operational healthcare." ICD-10 PCS "still terrible" on GPT-5. |
| 2025-12-22 | [[AI in Care Delivery (Virtue)]] | Operator | Interior: DFA ontology converts payer PDFs to state machine. LLMs reason within transitions. Claims platform landscape fragmenting. |
| 2025-12-22 | [[RL in Real Life Durable Moats]] | Research | **Absorbed from RL thesis.** Greylock: "Better foundation models alone cannot solve bespoke personalization." Cursor/Cognition use online RL. Talent scarcity and data governance blockers. |
