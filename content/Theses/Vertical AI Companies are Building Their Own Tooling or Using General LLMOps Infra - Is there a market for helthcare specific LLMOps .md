---
aliases:
  - Healthcare AI Infrastructure Wins Through Domain Depth, Not Models
---
# Healthcare AI Infrastructure Wins Through Workflow Integration, Not Models—Vertical Lock-In Creates Durable Moats by 2028

## Overview

Healthcare AI spending hit $1.4B in 2025—nearly tripling 2024 investment—with 85% flowing to startups rather than incumbents. The disconnect between model quality (GPT-4 scores 33.9% on ICD-10-CM coding) and deployment success (95% of healthcare AI projects fail) reveals the core thesis: **operational infrastructure creates defensible moats, not models**. Vertical AI companies are building their own specialty-specific tooling (EHR connectors, specialty workflows, payer policy engines) because generalist infrastructure cannot encode 28-day retina injection spacing rules, 400 oncology cancer ontologies, or fax parsing for handwritten referrals. BetterNight reduced intake staff from 100 to 5 using Tennr; the company "could not untangle from Tennr if we tried—it would be disastrous." This is not model differentiation. This is infrastructure lock-in.

The opportunity sits between two failing layers: foundation models too inaccurate for production clinical workflows, and health system buyers who shortened AI purchasing cycles from 8.0 to 6.6 months signaling urgency to deploy. Abridge ($5.3B valuation, 2,000+ licenses at MaineHealth), Ambience (Cleveland Clinic enterprise contract), and Tennr (100+ DME/infusion customers) are building proprietary infrastructure stacks—EHR bidirectional integrations, specialty templates, qualification workers—because no horizontal player offers this. The question is not whether vertical companies will build their own tooling (they already are) but whether a horizontal orchestration layer can capture value before Epic bundles AI for its 42% hospital base or vertical consolidation closes the window.

---

## Bull Case

**85% of healthcare AI spend flows to startups despite incumbent distribution.** Even in ambient scribing where Microsoft's Nuance deployed DAX to 77% of U.S. hospitals, startups like Abridge and Ambience captured nearly 70% of the new market. Health systems shortened AI buying cycles from 8.0 to 6.6 months—18% acceleration—signaling urgency to deploy production-ready solutions. Kaiser deployed Abridge across 40 hospitals and 600+ offices in their fastest technology implementation in 20 years.
> "Healthcare AI spending hit $1.4B this year, nearly tripling 2024's investment... 85% of all generative AI spend in healthcare currently flows to startups rather than incumbents" — [[Sources/News/2026-01-03/2025-the-state-of-ai-in-healthcare-menlo-ventures|Menlo Ventures 2025 State of AI in Healthcare]]

**Infrastructure lock-in is measured and catastrophic to unwind.** BetterNight reduced intake staff from 100 to 5 using Tennr. Once embedded, switching requires re-hiring and retraining entire departments. SleepQuest found Brightree API integration "taken decades to become proficient"—each EHR connector represents months of specialty-specific engineering that compounds over time. The 97% average user retention at MaineHealth demonstrates once providers adopt, they cannot imagine returning to manual workflows.
> "My company could not untangle themselves from Tennr if we tried at this point. It would be disastrous... If they turned off tomorrow, I would not be able to get everyone coordinated and back from working the old way." — BetterNight Technical Program Manager, [[Sources/Tegus/manager-at-betternight-_-tennr-_-tegus-3c373487|Tennr BetterNight Interview]]

**Vertical companies are building proprietary infrastructure, not using horizontal LLMOps.** Tennr built Brightree API integrations, document qualification workers, fax parsing for handwritten orders. Abridge built Epic Pal deep integrations, specialty templates for 44+ specialties, inpatient workflows. Ambience built multi-EHR connectors (Oracle Cerner, athena, MEDITECH), coding intelligence, referral management. None of these companies use off-the-shelf LLMOps platforms—they build specialty-specific infrastructure because generalist tools cannot encode healthcare workflow complexity.
> "90-95% of orders are still handwritten fax documents... Brightree API integration taken decades to become proficient." — SleepQuest President/COO, [[Sources/Market-Research-PDFs/tennr-sleepquest-b48eb7eb|Tennr SleepQuest Interview]]

