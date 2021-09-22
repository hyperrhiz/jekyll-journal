---
layout: page
menutitle: Call for Papers
permalink: /cfp/
---

# Call for Papers

The Journal of Systems Research (JSys) is a diamond open-access (no fees for authors or readers) journal that seeks to publish research that moves the field forward and will be of interest to the systems community. JSys emphasizes rigorous research that improves the state-of-the-art, even if the increment is modest. JSys requires that papers that put forth a new tool, benchmark, or software solution undergo Artifact Evaluation and make their artifact publicly available.

<!-- TOC depthTo:2 -->

- [Open Areas](#open-areas)
- [Paper Types](#paper-types)
- [Submitting a Paper](#submitting-a-paper)
- [Artifact Evaluation](#artifact-evaluation)
- [Revisions and Review Process](#revisions-and-review-process)
- [Open Access](#open-access)

<!-- /TOC -->

## Open Areas

JSys currently welcomes submissions in the following areas.  
The links below will take you to the specific call for papers per area.

{% for item in site.data.areas.area %}{% if item.active == 1 %}
- [{{ item.title}}]({{item.url}}){% endif %}{% endfor %}

The rest of this page describes generic rules that apply to all JSys areas.

## Paper Types

JSys categorizes papers into four types, each with their own publicly-available acceptance criteria.

{% for item in site.data.papers.type %}{% if item.active == 1 %}
- [{{ item.title}}]({{item.url}}){% endif %}{% endfor %}

## Submitting a Paper

JSys uses [OpenReview](https://openreview.net/) for submitting and reviewing papers. Papers should be submitted electronically as PDF. 
Papers and artifacts area reviewed separately.

|<i class="fas fa-exclamation-triangle"></i>||Please be aware that papers will be publicly visible _upon submission_.|
|:---|:---|:---|
|||Artifacts are reviewed privately to allow sharing of sensitive information (e.g., ssh keys).|
||| 

JSys opens new submission forums for each deadline. Here are the links for recent and upcoming deadlines.

{% for item in site.data.openReview.forums %}{% if item.show == 1 %}
- [{{ item.title}}]({{item.url}}) {% if item.open == 0 %} <span class="text-muted">(closed)</span>{% endif %} {% endif %}{% endfor %}

### Deadlines

JSys has multiple deadlines each year, each set at 23:59 Anywhere on Earth (UTC-12).

- March 1st
- May 1st
- August 1st
- November 1st

For each deadline, reviews will be available within 1.5 month.
For example, for a work submitted by March 1st, JSys commits to provide initial reviews by April 15th.

### Formatting Instructions

All text and figures must fit within a 7” x 9” text block, centered on the page, using two columns with .33 inches of separation. The paper should be typeset using a 10-point font (Times New Roman or similar) with a 12-point (single-spaced) leading.

The easiest (and recommended) way to follow these formatting instructions is to use the [JSys LaTeX template](#template).

### Page Limits

There is no page limit.

**However**, we strongly encourage authors to make their paper as brief as possible. Reviewer time and attention are limited; a compelling case for the paper must be made in the first 12-14 pages.

### Template

The JSys LaTeX template is available on [GitHub](https://github.com/jsysresearch/template). To get started and build a sample PDF:

```bash
git clone https://github.com/jsysresearch/template.git
cd template
make
```

### Double-blind

JSys reviews papers in a double-blind fashion: the reviewers do not know who the authors are, and the authors do not know who the reviewers are (until acceptance). The authors must make a good-faith effort to ensure the submitted document cannot identify the authors or their institution. 

For example, if they build on their own prior work, it should be referred to in the third person (i.e., “The paper by Brown et al.” and not “Our previous paper”).

### Arxiv

JSys allows submission of papers already uploaded on Arxiv. However,

- the title of the JSys submission must be different from the Arxiv submission, and
- the system's name (if any) used in the two papers must be different.

The authors should make a good-faith effort to preserve the double-blind nature of the JSys submission.
Please inform the Editor-in-Chief and Area Chairs if there is a previous Arxiv submission; this helps if reviewers unintentionally find the Arxiv paper.

### Social Media

JSys does not forbid authors to advertise their work on social media.
However, do not link to the OpenReview submission, as doing so breaks double-blindness.

For example,

- Tweeting “We have done some work on FooBar, here’s the Arxiv paper” is fine. 
- Tweeting “We have just submitted our work on FooBar to JSys! We are submission #42” is not fine.

### Open Source

JSys encourages authors to make their code, data, and other artifacts open source.

However, if the open source repository is _not_ anonymized, it should not be linked directly in the submitted paper, as doing so breaks double-blindness. Instead, one simple way to link an already published repository to your JSys submission is to use services such as [Anonymous GitHub](https://anonymous.4open.science/).

<!-- Making non-anonymized artifacts publicly available is fine as long as the system name in the public repository is different from the JSys submission. A short-hand for remembering this is that the open-source rules are similar to how Arxiv papers are handled. -->

### Copyright and originality of the work

All work submitted to JSys must be original work. The authors must have the copyright for the submitted work. Simultaneous submissions are not allowed: any work submitted to JSys must not be under consideration for another workshop, conference, or journal.

<!-- <i class="fas fa-exclamation-triangle"></i> ****  
Papers will be publicly viewable on OpenReview upon submission.  
Authors requiring secrecy of their submitted work should take this into account. -->

|<i class="fas fa-exclamation-triangle"></i>||Reminder|
|:---|:---|:---|
|||Papers will be publicly viewable on OpenReview upon submission.|
|||Authors requiring secrecy of their submitted work should take this into account.|

### Conflicts

When submitting your paper to JSys, you must provide information about conflicts with reviewers on the editorial board.
JSys considers the following cases as conflicts.

- The reviewer is your PhD or post-doc advisor.
- You are currently employed at the same institution, have been previously employed at the same institution within the past two years (not counting concluded internships), or are going to begin employment at the same institution during the reviewing period.
- You have collaborated with the reviewer on a publication, grant, or other academic projects in the past two years.

> Students are conflicted with an institution only when they are doing an internship at that institution. For example, if Jane does an internship with X in summer 2020, and then another internship with X in summer 2021, Jane is free to review papers from X (provided they are not from her direct collaborators) as long as she is not currently doing an internship at X.

Authors _must not_ improperly identify a reviewer as in conflict if none of these circumstances applies; doing so may lead to the work being rejected without review. In particular, note that reviewers are _not_ considered as conflicts if

- They have reviewed the work before, or
- You have discussed the work with them, or
- They are your personal friend.

The Editor-in-Chief and Area Chairs will review paper conflicts to ensure the integrity of the reviewing process, adding or removing conflicts if necessary. If you have any questions about conflicts, please contact the editor-in-chief and area chairs.

## Artifact Evaluation

JSys submissions for the Solution or Tools/Benchmark category must be accompanied by an Artifact.
The JSys Artifact Evaluation Board evaluates whether

- the artifact can be used by a third-party (without author involvement), and
- whether the results in the paper can be reproduced using the artifact.

Artifact Evaluation is single-blind and private (neither artifacts nor the reviews are made public); this is to allow authors to share access to their hardware or testing facility, if required.

The Artifact Evaluation proceeds _in parallel_ of the paper evaluation; to be accepted, Solution and Tools/Benchmark papers **must be accepted by both boards**. Papers accepted by the Editorial Board that fail Artifact Evaluation will be given a revise decision, and will have three months to ensure their artifact passes Artifact Evaluation.

## Revisions and Review Process

There are three possible editorial decisions for a paper submitted to JSys: Accept with shepherding, Revise, or Reject.

<dl>

  <dt>Accept with shepherding</dt>
  <dd>The paper can be accepted with minor edits that can be completed within one month. Thus, authors can submit on February 1st, get an acceptance decision by March 15th, and submit the final manuscript by April 15th. The final manuscript will be made immediately available online.</dd>

  <dt>Revise</dt>
  <dd>The paper needs work that will take more than one month. The authors can submit a revised version anytime in the next three months. A revision submitted on the 1st of a month will get a response by the 1st of the next month.
  If authors submitted on March 1st, and got a Revise decision on April 15th, they can submit by Jul 15th and get a final decision by Aug 15th. 
  <!-- <br/> -->
  A revision is a contract between the authors and the reviewers: as long as the authors complete the requested changes in good faith by the deadline, the paper will be accepted after a quick review. 
  <!-- <br/> -->
  However, the editors reserve the right to reject the paper if additional evidence indicates that the central hypothesis or result of the paper no longer holds.
  <br/>
  <br/>
  The revised manuscript is submitted using the same OpenReview forum used for the initial submission; use the "Revision" button to submit the revision, which must contain two parts:
  <ul>
    <li>A revision plan explaining the changes made, and how they address reviewer concerns;</li>
    <li>The revised manuscript with changes highlighted for easy reviewing.</li>
  </ul>
  </dd>

  <dt>Reject</dt>
  <dd>The paper needs more than three months of work to be accepted to JSys. The authors cannot submit the same work for one year to JSys.
  A rejection decision usually stems from a fundamental mismatch between the work and the journal such as the work is too narrow or out-of-scope. Rejection decisions imply that, even with more experiments or revised writing (that can happen in three months), the paper would not be acceptable for the journal.
  <br/>
  <br/>
  We hope to reduce the number of rejection decisions by being clear about what would be acceptable for the journal.</dd>
</dl>

### Contemporary Work

Any peer-reviewed work that was published (PDF available on the publisher’s website) less than two months prior to the initial submission is considered contemporary with the submission. Reviewers will not penalize the submission for not comparing with contemporary work. However, reviewers may ask for a qualitative comparison to be added in the final version of the submitted work.

### Feedback on Reviews

The three reviews will be graded A/B/C by the authors in terms of helpfulness. These grades are only known to the editors and provide useful feedback about the reviewers.

- A means a constructive review,
- B means an average review, 
- C means a poor review (i.e., the reviewer didn't understand the paper, made a lot of mistakes, was unnecessarily aggressive, etc).

Reviewers with a history of poor reviews will be removed from the editorial board.

### Return without Review

For every paper submitted to JSys, the Editors-in-Chief and Area Chairs will try to find expert reviewers. If they are unsuccessful, or if the relevant Editorial Board members already have been assigned their maximum load for the deadline, the paper will be returned to the authors without review (usually within a week or so).
Authors will be invited to resubmit to the next deadline, in which case their work will be reviewed in priority.

We believe this is a preferable outcome than overloading reviewers (thereby lowering the quality of reviews for everyone) or having paper reviewed by non-expert in a paper's topic. We aim to tailor the editorial board size and expertise to prevent this situation from happening as much as possible.

## Open Access

JSys applies the Creative Commons Attribution-NonCommercial (CC BY-NC) license to all works it publishes.

![CC BY-NC badge](https://licensebuttons.net/l/by-nc/2.0/jp/88x31.png)

Under the CC BY-NC license, authors retain ownership of the
copyright for their work, but authors allow anyone to download, reuse,
reprint, modify, distribute, and/or copy articles in JSys, so
long as the original authors and source are cited and the material is not used for commercial purposes. No permission is required from the authors nor the publisher.
