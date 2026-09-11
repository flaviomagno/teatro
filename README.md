# Teatro — Fuenteovejuna 2026

Repositório de trabalho + site público da montagem de **Fuenteovejuna**.

A ideia é que este repositório funcione em duas frentes:

- **produção da peça**: agenda, tarefas, elenco, cenas e decisões;
- **site público**: uma página simples e visual publicada com GitHub Pages.

## Estrutura

```text
.
├── README.md
└── docs/
    ├── _config.yml
    ├── _data/
    │   └── events.yml
    ├── _layouts/
    │   └── default.html
    ├── assets/
    │   ├── css/
    │   │   └── style.css
    │   └── js/
    │       └── site.js
    ├── index.md
    ├── agenda.md
    ├── tarefas.md
    ├── elenco.md
    └── producao.md
```

## Publicar no GitHub Pages

No GitHub:

1. abra **Settings → Pages**;
2. em **Build and deployment**, escolha **Deploy from a branch**;
3. selecione a branch `main`;
4. selecione a pasta `/docs`;
5. salve.

Endereço esperado:

`https://flaviomagno.github.io/teatro/`

## Atualizações rápidas

- Agenda: `docs/_data/events.yml`
- Lista de afazeres: `docs/tarefas.md`
- Elenco: `docs/elenco.md`
- Produção: `docs/producao.md`
- Home: `docs/index.md`

O contador da estreia e o card **Próximo compromisso** são atualizados automaticamente pelo navegador com base na agenda.
