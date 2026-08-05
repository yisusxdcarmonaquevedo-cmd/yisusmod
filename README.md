# Yisus Mod — guía para publicar y mantener la web

Esto es la web de tus mods: cuatro cosas en una carpeta, sin servidores, sin bases de datos
y sin nada que se pueda romper solo. Esta guía te lleva desde "no tengo ni cuenta de GitHub"
hasta "mi web está online y sé añadirle mods".

No hace falta instalar nada. Todo se hace desde el navegador.

---

## Qué hay dentro de la carpeta `web`

```
web/
├── index.html      La página. Es la portada y el catálogo entero.
├── mods.js         LOS DATOS. El único archivo que vas a tocar de normal.
├── README.md       Esto que estás leyendo.
├── assets/
│   ├── style.css       Cómo se ve la web (colores, tipografías, cajas).
│   ├── app.js          Pinta el catálogo leyendo mods.js. No lo toques.
│   ├── bopl-seleccion.jpg
│   └── bopl-partida.jpg
└── descargas/
    ├── .gitkeep                    Archivo vacío para que la carpeta no desaparezca.
    └── Bopl8Players-1.0.0.zip      Los ZIP de los mods van aquí.
```

Regla mental para no perderte nunca:

- **ZIP de un mod** → va en `descargas/`
- **Capturas de pantalla** → van en `assets/`
- **Textos, versiones, requisitos, pasos** → van en `mods.js`

Antes de subir nada a internet puedes probar la web en tu PC: **doble clic en `index.html`**
y se abre en el navegador funcionando igual que online. Está hecha a propósito para eso.

---

## Vocabulario mínimo (dos palabras y ya)

- **Repositorio** (o *repo*): una carpeta guardada en GitHub. La tuya se va a llamar `yisusmod`.
- **Commit**: guardar un cambio. Cada vez que subes o editas un archivo, GitHub te pide un
  mensajito describiendo qué has hecho y eso es un commit. Se guarda el historial entero,
  así que **nunca pierdes nada**: siempre puedes volver a una versión anterior.

Eso es todo lo que necesitas saber. No vas a tocar la línea de comandos en toda la guía.

> **Nota sobre los nombres de los botones:** GitHub está en inglés por defecto. Si te lo has
> puesto en español, entre paréntesis te pongo la traducción que verás.

---

## 1. Crear la cuenta de GitHub y el repositorio

### 1.1 La cuenta

1. Entra en **https://github.com** y pulsa **Sign up** (*Registrarse*), arriba a la derecha.
2. Escribe tu **email**, una **contraseña** y un **nombre de usuario**.
   El nombre de usuario es importante: **va a salir en la dirección de tu web**.
   Si eliges `yisus`, tu web será `https://yisus.github.io/yisusmod/`.
   Usa solo letras, números y guiones. Sin espacios ni acentos.
3. Resuelve el puzzle de verificación que te ponga y pulsa **Create account** (*Crear cuenta*).
4. GitHub te manda un **código de 8 cifras al email**. Cópialo, pégalo y listo.
5. Cuando te pregunte por planes, elige el plan **Free**. Todo lo de esta guía es gratis.

### 1.2 El repositorio

1. Ya dentro de GitHub, pulsa el **`+`** de arriba a la derecha y elige
   **New repository** (*Nuevo repositorio*).
2. Rellena así:
   - **Repository name** (*Nombre del repositorio*): `yisusmod`
     Todo en minúsculas y sin espacios, tal cual.
   - **Description** (*Descripción*): opcional. Por ejemplo `Web de mis mods`.
   - Marca **Public** (*Público*). **Tiene que ser público**: GitHub Pages gratis solo
     funciona con repositorios públicos. Público significa que se puede ver el código
     de la web, que es exactamente lo que quieres.
   - **NO marques nada** en la parte de abajo: ni *Add a README file*, ni *.gitignore*,
     ni *Choose a license*. Deja las tres casillas como están, en blanco.
     (El README ya lo tienes hecho, es este archivo.)
3. Pulsa el botón verde **Create repository** (*Crear repositorio*).

Te sale una página con instrucciones de terminal. **Ignóralas todas.** Vamos al paso 2.

---

## 2. Subir la carpeta arrastrando archivos (sin instalar nada)

**Lo más importante de todo este apartado:** tienes que subir **lo que hay DENTRO de la
carpeta `web`**, no la carpeta `web` en sí. Si subes la carpeta entera, tu web acabará en
`.../yisusmod/web/` en vez de en `.../yisusmod/` y todos los enlaces se te van a liar.

