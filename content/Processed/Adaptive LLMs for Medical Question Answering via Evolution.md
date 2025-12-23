---
title: "Adaptive LLMs for Medical Question Answering via Evolution"
source: "https://latenthealth.com/adaptive-llms-for-medical-question-answering-via-evolution"
published:
created: 2025-12-15
description: "As Large Language Models (LLMs) rapidly gain capabilities, a critical challenge remains: how do we adapt them for deeply nuanced, expert-guided domains like healthcare? Nowhere is this question more urgent—and more revealing of current AI limits—than in automating prior authorization (PA) for medications. In this setting, "success" depends not just on model accuracy, but on perfectly aligning with expert judgment, payer nuances, and an endless array of patient-specific edge cases."
tags:
  - "clippings"
processed: 2025-12-16
themes:
  - evaluators
  - healthcare-ai
  - post-training
---
As the capabilities of Large Language Models (LLMs) continue to expand, a critical challenge remains: how do we adapt to deeply nuanced, expert-guided domains like healthcare while using the latest model updates releases? At Latent, we are committed to building the best in class clinical intelligence, starting with automating medical prior authorizations (\*PAs). In this setting, “success” depends not just on model accuracy, but on perfectly aligning with expert judgment, payer nuances, and an endless array of patient-specific edge cases.  

\*Prior Authorizations are part of the mandatory process of getting certain medications approved in the United States. The process relies heavily on expert clinical question-answering.

### The Limits of Fine-Tuning and Manual Rules

There is embedded nuance in the way that Pharmacists answer PA questions. For instance, when a patient eligible for a PCSK9 inhibitor has both ASCVD and hyperlipidemia on record, the "best" answer depends not on which diagnosis is more recent—but on which will satisfy shifting insurance guidelines. Add in variables like patient age and previous conditions, and the pathway to selecting an answer ends up looking like a complex decision tree. We have these phenomenally intelligent models at our fingertips but effectively encoding all permutations of rules for hundreds of drugs by hand is clearly intractable. So how can we ever hope to achieve superhuman accuracy?

Supervised fine-tuning—even at scale—can’t keep up. Human preferences, payer policies, and clinical guidelines shift constantly; labeled data is never enough. Reinforcement Learning is powerful but there is inevitable model drift as frontier model capabilities increase.

The prevailing sentiment is that the latest models are fully capable of producing the right answer in the right format. The real bottleneck isn’t model intelligence, but our ability to *elicit* that intelligence; it’s not a model shortcoming, it’s a matter of extraction \[the problem isn’t the LLM, it’s how we ask\]. Recent studies back this up: large-scale sampling often surpasses RLHF for performance (Yue et al., 2025), and systematic experimentation with prompt variations reveals sharp, verifiable shifts in model learning curves (Liu et al., 2025).

*What if we could rely on the ever-improving sea of foundation models, whilst also capturing and distilling the rapidly shifting clinical compendia?*

### Beyond Black-Box Prompt Tuning

Recent advances in prompt tuning frameworks—such as DSPY—have shown that iterative, automated prompt refinement can steer LLMs toward better behaviors. However, these methods typically optimize *only* for the black-box reasoning space inside the LLM, learning which discrete tokens guide the model towards optimizing your pre-defined metric. In our case, that’s not enough. For clinical QA over Electronic Health Records, *how* the model retrieves and filters data (its action space) is just as critical as the prompt that choreographs this reasoning.

```python
base_question = "Has the patient experienced any adverse reactions to DMARDs?"

# Good search with BM25 system, bad for semantic search system
search_ehr("humira enbrel dupixent adverse reaction allergy rash dizziness ...")

# Bad search with BM25, good with semantic search system
search_ehr("any adverse reactions or contraindications to dmards?")
```

*We need to optimize the interaction with the tools we expose. For example, if our search system is just BM25, our actor should not make semantic searches and should instead prefer spamming keywords in its query.*

Tools like DSPY fail to consider this action space: they treat upstream search pipelines as static, assuming that getting the LLM to “think harder” is the entire game. In practice, optimal answers require learning not just the right way to ask the LLM, but also the right way to interact with the retrieval layer. Only by *jointly evolving reasoning and search* can we capture the full complexity of decision-making in medical PA.

### Evolution as a Solution: Evolving Semantics, Not Just Weights

To transcend these limits, we turn to *evolutionary algorithms*, specifically the approach outlined in “Evolution Through Large Models” (Lehman et al., 2023). Our key insight is evolving not neural weights, but high-level, interpretable “semantic genes”: composable strategies consisting of (a) *actions* (search procedures), (b) *prompts* (reasoning instructions), and (c) *advice* (domain-specific few-shot examples).

Each *individual* in our evolutionary system is a candidate solution encoding:

```python
class Individual(BaseModel):
    actions: list[Action]          # EHR search variants (parameters, filters)
    prompt: str                    # Natural language system prompt for LLM
    advice_snippets: list[str]     # Few-shot examples, counterexamples, clarifications
```

Rather than blindly adjusting millions of weights, our evolutionary process intelligently perturbs these building blocks—analogous to editing genes, not neurons.

