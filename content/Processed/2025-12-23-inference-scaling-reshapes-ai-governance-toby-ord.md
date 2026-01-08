---
url: https://www.tobyord.com/writing/inference-scaling-reshapes-ai-governance
title: "Inference Scaling Reshapes AI Governance — Toby Ord"
clipped: 2025-12-23 11:14
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Inference Scaling Reshapes AI Governance — Toby Ord

> Source: [https://www.tobyord.com/writing/inference-scaling-reshapes-ai-governance](https://www.tobyord.com/writing/inference-scaling-reshapes-ai-governance)

# [Inference Scaling Reshapes AI Governance](/writing/inference-scaling-reshapes-ai-governance)

## February 12, 2025[Toby Ord](/writing?author=562a0c98e4b04076bfdb0dd2)

*The shift from scaling up the pre-training compute of AI systems to scaling up their inference compute may have profound effects on AI governance. The nature of these effects depends crucially on whether this new inference compute will primarily be used during external deployment or as part of a more complex training programme within the lab. Rapid scaling of inference-at-deployment would: lower the importance of open-weight models (and of securing the weights of closed models), reduce the impact of the first human-level models, change the business model for frontier AI, reduce the need for power-intense data centres, and derail the current paradigm of AI governance via training compute thresholds. Rapid scaling of inference-during-training would have more ambiguous effects that range from a revitalisation of pre-training scaling to a form of recursive self-improvement via iterated distillation and amplification.*

### **The end of an era — for both training and governance**

The intense year-on-year scaling up of AI training runs has been one of the most dramatic and stable markers of the Large Language Model era. Indeed it had been widely taken to be a permanent fixture of the AI landscape and the basis of many approaches to AI governance.

But [recent](https://www.reuters.com/technology/artificial-intelligence/openai-rivals-seek-new-path-smarter-ai-current-methods-hit-limitations-2024-11-11/) [reports](https://www.deeplearning.ai/the-batch/ai-giants-rethink-model-training-strategy-as-scaling-laws-break-down/) from unnamed employees at the leading labs suggest that their attempts to scale up pre-training substantially beyond the size of GPT-4 have led to only modest gains which are insufficient to justify continuing such scaling and perhaps even insufficient to warrant public deployment of those models. A possible reason is that they are running out of high-quality training data. While the scaling laws might still be operating (given sufficient compute and data, the models would keep improving), the ability to harness them through rapid scaling of pre-training may not. What was taken to be a fixture may instead have been just one important era in the history of AI development; an era which is now coming to a close.

Just before the reports of difficulties scaling pre-training, OpenAI [announced](https://openai.com/index/learning-to-reason-with-llms/) their breakthrough reasoning model, o1. Their announcement came with a chart showing how its performance on a difficult mathematics benchmark could be increased via scaling compute dedicated to post-training reinforcement learning (to improve the overall performance of the model); or by scaling the inference compute used on the current task.

![](https://images.squarespace-cdn.com/content/v1/562652dbe4b05bbfdc596fd7/0a2e094a-7089-4e66-b955-cf7e2b7271b2/o1+performance.png)

This has led to intense speculation that the previous era of scaling pre-training compute could be followed by an era of scaling up inference-compute. In this essay, I explore the implications of this possibility for AI governance.

In some ways a move to scaling of inference compute may be a continuation of the previous paradigm (as lab leaders have been suggesting$^1$). For example, work on the trade-off between pre-training compute and inference compute suggests that (on the current margins) increasing inference compute on the task at hand by 1 order of magnitude often improves performance as much as increasing pre-training compute by [0.5 to 1 orders of magnitude](https://epoch.ai/blog/trading-off-compute-in-training-and-inference). So we may be tempted to see it simply as an implementation detail in the bigger story of scaling up compute in general.

But a closer look suggests that may be a mistake. There are a number of key differences between scaling pre-training and scaling inference — both for the labs and for AI governance.

I shall argue that many ideas in AI governance will need either an adjustment or an overhaul. Those of us in the field need to look back at the long list of ideas we work with and see how this affects each one.

There is a lot of uncertainty about what is changing and what will come next.

One question is the rate at which pre-training will continue to scale. It may be that pre-training has topped out at a GPT-4 scale model, or it may continue increasing, but at a slower rate than before. [Epoch AI suggests](https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year) the compute used in LLM pre-training has been growing at about 5x per year from 2020 to 2024. It seems like that rate has now fallen, but it is not yet clear if it has gone to zero (with AI progress coming from things other than pre-training compute) or to some fraction of its previous rate.

A second — and ultimately more important — question concerns the nature of inference-scaling. We can view the current AI pipeline as pre-training (such as via next-token prediction), followed by post-training (such as RLHF or RLAIF), followed by deploying the trained model on a vast number of different tasks (such as through a chat interface or API calls).

![](https://images.squarespace-cdn.com/content/v1/562652dbe4b05bbfdc596fd7/92956b40-e44e-4678-b56e-f58110b5a7fa/Training+Stages.png)

The second question is whether the scaled-up inference compute will primarily be spent during deployment (like in o1 and R1) or as part of a larger and more complex post-training process (like the suggestions that OpenAI may have used trained o3 via many runs of o1). Each of these possibilities has important — but different — implications for AI governance.

## **Scaling inference-at-deployment**

Let’s first consider the scenario where for the coming years, the lion’s share of compute scaling goes into scaling up the inference compute used at deployment. In this scenario, the pre-trained system is either stuck at GPT-4 level or only slowly progressing beyond that, while new capabilities are being rapidly unlocked via more and more inference compute. Some of this may be being spent in post-training as the system learns how to productively reason for longer times (e.g. the reinforcement learning in the left-hand chart of OpenAI’s o1 announcement), but for this scenario, we are supposing that this one-off cost is comparatively small and that the main thing being scaled is the deployment compute.

In this scenario, we may be able to use rules of thumb such as

Effective orders of magnitude = OOMs of pre-training + 0.7 × OOMs of inference

to estimate the capabilities of an inference-scaled model in terms of the familiar yardstick of pure pre-training. But overreliance on such formulas could obscure key changes in the new scaling paradigm — changes that stem from the way the benefits of inference-at-deployment depend upon the task at hand, the way the amount of inference can be tuned to the task, and the way the costs shift from training time to deployment time.

### **Reducing the number of simultaneously served copies of each new model**

It currently takes a vast number of chips to train a frontier model. Once the model is trained, those chips can be used for inference to deploy a large number of simultaneous copies of that model. Dario Amodei of Anthropic [estimates](https://darioamodei.com/machines-of-loving-grace) this to be ‘millions’ of copies. This number of copies is a key parameter for AI governance as it affects the size of the immediate impact on the world the day the new model is ready. A shift to scaling inference-at-deployment would lower this number. e.g. if inference-at-deployment is scaled by two orders of magnitude, then this key parameter goes down by a factor of 100, and the new model can only be immediately deployed in 1% as many tasks as it would be if it had been scaled by pre-training compute.$^2$

### **Increasing the price of first human-level AGI systems**

A related parameter is how expensive the first ‘human-level’ AI systems will be to run. By previous scaling trends we might expect the first such systems to cost much less than human labour, meaning that they could be immediately deployed at a great profit, which could be ploughed back into renting chips to run more copies of them in an escalating feedback loop. But each additional order of magnitude that goes to inference-at-deployment may increase the cost of using these systems by up to an order of magnitude.

This will blunt the immediate impact of reaching this threshold and may even be enough such that there is an initial period where we first have access to ‘human-level’ AGI systems at more than the cost of equivalent human labour. If so, such systems could be available to study (for safety work) or demonstrate (before the world’s leaders) before they have transformative effects on society.

Obviously the fact that AI is already much better than humans at some tasks while much worse at others complicates this idea of reaching ‘human-level’, but I believe it is still a useful lens. For example, you can ask whether the first systems that can perform a particular job better than humans will cost more or less than human wages for that job.

### **Reducing the value of securing model weights**

Suppose that for frontier models, training compute plateaus at something like the GPT-4 level while inference-at-deployment scales by a factor of 100. Then the value of stealing model weights hasn’t increased over time — it is just the value of not having to train a GPT-4 level model (which has been decreasing over time by [about 4x](https://epoch.ai/trends) per year due to algorithmic efficiency improvements and Moore’s law). And even if the weights were stolen, the thief would still have to pay the high inference-at-deployment costs. If they intend to use the model at anything like the scale current leading models are used, these would be the lion’s share of the total costs and much higher than the training costs of the model they stole.

### **Reducing the benefits and risks of open-weight models**

This also affects both the benefits and drawbacks of open-weight models. If open-weight models require vast amounts of inference-at-deployment from their users, then they are much less attractive to those users than models of equivalent capability that were entirely pre-trained (since then the model trainer has paid those costs for you). So open-weight models could become much less valuable for their users and also less dangerous in terms of proliferation of dangerous capabilities. They would become less strategically important overall.

### **Unequal performance for different tasks and for different users**

Scaling inference-at-deployment helps with some kinds of tasks much more than others. It helps most with tasks where the solution is objectively verifiable, such as certain kinds of maths and programming tasks. It can also be useful for tasks involving many steps. Two good heuristics for the tasks that benefit from inference scaling are:

1. tasks that benefit from System 2–type thinking (methodical reasoning) when performed by humans,
2. tasks that typically take humans a long time (as this shows these tasks can benefit from a lot of thinking before diminishing marginal returns kick in).

Because some tasks benefit more from additional inference than others, it is possible to tailor the amount of inference compute to the task, spending 1,000x the normal amount for a hard, deep maths problem, while just spending 1x on problems that are more intuitive. This kind of tailoring isn’t possible with pre-training scaling, where scaling up by 10x increases the costs for everything.

A related change is that users with more money will likely be able to convert that into better answers. We’ve already seen this start to happen at OpenAI (the first frontier company to allow access to a model that scales inference-at-deployment). They now charge 10x as much for access to the version using the most inference-compute. We’d become accustomed to a dollar a day getting everyone the same quality of AI assistance. It was as Andy Warhol said about Coca Cola:

‘What’s great about this country is that America started the tradition where the richest consumers buy essentially the same things as the poorest. … the President drinks Coca Cola, Liz Taylor drinks Coca Cola, and just think, you can drink Coca Cola, too. A coke is a coke and no amount of money can get you a better coke than the one the bum on the corner is drinking.’

But scaling inference-at-deployment ends that.

### **Changing the business model and industry structure**

The LLM business model has had a lot in common with software: big upfront development costs and then comparatively low marginal costs per additional customer. Having a marginal cost per extra user that is lower than the average cost per user encourages economies of scale where each company is incentivised to set low prices to acquire a *lot* of customers, which in turn tends to create an industry with only a handful of players. But if the next two orders of magnitude of compute scale-up go into inference-at-deployment instead of into pre-training, then this would change, upsetting the existing business model and perhaps allowing more room for smaller players in the industry.

### **Reducing the need for monolithic data centres**

While training compute benefits greatly from being localised in the same data centre, inference-at-deployment can be much more easily spread between different locations. Thus if inference-at-deployment is being scaled by several orders of magnitude, it could avoid current bottlenecks concerning single large data centres, such as the need for a large amount of electrical power draw in a single place (which has started to require its own large powerplant). So if one hoped for the government to be able to exert some control over AI labs via the carrot of accelerated power plant approvals, inference-at-deployment may change that. And it will make it harder for governments to keep track of all the frontier models being trained by tracking the largest datacentres.

### **Breaking the strategy of AI governance via compute thresholds**

[Many AI governance frameworks](https://arxiv.org/pdf/2405.10799) are based around regulating only those models above a certain threshold of training compute. For example, the EU AI Act uses 10$^{25}$ FLOP while the US executive order uses 10$^{26}$ FLOP. This allows them to draw a line around the few potentially dangerous systems without needing to regulate the great majority of AI models. But if capabilities can be increased via scaling inference-at-deployment then a model whose training compute was below these thresholds might be amplified to become as powerful as those above them. For example, a model tr

[... truncated ...]