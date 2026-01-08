---
source_pdf: "https://drive.google.com/file/d/16jbuYckcl7tqW3Lo2bAxPk2mW-RlrV46/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "large_language_models_and_the_legacy_system.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/16jbuYckcl7tqW3Lo2bAxPk2mW-RlrV46/view)

# TechRxiv™
Powered by IEEE

# Large Language Models and the Legacy System

This paper was downloaded from TechRxiv (https://www.techrxiv.org).

## LICENSE
CC BY 4.0

## SUBMISSION DATE / POSTED DATE
05-06-2023 / 07-06-2023

## CITATION
Torre, Nicolo (2023). Large Language Models and the Legacy System. TechRxiv. Preprint.
https://doi.org/10.36227/techrxiv.23298176.v1

## DOI
10.36227/techrxiv.23298176.v1

---

# Large Language Models
and the
Legacy System

Nicolo G. Torre, PhD CFA
CEO, Lloyd Tevis Investments, LLC

June 5, 2023

## Abstract
We describe a general method for applying large language models
to provide a natural language interface to legacy systems. The tech-
nique overcomes the problem of hallucination with LLM and makes
the legacy system more accessible to casual users.

---

# 1 The Problem

Large language models have demonstrated considerable facility with natural
language processing. They have also demonstrated a capacity to mine the in-
ternet for public knowledge and to synthesize it into natural language reports.
However there are limitations. The models may confabulate ("hallucinate”.)
As a result their work product is of shaky reliability and considerable con-
cerns have been voiced about the technology. In mission critical applications
reliability is essential and application of LLM in this setting appears prob-
lematic. A second limitation is that the technology does not have access to
private (non-public) information which is vital to many applications.

On the other hand there are a large number of existing legacy systems.
Here by a legacy system we mean simply one designed before the advent of
this technology. These legacy systems have often been designed to deliver
high reliability in a particular mission and have access to all necessary private
information for the task. Seemingly combining the LLM with the legacy
system could overcome the weaknesses of LLM while enhancing the capability
of the legacy system.

# 2 Our Study Situation

We have studied this question in the context of a particular legacy system.
Our system is an enterprise size software system which digests data about
an individual investor, prepares a personalized investment strategy, presents
the strategy to the user and on receiving approval implements the strategy
over time. At the heart of the system is an expert system which conducts
the analysis and develops the investment advice. The system is engineered
for use by the investor served (i.e a layman and not a financial advisor in-
termediary.) The system is currently deployed in a B2C business model at
www.lloydtevis.com.

In considering this particular system we have identified two use cases
where a LLM may add value. Both rely on the fact that casual or new users
may be able to express service requests in natural language but they lack the
in depth knowledge of the system required to express the service request in
the system's conceptual framework. One setting in which this occurs is when
the user seeks navigational assistance “I am trying to do X what steps to I
need to do." Especially this situation will arise when a user is trying to apply

1

---

a “power user feature,” i.e. access a powerful but rarely used feature of the
system. The second setting is when the user seeks a particular output of the
system. The situation we envision is where the system currently produces
the output but it is difficult for the casual user to locate the desired datum as
the reports produced by the system are numerous, voluminous and possibly
not stated in the exact terms used by the user. Here the users request is
simply "What is X.” These use cases will be of very common occurrence in
any setting where a casual or new user is interacting with a large system of
substantial capabilities.

# 3 The Solution

As the strength of LLM is in language processing we seek a language solution
to the problem. We create a computer language adapted to the legacy sys-
tem. We then use the LLM to translate the natural language service request
into the legacy system's language. The legacy system processes the service
request and returns the result to the user. The legacy system already has
the capability to produce output tailored to human consumption, so there
is no need to invoke the LLM to translate the system output into natural
language.

The legacy system language we create has a very simple structure. It
consists of statements of the form

`<Command word> <list of parameters>;`

One may very easily construct a parser for this language and one can easily
check statements for being well formed. If the system happens to already
possess an API, then modifying the system to respond appropriately to such
statements is rather easy. Alternately, if the system is currently driven from a
browser based GUI, then translating the statements into urls to be processed
through curl is another possibility.

In the particular setting of our system we have found the following state-
ments to be useful

2

---

## Table 1: Typical Statements

| Statement               | Response                                                                                                                                                                             |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Show <datum>            | serve report containing desired information                                                                                                                                            |
| Define <technical term> | serve help file defining the technical term                                                                                                                                            |
| Assess <item>           | serve a report explaining significance of an output                                                                                                                                    |
| Explain <item>          | provide a data result, explain how it is cal- culated and what its significance is                                                                                                     |
| How <goal>              | supply instructions on how to accomplish the goal                                                                                                                                    |
| Suggest <goal>          | suggest ways to improve performance on some criteria                                                                                                                                 |
| Execute <action>        | perform some action of which the legacy system is capable                                                                                                                            |

The reader may observe that we have attempted to incorporate a certain
interactivity to the user interface by anticipating likely follow up questions
to an initial response. Every legacy system and user community will have
its own system language, but is likely that many systems share features
with what we have sketched here. The system language may be developed
incrementally and one may easily test it as one goes along.

Next one must train the LLM to translate from natural language into
system language. We used the fine tuning capability of OpenAi's davinci
engine. The engine is trained by preparing a training set consisting of many
records of the form

(natural language prompt, system language translation)

Preparing this training set is an exercise in imagining all the different natural
language prompts a user could make which could be successfully translated
to a particular system language statement. OpenAI suggests that hundreds
of training statements may be needed, but we have found training sets on the
order of dozens to result in valid translation. Probably the simplicity and
compactness of the system language into which we are translating reduces
the training burden. As with the system language, one may develop and
test incrementally. This creates the possibility of deploying an alpha version
to select users, observing their actual prompts used and incorporating those
findings into the next version. Humorously we would describe this as machine
assisted developer learning.

3

---

# 4 Experience

Our experience with this approach is that a natural language user interface
to the legacy system is developed with an effort on the order of man days to
weeks. One does not have the problem of confabulation. Whatever response
is delivered by the system will rely on the legacy system for its accuracy
and we have posited the legacy system to be highly reliable in its outputs.
One does, however, have an issue of confusion. A mistranslation to system
language may result in a correct but unwanted result. In particular, the
Execute command should be wrapped around with appropriate safeguards.
In the context of an investment application a mistranslation which results in
the system language statement

`Show tax rate;`

is harmless while a mistranslation to

`Execute trades;`

may not be. These, however, are routine issues of user interface design.

Our experience with this approach to date is adequate to see its technical
feasibility. Achieving a high enough degree of reliability (few mistranslations)
and power (breadth of system language) so that users readily adopt it and
find it valuable is a matter for experimentation. Currently we are looking to
build experience in this area so we can best judge how to deploy this capa-
bility in our existing system. We believe, however, that the LLM technology
can fairly easily be incorporated into a wide range of legacy systems with
meaningful improvement in the ability of casual users to access the power of
such systems.

# 5 Thanks and an Afterthought

We would like to thank Atiq Raza for the stimulating conversations which
first directed our attention to this matter. In the same spirit of open ended
speculation we would like to suggest that the process of using an LLM to
translate from a natural language to a structured computer language may
have much wider applicability than just simple command languages. For
instance, translating from natural language to a knowledge representation
language may prove a useful step to organizing the content of text libraries
for further processing.

4