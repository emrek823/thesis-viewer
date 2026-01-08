---
source_pdf: "https://drive.google.com/file/d/1eMymoSEmZ84CTs79yLHAnPO5rQ1pNtpJ/view?usp=drivesdk"
drive_folder: "Portfolio/SmarterDx"
type: portfolio
company: SmarterDx
ingested: 2025-12-26
original_filename: "SDX Series B slides.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1eMymoSEmZ84CTs79yLHAnPO5rQ1pNtpJ/view?usp=drivesdk)

Here's the detailed markdown extraction of the provided PDF:

## Slide 1: SmarterDx March 2024 update

SmarterDx
March 2024 update

## Slide 2: Summary

*   Since May 2023 (Series A), we have increased CARR from $1.6M to $10.4M with a 90-day lag between contracted and deployed and 40% win rate.
*   Our current pipeline is $70M.
*   Significant investments have been made to GTM and data science teams to grow velocity by an OOM (2 new clients / year to 2 new clients / month).
*   We are poised to reach $35M in CARR by EOY 2024, with a path to $65M and EBITDA profitability by EOY 2025.

Confidential. Do not distribute. SmarterDx 2024.

## Slide 3: Deep talent at the intersection of medicine, healthcare GTM, and data science

**Founding team**
*   **Mike Gao | CEO**
    Physician, AI at NYP
*   **Josh Geleris | Head of Product**
    Physician, DS for DoD, EHR impl. at NYP
*   **Nathan Perilo | Head of Eng**
    Dir., Quant Eng at Citi

**GTM**
*   **Wayne Grodsky | CCO**
    CCO for EHR, ZirMed, Collective Med.
*   **Jonathan Crawley | CFO**
    CFO, Collective Med., VP M&A, PointClickCare, McKinsey
*   **Marisa Johnson | Head of Marketing**
    Senior Dir. Marketing at UnitedHealthcare

**Data Science**
*   **Scott Fleming | ML Researcher**
*   **Conor Corbin | Senior DS**
    Stanford ML PhDs (Nigam Shah lab), Verily
*   **Ning Liang | Principal Eng**
    Founder and CTO for HealthSherpa ($140M ARR), Twitter quant
*   **Sean Gallagher | Principal ML Eng**
    Created and launched Lowe's NLP team as their Principal DS
*   **Marie Klosterman | Lead DS**
    Director, DS at Olive; Senior DS at Optum

Confidential. Do not distribute. SmarterDx 2024.

## Slide 4: Hospitals are eager to fix a leaky and expensive revenue cycle

**Intake**
Prior auth
Validate what's covered
and who pays

**Documentation**
Narrate the care provided

**CDI & Coding**
Fix documentation and
convert to structured data

**Payor validation**
Defend and receive payment

---

*   **Hard to hire**
    Requires clinical expertise (e.g. nurse), which is particularly challenging today given scarcity.
*   **Losing money**
    The average 350-bed hospital misses $22M in potential annual revenue due to RCM (Advisory Board, 2017)
*   **Low margins**
    Median US hospital margin was 1.6% in October 2023. 2% is the 'new normal' (Health Management Academy, 2024)
*   **High urgency**
    RCM is the top priority category for software investment (Bain, 2022)

Confidential. Do not distribute. SmarterDx 2024.

## Slide 5: Clinical documentation improvement (CDI) nurses: a hard job that's getting harder

**Today's process**

*   Pick a chart
    *   Prioritization
*   Search data
    *   NER
*   ID missing Dx
*   Write 'Query'
    *   Templates

Confidential. Do not distribute. SmarterDx 2024.

## Slide 6: Clinical documentation improvement (CDI) nurses: a hard job that's getting harder

**Today's process**

*   Pick a chart
    *   Prioritization
*   Search data
    *   NER + rules
*   ID missing Dx
*   Write 'Query'
    *   Templates

---

*   **Increasing complexity**
    *   ICD-9
    *   ICD-10
    *   MS-DRG
    *   APR-DRG
    *   Elixhauser
    *   HCC
    *   SDOH
    *   O/E
    *   60,000+ diagnosis codes

*   **Sicker patients**
    (Data approximated from visual inspection of chart showing percentage of patients with specific conditions from 2008-2016)

