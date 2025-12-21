---
title: "The optimistic case for protein foundation model companies"
source: "https://www.owlposting.com/p/the-optimistic-case-for-protein-foundation-193"
published: 2025-10-11
created: 2025-12-20
description: "2.4k words, 11 minute reading time"
tags:
  - "clippings"
---
### 2.4k words, 11 minute reading time

![](https://substackcdn.com/image/fetch/$s_!BczQ!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b401a16-5a6a-4ecc-8582-ec0b2afca7d2_2912x1632.png)

*Note: apologies for the double-send if you got two of these, I messed something up in the settings!*

1. [Introduction](https://www.owlposting.com/i/175891339/introduction)
2. [The optimistic arguments](https://www.owlposting.com/i/175891339/the-optimistic-arguments)
	1. [Multiproperty optimization](https://www.owlposting.com/i/175891339/multiproperty-optimization)
	2. [The value of infinite exploration](https://www.owlposting.com/i/175891339/the-value-of-infinite-exploration)
	3. [Open-source models will not be as common anymore if datasets grow more complex](https://www.owlposting.com/i/175891339/open-source-models-will-not-be-as-common-anymore-if-datasets-grow-more-complex)
	4. [Pharma prioritizes convenience more than you think](https://www.owlposting.com/i/175891339/pharma-prioritizes-convenience-more-than-you-think)

## Introduction

Let’s be honest with each other: the funding for protein foundation model startups got a little crazy for a moment. [EvolutionaryScale got $142M](https://fortune.com/2024/06/25/meta-ai-mafia-evolutionaryscale-llm-biology-seed-round-142-million/) in mid-2024, [Latent Labs got $50M](https://www.latentlabs.com/press-release/latent-labs-secures-50m-in-funding/) in early-2025, [Chai Discovery got $70M](https://www.businesswire.com/news/home/20250806670137/en/Chai-Discovery-Announces-%2470-million-Series-A-To-Transform-Molecular-Design) in mid-2025. And, of course, the giant two: [Isomorphic Labs with $600M](https://www.isomorphiclabs.com/articles/isomorphic-labs-announces-600m-external-investment-round) in funding in early 2025, and [Xaira Therapeutics with an insane $1B](https://www.fiercebiotech.com/biotech/new-ai-drug-discovery-powerhouse-xaira-rises-1b-funding) in funding in mid-2024.

Things have calmed down since then, so I think it’s a good moment to look back at this with some fresh eyes and ask: *was any of this a good idea?*

It’s become quite common to tell one another that no, obviously not, these were a series of escalating, FOMO-y investments that had basically zero basis in objective reality. I empathize with this viewpoint. Protein models are increasingly recognized as commoditized things, where the open-source stuff is actually quite good, and, even at the private level, there didn’t seem to be a strong differentiation between one group’s pretrained weights and another’s. If you really squinted, maybe, just maybe, the open-source [Boltz-1](https://www.biorxiv.org/content/10.1101/2024.11.19.624167v1) was slightly worse than Alphafold3 by a few percentage points in a few domains, but how much does that matter? Surely it’s all within a standard deviation of one another? How could this justify the immense investments needed to train these models?

But this view has also become so universally held that, honestly, it’s getting a little boring. Increasingly, I have grown more and more curious about what **actually** was the opinion of people who invested into these things. People knock on VC’s a lot, but I have a pretty high opinion of nearly every biotech VC I’ve met, and it’s difficult for me to imagine that it was all irrational. Unfortunately, the articles that VC’s write on why they invested into certain things — including these companies — are nearly always uninformative, mostly vague gesturing at ‘ *the transformation of biology* ’. You could look at this and think ‘ *okay, nobody knows why they invested in this* ’, but I mostly think the vagueness comes from the fact that they don’t have a strong financial incentive to say what their **actual** bet is.

So what was the actual reason to put money into these companies? It’s difficult to come up with a coherent narrative, so I’m just going to list a few interesting reasons that are swirling in my head.

## The optimistic arguments

## Multiproperty optimization

The divergence of private and public models being on par with one another may accelerate far faster than anyone thinks, entirely due to being able to afford the dataset necessary to optimize for multiple things at once.

Let’s consider [Chai-2’s results from July 2025](https://www.businesswire.com/news/home/20250630307418/en/Chai-Discovery-Unveils-Chai-2-Breakthrough-Achieving-Fully-De-Novo-Antibody-Design-With-AI) as a decent view into how much better the private models are than one open-sourced one— [RFDiffusion](https://www.nature.com/articles/s41586-023-06415-8) —for the task of miniprotein design. The results are hindered by a bit due to the fact that the **best** open-source miniprotein design model— [Bindcraft](https://www.nature.com/articles/s41586-025-09429-6) —is not included here. But whatever, let’s pretend RFDiffusion is as good as open-source gets.

![](https://substackcdn.com/image/fetch/$s_!nxlg!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F61a02f67-455c-44bb-8d4d-d5e1fabfa0a4_900x898.png)

The usual argument at this point is ‘ *who cares about a 10-20% → 80-100% bump?*’, given that these experiments can be run in 96-well plates? Yes, it saves money, but does it unlock dramatically new biology in a way that justifies having a brand new, very expensive model? Probably not!

But I think this is missing the forest for the trees a bit. Binder design is indeed not super interesting (anymore), but it’s worth thinking about what is beyond that. Because, in fact, it is very likely that the real value of these startups may have very little to do with their ability to create binders. Binding is literally just the **easiest** thing you can do, because the dataset to do it has already been mostly assembled: the PDB. So it’s a good place to start your modeling work. The far more interesting capabilities is in creating binders that **also** satisfy a bunch of useful biochemical properties.

What else is there? To name a few: expression, stability, solubility, immunogenicity, receptor promiscuity, manufacturability, and PK/PD. There are plenty of models for optimizing each of these properties one-at-a-time, but creating something that can jointly optimize all these at once is a taller order. A great recent blog post from the Oxford Protein Informatics group [discussed this a little, and you can see the inklings of open-sourced, multi-objective datasets here coming together, but it is still extremely early](https://www.blopig.com/blog/2025/07/antibody-developability-datasets/) and limited in size (almost always <1000 antibodies for non-binding datasets).

![](https://substackcdn.com/image/fetch/$s_!1fF4!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F98c15875-90cc-43ff-a1c3-ecf6d7bff83f_902x1326.png)

What if there was a model that could really solve for all these things at once? What interesting things await if you can essentially automate a pretty significant fraction of the chemistry-relevant parts of the preclinical workflow? [The literature does imply it is quite significant:](https://www.contractpharma.com/characterizing-the-cost-of-non-clinical-development-activity/?utm_source=chatgpt.com)

> *Despite the substantial level of research spending and the growing reliance on outsourcing within the non-clinical domain, to our knowledge very little data exists on the economics of specific non-clinical activities and the comparative cost of internal vs. outsourced support. Andrews, Laurencot and Roy in 2006 reported that the direct cost to conduct specific non-clinical tests for a single compound ran from tens to hundreds of thousands of dollars.*
> 
> *…Ferrandiz, Sussex and Towse in 2012 calculated that the average development costs from first toxicity dose to first human dose for a single compound was $6.5 million (2011$) with the costs ranging from **as low as $100,000 to as high as $27 million**.<sup>6</sup> This wide range suggests many different variables affect the cost of non-clinical development.*

This is all perhaps an obvious point, but I think it is worthy of being explicitly called out. I have long felt that existing benchmarks in the biology-ML world have a tendency to ideologically capture people, limiting them to consider only the scope of what is currently measurable. Here, that is binding, but everything else is really important too! And it may be only the Big Players who can afford touching everything else.

## The value of infinite exploration

I talked about this one on X a month or so ago:

![](https://substackcdn.com/image/fetch/$s_!LCF2!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6e1f0dd7-d55d-4dae-9c01-d82a4a17b0d5_1216x916.png)

Protein foundation model companies may be able to perform a very similar economic miracle as the ones SaaS startups did**: expanding the pharmaceutical ‘** ***attention space*** **’ by virtue of making it very easy to poke around at new binding interfaces, new targets, and new modalities.** This is definitely a minor benefit for binding-only models, since I doubt that alone prevents people from wanting to explore newer things, but lowering friction even mildly might be worth a lot, enabling these companies to have a (slightly) higher chance of coming up with something first-in-class than anyone else. Even more-so if the earlier dream of multi-objective optimization is met!

Now, does this neccesarily mean the benefits of this increased attention-space flows perfectly back to the protein foundation model companies?

Possibly not at all!

I do suspect, at least a little, that part of the VC investment has a bit to do with hoping that other startups make use of the fruits that the foundation model companies produce, which the investors can **then** invest in. **And the only way to secure exposure to that upside is to invest at the model layer early, before those downstream applications exist**. Definitely a rational thing to do if you’re a VC that is flush with money and is able to do this sort of ‘ *seeding of the field* ’ work. And if you look at most of the investors playing in the protein foundation model world, having a lot of dry powder is a shared phenomenon.

An interesting question to ask is ‘ *are there historical parallels to this* ’? Kinda: chip companies. While these companies themselves were valuable, the many application-layer companies that they spawned were orders of magnitude more valuable: Apple, Nvidia, and so on. I do doubt that this is what most venture capitalists were thinking about, but it does feel like a fun, galaxy-brained view of what their opinions may be.

## Open-source models will not be as common anymore if datasets grow more complex

Well, this one depends a bit on multi-property optimization really picking up steam, beyond binding alone. But, if it does, I think it’d be difficult to expect that academia/open-source is really able to come up with anything similar to it. Why? Because I think non-profit initiatives in general aren’t great at creating rapidly producing large datasets, purely because of much of a logistical and economic headache it is for them to do it.

I think open-source data/modal initiatives like [OpenADMET](https://openadmet.org/) and the [OpenFold Consortium](https://openfold.io/) and [EvEBio](https://evebio.org/) ([who I’ve written about before](https://www.owlposting.com/p/mapping-the-off-target-effects-of)) are all really great and will likely be helpful for some people, but it feels like they all have a fundamental, shared issue. **Namely: anything that has a lump-sum, disconnected-from-the-market set of money allocated to it will tend to bias deliverables towards legibility.** As in, the production of artifacts that are known, today, to be useful. In the long term, this will not be particularly helpful for the production of really powerful models in the biology space, which will almost certainly likely rely on relatively high-risk bets on new technology that can massively scale up measurements of known \[things\] of interest.

Even in the realm of binding-only models, the creativity of the private sector is apparent. One of the prototypical examples here is [VantAI’s Neo-1](https://www.vant.ai/neo-1), a generative protein/small-molecule model which used a novel form of internally-produced cross-linking data to train on. Crazy! Difficult to imagine a philanthropist allocating capital to something like that; a training modality that really hadn’t been used before, didn’t have clear benchmarks for, and whose value proposition was fuzzy. One can only imagine how much harder it is to argue for tens-of-millions to be allocated to something like multi-modality setups, which have even less precedent to draw from.

This all said: who knows? One thing that made me update a little bit away from this take was [Adaptyv Bio’s](https://www.adaptyvbio.com/) (a protein assay CRO) recent release of [ProteinBase](https://proteinbase.com/), which is an open-sourced aggregation of assay data from AI-generated proteins produced by Adaptyv. Yes, today it is just binding and expression data, but it feels quite obvious to me that they slowly intend to move beyond that, given that their platform also supports thermostability. And why not other things too? What if their offerings grow to be more, and more complex? Maybe they themselves will start to poke into the world of tool development!

![](https://substackcdn.com/image/fetch/$s_!obMx!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F98034897-2fa7-44c4-977c-165e2ec297b3_2726x1168.png)

Adaptyv Bio is a really, really interesting startup, primarily because they have become very culturally tied to the rest of the bio-ML world. If they gobble up the service requests from that cultural center (who will often have the most interesting models) **and** they intend to really push on open-sourcing some fraction of their data (given customer consent), **and** they will plan to expand out to many different modalities…perhaps open-source models **will** have plenty to train on.

## Pharma prioritizes convenience more than you think

Before we talk about convenience, we should first talk about [Cradle Bio](https://www.cradle.bio/).

Cradle Bio is a European-based startup that works with biotechs to optimize protein properties entirely via ML. Emphasis on **entirely**! To me and to many others, they are one of the most surprising success stories of the bio-ML world. They have no pipeline of their own **and** are working in a seemingly commoditized space **and** aren’t trying to do anything extremely crazy in ML-bio (just like most protein foundation model companies, though they don’t bill themselves that way).

Yet, they are actively growing, [raised a hefty $73M series B end of 2024](https://www.cradle.bio/blog/series-b), and have (from conversations I’ve had with them) plenty of repeat customers.

What’s going on? How did they accomplish this?

The answer, I think, has a lot to do with convenience. The way I used to model pharmaceutical companies was that they are frantically trying to hyper-optimize their whole workflow to ensure that every dollar is perfectly well spent, because there are so few dollars to go around. So **of course** they would do the rational thing: set up an internal computational team, and ask them to spend a few months setting up a [Colabfold](https://github.com/sokrypton/ColabFold) pipeline to screen binders instead of shelling out a few million dollars to companies like Cradle. So obviously, a company like Cradle would dissolve within a year, and their investors would be left with egg on their face.

What a terrible idea!

Of course, it turns out that I’m the real idiot here. As it is the case in literally every industry on the planet, the real barriers in pharmaceutical companies have a lot less to do with \[caring about money\], and much more to do with red-tape. The organizational inertia at even a mildly-large biotech is astronomical, far larger than you could ever imagine, and Cradle likely slots extremely well into that environment; a way to do something potentially exciting (machine learning!), without triggering the full machinery of internal decision-making. And if it works well once, well, why not just use them again instead of building up our own team?

You could draw some vague parallel between companies like Cradle and the usual service providers in the rest of the tech world. Yes, I could hire an engineer to futz around with Kubernetes on some cloud provider…or I could just pay an extra 20% premium to [Modal Labs](https://modal.com/) to handle most of that for me. At some point, the premium will either not be worth it, or working with Kubernetes directly will be essential for higher-complexity tasks, but you can get awful far with outsourcing! Everybody likely already intuitively grasps this, but the degree to which it is true of pharma is, I think, under-appreciated.

To be clear, not all protein foundation model companies likely plan to be exactly like Cradle, most of them do seem to be geared towards having their own pipeline. But amongst those that aspire to be a services-only play, I’ve come around a lot on their prospects. There are a massive number of inefficiencies present amongst their customers, and fortunes await in addressing them. Will it be a fortune large enough to make the company be ‘venture-scalable’? I don’t really know what that word means anymore, but I feel much more optimistic than I used to. Maybe royalties are also on the table if Cradle-esque companies are good enough!