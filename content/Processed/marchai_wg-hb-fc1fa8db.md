---
source_pdf: "https://drive.google.com/file/d/18iI56x2DKy0ySzKyI9U7Rq1gNtTrpXBW/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "MarchAI_WG-HB.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/18iI56x2DKy0ySzKyI9U7Rq1gNtTrpXBW/view)

# marchAI Pitch Deck - March 2025

## Slide 1: marchAI

CONFIDENTIAL
MARCH 2025

Structure the world's medical information

## Slide 2: Medical Data is unstructured and inaccessible

Healthcare data has a CAGR of 36% and is majority of global data generation

50 petabytes of data are produced annually by an average hospital

80% of it is unstructured
3% of it used

CONFIDENTIAL
MARCH 2025 / 2

## Slide 3: marchAI

Our platform creates structured data from unstructured data and unlocks the insights needed for (bio)medical research, clinical care and revenue optimization using specialized language models

CONFIDENTIAL
MARCH 2025 / 3

## Slide 4: Artificial Specialized Intelligence - for (bio)medical data insights

Easily extract and structure data

Building a secure, enterprise-grade platform that transforms raw data into actionable intelligence

marchAI scales predictions from individual patients to system-wide hospital operations

Solutions for every layer of healthcare—billing, staffing, patient flow, and beyond

### Data Flow Diagram

**Unstructured Data**
-> marchAI
-> **Target Data Tables**
-> **Feature Store**

**Client Storage**
-> marchAI
-> **Applications**

**Applications** (repeated multiple times, implying multiple application layers)

CONFIDENTIAL
MARCH 2025 / 4

## Slide 5: MarchAI Command Center

Gain unprecedented actionable insights, from individual patient level to system-wide operations

AI powered interactive platform with actionable feedback and recommendations

Seamless navigation across scales
→ zoom in on departments, units, beds, doctor and patients
→ zoom out to track hospital-wide efficiency, financial performance, and risk factors

Real time monitoring & performance tracking, track key hospital KPIs such as occupancy, revenue performance and quality of care

Snapshot of the command center

### Command Center UI Snapshot Details:

**Top Section:**
*   Company Logo: marchAI
*   Hospital: General Hospital Medical Center
*   Welcome, Johanna Doe
*   Search Bar: Q Find something
*   Metrics:
    *   1000 HAC
    *   10463 Hospital Encounters
    *   734 Challenged Charges
*   Small chart for SN, SAR, end-home, direct, end-SNF, end-SAR

**Left Navigation (MAIN):**
*   Dashboard
*   Schedule
*   Note
*   Products
*   Report
*   Settings
*   Support
*   User: Johanna Doe, johanna.doe@mail.com

**Department/Unit/Doctors:**
*   Unit
*   Department
*   Doctors

**Department Overviews (Cardiology, Neurology, Pediatrics, Oncology):**

| Metric             | Cardiology (1) | Neurology (2) | Pediatrics (3) | Oncology (4) |
| :----------------- | :------------- | :------------ | :------------- | :----------- |
| LOS                | (Line chart)   | (Line chart)  | (Line chart)   | (Line chart) |
| discharge          | 9              | 9             | 15             | 8            |
| admit              | 15             | 7             | 12             | 11           |
| occupancy          | 38/40 (95%)    | 18/35 (51%)   | 19/50 (38%)    | 22/45 (48%)  |
| patient/staff      | 38/16 (79%)    | 18/7 (97.2%)  | 19/10 (95%)    | 22/9 (163%)  |
| readmission        | ↑+10%          | ↑+15%         | ↓-5%           | ↑+12%        |
| mortality          | ↓-10%          | ↓-5%          | ↑+20%          | ↓-15%        |

**Bottom Metrics (for Johanna Doe):**

| Metric                       | Actual | Predicted |
| :--------------------------- | :----- | :-------- |
| READMISSION RATE 30 DAYS     | 12.5   | 10.8      |
| MONTHLY OR CASE VOLUME       | 430    | 450       |
| OCCUPANCY RATE PERCENTAGE    | 82.6   | 85        |
| LENGHT OF STAY OBS EXP       | 1.12   | 1.05      |

CONFIDENTIAL
MARCH 2025 / 5

## Slide 6: The team

### Olivier Tak
CEO, Co-founder, entrepreneur, physician
*   Co-founder & Junior Partner at Curie Capital
*   Advisory board of Carna Health
*   7 years of experience in life science venture funding and early-stage startups
*   Ex-Harvard Medical School, Ex-The Francis Crick Institute
*   MD at Erasmus University & BSc Nanobiology at Delft University of Technology

