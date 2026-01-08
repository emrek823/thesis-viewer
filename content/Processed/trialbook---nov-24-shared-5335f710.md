---
source_pdf: "https://drive.google.com/file/d/1GMCPKYEzdC_pwBmedeEsE0hOor1wHdpt/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "TrialBook - Nov 24 (Shared).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1GMCPKYEzdC_pwBmedeEsE0hOor1wHdpt/view)

## Slide 1: Title Slide

# TrialBook
Structuring clinical trial data
at scale to better value
biotech innovation

November 2023

## Slide 2: Situation

### Situation
A more data-driven approach can help identify therapeutic outliers early in their clinical trial journey

**Biotech investment due diligence currently**

Biotech investors and researchers sift through publications, reviews, company reports, KOL conversations, and conferences to discover drug candidates and develop a clinical edge. Current data solutions do not help compare clinical benefit of therapies

**High chance of failure for new drug candidates, even when clinical trial data available to help make decisions:**
* ~15% of Ph2 new drug candidates reach approval¹

**Analyst peak sales estimates for drugs prior to their approval are highly inaccurate:**
* 1 year before approval, ~50% of analyst peak revenue estimates are >50% off²
* 3 years before approval, ~75% of analyst peak revenue estimates are >50% off²

1. Appendix, pg. 12
2. Appendix, pg. 13

**Biotech investment due diligence in the future**

Biotech investors and researchers use AI-enabled tools to source, structure, and analyze clinical trials across diseases, discover trends across thousands of data points, and utilize all available clinical data to guide investment decisions

TrialBook is the first tool to allow investors to compare all clinical trials in a disease area by what matters the most. Our Clinical Benefit Score is the first metric enabling an objective and comprehensive comparison of efficacy and safety by indication

A >50% success rate on clinical trial investment can turbocharge Life Sciences innovation by an order of magnitude

## Slide 3: Challenge

### Challenge
Novel and proprietary capability to structure clinical trial data at scale

**Challenge 1: Source trial data, results pubs, and announcements for every trial**

API pipeline sourcing all publications, company announcements, and registry updates for clinical trials registered in U.S. (475k trials.)

**Use Clinical trial registry as base (110k completed interventional Ph1-4 trials, 34k with results, 100k active)**
*   US. National Library of Medicine ClinicalTrials.gov
    *   Results for FDA approved or NIH funded trials, most Ph2+ studies registered in U.S.
    *   Delay to posting results
    *   Completed trials with no results on registry (phase 1, failed trials)
    *   Ongoing trials

**For trials with no results, use AI agent to find any published results on PubMed and Google**
*   PubMed
*   PR Newswire
*   ENDPOINTS NEWS
*   FIERCE
*   Seeking Alpha

Results for all published trials registered in the U.S.
*   Ongoing trials

**Challenge 2: Extract key information from unstructured trial text at scale**

Trial labeling AI assistant to extract and structure data on results (e.g. PFS comparison,) patient populations (e.g. stage 3, EGFR+,) and more

**Users validate AI suggestions to extract results from registries and publications accurately and quickly**
*   **AI extracts key data for users**
    *   AI performs data engineering task and makes suggestion to user
*   **Reinforcement learning**
    *   Assess accuracy of AI and fine-tune with reinforcement learning (RLHF)
*   **User validation**
    *   User validates the AI suggestions to create gold standard data

**Fine tuned GPT models based on our RLHF data already outperforms top 'out of the box' models significantly**

**Chart: Percent of trial information correctly extracted**

| Model | Percentage Correctly Extracted |
| :-------------------------------- | :----------------------------- |
| GPT-3                               | ~30%                           |
| GPT-4                               | ~50%                           |
| Fine Tuned Model (1k labeled trials) | ~88%                           |

Building this data manually across all diseases would take ~100k hours (225k trials, 25 labeled data points per trial, 1 min. per label.) With our end-to-end data labeling tool, we can build able to build this dataset in hours at a fraction the cost per trial ($0.01 vs $2-5)

## Slide 4: Solution

### Solution
This comprehensive clinical trial dataset enables 2 innovative products

**Valuing biotech innovation (Biotech investors)**

**Situation:** Biotech investors and Pharma R&D lack a guiding clinical benefit metric to determine future commercial success based on a comprehensive benefit / risk profile comparison

