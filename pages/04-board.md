---
layout: page
menutitle: Editorial Board
permalink: /board/
---

# Editorial board

The editorial board of JSys is made of people committed to open access for all, open review, and high-quality feedback.


<!-- TOC depthTo:2 -->

- [Editors-in-Chief](#editors-in-chief)
- [Area Chairs](#area-chairs)
- [Artifact Evaluation Board](#artifact-evaluation-board)
- [Student Editorial Board](#student-editorial-board)
- [Co-Founders](#co-founders)

<!-- /TOC -->

## Editors-in-Chief

{% for item in site.data.eic.list %}
- [{{ item.name}}]({{item.webpage}})  
  <small>
    {{item.affiliation}}  
    <i class="fab fa-orcid"></i>   &nbsp; [{{item.orcid}}](https://orcid.org/{{item.orcid}})  
    <i class="fab fa-twitter"></i> &nbsp; [@{{item.twitter}}](https://twitter.com/{{item.twitter}})
  </small>
{% endfor %}

## Area Chairs

<!-- Loop through all areas -->
{% assign areas = site.data.areas.meta.area | sort: "id" %}
{% for area in areas %}
{% if area.active == 1 %} <!-- Disable the areas not yet active -->

<!-- I tried compacting with <summary> but it is not supported by Jekyll by default. Here is how it can be done if we really want it.:
http://movb.de/jekyll-details-support.html -->

### {{area.title}}

{% for chair in site.data.areas[area.id].board.chairs %}
- [{{ chair.name}}]({{chair.webpage}}), {{chair.affiliation}}{% endfor %}

[Call for paper and complete board](/cfp_{{area.id}}/)

{% endif %}
{% endfor %}<!-- Loop through all areas -->

## Artifact Evaluation Board

{% for chair in site.data.areas.artifacts.board.chairs %}
- [{{ chair.name}}]({{chair.webpage}}), {{chair.affiliation}}{% endfor %}

[Self-nomination and complete board](/cfp_artifacts/)

## Student Editorial Board

{% for chair in site.data.areas.students.board.chairs %}
- [{{ chair.name}}]({{chair.webpage}}), {{chair.affiliation}}{% endfor %}

[Self-nomination and complete board](/cfp_students/)

## Co-Founders

{% for member in site.data.co-founders.list %}
- [{{ member.name}}]({{member.webpage}})  
  <small>
    [<i class="fab fa-orcid"></i>   &nbsp; {{member.orcid}}](https://orcid.org/{{member.orcid}})  
    [<i class="fab fa-twitter"></i> &nbsp; @{{member.twitter}}](https://twitter.com/{{member.twitter}})
  </small>
{% endfor %}