**Multi-EHR integration is the primary differentiator.** LifePoint has 12+ EHRs; Abridge's Epic-only integration limits them to 10% of LifePoint physicians. Ambience and Commure win by crossing Oracle Cerner, athena, MEDITECH. Commure integrates with 60+ EHRs. This infrastructure depth—not model quality—determines which vendors can serve heterogeneous health systems.
> "The biggest headwind that they have... is they're only integrated with one player and that player created their own AI" — LifePoint CMIO on Abridge, [[Sources/Tegus/abridge-_-interviews-_-tegus-company-profile-5ebf5e4a|Abridge LifePoint Interview]]

---

## Bear Case

**Epic controls 70% of EHR decisions and is bundling AI for its 42% hospital base.** Epic captured ~70% of U.S. hospital EHR decisions in 2024—largest net gain on record. Art (ambient scribe) is free for Epic customers. The Microsoft partnership accelerates embedded AI, and Epic can replicate wrapper functionality at near-zero marginal cost for its installed base. MaineHealth's goal is to "keep things in Epic as much as we can."
> "The goal is to keep things in Epic as much as we can... Our goal is to keep things in Epic as much as we can." — MaineHealth Informatics Director, [[Sources/Tegus/informatics-director-at-mainehealth-_-abridge-_-tegus-44ab924d|MaineHealth Informatics Interview]]

**Foundation model labs are vertically integrating into healthcare.** OpenAI bought Torch (~$100M) for patient records; Anthropic launched Claude for Healthcare the same week. OpenAI selected b.well for health data connectivity across 2.2M providers and 320 health plans. "Companies that were wrappers have been un-investable for a while, because it doesn't feel like there's real defensibility."
> "Companies that were wrappers have been un-investable for a while, because it doesn't feel like there's real defensibility" — Primary Ventures partner, [[Sources/Browser-History/2026-01-14-anthropic-and-openai-are-doubling-down-on-health-h|Upstarts Media]]

**AI models are "apple to apple"—differentiation is EHR integration.** MaineHealth found Nuance DAX and Abridge effectively identical in core functionality. Cleveland Clinic chose Ambience over Abridge specifically for coding superiority—but both use foundation models. The differentiator is not the model; it's specialty workflows, EHR depth, and coding intelligence layers built on top.
> "AI models are 'apple to apple' but differ on EHR integration." — MaineHealth Informatics Director, [[Sources/Tegus/informatics-director-at-mainehealth-_-abridge-_-tegus-44ab924d|MaineHealth Informatics Interview]]

**Specialty depth separates survivors from casualties.** Abridge captures "hypertension" generically instead of ICD-10 subtypes; Ambience is "way more advanced" on coding depth. Not all vertical infrastructure is equally deep; shallow implementations face margin compression as Epic bundling and model improvement continue.
> "Abridge AI captures 'hypertension' generically... Ambience 'way more advanced' on coding" — MaineHealth Director, [[Sources/Tegus/director-at-mainehealth-_-abridge-_-tegus-86d57eab|MaineHealth Director Interview]]

---

## Startup Opportunities

**1. Multi-EHR Integration Platform — Plaid for Healthcare EHRs (Stage: Emerging)**
- Why this follows: 58% of hospitals are not Epic. LifePoint has 12+ EHRs. Every vertical AI company independently builds EHR connectors—massive duplication of effort.
- Wedge: Horizontal EHR integration platform that vertical SaaS companies plug into. Pre-built connectors for Oracle Cerner, athena, MEDITECH, Allscripts.
- The edge: Each EHR integration costs $150K+ and takes months; a shared platform collapses this to days. Commure's 60+ EHR integrations prove the model but they're a full-stack player, not pure infrastructure.
- Buyers: Vertical AI companies (Tennr, Assort Health, Freed) seeking faster deployment; health systems with heterogeneous EHR environments.
- Risk: EHR vendors may restrict API access; integration depth matters more than breadth; Commure may dominate before pure-play emerges.

