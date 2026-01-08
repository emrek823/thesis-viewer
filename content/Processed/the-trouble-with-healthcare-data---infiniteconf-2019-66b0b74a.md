---
source_pdf: "https://drive.google.com/file/d/1jUdhoMudabZThDxs9EPfss8W2PCZxAG3/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "The Trouble With Healthcare Data - Infiniteconf 2019.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1jUdhoMudabZThDxs9EPfss8W2PCZxAG3/view)

# MESSY DATA AND RELUCTANT USERS - THE TROUBLE WITH HEALTHCARE DATA

## Slide 1: MESSY DATA AND RELUCTANT USERS - THE TROUBLE WITH HEALTHCARE DATA

MESSY DATA AND RELUCTANT
USERS - THE TROUBLE WITH
HEALTHCARE DATA

Sam Bail @spbail
Infiniteconf 2019

## Slide 2: HI!

HI!
I'm one of the many Sams you've met today
PhD in semantic web, knowledge representation and automated reasoning
Spent 5 ½ years at Flatiron Health in NYC analyzing oncology data
Less big data, more artisinal handcrafted data
Germany > UK > US = Lots of different healthcare systems

## Slide 3: [Twitter post]

sambail, one word.
@spbail
Healthcare data scientists in academia: "We
built a cool model with this data!"
Healthcare data scientists in industry: "Well
the data is a homogenous mess and HIPAA
makes things hard and you really need
domain experts and your users probably
won't trust you..."
#MLConfNYC
10:20 PM - 29 Mar 2019
2 Retweets 12 Likes
2
12

## Slide 4: OUTLINE

# OUTLINE

```
1                  2                   3                      4
----------         ----------          ----------             ----------
The vision         The problem:        The other problem:     Small
                   Messy data          Reluctant users        steps
```

## Slide 5: 1 - THE VISION

# 1 - THE VISION

I, for one, welcome our robot overlords.

## Slide 6: THE AI DOCTOR

# THE AI DOCTOR

