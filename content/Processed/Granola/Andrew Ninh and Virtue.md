---
granola_id: d8a0b16c-6767-4bcc-aa6a-974a9a04ad3d
title: "Andrew Ninh and Virtue"
type: note
created: 2025-11-24T18:17:50.450Z
updated: 2025-11-24T21:06:34.115Z
attendees:
  - andrew.ninh@curafi.com
  - sd@virtuevc.com
---
### Curafi Business Update and Strategic Focus

- Big focus on drug-related solutions but expanding beyond just drugs
	- Healthcare as massive long tail problem with hundreds of steps per payer, each slightly different
	- Companies solving obvious problems (PA calling, PA back submissions, fax machines) can get good customer numbers but don’t solve core distribution issue
	- Key question: “How do you build that scalably?” when selling to n=1 customers
	- Market commoditization risk: so many different companies competing, profits erode away
- Hyper-focused on west coast companies currently
	- Myong-type companies very hard to sell to unless you understand how they operate
	- Regional complexity: Florida companies face very different challenges than California companies
	- Close to deals in other regions but maintaining strategic west coast focus for now
- Initial commercial approach through payers after “bashing heads against wall” going direct to practices
	- Learning: payer-first strategy proving more effective than direct practice sales

### Epic Risk and Investor Concerns

- Later stage B/C investors increasingly worried about Epic threat
	- Primary concern: “We’re not sure our biggest risk is Epic - how long before Epic steamrolls in?”
	- Fear of looking foolish for investing at high valuations before Epic enters market
- Two fundamental strategic questions driving business decisions:
	- Will Epic try to do this themselves?
	- Why can’t payers build this internally?
- Payer internal AI initiatives reality check
	- Payers always claim to have “some AI PA initiative or some AI whatever internally”
	- Ground floor reality: “This AI thing is not reality” for reasons payers don’t understand
- CoverMyMeds playbook as strategic model
	- $4M raise leading to $1.1B exit - “one of the greatest SaaS companies of history”
	- Epic initially refused integration: “No way in hell”
	- Payers demanded it anyway, forcing Epic to integrate 5 years later
	- “That’s the only way you win” - similar opportunity for specialty drugs, surgeries, niche long tail authorizations
- Chrome extension/EMR widget approach for modern implementation
	- Survey results: ~90% of doctors said “where can we use this right now?”

### Technical Performance and Market Insights

- Current operational scale and performance with MA plans, P3, Myong’s group:
	- 3x more modifications of doctor requests compared to payer internal teams
	- 5-8x ROI within 1.5 months - “way faster than most other companies”
	- Counterintuitive result: doctor satisfaction increases despite more denials/changes
- Key market insight: “Everything that they’ve denied in the past comes back two weeks later and ends up getting approved”
	- Payers inadvertently creating their own inefficiencies
	- Root cause discovery through human calling: practices often just need formal denial letter
	- Common scenario: “No, no. Just give me a denial. I just need a denial” to move business forward
	- Practice staff motivation: “I’m doing the work, I know I’m screwing up, but I can’t get the doctor’s attention”
	- Patient-driven submissions: staff knows patient won’t get approval but needs formal letter for next steps
- Market reality check: overseeing 250-300k patients with “zero submissions that are from AI”
	- Submissions claiming AI origin are actually “humans in India” due to obvious mistakes
	- Market adoption of true AI still minimal

### Technology Philosophy and Implementation Strategy

- Prior authorization technical challenge hierarchy:
	- Hardest part: data submission accuracy, not clinical reasoning
	- Practices sometimes withhold data or manipulate submissions “to trick the payer”
	- Real bottleneck: “urgent” submissions with missing data and communication games
	- NCCN guidelines programming represents minimal portion of actual problem
- Oncology as special case requiring different approach
	- “Oncology is a different beast from other stuff”
	- Payer skepticism high because “they know they can do this themselves”
	- Hard-programmed NCCN guidelines common, viewed as “demo” not solution
- LLM application sweet spots at Curafi:
	- Document understanding for submission quality checking
	- Integration automation: “we actually use LLM to put that information back into a different system”
	- Areas where 85-90% accuracy “still solves the whole problem”
	- Avoid “catastrophic failure” scenarios unlike diagnostic applications
- Workflow integration as biggest operational challenge:
	- Legacy system complications: “we technically can’t give you the faxes this way”
	- Unknown system builders: “someone built this, we don’t know who they are”
	- Epic integration workaround: export and re-upload process instead of direct integration
	- Desktop application scraping identified as “very underinvested area” in LLM world
	- Multiple system integration requirements for reporting and workflow management
- TurboTax-style user experience philosophy:
	- Long form with API calls on backend, confirmation at end
	- “We just made it really easy for them to do their job better”
	- Result: “less people with much better results” on both doctor and payer sides

Chat with meeting transcript: https://notes.granola.ai/t/ec26d1e6-6176-4968-b5d6-44fe92941b2f
