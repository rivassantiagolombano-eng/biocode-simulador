# BioCode

## Experiencia guiada

La interfaz comienza con una bienvenida y muestra una tarea por pantalla: ADN → ARNm → ribosoma → cadena → mutación → comparación. `experience.js` adapta exclusivamente la presentación de los resultados de `science.js`; el motor científico permanece sin cambios. `experience.css` define el diseño del recorrido y la adaptación móvil.

El modo avanzado conserva los controles originales, las dos hebras, orientaciones, anticodones, edición de ARNm, tabla de 64 codones y detalles de traducción. Aprender contiene seis tarjetas con explicaciones ampliables. La documentación escolar sigue en `docs/`, sin enlaces desde la aplicación pública.

Pruebas del rediseño: `node tests/science.test.cjs` (26), `node tests/experience.test.cjs` (102), `node tests/browser.test.cjs` (61) y `node tests/extended.test.cjs` (8). Las tres suites de interfaz requieren Playwright y Microsoft Edge. Capturas nuevas: `assets/images/desktop.png`, `mobile.png`, `desktop-home.png` y `mobile-home.png`.

Simulador Interactivo de Síntesis Proteica y Mutaciones. Proyecto híbrido de Ciencia y Tecnología, 5.º de secundaria, I.E. N.° 1146 “República del Paraguay”.

**Integrantes:**
- Santiago Rivas
- Joseph Valderrama

## Ejecutar y probar

Abre `index.html` con un navegador moderno. Funciona localmente sin servidor, instalación, cuentas ni internet; las fuentes externas requieren conexión. Mantén todos los archivos juntos.

1. Pulsa **Cargar ejemplo** y **Transcribir**.
2. Pulsa **Iniciar traducción** y después **Siguiente paso** hasta STOP.
3. Verifica Met–Lys–Ala–Phe; STOP no integra la cadena.
4. En mutaciones deja posición 4 y base C. Pulsa **Crear mutación** o **Comparar**: aparece Met–Gln–Ala–Phe, missense.
5. Responde los cinco desafíos. Los registros escolares se consultan aparte en docs/interno.html.

Pruebas de lógica con Node.js, opcional para desarrollo: `node tests/science.test.cjs`. La aplicación no necesita Node. Las pruebas de navegador adicionales usan Playwright como herramienta de desarrollo, no como dependencia del sitio.

## Tecnologías y características

HTML5, CSS3 y JavaScript Vanilla, sin dependencias de ejecución. Transcripción de ambas hebras; 64 codones; anticodones orientados; estados A/P/E; cadena progresiva; STOP por factor; mutaciones silenciosas, missense y nonsense; pérdida de inicio/STOP; comparación; cinco retos; almacenamiento local de validación; accesibilidad por teclado y movimiento reducido. Límite didáctico de 600 bases por secuencia.

## Caso científico

ADN codificante 5′-ATGAAAGCTTTTTAA-3′; molde 3′-TACTTTCGAAAAATT-5′. ARNm 5′-AUG AAA GCU UUU UAA-3′. Traducción normal Met–Lys–Ala–Phe. Base 4 A→C produce CAA/Glutamina y cadena Met–Gln–Ala–Phe. Se usa el código estándar, primer AUG y primer STOP en el marco. No representa necesariamente una proteína humana real.

## Estructura

```text
index.html             Interfaz completa
style.css              Estilo responsive y animaciones
science.js             Motor científico centralizado
script.js              Controles, desafío y registros
README.md              Manual y publicación
.nojekyll              Sitio estático para Pages
assets/icons/          Icono BioCode
assets/images/         Capturas y evidencias futuras
docs/modelo-fisico.md   Construcción, materiales y QR
docs/recortables.html   Tarjetas imprimibles
docs/proyecto.md        Informe, cronograma y defensa
docs/pruebas.md         Registro de pruebas
tests/                 Pruebas automatizadas
```

## Publicar mediante GitHub Pages

