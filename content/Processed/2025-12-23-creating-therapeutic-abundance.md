---
url: https://blog.jck.bio/p/creating-therapeutic-abundance
title: "Creating therapeutic abundance"
clipped: 2025-12-23 13:06
source: slack
slack_channel: mkt-research-headlines
---

# Creating therapeutic abundance

> Source: [https://blog.jck.bio/p/creating-therapeutic-abundance](https://blog.jck.bio/p/creating-therapeutic-abundance)

# Creating therapeutic abundance

### On limiting reagents in the medicine production function

[![Jacob Kimmel's avatar](https://substackcdn.com/image/fetch/$s_!2NOW!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F19b716ef-5f9f-4318-adc1-336c159cdc37_1157x1157.jpeg)](https://substack.com/@jacobkimmel)

[Jacob Kimmel](https://substack.com/@jacobkimmel)

Jul 07, 2025

79

9

16

Share

# tl;dr

The invention of new medicines is rate limited by our knowledge of cells and molecules ("targets") that we can manipulate to treat disease. The cost of discovering new medicines has increased because the lowest hanging fruit has been picked on the tree of ideas. Emerging technologies at the intersection of artificial intelligence & genomics have the potential to unlock a new era of target abundance, potentially reversing the decade's long decline in R&D productivity. If realized, this will be one of the most important impacts of AI over the coming decades.

Thanks for reading Creode! Subscribe for free to receive new posts.

# Eroom's law

Gordon Moore famously predicted in 1965 that the number of transistors per integrated circuit would double every two years. [The computing industry delivered](https://en.wikipedia.org/wiki/Moore%27s_law).

[![](https://substackcdn.com/image/fetch/$s_!tFbI!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F50917f35-4ad0-40ef-89c6-187f2a79ef0f_2560x1894.png)](https://substackcdn.com/image/fetch/$s_!tFbI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F50917f35-4ad0-40ef-89c6-187f2a79ef0f_2560x1894.png)

[Jack Scannell](https://www.nature.com/articles/nrd3681) infamously predicted in 2012 that the number of drugs per billion dollars would decline two-fold every nine years. Unfortunately, our therapeutics industry has largely followed through[1](https://blog.jck.bio/p/creating-therapeutic-abundance#footnote-1-166782407).

[![](https://substackcdn.com/image/fetch/$s_!ISKx!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4acc20ef-4c9d-413c-84ea-7846e17877b4_1103x768.png)](https://substackcdn.com/image/fetch/$s_!ISKx!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4acc20ef-4c9d-413c-84ea-7846e17877b4_1103x768.png)

Image from Alex Telford.

## Why has this happened?

Eroom's law contains within it multiple emerging problems in our industry – rising costs for R&D *and* declining success rates per drug program.

Rising R&D costs have many sources. A plurality likely trace back to [Baumol's cost disease.](https://en.wikipedia.org/wiki/Baumol_effect)[2](https://blog.jck.bio/p/creating-therapeutic-abundance#footnote-2-166782407) Cost disease applies throughout the economy though, so on the surface, drug development's unique problems might be more directly tied to the high rate of failure for new candidate medicines.

Drug program success rates are equally complex. Failures can be attributed to safety issues, failure of a drug to hit the desired biological target, or improper selection of the target for a given disease.

Ascribing exact values to the frequency of each of these failures is challenging. Most of the knowledge of drug program lifecycles remains locked within drug companies. Nonetheless, we can bucket the failures into a two broad categories of safety and efficacy and make informed estimates.

1. **Safety failures – ~20-30% of all candidates**A molecule was developed, but proved unsafe in patients. These are typically detected as failures in Phase 1 trials.
2. **Efficacy failures – 70-80% of all candidates**The remainder of all drug candidates that fail – 63% of *all* drugs placed into trials period – fail due to a lack of efficacy. Even though the drugs are safe, they don't provide benefit to the patients by treating their disease.

From these coarse numbers, it's clear that **the highest leverage point in our drug development process is increasing the efficacy rate of new candidate medicines.**[3](https://blog.jck.bio/p/creating-therapeutic-abundance#footnote-3-166782407)

This fact shows up clearly in clinical trial results. The plurality of medicines fail in Phase 2 trials, the first time efficacy is measured, the first time we test the hypothesis of whether manipulating a given biological target will actually benefit patients[4](https://blog.jck.bio/p/creating-therapeutic-abundance#footnote-4-166782407).

[![](https://substackcdn.com/image/fetch/$s_!kDhJ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1d9fe987-3d53-41fa-9865-e82f0be391df_1790x1000.png)](https://substackcdn.com/image/fetch/$s_!kDhJ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1d9fe987-3d53-41fa-9865-e82f0be391df_1790x1000.png)

Imaged from Cook et. al. 2014, *Nature Reviews Drug Discovery*

This stands in contrast to some rhetoric in the ecosystem claiming that an undue regulatory burden in the US market (where >50% of revenues arise) is the main challenge holding back drug development. If this were true, you'd expect to see amazing therapies that are available exclusively in ex-US geographies with simpler regulatory schemes. The absence of these medicines suggests that regulatory changes *alone* are insufficient to fix our therapeutic development challenge, even if they could prove an accelerant.

Rather, our main challenges are scientific. We simply don't know how to make effective drugs that preserve health or reverse disease! *If we want more medicines, we need to understand why they don't work and fix it.*

# Why don't our candidate medicines work?

Efficacy failures can broadly occur for two reasons:

1. **Engagement failures**: We chose the right biology ("target") to manipulate, but our drug candidate failed to achieve the desired manipulation. This is the closest thing drug development has to an *engineering* problem.
2. **Target failures**: The drug candidate manipulated our chosen biology exactly as expected. Unfortunately, the target failed to have the desired effect on the disease. This is a *scientific* or *epistemic* failure, rather than an engineering problem. We simply failed to understand the biology well enough to intervene and benefit patients.

It's difficult to know exactly the exact frequency of these two failure modes, but we can infer from a few sources that **target failures** dominate.

* Success rates for biosimilar drugs hitting known targets are extremely high, >80%[5](https://blog.jck.bio/p/creating-therapeutic-abundance#footnote-5-166782407)
* Drugs against targets with genetic evidence have a 2-3 fold higher success rate than those against targets lacking this evidence, suggesting that picking good targets is a high source of leverage[6](https://blog.jck.bio/p/creating-therapeutic-abundance#footnote-6-166782407)
* Among organizations with meaningful internal data, picking the right target is considered the first priority of all programs (e.g. "Right target" is the first tenet of AstraZeneca's "5Rs" framework)[7](https://blog.jck.bio/p/creating-therapeutic-abundance#footnote-7-166782407).

The predominance of target failures has likewise led most companies working on new modalities to address a small set of targets with well-validated biology. This has led to dozens of potential medicines "crowding" on the same targets, and this trend is increasing over time[8](https://blog.jck.bio/p/creating-therapeutic-abundance#footnote-8-166782407). A recent [report from LEK](https://www.lek.com/insights/hea/us/ei/biopharma-doing-enough-advance-novel-targets) demonstrates just how pronounced this trend has become. As a complement to rigorous academic and market research, simply [scanning](https://crisprtx.com/pipeline) the [pipeline](https://www.alnylam.com/alnylam-rnai-pipeline) [pages](https://www.intelliatx.com/pipeline/) of [biotechs](https://www.editasmedicine.com/gene-editing-pipeline/) will convince an interested reader that this phenomenon is very real.

[![](https://substackcdn.com/image/fetch/$s_!sBUU!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1ea907ad-86f4-465e-a82c-f449d6acaaa2_960x645.png)](https://substackcdn.com/image/fetch/$s_!sBUU!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1ea907ad-86f4-465e-a82c-f449d6acaaa2_960x645.png)

Target crowding map from [LEK Consulting](https://www.lek.com/insights/hea/us/ei/biopharma-doing-enough-advance-novel-targets). It seems unlikely that this is the optimal allocation of resources if you measure “years of healthy life gained” as your objective function.

Crowding on known targets is perhaps the strongest integrated signal that target failures are the predominant reason our medicines don't work in the clinic. Many distinct teams of incredibly smart people have aggregated all information available and concluded that **target discovery is so fraught, they would prefer to take on myriad market risks to avoid it.**

# Are targets getting harder to find?

If searching for targets is the limiting reagent in our medicine production function, the difficulty of finding targets must *increase* over time in order to explain part of Eroom's law. How could this be the case given all the improvements in underlying biomedical science?

In an influential paper "*[Are ideas getting harder to find?](https://www.aeaweb.org/articles?id=10.1257/aer.20180338)*", Nicholas Bloom and colleagues argue that many fields of invention suffer from diminishing returns to investment. Intuitively, the low hanging fruit in a given discipline is picked early and more investment is required merely to reap the same harvest from higher branches on the tree of ideas.

In therapeutics, we can imagine concrete examples to explain how this might be the case. At the beginning of the Eroom's law data series in the 1950s, the most successful new medicines were broad spectrum antibiotics. In the 1960s and 1970s, several new medicines targeted the central dimorphic sexual hormones (estrogen and testosterone agonists and antagonists). The 1980s saw successful antivirals for HIV and early biologics for central signaling hormones (insulin, growth hormone, erythropoeitin).

It's striking from this sort of survey that infectious disease and circulating hormone targets dominated the first several decades of modern drug discovery. These targets are the most obvious examples of low hanging fruit in the industry. Infectious diseases have a small number of genes – making targets relatively easy to find – and their biology is divergent from our own, so they are uniquely straightforward to drug safely. It's easier to find a safe inhibitor of a gene if the gene only exists in a pathogen, and not normal human cells.

Hormones are likewise simple to identify because they circulate in the blood and their levels can be measured longitudinally. They are simple to drug because their structures are comparatively simple and the biology is "*designed*" for a single molecule to evoke a complex phenotype. Early recombinant DNA companies Genentech and Amgen both chose to develop hormone drugs because the genes were small, and therefore easier to clone and manufacture[9](https://blog.jck.bio/p/creating-therapeutic-abundance#footnote-9-166782407).

The common diseases that predominate as ailments today are far more complex. **Targets are getting harder to find not because we are getting worse at selection, but because many of the easy and obvious therapeutic hypotheses have already been exploited.**

# Inventing medicines that match nature's complexity

Accelerating drug discovery will require us to discover "targets" more effectively. Not only will this involve improving our traditional target identification processes, but changing our definition of a target altogether.

Today, we typically conceive of targets as single gene or molecule that we can manipulate to achieve a therapeutic goal. This conception likely needs to be broken to access the metaphorical fruit higher on the tree.

Aging and disease involve the complex interplay of molecular circuits. Outside of infectious and inherited monogenic diseases, there are few health problems that arise as the result of a single molecule that is too high or too low in abundance. Preserving health and enhancing our physiology will require us to match the complexity of our biology with the complexity of our medicines. We need to stop thinking about targets as single molecules and begin to imagine therapeutic hypotheses that rely on combinations of genes, engineered cellular behaviors, and remodeling of tissues.

This point seems obvious. Why haven't we developed medicines like this to date?

## The origins of our contemporary targets

Most of our current targets emerged from a stochastic research process. Namely, academic researchers explore the biology of a disease, then eventually identify a molecule that is necessary or sufficient for the pathology to manifest. Each of these molecules are typically proposed through a heuristic process.

Concretely, a scientist sits and thinks hard about the problem, makes a guess at the responsible molecular players based on their intuition, prior art, and their new data, then tests to see if the molecule is causal. The *vast* majority of these hypotheses are wrong! The few that prove to be correct often become the basis of our modern target-based drug discovery process and several companies quickly launch programs to prosecute them. This approach yielded targets like PD-1, CD19, VEGFR2, and BTK within the sphere of crowded targets today.

Despite its successes, this method has a few key limitations that explain why our current targets are so tightly constrained.

1. The throughput of target:disease pairs tested in this fashion and the efficiency in terms of dollars per target discovered are fairly low[10](https://blog.jck.bio/p/creating-therapeutic-abundance#footnote-10-166782407).
2. Given the low throughput, it's nearly impossible to test hypotheses that involve manipulating biology in a manner more complex than dialing a single target all the way up (overexpression, drug-like agonism) or all the way down (genetic knockout, drug-like inhibition). This inherently **limits us to discovering targets that are far more reductionist than the actual biology we hope to manipulate.**

### Distilling natural experiments

The sparsity of target space has been an acknowledged problem in the industry for decades. Shortly after the conclusion of the Human Genome Project, large s

[... truncated ...]