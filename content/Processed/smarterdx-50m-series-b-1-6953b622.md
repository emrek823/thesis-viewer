---
source_pdf: "https://drive.google.com/file/d/1dsmGOxhr0jYr5Is8-192jKwjiC_Kj0JI/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "SmarterDx $50M Series B (1).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1dsmGOxhr0jYr5Is8-192jKwjiC_Kj0JI/view)

## Slide 1: SmarterDx - March 2024 update

SmarterDx
March 2024 update

## Slide 2: Summary

*   Since May 2023 (Series A), we have increased CARR from $1.6M to $10.4M with a 90-day lag between contracted and deployed and 40% win rate.
*   Our current pipeline is $70M.
*   Significant investments have been made to GTM and data science teams to grow velocity by an OOM (2 new clients / year to 2 new clients / month).
*   We are poised to reach $35M in CARR by EOY 2024, with a path to $65M and EBITDA profitability by EOY 2025.

## Slide 3: Deep talent at the intersection of medicine, healthcare GTM, and data science

**Founding team**
*   **Mike Gao | CEO**
    *   Physician, AI at NYP
*   **Josh Geleris | Head of Product**
    *   Physician, DS for DoD, EHR impl. at NYP
*   **Nathan Perilo | Head of Eng**
    *   Dir., Quant Eng at Citi

**GTM**
*   **Wayne Grodsky | CCO**
    *   CCO for EHR, ZirMed, Collective Med.
*   **Jonathan Crawley | CFO**
    *   CFO, Collective Med., VP M&A, PointClickCare, McKinsey
*   **Marisa Johnson | Head of Marketing**
    *   Senior Dir. Marketing at UnitedHealthcare

**Data Science**
*   **Scott Fleming | ML Researcher**
*   **Conor Corbin | Senior DS**
    *   Stanford ML PhDs (Nigam Shah lab), Verily
*   **Ning Liang | Principal Eng**
    *   Founder and CTO for HealthSherpa ($140M ARR), Twitter quant
*   **Sean Gallagher | Principal ML Eng**
    *   Created and launched Lowe's NLP team as their Principal DS
*   **Marie Klosterman | Lead DS**
    *   Director, DS at Olive; Senior DS at Optum

## Slide 4: Hospitals are eager to fix a leaky and expensive revenue cycle

**Process Flow:**
1.  **Intake**
    *   Prior auth
    *   Validate what's covered and who pays
2.  **Documentation**
    *   Narrate the care provided
3.  **CDI & Coding** (Highlighted)
    *   Fix documentation and convert to structured data
4.  **Payor validation**
    *   Defend and receive payment

---
*   **Hard to hire**
    *   Requires clinical expertise (e.g. nurse), which is particularly challenging today given scarcity.
*   **Losing money**
    *   The average 350-bed hospital misses $22M in potential annual revenue due to RCM (Advisory Board, 2017)
*   **Low margins**
    *   Median US hospital margin was 1.6% in October 2023. 2% is the 'new normal' (Health Management Academy, 2024)
*   **= High urgency**
    *   RCM is the top priority category for software investment (Bain, 2022)

## Slide 5: Clinical documentation improvement (CDI) nurses: a hard job that's getting harder

**Today's process**
1.  Pick a chart
    *   Prioritization
2.  Search data
    *   NER
3.  ID missing Dx (Highlighted)
4.  Write 'Query'
    *   Templates

## Slide 6: Clinical documentation improvement (CDI) nurses: a hard job that's getting harder

**Today's process**
1.  Pick a chart
    *   Prioritization
2.  Search data
    *   NER + rules
3.  ID missing Dx (Highlighted)
4.  Write 'Query'
    *   Templates

---
**Increasing complexity**
*   ICD-9
*   ICD-10
*   MS-DRG
*   APR-DRG
*   Elixhauser
*   HCC
*   SDOH
*   O/E
60,000+ diagnosis codes

