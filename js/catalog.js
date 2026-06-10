// ============================================================
//  JAROPLATINOS — CATÁLOGO
// ============================================================

(function () {
  const grid = document.getElementById('games-grid');
  const searchInput = document.getElementById('search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');

  let activeFilter = 'all';
  let searchQuery = '';

  // --- Lógica de Favoritos ---
  window.toggleFav = function(gameId, e) {
    e.preventDefault();
    let favs = JSON.parse(localStorage.getItem('jp_favorites') || '[]');
    if (favs.includes(gameId)) {
      favs = favs.filter(id => id !== gameId);
    } else {
      favs.push(gameId);
    }
    localStorage.setItem('jp_favorites', JSON.stringify(favs));
    renderGrid(); // Recarga la cuadrícula
  };

  function getProgress(game) {
    const saved = JSON.parse(localStorage.getItem('jp_progress_' + game.id) || '{}');
    const done = Object.values(saved).filter(Boolean).length;
    return { done, total: game.trophies.length };
  }

  function renderGrid() {
    const filtered = GAMES_DATA.filter(game => {
      const matchSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      let matchFilter = false;
      if (activeFilter === 'all') matchFilter = true;
      else if (activeFilter === 'ps5') matchFilter = game.platform && game.platform.includes('PS5');
      else if (activeFilter === 'ps4') matchFilter = game.platform && game.platform.includes('PS4');
      else if (activeFilter === 'missable') matchFilter = game.hasMissable === true;
      return matchSearch && matchFilter;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><p>No se encontraron juegos.</p></div>`;
      return;
    }

    // Obtenemos los favoritos actuales
    const favs = JSON.parse(localStorage.getItem('jp_favorites') || '[]');

    grid.innerHTML = filtered.map(game => {
      const { done, total } = getProgress(game);
      const pct = total ? Math.round((done / total) * 100) : 0;
      const missableCount = game.trophies.filter(t => t.missable).length;
      const isFav = favs.includes(game.id);

      const coverHTML = game.cover
        ? `<img src="${game.cover}" alt="${game.title}" loading="lazy">`
        : `<span style="font-size:3rem">${game.emoji}</span>`;

      return `
        <a href="pages/game.html?id=${game.id}" class="game-card">
          <div class="game-cover">
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav('${game.id}', event)">❤️</button>
            ${coverHTML}
            <span class="game-platform-badge">${game.platform}</span>
          </div>
          <div class="game-info">
            <div class="game-title">${game.title}</div>
            <div class="game-meta">
              <span class="trophy-count">🏆 ${game.totalTrophies} trofeos</span>
              ${missableCount > 0
                ? `<span class="missable-count">⚠️ ${missableCount} perdibles</span>`
                : `<span style="font-size:0.75rem;color:#3db870">✓ Sin perdibles</span>`}
            </div>
            <div class="progress-mini">
              <div class="progress-mini-bar">
                <div class="progress-mini-fill" style="width:${pct}%"></div>
              </div>
            </div>
          </div>
        </a>
      `;
    }).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderGrid();
    });
  });

  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    renderGrid();
  });

  renderGrid();
})();