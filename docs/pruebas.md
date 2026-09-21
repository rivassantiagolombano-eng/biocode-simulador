# Pruebas de BioCode

Resultados técnicos obtenidos al ejecutar pruebas de software el 2026-09-21. No son pruebas de estudiantes, mediciones de aprendizaje ni evidencia de construcción física.

## Resumen

- Lógica científica: 26 pruebas PASS.
- Interfaz en Microsoft Edge: 51 comprobaciones PASS; sin errores de consola.
- Validación adicional: 8 comprobaciones PASS.
- Vista previa HTTP: transcripción por WebMCP verificada; entrada inválida rechazada sin modificar ARNm.
- Publicación GitHub: no realizada; no había sesión autenticada disponible.

## Entradas, esperados y obtenidos

| Prueba | Entrada | Esperado | Obtenido | Estado |
|---|---|---|---|---|
| 01 Cadena normal | AUG AAA GCU UUU UAA | ["Met","Lys","Ala","Phe"] | ["Met","Lys","Ala","Phe"] | PASS |
| 02 Mutación obligatoria | Base 4 A→C | ["AUGCAAGCUUUUUAA",["Met","Gln","Ala","Phe"],"Cambio de sentido (missense)"] | ["AUGCAAGCUUUUUAA",["Met","Gln","Ala","Phe"],"Cambio de sentido (missense)"] | PASS |
| 03 Anticodón orientado | 5′-AUG-3′ | "UAC" | "UAC" | PASS |
| 04 STOP no aminoácido ni ARNt | AUGUAAAAA | [["Met"],true,null] | [["Met"],true,null] | PASS |
| 05 Rechazo de caracteres | AUGXAA | true | true | PASS |
| 06 Espacios |  aug aaa gcu  | ["Met","Lys","Ala"] | ["Met","Lys","Ala"] | PASS |
| 07 Silenciosa generada | Buscar sustitución sin cambio aminoácido | "Silenciosa" | "Silenciosa" | PASS |
| 08 Nonsense generado | Buscar sustitución a STOP | "Sin sentido (nonsense)" | "Sin sentido (nonsense)" | PASS |
| 09 Hebra codificante | 5′-ATGAAAGCTTTTTAA-3′ | "AUGAAAGCUUUUUAA" | "AUGAAAGCUUUUUAA" | PASS |
| 10 Hebra molde con espacios | 3′-TACTTTCGAAA AATT-5′ | "AUGAAAGCUUUUUAA" | "AUGAAAGCUUUUUAA" | PASS |
| 11 Tabla completa | 64 tripletes | [64,61,3] | [64,61,3] | PASS |
| 12 Todos los codones frente a fixture independiente | 20 familias y STOP | true | true | PASS |
| 13 Los tres STOP | UAA UAG UGA | true | true | PASS |
| 14 Sin AUG | AAAGCU | [false,0] | [false,0] | PASS |
| 15 Marco desde primer AUG | CCAUGAAAUAA | [2,["Met","Lys"]] | [2,["Met","Lys"]] | PASS |
| 16 Fragmento sin STOP | AUGAAAG | [false,"G"] | [false,"G"] | PASS |
| 17 Pérdida de inicio | AUGAAA, base 1→C | "Pérdida del codón de inicio" | "Pérdida del codón de inicio" | PASS |
| 18 Pérdida de STOP | AUGUAA, base 4→C | "Pérdida de STOP (stop-loss)" | "Pérdida de STOP (stop-loss)" | PASS |
| 19 Posición después de STOP | AUGUAAAAA, base 7→C | "Fuera de la región traducida del modelo" | "Fuera de la región traducida del modelo" | PASS |
| 20 Validación posición y base | 0, 1.5, 999, sin cambio | true | true | PASS |
| 21 Estados P/A/E y enlace | AUGAAAUAA | true | true | PASS |
| 22 Anticodones de todos los codones | Complementariedad A-U y C-G | true | true | PASS |
| 23 Vacío, T en ARN, U en ADN y límite | Entradas inválidas | true | true | PASS |
| 24 Marco no múltiplo de tres en mutación | CCAUGAAAUAA, base 6→C | "Cambio de sentido (missense)" | "Cambio de sentido (missense)" | PASS |
| 25 STOP fuera de marco no termina | AUGCUAAGCUAA | ["Met","Leu","Ser"] | ["Met","Leu","Ser"] | PASS |
| 26 Fragmento no se libera | AUGAAA | true | true | PASS |