**Solution:** Opportunity Monitor identifies the most and least beneficial therapies in development based on clinical evidence

**In Breast Cancer, Enhertu and others identified as outliers (predicting future clinical trial and commercial successes.)**

| Title                                                                                                  | Decision   | Intervention and sponsor (validated)                  | Completion Date | Sponsor (CT.gov)           | Type of Comparison | Percent Change VS Control |
| :----------------------------------------------------------------------------------------------------- | :--------- | :---------------------------------------------------- | :-------------- | :------------------------- | :----------------- | :------------------------ |
| DS-8201a in Pre-treated HER2 Breast Cancer That Cannot be Surgically Removed or Has Spread [DESTINY-Breast02] | Strong Buy | fam-trastuzumab deruxtetecan-nxki, Daiichi Sankyo, Inc. | 2022-06-30      | Daiichi Sankyo, Inc. INDUSTRY | Standard of Care   | 258                       |
| Neratinib +/- Fulvestrant in HER2+, ER+ Metastatic Breast Cancer                                       | Strong Sell | Fulvestrant, Meitheal Pharmaceuticals Inc, neratinib, Puma Biotechnology, Inc. | 2021-07-20      | Dana-Farber Cancer Institute OTHER | Standard of Care   | 59                        |
| DS-8201a Versus T-DM1 for Human Epidermal Growth Factor Receptor 2 (HER2)-Positive, Unresectable and/or Metastatic Breast Cancer Previously Treated Wi | Strong Buy | fam-trastuzumab deruxtecan-nxki, Daiichi Sankyo, Inc. | 2021-05-21      | Daiichi Sankyo, Inc. INDUSTRY | Standard of Care   | 347                       |
| Trial of Sacituzumab Govitecan in Participants With Refractory/Relapsed Metastatic Triple-Negative Breast Cancer (TNBC) | Strong Buy | SACITUZUMAB GOVITECAN, Gilead Sciences                | 2020-03-30      | Gilead Sciences INDUSTRY   | Standard of Care   | 329                       |

**Clinical trial design (Life Sciences R&D)**

**Situation:** Designing clinical trials (and external control arms) based on current standards for eligibility and representativeness in a disease area is manual and expensive

**Solution:** Trial Design and External Trial Arms finds the closest trials and arms by patient characteristics to help design trial eligibility criteria, site selection, and external arms.

**Image: TrialBook UI for "Compare potential external control arms across eligibility criteria and patient characteristics."**
*   **Treatments Keywords:** Trastuzumab, Genentech, Inc. (17); Pertuzumab, Genentech, Inc. (12); pembrolizumab, Merck Sharp & Dohme LLC (7); Carboplatin, Meitheal Pharmaceuticals Inc. (6)
*   **Line of Therapy Keywords:** Progression during or after previous adjuvant therapy (30); Prior endocrine therapy (17); Prior AI therapy (9); Prior systemic therapy (7)
*   **Stage / Severity Keywords:** unresectable metastatic (68); recurrent (27); HER2+ (16); ECOG <= 1 (15)
*   **Minimum Age:** 18 Years, 19 Years
*   **Maximum Age:** None, 70 Years, 90 Years
*   **Completion Date Range:** Min: 2017-03-22, Max: 2024-12-01
*   The image shows a scatter plot of "Percent Change VS Control" (Y-axis) against "Completion Date" (X-axis), with various data points representing trials. Due to the small scale and lack of specific labels for each point, individual data point extraction is not feasible from this image. The filter controls and keywords demonstrate the application's functionality.

## Slide 5: Solution

### Solution
In Breast Cancer, we found a strong relationship between strength of results and success

**Scatter Plot: Percent change PFS Treatment versus Control vs Completion Date**

**Phases:**
*   Phase 1
*   Phase 1, Phase 2
*   Phase 2
*   Phase 2, Phase 3
*   Phase 3
*   Phase 4

**Signal:**
*   Strong Positive
*   Positive
*   Negative
*   Strong Negative
*   Neutral

**X-axis:** Completion Date (Apr 2016 to Apr 2022)
**Y-axis:** Percent change PFS Treatment versus Control (0 to 300)

