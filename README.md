# JaroPlatinos 🏆

Tracker interactivo de trofeos de PlayStation, sin spoilers, con chat y foros de comunidad.

## Estructura del proyecto

```
jaroplatinos/
├── index.html              ← Catálogo de juegos
├── css/
│   └── main.css            ← Estilos globales
├── js/
│   ├── games-data.js       ← Datos de todos los juegos y trofeos
│   ├── catalog.js          ← Lógica del catálogo (búsqueda, filtros)
│   └── game-page.js        ← Lógica de la página de trofeos
├── pages/
│   ├── game.html           ← Checklist de trofeos (con comentarios)
│   ├── forum.html          ← Foro por juego
│   ├── chat.html           ← Chat global de la comunidad
│   └── login.html          ← Login (PSN OAuth / temporal)
└── scraper/
    └── scraper.js          ← Scraper de PSNProfiles (Node.js)
```

## Deploy gratuito en GitHub Pages

1. Sube la carpeta a un repositorio de GitHub
2. Ve a Settings → Pages → Source: `main` / `root`
3. La web estará en `https://TU_USUARIO.github.io/jaroplatinos`

## Añadir juegos con el scraper

```bash
cd scraper
npm install axios cheerio
node scraper.js https://psnprofiles.com/trophies/XXXXX-nombre-del-juego
```

El scraper genera un `.json` que copias al array `GAMES` en `js/games-data.js`.

**Campos a rellenar manualmente tras el scrape:**
- `chapter` — el capítulo al que pertenece cada trofeo
- `guide` — consejo o advertencia específica
- `difficulty` — dificultad estimada del platino
- `minHours` — horas mínimas aproximadas
- `missable: true` — marcar los trofeos perdibles

## Fases siguientes (Supabase)

Cuando quieras pasar a backend real:

1. Crea cuenta gratis en [supabase.com](https://supabase.com)
2. Crea las tablas: `users`, `progress`, `comments`, `forum_threads`, `chat_messages`
3. Activa PSN OAuth en Authentication → Providers → PlayStation Network
4. Sustituye los `localStorage` por llamadas a la API de Supabase
5. Activa `supabase.channel()` para el chat en tiempo real

## Estado actual

| Funcionalidad | Estado |
|---|---|
| Catálogo con búsqueda y filtros | ✅ |
| Checklist de trofeos por capítulo | ✅ |
| Progreso guardado localmente | ✅ |
| Comentarios por trofeo | ✅ (localStorage) |
| Foro por juego | ✅ (localStorage) |
| Chat global | ✅ (localStorage) |
| Login temporal | ✅ |
| Login PSN OAuth real | ⏳ (requiere Supabase) |
| Progreso en la nube | ⏳ (requiere Supabase) |
| Perfiles públicos PSN | ⏳ (requiere Supabase) |
| Scraper PSNProfiles | ✅ |
