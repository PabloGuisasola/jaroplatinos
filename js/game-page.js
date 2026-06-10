// ============================================================
//  JAROPLATINOS — PÁGINA DE JUEGO (Checklist + Comentarios)
// ============================================================

(function () {
  // --- Obtener juego de la URL ---
  const params = new URLSearchParams(location.search);
  const gameId = params.get('id');
  const game = (window.GAMES_DATA || []).find(g => g.id === gameId);

  if (!game) {
    document.getElementById('game-header').innerHTML =
      `<div class="empty-state"><p>Juego no encontrado. <a href="../index.html">Volver al catálogo</a></p></div>`;
    return;
  }

  document.title = `JaroPlatinos — ${game.title}`;

  // Enlace al foro
  const forumLink = document.getElementById('nav-forum-link');
  if (forumLink) forumLink.href = `forum.html?id=${game.id}`;

  // --- Progreso guardado ---
  const STORAGE_KEY = 'jp_progress_' + game.id;
  const COMMENTS_KEY = 'jp_comments_' + game.id;

  let progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  let allComments = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '{}');

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function saveComments() {
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(allComments));
  }

  function getUser() {
    return JSON.parse(localStorage.getItem('jp_user') || 'null');
  }

  function countDone() {
    return game.trophies.filter(t => progress[t.id]).length;
  }

  // --- CABECERA DEL JUEGO ---
  function renderHeader() {
    const done = countDone();
    const total = game.trophies.length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    const missableCount = game.trophies.filter(t => t.missable).length;

    // AÑADE ESTO: Si game.cover tiene valor, usamos '../' para salir de /pages/
    const coverHTML = game.cover
        ? `<img src="../${game.cover}" alt="${game.title}" onerror="this.style.display='none'">`
        : `<span style="font-size:3rem;display:flex;align-items:center;justify-content:center;height:100%">${game.emoji}</span>`;

    document.getElementById('game-header').innerHTML = `
        <div class="game-cover-large">${coverHTML}</div>
        <div class="game-header-info">
            <h1>${game.title}</h1>
            <div class="game-stats-row">
                <span class="stat-chip"><strong>${game.platform}</strong></span>
                <span class="stat-chip">🏆 <strong>${game.totalTrophies}</strong> trofeos totales</span>
                <span class="stat-chip">⏱ <strong>~${game.minHours}h</strong> mínimo</span>
                <span class="stat-chip">⚡ Dificultad <strong>${game.difficulty}</strong></span>
                ${missableCount > 0
                    ? `<span class="stat-chip" style="color:var(--missable)">⚠️ <strong>${missableCount}</strong> perdibles</span>`
                    : `<span class="stat-chip" style="color:var(--success)">✅ Sin perdibles</span>`}
            </div>
            <div class="big-progress">
                <div class="big-progress-label">
                    <span>Tu progreso</span>
                    <span id="progress-label-pct">${pct}% — ${done}/${total} marcados</span>
                </div>
                <div class="big-progress-bar">
                    <div class="big-progress-fill" id="progress-fill" style="width:${pct}%"></div>
                </div>
            </div>
        </div>
    `;
}

  function updateProgressUI() {
    const done = countDone();
    const total = game.trophies.length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    const fill = document.getElementById('progress-fill');
    const label = document.getElementById('progress-label-pct');
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = `${pct}% — ${done}/${total} marcados`;
  }

  // --- TIPO DE TROFEO ---
  const TROPHY_ICONS = {
    platinum: '🏅',
    gold: '🥇',
    silver: '🥈',
    bronze: '🥉'
  };

  // --- LISTA DE TROFEOS por capítulos ---
  function renderTrophyList() {
    const container = document.getElementById('trophy-list');
    const chapters = {};

    game.trophies.forEach(t => {
      if (!chapters[t.chapter]) chapters[t.chapter] = [];
      chapters[t.chapter].push(t);
    });

    let html = '';
    for (const [chapter, trophies] of Object.entries(chapters)) {
      html += `
        <div class="chapter-group">
          <div class="chapter-title">${chapter}</div>
          ${trophies.map(t => buildTrophyCard(t)).join('')}
        </div>
      `;
    }

    container.innerHTML = html;
    attachTrophyEvents();
  }

  function buildTrophyCard(t) {
    const isDone = !!progress[t.id];
    const commentCount = (allComments[t.id] || []).length;
    const icon = TROPHY_ICONS[t.type] || '🥉';

    const tags = [
      t.missable ? `<span class="tag tag-missable">⚠️ Perdible</span>` : '',
      t.online ? `<span class="tag tag-online">🌐 Online</span>` : '',
      `<span class="tag tag-chapter">${t.chapter}</span>`
    ].filter(Boolean).join('');

    const guideHTML = t.guide
      ? `<div style="margin-top:8px;padding:8px 10px;background:rgba(0,114,245,0.07);border-radius:6px;border-left:3px solid var(--psn-blue);font-size:0.82rem;color:var(--text-muted)">💡 ${t.guide}</div>`
      : '';

    return `
      <div class="trophy-card${isDone ? ' is-done' : ''}" data-trophy-id="${t.id}">
        <div class="trophy-card-main">
          <div class="trophy-checkbox-custom">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="2,6 5,9 10,3"/>
            </svg>
          </div>
          <div class="trophy-type-icon">${icon}</div>
          <div class="trophy-card-info">
            <div class="trophy-name">${t.name}</div>
            <div class="trophy-desc">${t.desc}</div>
            <div class="trophy-tags">${tags}</div>
            ${guideHTML}
          </div>
          <div class="trophy-actions">
            <button class="btn-comments" data-trophy-id="${t.id}">
              💬 ${commentCount > 0 ? commentCount : ''}
            </button>
          </div>
        </div>
        <div class="comments-section" id="comments-${t.id}">
          ${buildCommentsHTML(t.id)}
        </div>
      </div>
    `;
  }

  function buildCommentsHTML(trophyId) {
    const comments = allComments[trophyId] || [];
    const user = getUser();

    const listHTML = comments.length === 0
      ? `<p style="font-size:0.82rem;color:var(--text-faint);margin-bottom:12px">Sé el primero en comentar este trofeo.</p>`
      : `<div class="comment-list">
          ${comments.map(c => `
            <div class="comment-item">
              <div class="comment-avatar">${c.username.slice(0,2).toUpperCase()}</div>
              <div class="comment-body">
                <div class="comment-username">${c.username}</div>
                <div class="comment-text">${escapeHTML(c.text)}</div>
                <div class="comment-time">${c.time}</div>
              </div>
            </div>
          `).join('')}
        </div>`;

    const inputHTML = user
      ? `<div class="comment-input-row">
          <input class="comment-input" data-trophy-id="${trophyId}" placeholder="Escribe un consejo o pregunta..." maxlength="300">
          <button class="btn-send" data-trophy-id="${trophyId}">Enviar</button>
        </div>`
      : `<p style="font-size:0.82rem;color:var(--text-muted)">
          <a href="login.html" style="color:var(--psn-blue-glow)">Inicia sesión</a> para comentar.
        </p>`;

    return listHTML + inputHTML;
  }

  function escapeHTML(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // --- EVENTOS ---
  function attachTrophyEvents() {
    const list = document.getElementById('trophy-list');

    // Toggle checkbox
    list.addEventListener('click', e => {
      const card = e.target.closest('.trophy-card-main');
      if (!card) return;
      if (e.target.closest('.btn-comments')) return;

      const trophyId = card.closest('.trophy-card').dataset.trophyId;
      progress[trophyId] = !progress[trophyId];
      saveProgress();

      const cardEl = card.closest('.trophy-card');
      cardEl.classList.toggle('is-done', !!progress[trophyId]);
      updateProgressUI();
    });

    // Toggle comments
    list.addEventListener('click', e => {
      const btn = e.target.closest('.btn-comments');
      if (!btn) return;
      const trophyId = btn.dataset.trophyId;
      const section = document.getElementById('comments-' + trophyId);
      section.classList.toggle('open');
      btn.classList.toggle('active');
    });

    // Enviar comentario
    list.addEventListener('click', e => {
      const sendBtn = e.target.closest('.btn-send');
      if (!sendBtn) return;
      const trophyId = sendBtn.dataset.trophyId;
      const input = list.querySelector(`.comment-input[data-trophy-id="${trophyId}"]`);
      if (!input || !input.value.trim()) return;

      const user = getUser();
      if (!user) return;

      if (!allComments[trophyId]) allComments[trophyId] = [];
      allComments[trophyId].push({
        username: user.username,
        text: input.value.trim(),
        time: new Date().toLocaleDateString('es-ES', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
      });
      saveComments();

      const section = document.getElementById('comments-' + trophyId);
      section.innerHTML = buildCommentsHTML(trophyId);
      attachSendEvents(section, trophyId);

      const commentBtn = list.querySelector(`.btn-comments[data-trophy-id="${trophyId}"]`);
      if (commentBtn) {
        const count = allComments[trophyId].length;
        commentBtn.innerHTML = `💬 ${count}`;
      }
    });
  }

  function attachSendEvents(section, trophyId) {
    // No necesario — delegación en attachTrophyEvents
  }

  // --- INIT ---
  renderHeader();
  renderTrophyList();

  // Sesión simulada (hasta integrar PSN OAuth real)
  const user = getUser();
  const navUsername = document.getElementById('nav-username');
  if (user && navUsername) {
    navUsername.textContent = user.username;
  }

})();
