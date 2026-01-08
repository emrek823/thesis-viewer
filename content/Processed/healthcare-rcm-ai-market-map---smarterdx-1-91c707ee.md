---
source_pdf: "https://drive.google.com/file/d/1KV5YuOZBMFrowc3Vi086LEPC1RB3t9is/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Healthcare RCM AI Market Map - SmarterDx (1).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1KV5YuOZBMFrowc3Vi086LEPC1RB3t9is/view)

## Slide 1: AI Applications in Healthcare

**ACME**
**SmarterDx**

**AI Applications in Healthcare**
For SmarterDx

Max Luo, Aike Ho, Brian Yee - March 2024

Confidential
1

## Slide 2: Healthcare RCM is a huge market ($150B), and consists of many manual processes that AI can automate

### RCM Market Size is huge, at $150B

**Total US Healthcare Spend, $T**

| Year | Spend ($T) |
| :--- | :--------- |
| 2017 | $3.26      |
| 2018 | $3.41      |
| 2019 | $3.56      |
| 2020 | $3.96      |
| 2021 | $4.08      |
| 2022 | $4.25      |

*Assuming 3.5% take rate for RCM services (conservative)*

**Total US RCM Market Size, $B**

| Year | RCM Market Size ($B) |
| :--- | :------------------- |
| 2017 | $114                 |
| 2018 | $119                 |
| 2019 | $125                 |
| 2020 | $139                 |
| 2021 | $143                 |
| 2022 | $149                 |

For just coding and billing services (one portion of RCM), there are ~180k coders in the US with median salary of $50k, for a total employment spend of ~$10B.

### Headwinds and Tailwinds

**Why is it a good space for disruption?**
*   **High transaction costs:** 3.5 - 10% of revenue, stemming from many manual labor processes...
*   **...that don't work well** (17% of claims denied, 60 days AR for hospitals)...
*   **...many of which can be automated** (low-level matching, summarization tasks)
*   Stable, non-cyclical industry
*   Incumbents have been slow to innovate on AI

**What are the challenges?**
*   **GTM:** long sales cycle for providers + payors. Many require pilots because so sensitive to cash collections
*   **Edge cases for AI are not easy** (coverage of benefits, payor-specific rules) e.g. spousal vs employer
*   **Competition:** lots of $ going into the space already

Max Luo 2024
2

## Slide 3: RCM process: getting paid by health insurance requires many manual steps

### Typical flow of RCM processes

**Legend:**
*   Highly manual process (highlighted in yellow boxes)

**Flow Description:**

**Patient + Physician**
1.  **Patient check in / intake** -> **Patient copay / deductible** -> **Procedure or Rx**
2.  -> **Patient OOP payment + collections**

**Back-end admin (RCM services)**
1.  (From Procedure or Rx) -> **1 Physician Charting + Notes** (Highly manual process)
2.  (From Patient copay / deductible) -> **2 Benefit Verification** (Highly manual process)
    *   Clearinghouse (or payor portal, phone call)
3.  (From Benefit Verification) -> **3 Prior Authorization** (Highly manual process)
    *   Software networks, payor portal, phone call
4.  (From Physician Charting + Notes and Prior Authorization) -> **4 Coding / CDI** (Highly manual process)
5.  (From Coding / CDI) -> **Claim Submission**
6.  (From Claim Submission) -> **5 Denials + Appeals** (Highly manual process)
    *   Clearinghouse
7.  (From Denials + Appeals) -> **Accounts Receivables**

**Payor**
1.  (From Benefit Verification) -> **Benefit Review**
2.  (From Prior Authorization) -> **Prior Auth Review**
3.  (From Claim Submission) -> **Claim Review**
4.  (From Claim Review) -> **Payments to provider**

---

**The most manual processes require complex matching, "translation," or communication, which could be automated with AI**

1.  **Physician Charting + Notes**
    *   **Translate** physician/patient convo into specialized terminology (medical record)
