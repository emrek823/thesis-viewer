---
source_pdf: "https://drive.google.com/file/d/1dUXVVv4hvBaDvlD7nkKsjWjBBtXNjpvf/view"
drive_folder: "Portfolio/HealthMC"
type: portfolio
company: HealthMC
ingested: 2025-12-27
original_filename: "Confidential - HealthMC August Update.docx"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1dUXVVv4hvBaDvlD7nkKsjWjBBtXNjpvf/view)

August 28, 2025

Good afternoon,

Following an intense period of customer delivery (four customers due over a two week period), the management team has performed a deep dive on the state of the business.  Based on that analysis which we will share here, we have realigned our short and mid term priorities.

New Priorities

Executing on many customers in a short period of time helped elucidate the requirements for v2 of our product, which we feel is a necessary prerequisite to take on larger contracts.  Adding contracts ahead of that implementation would have the dual effects of increasing burn and shifting resources away from product development.  As such, we will be:

Intentionally de-emphasizing growth in favor of accelerated product development

(Absent preemption) Planning to initiate a fundraise in January

The state of our funnel at that point will determine whether we target a Seed+ or Series A valuation

We welcome feedback on this realignment, and provide more context below

Current State

We currently have six executed commercial contracts, and expect two more within the next couple of weeks

New wins

Clover RADV Support (signed)

Rendr Retro Pilot (finalizing redlines)

Curana AI Only Retro Pilot (finalizing redlines)

We’re a long way down the road with Elevance, and while nothing is guaranteed with them, anticipate closing something by YE.

Over the past few weeks, our burn has been excessive, largely driven by poor unit economics.  This state is temporary:

Our biggest lever for unit economics is the percentage of charts we can identify that human coders do not need to review, powered by the AI results (Eg. charts with no HCC related content, or where all diagnoses are already well documented). We implemented this feature (called filtering) when we launched v2 of the AI, as the performance was strong and reliable enough to support it.

We identified a production bug in this implementation about a month ago that, left unfixed, would have resulted in lower RAF lift to our customers.

Given the tight timeline around September deliverables, we elected to temporarily turn off filtering and increased the size of the 1099 coding team to offset.

With deliverables soon behind us, we are prioritizing re-implementing and iterating on filtering with improved monitoring.

We had roughly $2.9M available cash as on 8/1.  Forecasted burn based on current contracts will average $225K a month, providing conservative runway through 7/31/26.

Key Accomplishments

Proven Demand - In less than one year of operation, we have active contracts with five commercial entities, and expect to be at 7-8 shortly.

Identified ICPs

Payors - given the existing market, this is clearly the long term ICP.  We’re starting to break through with the Bluezones and Clover contracts.

At-Risk Providers - we’ve seen quicker success here, and solve immediate problems around payor data that they’ve struggled to address with other options.

Not ACOs - these contracts will be much harder to drive to value due to the need to work with downstream providers to drive claims edits, and the limited influence ACOs have there.

AI Improvements

Increased precision recall in testing from 65/80 -> 82/95.  Production numbers pending.

Strong feedback from internal coders on the quality of the AI recommendations.

Key Priorities / Plans

Improve Unit Economics

Re-implement and iterate on filtering

Negotiate better contracts going forward

Level up / performance manage the coding team

Improve Stability

Create more shared infrastructure to lessen the implementation cost of new contracts

Add more monitoring and QA workflows throughout the App

Throttle non-strategic Growth

All new contracts for Q4 will meet one of the following criteria:

Already in the pipeline and priced profitably (eg. Curana)

Small easy to execute on contract that has the potential to lead to much larger contracts (eg. Clover, Rendr, other RADV work)

Enormous strategic implications (eg. Elevance)

Everything else will be staged out for next year

Conclusion

We’re very proud of the progress we’ve made in less than one year and have a good sense of what the next set of accomplishments will need to be.  We have high conviction in the product priorities, but recognize the significant decisions we are proposing around fundraise timing and decelerating growth.  (It is also possible that the existing interest from Define and / or XYZ changes this.)  We are soliciting investor feedback in those areas.

Appendix

Current Unit Economics / Plans

Unit economics are currently in the red for a variety of reasons

Unfavorable contractual arrangements - for example, in taking PMPY contracts with Credo early on, we are processing two service years worth of data in year one, but only charging for one

