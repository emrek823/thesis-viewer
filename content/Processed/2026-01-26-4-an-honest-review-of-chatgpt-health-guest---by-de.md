---
url: https://www.artificialintelligencemadesimple.com/p/an-honest-review-of-chatgpt-health?utm_source=post-email-title&publication_id=1315074&post_id=185796276&utm_campaign=email-post-title&isFreemail=false&r=kmfsl&triedRedirect=true&utm_medium=email
title: "(4) An honest review of ChatGPT Health [Guest] - by Devansh"
clipped: 2026-01-26 13:11
source: browser-history
---

# (4) An honest review of ChatGPT Health [Guest] - by Devansh

> Source: [https://www.artificialintelligencemadesimple.com/p/an-honest-review-of-chatgpt-health?utm_source=post-email-title&publication_id=1315074&post_id=185796276&utm_campaign=email-post-title&isFreemail=false&r=kmfsl&triedRedirect=true&utm_medium=email](https://www.artificialintelligencemadesimple.com/p/an-honest-review-of-chatgpt-health?utm_source=post-email-title&publication_id=1315074&post_id=185796276&utm_campaign=email-post-title&isFreemail=false&r=kmfsl&triedRedirect=true&utm_medium=email)

# An honest review of ChatGPT Health [Guest]

### Why ChatGPT Health turned out to be good news for Google (and Anthropic).

[![Devansh's avatar](https://substackcdn.com/image/fetch/$s_!0X66!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F48081c70-8afa-41e3-a44e-b0f917bc7577_1200x1600.jpeg)](https://substack.com/@chocolatemilkcultleader)

[Devansh](https://substack.com/@chocolatemilkcultleader)

Jan 26, 2026

29

2

3

Share

*It takes time to create work that’s clear, independent, and genuinely useful. **[If you’ve found value in this newsletter, consider becoming a paid subscriber](https://artificialintelligencemadesimple.substack.com/subscribe).** It helps me dive deeper into research, reach more people, stay free from ads/hidden agendas, and supports my crippling chocolate milk addiction. **[We run on a “pay what you can” model](https://artificialintelligencemadesimple.substack.com/p/help-me-take-ai-made-simple-to-the)**[—so if you believe in the mission, there’s likely a plan that fits (over here)](https://artificialintelligencemadesimple.substack.com/p/help-me-take-ai-made-simple-to-the)*.

*Every subscription helps me stay independent, avoid clickbait, and focus on depth over noise, and I deeply appreciate everyone who chooses to support our cult.*

[Help me buy chocolate milk](https://artificialintelligencemadesimple.substack.com/subscribe)

***PS** – Supporting this work doesn’t have to come out of your pocket. If you read this as part of your professional development, you can [use this email template](https://docs.google.com/document/d/1xy6CNE8S7ZIM1LPKc5qdjwLJcqj6lwxzv3HFz3gEU14/edit?usp=sharing) to request reimbursement for your subscription.*

***Every month, the Chocolate Milk Cult reaches over a million Builders, Investors, Policy Makers, Leaders, and more.**[If you’d like to meet other members of our community, please fill out this contact form here (](https://docs.google.com/forms/d/e/1FAIpQLScCSWYlzouT8pzhfl0A2xdA0BxAPYg75h9F-WNkN8XuowpstA/viewform?usp=dialog)**[I will never sell your data nor will I make intros w/o your explicit permission](https://docs.google.com/forms/d/e/1FAIpQLScCSWYlzouT8pzhfl0A2xdA0BxAPYg75h9F-WNkN8XuowpstA/viewform?usp=dialog)**[)](https://docs.google.com/forms/d/e/1FAIpQLScCSWYlzouT8pzhfl0A2xdA0BxAPYg75h9F-WNkN8XuowpstA/viewform?usp=dialog)- <https://forms.gle/Pi1pGLuS1FmzXoLr6>*

---

Today’s guest author is [Sergei Polevikov](https://www.linkedin.com/in/sergeiai/). Sergei is a Ph.D.-trained mathematician, data scientist, AI entrepreneur, economist, and researcher with over 30 academic manuscripts. He co-founded WellAI, a digital health startup, and is a member of the IFCC’s Working Group on Artificial Intelligence and Genomic Diagnostics (WG-AIGD). Sergei also authors the popular and provocative Substack newsletter “[AI Health Uncut](http://sergeiai.substack.com/)” (how I found his work), where he offers “brutally honest insights from a healthcare AI founder, based on his experiences, mistakes, successes, and perspectives.” His lessons often transcend Healthcare, and are to anyone building safety-focused AI. [You might remember from his extremely thorough and well-done take down of the misinformation surrounding OpenAI’s o1 model, which we covered here.](https://www.artificialintelligencemadesimple.com/p/fact-checking-the-new-o1-strawberry)

Sergei is back with a bang. This article is a first-person, ground-truth teardown of ChatGPT Health that combines product testing, workflow friction, and incentive analysis to show why consumer-facing healthcare AI is structurally broken in its current form. It documents the end-to-end experience of onboarding, data ingestion via b.well and MyChart, context-window failure modes and hallucinations, and the resulting unusability for real patients; then zooms out to analyze why direct-to-consumer healthcare fails economically and psychologically, why enterprise healthcare adoption is constrained by HIPAA, consent asymmetry, and conservative hospital behavior, and why most “AI innovation” in health is misplaced.

Sergei is one of the few critics online who provides genuine insight, instead of simply player hating for clicks and attention. In a world where OpenAI pays creators to post nice things about them, and Anthropic pays for negative PR against Sam Altman, Sergei is one of the few genuine signals of truth. I’m sure you will find this deep-dive as meaningful as I did. Subscribe to his work below—

[![](https://substackcdn.com/image/fetch/$s_!AP7Y!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F18a278cd-af01-4406-8afc-165ab3f07e9f_568x568.png)AI Health Uncut

Brutally honest insights from a healthcare AI founder on digital health, AI models & health AI investments, drawn from personal experiences, mistakes, successes & unique perspectives. An all-in authentic original research.

By Sergei Polevikov](https://sergeiai.substack.com?utm_source=substack&utm_campaign=publication_embed&utm_medium=web)

---

You know, I was thinking. [Sam Altman is right. We only live once. F\*ck HIPAA.](https://sergeiai.substack.com/p/chatgpt-health-is-dancing-around) So what if the world knows I have bad knees? (Well, except now [the healthcare mafia](https://sergeiai.substack.com/i/157318911/1-the-healthcare-vc-mafia) knows exactly where to aim. 😉)

The only way to get to the truth was to test this thing.

So I uploaded my entire medical history to ChatGPT Health…

But first, I want to take a moment to thank all of my supporters. I’m often very critical of certain things happening in AI and healthcare. But I promise you, it’s only because I genuinely care and want to make things better for all of us. So, thank you for your understanding.

Whether you’re a skeptic or a supporter of AI in medicine, hear me out. I went through this over the weekend, and I think I’m onto something. Or more precisely, the industry may be onto something.

**TL;DR:**

> **1. Signing Up for ChatGPT Health**
>
> **2. Connecting to Health Systems**
>
> **3. Letting b.well Access All My MyChart Data**
>
> **4. Uploading the Remaining Medical Files to ChatGPT Health**
>
> **5. Once I Finished Uploading My Medical History, ChatGPT Started Hallucinating**
>
> **6. So the Original Context Window Got “Filled” Pretty Quickly. What About Just Starting Another Chat?**
>
> **7. ChatGPT Health Final Reports**
>
> **8. Direct-to-Consumer Is Hard in Healthcare Because Patients Don’t Want AI to Tell Them What Already Happened to Them**
>
> **9. Direct-to-Consumer Healthcare Can Also Be Outright Dangerous. Just Ask 23andMe.**
>
> **10. OK. Direct-to-Consumer Healthcare Is Dead. So How Do You Sell ChatGPT to Businesses?**
>
> **11. So, As a Health Organization, Are You HIPAA-Compliant When You Work With OpenAI’s API?**
>
> **12. The Most Impressive Thing About ChatGPT Health**
>
> **13. So Why ChatGPT Health Is Excellent News for Google (and Anthropic)**
>
> **14. Conclusion: ChatGPT Health Ain’t About AI. It’s About a Better Way to Do APIs (i.e. Data is King).**

### **1. Signing Up for ChatGPT Health**

First, I had to click “Yes” through a bunch of introductory screens.

[![](https://substackcdn.com/image/fetch/$s_!qBKP!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F34b8eec9-a517-42d0-ba13-cfa936c940d1_928x1284.png)](https://substackcdn.com/image/fetch/$s_!qBKP!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F34b8eec9-a517-42d0-ba13-cfa936c940d1_928x1284.png)

So happy about ChatGPT’s promise not to replace my doctor. I always totally trust a fox who promises not to eat my chickens. 😉

[![](https://substackcdn.com/image/fetch/$s_!bZiK!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5717e9d4-44d5-4657-83e2-b8f71f01b087_1136x864.png)](https://substackcdn.com/image/fetch/$s_!bZiK!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5717e9d4-44d5-4657-83e2-b8f71f01b087_1136x864.png)

Here I’m consenting to a third party, b.well, having access to my medical records, which may or may not follow the same privacy standards as OpenAI. As I said before, we only live once. F\*ck it.

### **2. Connecting to Health Systems**

[![](https://substackcdn.com/image/fetch/$s_!9k8N!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4e745974-a35f-4cbe-9bb4-a2daa75a9ac2_1484x1846.png)](https://substackcdn.com/image/fetch/$s_!9k8N!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4e745974-a35f-4cbe-9bb4-a2daa75a9ac2_1484x1846.png)

Now I’m giving my name and date of birth so b.well can search for potential health systems where my records could be stored.

[![](https://substackcdn.com/image/fetch/$s_!aInX!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed1cee57-49c6-4206-a515-55791ca4939b_1504x1852.png)](https://substackcdn.com/image/fetch/$s_!aInX!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed1cee57-49c6-4206-a515-55791ca4939b_1504x1852.png)

Nice try. But I haven’t been a patient at over 90% of the health orgs on this list. I have no idea what this list is.

[![](https://substackcdn.com/image/fetch/$s_!NcgE!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F781921ba-fd02-4437-897d-4735b86c71c4_1482x1246.png)](https://substackcdn.com/image/fetch/$s_!NcgE!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F781921ba-fd02-4437-897d-4735b86c71c4_1482x1246.png)

Now b.well makes a bunch of promises that I’m sure will be “up for modification” when we look back five years from now. 🙄 Whatever.

Honestly, I’ve been a patient at NYU Langone for most of the past several years. And most importantly, I had my password to NYU Langone’s MyChart. (Remember, Epic has made it really f\*cking easy for patients. I need a separate login for every f\*cking hospital. Welcome to 21st Century Epic, where a fax machine operator is still one of the best paying jobs. 🙄)

So I basically took b.well by the hand and literally handed it the key to my NYU Langone MyChart account. No APIs. Nothing. I literally let someone open the front door to my medical data and walked right through that door, ladies and gentlemen.

[![](https://substackcdn.com/image/fetch/$s_!EqJW!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b8e020d-72b9-4806-b659-0fda3f2fe5dc_1454x1854.png)](https://substackcdn.com/image/fetch/$s_!EqJW!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b8e020d-72b9-4806-b659-0fda3f2fe5dc_1454x1854.png)

You would think that handing them my MyChart login info would make the connection easier. Maybe in the future. But for now, I had to sit and wait for more than an hour(!) to connect to my MyChart account via b.well. Welcome to the age of AI. 🙄

[![](https://substackcdn.com/image/fetch/$s_!5NFs!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F80ecbae7-133b-46de-a106-fe713004d28d_1666x1850.png)](https://substackcdn.com/image/fetch/$s_!5NFs!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F80ecbae7-133b-46de-a106-fe713004d28d_1666x1850.png)

Finally, after a one hour plus wait, the connection happened, and it was a beautiful and emotional moment between a man and the machine. 😢

[![](https://substackcdn.com/image/fetch/$s_!1YaD!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fec61b2f0-0131-41ec-b4c0-a5096cade2d5_1570x956.png)](https://substackcdn.com/image/fetch/$s_!1YaD!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fec61b2f0-0131-41ec-b4c0-a5096cade2d5_1570x956.png)

Yes, I see you, NYU Langone Health. 👍

### **3. Letting b.well Access All My MyChart Data**

[![](https://substackcdn.com/image/fetch/$s_!Q9SL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9c752627-82af-48c6-8527-58fe10ea25d1_2948x1854.png)](https://substackcdn.com/image/fetch/$s_!Q9SL!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9c752627-82af-48c6-8527-58fe10ea25d1_2948x1854.png)

[![](https://substackcdn.com/image/fetch/$s_!XqtS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6c0f3787-cf36-4391-b5d4-0c0a62e3bcc9_2938x1832.png)](https://substackcdn.com/image/fetch/$s_!XqtS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6c0f3787-cf36-4391-b5d4-0c0a62e3bcc9_2938x1832.png)

There were a lot of data points. These two screens capture only a few of them. I checked every single one. What the heck. 🤷‍♂️

### **4. Uploading the Remaining Medical Files to ChatGPT Health**

In addition to myChart history, I uploaded around 50 medical files I saved over many years.

[![](https://substackcdn.com/image/fetch/$s_!cpX3!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F31c70abd-5696-43ce-920b-5027e12073c6_1600x424.png)](https://substackcdn.com/image/fetch/$s_!cpX3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F31c70abd-5696-43ce-920b-5027e12073c6_1600x424.png)

And guess what. It took five attempts because ChatGPT still does not let you upload more than 10 documents at a time. 🤦

### **5. Once I Finished Uploading My Medical History, ChatGPT Started Hallucinating**

Every true coder knows that LLM companies’ claims of 1M or 2M token context windows are complete bullshit. After about 64K, hallucination rates spike. I believe that was a factor in some of the suicide lawsuits against OpenAI. People who received “Kill yourself” advice may have been deep into long conversations, not realizing that by the end the model was hallucinating uncontrollably.

Many of us have encountered this during vibe coding. You ask the LLM to do something, and it says it did it. But then you check the codebase and the files are not there. You fee

[... truncated ...]