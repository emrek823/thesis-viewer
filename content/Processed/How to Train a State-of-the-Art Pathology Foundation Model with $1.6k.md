---
title: How to Train a State-of-the-Art Pathology Foundation Model with $1.6k
source: https://sophont.med/blog/openmidnight
author:
published:
created: 2025-12-17
description:
tags:
  - clippings
---
[![Sophont](https://sophont.med/assets/images/logo.png)](https://sophont.med/)

[💻 Code](https://github.com/MedARC-AI/OpenMidnight) [🧪 Demo](https://huggingface.co/spaces/SophontAI/OpenMidnightDemo) [🤗 Model](https://huggingface.co/SophontAI/OpenMidnight)

![Introducing OpenMidnight foundation model for pathology.](https://sophont.med/assets/images/openmidnight/figure1.png)

Figure 1: Overview of the OpenMidnight pathology foundation model training and evaluation pipeline.

**TL;DR:** We present **OpenMidnight**, a replication and improvement of the Midnight pathology foundation model, that achieves state-of-the-art performance across multiple benchmarks while being trained on just 12,000 whole-slide images for only $1.6K. We demonstrate that foundation models for computational pathology do not require massive scale to achieve top performance, and we release the full training pipeline, code, and model weights to accelerate research in this field.

## Introduction

Examining patient tissue under a microscope by a pathologist is an essential step in diagnosing and treating cancer and other diseases. Specifically, a tissue biopsy is taken, and the sample is stained and affixed to a glass slide for the pathologist to analyze. The pathologist performs various tasks, such as detecting abnormal cells and determining the severity of disease. In order to accurately assess the tissue slide, the pathologist has to observe the shape of cells, the organization of cells in the tissue, and more.

Computational pathology (CPath), which is the application of AI to digitized whole-slide images (WSIs), has emerged to augment these workflows. AI systems have been developed for tasks like tumor detection, grading, margin assessment, and segmentation. AI can also be used to predict features that doctors otherwise cannot determine from WSIs like survival-risk prediction, drug treatment response, and even inference of certain molecular or gene expression signatures from morphology.

While many early CPath systems were "narrow" deep-learning models trained for a single task (some methods currently approved by the FDA and used in clinical practice), the field is increasingly exploring foundation models. Rather than training a new model for every task, a single pre-trained foundation model can be adapted to many downstream applications in CPath. Companies like Microsoft, Paige, PathAI, Bioptimus, and Kaiko.AI have each trained their own foundation models for pathology images. They typically rely on self-supervised learning techniques such as DINOv2 to train transformers to learn meaningful representations using unlabeled data.

The prevailing wisdom is that foundation models should improve with scale, so companies with access to the most data should develop the best performing foundation models. However, this is an assumption worth challenging. In April 2025, Kaiko.AI released a [paper](https://arxiv.org/abs/2504.05186) titled "Training state-of-the-art pathology foundation models with orders of magnitude less data" in which they presented Midnight, a foundation model trained on just 12,000 whole-slide images (WSIs) from the publicly available TCGA dataset. Surprisingly, this model performed on par with all the other foundation models, many of which were trained on over a million WSIs!

At Sophont, our initial steps towards training our own pathology foundation model began with a replication of Kaiko.AI's Midnight model, fully open-sourced, including training code and model weights. Through some additional minor pipeline improvements, we achieve state-of-the-art (SOTA) average performance across a variety of benchmarks. We estimate that our model consumed 16× fewer GPU hours and completed in one-quarter of the time it took to train Midnight (single-node 8×H100 for 3.5 days vs. Midnight's 32×H100 for 14 days), costing only $1.6K USD assuming a cost of $2.5/H100/hr (exact compute costs may vary).

In this post, we detail how our Midnight replication works and what it means for the field that this model could outperform the competition *without* scale.

We release this model as **OpenMidnight**, the first model in our series of pathology foundation models. We open-source the model weights on [🤗 Hugging Face](https://huggingface.co/SophontAI/OpenMidnight), and the training code on [💻 GitHub](https://github.com/MedARC-AI/OpenMidnight). If you're interested in trying out the model, we have a [🧪 demo](https://huggingface.co/spaces/SophontAI/OpenMidnightDemo).

## Results

We evaluate **OpenMidnight** on a variety of benchmarks supported by [eva](https://github.com/kaiko-ai/eva), an evaluation suite released by Kaiko.ai. These benchmarks cover multiple different downstream proxy tasks, from nucleus segmentation to tumor patch classification to cancer subtyping of WSIs. We also evaluate **OpenMidnight** on the HEST benchmark, which is a collection of multiple benchmarks for predicting cell gene expression from pathology image patches. Together, these benchmarks expose different strengths and weaknesses of the model being evaluated.

![Average performance of top pathology foundation models and baselines.](https://sophont.med/assets/images/openmidnight/performance_barplot.png)

Figure 2: Average performance of top pathology foundation models and baselines. Scores for prior models are taken from Karasikov et al. (2025).

These results show that **OpenMidnight** 's performance is comparable or superior to all other models on all tasks, with our average performance being the highest among the tested models (Figure 2). OpenMidnight achieves a new state-of-the-art on both BreakHis and Cam16(small) scoring 0.946 and 0.873 balanced accuracy, respectively, beating the next best model, UNI-2’s 0.860 on BreakHis and 0.873 on Cam16(small).

Again, it is worth highlighting that **OpenMidnight** was trained with only 12k slides while UNI-2, the third best model, is trained with over 350k slides!

| Model | #WSIs | PCam (10 shots) | BACH | BRACS | BreakHis | CRC-100K | Gleason | MHIST | PCam | Cam16 (small) | Panda (small) | CoNSeP | MoNuSAC | HEST | Average |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OpenMidnight (Ours) | 12K | 0.790 | 0.916 | 0.661 | **0.873** | 0.961 | 0.817 | 0.844 | 0.938 | **0.946** | 0.652 | 0.631 | 0.655 | 0.390 | **0.775** |
| Midnight | 92K | **0.900** | 0.906 | 0.642 | 0.850 | 0.964 | 0.809 | 0.825 | 0.951 | 0.831 | 0.633 | **0.663** | **0.707** | 0.384 | 0.774 |
| UNI-2 | 350K | 0.887 | 0.914 | 0.661 | 0.860 | 0.965 | 0.778 | 0.823 | 0.949 | 0.868 | 0.659 | 0.628 | 0.644 | 0.414 | 0.773 |
| UNI-2/392 | 350K | 0.821 | **0.917** | **0.663** | 0.829 | 0.965 | 0.791 | 0.849 | 0.927 | 0.858 | 0.653 | 0.629 | 0.659 | 0.407 | 0.767 |
| Virchow2 | 3.1M | 0.851 | 0.884 | 0.624 | 0.823 | 0.966 | 0.778 | **0.861** | 0.936 | 0.865 | 0.656 | 0.639 | 0.676 | 0.398 | 0.766 |
| Midnight 92k | 92K | 0.876 | 0.896 | 0.616 | 0.789 | 0.966 | **0.820** | 0.811 | 0.950 | 0.861 | 0.625 | 0.629 | 0.656 | 0.392 | 0.761 |
| Midnight 12k | 12K | 0.791 | 0.904 | 0.644 | 0.841 | 0.966 | 0.801 | 0.807 | 0.930 | 0.850 | 0.663 | 0.626 | 0.663 | 0.395 | 0.760 |
| H-Optimus-0 | 500K | 0.824 | 0.757 | 0.615 | 0.808 | 0.956 | 0.771 | 0.842 | 0.942 | 0.838 | **0.670** | 0.644 | 0.685 | **0.415** | 0.751 |
| Kaiko-B8 | 29K | 0.786 | 0.872 | 0.617 | 0.825 | 0.957 | 0.748 | 0.828 | 0.917 | 0.831 | 0.642 | 0.643 | 0.686 | 0.373 | 0.748 |
| TCGA-100M | 12K | 0.774 | 0.864 | 0.615 | 0.779 | **0.967** | 0.799 | 0.792 | 0.927 | 0.852 | 0.667 | 0.622 | 0.656 | 0.396 | 0.747 |
| Prov-GigaPath | 171K | 0.852 | 0.766 | 0.616 | 0.821 | 0.951 | 0.720 | 0.831 | 0.942 | 0.791 | 0.660 | 0.626 | 0.687 | 0.393 | 0.743 |
| Hibou-L | 1.1M | 0.804 | 0.811 | 0.637 | 0.740 | 0.933 | 0.763 | 0.839 | **0.952** | 0.823 | 0.634 | 0.645 | 0.668 | 0.388 | 0.740 |
| UNI | 100K | 0.815 | 0.791 | 0.593 | 0.789 | 0.948 | 0.757 | 0.840 | 0.938 | 0.822 | 0.655 | 0.627 | 0.659 | 0.386 | 0.740 |
| UNI/512 | 100K | 0.737 | 0.877 | 0.612 | 0.732 | 0.950 | 0.754 | 0.814 | 0.883 | 0.814 | 0.654 | 0.621 | 0.658 | 0.364 | 0.728 |
| Phikon | 12K | 0.820 | 0.735 | 0.568 | 0.713 | 0.942 | 0.729 | 0.804 | 0.923 | 0.809 | 0.644 | 0.623 | 0.644 | 0.367 | 0.717 |
| Phikon v2 | 60K | 0.741 | 0.734 | 0.600 | 0.716 | 0.939 | 0.755 | 0.784 | 0.893 | 0.803 | 0.631 | 0.626 | 0.645 | 0.375 | 0.711 |
| DINOv2-giant (pretrained) | 0 | 0.719 | 0.725 | 0.583 | 0.832 | 0.935 | 0.744 | **0.862** | 0.874 | 0.507 | 0.382 | 0.564 | 0.614 | 0.342 | 0.668 |
| DINOv2-giant (random) | 0 | 0.649 | 0.473 | 0.411 | 0.427 | 0.748 | 0.464 | 0.569 | 0.755 | 0.566 | 0.308 | 0.461 | 0.428 | 0.172 | 0.495 |

Performance comparison of **OpenMidnight** to existing pathology foundation models on eva+HEST benchmarks. Scores for existing models are taken from Karasikov et al. (2025). We report balanced accuracy for the classification tasks, Dice score for semantic segmentation (CoNSeP and MoNuSAC), and the average Pearson correlation for the nine HEST regression tasks. Only performance with \[CLS\] token is reported. Best score per dataset is bolded.

We also qualitatively evaluated the representations learned by **OpenMidnight**. We took images from the BACH dataset of breast cancer images, passed them through our model, and visualized the embeddings produced by our model using t-SNE (Figure 3). We see a clear separation between different classes and also observe sensible organization of images in the t-SNE space: normal images are closer to benign images than invasive carcinoma images. We also compare these representations to those of a pretrained DINOv2 ViT-G, which lacks any clear separation between classes.

![t-SNE of CLS token embeddings of images from the BACH dataset.](https://sophont.med/assets/images/openmidnight/bach.png)

Figure 3: t-SNE of CLS token embeddings of images from the BACH dataset from both DINOv2 ViT-G and OpenMidnight. The embeddings from the OpenMidnight foundation model show clear separation across classes, as opposed to the embeddings from the DINOv2 ViT G model.

In addition, we perform a principal component feature analysis within single images of the MoNuSAC dataset (Figure 4). Here we see the principal components picking up on different structures within the image.

![PCA analysis of MoNuSAC embeddings.](https://sophont.med/assets/images/openmidnight/PCA2.png)

Figure 4: PCA analysis of MoNuSAC embeddings. It's possible to visualize different tissue components using PCA.

## How we did it

Our training approach does not differ significantly from other SOTA pathology foundation models, which utilize Meta's DINOv2. However, we mostly follow the original Midnight paper, which makes a few changes that likely enable more data-efficient training.

We start with a pretrained 1.1B parameter ViT-G DINOv2. We suspect that initialization with the pretrained checkpoint enables faster convergence and more efficient training. We also use the KDE regularizer to help with stable training, replacing KoLeo typically used in DINOv2.

**OpenMidnight** also utilizes augmentations in the Hematoxylin-Eosin-DAB colorspace to increase the diversity of the training data and improve robustness of the model. We also applied these augmentations, but we qualitatively observed that the initial augmentations applied to the image patches during DINOv2 were quite strong, so we decreased the strength of these augmentations.

A majority of the prior works divide up the large whole-slide images into non-overlapping patches of size 224/256 ahead of time, and save them offline. **OpenMidnight** switched to an online patching approach, where the patches are sampled from the whole-slide image during training. We differ from **OpenMidnight** by utilizing a variation of offline patching, in which we instead precompute the image patches. However, we still select the patches randomly from within the image, allowing for overlaps. We also perform filtering of non-informative patches like in **OpenMidnight**.

We train **OpenMidnight** only on one publicly available dataset: TCGA, which contains 12K Formalin-Fixed, Paraffin-Embedded (FFPE) slides from 32 different cancer types. Note that while some pathology foundation models also train on this dataset, most utilize large-scale proprietary datasets.

We train using 8 Nvidia-H100 GPUs (80GB memory) at a batch size of 48 per GPU (384 total batch size), for 250K steps, at a learning rate of 2.0e-4 with the AdamW optimizer. This takes around 83.33 wall-clock hours (667 GPU hours), with 96M image patches seen, and 29M unique image patches.

## The current state of pathology foundation models

The surprising performance of **OpenMidnight** motivates us to take a closer look at the state of pathology foundation models.

All the top CPath foundation models were trained nearly identically, with the biggest difference coming from the private data sources used to train the model. Everyone seems to follow the same recipe of DINOv2 from scratch on patches of whole-slide images, with a few groups identifying benefits from things like swapping out KoLeo with KDE regularization, discarding patches that contain primarily adipose tissue, and performing data augmentation steps curated better for pathology slides than natural images.

Despite almost identical model architectures, downstream performance across the foundation model landscape is messy. Among the top models, there isn't a clear winner in performance across all the benchmarks (see table above). Additionally, Figure 5 (numbers pulled from prior works) demonstrates that when training pathology foundation models, average performance is not cleanly correlated with the compute used or dataset size.

![Average model performance plotted against amount of training compute.](https://sophont.med/assets/images/openmidnight/path_plots_a.png)

Figure 5: Average model performance plotted against amount of training compute and dataset size. Compute is normalized to H100 GPU-hours. Models that do not report training compute or dataset size are omitted. Poor scaling of pathology foundation models is observed.

These observations reveal some of the limitations of the current state of the field. We come to two conclusions. First, **OpenMidnight** demonstrates that we can push foundation models on limited data much further than previously thought. Second, the messy performance landscape points to a broader concern: whether these benchmarks are truly reflective of real-world use-cases. Perhaps performance completely changes when applied to more sophisticated downstream use-cases beyond linear probes on basic classification tasks. Additionally, we note that datasets used for benchmarking are often low-quality or are improperly preprocessed during benchmark evaluation. For instance, we observed that vision transformers pretrained only on ImageNet (i.e., a model that has never seen a pathology slide) can actually outperform *all* pathology foundation models on the MHIST dataset. For these reasons, we urge the field to adopt better-curated benchmarks, rigorous preprocessing checks, and develop more practically oriented standardized evaluations; frameworks like eva were a much-needed step towards reproducible comparisons but further work is needed to align evaluations with clinical utility. Unfortunately, the most clinically relevant datasets and benchmarks are private, and we encourage the community to open-source better real-world benchmarks.

## Open-sourcing the full pipeline

We believe that fully open-sourcing the code, weights, and evaluation scripts lowers the barrier to entry, and accelerates progress in CPath with improved trust and reproducibility.

We hope that **OpenMidnight** will serve as an accessible baseline for pathology foundation models, and our open-source training pipeline will expand participation in the development of the next generation of pathology foundation models. Students, clinicians, and researchers without access to large compute clusters or private datasets can work together with us on methods to improve the field for everyone.

We request the CPath community to experiment with **OpenMidnight** and test out the model in their own research, and share any interesting results with us in the [MedARC](https://medarc.ai/) community Discord server [here](https://discord.gg/tVR4TWnRM9).

We are also building in public and welcome collaborators of all forms in the MedARC Discord server as we develop our next model, one that will deviate further from prevailing recipes to hopefully deliver larger practical gains (including better whole-slide context and a DINOv3 backbone).

Additionally, we are actively hiring, so if this is a research area that interests you, check out our [job posting](https://sophont.med/job_postings/vision)!

Finally, if you are a life sciences company/startup, hospital, clinician, etc. interested in applying our models to your own use cases, contact us [here](https://sophont.med/#contact).

### Acknowledgments

We thank Mikhail Karasikov for answering questions about Midnight. We thank Nicolas Känzig for answering questions about eva. We thank the members of MedARC and the broader research community for their feedback and support. We are very grateful to [FAL AI](https://fal.ai/) for granting compute to support this open-source research.

### Citation

For attribution in academic contexts, please cite this work as

```
Daniel Kaplan, Ratna Sagari Grandhi, Connor Lane, Benjamin Warner, Tanishq Mathew Abraham, and Paul S. Scotti, "How to Train a State-of-the-Art Pathology Foundation Model with $1.6k", Sophont Blog, 2025.
```

BibTeX citation

```
@article{kaplan2025openmidnight,
            author = {Kaplan, Daniel and Grandhi, Ratna Sagari and Lane, Connor and Warner, Benjamin and Abraham, Tanishq Mathew and Scotti, Paul S.},
            title = {How to Train a State-of-the-Art Pathology Foundation Model with \$1.6k},
            year = {2025},
            url = {https://sophont.med/blog/openmidnight},
          }
```

### References

[^1]: Data-efficient and weakly supervised computational pathology on whole-slide images  
Lu, M.Y., Williamson, D.F., Chen, T.Y., Chen, R.J., Barbieri, M. and Mahmood, F., 2021. Nature biomedical engineering, Vol 5(6), pp. 555—570. Nature Publishing Group UK London.

[^2]: Near real-time intraoperative brain tumor diagnosis using stimulated Raman histology and deep neural networks  
Hollon, T.C., Pandian, B., Adapa, A.R., Urias, E., Save, A.V., Khalsa, S.S.S., Eichberg, D.G., D'Amico, R.S., Farooq, Z.U., Lewis, S. and others,, 2020. Nature medicine, Vol 26(1), pp. 52—58. Nature Publishing Group US New York.

[^3]: A deep learning algorithm with high sensitivity for the detection of basal cell carcinoma in Mohs micrographic surgery frozen sections  
Campanella, G., Nehal, K.S., Lee, E.H., Rossi, A., Possum, B., Manuel, G., Fuchs, T.J. and Busam, K.J., 2021. Journal of the American Academy of Dermatology, Vol 85(5), pp. 1285—1286. Elsevier.

[^4]: Hover-net: Simultaneous segmentation and classification of nuclei in multi-tissue histology images  
Graham, S., Vu, Q.D., Raza, S.E.A., Azam, A., Tsang, Y.W., Kwak, J.T. and Rajpoot, N., 2019. Medical image analysis, Vol 58, pp. 101563. Elsevier.

[^5]: Predicting survival from colorectal cancer histology slides using deep learning: A retrospective multicenter study  
Kather, J.N., Krisam, J., Charoentong, P., Luedde, T., Herpel, E., Weis, C., Gaiser, T., Marx, A., Valous, N.A., Ferber, D. and others,, 2019. PLoS medicine, Vol 16(1), pp. e1002730. Public Library of Science San Francisco, CA USA.

[^6]: Histopathologic image–based deep learning classifier for predicting platinum-based treatment responses in high-grade serous ovarian cancer  
Ahn, B., Moon, D., Kim, H., Lee, C., Cho, N.H., Choi, H., Kim, D., Lee, J., Nam, E.J., Won, D. and others,, 2024. Nature communications, Vol 15(1), pp. 4253. Nature Publishing Group UK London.

[^7]: Multimodal integration of radiology, pathology and genomics for prediction of response to PD-(L) 1 blockade in patients with non-small cell lung cancer  
Vanguri, R.S., Luo, J., Aukerman, A.T., Egger, J.V., Fong, C.J., Horvat, N., Pagano, A., Araujo-Filho, J.d.A.B., Geneslaw, L., Rizvi, H. and others,, 2022. Nature cancer, Vol 3(10), pp. 1151—1164. Nature Publishing Group US New York.

[^8]: Histopathology based AI model predicts anti-angiogenic therapy response in renal cancer clinical trial  
Jasti, J., Zhong, H., Panwar, V., Jarmale, V., Miyata, J., Carrillo, D., Christie, A., Rakheja, D., Modrusan, Z., Kadel III, E.E. and others,, 2025. Nature communications, Vol 16(1), pp. 2610. Nature Publishing Group UK London.

[^9]: A deep-learning framework to predict cancer treatment response from histopathology images through imputed transcriptomics  
Hoang, D., Dinstag, G., Shulman, E.D., Hermida, L.C., Ben-Zvi, D.S., Elis, E., Caley, K., Sammut, S., Sinha, S., Sinha, N. and others,, 2024. Nature cancer, Vol 5(9), pp. 1305—1317. Nature Publishing Group US New York.

[^10]: Pan-cancer image-based detection of clinically actionable genetic alterations  
Kather, J.N., Heij, L.R., Grabsch, H.I., Loeffler, C., Echle, A., Muti, H.S., Krause, J., Niehues, J.M., Sommer, K.A., Bankhead, P. and others,, 2020. Nature cancer, Vol 1(8), pp. 789—799. Nature Publishing Group US New York.

[^11]: Classification and mutation prediction from non—small cell lung cancer histopathology images using deep learning  
Coudray, N., Ocampo, P.S., Sakellaropoulos, T., Narula, N., Snuderl, M., Fenyo, D., Moreira, A.L., Razavian, N. and Tsirigos, A., 2018. Nature medicine, Vol 24(10), pp. 1559—1567. Nature Publishing Group US New York.

[^12]: Deep learning can predict microsatellite instability directly from histology in gastrointestinal cancer  
Kather, J.N., Pearson, A.T., Halama, N., Jager, D., Krause, J., Loosen, S.H., Marx, A., Boor, P., Tacke, F., Neumann, U.P. and others,, 2019. Nature medicine, Vol 25(7), pp. 1054—1056. Nature Publishing Group US New York.

[^13]: HEST-1k: A Dataset for Spatial Transcriptomics and Histology Image Analysis [\[PDF\]](http://arxiv.org/pdf/2406.16192.pdf)  
Jaume, G., Doucet, P., Song, A.H., Lu, M.Y., Almagro-Pérez, C., Wagner, S.J., Vaidya, A.J., Chen, R.J., Williamson, D.F.K., Kim, A. and Mahmood, F., 2024.

[^14]: A whole-slide foundation model for digital pathology from real-world data  
Xu, H., Usuyama, N., Bagga, J., Zhang, S., Rao, R., Naumann, T., Wong, C., Gero, Z., Gonzalez, J., Gu, Y. and others,, 2024. Nature, Vol 630(8015), pp. 181—188. Nature Publishing Group UK London.

[^15]: Virchow2: Scaling self-supervised mixed magnification models in pathology  
Zimmermann, E., Vorontsov, E., Viret, J., Casson, A., Zelechowski, M., Shaikovski, G., Tenenholtz, N., Hall, J., Klimstra, D., Yousfi, R. and others,, 2024. arXiv preprint arXiv:2408.00738.

[^16]: PLUTO: Pathology-Universal Transformer [\[PDF\]](http://arxiv.org/pdf/2405.07905.pdf)  
Juyal, D., Padigela, H., Shah, C., Shenker, D., Harguindeguy, N., Liu, Y., Martin, B., Zhang, Y., Nercessian, M., Markey, M., Finberg, I., Luu, K., Borders, D., Javed, S.A., Krause, E., Biju, R., Sood, A., Ma, A., Nyman, J., Shamshoian, J., Chhor, G., Sanghavi, D., Thibault, M., Yu, L., Najdawi, F., Hipp, J.A., Fahy, D., Glass, B., Walk, E., Abel, J., Pokkalla, H., Beck, A.H. and Grullon, S., 2024.

[^17]: H-optimus-0 [\[link\]](https://github.com/bioptimus/releases/tree/main/models/h-optimus/v0)  
Saillard, C., Jenatton, R., Llinares-López, F., Mariet, Z., Cahané, D., Durand, E. and Vert, J., 2024.

[^18]: Towards Large-Scale Training of Pathology Foundation Models [\[PDF\]](http://arxiv.org/pdf/2404.15217.pdf)  
kaiko.ai,, Aben, N., Jong, E.D.d., Gatopoulos, I., Känzig, N., Karasikov, M., Lagré, A., Moser, R., Doorn, J.v. and Tang, F., 2024.

[^19]: DINOv2: Learning Robust Visual Features without Supervision [\[PDF\]](http://arxiv.org/pdf/2304.07193.pdf)  
Oquab, M., Darcet, T., Moutakanni, T., Vo, H., Szafraniec, M., Khalidov, V., Fernandez, P., Haziza, D., Massa, F., El-Nouby, A., Assran, M., Ballas, N., Galuba, W., Howes, R., Huang, P., Li, S., Misra, I., Rabbat, M., Sharma, V., Synnaeve, G., Xu, H., Jegou, H., Mairal, J., Labatut, P., Joulin, A. and Bojanowski, P., 2024.

[^20]: Scaling Laws for Neural Language Models [\[PDF\]](http://arxiv.org/pdf/2001.08361.pdf)  
Kaplan, J., McCandlish, S., Henighan, T., Brown, T.B., Chess, B., Child, R., Gray, S., Radford, A., Wu, J. and Amodei, D., 2020.

[^21]: Training state-of-the-art pathology foundation models with orders of magnitude less data [\[PDF\]](http://arxiv.org/pdf/2504.05186.pdf)  
Karasikov, M., Doorn, J.v., Känzig, N., Cesur, M.E., Horlings, H.M., Berke, R., Tang, F. and Otálora, S., 2025.

[^22]: The Cancer Genome Atlas Pan-Cancer analysis project.  
Weinstein, J.N., Collisson, E.A., Mills, G.B., Shaw, K.R.M., Ozenberger, B.A., Ellrott, K., Shmulevich, I., Sander, C. and Stuart, J.M., 2013. Nat Genet, Vol 45(10), pp. 1113—1120. [DOI: 10.1038/ng.2764](https://doi.org/10.1038/ng.2764)

[^23]: MoNuSAC2020: A multi-organ nuclei segmentation and classification challenge  
Verma, R., Kumar, N., Patil, A., Kurian, N.C., Rane, S., Graham, S., Vu, Q.D., Zwager, M., Raza, S.E.A., Rajpoot, N. and others,, 2021. IEEE Transactions on Medical Imaging, Vol 40(12), pp. 3413—3423. IEEE.

[^24]: Understanding contrastive representation learning through alignment and uniformity on the hypersphere  
Wang, T. and Isola, P., 2020. International conference on machine learning, pp. 9929—9939.

[^25]: Spreading vectors for similarity search  
Sablayrolles, A., Douze, M., Schmid, C. and Jegou, H., 2018. arXiv preprint arXiv:1806.03198.

[^26]: Decoupled weight decay regularization  
Loshchilov, I. and Hutter, F., 2017. arXiv preprint arXiv:1711.05101.

[^27]: A clinical benchmark of public self-supervised pathology foundation models  
Campanella, G., Chen, S., Singh, M., Verma, R., Muehlstedt, S., Zeng, J., Stock, A., Croken, M., Veremis, B., Elmas, A. and others,, 2025. Nature Communications, Vol 16(1), pp. 3640. Nature Publishing Group UK London.

[^28]: NCT-CRC-HE: Not All Histopathological Datasets are Equally Useful  
Ignatov, A. and Malivenko, G., 2024. European Conference on Computer Vision, pp. 300—317.