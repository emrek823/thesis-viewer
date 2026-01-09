---
url: https://www.nature.com/articles/s41586-023-06160-y
title: "Health system-scale language models are all-purpose prediction engines | Nature"
clipped: 2026-01-08 13:52
source: browser-history
---

# Health system-scale language models are all-purpose prediction engines | Nature

> Source: [https://www.nature.com/articles/s41586-023-06160-y](https://www.nature.com/articles/s41586-023-06160-y)

Health system-scale language models are all-purpose prediction engines

[Download PDF](/articles/s41586-023-06160-y.pdf)

[Download PDF](/articles/s41586-023-06160-y.pdf)

### Subjects

* [Computational science](/subjects/computational-science)
* [Translational research](/subjects/translational-research)

This article has been [updated](#change-history)

## Abstract

Physicians make critical time-constrained decisions every day. Clinical predictive models can help physicians and administrators make decisions by forecasting clinical and operational events. Existing structured data-based clinical predictive models have limited use in everyday practice owing to complexity in data processing, as well as model development and deployment[1](#ref-CR1 "Roberts, M. et al. Common pitfalls and recommendations for using machine learning to detect and prognosticate for COVID-19 using chest radiographs and CT scans. Nat. Mach. Intel. 3, 199–217 (2021)."),[2](#ref-CR2 "Kelly, C. J., Karthikesalingam, A., Suleyman, M., Corrado, G. & King, D. Key challenges for delivering clinical impact with artificial intelligence. BMC Med. 17, 195 (2019)."),[3](/articles/s41586-023-06160-y#ref-CR3 "Gaube, S. et al. Do as AI say: susceptibility in deployment of clinical decision-aids. NPJ Digit. Med. 4, 31 (2021)."). Here we show that unstructured clinical notes from the electronic health record can enable the training of clinical language models, which can be used as all-purpose clinical predictive engines with low-resistance development and deployment. Our approach leverages recent advances in natural language processing[4](/articles/s41586-023-06160-y#ref-CR4 "Devlin, J., Chang, M.-W., Lee, K. & Toutanova, K. BERT: pre-training of deep bidirectional transformers for language understanding. in Proc. 2019 NAACL: Human Language Technologies (eds Burstein, J., Doran, C. & Solorio, T.) 4171–4186 (Association for Computational Linguistics, 2019)."),[5](/articles/s41586-023-06160-y#ref-CR5 "Brown, T. B. et al. Language models are few-shot learners. in Proc. NeurIPS (eds Wallach, H. et al.) 1877–1901 (Neural Information Processing Systems, 2020).") to train a large language model for medical language (NYUTron) and subsequently fine-tune it across a wide range of clinical and operational predictive tasks. We evaluated our approach within our health system for five such tasks: 30-day all-cause readmission prediction, in-hospital mortality prediction, comorbidity index prediction, length of stay prediction, and insurance denial prediction. We show that NYUTron has an area under the curve (AUC) of 78.7–94.9%, with an improvement of 5.36–14.7% in the AUC compared with traditional models. We additionally demonstrate the benefits of pretraining with clinical text, the potential for increasing generalizability to different sites through fine-tuning and the full deployment of our system in a prospective, single-arm trial. These results show the potential for using clinical language models in medicine to read alongside physicians and provide guidance at the point of care.

### Similar content being viewed by others

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41596-021-00513-5/MediaObjects/41596_2021_513_Fig1_HTML.png)

### [Use of deep learning to develop continuous-risk models for adverse event prediction from electronic health records](https://www.nature.com/articles/s41596-021-00513-5?fromPaywallRec=false)

Article
05 May 2021

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs43856-025-01091-3/MediaObjects/43856_2025_1091_Fig1_HTML.png)

### [Development and evaluation of a clinical note summarization system using large language models](https://www.nature.com/articles/s43856-025-01091-3?fromPaywallRec=false)

Article
Open access
28 August 2025

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41598-022-25472-z/MediaObjects/41598_2022_25472_Fig1_HTML.png)

### [Temporal convolutional networks and data rebalancing for clinical length of stay and mortality prediction](https://www.nature.com/articles/s41598-022-25472-z?fromPaywallRec=false)

Article
Open access
08 December 2022

## Main

Physicians make difficult decisions every day requiring the integration of a tremendous amount of information. The information needed to make these medical decisions is scattered across various records, for example, a patient’s medical history and laboratory and imaging reports. When physicians perform their work, however, all of this information is ultimately integrated into the notes written by physicians to document and summarize patient care.

