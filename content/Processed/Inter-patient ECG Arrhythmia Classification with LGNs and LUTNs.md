---
title: Inter-patient ECG Arrhythmia Classification with LGNs and LUTNs
authors:
- Wout Mommen
- Lars Keuninckx
- Paul Detterer
- Achiel Colpaert
- Piet Wambacq
date: '2026-01-16'
categories:
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.11433v1
arxiv_id: 2601.11433v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
---

# Inter-patient ECG Arrhythmia Classification with LGNs and LUTNs

**Authors:** Wout Mommen, Lars Keuninckx, Paul Detterer, Achiel Colpaert, Piet Wambacq

**Date:** 2026-01-16 | **Categories:** cs.LG

[PDF](https://arxiv.org/pdf/2601.11433v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.11433v1)

## Abstract

Deep Differentiable Logic Gate Networks (LGNs) and Lookup Table Networks (LUTNs) are demonstrated to be suitable for the automatic classification of electrocardiograms (ECGs) using the inter-patient paradigm. The methods are benchmarked using the MIT-BIH arrhythmia data set, achieving up to 94.28% accuracy and a $jκ$ index of 0.683 on a four-class classification problem. Our models use between 2.89k and 6.17k FLOPs, including preprocessing and readout, which is three to six orders of magnitude less compared to SOTA methods. A novel preprocessing method is utilized that attains superior performance compared to existing methods for both the mixed-patient and inter-patient paradigms. In addition, a novel method for training the Lookup Tables (LUTs) in LUTNs is devised that uses the Boolean equation of a multiplexer (MUX). Additionally, rate coding was utilized for the first time in these LGNs and LUTNs, enhancing the performance of LGNs. Furthermore, it is the first time that LGNs and LUTNs have been benchmarked on the MIT-BIH arrhythmia dataset using the inter-patient paradigm. Using an Artix 7 FPGA, between 2000 and 2990 LUTs were needed, and between 5 to 7 mW (i.e. 50 pJ to 70 pJ per inference) was estimated for running these models. The performance in terms of both accuracy and $jκ$-index is significantly higher compared to previous LGN results. These positive results suggest that one can utilize LGNs and LUTNs for the detection of arrhythmias at extremely low power and high speeds in heart implants or wearable devices, even for patients not included in the training set.

## Notes

