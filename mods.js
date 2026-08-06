/* =====================================================================
   YISUS MOD · mods.js
   =====================================================================

   ESTE ES EL ÚNICO ARCHIVO QUE TIENES QUE TOCAR PARA AÑADIR UN MOD.

   Aquí solo hay datos. Nada de lógica: de pintar la web se encarga
   assets/app.js, y del aspecto assets/style.css.

   Reglas de oro para no romper nada:
     · Cada mod va entre llaves { }  y se separa del siguiente con una coma.
     · Los textos van entre comillas dobles "así".
     · Si dentro de un texto necesitas comillas, usa las españolas «así»
       o escápalas con barra: \"así\".
     · Las listas van entre corchetes [ ] con los elementos separados por coma.
     · Al final del archivo tienes una PLANTILLA lista para copiar y pegar.

   Si la web se queda en blanco, casi seguro que te falta una coma o una
   comilla aquí. Abre la consola del navegador (F12) y te lo dirá.

   ---------------------------------------------------------------------
   CAMPOS DE CADA MOD
   ---------------------------------------------------------------------
   id            Texto corto y sin espacios. Sirve para identificarlo por
                 dentro. Que no se repita entre mods.  Ej: "bopl-8-players"
   nombre        Cómo se llama el mod.                 Ej: "Bopl Battle 8 Players"
   juego         El juego al que va.                   Ej: "Bopl Battle"
   version       La versión del mod.                   Ej: "1.0.0"
   peso          Lo que ocupa el ZIP.                  Ej: "0,63 MB"
   sistema       Sistema operativo. Si lo dejas vacío pone "Windows".
   estado        "disponible"   -> se puede descargar
                 "proximamente" -> sale en el catálogo con el botón
                                   desactivado y explicando por qué
   resumen       Una o dos frases. Es lo que se lee en la tarjeta.
   descripcion   Lista de párrafos para la ficha. Cada párrafo, un texto.
   aviso         Aviso gordo del mod (o null si no tiene). Lleva:
                   corto  -> frase de una línea que sale en la tarjeta,
                             al lado del botón de descarga
                   titulo -> titular del aviso dentro de la ficha
                   texto  -> la explicación completa
   requisitos    Lista de cosas que hacen falta. Puede ir vacía: []
   instalacion   Lista de pasos, en orden. Puede ir vacía: []
   capturas      Lista de imágenes. Cada una lleva:
                   archivo -> ruta desde esta carpeta, ej: "assets/foto.png"
                   alt     -> qué se ve en la imagen (para quien no la ve;
                              es obligatorio, no lo dejes vacío)
                   pie     -> texto pequeño que sale debajo de la imagen
   descarga      Ruta del ZIP, ej: "descargas/MiMod-1.0.0.zip"
                 Si el mod aún no está subido: null
                 (el nombre del archivo que se muestra en la web sale de
                 aquí solo, no hay que escribirlo dos veces)
   ===================================================================== */

