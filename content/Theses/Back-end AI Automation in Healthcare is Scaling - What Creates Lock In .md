---
aliases:
  - Healthcare Back-Office AI Lock-In Framework
---

## Overview

Healthcare back-office AI is scaling—$1.4B in 2025 spend, 85% to startups—but lock-in quality varies dramatically by category. The framework: lock-in has five dimensions—**operational dependency, switching cost, technical moat, data moat, and incumbent threat**. Categories strong on operational dependency but weak on technical/data moats have **fragile lock-in** (referrals/fax). Categories strong on technical and data moats have **durable lock-in** (payment integrity, prior auth). Categories with high incumbent threat face **vulnerable lock-in** regardless of other dimensions (CDI/ambient, voice).

The investment insight: **operational dependency without technical moat is fragile; technical moat + data moat is durable.** Tennr's referrals lock-in comes from staff cuts (40→5 at BetterNight, "could not untangle...disastrous") but fax parsing is technically solved—a well-funded competitor could replicate the capability. Payment integrity's lock-in comes from 130+ content packs and decades of payer-specific rules that can't be replicated quickly—Cotiviti/Optum have 1.2% annual churn because the moat is knowledge, not operations. Prior auth has high technical moat (payer policy complexity, UM system integration) but buying cycles of 9-36 months mean the market "won't close until 2035." Voice scheduling has weak lock-in across all dimensions—TrustCare said switching would be "not hard at all," and athena's free AI compresses the market.

---

## Lock-In Framework

**Five dimensions determine lock-in quality:**

| Dimension | Definition | High Example | Low Example |
|-----------|------------|--------------|-------------|
| **Operational Dependency** | If you turn off the tool, can the business function? | Staff cuts → can't function | Manual fallback exists |
| **Switching Cost** | What does it cost to switch vendors? | Rehire 35 FTEs, retrain, rebuild | Swap API, retrain users |
| **Technical Moat** | How hard is the technology to replicate? | Payer policy knowledge, 130+ content packs | Fax parsing, voice API |
| **Data Moat** | Does accumulated data create compounding advantage? | Claims patterns, denial reasons | Documents similar across orgs |
| **Incumbent Threat** | Is someone building this cheaper/bundled? | Epic Art at $80/mo, athena free | No competitive product |

**Lock-in quality types:**
- **Durable:** High technical + data moat, low incumbent threat → Payment integrity, prior auth
- **Fragile:** High operational dependency, low technical/data moat → Referrals/fax
- **Vulnerable:** Any dimension mix + high incumbent threat → CDI/ambient, voice

---

## Category Scoring

| Category | Op. Dependency | Switching Cost | Technical Moat | Data Moat | Incumbent Threat | **Lock-In Type** |
|----------|---------------|----------------|----------------|-----------|------------------|------------------|
| **Payment Integrity** | HIGH | HIGH | HIGH (130+ packs) | HIGHEST | LOW (they ARE incumbent) | **DURABLE** |
| **Prior Auth** | LOW | MEDIUM (3-yr) | HIGH (payer policy) | HIGH | MEDIUM (MCG/InterQual) | **DURABLE** |
| **Referrals/Fax** | HIGH (staff cuts) | HIGH (rehire) | LOW (fax solved) | LOW | LOW (no Epic product) | **FRAGILE** |
| **CDI/Coding** | MEDIUM (habits) | MEDIUM (retrain) | LOW ("apple to apple") | MEDIUM | HIGH (Epic bundling) | **VULNERABLE** |
| **Voice Scheduling** | LOW | LOW | LOW (API commodity) | LOW | HIGH (athena free) | **VULNERABLE** |

---

## Bull Case

**1. Payment integrity has the most durable lock-in in healthcare.** Cotiviti and Optum CES own 90%+ of claims editing with 1.2% annual churn—"ClaimsXten and Optum CES have never churned a customer." The moat is 130+ knowledge packs vs. 13 at HealthEdge—"$100M+ annual savings gap takes years to close." This is technical moat (rules complexity) + data moat (decades of payer patterns) + low incumbent threat (they ARE the incumbents). New Mountain Capital consolidating the category (Machinify acquired Performant for $670M) validates durable value.

**2. Prior auth has high technical moat despite slow adoption.** Payer policy knowledge compounds—each payer has different rules, different service lines, different states. Former Change Healthcare VP: "There's two vendors that represent 80% of the clinical questionnaires, MCG and InterQual. You can't do all three jobs without playing ball with those two." The technical moat is payer-specific policy intelligence that takes years to build. 3-year contracts provide switching cost. But buying cycles are 9-36 months and "market won't close until 2035."

**3. Referrals/fax lock-in is real but fragile.** BetterNight cut from 40 admins to 5 after Tennr implementation—"could not untangle...disastrous." This is HIGH operational dependency + HIGH switching cost (would need to rehire). BUT: fax parsing is technically solved, documents are similar across organizations (LOW data moat), and no technical moat prevents a well-funded competitor from replicating. Lock-in depends on Tennr maintaining execution advantage, not structural barriers.

**4. Low incumbent threat amplifies fragile lock-in.** Referrals/fax benefits from Epic having no competitive product. MPOWERHealth: "We have not found any competitors to Tennr in the referral space." This buys time—but if Epic builds referral automation or a well-funded startup enters, the lack of technical/data moat means switching becomes possible once operational dependency is addressed.

---

## Bear Case

**1. CDI/ambient lock-in is vulnerable despite high adoption.** MaineHealth's informatics director: AI models are "apple to apple" but differ on EHR integration. 97% user retention suggests behavioral lock-in, but Epic Art at $80/provider vs. startup $600/provider is 7.5x price disadvantage. Epic running 200+ AI pilots. MaineHealth's goal: "keep things in Epic as much as we can." HIGH incumbent threat + LOW technical moat = vulnerable lock-in.