**(Note: Exact data points from the scatter plot are not extractable due to resolution and lack of specific labels. The plot shows a general upward trend for "Strong Positive" and "Positive" signals, and downward/lower values for "Negative" and "Strong Negative" signals, indicating a correlation between the strength of results and PFS improvement.)**

**Table:**

| Title                                                                                                  | Decision   | Intervention and sponsor (validated)                  | Completion Date | Stock price change from week after announcement to present |
| :----------------------------------------------------------------------------------------------------- | :--------- | :---------------------------------------------------- | :-------------- | :--------------------------------------------------------- |
| **1.** DS-8201a in Pre-treated HER2 Breast Cancer That Cannot be Surgically Removed or Has Spread [DESTINY-Breast02] | Strong Buy | fam-trastuzumab deruxtecan-nxki, Daiichi Sankyo, Inc. | 2022-06-30      | +17%                                                       |
| **2.** Neratinib +/- Fulvestrant in HER2+, ER+ Metastatic Breast Cancer                                | Strong Sell | Fulvestrant, Meitheal Pharmaceuticals Inc, neratinib, Puma Biotechnology, Inc. | 2021-07-20      | -80%                                                       |
| **3.** DS-8201a Versus T-DM1 for Human Epidermal Growth Factor Receptor 2 (HER2)-Positive, Unresectable and/or Metastatic Breast Cancer Previously Treated Wi | Strong Buy | fam-trastuzumab deruxtecan-nxki, Daiichi Sankyo, Inc. | 2021-05-21      | +70%                                                       |
| **4.** Trial of Sacituzumab Govitecan in Participants With Refractory/Relapsed Metastatic Triple-Negative Breast Cancer (TNBC) | Strong Buy | SACITUZUMAB GOVITECAN, Gilead Sciences                | 2020-03-30      | -5%*                                                       |

*   Trodelvy has mainly hit market and analyst expectations since these results. Stock movements driven by trends in virology portfolio and market factors.
*   The success of Trodelvy in TNBC has been negatively impacted by Enhertu's better results in the wider HER2-low indication, highlighting the importance of indication by results comparisons

## Slide 6: Go to market strategy

### Go to market strategy (goal to launch in early 2024)

**Biotech / Pharma investors**
Clinical evidence comparison of all pre / post approval therapies by results
*   **Free trial:** Trials up to 2022
*   **Annual price:** $5k per therapeutic area, 1k per disease
*   **2024 goal:** 75 users, 2 TAs per user, $750k revenue

**Digital outreach**
*   [ ] Publication and free trial in oncology for biotech investors
*   [ ] Publication and free trial on breast cancer external control arms for Life Sciences R&D
*   [ ] Highlight new disease every week on LinkedIn, Twitter (10k+ impressions)
*   [ ] Disease focused Google Ads (potential to drive thousands of trials, requires 0.1% conversion rate)

**Life Sciences R&D and CROs**
External control arm app ranks and explores closest comparison arms
*   **Free trial:** Trials in metastatic HER2+ breast cancer
*   **Annual price:** $10k per disease
*   **2024 goal:** 15 users, 2 diseases per user, $300k revenue

**Partnerships**
*   [ ] Publication with McKinsey on overcrowding in oncology R&D based on Clinical Benefit Score
*   [ ] Partnership with McKinsey to co-develop R&D product (potential for 10+ projects)
*   [ ] Partnership with Bain on PE / VC due diligences (potential for 25+ projects)
*   [ ] Build AdBoard of 5 advisors to network in Pharma, Biotech, and PE / VC

**Direct outreach**
*   [ ] Send publication to friendly PharmaCos and set up meetings (J&J, Karuna, Idorsia)
*   [ ] Send publication to friendly biotech investors and set up meetings (Millennium, Coatue, Citadel, Viking)
*   [ ] Reach out to patient advocacy groups about marketing by disease

## Slide 7: Aim to partner with right seed investor(s) to collaborate on growing TrialBook

### Aim to partner with right seed investor(s) to collaborate on growing TrialBook

*   We are raising $400k to help bring this product to market in early 2024
    *   ~10% equity at ~$4M valuation
    *   Flexible to considerations on structure depending on partner goals
