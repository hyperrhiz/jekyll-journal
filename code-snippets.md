
# Latest publications

{% bibliography --max 3 --sort %}
<br>

# Latest News
<ul class="post-list">
  {% for post in site.posts limit:1 %}
  {% if post.type == "news" %}
  <li>
    <h4>{{ post.title }}
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span></h4>
    {{ post.content }}
  </li>
  {% endif %}
  {% endfor %}
</ul>


<!-- Loop through all members of one area -->
<!-- {% assign members = site.data.areas.students.board | sort: "name" %} -->
<!-- {% for member in members %} -->
<!-- - [{{member.name}}]({{member.webpage}}), {{member.affiliation}}{% endfor %} -->

