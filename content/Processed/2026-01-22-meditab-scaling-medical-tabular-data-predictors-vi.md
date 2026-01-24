---
url: https://www.ijcai.org/proceedings/2024/670
title: "MediTab: Scaling Medical Tabular Data Predictors via Data Consolidation, Enrichment, and Refinement | IJCAI"
clipped: 2026-01-22 13:28
source: browser-history
---

# MediTab: Scaling Medical Tabular Data Predictors via Data Consolidation, Enrichment, and Refinement | IJCAI

> Source: [https://www.ijcai.org/proceedings/2024/670](https://www.ijcai.org/proceedings/2024/670)

# MediTab: Scaling Medical Tabular Data Predictors via Data Consolidation, Enrichment, and Refinement

# MediTab: Scaling Medical Tabular Data Predictors via Data Consolidation, Enrichment, and Refinement

## Zifeng Wang, Chufan Gao, Cao Xiao, Jimeng Sun

![](/sites/default/files/proceedings_images/p24.png)

Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence

Main Track. Pages 6062-6070.
<https://doi.org/10.24963/ijcai.2024/670>

[PDF](https://www.ijcai.org/proceedings/2024/0670.pdf) 
 [BibTeX](/proceedings/2024/bibtex/670)

---

Tabular data prediction has been employed in medical applications such as patient health risk prediction. However, existing methods usually revolve around the algorithm design while overlooking the significance of data engineering. Medical tabular datasets frequently exhibit significant heterogeneity across different sources, with limited sample sizes per source. As such, previous predictors are often trained on manually curated small datasets that struggle to generalize across different tabular datasets during inference. This paper proposes to scale medical tabular data predictors (MediTab) to various tabular inputs with varying features. The method uses a data engine that leverages large language models (LLMs) to consolidate tabular samples to overcome the barrier across tables with distinct schema. It also aligns out-domain data with the target task using a "learn, annotate, and refinement'' pipeline. The expanded training data then enables the pre-trained MediTab to infer for arbitrary tabular input in the domain without fine-tuning, resulting in significant improvements over supervised baselines: it reaches an average ranking of 1.57 and 1.00 on 7 patient outcome prediction datasets and 3 trial outcome prediction datasets, respectively. In addition, MediTab exhibits impressive zero-shot performances: it outperforms supervised XGBoost models by 8.9% and 17.2% on average in two prediction tasks, respectively.

Keywords:

Multidisciplinary Topics and Applications: MTA: Health and medicine

Multidisciplinary Topics and Applications: MTA: Bioinformatics

Multidisciplinary Topics and Applications: MTA: Life sciences