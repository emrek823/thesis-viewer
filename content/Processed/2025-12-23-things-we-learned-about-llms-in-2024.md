---
url: https://simonwillison.net/2024/Dec/31/llms-in-2024/
title: "Things we learned about LLMs in 2024"
clipped: 2025-12-23 11:16
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Things we learned about LLMs in 2024

> Source: [https://simonwillison.net/2024/Dec/31/llms-in-2024/](https://simonwillison.net/2024/Dec/31/llms-in-2024/)

## Things we learned about LLMs in 2024

31st December 2024

A *lot* has happened in the world of Large Language Models over the course of 2024. Here’s a review of things we figured out about the field in the past twelve months, plus my attempt at identifying key themes and pivotal moments.

This is a sequel to [my review of 2023](https://simonwillison.net/2023/Dec/31/ai-in-2023/).

In this article:

* [The GPT-4 barrier was comprehensively broken](https://simonwillison.net/2024/Dec/31/llms-in-2024/#the-gpt-4-barrier-was-comprehensively-broken)
* [Some of those GPT-4 models run on my laptop](https://simonwillison.net/2024/Dec/31/llms-in-2024/#some-of-those-gpt-4-models-run-on-my-laptop)
* [LLM prices crashed, thanks to competition and increased efficiency](https://simonwillison.net/2024/Dec/31/llms-in-2024/#llm-prices-crashed-thanks-to-competition-and-increased-efficiency)
* [Multimodal vision is common, audio and video are starting to emerge](https://simonwillison.net/2024/Dec/31/llms-in-2024/#multimodal-vision-is-common-audio-and-video-are-starting-to-emerge)
* [Voice and live camera mode are science fiction come to life](https://simonwillison.net/2024/Dec/31/llms-in-2024/#voice-and-live-camera-mode-are-science-fiction-come-to-life)
* [Prompt driven app generation is a commodity already](https://simonwillison.net/2024/Dec/31/llms-in-2024/#prompt-driven-app-generation-is-a-commodity-already)
* [Universal access to the best models lasted for just a few short months](https://simonwillison.net/2024/Dec/31/llms-in-2024/#universal-access-to-the-best-models-lasted-for-just-a-few-short-months)
* [“Agents” still haven’t really happened yet](https://simonwillison.net/2024/Dec/31/llms-in-2024/#-agents-still-haven-t-really-happened-yet)
* [Evals really matter](https://simonwillison.net/2024/Dec/31/llms-in-2024/#evals-really-matter)
* [Apple Intelligence is bad, Apple’s MLX library is excellent](https://simonwillison.net/2024/Dec/31/llms-in-2024/#apple-intelligence-is-bad-apple-s-mlx-library-is-excellent)
* [The rise of inference-scaling “reasoning” models](https://simonwillison.net/2024/Dec/31/llms-in-2024/#the-rise-of-inference-scaling-reasoning-models)
* [Was the best currently available LLM trained in China for less than $6m?](https://simonwillison.net/2024/Dec/31/llms-in-2024/#was-the-best-currently-available-llm-trained-in-china-for-less-than-6m-)
* [The environmental impact got better](https://simonwillison.net/2024/Dec/31/llms-in-2024/#the-environmental-impact-got-better)
* [The environmental impact got much, much worse](https://simonwillison.net/2024/Dec/31/llms-in-2024/#the-environmental-impact-got-much-much-worse)
* [The year of slop](https://simonwillison.net/2024/Dec/31/llms-in-2024/#the-year-of-slop)
* [Synthetic training data works great](https://simonwillison.net/2024/Dec/31/llms-in-2024/#synthetic-training-data-works-great)
* [LLMs somehow got even harder to use](https://simonwillison.net/2024/Dec/31/llms-in-2024/#llms-somehow-got-even-harder-to-use)
* [Knowledge is incredibly unevenly distributed](https://simonwillison.net/2024/Dec/31/llms-in-2024/#knowledge-is-incredibly-unevenly-distributed)
* [LLMs need better criticism](https://simonwillison.net/2024/Dec/31/llms-in-2024/#llms-need-better-criticism)
* [Everything tagged “llms” on my blog in 2024](https://simonwillison.net/2024/Dec/31/llms-in-2024/#everything-tagged-llms-on-my-blog-in-2024)

#### The GPT-4 barrier was comprehensively broken

In my December 2023 review I wrote about how [We don’t yet know how to build GPT-4](https://simonwillison.net/2023/Dec/31/ai-in-2023/#cant-build-gpt4)—OpenAI’s best model was almost a year old at that point, yet no other AI lab had produced anything better. What did OpenAI know that the rest of us didn’t?

I’m relieved that this has changed completely in the past twelve months. 18 organizations now have models on the [Chatbot Arena Leaderboard](https://lmarena.ai/?leaderboard) that rank higher than the original GPT-4 from March 2023 (`GPT-4-0314` on the board)—70 models in total.

![Screenshot of a comparison table showing AI model rankings. Table headers: Rank (UB), Rank (StyleCtrl), Model, Arena Score, 95% CI, Votes, Organization, License. Shows 12 models including GLM-4-0520, Llama-3-70B-Instruct, Gemini-1.5-Flash-8B-Exp-0827, with rankings, scores, and licensing details. Models range from rank 52-69 with Arena scores between 1186-1207.](https://static.simonwillison.net/static/2024/arena-dec-2024.jpg)

The earliest of those was **Google’s Gemini 1.5 Pro**, released in February. In addition to producing GPT-4 level outputs, it introduced several brand new capabilities to the field—most notably its 1 million (and then later 2 million) token input context length, and the ability to input video.

I wrote about this at the time in [The killer app of Gemini Pro 1.5 is video](https://simonwillison.net/2024/Feb/21/gemini-pro-video/), which earned me a short appearance [as a talking head](https://www.youtube.com/watch?v=XEzRZ35urlk&t=606s) in the Google I/O opening keynote in May.

Gemini 1.5 Pro also illustrated one of the key themes of 2024: **increased context lengths**. Last year most models accepted 4,096 or 8,192 tokens, with the notable exception of Claude 2.1 which [accepted 200,000](https://www.anthropic.com/news/claude-2-1). Today every serious provider has a 100,000+ token model, and Google’s Gemini series accepts up to 2 million.

Longer inputs dramatically increase the scope of problems that can be solved with an LLM: you can now throw in an entire book and ask questions about its contents, but more importantly you can feed in a *lot* of example code to help the model correctly solve a coding problem. LLM use-cases that involve long inputs are far more interesting to me than short prompts that rely purely on the information already baked into the model weights. Many of my [tools](https://simonwillison.net/tags/tools/) were built using this pattern.

Getting back to models that beat GPT-4: Anthropic’s Claude 3 series [launched in March](https://simonwillison.net/2024/Mar/4/claude-3/), and Claude 3 Opus quickly became my new favourite daily-driver. They upped the ante even more in June with [the launch of Claude 3.5 Sonnet](https://simonwillison.net/2024/Jun/20/claude-35-sonnet/)—a model that is still my favourite six months later (though it got a significant upgrade [on October 22](https://www.anthropic.com/news/3-5-models-and-computer-use), confusingly keeping the same 3.5 version number. Anthropic fans have since taken to calling it Claude 3.6).

Then there’s the rest. If you browse [the Chatbot Arena leaderboard](https://lmarena.ai/?leaderboard) today—still the most useful single place to get [a vibes-based evaluation](https://simonwillison.net/2024/Jul/14/pycon/#pycon-2024.016.jpeg) of models—you’ll see that GPT-4-0314 has fallen to around 70th place. The 18 organizations with higher scoring models are Google, OpenAI, Alibaba, Anthropic, Meta, Reka AI, 01 AI, Amazon, Cohere, DeepSeek, Nvidia, Mistral, NexusFlow, Zhipu AI, xAI, AI21 Labs, Princeton and Tencent.

Training a GPT-4 beating model was a huge deal in 2023. In 2024 it’s an achievement that isn’t even particularly notable, though I personally still celebrate any time a new organization joins that list.

#### Some of those GPT-4 models run on my laptop

My personal laptop is a 64GB M2 MacBook Pro from 2023. It’s a powerful machine, but it’s also nearly two years old now—and crucially it’s the same laptop I’ve been using ever since I first ran an LLM on my computer back in March 2023 (see [Large language models are having their Stable Diffusion moment](https://simonwillison.net/2023/Mar/11/llama/)).

That same laptop that could just about run a GPT-3-class model in March last year has now run multiple GPT-4 class models! Some of my notes on that:

* [Qwen2.5-Coder-32B is an LLM that can code well that runs on my Mac](https://simonwillison.net/2024/Nov/12/qwen25-coder/) talks about Qwen2.5-Coder-32B in November—an Apache 2.0 licensed model!
* [I can now run a GPT-4 class model on my laptop](https://simonwillison.net/2024/Dec/9/llama-33-70b/) talks about running Meta’s Llama 3.3 70B (released in December)

This remains astonishing to me. I thought a model with the capabilities and output quality of GPT-4 needed a datacenter class server with one or more $40,000+ GPUs.

These models take up enough of my 64GB of RAM that I don’t run them often—they don’t leave much room for anything else.

The fact that they run at all is a testament to the incredible training and inference performance gains that we’ve figured out over the past year. It turns out there was a *lot* of low-hanging fruit to be harvested in terms of model efficiency. I expect there’s still more to come.

Meta’s Llama 3.2 models deserve a special mention. They may not be GPT-4 class, but at 1B and 3B sizes they punch *massively* above their weight. I run Llama 3.2 3B on my iPhone using the free [MLC Chat iOS app](https://apps.apple.com/us/app/mlc-chat/id6448482937) and it’s a shockingly capable model for its tiny (<2GB) size. Try firing it up and asking it for “a plot outline of a Netflix Christmas movie where a data journalist falls in love with a local ceramacist”. Here’s what I got, at a respectable 20 tokens per second:

![MLC Chat: Llama - [System] Ready to chat. a plot outline of a Netflix Christmas movie where a data journalist falls in love with a local ceramacist. Show as Markdown is turned on. Here's a plot outline for a Netflix Christmas movie: Title: "Love in the Clay" Plot Outline: We meet our protagonist, JESSICA, a data journalist who has just returned to her hometown of Willow Creek, a small, charming town nestled in the snow-covered mountains. She's back to work on a story about the town's history and the effects of gentrification on the local community.](https://static.simonwillison.net/static/2024/mlc-chat-christmas.jpg)

[Here’s the rest of the transcript](https://gist.github.com/simonw/7db8d582fdb0c133d7e05205c305d5bd). It’s bland and generic, but my phone can pitch bland and generic Christmas movies to Netflix now!

#### LLM prices crashed, thanks to competition and increased efficiency

The past twelve months have seen a dramatic collapse in the cost of running a prompt through the top tier hosted LLMs.

In December 2023 (here’s the [Internet Archive for the OpenAI pricing page](https://web.archive.org/web/20231214190432/https://openai.com/pricing)) OpenAI were charging $30/million input tokens for GPT-4, $10/mTok for the then-new GPT-4 Turbo and $1/mTok for GPT-3.5 Turbo.

Today $30/mTok gets you OpenAI’s most expensive model, o1. GPT-4o is $2.50 (12x cheaper than GPT-4) and GPT-4o mini is $0.15/mTok—200x cheaper than GPT-4, nearly 7x cheaper than GPT-3.5 and *massively* more capable than that model.

Other model providers charge even less. Anthropic’s Claude 3 Haiku (from March, but still their cheapest model) is $0.25/mTok. Google’s Gemini 1.5 Flash is $0.075/mTok and their Gemini 1.5 Flash 8B is $0.0375/mTok—that’s 27x cheaper than GPT-3.5 Turbo last year.

I’ve been tracking these pricing changes under my [llm-pricing tag](https://simonwillison.net/tags/llm-pricing/).

These price drops are driven by two factors: increased competition and increased efficiency. The efficiency thing is *really* important for everyone who is concerned about the environmental impact of LLMs. These price drops tie directly to how much energy is being used for running prompts.

There’s still plenty to worry about with respect to the environmental impact of the great AI datacenter buildout, but a lot of the concerns over the energy cost of individual prompts are no longer credible.

Here’s a fun napkin calculation: how much would it cost to generate short descriptions of every one of the 68,000 photos in my personal photo library using Google’s Gemini 1.5 Flash 8B ([released in October](https://developers.googleblog.com/en/gemini-15-flash-8b-is-now-generally-available-for-use/)), their cheapest model?

Each photo would need 260 input tokens and around 100 output tokens.

260 \* 68,000 = 17,680,000 input tokens  
17,680,000 \* $0.0375/million = $0.66  
100 \* 68,000 = 6,800,000 output tokens  
6,800,000 \* $0.15/million = $1.02

That’s a total cost of **$1.68** to process 68,000 images. That’s so absurdly cheap I had to run the numbers three times to confirm I got it right.

How good are those descriptions? Here’s what I got from this command:

```
llm -m gemini-1.5-flash-8b-latest describe -a IMG_1825.jpeg
```

Against this photo of butterflies at the California Academy of Sciences:

![A photo of two butterflies feeding on a red tray](https://static.simonwillison.net/static/2024/butterflies.jpg)

> A shallow dish, likely a hummingbird or butterfly feeder, is red. Pieces of orange slices of fruit are visible inside the dish.
>
> Two butterflies are positioned in the feeder, one is a dark brown/black butterfly with white/cream-colored markings. The other is a large, brown butterfly with patterns of lighter brown, beige, and black markings, including prominent eye spots. The larger brown butterfly appears to be feeding on the fruit.

260 input tokens, 92 output tokens. Cost approximately 0.0024 cents (that’s less than a 400th of a cent).

This increase in efficiency and reduction in price is my single favourite trend from 2024. I want the utility of LLMs at a fraction of the energy cost and it looks like that’s what we’re getting.

#### Multimodal vision is common, audio and video are starting to emerge

My butterfly example above illustrates another key trend from 2024: the rise of multi-modal LLMs.

A year ago the single most notable example of these was GPT-4 Vision, [released at OpenAI’s DevDay in November 2023](https://openai.com/index/new-models-and-developer-products-announced-at-devday/). Google’s multi-modal Gemini 1.0 was announced [on December 7th 2023](https://blog.google/technology/ai/google-gemini-ai/) so it also (just) makes it into the 2023 window.

In 2024, almost every significant model vendor released multi-modal models. We saw the Claude 3 series from Anthropic [in March](https://simonwillison.net/2024/Mar/4/claude-3/), Gemini 1.5 Pro [in April](https://simonwillison.net/2024/Apr/10/gemini-15-pro-public-preview/) (images, audio and video), then September brought [Qwen2-VL](https://simonwillison.net/2024/Sep/4/qwen2-vl/) and Mistral’s [Pixtral 12B](https://simonwillison.net/2024/Sep/11/pixtral/) and Meta’s [Llama 3.2 11B and 90B vision models](https://simonwillison.net/2024/Sep/25/llama-32/). We got audio input and output [from OpenAI in October](https://simonwillison.net/2024/Oct/18/openai-audio/), then November saw [SmolVLM from Hugging Face](https://simonwillison.net/2024/Nov/28/smolvlm/) and December saw image and video models [from Amazon Nova](https://simonwillison.net/2024/Dec/4/amazon-nova/).

In October I [upgraded my LLM CLI tool to support multi-modal models vi

[... truncated ...]