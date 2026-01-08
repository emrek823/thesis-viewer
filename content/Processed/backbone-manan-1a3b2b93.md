---
source_pdf: "https://drive.google.com/file/d/1QaHsELwv0zeE0DSVlMLHsge23yNagdZy/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Backbone (Manan).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1QaHsELwv0zeE0DSVlMLHsge23yNagdZy/view)

# Rebuilding the backbone of healthcare payments

## Slide 1: Rebuilding the backbone of healthcare payments

11.1
2025

Rebuilding the backbone of
healthcare payments

Backbone Systems // The first AI proactive revenue integrity platform designed for providers.

This presentation contains confidential and proprietary information of Backbone Systems. It is intended solely for the use of the individual or entity to whom it is addressed. Any unauthorized disclosure, copying, distribution, or use of the contents is strictly prohibited. By viewing this presentation, you agree to keep its content confidential.

## Slide 2: The US healthcare revenue cycle is a $170B+ market made up of administrative overhead between payers and providers

Backbone Systems. Confidential: do not share or distribute without permission
11.1
2025

The US healthcare revenue cycle is a $170B+ market¹ made up
of administrative overhead between payers and providers

**Front Cycle**

| Provider                 | Patient scheduling & intake | Physician / patient visit | In-visit & post-visit scribing | Patient collections       |
| :----------------------- | :-------------------------- | :------------------------ | :--------------------------- | :------------------------ |
| **Admin**                | Benefits verification, prior auth | Medical coding & CDI      | Claim creation & submission  | Denial mgmt.              | Cash posting in AR          |
| **Payer**                | Member benefits team, UM team | Utilization mgmt. review  | Payment integrity review     | ERA submission            |

¹ https://www.grandviewresearch.com/industry-analysis/us-revenue-cycle-management-rcm-market
2

## Slide 3: RCM is reactive by design: documentation and adjudication operate on misaligned incentives and opaque, evolving policies

Backbone Systems. Confidential: do not share or distribute without permission
11.1
2025

RCM is reactive by design: documentation and adjudication
operate on misaligned incentives and opaque, evolving policies

*   Claims start from clinical notes written for care, not reimbursement
    *   Payers adjudicate against dense, shifting policy text (e.g. LCD/NCD¹ coverage determinations, plan quirks, attachment rules)
    *   Denials, record requests, and clawbacks overwhelm under-resourced providers with limited visibility into payer nuances
*   Unable to guarantee compliance prior to claim submission, RCM operations are reactive, optimizing for throughput instead of accuracy: creating a multi-billion dollar services industry managing avoidable rework
*   Point solutions & tech-enabled service vendors automate fragments of the process but miss the core issue: the existence of the work to begin with

¹ Medicare local and national coverage determinations
3

## Slide 4: Market tailwinds: regulation, margin pressure, and complexity align incentives for a new, proactive solution

Backbone Systems. Confidential: do not share or distribute without permission
11.1
2025

Market tailwinds: regulation, margin pressure, and complexity align
incentives for a new, proactive solution

|                | Drivers                                                                                              | Signal                                                                                                                        | Resulting Shift                                                                                                                                                                                            |
| :------------- | :--------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Government** | CMS regulations further tighten audit enforcement, while "gold carding" aims to reduce provider burden with payer rules | Expanding audit scope elevates the cost of noncompliance; gold carding requires high first-pass approvals             | Compliance must be verified at submission, requiring first-pass documentation accuracy; further burden reduction requires proactive claim + auth adjudication rails                                          |
| **Payers**     | Rising denial mgmt. costs ($25B+) squeeze margins: prior auth & AI payment integrity help, but reactivity remains          | Cost pressure & CMS transparency initiatives require a shift towards upstream adjudication (e.g. Optum Real)        | Payers seek claim correctness guarantees they can trust, not more denials that require manual labor to manage                                                                                              |
| **Providers**  | Outpatient growth, rising audit frequency, and complex coverage rules overwhelm under-resourced RCM teams             | Manual rework and clawbacks occupy staff time, leak revenue, and erode AR predictability                              | Providers demand denial prevention over management: preserving revenue integrity while ensuring charge capture                                                                                             |

