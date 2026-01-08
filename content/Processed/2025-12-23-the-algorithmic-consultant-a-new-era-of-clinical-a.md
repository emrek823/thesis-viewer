---
url: https://www.nature.com/articles/s41746-025-01960-0
title: "The algorithmic consultant: a new era of clinical AI calls for a new workforce of physician-algorithm specialists - npj Digital Medicine"
clipped: 2025-12-23 11:16
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# The algorithmic consultant: a new era of clinical AI calls for a new workforce of physician-algorithm specialists - npj Digital Medicine

> Source: [https://www.nature.com/articles/s41746-025-01960-0](https://www.nature.com/articles/s41746-025-01960-0)

The algorithmic consultant: a new era of clinical AI calls for a new workforce of physician-algorithm specialists

[Download PDF](/articles/s41746-025-01960-0.pdf)

[Download PDF](/articles/s41746-025-01960-0.pdf)

### Subjects

* [Health occupations](/subjects/health-occupations)
* [Health services](/subjects/health-services)

## Abstract

As complex AI systems become more common in clinical decision-making, a new type of physician-data science specialist is needed to bridge the gap between these AI tools and practicing clinicians. Analogous to how clinical pharmacists currently guide appropriate medication use and govern a hospital’s formulary, this specialist would offer point-of-care guidance on AI tool selection and interpretation, and manage a hospital’s AI systems. This role aims to enable safe and effective clinical AI by collaborating with patient-facing providers to ensure appropriate model application in the real world.

### Similar content being viewed by others

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41746-022-00611-y/MediaObjects/41746_2022_611_Fig1_HTML.png)

### [Clinical artificial intelligence quality improvement: towards continual monitoring and updating of AI algorithms in healthcare](https://www.nature.com/articles/s41746-022-00611-y?fromPaywallRec=false)

Article
Open access
31 May 2022

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41746-023-00852-5/MediaObjects/41746_2023_852_Fig1_HTML.png)

### [An integrative review on the acceptance of artificial intelligence among healthcare professionals in hospitals](https://www.nature.com/articles/s41746-023-00852-5?fromPaywallRec=false)

Article
Open access
10 June 2023

![](https://media.springernature.com/w215h120/springer-static/image/art%3Aplaceholder%2Fimages/placeholder-figure-nature.png)

### [Artificial intelligence should genuinely support clinical reasoning and decision making to bridge the translational gap](https://www.nature.com/articles/s41746-025-01725-9?fromPaywallRec=false)

Article
Open access
10 June 2025

## Introduction

The influx of artificial intelligence (AI) systems into certain areas of healthcare delivery operations and administration has prompted substantial debate regarding i) whether such algorithms can be useful in clinical decision-making as well, and if so, ii) how these algorithms should interface with physicians. While the window of discourse has firmly centered on the idea that algorithms should augment physicians’ clinical decision-making, the primary assumption that physicians will interact directly with these AI systems remains unchallenged. However, as the number of complex models that exist at a physician’s disposal for any clinical scenario grows - some that perform one specific clinical prediction task, others that are more flexible like emerging generative AI tools—we believe it is impractical for all physicians to be expected to reliably select, use, interpret, and clinically translate the output of these highly specialized tools. The field of radiology evolved to help clinically translate the output of complex imaging machines. The role of a clinical pharmacist in overseeing safe and effective drug use is critical for every hospital. Likewise, having a specialist guide the physician on appropriate use and clinical translation of AI systems will be critical in realizing their full potential in clinical decision-making and patient care.

## Direct physician-AI interaction yields underwhelming results

