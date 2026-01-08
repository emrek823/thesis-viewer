---
source_pdf: "https://drive.google.com/file/d/110jC5Kvx80JGFyyM4BvMJsWY_5P9Ld7g/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "2022.10.10 AI in Pharma Presentation v4.0.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/110jC5Kvx80JGFyyM4BvMJsWY_5P9Ld7g/view)

## Slide 1: AL IN PHARMA CLINICAL TRIALS

**AL IN PHARMA**
**CLINICAL TRIALS**

**Using AI to Improve Operational Efficiency in Clinical Trials**

Oct 13, 2022

Amir Emadzadeh
Director, Data Science
Gilead Sciences

## Slide 2: Disclaimer

## Disclaimer

The opinions expressed in this presentation and on the following slides are solely those of the presenter (Amir Emadzadeh) and not necessarily those of Gilead. Gilead does not guarantee the accuracy or reliability of the information provided herein.

## Slide 3: Meeting Agenda

## Meeting Agenda

1.  **Business problem:**
    Develop an evidence-driven operational strategy to optimally inform site selection, accurately forecast clinical studies, efficiently design trials, and avoid unmet timelines
2.  **Our approach:**
    Leverage data science techniques and robust data sources to develop predictive models
3.  **Business impact:**
    Optimizing design of trials and selection of countries, sites, and investigators to potentially avoid delays in enrollment, highlight risks, reduce amendments, address competition, and reduce costs

## Slide 4: Business needs

### Business needs

The ability to reliably model and forecast clinical studies is critical to informing an operational strategy that avoids delays in enrollment and amendments

*   **$8M**
    85% of clinical trials face delays due to slow enrollment, with the industry losing between $600K - $8M per day¹
*   **50%**
    % of clinical trial selected sites that enroll one or no patients²
*   **66%**
    % of clinical trial selected sites that *under-enroll*²
*   **<5%**
    % of patients that were African American across oncology clinical trials (despite constituting ~13% of US population)³

**Critical business needs**
*   Optimize country, site, and PI\* list accounting for competition, experience, performance, and patient / physician access
*   Reliably model, forecast, and monitor enrollment
*   Identify eligible patients (with diverse backgrounds)

Our aim is to solve for better clinical planning by leveraging data and analytics for strategic operational decision-making

\*PI: Principal investigator; references available in notes

## Slide 5: Modernizing the prediction of country/site/investigator selection and patient enrollment using advanced simulation and data science techniques

### Case study

## Modernizing the prediction of country/site/investigator selection and patient enrollment using advanced simulation and data science techniques

### Situation

### Objective
*   Enable capability to better predict country, site, and investigator performance and forecast enrollment utilizing robust data sources and advanced analytics
*   The plan was to leverage a variety of clinical, real-world, social, and unstructured data sources with focused and meaningful data science models to drive evidence-based feasibility decisions
*   Using the data and analytical solutions, the plan was to provide recommendations on benchmarking, countries & sites, competitive landscape, site performance and diversity, as well as enrollment forecasting

### Approach
*   We worked closely with global team and study leads to provide overall support for the feasibility analytical process, guiding clients to select the **best regions, sites, and investigators** for their clinical trials across the portfolio
*   Generated enrollment model using advanced predictive **data-science algorithms** and recommended trial performance strategies along with updated forecasts based on real time enrollment data
*   8-key solutions and integrated data are used to create a comprehensive operational strategy package to inform **evidence-based operational feasibility in a 2-week timeline**

1.  **Disease Landscape**
    Understand high-level disease information along with the current treatment plan
2.  **Landscape & competitive intel**
    Leveraging historical and ongoing clinical trial data to anchor performance benchmarking, and competitive intel
3.  **Country prioritization**
    Score and rank countries based on experience, patient availability and competitor drug landscape
4.  **Site Feasibility**
    Rank order sites based on experience, patient proximity and performance scores
5.  **Investigator Feasibility**
    Rank order investigators based on experience, opinion leader (KOL) scores and performance scores
6.  **Eligible patients and treating physician network**
    Using RWD to understand site's patient/physician access and diversity potential
7.  **Site-Investigator Overlay**
    Score and Rank sites and their associated investigators based on relevant disease experience and performance
8.  **Enrolment Modeling and Forecasting**
    Utilize historic site and country level Enrolment and screening patterns

**Business Impact:** Study Teams are empowered to evaluate scenarios and make strategic operational decisions given the options, recommendations and risks highlighted in the data analysis

## Slide 6: We use integrated clinical, real-world, and social datasets to power our analytical solutions and drive robust design and operational feasibility decisions

### Data sources

## We use integrated clinical, real-world, and social datasets to power our analytical solutions and drive robust design and operational feasibility decisions

