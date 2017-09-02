---
layout: default
---

<nav class="table-of-contents">
    <h2>Spis treści</h2>
    <ol>
        {% for section in site.categories.section reversed %}
            <li><a href="#{% if section.link %}{{ section.link }}{% else %}{{ section.title | strip_html | slugify }}{% endif %}">{{ section.title | strip_html }}</a></li>
        {% endfor %}
    </ol>
</nav>
{% for section in site.categories.section reversed %}
<section class="panel panel-content">
    <h2 id="{% if section.link %}{{ section.link }}{% else %}{{ section.title | strip_html | slugify }}{% endif %}">{{ section.title }}</h2>
    {{ section.content }}
</section>
{% endfor %}