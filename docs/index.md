---
layout: default
description: Fuenteovejuna — montagem teatral em Florianópolis, 2026.
---

<section class="hero">
<div class="wrap hero-grid">
<div>
<p class="eyebrow">Montagem teatral · 2026</p>
<h1>Fuenteovejuna</h1>
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

<section class="section poster-section">
<div class="wrap poster-grid">
<figure class="poster-frame">
<img src="{{ '/assets/images/cartaz-fuenteovejuna.png' | relative_url }}" alt="Cartaz de Fuenteovejuna com as datas das apresentações no Teatro Sesc Prainha">
</figure>
<div class="poster-copy">
<p class="eyebrow">Espetáculo teatral</p>
<h2 class="poster-slogan">É DE TODOS.<br>POR TODAS.</h2>
<p class="poster-lead">Onde um responde por todos, todos respondem por um.</p>
<div class="poster-dates">
<span><strong>16/10</strong> · sexta · 19h</span>
<span><strong>17/10</strong> · sábado · 18h</span>
<span><strong>20/10</strong> · terça · 19h</span>
<span><strong>24/10</strong> · sábado · 19h</span>
</div>
<p><strong>Teatro Sesc Prainha</strong><br>Tv. Siríaco Atherino, 100 · Centro · Florianópolis</p>
</div>
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
<article class="card"><h3>Objetos</h3><div class="row"><span>Besta e chicote</span><span class="status green">disponíveis</span></div><div class="row"><span>Demais adereços</span><span class="status">a providenciar</span></div></article>
<article class="card"><h3>Técnica</h3><div class="row"><span>Luz e som</span><span class="status">a fechar</span></div><div class="row"><span>Ensaio geral</span><span class="status red">pendente</span></div></article>
</div>
</div></section>

<section class="section"><div class="wrap">
<p class="eyebrow">Bastidores</p><h2 class="title">Produção prática</h2>
<div class="grid3">
<article class="card"><h3>Checklist de objetos</h3><p>Todos os elementos de cena organizados por cena e função: presentes, armas, bar, tortura, revolta e cena final.</p><a class="button" href="{{ '/objetos/' | relative_url }}">Ver objetos</a></article>
<article class="card"><h3>Alternativas artesanais</h3><p>Soluções baratas, reutilizáveis e seguras para criar os objetos com boa leitura da plateia.</p><a class="button" href="{{ '/alternativas/' | relative_url }}">Ver soluções</a></article>
<article class="card"><h3>Produção</h3><p>Decisões de segurança, linguagem visual, terceiro ato, interrogatório, caracterização e técnica.</p><a class="button" href="{{ '/producao/' | relative_url }}">Abrir produção</a></article>
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

<section class="quote"><strong>É DE TODOS. POR TODAS.</strong><p>Fuenteovejuna</p></section>

<script type="application/json" id="events-json">[
{% for event in site.data.events %}
{"title":{{ event.title | jsonify }},"date":{{ event.date | date_to_xmlschema | jsonify }},"display_date":{{ event.display_date | jsonify }},"time":{{ event.time | jsonify }},"place":{{ event.place | jsonify }},"note":{{ event.note | jsonify }}}{% unless forloop.last %},{% endunless %}
{% endfor %}
]</script>
