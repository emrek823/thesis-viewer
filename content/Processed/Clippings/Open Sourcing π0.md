---
title: "Open Sourcing π0"
source: "https://www.physicalintelligence.company/blog/openpi"
author:
published: 2025-02-04
created: 2025-12-17
description: "Physical Intelligence is bringing general-purpose AI into the physical world."
tags:
  - "clippings"
---
Published

February 4, 2025

Email

research@physicalintelligence.company

Repo

[Physical-Intelligence/openpi](https://github.com/Physical-Intelligence/openpi)

A few months ago we announced [π <sub>0</sub>](https://www.physicalintelligence.company/blog/pi0), our first general-purpose robotic foundation model that could be fine-tuned to a diverse range of tasks (folding laundry, cleaning a table, scooping coffee beans, etc) and that could control a variety of different robot type (robots with two arms, single-arm platforms, mobile robots, etc). Today, we are releasing the code and weights for the π <sub>0</sub> as part of our experimental [openpi](https://github.com/Physical-Intelligence/openpi) repository.

Our aim with this release is to enable anyone to experiment with fine-tuning π <sub>0</sub> to their own robots and tasks. We believe that these generalist robot policies hold the potential to not only enable effective robotic learning, but in the long run transform how we think about artificial intelligence: in the same way that people possess cognitive abilities that are grounded in the physical world, future AI systems will be able to interact with the world around them, understand physical interactions and processes at an intuitive level, and reason about cause and effect. We believe that embodiment is key to this, and by making π <sub>0</sub> available to everyone, we hope to contribute to progress toward broadly capable and general-purpose physical intelligence.

The [openpi](https://github.com/Physical-Intelligence/openpi) repository provides:

- code and model weights for running the base pre-trained π <sub>0</sub> model
- several checkpoints that are fine-tuned for a few simple tasks on a few widely available platforms such as [ALOHA](https://tonyzhaozh.github.io/aloha/) and [DROID](https://droid-dataset.github.io/)
- example code to run inference on several real-world and simulated robot platforms
- code for fine-tuning the base π <sub>0</sub> model for your own tasks and platforms

We expect that the main use-case for openpi will be to fine-tune π <sub>0</sub> with small to medium amounts of data from your own platform. We found in our own experiments that between 1 and 20 hours of data was sufficient to fine-tune to a variety of tasks, as discussed in our [previous blog post](https://www.physicalintelligence.company/blog/pi0), though your mileage may vary. Concurrently with our release, our friends at [HuggingFace](https://huggingface.co/lerobot) have generously prepared a [PyTorch port](https://huggingface.co/lerobot/pi0) of openpi if you prefer PyTorch over JAX. We look forward to seeing how openpi is used, and welcome feedback and questions.

This is an experiment: π <sub>0</sub> was developed for our own robots, which differ from the widely used platforms such as ALOHA and DROID, and though we are optimistic that researchers and practitioners will be able to run creative new experiments adapting π <sub>0</sub> to their own platforms, we do not expect every such attempt to be successful. All this is to say: π <sub>0</sub> may or may not work for you, but you are welcome to try it and see!

### Supported platforms and checkpoints

[DROID](https://droid-dataset.github.io/): a Franka-based single-arm system with an accompanying open-source dataset. The videos below show openpi running in environments that were never seen in the training data, across a wide range of different locations around the world, including the University of Montreal, the University of Washington, KAIST, and more (see acknowledgements at the end of the post).

[ALOHA](https://tonyzhaozh.github.io/aloha/): a low-cost dual-arm system suitable for dexterous manipulation. The videos below show openpi running on an ALOHA platform that was not seen in the training data, in a new location.

We shared openpi with our collaborators who generously agreed to beta-test the framework. The videos below include an example experiment that fine-tuned π <sub>0</sub> to control the ALOHA to scoop trail mix ingredients from Moo Jin Kim. We also set up π <sub>0</sub> to run in a few simulated environments, including [Libero](https://libero-project.github.io/main.html) and the [ALOHA simulation](https://github.com/tonyzhaozh/aloha).

We provide example code that can be used to implement a client for your own robot system, making it straightforward to hook up π <sub>0</sub> -derived models to your own platform.

We provide a variety of pre-trained checkpoints, with a few highlights below. For a full list, please see the [openpi](https://github.com/Physical-Intelligence/openpi) repository documentation.

**π <sub>0</sub> base**: This is the standard pre-trained π <sub>0</sub> model, as described in [our paper](https://www.physicalintelligence.company/download/pi0.pdf). The model is trained on OXE and 7 of our robot platforms. It is designed for fine-tuning, though it can be used in zero shot for tasks that are present in the pre-training data, such as the "take toast out of toaster" task shown on the right.

**π <sub>0</sub> -FAST base**: This model uses the [FAST tokenizer](https://huggingface.co/physical-intelligence/fast) to enable control via autoregressive discretization. It provides somewhat better language following performance, but has higher inference cost (about 4-5x higher in our experience). This is a good choice if you prefer to use discretization rather than flow matching. More details about this approach are discussed in the [FAST paper](https://www.physicalintelligence.company/research/fast).

We also provide a few fine-tuned demo checkpoints. These are not intended for subsequent fine-tuning, but can provide an out-of-the-box demonstration. These may or may not work on your particular robot. Since these checkpoints were fine-tuned on relatively small datasets collected with more widely available robots, such as ALOHA and the DROID Franka setup, they might not generalize to your particular setup, though we found some of these, especially the DROID checkpoint, to generalize quite broadly in practice:

**π <sub>0</sub> -FAST DROID and π <sub>0</sub> DROID**: We provide two models that are fine-tuned to the [DROID](https://droid-dataset.github.io/) dataset, which consists of diverse tasks in diverse environments with a Franka robotic arm. These are the first models that are able to follow instructions successfully in entirely new environments with DROID platforms, as we discussed in our [FAST paper](https://www.physicalintelligence.company/research/fast), and we recommend these models for anyone working on DROID or DROID-like platforms and tasks.

**π <sub>0</sub> ALOHA**: towel folding, food scooping, and other tasks: We provide a set of checkpoints fine-tuned for tasks on the ALOHA platform. See the [openpi repository](https://github.com/Physical-Intelligence/openpi) documentation for instructions about how to set up your ALOHA system to run these checkpoint correctly. These checkpoints might be quite sensitive to overall robot setup, though we were able to run them on an entirely new ALOHA station that did not appear in the training data.

**π <sub>0</sub> Libero**: This checkpoint is fine-tuned for the Libero benchmark, and can be evaluated on Libero tasks out of the box.

### Perspectives on open source robotic foundation models

At Physical Intelligence, we believe that general purpose models that can control any robot to perform any task will be the future of robotic control. However, there are many unanswered questions, both in how such models can be built, and in how they will be used, adapted, and deployed. We believe that with π <sub>0</sub>, we’ve taken an important step forward, but some of the most difficult challenges are in the future. To develop truly general and capable models, the robotics community will need to work together, and our aim with releasing openpi is to contribute to this shared effort. In the same way that effective open-source language models (LLMs) and vision-language models (VLMs) have led to a Cambrian explosion of new LLM and VLM applications, new methods in research, and new products, we hope that openpi will lead to new and creative uses of robotic foundation models, public sharing of larger and more exciting datasets, and new technologies.

We are curious to see how you would like to use openpi, whether it supports your use case, whether it can be improved to better handle the situations that you are most interested in, and how this can guide our own future work. We therefore hope that everyone who tries out our models will provide us with feedback. Please don’t hesitate to communicate with us via [GitHub](https://github.com/Physical-Intelligence/openpi/) issues (for technical support), or by [email with feedback and suggestions](https://www.physicalintelligence.company/blog/). We are also working with a number of partners to customize our models to specific use-cases, jointly develop and evaluate new experimental features on top of π <sub>0</sub> and FAST, and support new types of platforms. If you are interested in this, please [contact us](https://www.physicalintelligence.company/blog/)!

### Acknowledgements

We are very grateful to our friends and collaborators who prepared demo videos running openpi on their robots, including: Minho Heo, Joseph Lim, Kyle Stachowicz, Pranav Atreya, Laura Smith, Arhan Jain, Abhishek Gupta, Özgür Aslan, Kirsty Ellis, Artur Kuramshin, Glen Berseth, Edward Hu, Will Liang, Hungju Wang, Sam Wang, Jie Wang, Dinesh Jayaraman, Moo Jin Kim.