const MODS = [

  /* ------------------------------------------------------------------
     1 · Bopl Battle 8 Players
     ------------------------------------------------------------------ */
  {
    id: "bopl-8-players",
    nombre: "Bopl Battle 8 Players",
    juego: "Bopl Battle",
    version: "1.1.0",
    peso: "0,69 MB",
    sistema: "Windows",
    estado: "disponible",

    resumen: "Sube el límite de 4 a 8 jugadores, en el mismo PC y por internet con invitación de Steam.",

    descripcion: [
      "Bopl Battle viene capado a 4 jugadores. Este mod levanta el tope hasta 8: aparecen los ocho huecos en la pantalla de selección de personaje, cada uno con su color y su equipo, y la partida los aguanta sin que tengas que tocar nada más. El resto del juego se queda igual: mismos mapas, mismas habilidades, mismo caos, solo que con el doble de gente.",

      "Funciona en local (varios mandos en el mismo ordenador) y por internet, invitando por Steam como siempre. Para las partidas por internet hizo falta trabajo de fontanería: el juego calcula la partida entera en cada ordenador a la vez y solo se envían las pulsaciones, pero las metía en una estructura con cuatro huecos justos y las del quinto jugador en adelante se tiraban por el camino. El mod añade un canal aparte para esas pulsaciones y las entrega en el mismo instante de simulación en todas las máquinas, que es lo que hace falta para que nadie se desincronice.",

      "Se descarga como una sola aplicación: la abres, le das a «Instalar / Reparar» y a JUGAR. Desde ahí lanzas el juego, cambias el número de jugadores o apagas el mod para echar una partida normal, sin desinstalar nada."
    ],

    aviso: {
      corto: "Para el online, el mod en TODOS los PCs",
      titulo: "En online lo necesitáis todos, y avisadme si algo falla",
      texto: "Por internet, los ocho tenéis que tener el mod y la misma versión. Una copia sin modificar ni siquiera sabe representar a un quinto jugador, así que si a alguien le falta, la sala no cuadra. Pasadle el enlace de esta página a todo el grupo antes de montar la partida. Y una cosa con honestidad: lo de más de 4 por internet es lo más nuevo y lo más delicado del mod, porque toca la parte que mantiene sincronizadas todas las máquinas. Está probado todo lo que se puede probar sin juntar a ocho personas, pero si os pasa algo raro (alguien que no se mueve, la partida que se corta sola), avisadme con el archivo BepInEx\\LogOutput.log de un par de vosotros y lo arreglo. En local con 8 lleva funcionando desde el principio."
    },

    requisitos: [
      "Bopl Battle en PC, versión de Steam (vale la demo gratuita y el juego completo).",
      "Windows 10 u 11. No hace falta instalar nada más.",
      "Permiso de escritura en la carpeta del juego (que no esté en una unidad protegida).",
      "Para jugar 8 en el mismo PC: 7 mandos, porque el teclado y el ratón cuentan como uno.",
      "Para jugar 8 por internet: el mod instalado y la misma versión en los 8 ordenadores."
    ],

    instalacion: [
      "Descarga «Yisus Mod.exe» con el botón de esta ficha. Es un solo archivo, no hay que descomprimir nada.",
      "Déjalo donde quieras (el escritorio va bien) y ábrelo con doble clic.",
      "Si Windows saca un aviso azul de SmartScreen, pulsa «Más información» y luego «Ejecutar de todas formas». Sale con cualquier programa descargado que no esté firmado.",
      "La app busca Bopl Battle ella sola. Pulsa «Instalar / Reparar».",
      "Dale a JUGAR. El juego se abre ya con el mod puesto.",
      "En la selección de personaje verás 8 huecos en vez de 4."
    ],

    // OJO: la ruta tiene que coincidir con el archivo que hay en assets/.
    // Ahora mismo las capturas están ahí como .jpg; si las cambias por .png,
    // cambia también la extensión en estas dos líneas.
    capturas: [
      {
        archivo: "assets/bopl-seleccion.jpg",
        alt: "Pantalla de selección de personaje de Bopl Battle con los 8 huecos de jugador disponibles",
        pie: "Los 8 huecos en la selección de personaje"
      },
      {
        archivo: "assets/bopl-partida.jpg",
        alt: "Partida de Bopl Battle en curso con los 8 jugadores a la vez en el mapa",
        pie: "Los 8 jugadores en plena partida"
      }
    ],

    descarga: "descargas/YisusMod-BoplBattle-1.1.0.exe"
  },

  /* ------------------------------------------------------------------
     2 · Yisus Mod para R.E.P.O.
     ------------------------------------------------------------------ */
  {
    id: "repo-yisus",
    nombre: "Yisus Mod para R.E.P.O.",
    juego: "R.E.P.O.",
    version: "1.0.0",
    peso: "0,71 MB",
    sistema: "Windows",
    estado: "disponible",

    resumen: "Panel dentro del juego (tecla F1) para generar monstruos, objetos, dinero y armas modificadas, controlar la vida y las mejoras de los jugadores, y subir la sala de 6 hasta 32 personas. Necesita clave de activación.",

    descripcion: [
      "Convierte una partida de R.E.P.O. en una caja de arena. Pulsas F1 dentro del juego y se abre un panel con seis pestañas: Monstruos, Armas y objetos, Valiosos y dinero, Mejoras, Especiales y Ayuda. Mientras lo tienes abierto tu personaje se queda quieto para que el ratón funcione bien.",

      "Lo que hace, sin adornos: generas cualquier enemigo del juego (hasta 10 por clic), los matas a todos o los borras del nivel. Te das cualquier arma, granada, dron o botiquín. Creas objetos de valor y bolsas de dinero con la cifra que escribas, hasta 999.999 por bolsa. Sobre cualquier jugador de la sala: le ves la vida, lo curas, lo revives, lo matas, lo expulsas o le tocas sus trece mejoras. Y tienes once armas modificadas: cadencia por cinco, escopetas de quince perdigones, láser en abanico, granada gigante, granada en cadena.",

      "Casi todo eso solo funciona si eres el anfitrión o juegas solo; el juego no deja que un invitado genere cosas ni toque a los demás. Como invitado te quedan la inmunidad al daño y tus propias mejoras. Pero ojo con esto: los demás NO necesitan tener el mod para que les afecte, porque usa los mismos mensajes de red que el propio juego.",

      "También sube el límite de la sala. De serie R.E.P.O. son 6; aquí puedes llegar a 32 (viene en 20). Para que funcione, el anfitrión y todos los que entren tienen que tener el mod y el MISMO número puesto: si uno lo tiene en 20 y otro en 12, no cuadra. El juego no está pensado para tanta gente, así que con salas muy llenas el rendimiento cae.",

      "Hace falta una clave de activación que doy yo. Cada clave vale para un solo ordenador y las temporales caducan a las 24 horas. El lanzador comprueba la clave contra el servidor CADA vez que lo abres, así que necesitas internet siempre, no solo la primera vez.",

      "Qué se instala y dónde: el mod va a tu carpeta de usuario junto con BepInEx y Unity Doorstop, que son las herramientas normales para cargar mods en juegos de Unity, y se copia un winhttp.dll en la carpeta de R.E.P.O. Nada más. Dentro del juego el mod no se conecta a ningún sitio: todo se queda entre los jugadores de la sala."
    ],

    aviso: {
      corto: "Para jugar con amigos, no con desconocidos",
      titulo: "Este mod te da poder sobre los demás jugadores de la sala",
      texto: "Siendo anfitrión puedes, con un clic, matar a cualquiera saltándote su inmunidad, dejarle a cero las trece mejoras que se ha ganado en la partida, expulsarlo, soltarle cientos de monstruos encima o encender de golpe todas las granadas del mapa, incluidas las que otro lleve en la mano. Todo eso le afecta aunque no tenga el mod, y no puede evitarlo ni deshacerlo. Entre amigos que saben a qué juegan es una gamberrada; en una sala con desconocidos es arruinarles la partida. Dos ajustes vienen activados de fábrica y conviene saberlo: la sala se mantiene abierta mientras estás en la tienda (si tu partida es pública, puede entrarte gente que no conoces justo en ese momento), y la varita void suelta una explosión al cerrarse el agujero, también cuando la usa otro jugador con una varita normal. Y el dinero y las mejoras que regales se quedan en la partida: si os importa la progresión, no lo uséis en vuestra run buena."
    },

    requisitos: [
      "Windows 10 u 11 de 64 bits.",
      "R.E.P.O. comprado e instalado en Steam (el mod encuentra el juego solo).",
      "Steam abierto antes de darle a jugar.",
      "Clave de activación que doy yo, válida para un solo ordenador.",
      "Conexión a internet cada vez que abras el lanzador, no solo la primera.",
      "Permiso de administrador una vez, si el juego está en una carpeta protegida.",
      "Para partidas de más de 6: el mod y el mismo número de jugadores en todos los que entren."
    ],

    instalacion: [
      "Descarga el archivo y guárdalo donde quieras. No hay que descomprimir nada.",
      "Ábrelo. Windows mostrará el aviso de SmartScreen: pulsa «Más información» y luego «Ejecutar de todas formas». Sale porque el programa no está firmado, no porque tenga nada raro.",
      "El lanzador busca R.E.P.O. en tus bibliotecas de Steam. Si no lo encuentra, pulsa «Elegir carpeta del juego».",
      "Escribe la clave de activación cuando te la pida. Se guarda cifrada, así que no tendrás que volver a escribirla en ese ordenador.",
      "Si el juego está en Archivos de programa, acepta el aviso de administrador: solo lo necesita para copiar el cargador.",
      "El lanzador instala el mod y arranca R.E.P.O. por Steam él solo. A partir de ahí, entra siempre por el lanzador y no por Steam directamente.",
      "Ya en la partida, pulsa F1. Si ves el rótulo «Yisus mod · F1» en la esquina, ha cargado bien.",
      "Para quitarlo: borra winhttp.dll de la carpeta de R.E.P.O. y, si quieres dejarlo limpio, la carpeta YisusMod de tu perfil de usuario."
    ],

    capturas: [],
    descarga: "descargas/YisusMod-REPO-1.0.0.exe"
  }

];


