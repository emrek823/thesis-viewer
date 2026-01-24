---
title: 'PMPBench: A Paired Multi-Modal Pan-Cancer Benchmark for Medical Image Synthesis'
authors:
- Yifan Chen
- Fei Yin
- Hao Chen
- Jia Wu
- Chao Li
date: '2026-01-22'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.15884v1
arxiv_id: 2601.15884v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# PMPBench: A Paired Multi-Modal Pan-Cancer Benchmark for Medical Image Synthesis

**Authors:** Yifan Chen, Fei Yin, Hao Chen, Jia Wu, Chao Li

**Date:** 2026-01-22 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.15884v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15884v1)

## Abstract

Contrast medium plays a pivotal role in radiological imaging, as it amplifies lesion conspicuity and improves detection for the diagnosis of tumor-related diseases. However, depending on the patient's health condition or the medical resources available, the use of contrast medium is not always feasible. Recent work has explored AI-based image translation to synthesize contrast-enhanced images directly from non-contrast scans, aims to reduce side effects and streamlines clinical workflows. Progress in this direction has been constrained by data limitations: (1) existing public datasets focus almost exclusively on brain-related paired MR modalities; (2) other collections include partially paired data but suffer from missing modalities/timestamps and imperfect spatial alignment; (3) explicit labeling of CT vs. CTC or DCE phases is often absent; (4) substantial resources remain private. To bridge this gap, we introduce the first public, fully paired, pan-cancer medical imaging dataset spanning 11 human organs. The MR data include complete dynamic contrast-enhanced (DCE) sequences covering all three phases (DCE1-DCE3), while the CT data provide paired non-contrast and contrast-enhanced acquisitions (CTC). The dataset is curated for anatomical correspondence, enabling rigorous evaluation of 1-to-1, N-to-1, and N-to-N translation settings (e.g., predicting DCE phases from non-contrast inputs). Built upon this resource, we establish a comprehensive benchmark. We report results from representative baselines of contemporary image-to-image translation. We release the dataset and benchmark to catalyze research on safe, effective contrast synthesis, with direct relevance to multi-organ oncology imaging workflows. Our code and dataset are publicly available at https://github.com/YifanChen02/PMPBench.

## Notes

