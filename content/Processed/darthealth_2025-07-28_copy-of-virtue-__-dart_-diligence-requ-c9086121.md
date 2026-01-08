---
source_pdf: "https://drive.google.com/file/d/1-kEcuX46rnripP15jf4nP4MhkoKCpv1_/view?usp=drivesdk"
drive_folder: "Portfolio/Dart"
type: portfolio
company: Dart
ingested: 2025-12-24
original_filename: "DartHealth_2025-07-28_Copy of Virtue __ Dart_ Diligence Request.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1-kEcuX46rnripP15jf4nP4MhkoKCpv1_/view?usp=drivesdk)

# Virtue / Dart – July-25

Previous investor updates / other materials. You've mentioned investor updates you've sent out. This is great info and already made. Can you forward these? Anything else along these lines (customer-facing materials, anything internal on product, etc) that's easy to share? We'll take anything and everything you have handy.

We have not sent formal investor updates for a while - I know, bad practice. We usually just check in with some investors here/there. We are trying to stay laser focused. As you'll see through this, we did not plan for a future fundraise.

Other goodies - we will send over whatever we have so far

## Business

*   **Current pipeline/customers.** Let's break down all current customers and any in the pipeline. We were essentially trying to build a [google sheet like this](https://docs.google.com/spreadsheets/d/1Z-Vz3H6y_1y_1y_1y_1y_1y_1y_1y_1y_1y_1y_1y_1y/edit?usp=sharing). Let us know if easier to input directly here or if you can just pull anything from CRM or excel you have handy (doesn't need to be pretty). Okay we got a rough version from our CRM and pasted onto the sheet! Btw majority of rev/customers are in the last 90 days so it's messy - enjoy!
*   **Fundraising.** Previous fundraising terms/amount. ~600,000 ($8M SAFE) (Mayo also sits on the cap table at ~20M SAFE)
*   **Cash balance / burn.** What is the current cash balance and monthly net burn? $118,000 balance | ~+15K (income not burn!)
*   **Team.** Current team members and roles/responsibilities. We keep no real titles actually, it's faster! Generally:
    *   Veeraj - Product
    *   Aakruti - Sales
    *   Shilpa - Support & Success
    *   Marcelo - Engineer
    *   Gustavo - Engineer
    *   Christian (joined yesterday!) - Integrations

## Product.

*   **Current Use Cases.** We're trying to take the 100+ clinical use cases from the site and get a better understanding of everything you've built to-date, both the internal architecture and specific clinical AI models. Can you help us paint this picture to get really specific about current product capabilities?

# Virtue / Dart – July-25

There are a few key components. I also think the slides we share with customers may be helpful here.

This is my favorite part but also the most complicated -

1.  **Integrations.** We can easily connect to FHIR, HL7, RPA, BYOC, etc. We also internally make it super simple to build out transformations, filters, etc. This allows us to create an appropriate feed of data. This takes a maximum of 2 weeks but may take longer for very custom use cases.
2.  **Analysis.** Our analysis engine has few different components depending on the use case. We can currently support the 2 most popular form of transformer models (LLMs & Embeddings) which covers 90%+ of the use cases. We may use both or just a single one. The analysis engine focuses on surfacing patients based on how each application is set up. For example, if an application has 20 questions. If 1 important question is considered "failing” or the total score is <80%, we may notify a provider.
3.  **Analytics.** Our analytics can be deeply enriched. We can connect to various sources & custom ones. What this means is we can display actionable insights for a variety of use case. For malnutrition, you can see where it's highest prevalence is by department. For HaH, you will want to see where the patients reside in map ui. etc.

This is the simplest way to understand it. In between each of these are dozens of knobs & buttons which allow for deep customizations. To add, applications (think: workflows) are built with one or both of these: Rules or Similarity

If an LLM is being used, we set up rules (think prompts). This is a favorite for a lot of folks because customers actually set these up themselves. This makes the gap between SME within the org's goals & our deployment smaller. We can iterate really quickly with these. On our side we have tools to dump context, instruction, allow for reasoning, vision, sub rules, etc.

If an embedding model is needed, we ingest a small amount of data for population specific tuning, then deploy it on the GPU cluster. It's likely, we add an LLM layer to the embedding surface population.

We talked about malnutrition so we can use that as an example but this is great for SDOH, heart failure, incidental findings, transfer/discharge, etc. All of which have $$M in ROI.

Malnutrition uses a fine tuned embeddings models > we get a list of patients every day that match the similarity threshold > ASPEN criteria converted into Dart Rules > dumps non eligible cases (e.g no food due to surgery) > final output

Cluster might run several times a day -> RD gets a list -> review LLM analysis -> accepts -> (optional) we can display analytics or [coming soon]

For 10k discharges, it's likely $5M+ in net new rev. Cost of compute <$5,000

# Virtue / Dart – July-25

Some more use cases that we think are popular based on early conversations - incidental findings, HaH eligibility, palliative care consults, Discharge/Transfer readiness, pressure ulcer (POA), cardiac rehab. Most of these have a $1M+ ROI & all improve LOS/readmissions.

*   **Custom Use Cases.** When a customer asks for a custom use case, what is the process/timeline to spin that up?

Varies!! No fine tuning & 20-50 rules means we can deploy in 1-2 months. Fine tuning text LLMs/embeddings is around 2-3 months. Fine tuning multi modal data is around 4-8 months.

*   **Dart X.** What exactly are you offering with Dart X and what is built to-date? Is this something you have already sold or just started selling? Any other nuances that would be helpful to share (e.g., working with pharmacists as annotators/labelers) that show the power of Dart X for customers?
    1.  **The logistics.** We don't call them FDEs but APEs (Applied Product Engineers) - we've even got APE jackets. Shilpa is the first one. We're building it with her.
    2.  **the deployment rails.** We can easily ingest data, get feedback, have a judge eval, and spit out a fine tuned model (text llm right now) - it's still scrappy but we're making it work. We've already tested this & have our first fine tuned model (gemini 1.5 flash) for the hh space.
*   Early on the annotators/labelers - we have a few folks in cardiology (Cardiologists, Cardio Nurses, etc), a few folks in CMS compliance/billing, and we've had a few conversations with folks that have large labelling co's (think Mercor). Also, a small network of businesses (primary care, nutrition, pharmacy, etc) but there's no moat here for us. If we partner with another company, that may be faster.
*   **Roadmap.** What is the product roadmap over the next 12-24 months?

We want to make the experience to go from pilot/lookback analysis to deployment really really simple. To do this we will build our own ETL, AI monitoring, etc. Since we have a lot of potential use cases, we need to build as many tools as possible to account for edge cases whether that's for the data feed or accuracy.

**References.** Can you each provide 2-3 references we can speak with?
- Dustin & Anabel @ 43.io have spent the last ~ 3yrs watching us.
- Before this Veeraj was in high school & Aakruti was at Haas/UCB. So, we've got a pretty dry reference list :(

**Origin story.** What has been the journey since founding in 2022 (original idea → Puzzl → Dart)?
This is rough & too long to write. We'll chat!

# Virtue / Dart – July-25

**Milestones.** What are 2-3 major milestones you want to accomplish over the next 12-24 months? hire founding ML & SDR & cross 10M arr with <10 ppl