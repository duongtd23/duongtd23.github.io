---
layout: page
title: Projects
permalink: /projects/
description: 
nav: true
nav_order: 3
display_categories: [ads, post-quantum, mixed]
horizontal: false
---

<!-- pages/projects.md -->
<h2 style="margin-bottom: revert;"> Autonomous Driving System Verification</h2>
<div class="projects">
{% assign ads_projects = site.projects | where: "category", "ads" %}
{% assign sorted_projects = ads_projects | sort: "importance" %}
<!-- Generate cards for each project -->
{% if page.horizontal %}
<div class="container">
  <div class="row row-cols-1 row-cols-md-2">
  {% for project in sorted_projects %}
    {% include projects_horizontal.liquid %}
  {% endfor %}
  </div>
</div>
{% else %}
<div class="row row-cols-1 row-cols-md-3">
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
{% endif %}

</div>

<h2 style="margin-bottom: revert; margin-top: revert;">Post-Quantum Cryptographic Protocol Analysis</h2>
<div class="projects">
{% assign ads_projects = site.projects | where: "category", "post-quantum" %}
{% assign sorted_projects = ads_projects | sort: "importance" %}
{% if page.horizontal %}
<div class="container">
  <div class="row row-cols-1 row-cols-md-2">
  {% for project in sorted_projects %}
    {% include projects_horizontal.liquid %}
  {% endfor %}
  </div>
</div>
{% else %}
<div class="row row-cols-1 row-cols-md-3">
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
{% endif %}

<h2 style="margin-bottom: revert; margin-top: revert;">Mixed</h2>
<div class="projects">
{% assign ads_projects = site.projects | where: "category", "mixed" %}
{% assign sorted_projects = ads_projects | sort: "importance" %}
{% if page.horizontal %}
<div class="container">
  <div class="row row-cols-1 row-cols-md-2">
  {% for project in sorted_projects %}
    {% include projects_horizontal.liquid %}
  {% endfor %}
  </div>
</div>
{% else %}
<div class="row row-cols-1 row-cols-md-3">
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
{% endif %}

</div>