**2. Voice scheduling has weak lock-in across all dimensions.** TrustCare's COO on switching AI phone vendors: "Not be hard at all." athena launching free AI in Feb 2026. Zocdoc Zo at $2/booked appointment with 70% resolution. LOW operational dependency (can hire back), LOW switching cost (swap API), LOW technical moat (voice APIs commoditized), LOW data moat (call patterns similar), HIGH incumbent threat. Even specialty rules (28-day injection spacing) provide only temporary differentiation.

**3. Referrals/fax fragility could be exposed by well-funded competitor.** Brightree API "took decades to become proficient"—but is this genuine complexity or just neglected infrastructure? 60 WIP states for DME processing is workflow complexity, not technical moat. A competitor with strong engineering could rebuild this in 12-18 months. The staff cuts that create operational dependency could be addressed by a competitor offering managed services.

**4. 95% of AI pilots fail to reach deployment, limiting lock-in realization.** Industry experts note: "Most voice AI / healthcare automation still marginal improvements." KLAS found agentic AI adoption was mentioned by only 17 of 3,000 health systems. Lock-in only matters for the 5% that reach production scale—survivorship bias inflates the category's attractiveness.

---

## Startup Opportunities

**1. Payment Integrity AI (Second-Pass Entry) — Stage: Proven, DURABLE lock-in**
- Why this follows: Highest technical + data moat. Second-pass vendors prove 60%+ hit rate vs 25-30% incumbent at 20:1 ROI, then migrate to first-pass.
- Wedge: Mid-market payers (<1M lives), regional Blues, Medicaid MCOs lacking AI resources
- The edge: Payer-specific policy patterns compound over time. Each denied claim teaches the system. Data moat widens with scale.
- Buyers: VP Payment Integrity, CMO; but 9-36 month sales cycles
- Risk: New Mountain consolidating category (Machinify + Performant); Cotiviti acquired Edifecs

**2. Prior Auth Intelligence — Stage: Early, DURABLE lock-in**
- Why this follows: High technical moat (payer policy complexity), high data moat (patterns compound), but requires patience.
- Wedge: Start with community health plans (faster buying cycles), prove ROI, work up to regional Blues
- The edge: Payer policy knowledge that compounds. Must integrate with MCG/InterQual or own the UM system front door.
- Buyers: CMOs at health plans (sign off on med ex reduction)
- Risk: Problem may be "too hard"—copilot required, full automation fails. "Market won't close until 2035."

**3. Referrals/Fax Automation (Tennr Model) — Stage: Proven, FRAGILE lock-in**
- Why this follows: High operational dependency (staff cuts), low incumbent threat (no Epic product). But fragile—need to build technical moat.
- Wedge: Fax-to-EHR automation for DME/radiology/infusion; expand to adjacent workflows to compound lock-in
- The edge: Current lock-in from staff cuts + integration investment. Must build data moat (e.g., cross-customer patterns) or expand to platform before competitor enters.
- Buyers: DME companies, specialty practices, home health providers
- Risk: Well-funded competitor could replicate in 12-18 months; managed service model could address operational dependency

**4. CDI/Coding Platform — Stage: Proven, VULNERABLE lock-in**
- Why this follows: High adoption, real revenue impact ($4M+ pickup at Stanford), but Epic bundling threatens margins.
- Wedge: Multi-EHR support (non-Epic is 58% of market), coding depth (ICD-10 subtypes, not generic "hypertension")
- The edge: Must win on coding accuracy AND multi-EHR. Cleveland Clinic chose Ambience over Abridge for coding superiority. Epic-only shops increasingly captive.
- Buyers: Health systems, multispecialty groups, RCM leaders
- Risk: Epic Art bundling compresses pricing; coding accuracy must exceed Epic "good enough" by wide margin

---

## Open Questions

**1. Can referrals/fax build technical or data moat before competition arrives?**
Tennr's current lock-in is operational (staff cuts) not technical (fax parsing is solved). If Epic builds referral automation or a well-funded startup enters, can Tennr defend? Possible moat-building: cross-customer pattern recognition, expanding to full practice OS, vertical depth that takes years to replicate.
→ Would determine whether referrals/fax is FRAGILE or becomes DURABLE

**2. Does CDI coding accuracy create durable differentiation or compress to commodity?**
Cleveland Clinic chose Ambience over Abridge for coding. But if foundation models improve on ICD-10 accuracy, the gap may close. Epic Art adding coding features. Watch: coding accuracy benchmarks in 2026, Epic Art coding capabilities.
→ Would determine whether CDI remains VULNERABLE or finds niche defensibility

**3. How long is the "no Epic competitor" window for referrals/fax?**
Current low incumbent threat is key to referrals/fax thesis. If Epic announces referral automation at UGM26, the fragile lock-in could break. If Epic continues ignoring this workflow, Tennr has runway to build moat.
→ Would validate or invalidate the time-to-moat window

---

## Related Theses

- [[Healthcare Payment Infrastructure Is Rebuilding, Startups Win the Seams]] — Payment integrity detail
- [[Vertical AI Companies are Building Their Own Tooling or Using General LLMOps Infra - Is there a market for helthcare specific LLMOps ]] — Infrastructure lock-in framework

---

*Confidence: HIGH — Framework validated across 15+ operator interviews. Core insight: operational dependency without technical moat = fragile (referrals/fax); technical + data moat = durable (payment integrity, prior auth); high incumbent threat = vulnerable regardless (CDI, voice). Investment implication: prioritize durable lock-in categories even if adoption is slower.*
