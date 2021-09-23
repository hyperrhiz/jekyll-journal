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

<!-- It is composed for three independent groups,

- [Area Chairs](#area-boards)
- [Artifact evaluation board](#artifact-evaluation-board)
- [Student editorial board](#student-editorial-board)

which are coordinated by the journal's [Editors-in-Chief](#editors-in-chief).  -->

<!-- > JSys is forever grateful for the initial work of its [co-founders](#co-founders). -->

## Editors-in-Chief

{% for item in site.data.board_eic.list %}
- [{{ item.name}}]({{item.webpage}})  
  <small>
    {{item.affiliation}}  
    <i class="fab fa-orcid"></i>   &nbsp; {{item.orcid}}  
    <i class="fab fa-twitter"></i> &nbsp; {{item.twitter}}
  </small>
{% endfor %}

{{site.data.board_eic.textbloc}}

## Area Chairs

<!-- Loop through all areas -->
{% for area in site.data.areas.area %}
{% if area.active == 1 %} <!-- Disable the areas not yet active -->

<!-- I tried compacting with <summary> but it is not supported by Jekyll by default. Here is how it can be done if we really want it.:
http://movb.de/jekyll-details-support.html -->

### {{area.title}}

{% for chair in site.data[area.board].chairs %}
- [{{ chair.name}}]({{chair.webpage}}), {{chair.affiliation}}{% endfor %}

[Complete board](/board/)

<!-- Loop through all members of one area -->
<!-- {% assign members = site.data[area.board].board | sort: "name" %} -->
<!-- {% for member in members %} -->
<!-- - [{{member.name}}]({{member.webpage}}), {{member.affiliation}}{% endfor %} -->

{% endif %}
{% endfor %}<!-- Loop through all areas -->

## Artifact Evaluation Board

<!-- _WiP_--This section of the website is still under development.  
In the meantime, you can find the [JSys artifact evaluation board members listed here.](https://escholarship.org/uc/jsys/aeb) -->

{% for chair in site.data.board_artifacts.chairs %}
- [{{ chair.name}}]({{chair.webpage}}), {{chair.affiliation}}{% endfor %}

[Complete board](/board/)

<!-- Loop through all members of one area -->
<!-- {% assign members = site.data.board_artifacts.board | sort: "name" %} -->
<!-- {% for member in members %} -->
<!-- - [{{member.name}}]({{member.webpage}}), {{member.affiliation}}{% endfor %} -->

## Student Editorial Board

{% for chair in site.data.board_students.chairs %}
- [{{ chair.name}}]({{chair.webpage}}), {{chair.affiliation}}{% endfor %}

[Complete board](/board/)

<!-- Loop through all members of one area -->
<!-- {% assign members = site.data.board_students.board | sort: "name" %} -->
<!-- {% for member in members %} -->
<!-- - [{{member.name}}]({{member.webpage}}), {{member.affiliation}}{% endfor %} -->


## Co-Founders

{% for member in site.data.co-founders.list %}
- [{{ member.name}}]({{member.webpage}})  
  <small>
    <i class="fab fa-orcid"></i>   &nbsp; {{member.orcid}}  
    <i class="fab fa-twitter"></i> &nbsp; {{member.twitter}}
  </small>
{% endfor %}