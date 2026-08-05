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
    version: "1.0.0",
    peso: "0,66 MB",
    sistema: "Windows",
    estado: "disponible",

    resumen: "Sube el límite de 4 a 8 jugadores, en local y en online por invitación de Steam.",

    descripcion: [
      "Bopl Battle viene capado a 4 jugadores. Este mod levanta el tope hasta 8: aparecen los ocho huecos en la pantalla de selección de personaje y la partida los aguanta sin que tengas que tocar nada más.",
      "Funciona igual en local (mandos y teclado repartidos en el mismo PC) que en online por invitación de Steam. El resto del juego se queda como estaba: mismos mapas, mismas habilidades, mismo caos, solo que con el doble de gente.",
      "Se descarga como una sola aplicación: la abres, le das a «Instalar / Reparar» y a JUGAR. Desde ahí lanzas el juego, cambias el número de jugadores o apagas el mod para echar una partida normal, sin desinstalar nada."
    ],

    aviso: {
      corto: "Para el online, el mod en TODOS los PCs",
      titulo: "En online lo necesitáis TODOS",
      texto: "Bopl Battle calcula la partida en la máquina de cada jugador a la vez. Una copia sin modificar ni siquiera sabe representar a un quinto jugador, así que si a uno le falta el mod la sala no cuadra. Pasadle el enlace de esta página a todo el grupo antes de montar la partida, y aseguraos de que todos tenéis la misma versión."
    },

    requisitos: [
      "Bopl Battle en PC, versión de Steam (vale la demo gratuita y el juego completo).",
      "Windows 10 u 11. No hace falta instalar nada más.",
      "Permiso de escritura en la carpeta del juego (que no esté en una unidad protegida).",
      "Para el online: los 8 jugadores con el mod instalado y en la misma versión (1.0.0).",
      "Para jugar 8 en local: 7 mandos, porque el teclado y el ratón cuentan como un jugador."
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

    descarga: "descargas/YisusMod-BoplBattle-1.0.0.exe"
  },

  /* ------------------------------------------------------------------
     2 · Yisus Mod para R.E.P.O.  (todavía sin subir)
     ------------------------------------------------------------------ */
  {
    id: "repo-yisus",
    nombre: "Yisus Mod para R.E.P.O.",
    juego: "R.E.P.O.",
    version: "—",
    peso: "—",
    sistema: "Windows",
    estado: "proximamente",

    resumen: "Todavía está en el horno. Cuando funcione bien y no rompa nada, aparece aquí con su botón de descarga.",

    descripcion: [
      "Estoy trasteando con R.E.P.O. y de ahí saldrá el próximo mod. Aún no está para colgarlo: prefiero subirlo cuando funcione siempre y no cuando funcione «a veces».",
      "En cuanto esté, aparecerá aquí mismo con su ZIP, sus capturas y sus pasos de instalación, igual que el resto."
    ],

    aviso: null,
    requisitos: [],
    instalacion: [],
    capturas: [],
    descarga: null
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