## Ejemplos generados automáticamente

- Base 6 A→G: AAA→AAG; Silenciosa. Cadena: Met–Lys–Ala–Phe.
- Base 4 A→U: AAA→UAA; Sin sentido (nonsense). Cadena: Met.

## Recorrido de interfaz

- PASS: Carga de aplicación.
- PASS: 64 filas de código.
- PASS: Cargar ejemplo y transcribir.
- PASS: Molde correcto.
- PASS: Mensaje de ADN inválido.
- PASS: Iniciación en P.
- PASS: ARNt entrante en A.
- PASS: Transferencia de cadena.
- PASS: Translocación y E.
- PASS: Terminación.
- PASS: Cadena normal.
- PASS: STOP usa factor.
- PASS: 100 %.
- PASS: Missense calculado.
- PASS: Cambio Lys/Gln.
- PASS: Silenciosa en interfaz.
- PASS: Nonsense en interfaz.
- PASS: Posición inválida.
- PASS: Sin sustitución rechazado.
- PASS: ARN inválido.
- PASS: Sin inicio.
- PASS: Sin STOP ni liberación.
- PASS: Reinicio.
- PASS: Desafío oculta solución.
- PASS: Desafío exige selección.
- PASS: Respuesta 1 bloqueada tras comprobar.
- PASS: Respuesta 2 bloqueada tras comprobar.
- PASS: Respuesta 3 bloqueada tras comprobar.
- PASS: Respuesta 4 bloqueada tras comprobar.
- PASS: Respuesta 5 bloqueada tras comprobar.
- PASS: Puntaje, aciertos y errores.
- PASS: Reinicio desafío.
- PASS: Precisión calculada.
- PASS: Validación no permite más correctas que total.
- PASS: Persistencia de registros.
- PASS: Ancla #main.
- PASS: Ancla #inicio.
- PASS: Ancla #inicio.
- PASS: Ancla #simulador.
- PASS: Ancla #mutaciones.
- PASS: Ancla #desafio.
- PASS: Ancla #ciencia.
- PASS: Ancla #acerca.
- PASS: Sin desborde horizontal a 1440.
- PASS: Sin desborde horizontal a 1024.
- PASS: Sin desborde horizontal a 768.
- PASS: Sin desborde horizontal a 390.
- PASS: Sin desborde horizontal a 320.
- PASS: Traducción en móvil.
- PASS: Mutación en móvil.
- PASS: Sin errores de consola.
- PASS: Codón AAA centrado en P a 390 px.
- PASS: Cambiar posición borra comparación obsoleta.
- PASS: Secuencia de 600 bases sin desborde.
- PASS: Reflujo equivalente a zoom 200 % en pantalla 1440.
- PASS: Reiniciar por teclado.
- PASS: Botón imprimir invoca impresión.
- PASS: Recortables mantienen medida 7 cm.
- PASS: Controles ocultos al imprimir.

## Revisión visual y correcciones

Se revisaron capturas de escritorio y móvil. Se corrigió la distancia entre codones para que coincidan con los centros E/P/A, calculándola desde el ancho real de los sitios. La prueba de 600 bases detectó desbordamiento móvil; se corrigió el ancho mínimo de los paneles. Las tarjetas muestran cantidad de aminoácidos para evitar desbordes con cadenas largas. Cambiar posición o base borra la comparación anterior y los errores no dejan resultados obsoletos. Se repitieron los recorridos tras estos cambios.

## Reproducir

Ejecutar `node tests/science.test.cjs`. Para pruebas de navegador, instalar Playwright como herramienta de desarrollo y usar un Microsoft Edge disponible; ejecutar `node tests/browser.test.cjs` y `node tests/extended.test.cjs`. Finalmente `node tests/report.cjs` regenera este informe. El sitio por sí mismo no necesita Node ni Playwright. Los JSON incluyen hora de ejecución y resultados.

## Alcance y pendientes reales

