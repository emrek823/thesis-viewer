---
url: https://www.ksred.com/open-sourcing-eabhaseq-a-synthetic-cfdna-generator-for-nipt-research/
title: "Open Sourcing EabhaSeq: Synthetic cfDNA for NIPT Research"
clipped: 2026-01-05 10:16
source: browser-history
---

# Open Sourcing EabhaSeq: Synthetic cfDNA for NIPT Research

> Source: [https://www.ksred.com/open-sourcing-eabhaseq-a-synthetic-cfdna-generator-for-nipt-research/](https://www.ksred.com/open-sourcing-eabhaseq-a-synthetic-cfdna-generator-for-nipt-research/)

![Open Sourcing EabhaSeq: A Synthetic cfDNA Generator for NIPT Research](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

[ai](/tag/ai/), [entrepreneurship](/tag/entrepreneurship/), [build in public](/tag/build-in-public/)

## Open Sourcing EabhaSeq: A Synthetic cfDNA Generator for NIPT Research

[Kyle Redelinghuys

![Kyle Redelinghuys](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](/author/kyle/)

6 min read

January 05, 2026

Free

**Before we dive in:** I share practical insights like this weekly. Join developers and founders getting my newsletter with real solutions to engineering and business challenges.

[Subscribe here - it's free](/subscribe)

---

I've been working on improving prenatal testing accuracy for almost a year now. What started as a personal frustration with test limitations has evolved into a much larger project - one that I'm finally ready to share publicly. Today I'm open sourcing EabhaSeq, a synthetic cell-free DNA generator designed to help researchers and developers build better NIPT algorithms.

The release includes a 120M parameter transformer model trained on real cfDNA data, available on both [GitHub](https://github.com/Eabha-Seq/cfdna-gen?ref=ksred.com) and [HuggingFace](https://huggingface.co/EabhaSeq/cfdna-gen?ref=ksred.com). You can install it with a single pip command and start generating realistic synthetic cfDNA sequences within minutes. But before diving into the technical details, let me explain why this matters and what problem it actually solves.

## The Data Problem in NIPT Research

If you've worked in genomics or healthcare ML, you'll recognise the fundamental challenge: getting enough high-quality training data is brutally difficult. Real cfDNA samples are expensive to collect, heavily regulated, and for rare conditions like certain trisomies, genuinely scarce. When I started building the foundational NIPT model - the long-term vision behind [EabhaSeq](https://eabhaseq.com/?ref=ksred.com) - I hit this wall almost immediately.

I wrote about [the broader project and Emergent Ventures backing](https://www.ksred.com/building-ai-enhanced-prenatal-testing-with-emergent-ventures/) earlier this year. The goal is building an AI-enhanced prenatal testing system that improves on current methods. But to train models that can detect chromosomal abnormalities with clinical accuracy, you need data representing those abnormalities. And that data simply doesn't exist in sufficient quantities.

The training dataset I used - PRJNA756388, a published NIPT dataset - contains around 14.9 million real cfDNA fragments. That sounds like a lot until you realise it contains no confirmed trisomy 21 cases. No confirmed trisomy 18. No confirmed trisomy 13. Just euploid samples. You cannot learn real patterns for conditions that aren't represented in your training data.

This is where synthetic data generation becomes essential. Not as a shortcut, but as the only viable path forward for certain types of research.

## What EabhaSeq Actually Generates

The model produces two types of cell-free DNA fragments that appear in maternal blood during pregnancy: maternal cfDNA fragments with a characteristic peak around 166-180 base pairs, and fetal cfDNA fragments peaking around 143-170 base pairs. These get mixed at configurable fetal fractions - the percentage of total cfDNA that originates from the fetus, typically ranging from 3-20% in real samples.

You can control three main parameters during generation: fragment length, GC content (the proportion of guanine and cytosine bases, typically around 42% for cfDNA), and fetal fraction. The model captures the realistic patterns found in actual cfDNA including the bimodal fragment length distribution, nucleosome-associated 10bp periodicity, position-specific nucleotide preferences, and characteristic end motifs.

Here's what the basic usage looks like:

```
from cfdna_gen import CfDNAGenerator

# Load from HuggingFace (auto-downloads)
generator = CfDNAGenerator.from_pretrained("eabhaseq/cfdna-gen")

# Generate 100 cfDNA sequences
sequences = generator.generate(
    n_sequences=100,
    fragment_lengths=165,
    target_gc=0.42,
    target_ff=0.10,  # 10% fetal fraction
)
```

The generation scales from quick testing at 10,000 fragments through to full sample simulation at 16 million fragments. For context, a typical shallow whole-genome sequencing NIPT sample contains roughly 16 million fragments, so you can simulate complete samples for algorithm development.

## The Validation Milestone

The moment I knew this was ready to release came from a specific test. I generated detailed synthetic data, then created samples with mathematically injected aneuploidy signals - essentially simulating what trisomy 21 or trisomy 18 would look like at the fragment level. Then I trained a detection model purely on synthetic data and tested whether it could identify the conditions.

The results were better than I expected. Testing on 15 samples - 5 normal, 5 with simulated T21, 5 with simulated T18 - the model achieved 100% detection accuracy. The Z-scores were substantially above clinical thresholds: T21 samples scored around 14 against a threshold of 2.566, and T18 samples scored around 13 against a threshold of 2.459.

I want to be precise about what this does and doesn't prove. This is synthetic-on-synthetic validation. The aneuploidy signals were mathematically injected - for T21, that means 1.5x chromosome 21 coverage in the fetal fraction, which is the exact biological definition of the condition. The model learned to detect mathematically correct signals, not patterns from real clinical T21 samples.

Real-world clinical validation against confirmed cases hasn't been performed yet. That's a future milestone requiring access to validated clinical datasets. But what this does demonstrate is that the synthetic data is realistic enough to train functional detection algorithms. The foundational NIPT model - the bigger vision - can be built on this synthetic foundation.

## Model Architecture and Performance

The released model (v15) is a causal transformer in the GPT style, running at 120 million parameters. The architecture uses 14 transformer layers with 12 attention heads and a hidden dimension of 768. I incorporated several modern optimisations: RoPE for position encoding, SwiGLU activation, RMSNorm, and Flash Attention via SDPA. The whole thing comes in at around 500MB.

Training was done on two NVIDIA RTX 5090 GPUs with 32GB each. For most users generating samples, cloud infrastructure will be the practical choice, especially for larger fragment counts.

The validation metrics tell the story of how realistic the output is:

| Metric | Score |
| --- | --- |
| Overall Similarity | 92.9% |
| Fragment Length Match | 98.4% |
| GC Content Match | 93.3% |
| Nucleotide Frequency | 99.0% |
| Bimodal Peaks Detection | 100% |
| Nucleosome Periodicity | 100% |
| Sequence Uniqueness | 100% |
| Sequence Entropy | 99.6% |

The fragment length distribution matching at 98.4% is particularly important - this captures the characteristic bimodal pattern that distinguishes fetal from maternal fragments. Getting this wrong would make the synthetic data useless for any algorithm that relies on fragment length for fetal fraction estimation.

One limitation worth mentioning: a discriminator model can still distinguish synthetic from real samples with 94-99% accuracy. The synthetic data is realistic enough for training detection algorithms, but not indistinguishable from real cfDNA under close examination. I'd like to get this number down, but for the current use cases it's acceptable.

## How Condition Signals Work

This is worth explaining because it's different from what you might expect. The aneuploidies aren't learned from training data - they're calculated mathematically during generation. When you want to generate a T21 sample, the system injects 1.5x chromosome 21 coverage in the fetal fraction. This matches the exact biological definition: trisomy 21 means three copies of chromosome 21 instead of two, resulting in 50% more genetic material from that chromosome.

This is actually a feature rather than a limitation. You don't need rare disease samples to generate accurate representations of those conditions. The mathematical injection approach means you can simulate any chromosomal abnormality where you understand the underlying biology, without needing to source clinical samples that might not exist in accessible datasets.

The current release focuses on maternal and fetal fragment generation without the full condition generation system. I've been debating whether to include generation for all 46 supported karyotypes - everything from the common trisomies through sex chromosome aneuploidies to microdeletions like 5p (Cri-du-chat) and 22q11. The complexity adds validation burden and potential concerns about misuse, so for now I'm keeping it simpler. This is one area where I'd genuinely value community input.

## The Bigger Picture

EabhaSeq is a component of a larger project. The foundational NIPT model - an AI system that could meaningfully improve prenatal testing accuracy - requires substantial training data that doesn't currently exist. This synthetic data generator is how we get there.

The [current state of NIPT testing](https://www.ksred.com/building-ai-enhanced-prenatal-testing-with-emergent-ventures/) has real limitations. Understanding how long NIPT test results take - typically 7-14 days - becomes crucial when test failures mean additional weeks of uncertainty for families. False positive rates lead to unnecessary invasive follow-up procedures. The technology hasn't fundamentally changed since the early 2000s despite massive advances in AI.

Building something better requires training data for conditions that are rare by definition. Synthetic data generation is the path forward. If this generator proves useful to the research community and the validation holds up against independent datasets, it opens the door to training models on conditions we couldn't otherwise represent.

The foundational model will eventually need proper funding - clinical validation against real samples, regulatory pathway work, the expensive parts of bringing something to healthcare. That's a future milestone. For now, the synthetic data generator is open source and available for anyone working on NIPT research to use and validate.

## Call for Validation and Input

I'm releasing this because I believe it's useful, but I also know the limitations of validating your own work. What I really need is independent testing.

If you're working with cfDNA data, I'd like to hear whether this synthetic data is useful for your pipelines. Does it behave realistically when fed through your existing analysis tools? Can you train algorithms on it that generalise to real samples? Where does it fall short?

If you have access to independent cfDNA datasets, comparison testing would be invaluable. I can provide pre-generated samples if you can't run the generator directly.

Specifically, I'm looking for feedback on whether the synthetic data is distinguishable from real data in ways that matter for downstream applications, whether detection algorithms trained on synthetic data transfer to real data, and whether there are use cases where the current approach falls short.

You can reach me at kyle@eabhaseq.com. I'm genuinely interested in what works and what doesn't - the honest feedback is more valuable than polite encouragement.

## Getting Started

Installation is straightforward:

```
pip install cfdna-gen
```

The model auto-downloads from HuggingFace on first use. Full documentation is on the [GitHub repository](https://github.com/Eabha-Seq/cfdna-gen?ref=ksred.com) and the [HuggingFace model card](https://huggingface.co/EabhaSeq/cfdna-gen?ref=ksred.com) has additional technical details.

The project website at [eabhaseq.com](https://eabhaseq.com/?ref=ksred.com) has broader context on where this fits into the overall prenatal testing work.

This has been a long road from initial research to something releasable. I wrote about [what I learned when statistical models hit their limits](https://www.ksred.com/what-i-learned-building-synthetic-genomic-data-when-statistical-models-hit-their-limits/) earlier in the process - the transformer approach emerged after hitting walls with simpler methods. There's still a lot of work ahead, but having the synthetic data generation working well enough to open source feels like a genuine milestone.

If you're working in this space, I hope it's useful. Let me know what you find.

---

### Need help with your business?

Enjoyed this post? I help companies navigate AI implementation, fintech architecture, and technical strategy. Whether you're scaling engineering teams or building AI-powered products, I'd love to discuss your challenges.

[Learn more about how I can support you.](/consulting)