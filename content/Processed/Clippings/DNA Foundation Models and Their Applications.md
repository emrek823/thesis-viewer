---
title: "DNA Foundation Models and Their Applications"
source: "https://www.aditharun.com/p/dna-foundation-models"
published: 2025-09-04
created: 2025-12-15
description: "What can we do with DNA Foundation Models?"
tags:
  - "clippings"
---
### What can we do with DNA Foundation Models?

1. [Introduction (what are they, and why you should care)](https://www.aditharun.com/i/172739999/introduction)
2. [Survey of DNA models](https://www.aditharun.com/i/172739999/survey-of-dna-models)
3. [Technical areas for improvement](https://www.aditharun.com/i/172739999/technical-areas-for-improvement)
	(Data, data, data + building a reinforcement learning environment for biology)
4. [Applications](https://www.aditharun.com/i/172739999/applications)
	1. [State-specific promoters (CAR-T, AAV gene therapy, and ddRNAi drugs)](https://www.aditharun.com/i/172739999/designing-state-specific-promoters-for-gene-therapy-and-biological-research)
	2. [Discover new disease-causing targets through in silico mutagenesis](https://www.aditharun.com/i/172739999/discovering-novel-disease-causing-targets-through-in-silico-mutagenesis)
	3. [Resolving variants of unknown significance](https://www.aditharun.com/i/172739999/resolving-variants-of-uncertain-significance-vus)
	4. [Biosecurity](https://www.aditharun.com/i/172739999/biosecurity-of-generated-dna-sequences)
	This post is already going to be really long. So, I will publish a Part 2 soon covering four more applications: biomarkers / patient selection strategies, DNA models as a service, predicting the cell-level effect of multiple genomic changes, and optimizing crop genomes and drug manufacturing systems.

## Introduction

DNA Foundation Models (FMs) are large language models capable of 1) generating DNA sequences at scale that capture the grammar of DNA and 2) predicting diverse genomic properties (e.g., pathogenic variants) with minimal additional data or modeling. Before we jump in, **let me tell you why you should care about DNA models**.

Protein models like ESM3, AlphaFold3, Boltz2, and RFDiffusion generate, characterize, and design proteins thereby allowing us to make new drugs and discoveries. However, proteins compose just 2% of the human genome. *What can we learn from the other 98% of the genome?* If we can generate, predict, and characterize DNA sequences, what can we create?

Protein models primarily train on the protein data bank, a set of [~200,000 protein structures](https://www.rcsb.org/stats/data_storage_growth). In comparison, [490,000 whole genome sequences were deposited in the UK Biobank](https://www.nature.com/articles/s41586-025-09272-9) on August 6, 2025 alone. We have orders of magnitude more DNA sequencing data than protein sequence/structure data. The data advantage will grow even wider given that the cost of DNA sequencing and other molecular assays continues to drop. DNA FMs allow us to ingest this data and learn complex patterns.

This post is, in some ways, a response to [Owl Posting’s ‘so-who-cares’ take on DNA models](https://www.owlposting.com/p/a-socratic-dialogue-over-the-utility). DNA models have a lot of potential and it is early days both on the model building and application-side. **Long story short,****DNA models can be useful if coupled with high-quality domain-specific multi-modal data.**

## Survey of DNA Models

Arc Institute’s [Evo2](https://arcinstitute.org/tools/evo) (Feb 2025) and DeepMind’s [AlphaGenome](https://github.com/google-deepmind/alphagenome) (June 2025) are the frontier models. Both models are open source.

Evo2 is a 40B parameter 1M nucleotide context model that uses the StripedHyena2 (convolution and attention layers interwoven) architecture with nucleotide-level tokenization. Evo2 is trained on 9T DNA base pairs across all domains of life. *Evo2 is able to generate sequences with specific epigenetic properties via inference-time search*. Specifically, Evo2 was coupled with a guidance model (a prediction model that spits out a score given an input) to iterate and optimize the sequence to have certain properties (see figure below). Important caveat: we do not have experimental validation that the generated sequence actually creates the predicted chromatin accessibility.

![](https://substackcdn.com/image/fetch/$s_!PB71!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa6ceb243-6a09-464b-a623-624069913de3_1361x661.png)

Figure 6 from Evo2 preprint. Panel A describes the chromatin accessibility design task, panel B describes the coupled model system, and panel E displays the output of the model relative to the system objective

AlphaGenome is a 450M parameter 1M nucleotide context model that uses an encoder-decoder architecture composed of convolution and transformer structures with single nucleotide-tokenization. It was trained on multimodal sequence data including RNA-seq, DNA sequences, and Hi-C genomic contact maps (see figure below). AlphaGenome predicts many genomic tracks across cell types in human and mice and is competitive or better than top task-specific models.

![](https://substackcdn.com/image/fetch/$s_!Jh4U!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9b956780-dbb4-47e1-89ff-c69cdef5de52_1021x817.png)

Figure 1 from AlphaGenome preprint. Schematic of the AlphaGenome model

There are several other DNA FMs including [JanusDNA](https://arxiv.org/pdf/2505.17257) (Fudan University), [Caduceus](https://arxiv.org/abs/2403.03234) (Cornell), [NucleotideTransformer](https://www.nature.com/articles/s41592-024-02523-z) (InstaDeep), [GENErator](https://arxiv.org/abs/2502.07272) (Alibaba), [DNA-BERT2](https://arxiv.org/abs/2306.15006) (Northwestern), and [LucaOne](https://www.nature.com/articles/s42256-025-01044-4) (Alibaba). They make different modeling and data choices including k-mer tokenization, shorter context windows, different neural network architectures, and smaller training datasets with limited genetic diversity.

*But, how do we generate DNA sequences from a DNA model?* Three key ways. Autoregressive sampling (GPT-style next token prediction), [diffusion sampling](https://www.biorxiv.org/content/10.1101/2024.05.23.595630v2), or [Dirichlet flow matching](https://arxiv.org/pdf/2402.05841) (DFM). DFM is a smooth diffusion process that allows a guidance model to steer all positions in the sequence. Autoregressive sampling is the standard (used by Evo2) though Dirichlet flow matching holds significant promise for generating sequences subject to constraints. DFM is faster and enforces global constraints but can be complex to train and less intuitive to grok than autoregressive sampling. We can work through these negatives to realize the advantages of DFMs. **Dirichlet flow models are a natural choice for achieving guided sequence generation.**

## Technical areas for improvement

*This is mostly a section of me asking questions and speculating. Feel free to skip, not super relevant to the rest of the post.*

**1\. Data:**

The quality of training data strongly influences the type of problems the model can solve, its performance on those tasks, and its ability to generalize. Open questions include: How much raw data can we acquire? What data should we collect to maximize the model’s ability to generalize to unseen states?

What other modalities of data should we acquire? What additional data should we collect to fine-tune a general model for our specific set of tasks? In short, it depends on the application. But in general, we can collect high-quality data for fine-tuning models by developing scalable assays that directly measure the molecular properties of interest. One example is the recently released [Variant-EFFECTS](https://www.cell.com/cell/abstract/S0092-8674\(25\)00352-6) assay developed by [Eric Lander](https://www.broadinstitute.org/bios/eric-s-lander), [Anshul Kundaje](https://profiles.stanford.edu/anshul-kundaje), and [Jesse Engreitz](https://med.stanford.edu/profiles/jesse-engreitz), which quantifies how each bit of regulatory DNA influences gene expression. Other labs and companies have large amounts of data relevant to training DNA FMs including [Octant Bio](https://www.octant.bio/pipeline), [Jay Shendure](https://www.gs.washington.edu/faculty/shendure.htm), and [Pardis Sabeti](https://www.sabetilab.org/team/).

**2\. Model building:**

How do we capture long-range effects without forgetting small-scale patterns? One option is to scale context length. The context length of 1M base pairs is the longest range current DNA FMs can handle. If we can increase context length 1.7 orders of magnitude to 50M, the length of the smallest human chromosome, we can capture chromosome-scale interactions. *They are rare but their effect sizes are often large (e.g., BCR-ABL1 fusions in leukemia)*. But, with increased context length comes memory, compute, training cost increases and the risk that the model will forget small-scale features. *What new types of architectures allow for ultra-long-range pattern recognition while preserving short-range capabilities subject to cost, compute, and memory constraints?* This is an open problem. For example, Evo2’s StripedHyena2 architecture offered a solution to this problem by using interwoven convolution and attention layers.

Caduceus, a DNA FM, implements reverse complement (RC) equivariance which models the symmetry of DNA’s structure and base pairing rules. It also implements bidirectional learning such that it ingests sequences left-to-right and right-to-left to extract patterns. *Could RC-equivariance and bidirectional learning improve Evo2’s performance? What other biologically-informed architectures should we try to implement?* These are open questions.

*How can we map DNA FM embeddings to biological processes?* Sparse autoencoders (SAEs) are one option. Interpretable biological signals using SAEs have been explored for protein models [(ReticularAI),](https://arxiv.org/pdf/2503.08764) DNA FMs ([Goodfire](https://www.goodfire.ai/)) and sc-RNAseq data ([Markov Bio](https://www.markov.bio/research/mech-interp-path-to-e2e-biology)) with varying degrees of success. Some other interpretability methods for biological deep learning models include [DeepLift](https://arxiv.org/pdf/1704.02685) and [TF-MoDiSco](https://arxiv.org/pdf/1811.00416).

**3\. Optimization environment:**

A generative model coupled with a prediction model can iterate to create arbitrarily large DNA sequences with a specific set of functions if the set of functions can be translated into a score that can be optimized. Think [Prime Intellect](https://www.primeintellect.ai/blog/environments) for reinforcement learning in biology.

**4\. Benchmarking:**

Lastly, we need benchmarks to score DNA FMs without significant test-train leak. There are a few datasets people use including [TraitGym](https://www.biorxiv.org/content/10.1101/2025.02.11.637758v1), [CAGI](https://genomeinterpretation.org/challenges.html), [Genomic Benchmarks](https://bmcgenomdata.biomedcentral.com/articles/10.1186/s12863-023-01123-8), and [BEND](https://arxiv.org/pdf/2311.12570) but each DNA FM paper uses a different set of datasets to measure performance. The field needs a consensus benchmark. Relatedly, there is no METR equivalent cataloging model performance in this space. There probably should be.

## Applications

What can we do with DNA models?

#### A. Designing state-specific promoters for gene therapy and biological research

Regulatory DNA elements (ITR sequence, polyadenylation signal, promoter) and a therapeutic transgene packaged in Adeno-associated virus (AAV) capsids are a type of gene therapy approved to treat genetic diseases including retinal dystrophy ([Spark Therapeutics](https://www.gene.com/spark)), spinal muscular atrophy ([Novartis](https://www.zolgensma.com/how-zolgensma-works)), and Duchenne muscular dystrophy ([Sarepta](https://www.sarepta.com/)). Modifications of the each of the three regulatory elements in the AAV impair viability of the transgene in human tissue and alter transgene expression. Also, the DNA in the AAV capsid is limited to ~4700 bases due to space constraints in the capsid.

We currently design regulatory elements from rules (e.g., [OnTarget](https://ontarget.cmmt.ubc.ca/)), experimentally characterizing the search space of regulatory elements, or bioinformatically scanning databases hunting for a target tissue advantage. *Can we engineer regulatory elements that allow the transgene to be expressed only in target tissue? Yes.* We can leverage DNA FMs to create tissue-specific regulatory elements. AlphaGenome predicts cell-specific chromatin accessibility (ATAC-seq, DNAse-seq), promoter marks (histone modidifcations), and CAGE (transcription initiation). We can design an objective function based on a composite of these measures being activated in the target tissue and not activated in off-target tissue. Then, we can generate sequences perhaps through Evo2 or DFM and implement our guided generation to discover and rank candidate promoter sequences that are specific to a certain tissue type.

**Efficiently designing tissue-specific promoter sequences enables AAV gene therapy, CAR-T therapy, DNA-nanoparticle gene therapy, ddRNAi drugs, and basic science work (lineage tracing, calcium physiology, cell ablation, tissue-specific disease models).**

CAR-T promoter design matters a lot. It impacts anti-tumor effectiveness and side effects. Typically, always-on promoters are used to create predictable anti-tumor activity. But, always-on promoters can create significant side effects (i.e., cytokine release storm) when administered in the short term. In the long-term it can lead to T cell exhaustion which means that signaling gets shut down and cannot work to kill cancer cells anymore. We can design T cell-specific promoters with activity levels that are optimized to prevent exhaustion and severe cytokine release storm with DNA FMs. Typically, CAR-T cells are edited outside the patient’s body but recent efforts have shown that we can create CAR-T cells inside a patient’s body by giving a patient a lipid nanoparticle containing mRNA. The promoter design question becomes even more important for in vivo CAR-T therapies developed by companies like Capstan.

Looking forward, designing state-specific regulatory elements may be a new avenue for therapeutics. Instead of maximizing expression for liver tissue, we can maximize expression for hepatocellular carcinoma cells or hepatocytes with dysfunctional glucose regulation (i.e., Warburg effect).

There are several groups pursuing ML-based strategies for regulatory element design. [Ryan Tewhey](https://www.jax.org/research-and-faculty/faculty/ryan-tewhey), [Chris Reilly](https://www.reilly-lab.com/reillylab/team), and [Pardis Sabeti](https://www.sabetilab.org/pardissabeti/) published their deep learning model for designing tissue-specific regulatory elements across three cell lines in [Nature](https://www.nature.com/articles/s41586-024-08070-z) (Oct 2024). Ginkgo [Promoter-0](https://cms.ginkgo.bio/assets/resources/white-papers/2024-12-18-promoter-0/promoter-0-white-paper.pdf) technology predicts promoter activity in cell types using Borzoi. Ginkgo [gene therapy solutions](https://biopharma.ginkgo.bio/genetic-medicines/gene-therapy) offers AI-driven sequence optimization of cell-type specific promoters within 3 months (too long in my opinion) and licensing of their promoters. AskBio designs synthetic tissue-specific promoters using their own bioinformatics engine. [Meira](https://meiragtx.com/wp-content/uploads/2024/10/ESGCT-P0129-Promoters-with-parallel-screening-Jin-1.pdf) identifies tissue-specific mini-promoters using high-throughput experimental assays.

#### B. Discovering novel disease-causing targets through in silico mutagenesis

DNA FMs are a general platform that can identify disease causing variants.A clear example of the potential for DNA FMs to achieve this is demonstrated in a [study](https://pubmed.ncbi.nlm.nih.gov/32284880/) published by [DeepGenomics](https://www.deepgenomics.com/) in 2020.

![](https://substackcdn.com/image/fetch/$s_!ysD2!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ef1db6f-418e-4f10-9a4f-4c873bd8a28f_727x232.png)

They used a deep learning DNA model to accurately describe the role of a missense mutation in Wilson’s disease. It was known that the mutation was associated with the disease but its mechanism was unclear given it had no effect on protein function *in vitro*. This study revealed that the mutation results in exon 6 skipping which enables the development of a new treatment for Wilson’s disease patients with this variant: steric blocking antisense oligonucleotides to restore splicing.

Also, DNA FMs can categorize missense mutations in proteins labelled as likely benign by AlphaMissense.

> AlphaMissense classified 105139 mutations as likely benign. In ClinVar, 5108 of these were actually not benign. AUPRC is 0.18 for AlphaGenome on this very tough dataset. The prevalence of pathogenic variants is 4.8%. This is the expected performance if we randomly guess labels in this data. AlphaGenome does a lot better. I think the low AUPRC may not catch some people's eyes but I think its a great result. It shows an area (of many) where DNA models perform better than their protein counterpart

DNA FMs may have an advantage over protein models in predicting pathogenicity status of protein coding variants. With a multi-modal DNA FM, one can probe the effect a specific variant has across cell types and genomic tracks (e.g., expression, chromatin state, etc.).

Experimentally, scientists can make a specific change to a cell’s genome, observe its effect via molecular assays across cell types, compare their effect sizes and rank-order them by disease causing potential for further investigation in mice or other organisms. Issues with this approach include the cost and time of systematically probing the 3B base pair human genome and investigating the effect that cell-level changes like expression or chromatin state have on an organism’s phenotype. Consulting the scientific literature can aid in disentangling the cellular effect to phenotype linkage but is often sparse and hard to interpret. However, if we can prioritize the changes we wish to investigate (even loosely), we can then employ DNA FMs to quickly characterize their cell-level changes *in silico* and select a small set of variants for subsequent experimentation and de-risking. **[AstraZeneca](https://aws.amazon.com/blogs/industries/astrazeneca-fine-tunes-genomics-foundation-models-with-amazon-sagemaker/?utm_source=chatgpt.com) fine-tuned a DNA FM to predict noncoding variant pathogenicity, so this topic is clearly top-of-mind for big pharma.** The disruption of regulatory genomic elements (e.g., splice sites, promoters, enhancer, transcription factor binding sites) are understudied and DNA FMs allow us to probe into the effects of regulatory elements.

The process for choosing the changes to investigate by DNA FMs can be informed by clinicogenomic data. Two specific avenues for doing so are rare disease WGS data and human genetics (e.g., GWAS) studies. If a patient has a set of variants discovered by WGS and an observed phenotype (e.g., lab values, clinical syndrome, imaging), then we can investigate *in silico*, without assembling specific datasets, which one (or set of them) may lead to the phenotype. Companies that 1) sequence diverse populations or 2) assemble rare disease datasets are best positioned to leverage this technology.

(1) Sequencing diverse populations: We hope to emulate the process that yielded PCKS9 inhibitors for cholesterol management. Essentially, naturally occurring [PCSK9 variants](https://pubmed.ncbi.nlm.nih.gov/15654334/) were observed to be associated with [lower LDL and cardiovascular events](https://www.nejm.org/doi/full/10.1056/NEJMoa054013) in select populations. Then, mechanistic work was pursued in cell and animal studies. For example, [VariantBio](https://www.nature.com/articles/s41588-025-02223-0), a company working to sequence diverse individuals, could uncover future drug targets. Their downstream work could be aided by DNA FMs.

(2) Rare diseases: The [undiagnosed diseases network](https://undiagnosed.hms.harvard.edu/) (UDN) aggregates rare disease clinicogenomic patient data and seek to discover the genomic determinants of their conditions. They recently [introduced a statistical method](https://www.nature.com/articles/s41467-025-61712-2) for prioritizing disease genes and discovering new diseases associations based on pooling WGS data across rare disease patients, finding recurrent mutations in genes, and grouping across pathways. UDN also works to [deploy model organisms](https://undiagnosed.hms.harvard.edu/research/model-organisms-phase-ii/) to characterize variant-phenotype relationships. [Arcadia Science](https://www.arcadiascience.com/) also works to develop new model organism systems and may be positioned to leverage DNA FMs to quickly test variant-phenotype relationships. [Citizen Health](https://www.citizen.health/life-sciences) is a rare disease company using AI to [define trial endpoints and identify patient clusters](https://8259670.fs1.hubspotusercontent-na1.net/hubfs/8259670/Life%20Sciences%20Landing%20Page/Citizen%20Health_Case%20Studies_Pre%20IND%20to%20Post%20Approval.pdf) to run trials. They have longitudinal clinical data (and potentially genomic data) that may enable variant to phenotype predictions. In silico assessment of variant to phenotype relationships also accelearte [N-of-1 gene therapy treatments](https://www.nejm.org/doi/full/10.1056/NEJMoa2504747) too.

#### C. Resolving variants of uncertain significance (VUS)

FDA-approved targeted therapies require patients to be ruled-in for eligibility based on if the patient has a pathogenic mutation in a predefined set of genes. Companion diagnostics offer tests to determine molecular eligibility and rule-in patients if they have a known pathogenic or likely pathogenic mutation. However, many patients who receive testing have only VUS and are generally not eligible for therapy. Also, as more patients receive WGS, more VUS will be reported. VUS reflect our scientific uncertainty about whether the variant causes the gene product to become dysfunctional and contribute to disease phenotype. DNA FMs can investigate VUS *in silico* to characterize their deleterious effects. **What evidence do we have that this might be possible? We can look at the Evo2 and AlphaGenome papers for a base case.**

![](https://substackcdn.com/image/fetch/$s_!ZyPD!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbece4d34-4510-4bb8-89fe-b077731ab7c3_815x714.png)

Fig. 2E from Evo2 preprint on BRCA1 variant prediction

Evo2 was able to accurately classify BRCA1 coding and noncoding SNVs as pathogenic/likely pathogenic or benign/likely benign but VUS were removed. PhyloP, a much simpler algorithm, performs nearly as well, which has contributed to skepticism about DNA FMs for variant classification.

AlphaGenome examined the effect of clinically observed non-coding variants near TAL1 and accurately predicted the mechanism of their functional impact in acute myeloid leukemia.

![](https://substackcdn.com/image/fetch/$s_!LNZt!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F19a45eae-8382-4173-9a6f-abeef93132bf_1270x843.png)

Figure 6 from AlphaGenome preprint. Please see the preprint https://www.biorxiv.org/content/10.1101/2025.06.25.661532v2.full.pdf for more commentary on their TAL1 work

**DNA FMs offer a computational way to bridge the variant-to-function gap.**

Reclassifying VUS could materially impact sales of targeted therapies and health outcomes for cancer patients. In the US, HER2 negative breast cancer patients with germline pathogenic BRCA mutants are eligible for PARP inhibitors (PARPi). About [7](https://www.oncotarget.com/article/28561/text) % of patients receiving [BRCA1/2 testing](https://www.frontiersin.org/journals/oncology/articles/10.3389/fonc.2023.1227864/full) for breast cancer have VUS only. So, ~13,000 HER2- breast cancer patients have BRCA VUS each year whereas [~50,000 patients](https://www.nature.com/articles/s41416-024-02827-z?) have BRCA pathogenic variants. Conservatively, if 5% of BRCA VUS patients are reclassified, 650 more patients are eligible. Assuming [180,000 new HER2- breast cancers in the US each year](https://seer.cancer.gov/statfacts/html/breast-subtypes.html), $15k per month, 12 months of use on average, and 70% take-home after rebates, this translates to 81M per year in additional revenue if 5% are reclassified. PARPi is also indicated for prostate and ovarian cancers too. Reclassifying VUS at-scale could be a viable business model if value can be captured by the company doing the reclassification.

In this space, [Velsera](https://velsera.com/) and [QIAGEN QCI Intercept](https://www.qiagen.com/us/products/discovery-and-translational-research/next-generation-sequencing/informatics-and-data/interpretation-content-databases/qci-interpret) are software engines that serve labs and health systems to interpret variants. [Myriad Genetics](https://myriad.com/?utm_source=google&utm_medium=cpc&utm_campaign=ent_branded&utm_term=myriad%20genetics&utm_agid=175255177438&gad_source=1&gad_campaignid=22191527660&gbraid=0AAAAAod6PjnGSAVzmKfSMhjDEkAYjh_K4&gclid=Cj0KCQjwqebEBhD9ARIsAFZMbfyvKo5F727NJs5d9xFJdHDjoZ_A0-gtknuw6RD5hGc3HBsCl099JZYaApyHEALw_wcB) and [Ambry Genetics](https://www.ambrygen.com/?utm_term=ambry%20genetics&utm_campaign=General+Ambry+-+Ambry+Genetics+Terms&utm_source=adwords&utm_medium=ppc&hsa_acc=2671683361&hsa_cam=6570287963&hsa_grp=81591073347&hsa_ad=385699208043&hsa_src=g&hsa_tgt=kwd-330473406657&hsa_kw=ambry%20genetics&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=6570287963&gbraid=0AAAAADn2tSHigAL8LgJEkUOhO2eLQsyt6&gclid=Cj0KCQjwqebEBhD9ARIsAFZMbfzg-0HspXyuQk2xGHxQC6wDheg0mtUbfODfJF_HWY58mkcZfRLcKlYaAj1FEALw_wcB) develop clinical genetic tests and actively reclassify variants through RNA follow up, family studies, and surveillance. **DNA FMs can reclassify at scale and therefore develop clinical tests that rule-in more patients for targeted therapy.**

[Myriad reported](https://investor.myriad.com/news-releases/news-release-detail/19786/) 25% of VUS were reclassified of which 9% were upgraded. Ambry reclassified a considerable number of VUS to likely pathogenic / pathogenic (see figure below, small sample size limits generalizability). These reclassifications are reported to ClinVar and then get used by other groups.

![](https://substackcdn.com/image/fetch/$s_!TsI1!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc1c41d6b-74ec-4085-a7a0-d60ca1825c9e_842x397.png)

Reclassification of variants after Ambry used a RNA testing protocol ( https://www.ambrygen.com/providers/bringing-clarity )

#### D. Biosecurity of generated DNA sequences

Given that bad faith actors can [now generate novel DNA sequences with toxic](https://arxiv.org/pdf/2505.23839) or pathogenic features, we must develop technology to identify such sequences. In fact, [Le Cong and Mengdi Wang](https://arxiv.org/pdf/2505.23839) wrote a paper showing how DNA language models can be used to generate problematic sequences. **We need compliance software that can detect novel pathogenic sequences. DNA FMs are a solution to this problem.**

[Shelby Newsad](https://x.com/shelbynewsad) and CompoundVC have written about the problem of DNA biosecurity:

![](https://substackcdn.com/image/fetch/$s_!SiBh!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff9db5204-a368-441b-9278-56ae7431c763_819x516.png)

Taken from CompoundVC Biosecurity post ( https://www.compound.vc/writing/part-ii-the-biosecurity-solution-space-and-potential-for-venture-scale-businesses )

I agree with their premise.

DNA synthesis companies (e.g., TWIST, IDT, Thermo Fisher, Ginkgo, Tierra, benchtop DNA printers) typically follow government guidance currently composed of [rules-based](https://www.battelle.org/markets/health/public-health/epidemiology/ultraseq) sequence checkers and customer watchlists. *This is not a good solution.* We miss a lot of pathogenic sequences. **A fine-tuned DNA FM can flag problematic sequences. Or DNA FMs can have enhanced safety alignments and tracing mechanisms.** This is preferable over rules-based engines like [UltraSEQ](https://pmc.ncbi.nlm.nih.gov/articles/PMC10269449/pdf/spectrum.04160-22.pdf) (TWIST is a customer) given that novel sequences with specific properties can now be generated at scale. Also, the [current administration](https://www.congress.gov/bill/118th-congress/senate-bill/2399) has expressed interest in using AI for biosecurity and we may be able to make progress on this front quickly at a national level.

  
I have a few more applications of DNA FMs that I will defer to part 2 of this series. If I could summarize this post in one brief sentence, it would be: **DNA models can be useful if coupled with high-quality domain-specific multi-modal data.**