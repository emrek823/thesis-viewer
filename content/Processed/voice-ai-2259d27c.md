---
source_pdf: "https://drive.google.com/file/d/1FYp13WOHEcQXLAZo7jSt7P4xyHgS6VmwMCepHj280K8/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Voice AI"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1FYp13WOHEcQXLAZo7jSt7P4xyHgS6VmwMCepHj280K8/view)

Below we describe RAG workflows and breaking

Overview: This exercise has forced us to be more thoughtful and truly understand where the value of AI is in healthcare. We are seeing horizontal players picking off and building state of the art workflows across the LLM infrastructure workflow (ex. Chunkr for data ingestion, Voyage.ai for embeddings, and Braintrust for evaluation). Thus, when companies like Omi pitch us on differentiated embedding model workflows it is difficult to see where long term differentiation will occur. This makes us question the viability of healthcare specific LLM infrastructure companies (Voyage is working with Harvey AI in legal space) as a horizontal investment.

Where we do see value is in companies who have underlying commercial models that allow for 1) proprietary, long term data generation of interaction data most likely and 2) distribution advantages that are enabled by AI.

Some of examples:

Ryght AI is building an enterprise grade Clinical Trial AI platform. It provides trial sites with free software (distribution easier with Ai - can customize for each site workflow) and in exchange captures clinical site level performance data in realtime, a differentiator from the market. OpenAI will not do the work to integrate with sites and Genmab’s does have this data in house

Valleysteers initial commercial model for payer subsidized billing service is human intensive but each human manual/semi-manual case becomes a labeled data point capturing the nuanced decision making of primary care medical billing. Scale AI has built a significant business from employing humans to manually label data points that then becomes part of the training data they sell to foundational model builders. Similarly, Valleysteer can build a differentiated training dataset and potentially build a best in class automated solution over time.

https://openai.com/index/introducing-the-realtime-api/

Summary (more on next steps / our view)

The actual “voice tech” (speech-to-text, text-to-speech) is commoditized and will become cheaper than a hourly worker in a call center soon

The internal differentiation that companies can drive is more around their understanding of the workflow and pieces to tie these models together (like embeddings or clinical supervision models)

In addition, this new technology opens up novel GTM strategies. For example, N-power is giving away scribes for free to community oncology practices to build their next-generation Flatiron with higher quality data and without the need for nurses on the back-end to abstract all this data. So while they aren’t making money  or betting on the differentiation of the scribe per se, they have created an entirely novel GTM. We can also think about how an MSO like Anna can leverage off the shelf tools and build these cheaply and earlier on in their company journey than what Abridge had to do 3-4 years ago (get a bunch of labeled speech data to train)

What did OpenAI recently announce recently and why does it matter? New pricing model ($0.06 per minute of audio input and $0.24 per minute of audio output = $9/hr) and reduces the number of steps leading to faster speech to speech (below)

Omi talked about EHR embeddings model for RAG application that feeds their voice application and a “clinical supervision” model to decide when a nurse needs to get involved. What are these exactly? Are they pieces of differentiation?

How Does RAG Work

RAG works by preprocessing a knowledge base using the following steps:

Break down the knowledge base (the “corpus” of documents) into smaller chunks of text, usually no more than a few hundred tokens;

Use an embedding model to convert these chunks into vector embeddings that encode meaning;

Store these embeddings in a vector database that allows for searching by semantic similarity.

At runtime, when a user inputs a query to the model, the vector database is used to find the most relevant chunks based on semantic similarity to the query. Then, the most relevant chunks are added to the prompt sent to the generative model.

What is an embedding model?

Characteristics of embedding models:

They transform various types of data (text, images, audio) into fixed-length vectors

The resulting vectors typically have hundreds or thousands of dimensions

Semantically similar items are positioned closer together in the vector space

Common embedding techniques include word embeddings, document embeddings, and image embeddings

What is a Vector Database?

Embedding models and vector databases work together in the following way:

The embedding model converts raw data (e.g., text, images) into vector representations.

These vector embeddings are then stored and indexed in the vector database.

When a query is made, it is first converted into a vector embedding using the same model.

The vector database then performs a similarity search to find the most relevant results.

This combination enables powerful applications such as semantic search, recommendation systems, and retrieval-augmented generation (RAG) for large language models

What is a OMI clinical supervision model?

According to Omi, the clinical supervision model flags safety issues to nurses and nurses take action. (similar to automated calls when you keep asking to speak to an agent). Essentially this becomes a RLHF loop. Omi escalates to nurse → nurse takes context and then provides action/next steps and additional context as to why → this becomes training data that is then fed back into the model.

Ex LLM Stack:

Chunkr: Open Source data ingestion

Voyage.AI raised $28m build state of the art (SOTA) embeddings. If we see a company claiming their differentiation is a better embeddings model, does that even matter?

XX

Braintrust raises $36m to build better evaluation and monitoring tools. If we see a company claiming their differentiation is better evaluation and monitoring tools, does that even matter?

XX

Embeddings (add some papers)

XX https://www.nature.com/articles/s41746-021-00455-y

YYhttps://www.nature.com/articles/s41598-020-62922-y/figures/2

ZZ

Clinical Supervision