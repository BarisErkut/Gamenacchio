// Siteyi data.js'teki içerikten oluşturur. Normalde buraya dokunmanıza gerek yok.

const $ = (s) => document.querySelector(s);
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Görsel yoksa oyun adına göre renkli kapak üret
function hue(str) {
  let h = 0;
  for (const ch of str) h = (h * 31 + ch.charCodeAt(0)) % 360;
  return h;
}
function fallbackCover(el, title) {
  const h = hue(title);
  el.outerHTML = `<div class="cover-fallback" style="--h:${h}"><span>${esc(title.charAt(0))}</span></div>`;
}

function renderGames(filter = "all") {
  const list = GAMES.filter((g) => filter === "all" || g.type === filter);
  $("#game-grid").innerHTML = list
    .map(
      (g, i) => `
    <article class="card" style="animation-delay:${i * 60}ms">
      <div class="cover">
        <img src="${esc(g.image)}" alt="${esc(g.title)} screenshot" loading="lazy"
             onerror="fallbackCover(this, ${esc(JSON.stringify(g.title))})" />
        <span class="badge ${g.type}">${g.type === "mobile" ? "📱 Mobile" : "🌐 Web"}</span>
      </div>
      <div class="card-body">
        <div class="card-top">
          <h3>${esc(g.title)}</h3>
          <span class="genre">${esc(g.genre)}</span>
        </div>
        <p>${esc(g.description)}</p>
        <ul class="tags">${(g.tags || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        <div class="links">
          ${g.links
            .map((l) => `<a class="btn small" href="${esc(l.url)}" target="_blank" rel="noopener">Play on ${esc(l.label)} ↗</a>`)
            .join("")}
        </div>
      </div>
    </article>`
    )
    .join("");
}

const ICONS = {
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>',
};

function renderTeam() {
  $("#team-grid").innerHTML = TEAM.map((m, i) => {
    return `
    <article class="member">
      <h3>${esc(m.name)}</h3>
      ${m.role ? `<p class="role">${esc(m.role)}</p>` : ""}
      ${m.bio ? `<p>${esc(m.bio)}</p>` : ""}
      ${m.skills && m.skills.length ? `<ul class="tags">${m.skills.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>` : ""}
      <div class="links">
        ${(m.links || [])
          .map((l) => {
            const key = l.label.toLowerCase();
            return `<a class="social ${esc(key)}" href="${esc(l.url)}" target="_blank" rel="noopener">${ICONS[key] || ""}${esc(l.label)}</a>`;
          })
          .join("")}
      </div>
    </article>`;
  }).join("");
}

function renderContact() {
  $("#contact-list").innerHTML = TEAM.filter((m) => m.email)
    .map(
      (m) => `
    <div class="contact-item">
      <span>${esc(m.name)}</span>
      <a href="mailto:${esc(m.email)}">${esc(m.email)}</a>
    </div>`
    )
    .join("");
}

function renderStats() {
  const platforms = new Set(GAMES.flatMap((g) => g.links.map((l) => l.label)));
  const items = [
    [GAMES.length, "Games shipped"],
    [platforms.size, "Platforms"],
  ];
  $("#stats").innerHTML = items.map(([n, l]) => `<div><strong>${n}</strong><span>${l}</span></div>`).join("");
}

document.querySelectorAll("#filters .chip").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll("#filters .chip").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderGames(btn.dataset.filter);
  })
);

// Studio adı ve e-posta
document.querySelectorAll(".logo, .studio-name").forEach((el) => (el.innerHTML = esc(SITE.studio)));
document.title = `${SITE.studio} | Indie Game Studio`;
$(".footer p").innerHTML = `© ${new Date().getFullYear()} ${esc(SITE.studio)}. All rights reserved.`;

renderStats();
renderGames();
renderTeam();
renderContact();