**Sicker patients**
*Chart: Percentage of patients with common chronic diseases over time (2008-2016)*

| Year | Hypertension | Hyperlipidemia | Arthritis | Diabetes | Ischemic Heart Disease | Kidney Disease | Depression |
| :--- | :----------- | :------------- | :-------- | :------- | :--------------------- | :------------- | :--------- |
| 2008 | ~23%         | ~12%           | ~9%       | ~8%      | ~6%                    | ~2%            | ~8%        |
| 2010 | ~26%         | ~14%           | ~10%      | ~10%     | ~7%                    | ~3%            | ~9%        |
| 2012 | ~29%         | ~17%           | ~12%      | ~12%     | ~9%                    | ~4%            | ~10%       |
| 2014 | ~32%         | ~20%           | ~13%      | ~14%     | ~10%                   | ~5%            | ~11%       |
| 2016 | ~35%         | ~22%           | ~15%      | ~16%     | ~11%                   | ~6%            | ~12%       |

x 20 per patient

**Increased payor pushback**
*   ClarisHealth
*   MedReview
*   Zelis.
*   OPTUM IQ™
*   EQUIAN Part of Optum®
*   gainwell
*   CERIS
*   COTIVITI

## Slide 7: This forces CDI nurses to choose between going wide or going deep.

*   **X-axis:** Percent of charts covered
*   **Y-axis:** Depth of review

| Category          | Description                                                    | Quadrant (relative)                                  |
| :---------------- | :------------------------------------------------------------- | :--------------------------------------------------- |
| **Prioritization:** | Deeper but narrower                                            | Top-Left (lower % covered, higher depth)             |
| **Missed opportunities:** | Lost revenue (CC/MCC, SOI), Lower quality (ROM, HCC, Elix) | Top-Right (higher % covered, higher depth)           |
| **Rules-based:**  | Wide but shallow                                               | Bottom-Right (higher % covered, shallower depth)     |

smarterdx.com

## Slide 8: We allow them to cover 100% of charts by directly inferring missing diagnoses

**Today's process (crossed out):**
*   ~~Pick a chart~~ (Prioritization)
*   ~~Search data~~ (NER + rules)
*   ID missing Dx
*   ~~Write 'Query'~~ (Templates)

**Process with SmarterDx**
1.  **Ingest data**
    *   Epic, Cerner, Meditech
    *   Data transformation and normalization
2.  **Infer diagnoses**
    *   Proprietary labels
    *   AutoML
    *   LLM feature extraction
    *   Mistral + Seq2Seq
    *   Counterfactual modeling
3.  **Validate Dx** (Highlighted)
4.  **Copy query**
    *   Data selection
    *   LLM-generated query (BAA with OpenAI)

## Slide 9: Higher CDI accuracy creates revenue lift worth 0.3% - 0.5% inpatient NPSR

*Chart: Found revenue by customer (per month)*

| Date       | Houston Methodist | Montefiore Medical Center | Beebe Healthcare | Universal Health Services | University of Arkansas | McLaren Health | White Plains Hospital | Total Found Revenue (Estimated) |
| :--------- | :---------------- | :------------------------ | :--------------- | :------------------------ | :--------------------- | :------------- | :-------------------- | :------------------------------ |
| 7/1/2022   | $0                | $0                        | $0               | $0                        | $0                     | $0             | $0                    | ~$300,000                       |
| 1/1/2023   | ~$200,000         | ~$700,000                 | $0               | ~$300,000                 | $0                     | $0             | $0                    | ~$1,200,000                     |
| 7/1/2023   | ~$400,000         | ~$1,000,000               | ~$200,000        | ~$500,000                 | ~$100,000              | ~$100,000      | $0                    | ~$2,300,000                     |
| 1/1/2024   | ~$500,000         | ~$1,500,000               | ~$500,000        | ~$1,000,000               | ~$300,000              | ~$200,000      | ~$200,000             | ~$4,200,000                     |

