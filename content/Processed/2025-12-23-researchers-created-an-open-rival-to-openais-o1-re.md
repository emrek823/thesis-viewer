---
url: https://techcrunch.com/2025/02/05/researchers-created-an-open-rival-to-openais-o1-reasoning-model-for-under-50/
title: "Researchers created an open rival to OpenAI's o1 'reasoning' model for under $50 | TechCrunch"
clipped: 2025-12-23 11:15
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Researchers created an open rival to OpenAI's o1 'reasoning' model for under $50 | TechCrunch

> Source: [https://techcrunch.com/2025/02/05/researchers-created-an-open-rival-to-openais-o1-reasoning-model-for-under-50/](https://techcrunch.com/2025/02/05/researchers-created-an-open-rival-to-openais-o1-reasoning-model-for-under-50/)

AI researchers at Stanford and the University of Washington were able to train an AI “reasoning” model for under $50 in cloud compute credits, according to a new [research paper](https://arxiv.org/pdf/2501.19393) released last Friday.

The model, known as s1, performs similarly to cutting-edge reasoning models, such as OpenAI’s o1 and DeepSeek’s R1, on tests measuring math and coding abilities. The s1 model is [available on GitHub](https://github.com/simplescaling/s1), along with the data and code used to train it.

The team behind s1 said they started with an off-the-shelf base model, then fine-tuned it through distillation, a process to extract the “reasoning” capabilities from another AI model by training on its answers.

The researchers said s1 is distilled from one of Google’s reasoning models, Gemini 2.0 Flash Thinking Experimental. Distillation is the same approach Berkeley researchers used to [create an AI reasoning model for around $450 last month](https://techcrunch.com/2025/01/11/researchers-open-source-sky-t1-a-reasoning-ai-model-that-can-be-trained-for-less-than-450/).

To some, the idea that a few researchers without millions of dollars behind them can still innovate in the AI space is exciting. But s1 raises real questions about the commoditization of AI models.

Where’s the moat if someone can closely replicate a multi-million-dollar model with relative pocket change?

Unsurprisingly, big AI labs aren’t happy. OpenAI has accused DeepSeek of improperly harvesting data from its API for the purposes of [model distillation](https://www.nytimes.com/2025/01/29/technology/openai-deepseek-data-harvest.html).

Techcrunch event

### Join the Disrupt 2026 Waitlist

#### Add yourself to the Disrupt 2026 waitlist to be first in line when Early Bird tickets drop. Past Disrupts have brought Google Cloud, Netflix, Microsoft, Box, Phia, a16z, ElevenLabs, Wayve, Hugging Face, Elad Gil, and Vinod Khosla to the stages — part of 250+ industry leaders driving 200+ sessions built to fuel your growth and sharpen your edge. Plus, meet the hundreds of startups innovating across every sector.

### Join the Disrupt 2026 Waitlist

#### Add yourself to the Disrupt 2026 waitlist to be first in line when Early Bird tickets drop. Past Disrupts have brought Google Cloud, Netflix, Microsoft, Box, Phia, a16z, ElevenLabs, Wayve, Hugging Face, Elad Gil, and Vinod Khosla to the stages — part of 250+ industry leaders driving 200+ sessions built to fuel your growth and sharpen your edge. Plus, meet the hundreds of startups innovating across every sector.

San Francisco
|
October 13-15, 2026

[**W**AITLIST **NOW**](https://techcrunch.com/events/tc-disrupt-2026/)

The researchers behind s1 were looking to find the simplest approach to achieve strong reasoning performance and “test-time scaling,” or allowing an AI model to think more before it answers a question. These were a few of the breakthroughs in OpenAI’s o1, which DeepSeek and other AI labs have tried to replicate through various techniques.

The s1 paper suggests that reasoning models can be distilled with a relatively small dataset using a process called supervised fine-tuning (SFT), in which an AI model is explicitly instructed to mimic certain behaviors in a dataset.

SFT tends to be cheaper than the large-scale reinforcement learning method that DeepSeek employed to train its competitor to OpenAI’s o1 model, R1.

Google offers free access to Gemini 2.0 Flash Thinking Experimental, albeit with daily rate limits, via its Google AI Studio platform.

Google’s terms forbid reverse-engineering its models to develop services that compete with the company’s own AI offerings, however. We’ve reached out to Google for comment.

S1 is based on a small, off-the-shelf AI model from Alibaba-owned Chinese AI lab Qwen, which is available to download for free. To train s1, the researchers created a dataset of just 1,000 carefully curated questions, paired with answers to those questions, as well as the “thinking” process behind each answer from Google’s Gemini 2.0 Flash Thinking Experimental.

After training s1, which took less than 30 minutes using 16 Nvidia H100 GPUs, s1 achieved strong performance on certain AI benchmarks, according to the researchers. Niklas Muennighoff, a Stanford researcher who worked on the project, told TechCrunch he could rent the necessary compute today for about $20.

The researchers used a nifty trick to get s1 to double-check its work and extend its “thinking” time: They told it to wait. Adding the word “wait” during s1’s reasoning helped the model arrive at slightly more accurate answers, per the paper.

In 2025, Meta, Google, and Microsoft [plan to invest hundreds of billions of dollars in AI infrastructure](https://finance.yahoo.com/news/alphabet-meta-microsoft-set-to-spend-230-billion-this-year-as-hefty-ai-bills-come-under-scrutiny-184912247.html), which will partially go toward training next-generation AI models.

That level of investment may still be necessary to push the envelope of AI innovation. Distillation has shown to be a good method for cheaply re-creating an AI model’s capabilities, but it doesn’t create new AI models vastly better than what’s available today.

Topics

[AI](https://techcrunch.com/category/artificial-intelligence/), [AI reasoning models](https://techcrunch.com/tag/ai-reasoning-models/), [AI research](https://techcrunch.com/tag/ai-research/), [deepseek](https://techcrunch.com/tag/deepseek/), [distillation](https://techcrunch.com/tag/distillation/), [OpenAI](https://techcrunch.com/tag/openai/), [TC](https://techcrunch.com/category/tc/)

![Maxwell Zeff](https://techcrunch.com/wp-content/uploads/2024/07/Maxwell-Zeff.jpg?w=150)

Maxwell Zeff

Senior AI Reporter

Maxwell Zeff was a senior reporter at TechCrunch specializing in AI. Previously with Gizmodo, Bloomberg, and MSNBC, Zeff has covered the rise of AI and the Silicon Valley Bank crisis. He is based in San Francisco. When not reporting, he can be found hiking, biking, and exploring the Bay Area’s food scene.

[View Bio](https://techcrunch.com/author/maxwell-zeff/)

![Event Logo](https://techcrunch.com/wp-content/uploads/2025/12/strictlyvc-wordmark-orange_horizontal_cropped.png)

Dates TBD

Locations TBA

Plan ahead for the 2026 StrictlyVC events. Hear straight-from-the-source candid insights in on-stage fireside sessions and meet the builders and backers shaping the industry. Join the waitlist to get first access to the lowest-priced tickets and important updates.

[Waitlist Now](https://techcrunch.com/events/strictlyvc-2026-events/)

## Most Popular

* ### [ChatGPT launches a year-end review like Spotify Wrapped](https://techcrunch.com/2025/12/22/chatgpt-launches-a-year-end-review-like-spotify-wrapped/)

  + [Sarah Perez](https://techcrunch.com/author/sarah-perez/)
* ### [Waymo resumes service in San Francisco after robotaxis stall during blackout](https://techcrunch.com/2025/12/21/waymo-suspends-service-in-san-francisco-as-robotaxis-stall-during-blackout/)

  + [Anthony Ha](https://techcrunch.com/author/anthony-ha/)
* ### [Google and Apple reportedly warn employees on visas to avoid international travel](https://techcrunch.com/2025/12/20/google-and-apple-reportedly-warn-employees-on-visas-to-avoid-international-travel/)

  + [Anthony Ha](https://techcrunch.com/author/anthony-ha/)
* ### [Meta is developing a new image and video model for a 2026 release, report says](https://techcrunch.com/2025/12/19/meta-is-developing-a-new-image-and-video-model-for-a-2026-release-report-says/)

  + [Ivan Mehta](https://techcrunch.com/author/ivan-mehta/)
* ### [Tech provider for NHS England confirms data breach](https://techcrunch.com/2025/12/18/tech-provider-for-nhs-england-confirms-data-breach/)

  + [Lorenzo Franceschi-Bicchierai](https://techcrunch.com/author/lorenzo-franceschi-bicchierai/)
* ### [Coursera and Udemy enter a merger agreement valued at around $2.5B](https://techcrunch.com/2025/12/17/coursera-and-udemy-enter-a-merger-agreement-valued-at-around-2-5b/)

  + [Lauren Forristal](https://techcrunch.com/author/lauren-forristal/)
* ### [Google’s vibe-coding tool Opal comes to Gemini](https://techcrunch.com/2025/12/17/googles-vibe-coding-tool-opal-comes-to-gemini/)

  + [Sarah Perez](https://techcrunch.com/author/sarah-perez/)