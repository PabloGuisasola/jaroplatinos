// ============================================================
//  JAROPLATINOS — DATOS DE JUEGOS Y TROFEOS
//  Poblar con scraper (scraper/psn-scraper.js) o manualmente
// ============================================================

const GAMES = [
 {
    id: "hollow-knight",
    slug: "hollow-knight",
    title: "Hollow Knight",
    platform: "PS4 / PS5",
    cover: "img/hollow-knight.jpg",
    emoji: "🐛",
    totalTrophies: 35,
    difficulty: "9/10",
    minHours: 50,
    hasMissable: true,
    tags: ["metroidvania", "soulslike", "indie", "plataformas"],
    trophies: [
      // PLATINO
      { id: "hk_01", chapter: "Platino", name: "Corazón del Vacío", desc: "Consigue todos los trofeos.", type: "platinum", missable: false, online: false, guide: "El platino definitivo. Requiere superar el Panteón de Hallownest, uno de los retos más difíciles de los videojuegos." },

      // FINS ET HISTOIRE (Attention au manquable)
      { id: "hk_02", chapter: "Finales (Perdible)", name: "El Hollow Knight", desc: "Derrota al Hollow Knight y conviértete en la Vasija.", type: "silver", missable: true, online: false, guide: "¡MUY PERDIBLE! Debes derrotar al jefe final (Hollow Knight) ANTES de conseguir el amuleto 'Corazón del Vacío'. Si lo consigues antes, este final se bloquea para siempre en esta partida." },
      { id: "hk_03", chapter: "Finales", name: "Hermanos Sellados", desc: "Derrota al Hollow Knight junto a Hornet.", type: "silver", missable: false, online: false, guide: "Requiere el amuleto 'Corazón del Vacío'. Cuando Hornet intervenga en la pelea final, NO uses el Aguijón Onírico en el jefe, simplemente sigue golpeándolo." },
      { id: "hk_04", chapter: "Finales", name: "No más sueños", desc: "Derrota al Destello y consume la luz.", type: "gold", missable: false, online: false, guide: "Requiere el amuleto 'Corazón del Vacío'. Cuando Hornet intervenga, golpéala con el Aguijón Onírico para entrar a la verdadera pelea final contra El Destello." },
      { id: "hk_05", chapter: "Finales", name: "Paso de la era", desc: "Ayuda a Señor Seta a seguir adelante.", type: "bronze", missable: false, online: false, guide: "Equipa el amuleto 'Seta con esporas' y habla con el Señor Seta en sus 7 ubicaciones en orden. Al terminar el juego, verás una escena post-créditos." },

      // BOSS DE L'HISTOIRE
      { id: "hk_06", chapter: "Jefes", name: "Falso Caballero", desc: "Derrota al Falso Caballero.", type: "bronze", missable: false, online: false, guide: "Jefe de los Cruces Olvidados." },
      { id: "hk_07", chapter: "Jefes", name: "Prueba de resolución", desc: "Derrota a Hornet en Sendero Verde.", type: "bronze", missable: false, online: false, guide: "Jefe del Sendero Verde. Te da la capa de avance." },
      { id: "hk_08", chapter: "Jefes", name: "Prueba de resolución", desc: "Derrota a Hornet en Límite del Reino.", type: "bronze", missable: false, online: false, guide: "Segunda pelea contra Hornet. Desbloquea la Marca del Rey." },
      { id: "hk_09", chapter: "Jefes", name: "Respeto", desc: "Derrota a los Señores de las Mantis.", type: "bronze", missable: false, online: false, guide: "Jefe de los Páramos Fúngicos. Tras vencerlas, las mantis del poblado ya no te atacarán." },
      { id: "hk_10", chapter: "Jefes", name: "Iluminación", desc: "Derrota al Maestro de Almas.", type: "bronze", missable: false, online: false, guide: "Jefe en la Ciudad de las Lágrimas. Te da el hechizo Salto Desolador." },
      { id: "hk_11", chapter: "Jefes", name: "Honor", desc: "Derrota al Defensor del Estiércol.", type: "bronze", missable: false, online: false, guide: "Jefe de las Hidrovías Reales." },
      { id: "hk_12", chapter: "Jefes", name: "Liberación", desc: "Derrota a la Vasija Rota.", type: "bronze", missable: false, online: false, guide: "Jefe de la Cuenca Antigua. Desbloquea las Alas de Monarca (doble salto)." },
      { id: "hk_13", chapter: "Jefes", name: "Ejecución", desc: "Derrota al Señor Desleal.", type: "bronze", missable: false, online: false, guide: "Jefe de los Jardines de la Reina. Necesitas atravesar el muro de sombras antes." },

      // LES RÊVEURS
      { id: "hk_14", chapter: "Soñadores", name: "Vigilante", desc: "Destruye a Lurien el Vigilante.", type: "bronze", missable: false, online: false, guide: "En la Espira del Vigilante (Ciudad de las Lágrimas). Debes derrotar primero a los Caballeros Vigía." },
      { id: "hk_15", chapter: "Soñadores", name: "Bestia", desc: "Destruye a Herrah la Bestia.", type: "bronze", missable: false, online: false, guide: "En Nido Profundo (Guarida de la Bestia)." },
      { id: "hk_16", chapter: "Soñadores", name: "Maestra", desc: "Destruye a Monomon la Maestra.", type: "bronze", missable: false, online: false, guide: "En los Archivos de la Maestra (Cañón Nublado). Debes derrotar primero a Uumuu." },

      // AMÉLIORATIONS ET COLLECTIBLES
      { id: "hk_17", chapter: "Exploración", name: "Protegido", desc: "Consigue 4 fragmentos de máscara.", type: "bronze", missable: false, online: false, guide: "Aumenta tu vida en 1. Puedes comprar algunos a Sly." },
      { id: "hk_18", chapter: "Exploración", name: "Enmascarado", desc: "Consigue todos los fragmentos de máscara.", type: "silver", missable: false, online: false, guide: "Hay 16 fragmentos en total por todo Hallownest." },
      { id: "hk_19", chapter: "Exploración", name: "Animado", desc: "Consigue 3 fragmentos de vasija.", type: "bronze", missable: false, online: false, guide: "Aumenta tu reserva de Alma extra." },
      { id: "hk_20", chapter: "Exploración", name: "Mundano", desc: "Consigue todos los fragmentos de vasija.", type: "silver", missable: false, online: false, guide: "Hay 9 fragmentos en total." },
      { id: "hk_21", chapter: "Exploración", name: "Encantado", desc: "Consigue tu primer amuleto.", type: "bronze", missable: false, online: false, guide: "Lo sacarás automáticamente en tus primeras horas." },
      { id: "hk_22", chapter: "Exploración", name: "Bendecido", desc: "Consigue todos los amuletos y recibe la bendición de Salubra.", type: "silver", missable: false, online: false, guide: "Hay 40 amuletos. Una vez los tengas todos, ve a la tienda de Salubra en los Cruces Olvidados y cómprale la bendición por 800 Geos." },
      { id: "hk_23", chapter: "Exploración", name: "Amigo de los gusanos", desc: "Rescata a la mitad de los gusanos cautivos.", type: "bronze", missable: false, online: false, guide: "Son 23 gusanos." },
      { id: "hk_24", chapter: "Exploración", name: "Metamorfosis", desc: "Rescata a todos los gusanos cautivos.", type: "silver", missable: false, online: false, guide: "Hay 46 en total. Vence al Coleccionista en la Torre del Amor para conseguir el mapa que revela sus ubicaciones." },
      { id: "hk_25", chapter: "Exploración", name: "Cartógrafo", desc: "Consigue un mapa de cada zona.", type: "bronze", missable: false, online: false, guide: "Cómpraselos todos a Cornifer o a Iselda en Bocasucia si te lo perdiste en alguna zona." },
      { id: "hk_26", chapter: "Exploración", name: "Conexión", desc: "Abre la mitad de las Estaciones de Ciervos.", type: "bronze", missable: false, online: false, guide: "Abre 5 estaciones y toca la campana." },
      { id: "hk_27", chapter: "Exploración", name: "Esperanza", desc: "Abre todas las Estaciones de Ciervos e infórmate del Nido de Ciervos.", type: "silver", missable: false, online: false, guide: "Hay 11 en total. Al abrir la última, el ciervo te llevará al nido." },

      // LE JOURNAL DU CHASSEUR
      { id: "hk_28", chapter: "Diario del Cazador", name: "Cazador", desc: "Consigue todas las entradas del Diario del Cazador.", type: "bronze", missable: false, online: false, guide: "Debes encontrar y matar al menos a uno de cada uno de los 146 enemigos base del juego." },
      { id: "hk_29", chapter: "Diario del Cazador", name: "Cazador verdadero", desc: "Recibe la Marca del Cazador.", type: "silver", missable: false, online: false, guide: "Una vez tengas las 146 entradas, debes matar la cantidad requerida de cada uno para 'completar' sus notas. Luego vuelve a hablar con el Cazador en Sendero Verde." },

      // ESSENCE ET AIGUILLON DES RÊVES
      { id: "hk_30", chapter: "Aguijón Onírico", name: "Despertar", desc: "Reúne 1800 de Esencia y despierta el Aguijón Onírico.", type: "bronze", missable: false, online: false, guide: "Derrota a los guerreros oníricos, jefes oníricos y recolecta las raíces para ganar esencia." },
      { id: "hk_31", chapter: "Aguijón Onírico", name: "Ascensión", desc: "Reúne 2400 de Esencia y escucha las últimas palabras de la Vidente.", type: "silver", missable: false, online: false, guide: "Gana 2400 de esencia y habla con la Vidente en Tierras de Reposo. Ella desaparecerá dejándote este trofeo." },

      // LE COLISEE DES FOUS
      { id: "hk_32", chapter: "Coliseo de los Insensatos", name: "Guerrero", desc: "Supera la Prueba del Guerrero.", type: "bronze", missable: false, online: false, guide: "Primera prueba del Coliseo, cuesta 100 Geos entrar." },
      { id: "hk_33", chapter: "Coliseo de los Insensatos", name: "Conquistador", desc: "Supera la Prueba del Conquistador.", type: "bronze", missable: false, online: false, guide: "Segunda prueba del Coliseo, cuesta 450 Geos." },
      { id: "hk_34", chapter: "Coliseo de los Insensatos", name: "Insensato", desc: "Supera la Prueba del Insensato.", type: "silver", missable: false, online: false, guide: "Tercera y última prueba. Muy dura. Mejora al máximo tu aguijón y usa amuletos como Corte Rápido y Marca del Orgullo." },

      // CONTENU END-GAME (DLCs inclus dans Voidheart)
      { id: "hk_35", chapter: "End-Game (DLCs)", name: "Gran actuación", desc: "Derrota a Rey Pesadilla Grimm.", type: "silver", missable: false, online: false, guide: "El jefe final del DLC The Grimm Troupe. Extremadamente rápido y difícil. Aprender sus patrones como un baile es la única clave." },
      { id: "hk_36", chapter: "End-Game (DLCs)", name: "Alma y Sombra", desc: "Supera el Panteón del Caballero.", type: "silver", missable: false, online: false, guide: "Es el 4º Panteón de Buscadioses. El jefe final es la Vasija Pura." },
      { id: "hk_37", chapter: "End-Game (DLCs)", name: "Abraza el Vacío", desc: "Supera el Panteón de Hallownest.", type: "gold", missable: false, online: false, guide: "El reto definitivo. Un asalto consecutivo contra los 42 jefes del juego. El jefe final es Destello Absoluto. Se requiere una paciencia inhumana y mucha práctica." }
    ]
  },
  {
    id: "spiderman2",
    slug: "marvels-spiderman-2",
    title: "Marvel's Spider-Man 2",
    platform: "PS5 / PC",
    cover: "img/spiderman-2.jpg",
    emoji: "🕷️",
    totalTrophies: 42,
    difficulty: "3/10",
    minHours: 25,
    hasMissable: false,
    tags: ["acción", "mundo-abierto", "superhéroes"],
    trophies: [
      // PLATINO
      { id: "sm2_01", chapter: "Platino", name: "Dedicación total", desc: "Consigue todos los trofeos.", type: "platinum", missable: false, online: false, guide: "Se desbloquea al conseguir los otros 41 trofeos. Puedes sacar el platino tras terminar la historia." },

      // HISTORIA PRINCIPAL (Automáticos)
      { id: "sm2_02", chapter: "Historia Principal", name: "Sanar el mundo", desc: "Termina la historia principal.", type: "gold", missable: false, online: false, guide: "Completa la última misión del juego." },
      { id: "sm2_03", chapter: "Historia Principal", name: "Tejedor de telarañas", desc: "Completa la primera misión del juego.", type: "bronze", missable: false, online: false, guide: "Automático al derrotar a Sandman en el prólogo." },
      { id: "sm2_04", chapter: "Historia Principal", name: "Lazos fraternales", desc: "Completa la primera misión cooperativa como Peter y Miles.", type: "bronze", missable: false, online: false, guide: "Automático durante la historia." },
      { id: "sm2_05", chapter: "Historia Principal", name: "Una aventura en Oscorp", desc: "Completa el flashback de Harry.", type: "bronze", missable: false, online: false, guide: "Automático durante la historia." },
      { id: "sm2_06", chapter: "Historia Principal", name: "Un traje nuevo", desc: "Consigue el traje negro.", type: "bronze", missable: false, online: false, guide: "Automático durante la historia." },
      { id: "sm2_07", chapter: "Historia Principal", name: "Dejadnos en paz", desc: "Completa «No le tengas miedo».", type: "silver", missable: false, online: false, guide: "Automático durante la historia." },
      { id: "sm2_08", chapter: "Historia Principal", name: "La gran cacería", desc: "Termina «Todo tiene un punto de ruptura».", type: "silver", missable: false, online: false, guide: "Automático durante la historia." },
      { id: "sm2_09", chapter: "Historia Principal", name: "Medicina", desc: "Completa «Te ha elegido a ti».", type: "bronze", missable: false, online: false, guide: "Automático durante la historia." },
      { id: "sm2_10", chapter: "Historia Principal", name: "Otra forma", desc: "Completa «No hay escapatoria».", type: "bronze", missable: false, online: false, guide: "Automático durante la historia." },

      // COLECCIONABLES Y MISIONES SECUNDARIAS (Limpiar el mapa)
      { id: "sm2_11", chapter: "100% y Secundarias", name: "Superior", desc: "Completa todos los distritos al 100 %.", type: "gold", missable: false, online: false, guide: "Completa todas las actividades secundarias y coleccionables en todos los barrios de Nueva York." },
      { id: "sm2_12", chapter: "100% y Secundarias", name: "El exterminador", desc: "Completa todos los nidos de simbiontes.", type: "silver", missable: false, online: false, guide: "Aparecen en el último tercio del juego. Debes defender bombas sónicas." },
      { id: "sm2_13", chapter: "100% y Secundarias", name: "Fundación", desc: "Completa todas las misiones de la Fundación EMF.", type: "silver", missable: false, online: false, guide: "Termina todos los minijuegos de ADN y abejas. La última misión solo se desbloquea tras terminar la historia principal." },
      { id: "sm2_14", chapter: "100% y Secundarias", name: "Cofundadores", desc: "Completa la misión final de la Fundación EMF.", type: "bronze", missable: false, online: false, guide: "Disponible en el garaje de la Tía May tras acabar la historia y los demás experimentos EMF." },
      { id: "sm2_15", chapter: "100% y Secundarias", name: "Tic, tac", desc: "Completa la trama de La Llama.", type: "silver", missable: false, online: false, guide: "Son las 4 misiones secundarias relacionadas con los cultistas y Wraith." },
      { id: "sm2_16", chapter: "100% y Secundarias", name: "Detrás de las máscaras", desc: "Completa la historia de Mysterio.", type: "silver", missable: false, online: false, guide: "Consigue al menos el rango Bronce en todos los Mysteriums y ve al parque de atracciones." },
      { id: "sm2_17", chapter: "100% y Secundarias", name: "Rastreador", desc: "Completa todos los escondites del Merodeador.", type: "silver", missable: false, online: false, guide: "Resuelve los puzles de escaneo en los tejados con Miles." },
      { id: "sm2_18", chapter: "100% y Secundarias", name: "Evolución", desc: "Derrota todas las bases de Cazadores.", type: "silver", missable: false, online: false, guide: "Primero debes encontrar los alijos invisibles en los tejados para que aparezcan las bases subterráneas." },
      { id: "sm2_19", chapter: "100% y Secundarias", name: "Mi propio camino", desc: "Completa las misiones de Brooklyn Visions.", type: "silver", missable: false, online: false, guide: "Misiones exclusivas de Miles en su instituto." },
      { id: "sm2_20", chapter: "100% y Secundarias", name: "Orgullo de Brooklyn", desc: "Completa las misiones del Museo Cultural.", type: "silver", missable: false, online: false, guide: "Dos misiones de Miles donde investigas un robo de instrumentos musicales." },
      { id: "sm2_21", chapter: "100% y Secundarias", name: "Recopilación de datos", desc: "Consigue los recuerdos del Hombre de Arena.", type: "silver", missable: false, online: false, guide: "Rompe los cristales en las zonas de arena esparcidas por la ciudad." },
      { id: "sm2_22", chapter: "100% y Secundarias", name: "Protocolos de enrutamiento", desc: "Recoge todos los Spider-Bots.", type: "bronze", missable: false, online: false, guide: "Hay 42 en total. No aparecen en el minimapa, busca las ondas rosas y doradas brillantes en los edificios." },
      { id: "sm2_23", chapter: "100% y Secundarias", name: "Amigable vecino Spider-Man", desc: "Completa todas las peticiones de TAVN.", type: "bronze", missable: false, online: false, guide: "Son las misiones cortas que aparecen en la aplicación del móvil." },

      // PROGRESO Y MEJORAS
      { id: "sm2_24", chapter: "Progeso y Mejoras", name: "Sorprendente", desc: "Alcanza el nivel máximo.", type: "silver", missable: false, online: false, guide: "El nivel máximo es 60. Lo conseguirás de forma natural yendo a por el 100%." },
      { id: "sm2_25", chapter: "Progeso y Mejoras", name: "Al máximo", desc: "Compra todas las mejoras de artilugios.", type: "silver", missable: false, online: false, guide: "Usa piezas tecnológicas y fichas para mejorar los 5 artilugios al tope." },
      { id: "sm2_26", chapter: "Progeso y Mejoras", name: "Trajeado", desc: "Compra todos los trajes disponibles.", type: "silver", missable: false, online: false, guide: "No hace falta comprar las variantes de colores, solo los trajes base." },
      { id: "sm2_27", chapter: "Progeso y Mejoras", name: "Totalmente equipado", desc: "Compra todas las mejoras tecnológicas de traje.", type: "bronze", missable: false, online: false, guide: "Mejora las 4 ramas de Salud, Daño, Travesía y Concentración." },
      { id: "sm2_28", chapter: "Progeso y Mejoras", name: "Nuevos hilos", desc: "Equípate un traje nuevo por primera vez.", type: "bronze", missable: false, online: false, guide: "Entra al menú y cambia el traje inicial por cualquier otro." },

      // COMBATE
      { id: "sm2_29", chapter: "Combate", name: "Garantía", desc: "100 bajas con los Spider-Brazos.", type: "bronze", missable: false, online: false, guide: "Usa las habilidades L1+Botones con Peter cuando lleves los brazos mecánicos." },
      { id: "sm2_30", chapter: "Combate", name: "Sobremarcha", desc: "Usa el flujo de simbionte 25 veces.", type: "bronze", missable: false, online: false, guide: "Pulsa L3+R3 con Peter cuando la barra amarilla esté llena." },
      { id: "sm2_31", chapter: "Combate", name: "¡Pisa a fondo!", desc: "100 bajas con las habilidades de simbionte.", type: "bronze", missable: false, online: false, guide: "Usa las habilidades L1+Botones con Peter cuando lleves el traje negro." },
      { id: "sm2_32", chapter: "Combate", name: "Tensión al máximo", desc: "100 bajas con las habilidades de veneno evolucionado.", type: "bronze", missable: false, online: false, guide: "Usa las habilidades L1+Botones de electricidad azul con Miles." },
      { id: "sm2_33", chapter: "Combate", name: "Atracción fatal", desc: "Atrae a 6 enemigos a la vez con el agarre de telaraña.", type: "bronze", missable: false, online: false, guide: "Equipa el artilugio 'Atraparedes', dispáralo en medio de un grupo grande de enemigos (por ejemplo en un crimen callejero)." },
      { id: "sm2_34", chapter: "Combate", name: "¡Al suelo!", desc: "25 bajas sigilosas desde el cable de telaraña.", type: "bronze", missable: false, online: false, guide: "Apunta con L2 y pulsa Triángulo para crear un cable de pared a pared. Sube a él y pulsa Cuadrado para colgar a los enemigos." },
      { id: "sm2_35", chapter: "Combate", name: "Antídoto", desc: "Derrota a un simbionte afectado por el estado Anti-Venom.", type: "bronze", missable: false, online: false, guide: "Hacia el final del juego, usa una habilidad blanca de Anti-Venom con Peter y remata al enemigo mientras esté aturdido." },

      // TROFEOS ESPECIALES Y MUNDO ABIERTO (Sin marca en el mapa)
      { id: "sm2_36", chapter: "Trofeos Especiales", name: "Surcando el cielo", desc: "Planea desde el distrito financiero hasta Astoria con las alas de telaraña.", type: "bronze", missable: false, online: false, guide: "No puedes usar balanceo. Usa los túneles de viento que cruzan el río." },
      { id: "sm2_37", chapter: "Trofeos Especiales", name: "Splat", desc: "Falla un truco en el aire y choca contra el suelo.", type: "bronze", missable: false, online: false, guide: "Mantén Cuadrado y haz piruetas en el aire cayendo en picado sin usar la telaraña antes de chocar." },
      { id: "sm2_38", chapter: "Trofeos Especiales", name: "Ya sabes qué hacer", desc: "Visita la tumba de la tía May como Peter.", type: "bronze", missable: false, online: false, guide: "Ve al cementerio en el extremo noroeste del mapa (Harlem). Busca dos tumbas juntas bajo un árbol e interactúa con Triángulo." },
      { id: "sm2_39", chapter: "Trofeos Especiales", name: "Déjalo ir", desc: "Encuentra el trofeo de ciencias de Miles y Phin como Miles.", type: "bronze", missable: false, online: false, guide: "Ve al distrito financiero con Miles, sube al techo de la iglesia Trinity (la del cementerio) e interactúa con el trofeo azul." },
      { id: "sm2_40", chapter: "Trofeos Especiales", name: "Home Run", desc: "Recorre las bases del estadio de béisbol.", type: "bronze", missable: false, online: false, guide: "Ve al estadio en Downtown Brooklyn. Pisa el Home y corre por la 1ª, 2ª y 3ª base hasta volver al inicio." },
      { id: "sm2_41", chapter: "Trofeos Especiales", name: "Una nueva doctrina", desc: "Averigua lo que ha pasado con todos los cazadores.", type: "bronze", missable: false, online: false, guide: "Se saca tras completar todas las Bases de Cazadores (trofeo Evolución)." },
      { id: "sm2_42", chapter: "Trofeos Especiales", name: "Aventura floral", desc: "Visita la tumba de Jefferson Davis como Miles.", type: "bronze", missable: false, online: false, guide: "Ve al mismo cementerio de Harlem, pero controlando a Miles. La tumba de su padre está un poco más abajo que la de May." }
    ]
  },
  {
    id: "re4remake",
    slug: "resident-evil-4-remake",
    title: "Resident Evil 4 Remake",
    platform: "PS4 / PS5 / PC",
    cover: "img/re4.jpg",
    emoji: "🧟",
    totalTrophies: 40,
    difficulty: "7/10",
    minHours: 40,
    hasMissable: true,
    tags: ["survival-horror", "acción", "remake"],
    trophies: [
      // PLATINO
      { id: "re4_01", chapter: "Platino", name: "El aburrimiento me mata", desc: "Consigue todos los trofeos de Resident Evil 4 Remake.", type: "platinum", missable: false, online: false, guide: "Se consigue tras desbloquear los 39 trofeos restantes. Requerirá entre 4 y 6 pasadas al juego completo." },

      // HISTORIA PRINCIPAL (Automáticos)
      { id: "re4_02", chapter: "Historia", name: "Se acabó el sermón", desc: "Sobrevive al ataque en el pueblo.", type: "bronze", missable: false, online: false, guide: "Capítulo 1. Agunta vivo hasta que suene la campana de la iglesia." },
      { id: "re4_03", chapter: "Historia", name: "Menudo viaje", desc: "Rescata a Ashley.", type: "bronze", missable: false, online: false, guide: "Capítulo 5. Saca a Ashley de la iglesia." },
      { id: "re4_04", chapter: "Historia", name: "Una cuestión de pelotas", desc: "Derrota a Del Lago.", type: "bronze", missable: false, online: false, guide: "Jefe del Capítulo 3." },
      { id: "re4_05", chapter: "Historia", name: "¡Estás frito!", desc: "Derrota a Bitores Méndez.", type: "bronze", missable: false, online: false, guide: "Jefe del Capítulo 6." },
      { id: "re4_06", chapter: "Historia", name: "Un poco de paz", desc: "Sobrevive al asedio de la cabaña.", type: "bronze", missable: false, online: false, guide: "Capítulo 5. Resiste en la cabaña con Luis Sera." },
      { id: "re4_07", chapter: "Historia", name: "El ocaso del castillo", desc: "Derrota a Ramón Salazar.", type: "bronze", missable: false, online: false, guide: "Jefe del Capítulo 12." },
      { id: "re4_08", chapter: "Historia", name: "Tú y yo ya hemos terminado", desc: "Derrota a Krauser.", type: "bronze", missable: false, online: false, guide: "Jefe del Capítulo 14." },
      { id: "re4_09", chapter: "Historia", name: "Misión cumplida", desc: "Derrota a Saddler.", type: "bronze", missable: false, online: false, guide: "Jefe final del Capítulo 16." },
      { id: "re4_10", chapter: "Historia", name: "La esperanza es lo último que se pierde", desc: "Escapa de la isla.", type: "bronze", missable: false, online: false, guide: "Completa el Capítulo 16 usando la moto de agua." },

      // DESAFÍOS DE CAPÍTULO (Muy Perdibles)
      { id: "re4_11", chapter: "Capítulo 3 (Perdible)", name: "Arponero", desc: "Derrota a Del Lago sin fallar ni un solo arpón.", type: "silver", missable: true, online: false, guide: "Guarda la partida antes de subir a la barca. Solo tira el arpón cuando estés 100% seguro. Si fallas, carga la partida." },
      { id: "re4_12", chapter: "Capítulo 7/8 (Perdible)", name: "Capacidad exagerada", desc: "Mata a un fanático usando el cañón.", type: "bronze", missable: true, online: false, guide: "Cuando levantes el cañón en el castillo, úsalo para reventar a un grupo de enemigos comunes antes de disparar a la puerta." },
      { id: "re4_13", chapter: "Capítulo 10 (Perdible)", name: "¡No oigo nada!", desc: "Mata a un Garrador usando solo cuchillos.", type: "bronze", missable: true, online: false, guide: "Aproxímate por la espalda caminando y apuñala su plaga. Requiere cuchillos mejorados. Juega en dificultad Asistida para que sea más fácil." },
      { id: "re4_14", chapter: "Capítulo 11 (Perdible)", name: "¡Sujétate fuerte!", desc: "Supera las dos zonas de vagonetas sin que sufran daños.", type: "bronze", missable: true, online: false, guide: "Guarda la partida antes. Dispara siempre a los frenos, escombros y enemigos antes de que te toquen." },
      { id: "re4_15", chapter: "Capítulo 12 (Perdible)", name: "¡Hablas demasiado!", desc: "Lánzale una granada a Ramón Salazar en la boca.", type: "bronze", missable: true, online: false, guide: "Durante el combate, cuando abre la boca de la planta carnosa, lánzale una granada de fragmentación justo al centro." },
      { id: "re4_16", chapter: "Capítulo 12 (Perdible)", name: "Aforo estricto", desc: "Llega arriba en el ascensor de la torre sin que se detenga.", type: "bronze", missable: true, online: false, guide: "No dejes que ningún enemigo rojo salte al ascensor. Usa la escopeta, flashbangs o la TMP para tirarlos al vacío rápido." },
      { id: "re4_17", chapter: "Capítulo 13 (Perdible)", name: "Dos pájaros de un tiro", desc: "Mata a dos parásitos de un Regenerador con una bala.", type: "bronze", missable: true, online: false, guide: "Equipa la mira biosensora en un rifle perforante (como el Stingray). Alinea dos plagas brillantes en el cuerpo del Regenerador y dispara." },

      // COLECCIONABLES Y MEJORAS
      { id: "re4_18", chapter: "Coleccionables", name: "Bandido", desc: "Consigue todos los tesoros de la zona del pueblo.", type: "bronze", missable: true, online: false, guide: "Debes cogerlos todos antes de terminar el Capítulo 6 (no hay vuelta atrás)." },
      { id: "re4_19", chapter: "Coleccionables", name: "Ladrón", desc: "Consigue todos los tesoros de la zona del castillo.", type: "bronze", missable: true, online: false, guide: "Debes cogerlos antes de tomar el tren en el Capítulo 12." },
      { id: "re4_20", chapter: "Coleccionables", name: "Saqueador", desc: "Consigue todos los tesoros de la zona de la isla.", type: "bronze", missable: true, online: false, guide: "Recógelos todos antes del combate final contra Saddler en el Capítulo 16." },
      { id: "re4_21", chapter: "Coleccionables", name: "No sin mi chistera", desc: "Destruye un castellano mecánico.", type: "bronze", missable: false, online: false, guide: "Rompe el primero de los 16 muñecos de Salazar ocultos por el juego." },
      { id: "re4_22", chapter: "Coleccionables", name: "Revolución mecánica", desc: "Destruye todos los castellanos mecánicos.", type: "silver", missable: true, online: false, guide: "Hay 16 en total (uno por cada capítulo). Escucharás un sonido mecánico cuando estés cerca de ellos." },
      { id: "re4_23", chapter: "Coleccionables", name: "Fanático de las armas", desc: "Consigue todas las armas.", type: "silver", missable: false, online: false, guide: "Requiere comprar todas las del Buhonero e ir desbloqueando las armas extra (Chicago Sweeper, Cañón de mano, etc.) en pasadas extra." },
      
      // BUHONERO Y COMBATE GENERAL
      { id: "re4_24", chapter: "Combate", name: "Cuchillo en la penumbra", desc: "Haz un desvío con el cuchillo (Parry).", type: "bronze", missable: false, online: false, guide: "Pulsa el botón de cuchillo justo cuando un ataque enemigo vaya a impactarte." },
      { id: "re4_25", chapter: "Combate", name: "¡Hazte a un lado!", desc: "Salva a Ashley mientras se la lleva el enemigo.", type: "bronze", missable: false, online: false, guide: "Dispara o apuñala a cualquier enemigo que haya levantado a Ashley." },
      { id: "re4_26", chapter: "Combate", name: "A diestro y siniestro", desc: "Ciega a 3 enemigos o más a la vez con una granada cegadora.", type: "bronze", missable: false, online: false, guide: "Muy fácil en las zonas iniciales del pueblo cuando te rodean." },
      { id: "re4_27", chapter: "Economía", name: "Hasta la vista, forastero", desc: "Véndele algo al buhonero.", type: "bronze", missable: false, online: false, guide: "Vende cualquier tesoro o spray." },
      { id: "re4_28", chapter: "Economía", name: "Hablemos de negocios", desc: "Intercambia algo por espinelas en el buhonero.", type: "bronze", missable: false, online: false, guide: "Usa la pestaña 'Intercambiar' en la tienda." },
      { id: "re4_29", chapter: "Economía", name: "Tasador astuto", desc: "Vende un tesoro por más de 100.000 ptas.", type: "bronze", missable: false, online: false, guide: "Combina la 'Corona' (se encuentra en las alcantarillas del castillo) con 5 joyas de colores diferentes para maximizar su multiplicador." },
      { id: "re4_30", chapter: "Economía", name: "Un tipo perspicaz", desc: "Examina un objeto detenidamente.", type: "bronze", missable: false, online: false, guide: "Abre el inventario, selecciona un tesoro y dale a examinar (girarlo)." },
      { id: "re4_31", chapter: "Mejoras", name: "Mi pieza favorita", desc: "Mejora un arma.", type: "bronze", missable: false, online: false, guide: "Paga al buhonero para subir de nivel la potencia, cadencia, etc. de cualquier arma." },
      { id: "re4_32", chapter: "Mejoras", name: "Una obra maestra", desc: "Consigue la mejora exclusiva de un arma.", type: "bronze", missable: false, online: false, guide: "Sube un arma al nivel máximo de todo para desbloquearla, o usa un Ticket de mejora exclusiva." },
      { id: "re4_33", chapter: "Peticiones", name: "Asesino a sueldo", desc: "Completa una petición.", type: "bronze", missable: false, online: false, guide: "Rompe los primeros medallones azules en la granja." },
      { id: "re4_34", chapter: "Peticiones", name: "Empleado del mes", desc: "Completa todas las peticiones.", type: "silver", missable: true, online: false, guide: "Son los carteles azules. Algunas caducan si avanzas a otra gran zona (Pueblo -> Castillo -> Isla)." },
      
      // GALERÍA DE TIRO
      { id: "re4_35", chapter: "Galería de Tiro", name: "Toda una promesa", desc: "Completa una partida en la galería de tiro.", type: "bronze", missable: false, online: false, guide: "Disponible en los sótanos del Buhonero a partir del Castillo." },
      { id: "re4_36", chapter: "Galería de Tiro", name: "Ojo de halcón", desc: "Consigue rango S en todos los desafíos de la galería de tiro.", type: "bronze", missable: false, online: false, guide: "Destruye todos los piratas sin dar a los marineros. Memoriza los patrones." },
      { id: "re4_37", chapter: "Galería de Tiro", name: "Tiro con efecto", desc: "Destruye 5 objetivos en la galería de tiro con un disparo.", type: "bronze", missable: false, online: false, guide: "En el desafío que usa el rifle perforador (Stingray), espera a que 5 perros piratas se alineen y dispara." },

      // RETOS DE PARTIDA COMPLETA (Suelen requerir pasadas específicas)
      { id: "re4_38", chapter: "Retos de Partida Completa", name: "Agente prometedor", desc: "Completa el modo Estándar o superior.", type: "bronze", missable: false, online: false, guide: "Basta con terminar la historia." },
      { id: "re4_39", chapter: "Retos de Partida Completa", name: "Misión completada con éxito", desc: "Completa el modo Estándar o superior en rango S+.", type: "silver", missable: false, online: false, guide: "Debes jugar en Partida Nueva (no vale Nueva Partida Plus) y terminar en menos de 5 horas." },
      { id: "re4_40", chapter: "Retos de Partida Completa", name: "Gran agente", desc: "Completa el modo Hardcore o superior.", type: "bronze", missable: false, online: false, guide: "Los enemigos hacen más daño y los puzles son más complejos." },
      { id: "re4_41", chapter: "Retos de Partida Completa", name: "Investigador de primera", desc: "Completa el modo Hardcore o superior en rango S+.", type: "silver", missable: false, online: false, guide: "Partida Nueva, Hardcore y bajo 5 horas y media." },
      { id: "re4_42", chapter: "Retos de Partida Completa", name: "Agente de élite", desc: "Completa el modo Profesional.", type: "gold", missable: false, online: false, guide: "No hay autoguardados y el Parry solo funciona si es perfecto. Juega en NG+ con armas infinitas para facilitarlo." },
      { id: "re4_43", chapter: "Retos de Partida Completa", name: "Velocista", desc: "Completa el juego en menos de 8 horas.", type: "silver", missable: false, online: false, guide: "Se saca casi sin querer al ir a por los trofeos de Rango S+." },
      { id: "re4_44", chapter: "Retos de Partida Completa", name: "Frugal", desc: "Completa el juego sin usar objetos de curación.", type: "silver", missable: false, online: false, guide: "Juega en Asistida (la vida se regenera hasta cierto punto si te hieren) en NG+." },
      { id: "re4_45", chapter: "Retos de Partida Completa", name: "Minimalista", desc: "Completa el juego usando solo cuchillos y pistolas.", type: "silver", missable: false, online: false, guide: "Saca la pistola Matilda al máximo o el cañón de mano/Matilda con balas infinitas. Ojo: no lances granadas ni huevos." },
      { id: "re4_46", chapter: "Retos de Partida Completa", name: "Forastero silencioso", desc: "Completa el juego sin hablar con el buhonero una sola vez.", type: "silver", missable: false, online: false, guide: "Juega en NG+ Asistida con un arma de munición infinita ya mejorada a tope, corre y no hables con él nunca." }
    ]
  },
 {
    id: "astrobot",
    slug: "astro-bot",
    title: "Astro Bot",
    platform: "PS5",
    cover: "img/astrobot.avif",
    emoji: "🤖",
    totalTrophies: 44,
    difficulty: "3/10",
    minHours: 15,
    hasMissable: false,
    tags: ["plataformas", "exclusivo-ps5", "coleccionables"],
    trophies: [
      // PLATINO
      { id: "ab_01", chapter: "Platino", name: "¡Astronómico!", desc: "Consigue todos los trofeos. ¡Bien hecho!", type: "platinum", missable: false, online: false, guide: "Se desbloquea al conseguir los otros 43 trofeos." },
      
      // HISTORIA PRINCIPAL
      { id: "ab_02", chapter: "Historia Principal", name: "Un bot menos", desc: "Rescata a tu primer bot.", type: "bronze", missable: false, online: false, guide: "Imposible de perder. Lo sacas en el primer mundo." },
      { id: "ab_03", chapter: "Historia Principal", name: "Un comienzo desconcertante", desc: "Encuentra tu primera pieza de rompecabezas.", type: "bronze", missable: false, online: false, guide: "Imposible de perder." },
      { id: "ab_04", chapter: "Historia Principal", name: "Rendimiento sólido", desc: "Recupera el SSD de la nave nodriza.", type: "silver", missable: false, online: false, guide: "Derrota al jefe del Mundo 1." },
      { id: "ab_05", chapter: "Historia Principal", name: "Lo hago por ti", desc: "Recupera la GPU de la nave nodriza.", type: "silver", missable: false, online: false, guide: "Derrota al jefe del Mundo 2." },
      { id: "ab_06", chapter: "Historia Principal", name: "Mantén la calma", desc: "Recupera el ventilador de refrigeración.", type: "silver", missable: false, online: false, guide: "Derrota al jefe del Mundo 3." },
      { id: "ab_07", chapter: "Historia Principal", name: "¡A cubierto!", desc: "Recupera las cubiertas de protección.", type: "silver", missable: false, online: false, guide: "Derrota al jefe del Mundo 4." },
      { id: "ab_08", chapter: "Historia Principal", name: "Mucho que procesar", desc: "Salva al chico CPU.", type: "gold", missable: false, online: false, guide: "Derrota al jefe del Mundo 5." },
      { id: "ab_09", chapter: "Historia Principal", name: "¡Inolvidable!", desc: "Recupera la memoria de la nave nodriza.", type: "silver", missable: false, online: false, guide: "Derrota al jefe final del juego." },
      
      // COLECCIONABLES Y BOTS
      { id: "ab_10", chapter: "Coleccionables", name: "Mono veo, mono rescato", desc: "Rescata todos los bots en la Nebulosa Gorila.", type: "silver", missable: false, online: false, guide: "Puedes repetir los niveles si te falta alguno." },
      { id: "ab_11", chapter: "Coleccionables", name: "Espectáculo tentacular", desc: "Rescata todos los bots en el Sistema Tentacular.", type: "silver", missable: false, online: false, guide: "Revisa siempre detrás de ti al iniciar una zona." },
      { id: "ab_12", chapter: "Coleccionables", name: "¡Muchas gracias!", desc: "Rescata todos los bots en la Vía Serpiente.", type: "silver", missable: false, online: false, guide: "Usa el pájaro radar si te atascas en algún nivel." },
      { id: "ab_13", chapter: "Coleccionables", name: "Sin lugar donde esconderse", desc: "Rescata todos los bots en el Cosmos Camuflado.", type: "silver", missable: false, online: false, guide: "Atento a las zonas de plataformas invisibles." },
      { id: "ab_14", chapter: "Coleccionables", name: "De vuelta al nido", desc: "Rescata todos los bots en el Cúmulo Emplumado.", type: "silver", missable: false, online: false, guide: "" },
      { id: "ab_15", chapter: "Coleccionables", name: "Objetos perdidos", desc: "Rescata todos los bots en la Galaxia Perdida.", type: "silver", missable: false, online: false, guide: "Las entradas a la galaxia perdida están ocultas en niveles normales." },
      { id: "ab_16", chapter: "Coleccionables", name: "El bot de oro", desc: "Rescata al bot maestro especial en la cima de la estatua dorada.", type: "gold", missable: false, online: false, guide: "Debes conseguir los 300 bots normales primero y formar la torre humana en el hub." },
      
      // HUB Y DESBLOQUEOS
      { id: "ab_17", chapter: "La Base (Crash Site)", name: "Licencia para gastar", desc: "Abre el Laboratorio Gatcha.", type: "silver", missable: false, online: false, guide: "Se desbloquea al recoger suficientes piezas de rompecabezas." },
      { id: "ab_18", chapter: "La Base (Crash Site)", name: "Primer premio", desc: "Consigue tu primer Gatcha del laboratorio.", type: "bronze", missable: false, online: false, guide: "Cuesta 100 monedas en la máquina." },
      { id: "ab_19", chapter: "La Base (Crash Site)", name: "Dinero bien gastado", desc: "Gana 150 premios del Laboratorio Gatcha.", type: "silver", missable: false, online: false, guide: "Necesitarás 15.000 monedas en total. Recógelo todo en los niveles." },
      { id: "ab_20", chapter: "La Base (Crash Site)", name: "Atracción animal", desc: "Abre el Parque Safari.", type: "silver", missable: false, online: false, guide: "Requiere piezas de rompecabezas." },
      { id: "ab_21", chapter: "La Base (Crash Site)", name: "Salpica mi panel", desc: "Abre el garaje Dual Speeder.", type: "silver", missable: false, online: false, guide: "Requiere piezas de rompecabezas." },
      { id: "ab_22", chapter: "La Base (Crash Site)", name: "Hora de cambiar", desc: "Abre el Vestuario.", type: "silver", missable: false, online: false, guide: "Requiere piezas de rompecabezas." },
      { id: "ab_23", chapter: "La Base (Crash Site)", name: "Logro monumental", desc: "Desbloquea la Estatua Dorada.", type: "silver", missable: false, online: false, guide: "Completa el gran rompecabezas de la base con todas las piezas del juego." },
      
      // TROFEOS ESPECIALES (Los de la guía de Vandal)
      { id: "ab_24", chapter: "Trofeos Especiales", name: "¡Posa!", desc: "Hazte una foto en un punto fotográfico.", type: "bronze", missable: false, online: false, guide: "Al abrir el Safari, saca la cámara en la madera con la cara sonriente." },
      { id: "ab_25", chapter: "Trofeos Especiales", name: "SingStars", desc: "Ve a todas las piezas de la nave cantando juntas.", type: "bronze", missable: false, online: false, guide: "En la base, sube a una zona alta donde veas la PS5 montada entera y quédate mirando." },
      { id: "ab_26", chapter: "Trofeos Especiales", name: "¿Qué está diciendo?", desc: "Salpica la cara de Papa Tree durante su canción.", type: "bronze", missable: false, online: false, guide: "En el Safari, usa la cámara o golpéalo mientras canta." },
      { id: "ab_27", chapter: "Trofeos Especiales", name: "Um Jammer Slammy", desc: "Encesta la pelota en el Derbi de Construcción.", type: "bronze", missable: false, online: false, guide: "En el nivel de la obra, usa el salto propulsado para meter la pelota por el aro de baloncesto." },
      { id: "ab_28", chapter: "Trofeos Especiales", name: "Ganancia neta", desc: "Atrapa la mariposa dorada en Monos al Escape.", type: "bronze", missable: false, online: false, guide: "Usa la red para atrapar la mariposa brillante que vuela cerca del inicio del nivel de Ape Escape." },
      { id: "ab_29", chapter: "Trofeos Especiales", name: "Ojos del Padre de Todos", desc: "Encuentra y derrota a los 8 cuervos en Ragnabot.", type: "bronze", missable: false, online: false, guide: "Usa el hacha en el nivel de God of War para golpear a los cuervos verdes ocultos." },
      { id: "ab_30", chapter: "Trofeos Especiales", name: "Los huevos perdidos", desc: "Consigue los 3 artefactos huevo en Cazatesoros.", type: "bronze", missable: false, online: false, guide: "Nivel de Uncharted. Busca detrás de muros rompibles y estatuas altas." },
      { id: "ab_31", chapter: "Trofeos Especiales", name: "¡Menudo viaje!", desc: "Derrota a 7 enemigos con el Tripcaster.", type: "bronze", missable: false, online: false, guide: "Nivel de Horizon. Atrae a los enemigos hacia los cables trampa que pones en el suelo." },
      { id: "ab_32", chapter: "Trofeos Especiales", name: "Excavación doble", desc: "Elimina a dos Wormys al mismo tiempo.", type: "bronze", missable: false, online: false, guide: "Usa los guantes extensibles para tirar de dos gusanos verdes a la vez." },
      { id: "ab_33", chapter: "Trofeos Especiales", name: "¡Hora de hacer caja!", desc: "Para el tiempo y gana en la tragaperras.", type: "bronze", missable: false, online: false, guide: "En Slo-Mo Casino, ralentiza el tiempo cuando la máquina muestre el premio." },
      { id: "ab_34", chapter: "Trofeos Especiales", name: "Pasar por el aro", desc: "Salta por el aro en Bubbling Under.", type: "bronze", missable: false, online: false, guide: "Junto a los delfines que saltan, sígueles y salta por el aro de agua." },
      { id: "ab_35", chapter: "Trofeos Especiales", name: "Como un lince", desc: "Saca una foto a dos exploradores legendarios juntos.", type: "bronze", missable: false, online: false, guide: "En la base, junta a los bots de Nathan Drake y Lara Croft y saca la cámara." },
      { id: "ab_36", chapter: "Trofeos Especiales", name: "Congela-thor", desc: "Congela a una deidad con el hacha.", type: "bronze", missable: false, online: false, guide: "En la base, lanza el hacha de Leviatán contra el bot de Thor." },
      { id: "ab_37", chapter: "Trofeos Especiales", name: "Pegando fuerte", desc: "Inicia una pelea con dos luchadores callejeros.", type: "bronze", missable: false, online: false, guide: "Golpea a los bots de Ryu y Ken (Street Fighter) en la base." },
      { id: "ab_38", chapter: "Trofeos Especiales", name: "Bailemos el twist", desc: "Baila con un marsupial icónico.", type: "bronze", missable: false, online: false, guide: "Ponte al lado del bot de Crash Bandicoot en la base y pulsa abajo en la cruceta para bailar." },
      { id: "ab_39", chapter: "Trofeos Especiales", name: "Ladrón de matones", desc: "Haz que un tipo duro suelte todos sus objetos.", type: "bronze", missable: false, online: false, guide: "Golpea varias veces al bot de Kazuma Kiryu (Yakuza) en la base hasta que suelte objetos." },
      { id: "ab_40", chapter: "Trofeos Especiales", name: "Rompemuros", desc: "Destruye un muro de bots.", type: "bronze", missable: false, online: false, guide: "Llama a los bots en la base para que formen un muro y luego pásalo por encima." },
      { id: "ab_41", chapter: "Trofeos Especiales", name: "¡Mantén la compostura!", desc: "Saca a un bot de una torre sin que se derrumbe.", type: "bronze", missable: false, online: false, guide: "Cuando los bots hagan una torre en la base para ayudarte, golpea suavemente al de abajo del todo." },
      { id: "ab_42", chapter: "Trofeos Especiales", name: "Bot Bot Revolution", desc: "Baila con 100 bots a la vez en la base.", type: "bronze", missable: false, online: false, guide: "Pulsa triángulo para llamarlos a todos, espera a que se junten 100 y pulsa abajo en la cruceta." },
      { id: "ab_43", chapter: "Trofeos Especiales", name: "La cima de mi carrera", desc: "Sube a lo más alto de la nave nodriza.", type: "bronze", missable: false, online: false, guide: "Rodea la PS5 por el andamio derecho en la base y trepa hasta la parte más alta." },
      { id: "ab_44", chapter: "Trofeos Especiales", name: "¡KO!", desc: "Pelea con un enemigo pegajoso en la base.", type: "bronze", missable: false, online: false, guide: "Acércate a la esfera pegajosa (Katamari) y déjate atrapar." }
    ]
  },
  {
    id: "ff7rebirth",
    slug: "final-fantasy-7-rebirth",
    title: "Final Fantasy VII Rebirth",
    platform: "PS5 / PC",
    cover: "img/ffvii.png",
    emoji: "⚔️",
    totalTrophies: 61,
    difficulty: "8.5/10",
    minHours: 150,
    hasMissable: false,
    tags: ["rpg", "mundo-abierto", "remake"],
    trophies: [
      // PLATINO
      { id: "ff7_01", chapter: "Platino", name: "La esperanza del planeta", desc: "Consigue todos los trofeos.", type: "platinum", missable: false, online: false, guide: "El galardón definitivo. Te exigirá completar todo al 100%, todos los minijuegos y pasarte el juego en Difícil." },

      // HISTORIA PRINCIPAL (Se consiguen automáticamente al avanzar)
      { id: "ff7_02", chapter: "Historia Principal", name: "Héroe caído", desc: "Completa el capítulo 1.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_03", chapter: "Historia Principal", name: "El pantano", desc: "Completa el capítulo 2.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_04", chapter: "Historia Principal", name: "Siguiendo al de negro", desc: "Completa el capítulo 3.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_05", chapter: "Historia Principal", name: "Elogio presidencial", desc: "Completa el capítulo 4.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_06", chapter: "Historia Principal", name: "Pesadilla a bordo", desc: "Completa el capítulo 5.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_07", chapter: "Historia Principal", name: "Vacaciones en la playa", desc: "Completa el capítulo 6.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_08", chapter: "Historia Principal", name: "El precio del progreso", desc: "Completa el capítulo 7.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_09", chapter: "Historia Principal", name: "El peso de la culpa", desc: "Completa el capítulo 8.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_10", chapter: "Historia Principal", name: "El llanto del planeta", desc: "Completa el capítulo 9.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_11", chapter: "Historia Principal", name: "El valle de los caídos", desc: "Completa el capítulo 10.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_12", chapter: "Historia Principal", name: "Una aldea en la sombra", desc: "Completa el capítulo 11.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_13", chapter: "Historia Principal", name: "Donde está el corazón", desc: "Completa el capítulo 12.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_14", chapter: "Historia Principal", name: "Despertar inminente", desc: "Completa el capítulo 13.", type: "bronze", missable: false, online: false, guide: "Automático en la historia." },
      { id: "ff7_15", chapter: "Historia Principal", name: "Un mundo en un instante", desc: "Completa el capítulo 14.", type: "bronze", missable: false, online: false, guide: "Automático tras derrotar al jefe final y ver los créditos." },

      // COMBATE Y SINERGIA
      { id: "ff7_16", chapter: "Combate", name: "Primer paso", desc: "Gana un combate.", type: "bronze", missable: false, online: false, guide: "Imposible de no sacar." },
      { id: "ff7_17", chapter: "Combate", name: "Punto débil", desc: "Explota la debilidad de un enemigo.", type: "bronze", missable: false, online: false, guide: "Usa la materia de Análisis para ver las debilidades mágicas y ataca con ese elemento." },
      { id: "ff7_18", chapter: "Combate", name: "Amistad inquebrantable", desc: "Libera a un aliado.", type: "bronze", missable: false, online: false, guide: "Cuando un enemigo atrape a un aliado (aparece un icono de atadura roja), atácalo hasta que lo suelte." },
      { id: "ff7_19", chapter: "Combate", name: "Lección de vulnerabilidad", desc: "Deja vulnerable a un enemigo.", type: "bronze", missable: false, online: false, guide: "Llena la barra naranja debajo de la vida del enemigo." },
      { id: "ff7_20", chapter: "Combate", name: "Lucha sin tregua", desc: "Alcanza un 300% de bonificación de daño contra un enemigo vulnerable.", type: "bronze", missable: false, online: false, guide: "Se hace fácilmente usando las habilidades especiales de Tifa repetidamente cuando el enemigo ya está vulnerable (como Golpe fluido y Puños de la ira)." },
      { id: "ff7_21", chapter: "Combate", name: "Exceso de fuerza", desc: "Usa un Límite.", type: "bronze", missable: false, online: false, guide: "Usa el ataque final cuando se llene la barra amarilla de Límite." },
      { id: "ff7_22", chapter: "Combate", name: "Invocación temprana", desc: "Invoca a un sidéreo.", type: "bronze", missable: false, online: false, guide: "Cuando aparezca la barra roja de invocación en combates largos, llénala y convoca al sidéreo." },
      { id: "ff7_23", chapter: "Combate", name: "Sinergia en equipo", desc: "Usa una acción de sinergia.", type: "bronze", missable: false, online: false, guide: "Mantén R1 y pulsa los botones de acción para hacer un ataque simple combinado." },
      { id: "ff7_24", chapter: "Combate", name: "Sinergia de equipo", desc: "Usa una habilidad de sinergia.", type: "bronze", missable: false, online: false, guide: "Son los ataques cinemáticos que gastan barras de sinergia (las barritas finas de la interfaz)." },

      // EXPLORACIÓN DEL MUNDO ABIERTO (Informes de Chadley y Protomaterias)
      { id: "ff7_25", chapter: "Exploración", name: "Iniciación a la inteligencia", desc: "Completa 5 informes de viaje.", type: "bronze", missable: false, online: false, guide: "Completa puntos de interés en el mapa de Chadley (torres, fuentes de la vida, etc.)." },
      { id: "ff7_26", chapter: "Exploración", name: "Especialista en inteligencia", desc: "Completa 50 informes de viaje.", type: "bronze", missable: false, online: false, guide: "Ve limpiando el mapa a medida que avanzas en las regiones." },
      { id: "ff7_27", chapter: "Exploración", name: "Director de inteligencia", desc: "Completa todos los informes de viaje de una región.", type: "bronze", missable: false, online: false, guide: "Haz el 100% del mapa de la región de los Pastizales, es la más rápida." },
      { id: "ff7_28", chapter: "Exploración", name: "Búsqueda del tesoro", desc: "Completa la búsqueda de cofres ocultos en una zona.", type: "bronze", missable: false, online: false, guide: "Acércate a las ubicaciones de cofres en el mapa y abre los 2 o 3 cofres que hay ahí." },
      { id: "ff7_29", chapter: "Exploración", name: "Parada en el camino", desc: "Repara 3 paradas de chocobotaxi.", type: "bronze", missable: false, online: false, guide: "Levanta las señales de las paradas caídas pulsando Triángulo." },
      { id: "ff7_30", chapter: "Exploración", name: "Chocobo buscador", desc: "Cava dos tesoros enterrados con la ayuda de un chocobo.", type: "bronze", missable: false, online: false, guide: "Cuando vayas en chocobo y aparezca un icono de interrogación sobre él, rastrea el olor pulsando la cruceta y excava." },
      { id: "ff7_31", chapter: "Protomaterias", name: "Tesoro del pasado", desc: "Obtén la protomateria de los Pastizales.", type: "bronze", missable: false, online: false, guide: "Supera los 4 informes de búsqueda de los bandidos." },
      { id: "ff7_32", chapter: "Protomaterias", name: "Título honorífico", desc: "Obtén la protomateria de Junon.", type: "bronze", missable: false, online: false, guide: "Supera el minijuego estratégico de Fuerte Cóndor en sus 4 niveles." },
      { id: "-f7_33", chapter: "Protomaterias", name: "Escolta VIP", desc: "Obtén la protomateria de Corel.", type: "bronze", missable: false, online: false, guide: "Compra los tesoros en los oasis cactilio." },
      { id: "ff7_34", chapter: "Protomaterias", name: "El gambito de los Turcos", desc: "Obtén la protomateria de Gongaga.", type: "bronze", missable: false, online: false, guide: "Supera el entrenamiento virtual de la región." },
      { id: "ff7_35", chapter: "Protomaterias", name: "Observatorio de la historia", desc: "Obtén la protomateria de Cañón Cosmo.", type: "bronze", missable: false, online: false, guide: "Supera el minijuego de los robots y engranajes tácticos." },
      { id: "ff7_36", chapter: "Protomaterias", name: "Maestro de la protomateria", desc: "Obtén la protomateria de Nibel.", type: "bronze", missable: false, online: false, guide: "Atrapa a los Túnicos Negros en la región final." },
      { id: "ff7_37", chapter: "Jefes Opcionales", name: "El espadachín legendario", desc: "Derrota a Gilgamesh.", type: "silver", missable: false, online: false, guide: "Tienes que conseguir las 6 protomaterias anteriores para viajar a la isla de Gilgamesh y derrotarle." },
      { id: "ff7_38", chapter: "Jefes Opcionales", name: "Nueva alianza", desc: "Derrota a un sidéreo en la simulación y obtén su materia.", type: "bronze", missable: false, online: false, guide: "Derrota a Titan, Fénix o cualquier invocación en el simulador de Chadley." },

      // DESARROLLO DE PERSONAJE
      { id: "ff7_39", chapter: "Desarrollo", name: "Héroe de primera", desc: "Alcanza el nivel 70 con un personaje.", type: "silver", missable: false, online: false, guide: "Lo sacarás obligatoriamente mientras juegas la partida en Difícil." },
      { id: "ff7_40", chapter: "Desarrollo", name: "Dominio de armas", desc: "Sube la pericia de un arma a tope.", type: "bronze", missable: false, online: false, guide: "Usa la habilidad de un arma repetidamente hasta que haya un tic indicando que ya la has aprendido permanentemente." },
      { id: "ff7_41", chapter: "Desarrollo", name: "Crecimiento material", desc: "Sube el nivel de una materia.", type: "bronze", missable: false, online: false, guide: "Gana Puntos de Habilidad (PH) combatiendo con cualquier materia equipada." },
      { id: "ff7_42", chapter: "Desarrollo", name: "Desarrollo de materias", desc: "Desarrolla todas las materias posibles con Chadley.", type: "silver", missable: false, online: false, guide: "Tienes que comprarle cada tipo de materia en todas las regiones usando Puntos de Datos." },

      // MINIJUEGOS Y SECUNDARIAS
      { id: "ff7_43", chapter: "Misiones Secundarias", name: "En constante aprendizaje", desc: "Completa una misión.", type: "bronze", missable: false, online: false, guide: "Acaba tu primer encargo (marcadores verdes en el mapa)." },
      { id: "ff7_44", chapter: "Misiones Secundarias", name: "Todo terreno", desc: "Completa todas las misiones secundarias.", type: "silver", missable: false, online: false, guide: "Son en total 36 encargos repartidos por el mundo. Algunos solo se desbloquean al final del Capítulo 12." },
      { id: "ff7_45", chapter: "Sangre de la Reina", name: "Sangre nueva", desc: "Sube tu rango de Sangre de la Reina.", type: "bronze", missable: false, online: false, guide: "Gana tus primeras partidas de cartas." },
      { id: "ff7_46", chapter: "Sangre de la Reina", name: "As de las cartas", desc: "Alcanza el rango máximo de Sangre de la Reina.", type: "silver", missable: false, online: false, guide: "Debes vencer a la Reina Púrpura tras derrotar al resto de jugadores del mundo." },
      { id: "ff7_47", chapter: "Minijuegos Especiales", name: "Séptima Compañía, ¡firmes!", desc: "Recluta a todos los escuadrones en Junon.", type: "bronze", missable: false, online: false, guide: "Capítulo 4. Hay 10 grupos de soldados paseando por Junon, reúnelos todos antes de hacer el desfile." },
      { id: "ff7_48", chapter: "Minijuegos Especiales", name: "Séptima Compañía, ¡marchen!", desc: "Consigue el premio a la mejor actuación en el desfile de Junon.", type: "bronze", missable: false, online: false, guide: "Capítulo 4. Acertando la mayoría de los botones (QTEs) del desfile. Si fallas muchos, pausa y dale a reintentar." },
      { id: "ff7_49", chapter: "Minijuegos Especiales", name: "Coleccionista de premios", desc: "Gana un premio en el minijuego de Locura Sideral.", type: "bronze", missable: false, online: false, guide: "Se consigue en el Capítulo 8, en el Gold Saucer." },
      { id: "ff7_50", chapter: "Minijuegos Especiales", name: "Estrella del Gold Saucer", desc: "Supera todos los minijuegos en el Gold Saucer.", type: "silver", missable: false, online: false, guide: "No hace falta conseguir la máxima puntuación en todos, solo participar y terminarlos al menos una vez." },
      { id: "ff7_51", chapter: "Minijuegos Especiales", name: "Pianista de primera", desc: "Consigue rango A o superior en 6 canciones del minijuego de piano.", type: "silver", missable: false, online: false, guide: "Encuentra las partituras por el mundo e interpreta las canciones con precisión. Práctica pura y dura." },
      { id: "ff7_52", chapter: "Minijuegos Especiales", name: "Campeón de fotografía", desc: "Toma fotos en todos los enclaves fotográficos.", type: "bronze", missable: false, online: false, guide: "Habla con Enfocado en cada región y saca fotos en los lugares que te indica." },

      // COLECCIÓN DE JOHNNY (El gran muro del juego)
      { id: "ff7_53", chapter: "La Colección de Johnny", name: "Moogle de negocios", desc: "Maximiza tu rango en las tiendas de los moguris.", type: "bronze", missable: false, online: false, guide: "Supera todos los minijuegos de atrapar moguris en las 6 regiones." },
      { id: "ff7_54", chapter: "La Colección de Johnny", name: "Una habitación de hotel soñada", desc: "Entrega tu primer objeto de colección en el Hotel Costa del Sol.", type: "bronze", missable: false, online: false, guide: "Automático al iniciar el encargo de Johnny." },
      { id: "ff7_55", chapter: "La Colección de Johnny", name: "Cazador de trofeos de Johnny", desc: "Completa la colección de Johnny en su hotel.", type: "gold", missable: false, online: false, guide: "El trofeo más largo del juego. Hay 88 coleccionables. Te exige conseguir rango máximo en todos los minijuegos del juego (incluido el modo Difícil de cada minijuego) y completar todos los combates de Chadley." },

      // MODO DIFÍCIL Y RETOS FINALES
      { id: "ff7_56", chapter: "Combate de Chadley", name: "Virtualmente reconocido", desc: "Completa las misiones de simulación de Chadley básicas.", type: "bronze", missable: false, online: false, guide: "Completa todas las simulaciones que no requieren el modo difícil." },
      { id: "ff7_57", chapter: "Combate de Chadley", name: "Virtualmente invencible", desc: "Completa todas las misiones de simulación de combate de Chadley.", type: "gold", missable: false, online: false, guide: "Incluye los desafíos Brutales y Legendarios. De los combates más difíciles de la saga. Requiere materias al máximo y mucha estrategia." },
      { id: "ff7_58", chapter: "Coliseo Músculo", name: "Estrella del coliseo", desc: "Supera todos los combates del Coliseo Músculo.", type: "bronze", missable: false, online: false, guide: "En el Gold Saucer, supera todas las copas que se desbloquean en el Capítulo 12." },
      { id: "ff7_59", chapter: "Modo Difícil", name: "Aventurero de leyenda", desc: "Completa todos los capítulos del juego en el modo Difícil.", type: "gold", missable: false, online: false, guide: "Usa la selección de capítulo para jugar en Difícil. No puedes usar objetos y las posadas no restauran los PM. Abusa de la materia de absorción de PM." }
    ]
  },
  {
    id: "elden-ring",
    slug: "elden-ring",
    title: "Elden Ring",
    platform: "PS4 / PS5 / PC",
    cover: "img/elden-ring.jpg",
    emoji: "💍",
    totalTrophies: 42,
    difficulty: "7.5/10",
    minHours: 80,
    hasMissable: true,
    tags: ["soulslike", "mundo-abierto", "rpg", "fantasía"],
    trophies: [
      // PLATINO
      { id: "er_01", chapter: "Platino", name: "El Círculo de Elden", desc: "Consigue todos los trofeos.", type: "platinum", missable: false, online: false, guide: "Conviértete en el Señor del Círculo consiguiendo los demás trofeos." },

      // FINALES (Perdibles - Requieren guardar partida en la nube)
      { id: "er_02", chapter: "Finales (Perdible)", name: "Señor del Círculo", desc: "Consigue el final «Señor del Círculo».", type: "gold", missable: true, online: false, guide: "Final estándar. Guarda la partida tras derrotar al jefe final y antes de tocar la estatua para poder sacar los 3 finales recargando el guardado." },
      { id: "er_03", chapter: "Finales (Perdible)", name: "Era estelar", desc: "Consigue el final «Era estelar».", type: "gold", missable: true, online: false, guide: "Debes completar toda la cadena de misiones de Ranni la Bruja. Al final del juego, en lugar de tocar la estatua, invoca a Ranni usando la marca azul del suelo." },
      { id: "er_04", chapter: "Finales (Perdible)", name: "Señor de la Llama Frenética", desc: "Consigue el final «Señor de la Llama Frenética».", type: "gold", missable: true, online: false, guide: "Debes descender a los Subterráneos de los marginados y ser marcado por los Tres Dedos. ¡OJO! Esto bloquea los otros finales a menos que uses la Aguja de Miquella para curarte." },

      // HISTORIA PRINCIPAL Y PROGRESO (Imposibles de perder)
      { id: "er_05", chapter: "Historia Principal", name: "Mesa Redonda", desc: "Llega a la Mesa Redonda.", type: "bronze", missable: false, online: false, guide: "Melina te llevará automáticamente tras descansar en varios puntos de gracia." },
      { id: "er_06", chapter: "Historia Principal", name: "Gran Runa", desc: "Restaura el poder de una Gran Runa.", type: "bronze", missable: false, online: false, guide: "Tras derrotar a tu primer Portador de Esquirlas (ej. Godrick), lleva su Gran Runa a su respectiva Torre Sagrada." },
      { id: "er_07", chapter: "Historia Principal", name: "Margit, el Augurio Caído", desc: "Derrota a Margit, el Augurio Caído.", type: "bronze", missable: false, online: false, guide: "Jefe de la entrada al Castillo de Velo Tormenta." },
      { id: "er_08", chapter: "Historia Principal", name: "Lobo Rojo de Radagon", desc: "Derrota al Lobo Rojo de Radagon.", type: "bronze", missable: false, online: false, guide: "Jefe intermedio de la Academia de Raya Lucaria." },
      { id: "er_09", chapter: "Historia Principal", name: "Rennala, Reina de la Luna Llena", desc: "Derrota a Rennala, Reina de la Luna Llena.", type: "bronze", missable: false, online: false, guide: "Jefe final de la Academia de Raya Lucaria." },
      { id: "er_10", chapter: "Historia Principal", name: "Godfrey, el primer señor", desc: "Derrota a Godfrey, el primer señor.", type: "bronze", missable: false, online: false, guide: "Se refiere a la versión de sombra dorada en Leyndell." },
      { id: "er_11", chapter: "Historia Principal", name: "Morgott, rey de los Presagios", desc: "Derrota a Morgott, rey de los Presagios.", type: "silver", missable: false, online: false, guide: "Jefe final de la Capital (Leyndell)." },
      { id: "er_12", chapter: "Historia Principal", name: "Gigante de fuego", desc: "Derrota al Gigante de fuego.", type: "bronze", missable: false, online: false, guide: "Jefe final de los Picos de los Gigantes." },
      { id: "er_13", chapter: "Historia Principal", name: "Árbol Áureo en llamas", desc: "Prende fuego al Árbol Áureo.", type: "bronze", missable: false, online: false, guide: "Ocurre automáticamente tras derrotar al Gigante de Fuego e interactuar con la forja." },
      { id: "er_14", chapter: "Historia Principal", name: "Dúo sacrodermo", desc: "Derrota al Dúo sacrodermo.", type: "bronze", missable: false, online: false, guide: "Jefe obligatorio en Farum Azula. Usa tarros de sueño para dormir a uno mientras peleas con el otro." },
      { id: "er_15", chapter: "Historia Principal", name: "Maliketh, la Hoja Negra", desc: "Derrota a Maliketh, la Hoja Negra.", type: "silver", missable: false, online: false, guide: "Jefe final de Farum Azula. Al derrotarlo, la Capital se convertirá en cenizas (¡Asegúrate de recoger el Rayo de Gransax antes!)." },
      { id: "er_16", chapter: "Historia Principal", name: "Hoarah Loux, el guerrero", desc: "Derrota a Hoarah Loux, el guerrero.", type: "silver", missable: false, online: false, guide: "Penúltimo jefe del juego, en Leyndell, Capital de las Cenizas." },

      // GRANDES JEFES: PORTADORES DE ESQUIRLAS
      { id: "er_17", chapter: "Portadores de Esquirlas", name: "Portador de esquirlas Godrick", desc: "Derrota al portador de esquirlas Godrick.", type: "silver", missable: false, online: false, guide: "Jefe final del Castillo de Velo Tormenta." },
      { id: "er_18", chapter: "Portadores de Esquirlas", name: "Portador de esquirlas Radahn", desc: "Derrota al portador de esquirlas Radahn.", type: "silver", missable: false, online: false, guide: "En el Castillo de la Melena Roja (Caelid). Activa el festival avanzando en la misión de Ranni o llegando a la Meseta Altus." },
      { id: "er_19", chapter: "Portadores de Esquirlas", name: "Portador de esquirlas Rykard", desc: "Derrota al portador de esquirlas Rykard.", type: "silver", missable: false, online: false, guide: "Jefe de la Mansión del Volcán. Usa la lanza 'Cazador de Serpientes' que hay al entrar a su arena." },
      { id: "er_20", chapter: "Portadores de Esquirlas", name: "Portador de esquirlas Mohg", desc: "Derrota al portador de esquirlas Mohg.", type: "silver", missable: false, online: false, guide: "En el Palacio de Mohgwyn. Usa la Lágrima de cristal purificadora en tu vial para sobrevivir a su ataque de anillos rojos." },
      { id: "er_21", chapter: "Portadores de Esquirlas", name: "Portadora de esquirlas Malenia", desc: "Derrota a la portadora de esquirlas Malenia.", type: "silver", missable: false, online: false, guide: "El jefe más duro del juego. Está en Elphael, tutor del Árbol Hierático. Sangrado y congelación son tus mejores amigos." },

      // JEFES SECUNDARIOS MAYORES
      { id: "er_22", chapter: "Jefes Opcionales", name: "Señor dragón Placidusax", desc: "Derrota al Señor dragón Placidusax.", type: "silver", missable: false, online: false, guide: "Jefe oculto en Farum Azula. Debes dejarte caer por unas plataformas flotantes cerca del puente y tumbarte en un hueco." },
      { id: "er_23", chapter: "Jefes Opcionales", name: "Dragón liche Fortissax", desc: "Derrota al dragón liche Fortissax.", type: "bronze", missable: true, online: false, guide: "Parte de la misión de Fia. Si la matas o atacas en las Profundidades de Raíz Profunda, perderás este combate." },
      { id: "er_24", chapter: "Jefes Opcionales", name: "Astel, Innato del Vacío", desc: "Derrota a Astel, Innato del Vacío.", type: "bronze", missable: false, online: false, guide: "Jefe final del Lago de la Putrefacción, necesario para la misión de Ranni." },
      { id: "er_25", chapter: "Jefes Opcionales", name: "Mohg, el Presagio", desc: "Derrota a Mohg, el Presagio.", type: "bronze", missable: false, online: false, guide: "Versión de las alcantarillas de Leyndell (Subterráneo de los marginados)." },
      { id: "er_26", chapter: "Jefes Opcionales", name: "Comandante Niall", desc: "Derrota al comandante Niall.", type: "bronze", missable: false, online: false, guide: "Jefe del Castillo de Sol. Derrotarlo te da la mitad del medallón secreto para ir al Árbol Hierático." },

      // JEFES DE MAZMORRAS Y EXPLORACIÓN
      { id: "er_27", chapter: "Jefes Opcionales", name: "Lágrima mimética", desc: "Derrota a la Lágrima mimética.", type: "bronze", missable: false, online: false, guide: "En Nokron. El truco: entra a la arena desnudo y sin armas, y equípate todo de nuevo cuando el jefe se haya transformado en ti." },
      { id: "er_28", chapter: "Jefes Opcionales", name: "Loretta, centinela del Árbol Hierático", desc: "Derrota a Loretta, centinela del Árbol Hierático.", type: "bronze", missable: false, online: false, guide: "En el Árbol Hierático de Miquella (versión real de Loretta)." },
      { id: "er_29", chapter: "Jefes Opcionales", name: "Guardia real Loretta", desc: "Derrota a la guardia real Loretta.", type: "bronze", missable: false, online: false, guide: "En la Mansión de los Caria (versión espiritual azul)." },
      { id: "er_30", chapter: "Jefes Opcionales", name: "Bastardo leonino", desc: "Derrota al bastardo leonino.", type: "bronze", missable: false, online: false, guide: "Jefe del Castillo de Morne, al sur de la Península del Llanto." },
      { id: "er_31", chapter: "Jefes Opcionales", name: "Dragón de magma Makar", desc: "Derrota al dragón de magma Makar.", type: "bronze", missable: false, online: false, guide: "En el Despeñadero con vistas a la aldea (ruta alternativa a la Meseta Altus)." },
      { id: "er_32", chapter: "Jefes Opcionales", name: "Elemer de la Zarza", desc: "Derrota a Elemer de la Zarza.", type: "bronze", missable: false, online: false, guide: "Jefe final del Castillo Sombrío (Meseta Altus)." },
      { id: "er_33", chapter: "Jefes Opcionales", name: "Espíritu ancestral", desc: "Derrota al espíritu ancestral.", type: "bronze", missable: false, online: false, guide: "En el Río Siofra. Enciende los 8 pebeteros para poder acceder al cadáver del ciervo." },
      { id: "er_34", chapter: "Jefes Opcionales", name: "Espíritu ancestral majestuoso", desc: "Derrota al espíritu ancestral majestuoso.", type: "bronze", missable: false, online: false, guide: "En Nokron. Enciende los 6 pebeteros de esa zona." },
      { id: "er_35", chapter: "Jefes Opcionales", name: "Soldado draconiano de Nokstella", desc: "Derrota al soldado draconiano de Nokstella.", type: "bronze", missable: false, online: false, guide: "En el Río Ainsel, en la zona subterránea." },
      { id: "er_36", chapter: "Jefes Opcionales", name: "Gárgolas denodadas", desc: "Derrota a las gárgolas denodadas.", type: "bronze", missable: false, online: false, guide: "Jefe doble al final del Acueducto de Siofra." },
      { id: "er_37", chapter: "Jefes Opcionales", name: "Noble sacrodermo", desc: "Derrota al noble sacrodermo.", type: "bronze", missable: false, online: false, guide: "Jefe de la Mansión del Volcán (dentro de la iglesia)." },

      // COLECCIONABLES Y MEJORAS
      { id: "er_38", chapter: "Coleccionables", name: "Arma matadioses", desc: "Mejora cualquier arma hasta su nivel máximo.", type: "silver", missable: false, online: false, guide: "Nivel +25 para armas normales (con Piedra de forja de dragón antiguo) o +10 para armas especiales (Piedra de forja sombría de dragón antiguo)." },
      { id: "er_39", chapter: "Coleccionables (Perdible)", name: "Armas legendarias", desc: "Consigue las 9 armas legendarias.", type: "silver", missable: true, online: false, guide: "¡CUIDADO! El 'Rayo de Gransax' está en Leyndell y desaparece para siempre tras derrotar a Maliketh. Cógelo antes." },
      { id: "er_40", chapter: "Coleccionables", name: "Cenizas legendarias", desc: "Consigue las 6 cenizas de espíritus legendarias.", type: "silver", missable: false, online: false, guide: "Incluye a Tiche el Cuchillo Negro, la Lágrima Mimética, Lhutel la decapitada, etc." },
      { id: "er_41", chapter: "Coleccionables", name: "Hechizos y encantamientos legendarios", desc: "Consigue los 7 hechizos y encantamientos legendarios.", type: "silver", missable: false, online: false, guide: "Como la Llama del Dios Caído, Lluvia de estrellas de fundación, Estrella de Elden, etc." },
      { id: "er_42", chapter: "Coleccionables", name: "Talismanes legendarios", desc: "Consigue los 8 talismanes legendarios.", type: "silver", missable: false, online: false, guide: "El Sello de Radagon, Sello de Márika, Talismán de escudo grande con blasón de dragón, etc." }
    ]
  },
  {
  "id": "gta5",
  "slug": "gta-v",
  "title": "Grand Theft Auto V",
  "platform": "PS4 / PS5 / PC",
  "cover": "img/gta5.jpg",
  "emoji": "🚗",
  "totalTrophies": 55,
  "difficulty": "7/10",
  "minHours": 100,
  "hasMissable": true,
  "tags": ["mundo-abierto", "online", "acción", "sandbox"],
  "trophies": [
    // PLATINO
    { "id": "gta_01", "chapter": "Platino", "name": "Leyenda de Los Santos", "desc": "Consigue todos los trofeos.", "type": "platinum", "missable": false, "online": true, "guide": "Requiere completar el juego al 100% y alcanzar nivel 100 en el Online." },

    // HISTORIA
    { "id": "gta_02", "chapter": "Historia", "name": "Criminal profesional", "desc": "Consigue completar el juego al 100%.", "type": "gold", "missable": false, "online": false, "guide": "Requiere completar todas las misiones principales, coleccionables y actividades indicadas en la checklist del Social Club." },
    { "id": "gta_03", "chapter": "Historia", "name": "¡Oro puro!", "desc": "Repite misiones y extraños y locos y consigue 70 medallas de oro.", "type": "gold", "missable": false, "online": false, "guide": "Debes cumplir todos los objetivos secundarios en las misiones. No es necesario que sean seguidos." },
    { "id": "gta_04", "chapter": "Historia", "name": "Vivir o morir en Los Santos", "desc": "Completa la misión final.", "type": "gold", "missable": true, "online": false, "guide": "¡Muy importante! Elige la Opción C al final del juego para salvar a los tres protagonistas y evitar perder otros trofeos." },
    { "id": "gta_05", "chapter": "Historia", "name": "Bienvenido a Los Santos", "desc": "Completa la primera misión con Franklin y Lamar.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia." },
    { "id": "gta_06", "chapter": "Historia", "name": "Un diamante en bruto", "desc": "Completa el golpe a la joyería Vangelico.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia." },
    { "id": "gta_07", "chapter": "Historia", "name": "Subcontratado", "desc": "Completa el asalto a Merryweather.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia." },
    { "id": "gta_08", "chapter": "Historia", "name": "Blindaje hecho", "desc": "Completa la misión de asalto al furgón blindado (Blitz Play).", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia." },
    { "id": "gta_09", "chapter": "Historia", "name": "Pueblo chico, gran trabajo", "desc": "Completa el golpe de Paleto Bay.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia." },
    { "id": "gta_10", "chapter": "Historia", "name": "Los inútiles del gobierno", "desc": "Completa el asalto al edificio del FIB.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia." },
    { "id": "gta_11", "chapter": "Historia", "name": "¡El grande!", "desc": "Completa el gran golpe final a la reserva federal.", "type": "silver", "missable": false, "online": false, "guide": "Automático por la historia." },
    { "id": "gta_12", "chapter": "Historia", "name": "Niebla de furia", "desc": "Completa todas las masacres.", "type": "bronze", "missable": false, "online": false, "guide": "Son los 5 eventos de frenesí exclusivos de Trevor." },
    { "id": "gta_13", "chapter": "Historia", "name": "¡Kifflom!", "desc": "Completa tu camino a la iluminación.", "type": "silver", "missable": true, "online": false, "guide": "Sigue la larga cadena de misiones secundarias de la secta Epsilon con Michael en su web móvil." },
    { "id": "gta_14", "chapter": "Historia", "name": "Un misterio resuelto", "desc": "Resuelve el misterio de Leonora Johnson.", "type": "silver", "missable": false, "online": false, "guide": "Recoge los 50 trozos de carta repartidos por el mapa y liquida al asesino." },
    { "id": "gta_15", "chapter": "Historia", "name": "Más allá de las estrellas", "desc": "Recoge y devuelve todas las piezas de la nave espacial.", "type": "silver", "missable": false, "online": false, "guide": "Hay 50 piezas por el mapa. Lllévaselas a Omega." },
    { "id": "gta_16", "chapter": "Historia", "name": "Gestión de residuos", "desc": "Compra el viejo muelle y recoge todo el desperdicio nuclear.", "type": "bronze", "missable": false, "online": false, "guide": "Compra la propiedad del muelle y usa el minisubmarino para recoger los 30 bidones." },
    { "id": "gta_17", "chapter": "Historia", "name": "Multidisciplinar", "desc": "Consigue una medalla de oro en todas las aficiones y pasatiempos.", "type": "bronze", "missable": false, "online": false, "guide": "Incluye una medalla de oro en escuela de vuelo, galería de tiro, carreras urbanas, todoterreno, marítimas y triatlón." },
    { "id": "gta_18", "chapter": "Historia", "name": "Explorador de San Andreas", "desc": "Explora todo Los Santos y el condado de Blaine.", "type": "bronze", "missable": false, "online": false, "guide": "Despeja casi toda la niebla del mapa físico volando o conduciendo." },

    // GTA ONLINE
    { "id": "gta_19", "chapter": "Online", "name": "Reconocimiento", "desc": "Llega al nivel 100 en GTA Online.", "type": "silver", "missable": false, "online": true, "guide": "La base de tu carrera criminal. Sube de rango completando misiones y golpes." },
    { "id": "gta_20", "chapter": "Online", "name": "Número uno", "desc": "Gana en todos los tipos de partidas competitivas.", "type": "silver", "missable": false, "online": true, "guide": "Gana en tenis, golf, dardos, carreras (estándar, GTA, rally), paracaidismo, galería de tiro, ataque a banda y partida a muerte." },
    { "id": "gta_21", "chapter": "Online", "name": "Poco a poco", "desc": "Llega al nivel 50 en GTA Online.", "type": "bronze", "missable": false, "online": true, "guide": "Automático al subir de nivel." },
    { "id": "gta_22", "chapter": "Online", "name": "Gánster de pacotilla", "desc": "Llega al nivel 25 en GTA Online.", "type": "bronze", "missable": false, "online": true, "guide": "Automático al subir de nivel." },
    { "id": "gta_23", "chapter": "Online", "name": "Recién llegado", "desc": "Completa la introducción a GTA Online.", "type": "bronze", "missable": false, "online": true, "guide": "Completa el tutorial inicial guiado por Lamar." },
    { "id": "gta_24", "chapter": "Online", "name": "Sueño americano", "desc": "Consigue un apartamento, un garaje y un vehículo asegurado.", "type": "bronze", "missable": false, "online": true, "guide": "Cómpralos desde internet y asegura un coche en cualquier taller de Los Santos Customs." },
    { "id": "gta_25", "chapter": "Online", "name": "En equipo", "desc": "Completa una actividad como miembro de una Crew.", "type": "bronze", "missable": false, "online": true, "guide": "Juega y termina cualquier actividad junto a un compañero de tu misma crew." },
    { "id": "gta_26", "chapter": "Online", "name": "Barrido total", "desc": "Termina un ataque a banda sin morir y mata a 10 enemigos.", "type": "bronze", "missable": false, "online": true, "guide": "Busca los círculos rojos en el mapa e inicia el combate eliminando a 10 enemigos sin caer." },
    { "id": "gta_27", "chapter": "Online", "name": "Correr como el viento", "desc": "Sobrevive un día con una recompensa por tu cabeza.", "type": "bronze", "missable": false, "online": true, "guide": "Evita que te maten otros jugadores durante 48 minutos reales. Puedes quedarte dentro de tu apartamento." },
    { "id": "gta_28", "chapter": "Online", "name": "Selección antinatural", "desc": "Completa las 10 oleadas de supervivencia.", "type": "bronze", "missable": false, "online": true, "guide": "Requiere un buen equipo, armamento pesado y buscar una cobertura sólida." },
    { "id": "gta_29", "chapter": "Online", "name": "Midnight Club", "desc": "Gana 5 carreras con vehículos personalizados.", "type": "bronze", "missable": false, "online": true, "guide": "Gana carreras utilizando un coche de tu propiedad previamente mejorado." },
    { "id": "gta_30", "chapter": "Online", "name": "Llamada de socorro", "desc": "Pide un helicóptero de apoyo por primera vez.", "type": "bronze", "missable": false, "online": true, "guide": "Llama a Merryweather desde los contactos de tu móvil tras alcanzar el nivel adecuado." },
    { "id": "gta_31", "chapter": "Online", "name": "Atracador", "desc": "Atraca las 20 tiendas.", "type": "bronze", "missable": false, "online": true, "guide": "Entra, apunta al cajero y huye de la policía en los 20 establecimientos marcados." },
    { "id": "gta_32", "chapter": "Online", "name": "Reembolso completo", "desc": "Mata al ladrón que te atracó.", "type": "bronze", "missable": false, "online": true, "guide": "Si un jugador te manda un ladrón que te tire al suelo y te robe, persíguelo y asesínalo para recuperar tu dinero." },
    { "id": "gta_33", "chapter": "Online", "name": "Desde el asiento de atrás", "desc": "Guía a un conductor al primer puesto en modo rally.", "type": "bronze", "missable": false, "online": true, "guide": "Actúa como copiloto en una carrera de rally e indica el camino al conductor mediante flechas o micro para ganar." },
    { "id": "gta_34", "chapter": "Online", "name": "Disfruta de la estancia", "desc": "Participa en todo lo que Los Santos puede ofrecer.", "type": "bronze", "missable": false, "online": true, "guide": "Haz un pulso, dardos, golf, tenis, galería de tiro, un tatuaje, un corte de pelo, compra ropa y pide un baile privado." },
    { "id": "gta_35", "chapter": "Online", "name": "Condecorado", "desc": "Gana 30 premios de platino.", "type": "silver", "missable": false, "online": true, "guide": "Requiere completar 30 desafíos de galardones en el menú de estadísticas internas del online." },

    // MISCELÁNEA / VARIOS
    { "id": "gta_36", "chapter": "Varios", "name": "Los Santos Customs", "desc": "Modifica completamente un vehículo.", "type": "bronze", "missable": false, "online": false, "guide": "Compra una modificación para cada categoría disponible en un coche que lo permita." },
    { "id": "gta_37", "chapter": "Varios", "name": "Como pez fuera del agua", "desc": "Vas a necesitar un barco más grande.", "type": "bronze", "missable": false, "online": false, "guide": "Coge una lancha o nada hacia el océano profundo hasta que aparezca un tiburón en el minimapa y te devore." },
    { "id": "gta_38", "chapter": "Varios", "name": "Despilfarro", "desc": "Gasta 200 millones entre los tres personajes.", "type": "bronze", "missable": false, "online": false, "guide": "Compra y vende acciones masivamente en la bolsa para acumular el gasto rápido." },
    { "id": "gta_39", "chapter": "Varios", "name": "Escalada bélica de Industrias TP", "desc": "Compra el aeródromo de McKenzie y gana la carrera armamentística.", "type": "bronze", "missable": false, "online": false, "guide": "Cómpralo con Trevor y completa los 5 tráficos de armas aéreos y 5 terrestres." },
    { "id": "gta_40", "chapter": "Varios", "name": "Ejército de tres hombres", "desc": "Sobrevive 3 minutos con 3 estrellas con los 3 personajes juntos.", "type": "bronze", "missable": false, "online": false, "guide": "Queda con los otros dos protagonistas fuera de misiones, consigue 3 estrellas de búsqueda y aguanta el tiempo requerido." },
    { "id": "gta_41", "chapter": "Varios", "name": "Exhibicionista", "desc": "Completa todos los saltos acrobáticos.", "type": "bronze", "missable": false, "online": false, "guide": "Realiza correctamente los 50 saltos únicos repartidos por San Andreas." },
    { "id": "gta_42", "chapter": "Varios", "name": "Guerra y paz a la carrera", "desc": "Compra Downtown Cab Co. y haz una carrera privada.", "type": "bronze", "missable": false, "online": false, "guide": "Cómprala con Franklin y espera a que el gerente te llame para realizar una misión de servicio VIP." },
    { "id": "gta_43", "chapter": "Varios", "name": "Por un pelo", "desc": "Completa todos los desafíos bajo el puente y de vuelo a cuchillo.", "type": "silver", "missable": false, "online": false, "guide": "Pasa por debajo de los 50 puentes y completa los 15 vuelos a cuchillo entre edificios." },
    { "id": "gta_44", "chapter": "Varios", "name": "Acólito altruista", "desc": "Entrega una víctima desprevenida a la secta altruista.", "type": "bronze", "missable": true, "online": false, "guide": "Con Trevor, recoge a un autoestopista de un evento aleatorio y llévalo al campamento de la secta en la montaña." },
    { "id": "gta_45", "chapter": "Varios", "name": "Se busca vivo o muerto", "desc": "Entrega a un objetivo de los fugitivos con vida.", "type": "bronze", "missable": true, "online": false, "guide": "Completa un encargo de Maude atrapando al fugitivo vivo usando la pistola táser o a golpes." },

    // EDITOR DE ROCKSTAR (Exclusivos de PS4 / PS5 / PC)
    { "id": "gta_46", "chapter": "Editor de Rockstar", "name": "Director novel", "desc": "Entra en el modo Director por primera vez como un actor desbloqueado.", "type": "bronze", "missable": false, "online": false, "guide": "Accede al modo Director desde el menú de pausa y entra al mundo con cualquier actor disponible." },
    { "id": "gta_47", "chapter": "Editor de Rockstar", "name": "Cazalocalizaciones", "desc": "Visita todas las ubicaciones en el modo Director.", "type": "bronze", "missable": false, "online": false, "guide": "Utiliza el menú de teletransporte para pasar por los 27 lugares preestablecidos del modo Director." },
    { "id": "gta_48", "chapter": "Editor de Rockstar", "name": "Actor de método", "desc": "Entra en el modo Director usando cualquiera de tus personajes de GTA Online.", "type": "bronze", "missable": false, "online": true, "guide": "Selecciona a tu personaje multijugador en la sección de actores del modo Director." },
    { "id": "gta_49", "chapter": "Editor de Rockstar", "name": "Amante de los animales", "desc": "Entra en el modo Director como un animal por primera vez.", "type": "bronze", "missable": false, "online": false, "guide": "Come una planta de peyote en el modo historia para desbloquear un animal y elígelo en el menú del director." },
    { "id": "gta_50", "chapter": "Editor de Rockstar", "name": "Cult Movie", "desc": "Entra en el modo Director como Cris Formage.", "type": "bronze", "missable": false, "online": false, "guide": "Completa el hilo de misiones de Epsilon en el modo historia y selecciona a Cris en el menú de actores especiales." },
    { "id": "gta_51", "chapter": "Editor de Rockstar", "name": "Obra de conjunto", "desc": "Desbloquea a todos los personajes del modo Historia y entra en el modo Director con uno de ellos.", "type": "bronze", "missable": false, "online": false, "guide": "Completa la campaña principal para desbloquear toda la plantilla en la sección de personajes de la historia." },
    { "id": "gta_52", "chapter": "Editor de Rockstar", "name": "Humanos de Los Santos", "desc": "Desbloquea a todos los personajes especiales y entra en el modo Director con uno de ellos.", "type": "bronze", "missable": false, "online": false, "guide": "Habla e interactúa con los 12 personajes especiales del modo historia (mimos, predicadores, etc.) para desbloquearlos." },
    { "id": "gta_53", "chapter": "Editor de Rockstar", "name": "Visionario de Vinewood", "desc": "Crea y exporta un vídeo usando el Editor de Rockstar.", "type": "bronze", "missable": false, "online": false, "guide": "Graba unos clips de juego manteniendo pulsado el botón correspondiente, edítalos en la línea de tiempo y expórtalos." },
    { "id": "gta_54", "chapter": "Editor de Rockstar", "name": "Majestuoso", "desc": "Crea y exporta 10 vídeos usando el Editor de Rockstar.", "type": "silver", "missable": false, "online": false, "guide": "Repite el proceso de creación y exportación de pequeños proyectos de vídeo 10 veces." },
    { "id": "gta_55", "chapter": "Editor de Rockstar", "name": "Criptozoólogo", "desc": "Desbloquea todos los animales terrestres y marinos para el modo Director.", "type": "silver", "missable": false, "online": false, "guide": "Encuentra las 27 plantas de peyote del mapa para desbloquear todos los animales (no es necesario el peyote especial de Bigfoot)." }
  ]
},
  {
  id: "cyberpunk2077",
  slug: "cyberpunk-2077",
  title: "Cyberpunk 2077",
  platform: "PS4 / PS5 / PC",
  cover: "img/cyberpunk.jpg",
  emoji: "🦾",
  totalTrophies: 45,
  difficulty: "4/10",
  minHours: 60,
  hasMissable: true,
  tags: ["rpg", "cyberpunk", "mundo-abierto", "acción"],
  trophies: [
    {
      id: "cp_01",
      chapter: "Platino",
      name: "Never Fade Away",
      desc: "Desbloquea todos los trofeos del juego.",
      type: "platinum",
      missable: false,
      online: false
    },

    {
      id: "cp_02",
      chapter: "Historia",
      name: "El Loco",
      desc: "Conviértete en mercenario.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_03",
      chapter: "Historia",
      name: "Los Amantes",
      desc: "Roba el Relic.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_04",
      chapter: "Historia",
      name: "El Ermitaño",
      desc: "Encuentra a Alt Cunningham.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_05",
      chapter: "Historia",
      name: "La Rueda de la Fortuna",
      desc: "Interroga a Anders Hellman.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_06",
      chapter: "Historia",
      name: "La Sacerdotisa",
      desc: "Habla con Hanako Arasaka.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_07",
      chapter: "Historia",
      name: "El Mundo",
      desc: "Completa el arco argumental principal.",
      type: "gold",
      missable: false,
      online: false
    },

    {
      id: "cp_08",
      chapter: "Finales",
      name: "El Diablo",
      desc: "Ayuda a Takemura a vengar la muerte de Saburo Arasaka.",
      type: "silver",
      missable: true,
      online: false
    },
    {
      id: "cp_09",
      chapter: "Finales",
      name: "La Estrella",
      desc: "Abandona Night City con los Aldecaldo.",
      type: "silver",
      missable: true,
      online: false
    },
    {
      id: "cp_10",
      chapter: "Finales",
      name: "El Sol",
      desc: "Conviértete en una leyenda del Afterlife.",
      type: "silver",
      missable: true,
      online: false
    },
    {
      id: "cp_11",
      chapter: "Finales",
      name: "Templanza",
      desc: "Deja que Johnny Silverhand controle tu cuerpo.",
      type: "silver",
      missable: true,
      online: false
    },

    {
      id: "cp_12",
      chapter: "Secundarias",
      name: "Judy contra Night City",
      desc: "Completa el arco argumental de Judy Álvarez.",
      type: "bronze",
      missable: true,
      online: false
    },
    {
      id: "cp_13",
      chapter: "Secundarias",
      name: "Dos en la carretera",
      desc: "Completa el arco argumental de Panam Palmer.",
      type: "bronze",
      missable: true,
      online: false
    },
    {
      id: "cp_14",
      chapter: "Secundarias",
      name: "Quemando cromo",
      desc: "Completa el arco argumental de Kerry Eurodyne.",
      type: "bronze",
      missable: true,
      online: false
    },
    {
      id: "cp_15",
      chapter: "Secundarias",
      name: "Proteger y servir",
      desc: "Completa el arco argumental de River Ward.",
      type: "bronze",
      missable: true,
      online: false
    },
    {
      id: "cp_16",
      chapter: "Secundarias",
      name: "Bushido y mantita",
      desc: "Ve a ver Bushido X con Rogue.",
      type: "bronze",
      missable: true,
      online: false
    },

    {
      id: "cp_17",
      chapter: "Distritos",
      name: "Elemental",
      desc: "Completa todos los encargos y chanchullos del escáner del NCPD en Watson.",
      type: "silver",
      missable: false,
      online: false
    },
    {
      id: "cp_18",
      chapter: "Distritos",
      name: "Pequeña Tokio",
      desc: "Completa todos los encargos y chanchullos del escáner del NCPD en Westbrook.",
      type: "silver",
      missable: false,
      online: false
    },
    {
      id: "cp_19",
      chapter: "Distritos",
      name: "Luces de la ciudad",
      desc: "Completa todos los encargos y chanchullos del escáner del NCPD en el Distrito Cero.",
      type: "silver",
      missable: false,
      online: false
    },
    {
      id: "cp_20",
      chapter: "Distritos",
      name: "Malas calles",
      desc: "Completa todos los encargos y chanchullos del escáner del NCPD en Heywood.",
      type: "silver",
      missable: false,
      online: false
    },
    {
      id: "cp_21",
      chapter: "Distritos",
      name: "La jungla de asfalto",
      desc: "Completa todos los encargos y chanchullos del escáner del NCPD en Santo Domingo.",
      type: "silver",
      missable: false,
      online: false
    },
    {
      id: "cp_22",
      chapter: "Distritos",
      name: "Desde Pacífica con amor",
      desc: "Completa todos los encargos y chanchullos del escáner del NCPD en Pacífica.",
      type: "silver",
      missable: false,
      online: false
    },
    {
      id: "cp_23",
      chapter: "Distritos",
      name: "Guerrero de la carretera",
      desc: "Completa todos los encargos y chanchullos del escáner del NCPD en las Badlands.",
      type: "silver",
      missable: false,
      online: false
    },

    {
      id: "cp_24",
      chapter: "Coleccionables",
      name: "Loco errante",
      desc: "Encuentra todos los murales del tarot.",
      type: "silver",
      missable: false,
      online: false
    },
    {
      id: "cp_25",
      chapter: "Coleccionables",
      name: "Breathtaking",
      desc: "Reúne todos los objetos que una vez pertenecieron a Johnny Silverhand.",
      type: "silver",
      missable: true,
      online: false
    },
    {
      id: "cp_26",
      chapter: "Coleccionables",
      name: "Viajero frecuente",
      desc: "Encuentra todos los dataterms de viaje rápido.",
      type: "silver",
      missable: false,
      online: false
    },

    {
      id: "cp_27",
      chapter: "Progreso",
      name: "Leyenda del Afterlife",
      desc: "Alcanza el nivel máximo de reputación.",
      type: "silver",
      missable: false,
      online: false
    },
    {
      id: "cp_28",
      chapter: "Progreso",
      name: "Motorexia",
      desc: "Compra todos los vehículos a la venta.",
      type: "silver",
      missable: false,
      online: false
    },
    {
      id: "cp_29",
      chapter: "Progreso",
      name: "Maestro artesano",
      desc: "Crea tres objetos legendarios.",
      type: "silver",
      missable: false,
      online: false
    },
    {
      id: "cp_30",
      chapter: "Progreso",
      name: "Diez de diez",
      desc: "Consigue el nivel máximo de una habilidad cualquiera.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_31",
      chapter: "Progreso",
      name: "Carbono modificado",
      desc: "Instala al menos un implante en cada sistema y parte del cuerpo.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_32",
      chapter: "Progreso",
      name: "Soy la ley",
      desc: "Completa todos los encuentros con ciberpsicópatas.",
      type: "silver",
      missable: false,
      online: false
    },

    {
      id: "cp_33",
      chapter: "Combate",
      name: "Soldado universal",
      desc: "Mata o incapacita a 300 enemigos con armas a distancia.",
      type: "silver",
      missable: false,
      online: false
    },
    {
      id: "cp_34",
      chapter: "Combate",
      name: "Guerrero universal",
      desc: "Mata o incapacita a 100 enemigos con armas cuerpo a cuerpo.",
      type: "silver",
      missable: false,
      online: false
    },
    {
      id: "cp_35",
      chapter: "Combate",
      name: "Neuromante",
      desc: "Mata o incapacita a tres enemigos con el hackeo rápido 'Detonar granada'.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_36",
      chapter: "Combate",
      name: "Mona Lisa acelerada",
      desc: "Mata o incapacita a 50 enemigos con el tiempo ralentizado.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_37",
      chapter: "Combate",
      name: "Luz de gas",
      desc: "Usa el hackeo rápido Distraer enemigos 30 veces sin llamar la atención.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_38",
      chapter: "Combate",
      name: "V de Vendetta",
      desc: "Cuando revivas con Segundo corazón, mata o incapacita al enemigo que te mató en menos de 5 segundos.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_39",
      chapter: "Combate",
      name: "Dos pájaros de un tiro",
      desc: "Mata o incapacita a dos enemigos de un solo tiro con un fusil de francotirador.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_40",
      chapter: "Combate",
      name: "Devolver al remitente",
      desc: "Mata o incapacita a un enemigo que te haya lanzado una granada.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_41",
      chapter: "Combate",
      name: "Método Stanislavski",
      desc: "Usa una opción de diálogo relacionada con el pasado de V diez veces.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_42",
      chapter: "Combate",
      name: "Aterrizaje forzoso",
      desc: "Cuando Berserker esté activo, haz un Aterrizaje de superhéroe y mata o incapacita a dos enemigos.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_43",
      chapter: "Combate",
      name: "Pistolero",
      desc: "Dispara a una granada enemiga en el aire con un revólver.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_44",
      chapter: "Combate",
      name: "Criptonomicón",
      desc: "Completa un Protocolo de invasión cargando tres daemons como mínimo.",
      type: "bronze",
      missable: false,
      online: false
    },
    {
      id: "cp_45",
      chapter: "Combate",
      name: "Arma marcial",
      desc: "Mata o incapacita a 3 enemigos seguidos con un revólver o una pistola en combate cuerpo a cuerpo.",
      type: "bronze",
      missable: false,
      online: false
    }
  ]
},
 {
  "id": "kh3",
  "slug": "kingdom-hearts-iii",
  "title": "Kingdom Hearts III",
  "platform": "PS4 / Xbox One / PC / Nintendo Switch",
  "cover": "img/kh3.jpg",
  "emoji": "🔑",
  "totalTrophies": 46,
  "difficulty": "4/10",
  "minHours": 50,
  "hasMissable": false,
  "tags": ["action-rpg", "disney", "square-enix", "fantasía"],
  "trophies": [
    // PLATINO
    { "id": "kh3_01", "chapter": "Platino", "name": "Maestro de KINGDOM HEARTS III", "desc": "Consigue todos los trofeos.", "type": "platinum", "missable": false, "online": false, "guide": "Se desbloquea automáticamente tras conseguir los otros 45 trofeos del juego base." },

    // HISTORIA
    { "id": "kh3_02", "chapter": "Historia", "name": "Un nuevo viaje", "desc": "Completa la historia en el Olimpo.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia tras completar el mundo de Hércules." },
    { "id": "kh3_03", "chapter": "Historia", "name": "Choque de dioses", "desc": "Completa la historia en Villa Crepúsculo.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia." },
    { "id": "kh3_04", "chapter": "Historia", "name": "Un deseo compartido", "desc": "Completa la historia en la Caja de juguetes.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia tras completar el mundo de Toy Story." },
    { "id": "kh3_05", "chapter": "Historia", "name": "Una amistad inquebrantable", "desc": "Completa la historia en el Reino de Corona.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia tras completar el mundo de Enredados." },
    { "id": "kh3_06", "chapter": "Historia", "name": "El corazón resiliente", "desc": "Completa la historia en Monstruópolis.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia tras completar el mundo de Monstruos S.A." },
    { "id": "kh3_07", "chapter": "Historia", "name": "Orgullo de un héroe", "desc": "Completa la historia en Arendelle.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia tras completar el mundo de Frozen." },
    { "id": "kh3_08", "chapter": "Historia", "name": "En el corazón de un rayo de sol", "desc": "Completa la historia en el Caribe.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia tras completar el mundo de Piratas del Caribe." },
    { "id": "kh3_09", "chapter": "Historia", "name": "Amor verdadero", "desc": "Completa la historia en San Fransokyo.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia tras completar el mundo de Big Hero 6." },
    { "id": "kh3_10", "chapter": "Historia", "name": "La promesa", "desc": "Completa la historia en el Bosque de los Cien Acres.", "type": "bronze", "missable": false, "online": false, "guide": "Mundo opcional de Winnie the Pooh accesible desde el libro en la cocina de Merlín (Villa Crepúsculo)." },
    { "id": "kh3_11", "chapter": "Historia", "name": "El final de todo", "desc": "Completa la historia en la Necrópolis de las Llaves Espada.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia en los compases finales." },
    { "id": "kh3_12", "chapter": "Historia", "name": "Choque de reyes", "desc": "Completa la historia en el Mundo Final.", "type": "bronze", "missable": false, "online": false, "guide": "Automático por la historia antes del jefe final." },
    { "id": "kh3_13", "chapter": "Historia", "name": "El fin del viaje", "desc": "Completa el juego y mira el final.", "type": "gold", "missable": false, "online": false, "guide": "Completa el juego derrotando al jefe final en cualquier dificultad." },

    // COLECCIONABLES Y DIARIO (GUMMIPHONE)
    { "id": "kh3_14", "chapter": "Coleccionables", "name": "Reyes ocultos", "desc": "Encuentra todos los portafortunas.", "type": "gold", "missable": false, "online": false, "guide": "Debes fotografiar los 90 símbolos con forma de Mickey Mouse repartidos por los mundos." },
    { "id": "kh3_15", "chapter": "Coleccionables", "name": "No dejes piedra sin remover", "desc": "Abre todos los cofres del tesoro.", "type": "silver", "missable": false, "online": false, "guide": "Encuentra y abre absolutamente todos los cofres del juego. Puedes revisar el progreso en el Gummiphone." },
    { "id": "kh3_16", "chapter": "Coleccionables", "name": "Conoce a tu enemigo", "desc": "Completa la sección de Adversarios del Gummiphone.", "type": "bronze", "missable": false, "online": false, "guide": "Derrota a todos los tipos de Sincorazón, Incorpóreos y Nescientes del juego, incluyendo los de los portales de batalla post-game." },
    { "id": "kh3_17", "chapter": "Coleccionables", "name": "Un récord tras otro", "desc": "Completa la sección de Récords de juego del Gummiphone.", "type": "silver", "missable": false, "online": false, "guide": "Registra puntuaciones en todos los minijuegos, misiones de los Siete Flantásticos y comandos de atracciones/vínculos." },
    { "id": "kh3_18", "chapter": "Coleccionables", "name": "Maestro de los flanes", "desc": "Completa las misiones de los Siete Flantásticos.", "type": "silver", "missable": false, "online": false, "guide": "Encuentra los 7 flanes con fruta en su cabeza y completa sus minijuegos alcanzando la puntuación para obtener su ingrediente especial." },

    // DESARROLLO Y FORJA
    { "id": "kh3_19", "chapter": "Desarrollo", "name": "Nivel máximo", "desc": "Lleva a Sora al nivel 99.", "type": "silver", "missable": false, "online": false, "guide": "Equípate accesorios que aumenten la EXP y farmea en los portales de batalla avanzados del post-game." },
    { "id": "kh3_20", "chapter": "Desarrollo", "name": "Orfebre", "desc": "Sube una Llave Espada al nivel máximo.", "type": "bronze", "missable": false, "online": false, "guide": "Mejora cualquier Llave Espada hasta el nivel 10 en la tienda del Moguri usando materiales de síntesis." },
    { "id": "kh3_21", "chapter": "Desarrollo", "name": "Arma Artema", "desc": "Sintetiza el Arma Artema.", "type": "silver", "missable": false, "online": false, "guide": "Requiere conseguir la receta y los materiales más raros, incluyendo los 7 Orichalcum+ repartidos por el juego." },
    { "id": "kh3_22", "chapter": "Desarrollo", "name": "Sintetizador", "desc": "Completa la lista de síntesis de la tienda de los moguris.", "type": "silver", "missable": false, "online": false, "guide": "Debes fabricar al menos una unidad de cada objeto disponible en la sección de síntesis." },

    // COCINA Y FOTOS
    { "id": "kh3_23", "chapter": "Cocina", "name": "Cornucopia", "desc": "Reúne todos los tipos de ingredientes del juego.", "type": "bronze", "missable": false, "online": false, "guide": "Recoge todos los alimentos del mapa y los premios de los flanes." },
    { "id": "kh3_24", "chapter": "Cocina", "name": "Menú completo", "desc": "Consigue tu primer \"Excelente\" al cocinar.", "type": "bronze", "missable": false, "online": false, "guide": "Cocina con éxito un plato en el restaurante del Chef Remy en Villa Crepúsculo." },
    { "id": "kh3_25", "chapter": "Cocina", "name": "Gran chef", "desc": "Consigue una calificación de \"Excelente\" en todos los platos.", "type": "silver", "missable": false, "online": false, "guide": "Consigue la máxima nota en las 28 recetas disponibles (menú normal y menú especial)." },
    { "id": "kh3_26", "chapter": "Fotos", "name": "¡Patata!", "desc": "Haz tu primera foto con el Gummiphone.", "type": "bronze", "missable": false, "online": false, "guide": "Usa la cámara del teléfono por primera vez en el modo libre." },
    { "id": "kh3_27", "chapter": "Fotos", "name": "Recuerdos imborrables", "desc": "Guarda un total de 50 fotos.", "type": "bronze", "missable": false, "online": false, "guide": "Haz 50 capturas cualesquiera y consérvalas en el álbum del Gummiphone." },

    // MINIJUEGOS Y MUNDOS
    { "id": "kh3_28", "chapter": "Minijuegos", "name": "Memoria muscular", "desc": "Consigue la puntuación más alta en todos los juegos del Reino Clásico.", "type": "silver", "missable": false, "online": false, "guide": "Consigue y juega los 23 minijuegos retro LCD. Solo necesitas registrar una puntuación (no hace falta superar un récord alto)." },
    { "id": "kh3_29", "chapter": "Minijuegos", "name": "Centurión", "desc": "Consigue al menos 12 000 000 de puntos en Verum Rex: Beat of Lead.", "type": "bronze", "missable": false, "online": false, "guide": "Minijuego en la Juguetería. Consigue combos altos destruyendo robots gigantes sin perder el multiplicador." },
    { "id": "kh3_30", "chapter": "Minijuegos", "name": "Bailarín festivo", "desc": "Consigue al menos 70 000 puntos en la Danza festiva.", "type": "bronze", "missable": false, "online": false, "guide": "Minijuego de baile en el Reino de Corona. Cambia de pareja rápido e interactúa con los barriles para maximizar los puntos." },
    { "id": "kh3_31", "chapter": "Minijuegos", "name": "Destructor de escudos", "desc": "Consigue al menos 600 000 puntos en el Deslizamiento alpino.", "type": "bronze", "missable": false, "online": false, "guide": "Minijuego de nieve en Arendelle. Memoriza la ruta, recoge los cristales y evita recibir daño para mantener el multiplicador." },
    { "id": "kh3_32", "chapter": "Minijuegos", "name": "Minero de datos", "desc": "Consigue el rango A en ambos circuitos del Cazaluz.", "type": "bronze", "missable": false, "online": false, "guide": "Minijuegos de carrera aérea y terrestre en San Fransokyo." },
    { "id": "kh3_33", "chapter": "Mundos", "name": "Acorazado", "desc": "Mejora al máximo el Leviatán.", "type": "bronze", "missable": false, "online": false, "guide": "Sube tu barco en El Caribe hasta el nivel 9 recolectando cangrejos blancos por las islas." },
    { "id": "kh3_34", "chapter": "Mundos", "name": "Verdadero capitán", "desc": "Hunde 200 barcos enemigos en el Caribe.", "type": "bronze", "missable": false, "online": false, "guide": "Navega por las aguas de este mundo destruyendo todas las flotas Sincorazón que encuentres." },

    // NAVE GUMI
    { "id": "kh3_35", "chapter": "Nave Gumi", "name": "Gumi-rastreador", "desc": "Consigue 20 planos de naves gumi únicos.", "type": "bronze", "missable": false, "online": false, "guide": "Se obtienen derrotando ciertos jefes en el espacio, fotografiando constelaciones o abriendo cristales gumi." },
    { "id": "kh3_36", "chapter": "Nave Gumi", "name": "Astrónomo", "desc": "Fotografía las 9 constelaciones desde la nave gumi.", "type": "bronze", "missable": false, "online": false, "guide": "Busca las agrupaciones de estrellas con formas de personajes en los tres mapas del espacio y hazles una foto clara." },
    { "id": "kh3_37", "chapter": "Nave Gumi", "name": "Cazaestrellas", "desc": "Derrota a 1000 enemigos con la nave gumi.", "type": "bronze", "missable": false, "online": false, "guide": "Trofeo acumulativo completando misiones de combate espacial." },
    { "id": "kh3_38", "chapter": "Nave Gumi", "name": "Termosfera", "desc": "Derrota al Schwarzgeist, la amenaza del espacio gumi.", "type": "silver", "missable": false, "online": false, "guide": "Jefe secreto espacial oculto dentro del gran torbellino verde del segundo mapa. Requiere una nave con alta velocidad." },

    // COMBATE
    { "id": "kh3_39", "chapter": "Combate", "name": "Novato", "desc": "Derrota a 1000 enemigos.", "type": "bronze", "missable": false, "online": false, "guide": "Acumulativo a lo largo de tu partida." },
    { "id": "kh3_40", "chapter": "Combate", "name": "Caballero", "desc": "Derrota a 3000 enemigos.", "type": "bronze", "missable": false, "online": false, "guide": "Acumulativo a lo largo de tu partida." },
    { "id": "kh3_41", "chapter": "Combate", "name": "Alfil", "desc": "Derrota a 5000 enemigos.", "type": "bronze", "missable": false, "online": false, "guide": "Saldrá solo mientras buscas el 100% del juego." },
    { "id": "kh3_42", "chapter": "Combate", "name": "Mago maestro", "desc": "Lanza una gran magia por primera vez.", "type": "bronze", "missable": false, "online": false, "guide": "Usa comandos de situación mágicos de nivel avanzado (como Piro++ o Electro++)." },
    { "id": "kh3_43", "chapter": "Combate", "name": "Caballero de la Mesa Redonda", "desc": "Usa una atracción por primera vez.", "type": "bronze", "missable": false, "online": false, "guide": "Utiliza cualquier comando de situación verde con forma de atracción de feria (como las tazas o el barco pirata)." },
    { "id": "kh3_44", "chapter": "Combate", "name": "Corazones como uno solo", "desc": "Utiliza todos los vínculos al menos una vez.", "type": "bronze", "missable": false, "online": false, "guide": "Invoca a todos los Nexos disponibles del juego (Simba, Ariel, Rompe-Ralph, Meow Wow y Stitch)." },
    { "id": "kh3_45", "chapter": "Combate", "name": "Fuerza cambiante", "desc": "Realiza una transformación de Llave Espada por primera vez.", "type": "bronze", "missable": false, "online": false, "guide": "Ataca continuamente hasta activar y usar el cambio de forma de tu arma principal." },
    { "id": "kh3_46", "chapter": "Combate", "name": "Tiro certero", "desc": "Ejecuta un tiro certero por primera vez.", "type": "bronze", "missable": false, "online": false, "guide": "Mantén pulsado el botón de apuntado (R5 / RB) fijando objetivos y dispara consumiendo la barra de enfoque." }
  ]
},
 {
  "id": "uncharted1",
  "slug": "uncharted-el-tesoro-de-drake",
  "title": "Uncharted: El tesoro de Drake",
  "platform": "PS3 / PS4",
  "cover": "img/uncharted1.jpg",
  "emoji": "🧭",
  "totalTrophies": 46,
  "difficulty": "5/10",
  "minHours": 15,
  "hasMissable": false,
  "tags": ["acción", "aventura", "lineal", "disparos"],
  "trophies": [
    // PLATINO
    { "id": "unch_01", "chapter": "Platino", "name": "¡Platino!", "desc": "Consigue todos los trofeos.", "type": "platinum", "missable": false, "online": false, "guide": "Desbloquea todos los demás trofeos del juego base." },

    // HISTORIA Y DIFICULTAD
    { "id": "unch_02", "chapter": "Historia", "name": "¡Completado! - Fácil", "desc": "Completa el juego en el modo Fácil.", "type": "bronze", "missable": false, "online": false, "guide": "Se acumula si completas el juego en una dificultad superior." },
    { "id": "unch_03", "chapter": "Historia", "name": "¡Completado! - Normal", "desc": "Completa el juego en el modo Normal.", "type": "bronze", "missable": false, "online": false, "guide": "Se acumula si completas el juego en una dificultad superior." },
    { "id": "unch_04", "chapter": "Historia", "name": "¡Completado! - Difícil", "desc": "Completa el juego en el modo Difícil.", "type": "silver", "missable": false, "online": false, "guide": "Completa la campaña en Difícil. Desbloquea el modo Aplastante." },
    { "id": "unch_05", "chapter": "Historia", "name": "¡Completado! - Aplastante", "desc": "Completa el juego en el modo Aplastante.", "type": "gold", "missable": false, "online": false, "guide": "La máxima dificultad del juego base. Usa las coberturas constantemente y prioriza los tiros a la cabeza." },

    // COLECCIONABLES
    { "id": "unch_06", "chapter": "Coleccionables", "name": "Primer tesoro", "desc": "Encuentra un tesoro.", "type": "bronze", "missable": false, "online": false, "guide": "Encuentra cualquiera de los destellos brillantes repartidos por los escenarios." },
    { "id": "unch_07", "chapter": "Coleccionables", "name": "Cazador de tesoros novato", "desc": "Encuentra 20 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Puedes seguir guías por capítulos o usar la selección de capítulos si te dejas alguno." },
    { "id": "unch_08", "chapter": "Coleccionables", "name": "Cazador de tesoros profesional", "desc": "Encuentra 40 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Progreso acumulable entre partidas." },
    { "id": "unch_09", "chapter": "Coleccionables", "name": "Maestro cazador de tesoros", "desc": "Encuentra los 60 tesoros.", "type": "silver", "missable": false, "online": false, "guide": "Consigue todos los tesoros estándar del juego." },
    { "id": "unch_10", "chapter": "Coleccionables", "name": "Buscador de reliquias", "desc": "Encuentra la reliquia extraña.", "type": "bronze", "missable": false, "online": false, "guide": "Se encuentra en el Capítulo 5 (La Fortaleza), en una esquina de las alcantarillas. Tiene forma de huevo de Jak & Daxter." },

    // COMBATE
    { "id": "unch_11", "chapter": "Combate", "name": "10 tiros a la cabeza", "desc": "Elimina a 10 enemigos con tiros a la cabeza.", "type": "bronze", "missable": false, "online": false, "guide": "Acumulativo apuntando a la cabeza de los enemigos." },
    { "id": "unch_12", "chapter": "Combate", "name": "30 tiros a la cabeza", "desc": "Elimina a 30 enemigos con tiros a la cabeza.", "type": "bronze", "missable": false, "online": false, "guide": "Acumulativo a lo largo de la historia." },
    { "id": "unch_13", "chapter": "Combate", "name": "100 tiros a la cabeza", "desc": "Elimina a 100 enemigos con tiros a la cabeza.", "type": "silver", "missable": false, "online": false, "guide": "Saldrá de forma natural buscando el trofeo de dificultad Aplastante." },
    { "id": "unch_14", "chapter": "Combate", "name": "Tirador experto", "desc": "Elimina a 5 enemigos consecutivamente con tiros a la cabeza.", "type": "bronze", "missable": false, "online": false, "guide": "Debes encadenar 5 bajas seguidas a la cabeza sin fallar ni matar con tiros al cuerpo." },
    { "id": "unch_15", "chapter": "Combate", "name": "Tirador de primera", "desc": "Elimina a 10 enemigos consecutivamente con tiros a la cabeza.", "type": "silver", "missable": false, "online": false, "guide": "Recomendable hacerlo en dificultad Fácil utilizando armas precisas como la pistola de un solo tiro." },
    { "id": "unch_16", "chapter": "Combate", "name": "Alborotador", "desc": "Elimina a 20 enemigos con combates cuerpo a cuerpo.", "type": "bronze", "missable": false, "online": false, "guide": "Derrota a enemigos usando el botón de golpe." },
    { "id": "unch_17", "chapter": "Combate", "name": "Buscapleitos", "desc": "Elimina a 50 enemigos con combates cuerpo a cuerpo.", "type": "silver", "missable": false, "online": false, "guide": "Acumulativo golpeando enemigos a corta distancia." },
    { "id": "unch_18", "chapter": "Combate", "name": "Superalborotador", "desc": "Elimina a 5 enemigos con combate cuerpo a cuerpo consecutivamente.", "type": "bronze", "missable": false, "online": false, "guide": "Elimina a 5 rivales seguidos a golpes sin usar armas de fuego en el proceso." },
    { "id": "unch_19", "chapter": "Combate", "name": "Atacante brutal", "desc": "Elimina a 20 enemigos con el Combo Brutal.", "type": "bronze", "missable": false, "online": false, "guide": "El combo brutal se realiza presionando Cuadrado, Triángulo, Cuadrado de forma rítmica." },
    { "id": "unch_20", "chapter": "Combate", "name": "Experto en ataque brutal", "desc": "Elimina a 5 enemigos seguidos con el Combo Brutal.", "type": "bronze", "missable": false, "online": false, "guide": "Realiza el combo rítmico a 5 enemigos de manera consecutiva." },
    { "id": "unch_21", "chapter": "Combate", "name": "Puño de acero", "desc": "Elimina a 5 enemigos de un solo puñetazo, después de debilitarlos con disparos.", "type": "bronze", "missable": false, "online": false, "guide": "Dispara desde la cadera a un enemigo cercano una vez y luego presiona Cuadrado inmediatamente." },
    { "id": "unch_22", "chapter": "Combate", "name": "Experto en puño de acero", "desc": "Elimina a 5 enemigos de un solo puñetazo consecutivamente, tras debilitarlos con disparos.", "type": "silver", "missable": false, "online": false, "guide": "Repite la técnica de un tiro desde la cadera y un puñetazo con 5 enemigos seguidos sin fallar." },
    { "id": "unch_23", "chapter": "Combate", "name": "¡Atacante sigiloso!", "desc": "Elimina a 20 enemigos atacando por la espalda.", "type": "bronze", "missable": false, "online": false, "guide": "Acércate por detrás a enemigos distraídos y presiona el botón de ataque." },
    { "id": "unch_24", "chapter": "Combate", "name": "Verdugo", "desc": "Elimina a 10 enemigos apuntando a ciegas desde una cobertura.", "type": "bronze", "missable": false, "online": false, "guide": "Pégate a una pared u objeto y dispara con R2 sin pulsar el botón de apuntar (L2)." },
    { "id": "unch_25", "chapter": "Combate", "name": "Verdugo con granadas", "desc": "Elimina a 10 enemigos con granadas apuntando a ciegas desde una cobertura.", "type": "bronze", "missable": false, "online": false, "guide": "Lanza granadas desde cobertura pasiva sin asomarte." },
    { "id": "unch_26", "chapter": "Combate", "name": "Tirador temerario", "desc": "Elimina a 20 enemigos disparando desde la cadera (sin apuntar).", "type": "bronze", "missable": false, "online": false, "guide": "Camina hacia los enemigos y dispara directamente solo con R2." },
    { "id": "unch_27", "chapter": "Combate", "name": "Tirador colgado", "desc": "Elimina a 20 enemigos disparando colgado de un saliente.", "type": "bronze", "missable": false, "online": false, "guide": "Suéstate de cualquier cornisa o cuerda y elimina enemigos usando tu arma de mano." },
    { "id": "unch_28", "chapter": "Combate", "name": "Verdugo colgado", "desc": "Elimina a 10 enemigos con granadas colgado de un saliente.", "type": "bronze", "missable": false, "online": false, "guide": "Apunta y lanza granadas mientras cuelgas de una plataforma." },
    { "id": "unch_29", "chapter": "Combate", "name": "Coleccionista de granadas", "desc": "Elimina a 3 enemigos con una sola granada.", "type": "bronze", "missable": false, "online": false, "guide": "Busca grupos apretados de enemigos, como los que aparecen bajando de camiones en los primeros capítulos." },
    { "id": "unch_30", "chapter": "Combate", "name": "Superviviente", "desc": "Elimina a 50 enemigos consecutivamente sin morir.", "type": "silver", "missable": false, "online": false, "guide": "Se puede hacer fácilmente combinando capítulos en dificultad Fácil de manera segura." },

    // ARMAS
    { "id": "unch_31", "chapter": "Armas", "name": "20 muertes: PM - 9mm", "desc": "Elimina a 20 enemigos con la PM - 9mm.", "type": "bronze", "missable": false, "online": false, "guide": "Pistola estándar inicial." },
    { "id": "unch_32", "chapter": "Armas", "name": "20 muertes: 92FS - 9mm", "desc": "Elimina a 20 enemigos con la 92FS - 9mm.", "type": "bronze", "missable": false, "online": false, "guide": "Pistola común a lo largo del juego." },
    { "id": "unch_33", "chapter": "Armas", "name": "50 muertes: AK-47", "desc": "Elimina a 50 enemigos con el AK-47.", "type": "bronze", "missable": false, "online": false, "guide": "Rifle de asalto estándar usado por los mercenarios." },
    { "id": "unch_34", "chapter": "Armas", "name": "50 muertes: M4", "desc": "Elimina a 50 enemigos con el M4.", "type": "bronze", "missable": false, "online": false, "guide": "Aparece en los capítulos de la segunda mitad del juego." },
    { "id": "unch_35", "chapter": "Armas", "name": "30 muertes: Desert - 5", "desc": "Elimina a 30 enemigos con la Desert - 5.", "type": "bronze", "missable": false, "online": false, "guide": "Pistola pesada con mira láser que llevan algunos francotiradores." },
    { "id": "unch_36", "chapter": "Armas", "name": "30 muertes: Wes - 44", "desc": "Elimina a 30 enemigos con la Wes - 44.", "type": "bronze", "missable": false, "online": false, "guide": "Revólver de gran potencia disponible en capítulos avanzados." },
    { "id": "unch_37", "chapter": "Armas", "name": "30 muertes: Moss - 12", "desc": "Elimina a 30 enemigos con la Moss - 12.", "type": "bronze", "missable": false, "online": false, "guide": "Escopeta de corredera para distancias cortas." },
    { "id": "unch_38", "chapter": "Armas", "name": "30 muertes: SAS - 12", "desc": "Elimina a 30 enemigos con la SAS - 12.", "type": "bronze", "missable": false, "online": false, "guide": "Escopeta semiautomática usada por tropas pesadas." },
    { "id": "unch_39", "chapter": "Armas", "name": "20 muertes: M79", "desc": "Elimina a 20 enemigos con el M79.", "type": "bronze", "missable": false, "online": false, "guide": "Lanzagranadas de mano. Muy útil contra grupos." },
    { "id": "unch_40", "chapter": "Armas", "name": "20 muertes: Micro - 9mm", "desc": "Elimina a 20 enemigos con la Micro - 9mm.", "type": "bronze", "missable": false, "online": false, "guide": "Subfusil de una mano usado comúnmente en persecuciones." },
    { "id": "unch_41", "chapter": "Armas", "name": "20 muertes: Francotirador Dragón", "desc": "Elimina a 20 enemigos con el Francotirador Dragón.", "type": "bronze", "missable": false, "online": false, "guide": "Rifle de precisión con mira telescópica." },
    { "id": "unch_42", "chapter": "Armas", "name": "30 muertes: MP40", "desc": "Elimina a 30 enemigos con el MP40.", "type": "bronze", "missable": false, "online": false, "guide": "Arma clásica encontrada en los capítulos del búnker." },

    // EXTRAS (Colección Nathan Drake / PS4)
    { "id": "unch_43", "chapter": "Extras", "name": "Exploración exprés", "desc": "Completa un capítulo en el modo Carrera continua.", "type": "bronze", "missable": false, "online": false, "guide": "Activa el modo contrarreloj al iniciar cualquier capítulo corto de la campaña." },
    { "id": "unch_44", "chapter": "Extras", "name": "Cazador de fotos insólito", "desc": "Activa el modo Foto justo después de encontrar un tesoro.", "type": "bronze", "missable": false, "online": false, "guide": "Recoge un tesoro y abre de inmediato el menú para activar la cámara del juego." },
    { "id": "unch_45", "chapter": "Extras", "name": "Cosplay a la carrera", "desc": "Completa un capítulo usando un aspecto alternativo.", "type": "bronze", "missable": false, "online": false, "guide": "Cambia el traje de Drake desde el menú de recompensas y completa cualquier nivel." },
    { "id": "unch_46", "chapter": "Extras", "name": "Gula de trofeos", "desc": "Consigue todas las estadísticas de bajas con armas.", "type": "bronze", "missable": false, "online": false, "guide": "Se consigue automáticamente al completar los trofeos individuales de eliminación por armas." }
  ]
},
 {
  "id": "uncharted2",
  "slug": "uncharted-2-among-thieves",
  "title": "Uncharted 2: El reino de los ladrones",
  "platform": "PS3 / PS4",
  "cover": "img/uncharted2.jpg",
  "emoji": "🏔️",
  "totalTrophies": 45,
  "difficulty": "5/10",
  "minHours": 20,
  "hasMissable": false,
  "tags": ["acción", "aventura", "lineal", "disparos"],
  "trophies": [
    // PLATINO
    { "id": "unch2_01", "chapter": "Platino", "name": "¡Platino!", "desc": "Consigue todos los trofeos.", "type": "platinum", "missable": false, "online": false, "guide": "Se desbloquea tras conseguir todos los demás trofeos del juego base." },

    // HISTORIA Y DIFICULTAD
    { "id": "unch2_02", "chapter": "Historia", "name": "¡Completado! - Fácil", "desc": "Completa el juego en el modo Fácil.", "type": "bronze", "missable": false, "online": false, "guide": "Se acumula si completas la campaña en una dificultad superior." },
    { "id": "unch2_03", "chapter": "Historia", "name": "¡Completado! - Normal", "desc": "Completa el juego en el modo Normal.", "type": "bronze", "missable": false, "online": false, "guide": "Se acumula si completas la campaña en una dificultad superior." },
    { "id": "unch2_04", "chapter": "Historia", "name": "¡Completado! - Difícil", "desc": "Completa el juego en el modo Difícil.", "type": "silver", "missable": false, "online": false, "guide": "Completa la historia en Difícil. Al hacerlo se desbloqueará el modo Aplastante." },
    { "id": "unch2_05", "chapter": "Historia", "name": "¡Completado! - Aplastante", "desc": "Completa el juego en el modo Aplastante.", "type": "gold", "missable": false, "online": false, "guide": "La dificultad reina del juego. Usa coberturas con cabeza, abusa del sigilo siempre que puedas y prioriza los tiros a la cabeza." },

    // COLECCIONABLES
    { "id": "unch2_06", "chapter": "Coleccionables", "name": "Primer tesoro", "desc": "Encuentra un tesoro.", "type": "bronze", "missable": false, "online": false, "guide": "Recoge tu primer tesoro brillante del suelo." },
    { "id": "unch2_07", "chapter": "Coleccionables", "name": "Cazador de tesoros novato", "desc": "Encuentra 20 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue 20 tesoros. Puedes revisar tu progreso en el menú de estadísticas." },
    { "id": "unch2_08", "chapter": "Coleccionables", "name": "Cazador de tesoros competente", "desc": "Encuentra 40 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue 40 tesoros acumulados." },
    { "id": "unch2_09", "chapter": "Coleccionables", "name": "Cazador de tesoros experto", "desc": "Encuentra 60 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue 60 tesoros acumulados." },
    { "id": "unch2_10", "chapter": "Coleccionables", "name": "Cazador de tesoros profesional", "desc": "Encuentra 80 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue 80 tesoros acumulados." },
    { "id": "unch2_11", "chapter": "Coleccionables", "name": "Maestro cazador de tesoros", "desc": "Encuentra los 100 tesoros.", "type": "silver", "missable": false, "online": false, "guide": "Encuentra todos los tesoros normales del juego. Puedes usar la selección de capítulos si te falta alguno." },
    { "id": "unch2_12", "chapter": "Coleccionables", "name": "Buscador de reliquias", "desc": "Encuentra la reliquia extraña.", "type": "bronze", "missable": false, "online": false, "guide": "Se encuentra en el Capítulo 12 (Un barrio de mala muerte), en la azotea de un edificio antes de usar la tirolina. Es el clásico huevo de Jak & Daxter." },

    // COMBATE
    { "id": "unch2_13", "chapter": "Combate", "name": "20 tiros a la cabeza", "desc": "Elimina a 20 enemigos con tiros a la cabeza.", "type": "bronze", "missable": false, "online": false, "guide": "Acumulativo apuntando a la cabeza de tus rivales." },
    { "id": "unch2_14", "chapter": "Combate", "name": "100 tiros a la cabeza", "desc": "Elimina a 100 enemigos con tiros a la cabeza.", "type": "silver", "missable": false, "online": false, "guide": "Saldrá de forma natural durante la campaña." },
    { "id": "unch2_15", "chapter": "Combate", "name": "Tirador experto", "desc": "Elimina a 5 enemigos consecutivamente con tiros a la cabeza.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue 5 bajas seguidas a la cabeza sin fallar disparos intermediarios ni matar al cuerpo." },
    { "id": "unch2_16", "chapter": "Combate", "name": "Gamberro de las carreras", "desc": "Elimina a 20 enemigos disparando desde la cadera (sin apuntar).", "type": "bronze", "missable": false, "online": false, "guide": "Dispara en movimiento usando solo el gatillo de disparo (R2/R1) a corta distancia." },
    { "id": "unch2_17", "chapter": "Combate", "name": "Verdugo", "desc": "Elimina a 20 enemigos apuntando a ciegas desde una cobertura.", "type": "bronze", "missable": false, "online": false, "guide": "Pégate a un muro y dispara sin pulsar el botón de apuntado." },
    { "id": "unch2_18", "chapter": "Combate", "name": "Por los pelos", "desc": "Elimina a 20 enemigos con disparos colgado de un saliente.", "type": "bronze", "missable": false, "online": false, "guide": "Quédate colgado de bordes o cornisas y abate enemigos usando tu pistola." },
    { "id": "unch2_19", "chapter": "Combate", "name": "Camorrista", "desc": "Elimina a 20 enemigos con combates cuerpo a cuerpo.", "type": "bronze", "missable": false, "online": false, "guide": "Elimina enemigos a base de puñetazos normales." },
    { "id": "unch2_20", "chapter": "Combate", "name": "Atacante brutal", "desc": "Elimina a 20 enemigos con el Combo Brutal.", "type": "bronze", "missable": false, "online": false, "guide": "Realiza el combo cuerpo a cuerpo presionando Cuadrado, Triángulo, Cuadrado de forma rítmica." },
    { "id": "unch2_21", "chapter": "Combate", "name": "Experto en ataque brutal", "desc": "Elimina a 5 enemigos seguidos con el Combo Brutal.", "type": "bronze", "missable": false, "online": false, "guide": "Encadena 5 bajas seguidas realizando correctamente la secuencia rítmica." },
    { "id": "unch2_22", "chapter": "Combate", "name": "Puño de acero", "desc": "Elimina a 20 enemigos de un solo puñetazo, después de debilitarlos con disparos.", "type": "bronze", "missable": false, "online": false, "guide": "Dispara una vez desde la cadera a un enemigo cercano y pulsa Cuadrado de inmediato para tumbarlo." },
    { "id": "unch2_23", "chapter": "Combate", "name": "Experto en puño de acero", "desc": "Elimina a 5 enemigos de un solo puñetazo consecutivamente, tras debilitarlos con disparos.", "type": "silver", "missable": false, "online": false, "guide": "Repite la técnica del tiro desde la cadera y el puñetazo instantáneo con 5 enemigos seguidos." },
    { "id": "unch2_24", "chapter": "Combate", "name": "Atacante sigiloso", "desc": "Elimina a 20 enemigos atacando por la espalda.", "type": "bronze", "missable": false, "online": false, "guide": "Acércate agachado por detrás y elimínalos sin levantar sospechas." },
    { "id": "unch2_25", "chapter": "Combate", "name": "Maestro ninja", "desc": "Elimina a 50 enemigos atacando por la espalda.", "type": "silver", "missable": false, "online": false, "guide": "Aprovecha los capítulos iniciales del museo y de sigilo urbano para acumular bajas silenciosas." },
    { "id": "unch2_26", "chapter": "Combate", "name": "Verdugo con granadas", "desc": "Elimina a 10 enemigos con granadas apuntando a ciegas desde una cobertura.", "type": "bronze", "missable": false, "online": false, "guide": "Arroja granadas desde una cobertura pasiva sin asomarte en absoluto." },
    { "id": "unch2_27", "chapter": "Combate", "name": "Coleccionista de granadas", "desc": "Elimina a 3 enemigos con una sola explosión.", "type": "bronze", "missable": false, "online": false, "guide": "Lanza una granada al centro de un grupo concentrado de enemigos o cuando bajen de camiones." },
    { "id": "unch2_28", "chapter": "Combate", "name": "Superviviente", "desc": "Elimina a 75 enemigos consecutivamente sin morir.", "type": "silver", "missable": false, "online": false, "guide": "Puedes hacerlo de forma segura jugando capítulos de la mitad del juego en dificultad Fácil." },

    // ARMAS
    { "id": "unch2_29", "chapter": "Armas", "name": "50 muertes: AK-47", "desc": "Elimina a 50 enemigos con el AK-47.", "type": "bronze", "missable": false, "online": false, "guide": "Rifle de asalto común en todo el juego." },
    { "id": "unch2_30", "chapter": "Armas", "name": "50 muertes: M4", "desc": "Elimina a 50 enemigos con el M4.", "type": "bronze", "missable": false, "online": false, "guide": "Rifle automático avanzado de gran precisión." },
    { "id": "unch2_31", "chapter": "Armas", "name": "30 muertes: FAL", "desc": "Elimina a 30 enemigos con el FAL.", "type": "bronze", "missable": false, "online": false, "guide": "Rifle que dispara ráfagas de tres balas con mira táctica." },
    { "id": "unch2_32", "chapter": "Armas", "name": "30 muertes: Moss - 12", "desc": "Elimina a 30 enemigos con la Moss - 12.", "type": "bronze", "missable": false, "online": false, "guide": "Escopeta de corredera clásica de mano." },
    { "id": "unch2_33", "chapter": "Armas", "name": "30 muertes: SAS - 12", "desc": "Elimina a 30 enemigos con la SAS - 12.", "type": "bronze", "missable": false, "online": false, "guide": "Escopeta semiautomática muy destructiva a corta distancia." },
    { "id": "unch2_34", "chapter": "Armas", "name": "30 muertes: Wes - 44", "desc": "Elimina a 30 enemigos con la Wes - 44.", "type": "bronze", "missable": false, "online": false, "guide": "Revólver pesado de enorme potencia." },
    { "id": "unch2_35", "chapter": "Armas", "name": "30 muertes: Desert - 5", "desc": "Elimina a 30 enemigos con la Desert - 5.", "type": "bronze", "missable": false, "online": false, "guide": "Pistola semiautomática de gran calibre." },
    { "id": "unch2_36", "chapter": "Armas", "name": "20 muertes: Francotirador Dragón", "desc": "Elimina a 20 enemigos con el Francotirador Dragón.", "type": "bronze", "missable": false, "online": false, "guide": "Rifle de francotirador con mira telescópica." },
    { "id": "unch2_37", "chapter": "Armas", "name": "20 muertes: 92FS - 9mm", "desc": "Elimina a 20 enemigos con la 92FS - 9mm.", "type": "bronze", "missable": false, "online": false, "guide": "La pistola reglamentaria por defecto." },
    { "id": "unch2_38", "chapter": "Armas", "name": "20 muertes: Micro - 9mm", "desc": "Elimina a 20 enemigos con la Micro - 9mm.", "type": "bronze", "missable": false, "online": false, "guide": "Subfusil ligero de ráfaga rápida." },
    { "id": "unch2_39", "chapter": "Armas", "name": "20 muertes: Pistola P08", "desc": "Elimina a 20 enemigos con la Pistola P08.", "type": "bronze", "missable": false, "online": false, "guide": "Arma clásica de mano que se encuentra en zonas específicas de la historia." },
    { "id": "unch2_40", "chapter": "Armas", "name": "20 muertes: RPG - 7", "desc": "Elimina a 20 enemigos con el RPG - 7.", "type": "bronze", "missable": false, "online": false, "guide": "Lanzacohetes pesado. Ideal para limpiar grupos grandes." },
    { "id": "unch2_41", "chapter": "Armas", "name": "30 muertes: M32 - Hammer", "desc": "Elimina a 30 enemigos con el M32 - Hammer.", "type": "bronze", "missable": false, "online": false, "guide": "Lanzagranadas semiautomático de tambor." },
    { "id": "unch2_42", "chapter": "Armas", "name": "20 muertes: GAU - 19", "desc": "Elimina a 20 enemigos con la GAU - 19.", "type": "bronze", "missable": false, "online": false, "guide": "La ametralladora rotatoria pesada (Minigun). Ralentiza el movimiento de Drake pero barre a los enemigos." },

    // VARIOS / ONLINE
    { "id": "unch2_43", "chapter": "Varios", "name": "Marco Polo", "desc": "Date un baño en la piscina de la azotea del hotel.", "type": "bronze", "missable": false, "online": false, "guide": "En el Capítulo 6 (A salvo), salta dentro de la piscina del hotel de Nepal y quédate flotando unos segundos hasta que Chloe llame a Drake." },
    { "id": "unch2_44", "chapter": "Online", "name": "Buscador de emociones", "desc": "Completa una partida de juego competitivo multijugador.", "type": "bronze", "missable": false, "online": true, "guide": "*(Nota: Solo requerido en la lista original de PS3; eliminado en la versión Remasterizada de PS4 debido al cierre de servidores).* " },
    { "id": "unch2_45", "chapter": "Online", "name": "Compañero de fatigas", "desc": "Completa una partida de juego cooperativo multijugador.", "type": "bronze", "missable": false, "online": true, "guide": "*(Nota: Solo requerido en la lista original de PS3; eliminado en la versión Remasterizada de PS4).* " }
  ]
},
 {
  "id": "uncharted3",
  "slug": "uncharted-3-la-traicion-de-drake",
  "title": "Uncharted 3: La traición de Drake",
  "platform": "PS3 / PS4",
  "cover": "img/uncharted3.jpg",
  "emoji": "🏜️",
  "totalTrophies": 43,
  "difficulty": "5/10",
  "minHours": 20,
  "hasMissable": false,
  "tags": ["acción", "aventura", "lineal", "disparos"],
  "trophies": [
    // PLATINO
    { "id": "unch3_01", "chapter": "Platino", "name": "¡Platino!", "desc": "Consigue todos los trofeos.", "type": "platinum", "missable": false, "online": false, "guide": "Se desbloquea automáticamente tras conseguir todos los demás trofeos del juego base." },

    // HISTORIA Y DIFICULTAD
    { "id": "unch3_02", "chapter": "Historia", "name": "¡Completado! - Fácil", "desc": "Completa el juego en el modo Fácil.", "type": "bronze", "missable": false, "online": false, "guide": "Se acumula si completas la campaña en una dificultad superior." },
    { "id": "unch3_03", "chapter": "Historia", "name": "¡Completado! - Normal", "desc": "Completa el juego en el modo Normal.", "type": "bronze", "missable": false, "online": false, "guide": "Se acumula si completas la campaña en una dificultad superior." },
    { "id": "unch3_04", "chapter": "Historia", "name": "¡Completado! - Difícil", "desc": "Completa el juego en el modo Difícil.", "type": "silver", "missable": false, "online": false, "guide": "Completa la historia en Difícil. Al hacerlo desbloquearás la dificultad Aplastante." },
    { "id": "unch3_05", "chapter": "Historia", "name": "¡Completado! - Aplastante", "desc": "Completa el juego en el modo Aplastante.", "type": "gold", "missable": false, "online": false, "guide": "La dificultad más alta del juego base. Aprovecha el nuevo sistema para devolver granadas, cúbrete constantemente y abusa de los tiros a la cabeza." },

    // COLECCIONABLES
    { "id": "unch3_06", "chapter": "Coleccionables", "name": "Primer tesoro", "desc": "Encuentra un tesoro.", "type": "bronze", "missable": false, "online": false, "guide": "Recoge tu primer tesoro brillante del suelo." },
    { "id": "unch3_07", "chapter": "Coleccionables", "name": "Cazador de tesoros novato", "desc": "Encuentra 20 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue 20 tesoros acumulados." },
    { "id": "unch3_08", "chapter": "Coleccionables", "name": "Cazador de tesoros competente", "desc": "Encuentra 40 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue 40 tesoros acumulados." },
    { "id": "unch3_09", "chapter": "Coleccionables", "name": "Cazador de tesoros experto", "desc": "Encuentra 60 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue 60 tesoros acumulados." },
    { "id": "unch3_10", "chapter": "Coleccionables", "name": "Cazador de tesoros profesional", "desc": "Encuentra 80 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue 80 tesoros acumulados." },
    { "id": "unch3_11", "chapter": "Coleccionables", "name": "Maestro cazador de tesoros", "desc": "Encuentra los 100 tesoros.", "type": "silver", "missable": false, "online": false, "guide": "Encuentra los 100 tesoros ocultos en el juego. Puedes usar la selección de capítulos para recoger los que te falten." },
    { "id": "unch3_12", "chapter": "Coleccionables", "name": "Buscador de reliquias", "desc": "Encuentra la reliquia extraña.", "type": "bronze", "missable": false, "online": false, "guide": "Se encuentra en el Capítulo 4 (La gresca), dentro del silo cilíndrico antes de subir por la rejilla. Es el clásico huevo de Jak & Daxter." },

    // COMBATE
    { "id": "unch3_13", "chapter": "Combate", "name": "20 tiros a la cabeza", "desc": "Elimina a 20 enemigos con tiros a la cabeza.", "type": "bronze", "missable": false, "online": false, "guide": "Acumulativo apuntando a la cabeza de tus oponentes." },
    { "id": "unch3_14", "chapter": "Combate", "name": "100 tiros a la cabeza", "desc": "Elimina a 100 enemigos con tiros a la cabeza.", "type": "silver", "missable": false, "online": false, "guide": "Saldrá de forma natural a lo largo de tu aventura." },
    { "id": "unch3_15", "chapter": "Combate", "name": "Tirador experto", "desc": "Elimina a 5 enemigos consecutivamente con tiros a la cabeza.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue 5 bajas seguidas a la cabeza sin fallar disparos intermedios y sin matar al cuerpo." },
    { "id": "unch3_16", "chapter": "Combate", "name": "Tirador temerario", "desc": "Elimina a 20 enemigos disparando desde la cadera (sin apuntar).", "type": "bronze", "missable": false, "online": false, "guide": "Dispara moviéndote a corta distancia usando solo el gatillo de disparo (R2/R1)." },
    { "id": "unch3_17", "chapter": "Combate", "name": "Verdugo", "desc": "Elimina a 20 enemigos apuntando a ciegas desde una cobertura.", "type": "bronze", "missable": false, "online": false, "guide": "Pégate a un muro y abate enemigos disparando sin pulsar el botón de apuntar." },
    { "id": "unch3_18", "chapter": "Combate", "name": "Verdugo con granadas", "desc": "Elimina a 10 enemigos con granadas apuntando a ciegas desde una cobertura.", "type": "bronze", "missable": false, "online": false, "guide": "Arroja granadas desde una cobertura pasiva sin asomarte en absoluto." },
    { "id": "unch3_19", "chapter": "Combate", "name": "Por los pelos", "desc": "Elimina a 20 enemigos con disparos colgado de un saliente.", "type": "bronze", "missable": false, "online": false, "guide": "Quédate colgado de cualquier cornisa o cuerda y elimina enemigos usando tu arma corta." },
    { "id": "unch3_20", "chapter": "Combate", "name": "Buscador de broncas", "desc": "Elimina a 20 enemigos con combates cuerpo a cuerpo.", "type": "bronze", "missable": false, "online": false, "guide": "Elimina enemigos usando ataques físicos directos." },
    { "id": "unch3_21", "chapter": "Combate", "name": "Peleón de taberna", "desc": "Elimina a 50 enemigos con combates cuerpo a cuerpo.", "type": "bronze", "missable": false, "online": false, "guide": "Trofeo acumulativo combinando peleas normales y contragolpes." },
    { "id": "unch3_22", "chapter": "Combate", "name": "Experto en contraataques", "desc": "Contraataca con éxito los ataques de 20 enemigos.", "type": "bronze", "missable": false, "online": false, "guide": "Cuando un enemigo te agarre o te vaya a golpear, pulsa Triángulo en el momento justo para repeler su ataque." },
    { "id": "unch3_23", "chapter": "Combate", "name": "Luchador de primera", "desc": "Derrota a un Grandullón usando únicamente el combate cuerpo a cuerpo.", "type": "bronze", "missable": false, "online": false, "guide": "Cuando te enfrentes a un enemigo pesado (Brute), no le dispares; derrota esquivando y contragolpeando sus ataques a puñetazos." },
    { "id": "unch3_24", "chapter": "Combate", "name": "Ninja", "desc": "Elimina a 50 enemigos con ataques sigilosos.", "type": "bronze", "missable": false, "online": false, "guide": "Acércate agachado por detrás de los enemigos y elimínalos con Cuadrado sin ser visto." },
    { "id": "unch3_25", "chapter": "Combate", "name": "Maestro ninja", "desc": "Elimina a 5 enemigos consecutivamente usando el sigilo.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue 5 bajas silenciosas seguidas sin que den la alarma. El Capítulo 8 (La ciudadela) es ideal para esto." },
    { "id": "unch3_26", "chapter": "Combate", "name": "Regreso al remitente", "desc": "Elimina a 10 enemigos devolviendo granadas.", "type": "bronze", "missable": false, "online": false, "guide": "Cuando te lancen una granada, espera a que la aguja del indicador llegue a la zona verde y pulsa Triángulo para devolverla." },
    { "id": "unch3_27", "chapter": "Combate", "name": "¡Regalito!", "desc": "Elimina a 2 enemigos con una sola granada devuelta.", "type": "bronze", "missable": false, "online": false, "guide": "Devuelve una granada enemiga de forma que su explosión mate a dos oponentes que estén muy juntos." },
    { "id": "unch3_28", "chapter": "Combate", "name": "¡Cuatro por el precio de uno!", "desc": "Elimina a 4 enemigos con una sola explosión.", "type": "bronze", "missable": false, "online": false, "guide": "Usa un RPG o un lanzagranadas contra un grupo compacto de enemigos, como los que bajan de los camiones en el desierto." },
    { "id": "unch3_29", "chapter": "Combate", "name": "Tiburón terrestre", "desc": "Elimina a 20 enemigos mientras estás en el agua.", "type": "bronze", "missable": false, "online": false, "guide": "Dispara y mata a enemigos mientras flotas en el agua. Se hace fácilmente en los capítulos del cementerio de barcos." },
    { "id": "unch3_30", "chapter": "Combate", "name": "Cazadisturbios", "desc": "Derrota a 5 enemigos con escudo antidisturbios pasando por encima de sus escudos.", "type": "bronze", "missable": false, "online": false, "guide": "Corre hacia un enemigo con escudo, pulsa Cuadrado para saltar sobre él y luego elimínalo por la espalda." },
    { "id": "unch3_31", "chapter": "Combate", "name": "Superviviente", "desc": "Elimina a 75 enemigos consecutivamente sin morir.", "type": "silver", "missable": false, "online": false, "guide": "Puedes lograrlo de forma segura jugando capítulos intermedios de la campaña en dificultad Fácil." },

    // ARMAS
    { "id": "unch3_32", "chapter": "Armas", "name": "Estudio de armas", "desc": "Elimina al menos a un enemigo con cada uno de los tipos de armas.", "type": "bronze", "missable": false, "online": false, "guide": "Debes conseguir una baja con cada una de las armas disponibles en el juego base (armas de fuego, granadas y armas pesadas)." },
    { "id": "unch3_33", "chapter": "Armas", "name": "30 muertes: Mag 5", "desc": "Elimina a 30 enemigos con la Mag 5.", "type": "bronze", "missable": false, "online": false, "guide": "Pistola pesada muy potente." },
    { "id": "unch3_34", "chapter": "Armas", "name": "30 muertes: Arm Micro", "desc": "Elimina a 30 enemigos con la Arm Micro.", "type": "bronze", "missable": false, "online": false, "guide": "Subfusil ligero de una mano." },
    { "id": "unch3_35", "chapter": "Armas", "name": "30 muertes: KAL 7", "desc": "Elimina a 30 enemigos con el KAL 7.", "type": "bronze", "missable": false, "online": false, "guide": "Carabina automática de fuego rápido." },
    { "id": "unch3_36", "chapter": "Armas", "name": "30 muertes: M9", "desc": "Elimina a 30 enemigos con el M9.", "type": "bronze", "missable": false, "online": false, "guide": "Rifle de asalto estándar de gran precisión." },
    { "id": "unch3_37", "chapter": "Armas", "name": "30 muertes: Francotirador Dragón", "desc": "Elimina a 30 enemigos con el Francotirador Dragón.", "type": "bronze", "missable": false, "online": false, "guide": "Rifle de precisión con mira telescópica." },
    { "id": "unch3_38", "chapter": "Armas", "name": "30 muertes: PAK-80", "desc": "Elimina a 30 enemigos con la PAK-80.", "type": "bronze", "missable": false, "online": false, "guide": "La ametralladora pesada que llevan las tropas acorazadas." },
    { "id": "unch3_39", "chapter": "Armas", "name": "30 muertes: Tau Tactical", "desc": "Elimina a 30 enemigos con la pistola Tau Tactical.", "type": "bronze", "missable": false, "online": false, "guide": "Pistola con mira integrada ideal para distancias largas." },
    { "id": "unch3_40", "chapter": "Armas", "name": "Especialista en bombonas", "desc": "Elimina a 10 enemigos con explosiones de bombonas de propano.", "type": "bronze", "missable": false, "online": false, "guide": "Lanza bombonas de propano rojas (o dispara a las que estén en el escenario) para matar a 10 enemigos." },

    // VARIOS / ONLINE
    { "id": "unch3_41", "chapter": "Varios", "name": "Marco Solo", "desc": "Juega en la piscina del crucero.", "type": "bronze", "missable": false, "online": false, "guide": "En el Capítulo 14 (Buscando problemas), lánzate dentro de la piscina climatizada del barco crucero y quédate nadando unos segundos." },
    { "id": "unch3_42", "chapter": "Online", "name": "Buscador de emociones", "desc": "Completa una partida de juego competitivo multijugador.", "type": "bronze", "missable": false, "online": true, "guide": "*(Nota: Requerido solo en la lista original de PS3; se eliminó en la versión Remasterizada de PS4 debido al cierre de servidores).* " },
    { "id": "unch3_43", "chapter": "Online", "name": "Compañero de fatigas", "desc": "Completa una partida de juego cooperativo multijugador.", "type": "bronze", "missable": false, "online": true, "guide": "*(Nota: Requerido solo en la lista original de PS3; se eliminó en la versión Remasterizada de PS4).* " }
  ]
},
 {
  "id": "uncharted4",
  "slug": "uncharted-4-el-desenlace-del-ladron",
  "title": "Uncharted 4: El desenlace del ladrón",
  "platform": "PS4 / PS5 / PC",
  "cover": "img/uncharted 4.jpg",
  "emoji": "🏴‍☠️",
  "totalTrophies": 56,
  "difficulty": "6/10",
  "minHours": 30,
  "hasMissable": false,
  "tags": ["acción", "aventura", "lineal", "disparos"],
  "trophies": [
    // PLATINO
    { "id": "unch4_01", "chapter": "Platino", "name": "¡Última vez!", "desc": "Consigue todos los trofeos.", "type": "platinum", "missable": false, "online": false, "guide": "Desbloquea todos los demás trofeos del juego base." },

    // HISTORIA Y DIFICULTAD
    { "id": "unch4_02", "chapter": "Historia", "name": "¡Completado! - Explorador", "desc": "Completa el juego en el modo Explorador.", "type": "bronze", "missable": false, "online": false, "guide": "Se acumula si completas la campaña en una dificultad superior." },
    { "id": "unch4_03", "chapter": "Historia", "name": "¡Completado! - Ligero", "desc": "Completa el juego en el modo Ligero.", "type": "bronze", "missable": false, "online": false, "guide": "Se acumula si completas la campaña en una dificultad superior." },
    { "id": "unch4_04", "chapter": "Historia", "name": "¡Completado! - Moderado", "desc": "Completa el juego en el modo Moderado.", "type": "bronze", "missable": false, "online": false, "guide": "Se acumula si completas la campaña en una dificultad superior." },
    { "id": "unch4_05", "chapter": "Historia", "name": "¡Completado! - Difícil", "desc": "Completa el juego en el modo Difícil.", "type": "silver", "missable": false, "online": false, "guide": "Se acumula si completas la campaña en Aplastante." },
    { "id": "unch4_06", "chapter": "Historia", "name": "¡Completado! - Aplastante", "desc": "Completa el juego en el modo Aplastante.", "type": "gold", "missable": false, "online": false, "guide": "La dificultad más exigente. Se recomienda hacerla en una segunda partida utilizando las bonificaciones de munición infinita y apuntado automático si se te complica." },
    { "id": "unch4_07", "chapter": "Historia", "name": "¡Completado! - Carrera continua", "desc": "Completa el juego en 6 horas o menos.", "type": "gold", "missable": false, "online": false, "guide": "Speedrun del juego. Salta todas las cinemáticas, ignora los combates innecesarios y juega en dificultad Explorador." },

    // COLECCIONABLES
    { "id": "unch4_08", "chapter": "Coleccionables", "name": "Primer tesoro", "desc": "Encuentra un tesoro.", "type": "bronze", "missable": false, "online": false, "guide": "Recoge tu primer tesoro brillante del escenario." },
    { "id": "unch4_09", "chapter": "Coleccionables", "name": "Cazador de tesoros cazado", "desc": "Encuentra 50 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue la mitad de los tesoros del juego." },
    { "id": "unch4_10", "chapter": "Coleccionables", "name": "Maestro cazador de tesoros", "desc": "Encuentra todos los tesoros.", "type": "silver", "missable": false, "online": false, "guide": "Encuentra los 109 tesoros ocultos de la campaña utilizando la selección de capítulos." },
    { "id": "unch4_11", "chapter": "Coleccionables", "name": "Buscador de reliquias", "desc": "Encuentra las reliquias extrañas.", "type": "bronze", "missable": false, "online": false, "guide": "Debes encontrar los 3 guiños de Naughty Dog: la reliquia extraña (Jak & Daxter en Cap. 9), el extraño colgante (The Last of Us en Cap. 12) y la extraña fruta (Crash Bandicoot en Cap. 21)." },
    { "id": "unch4_12", "chapter": "Coleccionables", "name": "Anotar el pasado", "desc": "Encuentra una nota del diario.", "type": "bronze", "missable": false, "online": false, "guide": "Recoge tu primera nota de papel coleccionable." },
    { "id": "unch4_13", "chapter": "Coleccionables", "name": "Historial perdido", "desc": "Encuentra todas las notas del diario.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue las 23 notas del diario repartidas por la historia." },
    { "id": "unch4_14", "chapter": "Coleccionables", "name": "Tomar nota", "desc": "Encuentra una entrada del diario.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue que Drake dibuje su primera anotación en su cuaderno de notas." },
    { "id": "unch4_15", "chapter": "Coleccionables", "name": "El arte de la conversación", "desc": "Escucha todas las conversaciones opcionales.", "type": "silver", "missable": false, "online": false, "guide": "Activa las 36 conversaciones opcionales con tus compañeros pulsando Triángulo cuando aparezca el icono de bocadillo." },

    // COMBATE
    { "id": "unch4_16", "chapter": "Combate", "name": "Primer tiro", "desc": "Elimina a 20 enemigos con tiros a la cabeza.", "type": "bronze", "missable": false, "online": false, "guide": "Acumulativo apuntando a la cabeza." },
    { "id": "unch4_17", "chapter": "Combate", "name": "Cazacabezas", "desc": "Elimina a 50 enemigos con tiros a la cabeza.", "type": "bronze", "missable": false, "online": false, "guide": "Acumulativo a lo largo de tu aventura." },
    { "id": "unch4_18", "chapter": "Combate", "name": "¿Disparas al azar?", "desc": "Elimina a 20 enemigos disparando desde la cadera.", "type": "bronze", "missable": false, "online": false, "guide": "Elimina enemigos de cerca usando solo el botón R2 sin apuntar con L2." },
    { "id": "unch4_19", "chapter": "Combate", "name": "La soga al cuello", "desc": "Elimina a 20 enemigos con tiros a la cabeza colgado de una cuerda.", "type": "bronze", "missable": false, "online": false, "guide": "Usa el gancho, quédate suspendido y elimina a los rivales apuntando a la cabeza." },
    { "id": "unch4_20", "chapter": "Combate", "name": "Sigilo primero, preguntas después", "desc": "Elimina a 5 enemigos con ataques sigilosos.", "type": "bronze", "missable": false, "online": false, "guide": "Bajas silenciosas escondido en la hierba alta." },
    { "id": "unch4_21", "chapter": "Combate", "name": "Cazador furtivo", "desc": "Elimina a 30 enemigos con ataques sigilosos.", "type": "bronze", "missable": false, "online": false, "guide": "Acumulativo limpiando zonas sin levantar sospechas." },
    { "id": "unch4_22", "chapter": "Combate", "name": "Te sales", "desc": "Elimina a 50 enemigos disparando a ciegas o desde la cadera.", "type": "bronze", "missable": false, "online": false, "guide": "Acumulativo disparando en carrera o tras una cobertura sin asomarte." },
    { "id": "unch4_23", "chapter": "Combate", "name": "Salto de la rana", "desc": "Elimina a 10 enemigos consecutivamente alternando disparos y combate cuerpo a cuerpo.", "type": "bronze", "missable": false, "online": false, "guide": "Mata a un enemigo a tiros, al siguiente a golpes, al siguiente a tiros, y así hasta encadenar 10." },
    { "id": "unch4_24", "chapter": "Combate", "name": "¡Imparable!", "desc": "Elimina a 100 enemigos seguidos sin morir.", "type": "silver", "missable": false, "online": false, "guide": "Se puede hacer fácilmente mediante la selección de encuentros en dificultad Explorador." },
    { "id": "unch4_25", "chapter": "Combate", "name": "Especialista en armas", "desc": "Elimina a enemigos con todas las armas del juego.", "type": "bronze", "missable": false, "online": false, "guide": "Debes lograr una baja con las 30 armas del juego (incluyendo la pistola de juguete, la torreta y los barriles de pólvora)." },
    { "id": "unch4_26", "chapter": "Combate", "name": "Racha de bajas", "desc": "Tira a 20 enemigos desde salientes.", "type": "bronze", "missable": false, "online": false, "guide": "Pégate a un borde inferior, espera a que un enemigo se acerque y pulsa Cuadrado para tirarlo al vacío." },
    { "id": "unch4_27", "chapter": "Combate", "name": "Manitas", "desc": "Derrota a 10 enemigos con explosivos colgado de una cuerda.", "type": "bronze", "missable": false, "online": false, "guide": "Lanza dinamita o dispara a barriles rojos mientras cuelgas del gancho." },
    { "id": "unch4_28", "chapter": "Combate", "name": "Doble ración", "desc": "Derrota a 10 enemigos junto a tu compañero.", "type": "bronze", "missable": false, "online": false, "guide": "Realiza ataques cuerpo a cuerpo combinados automáticos cuando un aliado esté golpeando al mismo rival." },
    { "id": "unch4_29", "chapter": "Combate", "name": "Infranqueable", "desc": "Derrota a 5 enemigos con escudo pasando por encima.", "type": "bronze", "missable": false, "online": false, "guide": "Rueda hacia los enemigos con escudo, pulsa Cuadrado para subirte a ellos y rómpeles el cuello." },

    // HAZAÑAS Y VARIOS
    { "id": "unch4_30", "chapter": "Hazañas", "name": "¡Récord!", "desc": "Supera la puntuación más alta del videojuego retro.", "type": "bronze", "missable": false, "online": false, "guide": "Debes superar los 3500 puntos en el minijuego de Crash Bandicoot. Se hace más fácil en el Epílogo al conseguir vidas extra." },
    { "id": "unch4_31", "chapter": "Hazañas", "name": "No alimentar a los animales", "desc": "Juega con el lémur en el mercado y deja que te robe la manzana.", "type": "bronze", "missable": false, "online": false, "guide": "En el Capítulo 11, compra una manzana, acércate al lémur del hombre del hombro, camina un poco y deja que te la quite." },
    { "id": "unch4_32", "chapter": "Hazañas", "name": "¡Te pillé!", "desc": "Sube a lo más alto de la torre del reloj en Madagascar.", "type": "bronze", "missable": false, "online": false, "guide": "En el Capítulo 11, trepa por el exterior de la torre del reloj hasta la aguja más alta por encima de la campana." },
    { "id": "unch4_33", "chapter": "Hazañas", "name": "Prueba de aptitud", "desc": "Resuelve la primera prueba en Escocia en 10 movimientos o menos.", "type": "bronze", "missable": false, "online": false, "guide": "En el puzle de las tres cruces y la cubeta de agua del Capítulo 9, haz girar las ruedas siguiendo el orden correcto de mínimos movimientos." },
    { "id": "unch4_34", "chapter": "Hazañas", "name": "Disonancia ludonarrativa", "desc": "Elimina a 1000 enemigos.", "type": "bronze", "missable": false, "online": false, "guide": "Trofeo acumulativo de bajas totales. Saltará de forma natural buscando el resto de trofeos." },
    { "id": "unch4_35", "chapter": "Hazañas", "name": "No dejar piedra sobre piedra", "desc": "Derriba todos los montículos de piedras en Madagascar.", "type": "bronze", "missable": false, "online": false, "guide": "En el Capítulo 10, destruye los 16 hitos de piedras (cairns) atropellándolos con el todoterreno." },
    { "id": "unch4_36", "chapter": "Hazañas", "name": "Aún le dura", "desc": "Acierta a todos los objetivos con la pistola de juguete en el desván.", "type": "bronze", "missable": false, "online": false, "guide": "Al inicio del Capítulo 4, recoge la pistola de plástico del suelo y dispara a las 4 dianas circulares colgadas del techo." },
    { "id": "unch4_37", "chapter": "Hazañas", "name": "Fantasma del cementerio", "desc": "Cruza el cementerio de Escocia sin matar a nadie ni ser visto.", "type": "bronze", "missable": false, "online": false, "guide": "En el Capítulo 8, atraviesa toda la zona de patrulla enemiga usando los acantilados y la hierba sin iniciar alertas ni noquear a nadie." },
    { "id": "unch4_38", "chapter": "Hazañas", "name": "Compañero de fatigas", "desc": "Escapa en el jeep con Elena sin matar a nadie.", "type": "bronze", "missable": false, "online": false, "guide": "En el Capítulo 17, conduce el vehículo evitando atropellar o disparar a ningún soldado hasta llegar al elevador." },
    { "id": "unch4_39", "chapter": "Hazañas", "name": "Baile de graduación", "desc": "Derrota a enemigos con sigilo, cuerpo a cuerpo, tiro a la cabeza y explosivos en menos de 15 segundos.", "type": "bronze", "missable": false, "online": false, "guide": "Se realiza muy fácil en el encuentro del mercado del Capítulo 11 combinando las acciones rápido." },
    { "id": "unch4_40", "chapter": "Hazañas", "name": "Se acabó la función", "desc": "Quédate completamente quieto justo antes de la persecución en el mercado.", "type": "bronze", "missable": false, "online": false, "guide": "En el Capítulo 11, al abrir las puertas del mercado donde se bugeó la demo del E3, no toques el mando durante 30 segundos." },
    { "id": "unch4_41", "chapter": "Hazañas", "name": "Espadachín", "desc": "Bloquea todos los ataques de Rafe en el duelo final sin recibir daño.", "type": "silver", "missable": false, "online": false, "guide": "En el Capítulo 22, completa la primera fase del duelo de espadas bloqueando a izquierda y derecha perfectamente en dificultad Fácil." },

    // MULTIJUGADOR *(Nota: Estos trofeos solo aplican a la versión original de PS4; se eliminaron en la Colección Legado de los Ladrones de PS5/PC)*
    { "id": "unch4_42", "chapter": "Multijugador", "name": "Entrar en el juego", "desc": "Completa la introducción al multijugador de Uncharted.", "type": "bronze", "missable": false, "online": true, "guide": "Completa el tutorial guiado del modo online." },
    { "id": "unch4_43", "chapter": "Multijugador", "name": "Preparado para la aventura", "desc": "Completa 5 partidas en el modo multijugador.", "type": "bronze", "missable": false, "online": true, "guide": "Termina 5 enfrentamientos públicos de cualquier estilo multijugador." },
    { "id": "unch4_44", "chapter": "Multijugador", "name": "Prueba de fuego", "desc": "Completa todas las pruebas en la dificultad Moderado del multijugador.", "type": "bronze", "missable": false, "online": true, "guide": "Supera los retos individuales centrados en aprender a usar los místicos y compañeros." },
    { "id": "unch4_45", "chapter": "Multijugador", "name": "Amigos para siempre", "desc": "Genera a 10 compañeros en el modo multijugador.", "type": "bronze", "missable": false, "online": true, "guide": "Invoca a 10 ayudantes de la tienda interna durante tus partidas online." },
    { "id": "unch4_46", "chapter": "Multijugador", "name": "¡Médico!", "desc": "Revive a 10 aliados en el modo multijugador.", "type": "bronze", "missable": false, "online": true, "guide": "Sana a 10 compañeros caídos en combate antes de que mueran del todo." }
  ]
},
 {
  "id": "uncharted_ll",
  "slug": "uncharted-el-legado-perdido",
  "title": "Uncharted: El Legado Perdido",
  "platform": "PS4 / PS5 / PC",
  "cover": "img/uncharted_ll.jpg",
  "emoji": "💎",
  "totalTrophies": 50,
  "difficulty": "5/10",
  "minHours": 15,
  "hasMissable": false,
  "tags": ["acción", "aventura", "mundo-abierto-parcial", "disparos"],
  "trophies": [
    // PLATINO
    { "id": "uncll_01", "chapter": "Platino", "name": "No dejes piedra sin remover", "desc": "Consigue todos los trofeos.", "type": "platinum", "missable": false, "online": false, "guide": "Se desbloquea tras conseguir todos los demás trofeos del juego." },

    // HISTORIA Y DIFICULTAD
    { "id": "uncll_02", "chapter": "Historia", "name": "Legado encontrado", "desc": "Completa el juego.", "type": "gold", "missable": false, "online": false, "guide": "Automático por completar la campaña en cualquier dificultad." },
    { "id": "uncll_03", "chapter": "Historia", "name": "¡Completado! - Explorador", "desc": "Completa el juego en el modo Explorador.", "type": "bronze", "missable": false, "online": false, "guide": "Se acumula al completarlo en una dificultad superior." },
    { "id": "uncll_04", "chapter": "Historia", "name": "¡Completado! - Ligero", "desc": "Completa el juego en el modo Ligero.", "type": "bronze", "missable": false, "online": false, "guide": "Se acumula al completarlo en una dificultad superior." },
    { "id": "uncll_05", "chapter": "Historia", "name": "¡Completado! - Moderado", "desc": "Completa el juego en el modo Moderado.", "type": "bronze", "missable": false, "online": false, "guide": "Se acumula al completarlo en una dificultad superior." },
    { "id": "uncll_06", "chapter": "Historia", "name": "¡Completado! - Difícil", "desc": "Completa el juego en el modo Difícil.", "type": "silver", "missable": false, "online": false, "guide": "Se acumula al completarlo en modo Aplastante." },
    { "id": "uncll_07", "chapter": "Historia", "name": "¡Completado! - Aplastante", "desc": "Completa el juego en el modo Aplastante.", "type": "gold", "missable": false, "online": false, "guide": "Dificultad máxima. Puedes activar las bonificaciones de munición infinita y autoguardado desde el menú de extras tras pasarte el juego una vez para facilitarlo." },
    { "id": "uncll_08", "chapter": "Historia", "name": "El camino del guerrero", "desc": "En el capítulo 5, llega a la llanura de Halebidu sin usar armas de fuego ni explosivos.", "type": "gold", "missable": true, "online": false, "guide": "Desde el inicio del juego hasta el Capítulo 5, debes jugar estrictamente usando sigilo y combate cuerpo a cuerpo. Nadine sí puede disparar." },

    // COLECCIONABLES
    { "id": "uncll_09", "chapter": "Coleccionables", "name": "Buscador de tesoros casual", "desc": "Encuentra 5 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue tus primeros 5 tesoros brillantes." },
    { "id": "uncll_10", "chapter": "Coleccionables", "name": "Buscador de tesoros hardcore", "desc": "Encuentra 35 tesoros.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue la mitad de los tesoros del juego." },
    { "id": "uncll_11", "chapter": "Coleccionables", "name": "Coleccionista de antigüedades", "desc": "Encuentra todos los tesoros.", "type": "silver", "missable": false, "online": false, "guide": "Encuentra los 68 tesoros ocultos en la campaña." },
    { "id": "uncll_12", "chapter": "Coleccionables", "name": "Fichado", "desc": "Encuentra un recuerdo de Hoysala.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue tu primer medallón en el mapa abierto del Capítulo 4." },
    { "id": "uncll_13", "chapter": "Coleccionables", "name": "¡Sí, reina!", "desc": "Encuentra todos los recuerdos de Hoysala y consigue el Rubí de la reina.", "type": "silver", "missable": false, "online": false, "guide": "Reúne los 11 recuerdos en el Capítulo 4 y devuélvelos al santuario. Te otorgarán el Rubí de la Reina, un objeto que pita cuando estás cerca de cualquier tesoro del juego." },
    { "id": "uncll_14", "chapter": "Coleccionables", "name": "Si no hay foto, no pasó", "desc": "Haz todas las fotos.", "type": "silver", "missable": false, "online": false, "guide": "Interactúa con los 28 puntos fotográficos opcionales usando el móvil de Chloe." },
    { "id": "uncll_15", "chapter": "Coleccionables", "name": "Llegando a conocerte", "desc": "Escucha todas las conversaciones opcionales.", "type": "silver", "missable": false, "online": false, "guide": "Activa las 17 conversaciones opcionales con Nadine pulsando Triángulo cuando aparezca el bocadillo." },
    { "id": "uncll_16", "chapter": "Coleccionables", "name": "Asalto a las cajas", "desc": "Abre todas las cajas de suministros.", "type": "bronze", "missable": false, "online": false, "guide": "Fuerza las cerraduras de las 21 cajas fuertes grandes repartidas por los escenarios mediante el minijuego de ganzúas." },

    // COMBATE
    { "id": "uncll_17", "chapter": "Combate", "name": "10 arriba, 10 abajo", "desc": "Elimina a 10 enemigos seguidos con tiros a la cabeza.", "type": "bronze", "missable": false, "online": false, "guide": "Encadena 10 bajas a la cabeza seguidas sin fallar ni matar al cuerpo." },
    { "id": "uncll_18", "chapter": "Combate", "name": "Frazer. Chloe Frazer.", "desc": "Elimina a 5 enemigos seguidos con la pistola con silenciador sin ser detectada.", "type": "bronze", "missable": false, "online": false, "guide": "Usa la pistola silenciosa desde la hierba alta para abatir a 5 rivales sin levantar la alerta." },
    { "id": "uncll_19", "chapter": "Combate", "name": "Es como te mueves", "desc": "Elimina enemigos usando sigilo, cuerpo a cuerpo, tiros a la cabeza y vehículos en menos de 20 segundos.", "type": "bronze", "missable": false, "online": false, "guide": "Haz un combo rápido: elimina a uno por la espalda, a otro a puñetazos, dale un tiro a la cabeza a un tercero y atropella a un cuarto." },
    { "id": "uncll_20", "chapter": "Combate", "name": "Justo ante sus narices", "desc": "Abre una caja de suministros con enemigos cerca.", "type": "bronze", "missable": false, "online": false, "guide": "Fuerza una caja fuerte mientras los enemigos patrullan la zona sin que te descubran del todo." },
    { "id": "uncll_21", "chapter": "Combate", "name": "¿Te enseño los dientes?", "desc": "Elimina a 30 enemigos con ataques cuerpo a cuerpo tras debilitarlos con disparos.", "type": "bronze", "missable": false, "online": false, "guide": "Dispara desde la cadera a un enemigo cercano y remátalo con un combo a puñetazos de inmediato." },
    { "id": "uncll_22", "chapter": "Combate", "name": "Conductor de segunda", "desc": "Secuestra 6 vehículos enemigos saltando sobre ellos.", "type": "bronze", "missable": false, "online": false, "guide": "Conduce cerca de un camión enemigo, pulsa el botón para saltar hacia él y tira al conductor." },
    { "id": "uncll_23", "chapter": "Combate", "name": "Probar el menú", "desc": "Consigue una baja con cada arma de fuego disponible.", "type": "bronze", "missable": false, "online": false, "guide": "Logra una eliminación con las 24 armas de fuego diferentes del juego (puedes usar el menú de extras)." },
    { "id": "uncll_24", "chapter": "Combate", "name": "Traigan los pesos pesados", "desc": "Elimina a 30 enemigos con armas pesadas.", "type": "bronze", "missable": false, "online": false, "guide": "Consigue bajas usando la ametralladora GAU-19, lanzacohetes o escopetas pesadas." },
    { "id": "uncll_25", "chapter": "Combate", "name": "Exceso de fuerza", "desc": "Coloca múltiples cargas de C4 en un vehículo y destrúyelo de una sola explosión.", "type": "bronze", "missable": false, "online": false, "guide": "Lanza 4 o más cargas de C4 sobre un coche de patrulla y detónalas a la vez." },
    { "id": "uncll_26", "chapter": "Combate", "name": "¿Estabas mirando?", "desc": "Derriba a un enemigo por un saliente de un golpe.", "type": "bronze", "missable": false, "online": false, "guide": "Golpea a un enemigo situado al borde de un abismo para tirarlo de forma directa." },
    { "id": "uncll_27", "chapter": "Combate", "name": "Gatillo fácil", "desc": "Dispara a ciegas 20 veces desde cobertura.", "type": "bronze", "missable": false, "online": false, "guide": "Pégate a una pared y dispara con R2 sin apuntar un total de 20 veces." },
    { "id": "uncll_28", "chapter": "Combate", "name": "Compromiso blindado", "desc": "Elimina a un enemigo con armadura pesada solo con sigilo.", "type": "bronze", "missable": false, "online": false, "guide": "Quítale el casco por la espalda sigilosamente y, tras romper la alerta corta, vuelve a rematarlo por la espalda." },
    { "id": "uncll_29", "chapter": "Combate", "name": "El guerrero de las sombras", "desc": "Completa el capítulo 5 sin iniciar ningún combate ni ser detectado.", "type": "silver", "missable": true, "online": false, "guide": "Escapa del fuerte de Asav en el Capítulo 5 pasando de largo de todos los soldados usando la cobertura sin que te vean." },
    { "id": "uncll_30", "chapter": "Combate", "name": "A la carrera", "desc": "Derriba 10 vehículos enemigos embistiéndolos.", "type": "bronze", "missable": false, "online": false, "guide": "Choca con tu 4x4 contra las motos y coches enemigos hasta destrozarlos." },
    { "id": "uncll_31", "chapter": "Combate", "name": "Disparar y correr", "desc": "Elimina a 20 enemigos disparando desde la cadera.", "type": "bronze", "missable": false, "online": false, "guide": "Mata a 20 rivales corriendo y disparando sin usar el botón L2." },
    { "id": "uncll_32", "chapter": "Combate", "name": "Pelea de bar", "desc": "Consigue 20 bajas cuerpo a cuerpo combinadas con Nadine.", "type": "bronze", "missable": false, "online": false, "guide": "Ataca físicamente a los enemigos que Nadine esté golpeando para activar las animaciones conjuntas." },
    { "id": "uncll_33", "chapter": "Combate", "name": "Puntería perfecta", "desc": "Termina el juego con un 70% o más de precisión.", "type": "bronze", "missable": false, "online": false, "guide": "Puedes activar el apuntado automático en los ajustes para asegurar los tiros." },
    { "id": "uncll_34", "chapter": "Combate", "name": "Cazador de helicópteros", "desc": "Destruye el helicóptero de Asav sin recibir daño de sus misiles.", "type": "bronze", "missable": false, "online": false, "guide": "En el combate del Capítulo 8, usa el lanzacohetes oculto en las cajas y cúbrete bien bajo los techos cuando dispare ráfagas." },

    // HAZAÑAS Y VARIOS
    { "id": "uncll_35", "chapter": "Hazañas", "name": "Tu premio", "desc": "Disfruta de la vista desde lo alto del Imperio Hoysala.", "type": "bronze", "missable": false, "online": false, "guide": "En el Capítulo 4, trepa a la parte más alta de la torre central redonda, quédate quieta unos 30 segundos y Chloe se pondrá a hacer posturas de yoga." },
    { "id": "uncll_36", "chapter": "Hazañas", "name": "Mejor conductora del sector", "desc": "Conduce desde la cascada de Ganesa hasta el fuerte del arco y regresa en menos de 3 minutos.", "type": "bronze", "missable": false, "online": false, "guide": "Haz una contrarreloj perfecta con el todoterreno por los Ghats occidentales en el Capítulo 4 sin bajarte del coche." },
    { "id": "uncll_37", "chapter": "Hazañas", "name": "Desafío impecable", "desc": "Supera todas las pruebas del fuerte del hacha sin reiniciar.", "type": "bronze", "missable": false, "online": false, "guide": "En el Capítulo 4, pisa las baldosas correctas del puzle del hacha del tirón sin caerte ni fallar." },
    { "id": "uncll_38", "chapter": "Hazañas", "name": "Silencioso como un ratón", "desc": "Entra en el fuerte del tridente y consigue el artefacto sin que te vean.", "type": "bronze", "missable": false, "online": false, "guide": "Activa las palancas del fuerte del tridente en el Capítulo 4 moviéndote entre las ruinas sin alertar a los mercenarios." },
    { "id": "uncll_39", "chapter": "Hazañas", "name": "Tarzana", "desc": "Balancéate en 5 cuerdas seguidas sin tocar el suelo.", "type": "bronze", "missable": false, "online": false, "guide": "Se realiza fácilmente en la zona pantanosa del Capítulo 4 usando los enganches del gancho seguidos." },
    { "id": "uncll_40", "chapter": "Hazañas", "name": "Carrera acrobática", "desc": "Pasa un total de 30 segundos en el aire con el coche.", "type": "bronze", "missable": false, "online": false, "guide": "Trofeo acumulativo saltando por las rampas de tierra de los Ghats occidentales." },
    { "id": "uncll_41", "chapter": "Hazañas", "name": "Teatro de sombras", "desc": "Resuelve el acertijo de sombras en 10 movimientos o menos.", "type": "bronze", "missable": false, "online": false, "guide": "En el puzle de las estatuas del Capítulo 5, mueve las palancas de forma óptima para cuadrar las siluetas en la pared rápido." },
    { "id": "uncll_42", "chapter": "Hazañas", "name": "Marco Po-No", "desc": "Juega en el agua en la presa de Halebidu.", "type": "bronze", "missable": false, "online": false, "guide": "Al principio del Capítulo 5, lánzate a la piscina de agua que hay junto a la gran presa antes de avanzar." },
    { "id": "uncll_43", "chapter": "Hazañas", "name": "Artificiera", "desc": "Desactiva 5 minas terrestres consecutivas sin fallar.", "type": "bronze", "missable": false, "online": false, "guide": "Acércate agachada a las minas que barren los escenarios y pulsa el botón en el momento justo del dial." },
    { "id": "uncll_44", "chapter": "Hazañas", "name": "Colega de viaje", "desc": "Haz que Nadine elimine a 10 enemigos por su cuenta.", "type": "bronze", "missable": false, "online": false, "guide": "Quédate oculta en zonas de combate y deja que Nadine noquee o dispare a los soldados." },
    { "id": "uncll_45", "chapter": "Hazañas", "name": "Derecho de piso", "desc": "Quédate quieta en el columpio del Capítulo 4.", "type": "bronze", "missable": false, "online": false, "guide": "Encuentra el columpio escondido colgado de un árbol en los Ghats y balancéate un rato." },
    { "id": "uncll_46", "chapter": "Hazañas", "name": "¡Sorpresa!", "desc": "Elimina a un enemigo saltando desde una cuerda con un ataque aéreo.", "type": "bronze", "missable": false, "online": false, "guide": "Balancéate sobre un enemigo, déjate caer y presiona Cuadrado para noquearlo desde el cielo." },
    { "id": "uncll_47", "chapter": "Hazañas", "name": "Rey de la carretera", "desc": "Atropella a 15 enemigos con el coche.", "type": "bronze", "missable": false, "online": false, "guide": "Acumulativo arrollando soldados en las llanuras del mapa abierto." },
    { "id": "uncll_48", "chapter": "Hazañas", "name": "Señor de las minas", "desc": "Haz que 5 enemigos exploten con sus propias minas.", "type": "bronze", "missable": false, "online": false, "guide": "Dispara a las minas del suelo cuando un enemigo camine exactamente encima de ellas." },
    { "id": "uncll_49", "chapter": "Hazañas", "name": "Paso a paso", "desc": "Completa todos los puzles de discos del juego.", "type": "bronze", "missable": false, "online": false, "guide": "Resuelve todos los rompecabezas de alinear círculos concéntricos de piedra." },
    { "id": "uncll_50", "chapter": "Hazañas", "name": "Pelea de trenes", "desc": "Elimina a 20 enemigos en el tren final cuerpo a cuerpo.", "type": "bronze", "missable": false, "online": false, "guide": "En las secciones del Capítulo 9, pelea limpiamente a puñetazos contra los soldados sobre los vagones." }
  ]
},
 {
  "id": "nine_sols",
  "slug": "nine-sols",
  "title": "Nine Sols",
  "platform": "PS4 / PS5",
  "cover": "img/nine_sols.jpg",
  "emoji": "⚔️",
  "totalTrophies": 36,
  "difficulty": "7/10",
  "minHours": 25,
  "hasMissable": true,
  "tags": ["acción", "metroidvania", "plataformas", "soulslike"],
  "trophies": [
    // PLATINO
    { "id": "nsols_01", "chapter": "Platino", "name": "El camino del Tao", "desc": "Consigue todos los trofeos.", "type": "platinum", "missable": false, "online": false, "guide": "Se desbloquea tras conseguir los 35 trofeos restantes." },

    // JEFES PRINCIPALES
    { "id": "nsols_02", "chapter": "Jefes", "name": "Mi venganza comienza aquí", "desc": "Derrota a Baichang.", "type": "silver", "missable": false, "online": false, "guide": "Automático al vencer al primer jefe principal de la historia." },
    { "id": "nsols_03", "chapter": "Jefes", "name": "Ya voy, viejo amigo", "desc": "Derrota a Yingzhao.", "type": "silver", "missable": false, "online": false, "guide": "Automático al vencer al segundo jefe principal." },
    { "id": "nsols_04", "chapter": "Jefes", "name": "El que siembra, recoge", "desc": "Derrota a Goumang.", "type": "silver", "missable": false, "online": false, "guide": "Automático al vencer al tercer jefe principal." },
    { "id": "nsols_05", "chapter": "Jefes", "name": "Respeta a tus mayores", "desc": "Derrota a Yanlao.", "type": "silver", "missable": false, "online": false, "guide": "Automático al vencer al cuarto jefe principal." },
    { "id": "nsols_06", "chapter": "Jefes", "name": "Fuga de la prisión", "desc": "Escapa de la prisión con éxito.", "type": "silver", "missable": false, "online": false, "guide": "Automático al completar la sección de la cárcel." },
    { "id": "nsols_07", "chapter": "Jefes", "name": "Sin dolor no hay gloria", "desc": "Derrota a Jiequan.", "type": "silver", "missable": false, "online": false, "guide": "Automático al vencer al quinto jefe principal." },
    { "id": "nsols_08", "chapter": "Jefes", "name": "Despierta de mi pecado", "desc": "Derrota a Lady Ethereal.", "type": "silver", "missable": false, "online": false, "guide": "Automático al vencer al sexto jefe principal." },
    { "id": "nsols_09", "chapter": "Jefes", "name": "Ven, dulce muerte", "desc": "Derrota a Ji.", "type": "silver", "missable": false, "online": false, "guide": "Automático al vencer al séptimo jefe principal." },
    { "id": "nsols_10", "chapter": "Jefes", "name": "Nos tenemos el uno al otro", "desc": "Derrota a Fuxi y Nuwa.", "type": "gold", "missable": false, "online": false, "guide": "Automático al vencer el penúltimo combate de jefe de la historia principal." },
    { "id": "nsols_11", "chapter": "Jefes", "name": "Aprendí del mejor", "desc": "Derrota a Eigong.", "type": "gold", "missable": false, "online": false, "guide": "Automático al vencer al jefe final. Es el combate más difícil del juego; practica la mecánica de parry y ten paciencia." },

    // FINAL Y HISTORIA
    { "id": "nsols_12", "chapter": "Historia", "name": "Estrella fugaz", "desc": "Sé testigo del fin de Nueva Kunlun.", "type": "silver", "missable": false, "online": false, "guide": "Automático al ver el final normal del juego." },
    { "id": "nsols_13", "chapter": "Historia", "name": "Hogar, dulce hogar", "desc": "Regresa al mundo natal de los Solarianos.", "type": "gold", "missable": false, "online": false, "guide": "Final verdadero. Requiere haber completado todas las misiones secundarias para obtener la Flecha Rizomática y desbloquear el desenlace alternativo." },
    { "id": "nsols_14", "chapter": "Historia", "name": "Luchar contra la adversidad", "desc": "Termina Nine Sols en Modo Estándar.", "type": "silver", "missable": false, "online": false, "guide": "Comienza la partida en Modo Estándar desde el principio. Si lo juegas en dificultad inferior, NO se desbloquea." },

    // MISIONES SECUNDARIAS
    { "id": "nsols_15", "chapter": "Secundarias", "name": "Al rescate", "desc": "Rescata al pueblo de la Aldea Flor del Melocotonero.", "type": "bronze", "missable": false, "online": false, "guide": "Completa la cadena de misiones de los aldeanos secuestrados." },
    { "id": "nsols_16", "chapter": "Secundarias", "name": "Pasar el testigo", "desc": "Ayuda a Shennong a convertirse en líder de la Aldea Flor del Melocotonero.", "type": "bronze", "missable": false, "online": false, "guide": "Completa toda la historia de Shennong y sus misiones de aldea." },
    { "id": "nsols_17", "chapter": "Secundarias", "name": "Descanso para el malvado", "desc": "Ayuda a Chiyou a traer la paz a Xingtian.", "type": "bronze", "missable": false, "online": false, "guide": "Completa la cadena de misiones de Chiyou. Solo se puede terminar después del punto de no retorno." },
    { "id": "nsols_18", "chapter": "Secundarias", "name": "Te encontré", "desc": "Ayuda a Shanhai 9000 a encontrar a Chien.", "type": "bronze", "missable": false, "online": false, "guide": "Sigue la cadena de misiones del robot Shanhai 9000. Solo se puede completar tras el punto de no retorno." },
    { "id": "nsols_19", "chapter": "Secundarias", "name": "Evolución", "desc": "Descubre un secreto tremendo.", "type": "bronze", "missable": false, "online": false, "guide": "Explora a fondo para dar con el laboratorio secreto oculto en el mapa." },
    { "id": "nsols_20", "chapter": "Secundarias", "name": "Semilla mágica", "desc": "Ayuda a Shuanshuan a desbloquear el verdadero potencial de la agricultura.", "type": "bronze", "missable": false, "online": false, "guide": "Habla con Shuanshuan regularmente y entrégale los objetos que te pida a lo largo de la aventura." },
    { "id": "nsols_21", "chapter": "Secundarias", "name": "Reciclado", "desc": "Usa la máquina de la fortuna construida por Shuanshuan.", "type": "bronze", "missable": true, "online": false, "guide": "⚠️ MUY MISSABLE: Compra SIEMPRE los chips de mapa a los robots Shanhai 9000 sin arrancárselos por la fuerza. Además, entrégale a Shuanshuan el Kit Multiusos, el Dispositivo de Realidad Virtual y el Periódico de la Academia Tiandao. Habla con él repetidamente hasta que construya la máquina." },
    { "id": "nsols_22", "chapter": "Secundarias", "name": "A través del tiempo y el espacio", "desc": "Despídete de Lear.", "type": "bronze", "missable": false, "online": false, "guide": "Visita a Lear en el momento correcto de la historia y sigue su arco hasta el final." },
    { "id": "nsols_23", "chapter": "Secundarias", "name": "Mensajes de bendición", "desc": "Descubre el tablón de mensajes de la Partida de Nueva Kunlun.", "type": "silver", "missable": false, "online": false, "guide": "Busca el tablón de bendiciones oculto en la zona de la nave de Nueva Kunlun." },
    { "id": "nsols_24", "chapter": "Secundarias", "name": "Do Re Mi So La", "desc": "Descifra el misterio de la partitura de la Torre del Amanecer.", "type": "silver", "missable": false, "online": false, "guide": "Encuentra los fragmentos de partitura repartidos por el mapa y resuelve el puzle musical de la torre." },

    // COLECCIONABLES Y PROGRESIÓN
    { "id": "nsols_25", "chapter": "Progresión", "name": "El guerrero interior", "desc": "Domina todas las habilidades del árbol de habilidades.", "type": "silver", "missable": false, "online": false, "guide": "Desbloquea todos los nodos del árbol de habilidades gastando los puntos obtenidos al derrotar jefes y explorar." },
    { "id": "nsols_26", "chapter": "Progresión", "name": "Cazador de recursos", "desc": "Encuentra todos los recursos e información marcados por Shanhai 9000.", "type": "silver", "missable": true, "online": false, "guide": "⚠️ MISSABLE: Compra SIEMPRE los chips de mapa a los robots Shanhai 9000 pagando, nunca por la fuerza. Recoge todos los puntos de interés que señala el mapa." },
    { "id": "nsols_27", "chapter": "Progresión", "name": "Bien preparado", "desc": "Colecciona todos los Jades.", "type": "silver", "missable": false, "online": false, "guide": "Encuentra los Jades ocultos en todo el mapa para mejorar las estadísticas de Yi." },
    { "id": "nsols_28", "chapter": "Progresión", "name": "Mi amigo más fiel", "desc": "Maximiza la capacidad de munición del Arco Azul y consigue las versiones X de las tres flechas especiales.", "type": "silver", "missable": false, "online": false, "guide": "Amplía el carcaj al máximo y fabrica el Traspasanubes X, el Destructor de Truenos X y el Cazador de Sombras X usando los materiales de crafteo." },
    { "id": "nsols_29", "chapter": "Progresión", "name": "Soy Yi y tengo un problema con la bebida", "desc": "Bebe todo el vino elaborado por Shennong.", "type": "bronze", "missable": false, "online": false, "guide": "Habla con Shennong y acepta beber cada tipo de vino que te ofrezca a lo largo de su arco de misión." },
    { "id": "nsols_30", "chapter": "Progresión", "name": "Ejército de uno", "desc": "Derrota a todos los minijefes opcionales.", "type": "silver", "missable": false, "online": false, "guide": "Busca y derrota a todos los minijefes opcionales dispersos por el mapa. Algunos están bien escondidos." },

    // TROFEOS MISSABLES / ESPECIALES
    { "id": "nsols_31", "chapter": "Especiales", "name": "Juego sucio", "desc": "Usa el Erradicador Genético para combatir a Jiequan.", "type": "bronze", "missable": true, "online": false, "guide": "⚠️ MISSABLE: En la Fábrica, hackea dos guardias para encontrar el Erradicador Genético. Antes de entrar al arena de Jiequan, interactúa con el pod de inyección a la derecha de la puerta activando primero las dos estatuas a ambos lados. Si entras al combate sin usarlo, el trofeo se pierde para siempre en esa partida." },
    { "id": "nsols_32", "chapter": "Especiales", "name": "¡Pelea de robots!", "desc": "Derrota a Tianshou usando un robot.", "type": "bronze", "missable": true, "online": false, "guide": "⚠️ MISSABLE: En el Distrito Empíreo (Pasajes), antes de llegar al minijefe, ve arriba a la derecha para encontrar un robot detrás de una puerta. Entra con él al combate contra Tianshou. Si derrotas al minijefe antes de conseguir el robot, el trofeo se pierde en esa partida." },
    { "id": "nsols_33", "chapter": "Especiales", "name": "¿Pero qué has hecho?!", "desc": "Rompe la vasija de barro hecha por Shuanshuan.", "type": "bronze", "missable": true, "online": false, "guide": "⚠️ MISSABLE: En un punto de la historia, Shuanshuan te mostrará su vasija especial. Cuando se presente la oportunidad, rómpela. No podrás volver a hacerlo si avanzas en la historia sin actuar." },
    { "id": "nsols_34", "chapter": "Especiales", "name": "¡Serás desgraciado...!", "desc": "Obtén los datos de mapa de Shanhai 9000 por la fuerza.", "type": "bronze", "missable": false, "online": false, "guide": "⚠️ ANULA 'Reciclado': Arranca el chip a un robot Shanhai 9000 por la fuerza. Hazlo en una partida nueva o con un guardado de respaldo en PS Plus, ya que hacerlo en tu partida principal invalida el trofeo 'Reciclado'. Solo tarda unos 20 minutos llegar al primer robot desde cero." },
    { "id": "nsols_35", "chapter": "Especiales", "name": "Corazón de piedra", "desc": "Establece una relación profunda con Shuanshuan.", "type": "bronze", "missable": false, "online": false, "guide": "Habla con Shuanshuan frecuentemente y entrégale todos los objetos que necesita. Se completa de forma natural al conseguir el trofeo 'Reciclado'." },
    { "id": "nsols_36", "chapter": "Especiales", "name": "¡Stonks!", "desc": "Recicla la moneda de Shuanshuan.", "type": "bronze", "missable": false, "online": false, "guide": "Habla con Shuanshuan cuando te ofrezca comprar su moneda y acepta el trato." }
  ]
}

];

// Guardar referencia global
window.GAMES_DATA = GAMES;
