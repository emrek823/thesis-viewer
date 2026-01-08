---
url: https://www.nature.com/articles/s41551-025-01463-z
title: "CRISPR-GPT for agentic automation of gene-editing experiments | Nature Biomedical Engineering"
clipped: 2025-12-23 09:00
source: browser-history
---

# CRISPR-GPT for agentic automation of gene-editing experiments | Nature Biomedical Engineering

> Source: [https://www.nature.com/articles/s41551-025-01463-z](https://www.nature.com/articles/s41551-025-01463-z)

CRISPR-GPT for agentic automation of gene-editing experiments

[Download PDF](/articles/s41551-025-01463-z.pdf)

[Download PDF](/articles/s41551-025-01463-z.pdf)

### Subjects

* [Computational biology and bioinformatics](/subjects/computational-biology-and-bioinformatics)
* [Computational science](/subjects/computational-science)
* [CRISPR-Cas systems](/subjects/crispr-cas-systems)

A [Publisher Correction](https://doi.org/10.1038/s41551-025-01589-0) to this article was published on 08 December 2025

This article has been [updated](#change-history)

## Abstract

Performing effective gene-editing experiments requires a deep understanding of both the CRISPR technology and the biological system involved. Meanwhile, despite their versatility and promise, large language models (LLMs) often lack domain-specific knowledge and struggle to accurately solve biological design problems. We present CRISPR-GPT, an LLM agent system to automate and enhance CRISPR-based gene-editing design and data analysis. CRISPR-GPT leverages the reasoning capabilities of LLMs for complex task decomposition, decision-making and interactive human–artificial intelligence (AI) collaboration. This system incorporates domain expertise, retrieval techniques, external tools and a specialized LLM fine tuned with open-forum discussions among scientists. CRISPR-GPT assists users in selecting CRISPR systems, experiment planning, designing guide RNAs, choosing delivery methods, drafting protocols, designing assays and analysing data. We showcase the potential of CRISPR-GPT by knocking out four genes with CRISPR-Cas12a in a human lung adenocarcinoma cell line and epigenetically activating two genes using CRISPR-dCas9 in a human melanoma cell line. CRISPR-GPT enables fully AI-guided gene-editing experiment design and analysis across different modalities, validating its effectiveness as an AI co-pilot in genome engineering.

### Similar content being viewed by others

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs12276-025-01462-9/MediaObjects/12276_2025_1462_Fig1_HTML.png)

### [Revolutionizing CRISPR technology with artificial intelligence](https://www.nature.com/articles/s12276-025-01462-9?fromPaywallRec=false)

Article
Open access
31 July 2025

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41586-025-09298-z/MediaObjects/41586_2025_9298_Fig1_HTML.png)

### [Design of highly functional genome editors by modelling CRISPR–Cas sequences](https://www.nature.com/articles/s41586-025-09298-z?fromPaywallRec=false)

Article
Open access
30 July 2025

![](https://media.springernature.com/w215h120/springer-static/image/art%3A10.1038%2Fs41576-025-00907-1/MediaObjects/41576_2025_907_Fig1_HTML.png)

### [Harnessing artificial intelligence to advance CRISPR-based genome editing technologies](https://www.nature.com/articles/s41576-025-00907-1?fromPaywallRec=false)

Article
18 November 2025

## Main

Large language models (LLMs) have demonstrated exceptional capabilities in language skills and encapsulate a substantial amount of world knowledge[1](#ref-CR1 "Chowdhery, A. et al. PaLM: scaling language modeling with pathways. J. Mach. Learn. Res. 24, 240 (2023)."),[2](#ref-CR2 "Hoffmann, J. et al. An empirical analysis of compute-optimal large language model training. In Advances in Neural Information Processing Systems (eds Koyejo, S. et al.) Vol. 35, 30016–30030 (Curran Associates, Inc., 2022)."),[3](#ref-CR3 "OpenAI et al. GPT-4 technical report. Preprint at 
                https://doi.org/10.48550/arXiv.2303.08774
                
               (2024)."),[4](#ref-CR4 "The Claude 3 Model Family: Opus, Sonnet, Haiku (Anthropic, 2024)."),[5](/articles/s41551-025-01463-z#ref-CR5 "Anil, R. et al. PaLM 2 technical report. Preprint at 
                https://doi.org/10.48550/arXiv.2305.10403
                
               (2023)."). Recent research has also enhanced LLMs with external tools, improving their problem-solving abilities and efficiencies[6](#ref-CR6 "Yao, S. et al. ReAct: synergizing reasoning and acting in language models. In Proc. 11th International Conference on Learning Representations (OpenReview, 2023)."),[7](#ref-CR7 "Liu, R. et al. Mind’s eye: grounded language model reasoning through simulation. In Proc. 11th International Conference on Learning Representations (OpenReview, 2023)."),[8](/articles/s41551-025-01463-z#ref-CR8 "Schick, T. et al. Toolformer: language models can teach themselves to use tools. In Advances in Neural Information Processing Systems (eds Oh, A. et al.) Vol. 36, 68539–68551 (Curran Associates, Inc., 2023)."). Moreover, LLMs have also demonstrated potential as tool makers[9](/articles/s41551-025-01463-z#ref-CR9 "Cai, T., Wang, X., Ma, T., Chen, X. & Zhou, D. Large language models as tool makers. In Proc. 12th International Conference on Learning Representations (OpenReview, 2024).") and black-box optimizers[10](/articles/s41551-025-01463-z#ref-CR10 "Yang, C. et al. Large language models as optimizers. In Proc. 12th International Conference on Learning Representations (OpenReview, 2024)."). To this end, researchers have explored LLM-based specialized models for various scientific domains[11](/articles/s41551-025-01463-z#ref-CR11 "Li, T. et al. CancerGPT for few shot drug pair synergy prediction using large pretrained language models. npj Digit. Med. 7, 40 (2024)."),[12](/articles/s41551-025-01463-z#ref-CR12 "Wu, S. et al. BloombergGPT: a large language model for finance. Preprint at 
                https://doi.org/10.48550/arXiv.2303.17564
                
               (2023)."), particularly for mathematics and chemistry tasks. ChemCrow[13](/articles/s41551-025-01463-z#ref-CR13 "M. Bran, A. et al. Augmenting large language models with chemistry tools. Nat. Mach. Intell. 6, 525–535 (2024).") uses tool-augmented LLM for solving a range of chemistry-related tasks such as paracetamol synthesis, whereas Co-scientist[14](/articles/s41551-025-01463-z#ref-CR14 "Boiko, D. A., MacKnight, R., Kline, B. & Gomes, G. Autonomous chemical research with large language models. Nature 624, 570–578 (2023).") integrates automated experimentation, achieving successful optimization of palladium-catalysed cross-coupling reaction. LLMs have also shown initial promise in generating biological protocols, as demonstrated by studies like BioPlanner[15](/articles/s41551-025-01463-z#ref-CR15 "O’Donoghue, O. et al. BioPlanner: automatic evaluation of LLMs on protocol planning in biology. In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (eds Bouamor, H., Pino, J. & Bali, K.) 2676–2694 (Association for Computational Linguistics, 2023)."). While recent advancements, such as OpenAI’s o1 preview, have improved reasoning abilities in areas such as mathematics and coding, progress in biological tasks remains comparatively limited. This limitation stems from general-purpose LLMs’ lack of in-depth understanding of biology, compounded by the unique challenges of biological experiments, including the variability of living systems, the noisy nature of biological data and the highly specialized, less transferable nature of biological skills and tools.

Gene editing has transformed biological research and medicine, allowing for precise DNA modifications for both therapeutic and experimental applications. CRISPR-Cas, the most well-known gene-editing technology, originated from bacterial immune systems[16](#ref-CR16 "Jinek, M. et al. A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity. Science 337, 816–821 (2012)."),[17](#ref-CR17 "Cong, L. et al. Multiplex genome engineering using CRISPR/Cas systems. Science 339, 819–823 (2013)."),[18](#ref-CR18 "Mali, P. et al. RNA-guided human genome engineering via Cas9. Science 339, 823–826 (2013)."),[19](#ref-CR19 "Jinek, M. et al. RNA-programmed genome editing in human cells. eLife 2, e00471 (2013)."),[20](#ref-CR20 "Doudna, J. A. & Charpentier, E. The new frontier of genome engineering with CRISPR-Cas9. Science 346, 1258096 (2014)."),[21](#ref-CR21 "Mali, P., Esvelt, K. M. & Church, G. M. Cas9 as a versatile tool for engineering biology. Nat. Methods 10, 957–963 (2013)."),[22](#ref-CR22 "Hsu, P. D., Lander, E. S. & Zhang, F. Development and applications of CRISPR-Cas9 for genome engineering. Cell 157, 1262–1278 (2014)."),[23](#ref-CR23 "Sander, J. D. & Joung, J. K. CRISPR-Cas systems for editing, regulating and targeting genomes. Nat. Biotechnol. 32, 347–355 (2014)."),[24](/articles/s41551-025-01463-z#ref-CR24 "Shalem, O., Sanjana, N. E. & Zhang, F. High-throughput functional genomics using CRISPR–Cas9. Nat. Rev. Genet. 16, 299–311 (2015)."). Its development has led to advanced techniques like CRISPR activation and interference (CRISPRa/i)[25](#ref-CR25 "Qi, L. S. et al. Repurposing CRISPR as an RNA-guided platform for sequence-specific control of gene expression. Cell 152, 1173–1183 (2013)."),[26](#ref-CR26 "Gilbert, L. A. et al. CRISPR-mediated modular RNA-guided regulation of transcription in eukaryotes. Cell 154, 442–451 (2013)."),[27](#ref-CR27 "Konermann, S. et al. Optical control of mammalian endogenous transcription and epigenetic states. Nature 500, 472–476 (2013)."),[28](#ref-CR28 "Maeder, M. L. et al. CRISPR RNA-guided activation of endogenous human genes. Nat. Methods 10, 977–979 (2013)."),[29](/articles/s41551-025-01463-z#ref-CR29 "Perez-Pinera, P. et al. RNA-guided gene activation by CRISPR-Cas9-based transcription factors. Nat. Methods 10, 973–976 (2013)."), base editing[30](/articles/s41551-025-01463-z#ref-CR30 "Anzalone, A. V. et al. Search-and-replace genome editing without double-strand breaks or donor DNA. Nature 576, 149–157 (2019)."),[31](/articles/s41551-025-01463-z#ref-CR31 "Gaudelli, N. M. et al. Programmable base editing of A•T to G•C in genomic DNA without DNA cleavage. Nature 551, 464–471 (2017).") and prime editing[32](/articles/s41551-025-01463-z#ref-CR32 "Anzalone, A. V., Koblan, L. W. & Liu, D. R. Genome editing with CRISPR–Cas nucleases, base editors, transposases and prime editors. Nat. Biotechnol. 38, 824–844 (2020)."),[33](/articles/s41551-025-01463-z#ref-CR33 "Pickar-Oliver, A. & Gersbach, C. A. The next generation of CRISPR–Cas technologies and applications. Nat. Rev. Mol. Cell Biol. 20, 490–507 (2019)."), creating a powerful toolkit for genetic modification and epigenetic modulation. In basic biomedical research, CRISPR gene-editing has become one of the most frequently used laboratory techniques: at the largest non-profit plasmid DNA repository, Addgene, 8 of the 15 top requested plasmids worldwide were for CRISPR gene-editing[34](/articles/s41551-025-01463-z#ref-CR34 "Tsang, J. 15 Years of Addgene: The Top 15 Plasmids. Addgene Blog 
                https://blog.addgene.org/15-years-of-addgene-the-top-15-plasmids
                
               (2019)."). On the application side, CRISPR has produced the first permanent cure for sickle cell disease (SCD)[35](/articles/s41551-025-01463-z#ref-CR35 "Office of the Commissioner. FDA approves first gene therapies to treat patients with sickle cell disease. FDA News Release 
                https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease
                
               (2024).") and β-thalassaemia[36](/articles/s41551-025-01463-z#ref-CR36 "Office of the Commissioner. FDA roundup: January 16, 2024. FDA News Release 
                https://www.fda.gov/news-events/press-announcements/fda-roundup-january-16-2024
                
               (2024)."), as well as facilitating plant engineering for sustainable agriculture[20](/articles/s41551-025-01463-z#ref-CR20 "Doudna, J. A. & Charpentier, E. The new frontier of genome engineering with CRISPR-Cas9. Science 346, 1258096 (2014)."). As one of the most powerful biotechnologies, numerous software and protocols exist for specific gene-editing tasks. Despite these resources, an end-to-end solution—from CRISPR-Cas system selection, guide (g)RNA design, off-target evaluation, to delivery and data analysis—remains complex, particularly for newcomers. AI-assisted tools can simplify gene-editing experiment design and data analysis, making the technology more accessible and accelerating scientific and therapeutic discoveries.

We introduce CRISPR-GPT, a solution that combines the strengths of LLMs with domain-specific knowledge, chain-of-thought reasoning, instruction fine-tuning, retrieval techniques and tools. CRISPR-GPT is centred around LLM-powered planning and execution agents (Fig. [1](/articles/s41551-025-01463-z#Fig1)). This system leverages the reasoning abilities of general-purpose LLMs and multi-agent collaboration for task decomposition, constructing state machines and automated decision-making (Fig. [2a](/articles/s41551-025-01463-z#Fig2)). It draws upon expert knowledge from leading practitioners and peer-reviewed published literature in gene editing for retrieval-augmented generation (RAG)[13](/articles/s41551-025-01463-z#ref-CR13 "M. Bran, A. et al. Augmenting large language models with chemistry tools. Nat. Mach. Intell. 6, 525–535 (2024).").

**Fig. 1: Overview of CRISPR-GPT.**

[![figure 1](//media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41551-025-01463-z/MediaObjects/41551_2025_1463_Fig1_HTML.png)](/articles/s41551-025-01463-z/figures/1)

CRISPR-GPT is an LLM-powered multi-agent system designed to provide AI copiloting for human researchers in gene editing. It supports four primary gene-editing modalities: knockout, base editing, prime editing and epigenetic editing (CRISPRa/i). The system offers three user interaction modes: Meta mode (step-by-step guidance on predefined tasks), Auto mode (customized guidance based on user requests) and Q&A mode (real-time answers to ad hoc questions), to streamline experiment design and planning. CRISPR-GPT consists of four core components: the User proxy, LLM planner, Task executor and Tool provider. Together, these components are equipped with a comprehensive suite of tools and decision-support capabilities to facilitate the design, planning and analysis of gene-editing workflows. To evaluate CRISPR-GPT’s performance, we developed the Gene-editing bench, a framework of 288 test cases covering tasks such as experimental planning, sgRNA design, delivery method selection and more. Figure was originally created with [BioRender.com/tb8sq6f](https://BioRender.com/tb8sq6f).

[Full size image](/articles/s41551-025-01463-z/figures/1)

**Fig. 2: CRISPR-GPT adopts a compositional, multi-agent architecture to enable human–AI collaboration and automated experimental designs.**

[![figure 2](//media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41551-025-01463-z/MediaObjects/41551_2025_1463_Fig2_HTML.png)](/articles/s41551-025-01463-z/figures/2)

**a**, The backbone of CRISPR-GPT involves multi-agent collaboration 

[... truncated ...]