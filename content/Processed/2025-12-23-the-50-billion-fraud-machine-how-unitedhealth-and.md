---
url: https://artificialintelligencemadesimple.substack.com/p/the-50-billion-fraud-machine-how
title: "The $50 Billion Fraud Machine: How UnitedHealth and QuantaFlo Are Gaming Medicare [Guest]"
clipped: 2025-12-23 11:14
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# The $50 Billion Fraud Machine: How UnitedHealth and QuantaFlo Are Gaming Medicare [Guest]

> Source: [https://artificialintelligencemadesimple.substack.com/p/the-50-billion-fraud-machine-how](https://artificialintelligencemadesimple.substack.com/p/the-50-billion-fraud-machine-how)

# The $50 Billion Fraud Machine: How UnitedHealth and QuantaFlo Are Gaming Medicare [Guest]

### This faulty device, which the media largely overlooked, should be a crucial piece of evidence in UnitedHealth's latest upcoding fraud investigation, launched by the DOJ on Friday.

[![Sergei Polevikov's avatar](https://substackcdn.com/image/fetch/$s_!slE2!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc91ada74-8686-4e3f-a6e8-28e218393ec5_530x532.jpeg)](https://substack.com/@sergeiai)[![Devansh's avatar](https://substackcdn.com/image/fetch/$s_!0X66!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F48081c70-8afa-41e3-a44e-b0f917bc7577_1200x1600.jpeg)](https://substack.com/@chocolatemilkcultleader)

[Sergei Polevikov](https://substack.com/@sergeiai) and [Devansh](https://substack.com/@chocolatemilkcultleader)

Feb 25, 2025

23

9

Share

*Hey, it’s Devansh 👋👋*

*Our chocolate milk cult has a lot of experts and prominent figures doing cool things. In the series Guests, I will invite these experts to come in and share their insights on various topics that they have studied/worked on. If you or someone you know has interesting ideas in Tech, AI, or any other fields, I would love to have you come on here and share your knowledge.*

*I put a lot of effort into creating work that is informative, useful, and independent from undue influence. If you’d like to support my writing, please consider becoming a paid subscriber to this newsletter. Doing so helps me put more effort into writing/research, reach more people, and supports my crippling chocolate milk addiction. Help me democratize the most important ideas in AI Research and Engineering to over 100K readers weekly.* **Many companies have a learning budget that you can expense this newsletter to.****[You can use the following for an email template](https://docs.google.com/document/d/1xy6CNE8S7ZIM1LPKc5qdjwLJcqj6lwxzv3HFz3gEU14/edit?usp=sharing)** **to request reimbursement for your subscription.**

[Help me buy chocolate milk](https://artificialintelligencemadesimple.substack.com/subscribe)

***PS- We follow a “pay what you can” model, which allows you to support within your means, and support my mission of providing high-quality technical education to everyone for less than the price of a cup of coffee. [Check out this post for more details and to find a plan that works for you](https://artificialintelligencemadesimple.substack.com/p/help-me-take-ai-made-simple-to-the).***

---

The following is a guest post by [Sergei Polevikov](https://open.substack.com/users/14048540-sergei-polevikov?utm_source=mentions) one of the top experts in health tech. I’ve always appreciated Sergei’s deep research and honesty. While many critics in tech seem more interested in building a brand by attacking big names, Sergei’s work has always felt god-faith to me; more interested in solutions than rage-baiting. It’s why I chose to recommend his [AI Health Uncut](https://open.substack.com/pub/sergeiai) newsletter in our community, and why I regularly cite his work.

This article explores the UnitedHeath Upcoding Fraud Investigation in extensive detail. As your read this, I want you to consider the following questions-

1. If these allegations prove true, who bears the greater ethical responsibility: the device maker creating a test with high false positives or the insurers deploying it strategically?
2. In a healthcare ecosystem where profit incentives can misalign with patient care, whose responsibility is it to be the ethical backstop—doctors, regulators, or shareholders? I personally feel like the impact of shareholders putting pressure is overlooked, but I also hear that ethical investing has failed. I haven’t dug into it enough, but this is an angle that I’m interested in exploring- what can regular people do to put meaningful pressure on the stocks of companies that act unethically?
3. How might our healthcare system be redesigned so that financial incentives reward accurate diagnosis rather than maximizing billable conditions?
4. If clinical diagnostic tools were required to meet stricter statistical validation standards before deployment, would that be enough to prevent misuse, or is the issue deeper?
5. When multiple parties benefit from a potentially fraudulent system—device makers, insurers, testing companies—how can accountability be effectively distributed rather than scapegoating just one player?
6. What role should medical professionals play in resisting pressure to use diagnostic tools they know are flawed or deployed primarily for billing purposes?
7. How can we create stronger whistleblower protections and incentives for those inside these companies who witness potential fraud but fear career repercussions for speaking out?

Hopefully this post gives you something to think about-

---

[![](https://substackcdn.com/image/fetch/$s_!lUHG!,w_2400,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4f672215-9efd-423b-acaf-f98861c1fba0_2240x1260.png)](https://substackcdn.com/image/fetch/$s_!lUHG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4f672215-9efd-423b-acaf-f98861c1fba0_2240x1260.png)

Source of the original image: https://www.wired.com/story/internet-culture-luigi-mangione-major-shift-fandom/

Luigi Mangione, in a tragically compelling way, has shone a spotlight on what might be the biggest cartel in the world—**the American healthcare cartel**—with UnitedHealth sitting squarely at its center.

I’ve been waiting for this moment for over a year, and I wish I had the bandwidth back then to break the story. But with the DOJ’s new civil probe revealed on Friday—accusing UnitedHealth of upcoding and insurer-driven diagnosis (I’ll define both below)—now is as good a time as ever to assist the DOJ and the public in exposing malpractice directly tied to this fraud. And it’s not just UnitedHealth. At least three other insurers—CVS’s Aetna, Humana, and Blue Cross Blue Shield (BCBS)—are also deeply involved, along with a vast network of companies and individuals servicing the health insurance industry.

For the first time, I show that this cartel extends far beyond UnitedHealth and even beyond the health insurance industry itself. It spans the entire healthcare ecosystem—manufacturers, resellers, and device testers.

When I say “faulty device,” I’m referring to the infamous **QuantaFlo**—originally designed as a screening test for Peripheral Artery Disease (PAD) but now heavily marketed by Semler Scientific (Nasdaq: SMLR) as a screening tool for Congestive Heart Failure (CHF) as well.

**To any unbiased clinician, it’s “faulty.” But for the key players in this scheme, the device wasn’t faulty at all. It was “just right.” Because maximizing false positives means maximizing the number of “sick” patients. And you guessed it—maximizing cartel profits.**

> **Having a device optimized to game the system with an alarming 80% error rate—8X higher than [the industry standard of 10%](https://s3.amazonaws.com/cardioserver/Bard+Supplements+March+2016/BARD+PV+-+Supplement+-+March+2016_JIC.pdf)—is like playing with marked cards or a rigged roulette wheel in a casino.**

To be fair, while this particular investigation goes back years, I have to give credit where it’s due—[STAT News got there first with its own exposé on QuantaFlo](https://www.statnews.com/2024/08/07/unitedhealth-peripheral-artery-disease-screening-program-medicare-advantage-gold-mine/), even estimating that UnitedHealth raked in $4B in illegal profits from upcoding between 2018 and 2021.

That was a solid start. But the web of corruption stretches far beyond Semler (the manufacturer of QuantaFlo) and UnitedHealth. It covers the entire industry.

I lay out the web of lies. I name names in the org chart.

This is just the beginning. I want to point regulators and authorities to where the bodies are buried. Unfortunately, I can’t do everything—I’m a one-man operation.

[![](https://substackcdn.com/image/fetch/$s_!8w5P!,w_2400,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcccb96fc-066e-4531-aadd-eae20bebb606_2010x1130.png)](https://substackcdn.com/image/fetch/$s_!8w5P!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcccb96fc-066e-4531-aadd-eae20bebb606_2010x1130.png)

Source: Wall Street Journal, July 8, 2024.

Last year, *The Wall Street Journal* exposed a [$50B upcoding fraud by UnitedHealth](https://sergeiai.substack.com/p/wsj-unitedhealth-committed-in-87). But here’s what many forget—that figure only covers three years: 2019, 2020, and 2021. Will we ever see that $50B recovered? Of course not. UnitedHealth’s lobbying machine is as powerful as ever, and the largest fine it has ever faced barely reached the tens of millions—a rounding error for a company of its size.

> It’s important to distinguish between the closely related concepts of **risk adjustment** and **risk coding** on one hand, which are valid practices when coding for medical services, and **upcoding**, **insurer-driven diagnosis**, **bogus referrals**, and **hypercoding** on the other, which are fraudulent practices used by providers and payers to artificially drive up their revenue.

**Risk adjustment** is a legitimate method used in healthcare reimbursement to account for differences in patient populations. Insurers and government programs (like Medicare Advantage) use risk adjustment to ensure payments reflect the actual health status of patients. For example, sicker patients require more care, so providers treating them receive higher payments.

**Risk coding** is the practice of assigning medical diagnosis codes that reflect a patient’s health conditions. These codes feed into risk adjustment models to determine expected healthcare costs. The goal is to ensure all relevant conditions are documented so that reimbursement reflects the true complexity of a patient’s health. For example, patient with diabetes, hypertension, and chronic kidney disease has all three conditions coded so the insurer accounts for the full risk burden.

**Upcoding** is a fraudulent practice where healthcare providers ***intentionally*** use diagnosis codes that make patients appear sicker than they actually are to receive higher reimbursement. Here’s how upcoding works. The treating doctor might say, “No treatment or minimal treatment necessary for this diagnosis.” However, UnitedHealth, without ever seeing the patient, overrides the doctor’s judgment, generates its own diagnosis code, and bills Medicare with this new code. This act alone brought UnitedHealth $50B over three years.

**Insurer-driven diagnosis** refers to the practice where Medicare Advantage (MA) insurers—not doctors—push for certain diagnoses to be recorded in patient charts. This is done to increase risk scores (RAF) and maximize reimbursements from the federal government under Medicare’s risk adjustment model.

**Bogus referrals** are unnecessary or inappropriate patient referrals that may be made for various reasons, including financial incentives, misunderstanding of medical conditions, or even pressure from payers or hospital systems. For example, a vascular surgeon is likely receiving many referrals for Peripheral Arterial Disease (PAD) in Medicare Advantage (MA) patients that may not be clinically warranted.

**Hypercoding** refers to the practice of aggressively documenting every possible diagnosis or comorbidity that a patient might have, even if those conditions are not actively treated or relevant to the visit, in order to maximize risk-adjusted payments, particularly in value-based care models like Medicare Advantage. For example, a patient with controlled diabetes and no complications is documented as having multiple related conditions (such as diabetic neuropathy or kidney issues) to increase their risk score (RAF).

This fraud reported by the WSJ was possible in large part because UnitedHealth owns physician practices through its subsidiary, Optum. When an insurer owns the physician practice, it can configure workflows, technology, and incentives to drive risk coding. UnitedHealth can preferentially schedule Medicare Advantage patients and choose to reach out to health plan enrollees it identifies with its data as having high ‘coding opportunities.’ It can require its doctors to go to risk-code training, and it can prohibit Optum-employed doctors from closing their notes before they address all the ‘suggested’ diagnosis codes.

[![](https://substackcdn.com/image/fetch/$s_!DMAs!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe0122b4e-fb90-4199-8edc-eadde3cbdf05_2030x1786.png)](https://substackcdn.com/image/fetch/$s_!DMAs!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe0122b4e-fb90-4199-8edc-eadde3cbdf05_2030x1786.png)

The *Wall Street Journal* ran a series of investigations, culminating in [yet another DOJ civil probe into UnitedHealth](https://www.wsj.com/health/healthcare/unitedhealth-medicare-doj-diagnosis-investigation-66b9f1db) on Friday. ([WSJ Investigation 1](https://www.wsj.com/health/healthcare/medicare-health-insurance-diagnosis-payments-b4d99a5d), [WSJ Investigation 2](https://www.wsj.com/health/healthcare/how-health-insurers-racked-up-billions-in-extra-payments-from-medicare-advantage-9d4c8a89), [WSJ Investigation 3](https://www.wsj.com/health/healthcare/unitedhealth-medicare-doj-diagnosis-investigation-66b9f1db).)

UNH took a 7% hit on the day—wiping out $33B in market value—or, as they call it in the UnitedHealth boardroom, a “dinner and a movie.”

[![](https://substackcdn.com/image/fetch/$s_!ZVmv!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0d95fa51-14a9-4c94-9af6-80c344420859_2020x928.png)](https://substackcdn.com/image/fetch/$s_!ZVmv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0d95fa51-14a9-4c94-9af6-80c344420859_2020x928.png)

**Do you know who else dropped around the same (8%) that day, followed by another 7% on Monday? Semler Scientific (Nasdaq: SMLR).**

*Full disclosure: I own no shares of UNH, SMLR, or any other company mentioned here, nor do I have any financial or other incentive tied to their stock movements.*

*PSA: If you have information about Semler Scientific, Matrix Medical Network, QuantaFlo, or any other company or tool potentially involved in fraud, my DMs on Substack, LinkedIn, and X are open. I work independently, report to no one, and treat all information with abs

[... truncated ...]