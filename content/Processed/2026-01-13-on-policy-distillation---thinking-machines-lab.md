---
url: https://t.co/YdrpO0qIVK
title: "On-Policy Distillation - Thinking Machines Lab"
clipped: 2026-01-13 22:53
source: browser-history
---

# On-Policy Distillation - Thinking Machines Lab

> Source: [https://t.co/YdrpO0qIVK](https://t.co/YdrpO0qIVK)

# On-Policy Distillation

[Kevin Lu](https://kevinlu.ai/) in collaboration with others at Thinking Machines

Oct 27, 2025

![](/blog/on-policy-distillation/svgs/distillation-cover.svg)

LLMs are capable of expert performance in focused domains, a result of several capabilities stacked together: perception of input, knowledge retrieval, plan selection, and reliable execution. This requires a stack of training approaches, which we can divide into three broad stages:

* **Pre-training** teaches general capacities such as language use, broad reasoning, and world knowledge.
* **Mid-training** imparts domain knowledge, such as code, medical databases, or internal company documents.
* **Post-training** elicits targeted behavior, such as instruction following, reasoning through math problems, or chat.

Smaller models with stronger training often outperform larger, generalist models in their trained domains of expertise. There are many benefits to using smaller models: they can be deployed locally for privacy or security considerations, can continuously train and get updated more easily, and save on inference costs. Taking advantage of these requires picking the right approach for the later stages of training.

Approaches to post-training a “student” model can be divided into two kinds:

* **On-policy training** samples rollouts from the student model itself, and assigns them some reward.
* **Off-policy training** relies on target outputs from some external source that the student learns to imitate.

For example, we may wish to train a compact model to solve math questions such as:

![](/blog/on-policy-distillation/svgs/prompt.svg)

We can do on-policy training via reinforcement learning, by grading each student rollout on whether it solves the question. This grading can be done by a human, or by a “teacher” model that reliably gets the correct answer.

![](/blog/on-policy-distillation/svgs/reinforcement-learning.svg)
  

The strength of on-policy training is that by training on samples from itself, the student learns to avoid mistakes in a more direct way. But RL has a major downside: it provides very sparse feedback, teaching a [fixed number of bits per training episode](https://thinkingmachines.ai/blog/lora/#how-much-capacity-is-needed-by-supervised-and-reinforcement-learning) regardless of the number of tokens used. In our example above, the student learns that “21” is the wrong answer and updates away from producing the rollout it tried. But it doesn’t learn where exactly the mistake was made, whether it got the order of operations wrong or erred in the arithmetic itself. This sparsity of feedback makes RL inefficient for many applications.

Off-policy training is often done with supervised fine-tuning (SFT): training on a curated set of task-specific labeled examples. The source of these labeled examples can be a teacher model that is proven to perform well on the task at hand.

We can use a mechanism called **distillation:** training the student to match the output distribution of a teacher model. We train on teacher **trajectories:** the complete sequence of generated tokens including intermediate thinking steps. We can use the teacher’s full next-token distribution at each step (often called “logit distillation”) or just sample given sequences. In practice, sampling sequences provides an unbiased estimation of the teacher’s distribution and arrives at the same objective. The student updates towards each token in the sequence in proportion to how unlikely it was to generate that token itself, represented by darker color in the example below:

![](/blog/on-policy-distillation/svgs/off-policy-distillation.svg)
  

Distillation from large model teachers has proven effective in training small models to [follow instructions](https://crfm.stanford.edu/2023/03/13/alpaca.html),[Alpaca: A Strong, Replicable Instruction-Following Model](https://crfm.stanford.edu/2023/03/13/alpaca.html) (Taori et al, 2021) [reason on math and science](https://arxiv.org/abs/2506.04178),[OpenThoughts: Data Recipes for Reasoning Models](https://arxiv.org/abs/2506.04178) (Guha et al, 2025) [extract clinical information](https://arxiv.org/html/2501.00031v1)[Distilling Large Language Models for Efficient Clinical Information Extraction](https://arxiv.org/abs/2501.00031) (Vedula et al, 2025) from medical notes, and [engage in multi-turn chat dialogues](https://arxiv.org/abs/2305.14233).[Enhancing Chat Language Models by Scaling High-quality Instructional Conversations](https://arxiv.org/abs/2305.14233) (Ding et al, 2023) The distillation datasets used for these and other applications are often open-sourced and published.

The drawback of off-policy training is that the student learns in contexts frequented by the teachers, not ones the student itself will often find itself in. This can cause compounding error: if the student makes an early mistake that the teacher never makes, it finds itself diverging ever farther from the states it observed in training. This problem becomes particularly acute when we care about the student’s performance on long sequences. To avoid this divergence, the student must learn to recover from its own mistakes.

Another issue observed with off-policy distillation is that the student can learn to imitate the teacher’s style and confidence but [not necessarily its factual accuracy](https://arxiv.org/abs/2305.15717).[The False Promise of Imitating Proprietary LLMs](https://arxiv.org/abs/2305.15717) (Gudibande et al, 2023)

If you’re learning to play chess, on-policy RL is analogous to playing games with no coaching. The feedback of winning or losing a match is tied directly to your own play, but is received only once per match and doesn’t tell you which moves contributed most to the outcome. Off-policy distillation is analogous to watching a grandmaster playing — you observe extremely strong chess moves, but they are played in board states that a novice player will rarely find themselves in.

We want to combine the on-policy relevance of RL with the dense reward signal of distillation. For learning chess, this would be a teacher that grades each of *your own* moves on a scale from “blunder” to “brilliant”. For LLM post-training, it’s on-policy distillation.

![](images/chess.png)

Screenshot from [chess.com](https://www.chess.com/). Each move is color-graded by an analysis engine, which labels moves as blunders (red), mistakes (orange), inaccuracies (yellow), or brilliant (blue).

## On-policy distillation — best of both worlds

The core idea of on-policy distillation is to sample trajectories from the *student* model and use a high-performing teacher to grade *each token* of each trajectory. Returning to our math example above, on-policy distillation would score each step of the solution punishing the mistakes that caused the student to arrive at the wrong answer while reinforcing the ones that were executed correctly.

![](/blog/on-policy-distillation/svgs/on-policy-distillation.svg)
  

In this post, we explore the application of on-policy distillation for tasks such as training a model for math reasoning and training an assistant model that combines domain knowledge with instruction following. We apply on-policy distillation on models that have a foundation of capabilities from pre- and mid-training. We find that it is a cheap and powerful approach to post-training, combining the advantages of on-policy training with a dense reward signal.

| Method | Sampling | Reward signal |
| --- | --- | --- |
| Supervised finetuning | off-policy | **dense** |
| Reinforcement learning | **on-policy** | sparse |
| On-policy distillation | **on-policy** | **dense** |

Our work with on-policy distillation draws inspiration from [DAGGER](https://arxiv.org/abs/1011.0686),[A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning](https://arxiv.org/abs/1011.0686) (Ross et al, 2010) an iterative SFT algorithm that includes teacher evaluations of student-visited states. It is also similar to [process reward modeling,](https://arxiv.org/abs/2305.20050)[Let’s Verify Step by Step](https://arxiv.org/abs/2305.20050) (Lightman et al, 2023) an RL approach that scores every step in the student model’s chain-of-thought. We extend prior on-policy distillation work by [Agarwal et al,](https://arxiv.org/abs/2306.13649)[On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes](https://arxiv.org/abs/2306.13649) (Agarwal et al, 2023) [Gu et al,](https://arxiv.org/abs/2306.08543)[MiniLLM: Knowledge Distillation of Large Language Models](https://arxiv.org/abs/2306.08543) (Gu et al, 2023) and [the Qwen3 team](https://arxiv.org/abs/2505.09388)[Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (Qwen Team, 2025). Using the [Tinker training API](https://thinkingmachines.ai/tinker/), we replicate Qwen3’s result of achieving equivalent performance on reasoning benchmarks with on-policy distillation for a fraction the cost of RL.

## Implementation

You can follow along with each step of the implementation in the [Tinker cookbook](https://github.com/thinking-machines-lab/tinker-cookbook/tree/main/tinker_cookbook/recipes/distillation).

### Loss function: reverse KL

On-policy distillation can use a variety of loss functions for grading the student’s trajectories.See Agarwal et al. for an analysis of various loss function choices. For simplicity, we choose the per-token reverse KL — the divergence between the student’s ($\pi\_\theta$) and teacher’s ($\pi\_\text{teacher}$) distribution for each token conditioned on the same prior trajectory:

$$\text{KL}\Bigl(\pi\_\theta \lvert\rvert \pi\_\text{teacher}\Bigr) = \mathbb{E}\_{x \sim {\pi\_\theta}} \Bigl[ \log \pi\_\theta(x\_{t+1} | x\_{1..t}) - \log \pi\_\text{teacher}(x\_{t+1} | x\_{1..t}) \Bigr]$$

Our reward function minimizes the reverse KL, which pushes the student to approximate the teacher’s behavior in every state the student finds itself in. When the student behaves identically to the teacher, reverse KL is zero. For simplicity, we use a discount factor of zero: at any given timestep,Although more mathematically correct, we do not find discount factors > 0 to improve performance in practice, so we choose zero for simplicity. the student only optimizes the immediate next token, with no consideration for future tokens.

Reverse KL has natural synergy with RL, which generally optimizes a form of sequence-level reverse KL induced by the reward model. However, unlike most reward models in practice, the reverse KL is “unhackable” in the sense that low KL always corresponds to a high probability of desirable behavior from the teacher model’s point of view. Two other useful properties of reverse KL are that it is “mode seeking”See [Eric Jang’s post](https://blog.evjang.com/2016/08/variational-bayes.html) for more discussion of mode seeking behaviors. — it learns one specific behavior (the teacher’s) instead of spreading its distribution across several suboptimal options — and it reduces [exposure bias](https://arxiv.org/abs/1506.03099).[Scheduled Sampling for Sequence Prediction with Recurrent Neural Networks](https://arxiv.org/abs/1506.03099) (Bengio et al, 2015). See Gu et al. for more discussion.

This approach offers significant compute savings. Since it doesn’t require a rollout to finish sampling to calculate the reward, we can use shorter or partial rollouts for training. Querying the teacher’s log probabilities also requires just a single forward pass from the larger model, while the trajectories are generated by the smaller and cheaper student.

We do not require a separate reward or labeling model either. There could be advantages to combining distillation-based per-token rewards with sequence-level environment rewards; this is an interesting area for potential future research.

### Illustration

Below we see a real example of an incorrect student trajectory graded by a teacher. The example is from [SimpleBench](https://simple-bench.com/), and relies on the model making a key observation that the question’s premise is important: the correct answer is “B. 0” since ice cubes will melt in a frying pan. The student, [Qwen3-4B-Instruct-2507](https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507), incorrectly treats this as a pure math problem with no consideration of the physical context.

![](/blog/on-policy-distillation/svgs/example-kl-illustration.svg)

Example trajectory graded by a teacher model. Tokens in darker red correspond to a higher reverse KL.

Darker colors represent tokens that receive a higher penalty from the teacher model, [Qwen3-235B-A22B-Instruct-2507](https://huggingface.co/Qwen/Qwen3-235B-A22B-Instruct-2507), which solves this problem correctly. We see that it penalizes tokens that start phrases which lead the student astray, intuitively corresponding to important [“forking tokens”](https://arxiv.org/abs/2506.01939) for guiding reasoning.[Beyond the 80/20 Rule: High-Entropy Minority Tokens Drive Effective Reinforcement Learning for LLM Reasoning](https://arxiv.org/abs/2506.01939) (Wang et al, 2025) The final answer, though wrong, isn’t penalized — it is entirely predictable conditional on the whole preceding sequence.

### Pseudocode

We implement on-policy distillation on top of the [RL script in Tinker](https://github.com/thinking-machines-lab/tinker-cookbook/blob/main/tinker_cookbook/rl/train.py), which already implements sampling, reward computation, and policy gradient-style training.Our implementation can actually be a one-line change on top of RL implementations which use KL regularization: we merely swap out the regularizer model.

1. *Initialize teacher client.* The Tinker API enables easily creating different clients for different models, without needing to worry about the utilization of model engines. We use a sampling client, as we do not need to propagate logprobs through the teacher model.
2. *Sample trajectories.* We sample rollouts from the student exactly as we would in RL. During sampling, RL already computes the student’s logprobs $\log \pi\_\theta(x)$ for use as part of the [importance-sampling](https://tinker-docs.thinkingmachines.ai/losses#policy-gradient-importance_sampling) loss.
3. *Compute reward.* We query the teacher client with `compute_logprobs` on the sampled trajectories, which returns the teacher’s logprobs $\log \pi\_\text{teacher}(x)$ on the tokens $x$ sampled by the student.In this post, we do not consider logit (top-k) distillation in any of our experiments, which could be used to further improve compute efficiency. We then use this to calculate the reverse KL.
4. *Train with RL.* We set the per-token advantage to the negative reverse KL, and call the RL importance-sampling loss function to perform the training update on the student model.

```
# Initialize teacher client (main):
teacher_client = service_client.create_sampling_client(
    base_model=teacher_config.base_model,
    model_path=tea

[... truncated ...]