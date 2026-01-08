---
url: https://open.substack.com/pub/abhishaike/p/an-ml-drug-discovery-startup-trying?utm_source=post-email-title&publication_id=2520497&post_id=181642850&utm_campaign=email-post-title&isFreemail=false&r=17kf49&token=eyJ1c2VyX2lkIjo3MzE3NjIwMSwicG9zdF9pZCI6MTgxNjQyODUwLCJpYXQiOjE3NjY0OTcwMDksImV4cCI6MTc2OTA4OTAwOSwiaXNzIjoicHViLTI1MjA0OTciLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.NwbnBoeiaiuagcQiL3Np4hiZMEjb4qYzRC0u3TfToWk
title: "The ML drug discovery startup trying really, really hard to not cheat (Leash Bio)"
clipped: 2025-12-23 15:25
source: browser-history
---

# The ML drug discovery startup trying really, really hard to not cheat (Leash Bio)

> Source: [https://open.substack.com/pub/abhishaike/p/an-ml-drug-discovery-startup-trying?utm_source=post-email-title&publication_id=2520497&post_id=181642850&utm_campaign=email-post-title&isFreemail=false&r=17kf49&token=eyJ1c2VyX2lkIjo3MzE3NjIwMSwicG9zdF9pZCI6MTgxNjQyODUwLCJpYXQiOjE3NjY0OTcwMDksImV4cCI6MTc2OTA4OTAwOSwiaXNzIjoicHViLTI1MjA0OTciLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.NwbnBoeiaiuagcQiL3Np4hiZMEjb4qYzRC0u3TfToWk](https://open.substack.com/pub/abhishaike/p/an-ml-drug-discovery-startup-trying?utm_source=post-email-title&publication_id=2520497&post_id=181642850&utm_campaign=email-post-title&isFreemail=false&r=17kf49&token=eyJ1c2VyX2lkIjo3MzE3NjIwMSwicG9zdF9pZCI6MTgxNjQyODUwLCJpYXQiOjE3NjY0OTcwMDksImV4cCI6MTc2OTA4OTAwOSwiaXNzIjoicHViLTI1MjA0OTciLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.NwbnBoeiaiuagcQiL3Np4hiZMEjb4qYzRC0u3TfToWk)

[Startups](https://www.owlposting.com/s/startups/?utm_source=substack&utm_medium=menu)

# The ML drug discovery startup trying really, really hard to not cheat (Leash Bio)

### 6k words, 27 minutes reading time

[![Abhishaike Mahajan's avatar](https://substackcdn.com/image/fetch/$s_!RQwq!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F983f59da-174d-48ac-b1cf-1d27464308ca_399x399.jpeg)](https://substack.com/@abhishaikemahajan)

[Abhishaike Mahajan](https://substack.com/@abhishaikemahajan)

Dec 23, 2025

30

12

6

Share

[![](https://substackcdn.com/image/fetch/$s_!7x9N!,w_2400,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4e0bcad7-4c59-45ed-a7e7-c30aabb46f96_1920x1080.png)](https://substackcdn.com/image/fetch/$s_!7x9N!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4e0bcad7-4c59-45ed-a7e7-c30aabb46f96_1920x1080.png)

*Note: I’ll be Austin until Jan 3rd, and in San Francisco (for JPM) from Jan 3rd-17th, message me on X/email to hang out! Also, thank you to [Ian Quigley](https://www.linkedin.com/in/iquigley/) and [Andrew Blevins](https://www.linkedin.com/in/andrewdblevins/), the two co-founders of [Leash Bio](https://www.leash.bio/), for answering the many questions that arose while writing this essay.*

1. [Introduction](https://www.owlposting.com/i/181642850/introduction)
2. [Some of Leash’s research](https://www.owlposting.com/i/181642850/some-of-leashs-research)

   1. [The BELKA result](https://www.owlposting.com/i/181642850/the-belka-result)
   2. [The Hermes result](https://www.owlposting.com/i/181642850/the-hermes-result)
   3. [The train/test split result](https://www.owlposting.com/i/181642850/the-traintest-split-result)
   4. [The ‘Clever Hans’ result](https://www.owlposting.com/i/181642850/the-clever-hans-result)
3. [Conclusion](https://www.owlposting.com/i/181642850/conclusion)

# **Introduction**

What I will describe below is a rough first approximation of what it is like to work in the field of machine-learning-assisted small-molecule design.

Imagine that you are tasked with solving the following machine-learning problem:

> There are 116 billion balls of varying colors, textures, shapes, and sizes in front of you. Your job is to predict which balls will stick to a velcro strip. To help start you off, you’re given a training set of 10 million balls that have already been tested; which ones stuck and which ones didn’t. **Your job is to predict the rest.** You give it your best shot, train a very large transformer on 80% of the (X, Y) labels, and discover that you’ve achieved an AUC of .76 on a held out 20% set of validation balls. Not too shabby, especially given that you only had access to .008% of the total space of all balls. But, since you’re a good hypothetical scientist, you look more into what balls you did well on, and which balls you did not do well on. You do not immediately find any surprises; there is mostly uniform error across color, textures, shapes, and sizes, which are all the axes of variation you’d expect exists in the dataset. But perhaps you’re a really good hypothetical scientist, and you decide that to be certain of the accuracy here, you’ll need to fly in the top ball-velcro researcher in the world to get their take on it. You do so. They arrive, take one look at your results, and burst out in laughter.‘ *What*’, you stutter, ‘*what’s so funny?’.* In between tears and convulsions, the researcher manages to blurt out, ‘*You fool! You absolute idiot! Nearly all the balls in both your training set and test set were manufactured between 1987 and 2004, using a process that was phased out after the Guangzhou Polymer Standardization Accords of 2005! Your ball-velcro model is not a ball-velcro model at all, but rather a highly sophisticated detector of Guangzhou Polymer Standardization Accords compliance!*’ The researcher collapses into a chair, still wheezing.

**Actually, this hypothetical situation is easier than the real one,** since there are several orders of magnitude more small-molecules in existence than the 116 billion balls, and there are also a few tens-of-thousands of possible velcro strips— binding proteins—in existence too, each with their own unique preferences.

Given the situation here, there is a fair bit of cheating that goes on in this field. Most of it is accidental and maybe even unavoidable, and truthfully, it is difficult to not feel at least some sympathy for the researchers here. There is something almost cosmically unfair about trying to solve a problem where the axes of variation you don’t know about vastly outnumber the axes you do, making it so the space of possible ways you could be wrong is practically infinite. Can we fault these people for pretending that their equivalence to the compliance-detection-machine is actually useful for something?

Well, yes, but we should also understand that the incentives aren’t exactly set up for being careful, thinking really hard, and trying to ensure that the model did the Correct Thing. This is true even in the private sector, where the timelines for end utility of these models are far off in the horizon, where the feedback loops are so long that by the time anyone discovers your model was secretly a *Guangzhou Accords* detector, there are no meaningful consequences for anybody involved.

This is why I think it is important to shine a spotlight on people trying to, despite the situation, do the right thing.

And this essay is my attempt to highlight one such party: **[Leash Bio.](https://www.leash.bio/)**

[![Leash Bio - Creating billions of biochemical measurements](https://substackcdn.com/image/fetch/$s_!Ko2U!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd4916d25-b3f9-4b6c-9344-15b2fdf0aec5_1456x485.png "Leash Bio - Creating billions of biochemical measurements")](https://substackcdn.com/image/fetch/$s_!Ko2U!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd4916d25-b3f9-4b6c-9344-15b2fdf0aec5_1456x485.png)

[Leash Bio](https://www.leash.bio/) is a Utah-based, ~~12~~~ 9-person startup founded in 2021 by two ex-[Recursion Pharmaceutical](https://www.recursion.com/) folks: [Ian Quigley](https://www.linkedin.com/in/iquigley/) and [Andrew Blevins](https://www.linkedin.com/in/andrewdblevins/). My usual [biotech startup essays](https://www.owlposting.com/s/startups) are about places that have strange or especially out-there scientific theses, so I spend a long time focusing on the details of their work, where it may pay off big, and the biggest risks ahead.

I will not do this here, because Leash Bio actually has both a very well-trodden scientific thesis (build big datasets of small-molecules x protein interactions and train a model on it) and a very well-trodden economic thesis (use the trained model to design a drug). There’s clearly some value here, at least to the extent that any ML-for-small-molecule-development play has value. There’s also some external validation: [a recent partnership with Monte Rosa Therapeutics to develop binders to novel targets.](https://bioutah.org/leash-bio-announces-multi-target-agreement-with-monte-rosa-therapeutics/)

Really, what is most unique about Leash is almost entirely that, despite how hard it is to do so, they have a nearly pathological desire to make sure their models are learning the **correct** thing. They have produced a lot of interesting artifacts from this line of research, much of which I think should have more eyes on. This essay will dig deep into a few of them. If you’re curious to read more about their research, [they also have their own fascinating blog here.](https://leashbio.substack.com/)

# **Some of Leash’s research**

## **The BELKA result**

You may recall an interesting bit of drama that occurred just about a year back between [Pat Walters](https://patwalters.github.io/)—who is one of the chief evangelists of ‘*many people in the small-molecule ML field are accidentally cheating*’ sentiment—and the authors of [DiffDock](https://arxiv.org/abs/2210.01776), which is a (very famous!) ML-based, small-molecule docking model.

The drama originally kicked off with the publication of Pat’s paper ‘*[Deep-Learning Based Docking Methods: Fair Comparisons to Conventional Docking Workflows](https://arxiv.org/abs/2412.02889)*’, which claimed to find serious flaws with the train/test splits of DiffDock. [Gabriel Corso, one of the authors on the DiffDock paper, responded to the paper here](https://www.linkedin.com/pulse/response-jain-et-al-gabriele-corso-x5vze/), basically saying ‘*yeah, we already knew this, which is why we released a follow-up [paper](https://arxiv.org/html/2402.18396v1) that directly addressed these*’. After many comments back and forth, the saga mostly ended with the original Pat paper having this paragraph being appended to it:

> *The analyses reported here were based on the original DiffDock report [1], with performance data provided directly by authors of that report, corresponding exactly to the published figures and tables. Subsequently, in February 2024, a new benchmark (DockGen) and a new DiffDock version (DiffDock-L) was released by the DiffDock group [21]. This work post-dated our analyses, and we were unaware of this work at the time of our initial report, whose release was delayed following completion of the analyses.*

All’s well that ends well, I suppose.

But what was the big deal with the train/test splits anyway?

To keep it simple: the original DiffDock paper trained on pre-2019 protein-ligand complexes, and tests on post-2019 protein-ligand complexes. This may not be too terrible, but you can imagine one failure mode of this is that there is a lot of conservation in the chemical composition of binding domains, making it so the model is more interested in **memorizing** binding-pocket-y residues rather than trying to learn the actual physics of docking. So, when presented with a brand new binding pocket, it’d fail. And indeed, this is the case.

In the follow-up DiffDock-L paper, the authors moved to a benchmark that ensured that proteins with the same protein binding domains were either only in the train or only in the test dataset. Performance fell, but the resulting model was able to demonstrate much better diversity to a broader range of proteins.

Excellent! Science at work. **But there is an unaddressed elephant in the room: what about chemical diversity?** DiffDock-L may very well generalize to unseen protein binding pockets, but can it do well on ligands that are very structurally different from ligands it was trained on? This isn’t really a gotcha for DiffDock, because it turns out that the answer is ‘surprisingly, yes’. [From a paper that studied the topic:](https://pmc.ncbi.nlm.nih.gov/articles/PMC12401186/)

> *Diffusion-based methods displayed mixed behavior. SurfDock showed declining performance with decreasing ligand similarity on Astex, but surprisingly improved on PoseBusters and DockGen, suggesting resilience to ligand novelty in more complex scenarios. Other diffusion-based and all regression-based DL methods exhibited decreasing performance on Astex and PoseBusters, but remained stable—or even improved slightly—on DockGen, **likely implying that unfamiliar pockets, rather than ligands, pose the greater generalization barrier.***

But docking is not the **big** problem, not really.

The holy grail for protein-ligand-complex prediction is predicting **affinity;** not only where a small-molecule binds to, but how tightly. And here, it turns out that it is incredibly easy to mislead oneself on how well models can do here. In an October 2025 Nature Machine Intelligence paper titled ‘[Resolving data bias improves generalization in binding affinity prediction](https://www.nature.com/articles/s42256-025-01124-5)’, they say this:

> ***This large gap between benchmark and real-world performance [of binding affinity models] has been attributed to the underlying training and evaluation procedures used for the design of these scoring functions.** Typically, these models are trained on the PDBbind database[37](https://www.nature.com/articles/s42256-025-01124-5#ref-CR37),[38](https://www.nature.com/articles/s42256-025-01124-5#ref-CR38), and their generalization is assessed using the comparative assessment of scoring function (CASF) benchmark datasets[10](https://www.nature.com/articles/s42256-025-01124-5#ref-CR10). **However, several studies have reported a high degree of similarity between PDBbind and the CASF benchmarks.** Owing to this similarity, the performance on CASF overestimates the generalization capability of models trained on PDBbind[10](https://www.nature.com/articles/s42256-025-01124-5#ref-CR10),[39](https://www.nature.com/articles/s42256-025-01124-5#ref-CR39),[40](https://www.nature.com/articles/s42256-025-01124-5#ref-CR40). Alarmingly, some of these models even perform comparably well on the CASF datasets after omitting all protein or ligand information from their input data. This suggests that the reported impressive performance of these models on the CASF benchmarks is not based on an understanding of protein–ligand interactions. **Instead, memorization and exploitation of structural similarities between training and test complexes appear to be the main factors driving the observed benchmark performance of these models[35](https://www.nature.com/articles/s42256-025-01124-5#ref-CR35),[36](https://www.nature.com/articles/s42256-025-01124-5#ref-CR36),[41](https://www.nature.com/articles/s42256-025-01124-5#ref-CR41),[42](https://www.nature.com/articles/s42256-025-01124-5#ref-CR42),[43](https://www.nature.com/articles/s42256-025-01124-5#ref-CR43).***

What a pickle!

Now, the paper goes on to come up with its own split from the PDB that takes into account a combination of protein similarity, binding conformation similarity, and, most relevant to us, ligand similarity. How do they judge ligand similarity? A metric called the ‘Tanimoto score’, which [seems like a pretty decent way to get to better generalization per another Pat Walters essay.](https://practicalcheminformatics.blogspot.com/2024/11/some-thoughts-on-splitting-chemical.html)

Well, that’s that, right? Have we solved the ball problem before?

Not quite. Tanimoto-based filtering is an improvement, but it is still an exercise in carving up existing public data more carefully. Why is that a problem? **Because public data are not random samples from chemical space, but are rather the the accumulated residue of decades of drug discovery programs and academic curiosity.** Because of that, even if you filter out molecules with Tanimoto similarity above some threshold, you might still be left with test mol

[... truncated ...]