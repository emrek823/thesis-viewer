---
source_pdf: "https://drive.google.com/file/d/1eMymoSEmZ84CTs79yLHAnPO5rQ1pNtpJ/view"
drive_folder: "Portfolio/SmarterDx"
type: portfolio
company: SmarterDx
ingested: 2025-12-27
original_filename: "SDX Series B slides.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1eMymoSEmZ84CTs79yLHAnPO5rQ1pNtpJ/view)

# SmarterDx
## Slide 1: SmarterDx
March 2024 update

## Slide 2: Summary
*   Since May 2023 (Series A), we have increased CARR from \$1.6M to \$10.4M with a 90-day lag between contracted and deployed and 40% win rate.
*   Our current pipeline is \$70M.
*   Significant investments have been made to GTM and data science teams to grow velocity by an OOM (2 new clients / year to 2 new clients / month).
*   We are poised to reach \$35M in CARR by EOY 2024, with a path to \$65M and EBITDA profitability by EOY 2025.

Confidential. Do not distribute. SmarterDx 2024.

## Slide 3: Deep talent at the intersection of medicine, healthcare GTM, and data science

**Founding team**
**Mike Gao | CEO**
Physician, AI at NYP

**Josh Geleris | Head of Product**
Physician, DS for DoD, EHR impl. at NYP

**Nathan Perilo | Head of Eng**
Dir., Quant Eng at Citi

**GTM**
**Wayne Grodsky | CCO**
CCO for EHR, ZirMed, Collective Med.

**Jonathan Crawley | CFO**
CFO, Collective Med., VP M&A, PointClickCare, McKinsey

**Marisa Johnson | Head of Marketing**
Senior Dir. Marketing at UnitedHealthcare

**Data Science**
**Scott Fleming | ML Researcher**
**Conor Corbin | Senior DS**
Stanford ML PhDs (Nigam Shah lab), Verily

**Ning Liang | Principal Eng**
Founder and CTO for HealthSherpa (\$140M ARR), Twitter quant

**Sean Gallagher | Principal ML Eng**
Created and launched Lowe's NLP team as their Principal DS

**Marie Klosterman | Lead DS**
Director, DS at Olive; Senior DS at Optum

Confidential. Do not distribute. SmarterDx 2024.

## Slide 4: Hospitals are eager to fix a leaky and expensive revenue cycle

**Process Steps:**
*   **Intake Prior auth**
    *   Validate what's covered and who pays
*   **Documentation**
    *   Narrate the care provided
*   **CDI & Coding**
    *   Fix documentation and convert to structured data
*   **Payor validation**
    *   Defend and receive payment

**Challenges & Urgency:**
*   **Hard to hire**
    *   Requires clinical expertise (e.g. nurse), which is particularly challenging today given scarcity.
*   **Losing money**
    *   The average 350-bed hospital misses \$22M in potential annual revenue due to RCM (Advisory Board, 2017)
*   **Low margins**
    *   Median US hospital margin was 1.6% in October 2023. 2% is the 'new normal' (Health Management Academy, 2024)
*   **High urgency**
    *   RCM is the top priority category for software investment (Bain, 2022)

Confidential. Do not distribute. SmarterDx 2024.

## Slide 5: Clinical documentation improvement (CDI) nurses: a hard job that's getting harder

**Today's process**
*   **Pick a chart**
    *   Prioritization
*   **Search data**
    *   NER
*   **ID missing Dx**
*   **Write 'Query'**
    *   Templates

Confidential. Do not distribute. SmarterDx 2024.

## Slide 6: Clinical documentation improvement (CDI) nurses: a hard job that's getting harder

**Today's process**
*   **Pick a chart**
    *   Prioritization
*   **Search data**
    *   NER + rules
*   **ID missing Dx**
*   **Write 'Query'**
    *   Templates

**Challenges:**
*   **Increasing complexity**
    *   ICD-9
    *   ICD-10
    *   MS-DRG
    *   APR-DRG
    *   Elixhauser
    *   HCC
    *   SDOH
    *   O/E
    *   **60,000+ diagnosis codes**
*   **Sicker patients**
    *   **Chart: Prevalence of diagnoses over time (2008-2016)**
        *   Hypertension: steadily increasing from ~25% to ~35%
        *   Hyperlipidemia: steadily increasing from ~20% to ~30%
        *   Arthritis: mostly flat around 10-15%
        *   Diabetes: steadily increasing from ~10% to ~15%
        *   Ischemic Heart Disease: mostly flat around 5-10%
        *   Kidney Disease: steadily increasing from ~5% to ~10%
        *   Depression: mostly flat around 5%
    *   **x 20 per patient**
