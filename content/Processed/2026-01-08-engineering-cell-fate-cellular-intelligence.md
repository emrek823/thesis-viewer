---
url: https://t.co/azDPDOg6jg
title: "Engineering Cell Fate | Cellular Intelligence"
clipped: 2026-01-08 09:42
source: browser-history
---

# Engineering Cell Fate | Cellular Intelligence

> Source: [https://t.co/azDPDOg6jg](https://t.co/azDPDOg6jg)

[Somite Becomes Cellular Intelligence, as It Builds the First Universal Virtual Cell-Signaling Model ➝](/news/somite-becomes-cellular-intelligence)

Menu

Tables of contents

![](https://cdn.prod.website-files.com/693ad65bf3f42cdb38db4329/69417877a06becf824047862_carrot.svg)

[1. A New Era of Cellular Control](#a-new-era-of-cellular-control)[2. What is a Virtual Cell-Signaling Model?](#what-is-a-virtual-cell-signaling-model)[3. A Unique Approach to Building the "Virtual Cell"](#a-unique-approach)[4. Competitive Landscape](#competitive-landscape)[5. Applications and Impact](#applications-and-impact)[6. Progress and Validation to Date](#progress-and-validation-to-date)[7. Architecture and Training Approach](#architecture-and-training-approach)[8. Roadmap and Milestones](#roadmap-and-milestones)[9. Conclusion](#conclusion)[10. References](#references)

Cellular Intelligence

# Engineering Cell Fate: Towards a Foundation Model for Virtual Cell Signaling

We are building a future where biology is no longer destiny, but design.

January 7, 2026

[Download the paper](https://cdn.prod.website-files.com/693ad65bf3f42cdb38db4329/695e5f7fdf5650b35c825a05_Cellular%20Intelligence%20-%20Engineering%20Cell%20Fate.pdf)

[1. A New Era of Cellular Control](#a-new-era-of-cellular-control)[2. What is a Virtual Cell-Signaling Model?](#what-is-a-virtual-cell-signaling-model)[3. A Unique Approach to Building the "Virtual Cell"](#a-unique-approach)[4. Competitive Landscape](#competitive-landscape)[5. Applications and Impact](#applications-and-impact)[6. Progress and Validation to Date](#progress-and-validation-to-date)[7. Architecture and Training Approach](#architecture-and-training-approach)[8. Roadmap and Milestones](#roadmap-and-milestones)[9. Conclusion](#conclusion)[10. References](#references)

![](https://cdn.prod.website-files.com/693ad65bf3f42cdb38db4329/695e7770b720542d3933c8cb_Background-2.jpg)

## At a Glance

**The Challenge**   
Modern biology struggles to predict and control cellular behavior because cell signaling is complex and context-dependent. Current methods rely on slow, empirical trial and error.

**The Cellular Intelligence Solution**

**‍**Cellular Intelligence is building the first **Universal Virtual Cell-Signaling Model:** a foundation model capable of predicting how any cell in any state changes in response to external signals.

**‍**

**The Competitive Advantage**

* **Unrivaled Data Scale:** Utilizing a proprietary capsule-based platform, Cellular Intelligence generates massive, context-rich datasets—scaling to millions of unique perturbation conditions—to solve the problem of context dependence.
* **Static vs. Dynamic States:** While others profile cells in fixed states, we use human stem cells to decode the combinatorial signaling logic that determines cellular behavior and ultimately cell fate, turning the biological mystery of how cell types are made into a tractable engineering challenge.

**Core Architecture**

Our framework is built on a synergistic feedback loop between massive-scale data generation and predictive modeling. This proprietary capsule data engine covers the astronomical search space of cell signaling, distilling it into the context-rich, high-fidelity datasets required to train transformer models to learn the fundamental "grammar" of cellular signaling. As our data scales, these architectures will evolve from discrete response predictions to high-resolution continuous-time models of biological behavior, culminating in a universal simulation engine that enables the engineering of cell fate.

‍

**Translational Impact**

By transforming biology into a predictive engineering discipline, Cellular Intelligence enables *in silico* control of cellular behavior, with applications ranging from rational protocol design for regenerative medicine to context-specific drug effect prediction and systematic disease modeling. This fundamentally transforms the ability to discover new treatments and save patient lives.

## 1. A New Era of Cellular Control: From Empirical Biology to Predictive Control

A major bottleneck in modern medicine is the inability to predict how different cells respond to signals. We are replacing slow, manual experimentation with a predictive model that handles this complexity, accelerating the path to life-saving therapies.

‍

A fundamental challenge in modern biology is that of precise, engineered cellular control. Cells possess their own language for communicating with each other—cell signaling—which directs core biological processes like development and is frequently dysregulated in disease.

> Cells possess their own language for communicating with each other.

‍

Remarkably, biology achieves this complexity using a surprisingly concise vocabulary: only around **20 fundamental molecular signaling pathways** have been identified to date. It is the combinations and orders in which they are used that underlies how such a small number of pathways can give rise to the staggering diversity of human cell types and states. In principle, because these pathways are readily manipulated by small molecules, they provide a potent mechanism through which we could control cellular decision-making.

‍

However, despite decades of effort, we have not yet deciphered the *grammar* of this language. Today, the effects of a given signal are largely determined through an empirical, trial-and-error process. This is due to two compounding challenges:

1. **Combinatorial Complexity:** The sheer number of signal combinations limits systematic experimental dissection. **‍**
2. **Context Dependence:** The effect of a signal depends heavily on the state of the cell prior to receiving it.

**The Human Cost of Technical Limitations.** The failure to decode the logic of cell signaling is not just a scientific bottleneck, but a systemic barrier to progress and, consequently, a delay in saving lives. The inability to predict cellular behavior stalls progress in regenerative medicine, where scientists painstakingly test countless combinations to guide stem cells into desired tissues, and in pharmacology, where therapies fail because we cannot foresee how diseased cells will react.

‍

Patients waiting for organ transplants, individuals with genetic disorders, and the unfulfilled promise of personalized medicine cannot afford another decade of manual optimization. Our urgency to move beyond trial-and-error experimentation is driven by patient need.

‍

### Cellular Intelligence’s Vision

This white paper outlines Cellular Intelligence's solution to the challenge of predicting and controlling cellular behavior: the construction of the first **Universal Virtual Cell-Signaling Model**, a platform intended to compute how any cell state will change in response to external signals.

‍

By combining the paradigm of developmental biology—nature's own proving ground—with our proprietary capsule platform, we transform cell signaling from an empirical art into an engineering discipline built for therapeutic design. We aim to unlock high-impact applications: from guided cell therapies that replace lost tissues, to context-specific drug response prediction, to new ways of modeling disease as signaling network failures.

‍

‍

## 2. What is a Virtual Cell-Signaling Model?

The virtual cell-signaling model acts as a computational twin, using a cell's initial state to accurately predict how it responds to signals, thereby replacing trial-and-error with precise *in silico* simulation.

‍

In essence, a virtual cell-signaling model is a predictive map from an initial cell state and an external signal to the cell's future state. Formally, it can be seen as a function:

‍

‍

*f(initial cell state, signal) → future cell state*

‍

‍

Crucially, the "cell state" encompasses the cell's molecular profile (e.g., its transcriptome and epigenetic status) and functional identity—*i.e.*, the “context” in which the signal is being applied [Wagner *et al.*, 2016]. Here, “signal” refers to a perturbation, like a small molecule or growth factor, that affects a particular signaling pathway or pathways, at a specific dose. The model's output is a predicted new cell state (including gene expression changes) after the cell has been exposed to the signal.

‍

In short, the model answers the question: "Given this type of cell (stem cell, cancer cell, neuron) and this signal at this dose, what will the cell look like and do next?"

‍

This virtual cell-signaling model thus becomes a computational twin of living cells, allowing us to simulate how cells in new contexts would respond to signals. Our hypothesis is that our platform, based on the differentiation of all human cell types during development, will provide sufficient data for our model to generalize, enabling it to predict cell responses in as yet unseen contexts. This model will effectively solve the cell-signaling problem, enabling scientists and engineers to use *in silico* experiments to guide real-world decisions.

‍

‍

## 3. A Unique Approach to Building the "Virtual Cell"

Most AI models in biology fail because they are trained on limited data—like trying to learn a language by reading just one book. Cellular Intelligence uses stem cells to generate massive, proprietary datasets that cover the entire 'tree of life,' capturing how cells behave in every possible context. We use a 'split-and-pool' technique to run millions of unique experiments in parallel, creating the massive, high-quality training data that is required for a predictive foundation model.

‍

Biology has run into a complexity barrier that is now blocking progress. The field requires a fundamental shift in approach, from mapping static cell states to modeling the dynamic transitions between them.

‍

This is the gap that Cellular Intelligence is built to fill. Our approach is not just incrementally better - it is fundamentally different in how it tackles scale and complexity. Our key insight at Cellular Intelligence is that building a universal machine learning model for cellular signaling requires the interrogation of signaling across a very large number of *contexts.* Virtually all similar efforts towards cell foundation models take the approach of applying as many perturbations as possible (drug screens, genetic screens) to a limited number of cell types, often in the single digits. This limitation is inherent to their data generation methodology, rooted in existing screening paradigms. Thus, other datasets, while perturbation-rich, are *context-poor*, meaning that they have very limited exposure to different cellular contexts. Given that context-dependence is the biggest challenge to predicting the effects of signaling, such approaches cannot adequately train a model that will generalize across contexts.

‍

Our approach takes full advantage of the paradigm of developmental biology, the natural process by which stem cells differentiate into all the different cell types in the human body. Stem cells have an innate ability to adopt a vast number of cellular states as guided by cell signaling, hence providing the ideal platform for generating the rich, pan-context signaling data required to train general models of cell signaling. By leveraging the process of development, we will be able to learn how signaling works across the widest possible range of human cell types, enabling us to direct cells towards particular fates and away from others. Our platform enables us to explore the order, concentration, and combination of perturbations in a way that others cannot match. Our approach has numerous advantages:

* **Exponentially Scalable Data Collection via Capsule Technology:** We recognized early that the biggest blocker to a generalizable signaling model was data. Traditional experimental platforms are context-starved—they might test many perturbations, but only on a handful of cell states, most typically derived from easy-to-use but less physiological cancer cells. Cellular Intelligence overcame this bottleneck with a proprietary capsule-based context generation system. In our platform, pluripotent stem cell colonies are grown in microscale capsules that can be split-and-pooled through multiple treatment steps, each capsule accruing a unique barcode to record its treatment history. This allows us to interrogate an exponentially expanding set of signaling factors combinations and of cell states that in principle can populate the developmental tree with only linearly increasing effort. For example, in a recent experiment we started with 30 combinations of signaling factors and applied them in 3 sequential steps, theoretically covering 303=27,000 unique sequences - and indeed we tested all 27 in a single multiplexed run. Recently, we scaled this to over 1 million sequential-signal combinations across potentially thousands of starting cell contexts. No other effort comes close to this scale of combinatorial perturbations. This massive, context-rich dataset is precisely aligned to the model’s learning objective, and our perturbative approach provides causal information in the non-cancer context that observational cell atlases lack. Cellular Intelligence's capsule system effectively turns data generation into a high-throughput, parallelized endeavor, creating a competitive moat via data complexity that others cannot easily match.
* **Active Learning Loop and Data Augmentation**: Building a predictive model is only half the battle—the other half is using it intelligently to accelerate learning. Cellular Intelligence's platform creates a virtuous cycle: we generate perturbation data, train our model on it, then use that model to identify the most informative next experiments to run. Rather than testing perturbations randomly or exhaustively, the model identifies gaps in its understanding—perhaps a particular signal’s effect on a specific cell subtype remains poorly predicted—and prioritizes those experiments. This refinement is also guided by our deep expertise in developmental biology. This targeted approach means each experimental round maximally refines the model's capabilities, dramatically reducing the data needed to achieve broad predictive power. Over time, this self-refining cycle yields a model that not only predicts cellular responses but also efficiently guides its own improvement.   
    
  Critically, we augment this experimental data with publicly available datasets. Cellular Intelligence has developed novel computational techniques to extract signaling information from existing transcriptomic datasets—including cell atlases, differentiation time courses, and published perturbation studies. While these public datasets weren't originally designed to study signaling in our framework, our methods can retroactively infer signal-response relationships from them, effectively multiplying our training data many times over. No other virtual cell effort systematically leverages public data in this way, giving Cellular 

[... truncated ...]