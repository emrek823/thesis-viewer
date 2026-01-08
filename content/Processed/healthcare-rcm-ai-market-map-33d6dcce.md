---
source_pdf: "https://drive.google.com/file/d/1TObT5xFY8aK-1dua-qV1D_iA32gZmtfA/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Healthcare RCM AI Market Map.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1TObT5xFY8aK-1dua-qV1D_iA32gZmtfA/view)

## Slide 1: ACME AI Applications in Healthcare

**ACME**

AI Applications in Healthcare
Focusing on Revenue Cycle Management

Max Luo February 2024

Confidential

1

## Slide 2: Summary

**Key Takeaways**

*   "RCM," or revenue cycle management, is the process by which hospitals submit claims to payors and get reimbursed.
*   Healthcare RCM is a huge market ($150B), full of manual processes that AI can automate.
*   Many precedent exits have occurred in the space (usually PE-owned SaaS companies)
*   The VC-backed landscape is already crowded, but there will be large winners and there is still upside in valuation
*   High-potential companies, last round series + valuation:

| Category | Company     | Description                      | Valuation        | Last Round |
| :------- | :---------- | :------------------------------- | :--------------- | :--------- |
| Coding   | CODAMETRIX  | End to end coding                | $200M            | Series B   |
| Coding   | SmarterDx   | Clinical documentation integrity | $61M             | Series A   |
| Prior Auth | Co:Helm     | Payor prior auth copilot         | $100M            | Series A   |
| Prior Auth | silna       | Provider prior auth + benefit ver. (autism, PT) | $15M             | Seed       |
| Prior Auth | LATENT      | Pharmacy / Rx prior auth         | <$20M            | Seed       |

Max Luo 2024
2

## Slide 3: Healthcare RCM is a huge market ($150B), and consists of many manual processes that AI can automate

**RCM Market Size is huge, at $150B**

**Total US Healthcare Spend, $T**

| Year | Spend ($T) |
| :--- | :--------- |
| 2017 | $3.26      |
| 2018 | $3.41      |
| 2019 | $3.56      |
| 2020 | $3.96      |
| 2021 | $4.08      |
| 2022 | $4.25      |

Assuming 3.5% take rate for RCM services (conservative)

**Total US RCM Market Size, $B**

| Year | Size ($B) |
| :--- | :-------- |
| 2017 | $114      |
| 2018 | $119      |
| 2019 | $125      |
| 2020 | $139      |
| 2021 | $143      |
| 2022 | $149      |

For just coding and billing services (one portion of RCM), there are ~180k coders in the US with median salary of $50k, for a total employment spend of ~$10B.

**Headwinds and Tailwinds**

**Why is it a good space for disruption?**

*   High transaction costs: 3.5 - 10% of revenue, stemming from many manual labor processes...
*   ...that don't work well (17% of claims denied, 60 days AR for hospitals)...
*   ...many of which can be automated (low-level matching, summarization tasks)
*   Stable, non-cyclical industry
*   Incumbents have been slow to innovate on AI

**What are the challenges?**

*   GTM: long sales cycle for providers + payors. Many require pilots because so sensitive to cash collections
*   Edge cases for AI are not easy (coverage of benefits, payor-specific rules) e.g. spousal vs employer
*   Competition: lots of $ going into the space already

Max Luo 2024
3

## Slide 4: RCM process: getting paid by health insurance requires many manual steps

**Typical flow of RCM processes**

Highly manual process

**(Diagram description)**

**Patient + Physician column:**
*   Patient check in / intake
*   Patient copay / deductible
*   Procedure or Rx
*   (1) Physician Charting + Notes
*   Patient OOP payment + collections

**Back-end admin (RCM services) column:**
*   (2) Benefit Verification
    *   Clearinghouse (or payor portal, phone call)
*   (3) Prior Authorization
    *   Software networks, payor portal, phone call
