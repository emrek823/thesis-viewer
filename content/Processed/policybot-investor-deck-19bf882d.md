---
source_pdf: "https://drive.google.com/file/d/1ydPkXG6PHluiFHQEycttsf1w-04rFege/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Policybot Investor Deck.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1ydPkXG6PHluiFHQEycttsf1w-04rFege/view)

## Slide 1: Policybot - The Intelligence Layer for Healthcare Claims

Policybot
THE INTELLIGENCE LAYER FOR HEALTHCARE CLAIMS
MAY 2025

## Slide 2: Team

**WHO WE ARE**
We've worked on both the provider and the payer side of the equation. We've seen firsthand how providers struggle to manage the increasingly complex rules that payers are putting in place.

| Name               | Role               | Experience                 | Education               |
| :----------------- | :----------------- | :------------------------- | :---------------------- |
| Dan Witte, MS      | CEO                | Teladoc HEALTH, NIH        | CORNELL UNIVERSITY      |
| Matt Eng, PhD      | Head of Engineering| oscar, unified             | NOTRE DAME              |

POLICYBOT 02

## Slide 3: Each health insurer has their own rules dictating how healthcare is provided and paid for

Each health insurer has their own rules dictating how healthcare is provided and paid for

*   1,000 policies per insurance product
*   200+ policy changes from major insurers every night
*   900+ insurers
*   Policies are long and complex

POLICYBOT 03

## Slide 4: Providers struggle to understand and comply with policies, leading to financial losses

Providers struggle to understand and comply with policies, leading to financial losses

*   $35B spent administering prior auths ^1
*   15% of claims are rejected ^2
*   Over $200B in lost revenue ^3

1.  https://academic.oup.com/healthaffairsscholar/article/2/9/qxae096/7727862
2.  https://www.beckershospitalreview.com/finance/claims-denials-are-costing-hospitals-nearly-20b-per-year/
3.  https://www.healthcarefinancenews.com/news/change-healthcare-analysis-shows-262-million-medical-claims-initially-denied-meaning-billions

POLICYBOT 04

## Slide 5: These policies impact 5 key steps in the claim lifecycle

These policies impact 5 key steps in the claim lifecycle

*   ELIGIBILITY CHECK
*   SERVICE PROVIDED
*   CLAIM SCRUBBED
*   CLAIM ADJUDICATION & REMITTANCE
*   CLAIM AUDIT

*   PRIOR AUTH
*   CLINICAL DOCUMENTATION
*   CLAIM SUBMITTED
*   DENIAL APPEAL

POLICYBOT 04

## Slide 6: Policybot delivers intelligence to automate workflows and prevent revenue loss

Policybot delivers intelligence to automate workflows and prevent revenue loss

**Nightly Policybot Scrapers** (Inputs)
*   Provider Claims
*   Raw Policy Documents (from UnitedHealth Group, Cigna)
*   Provider Contracts

**Policybot Intelligence Engine** (Core Processing)

**Policybot API** (Outputs)
*   Web App
*   Notifications
*   Snowflake Database

POLICYBOT 06

## Slide 7: How it works - Example: Prior authorization

How it works
Example: Prior authorization

**Customer submits prior authorization**
An Authorization Form is shown with fields for PATIENT NAME, DATE, MEDICATION, and a SUBMIT button. This leads to "Authorization Submitted to Cigna".

**Policybot's ontology translates payer rules into actions**
```json
1 {
2 "HCPCS": "64492",
3 "Prior_auth_required": True,
4 "Medical_necessity_criteria":
5 ["Patient must be older than 18", "Patient must..."]
6 }
```

**Policybot aggregates and structures raw data**
A. Initial Authorization
Benzphetamine, Contrave, diethylpropion, phentermine, phendimetrazine, Qsymia, Saxenda, Wegovy, Xenical or Zepbound
(Includes both brand and generic versions and all formulations of the listed products unless otherwise noted)
Will be approved based on all of the following...

**Diagram: Policybot Layers**

**FOUNDATIONAL DATA**
*   Payer Policies
*   Contracts
*   Clinical Documentation
*   Claims

**INTELLIGENCE LAYER**
*   Policybot Ontology

**WORKFLOWS**
*   Payer Intelligence
*   Policybot

**CUSTOMER**
*   Claim Scrubbing
*   Documentation Integrity
*   Denial Appeal
*   Prior Auth
*   Claim Audit

POLICYBOT 07

## Slide 8: In the last 12 weeks we've closed

In the last 12 weeks we've closed
$150k ARR

*   **CONTRACTING**
    *   $90,000
    *   Customers: Claimable, MDaudit
*   **PIPELINE**
    *   $470,000
    *   Customers: HUMATA HEALTH (human+data), Turquoise Health

POLICYBOT 08

## Slide 9: With these customers we're already solving for prior auth and claim auditing

With these customers we're already solving for prior auth and claim auditing

*   ELIGIBILITY CHECK
*   SERVICE PROVIDED
*   CLAIM SCRUBBED
*   CLAIM ADJUDICATION & REMITTANCE
*   **CLAIM AUDIT** (Solved)

*   **PRIOR AUTH** (Solved)
*   CLINICAL DOCUMENTATION
*   CLAIM SUBMITTED
*   DENIAL APPEAL

POLICYBOT 09

## Slide 10: Policybot will expand to all 5 stages in the claim lifecycle

Policybot will expand to all
5 stages
in the claim lifecycle

1.  Claim Auditing ($1.3B)
2.  Prior Authorization ($35B)
3.  Claim Scrubbing ($1.5B)
4.  Clinical Documentation ($2.5B)
5.  Denial Appeal ($20B)

POLICYBOT 10

## Slide 11: Policybot is the intelligence layer powering revenue cycle companies

Policybot is the intelligence layer powering revenue cycle companies

**Competitive Landscape Matrix**
*   **X-axis:** WORKFLOW (left) to DATA (right)
*   **Y-axis:** MANUAL (bottom) to AUTOMATED (top)

| Category      | Workflow Automated                  | Data Automated                         |
| :------------ | :---------------------------------- | :------------------------------------- |
| **AUTOMATED** | Claimable, Machinify, VisiQuate     | Policybot                              |
| **MANUAL**    | Cognizant, MDaudit, R1              | MMIT, Policy Reporter by mercalis      |

**Legend:**
*   Customers (green circles)
*   Competitors (red circles)

POLICYBOT 11

## Slide 12: Contact

**CONTACT**
Dan Witte
dan@policybot.app
policybot.app

POLICYBOT