1. En la página que te acaba de salir, busca la frase pequeña que dice
   *"…or create a new file"* / *"…or push an existing repository"*. En medio hay un enlace
   azul: **uploading an existing file** (*subiendo un archivo existente*). Púlsalo.
   > Si ya te habías salido de esa página, entra en tu repositorio y usa el botón
   > **Add file** (*Añadir archivo*) → **Upload files** (*Subir archivos*). Es lo mismo.
2. Abre el Explorador de Windows en `C:\trabajos alaverga\mod bolbatle beta\web`.
3. **Entra dentro de la carpeta `web`** y selecciona los **cinco** elementos que hay:
   `index.html`, `mods.js`, `README.md`, la carpeta `assets` y la carpeta `descargas`.
   (Con `Ctrl` + `E` los seleccionas todos de golpe.)
4. Arrástralos con el ratón hasta la zona de la página de GitHub que pone
   **Drag files here to add them to your repository** (*Arrastra archivos aquí*) y suéltalos.
   GitHub sube también el contenido de las carpetas, respetando la estructura.
5. Espera a que terminen de subir. Debajo verás la lista con los archivos y sus rutas
   (`assets/style.css`, `descargas/Bopl8Players-1.0.0.zip`, etc.). Comprueba que están
   los 8 archivos y que **no hay ninguna ruta que empiece por `web/`**.
6. Baja del todo. En **Commit changes** (*Confirmar cambios*), en la primera casilla,
   escribe algo como `Primera versión de la web`.
7. Deja marcado **Commit directly to the `main` branch** (*Confirmar directamente en la
   rama main*) y pulsa el botón verde **Commit changes** (*Confirmar cambios*).

Ya está subido. Si entras en tu repositorio verás los archivos y, más abajo, esta misma guía
renderizada (GitHub muestra el `README.md` en la portada del repo automáticamente).

---

## 3. Activar GitHub Pages y sacar la URL

Ahora mismo tienes los archivos guardados, pero la web todavía no se ve como web.
Vamos a encender GitHub Pages, que es el hosting gratuito de GitHub.

1. Dentro de tu repositorio, pulsa **Settings** (*Configuración*) en la barra de pestañas
   de arriba (la que empieza por *Code, Issues, Pull requests…*). Es la última, a la derecha,
   con un icono de engranaje.
2. En la columna de la izquierda, baja hasta la sección **Code and automation** y pulsa
   **Pages**.
3. En **Build and deployment** (*Compilación e implementación*):
   - En **Source** (*Origen*), deja **Deploy from a branch** (*Implementar desde una rama*).
     Suele venir puesto ya.
   - Justo debajo, en **Branch** (*Rama*), el desplegable pondrá **None**. Ábrelo y elige
     **`main`**.
   - En el desplegable de al lado, deja **`/ (root)`** (*raíz*). Así es como GitHub sabe que
     el `index.html` está en la carpeta principal.
4. Pulsa **Save** (*Guardar*).
5. Espera **entre 1 y 5 minutos**. En serio, la primera vez tarda. Recarga la página de
   *Pages* de vez en cuando.
6. Cuando esté listo, arriba del todo de esa misma página aparece un recuadro verde:
   **Your site is live at https://TU-USUARIO.github.io/yisusmod/**, con un botón
   **Visit site** (*Visitar sitio*).

**Esa es tu URL definitiva.** Es la que le pasas a la gente:

```
https://TU-USUARIO.github.io/yisusmod/
```

Cambiando `TU-USUARIO` por el nombre de usuario que elegiste en el paso 1.1. No cambia nunca
mientras no le cambies el nombre al repositorio o al usuario. Guárdala en favoritos.

> Si quieres ver cómo va una publicación, en la pestaña **Actions** de tu repositorio verás
> el proceso con un círculo naranja (trabajando) o un check verde (publicado).

---

## 4. Añadir un mod nuevo

Son dos cosas: **subir el ZIP** y **añadir su bloque en `mods.js`**. Y si tienes capturas,
súbelas también. Nada más.

### 4.1 Prepara el ZIP en tu PC

1. Ponle un nombre **sin espacios, sin acentos y sin la ñ**, con la versión al final.
   El formato que ya estás usando: `Bopl8Players-1.0.0.zip`.
   Otro ejemplo válido: `YisusModRepo-1.0.0.zip`.
