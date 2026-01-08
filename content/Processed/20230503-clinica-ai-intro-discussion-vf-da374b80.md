---
source_pdf: "https://drive.google.com/file/d/1XnBlmNaIXfMCtmmGfYkkg1ifF6lz8TlK/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "20230503 Clinica AI Intro Discussion vF.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1XnBlmNaIXfMCtmmGfYkkg1ifF6lz8TlK/view)

## Slide 1: Complimentary Innovation in Trial Design

Complimentary Innovation
in Trial Design
Clinica AI

May 2023

Clinica AI™ | Proprietary and confidential | Clinica AI, Corp.

## Slide 2: Welcome to Clinica AI

Clinica AI has developed first-in-class digital software that empowers healthcare leaders to precisely measure and improve the care of patients using RWD and AI (patent pending) to crack previously unsolvable problems

**Dr. Ralph Horwitz**
Co-founder
Former Chair of Medicine at Yale and Stanford, Dean at Case Western, Practicing academic physician (35+ years,) SVP at GSK
American College of Physicians, MACP

**Dr. Mark Cullen**
Sr Clinical Advisor
Former Dean for Research of Stanford Medical School, Chief Division of General Medicine, Director of Stanford Center for Population Health Sciences
Yale University Medical School, MD Harvard University, A.B.

**James Baker**
Co-founder
Former Lead Medical and Commercial Data Scientist and Expert in AI for McKinsey Life Sciences practice; Yale Computer Science researcher (4+ yrs)
Yale University, B.S. Applied Mathematics

**Dr. Arnie Ghatak**
Co-founder
Former Senior Partner at McKinsey (20+ yrs); Global head of Medical Affairs (8+ yrs); Most recently Head of Strategy and Innovation at Public Biotech
University of Pennsylvania, MD, MBA Princeton University, A.B. Molecular Biology

Clinica AI
2 Proprietary and confidential

## Slide 3: R&D: New risk factors and features enable better risk prediction

Omicron era COVID patients

### Median SHAP Contribution of Comorbidity Risk Factors

(Predictors not highlighted as risk factors by CDC indicated by dashed line, approximately below CKD)

| Comorbidity Factor                  | N Value  | SHAP Contribution (approx.) |
| :---------------------------------- | :------- | :-------------------------- |
| Acute_Respiratory_Failure_Hist      | 919      | 1.15                        |
| Hospitalization_Hist                | 775      | 0.9                         |
| CKD                                 | 11839    | 0.7                         |
| Serious_Heart                       | 22769    | 0.6                         |
| Pulmonary_Fibrosis                  | 710      | 0.5                         |
| Type_2_Diabetes                     | 43392    | 0.4                         |
| Liver                               | 923      | 0.35                        |
| COPD                                | 24084    | 0.32                        |
| Type_1_Diabetes                     | 1398     | 0.3                         |
| Dementia                            | 4206     | 0.28                        |
| Multiple_Sclerosis                  | 854      | 0.26                        |
| Obesity                             | 27685    | 0.25                        |
| Immune_Suppression                  | 67       | 0.23                        |
| Cancer                              | 9215     | 0.22                        |
| Critical_Care_Hist                  | 71       | 0.21                        |
| Cerebrovascular                     | 4294     | 0.2                         |
| Pregnant                            | 3439     | 0.19                        |
| Acute_Respiratory_Issues_Hist       | 23182    | 0.18                        |
| Lupus                               | 780      | 0.17                        |
| Parkinsons                          | 706      | 0.16                        |
| Transplant                          | 116      | 0.15                        |
| Pregnant_Last_Year                  | 4153     | 0.14                        |
| Rheumatoid_Arthritis                | 3791     | 0.13                        |
| Pancreatitis                        | 751      | 0.12                        |
| Immune_Deficiency_Disease           | 1546     | 0.11                        |
| Developmental_and_Behavioral_Disorders | 7532     | 0.1                         |
| Hypertension                        | 78577    | 0.08                        |
| Asthma                              | 16931    | 0.07                        |

**Other important risk factors include:**
*   No office visit / health exam (last 2 years)
*   Number of healthcare encounters (last 2 years)
*   Number of unique medications (last 2 years)

**Top 5 comorbidity risk factors:**
*   History of acute respiratory failure or hospitalization in last 2 years
*   CKD
*   Serious heart conditions
*   Pulmonary Fibrosis

**Bottom 3 comorbidity risk factors:**
*   Asthma
*   Hypertension
*   Dev. / behavioral disorders (ADHD)

Clinica AI
3 Proprietary and confidential

