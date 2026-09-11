---
layout: default
title: Agenda
---

<section class="pagehead"><div class="wrap"><p class="eyebrow">Montagem 2026</p><h1>Agenda</h1><p>Ensaios extras e apresentações. O grupo também mantém os ensaios regulares de sexta-feira.</p></div></section>

<div class="prose">

> **Apresentações:** chegada do elenco **2 horas antes**.

<div class="events">
{% for event in site.data.events %}
<article class="event {% if event.kind == 'apresentacao' %}show{% endif %}" data-event-date="{{ event.date | date_to_xmlschema }}">
<div class="event-date">{{ event.display_date }}</div>
<div><h3>{{ event.title }}</h3><p>{{ event.weekday }} · {{ event.place }}{% if event.note != "" %} · {{ event.note }}{% endif %}</p></div>
<div class="event-time">{{ event.time }}</div>
</article>
{% endfor %}
</div>

## Local das apresentações

**Teatro Sesc Prainha**  
Tv. Siríaco Atherino — Centro, Florianópolis.

</div>
