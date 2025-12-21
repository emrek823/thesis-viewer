---
title: "A socratic dialogue over the utility of DNA language models (Part 1 of 2)"
source: "https://www.owlposting.com/p/a-socratic-dialogue-over-the-utility"
published: 2025-02-20
created: 2025-12-16
description: "3.7k words, 17 minute reading time"
tags:
  - "clippings"
---
### 3.7k words, 17 minute reading time

![](https://substackcdn.com/image/fetch/$s_!tLEK!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F35b4855f-fcda-444d-8873-342eba840070_2040x1144.webp)

1. [Introduction](https://www.owlposting.com/i/157502460/introduction)
2. [The dialogue](https://www.owlposting.com/i/157502460/the-dialogue)

***[Part 1](https://www.owlposting.com/p/a-socratic-dialogue-over-the-utility) is focused on variant pathogenicity prediction using these models.***

***[Part 2](https://www.owlposting.com/p/a-socratic-dialogue-over-the-utility-a78) is focused on genome generation using these models.***

***I am aware that DNA language models are useful for things other than those two (like protein fitness), but variant prediction and genome generation are the two bits that I find most interesting.***

## Introduction

I think I, alongside many other people in this field, live in this seemingly parallel universe where we don’t really understand why anyone is working on DNA language models. I say ‘parallel’, because there is obviously a world in which some very smart people are very much bullish about them: specifically the [Arc Institute](https://arcinstitute.org/). Who, just yesterday, released a paper that many people are quite excited about: [Evo 2](https://arcinstitute.org/news/blog/evo2), a successor to the original [Evo](https://www.science.org/doi/10.1126/science.ado9336) model. From the news article:

> *Arc Institute researchers have developed a machine learning model called Evo 2 that is trained on the DNA of over 100,000 species across the entire tree of life. Its deep understanding of biological code means that Evo 2 can identify patterns in gene sequences across disparate organisms that experimental researchers would need years to uncover. The model can accurately identify disease-causing mutations in human genes and is capable of designing new genomes that are as long as the genomes of simple bacteria….Building on its predecessor **[Evo 1](https://www.science.org/doi/10.1126/science.ado9336)**, which was trained entirely on single-cell genomes, Evo 2 is the largest artificial intelligence model in biology to date, trained on over 9.3 trillion nucleotides—the building blocks that make up DNA or RNA—from over 128,000 whole genomes as well as metagenomic data. In addition to an expanded collection of bacterial, archaeal, and phage genomes, Evo 2 includes information from humans, plants, and other single-celled and multi-cellular species in the eukaryotic domain of life.*

Which on face value seems cool and obviously impressive. Right? You read this and instinctively go, ‘ *wow, neat!*’. But if you then try to ask ‘ *why would anyone want this?*’, there aren’t many resources to go to ([though I did enjoy Asimov’s recent piece about it](https://www.asimov.press/p/evo-2)). At least outside of the paper, which is a bit hard to immediately understand. For protein folding, the use case of something like [Alphafold2](https://www.nature.com/articles/s41586-021-03819-2) was obvious: if you know the shape of a protein, you can design things that bind to them. And even use the model to generate binders! If you have a model that has a really good latent understanding of DNA sequences, you can…do what exactly? Maybe for some people, the answer is obvious. But it’s not for me, someone who isn’t a genomics person. So this post will be discussing that.

I learn best via [Socratic dialogue](https://en.wikipedia.org/wiki/Socratic_dialogue), which is just argumentative dialogue between individuals based on asking and answering question. This post will have that same setup, but for DNA language models. Notably, this is **not** specifically a post about Evo 2 (though I will often refer to it). It is more about what utility such a model would even have. So, no data or architectural details here, outside of where necessary to discuss use cases.

## The dialogue

*Obvious first question: why make a DNA language model at all? All you’ll really get in the end is something that will tell you if a stretch of DNA looks ‘natural’ or how to infill in a section of missing DNA.**What’s the point of that?*

An obvious question deserves an obvious answer: the former bit about naturalness implicitly allows one to predicts what genetic mutations do — as in, whether or not it is deleterious to the host. For the moment, let’s just focus on that.

Right now, if you sequence someone's genome and find a mutation, you have no idea if it’s important unless it’s already been studied. If it’s a mutation we know causes disease, great, problem solved. But what if it’s a random nucleotide switch in some weird noncoding region? Does it break a regulatory element? Does it subtly mess with splicing? Does it do nothing? [There are millions of genetic variants in humans, and we only know what a fraction of them do](https://pmc.ncbi.nlm.nih.gov/articles/PMC7591931/). Evo 2 can potentially help us uncover the harmful ones.

*How? All Evo 2 can say about a stretch of DNA is how unusual it looks. Is the model equating a variant being harmful with it having a low log likelihood (LL)? If so, it feels deeply strange to equate non-naturalness with something dangerous.*

It is doing that!

And I get the hesitation about equating non-naturalness to danger, but it’s genuinely not a big leap. Evolution is a probability engine. If a particular genetic sequence has been around in thousands of individuals, across thousands (or millions) of years, that suggests it’s been evolutionarily stable. It works. It doesn’t kill you. If a mutation pops up that has never been seen before, that doesn’t necessarily mean it’s *bad*, but it does mean evolution hasn’t had the chance to vet it yet. Which also (probably) implies that it is, indeed, bad.

And, truthfully, it doesn’t really matter if **you** personally buy this line of reasoning, because it’s a mental model that normal geneticists have used for decades with a pretty decent success rate. Traditional pathogenic variant annotation rely pretty heavily on conservation scores, like [PhyloP](https://ionreporter.thermofisher.com/ir/help/GUID-03D1F68A-E646-4B49-AD59-AF2F51874BD2.html)**,** which all work on the assumption that mutations in highly conserved regions are more likely to be harmful, or at least worth taking a closer look at. Evo 2 can be seen as doing the same thing, except at a much, much larger scale.

*So…just like Alphafold2 is technically ‘just’ doing homology matching for proteins, Evo 2 is technically ‘just’ doing conservation scores for DNA?*

You can think of that way, but...we’ll discuss a more nuanced view on that later on in this essay. The real hope is that it’s actually doing something deeper than that. It’s useful mental scaffolding though!

Also, it may be worth mentioning that the authors did actually test out how well this ‘ *Evo 2 may be good at finding bad variants* ’ claim is by assessing how it did on variants of BRCA1. If someone says they have BRCA1 mutation, they usually mean one of the well-known pathogenic variants, [like](https://pmc.ncbi.nlm.nih.gov/articles/PMC1712523/) *[185delAG](https://pmc.ncbi.nlm.nih.gov/articles/PMC1712523/)* [or](https://pmc.ncbi.nlm.nih.gov/articles/PMC1712523/) *[5382insC](https://pmc.ncbi.nlm.nih.gov/articles/PMC1712523/)*, which both cause a frameshift and wreck the protein from being created at all. But what about all the other mutations in BRCA1? Most of them *don’t* cause frameshifts. They might be single-nucleotide swaps, insertions or deletions that don’t obviously kill the whole protein, or even mutations in the noncoding regulatory regions around BRCA1. And for a lot of these, understanding their impact is a bit less clear.

So, can Evo 2 help? To answer this, the authors gave the model 4,000 mutation variants of the BRCA1 gene ([sourced from a mutagenesis study](https://www.nature.com/articles/s41586-018-0461-z)), across both coding and non-coding regions, and asked it to pick out which ones led to complete loss of function of the gene. No labels, just the raw nucleotides. It works quite well:

![](https://substackcdn.com/image/fetch/$s_!2Uac!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4630eb38-e947-4fce-a8a6-c227624f84a7_1196x786.png)

*How do they actually do that? Like, given a stretch of a given BRCA1 mutation, Evo 2 will spit out a likelihood of it existing. How do you convert that to a ‘loss of function’ or ‘no loss of function’?*

Yeah, so you do the forwards pass on Evo 2 **twice**. Once on the reference sequence (the normal BRCA1 gene) and the mutated version. You take the LL of each one and compare the two. If the mutated DNA likelihood is much lower (unexpected) than the normal one, they interpret that as a loss of function of BRCA1. They don’t binarize the differences, they just rank them and calculate the AUROC on that.

*But...implicitly, doesn’t that mean that Evo 2, and DNA language models as a class, cannot do absolute categorization of pathogenicity? Like, with BRCA1, we have a nice, cleaned-up, large dataset for us to use to potentially find a good cutoff point for when the LL differences become high enough for us to define a variant as pathogenic. I’m doubting we can do that for most other genes. Doesn’t that dramatically reduce the use case of this whole system?*

I think it’s a bit pessimistic to say ‘dramatically’, but the thesis of your point is right. Evo 2 cannot currently do a ‘ *this is pathogenic* ’ or ‘ *this is benign* ’ call, you still need some kind of external validation—either clinical data, functional assays, or a huge pre-labeled dataset like the BRCA1 mutagenesis study — to actually interpret the resulting LL differences.

So, in practice, Evo 2 will almost certainly look like something closer to a **heuristic**, just as is the case with conversation scores, a way to triage/prioritize variants for further studies. It’s just better at that task than traditional conservation scores.

*That vaguely makes sense. I think the last question I have on pathogenic variant detection is…why do this at all? What’s the point? I get that there is some latent benefit in consumers being able to go to a genetic counselor and* *be told something other than “Variant of Uncertain Significance” for most of their mutations. That’s fine. But…I dunno, I’m just kinda bearish on consumer genomics as a category. Doesn’t really feel like it fixes anything, just points out what the problem is.*

The pre-cached answer is that this ‘ *consumer being aware of a disease earlier than expected* ’ thing is more impactful than you’d expect. For a ton of conditions, early intervention matters a lot! And if we can discover more of those variants earlier — via models like Evo 2 — it’s all the faster that people can get that necessary intervention.

But you’re hitting across something important here in the overall utility of DNA language models. Their utility in actually helping cure things, instead of just helping intervene earlier, does strongly hinge on assuming some level of simplicity of DNA.

Like, we know the [schizophrenia is highly heritable](https://www.nature.com/articles/s41380-021-01420-7#:~:text=Genetic%20epidemiologic%20studies%20have%20shown,to%20its%20etiology%20%5B1%5D.), but we haven’t been able to nail down the genetic basis for it. We know that heart disease has a strong genetic component, but outside of a few well-known risk alleles (like in *[PCSK9](https://pmc.ncbi.nlm.nih.gov/articles/PMC7538608/)* or *[APOE](https://pmc.ncbi.nlm.nih.gov/articles/PMC5102878/)*), most of the heritability is tied up in thousands of tiny effect variants that we don’t fully understand. And for [neurodevelopmental disorders like autism, we’re pretty sure genetics is a huge](https://pmc.ncbi.nlm.nih.gov/articles/PMC6710438/) driver, but no one has a good map of *how* it all works.

And maybe Evo 2 would help us find those variants and thus, help us generate better drug/genetic engineering targets. On the other hand, maybe we live in the universe where all of it is too hard to disentangle, and Evo 2 saying " *this mutation is unusual* " doesn’t actually get us any closer to a real understanding of disease. Maybe complex disorders like schizophrenia aren’t a matter of finding the right mutations. Maybe it’s all thousands of weakly acting variants, all context-dependent, all interacting with each other in ways that a simple likelihood score can’t capture. And maybe there’s dozens environmental factor that confound it all. **In that world — which is the one that we empirically live in —, Evo 2 will just tell us that most genetic risk is blurry, probabilistic, and fundamentally hard to act on**. Which is something that researchers already knew pretty well.

Or maybe DNA language models change this by taking into account a huge number of datapoints and being able to consider mutations hundreds of kilobases apart and being entirely unsupervised. Who knows?

*Wow. Bleak. So this model has a chance of being useless?*

No. But it does have a chance of being far less radically transformative than the initial pitch may make it seem. At least if we’re limiting our purview of ‘ *impact* ' to be equivalent to ‘ *variant discovery that is* *directly impactful for human health* ’. Even if we end up in that world of ‘ *DNA is still really, really complicated* ‘, DNA language models still **have** use for the same reasons that conservation scores have use. Variant discovery may still be frustrating and probabilistic, but variants are still useful things to be aware of. After all, [PCSK9 inhibitors were discovered as a result of an unusual genetic variant someone found](https://pmc.ncbi.nlm.nih.gov/articles/PMC5510512/). So having a better heuristic for prioritizing which variants to study during an R&D project is still potentially really nice.

I think it’s also worth noting that, since models can Evo 2 can be applied to non-human genomes just as well as it can be applied to human genomes, there’s potentially a lot of impact to be had there in the same general realm of variant discovery. Instinctively, I’m more bullish on this area than human genetics. It takes a **huge** amount of work to be able to study gene region functionality, and humans are a category where we’ve been (no surprise) willing to do that work.

But what about for esoteric cell lines and rare insects and hard-to-gather birds? Maybe there’s something deeply useful about being able to go 0-1 for those groups in terms of gene annotation. Not 0-100, like we’ve done for humans through decades of experimental work, but a kickstarter is always useful in research.

*My instinctive assumption is…we’ve naturally stumbled across **most** of the genetic variants of clinical importance. I can see there being a lot left for non-model organisms, but what about humans? How much is there left on the table?*

It’s an unknown unknowns thing, but instinctively the answer is ‘a lot’, even if you factor in how much time the scientific community has spend studying human genetics.

Like, noncoding DNA often have really long range dependencies. Say you have a transcription factor binding site that’s 100,000 bases away from the gene it regulates. A normal conservation score *might* catch this if the binding site itself is highly conserved across species, but also maybe not. Conservation scores often only look at individual positions or short windows of bases. Evo 2, on the other hand, sees the entire 100,000-base sequence in one go (and is in fact capable of seeing a million bases at once). It can pick up on statistical dependencies between distant elements, even if they’re not obviously related at a single-nucleotide level. Which, again, is probably useful.

*Do ‘genomic areas that affect each other from 100,000 bases away’ actually exist or are you making it up?*

Yeah, like enhancer-promoter interactions**.**

For example, in mammals, the [SHH (Sonic Hedgehog)](https://en.wikipedia.org/wiki/Sonic_hedgehog_protein) gen **e** is controlled by an enhancer called ZRS, [which is one million base pairs away from the gene itself](https://academic.oup.com/hmg/article-abstract/12/14/1725/582084?redirectedFrom=fulltext&login=false&utm_source=chatgpt.com). If you delete or mutate ZRS, you can get serious developmental disorders [like polydactyly (extra fingers and toes)](https://www.nature.com/articles/s41436-019-0626-7), even though the SHH gene itself remains perfectly intact. Evo 2 would likely pick up on this.

But preempting the obvious question: lets say that Evo 2 has told you that ZRS is important for SHH expression, but what does that actually *get* you? The model may recognize ZRS mutations are “low-likelihood” and flag them as potentially impactful, but we already know ZRS is important. It’s not like this is some deep mystery in genetics that we’ve been struggling to figure out.

But let’s be charitable for a second. Evo 2, in theory, could do this *without* prior experimental evidence. No need for decades of painstaking enhancer screens or chromatin interaction assays—it just looks at a sequence and goes, “this bit of DNA looks weirdly important for something else really far away.” That would be nice, because while we know a handful of these long-range regulatory elements, we have absolutely no clue how many others exist across the genome. A lot of noncoding genetic disorders could be caused by things like this—faraway enhancers breaking genes that look perfectly fine in standard sequencing analyses. And, if Evo 2 *is* capable of identifying those relationships from sequence alone, that helps triage further research! **We still probably need to do those enhancer screens and chromatin assays, but at least we can start off with a prioritized list of genomic regions to target.**

*It feels a little bit like a hammer that was invented for a nail that has precedent for existing, but we haven’t actually found the nail yet. You’re using the word ‘probably’ a **lot**.*

That’s not a question, but yeah, I wouldn’t disagree with that characterization.

I feel in my bones that models like Evo 2 accelerate some aspects of the current variant discovery pipeline and we empirically know that variant discovery is useful. What we don’t yet know is **how much** Evo 2 will accelerate it all and whether anyone will actually make use of it. It may be the case that models like Evo 2 help us annotate the genome of some tiny, ultra-rare bacterial species discovered off the coast of California, and, just like the mountains of currently known pathogenic variants, scientists largely ignore it.

Or it might be the case that it’ll be extraordinarily useful right off the bat even for human genomes and people gain a dozen new target ideas after using it. I think the ultimate utility of it will be an exercise in creativity rather than there being a crank you need to turn. I think institutes like [Arcadia Science](https://www.arcadiascience.com/), who study non-model organisms, may be extraordinarily well suited to do something really interesting here using models like these.

*Can we move onto the genome design bits of Evo 2?*

Unfortunately, we’ll have to cut this short before we get to that, because I’m sleepy and that’ll add another 3,000~ words to this essay.

But, prior to ending things, I think it’s worth sitting for a bit and re-assessing this conservation score comparison you made awhile back. DNA language models are **like** that, but I feel like it’s important to consider that something fundamentally beyond conservation may be being learned here.

Traditional conservation scores work by looking at multiple sequence alignments (MSAs). You take a bunch of genomes from different species, align them, and then see how often each nucleotide changes. Like we’ve mentioned, if a position is very conserved across millions of years, that’s a strong sign that messing with it might cause problems.

Evo 2 does not use MSAs at all. Instead it, as with every language model, is attempting to learn the underlying distribution that **causes** valid DNA. So instead of explicitly measuring conservation by comparing sequences across species, **Evo 2 implicitly learns conservation from first principles.** But the hope is that it’s learned something much deeper than that — since it’s never been provided MSA’s — resulting in it understanding ‘grammar of DNA’ in some capacity. Grounding this, this means that we’d also expect that Evo 2 likely wouldn’t suffer from the same problems with traditional conservation scores and may in fact be capable of doing a lot more than them.

*It’s a cool idea, but I am instinctively unsure of it.**Like, did you see that [Sergey Ovchinnikov](https://scholar.google.com/citations?hl=en&user=8KJ9gf4AAAAJ&view_op=list_works&sortby=pubdate) paper about how protein language models are simply [implicitly learning evolutionary statistics of proteins](https://www.pnas.org/doi/full/10.1073/pnas.2406285121)? And **not** biophysics, even though people had hoped a model that lacked MSA as input (just like Evo 2), would in fact have a better physical understanding of proteins? How do you know that these DNA models aren’t doing the exact same thing and will suffer from the exact same limitations that conservation scores have had, outside of just being able to cover **more** DNA in its ‘conservation score’ than traditional methods?*

Maybe! Given how closely PhyloP got to Evo 2 in the above BRCA1 variant prediction benchmark, it wouldn’t be shocking. I think to genuinely test this, we’d need to do something similar to how this sort of ‘evolutionary dependence’ was found for protein structure models: test it out on things with low evolutionary relation.

*What are such things for DNA?*

One easy case are so-called [human accelerated regions](https://en.wikipedia.org/wiki/Human_accelerated_regions), or HAR’s. They are a set of 49 segments of the human genome that are conserved throughout vertebrates but are highly mutated in humans. They are fascinating constructs, here’s a blurb from the wiki page over HAR2:

> *HAR2 includes HACNS1, a gene enhancer "that may have contributed to the evolution of the uniquely opposable human thumb, and possibly also modifications in the ankle or foot that allow humans to walk on two legs". Evidence to date shows that of the 110,000 gene enhancer sequences identified in the human genome, HACNS1 has undergone the most change during the evolution of humans following the split with the ancestors of chimpanzees.*

**If Evo 2 could tell the difference between pathogenic and non-pathogenic versions of these sorts of DNA elements, I think that’d be a strong signal of there being a universal genomic grammar being learned.** If not...the model is still obviously useful, but it is, as are most of these sorts of models, trapped by the well of evolution. Which, maybe a bad thing, but also maybe not a thing that ends up mattering that much.

Given that Evo 2 is fully open-sourced (an amazing move by Arc!), it feels likely that benchmarks like these — alongside many of the other ‘what if you used the model in such-and-such way?’ statements raised in this essay — will be answered by curious researchers over the next few months. Prior to Evo 2, [DNA language models were in a hazy place where it was unclear whether pretraining even helps them understand DNA better](https://x.com/BrandesNadav/status/1885710445882888684). Evo 2 does feel like a strong step in the direction of these sorts of models being more useful, **given the data ablation results they present in the appendix,** but I think it will be the papers that come in the wake of this model that more concretely flesh out its role in the variant prediction pipeline. Currently, I’m cautiously optimistic.

But what of genome generation? A task for which there **isn’t** a traditional method? What’s the role of DNA language models there? It’s a very interesting question, and one that shall be deferred to part 2.