## Slide 4: R&D: Addressing treatment effect bias between different patient populations

**Covid rates of severe outcomes for 2 synthetic trial arms**

This is one scenario out of thousands that nicely shows the impact of our approach (not the most extreme example)

We ran over a thousand scenarios to:
1) show how much patient risk variability can impact results
2) confirm the ClinicaAI approach can significantly reduce potential bias between arms
3) demonstrate that we can both increase and decrease the risk outcomes at constant patient number

In all scenarios, ClinicaAI helped and never 'hurt'

### Subgroups alone (patients distributed by age, gender, race, vaccination)
**Example randomized arm allocation by subgroup:**

| Subgroups          | Arm #1 (500 patients) | Arm #2 (500 patients) |
| :----------------- | :-------------------- | :-------------------- |
| <40                | 127                   | 128                   |
| 40-50              | 57                    | 55                    |
| 50-70              | 185                   | 186                   |
| 70+                | 131                   | 131                   |
| Female             | 318                   | 315                   |
| Vaccine            | 49                    | 43                    |
| **Severe outcome %** | **1.6%**              | **3.7%**              |

### Subgroups + Severe COVID risk score
**Example randomized arm allocation by subgroup:**

| Subgroups           | Arm #1 (499 patients) | Arm #2 (501 patients) |
| :------------------ | :-------------------- | :-------------------- |
| <40                 | 126                   | 129                   |
| 40-50               | 57                    | 55                    |
| 50-70               | 183                   | 188                   |
| 70+                 | 133                   | 129                   |
| Female              | 317                   | 316                   |
| Vaccine             | 47                    | 45                    |
| High risk (ClinicaAI) | 105                   | 106                   |
| **Severe outcome %**  | **2.5%**              | **3.0%**              |

Clinica AI
4 Proprietary and confidential

## Slide 5: R&D: 5 Key Outputs of the Clinica AI Trial Suite

Improve trial's design and prob. of success and with a suite of unique apps based on the clinical AI methodology

**1 Quantification of patient journey**
**2 Risk of outcome (or response) AI models**
**3 Trial design tool (sizing, diversity, recruitment)**
**4 Real-time patient allocation tool (or synthetic trial arm)**
**5 Real-time site and region surveillance**

---

### 1 simplified atrial fibrillation patient treatment journey (Flowchart)

*   **Diagnosed with AF diagnosis code**
    *   Identified by AF patient finding AI algorithm (95% true positive rate)
*   Branches to:
    *   **Persistent or permanent**
        *   Leads to Low AF stroke risk (AI risk score) or High AF stroke risk (AI risk score)
    *   **Paroxysmal (AF ended without treatment)**
        *   Leads to Low AF stroke risk (AI risk score) or High AF stroke risk (AI risk score)
*   Ultimately leads to **Anti-coagulant** (implied for high risk)

### 2 Factor SHAP contributions ranked by importance
(New predictors identified are highlighted)

| Feature                                | SHAP Contribution (approx.) |
| :------------------------------------- | :-------------------------- |
| Age                                    | 0.9                         |
| Last Months Rate                       | 0.85                        |
| Encounters                             | 0.8                         |
| Race                                   | 0.75                        |
| Control Arm                            | 0.7                         |
| Treatment Arm                          | 0.65                        |
| Strain                                 | 0.6                         |
| Sex                                    | 0.55                        |
| Time_From_Last_COVID                   | 0.5                         |
| Distinct DX Codes                      | 0.45                        |
| Office Visit Hist                      | 0.4                         |
| Serious Heart                          | 0.3                         |
| Metabolic Disorders                    | 0.29                        |
| Type 2 Diabetes                        | 0.28                        |
| Number_of Medications                  | 0.27                        |
| CKD                                    | 0.26                        |
| Vaccine Days                           | 0.25                        |
| Acute_Respiratory_Failure_Hist         | 0.24                        |
| COPD                                   | 0.23                        |
| Hospitalization Hist                   | 0.22                        |
| Hypertension                           | 0.21                        |
| Asthma                                 | 0.2                         |
| Obesity                                | 0.19                        |
| Pulmonary Fibrosis                     | 0.18                        |
| Type 1 Diabetes                        | 0.17                        |
| Acute Respiratory Issues Hist          | 0.16                        |
| Cancer                                 | 0.15                        |
| Dementia                               | 0.14                        |
| Liver                                  | 0.13                        |
| Cerebrovascular                        | 0.12                        |
| Pancreatitis                           | 0.11                        |
| Developmental_and_Behavioral_Disorders | 0.1                         |
| Parkinsons                             | 0.09                        |
| Immune Suppression                     | 0.08                        |
| Multiple Sclerosis                     | 0.07                        |
| Immune_Deficiency_Disease              | 0.06                        |
| Rheumatoid Arthritis                   | 0.05                        |
| Anti-coagulant                         | 0.04                        |
| Transplant                             | 0.03                        |
| Critical Care Hist                     | 0.02                        |
| Critical_Care_Hist (Lupus is adjacent) | 0.01                        |
| Lupus                                  | 0.01                        |

