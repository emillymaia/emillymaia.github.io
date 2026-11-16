# Portfólio — Emilly Maia

Site estático (HTML + CSS + JS puro), pronto para o GitHub Pages.

## Estrutura

```
index.html        Página principal (hero, sobre, projetos, skills, experiência, contato)
projeto.html      Página de detalhe — lê ?id=<id do projeto>
css/style.css     Estilos
js/projects.js    ⭐ Dados de todos os projetos (edite aqui)
js/main.js        Cubos 3D, cards, menu, animações, formulário
js/project.js     Monta a página de detalhe
assets/           Imagens (ex.: assets/foto.jpg)
```

## Rodar localmente

```bash
cd portfolio && python3 -m http.server 5500
```

Abra http://localhost:5500

## Adicionar um projeto

Copie um objeto em `js/projects.js`, troque o `id` e preencha os campos.
O card e a página `projeto.html?id=...` aparecem automaticamente.