2. Mira cuánto pesa: clic derecho sobre el ZIP → **Propiedades** → apunta el **Tamaño**.
   Lo vas a necesitar para el campo `peso`.
3. Si pesa **más de 25 MB**, salta al apartado 6 antes de seguir.

### 4.2 Sube el ZIP a `descargas/`

1. En tu repositorio de GitHub, pulsa sobre la carpeta **`descargas`** para entrar en ella.
2. Arriba a la derecha, **Add file** (*Añadir archivo*) → **Upload files** (*Subir archivos*).
3. Arrastra el ZIP a la zona de subida.
4. Abajo, escribe un mensaje tipo `Sube el ZIP de Mi Mod 1.0.0` y pulsa
   **Commit changes** (*Confirmar cambios*).

Como has entrado antes en la carpeta `descargas`, el archivo se sube ahí dentro solo.
Compruébalo: la ruta que aparece arriba tiene que ser `yisusmod / descargas /`.

### 4.3 Sube las capturas a `assets/` (si tienes)

Exactamente igual que el ZIP, pero entrando en la carpeta **`assets`**.
Nombres en minúsculas y con guiones: `mimod-menu.jpg`, `mimod-partida.jpg`.

### 4.4 Añade el bloque en `mods.js`

1. En la portada del repositorio, pulsa sobre **`mods.js`**.
2. Arriba a la derecha del recuadro con el código, pulsa el **icono del lápiz**
   (si pasas el ratón por encima pone *Edit this file* / *Editar este archivo*).
3. Busca el final de la lista de mods: es la parte donde ves

   ```js
       descarga: null
     }

   ];
   ```

   Es decir, el último mod cerrado con `}` y, un poco más abajo, la línea `];`
   que cierra la lista entera.
4. **Pon una coma detrás de esa `}`** del último mod, así: `},`
5. Justo debajo de esa coma, pega la plantilla del apartado 4.5 y rellénala.
6. Baja del todo, escribe el mensaje `Añade Mi Mod al catálogo` y pulsa
   **Commit changes** (*Confirmar cambios*). Te saldrá una ventanita de confirmación:
   pulsa otra vez **Commit changes**.
7. Espera **1-2 minutos** y recarga tu web. Ahí está el mod nuevo.

### 4.5 Plantilla lista para copiar y pegar

Copia todo esto tal cual (incluida la coma del final si vas a añadir otro mod después) y
cambia lo que haya que cambiar:

```js
  ,{
    id: "mi-mod",
    nombre: "Nombre del mod",
    juego: "Nombre del juego",
    version: "1.0.0",
    peso: "1,2 MB",
    sistema: "Windows",
    estado: "disponible",

    resumen: "Una o dos frases contando qué hace. Es lo que se lee en la tarjeta del catálogo.",

    descripcion: [
      "Primer párrafo de la ficha: qué hace el mod y por qué te apetecía hacerlo.",
      "Segundo párrafo, si hace falta: detalles, qué NO hace, qué se queda igual."
    ],

    aviso: null,

    requisitos: [
      "El juego en PC, versión de Steam.",
      "Windows, con permiso para ejecutar archivos .bat."
    ],

    instalacion: [
      "Descarga el ZIP con el botón de esta ficha.",
      "Clic derecho sobre el archivo y «Extraer todo». No ejecutes nada desde dentro del ZIP.",
      "Cierra el juego si lo tienes abierto.",
      "Doble clic en INSTALAR.bat.",
      "Abre el juego y a jugar."
    ],

    capturas: [
      { archivo: "assets/mi-captura.jpg", alt: "Qué se ve exactamente en la imagen", pie: "Pie de la imagen" }
    ],

    descarga: "descargas/MiMod-1.0.0.zip"
  }
```

Cosas de la plantilla que conviene tener claras:

- **`id`**: texto corto, sin espacios ni acentos, y que **no se repita** con otro mod.
- **`estado`**: `"disponible"` si se puede descargar ya. Si aún lo estás cociendo, pon
  `"proximamente"` y `descarga: null`: sale en el catálogo con el botón apagado.
- **`aviso`**: déjalo en `null` si el mod no tiene ninguna advertencia gorda. Si sí la tiene
  (por ejemplo, que en online lo necesiten todos), cámbialo por esto:

  ```js
    aviso: {
      corto: "Frase de una línea que sale en la tarjeta",
      titulo: "Titular del aviso dentro de la ficha",
      texto: "La explicación completa, en un párrafo."
    },
  ```