**2. Specialty-Specific Workflow Infrastructure (Stage: Proven)**
- Why this follows: Oncology has 400 cancers with unique ontology. Retina has 28-day injection rules. DME has Brightree API complexity requiring "decades to become proficient." Generalists cannot replicate specialty depth.
- Wedge: Own one specialty's full workflow stack—scheduling + documentation + coding + billing. ED templates "just launched" at most vendors; inpatient remains greenfield.
- The edge: 2-3 month specialty build periods create durable moats; first-mover in underserved specialties compounds.
- Buyers: Specialty practices seeking AI-first operations; health systems wanting specialty-specific ROI.
- Risk: Specialty markets may be too small for venture scale; consolidation pressure from horizontal players expanding into verticals.

**3. Healthcare-Specific LLMOps Tooling (Stage: Early/Unproven)**
- Why this follows: Vertical AI companies build custom infrastructure because generalist LLMOps (Langchain, Humanloop, Weights & Biases) cannot encode HIPAA compliance, clinical validation workflows, or specialty-specific evaluation.
- Wedge: Evaluation/observability layer for clinical AI—track hallucination rates on ICD-10 coding, clinical documentation accuracy, HIPAA audit trails.
- The edge: Clinical AI requires different evaluation criteria than general AI; current LLMOps tools don't have healthcare-specific metrics or compliance infrastructure built-in.
- Buyers: Vertical AI companies (Abridge, Ambience, Tennr) seeking to improve model accuracy without building proprietary evaluation infrastructure.
- Risk: Market may be too small—only ~20 venture-scale healthcare AI companies need this. Vertical companies may prefer to build in-house for IP protection. No evidence any vertical company is buying external LLMOps tooling today.

---

## Open Questions

**Are vertical AI companies actually building vs. buying LLMOps infrastructure?** Every source shows vertical companies building proprietary infrastructure (EHR integrations, specialty workflows, qualification workers). No evidence any is using or would use healthcare-specific LLMOps tooling. Stakes: If verticals build everything in-house, healthcare LLMOps market is zero. Monitor: Customer lists of LLMOps vendors, vertical AI company stack disclosures.

**Will Epic successfully replicate vertical infrastructure across specialties by 2027?** Epic has resources but historically moves slowly on deep specialty workflows. 150+ AI features announced but unclear if specialty-specific or generic. Stakes: If Epic replicates, vertical SaaS faces existential pressure in 42% of market; if not, 2-3 year window for lock-in remains open. Monitor: Epic Workshop partner additions/removals, specialty template release velocity, customer retention at vertical AI companies.

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2026-01 | [[Sources/Tegus/manager-at-betternight-_-tennr-_-tegus-3c373487]] | Operator | "Could not untangle from Tennr if we tried — disastrous." 100 to 5 staff. Lock-in from infrastructure depth. |
| 2026-01 | [[Sources/Market-Research-PDFs/tennr-sleepquest-b48eb7eb]] | Operator | "Brightree API integration taken decades to become proficient." EHR connector complexity is infrastructure moat. |
| 2026-01 | [[Sources/Market-Research-PDFs/tennr-_-thrivewell-9ec74cd9]] | Operator | "25 minutes previously in about 30 seconds to three minutes." 50x time compression on referral processing. |
| 2025-08 | [[Sources/Tegus/director-at-mainehealth-_-abridge-_-tegus-86d57eab]] | Operator | MaineHealth: 2,000+ licenses, 97% retention, 85% effort reduction. Abridge captures generic codes; Ambience "way more advanced" on coding depth. |
| 2025-07 | [[Sources/Tegus/informatics-director-at-mainehealth-_-abridge-_-tegus-44ab924d]] | Operator | "AI models are 'apple to apple' but differ on EHR integration." Goal: "keep things in Epic as much as we can." |
| 2025-08 | [[Sources/Tegus/abridge-_-interviews-_-tegus-company-profile-5ebf5e4a]] | Operator | LifePoint CMIO: Multi-EHR ranking post-Epic-bundling. Ambience #1 for "crossing multiple EHRs, specialty workflows, strong coding." 58% non-Epic market is battleground. |
| 2025-10 | [[Sources/News/2026-01-03/2025-the-state-of-ai-in-healthcare-menlo-ventures]] | Research | Healthcare AI $1.4B spend (3x 2024). 85% to startups. Startups captured 70% of ambient market despite Nuance 77% hospital presence. |
| 2026-01 | [[Sources/Browser-History/2026-01-14-anthropic-and-openai-are-doubling-down-on-health-h]] | News | "Companies that were wrappers have been un-investable" — Primary Ventures. Foundation labs entering healthcare validates vertical threat. |
| 2026-01 | [[Sources/Browser-History/2026-01-27-innovaccer-and-snowflake-partner-to-drive-enterpri]] | News | Innovaccer Gravity: "30% faster data integration, 20-25% infrastructure cost savings." Intelligence layer on commodity data cloud. |
| 2026-01 | [[Sources/Browser-History/2026-01-27-agentic-ai-the-race-to-a-touchless-revenue-cycle]] | Research | McKinsey: "30-60% reduction in cost to collect" via agentic AI in RCM. $140B annually spent on RCM. |
| 2025-12 | [[Sources/LLM-Chats/2025-12-23-horizontal-vs-vertical-ai-healthcare]] | Research | "Market is fragmenting by use case complexity, not consolidating to horizontal platforms." Layer cake: horizontal infrastructure supports vertical applications. |
| 2026-01 | [[Sources/Tegus/tegus-calls-on-interop-8d257b4b]] | Tegus | "Reach as differentiator probably not sustainable moat" — Health Gorilla former CPO. Value accrues to orchestration/insights layer. |
| 2026-01 | [[Sources/Market-Research-PDFs/chief-operating-officer-at-neb-medical-services-_-tennr-_-te-a507e5f7]] | Operator | "90-95% of orders are still handwritten fax documents." Fax persistence guarantees referral infrastructure need. |