La publicación requiere una cuenta de GitHub autorizada. No se necesita instalar nada para subir desde la web.

1. Inicia sesión en GitHub y crea un repositorio público llamado `biocode-simulador`.
2. Selecciona **Add file → Upload files**. Arrastra el **contenido** de esta carpeta, no una carpeta envolvente: `index.html` debe quedar en la raíz, junto con `style.css`, `script.js`, `science.js`, `assets` y `docs`. Confirma con **Commit changes**.
3. Ve a **Settings → Pages → Build and deployment**. Selecciona **Deploy from a branch**, rama `main`, carpeta **/(root)** y **Save**.
4. Espera a que GitHub indique despliegue satisfactorio y abre la URL indicada en esa pantalla. Normalmente sigue el formato `https://TU-USUARIO.github.io/biocode-simulador/`; este patrón no es una URL publicada de este proyecto.
5. Ejecuta los pasos de prueba de este README en la URL pública y revisa también desde celular. Si aparece 404, comprueba nombre del repositorio, rama, raíz y estado de despliegue.
6. Copia la URL verificada en `docs/modelo-fisico.md` y genera el QR siguiendo esa guía.

Documentación oficial: [Configurar una fuente de publicación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Capturas y evidencia

Las capturas técnicas se guardan en `assets/images/`. Añadan fotografías reales de la maqueta, pruebas con fechas, presupuesto ejecutado y observaciones. No confundan capturas del software con evidencia de construcción o aprendizaje. Los datos escolares comienzan en cero.

## Construcción y exposición

Consulta [modelo físico](docs/modelo-fisico.md), imprime [recortables](docs/recortables.html) al 100 % y utiliza el guion de seis minutos de [proyecto](docs/proyecto.md). La calificación depende de la rúbrica real y de la evidencia recogida por el equipo.

## Revisión orientada a Destacado (AD)

La documentación del equipo se conserva en HTML en [Archivo interno](docs/interno.html), sin enlaces desde la interfaz pública. Se conserva el motor `science.js` sin cambios y todas las funciones existentes.

- [Informe y matriz de los 17 criterios](docs/proyecto.html).
- [Guía completa: sesiones 47–54 y pasos 1–10](docs/sesiones-47-54.html), con preguntas originales y respuestas.
- [Modelo físico](docs/modelo-fisico.html), con canal de 4.5–5 cm para tira de 4 cm y acople mecánico previsto.
- [Plano y flujo del software](docs/plano-prototipo.html).
- [Cartilla científica A4](docs/cartilla-salud.html).
- [Cuaderno de campo: tres semanas, 21 filas](docs/cuaderno-campo.html), A4 horizontal.
- [Validación real editable](docs/validacion-real.html): cuatro ensayos previstos; observaciones vacías. Permite añadir filas, guardar localmente e imprimir sin calcular observaciones por el estudiante.
- [Pruebas actualizadas](docs/pruebas.html).

Los botones de los documentos imprimen o permiten guardar PDF desde el navegador. Para el cuaderno y tabla de validación se usa A4 horizontal; los demás, A4 vertical. Las medidas de los recortables deben imprimirse al 100 %.

Las fuentes Markdown se conservan. Para regenerar HTML: disponer de `marked` como herramienta de desarrollo y ejecutar `node tests/build-docs.mjs`; el sitio entregado no requiere esa dependencia. Pruebas adicionales: `node tests/docs.test.cjs` con Playwright y Edge. Después de repetir las pruebas, `node tests/report.cjs` actualiza el informe y el generador vuelve a crear HTML.

## Interfaz pública simplificada

La navegación es Inicio, Simulador, Mutaciones, Desafíos, Aprender y Acerca de. El contenido preventivo está integrado en Aprender. No se enlazan documentos escolares desde index.html. Los registros y todos los documentos permanecen en docs/; abrir docs/interno.html directamente para preparar entregas. Esto retira los enlaces, no añade control de acceso: los archivos siguen accesibles por su URL si se publican.
