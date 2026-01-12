---
url: https://www.owlposting.com/p/better-antibodies-by-engineering
title: "Better antibodies by engineering targets, not engineering antibodies (Nabla Bio)"
clipped: 2026-01-11 06:19
source: browser-history
---

# Better antibodies by engineering targets, not engineering antibodies (Nabla Bio)

> Source: [https://www.owlposting.com/p/better-antibodies-by-engineering](https://www.owlposting.com/p/better-antibodies-by-engineering)

[Startups](https://www.owlposting.com/s/startups/?utm_source=substack&utm_medium=menu)

# Better antibodies by engineering targets, not engineering antibodies (Nabla Bio)

### 4k words, 19 minutes reading time

[![Abhishaike Mahajan's avatar](https://substackcdn.com/image/fetch/$s_!RQwq!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F983f59da-174d-48ac-b1cf-1d27464308ca_399x399.jpeg)](https://substack.com/@abhishaikemahajan)

[Abhishaike Mahajan](https://substack.com/@abhishaikemahajan)

Jan 08, 2025

37

4

7

Share

[![](https://substackcdn.com/image/fetch/$s_!qRUr!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1b258e47-91a5-4974-bacf-d63c376a9d20_4080x2288.webp)](https://substackcdn.com/image/fetch/$s_!qRUr!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1b258e47-91a5-4974-bacf-d63c376a9d20_4080x2288.webp)

*Note: Thank you to [Surge Biswas](https://www.linkedin.com/in/surge-biswas-a8b61270/) (founder of Nabla) for comments on this draft and and [Dylan Reid](https://www.linkedin.com/in/deploy/) (an investor into Nabla) for various antibody discussions! Also, thank you to [Martin Pacesa](https://x.com/MartinPacesa) for adding some insight on a paper of his I discuss here (his comments are included).*

1. [Introduction](https://www.owlposting.com/i/153338716/introduction)
2. [The pain of multi-pass membrane proteins (MPMP)](https://www.owlposting.com/i/153338716/the-pain-of-multi-pass-membrane-proteins-mpmp)
3. [Computational design of MPMP analogues](https://www.owlposting.com/i/153338716/computational-design-of-mpmp-proxies)
4. [“Joint Atomic Modeling”](https://www.owlposting.com/i/153338716/joint-atomic-modeling)
5. [Conclusion](https://www.owlposting.com/i/153338716/conclusion)

# **Introduction**

Antibody design startups are singlehandedly the most common archetype of bio-ML startup out there. It’s understandable why — antibodies are derisked modalities, CDR loops driving antibody efficacy makes the whole structure more amenable to ML, and there’s a fair bit of pre-existing data there. But, because it’s also the most common form of company, it’s difficult to really differentiate one over the other.

If you squint, you could make out some vague distinguishing characteristics. [Bighat Biosciences](https://www.bighatbio.com/) does a lot of multi-property optimization, [Absci](https://www.absci.com/) and [Prescient](https://www.gene.com/scientists/our-scientists/prescient-design) have the strongest external research presence, and so on. **But there is a vibe of uniformity**. It’s nobody’s fault, that’s just the nature of any subfield that has a huge amount of money flowing into it; everyone quickly optimizes. And, unfortunately for those of us who enjoy some heterogeneity, most everyone arrives at the same local minima.

**Because of that, I’ve never really wanted to write about any antibody company in particular.** None of them felt like they had a sufficiently interesting story. All fine companies in their own right, but they all tell the same tale: great scientists, great high-throughput assays, great machine-learning, and so on.

This brings us to the topic of this essay: [Nabla Bio.](https://www.nabla.bio/)

As may be expected, from the earlier sections of this piece, they are an antibody design startup. Founded by [Surge Biswas](https://www.linkedin.com/in/surge-biswas-a8b61270/), an ex-Church Lab student who worked with [ML-guided protein modeling](https://www.nature.com/articles/s41592-019-0598-1) during his PhD, and [Frances Anastassacos](https://www.linkedin.com/in/frances-anastassacos/), they were launched in 2021 and currently sit at 15 employees. **Nabla, on the surface, looks materially indistinguishable from most other antibody design companies.** And, in many ways, they are! If you visit their website, you’ll immediately see references to barcoding, parallel screening, and machine learning. It feels like much of the same story as everyone else.

It took me until a few months later for me to realize that Nabla has an interesting difference. **Because Nabla is not only an antibody engineering company**. They may say they are, and their partnerships may only include antibodies, but I don’t consider that their defining archetype alone.

**What they really are, alongside antibodies, is a target engineering company.** And that is why, amongst companies they are often compared to, I find them uniquely curious. This target engineering thesis they are pursuing is the subject of today's essay.

But before we talk about them, we first need to talk about targets.

# **The pain of multi-pass membrane proteins (MPMP)**

What makes for a good drug target? Of course, the most critical and obvious factor is therapeutic potential. Will modulating this target actually help treat or cure the disease? This is the fundamental requirement that drives target selection. However, there's often a disconnect between knowing a target is therapeutically valuable **and** being able to successfully develop drugs against it.

So, given a set of drug targets that all are known to be related to a disease of interest, how do you pick amongst them? There’s a **lot** of ways you could go about filtering them, including market interest, how much it’s been clinically derisked, and so on. But an often used method for selecting a target is **how easy it is to work with.**

What are the phenomena of targets that are easy to work with? Here are three that come to mind:

1. Stable, because having a protein that maintains a consistent structural and functional identity across time and varying conditions makes in-vitro testing with it **far** easier. When you're running high-throughput screens or binding assays, you’d ideally like for your target protein to not unfold, aggregate, or adopt wildly different conformations between experiments. Stability, in the end, really translates to predictability.
2. Well-characterized, because a protein we understand the behavior of **is a protein that we can exploit**. Binding pockets, conformational changes, and interaction partners of a target can all be helpful things to keep in mind throughout the life cycle of a therapeutic designed to interact with it.
3. Amenable to being bound to by your therapeutic molecule of choice, because how else would a therapeutic interact with it?

**MPMPs fail spectacularly on almost all these counts.**

MPMP’s are amphipathic proteins, meaning having both hydrophilic and hydrophobic components. This should make intuitive sense. In their native context, their hydrophobic transmembrane segments are buried in the cell membrane's lipid bilayer, while their hydrophilic regions extend into the aqueous environments on either side. Importantly, MPMP’s are not only embedded into the cell membrane, but weave through it multiple times. If it wasn’t obvious, that’s what the ‘multi-pass’ bit of the acronym stands for. This means we have alternating, repeating stretches of hydrophobic-hydrophilic residues.

This makes MPMP’s **awful** to work with.

A fair number of other proteins in the human proteome are water-soluble — adapted to exist in the (mostly) aqueous environment of the cell's cytoplasm or extracellular space. These are fantastic to work with! You can extract them, purify them, and work with them while maintaining their native structure. This has a **lot** of second-order value: it’s easier to run experiments with them while having consistent results, it’s easier to characterize their structure using experimental determination techniques, and it’s way cheaper to get them ready for whatever assay you want to run with them.

MPMP’s have no such advantages.

When isolated out of their membrane environment to study individually, it’s a struggle to recapitulate their normal behavior. Their hydrophobic segments, normally protected by the membrane's lipid environment, become exposed to an aqueous environment. This is about as stable as you might expect: these proteins tend to rapidly misfold, aggregate with one another, or completely fall apart. If you want to run a high throughput screen, it’ll be a constant challenge to get consistent protein conformations across your assay conditions. If you want structural data, keeping the protein stable long enough to even attempt crystallization or cryo-EM will be enormously difficult. And even if you manage all of that, you're still left wondering whether the structure you're looking at bears any resemblance to how the protein actually exists in its native membrane environment.

Consider two stories of MPMP’s, and their associated painful stories of working with them:

* **[GPR40](https://en.wikipedia.org/wiki/Free_fatty_acid_receptor_1)** is a GPCR highly expressed in pancreatic beta cells, playing a crucial role in glucose-stimulated insulin secretion. [This makes it a highly attractive target for type 2 diabetes](https://pubmed.ncbi.nlm.nih.gov/23023155/), but, unfortunately, developing drugs against GPR40 has been plagued with difficulties. Including, [but not limited to](https://claude.ai/chat/eb139abc-37c1-407e-9140-efa281f029c1), difficulty of stable purification, difficulty of making it water soluble, and difficulty of using them in standard binding assays, These challenges are undoubtedly part of the reason that despite years of research, only one GPR40-targeting small-molecule drug, Fasiglifam, even reached phase 3 clinical trials. [It has, unfortunately, since been discontinued due to liver toxicity concerns.](https://www.tandfonline.com/doi/abs/10.1080/13543776.2020.1698546)
* **[P-glycoprotein (P-gp)](https://en.wikipedia.org/wiki/P-glycoprotein)** is an efflux transporter, another class of MPMP, responsible for pumping foreign substances out of cells. This is a major cause of multidrug resistance in cancer, [as P-gp can effectively remove chemotherapy drugs from tumor cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC8745603/). Developing inhibitors of P-gp has been a [long-standing goal in cancer research](https://pmc.ncbi.nlm.nih.gov/articles/PMC3762612/). Yet, this too has failed, partially due to the [difficulty of working with the protein](https://www.frontiersin.org/journals/oncology/articles/10.3389/fonc.2014.00041/full). It's extremely difficult to purify in a stable, functional form outside of its native membrane environment (which is, funnily enough, [a fact unique to human P-gp](https://www.frontiersin.org/journals/oncology/articles/10.3389/fonc.2014.00041/full)! Rodent P-gps are far more stable). As a result, structural studies have been incredibly challenging, [with the first high-resolution structure of human P-gp only being reported relatively recently](https://www.science.org/doi/10.1126/science.aar7389) (2018), decades after its discovery in 1976. There is, as of 2024, no approved drugs that successfully inhibit P-gp.

Of course, drug development efforts are rarely stymied by a single reason alone! It is rare that a protein simply being ‘hard to stabilize’ outright ends a program —especially because a potential solution to the above problems is to simply do whole-cell screening (which has its own challenges!) — but it certainly doesn’t help.

The tragedy is that while MPMP’s are one of the most difficult protein structures to study, they are often **incredibly** good targets. This shouldn’t be a surprise if you consider that their dysfunction has been implicated in a wide variety of biological pathways. Pharmaceutical companies have obviously already taken note of this and, as a result, MPMPs make up ~40% of currently known drug targets, despite them being 23% of the human proteome; a testament to their clinical relevance.

**Yet, only two approved antibodies target them:** Mogamulizumab, targeting CCR4 for lymphoma, and Erenumab, targeting the CGRP receptor for migraine prevention. And while there are a far more approved small molecules that target MPMP’s (20%~), antibodies can be a fair bit more efficacious for some targets, so we’d ideally like to rely on that modality as well.

All this adds up to a depressing situation: MPMPs are incredibly important, valuable drug targets, but our ability to develop protein-based drugs against them is severely hampered by our inability to work with them effectively.

What can we do about this?

Well, one more note before we move on, because I also had this question: could you simply...not deal with the MPMP at all, at least not in their entirety? Don’t MPMPs have extracellular (read: soluble) domains that can be expressed and studied in isolation? The membrane-spanning regions might be critically important for the protein's native function, but they're irrelevant if your goal is simply to bind and block (or activate) the protein from the outside. We could just use those, and happily run our binding assays and structure determination and whatever else!

And the answer is…that my assumption is wrong. MPMP’s, in fact, rarely have nicely structured extracellular regions. Single-pass membrane proteins certainly do! But the extracellular bits of multi-pass membrane proteins, unfortunately, noodles of proteins that are similarly a nightmare to work with.

Okay, **now** we can move on.

# **Computational design of MPMP proxies**

Here’s an idea: could we not simply redesign our messy, non-soluble MPMP’s to simply…be soluble? The answer has, historically, been ‘*yes, but it’s hard*.’ In 2004, [someone did it](https://www.pnas.org/doi/10.1073/pnas.0306417101) for a bacterial potassium channel protein (KcsA) In 2013, [another group did it](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0066009) for the human mu opioid (MUR).

But it’s also kinda…bespoke. There’s a lot of custom design, a lot of thinking about interatomic potential energies of this one specific protein, and so on. Very little of the work from any one paper study on a protein seems to easily translate into another protein. This is a problem, given that there are on the order of several thousand potentially useful MPMP’s, and we’d ideally like to not spend graduate student years on creating soluble analogues of each one.

Is this possible to automate?

There is a paper from May 2023 that suggests it is! It is titled ‘**[Computational design of soluble functional analogues of integral membrane proteins](https://www.biorxiv.org/content/10.1101/2023.05.09.540044v1.full.pdf)’,** which has some big names on the author list: Martin Pacesa ([BindCraft](https://www.biorxiv.org/content/10.1101/2024.09.30.615802v1)), Justas Dauparas ([ProteinMPNN](https://www.science.org/doi/10.1126/science.add2187)), and Sergey Ovchinnikov (he’s [Sergey](https://github.com/sokrypton/ColabFold)). What exactly do they do?

The pipeline starts with a target structure of some membrane protein and makes an

[... truncated ...]