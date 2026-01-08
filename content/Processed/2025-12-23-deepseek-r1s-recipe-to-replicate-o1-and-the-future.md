---
url: https://www.interconnects.ai/p/deepseek-r1-recipe-for-o1
title: "DeepSeek R1's recipe to replicate o1 and the future of reasoning LMs"
clipped: 2025-12-23 11:15
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# DeepSeek R1's recipe to replicate o1 and the future of reasoning LMs

> Source: [https://www.interconnects.ai/p/deepseek-r1-recipe-for-o1](https://www.interconnects.ai/p/deepseek-r1-recipe-for-o1)

# DeepSeek R1's recipe to replicate o1 and the future of reasoning LMs

### Yes, ring the true o1 replication bells for DeepSeek R1 🔔🔔🔔. Where we go next.

[Nathan Lambert](https://substack.com/@natolambert)

Jan 21, 2025

234

2

34

Share

Article voiceover

0:00

-19:32

Audio playback is not supported on your browser. Please upgrade.

*I have a few shows to share with you this week:*

1. *On [The Retort](https://retortai.com/episodes/we-ask-again-is-ai-a-science) a week or two ago, we discussed the nature of AI and if it is a science (in the [Kuhn’ian](https://en.wikipedia.org/wiki/The_Structure_of_Scientific_Revolutions) sense)*
2. *I appeared on [Dean W. Ball](https://open.substack.com/users/5925551-dean-w-ball?utm_source=mentions)* *and [Timothy B. Lee](https://open.substack.com/users/101111787-timothy-b-lee?utm_source=mentions)’s new podcast AI Summer to discuss “thinking models” and the border between post-training and reasoning methods. Listen [here](https://www.aisummer.org/p/nathan-lambert-on-the-rise-of-thinking).*
3. *Finally, a talk I gave at NeurIPs on [how I think about post-training for AI applications](https://youtu.be/grpc-Wyy-Zg) is now public.*

*This post is likely getting cut off in email inboxes — I recommend reading online by clicking on the title!*

---

Yesterday, January 20th, China’s open-weights frontier AI laboratory, DeepSeek AI, released their first full fledged reasoning model. It came as:

* A flagship reasoning language model, [R1](https://huggingface.co/deepseek-ai/DeepSeek-R1), trained via a 4-stage, RL heavy process. It is **MIT-licensed** which means companies and researchers can build upon and train on its outputs to accelerate the development and deployment of reasoning language models (RLMs).
* An RL-only reasoning model trained directly from their V3 base model, [R1-Zero](https://huggingface.co/deepseek-ai/DeepSeek-R1-Zero) (used to create training data for full R1).
* A suite of open-weight models finetuned with supervised finetuning (SFT) data derived from R1 (similar data to one of their intermediate training steps).
* A [technical report](https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf) detailing their RL training methods.
* Models are available at [chat.deepseek.com](http://chat.deepseek.com) (via DeepThink) and in their [new app](https://apps.apple.com/us/app/deepseek-ai-assistant/id6737597349).

This post is less about the evaluation results (which, of course, are [extremely good](https://x.com/TheXeophon/status/1881443117787984265) and shown below)[1](https://www.interconnects.ai/p/deepseek-r1-recipe-for-o1#footnote-1-155269286), but rather about *how training is done* and *what it all means*.

[![](https://substackcdn.com/image/fetch/$s_!C1n1!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa2f93421-cd08-4cf9-b348-a5a20c7becaf_1476x1272.png)](https://substackcdn.com/image/fetch/$s_!C1n1!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa2f93421-cd08-4cf9-b348-a5a20c7becaf_1476x1272.png)

This is a major transition point in the uncertainty in reasoning model research. Until now, reasoning models have been a major area of industrial research without a clear seminal paper. Before language models took off, we had the likes of the GPT-2 paper for pretraining or InstructGPT (and Anthropic’s whitepapers) for post-training. For reasoning, we were staring at [potentially misleading](https://www.interconnects.ai/p/openais-o1-using-search-was-a-psyop) blog posts. Reasoning research and progress is now locked in — expect huge amounts of progress in 2025 and more of it in the open.

This again confirms that new technical recipes normally aren’t moats — the motivation of a proof of concept or leaks normally get the knowledge out.

For one, look at the pricing of these reasoning models. OpenAI was likely charging more for its model due to the costs of long-context serving and being the only model in town, but now o1’s [pricing](https://openai.com/api/pricing/) at $15 per million input tokens / $60 output looks out of place relative to R1’s [pricing](https://api-docs.deepseek.com/quick_start/pricing) at $0.55 per million input tokens / $2.19 output (yes, o1-mini is cheaper at $3/$12 per million, but still almost a 10x difference). The price war that is coming for reasoning models will look like the [Mixtral inference price war from 2023](https://www.latent.space/i/140396949/mixtral-sparks-a-gpuinference-race-to-the-bottom).

With o3, OpenAI is likely technically ahead, but it is not generally available nor will the weights be available anytime soon. This points to the first time since Stable Diffusion’s release that the most relevant and discussed AI model is released with a very friendly license. Looking back at the journey “[open-source](https://www.interconnects.ai/t/open-source)” AI has been on over the last 2.5 years, this is a surprising moment in time marked in the history books.

We don’t entirely know how these models will be used in the future beyond code and math, but noises are constantly bubbling up that OpenAI’s o1-Pro is the best model for many more challenging tasks (I need to try it myself before making definitive recommendations).

The most useful post to write now is one that establishes the research area, the do’s and don’ts, and the open questions. Let’s get into the details.

## The DeepSeek R1 training recipe for reasoning

The training of R1 comes in 4 stages:

1. “Cold-start” of supervised finetuning on synthetic reasoning data from the R1-Zero model.[2](https://www.interconnects.ai/p/deepseek-r1-recipe-for-o1#footnote-2-155269286)
2. Large-scale reinforcement learning training on reasoning problems “until convergence.”
3. [Rejection sampling](https://rlhfbook.com/c/10-rejection-sampling.html) on 3/4 reasoning problems and 1/4 general queries to start the transition to a general-purpose model.
4. Reinforcement learning training mixing reasoning problems (verifiable rewards) with general preference tuning reward models to polish the model.

Below, the post breaks down each training stage into its core components, insights, and open questions.

[Share](https://www.interconnects.ai/p/deepseek-r1-recipe-for-o1?utm_source=substack&utm_medium=email&utm_content=share&action=share)

The winds of o1 replication have been blowing strongly away from any sort explicit search (especially at inference time). It really was, and is, a language model with the new reasoning behaviors coming from a lot of RL training.

[![OpenAI's o1 using "search" was a PSYOP](https://substackcdn.com/image/fetch/$s_!ko32!,w_140,h_140,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F44840c49-9a71-439b-9a6c-b08abe3b60fa_1980x1113.png)

#### OpenAI's o1 using "search" was a PSYOP

[Nathan Lambert](https://substack.com/profile/10472909-nathan-lambert)

·

December 4, 2024

[Read full story](https://www.interconnects.ai/p/openais-o1-using-search-was-a-psyop)](https://www.interconnects.ai/p/openais-o1-using-search-was-a-psyop)

Before we start, remember that to do this reasoning training well you need a very strong base model with long-context capabilities. Much like for standard post-training, we [don’t really know](https://x.com/sea_snell/status/1881453551974805684) what traits of a base model make for one that is more suited for direct RL training.

### Step 0. Training R1-Zero to initialize R1 with synthetic data

DeepSeek R1 Zero will be best known as the first open model trained with “large-scale reinforcement learning (RL) without supervised fine-tuning (SFT) as a preliminary step.” Rumors had mentioned this for o1, but understanding how it worked wasn’t clear. This is a funky model that DeepSeek reports will sometimes change languages in reasoning or show signs of other reliability issues.

The minor usability issues with R1-Zero show why more than *just* large-scale RL is needed to train a fantastic reasoning model, but the RL part is the key to unlocking the reasoning behaviors we are searching for.

They include the most interesting results for R1-Zero, including the plot I’ve been asking for of RL-training time scaling. Since o1’s release, everyone has been obsessed with the plots showing how *inference time* is correlated with evaluation performance. Inference time is far easier to elicit (or force by using a framework like Monte Carlo Tree Search), but showing *training time* improvements via RL is the real foundational result. This is the result I’m searching for in my research.

[![](https://substackcdn.com/image/fetch/$s_!8mIS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7cc1c572-f0ab-4247-a062-04780a3321ed_1916x1074.png)](https://substackcdn.com/image/fetch/$s_!8mIS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7cc1c572-f0ab-4247-a062-04780a3321ed_1916x1074.png)

And an unsurprising, yet very satisfying plot of length growing with training. This could be mixed with the above plot to make one of the “inference time scaling” plots we have seen many versions of with less clear methods.

[![](https://substackcdn.com/image/fetch/$s_!KVEL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F75974ec6-d89b-4c81-a7e5-9530145f5e6c_1910x1088.png)](https://substackcdn.com/image/fetch/$s_!KVEL!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F75974ec6-d89b-4c81-a7e5-9530145f5e6c_1910x1088.png)

In both of these plots, it looks like the numbers could still be going up if they let the RL cook longer. With the pace of progress so high, these laboratories get more gains by ending the jobs near saturation and starting the next experiment instead of seeking that last 1%.

Most, if not all, researchers will skip the step of training an R1-Zero style model because they don’t need to. DeepSeek made it clear that their “cold start” of SFT reasoning traces makes the final R1 model better — this is unsurprising, as they want R1 to be a certain type of instruction-tuned model. It’ll help avoid some of the “RL oddities” in R1-Zero that DeepSeek mentions like changing language mid-generation.

Still, the area of RL-on-base-models should be studied further. The way that R1-Zero can be trained is quite clever as most base models without any instruction tuning have a major issues with rambling and never generating a stop token. R1-Zero avoids this with a system prompt telling the model to generate <answer> HTML tags. Additionally, I suspect this type of training wouldn’t work on older base models that don’t have some standard post-training style instruction data in the pretraining corpus. For example, in OLMo 2 we had some MATH instruction data in the [annealing mix](https://huggingface.co/datasets/allenai/dolmino-mix-1124). Just a few instructions will let this system prompt work.

In fact, the trend of increasing generation length via RL training could be even stronger when training directly from a base model rather than a standard post-trained model that doesn’t have a verbose chain of thought style. In order for RL to really start cranking up the response length in such an instruction-following model it will have to unlearn a certain response length that was baked in. For example, in Tülu 3’s final stage of RL finetuning, the phase where the response rate first goes down could be the barrier of misalignment between a larger round of SFT training before a smaller RL setup.

[![](https://substackcdn.com/image/fetch/$s_!2vF9!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8dab8b2e-ee61-41d6-911a-bcc105d7f5da_1564x356.png)](https://substackcdn.com/image/fetch/$s_!2vF9!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8dab8b2e-ee61-41d6-911a-bcc105d7f5da_1564x356.png)

Note, the x axis here is episodes, which is different than the “step” used in the DeepSeek plots.

Zooming in on the x-axes of these R1-Zero plots, you can see that they’re doing 1000s of “RL steps.” RL step in this case refers to the model update step, which comes after multiple generations are made for the prompts in the batch and then answers are verified.[3](https://www.interconnects.ai/p/deepseek-r1-recipe-for-o1#footnote-3-155269286) This is a large amount of RL training, especially with such a large model. For reference, in our [Tülu 3](https://arxiv.org/abs/2411.15124) work, we finetuned our models for 100s of steps normally, and the biggest models we are releasing soon only trained for ~50 steps of RL.

This is scaled-up RL relative to existing literature. R1 proper surely uses a similar setup, but DeepSeek did not include the same details, so the rest of this post relies more on explicit text in the paper.

### Step 1. Reasoning SFT “Cold Start”

In order to **improve the readability** (i.e. help maintain formatting) and **increase the final performance** of the final reasoning model, DeepSeek performs a small amount of supervised finetuning on the original base model with “a few thousand” filtered completions from the R1-Zero model. This involves a few tricks (none of which seem essential, you just need some of this data), such as:

> Using few-shot prompting with a long CoT as an example, directly prompting models to generate detailed answers with reflection and verification, gathering DeepSeek-R1-Zero outputs in a readable format, and refining the results through post-processing by human annotators.

For replication efforts, any of these can be done. In fact, using DeepSeek-R1 itself is likely the easiest way.

This phase readies the loss landscape of the model to make the “emergent” behaviors like “wait, let me check my work” or “that was wrong” come forth more easily in RL training.

### Step 2. Large-scale RL for reasoning

As a reminder, RL for reasoning models is built on a simple idea where you should reward the model for getting correct answers to problems where you can check if it has a correct answer. A basic feedback loop of this looks like the following:

[![](https://substackcdn.com/image/fetch/$s_!4T2d!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff1b709d1-9bb7-436f-9d07-08ead28eef2d_923x477.png)](https://substackcdn.com/image/fetch/$s_!4T2d!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff1b709d1-9bb7-436f-9d07-08ead28eef2d_923x477.png)

System diagram for the RLVR finetuning in Tülu 3. https://arxiv.org/abs/2411.15124



[... truncated ...]