*   Proposed use of funds:
    *   $150k: 1 year salary
    *   $100k: Hire and train expert data labelers to create gold-standard dataset of 10-25k trials across diverse diseases, focused on training LLMs to automate full process (independent contractors, ScaleAI, or AmazonTurk)
    *   $75k: Hire software development contractors to support on product roadmap (outsourced software dev. on distinct tasks at ~$5-6k a month)
    *   $75k: other including software costs (AI compute, IT,) customer support solutions, health insurance, legal, travel, digital ads, potential co-founders or recruits
*   Goal to reach 1) end-to-end automation of clinical data collection and 2) $1M ARR with this round of funding
    *   We believe there is an opportunity for our Clinical Benefit Score to become the de facto metric used to assess therapeutic investment candidates

## Slide 8: Appendix

### Appendix

## Slide 9: About me

### About me

**Therapeutics data and clinical analysis experience:** Former Expert in Real World Data (RWD) and Engagement Manager, McKinsey Life Sciences practice (4 years)
*   Developed structured data analytics products in R&D, Medical Affairs, and Commercial Life Sciences
*   Led teams of data scientists and clinical experts to deliver against diverse requirements focused on clinical data analysis
*   Managed development of a software tool that scaled to 15+ pharma orgs (from internal VC funding to dev team of more than 10)

**Startup leadership experience:** Founder and CEO of startup mapping disparities in patient care for pharma.
*   Highly applicable learnings on Biotech and Pharma Enterprise GTM, team building, strategic partnership
*   Partnership with former McKinsey Partner and Chair of Stanford Med School as cofounders
*   Clinical data research experience; Author of *Development of a Novel Clinical Risk Score for COVID-19 Infections* published in American Journal of Medicine, Dec. 2023

**Generative AI and therapeutic financial analysis experience:**
*   Experience creating and tuning LLMs to structure data for various use cases in Life Sciences. Previous open projects include:
    *   tolimanai.com, AI research agent like GPT-4 with Web Browsing
    *   med-coder.com, AI chatbot for finding and learning about medical billing codes
*   Yale Dept. of Computer Science research assistant focused on machine learning (4+ years)
*   Worked at long / short equities hedge fund and investment bank on therapeutic valuation modeling

James Baker

## Slide 10: Clinical trial intelligence market size (1/2)

### Clinical trial intelligence market size (1/2)

Warburg Pincus estimated that the global pharma analytics market was $22 billion (after $2.2B acquisition of Citeline / TrialTrove.) Other estimates of global pharma data and analytics services market are similar ($13B, $15B) with high annual growth.

Excluding real world data and commercialization services (IQVIA RWE, Veeva, sales and marketing consulting,) we estimate that clinical trial intelligence data and analytics comprises ~30% ($7B) of the pharma data and analytics market

More conservatively, excluding analytics and consulting companies, we estimate current clinical data companies grossed approximately $2.5B across the biotech / pharma investors and Life Sciences R&D markets ($300M for investment intelligence)

**Life Sciences clinical trial intelligence market**
Estimates based on market research reports or revenues of top companies (deep dive on page 15)

*   **TAM:** $7.4B consulting / analytics / data services
*   **Current data services market:** $2.5B data services

**Biotech / Pharma investors**
*   **TAM:** $1B consulting / analytics / data services
*   **Current data services market:** $300M clinical trial landscape data company revenue
*   Potential for disruptive product to capture significant share and grow size of biotech investment data market

**Life Sciences R&D and CROs**
*   **TAM:** $6.75B consulting/ analytics / data services
*   **Current data services market:** $2.25B trial design data company revenue
*   Potential for disruptive product to make an impact in a large but competitive R&D trial design market

## Slide 11: Clinical trial intelligence market size (2/2)

### Clinical trial intelligence market size (2/2)

**Biotech / Pharma investors**
TAM: $1B consulting / analytics / data services
Current data services company revenue: $300M clinical trial landscape data
Opportunity for disruptive product to capture and grow biotech / pharma and PE / VC data market

| | Est. clinical landscape data revenue | Est. clinical landscape data revenue share | Est. annual revenue per user | Users (often multiple per company) |
| :---------------------- | :----------------------------------- | :--------------------------------- | :--------------------------- | :--------------------------------- |
| Evaluate Pharma (Norstella) | $100M                                | 33%                                | $30-250k                     | 1k                                 |
| TrialTrove (Norstella)  | $85M                                 | 30%                                | $25k                         | 3k                                 |
| DrugBank                | $15M                                 | 5%                                 | $5k                          | 30k                                |
| AppliedXL               | -                                    | -                                  | $25k                         | -                                  |

