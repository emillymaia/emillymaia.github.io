// Formas decorativas (estrela, brilho, rabisco, arcos, nuvem) usadas com <svg><use href="#..."/></svg>
document.body.insertAdjacentHTML(
  "afterbegin",
  `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <symbol id="star8" viewBox="0 0 100 100">
      <polygon points="50,0 58,30.6 85.4,14.6 69.4,42 100,50 69.4,58 85.4,85.4 58,69.4 50,100 42,69.4 14.6,85.4 30.6,58 0,50 30.6,42 14.6,14.6 42,30.6" fill="currentColor"/>
    </symbol>
    <symbol id="sparkle" viewBox="0 0 100 100">
      <path d="M50 0 L56 44 L100 50 L56 56 L50 100 L44 56 L0 50 L44 44 Z" fill="currentColor"/>
    </symbol>
    <symbol id="coil" viewBox="0 0 220 90">
      <path d="M6 60 C40 60 62 12 40 10 C18 8 26 72 62 72 C98 72 112 12 90 10 C68 8 76 72 112 72 C148 72 162 12 140 10 C118 8 126 72 162 72 C190 72 204 50 214 36"
        fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="arches" viewBox="0 0 160 130">
      <path d="M12 130 C12 20 92 20 92 130 M62 130 C62 20 142 20 142 130"
        fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round"/>
    </symbol>
    <symbol id="loop" viewBox="0 0 140 160">
      <path d="M8 18 C60 14 112 14 118 34 C124 56 60 62 20 58 C70 56 98 74 84 92 C70 110 30 104 18 110 C52 108 70 124 58 140 C48 154 26 152 14 150"
        fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="scallop" viewBox="0 0 300 150" preserveAspectRatio="none">
      <path d="M0 0 H300 V95 A37.5 50 0 0 1 225 95 A37.5 50 0 0 1 150 95 A37.5 50 0 0 1 75 95 A37.5 50 0 0 1 0 95 Z" fill="currentColor"/>
    </symbol>
    <symbol id="blob" viewBox="0 0 200 200">
      <path d="M100 6 C126 6 132 30 152 38 C176 48 196 62 192 92 C188 120 200 140 182 162 C164 184 136 176 116 190 C92 206 72 190 52 178 C28 164 8 152 8 120 C8 92 20 78 24 56 C30 26 70 6 100 6 Z" fill="currentColor"/>
    </symbol>
  </svg>`
);