Probado en Edge de escritorio con anchos emulados 320, 390, 768, 1024 y 1440 px; se revisó reflujo a 720 px, teclado, impresión y movimiento reducido. No equivale a prueba en dispositivos físicos, todos los navegadores o lectores de pantalla. La impresión se verificó en el navegador; faltan impresión material, medición con regla, montaje y QR público. Los registros escolares comienzan en cero.

| Fecha real | Dispositivo o maqueta | Tarea | Esperado | Obtenido | PASS/FAIL | Mejora y repetición |
|---|---|---|---|---|---|---|
| Por completar | | | | | | |

## Revisión AD: documentación y regresiones

Se conserva science.js sin cambios (SHA-256 verificado). Las 134 comprobaciones documentales pasaron, además de 26 científicas, 51 de interfaz y 8 adicionales: 219 comprobaciones automatizadas PASS en esta revisión.

Se comprobó: enlaces HTML, vista móvil, cuatro ensayos con observaciones vacías, alta de filas, guardado/recuperación local, impresión de datos introducidos, 21 filas del cuaderno, ocho sesiones, diez pasos, preguntas originales, resúmenes menores de 250 palabras y límites de área A4. Se ajustó la altura de filas del cuaderno tras detectar exceso de altura y se repitió la prueba con éxito. Se corrigió el generador del informe para escribir saltos de línea reales, evitando texto Markdown unido por escapes literales.

