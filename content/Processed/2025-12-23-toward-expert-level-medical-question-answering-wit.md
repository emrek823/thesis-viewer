---
url: https://www.nature.com/articles/s41591-024-03423-7?linkId=12538109
title: "Toward expert-level medical question answering with large language models - Nature Medicine"
clipped: 2025-12-23 11:16
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Toward expert-level medical question answering with large language models - Nature Medicine

> Source: [https://www.nature.com/articles/s41591-024-03423-7?linkId=12538109](https://www.nature.com/articles/s41591-024-03423-7?linkId=12538109)

Toward expert-level medical question answering with large language models

[Download PDF](/articles/s41591-024-03423-7.pdf)

[Download PDF](/articles/s41591-024-03423-7.pdf)

### Subjects

* [Health care](/subjects/health-care)
* [Medical research](/subjects/medical-research)

## Abstract

Large language models (LLMs) have shown promise in medical question answering, with Med-PaLM being the first to exceed a ‘passing’ score in United States Medical Licensing Examination style questions. However, challenges remain in long-form medical question answering and handling real-world workflows. Here, we present Med-PaLM 2, which bridges these gaps with a combination of base LLM improvements, medical domain fine-tuning and new strategies for improving reasoning and grounding through ensemble refinement and chain of retrieval. Med-PaLM 2 scores up to 86.5% on the MedQA dataset, improving upon Med-PaLM by over 19%, and demonstrates dramatic performance increases across MedMCQA, PubMedQA and MMLU clinical topics datasets. Our detailed human evaluations framework shows that physicians prefer Med-PaLM 2 answers to those from other physicians on eight of nine clinical axes. Med-PaLM 2 also demonstrates significant improvements over its predecessor across all evaluation metrics, particularly on new adversarial datasets designed to probe LLM limitations (*P* < 0.001). In a pilot study using real-world medical questions, specialists preferred Med-PaLM 2 answers to generalist physician answers 65% of the time. While specialist answers were still preferred overall, both specialists and generalists rated Med-PaLM 2 to be as safe as physician answers, demonstrating its growing potential in real-world medical applications.

### Similar content being viewed by others

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41586-023-06291-2/MediaObjects/41586_2023_6291_Fig1_HTML.png)

### [Large language models encode clinical knowledge](https://www.nature.com/articles/s41586-023-06291-2?fromPaywallRec=false)

Article
Open access
12 July 2023

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41467-025-64142-2/MediaObjects/41467_2025_64142_Fig1_HTML.png)

### [LINS: A general medical Q&A framework for enhancing the quality and credibility of LLM-generated responses](https://www.nature.com/articles/s41467-025-64142-2?fromPaywallRec=false)

Article
Open access
13 October 2025

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41597-025-05233-z/MediaObjects/41597_2025_5233_Fig1_HTML.png)

### [A Dataset of Medical Questions Paired with Automatically Generated Answers and Evidence-supported References](https://www.nature.com/articles/s41597-025-05233-z?fromPaywallRec=false)

Article
Open access
19 June 2025

## Main

