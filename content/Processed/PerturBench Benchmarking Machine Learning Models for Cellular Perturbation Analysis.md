---
title: "PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis"
source: "https://arxiv.org/html/2408.10609v4"
published:
created: 2025-12-16
description:
tags:
  - "clippings"
processed: 2025-12-16
themes:
  - drug-discovery
  - benchmarking
  - foundation-models
---
arXiv:2408.10609v4 \[cs.LG\] 24 Oct 2025

Yan Wu <sup>1</sup>, Esther Wershof <sup>1</sup> <sup>1</sup> <sup>1</sup> footnotemark: 1, Sebastian M Schmon <sup>1</sup> <sup>1</sup> footnotemark: 1, Marcel Nassar <sup>1</sup> <sup>1</sup> <sup>1</sup> footnotemark: 1, Błażej Osiński <sup>1</sup> <sup>1</sup> footnotemark: 1 <sup>2</sup> <sup>2</sup> footnotemark: 2,  
Ridvan Eksi <sup><span>1</span></sup> <sup>1</sup> <sup>1</sup> footnotemark: 1,Zichao Yan <sup><span>1</span></sup> <sup>1</sup> <sup>1</sup> footnotemark: 1,Rory Stark <sup><span>1</span></sup>,Kun Zhang <sup><span>1</span></sup>,Thore Graepel <sup><span>2</span></sup> <sup>2</sup> <sup>2</sup> footnotemark: 2  
<sup>1</sup> Altos Labs    <sup>2</sup> University College London  
Equal contribution. Correspondence to ywu@altoslabs.com.Work done while at Altos Labs {ewershof, mnassar, reksi, zyan, rstark, kzhang}@altoslabs.com  
sebastian.schmon@gmail.com, b.osinski@mimuw.edu.pl, t.graepel@ucl.ac.uk

###### Abstract

We introduce a comprehensive framework for modeling single cell transcriptomic responses to perturbations, aimed at standardizing benchmarking in this rapidly evolving field. Our approach includes a modular and user-friendly model development and evaluation platform, a collection of diverse perturbational datasets, and a set of metrics designed to fairly compare models and dissect their performance. Through extensive evaluation of both published and baseline models across diverse datasets, we highlight the limitations of widely used models, such as mode collapse. We also demonstrate the importance of rank metrics which complement traditional model fit measures, such as RMSE, for validating model effectiveness. Notably, our results show that while no single model architecture clearly outperforms others, simpler architectures are generally competitive and scale well with larger datasets. Overall, this benchmarking exercise sets new standards for model evaluation, supports robust model development, and furthers the use of these models to simulate genetic and chemical screens for therapeutic discovery.

## 1 Introduction

Perturbing biological systems, such as cells, using small molecules and genetic modifications can help researchers to uncover causal drivers of diseases and identify potential therapeutic targets [^9]. Advances in CRISPR technology and lab automation have enabled these experiments, which we refer to as perturbation screens, to be conducted at scale with up to hundreds of thousands of perturbations applied in parallel in a single experiment [^49]. These perturbation screens have been combined with modern RNA-sequencing technology to measure gene expression profiles at single cell resolution, creating atlases of cellular snapshots that reveal perturbation effects [^35].

However, measuring the perturbation effects of all roughly $20,000$ protein coding genes or $10^{60}$ drug-like chemicals remains prohibitively expensive, especially when taking into account combinations of perturbations and different tissues, cell types, and cell lines [^43]. As a result, there has been a growing interest in generative machine learning approaches that can predict the effects of perturbations on gene expression.

Specifically, researchers have developed models that can generate counterfactual, out of sample (oos) predictions of perturbation effects [^19]. One use case, which we call covariate transfer, involves training a model on perturbation effects measured in a set of covariates (e.g., cell lines) and predicting those effects in another covariate where the perturbation-covariate pairs have not been observed. combo prediction involves training a model on individual perturbation effects and predicting the effects of multiple perturbations in combination. The ultimate goal is to enable in-silico screens across the vast space of unobserved perturbations to accelerate therapeutic discovery.

##### Related Works

Comparing the performance of published models has been challenging due to inconsistent benchmarks with different datasets and metrics. The sc-perturb database provides datasets with unified metadata, but does not benchmark models [^40]. The NeurIPS 2023 perturbation prediction challenge [^53] was a major achievement in standardizing benchmarks, providing a novel chemical perturbation dataset with scRNA-seq readouts measured in PBMCs. The challenge used the covariate transfer task, with metrics including mean RMSE, MAE, and cosine similarity of predicted vs ground truth log p-values. The challenge attracted a large number of submissions, many of which were inspired by published models such as chemCPA [^53].

[^3], [^56], [^12], and [^58] evaluate single-cell foundation models (scFM) such as scGPT, scFoundation, scBERT, Geneformer and UCE, in the context of perturbation response modeling. These studies focus on how these general-purpose models can be fine-tuned for this task, using task-specific models such as GEARS, CPA as well as other baselines (e.g., mean prediction, kNN, random forest, linear models) to highlight the limitations of scFMs for this task. Notably, [^58] used our baseline models and rank metric to establish the performance of scGPT and GEARS. These works mostly use well-known model fit metrics such as RMSE/MSE and Pearson correlation between averaged predicted and ground truth expression profiles (Pearson Delta, Pearson LogFC). [^56] also proposed various distributional metrics, including E-distance, which is equivalent to our energy distance based MMD metric.

[^27] systematically assessed a wide array of perturbation response prediction models, with a focus on models that use gene regulatory networks as a form of prior knowledge. A central finding of their work was that simple baselines often matched or outperformed more sophisticated models such as GEARS and Geneformer, which confirm the robust performance of simple approaches in this domain. Recent works by [^30] and [^31] provide more comprehensive benchmarks of a large set of deep learning models across diverse datasets and metrics. Beyond conventional evaluation, their work introduces novel tasks, such as unseen perturbation/covariate transfer [^30] and cell state transition prediction [^30]. Notably, while scFMs can excel on unseen perturbation prediction, simpler models often show better performance in the unseen covariate prediction [^30].

##### Contributions

In this work, we (1) introduce a highly modular and user-friendly framework in the form of a codebase (Perturbench) for model development and evaluation, (2) curate diverse perturbational datasets and define biologically relevant tasks, (3) develop metrics that enable rigorous model comparison and capture key failure modes, and (4) perform extensive evaluation of published perturbation models, strong baselines, and individual model components. Figure [1](https://arxiv.org/html/2408.10609v4#S1.F1 "Figure 1 ‣ Contributions ‣ 1 Introduction ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") illustrates our approach.

We reproduce key components of published models that cover a spectrum of architectures, and evaluate them alongside strong baseline models. We specifically test the models on difficult tasks, simulating how they will be deployed in real-life contexts. Our findings reveal that some widely used models are prone to “mode” or “posterior” collapse (see Appendix [C.7](https://arxiv.org/html/2408.10609v4#A3.SS7 "C.7 Collapse and Rank Metrics ‣ Appendix C Further Results ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") for more details). Since a common use-case of these models is to run in-silico screens that rank perturbations by a desired effect (e.g. reversing a disease state) [^55], we propose rank metrics complementary to traditional measures of model fit (e.g. root mean squared error (RMSE)) that specifically assess the models’ ability to accurately order perturbations and detect model collapse. In addition, we demonstrate that models with simple architectures can outperform more sophisticated models when trained on larger datasets.

We anticipate that our codebase, together with this benchmark and the accompanying metrics, will serve as a valuable framework for the community to develop more robust perturbation response prediction models. The PerturBench library can be found on GitHub at [https://github.com/altoslabs/perturbench/](https://github.com/altoslabs/perturbench/).

![Refer to caption](https://arxiv.org/html/x1.png)

Figure 1: A ) Single cell perturbational datasets at multiple scales. B ) Biologically relevant covariate transfer and combinatorial prediction data splits. C ) Dataloaders support two training strategies: 1) control matching which involves mapping a control cell to a perturbed cell and 2) disentanglement which maps a perturbed cell to itself. D ) A model zoo with modular components such as relevant baseline models, adversarial loss, perturbation sparsity, and others. E ) Standardized benchmarking suite supporting flexible pipelines and metrics for evaluating models

## 2 Datasets and Tasks

