---
url: https://www.nature.com/articles/s41586-025-09529-3
title: "Learning the natural history of human disease with generative transformers - Nature"
clipped: 2025-12-23 11:16
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Learning the natural history of human disease with generative transformers - Nature

> Source: [https://www.nature.com/articles/s41586-025-09529-3](https://www.nature.com/articles/s41586-025-09529-3)

Learning the natural history of human disease with generative transformers

[Download PDF](/articles/s41586-025-09529-3.pdf)

[Download PDF](/articles/s41586-025-09529-3.pdf)

### Subjects

* [Computational science](/subjects/computational-science)
* [Diseases](/subjects/diseases)
* [Risk factors](/subjects/risk-factors)

An [Author Correction](https://doi.org/10.1038/s41586-025-09879-y) to this article was published on 12 November 2025

This article has been [updated](#change-history)

## Abstract

Decision-making in healthcare relies on understanding patients’ past and current health states to predict and, ultimately, change their future course[1](#ref-CR1 "Zhu, Z. et al. Causal associations between risk factors and common diseases inferred from GWAS summary data. Nat. Commun. 9, 224 (2018)."),[2](#ref-CR2 "Link, B. G. & Phelan, J. Social conditions as fundamental causes of disease. J. Health Soc. Behav. 
                  https://doi.org/10.2307/2626958
                  
                 (1995)."),[3](/articles/s41586-025-09529-3#ref-CR3 "Nyberg, S. T. et al. Association of healthy lifestyle with years lived without major chronic diseases. JAMA Intern. Med. 180, 760–768 (2020)."). Artificial intelligence (AI) methods promise to aid this task by learning patterns of disease progression from large corpora of health records[4](/articles/s41586-025-09529-3#ref-CR4 "Kraljevic, Z., Yeung, J. A., Bean, D., Teo, J. & Dobson, R. J. Large language models for medical forecasting—foresight 2. Preprint at 
                  https://arxiv.org/abs/2412.10848
                  
                 (2024)."),[5](/articles/s41586-025-09529-3#ref-CR5 "Yang, L. et al. Advancing multimodal medical capabilities of Gemini. Preprint at 
                  https://arxiv.org/abs/2405.03162
                  
                 (2024)."). However, their potential has not been fully investigated at scale. Here we modify the GPT[6](/articles/s41586-025-09529-3#ref-CR6 "Radford, A. et al. Language models are unsupervised multitask learners. OpenAI 
                  https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf
                  
                 (2019).") (generative pretrained transformer) architecture to model the progression and competing nature of human diseases. We train this model, Delphi-2M, on data from 0.4 million UK Biobank participants and validate it using external data from 1.9 million Danish individuals with no change in parameters. Delphi-2M predicts the rates of more than 1,000 diseases, conditional on each individual’s past disease history, with accuracy comparable to that of existing single-disease models. Delphi-2M’s generative nature also enables sampling of synthetic future health trajectories, providing meaningful estimates of potential disease burden for up to 20 years, and enabling the training of AI models that have never seen actual data. Explainable AI methods[7](/articles/s41586-025-09529-3#ref-CR7 "Lundberg, S. M. & Lee, S.-I. A unified approach to interpreting model predictions. Adv. Neural Inf. Process. Syst. 30, 4768–4777 (2017).") provide insights into Delphi-2M’s predictions, revealing clusters of co-morbidities within and across disease chapters and their time-dependent consequences on future health, but also highlight biases learnt from training data. In summary, transformer-based models appear to be well suited for predictive and generative health-related tasks, are applicable to population-scale datasets and provide insights into temporal dependencies between disease events, potentially improving the understanding of personalized health risks and informing precision medicine approaches.

### Similar content being viewed by others

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41746-024-01005-y/MediaObjects/41746_2024_1005_Fig1_HTML.png)

### [An intriguing vision for transatlantic collaborative health data use and artificial intelligence development](https://www.nature.com/articles/s41746-024-01005-y?fromPaywallRec=false)

Article
Open access
23 January 2024

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41591-025-03790-9/MediaObjects/41591_2025_3790_Fig1_HTML.png)

### [Deep phenotyping of health–disease continuum in the Human Phenotype Project](https://www.nature.com/articles/s41591-025-03790-9?fromPaywallRec=false)

Article
15 July 2025

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41598-025-20382-2/MediaObjects/41598_2025_20382_Fig1_HTML.png)

### [Enhancing disease clustering through symptom-based analysis and large language model interpretations](https://www.nature.com/articles/s41598-025-20382-2?fromPaywallRec=false)

Article
Open access
21 October 2025

## Main

The progression of human disease across age is characterized by periods of health, episodes of acute illness and also chronic debilitation, often manifesting as clusters of co-morbidity. Patterns of multimorbidity affect individuals unevenly and have been associated with lifestyle, heritable traits and socioeconomic status[1](#ref-CR1 "Zhu, Z. et al. Causal associations between risk factors and common diseases inferred from GWAS summary data. Nat. Commun. 9, 224 (2018)."),[2](#ref-CR2 "Link, B. G. & Phelan, J. Social conditions as fundamental causes of disease. J. Health Soc. Behav. 
                  https://doi.org/10.2307/2626958
                  
                 (1995)."),[3](/articles/s41586-025-09529-3#ref-CR3 "Nyberg, S. T. et al. Association of healthy lifestyle with years lived without major chronic diseases. JAMA Intern. Med. 180, 760–768 (2020)."). Understanding each individual’s multi-morbidity risks is important to tailor healthcare decisions, motivate lifestyle changes or direct entrance into screening programs, as is the case for cancer[8](/articles/s41586-025-09529-3#ref-CR8 "Mukama, T. et al. Risk-adapted starting age of screening for relatives of patients with breast cancer. JAMA Oncol. 6, 68–74 (2020)."),[9](/articles/s41586-025-09529-3#ref-CR9 "Tian, Y. et al. Calculating the starting age for screening in relatives of patients with colorectal cancer based on data from large nationwide data sets. Gastroenterology 159, 159–168 (2020)."). Critically, health cannot only be understood by the presentation of individual diagnoses but, rather, in the context of an individual’s co-morbidities and their evolution over time. While a wide range of prediction algorithms exist for specific diseases, from cardiovascular disease to cancer[10](#ref-CR10 "Quan, H. et al. Updating and validating the Charlson comorbidity index and score for risk adjustment in hospital discharge abstracts using data from 6 countries. Am. J. Epidemiol. 173, 676–682 (2011)."),[11](#ref-CR11 "D’Agostino, R. B. Sr et al. General cardiovascular risk profile for use in primary care: the Framingham Heart Study. Circulation 117, 743–753 (2008)."),[12](/articles/s41586-025-09529-3#ref-CR12 "Hippisley-Cox, J. & Coupland, C. Development and validation of risk prediction algorithms to estimate future risk of common cancers in men and women: prospective cohort study. BMJ Open 5, e007825 (2015)."), few algorithms are capable of predicting the full spectrum of human disease, which recognizes more than 1,000 diagnoses at the top level of the International Classification of Diseases, Tenth Revision (ICD-10) coding system.

Learning and predicting patterns of disease progression is also important in populations that are ageing and that exhibit shifts in their underlying demographic’s morbidities. For example, it has been predicted that, globally, the number of cancer diagnoses will increase 77% by 2050 (ref. [13](/articles/s41586-025-09529-3#ref-CR13 "Bray, F. et al. Global cancer statistics 2022: GLOBOCAN estimates of incidence and mortality worldwide for 36 cancers in 185 countries. CA Cancer J. Clin. 
                  https://doi.org/10.3322/caac.21834
                  
                 (2024).")) or that, in the UK, the number of working-age individuals with major illnesses, including depression, asthma, diabetes, cardiovascular disease, cancer or dementia, will increase from 3 to 3.7 million by 2040 (ref. [14](/articles/s41586-025-09529-3#ref-CR14 "Watt, T. et al. Health in 2040: Projected Patterns of Illness in England (The Health Foundation, 2023).")). Modelling the expected burden of disease is therefore critical for healthcare and economic planning and, moreover, the continual tracking of disease occurrence along with its likely future prevalence within population groups promotes a more informed healthcare system.

Recent developments in AI may help to address some methodological limitations of multi-morbidity modelling, which have so far proved difficult to overcome[15](/articles/s41586-025-09529-3#ref-CR15 "Jung, A. W. & Gerstung, M. Bayesian Cox regression for large-scale inference with applications to electronic health records. Ann. Appl. Stat. 17, 1064–1085 (2023)."). Aside from the great number of diagnoses, these include challenges in modelling temporal dependencies among previous events, the integration of potentially diverse prognostically relevant data and the statistical calibration of predictions. Large language models (LLMs)[16](#ref-CR16 "Vaswani, A. et al. Attention is all you need. Adv. Neural Inf. Process. Syst. 30, 6000–6010 (2017)."),[17](#ref-CR17 "Brown, T. et al. Language models are few-shot learners. Adv. Neural Inf. Process. Syst. 33, 1877–1901 (2020)."),[18](#ref-CR18 "Gemini Team et al. Gemini: a family of highly capable multimodal models. Preprint at 
                  https://arxiv.org/abs/2312.11805
                  
                 (2023)."),[19](/articles/s41586-025-09529-3#ref-CR19 "Touvron, H. et al. LLaMA: open and efficient foundation language models. Preprint at 
                  https://arxiv.org/abs/2302.13971
                  
                 (2023).")—a subfield of AI that enables chatbots such as ChatGPT[20](/articles/s41586-025-09529-3#ref-CR20 "Ouyang, L. et al. Training language models to follow instructions with human feedback. Adv. Neural Inf. Process. Syst. 35, 27730–27744 (2022)."),[21](/articles/s41586-025-09529-3#ref-CR21 "OpenAI et al. GPT-4 technical report. Preprint at 
                  https://arxiv.org/abs/2303.08774
                  
                 (2023).")—model language as a sequence of word fragments (tokens). Generated token by token, the new text is based on all preceding text and, with enough training, the statistical dependencies among these tokens prove sufficient to produce context-aware and even conversational text, which is often indistinguishable from that of a human counterpart.

The analogy between LLMs and disease progression modelling, which also entails recognizing past events and exploiting their mutual dependencies to predict the future sequence of morbidity, has recently inspired a series of new AI models. For example, BERT-based models[22](#ref-CR22 "Rasmy, L., Xiang, Y., Xie, Z., Tao, C. & Zhi, D. Med-BERT: pretrained contextualized embeddings on large-scale structured electronic health records for disease prediction. NPJ Digit. Med. 4, 86 (2021)."),[23](#ref-CR23 "Li, Y. et al. BEHRT: transformer for electronic health records. Sci. Rep. 10, 7155 (2020)."),[24](#ref-CR24 "Li, Y. et al. Hi-BEHRT: Hierarchical Transformer-based model for accurate prediction of clinical events using multimodal longitudinal electronic health records. IEEE J. Biomed. Health Inform. 27, 1106–1117 (2023)."),[25](/articles/s41586-025-09529-3#ref-CR25 "Yang, Z., Mitra, A., Liu, W., Berlowitz, D. & Yu, H. TransformEHR: transformer-based encoder-decoder generative model to enhance prediction of disease outcomes using electronic health records. Nat. Commun. 14, 7857 (2023).") have been developed for specific prediction tasks. Transformer models trained on electronic health records have been used for predicting diagnoses such as pancreatic cancer[26](/articles/s41586-025-09529-3#ref-CR26 "Placido, D. et al. A deep learning algorithm to predict risk of pancreatic cancer from disease trajectories. Nat. Med. 29, 1113–1122 (2023)."), self-harm[25](/articles/s41586-025-09529-3#ref-CR25 "Yang, Z., Mitra, A., Liu, W., Berlowitz, D. & Yu, H. TransformEHR: transformer-based encoder-decoder generative model to enhance prediction of disease outcomes using electronic health records. Nat. Commun. 14, 7857 (2023).") and stroke[24](/articles/s41586-025-09529-3#ref-CR24 "Li, Y. et al. Hi-BEHRT: Hierarchical Transformer-based model for accurate prediction of clinical events using multimodal longitudinal electronic health records. IEEE J. Biomed. Health Inform. 27, 1106–1117 (2023)."), as well as non-clinical parameters such as self-esteem[27](/articles/s41586-025-09529-3#ref-CR27 "Savcisens, G. et al. Using sequences of life-events to predict human lives. Nat. Comput. Sci. 4, 43–56 (2023)."). However, despite promising proofs of concept[4](/articles/s41586-025-09529-3#ref-CR4 "Kraljevic, Z., Yeung, J. A., Bean, D., Teo, J. & Dobson, R. J. Large language models for medical forecasting—foresight 2. Preprint at 
                  https://arxiv.org/abs/2412.10848
                  
                 (2024)."),[28](/articles/s41586-025-09529-3#ref-CR28 "Kraljevic, Z. et al. Foresight—a generative pretrained transformer for modelling of patient timelines using electronic health records: a retrospective modelling study. Lancet Digit. Health 6, e281–e290 (2024)."),[29](/articles/s41586-025-09529-3#ref-CR29 "Steinberg, E., Fries, J. A., Xu, Y. & Shah, N. H. MOTOR: a time-to-event foundation model for structured medical records. Int. Conf. Learn. Represent. 
                  https://iclr.cc/virtual/2024/poster/18777
                  
                 (2024)"), the potential for comprehensive and generative multi-morbidity modelling has not yet been fully assessed.

Here we demonstrate that attention-based transformer models, similar to LLMs, can be extended to learn lifetime health trajectories and accurately predict future disease rates for more than 1,000 diseases simultaneously on the basis of previous health diagnoses, lifestyle factors and further informative data. Our extended model, termed Delphi-2M, was trained on data from the UK Biobank, a population-scale research cohort, and validated on Danish population registries. The vocabulary of the model includes ICD-10 top-level diagnostic codes, as well as sex, body mass, smoking, alcohol consumption and death. Delphi provides individual-level predictions of multi-disease incidences and models future health trajectories at any point throughout an individual’s life course. Moreover, the internal model of Delphi offers insights into how past data influence the rates of subsequent diseases. We further assess biases and fairness across demographic subgroups and discuss Delphi’s potential as a framework for he

[... truncated ...]