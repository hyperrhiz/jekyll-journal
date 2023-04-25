---
permalink: /cfp
---

# Call for Papers

The Journal of Systems Research (JSys) is a diamond open-access (no fees for authors or readers) journal that seeks to publish research that moves the field forward and will be of interest to the systems community. JSys emphasizes rigorous research that improves the state-of-the-art, even if the increment is modest. JSys requires that papers that put forth a new tool, benchmark, or software solution undergo Artifact Evaluation and make their artifact publicly available.

> Please see [here](https://www.jsys.org/instructions) for detailed instructions for authors.

## Aims and Scope

### Areas

JSys currently welcomes submissions in the following areas.  
The links below will take you to the specific call for papers per area.

{% assign areas = site.data.areas.meta.area | sort: "id" %}
{% for area in areas %}{% if area.active == 1 %}
- [{{ area.title}}](/cfp_{{area.id}}/){% endif %}{% endfor %}

### Paper Types

JSys categorizes papers into four types, each with their own publicly-available acceptance criteria. Please click on each paper type to view more details about it.

{% for item in site.data.papers.type %}{% if item.active == 1 %}
- [{{ item.title}}]({{item.url}}){% endif %}{% endfor %}

## Deadlines

JSys has multiple deadlines each year, each set at 11:59 PM GMT.

- March 1st
- May 1st
- August 1st
- October 1st

For each deadline, reviews will be available within 1.5 months.
For example, for a work submitted by March 1st, JSys commits to provide initial reviews by April 15th.

Recent deadlines and their submission portals:
{% for item in site.data.openReview.forums %}{% if item.show == 1 %}
- [{{ item.title}}]({{item.url}}) {% if item.open == 0 %} <span class="text-muted">(closed)</span>{% endif %} {% endif %}{% endfor %}

### Copyright and Originality

All work submitted to JSys must be original work. The authors must have the copyright for the submitted work. Simultaneous submissions are not allowed: any work submitted to JSys must not be under consideration for another workshop, conference, or journal.

<!-- <i class="fas fa-exclamation-triangle"></i> ****  
Papers will be publicly viewable on OpenReview upon submission.  
Authors requiring secrecy of their submitted work should take this into account. -->

|<i class="fas fa-exclamation-triangle"></i>||Reminder|
|:---|:---|:---|
|||Papers will be publicly viewable on OpenReview upon submission.|
|||Authors requiring secrecy of their submitted work should take this into account.|

## Artifact Evaluation

JSys submissions for the Solution or Tools/Benchmark category **must** be accompanied by artifacts that are evaluated by JSys Artifact Evaluation Board.

Refer to the [Artifact Evaluation page](/artifact_evaluation) for details about the evaluation procedure, expectations, and tips for authors.