![A diagram showing a linear flow from Patient to Diagnostics to Lots of Data to AI to Treatment, with a feedback loop from Treatment back to Diagnostics. Each step is represented by an icon: a casted arm for Patient, a stethoscope for Diagnostics, a heartbeat monitor for Lots of Data, molecular structure for AI, and pills/water glass for Treatment.](https://github.com/aiedges/progression-images/assets/158016972/e9e6e87f-d5b7-4f40-b615-3733053805d7)

## Slide 7: HIGH HOPES

# HIGH HOPES

IBM Watson for Oncology
is a prominent example of
healthcare + AI in recent
years

Starting in 2011, over fifty
organizations announced
Watson collaborations

By 2017, only five
projects out of a sample
of 24 had been launched

Reference [3,4]

## Slide 8: HIGH HOPES

# HIGH HOPES

IBM Watson for Oncology
is a prominent example of
healthcare + AI in recent
years

Babylon Health is a
patient-facing app that
provides an AI chatbot for
triaging symptoms

Starting in 2011, over fifty
organizations announced
Watson collaborations

Babylon has two contracts
with the NHS

By 2017, only five
projects out of a sample
of 24 had been launched

In 2018, physicians
voiced concerns about
the accuracy of 10-15%
of the bot's diagnoses

Reference [3,4,5]

## Slide 9: TECHNICAL CHALLENGES

# TECHNICAL CHALLENGES

“
[The Watson-based
Oncology Expert Advisor
system] had accuracy scores
ranging from 90 to 96
percent when dealing with
clear concepts like diagnosis,
but scores of only 63 to 65
percent for time-dependent
information like therapy
timelines.
”

![Pie chart showing 83%](https://github.com/aiedges/progression-images/assets/158016972/4e3c35b6-c567-4e6b-a131-bb965f7c3528)
83
211 patients with breast, colorectal,
gastric, and lung cancer

![Pie chart showing 73%](https://github.com/aiedges/progression-images/assets/158016972/08e1a8a3-2ee0-4416-8c50-cfb74a584092)
73
638 patients with
breast cancer

![Pie chart showing 49%](https://github.com/aiedges/progression-images/assets/158016972/56905581-2294-43ef-92a3-2d21a590ac5b)
49
656 patients with
colon cancer

48yr old obese 30/day male smoker
develops sudden onset central chest
pain & sweating....

I say call 999, the Babylon App says see
your GP...

![Screenshot of a mobile app chat interface with "babylon" at the top. The conversation asks "And which of these are you experiencing?" with options like "Chest pain in the middle" and "Chest pain only". Further down it asks "Next, could you describe your pain?" with options "Burning pain" and "Sharp pain". A "Moderate" tag is visible at the top.](https://github.com/aiedges/progression-images/assets/158016972/49fbf793-1b91-4438-bb97-425b035a782e)

Reference [3,4,10]

## Slide 10: USER ACCEPTANCE CHALLENGES

# USER ACCEPTANCE CHALLENGES

Physician agrees
with recommendation

It doesn't add value!

X

Physician disagrees
with recommendation

It's wrong!

X

## Slide 11: 2 - THE PROBLEM: MESSY DATA

# 2 - THE PROBLEM: MESSY DATA

Healthcare data is hard! Let's go shopping.

## Slide 12: "HEALTHCARE DATA"

# “HEALTHCARE DATA"

WORKING DEFINITION:
Any kind of “real-world” data that is generated as part of a patient's and
clinician's interaction with data capturing software and medical devices, e.g.
medical records, scans, lab and pathology reports, billing records, chat
interactions, device data, etc.

## Slide 13: DATA != DATA*

# DATA != DATA*

"CLASSIC" DATA SCIENCE
Structured logs, user data or unstructured
data, e.g. social media, publications
Usually complete data
"Self-generated" internal data
Ambiguity and acronyms
Fewer privacy concerns, data can be
stored in "the cloud"

HEALTHCARE DATA
Lots of user-entered “structured” data
and unstructured documents
Big gaps in data
Data from external sources
Ambiguity and acronyms, lack of
context, needs subject matter expertise
Privacy is critical, accessing and storing
data is hard

* somewhat based on my own view of the world

## Slide 14: JUST *HOW* MESSY?

# JUST *HOW* MESSY?

![Five icons representing different data challenges in healthcare: a document with a waveform, scissors cutting a timeline, a hospital building, a chat bubble, and a padlock.](https://github.com/aiedges/progression-images/assets/158016972/061d4a9a-58f7-41b1-b552-47524949b252)

"Structured" and
unstructured data

Gaps in data

Data silos

Ambiguity in
medical text

Privacy
restrictions

“Structured”: discrete database fields, might still allow free-text
Unstructured: Scanned letters, lab reports, faxes, physician notes

## Slide 15: SAMPLE VISIT NOTE

# SAMPLE VISIT NOTE

Initial - CCC
Note Date: 11/08/16
Signed by (ORTHOPEDIC SURGEON), MD, PHD on 11/11/16 at 3:32 pm Affiliation:
HOSPITAL
----------------------------------------------------------------------------------------------------------------------------------------------------
Active Medication list as of 11/08/16:
Medications - Prescription
FLUROSEMIDE - 20 mg daily
TYLENOL - OTC as needed
----------------------------------------------------------------------------------------------------------------------------------------------------
This is a first office visit to my clinic by Mr. XXXX, a very pleasant 57-year-old male patient,
who sustained in 1993, as the result of a ski accident, a pelvic fracture with vertical shear that has
healed in about an inch vertical shortening. Nevertheless, Mr. XXXX has had a
remarkably active life. He exercises and has been managing very well over the last few years
until recently when he has developed some groin type pain, very reminiscent of arthritic
symptoms. Films obtained today confirmed that finding with some bone-on-bone contact and
significant posttraumatic hip osteoarthritis.

He actually has a remarkably good gait. He has overall good strength. He has pain along
the groin. He has a little bit of anterior medial pain that may be muscular in nature and even
though he has a leg length discrepancy, he walks a very normal gait on exam. His extremity
appears to be sensory intact and well perfused. He reports the typical symptoms of pain on
initiation of motion, winter pain and pain at end of the day.

## Slide 16: JUST *HOW* MESSY?

# JUST *HOW* MESSY?

![Five icons representing different data challenges in healthcare: a document with a waveform, scissors cutting a timeline, a hospital building, a chat bubble, and a padlock.](https://github.com/aiedges/progression-images/assets/158016972/01579482-35dd-4389-9e8c-5544b679b362)

"Structured" and
unstructured data

Gaps in data

Data silos

Ambiguity in
medical text

Privacy
restrictions

Patients see multiple physicians
EHR migrations
Workflow changes

## Slide 17: THE PATIENT JOURNEY*

# THE PATIENT JOURNEY*

```
---------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
|          |          |          |          |          |          |          |
|          |          |          |          |          |          |          |
WHAT IS    Tests at PCP,   Referral   More       Treatment  Patient    Hospitalization Referral to
HAPPENING  sent to     to clinic A    tests and  and        continues                      hospice
           outside lab                diagnosis  recurring  treatment
                                                 tests at   at clinic B
                                                 clinic A
```
* Heavily simplified and based on what I've seen in oncology - I'm not a doctor!

## Slide 18: THE PATIENT JOURNEY*

# THE PATIENT JOURNEY*

WHAT WE MAY
SEE IN CLINIC
B'S EHR

```
                                  Mention in
                                  visit note,
                                  backfilled
                                  data might
                                  be off
---------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
|          |          |          |          |          |          |          |
|          |          |          |          |          |          |          |
WHAT IS    Tests at PCP,   Referral   More       Treatment  Patient    Hospitalization Referral to
HAPPENING  sent to     to clinic A    tests and  and        continues                      hospice
           outside lab                diagnosis  recurring  treatment
                                                 tests at   at clinic B
                                                 clinic A
```
Mention in      Recurring        Mention in
visit note      records and      visit note
(maybe)         visit notes      (maybe)

* Heavily simplified and based on what I've seen in oncology - I'm not a doctor!

## Slide 19: JUST *HOW* MESSY?

# JUST *HOW* MESSY?

![Five icons representing different data challenges in healthcare: a document with a waveform, scissors cutting a timeline, a hospital building, a chat bubble, and a padlock.](https://github.com/aiedges/progression-images/assets/158016972/40b08dd9-d9f7-4148-ae2d-83b65bf73d56)

"Structured" and
unstructured data

Gaps in data

Data silos

Ambiguity in
medical text

Privacy
restrictions

Data is hard to access
“No” data model or coding standards
Scaling beyond a single institution is hard

## Slide 20: JUST *HOW* MESSY?

# JUST *HOW* MESSY?

![Five icons representing different data challenges in healthcare: a document with a waveform, scissors cutting a timeline, a hospital building, a chat bubble, and a padlock.](https://github.com/aiedges/progression-images/assets/158016972/4e3ac09e-716d-47c3-99b3-c155d045bfd3)

"Structured" and
unstructured data

Gaps in data

Data silos

Ambiguity in
medical text

Privacy
restrictions

Heavy use of acronyms and abbreviations
Longitudinal data and sequencing is hard

Reference [2]

## Slide 21: JUST *HOW* MESSY?

# JUST *HOW* MESSY?

![Five icons representing different data challenges in healthcare: a document with a waveform, scissors cutting a timeline, a hospital building, a chat bubble, and a padlock.](https://github.com/aiedges/progression-images/assets/158016972/1d710c4f-3769-42b4-ae89-130089856f67)

"Structured" and
unstructured data

Gaps in data

Data silos

Ambiguity in
medical text

Privacy
restrictions

We can't just store data “in the cloud"
Linking data sets and mapping entities is limited
Sharing (and validating) data is hard

## Slide 22: HOW DID WE GET THERE?

# HOW DID WE GET THERE?

US HITECH ACT
2009: Encourage
EHR adoption, but
not interoperability

Data was an
afterthought - meant for
humans to look at
(“Glorified paper")

UX was an
afterthought - data
entry is painful and
encourage dictation

No incentive to
document anything in
structured form if it's
not needed for billing

Reference [7,8]

## Slide 23: THE TL;DR

# THE TL;DR

Getting clean and reliable healthcare data as input for any kind of ML is hard.
Scaling data access and standardization across the boundaries of a single institution is hard.

Reference [7,8]

## Slide 24: 3 - THE OTHER PROBLEM: RELUCTANT USERS

# 3 - THE OTHER PROBLEM:
RELUCTANT USERS

Or, “The Pencil Problem”

## Slide 25: THE PENCIL PROBLEM

# THE PENCIL PROBLEM

![Screenshot of the Rocket Fund website. The top navigation includes "CREATE", "DONATE", "OFFERS", "BLOG", "ABOUT", "FAQs" and a search bar. The main hero section shows an illustration of children engaged in various educational activities, with a drone, a computer, a keyboard, and a car, under the title "FUELLING IMAGINATION IN THE CLASSROOM" with "HOW IT WORKS" and "GET STARTED" buttons. Below, text reads: "Rocket Fund is a non-profit crowdfunding platform for schools & PTAs in the UK. We help schools fundraise from businesses & their wider community. So far we have helped over 450 schools raise over £350,000. We're looking for Founding Partners to help us support every school in the UK. Find out more here."](https://github.com/aiedges/progression-images/assets/158016972/1f3c32e1-7ce2-4ac8-b0a3-ec2d713c77ea)

Reference [1]

## Slide 26: THE PENCIL PROBLEM

# THE PENCIL PROBLEM

![Four cards from the Rocket Fund website.
Card 1: Watercolour pencils for Erith School by Ms Williams. "Year 10 and 11 Students want to use watercolour pencils for their course work - can you help?" Category: Art & Design. Status: SUCCESSFUL, WE RAISED £320.
Card 2: Ysgol Llangelynnin rubber mulch by Gareth Evans. "For a playground equipment where the children can play safely." Category: Other. Status: £235 RAISED, 9% FUNDED, PROJECT FINISHED.
Card 3: Hayes Park School needs flower & vegetable beds! by Louise Prince. "Help HPS make the environment more attractive by growing flowers & vegetables around the..." Category: Other. Status: MINIMUM REACHED, £88 RAISED, 56% FUNDED, 5 DAYS TO GO.
Card 4: New Minibus by Carl Fitter. "We need to replace our ageing minibus." Category: Other. Status: SUCCESSFUL, WE RAISED £2,131.](https://github.com/aiedges/progression-images/assets/158016972/0b36c646-7788-4660-8488-842249e0f0df)

Reference [1]

## Slide 27: WHAT I'M TRYING TO SAY IS...

![A drawing of a light blue pencil.](https://github.com/aiedges/progression-images/assets/158016972/54823871-081e-4503-ac98-964ac88e0c90)

WHAT I'M TRYING TO SAY IS...

We haven't even solved the
basics yet in healthcare.

## Slide 28: GARBAGE IN, FRUSTRATION OUT

# GARBAGE IN, FRUSTRATION OUT

“
Three people will list the same diagnosis three different ways. [...]
The problem lists have become a hoarder's stash. [...]
They're long, they're deficient, they're redundant.
”

Susan Sadoughi, “Why Doctors Hate Their Computers"

Reference [7]

## Slide 29: "DOCTORS HATE THEIR COMPUTERS"

# "DOCTORS HATE THEIR COMPUTERS"

![Four icons representing different issues: a megaphone with sound waves, a bell with an exclamation mark, a circuit board, and a magnifying glass with a germ.](https://github.com/aiedges/progression-images/assets/158016972/e9391054-08f6-4a41-863a-fc882650085a)

Slow data
entry

Alert
fatigue

Insights and
then what?

Lack of
transparency

“Most days, I will have done only around thirty to
sixty per cent of my notes by the end of the day"

Susan Sadoughi, “Why Doctors Hate Their Computers"

Reference [7]

## Slide 30: "DOCTORS HATE THEIR COMPUTERS"

# "DOCTORS HATE THEIR COMPUTERS"

![Four icons representing different issues: a megaphone with sound waves, a bell with an exclamation mark, a circuit board, and a magnifying glass with a germ.](https://github.com/aiedges/progression-images/assets/158016972/d66002f2-39c2-4048-b42e-152e2a0f824e)

Slow data
entry

Alert
fatigue

Insights and
then what?

Lack of
transparency

"Of roughly 350,000 medication orders
per month, pharmacists were receiving
pop-up alerts on nearly half of them“

Robert Wachter, “The Digital Doctor”

Reference [8]

## Slide 31: "DOCTORS HATE THEIR COMPUTERS"

# "DOCTORS HATE THEIR COMPUTERS"

![Four icons representing different issues: a megaphone with sound waves, a bell with an exclamation mark, a circuit board, and a magnifying glass with a germ.](https://github.com/aiedges/progression-images/assets/158016972/c99026bf-7e3f-4e00-8022-f0464f14125c)

Slow data
entry

Alert
fatigue

Insights and
then what?

Lack of
transparency

"If we use AI to detect more spinal fractures,
we've now shifted the problem to having
to treat more patients"

Kerry Weinberg (Amgen), MLConf NYC 2019

## Slide 32: "DOCTORS HATE THEIR COMPUTERS"

# "DOCTORS HATE THEIR COMPUTERS"

![Four icons representing different issues: a megaphone with sound waves, a bell with an exclamation mark, a circuit board, and a magnifying glass with a germ.](https://github.com/aiedges/progression-images/assets/158016972/f0e6371c-3004-44ed-9679-b7b5f5439401)

Slow data
entry

Alert
fatigue

Insights and
then what?

Lack of
transparency

“I would certainly want to see some validation
to whether the synthetic data is representative
of anything that would make sense"

Dr. Jonathan Chen, “Why Doctors Hate Their Computers”

Reference [8]

## Slide 33: PRIORITIES

# PRIORITIES

In 2018, we prototyped a
simple decision support
system for oncology clinics...

The main reaction from
the oncologists who
tested it was...

## Slide 34: PRIORITIES

# PRIORITIES

In 2018, we prototyped a
simple decision support
system for oncology clinics...

The main reaction from
the oncologists who
tested it was...

“Can you just make the
EHR faster please?" *

* Paraphrased for dramatic effect

## Slide 35: THE TL;DR

# THE TL;DR

It will take a lot of effort to convince clinicians that computers are helpful, not just painful.

## Slide 36: 4 - SMALL STEPS

# 4 - SMALL STEPS

Don't give up just yet.

## Slide 37: POTENTIAL WINS FOR AI + HEALTHCARE DATA*

# POTENTIAL WINS FOR AI + HEALTHCARE DATA*

CLINICIANS
Image processing
Annotating and diagnosing
scans, e.g. Microsoft InnerEye

Practice workflows
Claim denial prediction,
clinical trial matching

Value-based care
Predict and reduce
hospitalizations

PATIENTS
Triaging (“digital nurse”)
Prevent hospital visits, e.g.
Babylon, Sensely

Mental health
Easily accessible help, e.g.
Woebot, Youper, (Talkspace)...

* Focused on applications that target clinicians and patients rather than researchers and biased by my own perspective

## Slide 38: BUT... THE PENCIL PROBLEM!

# BUT... THE PENCIL PROBLEM!

Lack of interoperability
is not just a data problem
- it's also a challenge for
patients and clinicians

Administrative aspects of
healthcare (scheduling,
communication, billing, transport,
wait times, etc) are still
overwhelming for a lot of patients

Most patient portals have
terrible UX, too - and the
users may be older and
less tech savvy

THERE ARE STILL PLENTY OF “SIMPLE” PROBLEMS TO SOLVE.

## Slide 39: THANK YOU

# THANK YOU

Sam Bail @spbail
Recording will be available on the conference website

## Slide 40: REFERENCES

# REFERENCES

* [1] Shiny moonshot technology will not save healthcare — yet
* [2] What Is the Role of Natural Language Processing in Healthcare?
* [3] How IBM Watson Overpromised and Underdelivered on AI Health Care
* [4] IBM's Watson supercomputer recommended ‘unsafe and incorrect' cancer treatments, internal documents show
* [5] This Health Startup Won Big Government Deals—But Inside, Doctors Flagged Problems
* [6] Augmenting Mental Health Care in the Digital Age
* [7] Why Doctors Hate Their Computers
* [8] The Digital Doctor (excerpt here)
* [9] An Ingenious Approach To Designing AI That Doctors Trust
* [10] Dr Murphy on Twitter
* [11] Care.data and access to UK health records: patient privacy and public trust
* Thanks to Lucy Bridges (@linuxlucy) for a detailed overview of data flow in the NHS.