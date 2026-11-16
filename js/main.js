// Injeta as 6 faces em todos os cubos 3D
document.querySelectorAll(".cube").forEach((cube) => {
  cube.innerHTML = '<div class="f1"></div><div class="f2"></div><div class="f3"></div><div class="f4"></div><div class="f5"></div><div class="f6"></div>';
});

// Faixa: duplica o conteúdo para o movimento contínuo
const band = document.getElementById("band-track");
if (band) band.innerHTML += band.innerHTML;

// Menu mobile
const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => mobileNav.classList.toggle("open"));
  mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mobileNav.classList.remove("open")));
}

// Cards de projetos
const grid = document.getElementById("projects-grid");
if (grid && typeof PROJECTS !== "undefined") {
  grid.innerHTML = PROJECTS.map(
    (p, i) => `
    <article class="project-row reveal">
      <a class="project-art" href="projeto.html?id=${p.id}" aria-label="${p.title}">
        <svg class="art-blob" aria-hidden="true"><use href="#blob"/></svg>
        ${(typeof ART !== "undefined" && ART[p.art]) || ""}
        <svg class="art-star" aria-hidden="true"><use href="#star8"/></svg>
      </a>
      <div class="project-info">
        <div class="project-num">${String(i + 1).padStart(2, "0")}</div>
        <span class="tag">${p.tag}</span>${p.draft ? '<span class="draft-badge">rascunho</span>' : ""}
        <h3><a href="projeto.html?id=${p.id}">${p.title}</a></h3>
        <p>${p.short}</p>
        <div class="highlight">${p.highlight}</div>
        <div class="stack">${p.stack.map((s) => `<span>${s}</span>`).join("")}</div>
        <a class="btn sm" href="projeto.html?id=${p.id}">Saber mais →</a>
      </div>
    </article>`
  ).join("");
}

// Formulário de contato -> abre o cliente de e-mail (GitHub Pages não tem backend)
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = encodeURIComponent(`Contato pelo portfólio — ${d.get("name")}`);
    const body = encodeURIComponent(`${d.get("message")}\n\n${d.get("name")} · ${d.get("email")}`);
    window.location.href = `mailto:${form.dataset.to}?subject=${subject}&body=${body}`;
  });
}

// Animação de entrada ao rolar
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