#### How Evolution Works in Practice

1. **Population Diversity:** We implement MAP-Elites (Mouret & Clune, 2015) for our population management, using number of unique actions and advice snippets as our axes—ensuring that we illuminate, not collapse, the search space.
2. **LLM-Powered Mutation:** Using the LLM as a meta-mutator, we intelligently mutate individuals: adding/removing actions, rewording prompts, generating new advice, and combining strategies (“crossover”) from top performers.
3. **Evaluation:** For each mutated individual, we:
	- Execute its EHR search actions to gather input
	- Build and submit its unique prompt + advice to the answering LLM
	- Score outputs for correctness vs. expert labels
4. **Selection:** The best candidates, by both diversity and score, persist; weaker ones are discarded

#### Training & Evaluation Procedure

Using these techniques, we begin with a seed individual and simulate evolutionary dynamics over time. The “individuals” explore novel search spaces while learning the underlying preferences of our retrieval system. Notably, these answerers develop an understanding of pharmacological preferences and clinical biases (e.g. selecting ASCVD over hyperlipidemia in our earlier example).

To robustly quantify gains while avoiding overfitting—a common weakness in prompt-tuning efforts—we use a stratified *train/validation/test* split:

- **Train:** ~200 carefully sampled questions (specific drug class, question type, distribution of edge cases)
- **Validation/Test:** 300/500 similarly diverse questions from the same question space

Fitness is measured over the training set, with individuals having no access to validation or test samples. Overall performance is reported on the validation set, ensuring true generalization rather than memorization. At the conclusion of training, you are left with your optimal individuals over your training set; an interpretable set composed of \[prompt, action, advice\] triplets. Deploying these to production is as simple as subbing in this optimal scaffolding.

### Results and Insights

We’re able to consistently outperform prompt engineering (DSPY) and match or beat distillation baselines. Uniquely, all that is required is the selection of the question subset\*\*, and clicking “run”. No GPUs needed; no more dealing with OOMs, or paying training compute providers half your net worth. A few minutes(!) later, we have a highly specialized scaffolding that has jointly discovered the nuances of the clinical pathways and our search tools.

**Advantages**

- **True Joint Optimization:** Unlike DSPY and similar frameworks, our evolutionary setup adapts both data retrieval *and* LLM reasoning, uncovering strategies like “prefer ASCVD over hyperlipidemia for PCSK9 prior auth” without ever providing that insight to our algorithm.
- **Semantic Interpretability:** Each individual—composed of explicit actions, human-auditable prompts, and explainable example cases—is easily comprehensible and transferrable across related tasks.
- **Rapid Adaptation:** As payer guidelines or clinical priorities change, new advice snippets or search tweaks emerge organically—no “prompt surgery” or system retraining required.
- **Compositionality and Domain Alignment:** The best solutions naturally balance lean, high-yield information gathering, targeted clarifications for edge cases, and increasingly domain-infused prompts—often matching and exceeding, expert-crafted policies.
![](https://cdn.prod.website-files.com/68114bc2c53c94882188a30e/6827c205bf38cc007f971063_c83c434a4231d3770755e7934af4f005_demo-ezgif.com-speed%20%281%29.gif)

Figure 1. Learning the preferences of DMARD “prescribed by” questions, each asking some variation of the type of specialist prescribing a medication. The seed individual (t=0) has a singular base action and no explicit advice, achieving just 79% accuracy. Over just 4 generations, this develops into more complex and nuanced genotypes capable of reaching 96% accuracy on our hold out sets.

This evolutionary paradigm has relevance well beyond medicine. Any domain where correct decisions depend on subtle, context-specific preferences and the *joint* optimization of evidence gathering and reasoning—think law, finance, or insurance—can benefit from evolving both what to look at *and* how to think about it.

By departing from black-box-only optimization and embracing compositional, domain-aligned “semantic genes,” we move closer to adaptive AI that can truly keep pace with real-world complexity.

### References

- Lehman, J., Gordon, D., Jain, S., Ndousse, K., Yeh, C., & Stanley, K. O. (2023). *Evolution Through Large Models*. arXiv:2206.08896.
- Mouret, J. B., & Clune, J. (2015). *Illuminating search spaces by mapping elites.* arXiv:1504.04909.
- Liu, Z., Chen, C., Li, W., Qi, P., Pang, T., Du, C., Lee, W. S., & Lin, M. (2025). *Understanding R1-zero-like training: A critical perspective*. arXiv:2503.20783.
- Yue, Y., Chen, Z., Lu, R., Zhao, A., Wang, Z., Song, S., & Huang, G. (2025). *Does reinforcement learning really incentivize reasoning capacity in LLMS beyond the base model?*. arXiv:2504.13837.

#### Footnotes

\*Prior Authorizations are part of the mandatory process of getting a medication approved in the United States. The process relies heavily on expert clinical question-answering.

\*\*Because we don’t currently support depth, we are limited to groupings that can be answered by our predefined max\_n upfront searches. That means that the population-specific question groups must be somewhat cohesive. Think diagnosis questions or inquiries asking who prescribed a medication for a related group of drugs.

**Published: May 14, 2025**