**Found revenue by customer (per month)**
**SmarterDx ACV: $822,000 \*\***

\* ACV for these were 41% higher than predicted at time of Series A. The remainder were not in pipeline or previously deployed. This should not be extrapolated forward (as we have updated our ACV prediction).
\*\* Reflects a take rate of 11.6%.

## Slide 10: 10 months ago, we had $18.1M in pipeline.

| Hospital                          |
| :-------------------------------- |
| McLaren + 2 hospitals             |
| Montefiore                        |
| UHS (Texas Region)                |
| Insight Chicago                   |
| Houston Methodist                 |
| UCSF                              |
| Covenant Health                   |
| Wooster Community Hospital        |
| Prisma Health                     |
| Anderson Hospital                 |
| Stanford Health                   |
| CarePoint                         |
| UC San Diego                      |
| BronxCare                         |
| Methodist                         |
| One Brooklyn Health - Brookdale   |
| UC Irvine                         |
| OHSU                              |
| Allegheny Health Network          |
| Beebee Healthcare                 |
| Valley Medical Center             |
| UPMC - Presbyterian Hospital      |
| UC Davis                          |
| Commonspirit - Baylor Hospital    |
| Community Medical Center (Fresno) |
| Sharp Healthcare                  |
| Hoag Health                       |

## Slide 11: 10 months ago, we had $18.1M in pipeline. We've won $9.0M.

| Hospital                          | What happened                                |
| :-------------------------------- | :------------------------------------------- |
| McLaren + 2 hospitals             | Won [Streamline]                             |
| Montefiore                        | Won (vs. Iodine) [Accuity, Cloudmed]         |
| UHS (Texas Region)                | Won [replaced Accuity]                       |
| Insight Chicago                   | Won                                          |
| Houston Methodist                 | Won [Faircode, Cloudmed]                     |
| UCSF                              | Retro / Pilot [Cloudmed]                     |
| Covenant Health                   | Lost (Ensemble)                              |
| Wooster Community Hospital        | Won                                          |
| Prisma Health                     | Retro / Pilot                                |
| Anderson Hospital                 | Lost (ND)                                    |
| Stanford Health                   | Won [Cloudmed]                               |
| CarePoint                         | Lost (ND)                                    |
| UC San Diego                      | Retro / Pilot                                |
| BronxCare                         | Lost (ND)                                    |
| Methodist                         | Lost (ND)                                    |
| One Brooklyn Health - Brookdale   | Lost (ND)                                    |
| UC Irvine                         | Won [Cloudmed]                               |
| OHSU                              | Contracting (vs. Iodine) [Cloudmed]          |
| Allegheny Health Network          | Retro / Pilot                                |
| Beebee Healthcare                 | Won                                          |
| Valley Medical Center             | Retro / Pilot                                |
| UPMC - Presbyterian Hospital      | Lost (ND)                                    |
| UC Davis                          | Mid funnel                                   |
| Commonspirit - Baylor Hospital    | Lost (R1 / Optum / Accuity)                  |
| Community Medical Center (Fresno) | Lost (Iodine)                                |
| Sharp Healthcare                  | Lost (ND)                                    |
| Hoag Health                       | Retro / Pilot                                |

## Slide 12: 10 months ago, we had $18.1M in pipeline. We've won $9.0M. Customers love us.

