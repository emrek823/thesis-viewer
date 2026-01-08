---
url: https://www.nature.com/articles/s41746-025-01622-1
title: "An evaluation framework for ambient digital scribing tools in clinical applications - npj Digital Medicine"
clipped: 2025-12-23 13:06
source: slack
slack_channel: mkt-research-headlines
---

# An evaluation framework for ambient digital scribing tools in clinical applications - npj Digital Medicine

> Source: [https://www.nature.com/articles/s41746-025-01622-1](https://www.nature.com/articles/s41746-025-01622-1)

An evaluation framework for ambient digital scribing tools in clinical applications

[Download PDF](/articles/s41746-025-01622-1.pdf)

[Download PDF](/articles/s41746-025-01622-1.pdf)

### Subjects

* [Health care economics](/subjects/health-care-economics)
* [Health services](/subjects/health-services)
* [Public health](/subjects/public-health)

## Abstract

Ambient digital scribing (ADS) tools alleviate clinician documentation burden, reducing burnout and enhancing efficiency. As AI-driven ADS tools integrate into clinical workflows, robust governance is essential for ethical and secure deployment. This study proposes a comprehensive ADS evaluation framework incorporating human evaluation, automated metrics, simulation testing, and large language models (LLMs) as evaluators. Our framework assesses transcription, diarization, and medical note generation across criteria such as *fluency*, *completeness*, and *factuality*. To demonstrate its effectiveness, we developed an ADS tool and applied our framework to evaluate the tool’s performance on 40 real clinical visit recordings. Our evaluation revealed strengths, such as *fluency* and *clarity*, but also highlighted weaknesses in factual accuracy and the ability to capture new medications. These findings underscore the value of structured ADS evaluation in improving healthcare delivery while emphasizing the need for strong governance to ensure safe, ethical integration.

### Similar content being viewed by others

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41746-021-00432-5/MediaObjects/41746_2021_432_Fig1_HTML.png)

### [The digital scribe in clinical practice: a scoping review and research agenda](https://www.nature.com/articles/s41746-021-00432-5?fromPaywallRec=false)

Article
Open access
26 March 2021

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41591-024-03328-5/MediaObjects/41591_2024_3328_Fig1_HTML.png)

### [An evaluation framework for clinical use of large language models in patient interaction tasks](https://www.nature.com/articles/s41591-024-03328-5?fromPaywallRec=false)

Article
02 January 2025

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41591-024-03416-6/MediaObjects/41591_2024_3416_Fig1_HTML.png)

### [A generalist medical language model for disease diagnosis assistance](https://www.nature.com/articles/s41591-024-03416-6?fromPaywallRec=false)

Article
08 January 2025

## Introduction