Financial incentives across government, payers, and providers now converge on one goal: getting the claim right the first time
4

## Slide 5: Backbone leverages contractual & clinical AI reasoning to proactively transform the full clinical record into approvals and payments

Backbone Systems. Confidential: do not share or distribute without permission
11.1
2025

Backbone leverages contractual &
clinical AI reasoning to proactively
transform the full clinical record
into approvals and payments

*   Backbone unifies payer policies, contracts, and clinical documentation into a single reasoning layer: a "payer digital twin" that adjudicates claims and authorizations before submission
*   By redefining RCM as a contract adjudication problem (rather than process automation), Backbone uniquely guarantees first-pass accuracy: eliminating rework, reducing denials, and accelerating reimbursement

**Patient Data**

| Patient medical record                               | Live eligibility info                                                                     | Practice/payer contracts                                                                                                  | Claim/ERA history                                                                                                           |
| :--------------------------------------------------- | :---------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------- |
| Longitudinal history: includes charts, referral reports, etc. | Full information, beyond EDI 270/271: plan-level exclusions, carve-outs, site-of-service | Detailed payer policies, from PDFs and payer web portals: representing latest adjudication info | All EDI 837+275/835 historical claim data, along with prior appeals and implicit policy adjustments |

**Backbone payer-aware clinical + contractual reasoning engine**
Speciality-practice specific framework built to dynamically reason & act over complex clinical, payer, and historical data

*   Document intelligence
*   Browser execution engine
*   Verification & guardrail platform
*   Practice-specific custom models

| Referral or direct intake                                                                    | Eligibility verification                                                                                                                                                  | Pre-service verification                                                                                                                                                                     | Prior authorization completion & tracking                                                                                                                    | Physician / Patient Visit |
| :------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :------------------------ |
| Intake form processing & EMR data entry                                                      | Live member status checking (payor portal, call, EDI)                                                                                                     | Reasoning over site-of-service policies, LCD/NCD coverage, and medical necessity docs to ensure requisite information is present for auth approval                                         | Authorization form submission & regular re-authorization                                                                       | Charge capture & coding           |
| New capability: eliminates auth denials, currently >20% in many practices                       | CPT, HCPCS, ICD-10 coding + charge documentation                                                                                                                                                                                                                                                                                                                 |
| Denial management & automatic re-work                                                                                                                                                   | Claim submission & status tracking                                                                                                                                                           | Claim creation & pre-bill adjudication                                                                                                                                                                                                                                                                                                                 |
| Immediate ERA interpretation, diagnosis, and remediation Establishes learning loop to model payer behavior, never making the same mistake twice                 | Automated claim tracking to ensure revenue capture                                                                                                                                                           | Evidenced, complete claim analysis & edits against clinical records, payer policies, patient carve-outs, and regulatory measures Cited evidence packet generated per-claim                                                                                                                                                                            |
| Patient fee estimation                                                                                                                                                                                                                                                                                                                                                                                                                                                      | New capability: improves first-pass claim yield to 95%+, eliminating 50%+ of all denials (many practices have >15% of claims denied) |
| Fee schedules, contracts, and estimated OOP costs generated while patient in-office           |
| New capability: cash advances & real-time estimation impossible without pre-adjudication      |

Proactive, guaranteed revenue protection with Backbone (in blue)
5

## Slide 6: We first eliminate medical necessity denials & rework in outpatient specialties with the sharpest pain

Backbone Systems. Confidential: do not share or distribute without permission
11.1
2025

We first eliminate medical necessity denials & rework in outpatient
specialties with the sharpest pain

*   Our ICP is the CFO/VP Revenue Cycle at IVIG/biologic infusion centers, spine/ortho ASCs, and radiation oncology centers
*   Backbone starts as AI chart review + CDI¹: identifying revenue capture opportunities & pre-adjudicating claims and auths to improve first-pass yield
*   That beachhead alone is a ~$25B SAM (~$1B IVIG + $12B spine/ortho ASC + $12B rad onc): the same payer-aware reasoning fabric then extends horizontally

**Mid Cycle**

