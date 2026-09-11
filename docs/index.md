---
layout: default
description: Fuenteovejuna — montagem teatral em Florianópolis, 2026.
---

<section class="hero">
<div class="wrap hero-grid">
<div>
<p class="eyebrow">Montagem teatral · 2026</p>
<h1>Fuente<br>ovejuna</h1>
<p class="subtitle">Uma aldeia. Uma tirania. Uma resposta coletiva.</p>
<div class="pills"><span class="pill">Florianópolis</span><span class="pill">Teatro Sesc Prainha</span><span class="pill">Estreia · 16 out</span></div>
</div>
<aside class="count" data-countdown="2026-10-16T19:00:00-03:00">
<p class="eyebrow" data-label>Contagem para a estreia</p>
<div class="count-grid">
<div class="unit"><strong data-unit="days">--</strong><span>dias</span></div>
<div class="unit"><strong data-unit="hours">--</strong><span>horas</span></div>
<div class="unit"><strong data-unit="minutes">--</strong><span>min</span></div>
<div class="unit"><strong data-unit="seconds">--</strong><span>seg</span></div>
</div>
</aside>
</div>
</section>

<section class="section"><div class="wrap grid2">
<article id="next-event" class="card next"><p class="eyebrow">Próximo compromisso</p><h2>Carregando agenda…</h2></article>
<article class="card"><p class="eyebrow">Agora</p><h2>Prioridade da montagem</h2><p>Finalizar e consolidar o <strong>terceiro ato</strong>, junto com as amarrações técnicas para a temporada.</p><a class="button" href="{{ '/tarefas/' | relative_url }}">Abrir checklist</a></article>
</div></section>

<section class="section"><div class="wrap">
<p class="eyebrow">Produção</p><h2 class="title">Painel rápido</h2>
<div class="grid3">
<article class="card"><h3>Cena</h3><div class="row"><span>1º e 2º atos</span><span class="status green">encaminhados</span></div><div class="row"><span>3º ato</span><span class="status red">prioridade</span></div></article>
<article class="card"><h3>Visual</h3><div class="row"><span>Figurino</span><span class="status">andamento</span></div><div class="row"><span>Caracterização</span><span class="status">andamento</span></div></article>
<article class="card"><h3>Técnica</h3><div class="row"><span>Luz e som</span><span class="status">a fechar</span></div><div class="row"><span>Ensaio geral</span><span class="status red">pendente</span></div></article>
</div>
</div></section>

<section class="section"><div class="wrap">
<p class="eyebrow">Temporada</p><h2 class="title">Apresentações</h2>
<div class="grid2">
{% for event in site.data.events %}{% if event.kind == "apresentacao" %}
<article class="card"><p class="eyebrow">{{ event.weekday }}</p><h3>{{ event.display_date }} · {{ event.time }}</h3><p>{{ event.place }}<br><strong>{{ event.note }}</strong></p></article>
{% endif %}{% endfor %}
</div>
</div></section>

<section class="quote"><strong>“Fuenteovejuna.”</strong><p>Uma só resposta</p></section>

<script type="application/json" id="events-json">[
{% for event in site.data.events %}
{"title":{{ event.title | jsonify }},"date":{{ event.date | date_to_xmlschema | jsonify }},"display_date":{{ event.display_date | jsonify }},"time":{{ event.time | jsonify }},"place":{{ event.place | jsonify }},"note":{{ event.note | jsonify }}}{% unless forloop.last %},{% endunless %}
{% endfor %}
]</script>