- **`requisitos`**, **`instalacion`** y **`capturas`**: si no tienen nada, se dejan vacíos
  con los corchetes pelados: `requisitos: [],`
- **`alt`** de las capturas: describe lo que se ve. Es lo que lee un ciego con su lector de
  pantalla y lo que sale si la imagen no carga. No lo dejes vacío.
- **`descarga`**: la ruta al ZIP, tal cual está escrito el archivo. **Cópiala del nombre real
  del archivo, letra por letra.** El nombre que se muestra en la web sale de aquí solo, no
  hay que escribirlo dos veces en ningún sitio.

---

## 5. Actualizar la versión de un mod que ya está

Digamos que `Bopl8Players` pasa de la `1.0.0` a la `1.1.0`.

1. **Sube el ZIP nuevo** a `descargas/` como en el paso 4.2, con su versión en el nombre:
   `Bopl8Players-1.1.0.zip`. **No borres el viejo todavía.**
2. **Edita `mods.js`** (lápiz) y en el bloque de ese mod cambia **tres cosas**:
   - `version: "1.0.0",` → `version: "1.1.0",`
   - `peso: "0,63 MB",` → el tamaño real del ZIP nuevo.
   - `descarga: "descargas/Bopl8Players-1.0.0.zip"` → `descargas/Bopl8Players-1.1.0.zip`
