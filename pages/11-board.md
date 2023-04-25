---
permalink: /board
---

# Editorial board

TODO

- needs some rework too, but won’t change for now
- editorial board member→ Reviewer !

The editorial board of JSys is made of people committed to open access for all, open review, and high-quality feedback.

## Journal Management

### Editors-in-Chief

{% for person in site.data.management.eic %}
- [{{ person.name}}]({{person.webpage}})  
  <small>
    {{person.affiliation}}  
    <i class="fab fa-orcid"></i>   &nbsp; [{{person.orcid}}](https://orcid.org/{{person.orcid}})  
    <i class="fab fa-twitter"></i> &nbsp; [@{{person.twitter}}](https://twitter.com/{{person.twitter}})
  </small>
{% endfor %}

### Assistant Editors

{% assign assistants = site.data.management.assistants | sort: "name" %}

{% for person in assistants %}
- [{{ person.name}}]({{person.webpage}}), {{person.affiliation}}{% endfor %}

### Publicity Chairs

{% assign publicity = site.data.management.publicity | sort: "name" %}

{% for person in publicity %}
- [{{ person.name}}]({{person.webpage}}), {{person.affiliation}}{% endfor %}

## Area Chairs
<!-- Loop through all areas -->
{% assign areas = site.data.areas.meta.area | sort: "id" %}
{% for area in areas %}
{% if area.active == 1 %} <!-- Disable the areas not yet active -->

{% assign active_chairs = site.data.areas[area.id].board.chairs | where_exp: "person", "person.until==0" | sort: "name"%}

<!-- I tried compacting with <summary> but it is not supported by Jekyll by default. Here is how it can be done if we really want it.:
http://movb.de/jekyll-details-support.html -->

### {{area.title}}

{% for chair in active_chairs %}
- [{{ chair.name}}]({{chair.webpage}}), {{chair.affiliation}}{% endfor %}

[Call for papers and reviewers](/cfp_{{area.id}}/)

{% endif %}
{% endfor %}<!-- Loop through all areas -->

### Artifact Evaluation Board

{% for chair in site.data.areas.artifacts.board.chairs %}
- [{{ chair.name}}]({{chair.webpage}}), {{chair.affiliation}}{% endfor %}

[Self-nomination and complete board](/cfp_artifacts/)

### Student Editorial Board

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