| Hospital                          | What happened                                |
| :-------------------------------- | :------------------------------------------- |
| McLaren + 2 hospitals             | Won [Streamline]                             |
| Montefiore                        | Won (vs. Iodine) [Accuity, Cloudmed]         |
| UHS (Texas Region)                | Won [replaced Accuity]                       |
| Insight Chicago                   | Won                                          |
| Houston Methodist                 | Won [Faircode, Cloudmed]                     |
| UCSF                              | Retro / Pilot [Cloudmed]                     |
| Covenant Health                   | Lost (Ensemble)                              |
| Wooster Community Hospital        | Won                                          |
| Prisma Health                     | Retro / Pilot                                |
| Anderson Hospital                 | Lost (ND)                                    |
| Stanford Health                   | Won [Cloudmed]                               |
| CarePoint                         | Lost (ND)                                    |
| UC San Diego                      | Retro / Pilot                                |
| BronxCare                         | Lost (ND)                                    |
| Methodist                         | Lost (ND)                                    |
| One Brooklyn Health - Brookdale   | Lost (ND)                                    |
| UC Irvine                         | Won [Cloudmed]                               |
| OHSU                              | Contracting (vs. Iodine) [Cloudmed]          |
| Allegheny Health Network          | Retro / Pilot                                |
| Beebee Healthcare                 | Won                                          |
| Valley Medical Center             | Retro / Pilot                                |
| UPMC - Presbyterian Hospital      | Lost (ND)                                    |
| UC Davis                          | Mid funnel                                   |
| Commonspirit - Baylor Hospital    | Lost (R1 / Optum / Accuity)                  |
| Community Medical Center (Fresno) | Lost (Iodine)                                |
| Sharp Healthcare                  | Lost (ND)                                    |
| Hoag Health                       | Retro / Pilot                                |

**SmarterDx Performance Overview**
All standard software performance indicators

**Culture**

| Metric                                            | n= | Score | Percent Yes |
| :------------------------------------------------ | :- | :---- | :---------- |
| Keeps all promises (percent of respondents who answered yes) | 4  |       | 100%        |
| Proactive service (1-9 scale)                     | 4  | A+    |             |
| Product works as promoted (1-9 scale)             | 4  | A+    |             |

**Product**

| Metric                                  | n= | Score | Percent Yes |
| :-------------------------------------- | :- | :---- | :---------- |
| Delivery of new technology (1-9 scale)  | 4  | A+    |             |
| Overall product quality (1-9 scale)     | 4  | A+    |             |
| Product has needed functionality (1-9 scale) | 4  | A     |             |
| Supports integration goals (1-9 scale)  | 4  | B+    |             |

**Loyalty**

| Metric                          | n= | Score | Percent Yes |
| :------------------------------ | :- | :---- | :---------- |
| Forecasted satisfaction (1-9 scale) | 4  | A+    |             |
| Likely to recommend (1-9 scale) | 4  | A+    |             |
| Overall satisfaction (1-9 scale) | 4  | A+    |             |
| Part of long-term plans (percent of respondents who answered yes) | 4  |       | 100%        |
| Would you buy again (percent of respondents who answered yes) | 4  |       | 100%        |

**Relationship**

| Metric                            | n= | Score | Percent Yes |
| :-------------------------------- | :- | :---- | :---------- |
| Executive involvement (1-9 scale) | 4  | A+    |             |
| Quality of phone/web support (1-9 scale) | 4  | A+    |             |

**Value**

| Metric                                                    | n= | Score | Percent Yes |
| :-------------------------------------------------------- | :- | :---- | :---------- |
| Avoids charging for every little thing (percent of respondents who answered yes) | 4  |       | 100%        |
| Drives tangible outcomes (1-9 scale)                      | 4  | A+    |             |
| Money's worth (1-9 scale)                                 | 4  | A+    |             |

**Operations**

| Metric                             | n= | Score | Percent Yes |
| :--------------------------------- | :- | :---- | :---------- |
| Ease of use (1-9 scale)            | 4  | A+    |             |
| Quality of implementation (1-9 scale) | 4  | A+    |             |
| Quality of training (1-9 scale)    | 4  | A+    |             |

## Slide 13: 10 months ago, we had $18.1M in pipeline. We've won $9.0M. Customers love us. This has translated to a $69.5M pipeline across four RVPs, Wayne, and Mike.

**Q1**
*   **OHSU**
    *   ACV $1.1M
    *   Won vs. Iodine
*   **Premier Health**
    *   ACV $1.7M
    *   Closed
    *   First contact in November