**Life Sciences R&D and CROs**
TAM: $6.75B analytics / data services
Current data services company revenue: $2.25B trial design data
Opportunity for valuable product to make an impact in a large but competitive biotech / pharma / CRO R&D market

| | Est. trial design revenue | Est. trial design revenue share | Est. revenue per trial | Trials per year (often multiple per company) |
| :---------------------- | :------------------------ | :------------------------------ | :--------------------- | :------------------------------------------- |
| IQVIA (owns CRO)        | $350M                     | 15%                             | ~$250k-2M              | 300                                          |
| Medidata                | $250M                     | 10%                             | ~$250k-2M              | 225                                          |
| Evidera (acquired by CRO) | $250M                     | 10%                             | ~$250k-2M              | 200                                          |
| ConcertAI               | $75M                      | 4%                              | ~$250k-2M              | 75                                           |

## Slide 12: ~5% of Ph1 and ~15% of Ph2 new drug candidates reach FDA approval

### ~5% of Ph1 and ~15% of Ph2 new drug candidates reach FDA approval

Based on data from CT.gov, Evaluate, and literature reviews, 5% of phase 1 trials reach FDA approval, and fewer than 1% will achieve commercial success exceeding $1B annual sales

**Drug Development Pipeline Success Rates:**

| Stage             | Metric                 | Value    |
| :---------------- | :--------------------- | :------- |
| Phase 1           | ~1k new drug Ph1 annually (historical) | 1000     |
| Phase 2           | ~35% Ph1 success rate  | 350      |
| Phase 3 / 4       | ~27% Ph2 success rate  | 95       |
| Regulatory approval | ~59% approval rate     | 50       |
| Patient / market impact | ~10% exceed $1B peak sales | ~5       |

Opportunity to improve investment decisions with robust Ph1, Ph2, Ph3 data

The biggest determinant of therapeutic success is comparative efficacy and safety (other factors include clinical trial and commercial execution are important as well)

## Slide 13: For approved therapies, early revenue estimates are highly inaccurate...

### For approved therapies, early revenue estimates are highly inaccurate...

**How analyst peak revenue estimates change in years leading up to FDA approval**
(FDA approved therapies 2016-2023, N = 553)

**How different are analyst peak revenue estimates in years leading up to approval from analyst estimates in the year of approval?**
*   50% higher
*   25% higher
*   Within 25%
*   25% lower
*   50% lower

**Stacked Bar Chart Data: Percent of drug predictions by years before or after FDA Approval**

| Years Before or After FDA Approval | N   | 50% higher (%) | 25% higher (%) | Within 25% (%) | 25% lower (%) | 50% lower (%) |
| :--------------------------------- | :-- | :------------- | :------------- | :------------- | :------------ | :------------ |
| -8                                 | 10  | ~15%           | ~10%           | ~5%            | ~15%          | ~55%          |
| -7                                 | 29  | ~10%           | ~5%            | ~10%           | ~15%          | ~60%          |
| -6                                 | 49  | ~8%            | ~5%            | ~15%           | ~12%          | ~60%          |
| -5                                 | 85  | ~7%            | ~5%            | ~10%           | ~12%          | ~66%          |
| -4                                 | 149 | ~6%            | ~5%            | ~15%           | ~10%          | ~64%          |
| -3                                 | 245 | ~5%            | ~8%            | ~10%           | ~12%          | ~65%          |
| -2                                 | 326 | ~5%            | ~10%           | ~20%           | ~15%          | ~50%          |
| -1                                 | 401 | ~5%            | ~10%           | ~35%           | ~15%          | ~35%          |
| 0                                  | 462 | ~0%            | ~0%            | ~100%          | ~0%           | ~0%           |

*Note: Percentages are approximate visual estimations from the bar chart.*

While this chart does not include rejected or delayed drugs, it shows that revenue estimates for approved drugs are often too low (or too high.) In addition, timing estimates are delayed on average 2.5 years from analyst expectations.