*   (4) Coding
*   (5) Claim Submission
*   (5) Denials + Appeals
    *   Clearinghouse
*   Accounts Receivables

**Payor column:**
*   Benefit Review
*   Prior Auth Review
*   Claim Review
*   Payments to provider

**The most manual processes require complex matching, "translation," or communication, which could be automated with AI**

1.  **Physician Charting + Notes**
    *   Translate physician/patient convo into specialized terminology (medical record)
2.  **Benefit Verification**
    *   Ask for specific benefits coverage (online portals don't give detailed coverage info)
3.  **Prior Authorization**
    *   Match medical record against complex medical necessity criteria
4.  **Coding**
    *   Translate medical record to payor taxonomy (CPT codes)
5.  **Denials + Appeals**
    *   Ask for denial rationale (many payors don't provide), or argue if payor made mistake

Max Luo 2024
4

## Slide 5: Each step in the RCM process is a several billion dollar market

| RCM Process Step            | Vertical incumbents                       | Point solutions (usually formerly or current PE owned) | Venture-backed (not comprehensive)                                                                                     |
| :-------------------------- | :---------------------------------------- | :----------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| **Patient + Physician**     |                                           |                                                        |                                                                                                                        |
| Patient check in / intake   |                                           | **Patient in-take (registration / scheduling)**        | notable                                                                                                                |
|                             |                                           | Phreesia: $0.36B rev, $1.5B EV                         |                                                                                                                        |
| Physician Charting + Notes  | **EHRs**                                  | **Voice transcription**                                | abridge, Nabla, Ambience                                                                                               |
|                             | Epic: $4.6B rev, $15.7B EV                | NUANCE: Microsoft $1.4B rev, $19.7B EV                 |                                                                                                                        |
|                             | ORACLE Cerner: $5.7B rev, $28B EV         |                                                        |                                                                                                                        |
| Patient OOP payments        | athenahealth: $1.5B rev, $17B EV          |                                                        | cedar                                                                                                                  |
| **Back-end Admin (RCM Services)** | eClinicalWorks: $0.9B rev               | **RCM solutions**                                      | INFINITUS                                                                                                              |
| Benefit Verification        | PointClickCare: $0.5B rev, $5B EV         | WAYSTAR: Software $0.7B rev, $8B EV                    | cohere HEALTH                                                                                                          |
| Prior Authorization         | Allscripts: $0.6B rev, $0.9B EV           | R1: Software + services $2.2B rev, $6B EV              | **Prior auth software + network**                                                                                      |
|                             |                                           | CONIFER services: $1.3B rev                            | covermymeds: $4.3B rev                                                                                                 |
| Coding, Denials, Appeals    |                                           |                                                        | FATHOM, nym, CODAMETRIX, SmarterDx                                                                                     |
| Claims Review               |                                           | **Core payor system**                                  |                                                                                                                        |
|                             |                                           | HEALTHEDGE: $0.4B rev, $3B EV                          |                                                                                                                        |
| **Payor**                   |                                           |                                                        |                                                                                                                        |
| Payments to Provider        | **Clearinghouses**                        | **Payor payments / network mgmt**                      |                                                                                                                        |
|                             | CHANGE HEALTHCARE: $4.6B rev, $15.7B EV   | zelis: $1B rev, $15B EV                                |                                                                                                                        |
|                             | Availity: $0.2B rev, $2.5B EV             |                                                        |                                                                                                                        |
|                             | cognizant TRIZETTO: $1.4B rev             |                                                        |                                                                                                                        |

Max Luo 2024
5

## Slide 6: Incumbents Deep Dives – RCM Point Solutions can be large businesses, and services firms are ripe for disruption

| Financials              | covermymeds® MCKESSON                                     | WAYSTAR                                             | R1                                                          |
| :---------------------- | :-------------------------------------------------------- | :-------------------------------------------------- | :---------------------------------------------------------- |
| **Overview / Product**  | Electronic Prior Auth network that fully digitized process that was previously phone call + fax | RCM software suite; focus on smaller ambulatory providers | End-to-end RCM tech-enabled services that made 6 large $200M+ acquisitions since 2018 |
| **Why did they succeed?** | Built a network of payor integrations and expanded from pharmacies customers to providers | Focus on underserved customer segment (ambulatory) – ACV is $22k across 30k customers, only 3% >$100k | Found a strategic partner (Intermountain) for revenue (~$800M in 2023) and capital (~$300M+ since 2016) for SaaS acquisitions |
| **Revenue**             | $3-4B (including $720M EV acquisition)                    | $700M (50% SaaS, 50% payments)                      | $2.1B (70% services, 30% SaaS/payments)                     |
| **Growth Rate**         | ~14%                                                      | 20%                                                 | 17%                                                         |
| **Gross Margin**        | n/a                                                       | $486M (70% of rev)                                  | $351M (20% of rev)                                          |
| **EBITDA**              | $550M (~13% of rev)                                       | $295M (42% of rev)                                  | $557M (27% of rev)¹                                         |
| **EV**                  | n/a (acq. by McKesson in 2017 for $1.4B w/ >$150M+ rev.)  | $7-8B (targeting IPO this summer)                   | $6B                                                         |

**Takeaways**
*   Point solutions can be very big companies (Prior Auth, RCM), even with only 3-5% market share (eg Waystar)
*   Need either network effects (CoverMyMeds) or fast GTM in underserved market segment (Waystar)
*   Traditional RCM services are very low margin
*   R1 trades at 3x EV/revenue due to software acquisitions

Max Luo 2024
¹ adding back tech R&D amortization to get EBITDA higher than gross margin
6

## Slide 7: Healthcare AI Market Map (1/2) – Note-taking + RCM is crowded

**Recommended to track**

| Category (RCM Services) | Company      | Year Founded | Total Funding, $M | Last Round Size, $M | Last Val, $M | Major Investors                                                                            | Differentiation / Notes                                                |
| :---------------------- | :----------- | :----------- | :---------------- | :------------------ | :----------- | :--------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| **Patient + Physician** |              |              |                   |                     |              |                                                                                          |                                                                        |
| Note-taking / Scribing  | abridge      | 2018         | $214              | $150                | $850         | Bessemer Venture Partners, SPARK, USV                                                    | Product is "amazing" → includes clinical note generation vs. only voice-to-text transcription |
|                         | Ambience     | 2020         | $101              | $70                 | $300         | KLEINER PERKINS, OpenAI, alóz                                                            | Unclear differentiation                                                |
|                         | Nabla        | 2018         | $45               | $24                 | $150         | CATHAY, firstminute                                                                      | Also includes DeepScribe, Robin                                        |
| **Back-end Admin**      |              |              |                   |                     |              |                                                                                          |                                                                        |
| AI coding / billing     | FATHOM       | 2015         | $60               | $46                 | tbd          | ALKEON, 8VC, G/                                                                          | First movers -- rules based (vs AI), with low automation (50% vs. 85%+) |
|                         | nym          | 2018         | $47               | $25                 | $97          | ADDITION, Bessemer Venture Partners, G/                                                  | Nym recently changed CEO                                               |
|                         | CODAMETRIX   | 2018         | $100              | $50                 | $200         | SignalFire                                                                               | End to end coding; starting with radiology                             |
|                         | SmarterDx    | 2020         | $21               | $15                 | $61          | Bessemer Venture Partners, flare capital partners, virtue.                               | Starting with error detection, not end-to-end; very fast growing (5'xd last year), targeting $15M ARR mid 2024 |
|                         | Synaptec Health | 2020      | $4                | $4                  | $14          | Fusion Fund, foothill ventures                                                           | Initial focus on EM; strong tech but slow traction                     |
|                         | Adonis       | 2022         | $23               | $17                 | $85          | GBLING, SOMA CAPITAL                                                                     | Product + service does not work                                        |
|                         | MAVERICK     | 2017         | $10               | $9                  | $12          | LionBird, Firstime                                                                       | Initial focus on radiology; $1M contract w/ Radnet                     |
| RPA / Billing Platforms | AKASA        | 2018         | $205              | $120                | $1,020       | alóz, BOND, COATUE                                                                       | Custom RPA development (like Palantir)                                 |
|                         | candidhealth | 2019         | $36               | $24                 | $110         | 8VC, BOX GROUP, Y First Round                                                            | Focused on digital health startups or specific verticals (eg mental health) |
|                         | Gentem       | 2019         | $14               | $10                 | $40          | CERCANO, SUSA                                                                            | Not AI – more just billing platforms                                   |
|                         | juniper      | 2021         | $14               | $10                 | $15          | alóz, K. Y VENICE                                                                        |                                                                        |

Max Luo 2024
7

## Slide 8: Framework for assessing AI coding / billing companies

| Section                 | Question                                            | Best in class benchmark                          |
| :---------------------- | :-------------------------------------------------- | :----------------------------------------------- |
| **Tech Performance**    | How accurate is the model?                          | 95%                                              |
|                         | What % of the work can the model automate?          | 85%                                              |
|                         | Is the underlying technology true AI / deep learning, or is it rules based? | Deep Learning                                    |
|                         | Does the tech increase revenue / reduce denials?    | 60% decrease in denials                          |
|                         |                                                     | $2-5M revenue increase per hospital              |
| **Growth**              | How quickly are you growing?                        | 5x for 2 years                                   |
|                         | How long is sales cycle? Do your customers require pilots? | 3-6 months, 1-2 month pilot with audit           |
| **Margins / Unit Economics** | How are you pricing? Volume or success-based / value? | Success-based (sell on revenue increase vs. cost reduction) |
|                         | What is your gross margin?                          | 70-80% gross margin                              |

Max Luo 2024
8

## Slide 9: Healthcare AI Market Map (2/2) – Prior Auth space is more open

**Recommended to track**

| Category (RCM Services) | Company        | Year Founded | Total Funding, $M | Last Round Size, $M | Last Val, $M | Major Investors                                                              | Differentiation / Notes                                   |
| :---------------------- | :------------- | :----------- | :---------------- | :------------------ | :----------- | :--------------------------------------------------------------------------- | :-------------------------------------------------------- |
| **RPA**                 | Olive          | 2012         | $902              | $800                | $0 (prev. $4B) | Gkv, OAKHC/FT, VISTATIGERGLOBAL                                              | failed automation company -- RPA didn't work              |
| **Benefits Ver.**       | INFINITUS      | 2019         | $51               | tbd                 | $500         | G/, KLEINER PERKINS, COATUE                                                  | benefit verification for pharma hubs                      |
|                         | nirvana        | 2020         | $15               | tbd                 | tbd          | ENIAC, nextview                                                              | benefit verificaiton for digital health startups          |
| **Payor PA**            | cohere         | 2019         | $121              | $50                 | $240         | DEFINE VENTURES, polarispartners, flare                                      | tech-enabled outsourcing service                          |
|                         | banje health   | 2019         | $10               | $2                  | $32          | EPSILON, Tau Ventures INVESTORS                                              | focus on rx -- selling to PBMs                            |
|                         | Co:Helm        | 2023         | $30               | $25                 | $75          | SEQUOIA, NEA                                                                 |                                                           |
|                         | bbasys.ai      | 2021         | $3                | $2                  | tbd          | CHAAC, CAPITAL, NINA. VENTURES                                               | selling to Payors or outsourcing firms                    |
|                         | Fairway Health | 2022         | tbd               | $0.5                | tbd          | Y                                                                            |                                                           |
| **Provider / Pharmacy PA** | Rhyme       | 2014         | $57               | $25                 | $75          | Y INSIGHT PARTNERS                                                           | CoverMyMeds for medical (vs Rx)                           |
|                         | samacare       | 2018         | $18               | $12                 | $47          | nextview, SUSA                                                               | Layer ontop of payer portals (for medical)                |
|                         | Glidian        | 2016         | $10               | $6                  | $35          | fika, Tau Ventures, 1984 VC VENTURES                                         |                                                           |
|                         | LATENT         | 2022         | $2                | $2                  | tbd          | Y                                                                            | focus on Rx (automation on top of CoverMyMeds)            |
|                         | Develop Health | 2022         | tbd               | $0.5                | tbd          | AFORE CAPITAL                                                                | focus on specialty pharmacies                             |
|                         | silna          | 2023         | $5                | $5                  | $15          | Accel, BCV                                                                   | focus on autism + PT                                      |
|                         | opkit          | 2021         | $1.1              | $1.0                | tbd          | MISCHIEF, GFC, Y                                                             | focus on digital health startups                          |
|                         | Health Harbor  | 2023         | $0.5              | tbd                 | tbd          | Y, PACIFICE                                                                  | focus on digital health startups                          |

Max Luo 2024
9

## Slide 10: Prior Authorization Process + Market Size

**Prior Auth + UM emerged from drug price trends**

**Why does Prior Authorization (aka Utilization Management) exist?**

*   Explosion in drug price over last 10 years (10-20% annually, 60% in 2014), driven by specialty blockbuster drugs in cancer and immunology
*   To control costs, payors implemented “utilization management” to reduce expensive procedures + drugs, before a claim is created. Prior Auth is one tactic, Step Therapy is another.
*   However, payors need nurses and doctors to review. Huge shortage of both, leading to long lead times (2 weeks for avg request, 6 days for urgent).
*   This led to emergence of outsourced Utilization Management firms, for high-cost specialties (nurses reviewing cases)
    *   evolent HEALTH: Public, $4B EV
    *   eviCore healthcare: Acq. by express scripts for $3.6B EV

**Market Size for Prior Auth AI Tools is substantial**

**Price Per PA, $**

| Total PAs, M | Current price | 50% automation | Near-full automation |
| :----------- | :------------ | :------------- | :------------------- |
| Only medical or rx (200) | $1,000        | $4,000         | $7,000               |
| Mix of two (300) | $1,500        | $6,000         | $10,500              |
| Both (400)   | $2,000        | $8,000         | $14,000              |

*   Total 200-400M Prior Auths per year
*   Current AI tools price at $5 per Prior Auth (cost to payor is $35-200 per prior auth. Takes a nurse 30 mins to 1 hour for complex cases)

**How does Prior Auth work?**

1.  Doctor wants to perform a high-cost procedure or prescribe high-cost drug.
2.  Doctor (or pharmacist) submits a prior authorization request electronically through CoverMyMeds (or competitor). Otherwise, calls + submits fax.
3.  Payor receives request + info. Nurse reviews against "medically necessary criteria” (MCG, Interqual, or internal). Sends decision back (electronically or via letter)

Max Luo 2024
10

## Slide 11: Recent digital health exits have ridden specific "waves” – AI will be the next

| Target               | Acquirer          | Year   | Amount, $B | $M     | EV / Rev | Description                          | Right-Hand Side Context                                                                                                                                                                                                                                                                   |
| :------------------- | :---------------- | :----- | :--------- | :----- | :------- | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Regulatory**       |                   |        |            |        |          |                                      |                                                                                                                                                                                                                                                                           |
| signifyhealth.       | CVS               | 2023   | $8.0       | $0.80  | 10.0x    | Medicare ACO + in-home eval          | **Medicare ACO - $23B EV**                                                                                                                                                                                                                                |
| Oak St. Health       | CVS               | 2023   | $10.6      | $2.16  | 4.9x     | Medicare ACO w/ clinics              | New Medicare contract type that gives payors / providers ~$12k per yr, per member to cover all medical costs                                                                                                                                                              |
| iorahealth           | one medical       | 2021   | $2.1       | $0.32  | 6.6x     |                                      | Anything they save under $12k is additional margin they keep                                                                                                                                                                                                              |
| agilon health        | IPO               | current | $2.3       | $0.34  | 6.8x     | medical margin; Medicare ACO         |                                                                                                                                                                                                                                                                           |
| **Telehealth / Covid** |                   |        |            |        |          |                                      |                                                                                                                                                                                                                                                                           |
| Livongo              | Teladoc           | 2020   | $18.5      | $0.30  | 61.7x    | diabetes telehealth                  |                                                                                                                                                                                                                                                                           |
| hims & hers          | IPO               | current | $1.8       | $0.72  | 2.5x     | DTC health + rx                      |                                                                                                                                                                                                                                                                           |
| **SaaS - RCM**       |                   |        |            |        |          |                                      |                                                                                                                                                                                                                                                                           |
| WAYSTAR              | IPO (planned)     | 2024 (future) | $8.0    | $0.70  | 11.4x    | provider RCM                         | **Cloud Software - $99B EV**                                                                                                                                                                                                                              |
| zelis                | IPO (planned)     | 2024 (future) | $15.0   | $1.00  | 15.0x    | payor payments                       | Digitizing core workflows, including:                                                                                                                                                                                                                     |
| cloudmed.            | R1                | 2022   | $4.2       | $0.45  | 9.4x     | tech enabled RCM services            | *   System of record (EHR)                                                                                                                                                                                                                          |
| covermymeds          | MCKESSON          | 2017   | $1.4       | $0.13  | 11.2x    | Rx digital prior auth network        | *   Point solutions (eg RCM) and payment processing                                                                                                                                                                                 |
| **SaaS - EHRs**      |                   |        |            |        |          |                                      | *   Clearinghouses                                                                                                                                                                                                                      |
| athenahealth         | H&F BainCapital   | 2021   | $17.0      | $1.50  | 11.3x    | ambulatory                           |                                                                                                                                                                                                                                                                           |
| Cerner               | ORACLE            | 2022   | $28.0      | $5.70  | 4.9x     | hospital                             |                                                                                                                                                                                                                                                                           |
| PointClickCare       | H&F DRAGONEER     | 2022   | $5.0       | $0.50  | 10.0x    | long term care (SNF, Senior Living)  |                                                                                                                                                                                                                                                                           |
| WellSky              | LGP TPG           | 2020   | $3.0       | $0.38  | 8.0x     | home health                          |                                                                                                                                                                                                                                                                           |
| webpt.               | WARBURG PINCUS    | 2019   | $0.68      | $0.10  | 6.8x     | physical therapy                     |                                                                                                                                                                                                                                                                           |
| MatrixCare           | ResMed            | 2018   | $0.75      | $0.12  | 6.3x     | long term care + home health         |                                                                                                                                                                                                                                                                           |
| **SaaS - others**    |                   |        |            |        |          |                                      |                                                                                                                                                                                                                                                                           |
| HEALTHEDGE           | Blackstone        | 2020   | $0.73      | $0.10  | 7.3x     | core payor system                    |                                                                                                                                                                                                                                                                           |
| CHANGE HEALTHCARE    | Optum             | 2022   | $13.0      | $3.40  | 3.8x     | digital clearinghouse                |                                                                                                                                                                                                                                                                           |
| Availity             | FP                | 2021   | $2.5       | $0.18  | 14.0x    |                                      | **AI - $19B EV**                                                                                                                                                                                                                                          |
| **AI**               |                   |        |            |        |          |                                      | Nuance is the first, but there will be others                                                                                                                                                                                                                             |
| NUANCE               | Microsoft         | 2021   | $19.7      | $1.41  | 14.0x    | medical transcription                |                                                                                                                                                                                                                                                                           |

Max Luo 2024