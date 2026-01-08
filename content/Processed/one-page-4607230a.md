---
source_pdf: "https://drive.google.com/file/d/14BSCT26RlREY0eLF24F3ZOxowIHjat6g/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "One page.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/14BSCT26RlREY0eLF24F3ZOxowIHjat6g/view)

# BioMiner AI

Backed by UCSF BLAND STANFORD JUNKR U NVIDIA

## The Multimodal AI Engine for Biology

Multimodal biological data is abundant, yet the field of biology lags behind AI breakthroughs in computer vision and natural language processing. BioMiner AI leverages transformer-based deep learning to advance disease diagnosis, biomarker discovery, and precision medicine by integrating diverse data modalities to uncover clearer signals and deeper insights.

## Our Technology and Pipeline

**Inputs:**
*   Clinical Inputs
*   Omics Inputs
*   Imaging Inputs

**Pipeline Steps:**
*   Omics Encoder
*   Omics Decoder
*   Image Encoder
*   Multimodal Embedding
*   Image Decoder
*   Interpretable Biological Insights

### Data Translation
*   Infer gene signatures from image features

### Prognosis Simulation
*   Forecast changes in tumor shape, size, and growth over time

### Patient-Drug Matching
*   Unique patient profile
*   Determine optimal treatment and the biological reasons that dictate this

## Our Shareable Results

### Glioma Grade Diagnosis
*   Multimodal embedding from mRNA, methylation, miRNA with >99% alignment
*   Surpasses state of the art MOGONET model in *Nature Communications*

**Data Translation Diagram:**

```
[Methylation] -- (Reconstructed) --> [0.96] <-- (Raw) -- [MRNA]
                 ^                                            |
                 |                                            |
                 --------------------------------------------> [microRNA]
                                     (Reconstructed)
```
*   Data translation between modalities retains 90%+ predictive performance

### Copy Number Variation Caller
*   Partnerships with leading hospitals to enrich breast cancer patient populations
*   Improvement over Ginkgo method in *Nature Methods*

**Graphs (Data not extractable as exact numerical points due to image resolution and graph type):**

**Graph 1: Copy Number Variation (Raw Data)**
*   **Y-axis:** Copy Number Variation
*   **X-axis:** Chromosomal Position
*   **Description:** A line graph showing variation along chromosomal positions, labeled "Raw Data".

**Graph 2: Copy Number Variation (Ginkgo (State of the Art))**
*   **Y-axis:** Copy Number Variation
*   **X-axis:** Chromosomal Position
*   **Description:** A line graph showing variation along chromosomal positions, labeled "Ginkgo (State of the Art)".

### HBV Clinical Trial Analysis
*   Despite being trained only on genomic features, the model can distinguish between 5 adjuvants and 9 timepoints

**Graphs (Scatter Plots - Exact numerical data points are not extractable from the image. Listing legend items and axes.)**

**Scatter Plot 1: Adjuvant Type**
*   **Title:** Adjuvant Type
*   **Y-axis:** Principal Component 2
*   **X-axis:** Principal Component 1
*   **Legend (Adjuvant Type):**
    *   AS01B
    *   AS03A
    *   AS04
    *   AS01E
    *   AS03

**Scatter Plot 2: Timepoint**
*   **Title:** Timepoint
*   **Y-axis:** Principal Component 2
*   **X-axis:** Principal Component 1
*   **Legend (Timepoint):**
    *   Day 30 post
    *   Day 37
    *   Day 0, 3 to 6 hours post
    *   Day 33
    *   Day 0, pre vaccination
    *   Day 30, pre vaccination
    *   Day 31
    *   Day 14