### 3 Probability Distributions of Control Arm vs Treatment Arm
*   **Top Chart: Probability distribution of trials**
    *   Treatment mean: 1.600
    *   Control mean: 3.000
    *   Description: When randomizing across subgroups, trials often do not fully account for variation in the control arm.
*   **Bottom Chart: Probability Distribution of Treatment Effect on Suboptimal Outcome**
    *   Expected treatment effect on outcomes: -1.4%
    *   Percentage of trials with worse outcomes in treatment arm: 29.61%

### 4 Our randomization tool balances trial arms more accurately than previously possible
(Trial randomization tool workflow)
*   Patient recruited for trial
*   ClinicaAI risk assessment
*   Patient characteristics (e.g. medical records and lab data)

**Example output:**

| Subgroups                           | Arm #1 (500 patients) | Arm #2 (500 patients) | Arm #3 (500 patients) |
| :---------------------------------- | :-------------------- | :-------------------- | :-------------------- |
| <40                                 | 126                   | 129                   | 127                   |
| 40-50                               | 57                    | 55                    | 56                    |
| 50-70                               | 183                   | 188                   | 185                   |
| 70+                                 | 133                   | 129                   | 132                   |
| F                                   | 317                   | 316                   | 318                   |
| Vaccine                             | 47                    | 45                    | 46                    |
| High risk (ML)                      | 105                   | 106                   | 105                   |
| Estimated outcome (no treatment) % | 2.5%                  | 2.5%                  | 2.5%                  |

### 5 Key output: Site and Region Surveillance
(AFib example)
See early changes in patient recruitment and care as they emerge in key metrics impacting the expected results of a trial

*   **Real-time treatment pathway, patient risk, and diversity monitoring**
    *   Bar charts comparing "October 1-7 2022 (previous period)" vs "October 8-15 2022 (current period)" for metrics like: Number of patients, % high risk, % female, % white, % Black. (Precise values not legible, but show slight shifts between periods).
    *   Example insight: "Near term spike in improper supportive care, failure to manage AEs and lack of monitoring -> suspected COVID wave"
*   **Monitor changes across regions and geographies**
    *   US map showing regional changes.
    *   Example insight: "General positive trend in treatment except in NE and SE sites where we know COVID wave was hardest"
*   **Monitor changes across individual sites**
    *   Bar charts showing site-specific metrics (e.g., Lack of monitoring, New pathway implementation).
    *   Example insight: "New pathway implementation at key center begins to show positive momentum"

Clinica AI
5 Proprietary and confidential

## Slide 6: Commercial and Medical Affairs: 6 key outputs of the Functional Visibility Suite

Breakthrough, actionable insights to inform and guide Commercial strategy across functions and use cases

**1 Quantification of patient journey**
**2 Patient opportunity mapping and strategy**
**3 Eligible patient locator**
**4 HCP segmentation (AI-based)**
**5 Individual 'Fingerprints' for physicians and institutions**
**6 Leading indicator surveillance**

---

### 1 Quantification of patient journey
(Simplified atrial fibrillation patient treatment journey and Key treatment decisions - Areas of patient need)

*   **Simplified atrial fibrillation patient treatment journey (Flowchart)**
    *   **Diagnosed with AF diagnosis code**
        *   Identified by AF patient finding AI algorithm (95% true positive rate)
    *   Branches to:
        *   **Persistent or permanent**
            *   Leads to Low AF stroke risk (AI risk score) or High AF stroke risk (AI risk score)
        *   **Paroxysmal (AF ended without treatment)**
            *   Leads to Low AF stroke risk (AI risk score) or High AF stroke risk (AI risk score)
    *   Ultimately leads to **Anti-coagulant** (implied for high risk)

*   **Key treatment decisions - Areas of patient need (Text description of unmet needs)**
    *   Diagnosis and investigation:
        *   After diagnosis, do patients receive proper comorbidity testing? -> Incomplete comorbidity testing
        *   After diagnosis, do patients receive proper CV risk testing? -> Improper CV risk testing
    *   Treatment (all lines of therapy):
        *   Do high AF stroke risk patients receive proper preemptive treatment? -> High AF stroke risk without preemptive treatment
    *   Therapy support and adherence:
        *   Are patients adherent to their anticoagulant treatments? -> Non-adherence to anticoagulants
    *   Continued monitoring:
        *   Do patients receive continued monitoring from a CV specialist during and post treatment? -> Lack of monitoring by CV specialist
        *   Failure to complete follow up testing