---

## What Was Removed (Scope Violations)

The original thesis conflated multiple distinct theses into one. The following content was **removed as scope violations** because they address different questions than the infrastructure/LLMOps focus:

1. **$100B platform opportunity / data interoperability thesis** — This is about data access commoditization and the intelligence layer, not about whether vertical companies build or buy LLMOps. Separate thesis: "Data Interop Commoditizes — Intelligence Layer Captures Value."

2. **Consumer health AI / ChatGPT front door** — This is about consumer-facing AI accountability and physician-in-the-loop models, not infrastructure. Separate thesis exists for this.

3. **Agentic RCM automation opportunity** — While related to healthcare AI, this is about the application layer (revenue cycle automation), not the infrastructure question. Moved to relevant thesis on RCM automation.

4. **Foundation model ICD-10 accuracy stats** — Kept as bear case context but removed as primary thesis driver. The thesis is not "foundation models are bad at coding"; it's "infrastructure creates lock-in."

5. **Per-Vertical Infrastructure Comparison table** — This was useful but belonged in a "Healthcare AI Landscape Overview" reference doc, not in a thesis about build-vs-buy LLMOps decisions.

6. **Voice AI / scheduling specifics** — Separate thesis on voice AI capturing practice scheduling exists.

---

## Related Theses

- [[Data Interop Commoditizes — Intelligence Layer Defensible]] — Separate thesis on three-tier market framework
- [[Clinical Documentation AI Expands Beyond Scribes—CDI and Coding Capture Revenue Cycle by 2028]] — Coding infrastructure detail
- [[Voice AI Captures Practice Scheduling—Integration Depth Creates Lock-In by 2028]] — Voice AI infrastructure detail
- [[Practices Adopt Fax AI — Tennr Becomes Back-Office OS]] — Referral infrastructure detail

---

*Confidence: MEDIUM — Strong evidence that vertical AI companies build proprietary infrastructure; almost no evidence they would buy healthcare-specific LLMOps tooling. The LLMOps opportunity (Opportunity #3) is speculative with no operator validation. The broader infrastructure lock-in thesis is HIGH confidence.*

*Last indexed: 2026-02-01*
*Last rebuilt: 2026-02-01*