### Jaden Stryker
CTO, Co-founder, full-stack ML engineer
*   6 years of engineering experience in full-stack, ML infrastructure & cloud platforms
*   Oversees ML inference cluster for real-world medical applications at NYU Langone Hospital
*   AI research, engineering, and evaluation pipelines for 5+ projects published at OLAB
*   NYU CS + DS background with research in computational neuroscience

### Eric Karl Oermann
CSO, Co-founder, AI scientist, neurosurgeon, entrepreneur
*   15+ years of experience in AI at Verily, Google-X, NYU
*   3 startups - most recently inventor and co-founder of Artisight Inc. (recently $100M+ valuation post-Series B and profitable)
*   Forbes Magazine 30-Under-30, National Cancer Institute Fellow, Doris Duke Foundation Fellow, Keck Foundation
*   100+ scientific publications in premier venues (Nature, Nature Medicine, NeurIPS, etc...)
*   Board certified neurosurgeon

CONFIDENTIAL
MARCH 2025 / 6

## Slide 7: Moat

### We have the best team to build this, with medical degrees from world famous institutions, engineering experience at world class companies (Google), and prior success as co-founders (Artisight)

### We have expertise in deploying and utilizing swarms of ASI models in live healthcare environments within the NYU Health System

### NYUTron is the only foundation model pre-trained on millions of medical records, actively used within NYUH and proven to turn unstructured data into structured data with actionable outputs

### Access to similar data and the know-how to pre-process it are impossible to achieve for most companies regardless of market cap.

CONFIDENTIAL
MARCH 2025 / 7

## Slide 8: Kickstarter Stack: NYUTron foundation model

*   On 5 medical tasks, NYUTron App AUC 0.86 (SD 0.07) vs GPT-4 0.64 (SD 0.10)
*   5 solutions built in 1 day on NYUTron Foundation Model.
*   Deployed to clients 1 minute

### Clinical Task (Physician)

*   **In-hospital mortality prediction**
    *   How likely will the patient die in the hospital before discharge?
*   **Binned comorbidity index imputation**
    *   Without structured ICDs, how sick/chronically ill is the patient?
*   **30-day all-cause readmission prediction**
    *   How likely will the patient come back within 30 days of discharge?

### Operational Task (Admin)

*   **Binned LOS (Length-of-stay) prediction**
    *   How long will the patient stay in the hospital?
*   **Insurance denial prediction**
    *   How likely will the patient's insurance claim get denied?

CONFIDENTIAL
MARCH 2025 / 8

## Slide 9: Kickstarter Stack: NYUTron models at NYU Comparison*

CHEAPER / FASTER / MORE SECURE / MORE PERFORMANT THAN LEADING VENDORS

| Task                 | Best prompts                                                                                                                                                                                                                                                                                             | Sample                   | Gpt-4 (AUC) | NYUTron |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- | :---------- | :------ |
| Readmission          | Given a discharge note of a patient, will they be readmitted to the hospital after 30 days since the discharge? If yes, return 1 else 0.                                                                                                                                                                   | N=1000 patients Discharge summaries | 0.73        | 0.79    |
| In-hospital mortality | Given a discharge note of a patient, will the person die during the admission? If yes, return 1 else 0.                                                                                                                                                                                                  | N=1000 patients Admission H&Ps      | 0.76        | 0.95    |
| Insurance denial     | Given a clinical note of a patient, will the insurance company deny the patient's claim? If yes, return 1, else 0.                                                                                                                                                                                       | N=1000 patients Admission H&Ps      | 0.58        | 0.87    |
| LOS                  | Given a clinical note of a patient, predict how long the patient will stay at the hospital and then convert the number of days to a label by the following rule: label 0 for 0 to 2 days, label 1 for 3 days, label 2 for 4 to 5 days and label 3 for over 5 days. Then return the label only.            | N=1000 patients Progress notes      | 0.53        | 0.79    |
| CCI*                 | Given a clinical note of a patient, predict charlson comorbidity index of the patient and then convert the index to a label by the following rule: label 0 for 0 days, label 1 for 1 to 2 days, label 2 for 3 to 4 days, label 3 for 4 to 7 days and label 4 for a comorbidity index above 7 days. Then return the label only. | N=1000 patients Admission H&Ps      | 0.58        | 0.89    |

*Published in Nature

CONFIDENTIAL
MARCH 2025 / 9