**Q2**
*   **Endeavor Health.**
    *   ACV $2.9M
    *   In contracting
    *   Won vs. Iodine
    *   First contact in November
*   **THE OHIO STATE UNIVERSITY WEXNER MEDICAL CENTER**
    *   ACVs $1.3M and $3.1M
    *   CFO-driven
    *   In assessment
    *   First contact in November
*   **M Northwestern Medicine®**
    *   *No specific ACV or status given for Northwestern Medicine on this slide, but it appears grouped with Ohio State.* (ACVs from Ohio State block seem to apply to both)

**Q3**
*   **uchealth**
    *   ACV $3.6M
    *   Late-stages
    *   System-wide
*   **Allegheny Health Network hoag.**
    *   ACVs $2.6M and $1.0M
    *   In assessment
*   **N: NOVANT HEALTH**
    *   ACV $4.5M
    *   Early stages

## Slide 14: Prebill alone can reach significant ARR in 2025

*Chart: Prebill projected CARR and gross profit (annualized)*

| Date      | CARR (Projected) | Gross profit (Projected) |
| :-------- | :--------------- | :----------------------- |
| 7/1/2023  | ~$1.5M           | ~$0.5M                   |
| 1/1/2024  | ~$7.5M           | ~$2.5M                   |
| 7/1/2024  | ~$30M            | ~$8M                     |
| 1/1/2025  | ~$35M            | ~$20M                    |
| 7/1/2025  | ~$55M            | ~$35M                    |
| End 2025 | ~$67M            | ~$42M                    |

## Slide 15: Prebill R&D positions us for upstream and downstream adjacencies

|                   | Historic R&D                                  | Current R&D                          | Unlocks                          |
| :---------------- | :-------------------------------------------- | :----------------------------------- | :------------------------------- |
| **Data and Integration** | Clinical data (Epic, Meditech, Cerner), Billing data | HL7v2, FHIR Charges, Payments        | Utilization management           |
| **Algorithms**    | Diagnosis predictions                         | (Further improvements)               | Clinical variability             |
| **Visualization & Query writer** | Relationships between diagnoses and explanatory data | Improved summarization             | Denials / appeals writer         |

## Slide 16: Financial Projections

| Metric                            | 2022 | 2023 | 2024 (Budget) | 2024 (Re-Forecast) | 2025 Forecast | 2026 Forecast | 2027 Forecast |
| :-------------------------------- | :--- | :--- | :------------ | :----------------- | :------------ | :------------ | :------------ |
| Contracted Sites                  | 4    | 13   | 24            | 29                 | 55            | 95            | 138           |
| FTE                               | 13   | 38   | 105           | 154                | 246           | 403           | 566           |
| CARR ($M)                         | 1.6  | 7.4  | 25.9          | 35.3               | 72.8          | 139.0         | 210.8         |
| YoY Growth %                      | -    | 365% | 250%          | 377%               | 106%          | 91%           | 52%           |
| Deployed ARR ($M)                 | 1.4  | 3.9  | 21.5          | 26.9               | 60.6          | 117.8         | 189.6         |
| Revenue ($M)                      | 0.4  | 1.8  | 11.7          | 11.2               | 45.0          | 88.8          | 155.3         |
| YoY Growth %                      | -    | 299% | 555%          | 528%               | 301%          | 98%           | 75%           |
| COGS ($M)                         | 0.1  | 1.0  | 4.5           | 4.7                | 11.1          | 20.8          | 33.7          |
| GM %                              | 71%  | 46%  | 62%           | 58%                | 75%           | 77%           | 78%           |
| OpEx ($M)                         | 1.9  | 6.3  | 16.0          | 21.5               | 40.6          | 62.0          | 90.5          |
| Cash Burn (excl. Financing) ($M)  | (1.7) | (5.7) | (11.9)        | (18.7)             | (14.9)        | (10.1)        | 0.6           |