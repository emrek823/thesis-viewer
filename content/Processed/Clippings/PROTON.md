---
title: "PROTON"
source: "https://www.protonmodel.ai/"
published:
created: 2025-12-16
description: "Graph AI generates neurological hypotheses validated in molecular, organoid, and clinical systems"
tags:
  - "clippings"
---
## Graph AI generates neurological hypotheses validated in molecular, organoid, and clinical systems

[Code](https://github.com/mims-harvard/PROTON) [Model](https://huggingface.co/mims-harvard/PROTON)

[Ayush Noori](https://orcid.org/0000-0003-1420-1236) <sup>1,2,3,4,5,6,7</sup>, [Joaquin Polonuer](https://orcid.org/0009-0007-8613-6126) <sup>1</sup>, [Katharina Meyer](https://orcid.org/0000-0001-9051-1354) <sup>2,5,8</sup>, [Bogdan Budnik](https://orcid.org/0000-0003-3622-2003) <sup>2,5</sup>, [Shad Morton](https://orcid.org/0009-0003-1233-3785) <sup>2,5</sup>, [Xinyuan Wang](https://orcid.org/0000-0002-3107-8359) <sup>6,9</sup>, [Sumaiya Nazeen](https://orcid.org/0000-0002-6313-6357) <sup>6,9</sup>, [Yingnan He](https://orcid.org/0009-0003-6082-3893) <sup>3</sup>, [Iñaki Arango](https://orcid.org/0009-0002-1443-2325) <sup>1</sup>, Lucas Vittor <sup>1</sup>, [Matthew Woodworth](https://orcid.org/0009-0008-8255-6817) <sup>2,5,8</sup>, [Richard C. Krolewski](https://orcid.org/0000-0001-5974-079X) <sup>6,9</sup>, [Michelle M. Li](https://orcid.org/0000-0003-0223-7485) <sup>1,6</sup>, [Ninning Liu](https://orcid.org/0000-0002-8398-9584) <sup>2,5</sup>, Tushar Kamath <sup>10</sup>, [Evan Macosko](https://orcid.org/0000-0002-2794-5165) <sup>10</sup>, [Dylan Ritter](https://orcid.org/0000-0002-8704-908X) <sup>6,11</sup>, [Jalwa Afroz](https://orcid.org/0009-0007-5186-6401) <sup>6,11</sup>, Alexander B. H. Henderson <sup>3,6</sup>, [Lorenz Studer](https://orcid.org/0000-0003-0741-7987) <sup>6,11</sup>, [Samuel G. Rodriques](https://orcid.org/0000-0002-2509-0861) <sup>12</sup>, [Andrew White](https://orcid.org/0000-0002-6647-3965) <sup>12</sup>, [Noa Dagan](https://orcid.org/0000-0001-8811-7825) <sup>7,13,14</sup>, [David A. Clifton](https://orcid.org/0000-0002-9848-8555) <sup>4,15</sup>, [George M. Church](https://orcid.org/0000-0001-6232-9969) <sup>2,5,8</sup>, [Sudeshna Das](https://orcid.org/0000-0002-9486-6811) <sup>3</sup> <sup>†</sup>, [Jenny M. Tam](https://orcid.org/0000-0002-3767-7205) <sup>2,5,8</sup> <sup>†</sup>, [Vikram Khurana](https://orcid.org/0000-0002-4018-5527) <sup>6,9,10,16</sup> <sup>†</sup>, [Marinka Zitnik](https://orcid.org/0000-0001-8530-7228) <sup>1,6,7,10,17,18</sup> <sup>†</sup>

---

## Introduction

Neurological diseases are the leading global cause of disability, yet most lack disease-modifying treatments. To help address this gap, we developed PROTON, a graph AI model that generates hypotheses for neurological disease.

We demonstrate diverse disease-specific applications of PROTON using experimental and clinical data in three neurological conditions: Parkinson's disease (PD), bipolar disorder (BD), and Alzheimer's disease (AD). PROTON nominates candidate drugs, forecasts drug approvals, prioritizes pesticides, and identifies genetic, proteomic, and protein–protein interaction links across multiple biological scales.

![Figure-1](https://www.protonmodel.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffigure-1.2c477c3c.webp&w=640&q=50&dpl=dpl_BZVkuiavu296MRpZSnGWT6SvseH8)

Figure 1: Overview of PROTON. PROTON is a graph AI model for neurological disease. (a) We demonstrate diverse disease-specific applications of PROTON using experimental and clinical data in three neurological conditions: Parkinson's disease (PD), bipolar disorder (BD), and Alzheimer's disease (AD). PROTON nominates candidate drugs, forecasts drug approvals, prioritizes pesticides, and identifies genetic, proteomic, and protein–protein interaction links across multiple biological scales. (b) To develop PROTON, we first constructed NeuroKG, a heterogeneous biomedical knowledge graph with 147,020 nodes (16 types) and 7,366,745 edges (47 types). Diseases have unique connectivity patterns in NeuroKG; for example, 200 type-balanced neighbors from the two-hop neighborhoods of PD, BD, and AD are shown on a single shared layout. The one-hop neighborhood of each disease node is rendered in full color; two-hop and out-of-neighborhood nodes are rendered faintly. (c) We pre-trained a 578-million-parameter heterogeneous graph transformer (HGT) on NeuroKG with a self-supervised link-prediction objective. Node and edge type-aware multi-head attention enabled neighborhood integration across modalities.

PROTON is a 578-million-parameter heterogeneous graph transformer contextualized to the human brain. PROTON was trained on NeuroKG using a self-supervised link prediction objective. NeuroKG is a biomedical knowledge graph that unifies 36 human datasets and ontologies, and integrates single-nucleus RNA-sequencing atlases comprising 3,756,702 cells from the adult human brain. The training data contained 147,020 nodes across 16 entity types and 7,366,745 edges across 47 relation types. Through Bayesian hyperparameter optimization, we selected a model architecture that achieved high link-prediction performance (AUROC = 0.9145; accuracy = 82.23%) on an independent test set.

## Evaluations of AI predictions in molecular, organoid, and clinical systems

Genome-wide α-synuclein experiments

Human patient-derived brain organoids

Health records from 610,524 patients

## Evaluations of AI predictions in molecular, organoid, and clinical systems

### Parkinson’s disease

Genome-wide α-synuclein experiments

In PD, PROTON linked genetic risk loci to genes essential for dopaminergic neuron survival and predicted pesticides toxic to patient-derived neurons, including the insecticide Naled, which ranked within the top 6.75% of predictions. *In silico* screens performed by PROTON reproduced six genome-wide $\alpha$ -synuclein experiments, including a split-ubiquitin yeast two-hybrid system (normalized enrichment score \[NES\] = 2.30, FDR-adjusted $p < 1 \times 10^{-4}$ ), an ascorbate peroxidase proximity labeling assay (NES = 2.16, FDR $< 1 \times 10^{-4}$ ), and a high-depth targeted deep sequencing study in 496 synucleinopathy patients (NES = 2.13, FDR $< 1 \times 10^{-4}$ ).

![Figure-2](https://www.protonmodel.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffigure-2.c1b38446.webp&w=640&q=50&dpl=dpl_BZVkuiavu296MRpZSnGWT6SvseH8)

Figure 2: PROTON prioritizes genes and pesticides linked to Parkinson's disease. (a) PROTON conducted three proteome-scale in silico screens: genetic relationship with PD, protein–protein interaction with α \\alpha -synuclein, and a combined prediction. (b) PROTON predictions were compared to six genome-wide experimental -synuclein studies. (c) Gene set enrichment analysis (GSEA) demonstrated that PROTON predictions were significantly enriched for experimental hits, outperforming a graph random walk baseline. Results are grouped by experiment class: -synuclein interactome profiling or -synuclein genetic studies in humans or disease models. N.S. = not significant. (d) We compiled 288 PD GWAS-linked genes across multiple genetic study types and contrasted them against 8,976 GWAS hits from 10 other diseases. (e) An unbiased whole-genome CRISPR screen in human midbrain dopaminergic (DA) neurons identified genes essential for neuronal survival. (f) For each essential gene, PROTON performed a proteome-wide screen to rank likely protein–protein interactors; the median rank of disease GWAS hits showed the strongest association for PD compared with other diseases. (g) For 14 essential genes enriched in autophagy regulation and previously implicated in PD by NERINE, an independent network-based method for rare variant burden analysis, PROTON's minimum PD GWAS association rank per gene was compared to an empirical null, highlighting EXOC4 and HAX1. (h) Fine-tuning dataset constructed from the Parkinson’s Environment and Genes (PEG) study ( n 829 n=829 PD patients and 824 n=824 controls), comprising 28 pesticides linked to PD and 100 negative samples. (i) The held-out test dataset consisted of four pesticides toxic to iPSC-derived midbrain DA neurons from a PD patient. (j) Schematic of the PROTON pesticide prediction pipeline. (k) PROTON prioritized pesticides toxic to patient-derived dopaminergic neurons, including endosulfan, dicofol, Naled, and copper sulfate.

### Bipolar disorder

Human patient-derived brain organoids

In BD, PROTON nominated calcitriol as a candidate drug that reversed proteomic alterations observed in cortical organoids derived from BD patients.

![Figure-3](https://www.protonmodel.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffigure-3.0a352ad0.webp&w=640&q=50&dpl=dpl_BZVkuiavu296MRpZSnGWT6SvseH8)

Figure 3: PROTON-nominated drug reverses proteomic alterations in patient-derived organoid models of bipolar disorder. (a) For each of 17 neurological diseases, we constructed disease-centric data splits by withholding drug information from the training set for the disease of interest and all related diseases. An example disease-centric data split is shown for BD. (b) Across 17 neurological diseases, PROTON demonstrates strong performance at recovering drugs that are FDA approved, in late-stage clinical trials, or prescribed off-label, as measured by macro-averaged recall ( R ) at k. (c) PROTON highlighted calcitriol as a candidate therapeutic for BD. (d) Human cortical organoids derived from BD patients and healthy controls were treated with calcitriol, followed by deep proteomic profiling. (e–f) Volcano plots show differentially expressed proteins (DEPs) in BD versus control organoids (512 DEPs, p < 0.05) and in BD versus drug-treated BD organoids (633 DEPs, < 0.05). (g) Expression levels of 73 proteins dysregulated in BD organoids were normalized by calcitriol treatment, as demonstrated by the unsupervised clustering of calcitriol-treated BD organoids with control organoids versus untreated BD organoids. (h) Key pathways affected by calcitriol treatment include metabolism and protein homeostasis, RNA processing, and synaptic adhesion. (i) Comparative proteomics revealed both distinct and overlapping proteomic effects of calcitriol and lithium in patient-derived organoids.

### Alzheimer’s disease

Health records from 610,524 patients

In AD, we evaluated PROTON predictions in electronic health records from $n$ = 610,524 patients at Mass General Brigham, confirming that five PROTON-predicted drugs were associated with reduced seven-year dementia risk (minimum hazard ratio = 0.63, 95% CI: 0.53–0.75, $p < 1 \times 10^{-7}$ ).

![Figure-4](https://www.protonmodel.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffigure-4.59b559b3.webp&w=640&q=50&dpl=dpl_BZVkuiavu296MRpZSnGWT6SvseH8)

Figure 4: PROTON predicts drugs that reduce the risk of Alzheimer's disease and related dementias in EHR analyses of 610,525 patients. (a) To evaluate PROTON drug repurposing predictions, we conducted retrospective analyses of Mass General Brigham health records data across n = 610,524 patients. For each candidate drug, patients with the relevant primary indication were divided into treatment and control cohorts. We compared ADRD-free survival between cohorts using Cox proportional hazards models with inverse probability treatment weighting for age and sex. (b) Five of eight model-predicted drugs were significantly associated with reduced ADRD risk ( p < 0.05). The other three drugs neither significantly increased nor decreased risk ( > 0.05). (c) Cohort sizes for treatment and control groups across retrospective EHR analyses. (d) Cox hazard ratios and -values. (e–g) Kaplan–Meier survival curves show reduced ADRD incidence for aflibercept, dapagliflozin, and valsartan. Log-rank -values and χ 2 \\chi^2 statistics are reported.

## Citation

```
@article{
    noori_graph_2025,
    title={Graph AI generates neurological hypotheses validated in molecular, organoid, and clinical systems},
    author={Noori, Ayush and Polonuer, Joaquin and Meyer, Katharina and Budnik, Bogdan and Morton, Shad and Wang, Xinyuan and Nazeem, Sumaiya and He, Yingnan and Arango, Iñaki and Vittor, Lucas and Woodworth, Matthew and Krolewski, Richard C. and Li, Michelle M. and Liu, Ninning and Kamath, Tushar and Macosko, Evan and Ritter, Dylan and Afroz, Jalwa and Henderson, Alexander B. H. and Studer, Lorenz and Rodriques, Samuel G. and White, Andrew and Dagan, Noa and Clifton, David A. and Church, George M. and Das, Sudeshna and Tam, Jenny M. and Khurana, Vikram and Zitnik, Marinka},
    journal={arXiv preprint},
    note={arXiv:XXXX.XXXXX (placeholder)},
    year={2025}
}
```

## Team

[Ayush Noori](https://ayushnoori.com/), [Joaquin Polonuer](https://orcid.org/0009-0007-8613-6126), [Katharina Meyer](https://orcid.org/0000-0001-9051-1354), [Bogdan Budnik](https://orcid.org/0000-0003-3622-2003), [Shad Morton](https://orcid.org/0009-0003-1233-3785), [Xinyuan Wang](https://orcid.org/0000-0002-3107-8359), [Sumaiya Nazeen](https://orcid.org/0000-0002-6313-6357), [Yingnan He](https://orcid.org/0009-0003-6082-3893), [Iñaki Arango](https://ara.ngo/), [Lucas Vittor](https://lucasvittor.com/), [Matthew Woodworth](https://orcid.org/0009-0008-8255-6817), [Richard C. Krolewski](https://orcid.org/0000-0001-5974-079X), [Michelle M. Li](https://michellemli.com/), [Ninning Liu](https://orcid.org/0000-0002-8398-9584), [Tushar Kamath](https://scholar.google.com/citations?user=8jsWN7sAAAAJ), [Evan Macosko](https://orcid.org/0000-0002-2794-5165), [Dylan Ritter](https://orcid.org/0000-0002-8704-908X), [Jalwa Afroz](https://orcid.org/0009-0007-5186-6401), [Alexander B. H. Henderson](https://www.linkedin.com/in/alex-henderson-ph-d-2885b2114/), [Lorenz Studer](https://orcid.org/0000-0003-0741-7987), [Samuel G. Rodriques](https://orcid.org/0000-0002-2509-0861), [Andrew White](https://orcid.org/0000-0002-6647-3965), [Noa Dagan](https://orcid.org/0000-0001-8811-7825), [David A. Clifton](https://orcid.org/0000-0002-9848-8555), [George M. Church](https://orcid.org/0000-0001-6232-9969), [Sudeshna Das](https://orcid.org/0000-0002-9486-6811), [Jenny M. Tam](https://orcid.org/0000-0002-3767-7205), [Vikram Khurana](https://orcid.org/0000-0002-4018-5527), [Marinka Zitnik](https://zitniklab.hms.harvard.edu/)