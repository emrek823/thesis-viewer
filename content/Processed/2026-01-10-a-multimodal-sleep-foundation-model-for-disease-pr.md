---
url: https://www.nature.com/articles/s41591-025-04133-4
title: "A multimodal sleep foundation model for disease prediction | Nature Medicine"
clipped: 2026-01-10 22:06
source: browser-history
---

# A multimodal sleep foundation model for disease prediction | Nature Medicine

> Source: [https://www.nature.com/articles/s41591-025-04133-4](https://www.nature.com/articles/s41591-025-04133-4)

A multimodal sleep foundation model for disease prediction

[Download PDF](/articles/s41591-025-04133-4.pdf)

[Download PDF](/articles/s41591-025-04133-4.pdf)

### Subjects

* [Biomedical engineering](/subjects/biomedical-engineering)
* [Diseases](/subjects/diseases)

## Abstract

Sleep is a fundamental biological process with broad implications for physical and mental health, yet its complex relationship with disease remains poorly understood. Polysomnography (PSG)—the gold standard for sleep analysis—captures rich physiological signals but is underutilized due to challenges in standardization, generalizability and multimodal integration. To address these challenges, we developed SleepFM, a multimodal sleep foundation model trained with a new contrastive learning approach that accommodates multiple PSG configurations. Trained on a curated dataset of over 585,000 hours of PSG recordings from approximately 65,000 participants across several cohorts, SleepFM produces latent sleep representations that capture the physiological and temporal structure of sleep and enable accurate prediction of future disease risk. From one night of sleep, SleepFM accurately predicts 130 conditions with a C-Index of at least 0.75 (Bonferroni-corrected *P* < 0.01), including all-cause mortality (C-Index, 0.84), dementia (0.85), myocardial infarction (0.81), heart failure (0.80), chronic kidney disease (0.79), stroke (0.78) and atrial fibrillation (0.78). Moreover, the model demonstrates strong transfer learning performance on a dataset from the Sleep Heart Health Study—a dataset that was excluded from pretraining—and performs competitively with specialized sleep-staging models such as U-Sleep and YASA on common sleep analysis tasks, achieving mean *F*1 scores of 0.70–0.78 for sleep staging and accuracies of 0.69 and 0.87 for classifying sleep apnea severity and presence. This work shows that foundation models can learn the language of sleep from multimodal sleep recordings, enabling scalable, label-efficient analysis and disease prediction.

### Similar content being viewed by others

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41598-025-16154-7/MediaObjects/41598_2025_16154_Fig1_HTML.png)

### [Integrating physiological signals for enhanced sleep apnea diagnosis with SleepNet](https://www.nature.com/articles/s41598-025-16154-7?fromPaywallRec=false)

Article
Open access
28 August 2025

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41598-023-45020-7/MediaObjects/41598_2023_45020_Fig1_HTML.png)

### [Deep learning-based sleep stage classification with cardiorespiratory and body movement activities in individuals with suspected sleep disorders](https://www.nature.com/articles/s41598-023-45020-7?fromPaywallRec=false)

Article
Open access
18 October 2023

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41467-025-62338-0/MediaObjects/41467_2025_62338_Fig1_HTML.png)

### [Health risks and genetic architecture of objectively measured multidimensional sleep health](https://www.nature.com/articles/s41467-025-62338-0?fromPaywallRec=false)

Article
Open access
31 July 2025

## Main

