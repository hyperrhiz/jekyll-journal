---
permalink: /artifact_evaluation/
---

# Artifact Evaluation

JSys submissions for the Solution or Tools/Benchmark category must be accompanied by an Artifact. The JSys Artifact Evaluation Board evaluates the artifacts on two main aspects:

- Usability.  For an artifact to be considered "usable," it should
  satisfy the expectations set by the paper in terms of functionality
  (does it basically work?) and relevance (does the artifact match the
  paper?).  Beyond that minimum level of functionality, consider the
  documentation, completeness, and exercisability of the artifact.  Is
  the artifact easy to navigate, install, configure, and execute?

- Reproducibility.  The evaluator is asked to use the submitted
  artifacts to obtain the main results presented in the paper: i.e.,
  repeat some or all of the presented experiments in order to obtain
  the same experimental outcomes.  The goal is *not* to reproduce the
  results exactly, but instead to generate results independently
  within an allowed tolerance such that the main claims of the paper
  are validated.

For both criteria, the standard for evaluation is largely based on the
expectations set by the paper. **This is key.** The evaluator is expected
to read the paper and determine the expectations that it sets up in the
reader's mind.  What does the paper claim and imply about its artifact
and/or the experiments performed with it?  This should be the basis of
the evaluation and written review.  For example, an evaluator might
write something like this in their review: "Based on Section X of the
paper, I expect that the artifact has feature Y and can solve problem Z
in about N minutes."  (The paper probably sets up multiple expectations,
of course.)  The evaluator should then explain how the artifact did or
did not satisfy the expectation(s) during evaluation, i.e., what they
did, what worked and what did not, leading up to the evaluator's overall
decisions.

Note that the standard for reproducibility is **not** "reproduce all of
the paper's experiments and results exactly."  For most papers,
reproducing *all* of the experiments and obtaining *exactly* the same
results is infeasible, for many different reasons.  Instead, the
standard is to "generate results independently within an allowed
tolerance such that the main claims of the paper are validated."  This
brings us back to the expectations that the paper sets up in the
reader's mind.  What are the "main claims"?  What is a reasonable
tolerance, based on the paper and the experiments that the evaluator
tried?  The evaluator should explain these things in their review.

There are several sources of good advice about preparing artifacts for
evaluation.  These two are particularly noteworthy:

- "[HOWTO for AEC Submitters](https://docs.google.com/document/d/1pqzPtLVIvwLwJsZwCb2r7yzWMaifudHe1Xvn42T4CcA)," by Dan Barowy, Charlie Curtsinger, Emma
    Tosch, John Vilk, and Emery Berger.

- "[Artifact Evaluation: Tips for Authors](https://blog.padhye.org/Artifact-Evaluation-Tips-for-Authors/)," by Rohan Padhye.


Artifact Evaluation is single-blind and private (neither artifacts nor the reviews are made public); this is to allow authors to share access to their hardware or testing facility, if required.

The Artifact Evaluation proceeds _in parallel_ of the paper evaluation; to be accepted, Solution and Tools/Benchmark papers **must be accepted by both boards**. Papers accepted by the Editorial Board that fail Artifact Evaluation will be given a revise decision, and will have three months to ensure their artifact passes Artifact Evaluation.