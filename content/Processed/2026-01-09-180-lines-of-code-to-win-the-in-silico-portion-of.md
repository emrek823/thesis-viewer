---
url: https://t.co/4cEKkapV0J
title: "~180 lines of code to win the in silico portion of the Adaptyv Nipah binding competition"
clipped: 2026-01-09 16:17
source: browser-history
---

# ~180 lines of code to win the in silico portion of the Adaptyv Nipah binding competition

> Source: [https://t.co/4cEKkapV0J](https://t.co/4cEKkapV0J)

# ~180 lines of code to win the in silico portion of the Adaptyv Nipah binding competition

[Nick Boyd](mailto:nick@escalante.bio),
[Sam Guns](mailto:sam@escalante.bio)

08 Jan, 2026

Here's the [script](https://gist.github.com/nboyd/7b30c4033f834fc532a106d902fbdffa?ref=blog.escalante.bio) we used to get 1st place in the in silico portion of the Adaptyv Nipah competition:

```
import modal

def download_boltz2():
    from mosaic.models.boltz2 import Boltz2
    Boltz2()

### Build modal image: install mosaic + deps and download boltz2 model.
image = (
    modal.Image.debian_slim(python_version="3.12")
    .apt_install("git")
    .run_commands("git clone https://github.com/escalante-bio/mosaic.git")
    .workdir("mosaic")
    .run_commands("uv pip install --system -r pyproject.toml")
    .run_commands("uv pip install --system jax[cuda]")
    .run_commands("uv pip install --system .")
    .run_function(
        download_boltz2
    )  # I'm told it's better to put this on a volume, but this is easy.
    .run_commands("uv pip install --system equinox")
    .env({"XLA_PYTHON_CLIENT_MEM_FRACTION": "0.95"}) # this is a very large binder + target
)
app = modal.App("hallucinate", image=image)

BINDER_LENGTH = 220
TARGET_SEQUENCE = "QNYTRSTDNQAVIKDALQGIQQQIKGLADKIGTEIGPKVSLIDTSSTITIPANIGLLGSKISQSTASINENVNEKCKFTLPPLKIHECNISCPNPLPFREYRPQTEGVSNLVGLPNNICLQKTSNQILKPKLISYTLPVVGQSGTCITDPLLAMDEGYFAYSHLERIGSCSRGVSKQRIIGVGEVLDRGDEVPSLFMTNVWTPPNPNTVYHCSAVYNNEFYYVLCAVSTVGDPILNSTYWSGSLMMTRLAVKPKSNGGGYNQHQLALRSIEKGRYDKVMPYGPSGIKQGDTLYFPAVGFLVRTEFKYNDSNCPITKCQYSKPENCRLSMGIRPNSHYILRSGLLKYNLSDGENPKVVFIEISDQRLSIGSPSKIYDSLGQPVFYQASFSWDTMIKFGDVLTVNPLVVNWRNNTVISRPGQSQCPRFNTCPEICWEGVYNDAFLIDRINWISAGVFLDSNQTAENPVFTVFKDNEILYRAQLASEDTNAQKTITNCFLLKNKIWCISLVEIYDTGDNVIRPKLFAVKIPEQCT"

@app.function(
    gpu="B200",
    timeout=int(10 * 60 * 60),
    volumes={
        "/structures": modal.Volume.from_name("nipah-binders", create_if_missing=True)
    },
)
def design(max_runtime_seconds: int):
    import uuid
    import time

    import jax
    import jax.numpy as jnp
    import equinox as eqx
    import numpy as np
    
    from mosaic.models.boltz2 import Boltz2
    import mosaic.losses.structure_prediction as sp
    from mosaic.common import TOKENS
    from mosaic.losses.protein_mpnn import InverseFoldingSequenceRecovery
    from mosaic.losses.transformations import NoCys
    from mosaic.proteinmpnn.mpnn import load_mpnn_sol
    from mosaic.structure_prediction import TargetChain
    from mosaic.optimizers import simplex_APGM
    
    worker_id = str(uuid.uuid4())[:8]
    # load models
    folder = Boltz2()
    mpnn = load_mpnn_sol(0.05)

    # construct a bias with zeros for the target and -inf for Cys in the binder for MPNN
    bias = (
        jnp.zeros((BINDER_LENGTH, 20)).at[:BINDER_LENGTH, TOKENS.index("C")].set(-1e6)
    )

    # construct the loss function. in practice these weights are found by manual hyperparameter
    # search; e.g. generating designs and checking filter pass rates.
    sp_loss = (
        sp.BinderTargetContact()
        + sp.WithinBinderContact()
        # This is the only novel (relative to BindCraft) term in our loss: it encourages
        # sequences that are _recovered_ by inverse folding (after folding). This correlates with
        # nice qualities (expression, stability, etc), and might make hallucination less likely
        # to go off the rails. The weight here is probably a bit high (judging by the frequency
        # of homopolymers in designs).
        + 10.0 * InverseFoldingSequenceRecovery(mpnn, temp=jnp.array(0.001), bias=bias)
        + 0.05 * sp.TargetBinderPAE()
        + 0.05 * sp.BinderTargetPAE()
        + 0.025 * sp.IPTMLoss()
        + 0.4 * sp.WithinBinderPAE()
        + 0.025 * sp.pTMEnergy()
        + 0.1 * sp.PLDDTLoss()
    )

    features, _ = boltz_features, boltz_writer = folder.binder_features(
        binder_length=BINDER_LENGTH,
        chains=[TargetChain(sequence=TARGET_SEQUENCE, use_msa=True)],
        # Adaptyv probably didn't use a template for the target, so we don't either.
    )

    loss = NoCys( # wrap loss to ignore Cys residues (by precomposing with a transform that
                  # inserts zeros at Cys positions)
        folder.build_multisample_loss(
            loss=sp_loss,
            features=features,
            recycling_steps=1,
            num_samples=4, # four diffusion model samples to reduce variance. much cheaper than
                           # re-running whole model four times.
        )
    )

    @eqx.filter_jit
    def evaluate_loss(loss, pssm, key):
        return loss(pssm, key=key)

    def design():
        # sample a new sequence by optimizing the loss from a random initialization 
        _pssm = np.random.uniform(low=0.25, high=0.75) * jax.random.gumbel(
            key=jax.random.key(np.random.randint(10000000)),
            shape=(BINDER_LENGTH, 19) # 20 amino acids minus Cys
        )

        # get an initial, "soft" (non-sparse) PSSM 
        _, pssm = simplex_APGM(
            loss_function=loss,
            x=jax.nn.softmax(_pssm),
            n_steps=100,
            stepsize=0.2 * np.sqrt(BINDER_LENGTH),
            momentum=0.3,
            scale=1.00,
            logspace=False,
            max_gradient_norm=1.0,
        )
        # try to sharpen the PSSM into a discrete sequence (e.g. a one-hot PSSM)
        pssm, _ = simplex_APGM(
            loss_function=loss,
            x=jnp.log(pssm + 1e-5),
            n_steps=50,
            stepsize=0.5 * np.sqrt(BINDER_LENGTH),
            momentum=0.0,
            scale=1.25, # corresponds to negative entropic regularization -> encourages sparsity
            logspace=True,
            max_gradient_norm=1.0,
        )
        pssm, _ = simplex_APGM(
            loss_function=loss,
            x=jnp.log(pssm + 1e-5),
            n_steps=15,
            stepsize=0.5 * np.sqrt(BINDER_LENGTH),
            momentum=0.0,
            scale=1.4,
            logspace=True,
            max_gradient_norm=1.0,
        )
        # reinsert a Cys row (with zeros) into the PSSM
        pssm = NoCys.sequence(pssm)
        # compute the final sequence by taking the argmax
        seq = pssm.argmax(-1)

        # repredict with full sequence information: during design we use features for X residues
        # in the binder (except for the sequence channel) to make the objective function
        # differentiable (and avoid JIT issues). Now we construct features with full all-atom
        # information. Interestingly this rarely has a large effect.
        seq_str = "".join(TOKENS[i] for i in seq)
        boltz_features, boltz_writer = folder.target_only_features(
            chains=[
                TargetChain(sequence=seq_str, use_msa=False),
                TargetChain(sequence=TARGET_SEQUENCE, use_msa=True),
            ]
        )

        # We rank with a very simple loss function: IPTM + IPSAE. Why not optimize this directly?
        # It's a difficult objective because the gradients are very unreliable, but even if we
        # could we'd likely get designs that wouldn't work in practice.
        # In a standard setup we'd use at least one other model (e.g. AF2-SC) to check for consistency and weights would be tuned on retroactive binding data. 
        ranking_loss = folder.build_multisample_loss(
            loss=1.00 * sp.IPTMLoss()
            + 0.5 * sp.TargetBinderIPSAE()
            + 0.5 * sp.BinderTargetIPSAE(),
            features=boltz_features,
            recycling_steps=3,
            num_samples=6,  # Six diffusion samples to reduce variance in ranking.
        )

        loss_value, _ = evaluate_loss(
            ranking_loss, jax.nn.one_hot(seq, 20), key=jax.random.key(0)
        )

        return (seq_str, loss_value.item())

    start_time = time.time()
    results = []
    while time.time() - start_time < max_runtime_seconds:
        seq, loss_value = design()
        with open(f"/structures/designs_{worker_id}.txt", "a") as f: # in case the run dies
            f.write(f">{loss_value:.4f}\n{seq}\n")
        results.append((seq, loss_value))

    return results

@app.local_entrypoint()
def main(max_time_hours: float, workers: int, output_path: str = "designs.txt"):
    arguments = [max_time_hours * 60 * 60 for _ in range(workers)]
    all_results = sorted(sum(design.map(arguments), []), key=lambda x: x[1])
    with open(output_path, "w") as f:
        for idx, (seq, loss_value) in enumerate(all_results):
            f.write(f">design{idx}_{loss_value:.4f}\n{seq}\n")
```

This can be run without installing any dependencies using `uvx` (after setting up a [modal.com](https://modal.com/?ref=blog.escalante.bio) account):

```
uvx modal run hallucinate.py --workers 1 --max-time-hours 1.0
```

At the time of writing this costs about $6 per GPU-hour (roughly $3 per design); using all of the free credits for the competition (thanks Modal!) generates about 160 designs. As a final step we refolded the top 20 designs as monomers and in complex with the target and removed a few designs that adopted wildly different conformations in isolation vs in complex. That's it.

## Binder design pipelines

A typical binder design pipeline consists of three stages [[1]]:

1. Generation: produce a large number of candidate binders, typically via some form of optimization or generative modeling. The exact number varies from a few hundred for BindCraft up to tens of thousands for BoltzGen.
2. Inverse folding: inverse fold structures to generate new sequences that should co-fold to the same complex. Hopefully also resolve some pathologies from the generation step and improve expression / stability of designs.
3. Filtering and ranking: eliminate candidates with obvious flaws (huge hydrophobic patches, binders that fold very differently in isolation vs in complex, etc.) and score the remaining candidates using at least one additional folding model. Finally, select the top N for experimental characterization [[2]].

If you're an ML practitioner or researcher, the first stage seems like the most fun and hence receives the majority of attention -- indeed much of the PR around binder design methods focuses on models rather than pipelines. However, the second two stages are currently critical to the success of a binder design campaign.

Much of the genius of recent work (for instance, BindCraft) is in these last two stages. Improvements to inverse folding -- largely thanks to [soluble ProteinMPNN](https://www.nature.com/articles/s41586-024-07601-y?ref=blog.escalante.bio) -- have vastly increased the fraction of computational designs that express successfully in bacteria and generate stable binders. On the ranking + filtering side, in addition to a truly intimidating number of manual and physics-inspired filters ([seriously!](https://github.com/martinpacesa/BindCraft/blob/036608554c48e2bfa65c383d514312aaa78fd9bf/settings_filters/default_filters.json?ref=blog.escalante.bio)), BindCraft refolds with AF2 single chain. To paraphrase Martin Pacesa, "if the interface is so obvious that a single chain model can predict it, it's probably real."

This feels like the right way to think about the current state of binder design/PPI prediction in general: there is a small subset of sequence and structure space in which current models (AF2-multimer, Protenix, etc) reliably predict (positive) interactions. By carefully generating, filtering, and ranking designs to make sure they fall into this region, we can achieve remarkably low false positive rates (while avoiding known pathologies) without solving the general PPI prediction problem.

While these filtering and ranking steps constitute a real breakthrough, from a machine learning perspective they are unsatisfying: the main lesson of deep learning is that replacing multi-stage pipelines and handtuned heuristics with end-to-end learned models yields substantial improvements. However, this approach requires large, high-quality datasets with both positive and negative examples, which currently *do not exist* for protein-protein interactions [[3]].

### But what if...

With all that said, given the testing (and compute) for this competition were (quite generously) free [[4]], we wanted to see how simple we could make our design pipeline without completely giving up on in vitro success. Naturally, this approach also helps our designs rank high on the leaderboard and get tested in the wetlab. To that end we (almost) completely removed steps 2. and 3. above from our standard `mosaic` binder design workflow.

The impact of removing inverse folding is possibly mitigated by the inverse folding term in the design objective, though it's never been tried before. Removing filtering and ranking is much, much more risky. We take some inspiration here from [PXDesign](https://seed.bytedance.com/en/public_papers/pxdesign-fast-modular-and-accurate-de-novo-design-of-protein-binders?ref=blog.escalante.bio) [[5]], but go several steps further by ranking with the same model we use for design.

#### Why was this a winning strategy?

Our biggest advantage is that we were likely the only team to do gradient-based optimization directly on a Boltz-2 loss, which correlates extremely well with the contest metric. Additionally, by ranking using *multiple* diffusion samples we also increased our chances of getting higher scores according to Adaptyv (because we -- unfortunately -- don't get to set their random seed). Finally, skipping inverse folding and most filtering allowed us to keep designs that other teams might've discarded, at the likely cost of some (or many?) false positives.

#### Will these designs work in the wetlab?

Honestly, I have no idea! Many of them look [quite suspect](https://proteinbase.com/proteins/noble-swan-clay?from=collection&slug=nipah-binder-competition-submission-4-h-pBNUvuTO&sortField=boltz2Ipsae&sortOrder=desc&ref=blog.escalante.bio) to me (see video below), while others seem more reasonable [[6]]. If they do bind strongly, I'll have to substantially revise my understanding of what is necessary for successful computational binder design -- which would be very exciting.

[[1]]: Really there are some initial steps that are typically done by hand: e.g. selecting binder lengths and scaffolds, target epitopes, etc. We skipped these for simplicity.

[[2]]: Technically speaking BoltzGen does something slightly more sophisticated to encourage diversity.

[[3]]: That's why this competition and [proteinbase.com](https://proteinbase.com/?ref=blog.escalante.bio) are such valuable resources! We're also very excited about larger-scale datasets like [huggingface.co/aalphabio](https://huggingface.co/aalphabio?ref=blog.escalante.bio) and to an even greater degree results from [large-scale display experiments with randomized libraries.](https://www.biorxiv.org/content/10.1101/2025.10.14.682342v2?ref=blog.escalante.bio) Really, we think large-scale, relatively unfiltered datasets are the only cha

[... truncated ...]