// ============================================================

//  JAROPLATINOS — SCRAPER DE PSNPROFILES

//  Uso: node scraper.js <url-de-psnprofiles>

//  Ejemplo: node scraper.js https://psnprofiles.com/trophies/26917-hollow-knight

//

//  Dependencias: npm install axios cheerio

//  El resultado lo añades a js/games-data.js

// ============================================================



const axios  = require('axios');

const cheerio = require('cheerio');

const fs     = require('fs');

const path   = require('path');



const TARGET_URL = process.argv[2];



if (!TARGET_URL || !TARGET_URL.includes('psnprofiles.com')) {

  console.error('❌ Pasa una URL de PSNProfiles como argumento.');

  console.error('   Ejemplo: node scraper.js https://psnprofiles.com/trophies/26917-hollow-knight');

  process.exit(1);

}



const HEADERS = {

  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36',

  'Accept-Language': 'es-ES,es;q=0.9',

  'Accept': 'text/html,application/xhtml+xml'

};



async function scrape(url) {

  console.log(`🔍 Scrapeando: ${url}`);

 

  let html;

  try {

    const res = await axios.get(url, { headers: HEADERS, timeout: 15000 });

    html = res.data;

  } catch (err) {

    console.error('❌ Error al descargar la página:', err.message);

    console.error('   PSNProfiles puede estar bloqueando el acceso. Prueba con una VPN o descarga el HTML manualmente.');

    process.exit(1);

  }



  const $ = cheerio.load(html);



  // Nombre del juego

  const gameTitle = $('h3.game a').first().text().trim() ||

                    $('title').text().split('—')[0].trim() ||

                    'Juego desconocido';



  console.log(`🎮 Juego detectado: ${gameTitle}`);



  const trophies = [];

  let id = 1;



  // PSNProfiles: cada trofeo está en <li> dentro de #content ul.trophies

  $('ul.trophies li').each((_, el) => {

    const li = $(el);



    // Tipo de trofeo por clase

    let type = 'bronze';

    if (li.hasClass('platinum')) type = 'platinum';

    else if (li.hasClass('gold'))    type = 'gold';

    else if (li.hasClass('silver'))  type = 'silver';



    const name = li.find('.title').text().trim();

    const desc = li.find('.details').text().trim();



    if (!name) return; // saltar si no hay nombre



    // Detectar si es perdible por palabras clave en el nombre/descripción

    const missableKeywords = ['missable', 'perdible', 'unmissable', 'miss', 'chapter', 'story'];

    const isMissable = missableKeywords.some(kw =>

      desc.toLowerCase().includes(kw) || name.toLowerCase().includes(kw)

    );



    trophies.push({

      id: `${slugify(gameTitle)}_${String(id).padStart(2,'0')}`,

      chapter: 'Sin clasificar', // PSNP no siempre tiene capítulos; rellenar manualmente

      name,

      desc,

      type,

      missable: isMissable,

      online: desc.toLowerCase().includes('online') || desc.toLowerCase().includes('multiplayer'),

      guide: ''

    });



    id++;

  });



  if (trophies.length === 0) {

    console.warn('⚠️  No se encontraron trofeos. PSNProfiles puede haber cambiado su HTML.');

    console.warn('   Revisa la estructura de la página manualmente y ajusta los selectores.');

  } else {

    console.log(`✅ ${trophies.length} trofeos extraídos.`);

  }



  // Construir objeto de juego

  const gameObj = {

    id: slugify(gameTitle),

    slug: slugify(gameTitle),

    title: gameTitle,

    platform: 'PS5', // cambiar si es PS4

    cover: null,

    emoji: '🎮',

    totalTrophies: trophies.length,

    difficulty: '?/10',

    minHours: 0,

    hasMissable: trophies.some(t => t.missable),

    tags: [],

    trophies

  };



  // Guardar en JSON

  const outPath = path.join(__dirname, `${gameObj.id}-trophies.json`);

  fs.writeFileSync(outPath, JSON.stringify(gameObj, null, 2), 'utf-8');

  console.log(`💾 Guardado en: ${outPath}`);

  console.log('');

  console.log('👉 Copia el objeto al array GAMES en js/games-data.js');

  console.log('👉 Rellena manualmente: chapter, difficulty, minHours, tags, guide');



  return gameObj;

}



function slugify(str) {

  return str

    .toLowerCase()

    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    .replace(/[^a-z0-9]+/g, '-')

    .replace(/^-|-$/g, '');

}



scrape(TARGET_URL).catch(console.error); 

