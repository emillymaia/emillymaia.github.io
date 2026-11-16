// Renderiza a página de detalhe a partir de ?id=... usando os dados de projects.js
(function () {
  const root = document.getElementById("project-root");
  const id = new URLSearchParams(location.search).get("id");
  const idx = PROJECTS.findIndex((p) => p.id === id);
  const p = PROJECTS[idx];

  if (!p) {
    root.innerHTML = `
      <section class="project-hero">
        <a class="back" href="index.html#projetos">← Voltar aos projetos</a>
        <h1>Projeto não encontrado</h1>
        <p class="summary">Esse projeto não existe ou foi removido.</p>
      </section>`;
    return;
  }

  document.title = `${p.title} · Emilly Maia`;
  const paras = (arr) => (arr || []).map((t) => `<p>${t}</p>`).join("");
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  root.innerHTML = `
    <section class="project-hero reveal">
      <a class="back" href="index.html#projetos">← Voltar aos projetos</a>
      <div class="tag">${p.tag}</div>
      <h1>${p.title}</h1>
      <p class="summary">${p.summary}</p>
      <div class="project-meta">
        ${p.company ? `<div><small>Empresa</small>${p.company}</div>` : ""}
        ${p.squad ? `<div><small>Squad</small>${p.squad}</div>` : ""}
        ${p.period ? `<div><small>Período</small>${p.period}</div>` : ""}
        ${p.role ? `<div><small>Meu papel</small>${p.role}</div>` : ""}
      </div>
    </section>

    <div class="project-body">
      <article>
        <section class="reveal"><h2>Contexto</h2>${paras(p.context)}</section>
        <section class="reveal"><h2>O problema</h2>${paras(p.problem)}</section>
        <section class="reveal">
          <h2>${p.howTitle || "Como atuei com IA"}</h2>
          <div class="ai-steps">
            ${(p.aiRole || []).map((s) => `<div class="ai-step"><h4>${s.title}</h4><p>${s.text}</p></div>`).join("")}
          </div>
        </section>
        <section class="reveal">
          <h2>Resultados</h2>
          <div class="metrics">
            ${(p.results || []).map((r) => `<div class="stat"><strong>${r.value}</strong><span>${r.label}</span></div>`).join("")}
          </div>
          ${p.resultsNote ? `<p style="margin-top:18px">${p.resultsNote}</p>` : ""}
        </section>
        ${p.learnings && p.learnings.length ? `
        <section class="reveal">
          <h2>Aprendizados</h2>
          <ul class="list">${p.learnings.map((l) => `<li>${l}</li>`).join("")}</ul>
        </section>` : ""}
      </article>

      <aside>
        <div class="side-card reveal">
          ${(typeof ART !== "undefined" && ART[p.art]) ? `<div class="side-art">${ART[p.art]}</div>` : ""}
          <h4>Stack & ferramentas</h4>
          <div class="stack">${p.stack.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
          <h4>Destaque</h4>
          <p style="margin-bottom:20px">${p.highlight}</p>
          <p class="note">Projeto privado: detalhes técnicos e dados sensíveis foram omitidos por confidencialidade.</p>
        </div>
      </aside>
    </div>

    ${PROJECTS.length > 1 ? `
    <nav class="project-nav">
      <a href="projeto.html?id=${prev.id}"><small>← Anterior</small>${prev.title}</a>
      <a class="next" href="projeto.html?id=${next.id}"><small>Próximo →</small>${next.title}</a>
    </nav>` : ""}
  `;
})();
