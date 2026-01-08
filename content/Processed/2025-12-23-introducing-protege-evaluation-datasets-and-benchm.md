---
url: https://withprotege.substack.com/p/introducing-protege-evaluation-datasets?triedRedirect=true
title: "Introducing Protege Evaluation Datasets and Benchmarks for Healthcare AI"
clipped: 2025-12-23 13:01
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Introducing Protege Evaluation Datasets and Benchmarks for Healthcare AI

> Source: [https://withprotege.substack.com/p/introducing-protege-evaluation-datasets?triedRedirect=true](https://withprotege.substack.com/p/introducing-protege-evaluation-datasets?triedRedirect=true)

# Introducing Protege Evaluation Datasets and Benchmarks for Healthcare AI

### Real world datasets that match true patient journeys for unbiased healthcare AI model evaluation

Oct 23, 2025

10

3

3

Share

[![](https://substackcdn.com/image/fetch/$s_!cEKa!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed312e8d-a958-43ba-8c8c-8141edae90e1_1600x900.png)](https://substackcdn.com/image/fetch/$s_!cEKa!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed312e8d-a958-43ba-8c8c-8141edae90e1_1600x900.png)

Robust healthcare AI evaluations require **benchmark-specific real world data** that **does not overlap with training data**, while also **reflecting the full multimodal patient journey**. Current available healthcare AI evaluations and benchmarks have lacked both, resulting in a gap in healthcare model evaluation.

To address this growing need, the Protege Data Lab has curated healthcare datasets that are tailor-made for evaluation and benchmarks alone in dermatology, nurse narratives with triage, multimodal oncology cases, and cardiology and oncology diagnostics. Immediate applications of these new datasets range from improving Gen AI multi-modal reasoning for healthcare scenarios to FDA clinical diagnostics (SAMD).

***Protege’s initial evaluation dataset products are immediately ready for commercial healthcare AI evaluation and benchmark use cases.***

***In addition, the Protege Data Lab invites partners to propose additional evaluations and benchmarks to co-develop using Protege’s unique, multi-modal data assets.***

Our team will also be publishing more in-depth technical details about our evaluation datasets on Arxiv in the coming days.

***Subscribe to stay up to date with future Protege releases:***

## The Importance of Benchmark-specific and Multi-modal Data

Despite major advances in healthcare AI, credible benchmarks for evaluating healthcare AI are not yet keeping pace. The Protege Data Lab is excited to announce the release of seven healthcare datasets that are specifically tailored for evaluation and benchmark use.

We see this as a clear step forward in supporting the development of Gen AI models for healthcare, for three key reasons:

1. **Data Readiness**: Protege’s evaluation and benchmark data does not overlap from training datasets
2. **Data Robustness**: Protege’s data more accurately reflects the patient journey, where different forms of data are collected across multiple modalities across time (ie. EHR, imaging, patient portal messages)
3. **Data Realism**: Data reflects actual, real world patient cases, rather than synthetic or manufactured data

On **Data Readiness** — healthcare AI models are trained on different data sources with the goal of improving the accuracy of their responses, as compared to a human counterpart (such as a nurse or credentialed medical doctor). Massive amounts of healthcare data have been used to train these AI models.

Evaluating how well the models are performing requires more than just more data. They require data that hasn’t already been used in training.

However, evaluating how well the models are performing requires more than just more data. They require evaluations and benchmarks that have not already been used as training data. Like a student taking an exam, if the model has already seen the test questions while practicing (ie. in the training data), then these test questions are not a fair evaluation of performance.

The Protege Data Lab found four key criteria for benchmark-specific healthcare datasets:

* *Internally Valid*: The assessment itself does not contain biased data - particularly the bias is not linked to the evaluation result.
* *Externally Valid*: The data reflects the actual sequence, complexity, and entropy seen in these tasks in the real world.
* *Uncontaminated*: The data is independent of the training data.
* *Sufficient Sample Size*: The data volume is large enough.

There are over 800 publicly available healthcare benchmarks on Hugging Face and other sources that have published papers describing the benchmark construction (and many more without any documentation). However, the Protege Data Lab found that under five percent meet transparency and high-fidelity criteria, along with clear publication references, sample size transparency, and requisite data documentation.

This immediately makes it difficult to determine whether these benchmarks are fair measurements of healthcare AI model performance.

On **Data Robustness** — even if a dataset meets all four key criteria above, the data may not reflect real world contexts where the AI model is being tested for. In particular, many patient contexts are multimodal; for example, a doctor may consult notes, imaging studies in multiple formats, patient portal messages, and other structured health data to evaluate a single cancer patient.

The Protege Data Lab found that less than 10% of all publicly available healthcare benchmarks are multimodal.

If the medical provider only had one of these, they would have an incomplete picture, and the same is true for evaluating any healthcare AI model for clinical diagnostics and support. Even so, the Protege Data Lab found that less than 10% of all healthcare benchmarks are multimodal, such as combining notes, imaging, and structured health data.

This number is slowly increasing, but Protege Data Lab research shows that the growth has largely plateaued since 2023. Even more concerning is that many datasets also reuse overlapping internet data or language-translated versions of the same datasets, which violates the key Data Cleanliness criteria noted early.

On **Data Realism** — other fields of research have attempted to fill the gap in clean, robust evaluation data by creating synthetic datasets and/or manufactured data that simulates patient situations (vignettes). This approach assumes that model builders can create artificial (synthetic) data that mirrors real world patient journeys that are not in the training data, and/or medical professionals can write simulated patient narratives (manufactured data) that mirror actual cases that are not in the training data.

Actual patient journeys are distributed and exhibit a randomness that is not easily replicable without real world data.

However, specialized healthcare use cases and evaluation for AI require more than advanced degree holders writing mock test questions and answering them, or an AI model creating mock patient journeys based on data it already has. Patients in the real world do not present as neatly curated vignettes or fully elaborated New England Journal of Medicine (NEJM) cases. To be truly valid for healthcare evaluation and benchmarking, the evaluation data must reflect actual patient journeys and outcomes — which is where synthetic and manufactured data falls short for healthcare evaluations and benchmarks.

In particular, synthetic and manufactured data fail to reflect the frequency, complexity, and findings of real world cases for healthcare-specific use. This “artificial” data would not accurately reflect actual patient scenarios and provide an either oversimplified or incomplete picture of each patient and their clinical outcomes. As opposed to simulated math fluency or language skills for AI evaluation, actual patient journeys are distributed and exhibit a randomness that is not easily replicable without real world data.

In summary, if healthcare AI builders do not have unbiased, real world data that represents the broader patient journey, then there is no way to correctly evaluate how well the models are performing in the actual, real world scenarios where they will be used. The model could score extremely well in non-representative situations presented by the data being used for the evaluation, and then fail in real world settings.

## The Link Between Healthcare Data and AI Models

Protege sits at the intersection between healthcare data providers and healthcare AI model builders. Initially, this allowed us to become the single source of truth for healthcare pre-training, post-training, and fine-tuning datasets. Increasingly, AI model builders have worked with the Protege Data Lab for their evaluation and benchmark data needs.

Protege unites disjointed data sources together to provide the full patient picture across different data formats and time.

Healthcare data sits in many locations, and no single provider holds everything from EMR data to EHR data to DICOM studies to pathology slides to patient portal messages combined with a patient population that accurately reflects the broader public and data expertise specific to AI training and model evaluation. Protege unites these disjointed data sources together to provide the full patient picture across the different data formats and across time.

AI model builders continue to seek these data sources for training and evaluating their AI models for healthcare use cases. Protege provides the data from a single source while maintaining data rights ownership for healthcare data providers.

We look forward to contributing additional evaluation datasets and benchmarks as the use cases continue to evolve. Alongside this initial evaluation datasets and benchmarks release, the Protege Data Lab continues to partner and develop novel benchmark and evaluation methods by leveraging Protege’s access to multi-modal and de-identified healthcare data alongside both academic and industry leaders in this space.

## Protege’s Datasets for Benchmarks & Evaluations

The Protege Data Lab created this initial slate of datasets for evaluation and benchmarks for tailored use cases based on gaps that we, our partners, and our customers have observed in the ecosystem.

### Clinical Diagnostic Evaluations

Protege’s initial evaluation datasets cover use cases in **Clinical Oncology (simple)**, **Clinical Oncology (complex)**, **Early Lung Cancer Detection**, **Breast Cancer Prognosis**, and **Cardiac Event Prediction**.

[![](https://substackcdn.com/image/fetch/$s_!A8Fc!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9e41450b-3ed8-4cdd-a596-d9eb273b63eb_1920x1300.png)](https://substackcdn.com/image/fetch/$s_!A8Fc!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9e41450b-3ed8-4cdd-a596-d9eb273b63eb_1920x1300.png)

### Clinical Support and Triage Benchmarks

Protege’s initial suite of clinical support and triage dataset products cover use cases in **Nurse Narratives & Triage** and **Dermatology Triage via Patient Portal Messaging**.

> ***Protege Data Lab note**: These use cases require benchmarks that involve more complex rubrics for evaluating model effectiveness beyond basic measures such as accuracy, precision, recall, etc. Protege looks to experts and partners to help development of these benchmarks, to ensure creation of the best gold standard answers and rubrics.*

[![](https://substackcdn.com/image/fetch/$s_!xvDc!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbc961a2b-d73b-458b-9d7b-ae91d205d050_1920x550.png)](https://substackcdn.com/image/fetch/$s_!xvDc!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbc961a2b-d73b-458b-9d7b-ae91d205d050_1920x550.png)

The Protege team works closely with AI organizations looking to correctly apply these evaluations and benchmarks for their specific testing needs.

### Partner with Protege for Future Benchmark Development

The Protege Data Lab invites researchers and data partners alike to propose and co-develop new benchmarks and evaluations using Protege’s unique data assets.

While these seven evaluation datasets and benchmarks are a starting point for multiple key healthcare use cases, many more will be needed to support the accelerating growth of AI for healthcare applications.

Many of the evaluation datasets and benchmarks outlined above began as data requests from AI researchers in healthcare who found the existing options to be limited or unreliable. The Protege Data Lab invites researchers and data partners alike to propose and co-develop new benchmarks and evaluations using Protege’s unique data assets.

**Contact the Protege Data Lab team at [data@withprotege.ai](mailto:data@withprotege.ai) to partner with us for your evaluation dataset and benchmark needs.**

*Subscribe to stay in the loop on future evaluation releases*

10

3

3

Share