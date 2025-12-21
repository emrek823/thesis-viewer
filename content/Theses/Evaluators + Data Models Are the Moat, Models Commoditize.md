# Thesis: Evaluators + Data Models Are the Moat, Models Commoditize

## Investment Take

Healthcare AI moats are NOT in the model layer—foundation models commoditize in 12-18 months. Durable moats come from three interlocking layers: **evaluators** (domain-specific correctness definitions), **canonical data models** (ontologies encoding structural truth), and **hybrid architecture** (deterministic rules + LLM + human oversight).

Pure LLMs hit 85% accuracy ceiling with 8-15% hallucination rates ([[Papers Digest W51]]). Healthcare requires 95%+. SmarterDX demonstrated the evaluator moat: expert-derived labels + fine-tuning achieved 81%→92% AUROC on complex coding cases—an 11-point lift that came from domain expertise, not model architecture ([[SmarterDx - Smarter by Design]]). Parsed confirmed: "evaluation quality sets the ceiling on model performance" ([[Parsed + Baseten Building Models That Touch Grass]]).

The semantic layer is prerequisite for AI agents. Without canonical definitions of "patient," "encounter," or "margin," agents amplify bad data at scale. Translucent's 5x growth ($625K→$1.8M ARR in 4 months) validates CFO demand for margin visibility built on semantic layer + hybrid architecture ([[Will Detwiler call]]). Epic's dominance (90%+ US medical records, decade-long migrations, $1B+ switching costs) proves "data model = destiny" ([[Texas antitrust case]]).

Labs aren't optimizing for healthcare. OpenAI explicitly focused on "general capability," not ICD-10 coding or prior auth workflows. This creates 18-36 month window for vertical specialists while labs chase AGI.

**Timing catalyst: TEFCA + FDA data centralization.** TEFCA/CMS-Aligned Networks enable real-time appointment and encounter data—but raw data is useless without semantic layer ([[When the Speedboats Hit the Wake]]). FDA centralizing FAERS + Sentinel into unified AI-enabled platform creates new pharmacovigilance data layer ([[POLITICO Pro FDA plans to merge adverse events reporting]]). First to integrate with canonical data models wins.

**How this evolved:**
- *2025-12-20:* Merged three separate theses (Vertical-AI-Moats, Systems-of-Record-AI-Era, Healthcare-AI-Architecture). Realized they're saying the same thing: models commoditize, domain expertise is moat.
- *2025-12-21:* Added fact-checking module evidence (F1=0.86) and EXAONE Path 2.5 multi-modal foundation model ([[Mitigating Hallucinations in Healthcare LLMs]], [[EXAONE Path 2.5]]).
- *2025-12-21:* MSK validation: Abridge has own LLM while Ambience uses OpenAI—yet Abridge only wins 6-7/10 head-to-heads. Own model ≠ durable moat. Oncology ontology matters more than architecture ([[MSK Abridge Tegus]]).
- *2025-12-21:* Absorbed policy timing catalysts (TEFCA, FDA adverse events). Data layer expanding but semantic layer is prerequisite.

---

## Bull Case

- [x] **Domain expertise is defensible.** SmarterDX's 11-point AUROC lift came from expert labels, not model architecture. Building equivalent evaluator library takes 3-5 years of domain expert engagement.
  - *Evidence:* [[SmarterDx - Smarter by Design]] — 81%→92% AUROC, ~50% F1 improvement

- [ ] **Regulatory moat compounds.** FDA requiring post-market surveillance for AI/ML devices (mandatory 2024+). Health systems budgeting $1-5M annually for AI governance. Pure LLM can't meet compliance—no audit trail.
  - *Evidence:* [[Papers Digest W51]] — FDA post-market surveillance requirements

- [ ] **Labs not optimizing for healthcare.** OpenAI focused on AGI, not ICD-10 coding. 18-36 month window for vertical specialists.
  - *Evidence:* Needs validation — interview lab researchers on healthcare roadmap

---

## Bear Case

- [ ] **LLM accuracy improves to 99%+.** If GPT-6/o4 hits 99% on healthcare tasks without domain fine-tuning, hybrid architecture becomes overhead not moat.
  - *Evidence:* Needs monitoring — track MedHELM, MedQA benchmarks quarterly

- [ ] **Warehouses bundle semantic layer.** If Snowflake/Databricks ship "good enough" healthcare ontology at zero marginal cost, standalone opportunity collapses.
  - *Evidence:* Needs monitoring — Snowflake Healthcare Data Cloud announcements

- [ ] **EHR incumbents win distribution.** Epic has 274 AI agent customers, Oracle claims "AI built in not bolted on." If they bundle natively, middleware startups lose.
  - *Evidence:* [[Texas antitrust case]] — Epic controls distribution, 43.9% App Orchard share

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
| 2025-12-21 | [[MSK Abridge Tegus]] | Operator | "Abridge has own LLM, Ambience uses OpenAI"—yet 6-7/10 head-to-heads. Ontology > architecture. Stickiness 8/10. |
| 2025-12-20 | [[SmarterDx - Smarter by Design]] | Research | 81%→92% AUROC from expert labels. ~50% F1 improvement. |
| 2025-12-16 | [[Parsed + Baseten Building Models That Touch Grass]] | Research | "Evaluation quality sets ceiling." Specialization beats scale. |
| 2025-12-20 | [[Will Detwiler call]] | Operator | CFO priority shift: margin analytics now "top 3." Translucent 5x growth. |
| 2025-12-17 | [[Texas antitrust case]] | Research | Epic 90%+ records. Migrations take decade, cost $1B+. |
| 2025-12 | [[Papers Digest W51]] | Research | 8-15% hallucination in clinical LLMs. FDA post-market surveillance. |
| 2025-12-21 | [[Mitigating Hallucinations in Healthcare LLMs]] | Research | Fact-checking modules: 0.89 precision, 0.82 recall, F1=0.86. |
| 2025-12-21 | [[EXAONE Path 2.5]] | Research | Multi-modal foundation model (histologic + genomic + epigenetic). |
| 2025-12 | [[Abridge valuation]] | Company | $5.3B valuation, 150+ health systems. Ambient AI leader. |
| 2025-12 | [[Tennr Series C]] | Company | $101M raised. 300-400% efficiency. DFA + doc handling. |
| 2021-12 | [[Nuance DAX acquisition]] | Company | $19.7B MSFT acquisition. 550+ health systems. |
| 2025-12-17 | [[When the Speedboats Hit the Wake]] | Research | TEFCA/CMS-Aligned Networks enable real-time data—but raw data useless without semantic layer. |
| 2025-12-19 | [[POLITICO Pro FDA plans to merge adverse events reporting]] | Research | FDA centralizing FAERS + Sentinel. New pharmacovigilance data layer. |
