---
title: "QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"
source: "https://arxiv.org/html/2506.00711v2"
published:
created: 2025-12-16
description:
tags:
  - "clippings"
---
HTML conversions [sometimes display errors](https://info.dev.arxiv.org/about/accessibility_html_error_messages.html) due to content that did not convert correctly from the source. This paper uses the following packages that are not yet supported by the HTML conversion tool. Feedback on these issues are not necessary; they are known and are being worked on.

- failed: mdframed.sty

Authors: achieve the best HTML results from your LaTeX submissions by following these [best practices](https://info.arxiv.org/help/submit_latex_best_practices.html).

arXiv:2506.00711v2 \[cs.LG\] 22 Oct 2025

Wei Dai, Peilin Chen, Chanakya Ekbote, Paul Pu Liang  
MIT Media Lab and MIT EECS  
{dvdai, peili, cekbote, ppliang}@mit.edu  

###### Abstract

Clinical decision‑making routinely demands reasoning over heterogeneous data, yet existing multimodal language models (MLLMs) remain largely vision‑centric and fail to generalize across clinical specialties. To bridge this gap, we introduce QoQ-Med-7B/32B, the first open generalist clinical foundation model that jointly reasons across medical images, time‑series signals, and text reports. QoQ-Med is trained with D omain‑aware R elative P olicy O ptimization (DRPO), a novel reinforcement‑learning objective that hierarchically scales normalized rewards according to domain rarity and modality difficulty, mitigating performance imbalance caused by skewed clinical data distributions. Trained on 2.61 million instruction tuning pairs spanning 9 clinical domains, we show that DRPO training boosts diagnostic performance by 43% in macro‑F1 on average across all visual domains as compared to other critic-free training methods like GRPO. Furthermore, with QoQ-Med trained on intensive segmentation data, it is able to highlight salient regions related to the diagnosis, with an IoU 10x higher than open models while reaching the performance of OpenAI o4-mini. To foster reproducibility and downstream research, we release (i) the full model weights, (ii) the modular training pipeline, and (iii) all intermediate reasoning traces at [this link](https://github.com/DDVD233/QoQ_Med).

## 1 Introduction

Clinical diagnosis has evolved significantly over the past decade, with numerous computational models developed to assist clinicians in organizing patient records [^87], formulating diagnoses [^19], interpreting clinical images [^26], and other clinical tasks [^12]. These advancements have substantially improved healthcare efficiency and accuracy across multiple specialties [^21]. Recently, the emergence of powerful generalist reasoning models such as OpenAI o3 [^61] and Deepseek R1 [^29] have inspired efforts to create specialized clinical reasoning systems [^46] capable of answering complex clinical questions and generating comprehensive clinical reports [^20]. Reasoning allows models to think explicitly in a more logical and systematic way with evidence from the inputs and their own knowledge [^34], all of which are essential for clinical diagnosis [^55].

However, building effective models to support clinical diagnosis presents several significant challenges. First, clinical data spans multiple modalities across 1D (ECG, EEG), 2D (Chest X-ray, dermoscopy, mammography), and 3D (CT Scans, MRI). Models like BiomedGPT [^90] and MedFlamingo [^56] have integrated 2D and 3D data within one vision encoder, but no existing model has been able to integrate both 1D sensor data with 2D/3D images. The heterogeneity across specialties and modalities [^28] often leads to settings where modalities compete rather than synergize, leading to suboptimal performance [^1]. This necessitates careful retraining or fine-tuning strategies to balance heterogeneous distributions while enriching these models with clinical knowledge.

Secondly, conventional training methodologies typically constrain models to generate single, definitive answers without revealing their underlying analytical process [^80]. This “black box” approach significantly impedes the practical adoption of AI systems in clinical settings, as healthcare professionals might hesitate to trust diagnostic suggestions without understanding the reasoning that produced them [^72]. Transparency in the decision-making process is not merely a preference but a necessary component for responsible clinical implementation, regulatory compliance, and effective human-AI collaboration in healthcare environments [^6].

In this work, we introduce QoQ-Med: a generalist clinical multimodal foundation model with precise reasoning capabilities spanning clinical images, time series data, and textual records across 9 clinical domains. Our work makes two primary contributions:

1. Firstly, to tackle the challenges associated with balancing heterogeneous data for balanced and efficient training across 1D to 3D data, we propose Domain-aware Group Relative Policy Optimization (DRPO). DRPO employs hierarchical scaling based on the domain of the input data, which encourages the model’s learning on scarce and hard domains, allowing balanced learning across difficulty levels. Our empirical evaluation demonstrates that DRPO consistently outperforms established RL approaches in diverse multi-domain settings, with up to 43% improvement in average F1 score across 8 clinical vision modalities.
2. To tackle the second challenge of expert interpretability, we design and release one of the first multimodal clinical reasoning models, namely QoQ-Med-7B/32B (Q wen O mni-Reasoning on Med ical Q uestions), that integrates visual, time series, and textual data for comprehensive analysis of clinical records, facilitating more holistic diagnostic reasoning. QoQ-Med is trained to highlight salient regions in the visual input data, advancing the interpretability while allowing the clinician to check the model’s diagnosis with ease. To the best of our knowledge, QoQ-Med is currently the largest open-source multimodal reasoning model for clinical diagnosis, and the only MLLM that integrates time series data (ECG) with traditional clinical vision modalities.

Finally, we publicly release our model, training pipeline, and reasoning traces generated by the model across 2.61 million question-answer pairs at [this link](https://github.com/DDVD233/QoQ_Med). This marks one of the largest resources for transparent and reproducible multimodal reasoning in the clinical domain.

## 2 Related Work

### 2.1 Multimodal Large Language Models (MLLMs) for clinical diagnosis

Recent work has adapted vision–language interfaces to the medical domain, yielding models such as LLaVa-Med [^48], RadLM [^90], and Med-Flamingo [^56]. These models couple frozen LLM backbones with image encoders and are trained on radiology or pathology visual-question-answering and report-generation benchmarks [^24]. Although these systems demonstrate impressive zero-shot understanding, their training corpora are dominated by single-institution chest X-rays, retinal photographs, and pathology slides, resulting in limited generalization to demographic diversity and poor robustness to real-world distribution [^44]. GEM [^47] is the only MLLM incorporating ECG data, but the training focus is purely ECG, which does not provide a comprehensive diagnosis aggregating multiple sources. Our work addresses these gaps by assembling a richer corpus spanning imaging, time-series, and text, and by designing an architecture that natively models medical time-series alongside traditional modalities.

### 2.2 LLM reasoning with reinforcement learning

The introduction of instruction tuning precipitated a rapid shift from supervised fine-tuning to reinforcement learning pipelines. Proximal Policy Optimization (PPO) [^74] as popularized by InstructGPT, trains LLMs against a reward model under a KL penalty to a frozen reference, with an auxiliary critic estimating advantages [^62]. While effective, PPO’s critic incurs substantial memory and computation costs and can destabilise multi-task optimization [^73]. To reduce overhead, critic-free objectives such as Direct Preference Optimization (DPO) [^70] and Group Relative Policy Optimization (GRPO) [^75] have emerged, matching PPO’s alignment quality with a simple classification loss. GRPO, in particular, has been widely used in the training of recent SoTA models, such as DeepSeek R1 [^29] and Qwen-3 [^79]. However, removing the critic also eliminates per-sample re-weighting, causing it to overfit on easy, abundant samples [^33]. Classic deep-RL work explored adaptive rescaling through task-wise normalization in IMPALA [^27] and the PopArt [^31]. However, these techniques have not been adapted to LLMs or extended to capture fine-grained intra-domain differences. We reinstate that flexibility by learning both inter-domain and intra-domain scaling factors within a critic-free RLHF pipeline, combining the efficiency advantages of GRPO with the adaptive weighting capabilities offered by critic-based methods.

## 3 Method

![Refer to caption](https://arxiv.org/html/x1.png)

Figure 1: (a) Overview of QoQ-Med. The training corpus spans 11 clinical domains, including structured waveforms (e.g., ECG), diverse imaging modalities, electronic health records, and curated clinical QA pairs. Modality‑specific encoders convert inputs into token embeddings that are linearly projected into a common space and interleaved with text tokens before entering the LLM backbone. The model then autoregressively produces (i) an explainable chain‑of‑thought, (ii) bounding‑box annotations highlighting salient regions, and (iii) a concise clinical diagnosis. (b) Overview of DRPO Training. DRPO builds on top of the critic-free RL training method GRPO. The model’s answer is first rated by a reward model before going through standard normalization. Then, a clustering-based scaling is performed on top of domain-wise scaling, both of which encourage the model to focus on scarce, hard examples across domains.

In this section, we first define our problem as a multimodal diagnosis question answering task, before describing how we integrated time series alongside vision inputs into a single unified model. Finally, we demonstrate in detail how we address the domain heterogeneity problem with the Domain-aware Relative Policy Optimization (DRPO) algorithm and design of appropriate reward functions.

### 3.1 Problem Definition

Each clinical sample is $\mathbf{x}_{i}=\bigl(\mathbf{x}^{(v)}_{i},\mathbf{x}^{(t)}_{i},\mathbf{x}^{(s)}_{i},g_{i}\bigr)$ , where $\mathbf{x}^{(v)}_{i}\in\mathbb{R}^{P_{i}\times d_{v}}$ is a patchified image, $\mathbf{x}^{(t)}_{i}\in\mathbb{R}^{k_{i}\times T_{i}}$ is multichannel time-series data, $\mathbf{x}^{(s)}_{i}$ is text input, and $g_{i}\in\{1,\dots,C\}$ denotes the clinical domain (e.g., CT scans, ECG, Chest X-ray). Vision and time-series inputs are optional, which requires the model to handle missing modalities. The learning objectives are to predict: (i) an unsupervisedly learned reasoning trace, (ii) bounding boxes $\mathbf{b}_{i}=\{b_{i,j}\}_{j=1}^{K_{i}}$ with $b_{i,j}\in\mathbb{R}^{4}$ in $(x,y,w,h)$ format highlighting salient image regions, and (iii) a concise diagnosis $\hat{y}_{i}$ .

### 3.2 Model

Table 1: Comparison of QoQ-Med against other open-source public clinical MLLMs. BBox: Ability to predict salient bounding boxes; CXR: Chest X-ray; Mammo.: Mammorgraphy; Derm: Dermoscopy; Patho.: Histopathology; US: Ultrasound. BBox: Whether the model is able to produce bounding boxes as output. QoQ-Med is currently the largest medical reasoning MLLM in the field, and the only model trained with DRPO, our RL training algorithm we introduced in Sec. [3.3](https://arxiv.org/html/2506.00711v2#S3.SS3 "3.3 Domain-aware Relative Policy Optimization (DRPO) ‣ 3 Method ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"). \* [^90] are trained on some ECG images, but none of them are trained on raw ECG time series input.

<table><thead><tr><th rowspan="2"><span>Model</span></th><th rowspan="2"><span>Size</span></th><th rowspan="2"><span>Training</span></th><th rowspan="2"><span>BBox</span></th><th><span>1D</span></th><th colspan="5"><span>2D</span></th><th colspan="3"><span>3D</span></th></tr><tr><th><span>ECG</span></th><th><span>CXR</span></th><th><span>Mammo.</span></th><th><span>Derm.</span></th><th><span>Fundus</span></th><th><span>Patho.</span></th><th><span>US</span></th><th><span>MRI</span></th><th><span>CT</span></th></tr></thead><tbody><tr><td><span>LLaVa-Med</span> <sup><a href="https://arxiv.org/html/#fn:48">48</a></sup></td><td><span>7B-13B</span></td><td><span>SFT</span></td><td><span>✓</span></td><td><span>✗</span></td><td><span>✓</span></td><td><span>✗</span></td><td><span>✓</span></td><td><span>✗</span></td><td><span>✓</span></td><td><span>✗</span></td><td><span>✓</span></td><td><span>✓</span></td></tr><tr><td><span>Med-Flamingo</span> <sup><a href="https://arxiv.org/html/#fn:56">56</a></sup></td><td><span>8.3B</span></td><td><span>SFT</span></td><td><span>✗</span></td><td><span>o</span> <span>*</span></td><td><span>✓</span></td><td><span>✗</span></td><td><span>✓</span></td><td><span>✗</span></td><td><span>✓</span></td><td><span>✗</span></td><td><span>✓</span></td><td><span>✓</span></td></tr><tr><td><span>RadFM</span> <sup><a href="https://arxiv.org/html/#fn:85">85</a></sup></td><td><span>14B</span></td><td><span>SFT</span></td><td><span>✓</span></td><td><span>✗</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✗</span></td><td><span>✗</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td></tr><tr><td><span>BiomedGPT</span> <sup><a href="https://arxiv.org/html/#fn:90">90</a></sup></td><td><span>33M-182M</span></td><td><span>SFT</span></td><td><span>✓</span></td><td><span>o</span> <span>*</span></td><td><span>✓</span></td><td><span>✗</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td></tr><tr><td><span>Med-R1</span> <sup><a href="https://arxiv.org/html/#fn:46">46</a></sup></td><td><span>2B</span></td><td><span>GRPO</span></td><td><span>✗</span></td><td><span>✗</span></td><td><span>✓</span></td><td><span>✗</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td></tr><tr><td><span>QoQ-Med (Ours)</span></td><td><span>7B-32B</span></td><td><span>DRPO</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td><td><span>✓</span></td></tr></tbody></table>

We design the model with an aim that it can take in data across as many domains as possible, so that it can provide comprehensive diagnosis while correlate and co-train across the most diverse range of clinical domains, with inputs ranging from 1D to 3D.

Model Design. As shown in Figure [1](https://arxiv.org/html/2506.00711v2#S3.F1 "Figure 1 ‣ 3 Method ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"), we initialize QoQ-Med from a large pretrained vision–language model comprising an image encoder, a linear projection that maps each visual patch embedding into the backbone LLM’s token space, and the LLM. To ingest temporal data, we prepend a pretrained time‑series encoder, namely ECG-JEPA [^43], whose outputs are passed through a newly initialized linear projection of matching dimension. At inference, the projected image patches, time‑series tokens, and tokenized text are interleaved in their original temporal order and fed to the LLM. The LLM autoregressively generates a free‑text chain of thought, bounding‑box tokens that localize the evidence identified in that reasoning, and outputs a short diagnosis. This design supports heterogeneous modality combinations, allowing the model to skip missing channels while preserving positional consistency across the multimodal sequence.

Training Process. Training proceeds in two stages. Stage 1: modality alignment. Since we initialize the projection layer from scratch, we first train and align the ECG encoder, the projection layer, and the LLM. To encourage high-quality reasoning outputs from the beginning, we use the same DRPO training as in Stage 2. Stage 2: multimodal fine‑tuning with DRPO. We train on the full multimodal corpus with DRPO, as described in Sec. [3.3](https://arxiv.org/html/2506.00711v2#S3.SS3 "3.3 Domain-aware Relative Policy Optimization (DRPO) ‣ 3 Method ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"), which balances training across different samples in various domains and difficulty. In this stage, we aim to simultaneously improve the diagnostic accuracy and reasoning quality, with rewards described in Sec. [3.4](https://arxiv.org/html/2506.00711v2#S3.SS4 "3.4 Reward Design ‣ 3 Method ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training").

Training Data. We train the unified vision and time-series model across 33 datasets using the CLIMB dataset [^22]. The dataset contains 2.61 million samples across 1D (ECG), 2D (Chest X-ray, Mammography, Dermoscopy, histopathology, Fundus), and 3D (Ultrasound, MRI, CT Scan) data. The exact composition of the data and the training hyperparameters are included in App. [C](https://arxiv.org/html/2506.00711v2#A3 "Appendix C Details of the Datasets used in Training and Validation ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training") and [D](https://arxiv.org/html/2506.00711v2#A4 "Appendix D Details of Training and Evaluation ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training").

Comparison with current public clinical MLLMs. Table [1](https://arxiv.org/html/2506.00711v2#S3.T1 "Table 1 ‣ 3.2 Model ‣ 3 Method ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training") demonstrates that our model is currently the largest open clinical MLLM in the field. It is also the only model that can both take in time series data and output its thinking process, along with the bounding box annotation highlighting the salient region made during the thinking process.

### 3.3 Domain-aware Relative Policy Optimization (DRPO)

Group Relative Policy Optimization (GRPO) is a reinforcement learning method that gained prominence following the success of DeepSeek-R1. Unlike Proximal Policy Optimization (PPO), which relies on a separate value network to estimate advantages, GRPO directly computes the advantage $\hat{A}_{(q,i,t)}$ (Eq. [1](https://arxiv.org/html/2506.00711v2#S3.E1 "In 3.3 Domain-aware Relative Policy Optimization (DRPO) ‣ 3 Method ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training")) for each response within a group of rollouts $G_{(q,t)}$ at a given training iteration. A rollout refers to a single sampled trajectory or response generated by the policy in reaction to a prompt. The advantage quantifies how much better a particular rollout is compared to others generated for the same prompt, enabling the policy to prioritize relatively high-quality responses without requiring an explicit estimate of expected return.

Each group of rollouts $G_{(q,t)}$ consists of multiple responses sampled for the same prompt $q$ . Let $r_{(q,i,t)}$ denote the scalar reward assigned to the $i$ -th response $o_{(q,i,t)}$ at time step $t$ , where each response is a sequence of tokens $o_{(q,i,t)}:=o_{(q,i,t):1},\ o_{(q,i,t):2},\ \ldots,\ o_{(q,i,t):n_{o_{(q,i,t)}}}$ , and $n_{o_{(q,i,t)}}$ denotes the length of the token sequence. The set of rewards for the group is defined as $R_{G_{(q,t)}}=\{r_{(q,1,t)},r_{(q,2,t)},\ldots,r_{(q,|G_{q}|,t)}\}$ , where $|G_{q}|$ is the number of responses in the group. GRPO normalizes these rewards to have zero mean and unit variance, producing the normalized advantage:

<table><tbody><tr><td></td><td><math><semantics><mrow><mrow><msubsup><mover><mi>A</mi> <mo>^</mo></mover> <mrow><mo>(</mo><mi>q</mi><mo>,</mo><mi>i</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow> <mtext>GRPO</mtext></msubsup> <mo>=</mo> <mstyle><mfrac><mrow><msub><mi>r</mi> <mrow><mo>(</mo><mi>q</mi><mo>,</mo><mi>i</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub> <mo>−</mo> <msub><mover><mi>μ</mi> <mo>^</mo></mover> <msub><mi>G</mi> <mrow><mo>(</mo><mi>q</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub></msub></mrow> <mrow><msub><mover><mi>σ</mi> <mo>^</mo></mover> <msub><mi>G</mi> <mrow><mo>(</mo><mi>q</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub></msub> <mo>+</mo> <mi>ε</mi></mrow></mfrac></mstyle></mrow><mo>,</mo></mrow><annotation>\displaystyle\hat{A}_{(q,i,t)}^{\text{GRPO}}=\frac{r_{(q,i,t)}-\hat{\mu}_{G_{(q,t)}}}{\hat{\sigma}_{G_{(q,t)}}+\varepsilon},</annotation></semantics></math></td><td></td><td rowspan="1"><span>(1)</span></td></tr></tbody></table>

where $\hat{\mu}_{G_{(q,t)}}$ and $\hat{\sigma}_{G_{(q,t)}}$ denote the empirical mean and standard deviation of the group rewards, respectively, and $\varepsilon$ is a small constant added for numerical stability. These advantage estimates are incorporated into the GRPO clipped surrogate objective, which also includes a per-token KL divergence penalty:

|  | $\displaystyle\tilde{A}_{(q,i,t):k}(\theta)=\min\left(\varphi_{(q,i,t):k}(\theta)\cdot\hat{A}_{(q,i,t)}^{\text{GRPO}},\ \operatorname{clip}\left(\varphi_{(q,i,t):k}(\theta),\ 1-\varepsilon,\ 1+\varepsilon\right)\cdot\hat{A}_{(q,i,t)}^{\text{GRPO}}\right),$ |  |
| --- | --- | --- |
|  | $\displaystyle\varphi_{(q,i,t):k}(\theta)=\frac{\pi_{\theta}(o_{(q,i,t):k}\mid q,\ o_{(q,i,t):<k})}{\pi_{\theta_{\text{old}}}(o_{(q,i,t):k}\mid q,\ o_{(q,i,t):<k})},$ |  |
|  | $\displaystyle J_{\text{GRPO}}(\theta)=\mathbb{E}_{q\sim\mathcal{D},\,\{o_{(q,i,t)}\}\sim\pi_{\theta_{\text{old}}}}\left[\frac{1}{\|G_{(q,t)}\|}\sum_{i=1}^{\|G_{(q,t)}\|}\frac{1}{n_{o_{(q,i,t)}}}\sum_{k=1}^{n_{o_{(q,i,t)}}}\tilde{A}_{(q,i,t):k}(\theta)-\beta\,D_{\mathrm{KL}}\left(\pi_{\theta}\,\\|\,\pi_{\text{ref}}\right)\right].$ |  |

Here, $o_{(q,i,t):<k}$ refers to the token subsequence from position 1 to $k-1$ , and $\mathcal{D}$ denotes the dataset distribution. The term $\varphi_{(q,i,t):k}(\theta)$ represents the importance sampling ratio between the current policy $\pi_{\theta}$ and the old policy $\pi_{\theta_{\text{old}}}$ at token position $k$ ; $\hat{A}_{(q,i,t)}^{\text{GRPO}}$ is the normalized advantage estimate for the $i$ -th response in group $G_{(q,t)}$ ; $\varepsilon$ is a small constant used for numerical stability and clipping; $\beta$ is a scalar hyperparameter that controls the strength of the KL divergence regularization; and $D_{\mathrm{KL}}(\pi_{\theta}\|\pi_{\text{ref}})$ denotes the Kullback–Leibler divergence between the learned policy and a reference policy. GRPO demonstrates strong empirical performance when the input data is relatively homogeneous. However, in settings with high data heterogeneity, domains with abundant samples tend to dominate the optimization process, while under-represented domains contribute minimally. This imbalance can bias the model and degrade performance on rare but clinically important modalities, while spending too much compute on easy problems on abundant domains.

Domain-aware Relative Policy Optimization (DRPO). While GRPO normalizes reward signals across rollouts that respond to the *same* prompt—thereby reducing variance within a group and ensuring fairer comparison among responses—it does not address imbalance *across* domains. As a result, domains that appear more frequently in the training data continue to have a disproportionate impact on the learning process. DRPO builds on GRPO by introducing a hierarchical scaling mechanism that explicitly balances contributions from different domains. This correction for inter-domain imbalance preserves GRPO’s simplicity and value-free formulation while promoting more equitable learning across heterogeneous data distributions.

Hierarchical Cluster-Based Scaling. The core innovation of DRPO lies in a hierarchical scaling strategy that adaptively balances learning signals based on both domain frequency and task difficulty. This mechanism operates at two levels: across domains, to mitigate the dominance of overrepresented domains, and within domains, to adjust for variations in response quality or reward magnitude. Concretely, we first cluster question-level reward sets within each domain, treating each set of individual rewards as a feature vector. We then apply a two-stage reward scaling procedure—first at the cluster level, then at the individual reward level—thereby emphasizing learning from rare and challenging questions.

Stage-1: Intra-Domain Clustering. At each iteration step $t$ , we begin by sampling an independent batch of questions. These questions are then clustered into different domains. Let $g$ denote a domain, and let $N_{(g,t)}$ represent the number of questions in domain $g$ at iteration $t$ . Within each domain at iteration $t$ , we first compute the set of rewards for each question. These rewards, collected across multiple rollouts, are concatenated into a feature vector per question. Specifically, for each domain $g$ , we construct a set of reward vectors $\mathcal{H}_{g}=\{\mathbf{v}_{q}^{g}\}_{q=1}^{N_{g}},\quad\mathbf{v}_{q}^{g}\in\mathbb{R}^{|G_{(q,t)}|}$ , where $\mathbf{v}_{q}^{g}$ contains the $R_{G_{(q,t)}}$ rollout rewards for question $q$ , and $N_{(g,t)}$ is the number of questions in domain $g$ , at iteration step t.

To uncover patterns in question difficulty, we apply K-means clustering to these reward vectors at each time step $t$ , separately within each domain:

|  | $$ \{\mathbf{C}_{(1,g,t)},\mathbf{C}_{(2,g,t)},\ldots,\mathbf{C}_{(k_{(g,t)},g,t)}\}=\text{KMeans}(\mathcal{H}_{g},k_{(g,t)}), $$ |  |
| --- | --- | --- |

where $\mathbf{C}_{(c,g,t)}$ denotes the centroid of cluster $c$ in domain $g$ , and $k_{(g,t)}$ is the number of clusters, which is determined automatically using the elbow method (see Appendix [B.1](https://arxiv.org/html/2506.00711v2#A2.SS1 "B.1 Elbow Method for K-means Cluster Selection ‣ Appendix B DRPO Implementation Details ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training")).

Stage-2: Hierarchical Scaling. For each domain and each cluster within that domain, we compute inter-domain temperature factors $T_{(g,t)}$ and intra-domain temperature factors $T_{(c,g,t)}$ . These factors capture both the relative size and average difficulty of each domain and cluster. Difficulty is estimated using the mean reward, either per domain or per cluster within the domain, which serves as a proxy for how easy or challenging the questions are within each specific domain and cluster. These temperature factors are then *inversely multiplied* with the corresponding advantage functions—at both the domain and cluster levels—so that domains and clusters that are smaller or harder receive proportionally greater weight during training. Concretely:

<table><tbody><tr><td></td><td><math><semantics><mrow><mrow><mrow><msub><mi>T</mi> <mrow><mo>(</mo><mi>g</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub> <mo>=</mo> <mrow><mi>max</mi> <mo>⁡</mo> <mrow><mo>(</mo><mrow><msqrt><msub><mi>N</mi> <mrow><mo>(</mo><mi>g</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub></msqrt> <mo>⋅</mo> <msub><mi>μ</mi> <mrow><mo>(</mo><mi>g</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub></mrow><mo>,</mo><mi>ε</mi><mo>)</mo></mrow></mrow></mrow><mo>,</mo><mrow><msub><mi>T</mi> <mrow><mo>(</mo><mi>c</mi><mo>,</mo><mi>g</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub> <mo>=</mo> <mrow><mi>max</mi> <mo>⁡</mo> <mrow><mo>(</mo><mrow><msqrt><msub><mi>N</mi> <mrow><mo>(</mo><mi>c</mi><mo>,</mo><mi>g</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub></msqrt> <mo>⋅</mo> <msub><mi>μ</mi> <mrow><mo>(</mo><mi>c</mi><mo>,</mo><mi>g</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub></mrow><mo>,</mo><mi>ε</mi><mo>)</mo></mrow></mrow></mrow></mrow><mo>,</mo></mrow><annotation>T_{(g,t)}=\max\left(\sqrt{N_{(g,t)}}\cdot\mu_{(g,t)},\varepsilon\right),\quad T_{(c,g,t)}=\max\left(\sqrt{N_{(c,g,t)}}\cdot\mu_{(c,g,t)},\varepsilon\right),</annotation></semantics></math></td><td></td><td rowspan="1"><span>(2)</span></td></tr></tbody></table>

where $N_{(c,g,t)}$ is the size of cluster $c$ , and $\mu_{(g,t)}$ and $\mu_{(c,g,t)}$ denote the mean reward for group $g$ and cluster $c$ in group $g$ , at iteration $t$ .

To scale reward advantage with the appropriate temperature factors, we first normalize rewards at the question level as in GRPO, then scale by the domain and cluster temperatures, before multiplying by a KL regularization factor $m_{(i,t)}$ . Concretely,

<table><tbody><tr><td></td><td><math><semantics><mrow><mrow><msubsup><mi>s</mi> <mrow><mo>(</mo><mi>q</mi><mo>,</mo><mi>i</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow> <mrow><mi>s</mi> <mo></mo><mi>c</mi> <mo></mo><mi>a</mi> <mo></mo><mi>l</mi> <mo></mo><mi>e</mi> <mo></mo><mi>d</mi></mrow></msubsup> <mo>=</mo> <mfrac><mrow><msub><mi>m</mi> <mrow><mo>(</mo><mi>i</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub> <mo>⋅</mo> <msub><mi>s</mi> <mrow><mo>(</mo><mi>q</mi><mo>,</mo><mi>i</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub></mrow> <mrow><msub><mi>T</mi> <mrow><mo>(</mo><mi>g</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub> <mo>⋅</mo> <msub><mi>T</mi> <mrow><mo>(</mo><mi>c</mi><mo>,</mo><mi>g</mi><mo>,</mo><mi>t</mi><mo>)</mo></mrow></msub></mrow></mfrac></mrow><mo>,</mo></mrow><annotation>s_{(q,i,t)}^{scaled}=\frac{m_{(i,t)}\cdot s_{(q,i,t)}}{T_{(g,t)}\cdot T_{(c,g,t)}},</annotation></semantics></math></td><td></td><td rowspan="1"><span>(3)</span></td></tr></tbody></table>

where $s_{i}=\frac{r_{i,t}-\mu_{q,t}}{\sigma_{q}+\varepsilon}$ is the question level-normalized reward from GRPO. The KL regularization is applied to prevent outliers from dominating the update, as detailed in Appendix [B.2](https://arxiv.org/html/2506.00711v2#A2.SS2 "B.2 KL-aware Regularization ‣ Appendix B DRPO Implementation Details ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"). Finally, we scale the standard deviation back to 1 by dividing each reward by the standard deviation of the reward in the batch $\hat{A}_{(q,i,t)}^{\text{DRPO}}=\frac{s_{(q,i,t)}^{scaled}}{\sigma_{\textbf{s}_{t}^{scaled}}}$ .

DRPO Objective. DRPO maintains the same objective structure as GRPO, maximizing:

|  | $\displaystyle\tilde{A}_{(q,i,t):k}(\theta)=\min\left(\varphi_{(q,i,t):k}(\theta)\cdot\hat{A}_{(q,i,t)}^{\text{DRPO}},\ \operatorname{clip}\left(\varphi_{(q,i,t):k}(\theta),\ 1-\varepsilon,\ 1+\varepsilon\right)\cdot\hat{A}_{(q,i,t)}^{\text{DRPO}}\right),$ |  |
| --- | --- | --- |
|  | $\displaystyle J_{\text{DRPO}}(\theta)=\mathbb{E}_{q\sim\mathcal{D},\,\{o_{(q,i,t)}\}\sim\pi_{\theta_{\text{old}}}}\left[\frac{1}{\|G_{(q,t)}\|}\sum_{i=1}^{\|G_{(q,t)}\|}\frac{1}{n_{o_{(q,i,t)}}}\sum_{k=1}^{n_{o_{(q,i,t)}}}\tilde{A}_{(q,i,t):k}(\theta)-\beta\,D_{\mathrm{KL}}\left(\pi_{\theta}\,\\|\,\pi_{\text{ref}}\right)\right],$ |  |

where $\varphi_{(q,i,t):k}(\theta)=\frac{\pi_{\theta}(o_{(q,i,t):k}\mid q,\ o_{(q,i,t):<k})}{\pi_{\theta_{\text{old}}}(o_{(q,i,t):k}\mid q,\ o_{(q,i,t):<k})}$ .

Benefits of DRPO. The cluster-based DRPO approach offers several key benefits:

1. Hierarchical Scaling: DRPO implements two-layer scaling: first at the domain level and then at the cluster level within each domain. This directs optimization toward both underrepresented domains and challenging question subsets, ensuring the model learns effectively across all data types. This approach prevents the model from focusing only on easy or common problems while neglecting rare but important clinical scenarios.
2. Preservation of Zero Mean and Unit Variance: DRPO scales rewards after GRPO normalization, maintaining the property that the mean reward within each set of rollouts remains 0 and the standard deviation is 1. This property is crucial for stable optimization in reinforcement learning, as established in previous works [^14].
3. Computational Efficiency: DRPO operates with minimal additional complexity of order $O(n)$ , primarily from the K-means algorithm operating on low-dimensional vectors (typically 5-10 elements). This enables efficient training without the overhead of critic networks, making it particularly suitable for large-scale LLM fine-tuning.

### 3.4 Reward Design

During the training of QoQ-Med, we employ a combination of two main rewards and two auxiliary rewards that balance diagnostic accuracy with interpretability, a critical requirement for clinical applications where understanding model reasoning.

Accuracy reward. The primary goal of our model is diagnostic accuracy, for which we compute a standard accuracy reward $r^{\text{acc}}_{i}$ . We treat prediction $\hat{y}_{i}$ and ground truth $y_{i}$ as unordered sets of labels and assign $r^{\text{acc}}_{i}=\operatorname{F1}\!\bigl(\hat{y}_{i},\,y_{i}\bigr)$ , which directly optimizes the model’s ability to identify correct diagnoses across diverse clinical scenarios.

Semantic alignment reward. For clinical applications, the ability to identify and highlight relevant regions in medical imagery is crucial for building clinician trust. The semantic alignment reward encourages the model to correctly identify salient regions that support its diagnostic decisions. Let $\mathbf{b}_{i}=\{b_{i,j}\}_{j=1}^{K_{i}}$ be the set of axis‑aligned bounding boxes output by the model and $S_{i}\subseteq[0,1]^{H\times W}$ the pixel‑level segmentation mask associated with the ground‑truth diagnosis. We define this reward as the best intersection‑over‑union score: $r^{\text{IoU}}_{i}=\max_{j=1,\dots,K_{i}}\frac{\operatorname{area}\ \!\bigl(b_{i,j}\cap S_{i}\bigr)}{\operatorname{area}\ \!\bigl(b_{i,j}\cup S_{i}\bigr)}.$ By optimizing this reward, the model learns to visually highlight the specific anatomical regions relevant to its diagnosis, providing critical interpretability for clinical decision support.

Auxiliary rewards. We also employ auxiliary rewards that encourage proper formatting and comprehensive reasoning, detailed in Appendix [B.3](https://arxiv.org/html/2506.00711v2#A2.SS3 "B.3 Auxiliary Rewards ‣ Appendix B DRPO Implementation Details ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"). These rewards help ensure that the model’s outputs are well-structured and sufficiently detailed for clinical use.

Combined reward. The final scalar reward supplied to DRPO is a weighted combination: $r_{i}=\lambda_{\text{acc}}\,r^{\text{acc}}_{i}+\lambda_{\text{IoU}}\,r^{\text{IoU}}_{i}+\lambda_{\text{aux}}\,r^{\text{aux}}_{i}$ . In our experiments, we set $(\lambda_{\text{acc}},\lambda_{\text{IoU}},\lambda_{\text{aux}})=(0.6,\,0.2,\,0.2)$ .

## 4 Experiments

We design experiments to answer the following research questions. Details are included in App. [D](https://arxiv.org/html/2506.00711v2#A4 "Appendix D Details of Training and Evaluation ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training").

RQ1: How does DRPO compare with other critic‑free RL methods and models? As detailed in Sec. [3.2](https://arxiv.org/html/2506.00711v2#S3.SS2 "3.2 Model ‣ 3 Method ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"), we train and evaluate QoQ-Med on a combination of 30 clinical diagnosis datasets across 9 clinical domains. A description of each dataset is included in App. [C](https://arxiv.org/html/2506.00711v2#A3 "Appendix C Details of the Datasets used in Training and Validation ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"). The models are evaluated with balanced accuracy and macro‑F1. We compare our training method DRPO against supervised fine-tuning (SFT), PPO [^74] and four popular critic-free RL training methods: GRPO [^75], RLOO [^2], Reinforce++ [^33], and ReMax [^50]. We further compare our trained model QoQ-Med against medical VLMs (Llava-Med [^48], Med-R1 [^46]) and closed source VLMs (GPT-4o [^37], o4-mini [^61]).

RQ2: How well does DRPO handle mixed multimodal inputs? We repeat the comparison on MIMIC‑IV, where samples contain a chest X‑ray, a 12‑lead ECG trace, and an accompanying clinical record. We train and evaluate the models on two tasks: length of stay (LOS) prediction, binned into a 4-day interval, and 48-hour in-hospital mortality (48-IHM). We evaluate the model with accuracy and F1 score in the same way as RQ1.

RQ3: How is the quality of the reasoning traces and bounding boxes learned by DRPO? We did both a qualitative and a quantitative analysis on QoQ-Med’s reasoning and bounding box outputs. We evaluate the bounding box quality via the intersection over union (IoU) against the ground truth segmentation available in the dataset. We further collaborated with clinicians to annotate the reasoning traces on the validation dataset, grading the traces by their relevance to the final diagnosis.

Table 2: Performance comparison of medical vision-language models across various medical imaging modalities. Acc: Accuracy, F1: F1 Score, CXR: Chest X-ray. DRPO training outperforms various other RL training methods and SFT across 7 out of 8 medical imaging domains in F1 score. The metrics are averaged across four separate training runs. Metrics with standard deviation is included in App. Tab. [7](https://arxiv.org/html/2506.00711v2#A6.T7 "Table 7 ‣ Appendix F Full Training Metrics ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training").

<table><tbody><tr><th rowspan="2"><span>Model</span></th><td colspan="2"><span>CXR</span></td><td colspan="2"><span>Mammo.</span></td><td colspan="2"><span>Dermoscopy</span></td><td colspan="2"><span>CT Scan</span></td><td colspan="2"><span>Fundus</span></td><td colspan="2"><span>Ultrasound</span></td><td colspan="2"><span>MRI</span></td><td colspan="2"><span>Pathology</span></td><td colspan="2"><span>Overall</span></td></tr><tr><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td></tr><tr><th><span>SFT</span></th><td><span>.688</span></td><td><span>.078</span></td><td><span>.481</span></td><td><span>.056</span></td><td><span>.640</span></td><td><span>.158</span></td><td><span>.525</span></td><td><span>.236</span></td><td><span>.715</span></td><td><span>.066</span></td><td><span>.548</span></td><td><span>.235</span></td><td><span>.567</span></td><td><span>.197</span></td><td><span>.652</span></td><td><span>.083</span></td><td><span>.602</span></td><td><span>.139</span></td></tr><tr><th><span>PPO</span> <sup><a href="https://arxiv.org/html/#fn:74">74</a></sup></th><td><span>.670</span></td><td><span>.064</span></td><td><span>.738</span></td><td><span>.205</span></td><td><span>.668</span></td><td><span>.278</span></td><td><span>.571</span></td><td><span>.257</span></td><td><span>.669</span></td><td><span>.083</span></td><td><span>.490</span></td><td><span>.080</span></td><td><span>.767</span></td><td><span>.540</span></td><td><span>.745</span></td><td><span>.364</span></td><td><span>.665</span></td><td><span>.234</span></td></tr><tr><th><sup><a href="https://arxiv.org/html/#fn:50">50</a></sup></th><td><span>.636</span></td><td><span>.120</span></td><td><span>.577</span></td><td><span>.033</span></td><td><span>.644</span></td><td><span>.257</span></td><td><span>.567</span></td><td><span>.228</span></td><td><span>.678</span></td><td><span>.089</span></td><td><span>.547</span></td><td><span>.147</span></td><td><span>.547</span></td><td><span>.264</span></td><td><span>.706</span></td><td><span>.270</span></td><td><span>.596</span></td><td><span>.176</span></td></tr><tr><th><sup><a href="https://arxiv.org/html/#fn:33">33</a></sup></th><td><span>.730</span></td><td><span>.082</span></td><td><span>.660</span></td><td><span>.076</span></td><td><span>.635</span></td><td><span>.237</span></td><td><span>.529</span></td><td><span>.247</span></td><td><span>.672</span></td><td><span>.098</span></td><td><span>.519</span></td><td><span>.136</span></td><td><span>.651</span></td><td><span>.420</span></td><td><span>.668</span></td><td><span>.254</span></td><td><span>.621</span></td><td><span>.202</span></td></tr><tr><th><sup><a href="https://arxiv.org/html/#fn:2">2</a></sup></th><td><span>.752</span></td><td><span>.086</span></td><td><span>.471</span></td><td><span>.068</span></td><td><span>.636</span></td><td><span>.216</span></td><td><span>.534</span></td><td><span>.224</span></td><td><span>.670</span></td><td><span>.099</span></td><td><span>.519</span></td><td><span>.144</span></td><td><span>.658</span></td><td><span>.432</span></td><td><span>.699</span></td><td><span>.216</span></td><td><span>.611</span></td><td><span>.189</span></td></tr><tr><th><sup><a href="https://arxiv.org/html/#fn:75">75</a></sup></th><td><span>.703</span></td><td><span>.095</span></td><td><span>.466</span></td><td><span>.059</span></td><td><span>.646</span></td><td><span>.244</span></td><td><span>.524</span></td><td><span>.236</span></td><td><span>.670</span></td><td><span>.086</span></td><td><span>.520</span></td><td><span>.146</span></td><td><span>.631</span></td><td><span>.395</span></td><td><span>.715</span></td><td><span>.286</span></td><td><span>.609</span></td><td><span>.193</span></td></tr><tr><th><span>DRPO <math><semantics><msub><mtext>DomainOnly</mtext></msub> <annotation>{}_{\text{DomainOnly}}</annotation></semantics></math></span></th><td><span>.693</span></td><td><span>.086</span></td><td><span>.751</span></td><td><span>.213</span></td><td><span>.679</span></td><td><span>.251</span></td><td><span>.571</span></td><td><span>.257</span></td><td><span>.669</span></td><td><span>.083</span></td><td><span>.480</span></td><td><span>.098</span></td><td><span>.733</span></td><td><span>.475</span></td><td><span>.762</span></td><td><span>.388</span></td><td><span>.668</span></td><td><span>.237</span></td></tr><tr><th><span>DRPO <math><semantics><msub><mtext>NoKL</mtext></msub> <annotation>{}_{\text{NoKL}}</annotation></semantics></math></span></th><td><span>.685</span></td><td><span>.103</span></td><td><span>.711</span></td><td><span>.264</span></td><td><span>.691</span></td><td><span>.382</span></td><td><span>.597</span></td><td><span>.365</span></td><td><span>.676</span></td><td><span>.085</span></td><td><span>.554</span></td><td><span>.228</span></td><td><span>.722</span></td><td><span>.535</span></td><td><span>.710</span></td><td><span>.300</span></td><td><span>.668</span></td><td><span>.283</span></td></tr><tr><th><span>DRPO</span></th><td><span>.687</span></td><td><span>.115</span></td><td><span>.756</span></td><td><span>.253</span></td><td><span>.715</span></td><td><span>.407</span></td><td><span>.570</span></td><td><span>.309</span></td><td><span>.672</span></td><td><span>.093</span></td><td><span>.555</span></td><td><span>.223</span></td><td><span>.789</span></td><td><span>.625</span></td><td><span>.708</span></td><td><span>.265</span></td><td><span>.666</span></td><td><span>.295</span></td></tr></tbody></table>

Table 3: Ablation studies on cluster size and reward composition. Acc: Accuracy, F1: F1 Score. Bold values indicate best performance within each ablation group.

<table><tbody><tr><th rowspan="2"><span>Config</span></th><td colspan="2"><span>CXR</span></td><td colspan="2"><span>Mammo.</span></td><td colspan="2"><span>Dermoscopy</span></td><td colspan="2"><span>CT Scan</span></td><td colspan="2"><span>Fundus</span></td><td colspan="2"><span>Ultrasound</span></td><td colspan="2"><span>MRI</span></td><td colspan="2"><span>Pathology</span></td><td colspan="2"><span>Overall</span></td></tr><tr><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td><td><span>Acc</span></td><td><span>F1</span></td></tr><tr><th colspan="19"><span>Cluster Size</span></th></tr><tr><th><span>1</span></th><td><span>.694</span></td><td><span>.085</span></td><td><span>.746</span></td><td><span>.211</span></td><td><span>.678</span></td><td><span>.286</span></td><td><span>.571</span></td><td><span>.257</span></td><td><span>.669</span></td><td><span>.083</span></td><td><span>.544</span></td><td><span>.200</span></td><td><span>.757</span></td><td><span>.505</span></td><td><span>.773</span></td><td><span>.449</span></td><td><span>.679</span></td><td><span>.259</span></td></tr><tr><th><span>3</span></th><td><span>.694</span></td><td><span>.125</span></td><td><span>.568</span></td><td><span>.048</span></td><td><span>.680</span></td><td><span>.356</span></td><td><span>.562</span></td><td><span>.284</span></td><td><span>.672</span></td><td><span>.147</span></td><td><span>.520</span></td><td><span>.152</span></td><td><span>.717</span></td><td><span>.546</span></td><td><span>.723</span></td><td><span>.289</span></td><td><span>.642</span></td><td><span>.244</span></td></tr><tr><th><span>10</span></th><td><span>.691</span></td><td><span>.125</span></td><td><span>.759</span></td><td><span>.253</span></td><td><span>.707</span></td><td><span>.400</span></td><td><span>.580</span></td><td><span>.321</span></td><td><span>.670</span></td><td><span>.088</span></td><td><span>.568</span></td><td><span>.240</span></td><td><span>.806</span></td><td><span>.652</span></td><td><span>.707</span></td><td><span>.303</span></td><td><span>.686</span></td><td><span>.286</span></td></tr><tr><th><span>20</span></th><td><span>.668</span></td><td><span>.167</span></td><td><span>.751</span></td><td><span>.268</span></td><td><span>.675</span></td><td><span>.300</span></td><td><span>.548</span></td><td><span>.262</span></td><td><span>.635</span></td><td><span>.166</span></td><td><span>.547</span></td><td><span>.214</span></td><td><span>.804</span></td><td><span>.649</span></td><td><span>.731</span></td><td><span>.329</span></td><td><span>.670</span></td><td><span>.294</span></td></tr><tr><th colspan="19"><span>Reward Composition (Acc:IoU)</span></th></tr><tr><th><span>0.6:0.2</span></th><td><span>.691</span></td><td><span>.125</span></td><td><span>.759</span></td><td><span>.253</span></td><td><span>.707</span></td><td><span>.400</span></td><td><span>.580</span></td><td><span>.321</span></td><td><span>.670</span></td><td><span>.088</span></td><td><span>.568</span></td><td><span>.240</span></td><td><span>.806</span></td><td><span>.652</span></td><td><span>.707</span></td><td><span>.303</span></td><td><span>.686</span></td><td><span>.286</span></td></tr><tr><th><span>0.2:0.6</span></th><td><span>.690</span></td><td><span>.147</span></td><td><span>.563</span></td><td><span>.185</span></td><td><span>.668</span></td><td><span>.290</span></td><td><span>.576</span></td><td><span>.308</span></td><td><span>.681</span></td><td><span>.136</span></td><td><span>.573</span></td><td><span>.218</span></td><td><span>.768</span></td><td><span>.561</span></td><td><span>.698</span></td><td><span>.233</span></td><td><span>.652</span></td><td><span>.260</span></td></tr></tbody></table>

![Refer to caption](https://arxiv.org/html/x2.png)

Figure 2: (a) Difference in accuracy (DRPO - GRPO). DRPO brings the most performance gain in understudied modalities as defined in App. C.2. (b) Accuracy comparison of QoQ-Med against SoTA open source and closed source LLMs. QoQ-Med outperforms all open and closed MLLMs across 8 domains. The full results are included in App. Table 5

![Refer to caption](https://arxiv.org/html/x3.png)

Figure 3: (a) Accuracy of ECG Diagnosis. DRPO models reach the best performance among all critic-free RL methods. (b) Intersection over Union (IoU) of model-generated bounding boxes against truth labels. QoQ-Med (Ours) surpasses open source models and has a performance on par with o4-mini. (c) Per Step Runtime of reward calculation of RL methods on 8xA100 GPUs. While DRPO adds hierarchical clustering, the runtime of the reward calculation still accounts for less than 2% of the total runtime per step and has minimal impact on training.

### 4.1 RQ1: Comparison with other RL Training Methods and Models

Comparison with other RL methods. Table [2](https://arxiv.org/html/2506.00711v2#S4.T2 "Table 2 ‣ 4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training") shows a comparison between DRPO and several critic-free RL training methods across eight medical imaging modalities. The results demonstrate that DRPO consistently outperforms all competing methods in 6 out of 8 vision modalities in terms of F1 score. Overall, DRPO achieves a mean accuracy that is 5.9% higher in percentage points and an F1 score that is 46% higher compared to the best critic-free baseline method. As compared to GRPO in Fig. [2](https://arxiv.org/html/2506.00711v2#S4.F2 "Figure 2 ‣ 4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training") (a), the most substantial increase is observed in datasets from understudied modalities, like ultrasound and mammography, as defined in App. [C.2](https://arxiv.org/html/2506.00711v2#A3.SS2 "C.2 Defintion of Novel Tasks, Understudied Modalities and Underrepresented Regions ‣ Appendix C Details of the Datasets used in Training and Validation ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"). As shown in Fig. [2](https://arxiv.org/html/2506.00711v2#S4.F2 "Figure 2 ‣ 4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training") (b), QoQ-Med achieves the best performance across all clinical domains as compared to current open-source MLLMs. Compared to the closed-source commercial models, it achieves the best performance against GPT-4o [^37], while surpassing the reasoning model GPT-o4-mini [^60] in all domains except MRI.

Ablations. The substantial improvement in F1 score can be attributed to two key components of DRPO. First, the introduction of domain-wise scaling contributes to a significant 22.8% improvement in F1 score, as evidenced by the performance difference between DRPO <sub>DomainOnly</sub> and vanilla GRPO. Subsequently, after incorporating clustering within each domain and specifically encouraging the model to focus on small, challenging clusters within each domain, the performance is further enhanced by an additional 19.4% in terms of F1 score.

Tab. [3](https://arxiv.org/html/2506.00711v2#S4.T3 "Table 3 ‣ 4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training") shows further ablations on the number of clusters and reward compositions. In general, we found that the weight of each reward does not have a significant impact on the final performance. In particular, the auxiliary rewards on formatting saturate shortly in the early stages of training. They have effectively no impact on the later stages due to normalization. We tested different combinations of accuracy rewards: semantic alignment rewards. As demonstrated in the table, decreasing the weight of the accuracy reward gives a drop in overall performance and performance in most domains, but results are still significantly better than all baselines, which demonstrates the robustness of DRPO.

The number of clusters in the model is determined automatically via the elbow method, with the possibility to set an upper limit on the number of clusters. As a part of the ablation, we tested the model with 1 (no clustering), 3, 10 and 20 clusters, and included the results in Tab. [3](https://arxiv.org/html/2506.00711v2#S4.T3 "Table 3 ‣ 4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"). In general, we observe that having no cluster or a very low cluster limit will cause a decrease in performance. A higher cluster limit, however, does not seem to hurt the performance, as the elbow method automatically chooses a lower cluster count than the limit. This allows the algorithm to remain efficient under arbitrary cluster limits.

Runtime Efficiency. As shown in Fig. [3](https://arxiv.org/html/2506.00711v2#S4.F3 "Figure 3 ‣ 4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training") (c), while DRPO requires clusters to be calculated on each step, it has a negligible impact on the overall runtime. Across all critic-free RL methods, reward calculation accounts for less than 2% of the total runtime of a step.

### 4.2 RQ2: Multimodal Fusion Performance

Table 4: Models’ Perf. on MIMIC-IV. DRPO-Full with inputs from 3 modalities has the best performance for both tasks, time-series only (DRPO-TS+T) and vision only (DRPO-Vision+T) ablations having worse performance, and the text only ablation having the worst performance.

<table><thead><tr><th rowspan="2"><span>Algo/Inputs</span></th><th colspan="2"><span>LOS</span></th><th colspan="2"><span>48-IHM</span></th></tr><tr><th><span>Acc</span></th><th><span>F1</span></th><th><span>Acc</span></th><th><span>F1</span></th></tr></thead><tbody><tr><th><span>GRPO-Full</span></th><td><span>0.626</span></td><td><span>0.105</span></td><td><span>0.551</span></td><td><span>0.354</span></td></tr><tr><th><span>DRPO-TextOnly</span></th><td><span>0.645</span></td><td><span>0.195</span></td><td><span>0.563</span></td><td><span>0.583</span></td></tr><tr><th><span>DRPO-ECG+T</span></th><td><span>0.639</span></td><td><span>0.204</span></td><td><span>0.602</span></td><td><span>0.528</span></td></tr><tr><th><span>DRPO-Vision+T</span></th><td><span>0.669</span></td><td><span>0.223</span></td><td><span>0.596</span></td><td><span>0.586</span></td></tr><tr><th><span>DRPO-Full</span></th><td><span>0.663</span></td><td><span>0.283</span></td><td><span>0.642</span></td><td><span>0.597</span></td></tr></tbody></table>

We tested how the model integrates multiple modalities and how much each modality contributes to the final diagnostic accuracy via MIMIC-IV [^41] dataset. On the MIMIC-IV dataset, the model has to reason across ECGs, chest X-rays, and health records. As shown in Tab. [4](https://arxiv.org/html/2506.00711v2#S4.T4 "Table 4 ‣ 4.2 RQ2: Multimodal Fusion Performance ‣ 4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"), we found DRPO allows the model to reach a better performance in both tasks as compared to GRPO. In addition, taking full inputs across ECG, Chest X-ray images, and electronic health records (EHR) gives better performance than any ablation of these modalities, signaling that QoQ-Med is able to effectively aggregate information across all modalities. Specifically, we found vision and texts contirbute more to the final accuracy and F1 scores than ECG. While QoQ-Med represents a first step towards multimodal reasoning models across vision and time series, future works could explore better architecture, data, or training methods that better balances the power of each modalities.

### 4.3 RQ3: Quality of Reasoning Traces

Clinician relevance annotations. App. [D.4.2](https://arxiv.org/html/2506.00711v2#A4.SS4.SSS2 "D.4.2 Reasoning Trace Quality ‣ D.4 RQ3: Quality of Reasoning Traces and Bounding Boxes ‣ Appendix D Details of Training and Evaluation ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training") provides a breakdown of clinician-annotated reasoning traces, revealing that the model mostly generates contents highly relevant to the diagnosis, with minimal output judged as irrelevant. We observe that the model often correctly recalls relevant clinical knowledge, which help guide the model by providing associative context. For example, in Fig   [4](https://arxiv.org/html/2506.00711v2#S4.F4 "Figure 4 ‣ 4.3 RQ3: Quality of Reasoning Traces ‣ 4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training") (a), the model correctly recalls different signs of hemorrhage on CT, such as darker or whiter tissues, and relates this context to specific parts of the image to make a correct prediction. In Fig. [4](https://arxiv.org/html/2506.00711v2#S4.F4 "Figure 4 ‣ 4.3 RQ3: Quality of Reasoning Traces ‣ 4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training") (c), the model correctly identifies the presence of a pacemaker, indicating a support device, but subsequently concludes that there are no additional abnormalities, ultimately leading it to predict “No finding”. This suggests that while the model’s final predictions may be incorrect, its intermediate reasoning often reflects clinically relevant patterns.

Bounding box quality. Fig. [3](https://arxiv.org/html/2506.00711v2#S4.F3 "Figure 3 ‣ 4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training") (b) demonstrates that the model identifies bounding boxes correlated with the ground truth annotations, with the IoU exceeding the best open source models while reaching a similar performance as the closed-source reasoning model o4-mini. From Fig. [4](https://arxiv.org/html/2506.00711v2#S4.F4 "Figure 4 ‣ 4.3 RQ3: Quality of Reasoning Traces ‣ 4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"), we also see that the outputs by the model are sufficiently aligned with the reasoning process, allowing the clinicians to confirm the model’s predictions while cross-referencing the source image.

![Refer to caption](https://arxiv.org/html/x4.png)

Figure 4: Model outputs annotated by clinical experts. QoQ-Med correctly reasons from modality-specific clinical knowledge, generates bounding boxes, and outputs the correct predictions in most instances except (c). (e) demonstrates the model’s ability to synthesize multimodal inputs with reasoning. The bounding boxes correctly highlight the salient regions related to the reasoning steps when one is present.

## 5 Conclusion

We introduced QoQ-Med, a clinical MLLM with reasoning across 9 clinical domains. Our Domain-aware Group Relative Policy Optimization (DRPO) demonstrates superior performance over existing approaches, with up to 43% improvement in average F1 score across clinical modalities and substantial gains in multimodal fusion tasks. The ability of QoQ-Med to process 1D time series data alongside traditional 2D/3D clinical images addresses a significant gap in existing medical multimodal systems, while its transparent reasoning process enhances interpretability and clinical trust. By publicly releasing QoQ-Med-7B/32B and our comprehensive reasoning dataset containing 2.61 million question-answer pairs, we hope to contribute valuable resources to advance clinical reasoning AI. A potential limitation is the limited sample efficiency as the reasoning process is not supervised. Moving forward, we hope the community can explore ways to elicit high-quality reasoning with better data efficiency, with a special focus on understudied modalities like ECG and ultrasound.

## 6 Acknowledgement

This material is based upon work supported by the National Science Foundation Graduate Research Fellowship under Grant No. 2141064. Any opinion, findings, and conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect the views of the National Science Foundation.

We thank the MIT Office of Research Computing and Data (ORCD) for support through ORCD Seed Fund Grants, which provided access to 8xH200 GPUs and additional funding support. We also thank the NVIDIA Academic Grant Program for GPU support.

We also extend our sincere thanks to Haowen Wei (Research Associate, MIT Institute for Medical Engineering & Science, MIT.nano) and Dr. Farzan Vahedifard (Neurologist, Athinoula A. Martinos Center for Biomedical Imaging, Harvard Medical School) for their careful annotation of the model’s reasoning outputs and valuable insights that significantly improved this work.

## References

## NeurIPS Paper Checklist

1. Claims
2. Question: Do the main claims made in the abstract and introduction accurately reflect the paper’s contributions and scope?
3. Answer: \[Yes\]
4. Justification: We explained our method in detail in Sec. [3](https://arxiv.org/html/2506.00711v2#S3 "3 Method ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"), then supported each points with extensive experiments in [4](https://arxiv.org/html/2506.00711v2#S4 "4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training").
5. Guidelines:
	- The answer NA means that the abstract and introduction do not include the claims made in the paper.
	- The abstract and/or introduction should clearly state the claims made, including the contributions made in the paper and important assumptions and limitations. A No or NA answer to this question will not be perceived well by the reviewers.
	- The claims made should match theoretical and experimental results, and reflect how much the results can be expected to generalize to other settings.
	- It is fine to include aspirational goals as motivation as long as it is clear that these goals are not attained by the paper.
6. Limitations
7. Question: Does the paper discuss the limitations of the work performed by the authors?
8. Answer: \[Yes\]
9. Justification: We discussed our limitations on how the reasoning is learned in the conclusion paragraph.
10. Guidelines:
	- The answer NA means that the paper has no limitation while the answer No means that the paper has limitations, but those are not discussed in the paper.
	- The authors are encouraged to create a separate "Limitations" section in their paper.
	- The paper should point out any strong assumptions and how robust the results are to violations of these assumptions (e.g., independence assumptions, noiseless settings, model well-specification, asymptotic approximations only holding locally). The authors should reflect on how these assumptions might be violated in practice and what the implications would be.
	- The authors should reflect on the scope of the claims made, e.g., if the approach was only tested on a few datasets or with a few runs. In general, empirical results often depend on implicit assumptions, which should be articulated.
	- The authors should reflect on the factors that influence the performance of the approach. For example, a facial recognition algorithm may perform poorly when image resolution is low or images are taken in low lighting. Or a speech-to-text system might not be used reliably to provide closed captions for online lectures because it fails to handle technical jargon.
	- The authors should discuss the computational efficiency of the proposed algorithms and how they scale with dataset size.
	- While the authors might fear that complete honesty about limitations might be used by reviewers as grounds for rejection, a worse outcome might be that reviewers discover limitations that aren’t acknowledged in the paper. The authors should use their best judgment and recognize that individual actions in favor of transparency play an important role in developing norms that preserve the integrity of the community. Reviewers will be specifically instructed to not penalize honesty concerning limitations.
11. Theory assumptions and proofs
12. Question: For each theoretical result, does the paper provide the full set of assumptions and a complete (and correct) proof?
13. Answer: \[N/A\]
14. Justification: In this work, we describe a novel way of training a reasoning model across heterogeneous domains. We detailed the assumption (that a set of domains must present). However, the effectiveness of the method is primarily proved via experiments, not theoretically.
15. Guidelines:
	- The answer NA means that the paper does not include theoretical results.
	- All the theorems, formulas, and proofs in the paper should be numbered and cross-referenced.
	- All assumptions should be clearly stated or referenced in the statement of any theorems.
	- The proofs can either appear in the main paper or the supplemental material, but if they appear in the supplemental material, the authors are encouraged to provide a short proof sketch to provide intuition.
	- Inversely, any informal proof provided in the core of the paper should be complemented by formal proofs provided in appendix or supplemental material.
	- Theorems and Lemmas that the proof relies upon should be properly referenced.
16. Experimental result reproducibility
17. Question: Does the paper fully disclose all the information needed to reproduce the main experimental results of the paper to the extent that it affects the main claims and/or conclusions of the paper (regardless of whether the code and data are provided or not)?
18. Answer: \[Yes\]
19. Justification: We release our repository containing the code used for all experiments. We also include all the datasets we used.
20. Guidelines:
	- The answer NA means that the paper does not include experiments.
	- If the paper includes experiments, a No answer to this question will not be perceived well by the reviewers: Making the paper reproducible is important, regardless of whether the code and data are provided or not.
	- If the contribution is a dataset and/or model, the authors should describe the steps taken to make their results reproducible or verifiable.
	- Depending on the contribution, reproducibility can be accomplished in various ways. For example, if the contribution is a novel architecture, describing the architecture fully might suffice, or if the contribution is a specific model and empirical evaluation, it may be necessary to either make it possible for others to replicate the model with the same dataset, or provide access to the model. In general. releasing code and data is often one good way to accomplish this, but reproducibility can also be provided via detailed instructions for how to replicate the results, access to a hosted model (e.g., in the case of a large language model), releasing of a model checkpoint, or other means that are appropriate to the research performed.
	- While NeurIPS does not require releasing code, the conference does require all submissions to provide some reasonable avenue for reproducibility, which may depend on the nature of the contribution. For example
		1. If the contribution is primarily a new algorithm, the paper should make it clear how to reproduce that algorithm.
		2. If the contribution is primarily a new model architecture, the paper should describe the architecture clearly and fully.
		3. If the contribution is a new model (e.g., a large language model), then there should either be a way to access this model for reproducing the results or a way to reproduce the model (e.g., with an open-source dataset or instructions for how to construct the dataset).
		4. We recognize that reproducibility may be tricky in some cases, in which case authors are welcome to describe the particular way they provide for reproducibility. In the case of closed-source models, it may be that access to the model is limited in some way (e.g., to registered users), but it should be possible for other researchers to have some path to reproducing or verifying the results.
21. Open access to data and code
22. Question: Does the paper provide open access to the data and code, with sufficient instructions to faithfully reproduce the main experimental results, as described in supplemental material?
23. Answer: \[Yes\]
24. Justification: We open source our training pipeline, model weights and training hyperparameters. The dataset used in our model is fully public, with little to no license restrictions.
25. Guidelines:
	- The answer NA means that paper does not include experiments requiring code.
	- Please see the NeurIPS code and data submission guidelines ([https://nips.cc/public/guides/CodeSubmissionPolicy](https://nips.cc/public/guides/CodeSubmissionPolicy)) for more details.
	- While we encourage the release of code and data, we understand that this might not be possible, so “No” is an acceptable answer. Papers cannot be rejected simply for not including code, unless this is central to the contribution (e.g., for a new open-source benchmark).
	- The instructions should contain the exact command and environment needed to run to reproduce the results. See the NeurIPS code and data submission guidelines ([https://nips.cc/public/guides/CodeSubmissionPolicy](https://nips.cc/public/guides/CodeSubmissionPolicy)) for more details.
	- The authors should provide instructions on data access and preparation, including how to access the raw data, preprocessed data, intermediate data, and generated data, etc.
	- The authors should provide scripts to reproduce all experimental results for the new proposed method and baselines. If only a subset of experiments are reproducible, they should state which ones are omitted from the script and why.
	- At submission time, to preserve anonymity, the authors should release anonymized versions (if applicable).
26. Experimental setting/details
27. Question: Does the paper specify all the training and test details (e.g., data splits, hyperparameters, how they were chosen, type of optimizer, etc.) necessary to understand the results?
28. Answer: \[Yes\]
29. Justification: We describe our training and test details in App. [D](https://arxiv.org/html/2506.00711v2#A4 "Appendix D Details of Training and Evaluation ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training").
30. Guidelines:
	- The answer NA means that the paper does not include experiments.
	- The experimental setting should be presented in the core of the paper to a level of detail that is necessary to appreciate the results and make sense of them.
	- The full details can be provided either with the code, in appendix, or as supplemental material.
31. Experiment statistical significance
32. Question: Does the paper report error bars suitably and correctly defined or other appropriate information about the statistical significance of the experiments?
33. Answer: \[Yes\]
34. Justification: We did 4 separate runs with different seeds for each experiment in Table [2](https://arxiv.org/html/2506.00711v2#S4.T2 "Table 2 ‣ 4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"), and included the standard deviation in Appendix Table [7](https://arxiv.org/html/2506.00711v2#A6.T7 "Table 7 ‣ Appendix F Full Training Metrics ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training").
35. Guidelines:
	- The answer NA means that the paper does not include experiments.
	- The authors should answer "Yes" if the results are accompanied by error bars, confidence intervals, or statistical significance tests, at least for the experiments that support the main claims of the paper.
	- The factors of variability that the error bars are capturing should be clearly stated (for example, train/test split, initialization, random drawing of some parameter, or overall run with given experimental conditions).
	- The method for calculating the error bars should be explained (closed form formula, call to a library function, bootstrap, etc.)
	- The assumptions made should be given (e.g., Normally distributed errors).
	- It should be clear whether the error bar is the standard deviation or the standard error of the mean.
	- It is OK to report 1-sigma error bars, but one should state it. The authors should preferably report a 2-sigma error bar than state that they have a 96% CI, if the hypothesis of Normality of errors is not verified.
	- For asymmetric distributions, the authors should be careful not to show in tables or figures symmetric error bars that would yield results that are out of range (e.g. negative error rates).
	- If error bars are reported in tables or plots, The authors should explain in the text how they were calculated and reference the corresponding figures or tables in the text.
36. Experiments compute resources
37. Question: For each experiment, does the paper provide sufficient information on the computer resources (type of compute workers, memory, time of execution) needed to reproduce the experiments?
38. Answer: \[Yes\]
39. Justification: We described compute resources in App. [D](https://arxiv.org/html/2506.00711v2#A4 "Appendix D Details of Training and Evaluation ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training").
40. Guidelines:
	- The answer NA means that the paper does not include experiments.
	- The paper should indicate the type of compute workers CPU or GPU, internal cluster, or cloud provider, including relevant memory and storage.
	- The paper should provide the amount of compute required for each of the individual experimental runs as well as estimate the total compute.
	- The paper should disclose whether the full research project required more compute than the experiments reported in the paper (e.g., preliminary or failed experiments that didn’t make it into the paper).
41. Code of ethics
42. Question: Does the research conducted in the paper conform, in every respect, with the NeurIPS Code of Ethics [https://neurips.cc/public/EthicsGuidelines](https://neurips.cc/public/EthicsGuidelines)?
43. Answer: \[Yes\]
44. Justification: We have reviewed the code of ethics and included a impact statement in [A](https://arxiv.org/html/2506.00711v2#A1 "Appendix A Impact Statement ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training").
45. Guidelines:
	- The answer NA means that the authors have not reviewed the NeurIPS Code of Ethics.
	- If the authors answer No, they should explain the special circumstances that require a deviation from the Code of Ethics.
	- The authors should make sure to preserve anonymity (e.g., if there is a special consideration due to laws or regulations in their jurisdiction).
46. Broader impacts
47. Question: Does the paper discuss both potential positive societal impacts and negative societal impacts of the work performed?
48. Answer: \[Yes\]
49. Guidelines:
	- The answer NA means that there is no societal impact of the work performed.
	- If the authors answer NA or No, they should explain why their work has no societal impact or why the paper does not address societal impact.
	- Examples of negative societal impacts include potential malicious or unintended uses (e.g., disinformation, generating fake profiles, surveillance), fairness considerations (e.g., deployment of technologies that could make decisions that unfairly impact specific groups), privacy considerations, and security considerations.
	- The conference expects that many papers will be foundational research and not tied to particular applications, let alone deployments. However, if there is a direct path to any negative applications, the authors should point it out. For example, it is legitimate to point out that an improvement in the quality of generative models could be used to generate deepfakes for disinformation. On the other hand, it is not needed to point out that a generic algorithm for optimizing neural networks could enable people to train models that generate Deepfakes faster.
	- The authors should consider possible harms that could arise when the technology is being used as intended and functioning correctly, harms that could arise when the technology is being used as intended but gives incorrect results, and harms following from (intentional or unintentional) misuse of the technology.
	- If there are negative societal impacts, the authors could also discuss possible mitigation strategies (e.g., gated release of models, providing defenses in addition to attacks, mechanisms for monitoring misuse, mechanisms to monitor how a system learns from feedback over time, improving the efficiency and accessibility of ML).
50. Safeguards
51. Question: Does the paper describe safeguards that have been put in place for responsible release of data or models that have a high risk for misuse (e.g., pretrained language models, image generators, or scraped datasets)?
52. Answer: \[Yes\]
53. Justification: The model is mainly oriented for clinical use. However, before extensive real world testings (like human trials), the model is not suitable for real clinical deployment. We address this on the model weights download page, emphasizing this is a reseach review, not a product approved by related federal agencies.
54. Guidelines:
	- The answer NA means that the paper poses no such risks.
	- Released models that have a high risk for misuse or dual-use should be released with necessary safeguards to allow for controlled use of the model, for example by requiring that users adhere to usage guidelines or restrictions to access the model or implementing safety filters.
	- Datasets that have been scraped from the Internet could pose safety risks. The authors should describe how they avoided releasing unsafe images.
	- We recognize that providing effective safeguards is challenging, and many papers do not require this, but we encourage authors to take this into account and make a best faith effort.
55. Licenses for existing assets
56. Question: Are the creators or original owners of assets (e.g., code, data, models), used in the paper, properly credited and are the license and terms of use explicitly mentioned and properly respected?
57. Answer: \[Yes\]
58. Justification: We cite each dataset used in training in Tab. [6](https://arxiv.org/html/2506.00711v2#A3.T6 "Table 6 ‣ Appendix C Details of the Datasets used in Training and Validation ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training").
59. Guidelines:
	- The answer NA means that the paper does not use existing assets.
	- The authors should cite the original paper that produced the code package or dataset.
	- The authors should state which version of the asset is used and, if possible, include a URL.
	- The name of the license (e.g., CC-BY 4.0) should be included for each asset.
	- If assets are released, the license, copyright information, and terms of use in the package should be provided. For popular datasets, [paperswithcode.com/datasets](https://arxiv.org/html/paperswithcode.com/datasets) has curated licenses for some datasets. Their licensing guide can help determine the license of a dataset.
	- For existing datasets that are re-packaged, both the original license and the license of the derived asset (if it has changed) should be provided.
	- If this information is not available online, the authors are encouraged to reach out to the asset’s creators.
60. New assets
61. Question: Are new assets introduced in the paper well documented and is the documentation provided alongside the assets?
62. Answer: \[Yes\]
63. Justification: We detail the usage of our models throughout the paper. The code, model weights, training pipeline will be shared publically with no license restriction, to the extent that is allowed by the training dataset.
64. Guidelines:
	- The answer NA means that the paper does not release new assets.
	- Researchers should communicate the details of the dataset/code/model as part of their submissions via structured templates. This includes details about training, license, limitations, etc.
	- The paper should discuss whether and how consent was obtained from people whose asset is used.
	- At submission time, remember to anonymize your assets (if applicable). You can either create an anonymized URL or include an anonymized zip file.
65. Crowdsourcing and research with human subjects
66. Question: For crowdsourcing experiments and research with human subjects, does the paper include the full text of instructions given to participants and screenshots, if applicable, as well as details about compensation (if any)?
67. Answer: \[N/A\]
68. Justification: All training data are available publicly. We did not collect any data with human subjects. All data from the public datasets are properly anonymized.
69. Guidelines:
	- The answer NA means that the paper does not involve crowdsourcing nor research with human subjects.
	- Including this information in the supplemental material is fine, but if the main contribution of the paper involves human subjects, then as much detail as possible should be included in the main paper.
	- According to the NeurIPS Code of Ethics, workers involved in data collection, curation, or other labor should be paid at least the minimum wage in the country of the data collector.
70. Institutional review board (IRB) approvals or equivalent for research with human subjects
71. Question: Does the paper describe potential risks incurred by study participants, whether such risks were disclosed to the subjects, and whether Institutional Review Board (IRB) approvals (or an equivalent approval/review based on the requirements of your country or institution) were obtained?
72. Answer: \[N/A\]
73. Justification: All training data are available publicly. We did not collect any data with human subjects.
74. Guidelines:
	- The answer NA means that the paper does not involve crowdsourcing nor research with human subjects.
	- Depending on the country in which research is conducted, IRB approval (or equivalent) may be required for any human subjects research. If you obtained IRB approval, you should clearly state this in the paper.
	- We recognize that the procedures for this may vary significantly between institutions and locations, and we expect authors to adhere to the NeurIPS Code of Ethics and the guidelines for their institution.
	- For initial submissions, do not include any information that would break anonymity (if applicable), such as the institution conducting the review.
75. Declaration of LLM usage
76. Question: Does the paper describe the usage of LLMs if it is an important, original, or non-standard component of the core methods in this research? Note that if the LLM is used only for writing, editing, or formatting purposes and does not impact the core methodology, scientific rigorousness, or originality of the research, declaration is not required.
77. Answer: \[Yes\]
78. Justification: This work proposes a novel approach in training multimodal large language models with reinforcement learning for clincial use cases. We have described the approach in details in Sec. [3](https://arxiv.org/html/2506.00711v2#S3 "3 Method ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training") and Sec. [4](https://arxiv.org/html/2506.00711v2#S4 "4 Experiments ‣ QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training").
79. Guidelines:
	- The answer NA means that the core method development in this research does not involve LLMs as any important, original, or non-standard components.
	- Please refer to our LLM policy ([https://neurips.cc/Conferences/2025/LLM](https://neurips.cc/Conferences/2025/LLM)) for what should or should not be described.

[^1]: Armen Aghajanyan, Lili Yu, Alexis Conneau, Wei-Ning Hsu, Karen Hambardzumyan, Susan Zhang, Stephen Roller, Naman Goyal, Omer Levy, and Luke Zettlemoyer.Scaling laws for generative mixed-modal language models.In *International Conference on Machine Learning*, pages 265–279. PMLR, 2023.

[^2]: Arash Ahmadian, Chris Cremer, Matthias Gallé, Marzieh Fadaee, Julia Kreutzer, Olivier Pietquin, Ahmet Üstün, and Sara Hooker.Back to basics: Revisiting reinforce-style optimization for learning from human feedback in llms.In Lun-Wei Ku, Andre Martins, and Vivek Srikumar, editors, *Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), ACL 2024, Bangkok, Thailand, August 11-16, 2024*, pages 12248–12267. Association for Computational Linguistics, 2024.doi: 10.18653/V1/2024.ACL-LONG.662.URL [https://doi.org/10.18653/v1/2024.acl-long.662](https://doi.org/10.18653/v1/2024.acl-long.662).

[^3]: Walid Al-Dhabyani, Mohammed Gomaa, Hussien Khaled, and Aly Fahmy.Dataset of breast ultrasound images.*Data in brief*, 28:104863, 2020.

[^4]: Erick A Perez Alday, Annie Gu, Amit J Shah, Chad Robichaux, An-Kwok Ian Wong, Chengyu Liu, Feifei Liu, Ali Bahrami Rad, Andoni Elola, Salman Seyedi, et al.Classification of 12-lead ecgs: the physionet/computing in cardiology challenge 2020.*Physiological measurement*, 41(12):124003, 2020.

[^5]: Mohammad Alkhalaf, Ping Yu, Mengyang Yin, and Chao Deng.Applying generative ai with retrieval augmented generation to summarize and extract key clinical information from electronic health records.*Journal of biomedical informatics*, 156:104662, 2024.

[^6]: Julia Amann, Alessandro Blasimme, Effy Vayena, Dietmar Frey, Vince I. Madai, and the Precise4Q consortium.Explainability for artificial intelligence in healthcare: a multidisciplinary perspective.*BMC Medical Informatics and Decision Making*, 20(1):310, 2020.

[^7]: Mohamed Amgad, Habiba Elfandy, Hagar Hussein, Lamees A Atteya, Mai AT Elsebaie, Lamia S Abo Elnasr, Rokia A Sakr, Hazem SE Salem, Ahmed F Ismail, Anas M Saad, et al.Structured crowdsourcing enables convolutional segmentation of histology images.*Bioinformatics*, 35(18):3461–3467, 2019.

[^8]: Asia Pacific Tele-Ophthalmology Society.APTOS 2019 blindness detection.[https://www.kaggle.com/c/aptos2019-blindness-detection/data](https://www.kaggle.com/c/aptos2019-blindness-detection/data), 2019.\[Dataset\].

[^9]: Shuai Bai, Keqin Chen, Xuejing Liu, Jialin Wang, Wenbin Ge, Sibo Song, Kai Dang, Peng Wang, Shijie Wang, Jun Tang, et al.Qwen2. 5-vl technical report.*arXiv preprint arXiv:2502.13923*, 2025.

[^10]: Sartaj Bhuvaji, Ankita Kadam, Prajakta Bhumkar, Sameer Dedge, and Swati Kanchan.Brain tumor classification (mri), 2020.URL [https://www.kaggle.com/dsv/1183165](https://www.kaggle.com/dsv/1183165).

[^11]: Andreea Bodnari and John Travis.Scaling enterprise ai in healthcare: the role of governance in risk mitigation frameworks.*npj Digital Medicine*, 8(1):272, 2025.

[^12]: Karsten M Borgwardt, Cheng Soon Ong, Stefan Schönauer, SVN Vishwanathan, Alex J Smola, and Hans-Peter Kriegel.Protein function prediction via graph kernels.*Bioinformatics*, 21(suppl\_1):i47–i56, 2005.

[^13]: Andrew A Borkowski, Marilyn M Bui, L Brannon Thomas, Catherine P Wilson, Lauren A DeLand, and Stephen M Mastorides.Lung and colon cancer histopathological image dataset (lc25000).*arXiv preprint arXiv:1912.12142*, 2019.

[^14]: Paul F Christiano, Jan Leike, Tom Brown, Miljan Martic, Shane Legg, and Dario Amodei.Deep reinforcement learning from human preferences.*Advances in neural information processing systems*, 30, 2017.

[^15]: Joseph Paul Cohen, Paul Morrison, and Lan Dao.Covid-19 image data collection.*arXiv 2003.11597*, 2020.URL [https://github.com/ieee8023/covid-chestxray-dataset](https://github.com/ieee8023/covid-chestxray-dataset).

[^16]: Errol Colak, Felipe C Kitamura, Stephen B Hobbs, Carol C Wu, Matthew P Lungren, Luciano M Prevedello, Jayashree Kalpathy-Cramer, Robyn L Ball, George Shih, Anouk Stein, et al.The rsna pulmonary embolism ct dataset.*Radiology: Artificial Intelligence*, 3(2):e200254, 2021.

[^17]: Can Cui, Haichun Yang, Yaohong Wang, Shilin Zhao, Zuhayr Asad, Lori A Coburn, Keith T Wilson, Bennett A Landman, and Yuankai Huo.Deep multimodal fusion of image and non-image data in disease diagnosis and prognosis: a review.*Progress in Biomedical Engineering*, 5(2):022001, 2023.

[^18]: Chunyan Cui, Li Li, Hongmin Cai, Zhihao Fan, Ling Zhang, Tingting Dan, Jiao Li, and Jinghua Wang.The chinese mammography database (cmmd): An online mammography database with biopsy confirmed types for machine diagnosis of breast.*The Cancer Imaging Archive*, 2021.doi: 10.7937/TCIA.EQDE-4B16.URL [https://doi.org/10.7937/tcia.eqde-4b16](https://doi.org/10.7937/tcia.eqde-4b16).

[^19]: Hejie Cui, Wei Dai, Yanqiao Zhu, Xuan Kan, Antonio Aodong Chen Gu, Joshua Lukemire, Liang Zhan, Lifang He, Ying Guo, and Carl Yang.Braingb: a benchmark for brain network analysis with graph neural networks.*IEEE transactions on medical imaging*, 42(2):493–506, 2022.

[^20]: Hejie Cui, Lingjun Mao, Xin Liang, Jieyu Zhang, Hui Ren, Quanzheng Li, Xiang Li, and Carl Yang.Biomedical visual instruction tuning with clinician preference alignment.*arXiv preprint arXiv:2406.13173*, 2024.

[^21]: Wei Dai, Ehsan Adeli, Zelun Luo, Dev Dash, Shrinidhi Lakshmikanth, Zane Durante, Paul Tang, Amit Kaushal, Arnold Milstein, Li Fei-Fei, et al.Developing icu clinical behavioral atlas using ambient intelligence and computer vision.*NEJM AI*, page AIoa2400590, 2025a.

[^22]: Wei Dai, Peilin Chen, Malinda Lu, Daniel Li, Haowen Wei, Hejie Cui, and Paul Pu Liang.Climb: Data foundations for large scale multimodal clinical foundation models.*ICML*, 2025b.

[^23]: Eric Decencière, Claire LaGraize, Pascale Pélégrin, François Benassi, Christian Régér, and Thomas Vautrin.Feedback on a publicly distributed database: the messidor database.*Image Analysis & Stereology*, 33(3):231–234, 2014.ISSN 1854-5165.doi: 10.5566/ias.1155.URL [http://dx.doi.org/10.5566/ias.1155](http://dx.doi.org/10.5566/ias.1155).

[^24]: Franck Dernoncourt and Ji Young Lee.Pubmed 200k rct: a dataset for sequential sentence classification in medical abstracts.*arXiv preprint arXiv:1710.06071*, 2017.

[^25]: Ashkan Ebadi, Pengcheng Xi, Alexander MacLean, Stéphane Tremblay, Sonny Kohli, and Alexander Wong.Covidx-us–an open-access benchmark dataset of ultrasound imaging data for ai-driven covid-19 analytics.*arXiv preprint arXiv:2103.10003*, 2021.

[^26]: Mark Endo, Rayan Krishnan, Viswesh Krishna, Andrew Y Ng, and Pranav Rajpurkar.Retrieval-based chest x-ray report generation using a pre-trained contrastive language-image model.In *Machine Learning for Health*, pages 209–219. PMLR, 2021.

[^27]: Lasse Espeholt, Hubert Soyer, Remi Munos, Karen Simonyan, Vlad Mnih, Tom Ward, Yotam Doron, Vlad Firoiu, Tim Harley, Iain Dunning, et al.Impala: Scalable distributed deep-rl with importance weighted actor-learner architectures.In *International conference on machine learning*, pages 1407–1416. PMLR, 2018.

[^28]: Suparna Ghanvatkar and Vaibhav Rajan.Graph-based patient representation for multimodal clinical data: Addressing data heterogeneity.*medRxiv*, pages 2023–12, 2023.

[^29]: Daya Guo, Dejian Yang, Haowei Zhang, Junxiao Song, Ruoyu Zhang, Runxin Xu, Qihao Zhu, Shirong Ma, Peiyi Wang, Xiao Bi, et al.Deepseek-r1: Incentivizing reasoning capability in llms via reinforcement learning.*arXiv preprint arXiv:2501.12948*, 2025.

[^30]: Nicholas Heller, Fabian Isensee, Dasha Trofimova, Resha Tejpaul, Zhongchen Zhao, Huai Chen, Lisheng Wang, Alex Golts, Daniel Khapun, Daniel Shats, et al.The kits21 challenge: Automatic segmentation of kidneys, renal tumors, and renal cysts in corticomedullary-phase ct.*arXiv preprint arXiv:2307.01984*, 2023.

[^31]: Matteo Hessel, Hubert Soyer, Lasse Espeholt, Wojciech Czarnecki, Simon Schmitt, and Hado Van Hasselt.Multi-task deep reinforcement learning with popart.In *Proceedings of the AAAI Conference on Artificial Intelligence*, volume 33, pages 3796–3803, 2019.

[^32]: Murtadha Hssayeni, M Croock, A Salman, H Al-khafaji, Z Yahya, and B Ghoraani.Computed tomography images for intracranial hemorrhage detection and segmentation.*Intracranial hemorrhage segmentation using a deep convolutional model. Data*, 5(1):14, 2020.

[^33]: Jian Hu.Reinforce++: A simple and efficient approach for aligning large language models.*arXiv preprint arXiv:2501.03262*, 2025.

[^34]: Jie Huang and Kevin Chen-Chuan Chang.Towards reasoning in large language models: A survey.*arXiv preprint arXiv:2212.10403*, 2022.

[^35]: Shih-Cheng Huang, Zepeng Huo, Ethan Steinberg, Chia-Chun Chiang, Matthew P Lungren, Curtis P Langlotz, Serena Yeung, Nigam H Shah, and Jason A Fries.Inspect: a multimodal dataset for pulmonary embolism diagnosis and prognosis.*arXiv preprint arXiv:2311.10798*, 2023.

[^36]: Yu Huang, Junyang Lin, Chang Zhou, Hongxia Yang, and Longbo Huang.Modality competition: What makes joint training of multi-modal network fail in deep learning?(provably).In *International conference on machine learning*, pages 9226–9259. PMLR, 2022.

[^37]: Aaron Hurst, Adam Lerer, Adam P Goucher, Adam Perelman, Aditya Ramesh, Aidan Clark, AJ Ostrow, Akila Welihinda, Alan Hayes, Alec Radford, et al.Gpt-4o system card.*arXiv preprint arXiv:2410.21276*, 2024.

[^38]: Jeremy Irvin, Pranav Rajpurkar, Michael Ko, Yifan Yu, Silviana Ciurea-Ilcus, Christopher Chute, Henrik Marklund, Behzad Haghgoo, Robyn L. Ball, Katie S. Shpanskaya, Jayne Seekins, David A. Mong, Safwan S. Halabi, Jesse K. Sandberg, Ricky Jones, David B. Larson, Curtis P. Langlotz, Bhavik N. Patel, Matthew P. Lungren, and Andrew Y. Ng.Chexpert: A large chest radiograph dataset with uncertainty labels and expert comparison.In *The Thirty-Third AAAI Conference on Artificial Intelligence, AAAI 2019, The Thirty-First Innovative Applications of Artificial Intelligence Conference, IAAI 2019, The Ninth AAAI Symposium on Educational Advances in Artificial Intelligence, EAAI 2019, Honolulu, Hawaii, USA, January 27 - February 1, 2019*, pages 590–597. AAAI Press, 2019.doi: 10.1609/AAAI.V33I01.3301590.URL [https://doi.org/10.1609/aaai.v33i01.3301590](https://doi.org/10.1609/aaai.v33i01.3301590).

[^39]: Qiao Jin, Bhuwan Dhingra, Zhengping Liu, William W Cohen, and Xinghua Lu.Pubmedqa: A dataset for biomedical research question answering.*arXiv preprint arXiv:1909.06146*, 2019.

[^40]: Alistair E. W. Johnson, Tom J. Pollard, Seth J. Berkowitz, Nathaniel R. Greenbaum, Matthew P. Lungren, Chih-ying Deng, Roger G. Mark, and Steven Horng.MIMIC-CXR: A large publicly available database of labeled chest radiographs.*CoRR*, abs/1901.07042, 2019.URL [http://arxiv.org/abs/1901.07042](http://arxiv.org/abs/1901.07042).

[^41]: Alistair EW Johnson, Lucas Bulgarelli, Lu Shen, Alvin Gayles, Ayad Shammout, Steven Horng, Tom J Pollard, Sicheng Hao, Benjamin Moody, Brian Gow, et al.Mimic-iv, a freely accessible electronic health record dataset.*Scientific data*, 10(1):1, 2023.

[^42]: Xuan Kan, Wei Dai, Hejie Cui, Zilong Zhang, Ying Guo, and Carl Yang.Brain network transformer.*Advances in Neural Information Processing Systems*, 35:25586–25599, 2022.

[^43]: Sehun Kim.Learning general representation of 12-lead electrocardiogram with a joint-embedding predictive architecture.*arXiv preprint arXiv:2410.08559*, 2024.

[^44]: Adrienne Kline, Hanyin Wang, Yikuan Li, Saya Dennis, Meghan Hutch, Zhenxing Xu, Fei Wang, Feixiong Cheng, and Yuan Luo.Multimodal machine learning in precision health: A scoping review.*npj Digital Medicine*, 5(1):171, 2022.

[^45]: Nesaretnam Barr Kumarakulasinghe, Tobias Blomberg, Jintai Liu, Alexandra Saraiva Leao, and Panagiotis Papapetrou.Evaluating local interpretable model-agnostic explanations on clinical machine learning classification models.In *2020 IEEE 33rd international symposium on computer-based medical systems (CBMS)*, pages 7–12. IEEE, 2020.

[^46]: Yuxiang Lai, Jike Zhong, Ming Li, Shitian Zhao, and Xiaofeng Yang.Med-r1: Reinforcement learning for generalizable medical reasoning in vision-language models.*arXiv preprint arXiv:2503.13939*, 2025.

[^47]: Xiang Lan, Feng Wu, Kai He, Qinghao Zhao, Shenda Hong, and Mengling Feng.Gem: Empowering mllm for grounded ecg understanding with time series and images.*arXiv preprint arXiv:2503.06073*, 2025.

[^48]: Chunyuan Li, Cliff Wong, Sheng Zhang, Naoto Usuyama, Haotian Liu, Jianwei Yang, Tristan Naumann, Hoifung Poon, and Jianfeng Gao.Llava-med: Training a large language-and-vision assistant for biomedicine in one day.In Alice Oh, Tristan Naumann, Amir Globerson, Kate Saenko, Moritz Hardt, and Sergey Levine, editors, *Advances in Neural Information Processing Systems 36: Annual Conference on Neural Information Processing Systems 2023, NeurIPS 2023, New Orleans, LA, USA, December 10 - 16, 2023*, 2023.

[^49]: Stella Li, Vidhisha Balachandran, Shangbin Feng, Jonathan Ilgen, Emma Pierson, Pang Wei W Koh, and Yulia Tsvetkov.Mediq: Question-asking llms and a benchmark for reliable interactive clinical reasoning.*Advances in Neural Information Processing Systems*, 37:28858–28888, 2024a.

[^50]: Ziniu Li, Tian Xu, Yushun Zhang, Zhihang Lin, Yang Yu, Ruoyu Sun, and Zhi-Quan Luo.Remax: A simple, effective, and efficient reinforcement learning method for aligning large language models.In *Forty-first International Conference on Machine Learning, ICML 2024, Vienna, Austria, July 21-27, 2024*. OpenReview.net, 2024b.URL [https://openreview.net/forum?id=Stn8hXkpe6](https://openreview.net/forum?id=Stn8hXkpe6).

[^51]: Paul Pu Liang, Akshay Goindani, Talha Chafekar, Leena Mathur, Haofei Yu, Russ Salakhutdinov, and Louis-Philippe Morency.Hemm: Holistic evaluation of multimodal foundation models.In *The Thirty-eight Conference on Neural Information Processing Systems Datasets and Benchmarks Track*, 2024a.

[^52]: Paul Pu Liang, Amir Zadeh, and Louis-Philippe Morency.Foundations & trends in multimodal machine learning: Principles, challenges, and open questions.*ACM Computing Surveys*, 56(10):1–42, 2024b.

[^53]: Tsung-Yi Lin, Priya Goyal, Ross Girshick, Kaiming He, and Piotr Dollár.Focal loss for dense object detection.In *Proceedings of the IEEE international conference on computer vision*, pages 2980–2988, 2017.

[^54]: Feifei Liu, Chengyu Liu, Lina Zhao, Xiangyu Zhang, Xiaoling Wu, Xiaoyan Xu, Yulin Liu, Caiyun Ma, Shoushui Wei, Zhiqiang He, et al.An open access database for evaluating the algorithms of electrocardiogram rhythm and morphology abnormality detection.*Journal of Medical Imaging and Health Informatics*, 8(7):1368–1373, 2018.

[^55]: Mary M Lucas, Justin Yang, Jon K Pomeroy, and Christopher C Yang.Reasoning with large language models for medical question answering.*Journal of the American Medical Informatics Association*, 31(9):1964–1975, 2024.

[^56]: Michael Moor, Qian Huang, Shirley Wu, Michihiro Yasunaga, Yash Dalmia, Jure Leskovec, Cyril Zakka, Eduardo Pontes Reis, and Pranav Rajpurkar.Med-flamingo: a multimodal medical few-shot learner.In Stefan Hegselmann, Antonio Parziale, Divya Shanmugam, Shengpu Tang, Mercy Nyamewaa Asiedu, Serina Chang, Tom Hartvigsen, and Harvineet Singh, editors, *Machine Learning for Health, ML4H@NeurIPS 2023, 10 December 2023, New Orleans, Louisiana, USA*, volume 225 of *Proceedings of Machine Learning Research*, pages 353–367. PMLR, 2023.URL [https://proceedings.mlr.press/v225/moor23a.html](https://proceedings.mlr.press/v225/moor23a.html).

[^57]: Abhishek Naik, Yi Wan, Manan Tomar, and Richard S Sutton.Reward centering.*arXiv preprint arXiv:2405.09999*, 2024.

[^58]: Nida Nasir, Afreen Kansal, Feras Barneih, Omar Al-Shaltone, Talal Bonny, Mohammad Al-Shabi, and Ahmed Al Shammaa.Multi-modal image classification of covid-19 cases using computed tomography and x-rays scans.*Intelligent Systems with Applications*, 17:200160, 2023.

[^59]: Ha Quy Nguyen, Hieu Huy Pham, Tuan Linh Le, Minh Dao, and Khanh Lam.Vindr-cxr: An open dataset of chest x-rays with radiologist annotations.*PhysioNet*, 2021.doi: 10.13026/3akn-b287.URL [https://doi.org/10.13026/3akn-b287](https://doi.org/10.13026/3akn-b287).

[^60]: OpenAI.Gpt-4o mini: advancing cost-efficient intelligence.Online technical report, OpenAI, 2025a.URL [https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/).

[^61]: OpenAI.Openai o3 and o4-mini system card.Technical report, OpenAI, April 2025b.URL [https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf](https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf).

[^62]: Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida, Carroll Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, et al.Training language models to follow instructions with human feedback.*Advances in neural information processing systems*, 35:27730–27744, 2022.

[^63]: Ece Ozkan and Xavier Boix.Multi-domain improves classification in out-of-distribution and data-limited scenarios for medical image analysis.*Scientific Reports*, 14(1):24412, 2024.

[^64]: Andre G.C. Pacheco, Gustavo R. Lima, Amanda S. Salomão, Breno Krohling, Igor P. Biral, Gabriel G. de Angelo, Fábio C.R. Alves Jr, José G.M. Esgario, Alana C. Simora, Pedro B.C. Castro, Felipe B. Rodrigues, Patricia H.L. Frasson, Renato A. Krohling, Helder Knidel, Maria C.S. Santos, Rachel B. do Espírito Santo, Telma L.S.G. Macedo, Tania R.P. Canuto, and Luíz F.S. de Barros.Pad-ufes-20: A skin lesion dataset composed of patient data and clinical images collected from smartphones.*Data in Brief*, 32:106221, 2020.doi: 10.1016/j.dib.2020.106221.URL [https://doi.org/10.1016/j.dib.2020.106221](https://doi.org/10.1016/j.dib.2020.106221).

[^65]: Jiazhen Pan, Che Liu, Junde Wu, Fenglin Liu, Jiayuan Zhu, Hongwei Bran Li, Chen Chen, Cheng Ouyang, and Daniel Rueckert.Medvlm-r1: Incentivizing medical reasoning capability of vision-language models (vlms) via reinforcement learning.*arXiv preprint arXiv:2502.19634*, 2025.

[^66]: Liron Pantanowitz, Matthew Hanna, Joshua Pantanowitz, Joe Lennerz, Walter H. Henricks, Peter Shen, Bruce Quinn, Shannon Bennet, and Hooman H. Rashidi.Regulatory aspects of artificial intelligence and machine learning.*Modern Pathology*, 37(12):100609, 2024.

[^67]: João Pedrosa, Carlos Guilherme, Patrícia Márcio, João André, Isabel Eduardo, and Aurélio António.Lndb dataset (version 4).In *17th International Conference on Image Analysis and Recognition (ICIAR 2020)*. Zenodo, 2023.doi: 10.5281/zenodo.8348419.URL [https://doi.org/10.5281/zenodo.8348419](https://doi.org/10.5281/zenodo.8348419).

[^68]: Hieu Huy Pham, Trung H Nguyen, and Ha Quy Nguyen.Vindr-mammo: A large-scale benchmark dataset for computer-aided detection and diagnosis in full-field digital mammography.*PhysioNet*, 2022.URL [https://doi.org/10.13026/br2v-7517](https://doi.org/10.13026/br2v-7517).

[^69]: Sawyer-Lee R., Gimenez F., Hoogi A., and Rubin D.Curated breast imaging subset of digital database for screening mammography (cbis-ddsm) \[data set\], 2016.

[^70]: Rafael Rafailov, Archit Sharma, Eric Mitchell, Christopher D Manning, Stefano Ermon, and Chelsea Finn.Direct preference optimization: Your language model is secretly a reward model.*Advances in Neural Information Processing Systems*, 36:53728–53741, 2023.

[^71]: V. Rotemberg, N. Kurtansky, B. Betz-Stablein, and et al.A patient-centric dataset of images and metadata for identifying melanomas using clinical context.*Scientific Data*, 8(1):34, 2021.doi: 10.1038/s41597-021-00815-z.URL [https://doi.org/10.1038/s41597-021-00815-z](https://doi.org/10.1038/s41597-021-00815-z).

[^72]: Madeline Sagona, Tinglong Dai, Mario Macis, and Michael Darden.Trust in ai-assisted health systems and ai’s trust in humans.*npj Health Systems*, 2(1):10, 2025.

[^73]: Michael Santacroce, Yadong Lu, Han Yu, Yuanzhi Li, and Yelong Shen.Efficient rlhf: Reducing the memory usage of ppo.*arXiv preprint arXiv:2309.00754*, 2023.

[^74]: John Schulman, Filip Wolski, Prafulla Dhariwal, Alec Radford, and Oleg Klimov.Proximal policy optimization algorithms.*arXiv preprint arXiv:1707.06347*, 2017.

[^75]: Zhihong Shao, Peiyi Wang, Qihao Zhu, Runxin Xu, Junxiao Song, Xiao Bi, Haowei Zhang, Mingchuan Zhang, YK Li, Y Wu, et al.Deepseekmath: Pushing the limits of mathematical reasoning in open language models.*arXiv preprint arXiv:2402.03300*, 2024.

[^76]: Gregor Stiglic, Primoz Kocbek, Nino Fijacko, Marinka Zitnik, Katrien Verbert, and Leona Cilar.Interpretability of machine learning-based prediction models in healthcare.*Wiley Interdisciplinary Reviews: Data Mining and Knowledge Discovery*, 10(5):e1379, 2020.

[^77]: Hong Sun, Kristof Depraetere, Laurent Meesseman, Patricia Cabanillas Silva, Ralph Szymanowsky, Janis Fliegenschmidt, Nikolai Hulde, Vera von Dossow, Martijn Vanbiervliet, Jos De Baerdemaeker, et al.Machine learning–based prediction models for different clinical risks in different hospitals: evaluation of live performance.*Journal of Medical Internet Research*, 24(6):e34295, 2022.

[^78]: Hidenori Takahashi, Hironobu Tampo, Yusuke Arai, Yuji Inoue, and Hidetoshi Kawashima.Applying artificial intelligence to disease staging: Deep learning for improved staging of diabetic retinopathy.*PloS one*, 12(6):e0179790, 2017.

[^79]: Qwen Team.Qwen3 technical report.Technical report, Alibaba, 2025.URL [https://github.com/QwenLM/Qwen3/blob/main/Qwen3\_Technical\_Report.pdf](https://github.com/QwenLM/Qwen3/blob/main/Qwen3_Technical_Report.pdf).Online; accessed May 14, 2025.

[^80]: Qiaoying Teng, Zhe Liu, Yuqing Song, Kai Han, and Yang Lu.A survey on the interpretability of deep learning in medical diagnosis.*Multimedia Systems*, 28(6):2335–2355, 2022.

[^81]: Philipp Tschandl, Cliff Rosendahl, and Harald Kittler.The HAM10000 dataset: A large collection of multi-source dermatoscopic images of common pigmented skin lesions.*CoRR*, abs/1803.10417, 2018.URL [http://arxiv.org/abs/1803.10417](http://arxiv.org/abs/1803.10417).

[^82]: Patrick Wagner, Nils Strodthoff, Ralf-Dieter Bousseljot, Dieter Kreiseler, Fatima I Lunze, Wojciech Samek, and Tobias Schaeffter.Ptb-xl, a large publicly available electrocardiography dataset.*Scientific data*, 7(1):1–15, 2020.

[^83]: Zhongwei Wan, Che Liu, Xin Wang, Chaofan Tao, Hui Shen, Zhenwu Peng, Jie Fu, Rossella Arcucci, Huaxiu Yao, and Mi Zhang.Electrocardiogram instruction tuning for report generation.*arXiv e-prints*, pages arXiv–2403, 2024.

[^84]: Nina Wie.Covid-blues: A large-scale lung ultrasound dataset for covid-19 diagnosis.[https://github.com/NinaWie/COVID-BLUES](https://github.com/NinaWie/COVID-BLUES), 2021.Maastricht University Medical Center.

[^85]: Chaoyi Wu, Xiaoman Zhang, Ya Zhang, Yanfeng Wang, and Weidi Xie.Towards generalist foundation model for radiology by leveraging web-scale 2d&3d medical data.*arXiv preprint arXiv:2308.02463*, 2023.

[^86]: Peng Xia, Ze Chen, Juanxi Tian, Yangrui Gong, Ruibo Hou, Yue Xu, Zhenbang Wu, Zhiyuan Fan, Yiyang Zhou, Kangyu Zhu, et al.Cares: A comprehensive benchmark of trustworthiness in medical vision language models.*Advances in Neural Information Processing Systems*, 37:140334–140365, 2024.

[^87]: Chao Yan, Yao Yan, Zhiyu Wan, Ziqi Zhang, Larsson Omberg, Justin Guinney, Sean D Mooney, and Bradley A Malin.A multifaceted benchmarking of synthetic electronic health record generation models.*Nature communications*, 13(1):7609, 2022.

[^88]: Jin Ye, Guoan Wang, Yanjun Li, Zhongying Deng, Wei Li, Tianbin Li, Haodong Duan, Ziyan Huang, Yanzhou Su, Benyou Wang, et al.Gmai-mmbench: A comprehensive multimodal evaluation benchmark towards general medical ai.*Advances in Neural Information Processing Systems*, 37:94327–94427, 2024.

[^89]: Liping Yu, Cristiano Cuppini, Jinghong Xu, Benjamin A Rowland, and Barry E Stein.Cross-modal competition: the default computation for multisensory processing.*Journal of Neuroscience*, 39(8):1374–1385, 2019.

[^90]: Kai Zhang, Rong Zhou, Eashan Adhikarla, Zhiling Yan, Yixin Liu, Jun Yu, Zhengliang Liu, Xun Chen, Brian D Davison, Hui Ren, et al.A generalist vision–language foundation model for diverse biomedical tasks.*Nature Medicine*, pages 1–13, 2024.

[^91]: Sheng Zhang, Qianchu Liu, Guanghui Qin, Tristan Naumann, and Hoifung Poon.Med-rlvr: Emerging medical reasoning from a 3b base model via reinforcement learning.*arXiv preprint arXiv:2502.19655*, 2025.

[^92]: Xiaoman Zhang, Chaoyi Wu, Ziheng Zhao, Weixiong Lin, Ya Zhang, Yanfeng Wang, and Weidi Xie.Pmc-vqa: Visual instruction tuning for medical visual question answering.*arXiv preprint arXiv:2305.10415*, 2023.

[^93]: Jianwei Zheng, Huimin Chu, Daniele Struppa, Jianming Zhang, Sir Magdi Yacoub, Hesham El-Askary, Anthony Chang, Louis Ehwerhemuepha, Islam Abudayyeh, Alexander Barrett, et al.Optimal multi-stage arrhythmia classification approach.*Scientific reports*, 10(1):2898, 2020.

[^94]: Daniel M Ziegler, Nisan Stiennon, Jeffrey Wu, Tom B Brown, Alec Radford, Dario Amodei, Paul Christiano, and Geoffrey Irving.Fine-tuning language models from human preferences.*arXiv preprint arXiv:1909.08593*, 2019.