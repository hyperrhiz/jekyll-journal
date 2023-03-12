---
permalink: /instructions/
---

## Unique aspects about JSys

Please note that the JSys review process differs from traditional conferences in the systems area. It is closest in spirit to [VLDB](https://www.vldb.org/), but there are some important differences:

**Artifacts must be submitted *along* with the paper.**

Traditionally, artifact evaluation is optional, and done *after* the paper is accepted. 
At JSys, artifact evaluation proceeds parallely with paper review. 
For Solution and Tool/Benchmark papers, artifact evaluation is mandatory. 

JSys has two submission websites open for papers and artifacts for each deadline. For example, if you are submitting to the Mar 2023 deadline, the paper submission is [here](https://openreview.net/group?id=JSYS/2023/March_Papers), and the artifact submission is [here](https://openreview.net/group?id=JSYS/2023/March_Artifacts). 

**Paper submissions and reviews are publicly visible.**

Paper review is double-blind and public, while artifact evaluation is single-blind and private.
Artifacts are reviewed privately to allow sharing of sensitive information (e.g., ssh keys).
Some conferences treat paper submissions as confidential until publication; this is not the case at JSys since the submissions are public. 

**All communication happens via comments on OpenReview.**

JSys uses OpenReview for submission, review, revision, and comments. 
The area chairs and reviewers will communicate with authors via OpenReview comments.
Please ensure that you are able to receive email from the OpenReview system. 

## Submitting a Paper

JSys uses [OpenReview](https://openreview.net/) for submitting and reviewing papers. Papers should be submitted electronically as PDF. 
Papers and artifacts area reviewed separately.

JSys opens new submission forums for each deadline. Here are the links for recent and upcoming deadlines.

{% for item in site.data.openReview.forums %}{% if item.show == 1 %}
- [{{ item.title}}]({{item.url}}) {% if item.open == 0 %} <span class="text-muted">(closed)</span>{% endif %} {% endif %}{% endfor %}

### Formatting Instructions

All text and figures must fit within a 7” x 9” text block, centered on the page, using two columns with .33 inches of separation. The paper should be typeset using a 10-point font (Times New Roman or similar) with a 12-point (single-spaced) leading.

The easiest (and recommended) way to follow these formatting instructions is to use the [JSys LaTeX template](#template) (see below).

**Double Blind**. JSys reviews papers in a double-blind fashion: the reviewers do not know who the authors are, and the authors do not know who the reviewers are (until acceptance). The authors must make a good-faith effort to ensure the submitted document cannot identify the authors or their institution. For example, if they build on their own prior work, it should be referred to in the third person (i.e., “The paper by Brown et al.” and not “Our previous paper”).

**Open Source**. JSys encourages authors to make their code, data, and other artifacts open source.
However, if the open source repository is _not_ anonymized, it should not be linked directly in the submitted paper, as doing so breaks double-blindness. Instead, one simple way to link an already published repository to your JSys submission is to use services such as [Anonymous GitHub](https://anonymous.4open.science/).

**Page Limits**. There is no page limit. **However**, we strongly encourage authors to make their paper as brief as possible. Reviewer time and attention are limited; a compelling case for the paper must be made in the first 12-14 pages.

### Template

The JSys LaTeX template is available on [GitHub](https://github.com/jsysresearch/template). To get started and build a sample PDF:

```bash
git clone https://github.com/jsysresearch/template.git
cd template
make
```

Alternatively, one can download the zip file [here](https://github.com/jsysresearch/template/archive/refs/heads/main.zip) and import the zip in, e.g., Overleaf.


## Artifact Evaluation

JSys submissions for the Solution or Tools/Benchmark category must be accompanied by an Artifact. The JSys Artifact Evaluation Board evaluates the artifacts on two main aspects:

- **Usability**.  For an artifact to be considered "usable," it should
  satisfy the expectations set by the paper in terms of functionality
  (does it basically work?) and relevance (does the artifact match the
  paper?).  Beyond that minimum level of functionality, consider the
  documentation, completeness, and exercisability of the artifact.  Is
  the artifact easy to navigate, install, configure, and execute?

- **Reproducibility**.  The evaluator is asked to use the submitted
  artifacts to obtain the main results presented in the paper: i.e.,
  repeat some or all of the presented experiments in order to obtain
  the same experimental outcomes.  The goal is *not* to reproduce the
  results exactly, but instead to generate results independently
  within an allowed tolerance such that the main claims of the paper
  are validated.

In short, the Artifact Evaluation Board tries to ascertain: **Can an independent third-party, without the help of the authors, reproduce the main results of the paper?**

More details on the criteria and some useful references can be found on [the Artifact Evaluation page](/artifact_evaluation/).

Artifact Evaluation is single-blind and private (neither artifacts nor the reviews are made public); this is to allow authors to share access to their hardware or testing facility, if required.

The Artifact Evaluation proceeds _in parallel_ of the paper evaluation; to be accepted, Solution and Tools/Benchmark papers **must be accepted by both boards**. Papers accepted by the Editorial Board that fail Artifact Evaluation will be given a revise decision, and will have three months to ensure their artifact passes Artifact Evaluation.

## Revisions

If the authors receive a *Revise* decision, they have three months from the time of decision to upload a revised version of their paper. For example, if the decision was provided on April 15, the authors have until Jul 15 to upload their revised version.

OpenReview will show a "Revision" button. The authors can use this to upload their PDF. After doing so, **please leave a comment alerting the reviewers about the revised PDF**. Authors can upload their PDF multiple times, so it is important to tell the reviewers when it is ready for review.

Reviewers then have one month to read the revised version and come to a final decision regarding the submission.

The revised PDF should include the following:
- A cover letter detailing how the authors are responding to reviewer comments. The cover letter can take as many pages as required. Authors should be thorough in responding to reviewer comments. 
- The revised PDF, with all changes highlighted. 

Overall, it should be easy for the reviewers to understand how the PDF has changed in response to their comments. 

The final decision will also be communicated via OpenReview. 

## Final camera-ready version

Congratulations on getting your paper accepted to JSys! 

For the final version of the PDF, please use the `jsys_camera_ready.tex` [template](https://github.com/jsysresearch/template). Please note that the final version should use the `jsys_camera_ready` package (`jsys_camera_ready.tex` does this by default). The final version should also include the authors and their affiliation. We strongly encourage including ORCIDs. 

The final version should be uploaded using the "Revision" button on OpenReview. Please leave a comment indicating the final version has been uploaded (this is important to notify the Area Chair). 

One of the authors, on behalf of all authors, must sign [this publication agreement](https://github.com/jsysresearch/community/blob/main/agreement.pdf), and mail it to `editors@jsys.org`. 

Once the PDF and the signed agreement are received, we will publish the final PDF on the website within two business days. 