| Year | Hypertension | Hyperlipidemia | Arthritis | Diabetes | Ischemic Heart Disease | Kidney Disease | Depression |
| :--- | :----------- | :------------- | :-------- | :------- | :--------------------- | :------------- | :--------- |
| 2008 | ~22%         | ~18%           | ~15%      | ~10%     | ~5%                    | ~3%            | ~1%        |
| 2010 | ~25%         | ~20%           | ~16%      | ~12%     | ~6%                    | ~4%            | ~2%        |
| 2012 | ~28%         | ~23%           | ~18%      | ~14%     | ~7%                    | ~5%            | ~2.5%      |
| 2014 | ~32%         | ~26%           | ~20%      | ~16%     | ~8%                    | ~6%            | ~3%        |
| 2016 | ~35%         | ~28%           | ~22%      | ~18%     | ~9%                    | ~7%            | ~3.5%      |

    x 20 per patient

*   **Increased payor pushback**
    *   ClarisHealth
    *   MedReview
    *   Zelis. Physician Approved Payment Integrity
    *   OPTUM IQ
    *   EQUIAN Part of Optum®
    *   gainwell
    *   CERIS
    *   COTIVITI

Confidential. Do not distribute. SmarterDx 2024.

## Slide 7: This forces CDI nurses to choose between going wide or going deep.

(Chart representing Depth of review vs. Percent of charts covered)

*   **Prioritization:** (Top-left quadrant)
    Deeper but narrower

*   **Missed opportunities:** (Top-right quadrant)
    Lost revenue (CC/MCC, SOI)
    Lower quality (ROM, HCC, Elix)

*   **Rules-based:** (Bottom-right quadrant)
    Wide but shallow

smarterdx.com
Confidential. Do not distribute. SmarterDx 2024.

## Slide 8: We allow them to cover 100% of charts by directly inferring missing diagnoses

**Today's process** (crossed out steps)
*   Pick a chart (Prioritization)
*   Search data (NER + rules)
*   ID missing Dx
*   Write 'Query' (Templates)

**Process with SmarterDx**

*   **Ingest data**
    Epic, Cerner, Meditech
    Data transformation
    and normalization

*   **Infer diagnoses**
    Proprietary labels
    AutoML
    LLM feature extraction
    Mistral + Seq2Seq
    Counterfactual modeling

*   **Validate Dx**

*   **Copy query**
    Data selection
    LLM-generated query
    (BAA with OpenAI)

Confidential. Do not distribute. SmarterDx 2024.

## Slide 9: Higher CDI accuracy creates revenue lift worth 0.3% - 0.5% inpatient NPSR

(Chart showing Found revenue by customer (per month) from 7/1/2022 to 1/1/2024)

**SmarterDx ACV: $822,000 \*\***

**Found Revenue by Customer (per month) - Data approximated from visual inspection**

| Date      | Houston Methodist | Montefiore Medical Center | Beebe Healthcare | Universal Health Services | University of Arkansas | McLaren Health | White Plains Hospital | Total Monthly Revenue |
| :-------- | :---------------- | :------------------------ | :--------------- | :------------------------ | :--------------------- | :------------- | :-------------------- | :-------------------- |
| 7/1/2022  | $200,000          | $0                        | $0               | $0                        | $0                     | $0             | $0                    | $200,000              |
| 10/1/2022 | $100,000          | $100,000                  | $0               | $0                        | $0                     | $0             | $0                    | $200,000              |
| 1/1/2023  | $50,000           | $400,000                  | $100,000         | $0                        | $0                     | $0             | $0                    | $550,000              |
| 4/1/2023  | $300,000          | $500,000                  | $200,000         | $0                        | $0                     | $0             | $0                    | $1,000,000            |
| 7/1/2023  | $100,000          | $400,000                  | $200,000         | $400,000                  | $0                     | $0             | $0                    | $1,100,000            |
| 10/1/2023 | $50,000           | $300,000                  | $300,000         | $400,000                  | $700,000               | $0             | $0                    | $1,750,000            |
| 1/1/2024  | $200,000          | $300,000                  | $400,000         | $400,000                  | $1,200,000             | $500,000       | $500,000              | $3,500,000            |

**Notes:**
*   ACV for these were 41% higher than predicted at time of Series A. The remainder were not in pipeline or previously deployed. This should not be extrapolated forward (as we have updated our ACV prediction).
\*\* Reflects a take rate of 11.6%.

Confidential. Do not distribute. SmarterDx 2024.

## Slide 10: 10 months ago, we had $18.1M in pipeline.

| Hospital |
| :------- |
| redacted |

Confidential. Do not distribute. SmarterDx 2024.

## Slide 11: 10 months ago, we had $18.1M in pipeline. We've won $9.0M.