2.  **Benefit Verification**
    *   **Ask** for specific benefits coverage (online portals don't give detailed coverage info)
3.  **Prior Authorization**
    *   **Match** medical record against complex medical necessity criteria
4.  **Coding**
    *   **Translate** medical record to payor taxonomy (CPT codes)
5.  **Denials + Appeals**
    *   **Ask** for denial rationale (many payors don't provide), or **argue** if payor made mistake

Max Luo 2024
3

## Slide 4: Each step in the RCM process is a several billion dollar market; point solutions can be very big businesses

| RCM Step                 | Vertical incumbents (EHRS)                                                                                             | Point solutions (usually formerly or current PE owned)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Venture-backed (not comprehensive)                                                                                                                                   |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Patient + Physician**  |                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                      |
| Patient check in / intake | **Epic** ($4.6B rev, $15.7B EV)                                                                                        | **Patient in-take (registration / scheduling)**<br>Phreesia ($0.36B rev, $1.5B EV)                                                                                                                                                                                                                                                                                                                                                                                                                                                             | notable                                                                                                                                              |
| Physician Charting + Notes | **ORACLE Cerner** ($5.7B rev, $28B EV)<br>**athenahealth** ($1.5B rev, $17B EV)<br>**eClinicalWorks** ($0.9B rev) | **Voice transcription**<br>NUANCE Microsoft ($1.4B rev, $19.7B EV)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | abridge<br>Nabla<br>Ambience                                                                                                                         |
| Patient OOP payments     |                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | cedar                                                                                                                                                |
| **Back-end Admin (RCM Services)** |                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                      |
| Benefit Verification     | **PointClickCare** ($0.5B rev, $5B EV)                                                                                 | **RCM solutions**<br>WAYSTAR Software ($0.7B rev, $8B EV)<br>R1 Software + services ($2.2B rev, $6B EV)<br>CONIFER services ($1.3B rev)                                                                                                                                                                                                                                                                                                                                                                                                           | INFINITUS                                                                                                                                            |
| Prior Authorization      |                                                                                                                        | **Prior auth software + network**<br>covermymeds ($4.3B rev)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | cohere HEALTH                                                                                                                                        |
| Coding, CDI, Denials, Appeals | **Allscripts** ($0.6B rev, $0.9B EV)                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | FATHOM<br>nym<br>CODAMETRIX<br>SmarterDx                                                                                                             |
| **Payor**                |                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                      |
| Claims Review            |                                                                                                                        | **Clearinghouses**<br>CHANGE HEALTHCARE ($4.6B rev, $15.7B EV)<br>Availity ($0.2B rev, $2.5B EV)<br>cognizant TRIZETTO ($1.4B rev)<br><br>**Core payor system**<br>HEALTHEDGE ($0.4B rev, $3B EV)<br><br>**Payor payments / network mgmt**<br>zelis ($1B rev, $15B EV) |                                                                                                                                                      |
| Payments to Provider     |                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                      |

Max Luo 2024
4

## Slide 5: CDI is a more open market without fully AI-native competitors; SmarterDx is positioned well to win

### CDI Market Size

| Metric                        | Value    |
| :---------------------------- | :------- |
| Total US discharges, M        | 30       |
| Found Revenue $ / discharge   | X        |
| Found Revenue TAM, $M         | 200      |
| Software Take Rate, %         | X        |
| Software TAM, $M              | 6,060    |
|                               | 20%      |
|                               | 1,212    |

**The TAM for AI software is a big first product market**
(assuming $2M "found" revenue / 10k discharges and 5:1 ROI pricing)

### Competitors are large but do not have a fully automated, AI product

| Company     | Valuation, $B and investors                                  | CDI Revenue, $M                                       | Description / Notes                                                                   |
| :---------- | :----------------------------------------------------------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------ |
| cloudmed R1 | $4.1B (2022)<br>acq. from New Mountain Capital by R1        | $446M<br>22% growth                                   | • Services – tech-enabled revenue integrity service (which includes CDI)              |
| iodine      | $1B (2021)<br>minority investment by Advent                  | N/A<br>(est. $100M)                                   | • Software - AI chart prioritization + CDI workflow<br>• 900 hospital customers; $1.5B cumulative rev. since 2010 |
| mmodal 3M   | $1B (2019)<br>Acq. by 3M                                    | N/A (total rev. in 2019 is $200M)                     | • Software - CDI workflow + voice transcription<br>• Transcription is majority of rev. |
| NUANCE Microsoft | $20B (2021)<br>Acq. by MSFT                                 | N/A (total rev. in 2021 is $1.4M)                     |                                                                                       |

Max Luo 2024
5

## Slide 6: Healthcare AI Market Map - Note-taking + coding is crowded but SmarterDx is positioned the best

| Category                         | Company        | Year Founded | Total Funding, $M | Last Round Size, $M | Last Val, $M | Revenue, $M | Major Investors                                                                                             | Differentiation / Notes                                                                               |
| :------------------------------- | :------------- | :----------- | :---------------- | :------------------ | :----------- | :---------- | :---------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| **Patient + Physician**          |                |              |                   |                     |              |             |                                                                                                             |                                                                                                       |
| Note-taking / Scribing           | abridge        | 2018         | 214               | 150                 | 850          | $5          | Bessemer Venture Partners, SPARK, USV                                                                       | Product is "amazing" → includes clinical note generation vs. only voice-to-text transcription         |
|                                  | Ambience       | 2020         | 101               | 70                  | 300          | $1-5        | KHOSLA VENTURES, Open AI, alóz                                                                              | Unclear differentiation                                                                               |
|                                  | Nabla          | 2018         | 45                | 24                  | 150          | $1          | CATHAY INNOVATION, firstminute                                                                              | Also includes DeepScribe, Robin                                                                       |
| **Back-end Admin (RCM Services)** |                |              |                   |                     |              |             |                                                                                                             |                                                                                                       |
| AI coding / billing              | FATHOM         | 2015         | 60                | 46                  | tbd          | ~$20        | ALKEON, 8VC, G/FORBES                                                                                       | First movers -- rules based (vs AI), with low automation (50% vs. 85%+)                               |
|                                  | nym            | 2018         | 47                | 25                  | 97           | ~$20        | ADDITION, Bessemer Venture Partners, G/FORBES                                                               | Nym recently changed CEO                                                                              |
|                                  | CODAMETRIX     | 2018         | 100               | 50                  | 200          | $10         | SignalFire, VERTEX VENTURES                                                                                 | End to end coding; starting with radiology                                                            |
|                                  | SmarterDx      | 2020         | 21                | 15                  | 61           | <$10        | Bessemer Venture Partners, flare capital partners, virtue.                                                  | Starting with error detection, not end-to-end; very fast growing (5'xd last year), targeting $20M ARR EOY |
|                                  | Synaptec Health | 2020         | 4                 | 4                   | 14           | <$1         | Fusion Fund, foothill ventures                                                                              | Initial focus on EM; strong tech but slow traction                                                    |
|                                  | Adonis         | 2022         | 23                | 17                  | 85           | $3-5        | GBLING, SOMA CAPITAL                                                                                        | End to end service with dashboarding software                                                         |
|                                  | MAVERICK       | 2017         | 10                | 9                   | 12           | ~$1         | LionBird, Firstime                                                                                          | Initial focus on radiology; $1M contract w/ Radnet                                                    |
| RPA / Billing Platforms          | AKASA          | 2018         | 205               | 120                 | 1,020        | ~$50+       | alóz, BOND, COATUE                                                                                          | Custom RPA development (like Palantir)                                                                |
|                                  | candidhealth   | 2019         | 36                | 24                  | 110          | tbd         | 8VC, BOX GROUP                                                                                              | Focused on digital health startups or specific verticals (eg mental health)                           |
|                                  | Gentem         | 2019         | 14                | 10                  | 40           | tbd         | First Round, CERCANO, SUSA 500                                                                              | Not AI – more just billing platforms                                                                  |
|                                  | juniper        | 2021         | 14                | 10                  | 15           | tbd         | alóz, VENTLIGE                                                                                              |                                                                                                       |

Max Luo 2024
6

## Slide 7: Framework for assessing AI coding / billing companies

| Category          | Question                                                           | Best in class benchmark                                              |
| :---------------- | :----------------------------------------------------------------- | :------------------------------------------------------------------- |
| **Tech Performance** | How accurate is the model?                                         | 95%                                                                  |
|                   | What % of the work can the model automate?                         | 85%                                                                  |
|                   | Is the underlying technology true AI / deep learning, or is it rules based? | Deep Learning                                                        |
|                   | Does the tech increase revenue / reduce denials?                   | 60% decrease in denials<br>$2-5M revenue increase per hospital      |
| **Growth**        | How quickly are you growing?                                       | 5x for 2 years                                                       |
|                   | How long is sales cycle? Do your customers require pilots?         | 3-6 months, 1-2 month pilot with audit                               |
| **Margins / Unit Economics** | How are you pricing? Volume or success-based / value?      | Success-based (sell on revenue increase vs. cost reduction)          |
|                   | What is your gross margin?                                         | 70-80% gross margin                                                  |

Max Luo 2024
7

## Slide 8: Recent digital health exits have ridden specific "waves" – AI will be the next

| Target           | Acquirer       | Year   | Amount, $B | $M   | EV / Rev | Description                                   |
| :--------------- | :------------- | :----- | :--------- | :--- | :------- | :-------------------------------------------- |
| **Regulatory**   |                |        |            |      |          |                                               |
| signifyhealth.   | CVS            | 2023   | 8.0        | 0.80 | 10.0x    | Medicare ACO + in-home eval                   |
| Oak St. Health   | CVS            | 2023   | 10.6       | 2.16 | 4.9x     | Medicare ACO w/ clinics                       |
| iorahealth       | one medical    | 2021   | 2.1        | 0.32 | 6.6x     |                                               |
| agilon health    | IPO            | current | 2.3        | 0.34 | 6.8x     | medical margin; Medicare ACO                  |
| **Telehealth / Covid** |            |        |            |      |          |                                               |
| Livongo          | Teladoc        | 2020   | 18.5       | 0.30 | 61.7x    | diabetes telehealth                           |
| hims & hers      | IPO            | current | 1.8        | 0.72 | 2.5x     | DTC health + rx                               |
| **SaaS - RCM**   |                |        |            |      |          |                                               |
| WAYSTAR          | IPO (planned)  | 2024 (future) | 8.0        | 0.70 | 11.4x    | provider RCM                                  |
| zelis            | IPO (planned)  | 2024 (future) | 15.0       | 1.00 | 15.0x    | payor payments                                |
| cloudmed.        | R1             | 2022   | 4.2        | 0.45 | 9.4x     | tech enabled RCM services                     |
| covermymeds      | MCKESSON       | 2017   | 1.4        | 0.13 | 11.2x    | Rx digital prior auth network                 |
| Vathenahealth    | H&F BainCapital | 2021   | 17.0       | 1.50 | 11.3x    | ambulatory                                    |
| **SaaS - EHRs**  |                |        |            |      |          |                                               |
| Cerner           | ORACLE         | 2022   | 28.0       | 5.70 | 4.9x     | hospital                                      |
| PointClickCare   | H&F DRAGONEER | 2022   | 5.0        | 0.50 | 10.0x    | long term care (SNF, Senior Living)           |
| WellSky          | LGP TPG        | 2020   | 3.0        | 0.38 | 8.0x     | home health                                   |
| Il webpt.        | WARBURG PINCUS | 2019   | 0.68       | 0.10 | 6.8x     | physical therapy                              |
| MatrixCare       | ResMed         | 2018   | 0.75       | 0.12 | 6.3x     | long term care + home health                  |
| HEALTHEDGE       | Blackstone     | 2020   | 0.73       | 0.10 | 7.3x     | core payor system                             |
| **SaaS - others** |                |        |            |      |          |                                               |
| CHANGE HEALTHCARE | Optum          | 2022   | 13.0       | 3.40 | 3.8x     | digital clearinghouse                         |
| Availity         | FP             | 2021   | 2.5        | 0.18 | 14.0x    |                                               |
| **AI**           |                |        |            |      |          |                                               |
| NUANCE           | Microsoft      | 2021   | 19.7       | 1.41 | 14.0x    | medical transcription                         |

---

**Medicare ACO - $23B EV**
*   New Medicare contract type that gives payors / providers ~$12k per yr, per member to cover all medical costs
*   Anything they save under $12k is additional margin they keep

**Cloud Software - $99B EV**
Digitizing core workflows, including:
*   System of record (EHR)
*   Point solutions (eg RCM) and payment processing
*   Clearinghouses

**AI - $19B EV**
*   Nuance is the first, but there will be others

Max Luo 2024
8

## Slide 9: Appendix

Max Luo 2024
9

## Slide 10: Incumbents Deep Dives – RCM Point Solutions can be large businesses, and services firms are ripe for disruption

| Financials     | Metric                 | covermymeds® MCKESSON                                     | WAYSTAR                                             | R1                                                        |
| :------------- | :--------------------- | :-------------------------------------------------------- | :-------------------------------------------------- | :-------------------------------------------------------- |
|                | **Overview / Product** | Electronic Prior Auth network that *fully digitized* process that was previously phone call + fax | RCM software suite; focus on *smaller ambulatory providers* | End-to-end RCM *tech-enabled services* that made 6 large $200M+ acquisitions since 2018 |
|                | **Why did they succeed?** | Built a *network of payor integrations* and expanded from pharmacies customers to providers | Focus on *underserved customer segment (ambulatory)* – ACV is $22k across 30k customers, only 3% >$100k | Found a *strategic partner (Intermountain)* for revenue (~$800M in 2023) and capital (~$300M+ since 2016) for SaaS acquisitions |
|                | **Revenue**            | $3-4B (including $720M EV acquisition)                   | $700M (50% SaaS, 50% payments)                      | $2.1B (70% services, 30% SaaS/payments)                   |
|                | **Growth Rate**        | ~14%                                                      | 20%                                                 | 17%                                                       |
|                | **Gross Margin**       | n/a                                                       | $486M (70% of rev)                                  | $351M (20% of rev)                                        |
|                | **EBITDA**             | $550M (~13% of rev)                                       | $295M (42% of rev)                                  | $557M (27% of rev)$^1$                                     |
|                | **EV**                 | n/a (acq. by McKesson in 2017 for $1.4B w/ >$150M+ rev.) | $7-8B (targeting IPO this summer)                  | $6B                                                       |
| **Takeaways**  |                        | • Point solutions can be *very big companies* (Prior Auth, RCM), even with only 3-5% market share (eg Waystar) | • Traditional RCM *services* are very low margin         |                                                           |
|                |                        | • Need either *network effects* (CoverMyMeds) or *fast GTM* in underserved market segment (Waystar) | • R1 trades at 3x EV/revenue due to *software acquisitions* |                                                           |

Max Luo 2024
1 adding back tech R&D amortization to get EBITDA higher than gross margin
10