Sleep is a complex process characterized by intricate interactions across physiological systems, including brain, heart, respiratory and muscle activity[1](/articles/s41591-025-04133-4#ref-CR1 "Berry, R. B et al. The AASM Manual for the Scoring of Sleep and Associated Events: Rules, Terminology and Technical Specifications (American Academy of Sleep Medicine, 2012)."). PSG—the gold standard for sleep evaluation—captures these interactions through recordings of several modalities, including brain activity signals (BAS, including electroencephalogram (EEG) and electrooculogram (EOG)), electrocardiography (ECG), electromyography (EMG) and respiratory signals[2](/articles/s41591-025-04133-4#ref-CR2 "Kryger, M. H., Roth, T. & Dement, W. C. (eds). Principles and Practice of Sleep Medicine (Saunders, 2010).").

Sleep disorders affect millions of people and are increasingly recognized as indicators of, and contributors to, various health conditions[3](/articles/s41591-025-04133-4#ref-CR3 "Brink-Kjaer, A. et al. Age estimation from sleep studies using deep learning predicts life expectancy. NPJ Digit. Med. 5, 103 (2022)."). Sleep disturbances often precede the clinical onset of numerous conditions, such as psychiatric disorders[4](/articles/s41591-025-04133-4#ref-CR4 "Riemann, D. Insomnia and comorbid psychiatric disorders. Sleep Med. 8, S15–S20 (2007)."), neurodegenerative diseases[5](/articles/s41591-025-04133-4#ref-CR5 "André, C. et al. Association of sleep-disordered breathing with Alzheimer disease biomarkers in community-dwelling older adults: a secondary analysis of a randomized clinical trial. JAMA Neurol. 77, 716–724 (2020).") and cardiovascular disorders[6](/articles/s41591-025-04133-4#ref-CR6 "Nii Ossah Addo, P. et al. Associations between sleep duration, sleep disturbance and cardiovascular disease biomarkers among adults in the united states. BMC Public Health 24, 947 (2024)."). These associations highlight the important role sleep plays in maintaining overall health and underscores its predictive potential across a wide spectrum of diseases. However, most existing studies have focused on identifying links between sleep and specific diseases using isolated metrics or manual annotations, leaving much of the complexity of sleep physiology, as captured in PSG, underutilized.

Recent advances in deep learning have enabled the use of PSG’s multimodal data for tasks ranging from sleep staging and apnea detection to predicting conditions such as atrial fibrillation, biological aging and narcolepsy[3](/articles/s41591-025-04133-4#ref-CR3 "Brink-Kjaer, A. et al. Age estimation from sleep studies using deep learning predicts life expectancy. NPJ Digit. Med. 5, 103 (2022)."),[7](#ref-CR7 "Perslev, M. et al. U-sleep: resilient high-frequency sleep staging. NPJ Digit. Med. 4, 72 (2021)."),[8](#ref-CR8 "Nassi, T. E. et al. Automated scoring of respiratory events in sleep with a single effort belt and deep neural networks. IEEE Trans. Biomed. Eng. 69, 2094–2104 (2021)."),[9](#ref-CR9 "Koscova, Z. et al. From sleep patterns to heart rhythm: predicting atrial fibrillation from overnight polysomnograms. J. Electrocardiol. 86, 153759 (2024)."),[10](/articles/s41591-025-04133-4#ref-CR10 "Stephansen, J. B. et al. Neural network analysis of sleep stages enables efficient diagnosis of narcolepsy. Nat. Commun. 9, 5229 (2018)."). Despite this progress, current approaches face key limitations: they focus on individual outcomes, depend on supervised learning with expert-labeled data and are trained on relatively small datasets (2,500–15,913 recordings)[3](/articles/s41591-025-04133-4#ref-CR3 "Brink-Kjaer, A. et al. Age estimation from sleep studies using deep learning predicts life expectancy. NPJ Digit. Med. 5, 103 (2022)."),[7](/articles/s41591-025-04133-4#ref-CR7 "Perslev, M. et al. U-sleep: resilient high-frequency sleep staging. NPJ Digit. Med. 4, 72 (2021)."),[9](#ref-CR9 "Koscova, Z. et al. From sleep patterns to heart rhythm: predicting atrial fibrillation from overnight polysomnograms. J. Electrocardiol. 86, 153759 (2024)."),[10](#ref-CR10 "Stephansen, J. B. et al. Neural network analysis of sleep stages enables efficient diagnosis of narcolepsy. Nat. Commun. 9, 5229 (2018)."),[11](/articles/s41591-025-04133-4#ref-CR11 "Thapa, R. et al. SleepFM: multi-modal representation learning for sleep across brain activity, ECG and respiratory signals. Proc. Mach. Learning Res. 235, 48019–48037 (2024)."). Manual annotations are time consuming and prone to inter-rater variability, making scaling difficult. Moreover, existing models lack flexibility across recording environments, generalize poorly across cohorts and often fail to exploit the richness of multimodal sleep signals. There remains a need for robust, generalizable architectures and systematic evaluation of sleep’s predictive value across a broad range of health conditions.

Foundation models have emerged as a transformative approach in machine learning, enabling robust representation learning from large-scale, unlabeled data[12](/articles/s41591-025-04133-4#ref-CR12 "Bommasani, R. et al. On the opportunities and risks of foundation models. Preprint at 
                https://arxiv.org/abs/2108.07258v3
                
               (2021)."). By leveraging self-supervised learning, these models can be fine-tuned efficiently for diverse applications. In biomedicine, foundation models have demonstrated remarkable capabilities in analyzing complex, heterogeneous datasets, driving advances in disease prediction, patient stratification and therapeutic discovery[13](/articles/s41591-025-04133-4#ref-CR13 "Saab, K. et al. Capabilities of Gemini models in medicine. Preprint at 
                https://arxiv.org/abs/2404.18416v2
                
               (2024)."),[14](/articles/s41591-025-04133-4#ref-CR14 "Zhao, T. et al. A foundation model for joint segmentation, detection and recognition of biomedical objects across nine modalities. Nat. Methods 22, 166–176 (2025)."). Their ability to extract meaningful patterns from large-scale data has addressed many challenges associated with the diverse and high-dimensional nature of clinical datasets.

Despite these successes, their application to sleep remains limited. Sleep data, particularly from PSG, presents unique challenges due to its complexity and variability, including differences in the number and types of recording channel across clinical cohorts. Most sleep studies have focused narrowly on sleep-specific outcomes, constraining the broader potential of foundation models for disease prediction. In preliminary work, we explored self-supervised learning on PSG data in a smaller cohort of participants[11](/articles/s41591-025-04133-4#ref-CR11 "Thapa, R. et al. SleepFM: multi-modal representation learning for sleep across brain activity, ECG and respiratory signals. Proc. Mach. Learning Res. 235, 48019–48037 (2024)."). Although this effort highlighted the potential of foundation models for analyzing sleep data, it targeted primarily sleep-specific outcomes and lacked the flexibility to accommodate the diverse configurations of PSG recordings. These limitations emphasize the need for models that can generalize across heterogeneous datasets and systematically uncover the role of sleep in predicting a wider range of diseases.

In this paper we present SleepFM, a foundation model trained on over 585,000 h of PSG data from 65,000+ participants. SleepFM captures the diverse information present in multimodal sleep recordings—integrating EEG, ECG, EMG and respiratory signals. Its channel-agnostic architecture enables joint learning across several modalities, producing representations that generalize across environments. We also introduce a new leave-one-out (LOO) contrastive learning (CL) (LOO-CL) algorithm that aligns information across modalities during pretraining while remaining resilient to missing or heterogeneous channels during inference. Our model uses 5–25 times more data than previously trained supervised sleep[3](/articles/s41591-025-04133-4#ref-CR3 "Brink-Kjaer, A. et al. Age estimation from sleep studies using deep learning predicts life expectancy. NPJ Digit. Med. 5, 103 (2022)."),[7](/articles/s41591-025-04133-4#ref-CR7 "Perslev, M. et al. U-sleep: resilient high-frequency sleep staging. NPJ Digit. Med. 4, 72 (2021)."),[9](/articles/s41591-025-04133-4#ref-CR9 "Koscova, Z. et al. From sleep patterns to heart rhythm: predicting atrial fibrillation from overnight polysomnograms. J. Electrocardiol. 86, 153759 (2024)."),[10](/articles/s41591-025-04133-4#ref-CR10 "Stephansen, J. B. et al. Neural network analysis of sleep stages enables efficient diagnosis of narcolepsy. Nat. Commun. 9, 5229 (2018).") or biosignal models[15](/articles/s41591-025-04133-4#ref-CR15 "Zhang, S. et al. ECGFM: a foundation model for ecg analysis trained on a multi-center million-ECG dataset. Inform. Fusion 124, 103363 (2025)."),[16](/articles/s41591-025-04133-4#ref-CR16 "Cui, W. et al. Neuro-GPT: towards a foundation model for EEG. In Proc 2024 IEEE International Symposium on Biomedical Imaging (ISBI) 1–5 (IEEE, 2024).").

Inspired by phenome-wide association studies (PheWAS)[17](/articles/s41591-025-04133-4#ref-CR17 "Pendergrass, S. A. et al. The use of phenome-wide association studies (PheWAS) for exploration of novel genotype-phenotype relationships and pleiotropy discovery. Genet. Epidemiol. 35, 410–422 (2011)."), we examined whether sleep characteristics, as captured by SleepFM, can predict the onset of a wide range of diseases. Leveraging electronic health record (EHR) disease codes, we develop a framework to systematically explore predictive associations between multimodal sleep and diverse health conditions.

## Dataset and SleepFM architecture

We describe our dataset and training procedures in detail in [Methods](/articles/s41591-025-04133-4#Sec8). Briefly, we used PSG data from four primary cohorts: Stanford Sleep Clinic (SSC)[11](/articles/s41591-025-04133-4#ref-CR11 "Thapa, R. et al. SleepFM: multi-modal representation learning for sleep across brain activity, ECG and respiratory signals. Proc. Mach. Learning Res. 235, 48019–48037 (2024)."), BioSerenity[18](/articles/s41591-025-04133-4#ref-CR18 "Hanif, U. et al. Automatic detection of chronic insomnia from polysomnographic and clinical variables using machine learning. In Proc 2023 45th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC) 1–5 (IEEE, 2023)."),[19](/articles/s41591-025-04133-4#ref-CR19 "Hanif, U. et al. Associations between self-reported parasomnias and psychiatric illness in 370,000 patients with sleep disorders. Psychiatr. Clin. Neurosci. 78, 667–677 (2024)."), the Multi-Ethnic Study of Atherosclerosis (MESA)[20](/articles/s41591-025-04133-4#ref-CR20 "Zhang, Guo-Qiang et al. The National Sleep Research resource: towards a sleep data commons. J. Am. Med. Inform. Assoc. 25, 1351–1358 (2018)."),[21](/articles/s41591-025-04133-4#ref-CR21 "Chen, X. et al. Racial/ethnic differences in sleep disturbances: the multi-ethnic study of atherosclerosis (MESA). Sleep 38, 877–888 (2015).") and the Outcomes of Sleep Disorders in Older Men (MrOS)[20](/articles/s41591-025-04133-4#ref-CR20 "Zhang, Guo-Qiang et al. The National Sleep Research resource: towards a sleep data commons. J. Am. Med. Inform. Assoc. 25, 1351–1358 (2018)."),[22](/articles/s41591-025-04133-4#ref-CR22 "Blackwell, T. et al. Associations between sleep architecture and sleep-disordered breathing and cognition in older community-dwelling men: the osteoporotic fractures in men sleep study. J. Am. Geriatr. Soc. 59, 2217–2225 (2011)."). SSC includes 35,052 studies from participants aged 1–100 years; BioSerenity adds 18,900 studi

[... truncated ...]