Medical note-taking has long been a time-intensive and challenging task for clinicians, further exacerbated by the widespread adoption of electronic health records (EHRs). While EHRs aim to enhance documentation, they have significantly increased administrative burdens, reducing the time available for patient care. Studies have shown that clinicians spend a significant portion of their workday documenting, with an average of 1.84 h daily on EHR-related tasks, much of it during after-hours, referred to as “pajama time”[1](/articles/s41746-025-01622-1#ref-CR1 "Sinsky, C. et al. Allocation of physician time in ambulatory practice: a time and motion study in 4 specialties. Ann. Intern. Med. 165, 753–760 (2016)."). Similarly, dissatisfaction due to the time required for documentation has been reported, with additional impacts on the ability to build rapport with patients during clinical encounters[2](#ref-CR2 "Gaffney, A. et al. Medical documentation burden among US office-based physicians in 2019: a national study: a national study. JAMA Intern. Med. 182, 564–566 (2022)."),[3](#ref-CR3 "Pearce, C., Trumble, S., Arnold, M., Dwan, K. & Phillips, C. Computers in the new consultation: within the first minute. Fam. Pract. 25, 202–8 (2008)."),[4](#ref-CR4 "Alkureishi, M. A. et al. Impact of electronic medical record use on the patient–doctor relationship and communication: a systematic review. J. Gen. Intern. Med. 31, 548–60 (2016)."),[5](/articles/s41746-025-01622-1#ref-CR5 "Booth, N., Robinson, P. & Kohannejad, J. Identification of high-quality consultation practice in primary care: the effects of computer use on doctor–patient rapport. Inform. Prim. Care 12, 75–83 (2004)."). This growing burden has created an urgent need for innovative solutions to improve workflow efficiency and clinician satisfaction.

Ambient digital scribing (ADS) tools have emerged as a promising solution to this challenge. Leveraging artificial intelligence (AI) and large language models (LLMs), ADS tools automatically transcribe and summarize clinician-patient conversations in real-time, significantly reducing the documentation burden on clinicians. Studies have demonstrated that these tools improve workflow efficiency, reduce after-hours EHR use, and enhance clinician satisfaction by enabling more direct patient interaction[6](/articles/s41746-025-01622-1#ref-CR6 "Tierney, A. A. et al. Ambient artificial intelligence scribes to alleviate the burden of clinical documentation. JM Catal. Innov. Care Deliv. 5, pp.CAT-23 (2024)."),[7](/articles/s41746-025-01622-1#ref-CR7 "Liu, T.-L. et al. AI-powered clinical documentation and clinicians’ electronic health record experience: a nonrandomized clinical trial: a nonrandomized clinical trial. JAMA Netw. Open 7, e2432460 (2024)."). For example, a three-month pilot of DAX Co-pilot quantified reductions in documentation time, after-hours EHR use, and clinician burnout, with 78% of clinicians reporting improved task efficiency and willingness for long-term adoption[8](/articles/s41746-025-01622-1#ref-CR8 "Ma, S. P. et al. PRIME PubMed 
                  https://www.unboundmedicine.com/medline/citation/39688515/Ambient_artificial_intelligence_scribes:_utilization_and_impact_on_documentation_time
                  
                 (2024)."),[9](/articles/s41746-025-01622-1#ref-CR9 "Shah, S. J. et al. Ambient artificial intelligence scribes: physician burnout and perspectives on usability and documentation burden. J. Am. Med.Inform. Assoc. 32, 375–380 (2024)."). These findings underscore the potential of ADS tools to transform clinical documentation processes.

To fully realize the potential of ADS tools, it is essential to adopt robust AI governance frameworks. Such frameworks ensure the ethical, transparent, and accountable development and deployment of AI systems, particularly those like ADS tools that directly influence clinical decision-making. Governance models emphasizing *accountability* and *transparency* have been proposed, along with layered approaches to address diverse challenges[10](/articles/s41746-025-01622-1#ref-CR10 "Reddy, S., Allan, S., Coghlan, S. & Cooper, P. A governance model for the application of AI in health care. J. Am. Med. Inform. Assoc. 27, 491–497 (2020)."),[11](/articles/s41746-025-01622-1#ref-CR11 "Gasser, U. & Almeida, V. A. F. A layered model for AI governance. IEEE Internet Comput. 21, 58–62 (2017)."). Current evaluation strategies for ADS tools remain insufficient, primarily emphasizing user satisfaction through surveys and performance assessments relying on expert evaluations. These evaluations are either solely based on human-driven qualitative evaluation, or automated evaluation like ROUGE, Word Error Rate (WER), and F1 scores, which are not fully tailored to the complexities of clinical workflows[12](/articles/s41746-025-01622-1#ref-CR12 "Owens, L. M., Wilda, J. J., Grifka, R., Westendorp, J. & Fletcher, J. J. Effect of ambient voice technology, natural language processing, and artificial intelligence on the patient–physician relationship. Appl. Clin. Inf. 15, 660–667 (2024)."),[13](/articles/s41746-025-01622-1#ref-CR13 "Selvaraj, S. P. & Konam, S. Medication regimen extraction from medical conversations: building a culture of transparency and accountability. In Explainable AI in Healthcare and Medicine Vol. 914 (eds Shaban-Nejad, A., Michalowski, M. & Buckeridge, D. L.) 195–209 (Springer International Publishing, Cham, 2021).").

Enhanced transcription metrics, such as Medical Term Recall (MTR), have improved performance assessment[14](/articles/s41746-025-01622-1#ref-CR14 "Pioneering the Science of AI Evaluation 
                  https://www.abridge.com/ai/science-ai-evaluation
                  
                ."). In addition, recent efforts to address these limitations include simulation studies identifying critical issues like information omission during early deployment phases[15](/articles/s41746-025-01622-1#ref-CR15 "Biro, J. et al. Accuracy and safety of AI-enabled scribe technology: instrument validation study. J. Med. Internet Res. 27, e64993 (2025)."). However, significant challenges persist in that human evaluation remains resource-intensive, requiring clinical expertise and contextual familiarity, while stage-specific evaluations for transcription, diarization, and note generation are underdeveloped[16](/articles/s41746-025-01622-1#ref-CR16 "Tam, T. Y. C. et al. A framework for human evaluation of large language models in healthcare derived from literature review. NPJ Digit. Med. 7, 258 (2024)."). Additionally, the lack of robust adversarial simulations to test robustness, fairness, and trustworthiness limits the comprehensiveness of assessment frameworks.

To bridge these gaps, we propose a comprehensive AI evaluation and governance framework tailored to ADS tools in healthcare. This framework provides a holistic approach to evaluating ADS tools across development, approval, and implementation stages. Moreover, we explore how LLMs can reduce the burden on human evaluators while maintaining high evaluation standards. By developing and evaluating our internally developed ADS tools within this framework, we demonstrate the usefulness of the evaluation framework, establishing a foundation for future research and benchmarks for ADS tool development. These findings highlight the importance of rigorous evaluation to advance the integration of ADS tools into clinical workflows.

## Results

The proposed *SCRIBE* framework integrates Simulation, Computational metrics, Reviewer assessment, and Intelligent Evaluations for Best practice to provide a comprehensive evaluation (Fig. [1a](/articles/s41746-025-01622-1#Fig1)). Recognizing that no single method captures all performance dimensions, *SCRIBE* combines human judgment, objective computational metrics, advanced simulation techniques, and adherence to clinical best practices for both technical rigor and real-world relevance. Human review captures clinical nuance but lacks scalability, while automated evaluation ensures objective, reproducible benchmarking. LLM-based assessment blends human-like reasoning with machine consistency, and simulation-based evaluation enables counterfactual testing without additional data (Fig. [1b](/articles/s41746-025-01622-1#Fig1)).

**Fig. 1: Study design.**

[![figure 1](//media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41746-025-01622-1/MediaObjects/41746_2025_1622_Fig1_HTML.png)](/articles/s41746-025-01622-1/figures/1)

**a** Workflow of the internally developed ADS and the proposed evaluation framework. This diagram illustrates the end-to-end process of transcription, diarization, and medical note generation within our internally developed ADS tool, along with an overview of the evaluation framework. **b** The Venn diagram summarizes and compares the characteristics of human evaluation, automated evaluation, and LLM-as-an-evaluator.

[Full size image](/articles/s41746-025-01622-1/figures/1)

Using the proposed *SCRIBE* evaluation framework, we evaluated our internally developed ADS tool which consists of transcription, diarization, and medical notes generation of 40 audio recordings of clinician–patient conversations. We first provided summary statistics of the input and output data in the results. We presented results from the human evaluation, auto evaluation, and LLM evaluation (Fig. [2](/articles/s41746-025-01622-1#Fig2)). Finally, we reviewed our simulation-based testing, covering robustness, bias, and fairness simulations and their respective results.

**Fig. 2: Human evaluation, auto evaluation, and LLM evaluator.**

[![figure 2](//media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41746-025-01622-1/MediaObjects/41746_2025_1622_Fig2_HTML.png)](/articles/s41746-025-01622-1/figures/2)

The radar plot presents the scores of GPT-generated notes evaluated by three different assessors: Human evaluators (green), LLM evaluators (red), and a trained auto evaluator (blue). The trained auto-evaluator’s scores align more closely with those of the human evaluators. In contrast, the LLM evaluators tend to be more lenient across all criteria, except for prudence.

[Full size image](/articles/s41746-025-01622-1/figures/2)

### Dataset

Our dataset consisted of 40 audio recordings from prenatal visits from a diverse set of patients. The recordings range from 6 to 35 min, with an average duration of 16.7 min (Supplementary Fig. [1](/articles/s41746-025-01622-1#MOESM1)). Each file captures a one-on-one conversation between a patient and a clinician. Most transcripts contain between 1000 and 3000 words, with a smaller subset extending beyond 4000 words (Supplementary Fig. [2](/articles/s41746-025-01622-1#MOESM1)). The corresponding character counts cluster around 5000 to 15,000, though a few transcripts reach considerably higher values (Supplementary Fig. [2](/articles/s41746-025-01622-1#MOESM1)). This variation indicates that while many conversations share a moderate length, some are substantially longer, underscoring the diverse range of clinical interactions in the dataset. Supplementary Fig. [3](/articles/s41746-025-01622-1#MOESM1) compares the word and character counts of notes generated by LLaMA-based models and GPT-based models. On average, LLaMA-based notes contain roughly half the number of words and characters compared to GPT-based notes.

### Results of human assessment

*AI-generated medical notes evaluation.* We employed a structured evaluation process involving two clinical experts (M.A. and A.K.) which provided a semi-quantitative, human evaluation method. Supplementary Fig. [4a](/articles/s41746-025-01622-1#MOESM1) shows that most evaluation times cluster between 10 and 20 min, with a few outliers extending to around 35 or even 40 min, and the average editing time is ~5–7 min.

The comparison of human evaluation scores between two evaluators is shown in Supplementary Fig. [4b and c](/articles/s41746-025-01622-1#MOESM1). The inter-rater agreement between the two evaluators was ~53.8%, which, while modest, aligns with the subjective nature of clinical note evaluation and mirrors values reported in other studies. The third clinical evaluator confirmed that the discrepancies were expected given the complexities of each case. The majority of these inconsistencies were deemed unlikely to pose serious risks. Finally, the scores from the two evaluators were averaged to deriv

[... truncated ...]