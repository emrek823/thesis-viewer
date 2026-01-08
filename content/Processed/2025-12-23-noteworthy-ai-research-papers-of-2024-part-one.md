---
url: https://open.substack.com/pub/sebastianraschka/p/ai-research-papers-2024-part-1?r=kmfsl&amp;utm_medium=ios
title: "Noteworthy AI Research Papers of 2024 (Part One)"
clipped: 2025-12-23 11:16
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Noteworthy AI Research Papers of 2024 (Part One)

> Source: [https://open.substack.com/pub/sebastianraschka/p/ai-research-papers-2024-part-1?r=kmfsl&amp;utm_medium=ios](https://open.substack.com/pub/sebastianraschka/p/ai-research-papers-2024-part-1?r=kmfsl&amp;utm_medium=ios)

# Noteworthy AI Research Papers of 2024 (Part One)

### Six influential AI papers from January to June

[![Sebastian Raschka, PhD's avatar](https://substackcdn.com/image/fetch/$s_!CfW_!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F61f4c017-506f-4e9b-a24f-76340dad0309_800x800.jpeg)](https://substack.com/@rasbt)

[Sebastian Raschka, PhD](https://substack.com/@rasbt)

Dec 31, 2024

367

29

38

Share

To kick off the year, I've finally been able to complete the draft of this AI Research Highlights of 2024 article. It covers a variety of topics, from mixture-of-experts models to new LLM scaling laws for precision.

Reflecting on all the major research highlights of 2024 would probably require writing an entire book. It's been an extraordinarily productive year, even for such a fast-moving field. To keep things reasonably concise, I decided to focus exclusively on LLM research this year. But even then, how does one choose a subset of papers from such an eventful year? The simplest approach I could think of was to highlight one paper per month: January through December 2024.

So, in this article, I'll share research papers that I personally found fascinating, impactful, or, ideally, both. However, note that this article is just *Part One*, focusing on the first half of 2024 from January through June. *Part 2* of this series, covering July to December, will be shared later in January.

The selection criteria are admittedly subjective, based on what stood out to me this year. I've also aimed for some variety, so it's not all just about LLM model releases.

If you're looking for a broader list of AI research papers, feel free to check out my earlier article ([LLM Research Papers: The 2024 List](https://magazine.sebastianraschka.com/p/llm-research-papers-the-2024-list)).

*For those who read my [previous article](https://magazine.sebastianraschka.com/p/llm-research-papers-the-2024-list), I’m happy to share that I’m already feeling a bit better and slowly but steadily recovering! I also want to express my heartfelt thanks for all the kind wishes and support. It truly meant the world to me and helped me through some tough days!*

Happy new year and happy reading!

# 1. January: Mixtral's Mixture of Experts Approach

Only a few days into January 2024, the Mistral AI team shared the [Mixtral of Experts](https://arxiv.org/abs/2401.04088) paper (8 Jan 2024), which described Mixtral 8x7B, a Sparse Mixture of Experts (SMoE) model.

The paper and model were both very influential at the time, as Mixtral 8x7B was (one of) the first open-weight MoE LLMs with an impressive performance: it outperformed Llama 2 70B and GPT-3.5 across various benchmarks.

## **1.1 Understanding MoE models**

An MoE, or Mixture of Experts, is an ensemble model that combines several smaller "expert" subnetworks inside the GPT-like decoder architecture. Each subnetwork is said to be responsible for handling different types of tasks or, more concretely, tokens. The idea here is that by using multiple smaller subnetworks instead of one large network, MoEs aim to allocate computational resources more efficiently.

In particular, in Mixtral 8x7B, is to replace each feed-forward module in a transformer architecture with 8 expert layers, as illustrated in the figure below.

[![](https://substackcdn.com/image/fetch/$s_!xyDu!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb6a8621c-2193-4d5f-b140-e8b669ccbc75_1490x1134.png)](https://substackcdn.com/image/fetch/$s_!xyDu!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb6a8621c-2193-4d5f-b140-e8b669ccbc75_1490x1134.png)

*Annotated transformer architecture from Attention Is All You Need, https://arxiv.org/abs/1706.03762*

"Sparse" in the context of a "Sparse Mixture of Experts" refers to the fact that at any given time, only a subset of the expert layers (typically 1 or 2 out of the 8 in Mixtral 8x7B) are actively used for processing a token.

As illustrated in the figure above, the subnetworks replace the feed-forward module in the LLM. A feed-forward module is essentially a multilayer perceptron. In PyTorch-like pseudocode, it essentially looks like this:

```
class FeedForward(torch.nn.Module):   
    def __init__(self, embed_dim, coef):        
        super().__init__()
        self.layers = nn.Sequential(
            torch.nn.Linear(embed_dim, coef*embed_dim),
            torch.nn.ReLU(),
            torch.nn.Linear(coef*n_embed, embed_dim),
            torch.nn.Dropout(dropout)
        )    

    def forward(self, x):
       return self.layers(x)
```

In addition, there is also a ***Router*** module (also known as a *gating network*) that redirects each of the token embeddings to the 8 expert feed-forward modules, where only a subset of these experts are active at a time.

Since there are 11 more papers to cover in this article, I want to keep this description of the Mixtral model brief. However, you can find additional details in my previous article, [Model Merging, Mixtures of Experts, and Towards Smaller LLMs](https://magazine.sebastianraschka.com/i/141130005/mixtral-of-experts).

## **1.2 The relevance of MoE models today**

At the beginning of the year, I would have thought that open-weight MoE models would be more popular and widely used than they are today. While they are not irrelevant, many state-of-the-art models still rely on dense (traditional) LLMs rather than MoEs though, e.g., Llama 3, Qwen 2.5, Gemma 2, etc. However, it is, of course, impossible to say what proprietary architectures like GPT-4, Gemini, and Claude are based on; they might as well be using MoE under the hood.

In any case, MoE architectures are still relevant, especially as they offer a way to scale large language models efficiently by activating only a subset of the model's parameters for each input, thus reducing computation costs without sacrificing model capacity.

By the way, after writing this article, there was a nice surprise release of [the very well-performing DeepSeek-V3 model in December](https://github.com/deepseek-ai/DeepSeek-V3/blob/main/DeepSeek_V3.pdf), which uses a MoE architecture. So, yes, MoEs continue to be very relevant!

# 2. February: Weight-decomposed LoRA

If you are finetuning open-weight LLMs, chances are high that you have been using low-rank adaptation (LoRA), a method for parameter-efficient LLM finetuning, at some point.

If you are new to LoRA, I have written a previous article on [Practical Tips for Finetuning LLMs Using LoRA (Low-Rank Adaptation)](https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms) that you might helpful, and I have a from-scratch code implementation in Appendix D of my [Build A Large Language Model (From Scratch)](https://amzn.to/4fqvn0D) book.

Since LoRA is such a popular and widely used method, and since I had so much fun implementing and playing with a newer variant, my pick for February is [DoRA: Weight-Decomposed Low-Rank Adaptation](https://arxiv.org/abs/2402.09353) (February 2024) by Liu and colleagues.

## **2.2 LoRA Recap**

Before introducing DoRA, here’s a quick LoRA refresher:

Full finetuning updates each large weight matrix *W* in an LLM by computing a large weight update matrix *ΔW*. LoRA approximates *ΔW* as the product of two smaller matrices *A* and *B*. So, Instead of *W + ΔW*, we have *W + A.B*. This greatly reduces computational and memory overhead.

The figure below illustrates these formulas for full finetuning (left) and LoRA (right) side by side.

[![](https://substackcdn.com/image/fetch/$s_!ap7E!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F014307aa-3e4d-47d1-a99f-37892d943c97_1600x702.png)](https://substackcdn.com/image/fetch/$s_!ap7E!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F014307aa-3e4d-47d1-a99f-37892d943c97_1600x702.png)

*An illustration of regular finetuning (left) and LoRA finetuning (right).*

## **2.2 From LoRA to DoRA**

In [DoRA: Weight-Decomposed Low-Rank Adaptation](https://arxiv.org/abs/2402.09353) (February 2024), Liu and colleagues.extend LoRA by first decomposing a pretrained weight matrix into two parts: a magnitude vector m and a directional matrix *V*. This decomposition is rooted in the idea that any vector can be represented by its length (magnitude) and direction (orientation), and here we apply it to each column vector of a weight matrix. Once we have m and *V*, DoRA applies LoRA-style low-rank updates only to the directional matrix *V*, while allowing the magnitude vector m to be trained separately.

[![](https://substackcdn.com/image/fetch/$s_!smvV!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe39fff89-8c1b-4e06-80c9-f2ca375af019_1600x1165.png)](https://substackcdn.com/image/fetch/$s_!smvV!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe39fff89-8c1b-4e06-80c9-f2ca375af019_1600x1165.png)

*Annotated illustration from the DoRA paper (https://arxiv.org/abs/2402.09353)*

This two-step approach gives DoRA more flexibility than standard LoRA. Rather than uniformly scaling both magnitude and direction as LoRA tends to do, DoRA can make subtle directional adjustments without necessarily increasing the magnitude. The result is improved performance and robustness, as DoRA can outperform LoRA even when using fewer parameters and is less sensitive to the choice of rank.

Again, I am keeping this section brief since there are 10 more to go, but if you are interested in additional details, I dedicated a whole article to this method earlier this year: [Improving LoRA: Implementing Weight-Decomposed Low-Rank Adaptation (DoRA) from Scratch](https://magazine.sebastianraschka.com/p/lora-and-dora-from-scratch).

## **2.3 The future of LoRA and LoRA-like methods**

DoRA is a small, logical improvement over the original LoRA method. While it hasn’t been widely adopted yet, it adds minimal complexity and is worth considering the next time you finetune an LLM. In general, I expect LoRA and similar methods to remain popular. For example, Apple recently mentioned in their [Apple Intelligence Foundation Language Models](https://arxiv.org/abs/2407.21075) paper that they use LoRA for on-device task specialization of LLMs.

Ahead of AI is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.

# 3. March: Tips for Continually Pretraining LLMs

As far as I can tell, instruction-finetuning is the most popular form of finetuning by LLM practitioners. The goal here is to get openly available LLMs to better follow instructions or specialize these LLMs on subsets or new instructions.

However, when it comes to taking in new knowledge, continued pretraining (sometimes also referred to continually pretraining) is the way to go.

In this section, I want to briefly summarize the refreshingly straightforward [Simple and Scalable Strategies to Continually Pre-train Large Language Models](https://arxiv.org/abs/2403.08763) (March 2024) paper by Ibrahim and colleagues.

## **3.1 Simple techniques work**

This 24-page [Continually Pre-train Large Language Models](https://arxiv.org/abs/2403.08763) paper reports a large number of experiments and comes with countless figures, which is very thorough for today's standards.

What were the main tips for applying continued pretraining successfully?

1. Simple re-warming and re-decaying the learning rate.

2. Adding a small portion (e.g., 5%) of the original pretraining data to the new dataset to prevent catastrophic forgetting. Note that smaller fractions like 0.5% and 1% were also effective.

To be a bit more concrete regarding point 1, re-warming and re-decaying, this means we employ the exact same learning rate schedule that was used during the initial pretraining stage of an LLM as shown in the figure below.

[![](https://substackcdn.com/image/fetch/$s_!6vK_!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feaf69f6f-effb-4f77-9ffb-4eb7bbdbdf8c_1600x554.png)](https://substackcdn.com/image/fetch/$s_!6vK_!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feaf69f6f-effb-4f77-9ffb-4eb7bbdbdf8c_1600x554.png)

*A schedule for continued pretraining. Figure based on Build a Large Language Model From Scratch, https://github.com/rasbt/LLMs-from-scratch/blob/main/appendix-D/01\_main-chapter-code/appendix-D.ipynb*

As far as I know, the re-warming and re-decaying, as well as adding original pretraining data to the new data, is more or less common knowledge. However, I really appreciate that the researchers took the time to formally test this method in this very detailed 24-page report.

If you are interested in additional details, I discussed this paper more thoroughly in my previous [Tips for LLM Pretraining and Evaluating Reward Models article](https://magazine.sebastianraschka.com/p/tips-for-llm-pretraining-and-evaluating-rms).

## **3.2 Will these simple techniques continue to work?**

I have no reason to believe that these methods will not continue to work for future LLMs. However, it is important to note that pretraining pipelines have become more sophisticated in recent months, consisting of multiple stages, including short- and long-context pretraining. (I’ve written more about it in [New LLM Pre-training and Post-training Paradigms](https://magazine.sebastianraschka.com/p/new-llm-pre-training-and-post-training)).

So, for optimal results, the recipes suggested in this paper may need to be tweaked under certain circumstances.

# 4. April: DPO or PPO for LLM alignment, or both?

April is a tough choice. For instance, [Kolmogorov-Arnold Networks](https://arxiv.org/abs/2404.19756) made a big wave that month. But as far as I can tell, the excitement fizzled out pretty quickly. This is likely because their theoretical guarantees are difficult to implement practically, they lack competitive results or benchmarks, and other architectures are much more scalable.

So, instead, my pick for April goes to a more practical paper: [Is DPO Superior to PPO for LLM Alignment? A Comprehensive Study](https://arxiv.org/abs/2404.10719) (April 2024) by Xu and colleagues.

## **4.1 RLHF-PPO and DPO: What Are They?**

Before summarizing the paper itself, here's an overview of Proximal Policy Optimization (PPO) and Direct Preference Optimization (DPO), both popular methods in aligning LLMs via Reinforcement Learning with Human Feedback (RLHF). RLHF is the method of choice to align LLMs with 

[... truncated ...]