*   **Increased payor pushback**
    *   Logos of payor/payment integrity companies: ClarisHealth, MedReview, Zelis, OPTUM IQ, EQUIAN, gainwell, CERIS, COTIVITI

Confidential. Do not distribute. SmarterDx 2024.

## Slide 7: This forces CDI nurses to choose between going wide or going deep.

**Chart: Depth of review vs. Percent of charts covered**

*   **Prioritization:** (Top-left quadrant, purple shaded)
    *   Deeper but narrower
*   **Missed opportunities:** (Top-right quadrant, light blue shaded)
    *   Lost revenue (CC/MCC, SOI)
    *   Lower quality (ROM, HCC, Elix)
*   **Rules-based:** (Bottom-right quadrant, light blue shaded)
    *   Wide but shallow

smarterdx.com
Confidential. Do not distribute. SmarterDx 2024.

## Slide 8: We allow them to cover 100% of charts by directly inferring missing diagnoses

**Today's process (crossed out):**
*   Pick chart (Prioritization)
*   Search data (NER + rules)
*   ID missing Dx
*   Write 'Query' (Templates)

**Process with SmarterDx:**
*   **Ingest data**
    *   Epic, Cerner, Meditech
    *   Data transformation and normalization
*   **Infer diagnoses**
    *   Proprietary labels
    *   AutoML
    *   LLM feature extraction
    *   Mistral + Seq2Seq
    *   Counterfactual modeling
*   **Validate Dx** (Arrow from "ID missing Dx" in old process points here)
*   **Copy query** (Arrow from "Write 'Query'" in old process points here)
    *   Data selection
    *   LLM-generated query (BAA with OpenAI)

Confidential. Do not distribute. SmarterDx 2024.

## Slide 9: Higher CDI accuracy creates revenue lift worth 0.3% - 0.5% inpatient NPSR

**Chart: Found revenue by customer (per month)**
*   **Y-axis:** Dollars (\$0 - \$5,000,000)
*   **X-axis:** Date (7/1/2022 - 1/1/2024)

**Data points for found revenue by customer (approximate, based on graph):**

| Date       | Houston Methodist | Montefiore Medical Center | Beebe Healthcare | Universal Health Services | University of Arkansas | McLaren Health | White Plains Hospital | Total (approx) |
| :--------- | :---------------- | :------------------------ | :--------------- | :------------------------ | :--------------------- | :------------- | :-------------------- | :------------- |
| 7/1/2022   | 0                 | 0                         | 0                | 0                         | 0                      | 0              | 0                     | \$0            |
| 10/1/2022  | ~\$100k           | ~\$50k                    | 0                | 0                         | 0                      | 0              | 0                     | ~\$150k        |
| 1/1/2023   | ~\$200k           | ~\$300k                   | ~\$100k          | 0                         | 0                      | 0              | 0                     | ~\$600k        |
| 4/1/2023   | ~\$200k           | ~\$400k                   | ~\$200k          | ~\$100k                   | 0                      | 0              | 0                     | ~\$900k        |
| 7/1/2023   | ~\$500k           | ~\$800k                   | ~\$300k          | ~\$200k                   | 0                      | 0              | 0                     | ~\$1.8M        |
| 10/1/2023  | ~\$700k           | ~\$1.2M                   | ~\$400k          | ~\$300k                   | ~\$200k                | ~\$100k        | 0                     | ~\$2.9M        |
| 1/1/2024   | ~\$800k           | ~\$1.5M                   | ~\$600k          | ~\$400k                   | ~\$300k                | ~\$200k        | ~\$50k                | ~\$3.85M       |

**Legend:**
*   Houston Methodist \*
*   Montefiore Medical Center \*
*   Beebe Healthcare
*   Universal Health Services \*
*   University of Arkansas
*   McLaren Health
*   White Plains Hospital

**Notes:**
*   \* ACV for these were 41% higher than predicted at time of Series A. The remainder were not in pipeline or previously deployed. This should not be extrapolated forward (as we have updated our ACV prediction).
*   \*\* Reflects a take rate of 11.6%.

**SmarterDx ACV: \$822,000 \*\***

Confidential. Do not distribute. SmarterDx 2024.

## Slide 10: 10 months ago, we had \$18.1M in pipeline.

| Hospital |
| :------- |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |
| redacted |

Confidential. Do not distribute. SmarterDx 2024.

## Slide 11: 10 months ago, we had \$18.1M in pipeline. We've won \$9.0M.

