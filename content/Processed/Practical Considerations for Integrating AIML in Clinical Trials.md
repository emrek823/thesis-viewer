---
title: "Practical Considerations for Integrating AI/ML in Clinical Trials"
source: "https://asabiopreport.substack.com/p/practical-considerations-for-integrating"
published: 2025-12-17
created: 2025-12-19
description: "Ye Li (FDA)"
tags:
  - "clippings"
---
### Ye Li (FDA)

---

**Disclaimer:** The views and opinions expressed in this paper are those of the author and do not necessarily reflect the views or positions of U.S. Food and Drug Administration.

---

![](https://substackcdn.com/image/fetch/$s_!xDe2!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2a0924a2-be9f-40a0-a820-74e52a624c2a_411x516.png)

---

**Highlights:**

· PROCOVA represents an example of AI integration in clinical trials.

· Successful AI/ML implementation involves careful evaluation of external data comparability, balancing model complexity with interpretability.

---

**Introduction**

The rapid advancement of artificial intelligence (AI) and machine learning (ML) offers unique opportunities to enhance the design and conduct of clinical trials. While these technologies are not intended to replace traditional methodologies, they can be thoughtfully integrated to improve efficiency, precision, and interpretability. Recent developments, such as the PROCOVA approach, illustrate this potential. PROCOVA uses AI-derived prognostic scores to adjust for covariates, enhancing treatment effect estimation even when external data differ from the current trial setting. The method has been qualified by the European Medicines Agency (EMA) and acknowledged by the U.S. Food and Drug Administration (FDA), demonstrating growing regulatory openness to AI-informed methodologies. \[1,2\].

Despite this progress, practical implementation remains challenging. Issues such as data quality, comparability of external sources, model transparency, and interpretability remain central concerns. Moreover, ensuring that AI-driven approaches meet regulatory standards for validity and reproducibility is critical. This paper presents pragmatic insights for researchers, statisticians, and regulators on the integration of AI/ML methods in clinical trials, encompassing considerations for PROCOVA implementation, external data utilization, and the evaluation and interpretability of models. The following sections elaborate on these key considerations, beginning with the application of PROCOVA as a practical example of AI/ML integration in clinical trials.

**Considerations for PROCOVA**

PROCOVA can be conceptualized as an advanced application of covariate adjustment, same as analysis of covariance (ANCOVA). It uses AI-derived prognostic scores as covariates to enhance treatment effect estimation and maintain validity even when external data differ from the current trial setting \[1\]. An enhanced variant, PROCOVA-MMRM, further incorporates time-matched prognostic scores for longitudinal continuous outcomes, improving precision and potentially enabling sample size reduction \[3\]. In practice, however, translating these analytical gains into study design requires caution. When incorporating covariate adjustment into sample size calculations, a conservative estimation approach is recommended due to several sources of uncertainty. The correlation between the prognostic score and the outcome may be weaker than anticipated, reducing the expected efficiency gains. Historical data used to inform the model may have limited relevance to the current study population or setting, thereby affecting generalizability. In addition, the statistical assumptions underlying the prognostic model may not hold in practice, potentially undermining its performance. Finally, variability in the prognostic score may be lower than expected based on historical data, further diminishing the anticipated benefit of covariate adjustment.

**Considerations for External Data**

When incorporating external data (e.g., for prognostic modeling), careful evaluation of comparability is essential. FDA guidance on externally controlled trials highlights key areas to assess: demographic similarities, endpoint consistency, timing of follow-up, missingness, and mitigation of immortal time bias \[4\]. ICH E10 further clarifies differences between internal and external controls \[5\]. Robust modeling practices include splitting external data into distinct training and testing subsets and ensuring adequate sample size to avoid overfitting or inappropriate modeling assumptions \[6\]. Beyond data comparability, appropriate handling of missing data is another critical component of model reliability. Imputation approaches must be both statistically sound and clinically meaningful. For example, imputing age via group average may be acceptable statistically, but its clinical plausibility must be justified and documented \[8\].

**Model Selection, Evaluation, and Interpretability**

Complex AI models (e.g., neural networks) may offer high accuracy but are often opaque. In contrast, simpler models such as random forests provide greater interpretability and can be more easily visualized for clinical stakeholders. Choosing between them involves evaluating stakeholder needs, regulatory expectations, and clinical relevance \[7\]. Once an appropriate modeling approach is selected, careful evaluation becomes essential to ensure that model performance aligns with its intended clinical purpose. Selecting evaluation metrics should reflect both the model’s architecture and the underlying clinical question. There is no universal metric, so alignment with intended use is critical. When merging external datasets (e.g., from different Alzheimer’s disease cohorts), differences in diagnostic or rating standards must be critically examined before pooling \[3,6\].

**Conclusion**

AI and ML can serve as powerful complements to traditional clinical trial methodologies when applied thoughtfully. Regulatory precedents such as EMA’s qualification of PROCOVA and FDA’s acknowledgment reinforce the feasibility of this integration \[1,2\]. Building on this foundation, the continued advancement of AI/ML in clinical research will increasingly depend on multidisciplinary collaboration among statisticians, clinicians, data scientists, and regulators. Ultimately, the path forward lies not in replacing traditional methodologies but in harmonizing innovation with regulatory and clinical principle, ensuring that AI/ML enhances the credibility, efficiency, and impact of clinical trials in the years to come.

**References**

1\. European Medicines Agency. Qualification opinion: PROCOVA (Prognostic Covariate Adjustment). EMA/CHMP/SAWP/400455/2020. 2020.

2\. U.S. Food and Drug Administration. Comments on Unlearn’s PROCOVA Methodology. 2021. Available at: https://www.unlearn.ai.

3\. Lim R, Zhang Z, Muralidhar S, et al. PROCOVA-MMRM: Incorporating time-matched prognostic scores for longitudinal continuous outcomes. arXiv preprint arXiv:2404.17576. 2024.

4\. U.S. Food and Drug Administration. Considerations for the Design and Conduct of Externally Controlled Trials for Drug and Biological Products. Draft Guidance. 2023.

5\. International Council for Harmonisation (ICH). ICH E10: Choice of Control Group and Related Issues in Clinical Trials. 2000.

6\. Pocock SJ, et al. The use of external data in the design and analysis of randomized clinical trials. Stat Med. 2022;41(6):1114–1130.

7\. Rudin C. Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead. Nat Mach Intell. 2019;1:206–215.

8\. Sterne JAC, et al. Multiple imputation for missing data in epidemiological and clinical research: potential and pitfalls. BMJ. 2009;338:b2393.