| In-visit & post-visit scribing |
| :--------------------------- |
| Medical coding & CDI         |
| Claim creation & submission  |
| Utilization mgmt. review     |

**Back Cycle**

| Denial mgmt.             |
| :----------------------- |
| Payment integrity review |

Backbone surface area in blue; though not pictured above, platform ensures auth correctness as well
¹ Clinical Documentation Integrity
6

## Slide 7: Backbone naturally expands as a financial instrument underwriting claim risk, and the next generation of payer-provider rails

Backbone Systems. Confidential: do not share or distribute without permission
11.1
2025

Backbone naturally expands as a financial instrument underwriting
claim risk, and the next generation of payer-provider rails

| Greenlight                                                                                                                                                                                          | Financing                                                                                                                                                                  | Payer/Provider Rails                                                                                                                                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backbone lives pre-service and pre-bill, reasons over payer policies & clinical context, and marks outpatient auths + claims as "guaranteed payable" Turning uncertainty into verified claim integrity | Standing behind its work, Backbone is uniquely able to advance cash against green-lit claims, profiting off the spread From payment integrity to payment liquidity | With claim-level payability, payers can reliably grant gold cards & CMS can partner to launch further transparency initiatives Defining the shared source of truth between provider and payer |
7

## Slide 8: Deep customer discovery, market trends & workflow observations prove the need and form a strong top of funnel

Backbone Systems. Confidential: do not share or distribute without permission
11.1
2025

Deep customer discovery, market trends & workflow observations
prove the need and form a strong top of funnel

*   Discovery with practices & revenue integrity leaders shows the same pain: increasing rates of concurrent + retroactive denials due to avoidable documentation gaps & insufficient evidence of medical necessity
*   Market trends tell the same story: denials and underpayments are cited as the top 2 pain points in 80% of leaders surveyed, and only 35% are satisfied with current RCM offerings—though 91% deem RCM as essential¹
*   Backbone is solving this exact problem today: in late stages of development & piloting early engagements in practices of varying size, with strong TOFU from outbound + network intros
    *   Mid-size oncology center, 10+ physicians/RNs
    *   Small hematology center, 5+ physicians/RNs
    *   Small internal medicine center, 5+ physicians/RNs

¹ Ingenious Med "The Many Sources of Pain in RCM and the Potential of AI", 2023
8

## Slide 9: We are uniquely positioned to operationalize real-time claim adjudication into the future of healthcare payments

Backbone Systems. Confidential: do not share or distribute without permission
11.1
2025

We are uniquely positioned to operationalize real-time claim
adjudication into the future of healthcare payments

*   Backbone is founded by Manan Shah (Stanford CS BS/MS, founding ML & infra lead at Kumo AI), who led development of large-scale predictive reasoning systems for enterprises (e.g. DoorDash, Reddit, Coinbase, etc.)
*   The company is fortunate to be advised by leaders across research, healthcare & revenue cycle
    *   Dr. Jure Leskovec — Professor, Stanford Computer Science
    *   Dr. Ranjana Saxena — Director of Hospitalist Group, Kindred Hospital
    *   Dr. Ashish Shah — Physician Owner, Eden Internal Medicine
    *   Nagi Rao — Executive Chairman, EqualizeRCM
9

## Slide 10: We are raising $3M to deploy the provider-side payment integrity solution for specialty outpatient clinics

Backbone Systems. Confidential: do not share or distribute without permission
11.1
2025

We are raising $3M to deploy the provider-side payment integrity
solution for specialty outpatient clinics

**Use of Funds (12 mo)**

*   **Build**: payer-policy ingestion + clinical/contractual reasoning + integrations for ASC, infusion, and radiation oncology; elect to remain horizontal or double-down on one vertical
*   **Prove**: deploy with 15 design-partner sites on high-scrutiny claims; deliver >20% denial avoidance / revenue lift & expand to increase claim ownership
*   **Team**: grow to 10 (product/ML, integrations, clinical/RCM, founder-led GTM)

Why now: outpatient complexity is skyrocketing, payers are tightening policies, and incumbents are wisening to the shift (e.g. Optum Real, Availity payment accuracy, Waystar acquisition of Iodine Software). The window is open for a provider-first play to capture market share.
10