- PASS: Motor científico sin cambios.
- PASS: proyecto: título y contenido.
- PASS: proyecto: enlace interno.html#documentacion.
- PASS: proyecto: enlace HTML.
- PASS: proyecto: enlace modelo-fisico.html.
- PASS: proyecto: enlace HTML.
- PASS: proyecto: enlace validacion-real.html.
- PASS: proyecto: enlace HTML.
- PASS: proyecto: enlace sesiones-47-54.html.
- PASS: proyecto: enlace HTML.
- PASS: proyecto: enlace cuaderno-campo.html.
- PASS: proyecto: enlace HTML.
- PASS: proyecto: sin desborde móvil.
- PASS: pruebas: título y contenido.
- PASS: pruebas: enlace interno.html#documentacion.
- PASS: pruebas: enlace HTML.
- PASS: pruebas: sin desborde móvil.
- PASS: modelo-fisico: título y contenido.
- PASS: modelo-fisico: enlace interno.html#documentacion.
- PASS: modelo-fisico: enlace HTML.
- PASS: modelo-fisico: sin desborde móvil.
- PASS: sesiones-47-54: título y contenido.
- PASS: sesiones-47-54: enlace interno.html#documentacion.
- PASS: sesiones-47-54: enlace HTML.
- PASS: sesiones-47-54: enlace cartilla-salud.html.
- PASS: sesiones-47-54: enlace HTML.
- PASS: sesiones-47-54: enlace proyecto.html.
- PASS: sesiones-47-54: enlace HTML.
- PASS: sesiones-47-54: enlace plano-prototipo.html.
- PASS: sesiones-47-54: enlace HTML.
- PASS: sesiones-47-54: enlace cuaderno-campo.html.
- PASS: sesiones-47-54: enlace HTML.
- PASS: sesiones-47-54: enlace modelo-fisico.html.
- PASS: sesiones-47-54: enlace HTML.
- PASS: sesiones-47-54: enlace validacion-real.html.
- PASS: sesiones-47-54: enlace HTML.
- PASS: sesiones-47-54: enlace pruebas.html.
- PASS: sesiones-47-54: enlace HTML.
- PASS: sesiones-47-54: enlace proyecto.html.
- PASS: sesiones-47-54: enlace HTML.
- PASS: sesiones-47-54: enlace cuaderno-campo.html.
- PASS: sesiones-47-54: enlace HTML.
- PASS: sesiones-47-54: sin desborde móvil.
- PASS: cartilla-salud: título y contenido.
- PASS: cartilla-salud: enlace interno.html#documentacion.
- PASS: cartilla-salud: enlace HTML.
- PASS: cartilla-salud: sin desborde móvil.
- PASS: cuaderno-campo: título y contenido.
- PASS: cuaderno-campo: enlace interno.html#documentacion.
- PASS: cuaderno-campo: enlace HTML.
- PASS: cuaderno-campo: sin desborde móvil.
- PASS: plano-prototipo: título y contenido.
- PASS: plano-prototipo: enlace interno.html#documentacion.
- PASS: plano-prototipo: enlace HTML.
- PASS: plano-prototipo: enlace modelo-fisico.html.
- PASS: plano-prototipo: enlace HTML.
- PASS: plano-prototipo: enlace recortables.html.
- PASS: plano-prototipo: enlace HTML.
- PASS: plano-prototipo: enlace validacion-real.html.
- PASS: plano-prototipo: enlace HTML.
- PASS: plano-prototipo: sin desborde móvil.
- PASS: validacion-real: título y contenido.
- PASS: validacion-real: enlace interno.html#documentacion.
- PASS: validacion-real: enlace HTML.
- PASS: validacion-real: sin desborde móvil.
- PASS: manual: título y contenido.
- PASS: manual: enlace interno.html#documentacion.
- PASS: manual: enlace HTML.
- PASS: manual: enlace modelo-fisico.html.
- PASS: manual: enlace HTML.
- PASS: manual: enlace recortables.html.
- PASS: manual: enlace HTML.
- PASS: manual: enlace proyecto.html.
- PASS: manual: enlace HTML.
- PASS: manual: enlace proyecto.html.
- PASS: manual: enlace HTML.
- PASS: manual: enlace sesiones-47-54.html.
- PASS: manual: enlace HTML.
- PASS: manual: enlace modelo-fisico.html.
- PASS: manual: enlace HTML.
- PASS: manual: enlace plano-prototipo.html.
- PASS: manual: enlace HTML.
- PASS: manual: enlace cartilla-salud.html.
- PASS: manual: enlace HTML.
- PASS: manual: enlace cuaderno-campo.html.
- PASS: manual: enlace HTML.
- PASS: manual: enlace validacion-real.html.
- PASS: manual: enlace HTML.
- PASS: manual: enlace pruebas.html.
- PASS: manual: enlace HTML.
- PASS: manual: sin desborde móvil.
- PASS: Cuatro ensayos previstos.
- PASS: Observaciones y evaluaciones inicialmente vacías.
- PASS: Añadir quinta cadena.
- PASS: Persisten filas y observaciones propias.
- PASS: No completa otras observaciones.
- PASS: Impresión conserva texto introducido.
- PASS: Sesión 47 presente.
- PASS: Sesión 48 presente.
- PASS: Sesión 49 presente.
- PASS: Sesión 50 presente.
- PASS: Sesión 51 presente.
- PASS: Sesión 52 presente.
- PASS: Sesión 53 presente.
- PASS: Sesión 54 presente.
- PASS: Paso 1 presente.
- PASS: Paso 2 presente.
- PASS: Paso 3 presente.
- PASS: Paso 4 presente.
- PASS: Paso 5 presente.
- PASS: Paso 6 presente.
- PASS: Paso 7 presente.
- PASS: Paso 8 presente.
- PASS: Paso 9 presente.
- PASS: Paso 10 presente.
- PASS: Pregunta exacta ARN polimerasa.
- PASS: Pregunta exacta mutación.
- PASS: Fotografías señaladas pendientes.
- PASS: cartilla-salud: botón oculto al imprimir.
- PASS: cartilla-salud: páginas dentro del área A4 (863,775 px).
- PASS: cuaderno-campo: botón oculto al imprimir.
- PASS: cuaderno-campo: páginas dentro del área A4 (599,599,599 px).
- PASS: plano-prototipo: botón oculto al imprimir.
- PASS: plano-prototipo: páginas dentro del área A4 (699,673,598 px).
- PASS: 21 filas de campo.
- PASS: Campos de campo vacíos.
- PASS: Documentación retirada de interfaz pública.
- PASS: Seis opciones de navegación.
- PASS: Acerca de con autoría.
- PASS: Sin contenido administrativo público.
- PASS: Sin enlaces principales a Markdown.
- PASS: Resumen informe <=250 palabras.
- PASS: Resumen guía <=250 palabras.
- PASS: Sin errores JS.