| Hospital | What happened                                     |
| :------- | :------------------------------------------------ |
| redacted | Won [Streamline]                                  |
| redacted | Won (vs. Iodine) [Accuity, Cloudmed]              |
| redacted | Won [replaced Accuity]                            |
| redacted | Won                                               |
| redacted | Won [Faircode, Cloudmed]                          |
| redacted | Retro / Pilot [Cloudmed]                          |
| redacted | Lost (Ensemble)                                   |
| redacted | Won                                               |
| redacted | Retro / Pilot                                     |
| redacted | Lost (ND)                                         |
| redacted | Won [Cloudmed]                                    |
| redacted | Lost (ND)                                         |
| redacted | Retro / Pilot                                     |
| redacted | Lost (ND)                                         |
| redacted | Lost (ND)                                         |
| redacted | Lost (ND)                                         |
| redacted | Won [Cloudmed]                                    |
| redacted | Contracting (vs. Iodine) [Cloudmed]               |
| redacted | Retro / Pilot                                     |
| redacted | Won                                               |
| redacted | Retro / Pilot                                     |
| redacted | Lost (ND)                                         |
| redacted | Mid funnel                                        |
| redacted | Lost (R1 / Optum / Accuity)                       |
| redacted | Lost (Iodine)                                     |
| redacted | Lost (ND)                                         |
| redacted | Retro / Pilot                                     |

Confidential. Do not distribute. SmarterDx 2024.

## Slide 12: 10 months ago, we had \$18.1M in pipeline. We've won \$9.0M. Customers love us.

| Hospital | What happened                                     |
| :------- | :------------------------------------------------ |
| redacted | Won [Streamline]                                  |
| redacted | Won (vs. Iodine) [Accuity, Cloudmed]              |
| redacted | Won [replaced Accuity]                            |
| redacted | Won                                               |
| redacted | Won [Faircode, Cloudmed]                          |
| redacted | Retro / Pilot [Cloudmed]                          |
| redacted | Lost (Ensemble)                                   |
| redacted | Won                                               |
| redacted | Retro / Pilot                                     |
| redacted | Lost (ND)                                         |
| redacted | Won [Cloudmed]                                    |
| redacted | Lost (ND)                                         |
| redacted | Retro / Pilot                                     |
| redacted | Lost (ND)                                         |
| redacted | Lost (ND)                                         |
| redacted | Lost (ND)                                         |
| redacted | Won [Cloudmed]                                    |
| redacted | Contracting (vs. Iodine) [Cloudmed]               |
| redacted | Retro / Pilot                                     |
| redacted | Won                                               |
| redacted | Retro / Pilot                                     |
| redacted | Lost (ND)                                         |
| redacted | Mid funnel                                        |
| redacted | Lost (R1 / Optum / Accuity)                       |
| redacted | Lost (Iodine)                                     |
| redacted | Lost (ND)                                         |
| redacted | Retro / Pilot                                     |

**SmarterDx Performance Overview**
All standard software performance indicators

**Culture**
| Metric                            | n   | Rating |
| :-------------------------------- | :-- | :----- |
| Keeps all promises                | 4   | 100%   |
| Proactive service (1-9 scale)     | 4   | A+     |
| Product works as promoted (1-9 scale) | 4   | A+     |

**Loyalty**
| Metric                               | n   | Rating |
| :----------------------------------- | :-- | :----- |
| Forecasted satisfaction (1-9 scale)  | 4   | A+     |
| Likely to recommend (1-9 scale)      | 4   | A+     |
| Overall satisfaction (1-9 scale)     | 4   | A+     |
| Part of long-term plans              | 4   | 100%   |
| Would you buy again                  | 4   | 100%   |

**Operations**
| Metric                            | n   | Rating |
| :-------------------------------- | :-- | :----- |
| Ease of use (1-9 scale)           | 4   | A+     |
| Quality of implementation (1-9 scale) | 4   | A+     |
| Quality of training (1-9 scale)   | 4   | A+     |

**Product**
| Metric                                  | n   | Rating |
| :-------------------------------------- | :-- | :----- |
| Delivery of new technology (1-9 scale)  | 4   | A+     |
| Overall product quality (1-9 scale)     | 4   | A+     |
| Product has needed functionality (1-9 scale) | 4   | A      |
| Supports integration goals (1-9 scale)  | 4   | B+     |

**Relationship**
| Metric                               | n   | Rating |
| :----------------------------------- | :-- | :----- |
| Executive involvement (1-9 scale)    | 4   | A+     |
| Quality of phone/web support (1-9 scale) | 4   | A+     |

**Value**
| Metric                                  | n   | Rating |
| :-------------------------------------- | :-- | :----- |
| Avoids charging for every little thing  | 4   | 100%   |
| Drives tangible outcomes (1-9 scale)    | 4   | A+     |
| Money's worth (1-9 scale)               | 4   | A+     |

