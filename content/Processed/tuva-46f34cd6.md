---
source_pdf: "https://drive.google.com/file/d/1urXXIIdXIflNxg9Qm6ja8npMkq5p-zPOlLKqtEpwos0/view"
drive_folder: "Portfolio/Tuva Health"
type: portfolio
company: Tuva Health
ingested: 2025-12-26
original_filename: "Tuva"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1urXXIIdXIflNxg9Qm6ja8npMkq5p-zPOlLKqtEpwos0/view)

Laying the technical foundation and infrastructure

Why is VBC the future?

How will provides engage with/crush disruptors?

Pharma

At the end of the day, we used Health Gorilla → doucment in XML format. Still dependent on

Mapping data into FHIR with any layer of intelligence?

High level intelligence templetizing - is that a tool I use like NLP software? You need to do tokenization? Imputizatoin? Etc

You need these tools and access to those tools. All my raw data feeds through and let it give me my warehouse structure

How standardized can this actually be?

Innovaccer + Lightbeam - tableau for EMR

I mean the crux is the jump from the data source to the input layer... You could build a bunch of connectors to different source systems to easily transform it into the input layer. These connectors can be very valuable... The question is though, how standardized can they be!

Is dbt the leading analytics tool?

I don’t know whether I share their believe that dbt is the leading database tool! SQL is a bit static - PySpark and other python based transformations are much more versatile

MongoDB - free product that some folks can use. Enterprise layer? Is market big enough for something like Tuva do something like that?

How far away from actual data can you be?

There are two reasons why this would be more of a service business 1) health care organizations won’t give them access to the source system databases or can’t give them access (like for Epic) - big issue at Palantir HC customers - the more removed they sit from the raw system the more customization is required 2) there are a lot of different source systems & formats and all come in different implementations - would be interesting to hear how many connectors they expect they would need to setup.

I find their architecture a bit confusing (maybe I am used to the Palantir way of approaching data integration). We use an object centric approach, where you just add metrics & information to a data model. Data quality checks happen on the pipeline level (before the data model). They are trying to intelligence on the pipe

Actually thinking about a very similar idea right now... but I would want to build a moat around being a data broker between orgs...

... feel like the data integration within an org is kind of solved/ depends on the sophistication of the data engineering org at the customer. It’s not a problem of software but of processes (my opinion at most Palantir customers).

You can give the right rails, but if no-one follows them it will be hard to create value!

And make them follow the rails == consulting!

Data enrichment alone can be very profitable, if they have some special datasets they maintain/ own... CareJourney is built on that model, and there are a few other data aggregator businesses in other industries doing this very well.

Haha - these are my unstructured thoughts...

Give me API like Amazon’s object recognition API. Confidence

What is our overall view of data + strategy?

Empty promises of people today around ML + AI algos

Transformation layer is foundational (more on DBT)

Open source

Services are necessary but will scale

Additional questions for Tuva

Open source

Dbt

Diversity and volume of data

Questions for Shannon

do they know more about the cost of their competitors products or services? ( I don’t totally understand where their pricing numbers are coming from…)

for the data enrichment portion of the product, when do they want to roll that out and how much of their model is dependent on having that? (The normalization makes sense, the enrichment would be awesome but also insanely hard to pull off- most of that info is proprietary to the competitors they named)

customer need of “streamline data infrastructure” feels like a far jump to “normalize the data” as the solution. what additional infrastructure investments do customers need to make? ex. Health offerings from the large cloud vendors are not getting a ton of uptake — why would Tuva cloud be different?

- how do you avoid just being a services company? I worry each org is so early on this journey they will be a special snowflake wrt data / infrastructure and productizing this will be difficult (and maybe a service offering is fine?)

- what tools do you imagine being deployed on top of tuva? will the existing companies in this space be excited to work with you or feel threatened?

Notes

FHIR is not for analytics, just pipes

Tuva project development program launched

Need data to work on

People to hire to write ocde

Access to data

3-5 initial customers

Focused more on digital health and health tech

Build network on top of

Bootstrapping until YC

$600K in bank from YC and consulting

$1.5M on $15M cap

Closed $580K of that from family, friends, angels