3. Si en `requisitos` mencionas la versión (el mod de Bopl lo hace: *"todos con el mod
   instalado y en la misma versión (1.0.0)"*), **acuérdate de cambiarla ahí también**.
4. Commit, esperas 1-2 minutos y ya está actualizado.
5. **Borra el ZIP viejo cuando lleves unos días** y estés seguro de que el nuevo va bien:
   entra en `descargas/`, pulsa el ZIP viejo, y en el menú **`···`** (los tres puntos de
   arriba a la derecha) elige **Delete file** (*Eliminar archivo*) → **Commit changes**.

> **Por qué no reutilizar el mismo nombre de archivo:** si dejas `Bopl8Players-1.0.0.zip` y
> le metes dentro la versión nueva, quien ya lo hubiera descargado antes se queda con el
> archivo viejo en caché y no se entera del cambio. Con la versión en el nombre, cada
> versión es un archivo distinto y no hay líos.

---

## 6. El límite de tamaño: 25 MB, 100 MB y los Releases

GitHub no está pensado para archivos enormes, y tiene dos topes que te importan:

| Cómo lo subes | Tope por archivo |
|---|---|
| Arrastrando desde el navegador (lo que haces tú) | **25 MB** |
| Límite absoluto del repositorio | **100 MB** |
| Como archivo de un *Release* | **2 GB** |

Además, toda la web junta (todos los archivos del repositorio) no debería pasar de **1 GB**.

Traducido a tu caso: mientras un ZIP no pase de **25 MB**, lo subes arrastrando y no pasa
nada. El de Bopl ocupa 0,63 MB, o sea que vas sobrado. Si algún día haces un mod con
texturas o audio y se te va de 25 MB, usa **Releases**.

### Qué es un Release

Es un apartado del propio GitHub pensado justo para esto: publicar versiones con archivos
adjuntos grandes. El ZIP no vive dentro de la web, vive colgado del repositorio, y desde tu
web pones un enlace directo. Para quien descarga es exactamente igual: pulsa *Descargar ZIP*
y le baja el archivo.

### Cómo publicar un mod grande con Releases

1. En la portada de tu repositorio, en la columna de la derecha, busca **Releases** y pulsa
   **Create a new release** (*Crear una nueva versión*).
   (Si no ves la columna, ve directo a `https://github.com/TU-USUARIO/yisusmod/releases/new`)
2. Pulsa **Choose a tag** (*Elegir una etiqueta*), escribe la versión con una `v` delante
   —por ejemplo `v1.0.0`— y pulsa **+ Create new tag: v1.0.0 on publish**.
3. En **Release title** (*Título*) escribe algo claro: `Mi Mod 1.0.0`.
4. En el cuadro de texto grande, cuenta en dos líneas qué trae esta versión. Opcional.
5. Baja hasta la zona que dice **Attach binaries by dropping them here or selecting them**
   (*Adjunta binarios arrastrándolos aquí*) y **arrastra ahí tu ZIP**. Espera a que termine
   de subir del todo (sale una barra de progreso).
6. Pulsa el botón verde **Publish release** (*Publicar versión*).
7. Ya publicado, verás tu ZIP en la lista de **Assets**. **Clic derecho encima del nombre del
   ZIP → Copiar dirección del enlace.** Te queda algo así:

   ```
   https://github.com/TU-USUARIO/yisusmod/releases/download/v1.0.0/MiMod-1.0.0.zip
   ```

8. En `mods.js`, en vez de la ruta corta, pon **esa dirección completa** en `descarga`:

   ```js
       descarga: "https://github.com/TU-USUARIO/yisusmod/releases/download/v1.0.0/MiMod-1.0.0.zip"
   ```

   La web lo trata igual de bien: el botón de descarga funciona y el nombre del archivo que
   se muestra sigue saliendo solo.

---

## 7. Si algo no funciona

### La web no aparece / sale un 404

**Casi siempre es que no has esperado lo suficiente.** La primera publicación tarda unos
minutos en estar disponible, y cada cambio posterior tarda entre 1 y 2 minutos en verse.
Qué hacer, en este orden:

1. Espera 5 minutos y recarga con **`Ctrl` + `F5`** (recarga saltándose la caché).
2. Mira la pestaña **Actions** del repositorio: si hay un círculo naranja girando, es que
   aún está publicando. Espera al check verde.
3. Comprueba en **Settings → Pages** que sigue puesto **Branch: `main`** y **`/ (root)`**.
4. Comprueba que `index.html` está en la **raíz** del repositorio y no dentro de una carpeta
   `web/`. Si te pasó eso, entra en cada archivo, pulsa el lápiz y cambia su ruta borrando el
   `web/` del principio del nombre.

### Una imagen o un ZIP dan error, pero en tu PC funcionaban

**Son las mayúsculas.** Windows trata igual `Foto.JPG` y `foto.jpg`; el servidor de GitHub
Pages **no**: para él son dos archivos distintos. Por eso una web puede ir perfecta a doble
clic en tu ordenador y luego romperse online.

Qué hacer:

1. Abre en GitHub la carpeta (`assets/` o `descargas/`) y **copia el nombre del archivo tal
   y como sale ahí**, letra por letra, incluida la extensión (`.jpg` no es `.JPG`).
2. Pégalo en `mods.js`, en `archivo:` o en `descarga:`.
3. Para no volver a pasar por esto: pon **todos los nombres de archivo en minúsculas**, sin
   espacios (usa guiones), sin acentos y sin ñ. `mi-mod-menu.jpg`, nunca `Mi Mod Menú.JPG`.

### La web se queda en blanco después de tocar `mods.js`

**Te has dejado una coma.** Es el fallo número uno con diferencia. Al añadir un mod nuevo
hay que poner una coma detrás de la `}` que cierra el mod anterior:

```js
    descarga: "descargas/OtroMod-1.0.0.zip"
  },          <-- ESTA COMA. Sin ella, la web entera se queda en blanco.
  {
    id: "mi-mod",
```

Ojo también con la otra mitad de la regla: **el último mod de la lista NO lleva coma** detrás
de su `}` de cierre.

Cómo confirmarlo en 5 segundos:

1. Abre tu web y pulsa **`F12`** para abrir las herramientas del navegador.
2. Ve a la pestaña **Console** (*Consola*).
3. Si pone algo tipo `Uncaught SyntaxError: Unexpected token` con un número de línea, esa es
   tu línea (o la de justo antes). Vas a `mods.js`, la miras y arreglas la coma o la comilla
   que falte.

Y si la lías del todo y no encuentras el fallo: en tu repositorio, pestaña **Commits**
(pulsa el reloj con la flecha, arriba a la derecha del listado de archivos), busca el commit
anterior al que rompió las cosas, entra, pulsa **`···`** → **Revert** (*Revertir*).
GitHub deshace ese cambio y la web vuelve a como estaba. **Nunca pierdes nada.**

---

## Chuleta rápida

| Quiero… | Voy a… |
|---|---|
| Cambiar un texto de un mod | `mods.js` → lápiz → editar → Commit changes |
| Añadir un mod | ZIP a `descargas/` + bloque nuevo en `mods.js` (¡la coma!) |
| Actualizar una versión | ZIP nuevo a `descargas/` + cambiar `version`, `peso` y `descarga` |
| Añadir una captura | Imagen a `assets/` + una línea más en `capturas:` |
| Un mod pesa más de 25 MB | Releases, y la URL completa en `descarga` |
| Probar antes de subir | Doble clic en `index.html` de tu PC |
| Ver mi web | `https://TU-USUARIO.github.io/yisusmod/` |
