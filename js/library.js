(function () {
  const grid = document.getElementById('library-grid');
  
  // Función para quitar favoritos desde la biblioteca
  window.toggleFav = function(gameId, e) {
      e.preventDefault();
      let favs = JSON.parse(localStorage.getItem('jp_favorites') || '[]');
      favs = favs.filter(id => id !== gameId);
      localStorage.setItem('jp_favorites', JSON.stringify(favs));
      renderLibrary(); // Recarga la vista
  };

  function renderLibrary() {
    const favs = JSON.parse(localStorage.getItem('jp_favorites') || '[]');
    const myGames = GAMES_DATA.filter(g => favs.includes(g.id));

    if (myGames.length === 0) {
      grid.innerHTML = `<p style="color:var(--text-muted)">Aún no has marcado ningún juego como favorito. ¡Ve al catálogo!</p>`;
      return;
    }

    grid.innerHTML = myGames.map(game => `
      <a href="game.html?id=${game.id}" class="game-card">
        <div class="game-cover">
          <button class="fav-btn active" onclick="toggleFav('${game.id}', event)">❤️</button>
          <img src="../${game.cover}" alt="${game.title}">
          <span class="game-platform-badge">${game.platform}</span>
        </div>
        <div class="game-info">
          <div class="game-title">${game.title}</div>
        </div>
      </a>
    `).join('');
  }

  renderLibrary();
})();