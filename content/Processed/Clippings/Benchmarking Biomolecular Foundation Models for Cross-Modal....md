---
title: "Benchmarking Biomolecular Foundation Models for Cross-Modal..."
source: "https://openreview.net/forum?id=YPHxpQH4wx"
published:
created: 2025-12-15
description: "Genome and protein foundation models (gFMs and pFMs) are designed to encode intricate patterns in nucleotide and amino acid sequences, respectively. While existing models are often trained on a single data modality, recent findings suggest that joint training on both nucleotide and amino acid sequences can improve a model’s versatility. However, due to the limited availability of multimodal datasets, training and evaluating models across modalities pose a significant challenge. To address this gap, we introduce Geno-Prot, a new benchmark formed from matched gene and protein sequences mapped to nine attributes that capture structural, functional, and biomedical characteristics of the human proteome. The benchmark poses questions, such as: _Do proteins A and B interact? Do they co-localize in the same subcellular region? Do they bind a common ligand?_ Using Geno-Prot, we evaluate leading gFMs, pFMs, and multimodal foundation models, along with ensembles that combine them. Our comprehensive analysis shows that, across all prediction tasks, ensembles tend to match or outperform the individual models they contain. Ultimately, Geno-Prot serves as a vital tool for model assessment, highlighting the predictive benefits of integrating both genomic and proteomic data. The code for this benchmark is available at https://github.com/LLNL/geno-prot."
tags:
  - "clippings"
---
## Benchmarking Biomolecular Foundation Models for Cross-Modal Genomics-Proteomics

[![Download PDF](https://openreview.net/images/pdf_icon_blue.svg)](https://openreview.net/pdf?id=YPHxpQH4wx "Download PDF")

### Joseph G. Wakim, Vinayak Gupta, Jose Manuel Marti, Jonathan E Allen, Brian R. Bartoldson, Bhavya Kailkhura

NeurIPS 2025 2nd Workshop FM4LS Poster Everyone [Revisions](https://openreview.net/revisions?id=YPHxpQH4wx) [BibTeX](https://openreview.net/?id=YPHxpQH4wx#) [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

**Keywords:**Machine Learning, Artificial Intelligence, Foundation Model, Genome, Protein, Benchmark

**TL;DR:**We develop a novel cross-domain genomic-proteomic benchmark to compare the performance of cutting-edge biomolecular foundation models.

**Abstract:**

Genome and protein foundation models (gFMs and pFMs) are designed to encode intricate patterns in nucleotide and amino acid sequences, respectively. While existing models are often trained on a single data modality, recent findings suggest that joint training on both nucleotide and amino acid sequences can improve a model’s versatility. However, due to the limited availability of multimodal datasets, training and evaluating models across modalities pose a significant challenge. To address this gap, we introduce Geno-Prot, a new benchmark formed from matched gene and protein sequences mapped to nine attributes that capture structural, functional, and biomedical characteristics of the human proteome. The benchmark poses questions, such as: *Do proteins A and B interact? Do they co-localize in the same subcellular region? Do they bind a common ligand?* Using Geno-Prot, we evaluate leading gFMs, pFMs, and multimodal foundation models, along with ensembles that combine them. Our comprehensive analysis shows that, across all prediction tasks, ensembles tend to match or outperform the individual models they contain. Ultimately, Geno-Prot serves as a vital tool for model assessment, highlighting the predictive benefits of integrating both genomic and proteomic data. The code for this benchmark is available at [https://github.com/LLNL/geno-prot](https://github.com/LLNL/geno-prot).

**Submission Number:**56