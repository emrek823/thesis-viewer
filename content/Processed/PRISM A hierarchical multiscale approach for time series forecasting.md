---
title: 'PRISM: A hierarchical multiscale approach for time series forecasting'
authors:
- Zihao Chen
- Alexandre Andre
- Wenrui Ma
- Ian Knight
- Sergey Shuvaev
- Eva Dyer
date: '2025-12-31'
categories:
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.24898v1
paper_id: 2512.24898v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
---

# PRISM: A hierarchical multiscale approach for time series forecasting

**Authors:** Zihao Chen, Alexandre Andre, Wenrui Ma, Ian Knight, Sergey Shuvaev...

**Date:** 2025-12-31 | **Source:** arxiv | **Categories:** cs.LG

[PDF](https://arxiv.org/pdf/2512.24898v1)

## Abstract

Forecasting is critical in areas such as finance, biology, and healthcare. Despite the progress in the field, making accurate forecasts remains challenging because real-world time series contain both global trends, local fine-grained structure, and features on multiple scales in between. Here, we present a new forecasting method, PRISM (Partitioned Representation for Iterative Sequence Modeling), that addresses this challenge through a learnable tree-based partitioning of the signal. At the root of the tree, a global representation captures coarse trends in the signal, while recursive splits reveal increasingly localized views of the signal. At each level of the tree, data are projected onto a time-frequency basis (e.g., wavelets or exponential moving averages) to extract scale-specific features, which are then aggregated across the hierarchy. This design allows the model to jointly capture global structure and local dynamics of the signal, enabling accurate forecasting. Experiments across benchmark datasets show that our method outperforms state-of-the-art methods for forecasting. Overall, these results demonstrate that our hierarchical approach provides a lightweight and flexible framework for forecasting multivariate time series. The code is available at https://github.com/nerdslab/prism.

## Notes