### 2 Patient opportunity mapping and strategy
(Patient opportunity starts often pre-diagnosis through investigation and referrals to follow-up and adherence)

**Legend for Impact on patient share / Impact on adherence:**
*   High negative impact (less than -0.6)
*   Medium negative impact (between -0.3 and -0.6)
*   Low impact (between +0.3 and -0.3)

| Areas of patient need                      | Patients with unmet need (approx. K) | Impact on patient share | Impact on adherence |
| :----------------------------------------- | :----------------------------------- | :---------------------- | :------------------ |
| Improper CV risk testing                   | 70K                                  | High negative           | Medium negative     |
| Incomplete comorbidity testing             | 65K                                  | Medium negative         | Low                 |
| Continued AF without treatment escalation  | 55K                                  | High negative           | High negative       |
| Repeated cardioversions without treatment escalation | 50K                                  | High negative           | High negative       |
| Improper calcium channel blocker           | 45K                                  | High negative           | High negative       |
| Off-label treatment                        | 40K                                  | High negative           | Medium negative     |
| High AF stroke risk without anticoagulant  | 35K                                  | Medium negative         | Medium negative     |
| Improper support of therapy                | 30K                                  | Medium negative         | Medium negative     |
| Failure to manage AEs                      | 25K                                  | Low                     | Medium negative     |
| Lack of monitoring by CV specialist        | 20K                                  | Low                     | Low                 |
| Non-adherence to anticoagulants            | 15K                                  | High negative           | High negative       |
| Non-adherence to other AF drug treatments  | 10K                                  | High negative           | High negative       |
| Failure to complete follow up testing      | 5K                                   | High negative           | Medium negative     |

### 3 Eligible patient locator

| HCP name  | Region              | Key strategic opportunities | Patients in priority unmet needs | Percent of eligible patient on therapy | Percent of patients not adherent | Segment Institution (health system / IDN) variation in care |
| :-------- | :------------------ | :-------------------------- | :------------------------------- | :------------------------------------- | :------------------------------- | :---------------------------------------------------------- |
| HCP 4903  | West North Central  |                             |                                  |                                        |                                  | (Map shows regional variations, not specific institution data in table) |
| HCP 4168  | East South Central  | ★                           |                                  |                                        |                                  |                                                             |
| HCP 4087  | Pacific             |                             |                                  |                                        |                                  |                                                             |
| HCP 4846  | East South Central  |                             |                                  |                                        |                                  |                                                             |
| HCP 4130  | West South Central  | ★                           |                                  |                                        |                                  |                                                             |
| HCP 4578  | East North Central  |                             |                                  |                                        |                                  |                                                             |
| HCP 3999  | Mountain            |                             |                                  |                                        |                                  |                                                             |
| HCP 4080  | East North Central  | ★                           |                                  |                                        |                                  |                                                             |
| HCP 4029  | West South Central  |                             |                                  |                                        |                                  |                                                             |
| HCP 4503  | West North Central  | ★★                          |                                  |                                        |                                  |                                                             |
| HCP 4279  | West North Central  |                             |                                  |                                        |                                  |                                                             |
| HCP 4015  | West South Central  |                             |                                  |                                        |                                  |                                                             |
| HCP 4306  | Mountain            |                             |                                  |                                        |                                  |                                                             |
| HCP 4672  | West South Central  |                             |                                  |                                        |                                  |                                                             |
| HCP 4842  | New England         |                             |                                  |                                        |                                  |                                                             |
| HCP 3843  | South Atlantic      |                             |                                  |                                        |                                  |                                                             |

### 4 HCP segmentation (AI-based)
(AI-based segmentation using on real care patterns and specialties to tailor content and engagement)
(HCP segmentation by care patterns and specialties. Custom content development for priority segments)

| Priority HCP segments                                | Number of HCPs | Number of patients with unmet need | Prioritized for custom content |
| :--------------------------------------------------- | :------------- | :--------------------------------- | :----------------------------- |
| Improper treatments                                  | 1,665          | 60,944                             | ★                              |
| Failure to escalate to drug treatment                | 6,405          | 6,350                              |                                |
| Failure to give anticoagulants and improper testing  | 1,539          | 73,660                             | ★                              |
| Proper treatment, Lack of monitoring and low adherence | 1,653          | 30,082                             | ★                              |