| Landscape & Competitive Intel | Country/Site/Investigator Selection and Enrollment Modeling |
| :---------------------------- | :-------------------------------------------------------- |
| Patient & epi landscape to understand patient availability across countries | Country prioritization to select countries for the trial |
| Competitive landscape & drug profile to understand approved / in development drugs | Site selection followed by optimization to identify best sites and investigators |
| | Enrollment modeling to find probability & monitor likelihood of completing trial in desired timelines |

### Data Sources

*   **Clinical trial corpus**
    (e.g., clinicaltrials.gov, EudraCT, and subscribed datasets)
*   **Real-World data**
    (e.g., claims, EHR, etc.)
*   **Internal data**
    (e.g., CTMS, EDC, study protocols, etc.)
*   **Epidemiology data**
    (e.g., patient prevalence and incidence, Census, etc.)
*   **Publications / literature**
    (e.g., PubMed)
*   **Social data**
    (e.g., Twitter, etc.)

## Slide 7: We have built a reusable set of analytics processes using integrated data & data science to drive timely operational decisions

### Core outputs

## We have built a reusable set of analytics processes using integrated data & data science to drive timely operational decisions

The analytics processes consist of eight (8) key solutions

*   **Landscape & competitive intel**
    including standard of care, marketed/pipeline products & performance benchmarking
*   **Patient & physician access**
    using RWD\* to understand site's patient / physician access potential
*   **Country, site & PI selection**
    using past performance & experience and patient access metrics
*   **Patient proximity & referrals**
    using RWD\* to assess the proximity of patients and referring physicians from investigative site
*   **Enrollment forecasting**
    considering site and country level enrollment and screening patterns and COVID impact
*   **Patient diversity**
    using RWD to identify diverse patient segments
*   **Epidemiology & treatment pathway**
    using disease prevalence, incidence, and past treatment related metrics to prioritize countries/sites
*   **Disease expert identification**
    using past publications and interactions data in a specific area of therapy

## Slide 8: Our study feasibility analytics is an ecosystem with trained and packaged set of data science models that delivers predictive data and analytics-informed decisions

### Solution approach

## Our study feasibility analytics is an ecosystem with trained and packaged set of data science models that delivers predictive data and analytics-informed decisions

*   **START**
    1.  **Integrated Feasibility Datahub**
        (20+ Data Sources)
    2.  **DEDUPE·IO**
        **Data integration and mastering**
        (Site golden record creation using distance and name similarity algorithms)
    3.  **XGBoost**
        **Site performance prediction**
        (Imputing site performance metrics using decision tree-based models - XGBoost)
    4.  **Site behavior prediction**
        (Using mix of rules, time series and ML models to predict early, late adopters)
    5.  **KOL identification**
        (Using PageRank to identify KOL based on their author-co-author relationship network)
    6.  **Consolidated metrics universe to predict performance potential**
        (repository of 30+ metrics covering diversity, patient access, experience, performance, etc.)
    7.  **Country, site, and investigator rank/grade prediction**
        (Grouping similar sites/PI into performance grades using Jenks natural breaks optimization)
    8.  **Site optimization**
        (Optimizing site list for minimum enrollment duration using mixed-integer linear programming)
        *   *Mixed integer (linear) program*
            `mize 3x+2y`
            `subject to`
            `4x+2y <= 15`
            `x+y <= 5`
            `x >= 0`
            `y >= 0, integer`
    9.  **Enrollment modeling**
        (Poisson gamma based using Bayesian inference (MCMC) & method of moments)
        *   `mean patients enrolled, n(t₀, t) = λ / (β + kᵢ) * x(t₀, t)`
        *   `var(n(t₀, t)) = λ / (β + kᵢ)² * x(t₀, t) + λ / (β + kᵢ)³ * x(t₀, t)²`
    10. **Outputs**
        "Feasibility package" with seven outputs

*   **Data Engineering Module**
*   **Analytical Modules**
*   **End**

**Outputs:**
*   Disease & Treatment Landscape
*   Benchmarking & Competitive Assessment
*   Country Assessment and Ranking
*   Site Ranking and Prioritization
*   Investigator and KOL Selection
*   Enrollment Forecasting
*   Eligible Patients and Treating Physicians

## Slide 9: Innovative solution #1: NLP techniques and cutting-edge technology to automate the extraction of various design elements from protocol documents

### Protocol digitization

## Innovative solution #1: NLP techniques and cutting-edge technology to automate the extraction of various design elements from protocol documents

### Tech stack

| Data Source | Data extraction | Machine learning pipeline | Visualization |
| :---------- | :-------------- | :------------------------ | :------------ |
| amazon S3   | python          | REVO Analytics Workbench  | Jupyter       |
| PDF         | OpenCV          | spaCy                     | aws           |
|             | RegEx           | Google AI BERT            | tableau       |
|             |                 | dmlc XGBoost              | R + Shiny     |
|             |                 | MeSH on Demand learn      |               |

The design elements are extracted using a combination of pattern recognition and supervised machine learning models

1.  **Pattern Recognition**
    *   Document Date
    *   Revision No.
    *   Trial Phase
    *   Comparator (Y/N)