Confidential. Do not distribute. SmarterDx 2024.

## Slide 13: 10 months ago, we had \$18.1M in pipeline. We've won \$9.0M. Customers love us. This has translated to a \$69.5M pipeline across four RVPs, Wayne, and Mike.

| Quarter | RVP 1        | RVP 2        | RVP 3        | RVP 4        | Wayne/Mike   |
| :------ | :----------- | :----------- | :----------- | :----------- | :----------- |
| Q1      | redacted     | redacted     | redacted     | redacted     | ACV \$1.7M <br> Closed <br> First contact in November |
|         | ACV \$1.1M <br> Won vs. Iodine |              |              |              |              |
| Q2      | redacted     | redacted     | redacted     | redacted     | ACVs \$1.3M and \$3.1M <br> CFO-driven <br> In assessment <br> First contact in November |
|         | ACV \$2.9M <br> In contracting <br> Won vs. Iodine <br> First contact in November |              |              |              |              |
| Q3      | redacted     | redacted     | redacted     | redacted     | ACV \$4.5M <br> Early stages |
|         | ACV \$3.6M <br> Late-stages <br> System-wide | ACVs \$2.6M and \$1.0M <br> In assessment |              |              |              |

Confidential. Do not distribute. SmarterDx 2024.

## Slide 14: Prebill alone can reach significant ARR in 2025

**Chart: Prebill projected CARR and gross profit (annualized)**
*   **Y-axis:** Dollars (\$0 - \$80,000,000)
*   **X-axis:** Date (7/1/2023 - 7/1/2025)

**Data points (approximate, based on graph):**

| Date       | CARR (Approx. \$M) | Gross profit (Approx. \$M) |
| :--------- | :----------------- | :------------------------- |
| 7/1/2023   | 1                  | 0.5                        |
| 1/1/2024   | 10                 | 1                          |
| 7/1/2024   | 30                 | 8                          |
| 1/1/2025   | 45                 | 20                         |
| 7/1/2025   | 65                 | 40                         |

Confidential. Do not distribute. SmarterDx 2024.

## Slide 15: Prebill R&D positions us for upstream and downstream adjacencies

|                   | Historic R&D                           | Current R&D                          | Unlocks                          |
| :---------------- | :------------------------------------- | :----------------------------------- | :------------------------------- |
| **Data and Integration** | Clinical data (Epic, Meditech, Cerner), Billing data | HL7v2, FHIR <br> Charges, Payments | Utilization management           |
| **Algorithms**    | Diagnosis predictions                  | (Further improvements)               | Clinical variability             |
| **Visualization & Query writer** | Relationships between diagnoses and explanatory data | Improved summarization             | Denials / appeals writer         |

Confidential. Do not distribute. SmarterDx 2024.

## Slide 16:

| Metric                          | 2022 | 2023 | 2024 (Budget) | 2024 (Re-Forecast) | 2025 Forecast | 2026 Forecast | 2027 Forecast |
| :------------------------------ | :--- | :--- | :------------ | :----------------- | :------------ | :------------ | :------------ |
| Contracted Sites                | 4    | 13   | 24            | 29                 | 55            | 95            | 138           |
| FTE                             | 13   | 38   | 105           | 154                | 246           | 403           | 566           |
| CARR (\$M)                      | 1.6  | 7.4  | 25.9          | 35.3               | 72.8          | 139.0         | 210.8         |
| YoY Growth %                    | -    | 365% | 250%          | 377%               | 106%          | 91%           | 52%           |
| Deployed ARR (\$M)              | 1.4  | 3.9  | 21.5          | 26.9               | 60.6          | 117.8         | 189.6         |
| Revenue (\$M)                   | 0.4  | 1.8  | 11.7          | 11.2               | 45.0          | 88.8          | 155.3         |
| YoY Growth %                    | -    | 299% | 555%          | 528%               | 301%          | 98%           | 75%           |
| COGS (\$M)                      | 0.1  | 1.0  | 4.5           | 4.7                | 11.1          | 20.8          | 33.7          |
| GM %                            | 71%  | 46%  | 62%           | 58%                | 75%           | 77%           | 78%           |
| OpEx (\$M)                      | 1.9  | 6.3  | 16.0          | 21.5               | 40.6          | 62.0          | 90.5          |
| Cash Burn (excl. Financing) (\$M) | (1.7) | (5.7) | (11.9)        | (18.7)             | (14.9)        | (10.1)        | 0.6           |

Confidential. Do not distribute. SmarterDx 2024.