## Overview

Healthcare AI spending hit $1.4B in 2025—nearly tripling 2024 investment—with 85% flowing to startups rather than incumbents. The disconnect between model quality (GPT-4 scores 33.9% on ICD-10-CM coding) and deployment success (95% of healthcare AI projects fail) reveals the core thesis: **operational infrastructure creates defensible moats, not models**. Vertical AI companies are building their own specialty-specific tooling (EHR connectors, specialty workflows, payer policy engines) because generalist infrastructure cannot encode 28-day retina injection spacing rules, 400 oncology cancer ontologies, or fax parsing for handwritten referrals. BetterNight reduced intake staff from 100 to 5 using Tennr; the company "could not untangle from Tennr if we tried—it would be disastrous." This is not model differentiation. This is infrastructure lock-in.

The opportunity sits between two failing layers: foundation models too inaccurate for production clinical workflows, and health system buyers who shortened AI purchasing cycles from 8.0 to 6.6 months signaling urgency to deploy. Abridge ($5.3B valuation, 2,000+ licenses at MaineHealth), Ambience (Cleveland Clinic enterprise contract), and Tennr (100+ DME/infusion customers) are building proprietary infrastructure stacks—EHR bidirectional integrations, specialty templates, qualification workers—because no horizontal player offers this. The question is not whether vertical companies will build their own tooling (they already are) but whether a horizontal orchestration layer can capture value before Epic bundles AI for its 42% hospital base or vertical consolidation closes the window.

---

## Bull Case

**85% of healthcare AI spend flows to startups despite incumbent distribution.** Even in ambient scribing where Microsoft's Nuance deployed DAX to 77% of U.S. hospitals, startups like Abridge and Ambience captured nearly 70% of the new market. Health systems shortened AI buying cycles from 8.0 to 6.6 months—18% acceleration—signaling urgency to deploy production-ready solutions. Kaiser deployed Abridge across 40 hospitals and 600+ offices in their fastest technology implementation in 20 years.

**Infrastructure lock-in is measured and catastrophic to unwind.** BetterNight reduced intake staff from 100 to 5 using Tennr. Once embedded, switching requires re-hiring and retraining entire departments. SleepQuest found Brightree API integration "taken decades to become proficient"—each EHR connector represents months of specialty-specific engineering that compounds over time. The 97% average user retention at MaineHealth demonstrates once providers adopt, they cannot imagine returning to manual workflows.

**Vertical companies are building proprietary infrastructure, not using horizontal LLMOps.** Tennr built Brightree API integrations, document qualification workers, fax parsing for handwritten orders. Abridge built Epic Pal deep integrations, specialty templates for 44+ specialties, inpatient workflows. Ambience built multi-EHR connectors (Oracle Cerner, athena, MEDITECH), coding intelligence, referral management. None of these companies use off-the-shelf LLMOps platforms—they build specialty-specific infrastructure because generalist tools cannot encode healthcare workflow complexity.

**Multi-EHR integration is the primary differentiator.** LifePoint has 12+ EHRs; Abridge's Epic-only integration limits them to 10% of LifePoint physicians. Ambience and Commure win by crossing Oracle Cerner, athena, MEDITECH. Commure integrates with 60+ EHRs. This infrastructure depth—not model quality—determines which vendors can serve heterogeneous health systems.

---

## Bear Case

**Epic controls 70% of EHR decisions and is bundling AI for its 42% hospital base.** Epic captured ~70% of U.S. hospital EHR decisions in 2024—largest net gain on record. Art (ambient scribe) is free for Epic customers. The Microsoft partnership accelerates embedded AI, and Epic can replicate wrapper functionality at near-zero marginal cost for its installed base. MaineHealth's goal is to "keep things in Epic as much as we can."

**Foundation model labs are vertically integrating into healthcare.** OpenAI bought Torch (~$100M) for patient records; Anthropic launched Claude for Healthcare the same week. OpenAI selected b.well for health data connectivity across 2.2M providers and 320 health plans. "Companies that were wrappers have been un-investable for a while, because it doesn't feel like there's real defensibility."

**AI models are "apple to apple"—differentiation is EHR integration.** MaineHealth found Nuance DAX and Abridge effectively identical in core functionality. Cleveland Clinic chose Ambience over Abridge specifically for coding superiority—but both use foundation models. The differentiator is not the model; it's specialty workflows, EHR depth, and coding intelligence layers built on top.

**Specialty depth separates survivors from casualties.** Abridge captures "hypertension" generically instead of ICD-10 subtypes; Ambience is "way more advanced" on coding depth. Not all vertical infrastructure is equally deep; shallow implementations face margin compression as Epic bundling and model improvement continue.

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

## Related Theses

- [[Clinical AI Reimbursement Is Opening — Cardiac Imaging Is the Template, FDA Deregulation Accelerates]] — Regulatory context for clinical AI deployment
- [[AI Value in Healthcare Shifts to Providers — Quality Measurement Creates the Flywheel]] — Provider value capture from AI infrastructure

---

*Confidence: MEDIUM — Strong evidence that vertical AI companies build proprietary infrastructure; almost no evidence they would buy healthcare-specific LLMOps tooling. The LLMOps opportunity (Opportunity #3) is speculative with no operator validation. The broader infrastructure lock-in thesis is HIGH confidence.*