Shutting off filtering - There was a bug in production that led us to temporarily filter charts inappropriately.  To avoid under-delivering, we shut off filtering to get through the current set of contracts and surged manual coding. We are currently working on building better monitoring so that we can confidently reinstate filtering.

Rapid 1099 Hiring - We scaled our team of 1099s coders from 5 to 35 in a few weeks,  and many had to be released for low quality and/or low throughput .  This manifested as slow production in some cases and work that needed to be redone in others.

Planned Solutions

Invest in areas where AI demonstrably improves unit economics - especially around filtering (ie. removing charts from human coder review)

Invest in areas where we can de-risk quality with minimal effort/cost (eg. exploring working with a reputable vendor on coder staffing)

Harvest low hanging fruit

Runway Calculation

Current forecast

We expect remaining billing to cover remaining variable expenses on existing contracts, even absent product improvements.  Since we’ve done a lot of work ahead of billing, contract losses have been realized in past burn.

Expected forward-looking non-1099 costs:

Personnel - $204K a month

Other - $54K a month average (high monthly variance)

Absent changes, $258K of monthly yields 11 months of runway

Near term savings

Transition from OpenAI to Gemini  -

$12K-$16K reduction

$20K reduction after credits.

Reduce conference attendance

2.5 people per month -> 3 people per quarter - $13K reduction

Revised burn of $225K a month yields > 12 months of runway

Fundraise Assumptions

We will need to begin a capital raise no later than January 2026

A successful raise

Requires

Referencable customers

Evidence of customer ROI

Evidence that AI makes our process more efficient

Breakeven unit economics with a clear path to attractive unit economics

Will yield a higher valuation with

Sizable pipeline - this is needed if we’re targeting Series A, but not Seed+

Repeatable growth motion - this is likely needed if we’re targeting Series A, but not Seed+

Will not require

Evidence that we deliver more RAF than competitors (these numbers are too vague, vary too much by customer, and are too easy to bullshit)

Evidence that we are more accurate than competitors (for the same reasons)

Pushing on growth has significant tradeoffs, and they may not make sense right now

With our current level of infrastructure, more customers materially slow down product improvements

When you couple that with underwater unit economics, more growth increases burn

There are tactical things that we can do to continue to grow, but at a slower rate, until we’ve implemented product improvements

Based on these assumptions, our plan is to focus on shipping V2 of our Platform for the rest of this year, which improves the key areas of product performance, stability, and unit economics. During this period we will meter our growth to ensure that we are not generating execution risk on this work. Once complete, we will refocus on accelerating growth (and we will be ready to do so).

Rest of Year Priorities

Product Priority 1 - Increase Leverage from AI

Strategy: Leveraging Filtering to reduce coder time by 30% - 50%

Infra Needed

Robust monitoring for each rule in production

Surgical rollback tools in the event of substandard performance / errors

Backtesting Framework

R&D

Rapid iteration cycle on filtering rules

Product Priority 2 - High Customer Value

Strategy: Invest in monitoring and reliability

Infra/App improvements needed

QA process around chart triage and splitting (both human and AI)

Retries in the event of a bad split / triage

V2 of Chart to Claims Matching

QA process around all submission files, allowing sufficient time for error fixing

Operations Priority - Workflow Improvements

Strategy: Focus first on areas requiring minimal tech lift.

Monitoring on coding productivity and accuracy

User research around high productive vs low productive coders

We’re going to stand up several coders from Weller HIT to identify if there are material differences in productivity and quality

Human review of the matches that matter (eg those in submission files)

Triage around workflow changes

In scope

Better instructions around how to use the current system

Performance management

Maybe in scope

App Workflow changes (eg. adding QA workflows to the app, patient view vs chart view vs encounter view)

Out of scope (near term)

Quality of life app workflow improvements

Revised Sales Approach

Selectively convert existing funnel

Convert strategic customers in the pipeline -

Big opportunities - eg. Elevance, MRO partnership

RADV clients where we can charge a hefty margin and build payor relationships for future periods

Reject / push to next year smaller customers or customers where there is not high conviction on unit profitability

Raise the price on potential customers in between to provide some margin buffer

Less emphasis on new pipeline growth

Reduce planned conference attendance

Focus existing growth resources on

Spear Fishing

Customer Success