/* =====================================================================
   PLANTILLA PARA UN MOD NUEVO
   ---------------------------------------------------------------------
   Copia el bloque de abajo, pégalo dentro de los corchetes de MODS
   (acuérdate de la coma que separa un mod del anterior) y rellénalo.
   ---------------------------------------------------------------------

  {
    id: "mi-mod",
    nombre: "Nombre del mod",
    juego: "Nombre del juego",
    version: "1.0.0",
    peso: "1,2 MB",
    sistema: "Windows",
    estado: "disponible",
    resumen: "Una o dos frases contando qué hace.",
    descripcion: [
      "Primer párrafo de la ficha.",
      "Segundo párrafo, si hace falta."
    ],
    aviso: null,
    requisitos: [
      "Lo que haga falta tener.",
      "Otra cosa que haga falta."
    ],
    instalacion: [
      "Descarga el ZIP.",
      "Descomprímelo.",
      "Doble clic en INSTALAR.bat."
    ],
    capturas: [
      { archivo: "assets/mi-captura.png", alt: "Qué se ve en la captura", pie: "Pie de la imagen" }
    ],
    descarga: "descargas/MiMod-1.0.0.zip"
  }

   ---------------------------------------------------------------------
   Y no olvides dejar el ZIP dentro de la carpeta descargas/ y las
   capturas dentro de assets/.
   ===================================================================== */
