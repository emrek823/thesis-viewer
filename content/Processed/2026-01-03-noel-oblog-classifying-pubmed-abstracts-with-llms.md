---
url: https://baoilleach.blogspot.com/2026/01/classifying-pubmed-abstracts-with-llms.html
title: "Noel O'Blog: Classifying PubMed Abstracts with LLMs"
clipped: 2026-01-03 21:07
source: browser-history
---

# Noel O'Blog: Classifying PubMed Abstracts with LLMs

> Source: [https://baoilleach.blogspot.com/2026/01/classifying-pubmed-abstracts-with-llms.html](https://baoilleach.blogspot.com/2026/01/classifying-pubmed-abstracts-with-llms.html)

## Saturday, 3 January 2026

### Classifying PubMed Abstracts with LLMs

I've just spent the Christmas playing with the OpenAI API, and I am impressed at what is now possible. There are 38M PubMed Abstracts (\*); through judicious use of keyword filters (bringing it down to 250K) followed by a pass through a cheap model (bringing it down to 3.5K), I have essentially categorised all of the abstracts of interest with GPT-5.2 for less than $20 (\*\*). Even leaving out the cheaper model and going directly to GPT-5.2 would still only be less than $200.

This is what's known as a reasoning task. Here is the general prompt that I used, except that I have hidden some of the details (the definition section was suggested by ChatGPT as an improvement but I don't know that it helped).

> ```
> Based on this article title and abstract, does the associated paper describe X?
>
> Definitions:
> - Y
> - Z
>
> Instructions:
> - Reply with exactly one of: Yes, No, or Maybe.
> - If the answer is No, reply with only: No
> - If the answer is Yes or Maybe, briefly justify your answer by quoting specific words or phrases from the title or abstract as evidence.
> - Do not infer beyond what is explicitly stated in the text.
> ```

When running it through GPT-5.2, I used slightly more complicated instructions in order to identify primary research data::
> ```
> Instructions:
> - Reply with exactly one of: Yes (primary), Yes (secondary), No, or Maybe.
>   - Yes (primary) indicates that the paper is a primary reference for X, rather than being a review article or mentioning it as background
> - If the answer is No, reply with only: No
> - Otherwise, briefly justify your answer by quoting specific words or phrases from the title or abstract as evidence.
> - Do not infer beyond what is explicitly stated in the text.
> ```

The cheaper/faster/less accurate model I used was GPT5-Nano. As a validation, I put all of the 2023 and 2024 abstracts through GPT-5.2 and only found a single additional "Yes" (on top of the 53 found by GPT5-Nano), and I'm not convinced about that particular case. GPT-5.2 was definitely required though as a final pass to reduce false positives; I passed all of the Yeses and Maybes from the Nano through to GPT-5.2 and it mostly trimmed down the Yeses and didn't promote the Maybes.

Run-time is somewhat dependant on how many batches you need to use as there is an overhead associated with each batch. When you sign up for API access, you start on Tier 1 and need to use lots of batches which must be run serially to avoid queue limits. In one case, I ran 75 batches of 3000 with GPT5-Nano; each one took 20 mins on average which was fine, but the API SLA only guarantees an answer within 24h would would be bit of a problem. After 7 days, I was bumped up to Tier 3 and it's possible that I could do the same thing in a single batch now. For example, on Tier 3, I ran 4 batches of 10000 with GPT5.2, each one taking 1h.

Given that the prompt above lends itself to many questions, you can use the details I've provided to get an idea of what might be possible for your questions of interest and for what budget. The trickiest part right now is dealing with the batch API, queue limits, and JSON, which can all be a bit tedious until you have something in place. Indeed, it feels like the sort of thing where there's a business opportunity to provide a biologist-friendly interface to abstract (\*\*\*) this away. In any case, it's easy to predict that in 2026 we will be seeing less of BioBERT and similar models, and more adoption of LLMs.

## Footnotes:

\* in the 2025 baseline file - soon to be updated.

\*\* $17.07 for GPT5-Nano over 250K abstracts and $1.82 for GPT-5.2 over 3.5K abstracts.

\*\*\* for once no pun intended!

:
[15:06](https://baoilleach.blogspot.com/2026/01/classifying-pubmed-abstracts-with-llms.html "permanent link")

[![](https://resources.blogblog.com/img/icon18_edit_allbkg.gif)](https://www.blogger.com/post-edit.g?blogID=7844526396210378482&postID=2480139432441380468&from=pencil "Edit Post")

[Email This](https://www.blogger.com/share-post.g?blogID=7844526396210378482&postID=2480139432441380468&target=email "Email This")[BlogThis!](https://www.blogger.com/share-post.g?blogID=7844526396210378482&postID=2480139432441380468&target=blog "BlogThis!")[Share to X](https://www.blogger.com/share-post.g?blogID=7844526396210378482&postID=2480139432441380468&target=twitter "Share to X")[Share to Facebook](https://www.blogger.com/share-post.g?blogID=7844526396210378482&postID=2480139432441380468&target=facebook "Share to Facebook")[Share to Pinterest](https://www.blogger.com/share-post.g?blogID=7844526396210378482&postID=2480139432441380468&target=pinterest "Share to Pinterest")

#### No comments:

[Post a Comment](https://www.blogger.com/comment/fullpage/post/7844526396210378482/2480139432441380468)

[Older Post](https://baoilleach.blogspot.com/2025/12/openings-for-scientific-developers-in.html "Older Post")
[Home](https://baoilleach.blogspot.com/)

Subscribe to:
[Post Comments (Atom)](https://baoilleach.blogspot.com/feeds/2480139432441380468/comments/default)