Clinical predictive models are frequently derived from rules that have existed for decades[6](#ref-CR6 "Gage, B. F. et al. Selecting patients with atrial fibrillation for anticoagulation: stroke risk stratification in patients taking aspirin. Circulation 110, 2287–2292 (2004)."),[7](#ref-CR7 "Child, C. G. & Turcotte, J. G. Surgery and portal hypertension. Major Prob. Clin. Surg. 1, 1–85 (1964)."),[8](#ref-CR8 "Pugh, R. N. H., Murray-Lyon, I. M., Dawson, J. L., Pietroni, M. C. & Williams, R. Transection of the oesophagus for bleeding oesophageal varices. Br. J. Surg. 60, 646–649 (2005)."),[9](/articles/s41586-023-06160-y#ref-CR9 "Wells, P. et al. Accuracy of clinical assessment of deep-vein thrombosis. Lancet 345, 1326–1330 (1995)."), as well as from machine learning methods[10](#ref-CR10 "Tomašev, N. et al. A clinically applicable approach to continuous prediction of future acute kidney injury. Nature 572, 116–119 (2019)."),[11](#ref-CR11 "Wu, N. et al. Deep neural networks improve radiologists’ performance in breast cancer screening. IEEE TMI 39, 1184–1194 (2020)."),[12](/articles/s41586-023-06160-y#ref-CR12 "Liang, H. et al. Evaluation and accurate diagnoses of pediatric diseases using artificial intelligence. Nat. Med. 25, 433–438 (2019)."), with most relying on structured inputs pulled from the electronic health record (EHR) or direct clinician inputs. This reliance on structured inputs introduces complexity in data processing, as well as in model development and deployment, which in part is responsible for the overwhelming majority of medical predictive algorithms being trained, tested and published, yet never deployed to assess their impact on real-world clinical care. This is frequently referred to as the ‘last-mile problem’ (refs. [1](#ref-CR1 "Roberts, M. et al. Common pitfalls and recommendations for using machine learning to detect and prognosticate for COVID-19 using chest radiographs and CT scans. Nat. Mach. Intel. 3, 199–217 (2021)."),[2](#ref-CR2 "Kelly, C. J., Karthikesalingam, A., Suleyman, M., Corrado, G. & King, D. Key challenges for delivering clinical impact with artificial intelligence. BMC Med. 17, 195 (2019)."),[3](/articles/s41586-023-06160-y#ref-CR3 "Gaube, S. et al. Do as AI say: susceptibility in deployment of clinical decision-aids. NPJ Digit. Med. 4, 31 (2021).")).

One of the most exciting recent developments in modern artificial intelligence (AI) research is large language models (LLMs). These massive neural networks (with millions or even billions of parameters) have been shown to obtain impactful results on a wide range of problems that rely on the reading and interpretation of human language. Several styles of LLMs have been developed over the past few years, broadly ranging from encoder models (such as BERT[4](/articles/s41586-023-06160-y#ref-CR4 "Devlin, J., Chang, M.-W., Lee, K. & Toutanova, K. BERT: pre-training of deep bidirectional transformers for language understanding. in Proc. 2019 NAACL: Human Language Technologies (eds Burstein, J., Doran, C. & Solorio, T.) 4171–4186 (Association for Computational Linguistics, 2019).")) to decoder models (such as GPT3; ref. [5](/articles/s41586-023-06160-y#ref-CR5 "Brown, T. B. et al. Language models are few-shot learners. in Proc. NeurIPS (eds Wallach, H. et al.) 1877–1901 (Neural Information Processing Systems, 2020).")). We theorized that LLMs could potentially solve the last-mile problem in medical predictive analytics by simply reading the notes written by physicians, thereby immediately accessing a comprehensive description of a patient’s medical state to provide decision support at the point of care across a wide range of clinical and operational tasks.

Here we present our results from developing, evaluating, deploying and prospectively assessing NYUTron, an LLM-based system that can integrate in real time with clinical workflows centred around writing notes and placing electronic orders. Our approach relies on the fact that all clinically useful data and medical professionals’ decision-making processes can be found as structured or unstructured text in the EHR (for example, as notes, laboratory results and reports on studies). Our approach leverages recent advances in natural language processing that suggest that sufficiently scaled, self-supervised LLMs can outperform strongly supervised approaches on non-medical predictive tasks[4](/articles/s41586-023-06160-y#ref-CR4 "Devlin, J., Chang, M.-W., Lee, K. & Toutanova, K. BERT: pre-training of deep bidirectional transformers for language understanding. in Proc. 2019 NAACL: Human Language Technologies (eds Burstein, J., Doran, C. & Solorio, T.) 4171–4186 (Association for Computational Linguistics, 2019)."),[5](/articles/s41586-023-06160-y#ref-CR5 "Brown, T. B. et al. Language models are few-shot learners. in Proc. NeurIPS (eds Wallach, H. et al.) 1877–1901 (Neural Information Processing Systems, 2020)."),[13](/articles/s41586-023-06160-y#ref-CR13 "Kaplan, J. et al. Scaling laws for neural language models. Preprint at 
                  https://doi.org/10.48550/arXiv.2001.08361
                  
                 (2020)."). We investigate our hypothesis in the NYU Langone Health System (‘NYU Langone’), a large multi-borough hospital system with a diverse patient population in New York, with 4 urban hospitals and 350 outpatient sites. We assess NYUTron on a battery of five tasks, including three clinical and two operational tasks (30-day all-cause readmission prediction, in-hospital mortality prediction, comorbidity index prediction, length of stay (LOS) prediction and insurance denial prediction) and provide a detailed analysis of our 30-day readmission task to look at questions of data efficiency, generalizability, deployability and potential clinical impact. By rethinking all of medical predictive analytics (see Supplementary Information section [1.1](/articles/s41586-023-06160-y#MOESM1) for previous works) as a natural language processing problem, we show that it is possible to use LLMs as universal prediction engines for a wide range of medical predictive tasks.

## Language model-based clinical prediction

Our language model-based approach has four steps: data collection, pretraining, fine-tuning and deployment. In the first step (Fig. [1a](/articles/s41586-023-06160-y#Fig1)), we collected a vast set of unlabelled clinical notes and five task-specific labelled clinical notes from the NYU Langone EHR. Unlike other studies, our datasets come from the entire hospital system with a diverse patient population from different clinical departments. Our large unlabelled dataset, ‘NYU Notes’, comprises 7.25 million clinical notes (for example, radiographic reads, history and physicals) from 387,144 patients across four hospitals, resulting in a 4.1 billion-word corpus curated from January 2011 to May 2020. Each one of our labelled fine-tuning sets contains 1–10 years of inpatient clinical notes (55,791–413,845 patients, 51–87 million words) with task-specific labels (2–4 classes). See Extended Data Table [1](/articles/s41586-023-06160-y#Tab1) for dataset statistics.

**Fig. 1: Overview of the language model-based approach for clinical prediction.**

[![figure 1](//media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41586-023-06160-y/MediaObjects/41586_2023_6160_Fig1_HTML.png)](/articles/s41586-023-06160-y/figures/1)

**a**, We queried the NYU Langone EHR for two types of datasets. The pretraining dataset, NYU Notes, contains 10 years of inpatient clinical notes (387,144 patients, 4.1 billion words). There are five fine-tuning datasets. Each contains 1–10 years of inpatient clinical notes (55,791–413,845 patients, 51–87 million words) with task-specific labels (2–4 classes). **b**, We pretrained a 109 million-parameter BERT-like LLM, termed NYUTron, on the entire EHR using an MLM task to create a pretrained model for medical language contained within the EHR. **c**, We subsequently fine-tuned the pretrained model on specific tasks (for example, 30-day all-cause readmission prediction) and validated it on held-out retrospective data. **d**, Lastly, the fine-tuned model was compressed into an accelerated format and loaded into an inference engine, which interfaces with the NYU Langone EHR to read discharge notes when they are signed by treating physicians.

[Full size image](/articles/s41586-023-06160-y/figures/1)

In the second and third steps (Fig. [1b,c](/articles/s41586-023-06160-y#Fig1)), we pretrained and fine-tuned an LLM for each downstream task using a bidirectional encoder model known as BERT (Bidirectional Encoder Representation with Transformer) and a masked language modelling (MLM) objective on the NYU Notes dataset[11](/articles/s41586-023-06160-y#ref-CR11 "Wu, N. et al. Deep neural networks improve radiologists’ performance in breast cancer screening. IEEE TMI 39, 1184–1194 (2020).") until the validation loss plateaued. The MLM objective randomly masks words or subwords in clinical notes and trains the language model to fill in the masked word correctly. Next, using the fine-tuning dataset, we fine-tuned the pretrained model (termed ‘NYUTron’) to predict the task label using the relationships learned in pretraining with clinical notes.

In the fourth step (Fig. [1d](/articles/s41586-023-06160-y#Fig1)), we deployed our best model to a high-performance inference engine, NYUTriton, that interfaces with the NYU Langone EHR. Deployment enabled real-time LLM-guided inference at the point of care. In a single-arm, non-interventional, prospective trial, we validated NYUTron’s performance on 30-day readmission prediction in a real-world environment and assessed its potential clinical impacts.

## Overall performance on five tasks

To assess the breadth of NYUTron’s applicability, we evaluated NYUTron’s performance on five tasks retrospectively. We trained with the full dataset and evaluated performance with two test sets: (1) a random test set (clinical notes sampled from the same time as the training data) and (2) a temporal test set (clinical notes sampled from the future of the training data). The temporal test set more closely resembles the deployment scenario, in which inference data come from the future of the training data. Our battery of tasks consisted of three

[... truncated ...]