## Slide 10: Kickstarter Stack: Value Add

*   **$43bn**
    *   US hospitals spend $43bn per year on 30-day all-cause adult readmissions.
    *   Based on our estimates, a 1000 bed hospital can save $125m in expense reductions across 5-years by improving ER readmissions by 7%.

*   **$50bn**
    *   Better length-of-stay prediction helps nationwide hospitals cut cost by up to $50bn, while improving the quality of patient care

*   **$20bn**
    *   Spent annually by healthcare providers on adjudicating claim denials with payers

CONFIDENTIAL
MARCH 2025 / 10

## Slide 11: marchAI Pricing Schedule - Buffet Pricing

*   Clients purchase a minimum of 3 apps, with free implementation* and a monthly run rate expense
*   Additional apps beyond MVP can be individually licensed on a fee- or risk-based price
*   Pay flat rate for serving platform

We could create a billing schedule based upon number of hospital beds, outcomes and milestones. Risk-based pricing models anchor on metrics (i.e., % of readmission reduction, LOS reduction, % reduction in denials from baseline, etc.) and would tie a portion of the fees to these metrics
*On-prem option for additional up-front charge.

CONFIDENTIAL
MARCH 2025 / 11

## Slide 12: Attractive Revenue Models

### 01: Subscription based revenue on ASI apps

### 02: Value based revenue sharing

### 03: Monetize valuable data insights for both marchAI and clients

CONFIDENTIAL
MARCH 2025 / 12

## Slide 13: Market(s)

*   **Global Healthcare AI market** is growing at 38.2% CAGR and is expected to be a **$481 billion** industry in 2032
*   **Estimated SAM** for our platform: **$75 billion**
*   Goal is a **10-25% cut** of all medical AI utilization

### Market Size Circles:

*   **TAM: $481 billion**
*   **SAM: $75 billion**
*   **SOM: $7.5bn**

CONFIDENTIAL
MARCH 2025 / 13

## Slide 14: Go To Market Strategy

*   **TARGET:** Focusing on midsized hospitals in the US and Asia
*   **BUILD:** Pilots with 1-3 midsized hospitals showing clear ROI and proving our impact
*   **SCALE:** Platform across hospital networks & broader healthcare ecosystem

CONFIDENTIAL
MARCH 2025 / 14

## Slide 15: Current and Future Applications

### 01: Optimized operations
*   Length of stay prediction
*   Readmission prediction
*   Automated patient stratification
*   Structure data into standard formats
*   Hosted through marchAI's command center

### 02: Optimized revenue
*   Insurance denial prediction
*   Optimized prior authorization
*   AI optimized coding
*   Reducing penalties

### 03: Optimized clinical care
*   AI generated visit prep
*   Automated summaries
*   AI diagnostics
*   Cohort generation

CONFIDENTIAL
MARCH 2025 / 15

## Slide 16: Use of Proceeds

### Pre-seed round
**$1.5M**
18-month runway

**Key personnel**
*   1xCEO
*   1xCTO
*   1xSWE
*   1xAI

**Compute budget**
*   cloud compute
*   storage

*   Allows us to further prototype, develop & test our command center
*   Pilot pre-trained models and MVP at initial clients
*   Focus on early BD & Sales
*   Foundation model pre-training already completed

CONFIDENTIAL
MARCH 2025 / 16

## Slide 17: Advisors

### Ainsley MacLean, MD
*   Former Chief Medical Information Officer (CMIO) and Chief AI Officer (CAIO) at Kaiser Permanente
*   Former member of Kaiser Permanente Ventures Investment Committee
*   Former advisory board of American Board of AI in Medicine
*   Former Forbes Tech Council
*   Harvard-trained board-certified neuroradiologist

### Yin Aphinyanaphongs, MD PhD
*   Director Operational Data Science & Machine Learning at NYU Langone Health
*   Assistant Professor in the Center for Health Innovation and Delivery Science
*   Former Director Clinical Predictive analytics at NYU Langone Health

### Han de Groot, MSc
*   Managing Partner of Switch Datacenters
*   Managing Director De Groot Family Office
*   Founder PetPlan (acquired)
*   Former CEO of MacroMill (TSE: 3978)
*   Founder / CEO of MetrixLab (merged with MacroMill)

CONFIDENTIAL
MARCH 2025 / 17

## Slide 18: Thank you!

CONTACT: OLIVIERTAK@GMAIL.COM

CONFIDENTIAL
MARCH 2025