---
url: https://open.substack.com/pub/techforest/p/building-an-ai-native-biotech?r=22up4&utm_medium=ios
title: "Building an "AI-native biotech" - by MP Cadosch"
clipped: 2026-01-03 21:08
source: browser-history
---

# Building an "AI-native biotech" - by MP Cadosch

> Source: [https://open.substack.com/pub/techforest/p/building-an-ai-native-biotech?r=22up4&utm_medium=ios](https://open.substack.com/pub/techforest/p/building-an-ai-native-biotech?r=22up4&utm_medium=ios)

# Building an "AI-native biotech"

[![MP Cadosch's avatar](https://substackcdn.com/image/fetch/$s_!hBCy!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd73e6850-2f28-4003-bfd7-591e5c60b00c_144x144.png)](https://substack.com/@techforest)

[MP Cadosch](https://substack.com/@techforest)

Dec 30, 2025

3

2

Share

*I recently wrote the following memo for a biotech startup on setting up infrastructure that leverages AI in key areas of the company.*

Your goal should be to set a very strong software and ML foundation, for scientific and business teams to do their best work efficiently and with confidence. Below I describe some of the pillars I believe are critical for such a foundation.

**Pillar 1: Ontology, data model**

The initial goal is to develop a fundamental data model (or ontology) that represents and captures the entire business. This data model will underlie bioinformatics pipelines, machine learning models, internal scientific reports, and high-level stats for other stakeholders (management, board). An ontology should start small, evolve with the research process, and maintain flexibility. A well-defined ontology will make it easier and faster to iterate on R&D efforts and assess the state of progress. Defining this early on makes sure that all data and metadata is being captured. Ontology would represent not only first-order “concepts” (sample, experiment), but also metadata and results (e.g. QC results, ML features). For data that will be used for machine learning models, it is imperative that data lineage and version control be implemented from the onset, as I have seen ML teams waste too much valuable time getting the data they need.

**Pillar 2: Traditional bioinformatics pipelines**

The specific questions and research direction will dictate the necessary bioinformatics pipelines. Developing, validating, testing, and deploying bioinformatics pipelines requires deep domain expertise. Data modality must be understood, experimental biases modeled, assumptions asserted, and probability models understood. For this purpose, we will have to decide whether to “build or buy”. There are several 3rd party vendors that provide bioinformatics workflows off-the-shelf (Seqera, Latch, etc.). Capabilities, merits, and customization will have to be evaluated against budget and timelines. Generally, I would recommend 3rd party vendors if they include libraries of existing, validated pipelines that are relevant to our domain and demand little to no customization. Otherwise, I question the extra cost and vendor lock-in relative to building in-house. Additionally, there is a new wave of “AI scientists” (Future House, Claude Life Sciences, K-Dense). I haven’t tried any of these yet, but one of the tasks these are getting good at is reverse engineering bioinformatic pipelines from publications (when these are not easily available), or translating these from arcane languages (Perl, R) to more standardized Python. There are also many bioinformaticians with narrow specialties that can be hired for discrete work on a contract-basis.

**Pillar 3: Machine Learning models**

The first step before using AI is deciding whether AI is the right tool at all. What problems are uniquely and best positioned to be captured by ML? Many traditional bioinformatics workflows have ML-based alternatives. Usually, these are problems that cannot be modeled, feature engineering is too finicky, and nonlinearities abound. Once the problems have been defined, the requisite machine learning models and necessary data can be defined. An important consideration early on is statistical significance: how many data points you will need for an ML model to perform at a reasonable level. This is often hard to predict (with Matterworks we were 2x off), but as long as you’re within an order of magnitude, this exercise is directionally useful to evaluate the ROI on applying ML to a problem, given the costs of creating the dataset. The need for large datasets can be mitigated by the use of foundation models (for DNA, RNA, etc.), depending on whether these can be fine-tuned for the problem at hand.

**Pillar 4: Lab data capture**

Lab data capture tends to present a tension: you want to provide scientists with flexibility to document experiments in an e-lab notebook, given that it’s hard to anticipate protocol unknowns during execution and results. At the same time, there is a degree of structured metadata that must be tracked and related to experimental data produced, so that any biases can be accounted for. In my experience, you can never be thorough enough in the data that you capture. Oftentimes your data will present abnormalities, and data scientists will find it very difficult to troubleshoot absent exhaustive details about the experimental conditions. At Matterworks we settled for Notion pages with specific tables where we tracked structured metadata. This saddled the best of both worlds. In my experience, SaaS like Benchling is very pricey (~$20K/user/year) and not a good bargain for early-stage startups. There are several new startups in this space (e.g. Kaleidoscope). I haven’t evaluated any of these personally, and I would question their ability to survive this funding environment. All else equal, I would prefer a tried-and-true general-purpose tool (e.g. Notion) vs a newer, domain-specific one.

**Concluding thoughts**

As with any startup, resources are limited. My philosophy is always to list all efforts by ROI, prioritize ruthlessly, and tackle the simplest activities with a modicum of return. This is easier said than done, given priorities are often nebulous at the company level. I hope to give you a sense of the challenges I encountered at Broad and Matterworks, how I tackled them, and how I would approach them at a new venture.

3

2

Share