Ample evidence suggests that directly giving physicians access to algorithmic tools and AI decision support systems does not reliably improve their decision-making. Brennan et al.[1](/articles/s41746-025-01960-0#ref-CR1 "Brennan, M. et al. Comparing clinical judgment with the MySurgeryRisk algorithm for preoperative risk assessment: a pilot usability study. Surgery 165, 1035–1045 (2019).") describe a study in which an algorithm consistently outperforms surgeons in predicting patients’ post-surgical outcomes. Yet when surgeons were given the algorithm’s output and asked to update their prediction, their predictive performance did not improve. This phenomenon holds true for generative AI tools as well; a recent study by Chen and Rodman et al.[2](/articles/s41746-025-01960-0#ref-CR2 "Goh, E. et al. Large language model influence on diagnostic reasoning: a randomized clinical trial. JAMA Netw. Open 7, e2440969 (2024).") found that, while the independent diagnostic performance of a large language model (LLM) far outperformed human physician diagnostic capabilities, allowing the human to use the LLM as an aid did not significantly improve their performance.

The fundamental problem that arises with deployment of direct physician-facing AI tools is that it forces individuals with almost no training or familiarity with these tools to somehow incorporate them into their decision-making with little guidance. Imagine if general practitioners were expected to fully understand and clinically translate the unprocessed output of MRI machines without the aid of radiologists? While most physicians see great potential in the use of AI to improve care, they do not feel adequately informed or equipped to start using it directly[3](/articles/s41746-025-01960-0#ref-CR3 "[No title]. 
                  https://www.ama-assn.org/system/files/physician-ai-sentiment-report.pdf
                  
                .").

## Current efforts are necessary but insufficient

To prepare future physicians for integration of algorithms in clinical care, some have proposed the addition of probabilistic reasoning to medical school education[4](/articles/s41746-025-01960-0#ref-CR4 "Goodman, K. E., Rodman, A. M. & Morgan, D. J. Preparing physicians for the clinical algorithm era. N. Engl. J. Med. 
                  https://doi.org/10.1056/NEJMp2304839
                  
                 (2023)."),[5](/articles/s41746-025-01960-0#ref-CR5 "Morgan, D. J. et al. Accuracy of practitioner estimates of probability of diagnosis before and after testing. JAMA Intern. Med. 181, 747–755 (2021)."). Given the growing complexity of AI systems, this is necessary but not sufficient to ensure algorithms are used safely and effectively. Algorithmic tools are just as complex as those of a radiologist or surgeon, and can similarly be misused or misinterpreted[6](/articles/s41746-025-01960-0#ref-CR6 "Khera, R., Simon, M. A. & Ross, J. S. Automation bias and assistive AI: risk of harm from AI-driven clinical decision support. JAMA 330, 2255–2257 (2023).")—e.g., applied to the wrong patient population, to draw the wrong clinical conclusion, or to justify the wrong intervention. It is implausible for every physician to understand the indications and limitations of each algorithm. As an example, infectious disease specialists are needed to provide guidance on antibiotic selection and use, despite medical school education that includes teaching on antibiotics. Similarly, the decision of how to interpret and integrate imaging results into a patient’s care is facilitated by a radiologist, not by the patient’s physician alone.

Model explainability efforts (such as “Model Facts” labels[7](/articles/s41746-025-01960-0#ref-CR7 "Sendak, M. P., Gao, M., Brajer, N. & Balu, S. Presenting machine learning model information to clinical end users with model facts labels. npj Digit. Med. 3, 1–4 (2020).") or heat maps overlaid on imaging studies) have also been proposed as a way to help physicians use algorithms directly in clinical practice by sharing the tool’s indications, applicable patient population, performance metrics, and justification for its prediction, thereby ostensibly giving the physician enough information to decide if the model is appropriate or not and how to interpret its output. While this is an intuitively appealing concept, current explainability resources do not consistently appear to improve decision-making. Jabbour et al.[8](/articles/s41746-025-01960-0#ref-CR8 "Jabbour, S. et al. Measuring the impact of AI in the diagnosis of hospitalized patients: a randomized clinical vignette survey study. JAMA 330, 2275–2284 (2023).") found that providing heatmaps on chest x-rays that help to explain how the algorithm arrived at its prediction did not mitigate the negative effects of incorrect algorithmic predictions on the radiologists reading those chest x-rays.

Possible explanations for the limited efficacy of explainability efforts are numerous. First, physicians are not trained to fully understand, be convinced by, or know how to act on these efforts. These efforts can often be interpreted in many different ways instead of providing clarity[9](/articles/s41746-025-01960-0#ref-CR9 "Ghassemi, M., Oakden-Rayner, L. & Beam, A. L. The false hope of current approaches to explainable artificial intelligence in health care. Lancet Digit Health 3, e745–e750 (2021)."). They also place an unrealistic burden on the developer creating these explainability resources: it is impossible to anticipate every scenario where a physician might consult a model. Finally, these resources are static and therefore cannot be adapted to the nuances of the clinical scenario. A specialist with both algorithmic fluency and clinical understanding is necessary to fill this gap.

## Algorithmic consultants as stewards of safe and effective use of AI in clinical practice

While these current efforts are important to facilitate physician-AI collaboration, their limited efficacy leaves large gaps for improvement. Furthermore, precedents from other fields like radiology and clinical pharmacy show us that specialists are required to unlock the clinical value of new scientific advances and technologies and ensure they do not cause harm.

We envision an algorithmic consultant as someone who plays a role similar to clinical pharmacists in hospitals today. A pharmacist’s clinical responsibilities in a hospital can be categorized into two buckets: providing guidance to providers at the point-of-care with individual drug-related decisions, and governing a hospital’s ecosystem of drugs. Similarly, an algorithmic consultant’s two roles would be traditional point-of-care consultations with physicians seeking input from an AI system on a specific clinical scenario, and in overseeing and managing the hospital’s ecosystem of algorithms.

### Point-of-care guidance

At the point-of-care, clinical pharmacists provide guidance on appropriate medication selection and drug dosing. They combine their unique knowledge of pharmacokinetics and pharmacodynamics, comprehension of relevant literature, and understanding of the clinical scenario to answer these questions. Likewise, at the point of care, an algorithmic consultant would provide guidance on model selection and model output interpretation, and would combine their knowledge of data science with an understanding of the clinical scenario to provide guidance. Importantly, this specialist would not need to have some special understanding of the numerous weights and parameters of inscrutably large models in order to do their job effectively. Instead, they would focus on elements such as a model’s training cohort and how well it aligns with the patient, the strengths and weaknesses of the model reported in technical articles and uncovered during local validation, and the types of clinical questions the model was designed to shed light on. Figure [1A](/articles/s41746-025-01960-0#Fig1) offers an example of their role at the point of care.

**Fig. 1: The dual roles of algorithmic consultants in a provider-facing role and a system-level role, and how it mirrors the dual roles of a clinical pharmacist today.**

[![figure 1](//media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41746-025-01960-0/MediaObjects/41746_2025_1960_Fig1_HTML.png)](/articles/s41746-025-01960-0/figures/1)

Figure 1[A](/articles/s41746-025-01960-0#Fig1): The point-of-care workflow of an algorithmic consultant, which is modeled after that of an inpatient clinical pharmacist. Figure 1[B](/articles/s41746-025-01960-0#Fig1): A clinical pharmacist’s organizational governance responsibilities (e.g., managing an institution’s formulary), and the parallel role of an algorithmic consultant in governing an institution’s AI models through their lifecycle. (Author’s own work.).

[Full size image](/articles/s41746-025-01960-0/figures/1)

As mentioned earlier, direct physician-AI interaction sometimes does not improve decision-making. Point-of-care guidance by an algorithmic consultant addresses many of the known contributors to this problem by selecting the best tool, helping physicians accurately update their clinical reasoning[5](/articles/s41746-025-01960-0#ref-CR5 "Morgan, D. J. et al. Accuracy of practitioner estimates of probability of diagnosis before and after testing. JAMA Intern. Med. 181, 747–755 (2021)."),[10](/articles/s41746-025-01960-0#ref-CR10 "Arkes, H. R., Aberegg, S. K. & Arpin, K. A. Analysis of physicians’ probability estimates of a medical outcome based on a sequence of events. JAMA Netw. Open 5, e2218804 (2022)."), adjusting for the model’s limitations and biases[11](/articles/s41746-025-01960-0#ref-CR11 "Zwaan, L. Cognitive bias in large language models: implications for research and practice. NEJM AI 
                  https://doi.org/10.1056/AIe2400961
                  
                 (2024)."), and possibly even recognizing the physician’s cognitive biases[12](/articles/s41746-025-01960-0#ref-CR12 "Gaube, S. et al. Do as AI say: susceptibility in deployment of clinical decision-aids. npj Digital Med. 4, 1–8 (2021).").

### Institutional algorithmic governance

Algorithmic consultants would also govern the models available at an institution. A hospital’s ecosystem of models will likely soon be as complex and numerous as its ecosystem of drugs. Similar to how pharmacists oversee and maintain a hospital’s formulary, algorithmic consultants would maintain the organization’s ecosystem of models. This includes roles in model deployment and governance, such as selection and vetting of third-party models, implementing guardrails around the types of patients, scenarios, and physicians who can use new models, ensuring algorithmic fairness, and re-training or phasing out old models. At an organizational level, they would offer insight into which models from academia or industry would be most useful for consideration, validate the performance of candidate models, and fine-tune models to a hospital’s local patient population. Figure [1B](/articles/s41746-025-01960-0#Fig1) offers an example of their role in governance. Many institutions have proposed AI governance frameworks in recent years[13](#ref-CR13 "Responsible AI Guidance. 
                  https://www.chai.org/workgroup/responsible-ai/responsible-ai-guide-raig-and-raig-executive-summary
                  
                ."),[14](#ref-CR14 "Valer

[... truncated ...]