| Hospital | What happened                          |
| :------- | :------------------------------------- |
| redacted | Won [Streamline]                       |
| redacted | Won (vs. Iodine) [Accuity, Cloudmed]   |
| redacted | Won [replaced Accuity]                 |
| redacted | Won                                    |
| redacted | Won [Faircode, Cloudmed]               |
| redacted | Retro / Pilot [Cloudmed]               |
| redacted | Lost (Ensemble)                        |
| redacted | Won                                    |
| redacted | Retro / Pilot                          |
| redacted | Lost (ND)                              |
| redacted | Won [Cloudmed]                         |
| redacted | Lost (ND)                              |
| redacted | Retro / Pilot                          |
| redacted | Lost (ND)                              |
| redacted | Lost (ND)                              |
| redacted | Lost (ND)                              |
| redacted | Won [Cloudmed]                         |
| redacted | Contracting (vs. Iodine) [Cloudmed]    |
| redacted | Retro / Pilot                          |
| redacted | Won                                    |
| redacted | Retro / Pilot                          |
| redacted | Lost (ND)                              |
| redacted | Mid funnel                             |
| redacted | Lost (R1 / Optum / Accuity)            |
| redacted | Lost (Iodine)                          |
| redacted | Lost (ND)                              |
| redacted | Retro / Pilot                          |

Confidential. Do not distribute. SmarterDx 2024.

## Slide 12: 10 months ago, we had $18.1M in pipeline. We've won $9.0M. Customers love us.

**SmarterDx Performance Overview**
All standard software performance indicators

| Hospital | What happened                          |
| :------- | :------------------------------------- |
| redacted | Won [Streamline]                       |
| redacted | Won (vs. Iodine) [Accuity, Cloudmed]   |
| redacted | Won [replaced Accuity]                 |
| redacted | Won                                    |
| redacted | Won [Faircode, Cloudmed]               |
| redacted | Retro / Pilot [Cloudmed]               |
| redacted | Lost (Ensemble)                        |
| redacted | Won                                    |
| redacted | Retro / Pilot                          |
| redacted | Lost (ND)                              |
| redacted | Won [Cloudmed]                         |
| redacted | Lost (ND)                              |
| redacted | Retro / Pilot                          |
| redacted | Lost (ND)                              |
| redacted | Lost (ND)                              |
| redacted | Lost (ND)                              |
| redacted | Won [Cloudmed]                         |
| redacted | Contracting (vs. Iodine) [Cloudmed]    |
| redacted | Retro / Pilot                          |
| redacted | Won                                    |
| redacted | Retro / Pilot                          |
| redacted | Lost (ND)                              |
| redacted | Mid funnel                             |
| redacted | Lost (R1 / Optum / Accuity)            |
| redacted | Lost (Iodine)                          |
| redacted | Lost (ND)                              |
| redacted | Retro / Pilot                          |

**SmarterDx Performance Overview**
All standard software performance indicators

**Culture**

| Metric                                            | Value | Rating |
| :------------------------------------------------ | :---- | :----- |
| Keeps all promises (percent of respondents who answered yes) | 100%  | (n=4)  |
| Proactive service (1-9 scale)                     | A+    | (n=4)  |
| Product works as promoted (1-9 scale)             | A+    | (n=4)  |

**Loyalty**

| Metric                           | Value | Rating |
| :------------------------------- | :---- | :----- |
| Forecasted satisfaction (1-9 scale) | A+    | (n=4)  |
| Likely to recommend (1-9 scale)  | A+    | (n=4)  |
| Overall satisfaction (1-9 scale) | A+    | (n=4)  |
| Part of long-term plans (percent of respondents who answered yes) | 100%  | (n=4)  |
| Would you buy again (percent of respondents who answered yes) | 100%  | (n=4)  |

**Operations**

| Metric                             | Value | Rating |
| :--------------------------------- | :---- | :----- |
| Ease of use (1-9 scale)            | A+    | (n=4)  |
| Quality of implementation (1-9 scale) | A+    | (n=4)  |
| Quality of training (1-9 scale)    | A+    | (n=4)  |

**Product**

| Metric                                  | Value | Rating |
| :-------------------------------------- | :---- | :----- |
| Delivery of new technology (1-9 scale)  | A+    | (n=4)  |
| Overall product quality (1-9 scale)     | A+    | (n=4)  |
| Product has needed functionality (1-9 scale) | A     | (n=4)  |
| Supports integration goals (1-9 scale)  | B+    | (n=4)  |

**Relationship**

| Metric                                  | Value | Rating |
| :-------------------------------------- | :---- | :----- |
| Executive involvement (1-9 scale)       | A+    | (n=4)  |
| Quality of phone/web support (1-9 scale) | A+    | (n=4)  |

**Value**