Language is at the heart of health and medicine, underpinning interactions between people and care providers. Progress in LLMs has enabled the exploration of medical domain capabilities in artificial intelligence (AI) systems that can understand and communicate using language, promising richer human–AI interaction and collaboration. In particular, these models have demonstrated impressive capabilities on multiple-choice research benchmarks[1](#ref-CR1 "Singhal, K. et al. Large language models encode clinical knowledge. Nature 620, 172–180 (2023)."),[2](#ref-CR2 "Nori, H., King, N., McKinney, S. M., Carignan, D. & Horvitz, E. Capabilities of GPT-4 on medical challenge problems. Preprint at 
                  https://arxiv.org/abs/2303.13375
                  
                 (2023)."),[3](/articles/s41591-024-03423-7#ref-CR3 "Liévin, V., Hother, C. E. & Winther, O. Can large language models reason about medical questions? Patterns 5, 100943 (2024).").

The advent of transformers[4](/articles/s41591-024-03423-7#ref-CR4 "Vaswani, A. et al. Attention is all you need. In Proc. 31st Conference on Neural Information Processing Systems (eds Guyon, I. et al.) (Curran Associates, 2017).") and LLMs[5](/articles/s41591-024-03423-7#ref-CR5 "Devlin, J., Chang, M.-W., Lee, K. & Toutanova, K. Bert: pre-training of deep bidirectional transformers for language understanding. In Proc. NAACL-HLT Vol. 1 (eds Burstein, J. et al.) 4171–4186 (Association for Computational Linguistics, 2019)."),[6](/articles/s41591-024-03423-7#ref-CR6 "Raffel, C. et al. Exploring the limits of transfer learning with a unified text-to-text transformer. J. Mach. Learn. Res. 21, 5485–5551 (2020).") has renewed interest in the possibilities of AI for medical question-answering tasks—a long-standing ‘grand challenge’[7](#ref-CR7 "Shortliffe, E. H. Computer programs to support clinical decision making. JAMA 258, 61–66 (1987)."),[8](#ref-CR8 "Schwartz, W. B. Medicine and the computer: the promise and problems of change. In Use and Impact Of Computers in Clinical Medicine (eds Anderson, J. G. & Jay, S. J.) 321–335 (Springer Science & Business Media, 1987)."),[9](/articles/s41591-024-03423-7#ref-CR9 "Szolovits, P. & Pauker, S. G. Categorical and probabilistic reasoning in medicine revisited. In Artificial Intelligence in Perspective (ed. Bobrow, D. G.) 167–180 (MIT Press, 1994)."). A majority of these approaches involve smaller language models trained using domain-specific data (BioLinkBert[10](/articles/s41591-024-03423-7#ref-CR10 "Yasunaga, M., Leskovec, J. & Liang, P. Linkbert: pretraining language models with document links. Preprint at 
                  https://arxiv.org/abs/2203.15827
                  
                 (2022)."), DRAGON[11](/articles/s41591-024-03423-7#ref-CR11 "Yasunaga, M. et al. Deep bidirectional language-knowledge graph pretraining. Adv. Neural Inf. Process. Syst. 35, 37309–37323 (2022)."), PubMedGPT[12](/articles/s41591-024-03423-7#ref-CR12 "Bolton, E. et al. Stanford CRFM introduces PubMedGPT 2.7b. Stanford University HAI 
                  https://hai.stanford.edu/news/stanford-crfm-introduces-pubmedgpt-27b
                  
                 (2022)."), PubMedBERT[13](/articles/s41591-024-03423-7#ref-CR13 "Gu, Y. et al. Domain-specific language model pretraining for biomedical natural language processing. ACM Trans. Comput. Healthc. 3, 2 (2021)."), BioGPT[14](/articles/s41591-024-03423-7#ref-CR14 "Luo, R. et al. BioGPT: generative pre-trained transformer for biomedical text generation and mining. Brief. Bioinform. 23, bbac409 (2022).")), resulting in steady improvements in performance on benchmark datasets such as MedQA (United States Medical Licensing Examination (USMLE))[15](/articles/s41591-024-03423-7#ref-CR15 "Jin, D. et al. What disease does this patient have? A large-scale open domain question answering dataset from medical exams. Appl. Sci. 11, 6421 (2021)."), MedMCQA[16](/articles/s41591-024-03423-7#ref-CR16 "Pal, A., Umapathi, L. K. & Sankarasubbu, M. MedMCQA: a large-scale multi-subject multi-choice dataset for medical domain question answering. In Proc. Conference on Health, Inference, and Learning Vol. 174 248–260 (PMLR, 2022).") and PubMedQA[17](/articles/s41591-024-03423-7#ref-CR17 "Jin, Q., Dhingra, B., Liu, Z., Cohen, W. W. & Lu, X. PubMedQA: a dataset for biomedical research question answering. Preprint at 
                  https://arxiv.org/abs/1909.06146
                  
                 (2019).").

The rise of larger general-purpose LLMs such as GPT-3 (ref. [18](/articles/s41591-024-03423-7#ref-CR18 "Brown, T. et al. Language models are few-shot learners. Adv. Neural Inf. Process. Sys. 33, 1877–1901 (2020).")) and Flan-PaLM[19](/articles/s41591-024-03423-7#ref-CR19 "Chowdhery, A. et al. PaLM: scaling language modeling with pathways. J. Mach. Lean. Res. 24, 1–113 (2023)."),[20](/articles/s41591-024-03423-7#ref-CR20 "Chung, H. W. et al. Scaling instruction-finetuned language models. J. Mach. Lean. Res. 25, 1–53 (2024).") trained on internet-scale corpora with massive computing infrastructure has seen leapfrog improvements on such benchmarks within a few months (Fig. [1](/articles/s41591-024-03423-7#Fig1)). In particular, GPT-3.5 (ref. [3](/articles/s41591-024-03423-7#ref-CR3 "Liévin, V., Hother, C. E. & Winther, O. Can large language models reason about medical questions? Patterns 5, 100943 (2024).")) reached an accuracy of 60.2% on the MedQA (USMLE) dataset, Flan-PaLM reached an accuracy of 67.6% and GPT-4-base[2](/articles/s41591-024-03423-7#ref-CR2 "Nori, H., King, N., McKinney, S. M., Carignan, D. & Horvitz, E. Capabilities of GPT-4 on medical challenge problems. Preprint at 
                  https://arxiv.org/abs/2303.13375
                  
                 (2023).") achieved 86.1%.

**Fig. 1: Med-PaLM 2 performance on MultiMedQA.**

[![figure 1](//media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41591-024-03423-7/MediaObjects/41591_2024_3423_Fig1_HTML.png)](/articles/s41591-024-03423-7/figures/1)

**a**, Med-PaLM 2 achieved an accuracy of 86.5% on USMLE-style questions in the MedQA dataset. The shaded region highlights the reported performance of models developed after Med-PaLM 2. **b**, In a pairwise ranking study on *n* = 1,066 consumer medical questions, Med-PaLM 2 answers were preferred over physician answers by a panel of physicians across eight of nine axes in our evaluation framework. Stacked bars represent proportions of answers for which physician raters preferred Med-PaLM 2 answers (orange), answers generated by other physicians (blue) or ties (light blue). Error bars reflect 95% confidence intervals of the overall preference rates for physician and Med-PaLM 2 answers, as determined by clustered bootstrapping computed over all 1,066 paired ratings.

[Full size image](/articles/s41591-024-03423-7/figures/1)

In parallel, application protocol interface (API) access to the GPT family of models spurred several studies evaluating the specialized clinical knowledge in these models, without specific alignment to the medical domain. Levine et al.[21](/articles/s41591-024-03423-7#ref-CR21 "Levine, D. M. et al. The diagnostic and triage accuracy of the GPT-3 artificial intelligence model: an observational study. Lancet Digit. Health 6, e555–e561 (2024).") evaluated the diagnostic and triage accuracies of GPT-3 for 48 validated case vignettes of both common and severe conditions and compared to laypeople and physicians. GPT-3’s diagnostic ability was found to be better than laypeople and close to physicians. On triage, performance was less impressive and closer to laypeople. Similarly, GPT-3 performance in genetics, surgery and ophthalmology was studied in refs. [22](#ref-CR22 "Duong, D. & Solomon, B. D. Analysis of large-language model versus human performance for genetics questions. Eur. J. Hum. Genet. 32, 466–468 (2024)."),[23](#ref-CR23 "Oh, N., Choi, G.-S. & Lee, W. Y. Chatgpt goes to operating room: evaluating gpt-4 performance and its potential in surgical education and training in the era of large language models. Ann. Surg. Treat. Res. 104, 269–273 (2023)."),[24](/articles/s41591-024-03423-7#ref-CR24 "Antaki, F., Touma, S., Milad, D., El-Khoury, J. & Duval, R. Evaluating the performance of ChatGPT in ophthalmology: an analysis of its successes and shortcomings. Ophthalmol. Sci. 3, 100324 (2023)."), respectively. Ayers et al.[25](/articles/s41591-024-03423-7#ref-CR25 "Ayers, J. W. et al. Comparing physician and artificial intelligence chatbot responses to patient questions posted to a public social media forum. JAMA Intern. Med. 183, 589–596 (2023).") compared ChatGPT and physician answers on 195 randomly drawn patient questions from a social media forum and found ChatGPT answers to be rated higher in both quality and empathy.

In our previous work on Med-PaLM, we demonstrated the importance of a wide-ranging benchmark for medical question answering, detailed human evaluation of model answers and alignment strategies in the medical domain[1](/articles/s41591-024-03423-7#ref-CR1 "Singhal, K. et al. Large language models encode clinical knowledge. Nature 620, 172–180 (2023)."). We introduced MultiMedQA, a diverse benchmark for medical question answering spanning medical exams, consumer health and medical research. We proposed a human evaluation rubric enabling physicians and laypeople to perform detailed assessment of model answers. Our initial model, Flan-PaLM, achieved strong performance across multiple-choice benchmarks. However, human evaluation revealed further work was necessary to ensure factual long-form answers aligned with human values and expectations in this safety-critical domain (a process generally referred to as ‘alignment’). We developed Med-PaLM, resulting in substantially improved physician evaluations over Flan-PaLM. However, evaluation on these benchmarks was limited as a measure of practical utility in real-world workflows, and key shortfalls remained compared to physician answers.

Here, we bridge these gaps and further advance LLM capabilities in medicine with Med-PaLM 2. We developed this model using a combination of an improved base LLM (PaLM 2; ref. [26](/articles/s41591-024-03423-7#ref-CR26 "Palm 2 technical report. Google 
                  https://ai.google/static/documents/palm2techreport.pdf
                  
                 (2023).")), medical domain-specific fine-tuning and new prompting strategies to improve reasoning and grounding, including ensemble refinement and chain of retrieval. Med-PaLM 2 improves upon Med-PaLM by over 19% on MedQA, as depicted in Fig. [1](/articles/s41591-024-03423-7#Fig1), and approached or exceeded previous state-of-the-art performance on MedMCQA, PubMedQA and MMLU clinical topics datasets.

While these benchmarks are a useful measure of the knowledge encoded in LLMs, they do not capture a model’s ability to generate factual, safe answers to questions that require nuanced answers, typical in real-world medical question answering. We study this by expanding our evaluation framework for physicians and laypeople[1](/articles/s41591-024-03423-7#ref-CR1 "Singhal, K. et al. Large language models encode clinical knowledge. Nature 620, 172–180 (2023)."). We introduce two additional human evaluations: a pairwise ranking evaluation of model and physician answers to consumer medical questions along nine clinically relevant axes; and physician assessment of model answers on two recently introduced adversarial testing datasets[27](/articles/s41591-024-03423-7#ref-CR27 "Pfohl, S. R. et al. A toolbox for surfacing health equity harms and biases in large language models. Nat. Med. 
                  https://doi.org/10.1038/s41591-024-03258-2
                  
                 (2024).") designed to probe the limits of LLMs.

Finally, we study the practical utility of Med-PaLM 2 for bedside consultations. In a pilot study, we answer real-world medical questions submitted by specialist physicians to a consultation service during routine care delivery[28](/articles/s41591-024-03423-7#ref-CR28 "Callahan, A. et al. Using aggregate patient data at

[... truncated ...]