2.  **Supervised ML models**
    *   Mono/Combo
    *   Randomized/Non-randomized
    *   Blinded / Open Label
    *   Line of Therapy
3.  **Pretrained NLP Stack**
    *   Intervention name
    *   Indication
    *   Endpoints

Protocol digitization creates opportunities for a suite of downstream analytics (e.g., finding and clustering for similar trials for study feasibility benchmarking, exploratory analysis related to study design, etc.)

## Slide 10: Innovative solution #2: Machine Learning approach for optimal country/site selection and forecasting enrollment

### Site selection / enrollment

## Innovative solution #2: Machine Learning approach for optimal country/site selection and forecasting enrollment

### Inputs

#### Site Level
*   Patients screened per Site per Month (PSMscreen)
*   Screen Failure Rate (SFR)
*   Site Dropout Rate (SDR)
*   Start up time (SU)

#### Study Level
*   Target number of patients

### Methodology

*   Imputation of PSM and std. dev. at site level
*   Input candidate list of sites
*   **Machine Learning Models**
    *   PSMscreen ~ Gamma (α₁, β₁)
    *   SFR ~ Beta(α₂, β₂)
    *   SDR ~ Bernoulli(α₃)
    *   SU ~ LogNormal (α₄, β₄)
*   **Stochastic Optimization**
    *   Sample K scenarios that includes for each site i
    *   Sk = {PSMscreen,ki, SFRki, SDki, SUki
*   Input constraints of the trial

### Outputs

#### Integrated solution
*   Select the optimal set of sites
*   Mean duration of the trial
*   Prob. charts for the duration of the trial

The above approach improves upon the methods for site selection and enrollment forecasting that are currently used across the industry, and helps to bridge the gap between planned and actual numbers

Enrollment rate PSMtkij = PSM\*kij \* (1 – SFRtkij) \* (1 – SDtkij)

## Slide 11: Innovative solution #3: Leverage an ensemble of Shannon entropy, Kullback-Leibler, and Jensen-Shannon divergence methods to address diversity in trials

### Diversity in clinical trials

## Innovative solution #3: Leverage an ensemble of Shannon entropy, Kullback-Leibler, and Jensen-Shannon divergence methods to address diversity in trials

Numerous studies across the U.S. indicate that minority groups have often been largely underrepresented in clinical trials\*

### STRATEGIC OBJECTIVES

*   Identify top regions with high diversity potential using Census and SDoH data
*   Two strategic objectives may exist:
    *   ✓ **No defined diversity goal for the study**
        *   Compute Shannon entropy to measure the diversity of species in a community
    *   ✓ **Defined diversity goal for the study**
        *   Leverage an ensemble of statistical tests including Kullback-Leibler (K-L) divergence, Chi-square, and Jensen-Shannon to identify regions that have similar distributions to target diversity

**Step #1: Select top regions of interest (population diversity)**

**Step #2: Compute patient diversity for top geographies based on real-world data, and identify top physicians and/or investigators**

### Illustration

**Sample patient diversity (K-L divergence) vs. Sample population diversity (K-L divergence)**
R² = 0.6

| Label                | Sample population diversity (K-L divergence) (Approx. X) | Sample patient diversity (K-L divergence) (Approx. Y) |
| :------------------- | :------------------------------------------------------- | :---------------------------------------------------- |
| Atlantic County      | 0.12                                                     | 0.35                                                  |
| Collin County        | 0.17                                                     | 0.3                                                   |
| Mecklenburg County   | 0.1                                                      | 0.25                                                  |
| Prince William County | 0.08                                                     | 0.2                                                   |
| Cook County          | 0.07                                                     | 0.17                                                  |
| Fort Bend County     | 0.08                                                     | 0.1                                                   |
| Milwaukee County     | 0.12                                                     | 0.1                                                   |
| Cobb County          | 0.15                                                     | 0.1                                                   |
| Alexandria city      | 0.11                                                     | 0.07                                                  |
| Fairfax County       | 0.12                                                     | 0.07                                                  |
| Kings County         | 0.05                                                     | 0.03                                                  |
| Solano County        | 0.1                                                      | 0.03                                                  |

\*According to U.S. Census, Black population represents 13.4% of the total U.S. population, yet the FDA reports that this group makes up only 5% of clinical trial participants

## Slide 12: Vision for the future

### Vision for the future

## Our vision for the future includes value and impact driven analytics to optimize study design and operational feasibility at scale

*   **Unbiased & evidence driven...**
    ...objective assessment where we look beyond the countries & sites that we & our partners have traditionally worked with using many global datasets
*   **Data agnostic & data science driven...**
    ...process where we don't just anchor our recommendations to past performance, but use data science to predict future opportunities
*   **Holistic & active learning driven...**
    ...model where we continuously monitor the performance of our recommendations, so they improve over time and give better results

## Slide 13: THANK YOU

## THANK YOU