| Metric                                            | Value | Rating |
| :------------------------------------------------ | :---- | :----- |
| Avoids charging for every little thing (percent of respondents who answered yes) | 100%  | (n=4)  |
| Drives tangible outcomes (1-9 scale)              | A+    | (n=4)  |
| Money's worth (1-9 scale)                         | A+    | (n=4)  |

Confidential. Do not distribute. SmarterDx 2024.

## Slide 13: 10 months ago, we had $18.1M in pipeline. We've won $9.0M. Customers love us. This has translated to a $69.5M pipeline across four RVPs, Wayne, and Mike.

(Visualization of pipeline stages, broken down by Q1, Q2, Q3. Customer names are redacted.)

**Q1 Pipeline**
*   redacted: ACV $1.1M, Won vs. Iodine
*   redacted: ACV $1.7M, Closed, First contact in November

**Q2 Pipeline**
*   redacted: ACV $2.9M, In contracting, Won vs. Iodine, First contact in November
*   redacted: (no explicit ACV/status, placeholder)
*   redacted: ACVs $1.3M and $3.1M, CFO-driven, In assessment, First contact in November

**Q3 Pipeline**
*   redacted: ACV $3.6M, Late-stages, System-wide
*   redacted: (no explicit ACV/status, placeholder)
*   redacted: ACVs $2.6M and $1.0M, In assessment
*   redacted: ACV $4.5M, Early stages

Confidential. Do not distribute. SmarterDx 2024.

## Slide 14: Prebill alone can reach significant ARR in 2025

(Chart showing Prebill projected CARR and gross profit (annualized))

**Prebill projected CARR and gross profit (annualized) - Data approximated from visual inspection**

| Date      | CARR ($)     | Gross profit ($) |
| :-------- | :----------- | :--------------- |
| 7/1/2023  | ~$2,000,000  | ~$1,000,000      |
| 1/1/2024  | ~$10,000,000 | ~$3,000,000      |
| 7/1/2024  | ~$30,000,000 | ~$8,000,000      |
| 1/1/2025  | ~$48,000,000 | ~$20,000,000     |
| 7/1/2025  | ~$65,000,000 | ~$40,000,000     |

Confidential. Do not distribute. SmarterDx 2024.

## Slide 15: Prebill R&D positions us for upstream and downstream adjacencies

|                   | Historic R&D                           | Current R&D        | Unlocks                |
| :---------------- | :------------------------------------- | :----------------- | :--------------------- |
| **Data and Integration** | Clinical data (Epic, Meditech, Cerner), Billing data | HL7v2, FHIR Charges, Payments | Utilization management |
| **Algorithms**    | Diagnosis predictions                  | (Further improvements) | Clinical variability   |
| **Visualization & Query writer** | Relationships between diagnoses and explanatory data | Improved summarization | Denials / appeals writer |

Confidential. Do not distribute. SmarterDx 2024.

## Slide 16: (Financial Table)

|                 | 2022   | 2023   | 2024 (Budget) | 2024 (Re-Forecast) | 2025 Forecast | 2026 Forecast | 2027 Forecast |
| :-------------- | :----- | :----- | :------------ | :----------------- | :------------ | :------------ | :------------ |
| Contracted Sites | 4      | 13     | 24            | 29                 | 55            | 95            | 138           |
| FTE             | 13     | 38     | 105           | 154                | 246           | 403           | 566           |
| CARR ($M)       | 1.6    | 7.4    | 25.9          | 35.3               | 72.8          | 139.0         | 210.8         |
| YoY Growth %    | -      | 365%   | 250%          | 377%               | 106%          | 91%           | 52%           |
| Deployed ARR ($M) | 1.4    | 3.9    | 21.5          | 26.9               | 60.6          | 117.8         | 189.6         |
| Revenue ($M)    | 0.4    | 1.8    | 11.7          | 11.2               | 45.0          | 88.8          | 155.3         |
| YoY Growth %    | -      | 299%   | 555%          | 528%               | 301%          | 98%           | 75%           |
| COGS ($M)       | 0.1    | 1.0    | 4.5           | 4.7                | 11.1          | 20.8          | 33.7          |
| GM %            | 71%    | 46%    | 62%           | 58%                | 75%           | 77%           | 78%           |
| OpEx ($M)       | 1.9    | 6.3    | 16.0          | 21.5               | 40.6          | 62.0          | 90.5          |
| Cash Burn (excl. Financing) ($M) | (1.7) | (5.7)  | (11.9)        | (18.7)             | (14.9)        | (10.1)        | 0.6           |

Confidential. Do not distribute. SmarterDx 2024.