---
title: "Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding"
source: "https://arxiv.org/html/2505.21908v2"
published:
created: 2025-12-16
description:
tags:
  - "clippings"
---
arXiv:2505.21908v2 \[cs.LG\] 14 Oct 2025

Hanyin Wang, Jimeng Sun  
Department of Computer Science  
University of Illinois Urbana-Champaign  
{hanyinw2}@illinois.edu  
Hanyin Wang <sup><span>1,2</span></sup> Zhenbang Wu <sup><span>2</span></sup> Gururaj Kolar <sup><span>3</span></sup> Hariprasad Korsapati <sup><span>1</span></sup>  
Brian Bartlett <sup><span>1</span></sup> Bryan Hull <sup><span>4</span></sup> Jimeng Sun <sup><span>2,5</span></sup>  
<sup><span>1</span></sup> Mayo Clinic Health System   <sup><span>2</span></sup> School of Computing and Data Science, UIUC  
<sup><span>3</span></sup> Mayo Clinic Rochester   <sup><span>4</span></sup> Mayo Clinic Phoenix   <sup><span>5</span></sup> Carle Illinois College of Medicine, UIUC  
wang.hanyin@mayo.edu, jimeng@illinois.edu

###### Abstract

Diagnosis-Related Group (DRG) codes are essential for hospital reimbursement and operations but require labor-intensive assignment. Large Language Models (LLMs) struggle with DRG coding due to the out-of-distribution (OOD) nature of the task: pretraining corpora rarely contain private clinical or billing data. We introduce DRG-Sapphire, which uses large-scale reinforcement learning (RL) for automated DRG coding from clinical notes. Built on Qwen2.5-7B and trained with Group Relative Policy Optimization (GRPO) using rule-based rewards, DRG-Sapphire introduces a series of RL enhancements to address domain-specific challenges not seen in previous mathematical tasks. Our model achieves state-of-the-art accuracy on the MIMIC-IV benchmark and generates physician-validated reasoning for DRG assignments, significantly enhancing explainability. Our study further sheds light on broader challenges of applying RL to knowledge-intensive, OOD tasks. We observe that RL performance scales approximately linearly with the logarithm of the number of supervised fine-tuning (SFT) examples, suggesting that RL effectiveness is fundamentally constrained by the domain knowledge encoded in the base model. For OOD tasks like DRG coding, strong RL performance requires sufficient knowledge infusion prior to RL. Consequently, scaling SFT may be more effective and computationally efficient than scaling RL alone for such tasks. <sup>1</sup> <sup>1</sup> 1 Our code is available at [https://github.com/hanyin88/DRG-Sapphire](https://github.com/hanyin88/DRG-Sapphire).

![Refer to caption](https://arxiv.org/html/x1.png)

Figure 1: Main Results. (A) Accuracy of DRG coding on the MIMIC-IV test set (N=26,244). DRG-Sapphire outperforms proprietary reasoning models and the previous SOTA model, DRG-LLaMA. Notably, classification models could not generate reasoning for DRG code assignments. (B) Best RL performance increases linearly with the logarithm of the SFT sample sizes. Dashed line marks where 50% of training data was used for SFT. Best results from vanilla GRPO runs are shown.

### 1 Introduction

Medical codes such as DRG play pivotal roles in modern healthcare. DRG codes are fundamental to the inpatient prospective payment system, directly influencing hospital reimbursement and key quality metrics [^30]. Currently, assigning DRG codes from clinical notes remains a costly and labor-intensive task, performed manually by highly trained coding specialists.

With the emergence of LLMs, there has been growing interest in leveraging these models for automated medical coding [^8]. However, DRG coding remains a particularly challenging task for LLMs (Figure [1](https://arxiv.org/html/2505.21908v2#S0.F1 "Figure 1 ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") A), with prior attempts yielding limited success  [^38]. A primary difficulty arises because DRG coding represents an out-of-distribution (OOD) task for off-the-shelf LLMs. Due to the private nature of medical records, most LLMs likely have minimal exposure to patient notes or billing data during pretraining. Additionally, DRG coding is inherently challenging due to: (1) a high-dimensional search space with over 700 DRG codes; (2) advanced clinical reasoning required to link diagnoses with hospital resource use and disease severity; and (3) strict hierarchical rules governing DRG assignment.

Recent advances in reasoning models, such as OpenAI-o1 [^15] and DeepSeek-R1 [^12], have introduced a paradigm shift in LLM post-training. By leveraging large-scale RL with verifiable rewards, these models exhibit test-time scaling through extended chain-of-thought (CoT) reasoning, achieving state-of-the-art (SOTA) performance on complex tasks like competitive mathematics. Despite this progress, the design of optimal RL algorithms for scalable training remain an open challenge [^45]. In the healthcare domain, RL applications using verifiable rewards are still in their early stages, with prior work primarily focused on medical knowledge benchmarks [^4].

In this paper, we present a comprehensive exploration of large-scale, reasoning-oriented RL training for automated DRG coding from unstructured clinical notes. In theory, training towards a reasoning model is well-suited for this task: (1) it promotes the development of complex reasoning skills required for accurate code assignment; and (2) more importantly, it generates transparent rationales through CoT reasoning—a key requirement for trust and explainablity in real-world clinical applications.

Through this work, we aim to further derive insights into applying RL to challenging OOD tasks with off-the-shelf LLMs. Using Qwen2.5-7B model and GRPO with DRG-rule-based rewards, we systematically investigate the prerequisites for successful RL, the allocation of data between SFT and GRPO under a fixed data budget, and the impact of scaling SFT data. We also explore a series of RL algorithmic enhancements and adaptive learning strategies. Our core contributions are as follows:

1. We introduce DRG-Sapphire, a novel model developed through large-scale RL, achieving SOTA performance in automated DRG coding. Unlike prior methods, DRG-Sapphire generates clinically helpful, physician-validated reasoning, significantly improving explainability.
2. We demonstrate that the performance ceiling of RL in this OOD task is bounded by the model’s capabilities before RL training. Specifically, we observe that RL performance increases linearly with the logarithm of the number of SFT examples, suggesting that scaling SFT may be more effective and computationally efficient than scaling RL alone for such tasks.
3. We propose a series of algorithmic enhancements and identify unique challenges in applying RL to DRG coding that distinguish it from mathematical domains—such as a preference for an Answer-First cognitive pattern, and sensitivity to KL divergence for stable training.

### 2 Related Work

##### Automated DRG Coding

Given their critical role in hospital operations and reimbursement, there is significant interest in automating DRG coding and enabling early DRG prediction [^23]. The prior SOTA method, DRG-LLaMA, fine-tunes a LLaMA model as a sequence classifier by replacing its generation head with a classification head [^38]. Most existing approaches similarly frame DRG coding as a multi-class classification task, offering limited insight into the rationale behind code assignments. While methods like DRGCoder provide input-level weight visualizations [^13], their interpretability remains insufficient for real-world clinical deployment, where transparency and explainability are critical.

##### Replication Efforts of Deepseek-R1

Recent studies have actively explored replicating the RL recipes of DeepSeek-R1, particularly in mathematical and coding domains, with varying degrees of success [^47]. One line of work has proposed approaches to address biases and improve sample efficiency in the original GRPO algorithm [^45]. Another active research area focuses on curriculum and staged learning strategies during reasoning-oriented RL [^48].

##### New Capabilities from RL?

A central debate concerns whether RL truly fosters new capabilities beyond those already encoded in the base model. In DeepSeekMath, RL improved Majority@K but not Pass@K performance on mathematical tasks [^33]. A comprehensive analysis across mathematical, coding, and visual reasoning tasks found that RL with verifiable rewards primarily reinforces existing reasoning capabilities rather than fostering novel ones [^46]. Recently, Ma et al. [^26] analyzed training dynamics on complex reasoning tasks, showing that RL strengthens performance within a model’s existing capabilities, whereas SFT more effectively extends them beyond its current scope.

### 3 Large-scale RL for Automated DRG Coding

#### 3.1 Problem Formulation

We aim to automate the hierarchical assignment of Medicare Severity Diagnosis-Related Group (MS-DRG) codes using LLMs. The MS-DRG system classifies each hospitalization into a single DRG code based on clinical complexity and resource utilization (see Appendix [A.1](https://arxiv.org/html/2505.21908v2#A1.SS1 "A.1 Problem Definition of MS-DRG Coding ‣ Appendix A Addtional Methods ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") for details). Given a hospitalization represented by a set of clinical documents $D$ , the DRG coding process applies an extraction function $h$ to identify the principal diagnosis $w_{d}$ or procedure $w_{p}$ , and the presence of Complications or Comorbidities (CC) or Major Complications or Comorbidities (MCC). A hierarchical mapping function $f$ then determines the final DRG code. Formally, the MS-DRG assignment is defined as:

|  | $$ (w_{d},w_{p},\text{CC},\text{MCC})=h(D),\quad g=f(w_{d},w_{p},\text{CC},\text{MCC}), $$ |  |
| --- | --- | --- |

where $g$ is the assigned DRG code. In this paper, we use an LLM to automate this complex process.

#### 3.2 Preliminary: GRPO

Compared to Proximal Policy Optimization [^32], GRPO eliminates the value function and estimates the advantage using relative rewards within a group [^33]. For each question $q$ , GRPO samples a group of outputs $\{o_{1},o_{2},\cdots,o_{G}\}$ from the old policy $\pi_{\theta_{\text{old}}}$ and then optimizes the target policy $\pi_{\theta}$ . In this paper, we enforce $\pi_{\theta_{\text{old}}}=\pi_{\theta}$ to ensure strict on-policy learning. Under this setting, we maximizing the following objective:

<table><tbody><tr><td></td><td><math><semantics><mtable><mtr><mtd><mrow><msub><mi>𝒥</mi> <mrow><mi>G</mi> <mo></mo><mi>R</mi> <mo></mo><mi>P</mi> <mo></mo><mi>O</mi></mrow></msub> <mo></mo><mrow><mo>(</mo><mi>θ</mi><mo>)</mo></mrow></mrow></mtd> <mtd><mrow><mo>=</mo> <mrow><mi>𝔼</mi> <mo></mo><mrow><mo>[</mo><mrow><mrow><mi>q</mi> <mo>∼</mo> <mrow><mi>P</mi> <mo></mo><mrow><mo>(</mo><mi>Q</mi><mo>)</mo></mrow></mrow></mrow><mo>,</mo><mrow><msubsup><mrow><mo>{</mo> <msub><mi>o</mi> <mi>i</mi></msub> <mo>}</mo></mrow> <mrow><mi>i</mi> <mo>=</mo> <mn>1</mn></mrow> <mi>G</mi></msubsup> <mo>∼</mo> <mrow><msub><mi>π</mi> <msub><mi>θ</mi> <mrow><mi>o</mi> <mo></mo><mi>l</mi> <mo></mo><mi>d</mi></mrow></msub></msub> <mo></mo><mrow><mo>(</mo><mrow><mi>O</mi> <mo>|</mo> <mi>q</mi></mrow><mo>)</mo></mrow></mrow></mrow></mrow><mo>]</mo></mrow></mrow></mrow></mtd></mtr> <mtr><mtd><mrow><mrow><mfrac><mn>1</mn> <mi>G</mi></mfrac> <mo></mo><mrow><munderover><mo>∑</mo> <mrow><mi>i</mi> <mo>=</mo> <mn>1</mn></mrow> <mi>G</mi></munderover> <mrow><mfrac><mn>1</mn> <mrow><mo>|</mo> <msub><mi>o</mi> <mi>i</mi></msub> <mo>|</mo></mrow></mfrac> <mo></mo><mrow><munderover><mo>∑</mo> <mrow><mi>t</mi> <mo>=</mo> <mn>1</mn></mrow> <mrow><mo>|</mo> <msub><mi>o</mi> <mi>i</mi></msub> <mo>|</mo></mrow></munderover> <mrow><mo>[</mo><mrow><msub><mover><mi>A</mi> <mo>^</mo></mover> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>−</mo> <mrow><mi>β</mi> <mo></mo><mrow><mo>(</mo><mrow><mfrac><mrow><msub><mi>π</mi> <mrow><mi>r</mi> <mo></mo><mi>e</mi> <mo></mo><mi>f</mi></mrow></msub> <mo></mo><mrow><mo>(</mo><mrow><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>|</mo> <mrow><mi>q</mi><mo>,</mo><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mrow><mo>&lt;</mo> <mi>t</mi></mrow></mrow></msub></mrow></mrow><mo>)</mo></mrow></mrow> <mrow><msub><mi>π</mi> <mi>θ</mi></msub> <mo></mo><mrow><mo>(</mo><mrow><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>|</mo> <mrow><mi>q</mi><mo>,</mo><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mrow><mo>&lt;</mo> <mi>t</mi></mrow></mrow></msub></mrow></mrow><mo>)</mo></mrow></mrow></mfrac> <mo>−</mo> <mrow><mi>log</mi> <mo>⁡</mo> <mfrac><mrow><msub><mi>π</mi> <mrow><mi>r</mi> <mo></mo><mi>e</mi> <mo></mo><mi>f</mi></mrow></msub> <mo></mo><mrow><mo>(</mo><mrow><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>|</mo> <mrow><mi>q</mi><mo>,</mo><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mrow><mo>&lt;</mo> <mi>t</mi></mrow></mrow></msub></mrow></mrow><mo>)</mo></mrow></mrow> <mrow><msub><mi>π</mi> <mi>θ</mi></msub> <mo></mo><mrow><mo>(</mo><mrow><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>|</mo> <mrow><mi>q</mi><mo>,</mo><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mrow><mo>&lt;</mo> <mi>t</mi></mrow></mrow></msub></mrow></mrow><mo>)</mo></mrow></mrow></mfrac></mrow> <mo>−</mo> <mn>1</mn></mrow><mo>)</mo></mrow></mrow></mrow><mo>]</mo></mrow></mrow></mrow></mrow></mrow><mo>,</mo></mrow></mtd></mtr></mtable><annotation>\footnotesize\begin{split}\mathcal{J}_{GRPO}(\theta)&amp;=\mathbb{E}{[q\sim P(Q),\{o_{i}\}_{i=1}^{G}\sim\pi_{\theta_{old}}(O|q)]}\\ &amp;\frac{1}{G}\sum_{i=1}^{G}\frac{1}{|o_{i}|}\sum_{t=1}^{|o_{i}|}\left[\hat{A}_{i,t}-\beta(\frac{\pi_{ref}(o_{i,t}|q,o_{i,&lt;t})}{\pi_{\theta}(o_{i,t}|q,o_{i,&lt;t})}-\log\frac{\pi_{ref}(o_{i,t}|q,o_{i,&lt;t})}{\pi_{\theta}(o_{i,t}|q,o_{i,&lt;t})}-1)\right],\end{split}</annotation></semantics></math></td><td></td><td rowspan="1"><span>(1)</span></td></tr></tbody></table>

where $\beta$ is the coefficient for the KL divergence penalty, $\pi_{\theta_{\text{ref}}}$ is the reference policy, and $\hat{A}_{i,t}$ is the advantage, computed based on the relative rewards within each group $\{r_{i}\}_{i=1}^{G}$ as:

<table><tbody><tr><td></td><td><math><semantics><mrow><mrow><msub><mover><mi>A</mi> <mo>^</mo></mover> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>=</mo> <mfrac><mrow><msub><mi>r</mi> <mi>i</mi></msub> <mo>−</mo> <mrow><mtext>mean</mtext> <mo></mo><mrow><mo>(</mo><msubsup><mrow><mo>{</mo> <msub><mi>r</mi> <mi>i</mi></msub> <mo>}</mo></mrow> <mrow><mi>i</mi> <mo>=</mo> <mn>1</mn></mrow> <mi>G</mi></msubsup><mo>)</mo></mrow></mrow></mrow> <mrow><mtext>std</mtext> <mo></mo><mrow><mo>(</mo><msubsup><mrow><mo>{</mo> <msub><mi>r</mi> <mi>i</mi></msub> <mo>}</mo></mrow> <mrow><mi>i</mi> <mo>=</mo> <mn>1</mn></mrow> <mi>G</mi></msubsup><mo>)</mo></mrow></mrow></mfrac></mrow><mo>.</mo></mrow><annotation>\hat{A}_{i,t}=\frac{r_{i}-\text{mean}(\{r_{i}\}_{i=1}^{G})}{\text{std}(\{r_{i}\}_{i=1}^{G})}.</annotation></semantics></math></td><td></td><td rowspan="1"><span>(2)</span></td></tr></tbody></table>

Here, $r_{i}$ denotes the reward assigned to output $o_{i}$ for prompt $q$ . The gradient of $\mathcal{J}_{\text{GRPO}}(\theta)$ is:

<table><tbody><tr><td></td><td><math><semantics><mtable><mtr><mtd><mrow><mrow><msub><mo>∇</mo> <mi>θ</mi></msub> <msub><mi>𝒥</mi> <mrow><mi>G</mi> <mo></mo><mi>R</mi> <mo></mo><mi>P</mi> <mo></mo><mi>O</mi></mrow></msub></mrow> <mo></mo><mrow><mo>(</mo><mi>θ</mi><mo>)</mo></mrow></mrow></mtd> <mtd><mrow><mo>=</mo> <mrow><mi>𝔼</mi> <mo></mo><mrow><mo>[</mo><mrow><mrow><mi>q</mi> <mo>∼</mo> <mrow><mi>P</mi> <mo></mo><mrow><mo>(</mo><mi>Q</mi><mo>)</mo></mrow></mrow></mrow><mo>,</mo><mrow><msubsup><mrow><mo>{</mo> <msub><mi>o</mi> <mi>i</mi></msub> <mo>}</mo></mrow> <mrow><mi>i</mi> <mo>=</mo> <mn>1</mn></mrow> <mi>G</mi></msubsup> <mo>∼</mo> <mrow><msub><mi>π</mi> <msub><mi>θ</mi> <mrow><mi>o</mi> <mo></mo><mi>l</mi> <mo></mo><mi>d</mi></mrow></msub></msub> <mo></mo><mrow><mo>(</mo><mrow><mi>O</mi> <mo>|</mo> <mi>q</mi></mrow><mo>)</mo></mrow></mrow></mrow></mrow><mo>]</mo></mrow></mrow></mrow></mtd></mtr> <mtr><mtd><mrow><mrow><mfrac><mn>1</mn> <mi>G</mi></mfrac> <mo></mo><mrow><munderover><mo>∑</mo> <mrow><mi>i</mi> <mo>=</mo> <mn>1</mn></mrow> <mi>G</mi></munderover> <mrow><mfrac><mn>1</mn> <mrow><mo>|</mo> <msub><mi>o</mi> <mi>i</mi></msub> <mo>|</mo></mrow></mfrac> <mo></mo><mrow><munderover><mo>∑</mo> <mrow><mi>t</mi> <mo>=</mo> <mn>1</mn></mrow> <mrow><mo>|</mo> <msub><mi>o</mi> <mi>i</mi></msub> <mo>|</mo></mrow></munderover> <mrow><mrow><mo>[</mo><mrow><msub><mover><mi>A</mi> <mo>^</mo></mover> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>+</mo> <mrow><mi>β</mi> <mo></mo><mrow><mo>(</mo><mrow><mfrac><mrow><msub><mi>π</mi> <mrow><mi>r</mi> <mo></mo><mi>e</mi> <mo></mo><mi>f</mi></mrow></msub> <mo></mo><mrow><mo>(</mo><mrow><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>|</mo> <msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mrow><mo>&lt;</mo> <mi>t</mi></mrow></mrow></msub></mrow><mo>)</mo></mrow></mrow> <mrow><msub><mi>π</mi> <mi>θ</mi></msub> <mo></mo><mrow><mo>(</mo><mrow><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>|</mo> <msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mrow><mo>&lt;</mo> <mi>t</mi></mrow></mrow></msub></mrow><mo>)</mo></mrow></mrow></mfrac> <mo>−</mo> <mn>1</mn></mrow><mo>)</mo></mrow></mrow></mrow><mo>]</mo></mrow> <mo></mo><mrow><mrow><msub><mo>∇</mo> <mi>θ</mi></msub> <mi>log</mi></mrow> <mo>⁡</mo> <msub><mi>π</mi> <mi>θ</mi></msub></mrow> <mo></mo><mrow><mo>(</mo><mrow><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>|</mo> <mrow><mi>q</mi><mo>,</mo><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mrow><mo>&lt;</mo> <mi>t</mi></mrow></mrow></msub></mrow></mrow><mo>)</mo></mrow></mrow></mrow></mrow></mrow></mrow><mo>.</mo></mrow></mtd></mtr></mtable><annotation>\footnotesize\begin{split}\nabla_{\theta}\mathcal{J}_{GRPO}(\theta)&amp;=\mathbb{E}{[q\sim P(Q),\{o_{i}\}_{i=1}^{G}\sim\pi_{\theta_{old}}(O|q)]}\\ &amp;\frac{1}{G}\sum_{i=1}^{G}\frac{1}{|o_{i}|}\sum_{t=1}^{|o_{i}|}\left[\hat{A}_{i,t}+\beta\left(\frac{\pi_{ref}(o_{i,t}|o_{i,&lt;t})}{\pi_{\theta}(o_{i,t}|o_{i,&lt;t})}-1\right)\right]\nabla_{\theta}\log\pi_{\theta}(o_{i,t}|q,o_{i,&lt;t}).\end{split}</annotation></semantics></math></td><td></td><td rowspan="1"><span>(3)</span></td></tr></tbody></table>

#### 3.3 Improving GRPO Beyond the Baseline

We propose a set of strategies to address key limitations of GRPO.

##### Dynamic Resampling for Advantage Preservation

Existing RL algorithms suffer from the gradient-diminishing problem. In GRPO, if all completions $\{o_{i}\}_{i=1}^{G}$ for a prompt $q$ receive the same reward value, the resulting advantage for this group becomes zero. As training progresses, this issue becomes more pronounced due to policy optimization and accompanying entropy collapse  [^45], as more prompts yield completions with no reward variance—either because all completions are perfectly correct or uniformly incorrect. This leads to a progressive decrease in the learning signal from the reward-based advantage.

To address this, we propose a dynamic resampling strategy (Equation  [4](https://arxiv.org/html/2505.21908v2#S3.E4 "In Dynamic Resampling for Advantage Preservation ‣ 3.3 Improving GRPO Beyond the Baseline ‣ 3 Large-scale RL for Automated DRG Coding ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")). For each prompt $q$ , if sampled completions yield zero reward variance, we resample up to $N_{\text{max}}$ times until nonzero variance is observed. Optionally, we enforce that at least one completion receives a positive reward, guiding gradient updates toward high-reward trajectories.

<table><tbody><tr><td></td><td><math><semantics><mtable><mtr><mtd><mrow><msub><mi>𝒥</mi> <mrow><mi>G</mi> <mo></mo><mi>R</mi> <mo></mo><mi>P</mi> <mo></mo><mi>O</mi></mrow></msub> <mo></mo><mrow><mo>(</mo><mi>θ</mi><mo>)</mo></mrow></mrow></mtd> <mtd><mrow><mo>=</mo> <mrow><mi>𝔼</mi> <mo></mo><mrow><mo>[</mo><mrow><mrow><mi>q</mi> <mo>∼</mo> <mrow><mi>P</mi> <mo></mo><mrow><mo>(</mo><mi>Q</mi><mo>)</mo></mrow></mrow></mrow><mo>,</mo><mrow><msubsup><mrow><mo>{</mo> <msub><mi>o</mi> <mi>i</mi></msub> <mo>}</mo></mrow> <mrow><mi>i</mi> <mo>=</mo> <mn>1</mn></mrow> <mi>G</mi></msubsup> <mo>∼</mo> <mrow><msub><mi>π</mi> <msub><mi>θ</mi> <mrow><mi>o</mi> <mo></mo><mi>l</mi> <mo></mo><mi>d</mi></mrow></msub></msub> <mo></mo><mrow><mo>(</mo><mrow><mi>O</mi> <mo>|</mo> <mi>q</mi></mrow><mo>)</mo></mrow></mrow></mrow></mrow><mo>]</mo></mrow></mrow></mrow></mtd></mtr> <mtr><mtd><mrow><mfrac><mn>1</mn> <mi>G</mi></mfrac> <mo></mo><mrow><munderover><mo>∑</mo> <mrow><mi>i</mi> <mo>=</mo> <mn>1</mn></mrow> <mi>G</mi></munderover> <mrow><mfrac><mn>1</mn> <mrow><mo>|</mo> <msub><mi>o</mi> <mi>i</mi></msub> <mo>|</mo></mrow></mfrac> <mo></mo><mrow><munderover><mo>∑</mo> <mrow><mi>t</mi> <mo>=</mo> <mn>1</mn></mrow> <mrow><mo>|</mo> <msub><mi>o</mi> <mi>i</mi></msub> <mo>|</mo></mrow></munderover> <mrow><mo>[</mo><mrow><msub><mover><mi>A</mi> <mo>^</mo></mover> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>−</mo> <mrow><mi>β</mi> <mo></mo><mrow><mo>(</mo><mrow><mfrac><mrow><msub><mi>π</mi> <mrow><mi>r</mi> <mo></mo><mi>e</mi> <mo></mo><mi>f</mi></mrow></msub> <mo></mo><mrow><mo>(</mo><mrow><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>|</mo> <mrow><mi>q</mi><mo>,</mo><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mrow><mo>&lt;</mo> <mi>t</mi></mrow></mrow></msub></mrow></mrow><mo>)</mo></mrow></mrow> <mrow><msub><mi>π</mi> <mi>θ</mi></msub> <mo></mo><mrow><mo>(</mo><mrow><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>|</mo> <mrow><mi>q</mi><mo>,</mo><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mrow><mo>&lt;</mo> <mi>t</mi></mrow></mrow></msub></mrow></mrow><mo>)</mo></mrow></mrow></mfrac> <mo>−</mo> <mrow><mi>log</mi> <mo>⁡</mo> <mfrac><mrow><msub><mi>π</mi> <mrow><mi>r</mi> <mo></mo><mi>e</mi> <mo></mo><mi>f</mi></mrow></msub> <mo></mo><mrow><mo>(</mo><mrow><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>|</mo> <mrow><mi>q</mi><mo>,</mo><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mrow><mo>&lt;</mo> <mi>t</mi></mrow></mrow></msub></mrow></mrow><mo>)</mo></mrow></mrow> <mrow><msub><mi>π</mi> <mi>θ</mi></msub> <mo></mo><mrow><mo>(</mo><mrow><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mi>t</mi></mrow></msub> <mo>|</mo> <mrow><mi>q</mi><mo>,</mo><msub><mi>o</mi> <mrow><mi>i</mi><mo>,</mo><mrow><mo>&lt;</mo> <mi>t</mi></mrow></mrow></msub></mrow></mrow><mo>)</mo></mrow></mrow></mfrac></mrow> <mo>−</mo> <mn>1</mn></mrow><mo>)</mo></mrow></mrow></mrow><mo>]</mo></mrow></mrow></mrow></mrow></mrow></mtd></mtr> <mtr><mtd><mrow><mrow><mrow><mrow><mtext>s.t.</mtext><mo></mo> <mtext>Var</mtext> <mo></mo><mrow><mo>(</mo><msubsup><mrow><mo>{</mo> <msub><mi>r</mi> <mi>i</mi></msub> <mo>}</mo></mrow> <mrow><mi>i</mi> <mo>=</mo> <mn>1</mn></mrow> <mi>G</mi></msubsup><mo>)</mo></mrow></mrow> <mo>&gt;</mo> <mrow><mn>0</mn> <mo></mo><mtext>within </mtext><mo></mo><msub><mi>N</mi> <mtext>max</mtext></msub></mrow></mrow><mo>,</mo><mrow><mrow><mtext> optionally: </mtext><mo></mo><mrow><mo>|</mo> <mrow><mo>{</mo> <msub><mi>o</mi> <mi>i</mi></msub> <mo>∣</mo> <mrow><msub><mi>r</mi> <mi>i</mi></msub> <mo>&gt;</mo> <mn>0</mn></mrow> <mo>}</mo></mrow> <mo>|</mo></mrow></mrow> <mo>&gt;</mo> <mn>0</mn></mrow></mrow><mo>.</mo></mrow></mtd></mtr></mtable><annotation>\footnotesize\begin{split}\mathcal{J}_{GRPO}(\theta)&amp;=\mathbb{E}{[q\sim P(Q),\{o_{i}\}_{i=1}^{G}\sim\pi_{\theta_{old}}(O|q)]}\\ &amp;\frac{1}{G}\sum_{i=1}^{G}\frac{1}{|o_{i}|}\sum_{t=1}^{|o_{i}|}\left[\hat{A}_{i,t}-\beta(\frac{\pi_{ref}(o_{i,t}|q,o_{i,&lt;t})}{\pi_{\theta}(o_{i,t}|q,o_{i,&lt;t})}-\log\frac{\pi_{ref}(o_{i,t}|q,o_{i,&lt;t})}{\pi_{\theta}(o_{i,t}|q,o_{i,&lt;t})}-1)\right]\\ &amp;{\color[rgb]{1,0,0}\definecolor[named]{pgfstrokecolor}{rgb}{1,0,0}\text{s.t.}\qquad\text{Var}(\{r_{i}\}_{i=1}^{G})&gt;0\qquad\text{within }N_{\text{max}},\text{ optionally: }\left|\left\{o_{i}\mid r_{i}&gt;0\right\}\right|&gt;0.}\end{split}</annotation></semantics></math></td><td></td><td rowspan="1"><span>(4)</span></td></tr></tbody></table>

Our approach differs from the dynamic sampling strategy in DAPO [^45], which discards prompts that yield uniformly correct or incorrect completions. Given the data scarcity in clinical domains, we instead maximize the utility of each training example by resampling rather than discarding.

##### Intervening on Cognitive Behaviors

Cognitive behaviors, such as verification and backtracking, are critical for effective reasoning-oriented RL [^11]. We explored additional reward functions and a specialized SFT dataset (detailed in Section [A.3](https://arxiv.org/html/2505.21908v2#A1.SS3 "A.3 Enforcing Cognitive Behaviors ‣ Appendix A Addtional Methods ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")) to incentivize three cognitive patterns in CoT reasoning, as shown in Figure  [2](https://arxiv.org/html/2505.21908v2#S3.F2 "Figure 2 ‣ Intervening on Cognitive Behaviors ‣ 3.3 Improving GRPO Beyond the Baseline ‣ 3 Large-scale RL for Automated DRG Coding ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding"). These are: (1) Answer-First, where the model outputs the DRG code before CoT; (2) CoT-First, where the model generates CoT reasoning before the DRG code; and (3) Differential Thinking, where the model evaluates three potential DRG codes before selecting the most appropriate.

![Refer to caption](https://arxiv.org/html/x2.png)

Figure 2: Examples of Cognitive Behaviors.

##### KL Divergence Decay

The KL divergence term in the GRPO objective (Equation [1](https://arxiv.org/html/2505.21908v2#S3.E1 "In 3.2 Preliminary: GRPO ‣ 3 Large-scale RL for Automated DRG Coding ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")) regularizes the divergence between the target policy $\pi_{\theta}$ and the reference policy $\pi_{\theta_{\text{ref}}}$ . However, this term exacerbates the gradient-diminishing problem in RL: as training progresses and more prompts yield zero-variance responses, the gradient, per Equation [3](https://arxiv.org/html/2505.21908v2#S3.E3 "In 3.2 Preliminary: GRPO ‣ 3 Large-scale RL for Automated DRG Coding ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding"), becomes dominated by the KL term, pulling $\pi_{\theta}$ toward $\pi_{\theta_{\text{ref}}}$ . This drives over-regularization toward the reference policy and risks policy degradation. Recent work suggests that removing the KL penalty enhances reasoning capabilities in mathematical domains [^45]. Motivated by this, we explored two setups: (1) completely removing the KL divergence term from the objective, and (2) applying a cosine decay schedule to the KL term’s coefficient $\beta$ , smoothly reducing it to zero during training (see Section  [A.4](https://arxiv.org/html/2505.21908v2#A1.SS4 "A.4 KL Divergence Decay ‣ Appendix A Addtional Methods ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") for details).

##### GRPO Variants

In Equation [1](https://arxiv.org/html/2505.21908v2#S3.E1 "In 3.2 Preliminary: GRPO ‣ 3 Large-scale RL for Automated DRG Coding ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding"), dividing by $|o_{i}|$ during group-level advantage normalization introduces a length bias, diminishing the influence of longer completions on the policy gradient. To address this, DAPO [^45] uses $\sum_{i=1}^{G}|o_{i}|$ as the denominator, while Dr. GRPO [^24] adopts a constant normalization factor. Additionally, Dr. GRPO removes the division by $\operatorname{std}(\{r_{i}\}_{i=1}^{G})$ in Equation [2](https://arxiv.org/html/2505.21908v2#S3.E2 "In 3.2 Preliminary: GRPO ‣ 3 Large-scale RL for Automated DRG Coding ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") to mitigate question-level difficulty bias. We systematically evaluated these three strategies. Due to the strict on-policy nature of our setting ( $\pi_{\theta_{\text{old}}}=\pi_{\theta}$ ), we did not explore other modifications, such as clip-higher [^45].

##### Reward Shaping

We implemented two straightforward yet robust rule-based reward components: Format Reward and Accuracy Reward (detailed in the Section [A.2](https://arxiv.org/html/2505.21908v2#A1.SS2 "A.2 Rule-Based Reward Modeling ‣ Appendix A Addtional Methods ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")). For the Accuracy Reward, we investigated three distinct strategies: Dense Reward, Balanced Reward, and Strict Reward. These reward functions were designed to provide varying levels of reward signal sparsity, contingent on the correctness of the DRG code, its associated principal diagnosis, and the CC/MCC status.

#### 3.4 Adaptive Learning Strategy

##### Curriculum Learning

We investigate whether a curriculum learning strategy, which organizes training cases by difficulty, improves performance compared to a mixed-difficulty baseline. We evaluated four setups, detailed in Appendix [A.6](https://arxiv.org/html/2505.21908v2#A1.SS6 "A.6 Curriculum Learning ‣ Appendix A Addtional Methods ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding"): (1) excluding easy cases, (2) excluding hard cases, (3) excluding both easy and hard cases (i.e., using only medium-difficulty cases), and (4) training on easy cases first, then progressing to hard cases.

##### Staged Learning

Lastly, we explored a staged learning strategy with three training phases of roughly equal length. After each phase, we identified easy and hard cases and evaluated two approaches: (1) additional SFT on hard cases, and (2) additional DPO on hard cases, before advancing to the next stage. As detailed in Appendix [A.7](https://arxiv.org/html/2505.21908v2#A1.SS7 "A.7 Staged Learning ‣ Appendix A Addtional Methods ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding"), these approaches aim to improve the model’s handling of challenging cases through targeted learning.

### 4 Implementation Details

##### Dataset

We utilized the DRG-LLaMA training and test sets  [^38], derived from the publicly available MIMIC-IV dataset of real-world medical records [^17]. The full training and test sets include 236,192 and 26,244 cases, respectively. Each case uses the “brief hospital course” section from the discharge summary as input, with MS-DRG codes consolidated to version 34.0.

##### Training Pipeline and Scaling Strategy

An overview of the training pipeline is shown in Figure [3](https://arxiv.org/html/2505.21908v2#S4.F3 "Figure 3 ‣ Training Pipeline and Scaling Strategy ‣ 4 Implementation Details ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding"). We first sampled a reduced dataset termed DRG-Small, comprising 20% of the full data (N=46,758). This subset served as the foundation for extensive experiments on methodological variants and SFT–RL data mixtures, as detailed in Sections  [5.2](https://arxiv.org/html/2505.21908v2#S5.SS2 "5.2 Optimizing Data Allocation Between SFT and GRPO ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") through  [5.3](https://arxiv.org/html/2505.21908v2#S5.SS3 "5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding"). After identifying the optimal configuration, we scaled training to the full dataset to produce the final DRG-Sapphire model.

![Refer to caption](https://arxiv.org/html/x3.png)

Figure 3: Overview of Pipeline. We construct a CoT cold-start dataset using Qwen2.5-7B-Instruct, followed by SFT with this dataset and large-scale GRPO.

##### Construction of SFT Dataset

We prompted the Qwen2.5-7B-Instruct model with medical records and ground-truth DRG codes, tasking it to generate reasoning for DRG assignments (prompt provided in Section [I](https://arxiv.org/html/2505.21908v2#A9 "Appendix I Prompts to LLM ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")). After extensive prompt engineering, manual inspection by domain expert revealed that the dataset exhibits strong reasoning logic (e.g., analyzing principal diagnosis first) but frequently contains factual errors (e.g., misclassifying a condition’s CC/MCC status). We also included the complete list of original V34.0 MS-DRG codes in a question–answer format within the SFT dataset.

##### Model and RL Training

We selected Qwen2.5-7B-Instructs [^43] for the main experiments after evaluating various model size. GRPO training was conducted using the TRL package [^37] for one epoch across all experiments.

##### Evaluation Metrics

We report model performance on the full test set using Pass@1, Pass@8, and Majority@8 (Maj@8), following prior work in reasoning-oriented RL [^33]. Pass@1, reported as the model’s accuracy, is the mean accuracy across eight runs. Pass@8 assesses whether the correct DRG code appears among eight generated outputs, while Maj@8 determines if the most frequent output matches the correct DRG code.

### 5 Experiments

#### 5.1 Results of DRG-Sapphire

Our best DRG-Sapphire model was trained using a 90% SFT and 10% RL ratio on the full dataset (see Section  [5.2](https://arxiv.org/html/2505.21908v2#S5.SS2 "5.2 Optimizing Data Allocation Between SFT and GRPO ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") for SFT vs. RL ratio experiments), incorporating optimal GRPO enhancements and adaptive learning strategies (see Section  [5.3](https://arxiv.org/html/2505.21908v2#S5.SS3 "5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") for ablation studies).

##### Comparison with Baselines

As shown in Figure [1](https://arxiv.org/html/2505.21908v2#S0.F1 "Figure 1 ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") A, DRG-Sapphire significantly outperforms proprietary reasoning models, non-reasoning models, and the DeepSeek-distilled Qwen 32B. It achieves new SOTA performance on DRG coding, surpassing the previous best, DRG-LLaMA-7B (54.8% vs. 53.9%). In addition to improved accuracy, DRG-Sapphire provides interpretable reasoning—a compelling advantage over prior models trained purely as classifiers.

##### Expert Reader Study Results

![Refer to caption](https://arxiv.org/html/x4.png)

Figure 4: Expert Reader Study.

Four physicians in hospital leadership roles, actively engaged in DRG-related initiatives (e.g., reducing geometric mean length of stay), evaluated DRG-Sapphire ’s reasoning across 30 cases. On the dimensions of Helpfulness and Accuracy, DRG-Sapphire received a median rating of 4 out of 5, suggesting good potential for real-world applications (Figure  [4](https://arxiv.org/html/2505.21908v2#S5.F4 "Figure 4 ‣ Expert Reader Study Results ‣ 5.1 Results of DRG-Sapphire ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")). Qualitative assessments highlighted the explainability of DRG coding as highly valuable for DRG-related initiatives (see Section  [D.1](https://arxiv.org/html/2505.21908v2#A4.SS1 "D.1 Clinical Applications of Automated DRG Coding with Reasoning ‣ Appendix D Additional Discussion ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") for details), despite occasional factual inaccuracies in the reasoning.

#### 5.2 Optimizing Data Allocation Between SFT and GRPO

![Refer to caption](https://arxiv.org/html/x5.png)

Figure 5: Impact of SFT-GRPO Data Ratios on DRG-Small Subset. (A–E) GRPO consistently improves Pass@1 and Maj@8 across all SFT ratios but reduces Pass@8. (F) Total training time decreases with higher SFT ratios, as GRPO is more time-consuming.

##### Effect of SFT-GRPO Ratios on DRG-Small

First, we investigated the impact of varying the allocation of a fixed data budget between SFT and GRPO on the DRG-Small subset (N=46,758). This contrasts with Deepseek-R1-style training, where only minimal SFT precedes RL. Across all data splits, GRPO consistently improved Pass@1 over the SFT baseline by an absolute margin of approximately 10 percentage points (see Figure [5](https://arxiv.org/html/2505.21908v2#S5.F5 "Figure 5 ‣ 5.2 Optimizing Data Allocation Between SFT and GRPO ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")). We observed that this gain is driven by improvements in Maj@8, not Pass@8; in fact, Pass@8 declines with GRPO. This pattern suggests that RL sharpens the model’s output distribution toward higher-reward pathways, rather than introducing new reasoning capabilities in our experiments. Notably, the decline in Pass@8 during training indicates that RL may constrain diverse reasoning exploration. These findings align with recent studies [^46], which question whether RL improves reasoning beyond the base model’s capabilities. Moreover, the ultimate performance ceiling achievable with GRPO appears to be largely determined by the capacity of the initial SFT model; a stronger SFT foundation generally leads to better post-GRPO results. From a computational perspective, scaling SFT prior to RL is more efficient, as GRPO entails substantial inference-time cost (see Figure  [5](https://arxiv.org/html/2505.21908v2#S5.F5 "Figure 5 ‣ 5.2 Optimizing Data Allocation Between SFT and GRPO ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") F).

![Refer to caption](https://arxiv.org/html/x6.png)

Figure 6: Results on Full Dataset. (A) Accuracy from the two longest GRPO runs. (B–C) Pass@8 and Maj@8 vs. SFT size. Dashed line marks where 50% of training data was used for SFT. Best results from vanilla GRPO runs are shown.

##### Log-Linear Scaling of GRPO with Increasing SFT

Next, we scaled our training pipeline to the full dataset (N=236,192). Based on the results above, we started with an SFT-GRPO data ratio of 50%-50% and progressively increased the SFT ratio under a fixed total data budget. Plotting these results alongside the DRG-Small subset revealed that both GRPO and SFT performance scale approximately linearly with the logarithm of the number of SFT examples (Figure [1](https://arxiv.org/html/2505.21908v2#S0.F1 "Figure 1 ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") B). Although the number of GRPO steps varies across experiments in Figure  [1](https://arxiv.org/html/2505.21908v2#S0.F1 "Figure 1 ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") B, the benefit of scaling RL appears limited in our study. Figure  [6](https://arxiv.org/html/2505.21908v2#S5.F6 "Figure 6 ‣ Effect of SFT-GRPO Ratios on DRG-Small ‣ 5.2 Optimizing Data Allocation Between SFT and GRPO ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") A illustrates results from our longest GRPO runs, demonstrating modest benefits beyond 500 global steps. Consistent with earlier findings, GRPO reliably improves Pass@1 and Maj@8 while reducing Pass@8 (Figure  [6](https://arxiv.org/html/2505.21908v2#S5.F6 "Figure 6 ‣ Effect of SFT-GRPO Ratios on DRG-Small ‣ 5.2 Optimizing Data Allocation Between SFT and GRPO ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") B and C). As the number of SFT samples increased, the slope of the GRPO curves converged toward that of SFT across all metrics. Additional results from scaling to the full dataset are detailed in Section  [C.3](https://arxiv.org/html/2505.21908v2#A3.SS3 "C.3 Additional Results from Scaling to the Full Dataset ‣ Appendix C Additional Results ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding").

#### 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning

We present the results of ablation studies in Table [1](https://arxiv.org/html/2505.21908v2#S5.T1 "Table 1 ‣ 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") and Figure  [12](https://arxiv.org/html/2505.21908v2#A3.F12 "Figure 12 ‣ C.2 Accuracy with RL Training in Ablation Studies ‣ Appendix C Additional Results ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding"). All ablation studies were conducted on the DRG-Small dataset using Deepseek-R1-style training, with cold-start SFT on 1% of the training data (N=2,362) before RL.

DRG Principal Diagnosis CC/MCC Model Pass@1 Pass@8 Maj@8 Pass@1 Pass@8 Maj@8 Pass@1 Pass@8 Maj@8 Baseline    Vanilla GRPO + Dense Reward 38.5 48.2 39.3 52.5 58.5 53.4 47.8 60.0 49.0 Dynamic Resampling    Neutral Resampling 20.3 41.9 38.1 27.0 52.5 50.5 25.6 52.6 48.0    Positive Reward Resampling 39.2 44.8 39.6 52.9 56.4 53.3 48.3 55.6 49.0 Coginitive Behvaiors Intervention    COT-First 35.5 52.2 37.4 50.9 59.6 52.4 46.3 66.7 48.4    Differential Thinking 30.2 47.3 33.9 46.7 57.0 50.9 40.6 63.0 45.2 GRPO Variants    DAPO Loss 40.1 48.0 40.6 53.8 58.5 54.3 49.4 59.1 50.3    Dr. GRPO Loss 37.5 47.6 38.1 50.9 57.2 51.4 48.8 60.7 49.8    Dr. GRPO Advantage 38.5 51.9 39.6 53.4 60.5 54.3 47.6 63.6 49.1 KL Divergence    No KL 39.8 42.4 39.9 53.6 55.2 53.7 49.1 52.3 49.3    KL Decay 38.2 42.0 38.3 52.2 54.7 52.4 48.8 53.7 49.0 Reward Shaping    Strict Reward 40.1 49.1 40.9 52.8 58.1 53.7 47.6 59.0 48.8    Balanced Reward 38.1 51.3 40.0 52.1 60.4 53.8 48.2 64.0 50.7 Curriculum Learning    Remove Easy Cases 35.8 51.9 37.6 50.3 59.2 51.7 46.6 65.8 48.7    Remove Hard Cases 40.4 46.6 40.7 53.2 56.5 53.7 49.5 57.2 50.1    Remove Easy and Hard Cases 38.7 48.2 39.4 52.9 58.1 53.4 48.3 59.9 49.3    From Easy to Hard 29.4 51.7 32.7 43.4 58.6 46.5 40.8 68.5 44.3 Staged Learning    Staged SFT 39.3 49.1 40.0 52.9 59.2 53.8 46.0 58.6 47.1    Staged DPO 29.3 46.1 31.2 43.8 54.3 45.5 43.1 64.2 45.7

Table 1: Ablation Study Results. Rows with a blue background indicate superior Pass@1 performance compared to Vanilla GRPO + Dense Reward. Bold values denote the highest score for each metric.

##### Dynamic Resampling

![Refer to caption](https://arxiv.org/html/x7.png)

Figure 7: Dynamic Resampling. (A) Reward variance remains high under dynamic resampling. (B) During training, reward scores from both resampling strategies generally underperform vanilla GRPO. (C) Dynamic resampling substantially increases training time.

Surprisingly, dynamic resampling—with or without a positive reward constraint—yielded marginally better or even worse performance than vanilla GRPO (Table [1](https://arxiv.org/html/2505.21908v2#S5.T1 "Table 1 ‣ 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")), despite preserving high reward variance (Figure  [7](https://arxiv.org/html/2505.21908v2#S5.F7 "Figure 7 ‣ Dynamic Resampling ‣ 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") A). More importantly, dynamic resampling proved computationally inefficient due to the frequent need to regenerate responses (Figure  [7](https://arxiv.org/html/2505.21908v2#S5.F7 "Figure 7 ‣ Dynamic Resampling ‣ 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") C). We hypothesize that dynamic resampling may introduces training instability by oversampling zero-variance prompts, thereby skewing batches toward OOD responses rarely generated by the current policy. Additionally, this approach may inadvertently over-penalize low-reward outputs newly introduced into the batch, further distorting the learning signal.

##### Intervening on Cognitive Behaviors

Our SFT dataset includes diverse reasoning styles, notably both Answer-First and CoT-First patterns. Interestingly, during training, the policy frequently converged toward the Answer-First strategy. To encourage CoT-First behavior, we experimented with an additional rule-based reward and adjusted the SFT dataset to explicitly promote Differential-Thinking. Although both interventions successfully elicited the intended cognitive behaviors, their performance lagged behind the naturally emerging Answer-First pattern (Table [1](https://arxiv.org/html/2505.21908v2#S5.T1 "Table 1 ‣ 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")). This finding is surprising, as CoT-First strategies are often effective in complex reasoning tasks  [^39]. We hypothesize that DRG coding benefits from a direct prediction strategy, where outputting the DRG code first leverages implicit knowledge in the model’s latent space, outperforming explicit CoT-grounded reasoning. These findings also align with recent studies [^27], which suggest that CoT and extended reasoning may not always be necessary for reasoning models, and a “no-thinking” pattern can sometimes yield better performance.

##### KL Divergence

![Refer to caption](https://arxiv.org/html/x8.png)

Figure 8: KL divergence. (A) Examples of training collapse when removing the KL divergence. (B) KL decay appears beneficial late in training.

In our experiments, removing the KL penalty frequently led to model collapse (Figure  [8](https://arxiv.org/html/2505.21908v2#S5.F8 "Figure 8 ‣ KL Divergence ‣ 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") A). This contrasts sharply with findings in mathematical reasoning tasks, where the KL term is less critical, underscoring its importance for cross-domain generalization. However, in cases where training successfully completed without the KL penalty, performance surpassed that of vanilla GRPO (Table  [1](https://arxiv.org/html/2505.21908v2#S5.T1 "Table 1 ‣ 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")). Additionally, a cosine KL decay schedule appeared beneficial. While it yielded no significant gains in small-scale runs, it improved the training curve toward the end, suggesting that a lower KL penalty in later stages may help prevent over-regularization to the reference policy (Figure  [8](https://arxiv.org/html/2505.21908v2#S5.F8 "Figure 8 ‣ KL Divergence ‣ 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") B). Indeed, KL decay proved beneficial when scaling training on the full dataset, as shown in Table  [2](https://arxiv.org/html/2505.21908v2#A3.T2 "Table 2 ‣ C.3 Additional Results from Scaling to the Full Dataset ‣ Appendix C Additional Results ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding").

##### GRPO Variants

![Refer to caption](https://arxiv.org/html/x9.png)

Figure 9: GRPO Variants. (A) Dr. GRPO loss underperforms other GRPO variants from training curve. (B) All GRPO variants exhibit similar completion length contraction.

Among three GRPO variants, the DAPO loss achieved the highest performance, while the Dr. GRPO loss performed the lowest (Table [1](https://arxiv.org/html/2505.21908v2#S5.T1 "Table 1 ‣ 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")). This finding aligns with recent work reporting that Dr. GRPO does not outperform vanilla GRPO  [^6]. Across all settings, we observed completion length contraction: as accuracy improved, output lengths sharply decreased before stabilizing (Figure  [9](https://arxiv.org/html/2505.21908v2#S5.F9 "Figure 9 ‣ GRPO Variants ‣ 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") B). This contrasts with trends observed in mathematical tasks, where longer completions are often associated with better performance.

##### Reward Shaping

The strict accuracy reward, despite providing the sparsest reward signals, outperformed both dense and balanced reward variants (Table [1](https://arxiv.org/html/2505.21908v2#S5.T1 "Table 1 ‣ 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")). Notably, we observed no improvement in pincipal diagnosis or CC/MCC accuracy under the denser reward schemes. We hypothesize that denser rewards may lead the policy to converge prematurely to local optima, trading off global performance for easier-to-optimize intermediate signals.

##### Adaptive Learning

We observed benefits from removing easy and hard cases during training (Table [1](https://arxiv.org/html/2505.21908v2#S5.T1 "Table 1 ‣ 5.3 Ablation Studies on GRPO Enhancements and Adapative Learning ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding")). Similarly, recent studies in the math domain suggest that maintaining medium-level difficulty cases may be most effective for RL training  [^36]. Staged learning with SFT resulted in only modest performance gains despite additional compute.

#### 5.4 Prerequisites for Effective GRPO Training

We found that vanilla Qwen2.5 models (base and instruct) without SFT failed to generate correct DRG codes using GRPO alone, despite rapidly adopting the target reasoning format (Figure [10](https://arxiv.org/html/2505.21908v2#S5.F10 "Figure 10 ‣ 5.4 Prerequisites for Effective GRPO Training ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") A). Post-SFT, all models showed improved RL performance that generally scaled with model size, though gains from 7B to 14B were modest (Figure  [10](https://arxiv.org/html/2505.21908v2#S5.F10 "Figure 10 ‣ 5.4 Prerequisites for Effective GRPO Training ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") B). Higher SFT learning rates (up to $4\times 10^{-5}$ ) and extended training epochs both improved GRPO performance, though gains from additional epochs diminished at higher learning rates (Figure [10](https://arxiv.org/html/2505.21908v2#S5.F10 "Figure 10 ‣ 5.4 Prerequisites for Effective GRPO Training ‣ 5 Experiments ‣ Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding") C). These results align with recent findings  [^29] emphasizing the importance of aggressive SFT for reasoning-intensive tasks.

![Refer to caption](https://arxiv.org/html/x10.png)

Figure 10: Prerequisites for GRPO Training. (A) Vanilla models without SFT fail to explore effectively, rarely generating correct DRG codes to receive positive reward signals. (B) GRPO performance increases with model size post-SFT. (C) Higher SFT learning rates and extended training epochs boost GRPO performance.

### 6 Conclusion

In this work, we used DRG coding as an empirical study to explore RL for OOD reasoning in LLMs. Our approach, applying GRPO with verifiable rewards, achieved a new SOTA performance while offering a key advantage over prior methods: the generation of physician-validated explanations through CoT reasoning. Critically, our findings reveal that RL performance on this OOD task is fundamentally constrained by the base model’s capacity prior to RL. We observed a logarithmic scaling relationship between the number of SFT examples and subsequent RL performance.

Following the successes of reasoning models like DeepSeek-R1, a prevailing narrative has been to “scale RL,” leaving a critical question unanswered: what, precisely, should be scaled? Our work addresses this for complex, OOD tasks where knowledge infusion emerges as a critical component. We find that scaling SFT can be more effective and computationally efficient than scaling RL alone. Moreover, despite extensive experimentation with RL algorithmic enhancements and adaptive learning strategies, these refinements yield only modest gains compared to simply initializing RL from stronger SFT baselines—highlighting a “bitter lesson” in applying RL to tasks that fall outside the pretraining distribution of LLMs.

### 7 Acknowledgments

This research was supported by NSF awards SCH-2205289. The funder played no role in the study design, data collection, analysis, and interpretation of data, or the writing of this manuscript. This research was supported (in part) by the Mayo Clinic Clinical Practice Innovation Program. This work was also supported (in part) by the Mayo Clinic Robert D. and Patricia E. Kern Center for the Science of Health Care Delivery.

### References

[^1]: MIMIC-IV on physionet.[https://physionet.org/content/mimiciv/](https://physionet.org/content/mimiciv/).

[^2]: Responsible use of mimic data with online services like gpt.[https://physionet.org/news/post/gpt-responsible-use](https://physionet.org/news/post/gpt-responsible-use).

[^3]: S. Bae, J. Hong, M. Y. Lee, H. Kim, J. Nam, and D. Kwak.Online difficulty filtering for reasoning oriented reinforcement learning.arXiv preprint arXiv:2504.03380, 2025.

[^4]: J. Chen, Z. Cai, K. Ji, X. Wang, W. Liu, R. Wang, J. Hou, and B. Wang.Huatuogpt-o1, towards medical complex reasoning with llms.arXiv preprint arXiv:2412.18925, 2024.

[^5]: Y. Chen, J. Benton, A. Radhakrishnan, J. Uesato, C. Denison, J. Schulman, A. Somani, P. Hase, M. Wagner, F. Roger, et al.Reasoning models don’t always say what they think.arXiv preprint arXiv:2505.05410, 2025.

[^6]: X. Chu, H. Huang, X. Zhang, F. Wei, and Y. Wang.Gpg: A simple and strong reinforcement learning baseline for model reasoning.arXiv preprint arXiv:2504.02546, 2025.

[^7]: CMS.Icd-10-cm/pcs ms-drg v34. 0 definitions manual.[https://www.cms.gov/icd10m/version34-fullcode-cms/fullcode\_cms/P0001.html](https://www.cms.gov/icd10m/version34-fullcode-cms/fullcode_cms/P0001.html), 2016.

[^8]: H. Dong, M. Falis, W. Whiteley, B. Alex, J. Matterson, S. Ji, J. Chen, and H. Wu.Automated clinical coding: what, why, and where we are?NPJ digital medicine, 5(1):159, 2022.

[^9]: H. Face.Open r1: A fully open reproduction of deepseek-r1.[https://github.com/huggingface/open-r1](https://github.com/huggingface/open-r1), 2025.

[^10]: Y. Feng.Can large language models replace coding specialists? evaluating gpt performance in medical coding tasks.[https://www.researchsquare.com/article/rs-5750190/v1](https://www.researchsquare.com/article/rs-5750190/v1), 2025.

[^11]: K. Gandhi, A. Chakravarthy, A. Singh, N. Lile, and N. D. Goodman.Cognitive behaviors that enable self-improving reasoners, or, four habits of highly effective stars.arXiv preprint arXiv:2503.01307, 2025.

[^12]: D. Guo, D. Yang, H. Zhang, J. Song, R. Zhang, R. Xu, Q. Zhu, S. Ma, P. Wang, X. Bi, et al.Deepseek-r1: Incentivizing reasoning capability in llms via reinforcement learning.arXiv preprint arXiv:2501.12948, 2025.

[^13]: D. Hajialigol, D. Kaknes, T. Barbour, D. Yao, C. North, J. Sun, D. Liem, and X. Wang.Drgcoder: Explainable clinical coding for the early prediction of diagnostic-related groups.In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing: System Demonstrations, pages 373–380, 2023.

[^14]: J. Hu, Y. Zhang, Q. Han, D. Jiang, X. Zhang, and H.-Y. Shum.Open-reasoner-zero: An open source approach to scaling up reinforcement learning on the base model.arXiv preprint arXiv:2503.24290, 2025.

[^15]: A. Jaech, A. Kalai, A. Lerer, A. Richardson, A. El-Kishky, A. Low, A. Helyar, A. Madry, A. Beutel, A. Carney, et al.Openai o1 system card.arXiv preprint arXiv:2412.16720, 2024.

[^16]: Y. Ji, S. Zhao, X. Tian, H. Wang, S. Chen, Y. Peng, H. Zhao, and X. Li.How difficulty-aware staged reinforcement learning enhances llms’ reasoning capabilities: A preliminary experimental study.arXiv preprint arXiv:2504.00829, 2025.

[^17]: A. E. Johnson, L. Bulgarelli, L. Shen, A. Gayles, A. Shammout, S. Horng, T. J. Pollard, S. Hao, B. Moody, B. Gow, et al.Mimic-iv, a freely accessible electronic health record dataset.Scientific data, 10(1):1, 2023.

[^18]: W. Kwon, Z. Li, S. Zhuang, Y. Sheng, L. Zheng, C. H. Yu, J. Gonzalez, H. Zhang, and I. Stoica.Efficient memory management for large language model serving with pagedattention.In Proceedings of the 29th Symposium on Operating Systems Principles, pages 611–626, 2023.

[^19]: Y. Lai, J. Zhong, M. Li, S. Zhao, and X. Yang.Med-r1: Reinforcement learning for generalizable medical reasoning in vision-language models.arXiv preprint arXiv:2503.13939, 2025.

[^20]: W. Lan, W. Wang, C. Ji, G. Yang, Y. Zhang, X. Liu, S. Wu, and G. Wang.Clinicalgpt-r1: Pushing reasoning capability of generalist disease diagnosis with large language model.arXiv preprint arXiv:2504.09421, 2025.

[^21]: R. Li, X. Wang, and H. Yu.Exploring llm multi-agents for icd coding.arXiv preprint arXiv:2406.15363, 2024.

[^22]: Z. Lin, M. Lin, Y. Xie, and R. Ji.Cppo: Accelerating the training of group relative policy optimization-based reasoning models.arXiv preprint arXiv:2503.22342, 2025.

[^23]: J. Liu, D. Capurro, A. Nguyen, and K. Verspoor.Early prediction of diagnostic-related groups and estimation of hospital cost by processing clinical notes.NPJ digital medicine, 4(1):103, 2021.

[^24]: Z. Liu, C. Chen, W. Li, P. Qi, T. Pang, C. Du, W. S. Lee, and M. Lin.Understanding r1-zero-like training: A critical perspective.arXiv preprint arXiv:2503.20783, 2025.

[^25]: I. Loshchilov and F. Hutter.Decoupled weight decay regularization.arXiv preprint arXiv:1711.05101, 2017.

[^26]: L. Ma, H. Liang, M. Qiang, L. Tang, X. Ma, Z. H. Wong, J. Niu, C. Shen, R. He, B. Cui, et al.Learning what reinforcement learning can’t: Interleaved online fine-tuning for hardest questions.arXiv preprint arXiv:2506.07527, 2025.

[^27]: W. Ma, J. He, C. Snell, T. Griggs, S. Min, and M. Zaharia.Reasoning models can be effective without thinking.arXiv preprint arXiv:2504.09858, 2025.

[^28]: T. Mu, A. Helyar, J. Heidecke, J. Achiam, A. Vallone, I. Kivlichan, M. Lin, A. Beutel, J. Schulman, and L. Weng.Rule based rewards for language model safety.Advances in Neural Information Processing Systems, 37:108877–108901, 2024.

[^29]: G. Penedo, L. Tunstall, A. Lozhkov, H. Kydlicek, E. Beeching, L. B. Allal, Q. Gallouédec, L. von Werra, A. P. Lajarín, and N. Habib.Open r1 update 3: Steady progress and a new technical report, 2024.Hugging Face Blog.

[^30]: K. Quinn.After the revolution: Drgs at age 30.Annals of internal medicine, 160(6):426–429, 2014.

[^31]: J. Rasley, S. Rajbhandari, O. Ruwase, and Y. He.Deepspeed: System optimizations enable training deep learning models with over 100 billion parameters.In Proceedings of the 26th ACM SIGKDD international conference on knowledge discovery & data mining, pages 3505–3506, 2020.

[^32]: J. Schulman, F. Wolski, P. Dhariwal, A. Radford, and O. Klimov.Proximal policy optimization algorithms.arXiv preprint arXiv:1707.06347, 2017.

[^33]: Z. Shao, P. Wang, Q. Zhu, R. Xu, J. Song, X. Bi, H. Zhang, M. Zhang, Y. Li, Y. Wu, et al.Deepseekmath: Pushing the limits of mathematical reasoning in open language models.arXiv preprint arXiv:2402.03300, 2024.

[^34]: A. Soroush, B. S. Glicksberg, E. Zimlichman, Y. Barash, R. Freeman, A. W. Charney, G. N. Nadkarni, and E. Klang.Large language models are poor medical coders—benchmarking of medical code querying.NEJM AI, 1(5):AIdbp2300040, 2024.

[^35]: S. Sun, A. Schubert, G. M. Goldgof, Z. Sun, T. Hartvigsen, A. J. Butte, and A. Alaa.Dr-llava: Visual instruction tuning with symbolic clinical grounding.arXiv preprint arXiv:2405.19567, 2024.

[^36]: K. Team, A. Du, B. Gao, B. Xing, C. Jiang, C. Chen, C. Li, C. Xiao, C. Du, C. Liao, et al.Kimi k1. 5: Scaling reinforcement learning with llms.arXiv preprint arXiv:2501.12599, 2025.

[^37]: L. von Werra, Y. Belkada, L. Tunstall, E. Beeching, T. Thrush, N. Lambert, S. Huang, K. Rasul, and Q. Gallouédec.Trl: Transformer reinforcement learning.[https://github.com/huggingface/trl](https://github.com/huggingface/trl), 2020.

[^38]: H. Wang, C. Gao, C. Dantona, B. Hull, and J. Sun.Drg-llama: tuning llama model to predict diagnosis-related group for hospitalized patients.npj Digital Medicine, 7(1):16, 2024.

[^39]: J. Wei, X. Wang, D. Schuurmans, M. Bosma, F. Xia, E. Chi, Q. V. Le, D. Zhou, et al.Chain-of-thought prompting elicits reasoning in large language models.Advances in neural information processing systems, 35:24824–24837, 2022.

[^40]: T. Xie, Z. Gao, Q. Ren, H. Luo, Y. Hong, B. Dai, J. Zhou, K. Qiu, Z. Wu, and C. Luo.Logic-rl: Unleashing llm reasoning with rule-based reinforcement learning.arXiv preprint arXiv:2502.14768, 2025.

[^41]: W. Xiong, J. Yao, Y. Xu, B. Pang, L. Wang, D. Sahoo, J. Li, N. Jiang, T. Zhang, C. Xiong, et al.A minimalist approach to llm reasoning: from rejection sampling to reinforce.arXiv preprint arXiv:2504.11343, 2025.

[^42]: J. Yan, Y. Li, Z. Hu, Z. Wang, G. Cui, X. Qu, Y. Cheng, and Y. Zhang.Learning to reason under off-policy guidance.arXiv preprint arXiv:2504.14945, 2025.

[^43]: A. Yang, B. Yang, B. Zhang, B. Hui, B. Zheng, B. Yu, C. Li, D. Liu, F. Huang, H. Wei, et al.Qwen2. 5 technical report.arXiv preprint arXiv:2412.15115, 2024.

[^44]: Z. Yang, S. S. Batra, J. Stremmel, and E. Halperin.Surpassing gpt-4 medical coding with a two-stage approach.arXiv preprint arXiv:2311.13735, 2023.

[^45]: Q. Yu, Z. Zhang, R. Zhu, Y. Yuan, X. Zuo, Y. Yue, T. Fan, G. Liu, L. Liu, X. Liu, et al.Dapo: An open-source llm reinforcement learning system at scale.arXiv preprint arXiv:2503.14476, 2025.

[^46]: Y. Yue, Z. Chen, R. Lu, A. Zhao, Z. Wang, S. Song, and G. Huang.Does reinforcement learning really incentivize reasoning capacity in llms beyond the base model?arXiv preprint arXiv:2504.13837, 2025.

[^47]: W. Zeng, Y. Huang, Q. Liu, W. Liu, K. He, Z. Ma, and J. He.Simplerl-zoo: Investigating and taming zero reinforcement learning for open base models in the wild.arXiv preprint arXiv:2503.18892, 2025.

[^48]: X. Zhang, J. Wang, Z. Cheng, W. Zhuang, Z. Lin, M. Zhang, S. Wang, Y. Cui, C. Wang, J. Peng, et al.Srpo: A cross-domain implementation of large-scale reinforcement learning on llm.arXiv preprint arXiv:2504.14286, 2025.