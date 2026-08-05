/* =====================================================================
   YISUS MOD · app.js
   ---------------------------------------------------------------------
   Pinta el catálogo leyendo el array MODS de mods.js y monta la ficha
   de cada mod dentro del <dialog>.

   No hay fetch ni módulos a propósito: así index.html funciona igual
   abriéndolo a doble clic desde el disco que servido por HTTP.

   Aquí no hay datos. Los datos están en mods.js.
   ===================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     0. Comprobaciones y utilidades
     ------------------------------------------------------------------ */

  if (typeof MODS === "undefined" || !Array.isArray(MODS)) {
    console.error("Yisus Mod: no encuentro el array MODS. ¿Falta mods.js o se ha colado un error de sintaxis dentro?");
    return;
  }

  var MAPA = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

  // Todo lo que salga de mods.js pasa por aquí antes de tocar el HTML.
  function esc(valor) {
    return String(valor === null || valor === undefined ? "" : valor)
      .replace(/[&<>"']/g, function (c) { return MAPA[c]; });
  }

  function lista(valor) { return Array.isArray(valor) ? valor : []; }

  function hayDescarga(mod) {
    return mod.estado === "disponible" && typeof mod.descarga === "string" && mod.descarga !== "";
  }

  function nombreArchivo(mod) {
    return mod.descarga ? String(mod.descarga).split("/").pop() : "";
  }

  // El texto del botón sale de la extensión del archivo, para que no haya que tocar la web
  // cuando un mod se cuelgue como aplicación en vez de como ZIP.
  function extensionDe(mod) {
    var nombre = nombreArchivo(mod);
    var punto = nombre.lastIndexOf(".");
    return punto === -1 ? "" : nombre.slice(punto + 1).toLowerCase();
  }

  function formatoDe(mod) {
    var ext = extensionDe(mod);
    if (ext === "exe") return "aplicación";
    if (ext === "") return "archivo";
    return ext.toUpperCase();
  }

  function descripcionFormato(mod) {
    var ext = extensionDe(mod);
    if (ext === "exe") return "Un solo archivo · sin descomprimir";
    if (ext === "zip") return "ZIP directo";
    return "Descarga directa";
  }

  var ICONO_DESCARGA =
    '<svg class="btn__ico" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
      '<path d="M8 1.5v8.5m0 0 3.2-3.2M8 10 4.8 6.8M2 12v1.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V12" ' +
        'stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>';

  /* ------------------------------------------------------------------
     1. Tarjetas del catálogo
     ------------------------------------------------------------------ */

  function tarjeta(mod) {
    var listo = hayDescarga(mod);
    var avisoCorto = mod.aviso && mod.aviso.corto ? mod.aviso.corto : "";

    // Botón principal + botón de ficha
    var acciones = listo
      ? '<a class="btn btn--principal" href="' + esc(mod.descarga) + '" download>' +
          ICONO_DESCARGA + 'Descargar ' + formatoDe(mod) +
        '</a>' +
        '<button class="btn btn--secundario" type="button" data-ver="' + esc(mod.id) + '">Ver ficha</button>'
      : '<button class="btn btn--pendiente" type="button" aria-disabled="true">Aún no disponible</button>' +
        '<button class="btn btn--secundario" type="button" data-ver="' + esc(mod.id) + '">Ver ficha</button>';

    // Micro-línea bajo los botones: qué te vas a bajar y dónde se explica
    var micro = listo
      ? '<p class="mod__nota">' + descripcionFormato(mod) +
          ' · sin registro · <a href="#instalacion">cómo se instala</a></p>'
      : '<p class="mod__nota">Todavía sin subir: lo cuelgo aquí en cuanto funcione bien.</p>';

    // El aviso gordo, en el camino de quien pulsa descargar desde la tarjeta
    var ojo = (listo && avisoCorto)
      ? '<p class="mod__ojo">' +
          '<span class="mod__ojo__ico" aria-hidden="true">!</span>' +
          '<span>' + esc(avisoCorto) + '. <a href="#online">Por qué</a></span>' +
        '</p>'
      : '';

    return '' +
      '<article class="mod' + (listo ? '' : ' mod--pronto') + '">' +
        '<div class="mod__cab">' +
          '<div>' +
            '<p class="mod__juego">' + esc(mod.juego) + '</p>' +
            '<h3 class="mod__nombre">' + esc(mod.nombre) + '</h3>' +
          '</div>' +
          (listo
            ? '<span class="chip chip--ok">Disponible</span>'
            : '<span class="chip chip--pronto">Próximamente</span>') +
        '</div>' +
        '<p class="mod__desc">' + esc(mod.resumen) + '</p>' +
        '<dl class="ficha">' +
          '<div><dt>Versión</dt><dd>' + esc(mod.version) + '</dd></div>' +
          '<div><dt>Peso</dt><dd>' + esc(mod.peso) + '</dd></div>' +
          '<div><dt>Sistema</dt><dd>' + esc(mod.sistema || "Windows") + '</dd></div>' +
        '</dl>' +
        '<div class="mod__acciones">' + acciones + '</div>' +
        micro +
        ojo +
      '</article>';
  }

  var rejilla = document.getElementById("rejilla");
  if (rejilla) {
    rejilla.innerHTML = MODS.map(tarjeta).join("");
  }

  /* ------------------------------------------------------------------
     2. Ficha del mod (diálogo)
     ------------------------------------------------------------------ */

  var dlg    = document.getElementById("detalle");
  var titulo = document.getElementById("detalle-titulo");
  var cuerpo = document.getElementById("detalle-cuerpo");
  var pie    = document.getElementById("detalle-pie");

  if (!dlg || !titulo || !cuerpo || !pie) { return; }

  var soportaModal = typeof dlg.showModal === "function";
  var ultimoFoco = null;

  // Un bloque de la ficha. Si no hay contenido, no se pinta el apartado.
  function bloque(rotulo, contenido) {
    if (!contenido) { return ""; }
    return '<div class="bloque"><h3>' + esc(rotulo) + '</h3>' + contenido + '</div>';
  }

  function pintarFicha(mod) {
    var listo = hayDescarga(mod);

    var parrafos = lista(mod.descripcion).map(function (p) {
      return '<p>' + esc(p) + '</p>';
    }).join("");

    var aviso = (mod.aviso && mod.aviso.texto)
      ? '<div class="nota nota--peligro"><div>' +
          '<h3>' + esc(mod.aviso.titulo || "Aviso importante") + '</h3>' +
          '<p>' + esc(mod.aviso.texto) + '</p>' +
          '<p><a href="#online">Ver el aviso completo sobre el online</a></p>' +
        '</div></div>'
      : '';

    // Sin loading="lazy" a propósito: estas imágenes solo se crean al abrir
    // la ficha, así que ya se cargan bajo demanda. Con lazy hay motores que
    // no llegan a pedirlas nunca dentro de un contenedor con scroll propio.
    var capturas = lista(mod.capturas).map(function (c) {
      return '<figure class="captura">' +
          '<img src="' + esc(c.archivo) + '" alt="' + esc(c.alt) + '" decoding="async">' +
          (c.pie ? '<figcaption>' + esc(c.pie) + '</figcaption>' : '') +
        '</figure>';
    }).join("");

    var requisitos = lista(mod.requisitos).map(function (r) {
      return '<li>' + esc(r) + '</li>';
    }).join("");

    var pasos = lista(mod.instalacion).map(function (p) {
      return '<li>' + esc(p) + '</li>';
    }).join("");

    titulo.textContent = mod.nombre;

    cuerpo.innerHTML = '' +
      '<dl class="ficha">' +
        '<div><dt>Juego</dt><dd>' + esc(mod.juego) + '</dd></div>' +
        '<div><dt>Versión</dt><dd>' + esc(mod.version) + '</dd></div>' +
        '<div><dt>Peso</dt><dd>' + esc(mod.peso) + '</dd></div>' +
        '<div><dt>Sistema</dt><dd>' + esc(mod.sistema || "Windows") + '</dd></div>' +
      '</dl>' +
      bloque("Qué hace", parrafos) +
      aviso +
      bloque("Capturas", capturas ? '<div class="capturas">' + capturas + '</div>' : "") +
      bloque("Requisitos", requisitos ? '<ul>' + requisitos + '</ul>' : "") +
      bloque("Instalación paso a paso", pasos ? '<ol>' + pasos + '</ol>' : "") +
      '<p class="pie-ficha">¿Primera vez que instalas un mod? Están explicados con calma en ' +
        '<a href="#instalacion">cómo se instalan los mods</a>.</p>';

    pie.innerHTML = listo
      ? '<span class="hoja__archivo"><b>' + esc(nombreArchivo(mod)) + '</b>' +
          esc(mod.peso) + ' · descarga directa</span>' +
        '<a class="btn btn--principal" href="' + esc(mod.descarga) + '" download>' +
          ICONO_DESCARGA + 'Descargar ' + formatoDe(mod) +
        '</a>'
      : '<span class="hoja__archivo"><b>Todavía sin descarga</b>' +
          'Lo subo en cuanto funcione bien. Vuelve a pasarte en unos días.</span>' +
        '<button class="btn btn--pendiente" type="button" aria-disabled="true">Aún no disponible</button>';

    cuerpo.scrollTop = 0;
  }

  var abierta = false;

  function abrir(mod, origen) {
    ultimoFoco = origen || null;
    pintarFicha(mod);
    if (soportaModal) { dlg.showModal(); } else { dlg.setAttribute("open", ""); }
    abierta = true;
    document.documentElement.classList.add("sin-scroll");
    var boton = dlg.querySelector("[data-cerrar]");
    if (boton) { boton.focus(); }
  }

  // Limpieza: quitar el bloqueo del scroll y devolver el foco.
  // Es idempotente para poder llamarla de más sin efectos raros.
  function alCerrar() {
    if (!abierta) { return; }
    abierta = false;
    document.documentElement.classList.remove("sin-scroll");
    var foco = ultimoFoco;
    ultimoFoco = null;
    if (foco && typeof foco.focus === "function") { foco.focus(); }
  }

  function cerrar() {
    if (soportaModal) { dlg.close(); } else { dlg.removeAttribute("open"); }
    // La limpieza va aquí y no solo en el evento "close": ese evento se
    // encola (no es inmediato) y hay motores donde ni siquiera llega. Si nos
    // fiáramos de él, la página podría quedarse sin poder hacer scroll.
    alCerrar();
  }

  // Red de seguridad por si el diálogo se cierra por otro camino
  dlg.addEventListener("close", alCerrar);

  /* Abrir ficha y cerrar con el botón */
  document.addEventListener("click", function (ev) {
    if (!ev.target || typeof ev.target.closest !== "function") { return; }
    var abridor = ev.target.closest("[data-ver]");
    if (abridor) {
      var id = abridor.getAttribute("data-ver");
      var mod = null;
      for (var i = 0; i < MODS.length; i++) {
        if (MODS[i].id === id) { mod = MODS[i]; break; }
      }
      if (mod) { abrir(mod, abridor); }
      return;
    }
    if (ev.target.closest("[data-cerrar]")) { cerrar(); }
  });

  /* Clic en el fondo oscuro */
  dlg.addEventListener("mousedown", function (ev) {
    if (ev.target === dlg) { cerrar(); }
  });

  /* Un enlace interno dentro de la ficha cierra el diálogo y salta a la
     sección, en vez de dejar la ficha abierta encima. */
  dlg.addEventListener("click", function (ev) {
    if (!ev.target || typeof ev.target.closest !== "function") { return; }
    var enlace = ev.target.closest('a[href^="#"]');
    if (!enlace) { return; }
    var destino = document.getElementById(enlace.getAttribute("href").slice(1));
    ultimoFoco = null;
    cerrar();
    if (destino) {
      destino.setAttribute("tabindex", "-1");
      try { destino.focus({ preventScroll: true }); } catch (e) { destino.focus(); }
    }
  });

  /* Escape. El <dialog> nativo se cerraría solo, pero lo hacemos nosotros
     para que la limpieza (scroll y foco) ocurra siempre igual. */
  document.addEventListener("keydown", function (ev) {
    if (ev.key !== "Escape" && ev.key !== "Esc") { return; }
    if (!abierta) { return; }
    ev.preventDefault();
    cerrar();
  });
})();
