---
title: "SmarterDx - Smarter by Design"
source: "https://www.smarterdx.com/smarter-by-design"
author:
published:
created: 2025-12-17
description: "Learn how SmarterDx built  clinical AI for the complexity of healthcare, delivering unmatched accuracy, reliability, and scale."
tags:
  - "clippings"
---
[SmarterDx is now proudly part of Smarter Technologies](https://www.smarter-technologies.com/)

[

LEARN MORE

](https://www.smarter-technologies.com/)

[![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6861675d494fb5b58b72d857_SDx-Step1.svg)](https://www.smarterdx.com/#intro) [![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6861675d494fb5b58b72d855_SDx-Step2.svg)](https://www.smarterdx.com/#step-one) [![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6861675d494fb5b58b72d854_SDx-Step3.svg)](https://www.smarterdx.com/#step-two) [![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6861675d494fb5b58b72d856_SDx-Step4.svg)](https://www.smarterdx.com/#step-three) [![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/667f4e6469cd32468ceff6e9_SDx-Webflip.svg)](https://www.smarterdx.com/#step-four)

## Smarter by Design

How SmarterDx engineered clinical AI for the complexity of healthcare

## AI is everywhere — but in healthcare, it often overpromises and underdelivers.

SmarterDx charts a different path: building clinical AI designed for the realities of healthcare data, delivering unmatched accuracy, reliability, and scale.

 <video xmlns="http://www.w3.org/1999/xhtml"><source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F6861730275a1fd1bc14221d2_SDx-WhitePaper-Dashboard-transcode.mp4"> <source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F6861730275a1fd1bc14221d2_SDx-WhitePaper-Dashboard-transcode.webm"></video>

## 00.Introduction

## Artificial intelligence (AI) for the masses is here, and the general availability of AI platforms and engines has a myriad of companies in healthcare claiming they’re “AI-powered.”

But if you simply plug in an off-the-shelf AI model trained on online blogs and forums versus electronic health record (EHR) data to claim an AI-powered product, the wheels quickly fall off. Healthcare data is notoriously challenging, and these universal models aren’t built for that environment.  
  
It’s so challenging because the documentation of care is often dense, incomplete, and ambiguous. Finding the relevant and important information in notes, lab results, orders, and treatment plans means separating signal from noise with a specific goal in mind. It requires a combination of experience, knowledge, and technical competence that readily available AI models can’t replicate.  
  
If AI misses any context somewhere within the tens of thousands of data points in the patient's medical record, recommendation quality deteriorates and trust quickly breaks down. From day one, our physician-data scientist co-founders, Michael Gao, MD, and Joshua Geleris, MD, sought a different approach. Combining clinical experts who are familiar with the front lines and back office of patient care with a specialized team of in-house data scientists and AI experts, we’ve developed AI models specifically attuned to the complexities of real-world healthcare data and operations.  
  
Today, our AI-driven solutions help more than 50 health systems and hundreds of hospitals nationwide unlock concrete improvements in revenue integrity and clinical quality. Our growth is no accident: We went from seed to hyperscale in just a few years thanks to our differentiated AI. This white paper will unpack how we did it, and explain why deep clinical expertise remains vital. After all, healthcare doesn’t need more buzzwords — it needs AI that works.

## The problem with healthcare data

No two physicians are the same, and neither are their notes. Layer on the high volume of patients, limited time for documentation, and the diverse types of data generated during a single encounter — from notes and labs to orders and imaging — and it becomes clear why healthcare data poses a major challenge for AI models not purpose-built for this environment. Plus, physicians are focused on writing with patient care in mind, not revenue cycle impact.

Consider this note written by a physician:

“The patient was admitted with progressive SOB and was found to be hypoxic on room air. On examination, breath sounds were diminished bilaterally with scattered crackles at the bases. A chest X-ray revealed bilateral infiltrates, and supplemental oxygen was initiated via nasal cannula. Labs and cultures were drawn, and empiric antibiotics were started while we awaited further diagnostic workup. I spent time at the bedside explaining the plan to the patient and their family, ensuring they understood the likely infectious etiology and the importance of close monitoring. Over the next 24 hours, the patient’s oxygen requirements stabilized, and they reported feeling slightly more comfortable. We will continue supportive care and reassess in the morning for possible de-escalation of therapy.”

 <video xmlns="http://www.w3.org/1999/xhtml"><source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F6861895bed583eb0125e1539_A_doctor_working_202506291343_neyaq-transcode.mp4"> <source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F6861895bed583eb0125e1539_A_doctor_working_202506291343_neyaq-transcode.webm"></video>

This physician note both reveals and obscures important information in the case. It reveals the primary complaint, the diagnostic findings, initial treatment, and communication with family. But it lacks a specific diagnosis, vital signs, and other objective data — mostly offering only vague descriptions.  
  
Finding and understanding the most relevant information in notes, lab results, orders, and treatment plans requires a combination of experience, knowledge, and clinical competence. It’s a great illustration of why Big Tech applications in healthcare have largely failed: They’re used to abundant, standardized user data. In healthcare, just getting data from health systems is incredibly challenging. Getting clean and usable data is the mountain you have to climb before you can even begin to train algorithms.

Advanced clinical AI can effectively marry clinical documentation with the correct billing documentation. While physicians may not focus on billing when they’re writing notes, advanced clinical AI can help bridge the gaps. And it starts with better data.

 <video xmlns="http://www.w3.org/1999/xhtml"><source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F6861915a48c87b41d7e44029_SDx-CubeV2-transcode.mp4"> <source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F6861915a48c87b41d7e44029_SDx-CubeV2-transcode.webm"></video>

## Gold standard labels curated by expert annotators enable superior performance on the most complex clinical cases

 <video xmlns="http://www.w3.org/1999/xhtml"><source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F686293e4be560b7873638b9a_A_simple_dot_202506300840_grnsq-transcode.mp4"> <source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F686293e4be560b7873638b9a_A_simple_dot_202506300840_grnsq-transcode.webm"></video>

## SmarterDx has analyzed and standardized millions of clinical records

Healthcare data is messy. While clean, structured datasets may be the norm in other industries, clinical data is complex and fragmented. Much of the clinical context is buried in free-text physician notes and riddled with inconsistencies. This complexity has tripped up even the most sophisticated tech companies, many of which underestimated the scale of the challenge. Success in this space requires not just access to data, but also the infrastructure, expertise, and clinical context to make it usable.   
  
As of July 2025, SmarterDx has analyzed EHR data for over 4.9 million hospitalizations labeled with 56.9M diagnosis codes. At our current pace, we analyze an entire MIMIC IV’s worth of hospital data every two months (or about ~546K patient encounters), and the rate at which we are analyzing and standardizing data is only accelerating.

Clinical record collection by SmarterDx

![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/686196fdb8a28c532bceaee7_38afe01040f34f2b9f9f359ed608abd4_BENTO%201.png) ![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/686196fde13b2d827e31e5e1_9bf498fca71eb4dd720bf48e26a05790_BENTO%203.png) ![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/686196fdf9c24599bcbd1fbb_e1db192e038a01ba9c1056528512d80c_BENTO%202.png)

## SmarterDx machine learning models designed for EHRs

## With large datasets come best-in-class models

More data yields better models. Access to analyze millions of hospital visits and over 40 million diagnosis labels has enabled SmarterDx to train deep learning models tailor-made for clinical revenue cycle management (RCM) that achieve state-of-the-art performance in automated medical coding. Unlike previous approaches, our automated coding models are designed to ingest the entire patient visit, giving special attention to those clinical events that are relevant to each diagnosis and procedure code, and surfacing the evidence needed to understand and explain the models’ predictions. Our models achieve classification performance (micro-AUROC) of 99.4, outpacing previous best-in-class performance (99.2) reported on the MIMIC-III ICD-10 medical coding dataset. This performance improvement corresponds to a 25% reduction in errors, which translates into significantly better coding accuracy at scale.

![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6866cb00a2f0a8e0f5ec8c5c_62c02b77f5666c559f56ad52c2a9a5a2_SDx-MachineLearning.png) ![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6862bc3d49ef56e434ca12ba_e56db70949efb973b8186c23bc751060_SDx-CumulativeHospitalVisit-Chart.avif)

## Classifying clinically complex cases remains a challenge

SmarterDx offers SmarterPrebill™, a product focused on accurately flagging coding errors (both missed coding opportunities and inappropriate codes) to help hospitals be fully reimbursed for the care they provide and better represent care quality metrics. Often, these kinds of recommendations involve clinically complex cases, which make up a subset of the overall population.  
  
While state-of-the-art automated medical coding machine learning solutions perform well when evaluated over the full population of hospital visits, we see performance drop when applied to these complex scenarios. The same SmarterDx model that achieves 99.4% micro AUROC overall performs 18% worse on clinically complex cases, the very cases SmarterPrebill is designed to address. At SmarterDx, we close this gap by fine-tuning our classification models using expert-delivered, gold standard labels on our most clinically complex population, boosting model performance where it counts.

## Gold standard expert-derived labels improve classification on complex cases

Amassing a dataset of expertly annotated labels is no easy task, and one most organizations haven’t invested in. SmarterDx built this capability in-house by recruiting an expertly trained clinical operations team — dedicated to the task of deriving gold standard labels in cases where it's hardest to determine the right diagnosis.  
  
To date, their efforts have produced more than 3 million gold standard labels spanning nearly 4,000 distinct clinical diagnoses. With proprietary labeling software, we have streamlined this team’s ability to produce high-quality annotations that our models use as additional training data. When we fine-tuned classification models on these expertly derived labels, we saw a major improvement on the most complex cases — jumping from 81% to 92% AUROC.

![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6862dbe18f394c54998a8efd_b56cc1ee003d67f3fe4c58c769ccd418_SDx-Chart-ExpertAnnotation.avif)

## Building AI that understands clinical reasoning doesn’t happen overnight — it requires the right data and the right approach.

![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6862e9fc6003c768f8457b07_SDx-Process-Chart.avif)

## A healthcare company and an artificial intelligence company

Many AI-for-RCM companies are built either by technologists with limited clinical experience or clinicians with limited AI experience. SmarterDx is different. Our founding team are physician-data scientists, receiving formal training in both medicine and mathematics. As a hospitalist and director of applied AI at New York-Presbyterian, our CEO Michael Gao, MD, led hospital-wide initiatives to transform care with AI. That rare combination of both deep clinical and technical fluency is instilled in everything we do at SmarterDx. It’s not just our foundation — it’s what enables us to tackle some of the hardest problems in revenue cycle management with the accuracy, nuance, and reliability that real-world hospital settings demand, and underpins the success we’ve had.

## Training our AI to reason clinically like physicians

While troves of proprietary healthcare data have helped us develop state-of-the-art AI models for revenue cycle management, the field of artificial intelligence more broadly has similarly been exploding; Large Language Models (LLMs) trained at internet scale exhibit remarkable reasoning capabilities. At SmarterDx, we’ve been both rapid and rigorous in our approach towards incorporating LLM advancements into our own AI models’ capabilities. This has allowed us to significantly broaden the scope and impact of our proprietary AI to use cases beyond just automated coding.  
  
Large language models (LLMs) offered by leading technology companies have often been trained on Reddit and internet blogs — not on EHR data. So it should not come as any surprise that these out-of-the-box LLMs perform sub-optimally on tasks that require clinical reasoning. Hospital clinicians and coding and billing specialists went through years of specialized training to perform well in their jobs; why should you expect anything different from your artificial intelligence-based tools? At SmarterDx, our models are trained on data that looks like your data: We harness the power of generalist pre-trained foundation models, but we also leverage our deep clinical expertise to imbue these models with the kinds of reasoning and guardrails that hospitals would expect of their own clinical workforce. By leveraging the strengths derived from LLM pre-training at scale, and fine-tuning on relevant clinical data, our AI can generate patient summaries and appeal letters that don’t just sound good, but are also clinically accurate.

## Beyond the discharge summary

## Most coding and billing workflows rely heavily on discharge summaries to capture diagnoses and generate claims. While discharge summaries are essential, they are not the full patient story.

They often miss the depth and breadth of clinical data contained in other parts of the chart — progress notes, consult notes, lab results, radiology findings, and more. This information can be scattered, unstructured, or hidden in free-text fields that require careful review and interpretation to unlock their full value. In fact, our analyses show that using just discharge summaries alone can miss 25% of the diagnosis recommendations SmarterDx makes.  
  
Unlocking value beyond the discharge summary presents unique challenges. With each patient hospitalization generating 150K data points, parsing mountains of clinical documents can be tedious for human reviewers, and non-specialized AI solutions may struggle to contextualize or prioritize these data points. It requires AI that can emulate the way physicians are trained to think and reason. At SmarterDx, our models are built with both advanced language processing and expert clinical reasoning to identify what matters most outside the discharge summary. We also know how crucial it is to present this information in a way that complements the clinical reasoning process — surfacing the right facts, diagnoses, and documentation gaps at exactly the right time. By going beyond discharge summaries and integrating a clinician’s perspective into every aspect of our technology, we help healthcare organizations confidently close coding gaps and ensure more accurate recommendations.

## High coverage and significant depth

SmarterDx’s groundbreaking clinical AI platform uses advanced natural language processing and machine learning to thoroughly analyze every patient chart at both high coverage and significant depth. Unlike traditional software tools that can review many charts but lack the robust ability to delve into complex clinical details, and unlike humans who can only focus on a few charts at a time (though with great attention to detail), SmarterDx unites the best of both worlds. By achieving full-spectrum chart coverage and delivering in-depth clinical insights, SmarterDx helps healthcare organizations uncover diagnostic gaps, enhance documentation accuracy, and optimize financial performance — all while upholding the highest clinical standards.

## A reliable and transparent AI partner

SmarterDx supercharges RCM workflows by augmenting – not replacing – humans. With SmarterPrebill, every recommendation we make is coupled with a display and rationale designed to augment and accelerate your clinical decision making process. With our SmarterDenials™ solution, we provide the scaffolding and linked evidence to cut down the time spent on appeals from several hours per letter to just minutes. Our partners can still dig through the EHR if they want to, but we provide contextualized evidence based on the task and user questions. Our AI works harder so our clients' clinical and billing teams can work smarter.

![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6862f291d1b2819f62c040a3_Medical%20Checkup-14.svg) ![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6862f291e809905e806f4501_Medical%20Checkup-12.svg) ![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6862f2913097f5b87a8bd015_Medical%20Checkup-08.svg) ![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6862f2917ca93317e6387484_Medical%20Checkup-07.svg) <video xmlns="http://www.w3.org/1999/xhtml"><source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F6862f6972a316af79373510f_Energy_glow_pulsing_202506301541_9op8k-transcode.mp4"> <source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F6862f6972a316af79373510f_Energy_glow_pulsing_202506301541_9op8k-transcode.webm"></video>

## Language models and structured data

Language models are powerful and efficient tools for extracting information from and reasoning over unstructured data, such as physician notes. At SmarterDx, we’ve found significant value in integrating them alongside other models in our broader clinical AI system. However, like any model, they have some limitations — particularly around how they process structured data such as vitals, lab results, and billing codes.  
  
A key capability we've developed at SmarterDx is the ability to seamlessly integrate structured and unstructured data within a single system. This hybrid AI architecture combines the language understanding strengths of language models with models purpose-built to handle structured clinical indicators — yielding significantly stronger results than either could achieve alone.

## We designed a simple test to illustrate the potential limitations of language models with respect to structured data.

Using a sample of 100 blood glucose readings from a study on continuous glucose monitoring, we prompted seven language models to count how many times the level exceeded 130 mg/dL.  
  
While LLMs may sometimes get these kinds of things right, simple counts on structured glucose recordings are accurate 100% of the time. By leveraging dedicated AI models designed for structured clinical data, we can ensure far greater reliability in processing.  
  
Incorporating structured data into AI model recommendations additionally offers deeper clinical insight. Information that is captured in structured data may not have been explicitly included in a physician's notes, and vice versa. Using a hybrid approach allows us to bridge these gaps and capture a more accurate and complete picture of the patient journey.

![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/6862fa199c581aaee060e5a1_0ed8fc9501fdddcac84b889175858e34_SDx-ModelPerformance-Chart.avif)

## Information overlap

When you're relying only on what’s written in the physician's note, important diagnoses can slip through the cracks — even the straightforward ones. Take type 2 myocardial infarction (MI). Clinically, it depends on elevated troponin levels. But at some hospitals, 16% of visits coded with type 2 MI don’t mention troponin at all in the documentation. That’s not because the data isn’t there — it usually is. In fact, only 4% of those same visits are missing troponin levels in the structured data.  
  
And the gap only gets wider with more complex conditions. Diagnosing certain types of sepsis requires identifying increases in at least two out of four vital signs: heart rate, white blood cell count, respiratory rate, and temperature. But in one health system, 40% of the notes fail to mention more than one of these. Meanwhile, structured data is nearly always complete — missing in less than 1% of cases.  
  
Even when vital signs are mentioned in the notes, they're not always reliable. They can be vague, buried in narrative, or open to interpretation — leading to time-consuming back-and-forth between coding teams and physicians. But when we bring in structured data early, we cut through the ambiguity. We make it easier to code accurately, faster.

 <video xmlns="http://www.w3.org/1999/xhtml"><source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F6862feb480277571a7b2376b_Data_is_being_202506301615_l8hb3-transcode.mp4"> <source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F6862feb480277571a7b2376b_Data_is_being_202506301615_l8hb3-transcode.webm"></video>

## Multimodal models

Multimodal models, which integrate both structured and unstructured data, offer a powerful way to leverage the strengths of each data type. SmarterDx leverages multimodal models that incorporate time series information and notes from EHR data to help make solutions more robust to these kinds of errors, while remaining cost efficient to run at scale. A multimodal approach can more effectively handle the complexity of EHR data and interacting data types.  
  
Patient journeys are increasingly complex, and clinical documentation and coding teams have the difficult task of synthesizing many disparate sources of information to provide accurate codes. The best modeling solutions will need to do a similar synthesis to effectively tell a patient’s story. Using all types of information will ultimately lead to more accurate codes, clearer understanding of each patient’s journey, and fewer missed opportunities.

## The best modeling solutions will need to do a similar synthesis to effectively tell a patient’s story. Using all types of information will ultimately lead to more accurate codes, clearer understanding of each patient’s journey, and fewer missed opportunities.

## CONCLUSION

## Building AI that understands clinical reasoning doesn’t happen overnight — it requires the right data and the right approach.

To build our proprietary platform, we’ve created a massive and ever-growing base of expertly labeled healthcare data; models fine-tuned for clinical complexity; agentic AI workflows that reflect how doctors actually think; and a hybrid modeling approach that combines unstructured text and structured signals for maximum fidelity.  
  
This foundation is the reason our solutions are trusted by 50+ health systems and 200+ hospital sites in the U.S. and counting, and it’s a privilege we don’t take for granted. Instead, we use that trust to continue to make our AI models better. Daily feedback from hospital coding and billing teams trains our models and informs our product roadmap. With care only getting more complex, we know that our clients will continue to need what our AI does so well. While technologies at the point of care (like ambient AI) solve “poverty of documentation," they don’t solve the accuracy of the complete clinical picture. That's why our clinical AI is so important.

 <video xmlns="http://www.w3.org/1999/xhtml"><source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F686301c59062a77ccfba1ccb_SDx-50-transcode.mp4"> <source src="https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa%2F686301c59062a77ccfba1ccb_SDx-50-transcode.webm"></video>

## Since our founding in 2020, we have helped our hospital and health system clients recover hundreds of millions in revenue that would otherwise be left on the table. Those dollars help health systems invest in advancing care for patients and communities.

## With the support of New Mountain Capital and the creation of Smarter Technologies,

we’re doubling down on our mission. We're now positioned to deliver more tailored solutions across the revenue cycle, meeting each health system where they are — no matter the scale or complexity. Our goal is to strengthen the financial health of our health system clients and help them sustain their missions well into the future.

![](https://cdn.prod.website-files.com/667d80f0eb58e0e9c52a2dfa/68630365e9aa87a1dcbfe72a_SDx-Logo.avif)

Our co-founders — healthcare providers themselves — built SmarterDx to solve the real-world challenges they faced every day in hospitals. We exist to serve the clinical and operational teams who power those hospitals — and we believe they deserve AI that actually works.

## Not generic tools, but purpose-built, clinical AI that’s high-performing, trustworthy, and designed to optimize the way they work. Because when the technology understands the complexity of healthcare, it can finally deliver on its promise.

## Authored by:

Conor Corbin, PhD, Machine Learning Research Science Manager  
Scott Fleming, PhD, Machine Learning Research Science Manager  
Joshua Geleris, MD, Co-founder, Chief Product Officer  
Larry Kalesinskas, PhD, Senior Data Scientist  
Marie Klosterman, Data Science Senior Manager  
Gautam Machiraju, PhD, Machine Learning Research Scientist  
Supreeth Shashikumar, PhD, Machine Learning Research Scientist  
Jeni Stiso, PhD, Machine Learning Research Scientist  
Jonathan Wald, MD, MPH, Solutions Architect  
Sam Wilkinson, Staff Data Scientist

## SmarterPrebill is clinical AI that helps CDI teams review 100% of patient charts to fully capture the value of the care delivered — both quality and revenue. Even with other technology and/or services in place, SmarterDx has been able to find an average of $2.5M in realized net new revenue per 10,000 annual discharges for its hospital and health system clients.

[Discover SmarterPrebill](https://www.smarterdx.com/smarterprebill)