*   Allows you to understand which unmet needs travel together in HCPs (correlations do not capture true relationships)
*   More precisely target messages based on custom segmentation (can model 2 to X segments in seconds)

### 5 Individual 'Fingerprints' for physicians and institutions
(Care profiles of top 3 HCPs by high AF stroke risk without anticoagulant treatment within Northwell Health)
(Priority HCP segments: Improper treatments, Failure to give anticoagulant and improper testing)

**HCP #4073**

| Unmet Need                                     | Percent of eligible patients with unmet need (approx.) |
| :--------------------------------------------- | :--------------------------------------------------- |
| Improper CV risk testing                       | 70%                                                  |
| Incomplete comorbidity testing                 | 65%                                                  |
| High AF stroke risk without anticoagulant      | 60%                                                  |
| Continued AF without treatment escalation      | 55%                                                  |
| Repeated cardioversions without treatment escalation | 50%                                                  |
| Improper calcium channel blocker               | 45%                                                  |
| Off-label treatment                            | 40%                                                  |
| Improper support of therapy                    | 35%                                                  |
| Failure to manage AEs                          | 30%                                                  |
| Lack of monitoring                             | 25%                                                  |
| Non-adherence to other AF drug treatments      | 20%                                                  |
| Non-adherence to anticoagulants                | 15%                                                  |
| Failure to complete follow up testing          | 10%                                                  |
| Lack of monitoring by CV specialist            | 5%                                                   |

**HCP #4312**

| Unmet Need                                     | Percent of eligible patients with unmet need (approx.) |
| :--------------------------------------------- | :--------------------------------------------------- |
| Improper CV risk testing                       | 40%                                                  |
| Incomplete comorbidity testing                 | 35%                                                  |
| High AF stroke risk without anticoagulant      | 30%                                                  |
| Continued AF without treatment escalation      | 25%                                                  |
| Repeated cardioversions without treatment escalation | 20%                                                  |
| Improper calcium channel blocker               | 15%                                                  |
| Off-label treatment                            | 10%                                                  |
| Improper support of therapy                    | 5%                                                   |
| Failure to manage AEs                          | 0%                                                   |
| Lack of monitoring                             | 0%                                                   |
| Non-adherence to other AF drug treatments      | 0%                                                   |
| Non-adherence to anticoagulants                | 0%                                                   |
| Failure to complete follow up testing          | 0%                                                   |
| Lack of monitoring by CV specialist            | 0%                                                   |

**HCP #3922**

| Unmet Need                                     | Percent of eligible patients with unmet need (approx.) |
| :--------------------------------------------- | :--------------------------------------------------- |
| Improper CV risk testing                       | 20%                                                  |
| Incomplete comorbidity testing                 | 15%                                                  |
| High AF stroke risk without anticoagulant      | 10%                                                  |
| Continued AF without treatment escalation      | 5%                                                   |
| Repeated cardioversions without treatment escalation | 0%                                                   |
| Improper calcium channel blocker               | 0%                                                   |
| Off-label treatment                            | 0%                                                   |
| Improper support of therapy                    | 0%                                                   |
| Failure to manage AEs                          | 0%                                                   |
| Lack of monitoring                             | 0%                                                   |
| Non-adherence to other AF drug treatments      | 0%                                                   |
| Non-adherence to anticoagulants                | 0%                                                   |
| Failure to complete follow up testing          | 0%                                                   |
| Lack of monitoring by CV specialist            | 0%                                                   |

### 6 Leading indicator surveillance

*   **Real-time national changes in patient care**
    *   Bar charts comparing "October 1-7 2022 (previous period)" vs "October 8-15 2022 (current period)" for metrics like: New patients, % high risk, % female, % white, % Black.
        *   New patients: Current period slightly higher.
        *   % high risk: Current period slightly higher.
        *   % female: Current period slightly higher.
        *   % white: Previous period slightly higher.
        *   % Black: Current period slightly higher.
    *   Example insight: "Near term spike in improper supportive care, failure to manage AEs and lack of monitoring -> suspected COVID wave"
*   **Change in care across geographic regions**
    *   US map showing regional changes.
    *   Example insight: "Local variation points to something that is starting to take hold in New England"
*   **Change of individual HCPs within regions**
    *   Bar charts showing site-specific metrics (e.g., % new patients, % good outcome, % new follow-up).
    *   Example insight: "New pathway implementation at key center begins to show positive momentum and even spillover outside"

Clinica AI
6 Proprietary and confidential