Many published models have been evaluated on relatively small datasets, where most of the data are seen in the train split. However, in real-world settings, we often have complex datasets that only contain a small fraction of the perturbation effects we are interested in predicting. Thus, we select datasets and create tasks that mirror these real-world challenges. We select six published datasets, [^38], [^51], [^18], [^37], [^23], and [^53] (OP3) which include at least 100 perturbations and cover a diversity of perturbation modalities (chemical vs genetic), combinatorial perturbations, dataset sizes, and covariates. We provide a cursory overview in Table [1](https://arxiv.org/html/2408.10609v4#S2.T1 "Table 1 ‣ 2 Datasets and Tasks ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") and more information in Appendix [D.1](https://arxiv.org/html/2408.10609v4#A4.SS1 "D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis"). Here, we define a biological state as a unique set of covariates that we plan to model (e.g. cell type/line). Dataset preprocessing details can be found in Appendix [D.3](https://arxiv.org/html/2408.10609v4#A4.SS3 "D.3 Dataset Preprocessing ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis").

Table 1: Summary of benchmarking datasets.

| Dataset | Single | Dual | Modality | Primary | Biological | Cells | Task |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | pert. | pert. |  | cells | states |  |  |
| [Srivatsan20](https://arxiv.org/html/2408.10609v4#Thmdataset2 "Dataset 2 (Srivatsan20) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") | 188 | 0 | chemical | ✗ | 3 | 178,213 | covariate transfer |
| [Frangieh21](https://arxiv.org/html/2408.10609v4#Thmdataset3 "Dataset 3 (Frangieh21) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") | 248 | 0 | genetic | ✗ | 3 | 218,331 | covariate transfer |
| [Jiang24](https://arxiv.org/html/2408.10609v4#Thmdataset4 "Dataset 4 (Jiang24) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") | 219 | 0 | genetic | ✗ | 30 | 1,628,476 | covariate transfer |
| [McFalineFigueroa23](https://arxiv.org/html/2408.10609v4#Thmdataset5 "Dataset 5 (McFalineFigueroa23) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") | 525 | 0 | genetic | ✗ | 15 | 892,800 | covariate transfer |
| [Norman19](https://arxiv.org/html/2408.10609v4#Thmdataset1 "Dataset 1 (Norman19) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") | 155 | 131 | genetic | ✗ | 1 | 91,168 | combo prediction |
| [OP3](https://arxiv.org/html/2408.10609v4#Thmdataset6 "Dataset 6 (OP3) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") | 144 | 0 | chemical | ✓ | 4 | 296,147 | covariate transfer |

We create covariate transfer tasks for the [Srivatsan20](https://arxiv.org/html/2408.10609v4#Thmdataset2 "Dataset 2 (Srivatsan20) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis"), [Frangieh21](https://arxiv.org/html/2408.10609v4#Thmdataset3 "Dataset 3 (Frangieh21) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis"), [Jiang24](https://arxiv.org/html/2408.10609v4#Thmdataset4 "Dataset 4 (Jiang24) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") and [OP3](https://arxiv.org/html/2408.10609v4#Thmdataset6 "Dataset 6 (OP3) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") datasets as well as a combo prediction task for the [Norman19](https://arxiv.org/html/2408.10609v4#Thmdataset1 "Dataset 1 (Norman19) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset. In addition, we study two scenarios: data scaling and imbalanced data. In the former, we benchmark model performance with increasing training data. In the latter, we simulate increasing the imbalance of perturbations observed in different covariates. Details of the experiments are in sections [5.3](https://arxiv.org/html/2408.10609v4#S5.SS3 "5.3 Effect of Data Scaling ‣ 5 Experiments ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") and [C.6](https://arxiv.org/html/2408.10609v4#A3.SS6 "C.6 Effect of Data Imbalance ‣ Appendix C Further Results ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") respectively. The aim of both scenarios is to simulate how models will be deployed in practice, where there are often complex covariates, imbalanced datasets, and/or large amounts of missing data [^16]. Additional details about data splitting implementation can be found in the Appendix [D.4](https://arxiv.org/html/2408.10609v4#A4.SS4 "D.4 Data Splitting ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis").

## 3 Perturbation Prediction Models

### 3.1 Modeling counterfactuals

Perturbation response models aim to predict out-of-sample effects of genetic or chemical interventions on cells. Here, we define out of sample as predicting effects in unobserved covariates or unobserved perturbation combinations. However, RNA sequencing technology destroys the cell, making it impossible to observe its gene expression state before and after perturbation. Published models use two main strategies to learn representations of perturbation effects: *matching methods* to match control and perturbed cells, or *disentanglement* strategies within autoencoder architectures to separate the effects of perturbations from the baseline cell state.

##### Matched Controls

Matching treated outcomes to controls is a common approach to identify treatment effects [^52]. In the context of perturbation effect prediction, matching control and perturbed cells has been used by a variety of published models such as GEARS [^46], scGPT [^13], and scFoundation [^20]. For the matching approach, ensuring that the control cell is from the same cell type/line, experiment or batch as the perturbed cells helps reduce potential confounding effects, but cannot account for unobserved sources of variance. A more complex approach is to use optimal transport to identify the control cell most likely to transition into a given perturbed cell [^24]. This enables prediction of the full distribution of cellular responses, instead of just the average response.

##### Disentanglement

An alternative to *matching methods* involves *disentanglement* [^6], which enables models to separate the unperturbed cellular state and the perturbation effect. The compositional perturbation autoencoder (CPA) [^34] uses an adversarial classifier to ensure that the unperturbed “basal” state is free of any perturbational information, forcing the perturbation encoder to learn a meaningful representation of the perturbation. These representations are added to control cell encodings during inference to generate counterfactual predictions. Biolord [^41] partitions the latent space into subspaces and optimizes those latent spaces to represent covariates and perturbations, which can be recombined during inference to generate counterfactual predictions. sVAE [^33] leverages recent results by [^29] demonstrating that enforcing a *sparsity* constraint can induce disentanglement. [^7] build on sVAE using an additive conditioning for the perturbations, leading to SAMS-VAE which has biologically interpretable latent encodings.

### 3.2 Models for benchmarking

In this paper, we implement a range of perturbation response models with diverse architectures such as CPA, Biolord, SAMS-VAE and GEARS. Our aim is to assess the core modeling assumption behind these models, such as the adversarial classifier in CPA and the sparse additive mechanism in SAMS-VAE. See Appendix [D.5](https://arxiv.org/html/2408.10609v4#A4.SS5 "D.5 Models ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") for details. These models are marked with <sup>∗</sup> following the model name (e.g. CPA <sup>∗</sup>).

To investigate the effect of disentanglement, we ablate the adversarial component from CPA and refer to the new version as CPA <sup>∗</sup> (noAdv). The rest of the model is unchanged. Despite the basal state of cells (i.e. $z_{basal}$ ) are contaminated with perturbation and covariate information, counterfactual gene expressions are still generated by adding the target perturbation embedding to $z_{basal}$ . We verified that our CPA implementation performs at least as well as the published version in [C.7.4](https://arxiv.org/html/2408.10609v4#A3.SS7.SSS4 "C.7.4 Verifying CPA implementation using the Norman19 dataset ‣ C.7 Collapse and Rank Metrics ‣ Appendix C Further Results ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis").

Working under the same hypothesis, we removed the binary mask from SAMS-VAE <sup>∗</sup>, thus discarding the sparsity assumption which drives the disentanglement and offers interpretability. We also discard the distributional assumption on the perturbation embedding, arriving at a simplified version which we refer to as SAMS-VAE <sup>∗</sup> (S) that is free of any global latent variables.

We also experiment with scGPT, a single-cell gene expression foundation model [^13], to embed gene expression — as inputs to CPA and our Latent Additive baseline model. Our aim is to understand whether using cell embeddings from a pretrained foundation model improve performance.

### 3.3 Baseline models

We also implement and benchmark the following baselines:

##### Linear

The linear baseline model uses the *control matching* approach. Given a perturbed cell, $x’$ , we sample a random control cell with *matched* covariates, $x$ , and reconstruct $x^{\prime}$ by applying one linear layer given the perturbation and covariates:

<table><tbody><tr><td></td><td><math><semantics><mrow><mrow><msup><mi>x</mi> <mo>′</mo></msup> <mo>=</mo> <mrow><mi>x</mi> <mo>+</mo> <mrow><msub><mi>f</mi> <mi>linear</mi></msub> <mo></mo><mrow><mo>(</mo><msub><mi>p</mi> <mrow><mi>one</mi> <mo></mo><mi>_</mi> <mo></mo><mi>hot</mi></mrow></msub><mo>,</mo><mrow><mi>c</mi> <mo></mo><mi>o</mi> <mo></mo><msub><mi>v</mi> <mrow><mi>one</mi> <mo></mo><mi>_</mi> <mo></mo><mi>hot</mi></mrow></msub></mrow><mo>)</mo></mrow></mrow></mrow></mrow><mo>,</mo></mrow><annotation>x^{\prime}=x+f_{\mathrm{linear}}(p_{\mathrm{one\_hot}},cov_{\mathrm{one\_hot}}),</annotation></semantics></math></td><td></td><td rowspan="1"><span>(1)</span></td></tr></tbody></table>

where $p_{\mathrm{one\_hot}}$ denotes the one-hot encoding of the perturbation and $cov_{\mathrm{one\_hot}}$ denotes one-hot encodings of covariates (e.g. cell type/line).

##### Latent Additive

We extend the linear model into a stronger baseline which we call Latent Additive, by encoding expression values and perturbations into a latent space $\mathsf{Z}\subseteq\mathbb{R}^{d_{z}}$ , i.e.

|  | $$ z_{\mathrm{ctrl}}=f_{\mathrm{ctrl}}(x),\quad\text{and}\quad z_{\mathrm{pert}}=f_{\mathrm{pert}}(p_{\mathrm{one\_hot}}), $$ |  |
| --- | --- | --- |

Subsequently, we reconstruct the expression value by decoding the added latent space representation $x’=f_{\mathrm{dec}}(z_{\mathrm{ctrl}}+z_{\mathrm{pert}})$ . All functions $f_{\mathrm{dec}},f_{\mathrm{ctrl}},f_{\mathrm{pert}}$ are implemented as multilayer perceptrons (MLPs) with dropout [^50] and layer normalization [^5].

##### Decoder Only

We introduce another class of baseline which we refer to as *Decoder-Only*, that does not leverage gene expression and aims to predict the perturbation effect solely from covariates, or perturbation, or a mix of both. Consequently, model prediction can be expressed as $x^{\prime}=f_{\mathrm{dec}}(z)$ for $z\in\{p_{\mathrm{one\_hot}}\}\cup\{{cov}_{\mathrm{one\_hot}}\}\cup\{(p_{\mathrm{one\_hot}},{cov}_{\mathrm{one\_hot}})\}$ . This baseline can be used to establish a performance lower-bound when it does not receive any perturbation information, simulating mode or posterior collapse where the model predicts the same effect for every perturbation.

## 4 Benchmarking

Existing perturbation response modeling studies use different metrics, making direct comparison between models difficult. Here, we develop a standardized, modular benchmarking suite with a variety of metrics that mimic key downstream applications and capture common model failure modes. See Appendix [A](https://arxiv.org/html/2408.10609v4#A1 "Appendix A Software Framework: The PerturBench Library ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") for implementation details.

![Refer to caption](https://arxiv.org/html/x2.png)

Figure 2: Visualization of the ranking approach. We measure which perturbation in the data is closest to the predicted perturbation as measured by the closeness of their transcriptomes.In case A the rank metric for prediction X is rank ( X ) = 0 6 \\mathrm{rank}(X)=\\frac{0}{6}=0, in case B Y 4 0.67 \\mathrm{rank}(Y)=\\frac{4}{6}=0.67.

### 4.1 Population Aggregation

Since we only have conditionally paired populations of control cells and perturbed cells, a model has to take unperturbed (i.e. control) cell states and predicts what their states *would* look like if they had been perturbed. To evaluate these counterfactual predictions, we thus compute aggregate measures from the control and perturbed cell populations, and compare the predicted aggregates to the ground truth aggregates. We use the population mean and log fold-change (LogFC) to assess the average response to perturbation, and compute distributional metrics such as maximum mean discrepancy (MMD) and differential gene expression (DEG) t-scores to assess the full distribution of responses.

### 4.2 Metrics

We select a range of metrics that evaluate different aspects of the predicted perturbation response accuracy. We use RMSE (as recommended in [^22]) to compare the average predicted cell states to the observed cell states and cosine similarity to assess the fidelity of predicted versus observed effects (LogFCs). However, as we show in Appendix [C.7](https://arxiv.org/html/2408.10609v4#A3.SS7 "C.7 Collapse and Rank Metrics ‣ Appendix C Further Results ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis"), these “global” fit-based metrics fail to fully capture all aspects of a model’s performance. Hence, we introduce a set of rank-based metrics that can be seen as a measure of *specificity* of the model to different perturbations.

#### 4.2.1 Rank Metrics

Since the space of possible genetic or chemical perturbations is massive, a common application of these models is to rank perturbations by by their ability to induce some desired cell state, and select only the top perturbations for experimental validation [^55].

Unfortunately, there are no metrics developed for perturbation ordering, which results in models that generate predictions with high cosine similarity or low RMSE to the observed gene expression, but fail to capture smaller but key changes that uniquely distinguish the effects of one perturbation from others. In particular, mode or posterior collapse where a model always generates the same prediction irrespective of target perturbation may still result in decent cosine similarity or RMSE on particular dataset.

We find it difficult to use existing information retrieval metrics such as the mean reciprocal rank [^42] as that would require a specific desired cell state to create rankings, potentially biasing our evaluation. Therefore, we introduce a rank-based metric that measures, for a given observed perturbation, how close the model prediction is to the observation, compared to predictions made for other perturbations. The rank metric is computed on a per perturbation basis:

<table><tbody><tr><td></td><td><math><semantics><msub><mi>rank</mi> <mi>average</mi></msub> <annotation>\displaystyle\mathrm{rank}_{\mathrm{average}}</annotation></semantics></math></td><td><math><semantics><mrow><mrow><mrow><mo>:=</mo> <mrow><mstyle><mfrac><mn>1</mn> <mi>p</mi></mfrac></mstyle> <mo></mo><mrow><mstyle><munderover><mo>∑</mo> <mrow><mi>i</mi> <mo>=</mo> <mn>1</mn></mrow> <mi>p</mi></munderover></mstyle> <mrow><mi>rank</mi> <mo></mo><mrow><mo>(</mo><msub><mover><mi>x</mi> <mo>^</mo></mover> <mi>i</mi></msub><mo>)</mo></mrow></mrow></mrow></mrow></mrow><mo>,</mo><mrow><mrow><mi>rank</mi> <mo></mo><mrow><mo>(</mo><msub><mover><mi>x</mi> <mo>^</mo></mover> <mi>i</mi></msub><mo>)</mo></mrow></mrow><mo>:=</mo> <mrow><mstyle><mfrac><mn>1</mn> <mrow><mi>p</mi> <mo>−</mo> <mn>1</mn></mrow></mfrac></mstyle> <mo></mo><mrow><mstyle><munder><mo>∑</mo> <mfrac><mrow><mn>1</mn> <mo>≤</mo> <mi>j</mi> <mo>≤</mo> <mi>p</mi></mrow> <mrow><mi>j</mi> <mo>≠</mo> <mi>i</mi></mrow></mfrac></munder></mstyle> <mrow><mi>𝕀</mi> <mo></mo><mrow><mo>(</mo><mrow><mrow><mi>dist</mi> <mo></mo><mrow><mo>(</mo><msub><mover><mi>x</mi> <mo>^</mo></mover> <mi>j</mi></msub><mo>,</mo><msub><mi>x</mi> <mi>i</mi></msub><mo>)</mo></mrow></mrow> <mo>≤</mo> <mrow><mi>dist</mi> <mo></mo><mrow><mo>(</mo><msub><mover><mi>x</mi> <mo>^</mo></mover> <mi>i</mi></msub><mo>,</mo><msub><mi>x</mi> <mi>i</mi></msub><mo>)</mo></mrow></mrow></mrow><mo>)</mo></mrow></mrow></mrow></mrow></mrow></mrow><mo>,</mo></mrow><annotation>\displaystyle:=\frac{1}{p}\sum_{i=1}^{p}\mathrm{rank}(\hat{x}_{i}),\quad\mathrm{rank}(\hat{x}_{i}):=\frac{1}{p-1}\sum_{1\leq j\leq p\atop j\neq i}\mathbb{I}(\mathrm{dist}(\hat{x}_{j},x_{i})\leq\mathrm{dist}(\hat{x}_{i},x_{i})),</annotation></semantics></math></td><td></td><td rowspan="1"><span>(2)</span></td></tr></tbody></table>

where $p$ is the number of perturbations that are being modelled, $\hat{x}_{i},x_{i}$ are the predicted and observed (average) expression value of perturbation $i$ , and $\mathrm{dist}$ is a generic distance. Figure [2](https://arxiv.org/html/2408.10609v4#S4.F2 "Figure 2 ‣ 4 Benchmarking ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") shows two examples of perturbations predictions and the respective computations of rank metrics. The rank metric is always a number between $0$ and $1$ , where $0$ is a perfect score and $0.5$ is the expected score of a random prediction. Each fit-based metric has a corresponding rank metric. We verified the calibration of this rank metric in Appendix [C.7.5](https://arxiv.org/html/2408.10609v4#A3.SS7.SSS5 "C.7.5 Verifying rank metric calibration with a random model ‣ C.7 Collapse and Rank Metrics ‣ Appendix C Further Results ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis").

#### 4.2.2 Distributional Metrics

We evaluate model predictions with metrics that capture the full distribution of perturbation response across cells, such as MMD and differentially expressed gene (DEG) recall.

Our MMD metric computes the energy distance between predicted and the ground truth perturbed cells, either in the gene expression or principal component analysis (PCA) space. To embed cells with PCA, we fit a PCA model to the ground truth test split, retaining the top 256 PCs, and project predicted cells onto the ground truth PCs. DEG recall measures the fraction of ground truth DEGs that can be recalled from the predicted cells. DEGs for the predicted and ground truth perturbed cells are computed relative to the control cells, using the scanpy ’s tl.rank\_genes\_groups method with default parameters [^57]. The t-scores are sorted and the top 20 are retained for comparison. We leave DecoderOnly DEG recall empty as it cannot model variance in perturbation response.

### 4.3 Benchmarking Rules

Since model performance often varies with hyperparameters, we run hyperparameter optimization (HPO) for every model in each dataset, task and scenario to ensure accurate model comparisons. Specifically, we use optuna [^4] with the default tree-structured Parzen estimator [^8]. Each HPO run includes at least 60 trials with 6 trials running in parallel, and we select the best hyperparameters using a combination of the RMSE and RMSE rank metric, i.e. $\mathrm{RMSE}+0.1\cdot\mathrm{rank}_{\mathrm{RMSE}}$ . We find this approach results in good overall performance. Additional details are in Appendix [D.6](https://arxiv.org/html/2408.10609v4#A4.SS6 "D.6 Hyperparameter Optimization ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis"), along with the best hyperparameters for each model/dataset/task. For the best hyperparameter configuration, we run model training four additional times with different seeds to assess stability.

## 5 Experiments

In this section, we summarize the results of the covariate transfer and combo prediction tasks using different datasets, as well as the data scaling scenario. Additional results, including results for the [Frangieh21](https://arxiv.org/html/2408.10609v4#Thmdataset3 "Dataset 3 (Frangieh21) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") and [OP3](https://arxiv.org/html/2408.10609v4#Thmdataset6 "Dataset 6 (OP3) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset, imbalanced data scenario, and implementation details can be found in Appendices  [C](https://arxiv.org/html/2408.10609v4#A3 "Appendix C Further Results ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis"), [D](https://arxiv.org/html/2408.10609v4#A4 "Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis"), and  [D.7](https://arxiv.org/html/2408.10609v4#A4.SS7 "D.7 Compute Resources ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis").

Table 2: Results of the covariate transfer experiment measuring generalization across cell lines in the [Srivatsan20](https://arxiv.org/html/2408.10609v4#Thmdataset2 "Dataset 2 (Srivatsan20) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset. Mean $\pm$ one standard deviation reported across 5 seeds. Best performance per metric is indicated in bold. The same convention applies to subsequent tables.

| Model | Cosine LogFC | Cosine LogFC rank | MMD PCA | DEG recall |
| --- | --- | --- | --- | --- |
| CPA <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> | $0.38\pm 6\times 10^{-3}$ | $0.15\pm 1\times 10^{-2}$ | $0.53\pm 4\times 10^{-3}$ | $0.007\pm 2\times 10^{-3}$ |
| CPA <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> (noAdv) | $0.40\pm 5\times 10^{-3}$ | $\mathbf{0.09\pm 4\times 10^{-3}}$ | $\mathbf{0.49\pm 1\times 10^{-2}}$ | $0.004\pm 2\times 10^{-3}$ |
| CPA <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> (scGPT) | $0.39\pm 9\times 10^{-3}$ | $0.13\pm 2\times 10^{-2}$ | \- | \- |
| SAMS-VAE <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> | $0.44\pm 1\times 10^{-3}$ | $0.17\pm 1\times 10^{-2}$ | $0.69\pm 1\times 10^{-2}$ | $0.000\pm 1\times 10^{-4}$ |
| SAMS-VAE <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> (S) | $\mathbf{0.53\pm 1\times 10^{-2}}$ | $0.12\pm 2\times 10^{-2}$ | $0.79\pm 1\times 10^{-2}$ | $0.000\pm 0$ |
| Biolord <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> | $0.18\pm 1\times 10^{-1}$ | $0.37\pm 2\times 10^{-2}$ | $4.3\pm 4\times 10^{0}$ | $0.000\pm 1\times 10^{-4}$ |
| LA | $0.45\pm 2\times 10^{-3}$ | $0.13\pm 4\times 10^{-3}$ | $2.0\pm 2\times 10^{-1}$ | $0.000\pm 0$ |
| LA (scGPT) | $0.50\pm 4\times 10^{-3}$ | $0.13\pm 7\times 10^{-3}$ | \- | \- |
| Decoder | $0.35\pm 5\times 10^{-3}$ | $0.16\pm 1\times 10^{-2}$ | $1.9\pm 5\times 10^{-3}$ | \- |
| Decoder (Cov) | $0.30\pm 1\times 10^{-2}$ | $0.47\pm 9\times 10^{-3}$ | \- | \- |
| Linear | $0.16\pm 1\times 10^{-2}$ | $0.28\pm 5\times 10^{-3}$ | $0.76\pm 9\times 10^{-4}$ | $0.004\pm 3\times 10^{-4}$ |

### 5.1 Predicting Perturbation Effects Across Cell Lines

We begin with the covariate transfer task and assess each model’s ability to predict the effects of drug treatment in cell lines where the drugs have not been observed. For each cell line in the [Srivatsan20](https://arxiv.org/html/2408.10609v4#Thmdataset2 "Dataset 2 (Srivatsan20) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset, we held out 30% of the perturbations for validation and testing, ensuring that any held-out perturbations have been observed in the two other cell lines. The results are summarized in [Table 2](https://arxiv.org/html/2408.10609v4#S5.T2 "Table 2 ‣ 5 Experiments ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis"). Of the three published models, CPA <sup>∗</sup> performs best on the rank metrics, while SAMS-VAE <sup>∗</sup> is slightly worse. However, SAMS-VAE <sup>∗</sup> performs better on the fit based RMSE and cosine LogFC metrics. BioLord <sup>∗</sup> underperforms both models on all metrics.

We performed ablation studies by removing the adversarial component from CPA <sup>∗</sup>, resulting in the CPA <sup>∗</sup> (noAdv). Strikingly, CPA <sup>∗</sup> (noAdv) outperforms the original version and is the best performing model overall on the rank metrics. We also ablated the sparse mask and global latent variables from SAMS-VAE <sup>∗</sup>, resulting in SAMS-VAE <sup>∗</sup> (S), and observe that SAMS-VAE <sup>∗</sup> (S) also beats the original implementation on all metrics. These results highlight the need for a modular model development platform that enables ablation studies.

Our Decoder-Only baseline which does not leverage perturbation information, Decoder (Cov), also performs well on cosine LogFC and RMSE fit, yet does no better than random on rank metrics. This suggests that Decoder (Cov) can find a single expression vector that achieves a decent fit to all perturbations in a given cell line, highlighting the need for our rank metrics that assess whether models can correctly order perturbations. Appendix [C.7](https://arxiv.org/html/2408.10609v4#A3.SS7 "C.7 Collapse and Rank Metrics ‣ Appendix C Further Results ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") contains a more detailed assessment, where we are able to establish that SAMS-VAE <sup>∗</sup> (S) as well as our baselines, are less prone to mode collapse, based on analysis in the [Srivatsan20](https://arxiv.org/html/2408.10609v4#Thmdataset2 "Dataset 2 (Srivatsan20) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") and [Frangieh21](https://arxiv.org/html/2408.10609v4#Thmdataset3 "Dataset 3 (Frangieh21) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") datasets.

By replacing gene expression inputs with scGPT cell embeddings, we are able to see marginal improvement in the performance for CPA <sup>∗</sup> and LA.

We see large differences in model performance on the MMD metric computed in the PCA space (MMD PCA). Models using autoencoder architectures (CPA and SAMS-VAE), tend to have better performance than our baseline models (Latent Additive, Decoder Only). All models performed poorly on our differentially expressed gene recall (DEG recall) metric. Additional metrics for [Srivatsan20](https://arxiv.org/html/2408.10609v4#Thmdataset2 "Dataset 2 (Srivatsan20) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") can be found in Table  [5](https://arxiv.org/html/2408.10609v4#A3.T5 "Table 5 ‣ C.1 Additional Srivatsan20 metrics ‣ Appendix C Further Results ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis").

Since the [Srivatsan20](https://arxiv.org/html/2408.10609v4#Thmdataset2 "Dataset 2 (Srivatsan20) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset contained mostly cancer cell lines, we also benchmarked models on the [Frangieh21](https://arxiv.org/html/2408.10609v4#Thmdataset3 "Dataset 3 (Frangieh21) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") and [OP3](https://arxiv.org/html/2408.10609v4#Thmdataset6 "Dataset 6 (OP3) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") datasets, which contain melanoma cells in co-culture with immune cells and primary peripheral blood monocyte cells (PBMCs) respectively. With the [Frangieh21](https://arxiv.org/html/2408.10609v4#Thmdataset3 "Dataset 3 (Frangieh21) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset, we assess models’ ability to transfer genetic perturbation effects from simpler cell systems to a more complex co-culture system, finding similar trends in model performance, with more details in Appendix [C.3](https://arxiv.org/html/2408.10609v4#A3.SS3 "C.3 Generalizing from less complex to more complex biological systems ‣ Appendix C Further Results ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis").

With the [OP3](https://arxiv.org/html/2408.10609v4#Thmdataset6 "Dataset 6 (OP3) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset, we assess models’ ability to transfer small molecule effects across heterogeneous PBMC cell types, again finding similar trends in model performance. The gap between CPA/SAMS-VAE and the Latent Additive/Decoder models’ performance on the MMD PCA metric was larger, suggesting that the [OP3](https://arxiv.org/html/2408.10609v4#Thmdataset6 "Dataset 6 (OP3) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset contains greater within-cell-type heterogeneity compared to the [Srivatsan20](https://arxiv.org/html/2408.10609v4#Thmdataset2 "Dataset 2 (Srivatsan20) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") or [Frangieh21](https://arxiv.org/html/2408.10609v4#Thmdataset3 "Dataset 3 (Frangieh21) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") datasets. Additional details can be found in Appendix [C.4](https://arxiv.org/html/2408.10609v4#A3.SS4 "C.4 Generalizing across cell types in primary tissue dataset ‣ Appendix C Further Results ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis")

Our simpler baselines, in particular the Latent Additive (LA) model, offer competitive performance at a fraction of training cost. These baseline models also scale well with larger datasets that contain more complex covariates, as shown in the Section [5.3](https://arxiv.org/html/2408.10609v4#S5.SS3 "5.3 Effect of Data Scaling ‣ 5 Experiments ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") with the [McFalineFigueroa23](https://arxiv.org/html/2408.10609v4#Thmdataset5 "Dataset 5 (McFalineFigueroa23) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") and [Jiang24](https://arxiv.org/html/2408.10609v4#Thmdataset4 "Dataset 4 (Jiang24) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") datasets, where they outperform the more complex VAEs. However, they underperform more complex models when evaluated on the MMD metrics, suggesting they only learn an average response to perturbation. Thus, it is important to evaluate models across a diverse set of datasets and metrics, which we offer in PerturBench.

### 5.2 Predicting Combinatorial Gene Over-expression Effects

Next we discuss model performance on the combo prediction task using the [Norman19](https://arxiv.org/html/2408.10609v4#Thmdataset1 "Dataset 1 (Norman19) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset, which contains both single and dual genetic perturbations. The models train on all single perturbations and 30% of the dual perturbations, with the remaining 70% of duals held out for validation and testing. We summarize the results in [Table 3](https://arxiv.org/html/2408.10609v4#S5.T3 "Table 3 ‣ 5.2 Predicting Combinatorial Gene Over-expression Effects ‣ 5 Experiments ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis").

The Latent Additive, Decoder-Only, and a subset of published models outperform the linear model across all metrics, suggesting that deep learning approaches can capture some non-linear interactions in the [Norman19](https://arxiv.org/html/2408.10609v4#Thmdataset1 "Dataset 1 (Norman19) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset. However, the linear model performance performance is still relatively strong, suggesting most dual perturbation effects are linear.

Again, removing the adversary component or sparsity constraint leads to better performance, as is the case of CPA <sup>∗</sup> (noAdv) and SAMS-VAE <sup>∗</sup> (S). Both models perform largely on par with our best baseline Latent Additive model. Overall, [Norman19](https://arxiv.org/html/2408.10609v4#Thmdataset1 "Dataset 1 (Norman19) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") offers clean perturbation effects, ideal for sanity checking models during development.

The autoencoder architectures again outperform the baseline models in the MMD PCA metric. However, the gap is smaller than the gap observed in the [Srivatsan20](https://arxiv.org/html/2408.10609v4#Thmdataset2 "Dataset 2 (Srivatsan20) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis"), [Frangieh21](https://arxiv.org/html/2408.10609v4#Thmdataset3 "Dataset 3 (Frangieh21) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis"), or [OP3](https://arxiv.org/html/2408.10609v4#Thmdataset6 "Dataset 6 (OP3) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") datsets, suggesting less within-cell-line heterogeneity in the [Norman19](https://arxiv.org/html/2408.10609v4#Thmdataset1 "Dataset 1 (Norman19) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset.

Table 3: Results of the combo prediction experiment. Model performance predicting dual perturbation effects in the [Norman19](https://arxiv.org/html/2408.10609v4#Thmdataset1 "Dataset 1 (Norman19) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset.

| Model | Cosine logFC | Cosine LogFC rank | MMD PCA | DEG recall |
| --- | --- | --- | --- | --- |
| CPA <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> | $0.76\pm 4\times 10^{-3}$ | $0.0072\pm 2\times 10^{-3}$ | $2.2\pm 2\times 10^{-2}$ | $0.032\pm 4\times 10^{-3}$ |
| CPA <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> (noAdv) | $0.77\pm 1\times 10^{-2}$ | $\mathbf{0.0057\pm 3\times 10^{-3}}$ | $2.2\pm 1\times 10^{-1}$ | $0.016\pm 9\times 10^{-3}$ |
| CPA <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> (scGPT) | $0.70\pm 2\times 10^{-2}$ | $0.025\pm 6\times 10^{-3}$ | \- | \- |
| SAMS-VAE <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> | $0.45\pm 2\times 10^{-2}$ | $0.021\pm 5\times 10^{-3}$ | $1.9\pm 3\times 10^{-2}$ | $0.000\pm 0$ |
| SAMS-VAE <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> (S) | $\mathbf{0.78\pm 6\times 10^{-3}}$ | $0.019\pm 5\times 10^{-3}$ | $\mathbf{0.74\pm 5\times 10^{-2}}$ | $0.028\pm 6\times 10^{-3}$ |
| Biolord <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> | $0.41\pm 2\times 10^{-2}$ | $0.027\pm 1\times 10^{-3}$ | $1.6\pm 5\times 10^{-3}$ | $0.000\pm 0$ |
| GEARS | $0.44\pm 5\times 10^{-3}$ | $0.051\pm 1\times 10^{-2}$ | \- | \- |
| LA | $\mathbf{0.79\pm 1\times 10^{-2}}$ | $\mathbf{0.005\pm 2\times 10^{-3}}$ | $3.2\pm 6\times 10^{-3}$ | $0.000\pm 3\times 10^{-4}$ |
| LA (scGPT) | $0.77\pm 4\times 10^{-3}$ | $0.0085\pm 1\times 10^{-3}$ | \- | \- |
| Decoder | $0.73\pm 2\times 10^{-2}$ | $0.017\pm 6\times 10^{-3}$ | $3.2\pm 4\times 10^{-3}$ | \- |
| Linear | $0.60\pm 2\times 10^{-2}$ | $0.035\pm 4\times 10^{-3}$ | $1.2\pm 4\times 10^{-2}$ | $0.018\pm 2\times 10^{-3}$ |

### 5.3 Effect of Data Scaling

![Refer to caption](https://arxiv.org/html/Styles/figures/scaling_cosine.png)

Figure 3: Scaling of cosine similarity (left) and its rank (right) with increasing size of data included in the training process ( x -axis) for several perturbation response models. Points represent results on test data for 5 different seeds, the line represent their average.

Table 4: Results of the [Jiang24](https://arxiv.org/html/2408.10609v4#Thmdataset4 "Dataset 4 (Jiang24) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") experiment which contains 30 different biological states (6 cell lines & 5 cytokine treatments), with 70% of perturbations from 9 states held out for validation/testing. Results are reported as mean $\pm$ one standard deviation. Best performance per metric is indicated in bold.

| Model | Cosine logFC | Cosine LogFC rank | MMD PCA | DEG recall |
| --- | --- | --- | --- | --- |
| CPA <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> | $0.60\pm 7\times 10^{-4}$ | $0.40\pm 9\times 10^{-3}$ | $2.5\pm 4\times 10^{-3}$ | $0.004\pm 2\times 10^{-3}$ |
| CPA <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> (noAdv) | $0.60\pm 2\times 10^{-3}$ | $0.39\pm 1\times 10^{-2}$ | $2.5\pm 3\times 10^{-3}$ | $0.005\pm 6\times 10^{-4}$ |
| SAMS-VAE <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> | $0.59\pm 3\times 10^{-3}$ | $0.45\pm 9\times 10^{-3}$ | $\mathbf{0.32\pm 5\times 10^{-3}}$ | $0.000\pm 4\times 10^{-5}$ |
| SAMS-VAE <sup xmlns="http://www.w3.org/1999/xhtml">∗</sup> (S) | $0.57\pm 5\times 10^{-2}$ | $0.42\pm 2\times 10^{-2}$ | $1.6\pm 1\times 10^{0}$ | $0.002\pm 1\times 10^{-4}$ |
| LA | $0.47\pm 1\times 10^{-3}$ | $0.38\pm 6\times 10^{-3}$ | $2.6\pm 2\times 10^{-3}$ | $0.001\pm 5\times 10^{-4}$ |
| Decoder | $\mathbf{0.64\pm 8\times 10^{-4}}$ | $\mathbf{0.32\pm 8\times 10^{-3}}$ | $2.6\pm 2\times 10^{-3}$ | \- |
| Linear | $0.17\pm 8\times 10^{-5}$ | $0.34\pm 2\times 10^{-3}$ | $1.3\pm 2\times 10^{-3}$ | $0.003\pm 2\times 10^{-4}$ |

In this section, we report the data scaling results, assessing whether models can take advantage of additional training data to better generalize perturbation effects across biological states. We use the [McFalineFigueroa23](https://arxiv.org/html/2408.10609v4#Thmdataset5 "Dataset 5 (McFalineFigueroa23) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset that contains 3 cell lines with 5 chemical perturbations and 525 genetic perturbations. We treat unique cell line and chemical perturbation as a separate biological state, resulting in 15 total states. To test whether adding biological states improves performance, we construct nested subsets of the dataset ( $small\subset medium\subset full$ ), all sharing the same validation and test sets. Each of the subsets contains more biological states (details in Appendix  [D.4](https://arxiv.org/html/2408.10609v4#A4.SS4 "D.4 Data Splitting ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis")).

We find all models tend to improve with more training data in both cosine LogFC and its rank metric (see Figure [3](https://arxiv.org/html/2408.10609v4#S5.F3 "Figure 3 ‣ 5.3 Effect of Data Scaling ‣ 5 Experiments ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis")), with the exception of the CPA <sup>∗</sup> and SAMS-VAE <sup>∗</sup> models. As the training data increases, CPA <sup>∗</sup> and CPA <sup>∗</sup> (noAdv) perform worse on the cosine LogFC metric, while SAMS-VAE <sup>∗</sup> and SAMS-VAE <sup>∗</sup> (S) perform worse on the rank metric. Our baseline models, especially the simple Latent Additive model, generally outperform the more complex CPA <sup>∗</sup> and SAMS-VAE <sup>∗</sup> models, especially on the rank metric and with larger training data sizes. This suggests that the simpler baselines may scale to large datasets better than the more complex published models.

We further assessed how these models perform on large datasets with complex covariates by applying our benchmarking suite to the [Jiang24](https://arxiv.org/html/2408.10609v4#Thmdataset4 "Dataset 4 (Jiang24) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset, a large, 1.6 million cell dataset with complex covariates. The dataset contained 6 cell lines with 5 unique cytokine treatments, which we modeled as 30 distinct biological states and 219 genetic perturbations. However, the set of perturbations applied was different for each cytokine treatment. We used a similar splitting strategy where we held out 70% of the covariates from 9 cell states for validation/testing.

The results are summarized in Table [4](https://arxiv.org/html/2408.10609v4#S5.T4 "Table 4 ‣ 5.3 Effect of Data Scaling ‣ 5 Experiments ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") where the Decoder-Only model performs the best on average response and SAMS-VAE <sup>∗</sup> performs best on the MMD PCA metric. Here, none of the published models perform on-par with our simple baselines, particularly on the rank metrics which indicates these more sophisticated models are unable to generate perturbation-specific responses. There is less of a gap between the more complex autoencoder architectures and the baseline models in the MMD PCA metric, suggesting less within-covariate heterogeneity compared to other datasets. These results align with our earlier observation that simpler architectures with fewer modeling assumptions benefit more from additional training data.

## 6 Discussion

##### Summary and Limitations

Our study shows that for predicting average perturbation effects, there is no model, or even class of models, that is clearly better than others. In smaller datasets, methods such as CPA <sup>∗</sup> (noAdv) and SAMS-VAE <sup>∗</sup> (S) exhibit the best performance. However, these methods do not scale well in larger datasets, where they are outperformed by our Latent Additive or Decoder-Only models using the *matching* approach. The variance in performance across datasets highlights the need to develop more versatile and universally robust models and we hope that our perturbation framework will be helpful for developing and benchmarking these future models.

In terms of predicting the distribution of perturbation responses, as measured by the MMD metrics, autoencoder models such as CPA <sup>∗</sup> and SAMS-VAE <sup>∗</sup> outperform the Latent Additive and Decoder-Only baselines. The gap in MMD performance depends on the dataset, suggesting that some datasets have less heterogeneity within biological states. More recent model architectures such as STATE and CellFlow may be able to predict the full distribution of perturbation responses while also maintaining strong performance on average effect metrics [^2]

We also find that ablating the adversarial component in CPA <sup>∗</sup> and the sparsity-inducing component in SAMS-VAE <sup>∗</sup> improve performance over the original models. Since it is highly probable that assumptions made and tested in one dataset may not hold true in another, comprehensive ablation experiments across diverse datasets and metrics as are provided in Perturbench will be a essential to developing more versatile and robust model architectures.

Our simple Decoder-Only models with no gene expression input generally perform well, outperforming all other models on the [Jiang24](https://arxiv.org/html/2408.10609v4#Thmdataset4 "Dataset 4 (Jiang24) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") dataset. This potentially points to new architectures that emphasize the perturbation encoder, assuming the information present in the gene expression input may not be as rich as the perturbation and covariate information. Other possible explanations include inadequate control matching due to heterogeneity in the control cells not captured by covariate labels, as well as noise in the single-cell RNA readouts or the perturbation labels. Specifically, some cells with a perturbation label may not have a robust target gene knockdown in CRISPR experiments [^32].

Models perform worse on the larger datasets and tasks, specifically [McFalineFigueroa23](https://arxiv.org/html/2408.10609v4#Thmdataset5 "Dataset 5 (McFalineFigueroa23) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") (data scaling) and [Jiang24](https://arxiv.org/html/2408.10609v4#Thmdataset4 "Dataset 4 (Jiang24) ‣ D.1 Dataset Summary ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis"). For example, on the data scaling task, no model achieved a rank metric below $0.4$ (where $0.5$ is random predictor). This could be due to both the intrinsic difficulty of the task, and the amount of measurement or biological noise present in a dataset. For the data scaling task, most models performed better with more data, potentially suggesting perturbation models follow scaling laws [^25].

Given the diversity of implementations among public models, we aimed to assess the core components of each model. Thus, our benchmarking results should be interpreted as an assessment of how these core components perform rather than a perfectly accurate recreation of the public model implementation (see Appendix [D.5](https://arxiv.org/html/2408.10609v4#A4.SS5 "D.5 Models ‣ Appendix D Implementation Details ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis") for details).

##### Benchmarking codebase

We provide three main components: datasets and dataloaders, a model development framework, and an evaluation API with metrics (Appendix [A](https://arxiv.org/html/2408.10609v4#A1 "Appendix A Software Framework: The PerturBench Library ‣ PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis")). Each component can be used together or individually. For example, a user who just wants to benchmark predictions generated by an existing model can use the evaluation API. Whereas a user who wants to develop a new model with our model framework can use the entire codebase. Each component is extensible, making it easy for users to add new datasets, models, and metrics. The codebase can be found on GitHub at [https://github.com/altoslabs/perturbench/](https://github.com/altoslabs/perturbench/).

##### Conclusion

The perturbation response modeling field holds great promise in searching the truly vast space of genetic and chemical perturbations to find disease targets and potential therapeutics. In this work, we bring together state-of-the-art models in a unified framework with thorough evaluation. We benchmarked individual model components through ablation studies, assessed performance on different datasets at different scales, and developed rank metrics that capture key downstream applications and model failure modes. Finally, we hope that our modular codebase will prove valuable in future model development and benchmarking efforts.

## References

## NeurIPS Paper Checklist

1. Claims
2. Question: Do the main claims made in the abstract and introduction accurately reflect the paper’s contributions and scope?
3. Answer: \[Yes\]
4. Justification: We carefully checked that the claims made in our abstract and appendix are accurate.
5. Limitations
6. Question: Does the paper discuss the limitations of the work performed by the authors?
7. Answer: \[Yes\]
8. Justification: We discuss limitations explicitly in the discussion sections.
9. Theory assumptions and proofs
10. Question: For each theoretical result, does the paper provide the full set of assumptions and a complete (and correct) proof?
11. Answer: \[N/A\]
12. Justification: This paper describes datasets, benchmarks and concomitant software. No new theoretical claims are being made.
13. Experimental result reproducibility
14. Question: Does the paper fully disclose all the information needed to reproduce the main experimental results of the paper to the extent that it affects the main claims and/or conclusions of the paper (regardless of whether the code and data are provided or not)?
15. Answer: \[Yes\]
16. Justification: The code to reproduce all our results including configuration files to run the relevant experiments is attached to the supplementary material.
17. Open access to data and code
18. Question: Does the paper provide open access to the data and code, with sufficient instructions to faithfully reproduce the main experimental results, as described in supplemental material?
19. Answer: \[Yes\]
20. Justification: The data used in this benchmark is publicly available. The associated codebase and data preprocessing is available at https://github.com/altoslabs/perturbench/.
21. Experimental setting/details
22. Question: Does the paper specify all the training and test details (e.g., data splits, hyperparameters, how they were chosen, type of optimizer, etc.) necessary to understand the results?
23. Answer: \[Yes\]
24. Justification: The paper comes with a full codebase and hydra configuration files that enable the replication of all our experimental results, including data splits, hyperparameters and all other relevant components. In addition, we provide a complete explanation of all necessary details in the appendix.
25. Experiment statistical significance
26. Question: Does the paper report error bars suitably and correctly defined or other appropriate information about the statistical significance of the experiments?
27. Answer: \[Yes\]
28. Justification: We have run all our experiments multiple times using. Our tables contain error statistics (standard deviation) and our plots show the results of multiple runs in addition to the average performance.
29. Experiments compute resources
30. Question: For each experiment, does the paper provide sufficient information on the computer resources (type of compute workers, memory, time of execution) needed to reproduce the experiments?
31. Answer: \[Yes\]
32. Justification: We provide the details of the configuration of the compute resources used in hyperparameter optimization and sensitivity analysis in the appendix.
33. Code of ethics
34. Question: Does the research conducted in the paper conform, in every respect, with the NeurIPS Code of Ethics [https://neurips.cc/public/EthicsGuidelines](https://neurips.cc/public/EthicsGuidelines)?
35. Answer: \[Yes\]
36. Justification:: We read the code of ethics and can confirm that all our experiements conform to it.
37. Broader impacts
38. Question: Does the paper discuss both potential positive societal impacts and negative societal impacts of the work performed?
39. Answer: \[N/A\]
40. Justification: The work presented in this paper does not directly create novel capabilities, but provides a framework to develop, benchmark and compare models for perturbation predictions.
41. Safeguards
42. Question: Does the paper describe safeguards that have been put in place for responsible release of data or models that have a high risk for misuse (e.g., pretrained language models, image generators, or scraped datasets)?
43. Answer: \[N/A\]
44. Justification: The paper poses no such risks.
45. Licenses for existing assets
46. Question: Are the creators or original owners of assets (e.g., code, data, models), used in the paper, properly credited and are the license and terms of use explicitly mentioned and properly respected?
47. Answer: \[Yes\]
48. Justification: All models and datasets we use have been appropriately cited in the document. Where code has been adapted from external sources, the codebase retains a licence notice (e.g. for our CPA fork).
49. New assets
50. Question: Are new assets introduced in the paper well documented and is the documentation provided alongside the assets?
51. Answer: \[Yes\]
52. Justification: We provide a detailed documentation of our codebase in the paper and in particular in the supplementary material.
53. Crowdsourcing and research with human subjects
54. Question: For crowdsourcing experiments and research with human subjects, does the paper include the full text of instructions given to participants and screenshots, if applicable, as well as details about compensation (if any)?
55. Answer: \[N/A\]
56. Justification: The paper does not involve crowdsourcing nor research with human subjects.
57. Institutional review board (IRB) approvals or equivalent for research with human subjects
58. Question: Does the paper describe potential risks incurred by study participants, whether such risks were disclosed to the subjects, and whether Institutional Review Board (IRB) approvals (or an equivalent approval/review based on the requirements of your country or institution) were obtained?
59. Answer: \[N/A\]
60. Justification: The paper does not involve crowdsourcing nor research with human subjects.
61. Declaration of LLM usage
62. Question: Does the paper describe the usage of LLMs if it is an important, original, or non-standard component of the core methods in this research? Note that if the LLM is used only for writing, editing, or formatting purposes and does not impact the core methodology, scientific rigorousness, or originality of the research, declaration is not required.
63. Answer: \[N/A\]
64. Justification: The paper does not use LLMs as any important, original, or non-standard components.

[^1]: Adamson, B., Norman, T. M., Jost, M., Cho, M. Y., Nuñez, J. K., Chen, Y., Villalta, J. E., Gilbert, L. A., Horlbeck, M. A., Hein, M. Y., et al. (2016).A multiplexed single-cell crispr screening platform enables systematic dissection of the unfolded protein response.Cell, 167(7):1867–1882.

[^2]: Adduri, A. K., Gautam, D., Bevilacqua, B., Imran, A., Shah, R., Naghipourfar, M., Teyssier, N., Ilango, R., Nagaraj, S., Dong, M., Ricci-Tam, C., Carpenter, C., Subramanyam, V., Winters, A., Tirukkovular, S., Sullivan, J., Plosky, B. S., Eraslan, B., Youngblut, N. D., Leskovec, J., Gilbert, L. A., Konermann, S., Hsu, P. D., Dobin, A., Burke, D. P., Goodarzi, H., and Roohani, Y. H. (2025).Predicting cellular responses to perturbation across diverse contexts with state.bioRxiv.

[^3]: Ahlmann-Eltze, C., Huber, W., and Anders, S. (2024).Deep learning-based predictions of gene perturbation effects do not yet outperform simple linear methods.bioRxiv, page 2024.09.16.613342.

[^4]: Akiba, T., Sano, S., Yanase, T., Ohta, T., and Koyama, M. (2019).Optuna: A next-generation hyperparameter optimization framework.In Proceedings of the 25th ACM SIGKDD international conference on knowledge discovery & data mining, pages 2623–2631.

[^5]: Ba, J. L., Kiros, J. R., and Hinton, G. E. (2016).Layer normalization.arXiv preprint arXiv:1607.06450.

[^6]: Bengio, Y., Courville, A., and Vincent, P. (2013).Representation learning: A review and new perspectives.IEEE transactions on pattern analysis and machine intelligence, 35(8):1798–1828.

[^7]: Bereket, M. and Karaletsos, T. (2024).Modelling cellular perturbations with the sparse additive mechanism shift variational autoencoder.Advances in Neural Information Processing Systems, 36.

[^8]: Bergstra, J., Bardenet, R., Bengio, Y., and Kégl, B. (2011).Algorithms for hyper-parameter optimization.Advances in neural information processing systems, 24.

[^9]: Bock, C., Datlinger, P., Chardon, F., Coelho, M. A., Dong, M. B., Lawson, K. A., Lu, T., Maroc, L., Norman, T. M., Song, B., Stanley, G., Chen, S., Garnett, M., Li, W., Moffat, J., Qi, L. S., Shapiro, R. S., Shendure, J., Weissman, J. S., and Zhuang, X. (2022).High-content CRISPR screening.Nat. Rev. Methods Primers, 2(8):1–23.

[^10]: Bunne, C., Stark, S. G., Gut, G., del Castillo, J. S., Levesque, M., Lehmann, K.-V., Pelkmans, L., Krause, A., and Rätsch, G. (2023).Learning single-cell perturbation responses using neural optimal transport.Nat. Methods, 20(11):1759–1768.

[^11]: Chandrasekaran, S. N., Ackerman, J., Alix, E., Ando, D. M., Arevalo, J., Bennion, M., Boisseau, N., Borowa, A., Boyd, J. D., Brino, L., Byrne, P. J., Ceulemans, H., Ch’ng, C., Cimini, B. A., Clevert, D.-A., Deflaux, N., Doench, J. G., Dorval, T., Doyonnas, R., Dragone, V., Engkvist, O., Faloon, P. W., Fritchman, B., Fuchs, F., Garg, S., Gilbert, T. J., Glazer, D., Gnutt, D., Goodale, A., Grignard, J., Guenther, J., Han, Y., Hanifehlou, Z., Hariharan, S., Hernandez, D., Horman, S. R., Hormel, G., Huntley, M., Icke, I., Iida, M., Jacob, C. B., Jaensch, S., Khetan, J., Kost-Alimova, M., Krawiec, T., Kuhn, D., Lardeau, C.-H., Lembke, A., Lin, F., Little, K. D., Lofstrom, K. R., Lotfi, S., Logan, D. J., Luo, Y., Madoux, F., Marin Zapata, P. A., Marion, B. A., Martin, G., McCarthy, N. J., Mervin, L., Miller, L., Mohamed, H., Monteverde, T., Mouchet, E., Nicke, B., Ogier, A., Ong, A.-L., Osterland, M., Otrocka, M., Peeters, P. J., Pilling, J., Prechtl, S., Qian, C., Rataj, K., Root, D. E., Sakata, S. K., Scrace, S., Shimizu, H., Simon, D., Sommer, P., Spruiell, C., Sumia, I., Swalley, S. E., Terauchi, H., Thibaudeau, A., Unruh, A., Van de Waeter, J., Van Dyck, M., van Staden, C., Warchoł, M., Weisbart, E., Weiss, A., Wiest-Daessle, N., Williams, G., Yu, S., Zapiec, B., Żyła, M., Singh, S., and Carpenter, A. E. (2023).Jump cell painting dataset: morphological impact of 136, 000 chemical and genetic perturbations.bioRxiv.

[^12]: Csendes, G., Sanz, G., Szalay, K. Z., and Szalai, B. (2025).Benchmarking foundation cell models for post-perturbation rna-seq prediction.BMC Genomics, 26(1).

[^13]: Cui, H., Wang, C., Maan, H., Pang, K., Luo, F., Duan, N., and Wang, B. (2024).scGPT: toward building a foundation model for single-cell multi-omics using generative AI.Nat. Methods, pages 1–11.

[^14]: Cui, Y., Jia, M., Lin, T.-Y., Song, Y., and Belongie, S. (2019).Class-balanced loss based on effective number of samples.Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 9268–9277.

[^15]: Dixit, A., Parnas, O., Li, B., Chen, J., Fulco, C. P., Jerby-Arnon, L., Marjanovic, N. D., Dionne, D., Burks, T., Raychowdhury, R., et al. (2016).Perturb-seq: dissecting molecular circuits with scalable single-cell rna profiling of pooled genetic screens.cell, 167(7):1853–1866.

[^16]: Edwards, L. (2024).Reflections on ICLR24 (or ‘Why is AI for drug discovery so difficult to get right?’).Medium, Münster, Germany.

[^17]: Falcon, W. and The PyTorch Lightning team (2019).PyTorch Lightning.

[^18]: Frangieh, C. J., Melms, J. C., Thakore, P. I., Geiger-Schuller, K. R., Ho, P., Luoma, A. M., Cleary, B., Jerby-Arnon, L., Malu, S., Cuoco, M. S., Zhao, M., Ager, C. R., Rogava, M., Hovey, L., Rotem, A., Bernatchez, C., Wucherpfennig, K. W., Johnson, B. E., Rozenblatt-Rosen, O., Schadendorf, D., Regev, A., and Izar, B. (2021).Multimodal pooled Perturb-CITE-seq screens in patient models define mechanisms of cancer immune evasion.Nat. Genet., 53(3):332–341.

[^19]: Gavriilidis, G. I., Vasileiou, V., Orfanou, A., Ishaque, N., and Psomopoulos, F. (2024).A mini-review on perturbation modelling across single-cell omic modalities.Comput. Struct. Biotechnol. J., 23:1886.

[^20]: Hao, M., Gong, J., Zeng, X., Liu, C., Guo, Y., Cheng, X., Wang, T., Ma, J., Song, L., and Zhang, X. (2023).Large Scale Foundation Model on Single-cell Transcriptomics.bioRxiv, page 2023.05.29.542705.

[^21]: Jaeger, S., Fulle, S., and Turk, S. (2018).Mol2vec: Unsupervised Machine Learning Approach with Chemical Intuition.J. Chem. Inf. Model., 58(1):27–35.

[^22]: Ji, Y., Green, T., Peidli, S., Bahrami, M., Liu, M., Zappia, L., Hrovatin, K., Sander, C., and Theis, F. (2023).Optimal distance metrics for single-cell rna-seq populations.bioRxiv, pages 2023–12.

[^23]: Jiang, L., Dalgarno, C., Papalexi, E., Mascio, I., Wessels, H.-H., Yun, H., Iremadze, N., Lithwick-Yanai, G., Lipson, D., and Satija, R. (2024a).Systematic reconstruction of molecular pathway signatures using scalable single-cell perturbation screens.bioRxiv, page 2024.01.29.576933.

[^24]: Jiang, Q., Chen, S., Chen, X., and Jiang, R. (2024b).scPRAM accurately predicts single-cell gene expression perturbation response based on attention mechanism.Bioinformatics, page btae265.

[^25]: Kaplan, J., McCandlish, S., Henighan, T., Brown, T. B., Chess, B., Child, R., Gray, S., Radford, A., Wu, J., and Amodei, D. (2020).Scaling laws for neural language models.arXiv preprint arXiv:2001.08361.

[^26]: Keenan, A. B., Jenkins, S. L., Jagodnik, K. M., Koplev, S., He, E., Torre, D., Wang, Z., Dohlman, A. B., Silverstein, M. C., Lachmann, A., Kuleshov, M. V., Ma’ayan, A., Stathias, V., Terryn, R., Cooper, D., Forlin, M., Koleti, A., Vidovic, D., Chung, C., Schürer, S. C., Vasiliauskas, J., Pilarczyk, M., Shamsaei, B., Fazel, M., Ren, Y., Niu, W., Clark, N. A., White, S., Mahi, N., Zhang, L., Kouril, M., Reichard, J. F., Sivaganesan, S., Medvedovic, M., Meller, J., Koch, R. J., Birtwistle, M. R., Iyengar, R., Sobie, E. A., Azeloglu, E. U., Kaye, J., Osterloh, J., Haston, K., Kalra, J., Finkbiener, S., Li, J., Milani, P., Adam, M., Escalante-Chong, R., Sachs, K., Lenail, A., Ramamoorthy, D., Fraenkel, E., Daigle, G., Hussain, U., Coye, A., Rothstein, J., Sareen, D., Ornelas, L., Banuelos, M., Mandefro, B., Ho, R., Svendsen, C. N., Lim, R. G., Stocksdale, J., Casale, M. S., Thompson, T. G., Wu, J., Thompson, L. M., Dardov, V., Venkatraman, V., Matlock, A., Van Eyk, J. E., Jaffe, J. D., Papanastasiou, M., Subramanian, A., Golub, T. R., Erickson, S. D., Fallahi-Sichani, M., Hafner, M., Gray, N. S., Lin, J.-R., Mills, C. E., Muhlich, J. L., Niepel, M., Shamu, C. E., Williams, E. H., Wrobel, D., Sorger, P. K., Heiser, L. M., Gray, J. W., Korkola, J. E., Mills, G. B., LaBarge, M., Feiler, H. S., Dane, M. A., Bucher, E., Nederlof, M., Sudar, D., Gross, S., Kilburn, D. F., Smith, R., Devlin, K., Margolis, R., Derr, L., Lee, A., and Pillai, A. (2018).The library of integrated network-based cellular signatures nih program: System-level cataloging of human cells response to perturbations.Cell Systems, 6(1):13–24.

[^27]: Kernfeld, E., Yang, Y., Weinstock, J. S., Battle, A., and Cahan, P. (2023).A systematic comparison of computational methods for expression forecasting.bioRxiv.

[^28]: Klein, D., Fleck, J. S., Bobrovskiy, D., Zimmermann, L., Becker, S., Palma, A., Dony, L., Tejada-Lapuerta, A., Huguet, G., Lin, H.-C., Azbukina, N., Sanchís-Calleja, F., Uscidda, T., Szalata, A., Gander, M., Regev, A., Treutlein, B., Camp, J. G., and Theis, F. J. (2025).Cellflow enables generative single-cell phenotype modeling with flow matching.bioRxiv.

[^29]: Lachapelle, S., Rodriguez, P., Sharma, Y., Everett, K. E., Le Priol, R., Lacoste, A., and Lacoste-Julien, S. (2022).Disentanglement via mechanism sparsity regularization: A new principle for nonlinear ica.In Conference on Causal Learning and Reasoning, pages 428–484. PMLR.

[^30]: Li, C., Gao, H., She, Y., Bian, H., Chen, Q., Liu, K., Wei, L., and Zhang, X. (2024a).Benchmarking ai models forin silicogene perturbation of cells.bioRxiv.

[^31]: Li, L., You, Y., Liao, W., Fan, X., Lu, S., Cao, Y., Li, B., Ren, W., Fu, Y., Kong, J., Zheng, S., Chen, J., Liu, X., and Tian, L. (2024b).A systematic comparison of single-cell perturbation response prediction models.bioRxiv.

[^32]: Liu, G., Zhang, Y., and Zhang, T. (2020).Computational approaches for effective CRISPR guide RNA design and evaluation.Comput. Struct. Biotechnol. J., 18:35–44.

[^33]: Lopez, R., Tagasovska, N., Ra, S., Cho, K., Pritchard, J. K., and Regev, A. (2022).Learning Causal Representations of Single Cells via Sparse Mechanism Shift Modeling.arXiv.

[^34]: Lotfollahi, M., Susmelj, A. K., De Donno, C., Hetzel, L., Ji, Y., Ibarra, I. L., Srivatsan, S. R., Naghipourfar, M., Daza, R. M., Martin, B., Shendure, J., McFaline-Figueroa, J. L., Boyeau, P., Wolf, F. A., Yakubova, N., Günnemann, S., Trapnell, C., Lopez-Paz, D., and Theis, F. J. (2023).Predicting cellular responses to complex perturbations in high-throughput screens.Mol. Syst. Biol.

[^35]: Lowe, R., Shirley, N., Bleackley, M., Dolan, S., and Shafee, T. (2017).Transcriptomics technologies.PLoS computational biology, 13(5):e1005457.

[^36]: Macosko, E. Z., Basu, A., Satija, R., Nemesh, J., Shekhar, K., Goldman, M., Tirosh, I., Bialas, A. R., Kamitaki, N., Martersteck, E. M., Trombetta, J. J., Weitz, D. A., Sanes, J. R., Shalek, A. K., Regev, A., and McCarroll, S. A. (2015).Highly Parallel Genome-wide Expression Profiling of Individual Cells Using Nanoliter Droplets.Cell, 161(5):1202–1214.

[^37]: McFaline-Figueroa, J. L., Srivatsan, S., Hill, A. J., Gasperini, M., Jackson, D. L., Saunders, L., Domcke, S., Regalado, S. G., Lazarchuck, P., Alvarez, S., et al. (2024).Multiplex single-cell chemical genomics reveals the kinase dependence of the response to targeted therapy.Cell Genomics, 4(2).

[^38]: Norman, T. M., Horlbeck, M. A., Replogle, J. M., Ge, A. Y., Xu, A., Jost, M., Gilbert, L. A., and Weissman, J. S. (2019).Exploring genetic interaction manifolds constructed from rich single-cell phenotypes.Science, 365(6455):786–793.

[^39]: Paszke, A., Gross, S., Massa, F., Lerer, A., Bradbury, J., Chanan, G., Killeen, T., Lin, Z., Gimelshein, N., Antiga, L., Desmaison, A., Köpf, A., Yang, E. Z., DeVito, Z., Raison, M., Tejani, A., Chilamkurthy, S., Steiner, B., Fang, L., Bai, J., and Chintala, S. (2019).Pytorch: An imperative style, high-performance deep learning library.Advances in Neural Information Processing Systems, abs/1912.01703.

[^40]: Peidli, S., Green, T. D., Shen, C., Gross, T., Min, J., Garda, S., Yuan, B., Schumacher, L. J., Taylor-King, J. P., Marks, D. S., Luna, A., Blüthgen, N., and Sander, C. (2024).scPerturb: harmonized single-cell perturbation data.Nat. Methods, 21(3):531–540.

[^41]: Piran, Z., Cohen, N., Hoshen, Y., and Nitzan, M. (2024).Disentanglement of single-cell data with biolord.Nat. Biotechnol., pages 1–6.

[^42]: Radev, D. R., Qi, H., Wu, H., and Fan, W. (2002).Evaluating web-based question answering systems.In González Rodríguez, M. and Suarez Araujo, C. P., editors,Proceedings of the Third International Conference on Language Resources and Evaluation (LREC’02), Las Palmas, Canary Islands - Spain. European Language Resources Association (ELRA).

[^43]: Replogle, J. M., Saunders, R. A., Pogson, A. N., Hussmann, J. A., Lenail, A., Guna, A., Mascibroda, L., Wagner, E. J., Adelman, K., Lithwick-Yanai, G., Iremadze, N., Oberstrass, F., Lipson, D., Bonnar, J. L., Jost, M., Norman, T. M., and Weissman, J. S. (2022).Mapping information-rich genotype-phenotype landscapes with genome-scale Perturb-seq.Cell, 185(14):2559–2575.e28.

[^44]: Reymond, J.-L. (2015).The Chemical Space Project.Acc. Chem. Res., 48(3):722–730.

[^45]: Rives, A., Meier, J., Sercu, T., Goyal, S., Lin, Z., Liu, J., Guo, D., Ott, M., Zitnick, C. L., Ma, J., and Fergus, R. (2021).Biological structure and function emerge from scaling unsupervised learning to 250 million protein sequences.Proc. Natl. Acad. Sci. U.S.A., 118(15):e2016239118.

[^46]: Roohani, Y., Huang, K., and Leskovec, J. (2023).Predicting transcriptional outcomes of novel multigene perturbations with GEARS.Nat. Biotechnol., pages 1–9.

[^47]: Roohani, Y. H., Hua, T. J., Tung, P.-Y., Bounds, L. R., Yu, F. B., Dobin, A., Teyssier, N., Adduri, A., Woodrow, A., Plosky, B. S., Mehta, R., Hsu, B., Sullivan, J., Ricci-Tam, C., Li, N., Kazaks, J., Gilbert, L. A., Konermann, S., Hsu, P. D., Goodarzi, H., and Burke, D. P. (2025).Virtual cell challenge: Toward a turing test for the virtual cell.Cell, 188(13):3370–3374.

[^48]: Ross, J., Belgodere, B., Chenthamarakshan, V., Padhi, I., Mroueh, Y., and Das, P. (2022).Large-scale chemical language representations capture molecular structure and properties.Nat. Mach. Intell., 4(12):1256–1264.

[^49]: Shalem, O., Sanjana, N. E., Hartenian, E., Shi, X., Scott, D. A., Mikkelsen, T. S., Heckl, D., Ebert, B. L., Root, D. E., Doench, J. G., and Zhang, F. (2014).Genome-Scale CRISPR-Cas9 Knockout Screening in Human Cells.Science, 343(6166):84–87.

[^50]: Srivastava, N., Hinton, G., Krizhevsky, A., Sutskever, I., and Salakhutdinov, R. (2014).Dropout: a simple way to prevent neural networks from overfitting.The journal of machine learning research, 15(1):1929–1958.

[^51]: Srivatsan, S. R., McFaline-Figueroa, J. L., Ramani, V., Saunders, L., Cao, J., Packer, J., Pliner, H. A., Jackson, D. L., Daza, R. M., Christiansen, L., Zhang, F., Steemers, F., Shendure, J., and Trapnell, C. (2020).Massively multiplex chemical transcriptomics at single-cell resolution.Science, 367(6473):45–51.

[^52]: Stuart, E. A. (2010).Matching methods for causal inference: A review and a look forward.Statistical science: a review journal of the Institute of Mathematical Statistics, 25(1):1.

[^53]: Szałata, A., Benz, A., Cannoodt, R., Cortes, M., Fong, J., Kuppasani, S., Lieberman, R., Liu, T., Mas-Rosario, J. A., Meinl, R., et al. (2024).A benchmark for prediction of transcriptomic responses to chemical perturbations across cell types.Advances in Neural Information Processing Systems, 37:20566–20616.

[^54]: Tang, F., Barbacioru, C., Wang, Y., Nordman, E., Lee, C., Xu, N., Wang, X., Bodeau, J., Tuch, B. B., Siddiqui, A., et al. (2009).mrna-seq whole-transcriptome analysis of a single cell.Nature methods, 6(5):377–382.

[^55]: Van de Sande, B., Lee, J. S., Mutasa-Gottgens, E., Naughton, B., Bacon, W., Manning, J., Wang, Y., Pollard, J., Mendez, M., Hill, J., Kumar, N., Cao, X., Chen, X., Khaladkar, M., Wen, J., Leach, A., and Ferran, E. (2023).Applications of single-cell RNA sequencing in drug discovery and development.Nat. Rev. Drug Discovery, 22(6):496–520.

[^56]: Wenteler, A., Occhetta, M., Branson, N., Huebner, M., Curean, V., Dee, W. T., Connell, W. T., Hawkins-Hooker, A., Chung, S. P., Ektefaie, Y., Gallagher-Syed, A., and Córdova, C. M. V. (2024).PertEval-scFM: Benchmarking Single-Cell Foundation Models for Perturbation Effect Prediction.bioRxiv, page 2024.10.02.616248.

[^57]: Wolf, F. A., Angerer, P., and Theis, F. J. (2018).Scanpy: large-scale single-cell gene expression data analysis.Genome biology, 19:1–5.

[^58]: Wong, D. R., Hill, A. S., and Moccia, R. (2025).Simple controls exceed best deep learning algorithms and reveal foundation model effectiveness for predicting genetic perturbations.bioRxiv.

[^59]: Yadan, O. (2019).Hydra - a framework for elegantly configuring complex applications.Github.

[^60]: Yu, H. and Welch, J. D. (2022).PerturbNet predicts single-cell responses to unseen chemical and genetic perturbations.bioRxiv, page 2022.07.20.500854.

[^61]: Zhang, J., Ubas, A. A., de Borja, R., Svensson, V., Thomas, N., Thakar, N., Winters, A., Khan, U., Jones, M. G., Thompson, J. D., Tran, V., Pangallo, J., Papalexi, E., Sapre, A., Nguyen, H., Sanderson, O., Nigos, M., Kaplan, O., Schroeder, S., Hariadi, B., Marrujo, S., Salvino, C. C. A., Gallareta Olivares, G., Koehler, R., Geiss, G., Rosenberg, A., Roco, C., Merico, D., Alidoust, N., Goodarzi, H., and Yu, J. (2025).Tahoe-100m: A giga-scale single-cell perturbation atlas for context-dependent gene function and cellular modeling.bioRxiv.