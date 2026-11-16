// Ilustrações dos projetos (SVG inline). Use o campo `art` em projects.js: "flow", "agent" ou "eval".
const PINK = "#f0437a", RED = "#e5243f", PURPLE = "#8b5cf6", CREAM = "#f6e7dc", NODE = "#241a2a", INK = "#3a1840";

const node = (x, y, inner, color = PINK, w = 64, h = 64) =>
  `<g transform="translate(${x} ${y})">
     <rect width="${w}" height="${h}" rx="16" fill="${NODE}" stroke="${color}" stroke-width="2.5"/>
     ${inner}
   </g>`;

const ART = {

  // Certidões: CRM -> fluxo no Make -> tribunais -> anexo de volta no CRM
  certidoes: (() => {
    const court = (x, y, color, label) => `<g transform="translate(${x} ${y})">
      <rect width="58" height="58" rx="14" fill="${NODE}" stroke="${color}" stroke-width="2.5"/>
      <path d="M12 22 L29 11 L46 22 Z" fill="${CREAM}"/>
      <path d="M17 26 V40 M25 26 V40 M33 26 V40 M41 26 V40" stroke="${CREAM}" stroke-width="3" stroke-linecap="round"/>
      <rect x="12" y="43" width="34" height="4" rx="2" fill="${CREAM}"/>
      <text x="72" y="34" font-family="Unbounded, sans-serif" font-size="11" font-weight="700" fill="${color}">${label}</text>
    </g>`;
    const mod = (cx, color, icon) => `<g><circle cx="${cx}" cy="150" r="24" fill="${color}"/>${icon}</g>`;
    return `
  <svg viewBox="0 0 420 300" class="art-svg" aria-hidden="true">
    <g fill="none" stroke-width="3" stroke-linecap="round">
      <path class="flowline" d="M84 150 H106" stroke="${PINK}"/>
      <path d="M154 150 H162 M210 150 H218" stroke="${CREAM}" stroke-opacity="0.5"/>
      <path class="flowline" d="M266 150 C280 150 280 64 296 64" stroke="${PINK}"/>
      <path class="flowline" d="M266 150 H296" stroke="${PURPLE}"/>
      <path class="flowline" d="M266 150 C280 150 280 236 296 236" stroke="${RED}"/>
      <path d="M326 268 C250 300 110 298 52 186" stroke="${CREAM}" stroke-opacity="0.45" stroke-dasharray="4 8"/>
    </g>
    ${node(20, 118, `<circle cx="32" cy="24" r="9" fill="none" stroke="${CREAM}" stroke-width="3"/><path d="M16 50 C16 36 48 36 48 50" fill="none" stroke="${CREAM}" stroke-width="3" stroke-linecap="round"/>`)}
    ${mod(130, PINK, `<path d="M120 150 H140 M130 140 V160" stroke="${CREAM}" stroke-width="3.5" stroke-linecap="round"/>`)}
    ${mod(186, PURPLE, `<path d="M176 144 L186 156 L196 144" fill="none" stroke="${CREAM}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`)}
    ${mod(242, RED, `<path d="M233 150 L240 157 L252 143" fill="none" stroke="${CREAM}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`)}
    ${court(296, 35, PINK, "TRT")}
    ${court(296, 121, PURPLE, "TST")}
    ${court(296, 207, RED, "TJ")}
    <g font-family="Inter, sans-serif" font-size="11" fill="#a59cb0" text-anchor="middle">
      <text x="52" y="104">CRM</text><text x="186" y="196">fluxo no Make</text>
      <text x="190" y="288">certidões anexadas no CRM</text>
    </g>
  </svg>`;
  })(),

  // Minuta automática: documentos -> IA -> contrato preenchido
  minuta: (() => {
    const doc = (x, y, r, color, label) => `<g transform="translate(${x} ${y}) rotate(${r})">
      <rect width="70" height="50" rx="8" fill="${NODE}" stroke="${color}" stroke-width="2.5"/>
      <circle cx="18" cy="22" r="8" fill="${color}"/>
      <path d="M32 18 H58 M32 26 H52 M12 38 H58" stroke="${CREAM}" stroke-width="2.5" stroke-linecap="round"/>
      <text x="35" y="66" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#a59cb0">${label}</text>
    </g>`;
    const lines = [0, 1, 2, 3, 4, 5].map((i) =>
      `<rect x="296" y="${92 + i * 22}" width="${[70, 54, 62, 46, 66, 50][i]}" height="8" rx="4" fill="${i % 2 ? PURPLE : PINK}" class="fill-line" style="animation-delay:${i * 0.35}s"/>`).join("");
    return `
  <svg viewBox="0 0 420 300" class="art-svg" aria-hidden="true">
    <g fill="none" stroke-width="3" stroke-linecap="round">
      <path class="flowline" d="M96 70 C140 70 140 140 166 146" stroke="${PINK}"/>
      <path class="flowline" d="M96 150 H166" stroke="${PURPLE}"/>
      <path class="flowline" d="M96 228 C140 228 140 160 166 154" stroke="${RED}"/>
      <path class="flowline" d="M242 150 H272" stroke="${PINK}"/>
    </g>
    ${doc(22, 40, -6, PINK, "RG / CNH")}
    ${doc(22, 124, 3, PURPLE, "certidões")}
    ${doc(22, 202, -3, RED, "comprovantes")}
    ${node(166, 112, `<path d="M38 10 L43 32 L66 38 L43 44 L38 66 L33 44 L10 38 L33 32 Z" fill="${PINK}"/>`, PINK, 76, 76)}
    <rect x="272" y="44" width="124" height="224" rx="14" fill="${CREAM}"/>
    <text x="334" y="74" text-anchor="middle" font-family="Unbounded, sans-serif" font-size="12" font-weight="800" fill="${INK}">MINUTA</text>
    ${lines}
    <circle cx="380" cy="252" r="22" fill="${PINK}"/>
    <path d="M370 252 L377 259 L391 244" fill="none" stroke="${CREAM}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="204" y="208" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#a59cb0">IA</text>
  </svg>`;
  })(),

  // Esteira de financiamento de veículos: veículo -> orquestrador N8N -> 6 agentes -> aprovado / humano
  veiculos: (() => {
    const bot = (x, y) => `<g transform="translate(${x} ${y})">
      <line x1="18" y1="0" x2="18" y2="7" stroke="${CREAM}" stroke-width="2.5" stroke-linecap="round"/>
      <rect y="6" width="36" height="28" rx="10" fill="${CREAM}"/>
      <rect x="6" y="12" width="24" height="14" rx="6" fill="${INK}"/>
      <circle class="eye" cx="13" cy="19" r="3" fill="${PINK}"/><circle class="eye" cx="23" cy="19" r="3" fill="${PINK}"/>
    </g>`;
    const bots = [[210, 62], [256, 62], [210, 116], [256, 116], [210, 170], [256, 170]].map(([x, y]) => bot(x, y)).join("");
    return `
  <svg viewBox="0 0 420 300" class="art-svg" aria-hidden="true">
    <g fill="none" stroke-width="3" stroke-linecap="round">
      <path class="flowline" d="M80 150 H106" stroke="${PINK}"/>
      <path class="flowline" d="M182 150 H196" stroke="${PINK}"/>
      <path class="flowline" d="M306 150 C326 150 326 92 344 92" stroke="${PINK}"/>
      <path class="flowline" d="M306 150 C326 150 326 208 344 208" stroke="${PURPLE}"/>
    </g>
    ${node(16, 118, `<path d="M12 38 V30 L19 20 H45 L52 30 V38 Z" fill="none" stroke="${CREAM}" stroke-width="3" stroke-linejoin="round"/><circle cx="21" cy="40" r="5" fill="${PINK}"/><circle cx="43" cy="40" r="5" fill="${PINK}"/>`)}
    ${node(106, 112, `<circle cx="18" cy="38" r="7" fill="none" stroke="${CREAM}" stroke-width="3"/><circle cx="40" cy="22" r="7" fill="none" stroke="${CREAM}" stroke-width="3"/><circle cx="40" cy="54" r="7" fill="none" stroke="${CREAM}" stroke-width="3"/><circle cx="60" cy="38" r="7" fill="${PINK}"/><path d="M25 35 L33 26 M25 41 L33 50 M47 24 L54 33 M47 52 L54 43" stroke="${CREAM}" stroke-width="2.5" stroke-linecap="round"/>`, PINK, 76, 76)}
    <rect x="196" y="52" width="110" height="164" rx="22" fill="none" stroke="${PURPLE}" stroke-width="2" stroke-dasharray="6 6"/>
    ${bots}
    ${node(344, 62, `<path d="M17 31 L26 40 L44 21" fill="none" stroke="${CREAM}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`, PINK, 60, 60)}
    ${node(344, 178, `<circle cx="30" cy="22" r="8" fill="none" stroke="${CREAM}" stroke-width="3"/><path d="M15 46 C15 34 45 34 45 46" fill="none" stroke="${CREAM}" stroke-width="3" stroke-linecap="round"/>`, PURPLE, 60, 60)}
    <g font-family="Inter, sans-serif" font-size="11" fill="#a59cb0" text-anchor="middle">
      <text x="48" y="200">veículo</text><text x="144" y="206">orquestrador</text>
      <text x="251" y="236">6 agentes</text>
      <text x="374" y="140">+70% aprovado</text><text x="374" y="256">humano</text>
    </g>
  </svg>`;
  })(),
  // Fluxo estilo N8N: gatilho -> agente IA -> ramificações
  flow: `
  <svg viewBox="0 0 420 300" class="art-svg" aria-hidden="true">
    <g fill="none" stroke-width="3" stroke-linecap="round">
      <path class="flowline" d="M86 150 C110 150 120 150 146 150" stroke="${PINK}"/>
      <path class="flowline" d="M226 150 C262 150 262 82 298 82" stroke="${PURPLE}"/>
      <path class="flowline" d="M226 150 C262 150 262 218 298 218" stroke="${RED}"/>
    </g>
    ${node(22, 118, `<path d="M36 12 L22 36 H32 L28 52 L44 26 H34 Z" fill="${CREAM}"/>`)}
    ${node(146, 110, `<path d="M40 10 L45 34 L70 40 L45 46 L40 70 L35 46 L10 40 L35 34 Z" fill="${PINK}"/>`, PINK, 80, 80)}
    ${node(298, 50, `<rect x="16" y="16" width="32" height="32" rx="3" fill="none" stroke="${CREAM}" stroke-width="3"/><path d="M16 27 H48 M16 38 H48 M30 16 V48" stroke="${CREAM}" stroke-width="2.5"/>`, PURPLE)}
    ${node(298, 186, `<path d="M18 33 L28 43 L47 22" fill="none" stroke="${CREAM}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`, RED)}
    <g font-family="Inter, sans-serif" font-size="11" fill="#a59cb0" text-anchor="middle">
      <text x="54" y="202">gatilho</text><text x="186" y="210">agente IA</text>
      <text x="330" y="134">planilha</text><text x="330" y="270">aprovado</text>
    </g>
    <circle cx="86" cy="150" r="5" fill="${PINK}"/><circle cx="226" cy="150" r="5" fill="${PINK}"/>
    <circle cx="298" cy="82" r="5" fill="${PURPLE}"/><circle cx="298" cy="218" r="5" fill="${RED}"/>
  </svg>`,

  // Robozinho conectado a sistemas
  agent: `
  <svg viewBox="0 0 420 300" class="art-svg" aria-hidden="true">
    <g fill="none" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 8">
      <path d="M170 130 C130 120 120 70 92 70" stroke="${PINK}"/>
      <path d="M250 130 C290 120 300 70 328 70" stroke="${PURPLE}"/>
      <path d="M170 180 C130 190 120 236 92 236" stroke="${RED}"/>
      <path d="M250 180 C290 190 300 236 328 236" stroke="${PINK}"/>
    </g>
    <!-- robô -->
    <g class="bot">
      <line x1="210" y1="78" x2="210" y2="100" stroke="${CREAM}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="210" cy="72" r="9" fill="${PINK}"/>
      <rect x="160" y="100" width="100" height="90" rx="30" fill="${CREAM}"/>
      <rect x="174" y="118" width="72" height="44" rx="18" fill="${INK}"/>
      <circle class="eye" cx="194" cy="140" r="7" fill="${PINK}"/>
      <circle class="eye" cx="226" cy="140" r="7" fill="${PINK}"/>
      <path d="M196 174 Q210 182 224 174" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
      <rect x="150" y="132" width="10" height="26" rx="5" fill="${PURPLE}"/>
      <rect x="260" y="132" width="10" height="26" rx="5" fill="${PURPLE}"/>
    </g>
    <!-- sistemas -->
    ${node(40, 40, `<ellipse cx="32" cy="20" rx="16" ry="6" fill="none" stroke="${CREAM}" stroke-width="2.5"/><path d="M16 20 V44 C16 52 48 52 48 44 V20 M16 32 C16 40 48 40 48 32" fill="none" stroke="${CREAM}" stroke-width="2.5"/>`)}
    ${node(316, 40, `<path d="M20 14 H38 L46 22 V50 H20 Z" fill="none" stroke="${CREAM}" stroke-width="2.5" stroke-linejoin="round"/><path d="M26 32 H40 M26 40 H40" stroke="${CREAM}" stroke-width="2.5"/>`, PURPLE)}
    ${node(40, 204, `<text x="32" y="40" text-anchor="middle" font-family="monospace" font-size="18" font-weight="700" fill="${CREAM}">{ }</text>`, RED)}
    ${node(316, 204, `<path d="M14 18 H50 V40 H30 L20 50 V40 H14 Z" fill="none" stroke="${CREAM}" stroke-width="2.5" stroke-linejoin="round"/>`)}
  </svg>`,

  // Avaliação / observabilidade: painel com gráfico e nota
  eval: `
  <svg viewBox="0 0 420 300" class="art-svg" aria-hidden="true">
    <rect x="40" y="40" width="240" height="190" rx="20" fill="${NODE}" stroke="${PURPLE}" stroke-width="2.5"/>
    <circle cx="64" cy="62" r="5" fill="${RED}"/><circle cx="80" cy="62" r="5" fill="${PINK}"/><circle cx="96" cy="62" r="5" fill="${PURPLE}"/>
    <g>
      <rect class="bar" x="70" y="150" width="26" height="56" rx="6" fill="${PURPLE}"/>
      <rect class="bar" x="110" y="122" width="26" height="84" rx="6" fill="${PINK}"/>
      <rect class="bar" x="150" y="136" width="26" height="70" rx="6" fill="${RED}"/>
      <rect class="bar" x="190" y="100" width="26" height="106" rx="6" fill="${PINK}"/>
      <rect class="bar" x="230" y="112" width="26" height="94" rx="6" fill="${PURPLE}"/>
    </g>
    <path d="M70 128 L120 100 L160 112 L204 80 L250 90" fill="none" stroke="${CREAM}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- nota -->
    <circle cx="320" cy="200" r="58" fill="${CREAM}"/>
    <circle cx="320" cy="200" r="42" fill="none" stroke="${INK}" stroke-opacity="0.2" stroke-width="10"/>
    <circle cx="320" cy="200" r="42" fill="none" stroke="${PINK}" stroke-width="10" stroke-linecap="round" stroke-dasharray="243 264" transform="rotate(-90 320 200)"/>
    <text x="320" y="206" text-anchor="middle" font-family="Unbounded, sans-serif" font-size="18" font-weight="800" fill="${INK}">0.92</text>
    <!-- check -->
    <circle cx="330" cy="70" r="26" fill="${PINK}"/>
    <path d="M318 70 L327 79 L343 61" fill="none" stroke="${CREAM}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
};
