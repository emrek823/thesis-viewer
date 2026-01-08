---
url: https://t.co/OMbrQ9q0R0
title: "RNA structure prediction is hard. How much does that matter?"
clipped: 2025-12-29 13:33
source: browser-history
---

# RNA structure prediction is hard. How much does that matter?

> Source: [https://t.co/OMbrQ9q0R0](https://t.co/OMbrQ9q0R0)

[Arguments](https://www.owlposting.com/s/arguments/?utm_source=substack&utm_medium=menu)

# RNA structure prediction is hard. How much does that matter?

### 4.8k words, 22 minute reading time

[![Abhishaike Mahajan's avatar](https://substackcdn.com/image/fetch/$s_!RQwq!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F983f59da-174d-48ac-b1cf-1d27464308ca_399x399.jpeg)](https://substack.com/@abhishaikemahajan)

[Abhishaike Mahajan](https://substack.com/@abhishaikemahajan)

Sep 26, 2025

46

5

5

Share

[![](https://substackcdn.com/image/fetch/$s_!5rzr!,w_2400,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4f882018-1b26-4247-9b63-352fcec1d49a_2912x1632.png)](https://substackcdn.com/image/fetch/$s_!5rzr!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4f882018-1b26-4247-9b63-352fcec1d49a_2912x1632.png)

*Note: I am not an expert in RNA structure, and am extremely grateful to [Connor Stephens](https://x.com/ceejhayess), [Rishabh Anand](https://x.com/rishabh16_)**,** [Ramya Rangan](https://x.com/ramyarangan), and [Chaitanya K. Joshi](https://x.com/chaitjo)—all of whom are actual, bonafide experts—for their incredibly detailed comments on earlier drafts of this essay.* *All mistakes are, of course mine, and this essay should not be trusted to function as anything more than entertainment. Do your own research!*

1. [Introduction](https://www.owlposting.com/i/173694583/introduction)
2. [Why is RNA structure so hard to model?](https://www.owlposting.com/i/173694583/why-is-rna-structure-so-hard-to-model)
3. [Why even predict RNA structure in the first place?](https://www.owlposting.com/i/173694583/why-even-predict-rna-structure-in-the-first-place)
4. [How much do we stand to gain if RNA structure prediction improves?](https://www.owlposting.com/i/173694583/how-much-do-we-stand-to-gain-if-rna-structure-prediction-improves)
5. [Some nuance](https://www.owlposting.com/i/173694583/some-nuance)

# **Introduction**

One thing I’ve always wanted to write was ‘*a primer to RNA structure modeling*’. I know literally nothing about the field, other than that there are a few startups playing in the space, and have always been curious what exactly they were up to. But the release of Alphafold3—which can model RNA alongside proteins, DNA, and small molecules—dampened this desire. If a singular model solved the problem of RNA structure, who cares about the specifics of the field at large?

But while I was in San Francisco a few months back, I happened to chat with [Connor Stephens](https://www.linkedin.com/in/connor-james-stephens/), a machine learning scientist at [Atomic AI](https://atomic.ai/). You may recognize that startup, since their founder has the distinct honor of their PhD work in RNA structure modeling being on the cover of Science in 2021 for making [a substantial advance in RNA structure prediction.](https://www.science.org/doi/10.1126/science.abe5650)

[![](https://substackcdn.com/image/fetch/$s_!DyIx!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F867a6a37-bbb4-4656-bfff-76674cab7869_731x1024.png)](https://substackcdn.com/image/fetch/$s_!DyIx!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F867a6a37-bbb4-4656-bfff-76674cab7869_731x1024.png)

But it was long unclear to me what exactly Atomic AI did in terms of R&D. This isn’t a startup post, I’m not planning to explain what their therapeutic goals are. What I **was** curious about was why they continue to have an ML team despite the RNA problem being seemingly solved by Alphafold3. So, I posed that question to Connor.

Connor told me something very fascinating: not only did Alphafold3 not solve the problem of RNA structure prediction, RNA may be one of the last structure prediction problems to be solved. The rest of the conversation was so incredibly fun that, midway through it, I decided it’d make for a great article to write about.

# **Why is RNA structure so hard to model?**

On face value, the answer is pretty simple: experimentally determined RNA structures deposited in public repositories are both ridiculously small in number and of much lower quality than you’d naively expect. [A quote from a paper best explains this](https://www.biorxiv.org/content/10.1101/2024.06.13.598780v1.full.pdf):

> *There is a huge disparity in protein and RNA data. Even if there is a higher proportion of RNAs than proteins in the living, this is not reflected in the available data: only a small amount of 3D RNA structures are known. Up to June 2024, 7,759 RNA structures were deposited in the Protein Data Bank (34), compared to 216,212 protein structures. The quality and diversity of data are also different: a huge proportion of RNAs come from the same families. It implies several redundant structures that could prevent a model from being generalized to other families. In addition, a huge amount of RNA families have not yet solved structures in the PDB. **This means there is no balanced and representative proportion of RNA families through the known structures.***

The obvious follow-up question is: why? Apparently, RNA is a good fit for basically none of the existing structure determination methods. But again, why?

Connor told me that RNA is famous for being perhaps one of the most flexible biomolecules to exist as a category, with an almost absurd number of conformational degrees of freedom. Each nucleotide has more torsion angles than an amino acid, and the lack of a bulky side chain—like those in amino acids—means there’s very little steric hindrance to keep the backbone from flopping around. Now, keep in mind, this is not to say that RNA is **unstructured**. Unstructured has a particular meaning, that the energy landscape is flat, with no favored conformational structure. [But this isn’t the case for RNA](https://www.pnas.org/doi/10.1073/pnas.2112677119), which do have preferred conformational structures, there are just many of them that they constantly flip in between.

This all implies that RNA is a very bad fit for X-ray crystallography, which requires orderly, repeating conformations to arrange into a crystal. It is also a bad fit for cryo-EM ([a subject I’ve written about in detail before](https://www.owlposting.com/p/a-primer-on-ml-in-cryo-electron-microscopy)), given both the **extreme** conformational heterogeneity of it and how typically small the biomolecule is, [though this is increasingly being addressed](https://www.nature.com/articles/s41592-020-0878-9). Finally, NMR, which, while more forgiving when it comes to flexibility and heterogeneity, is generally limited to **very** small RNA structures. Once the RNA goes beyond ~50 nucleotides, the spectra start overlapping and the resolution being insufficient to observe anything useful. And lots of important RNA lies beyond that size!

I’ve attached some nuance about NMR and cryo-EM in the footnotes.[1](https://www.owlposting.com/p/rna-structure-prediction-is-hard#footnote-1-173694583)

This means that there are really only two RNA structures that can be physically characterized: ones that have been artificially stabilized, or ones that are evolutionarily constrained to hold a single dominant conformation.

The first category includes structures coaxed into rigidity by heavy metal ions, engineered base modifications, or even crystallization chaperones. But of course, this raises a worrying question: are you really measuring the native structure, or just the structure you forced it into? The second category is rarer: RNAs that, through evolutionary pressure, have converged on a stable structure for a functional reason. There are no caveats there, only that trying to train a model on these nucleotide sequences will inevitably bias it towards unusually stable RNA structures.

Well, we shouldn’t let all of this get us down. Many impossible problems are being solved day-after-day in this field. Even if RNA modeling has all the characteristics of being hard to do—huge distributional space of possible outputs for a given input **and** low number of input data points—surely, some headway has been made in the problem. Consider Alphafold3: how well does it **actually** do on the RNA structure prediction problem?

A well-named paper titled [Has AlphaFold3 achieved success for RNA?](https://journals.iucr.org/d/issues/2025/02/00/lie5001/index.html) tries to answer this question. From the article:

> *The best models from the CASP-RNA competition, which are human-guided, outperform AlphaFold3….*
>
> *….On the other hand, AlphaFold3 shows a cumulative sum of metrics greater than the other methods for the other test sets (p-value < 10−5 for RNA-Puzzles, p-value < 10−4 for RNASolo).*
>
> *For RNA-Puzzles, the challenge-best solutions are from older solutions with less advanced architectures compared with the more recent CASP-RNA solutions.*
>
> *For the RNA3DB\_0 data set, the performance of AlphaFold3 is slightly better compared with RhoFold, which gives a better RMSD but a worse MCQ and LCS-TA.*
>
> *AlphaFold3 always has a high MCQ value, indicating that it returns structures which are more physically plausible than ab initio methods (which use physics properties in their predictions).*
>
> *Nonetheless, it does not always have the best RMSD (outperformed in CASP-RNA and RNA3DB\_0), suggesting that AlphaFold3 does not always have the best alignment (in terms of all atoms) compared with the reference structure.*

In short, while Alphafold3 is certainly an improvement in some categories of RNA—namely being the only RNA structure prediction method that can model very large RNA’s well—**it does not solve the problem outright, and can be outperformed through tailored methods.**

Another [slightly more recent paper](https://www.biorxiv.org/content/10.1101/2025.04.30.651414v1.full.pdf) says something similar, and gives some insight into the practical meaning of these benchmarks, saying ‘*Boltz-1 and AlphaFold3, make acceptable predictions for about half of the individual RNA chains and complexes.*’. The authors further note that the results get far worse if you deviate into more structurally unique RNA space (bolding added by me):

> *We observed that prediction accuracy, as measured by TM-score, generally increased with higher structural similarity to the training set for all methods. **The mean TM-score is below 0.1 for the category with the least similarity and increases gradually to over 0.6 for the category with the highest similarity to the training set**. This suggests that AlphaFold3 and other methods tend to perform better when the target structure is more similar to motifs it encountered during training, highlighting the limitation of current methods in predicting unseen and structurally divergent RNAs.*

Neat!

I could end the essay here, because this really did cover most of Connor and I’s conversation. There is a lot more that could be said about how difficult benchmarking can be in the RNA ML world, the weak co-evolutionary signal in RNA MSA’s, how even the existing set of RNA structures are made worse by the fact that they are almost always in complex with a protein, and (hearsay) that you likely need experimentally-determined templates/molecular-dynamics to get good structure predictions. [This paper discusses all that in more](https://academic.oup.com/nar/article/51/18/9522/7272628?login=false) detail if you're curious, but my main question got answered!

But the more I talked to people in the RNA space while writing this essay, the more I began to ask a new question: how important is this problem anyway?

# **Why even predict RNA structure in the first place?**

For the protein-heads reading this, we know that protein structure actually means something quite fundamental. A protein’s three-dimensional fold is usually synonymous with its biological role: an enzyme pocket is what catalyzes a reaction, an antibody groove is what binds an antigen, a receptor domain is what recognizes a ligand. We can hem and haw about dynamics or post-translational tweaks, but the basic architecture is what makes the protein what it is. [Protein structure isn’t exactly truth](https://www.cell.com/cell/fulltext/S0092-8674(24)00005-9?__cf_chl_rt_tk=zSgWgFxiHRjxK1KWs_juQiWifKg.CYPamR_HBg0GuBY-1755989805-1.0.1.1-RWSLrfc.fJDowEjjNVanp4kgVjTFHoRUF9k_bvmN_sE), but structure **can** be a proxy for truth a sufficiently high fraction of the time.

RNA is not like this at all. It’s actually really, really, really situational when the structure of RNA matters in a therapeutic context. Well, to be more nuanced, structure **always** matters, but there is a very significant split what ‘structure’ even means for this biomolecule: secondary structure and tertiary structure ([image from here](https://www.researchgate.net/figure/RNA-primary-left-secondary-middle-and-tertiary-structures-right-The-RNA-folding_fig1_354169706)):

[![](https://substackcdn.com/image/fetch/$s_!Bwzd!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4fa53b91-7de4-4403-a17c-b83d388f7e21_1456x807.png)](https://substackcdn.com/image/fetch/$s_!Bwzd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4fa53b91-7de4-4403-a17c-b83d388f7e21_1456x807.png)

**Thus far, everything we’ve talked about regarding the ‘difficulty of structure prediction’ has been for tertiary structure.**

Now, this separation exists for proteins as well! But it (somewhat) matters less for proteins. Usually we treat “protein structure” as a single concept because the hierarchy is tightly coupled: secondary structure (α-helices, β-sheets) stacks neatly into tertiary folds, which in turn map directly to function. You can often ignore the distinction because the two levels reinforce each other, and so everyone hyper-focuses on tertiary structures being the most important thing.

But for RNA, the distinction matters a lot, because secondary structure seems to be where **most of the clinically relevant value of structure is**. Tertiary RNA structure is important! But, as far as I can tell, the value of it is actually relatively limited in scope for therapeutic-relevant problems, partially due to the fact that RNA is just so flexible that a tertiary structure phenomenon like ‘*the binding site is buried in the core*’ can immediately be undercut by that same core suddenly flopping out in a new conformation.

And, just as is the case for proteins, RNA secondary structure is far easier to predict than RNA tertiary structure. It’s still comparatively hard, in the sense that secondary protein structure is basically something people don’t ever worry a

[... truncated ...]