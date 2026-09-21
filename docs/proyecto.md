# BioCode: Simulador Interactivo de Síntesis Proteica y Mutaciones

**Integrantes:** Santiago Rivas y Joseph Valderrama. **Institución:** I.E. N.° 1146 “República del Paraguay”. **Nivel:** 5.º de secundaria. **Área:** Ciencia y Tecnología.

## Problemática

Se plantea que los estudiantes de 5.º de secundaria pueden presentar dificultades para visualizar cómo la información genética del ADN se transforma en proteínas y cómo una mutación puntual modifica el producto de la traducción. Los esquemas bidimensionales no permiten manipular directamente las relaciones entre ADN, ARNm, codones, ARNt, anticodones, ribosomas y aminoácidos. BioCode propone una solución tecnológica híbrida con un simulador web y un modelo físico manipulable. La magnitud de esta dificultad en el aula debe verificarse; no se ha realizado una encuesta inicial.

## Pregunta tecnológica

¿Cómo diseñar una solución económica, accesible e interactiva que permita representar correctamente la síntesis proteica y comparar el efecto de una sustitución puntual?

## Objetivo general y objetivos específicos

Construir una solución híbrida que explique visualmente cómo el ADN se transcribe a ARNm, cómo este se traduce en el ribosoma y cómo una sustitución puede cambiar la cadena.

- Implementar ambas hebras de ADN con orientación correcta y código estándar de 64 codones.
- Representar iniciación, reconocimiento, enlace peptídico, translocación y terminación.
- Comparar cadenas normales y mutadas, calculando la clasificación.
- Construir una maqueta de bajo costo con piezas móviles y QR.
- Validar exactitud técnica, funcionamiento físico y comprensión mediante evidencias reales.

## Alternativas y decisión

Comparación cualitativa de planificación, no resultados experimentales:

| Criterio | Maqueta estática | Simulador electrónico con circuitos | Solo software | Híbrida seleccionada |
|---|---|---|---|---|
| Costo | Bajo | Medio/alto por componentes | Bajo con equipo disponible | Bajo con material reciclado |
| Construcción | Sencilla | Requiere montaje y energía | Requiere programación | Requiere programación y cartón |
| Interacción | Limitada | Botones y señales | Cambios de secuencia y pasos | Digital y manipulación compartida |
| Precisión | Depende del rotulado | Depende de programación y montaje | Reglas verificables | Reglas verificables y control manual |
| Mutaciones | Cambiar piezas | Reprogramar o cablear | Cambio inmediato | Comparación en ambos soportes |
| Accesibilidad | Sin dispositivo | Necesita energía | Celular o PC; offline local | Alternativa física sin dispositivo |
| Impacto educativo esperado | Observación | Relación con electrónica | Exploración individual | Exploración y exposición grupal |

Se selecciona la híbrida porque combina cálculo reproducible, comparación rápida y manipulación sin pantalla, bajo un presupuesto físico objetivo S/10–20. Exige más trabajo que una maqueta estática y su ventaja pedagógica debe medirse, no darse por demostrada.

## Diseño y funcionamiento

Web estática con HTML5, CSS3 y JavaScript Vanilla. `science.js` centraliza el código estándar, validación, transcripción, anticodones, traducción, mutaciones y estados del ribosoma. `script.js` conecta estos resultados a los controles. No hay cuentas, base de datos ni backend. Los registros escolares se guardan localmente en el navegador.

El usuario elige ADN codificante 5′→3′ o molde 3′→5′; la ARN polimerasa produce ARNm 5′→3′. Se explica la maduración eucariota sin simular intrones. Se inicia desde el primer AUG y se lee por tripletes hasta el primer STOP en ese marco. Sin AUG no se inicia; sin STOP se informa fragmento incompleto. La pérdida de inicio y de STOP tienen etiquetas propias. Se distinguen posiciones no traducidas. No se predice enfermedad ni función proteica.

El modelo físico usa base 50 × 30 cm, ribosoma 25 × 15 cm, tiras deslizantes y tarjetas acoplables; véase [guía completa](modelo-fisico.md). Anticodones ideales antiparalelos, sin wobble. AUG es el inicio habitual representado; no se modelan inicios alternativos, factores individuales, energía ni plegamiento.

## Materiales y presupuesto

Cartón reutilizado, cartulina, EVA opcional, velcro, pegamento, hilo, plumones e impresiones. Asignación estimada: cartulina S/3, EVA S/2, velcro S/3, pegamento S/3, hilo S/1 e impresiones S/2: total S/14. No es una cotización. Equipo y acceso a internet se consideran ya disponibles; registren cualquier costo adicional real. Usen la tabla detallada de la guía para comprobantes.

## Cronograma de tres semanas

| Semana | Trabajo | Responsables propuestos | Evidencia a recolectar |
|---|---|---|---|
| 1 | Investigación, problema, requisitos, desarrollo inicial y diseño físico | Ambos; Santiago prueba secuencias, Joseph dibuja piezas | Fuentes, boceto con medidas, versión inicial y diagnóstico |
| 2 | Construcción, simulador, integración de mutaciones y primeras pruebas | Ambos; rotar roles de operador y observador | Fotos propias, costos, registros de errores y pruebas |
| 3 | Validación, correcciones, fotos finales, resultados, ensayo de exposición, GitHub Pages y QR | Ambos | Datos antes/después, repetición de pruebas, URL, QR verificado y conclusiones |

Añadan fechas reales al ejecutar el plan. Estas semanas no afirman que el trabajo de campo ya ocurrió.

## Seguridad y sostenibilidad

Reutilizar cartón limpio, reducir impresiones y separar residuos. Tijeras escolares; cúter y silicona caliente solo con supervisión adulta. Preferir pegamento frío; evitar piezas pequeñas accesibles a niños. Pedir consentimiento para fotografías y no publicar nombres o datos de compañeros encuestados.

## Implementación y registro de mejoras

Se entrega el software y material de construcción. La construcción física, despliegue y validación con compañeros deben registrarse cuando se realicen.

| Versión/fecha real | Problema observado | Modificación aplicada | Evidencia de repetición |
|---|---|---|---|
| Completar | Completar con observación real | Completar | Completar con medida o foto |

Ejemplo de hipótesis de mejora, **no observación medida**: si se confunden codón y anticodón, reforzar etiquetas 5′/3′ y comprobar luego con otra pregunta equivalente. No escribir “mejoró la comprensión” sin comparar datos.

## Validación

1. Técnica: ejecutar `node tests/science.test.cjs`, consultar `pruebas.md` y repetir el recorrido de interfaz.
2. Física: realizar tres recorridos de cada tira; registrar atascos, acoplamiento y legibilidad a 2 m.
3. Escolar: invitar voluntariamente a compañeros; asignar códigos anónimos. Aplicar cinco preguntas equivalentes antes y después, sin enseñar la respuesta previamente. Registrar número de participantes y condiciones. El puntaje del juego es práctica individual y no sustituye esta medición.
4. Calcular precisión de pruebas: correctas / total × 100. Para aprendizaje, comparar puntaje medio antes/después y describir tamaño de muestra; no atribuir causalidad ni generalizar con una muestra pequeña.

| Fecha | Código participante o prueba | Entrada/tarea | Esperado | Observado | Correcto | Mejora |
|---|---|---|---|---|---|---|
| Por completar | | | | | | |

## Correspondencia con los criterios de nivel Destacado (AD)

Matriz basada en los criterios de la rúbrica comunicados por el equipo. La calificación corresponde a la docente y requiere evidencia real de ejecución, no solo documentos preparados.

| Criterio | EVIDENCIA YA DISPONIBLE | EVIDENCIA REAL QUE SANTIAGO Y JOSEPH TODAVÍA DEBEN RECOLECTAR |
|---|---|---|
| Delimitación precisa del problema | Problema enfocado en 5.º, síntesis proteica y sustitución puntual; alcance de 600 bases y código estándar | Diagnóstico anónimo de dificultades concretas del aula y número de participantes |
| Variables biomoleculares | ADN/ARNm, orientación, posición/base sustituida, codón, anticodón y cadena; comparación A→C en base 4 | Predicciones propias y observaciones en la tabla de validación |
| Requerimientos técnicos | Sitio estático, sin cuentas, letras además de colores, entradas validadas y diseño adaptable | Registro de funcionamiento en celulares y PC reales del colegio |
| Selección frente a otras alternativas | Matriz de cuatro alternativas y justificación híbrida | Disponibilidad real de dispositivos y materiales que confirme la elección |
| Eficiencia | Código genético centralizado; pruebas de 600 bases; reutilización de un solo motor científico | Tiempo por demostración, atascos por recorrido y costo por uso; no hay tiempos medidos aún |
| Viabilidad | Guía de montaje, presupuesto previsto S/14 y cronograma de tres semanas | Cotizaciones, comprobantes y tiempo de trabajo real |
| Valor didáctico/preventivo | Desafíos, comparación y cartilla con decisiones preventivas y fuentes | Respuestas antes/después y explicación de una decisión preventiva por participantes |
| Planos y diagramas detallados | Plano de base 50 × 30 cm, ribosoma 25 × 15 cm, canal 4.5–5 cm y flujo del software | Medidas de piezas fabricadas y fotografías comparadas con el plano |
| Planificación y costo-beneficio | Cronograma, roles propuestos, costos y análisis de reutilización | Gastos reales, usos realizados y balance frente a presupuesto |
| Prevención de riesgos | Medidas para cortes, adhesivos, piezas pequeñas y privacidad | Lista de seguridad comprobada durante el montaje |
| Implementación/programación | Aplicación funcional y motor científico conservado; archivos y pruebas reproducibles | Registro del montaje y explicación propia de las decisiones de implementación |
| Validación sistemática | Pruebas automatizadas e informe técnico; tabla editable de ensayos | Observaciones reales, responsables, fecha y repeticiones |
| Pruebas controladas | Protocolo: cambiar una base manteniendo longitud, marco y condiciones | Al menos tres repeticiones por tira y registro de condiciones constantes |
| Comunicación científica | Sesiones 47–54, orientaciones moleculares, informe, cartilla y guion | Exposición, preguntas recibidas y retroalimentación de la docente |
| Impacto en salud celular | Explicación responsable de daño al ADN, reparación y mutación | Evidencia de comprensión preventiva; no se realizan experimentos con exposición a mutágenos |
| Impacto escolar/social | Propuesta de uso compartido y alternativa física sin pantalla | Participación anónima, dificultades de acceso y comentarios autorizados |
| Escalabilidad | Plan prospectivo de cuatro etapas con costos, mantenimiento y límites | Ensayo piloto de réplica o uso en otro grupo, si se ejecuta |

## Variables y protocolo de pruebas controladas

Variable manipulada: identidad de una base de ARNm en una posición especificada, como representación del cambio transcrito en ADN. Variables de respuesta: codón, aminoácido, longitud de cadena y clasificación. Constantes: secuencia restante, longitud, código genético, criterio del primer AUG y lectura 5′→3′. La misma sustitución puede tener otra consecuencia en otra posición o marco.

Para comparar soportes, mantengan la misma secuencia, orden de pasos, etiquetas, operador y condiciones de lectura; alternen después el operador y registren ese cambio. Predigan antes de ejecutar, observen sin copiar la predicción, comparen y repitan después de cualquier ajuste. Usen la [tabla de validación real](validacion-real.html); los campos observados están vacíos deliberadamente. No expongan personas, células ni materiales biológicos a radiación o sustancias para este proyecto.

## Costo-beneficio y eficiencia prevista

El presupuesto físico estimado de S/14 beneficia a varios usuarios mediante tiras reutilizables; con diez usos hipotéticos equivaldría a S/1.40 de material inicial por uso, sin incluir equipo ni trabajo. Es un cálculo prospectivo, no diez usos realizados. La maqueta estática sería más sencilla; la opción híbrida se justifica por permitir sustituciones y pasos repetibles. Registrar costo real dividido entre usos reales, tiempo de demostración y fallas por recorrido permitirá valorar esa ventaja. No se afirma una mejora de aprendizaje o una velocidad superior sin medición.

## Impacto educativo y social

Se espera favorecer la comprensión al conectar una representación digital con manipulación física. La versión local reduce dependencia de internet después de descargarla. Las explicaciones sobre radiación UV y agentes químicos promueven prevención informada sin asociar automáticamente toda mutación con enfermedad. Los resultados educativos y sociales permanecen como expectativas hasta medirlos.

## Escalabilidad

Plan prospectivo; las etapas siguientes no se presentan como ejecutadas.

| Etapa | Uso y condiciones | Costos y materiales aproximados | Mantenimiento y acceso | Impacto esperado y limitaciones |
|---|---|---|---|---|
| 1 · 5.º de secundaria | Un equipo con el ejemplo normal y tres sustituciones | S/10–20 para una maqueta; cartón, velcro y tiras. Dispositivo disponible aparte | Revisar riel y etiquetas antes de cada uso; QR cuando exista URL pública; copia local sin internet | Comprensión de codón/anticodón y decisiones frente a UV; confirmar con registros reales |
| 2 · Otros grados | Adaptar vocabulario y profundidad con cada docente; pilotar un grupo | Reutilizar maqueta; reservar S/2–5 para nuevas tarjetas, estimación sin cotizar | Versionar fichas por grado; mismo QR y material impreso para quien no tenga dispositivo | Acceso progresivo a biología molecular; requiere acompañamiento, no trasladar automáticamente resultados de 5.º |
| 3 · Más secuencias y mutaciones | Añadir secuencias verificadas; sustituciones ya disponibles. Inserciones/deleciones serán desarrollo futuro | S/0 en nuevas piezas digitales usando equipo disponible; S/2–5 en tiras; tiempo de programación por estimar | Ejecutar regresiones por cambio; conservar código estándar y documentar nuevas reglas | Mayor exploración; no usar como predictor clínico. Límite actual 600 bases y ausencia de wobble/plegamiento |
| 4 · Replicación física | Compartir planos y capacitación; piloto de cinco réplicas | Cinco modelos: S/50–100 estimados sin dispositivos ni mano de obra; no son gastos realizados | Inventario de tarjetas, reposición de velcro y tiras, QR por versión y revisión mensual propuesta | Trabajo cooperativo y cartilla preventiva; materiales, impresora, conectividad y disponibilidad docente pueden limitarlo |

Indicadores para decidir si avanzar: proporción de pruebas correctas, explicaciones con orientación correcta, fallas físicas, costo real por modelo, acceso y comprensión preventiva. Los umbrales los acuerdan con la docente antes del piloto. No se atribuye reducción de enfermedades a una actividad escolar.

## Guion resumido de demostración (6 minutos)

| Tiempo | Presentador | Acción y mensaje |
|---|---|---|
| 0:00–0:40 | Santiago | Explica el problema de visualizar procesos y presenta la solución híbrida. |
| 0:40–1:20 | Joseph | Carga ADN codificante, transcribe y señala T→U. Explica orientación y molde. |
| 1:20–2:40 | Santiago | Inicia AUG en P. Avanza: ARNt entra A, enlace peptídico, A→P y P→E. Muestra cadena normal y STOP con factor. |
| 2:40–3:40 | Joseph | Muta base 4 A→C; compara AAA/Lys con CAA/Gln. Clasifica missense. |
| 3:40–4:50 | Ambos | Repiten la segunda incorporación con ambas tiras físicas y muestran el QR verificado. |
| 4:50–5:30 | Santiago | Expone pruebas reales y mejoras documentadas; si faltan, indica su estado. |
| 5:30–6:00 | Joseph | Explica utilidad educativa, límites y conclusión: una base puede cambiar un aminoácido; no toda mutación causa enfermedad. |

## Preguntas de defensa

| Pregunta | Respuesta breve |
|---|---|
| ¿Qué diferencia hay entre ADN y ARN? | El ADN contiene desoxirribosa y timina; el ARN, ribosa y uracilo. El ADN suele ser bicatenario y el ARN usualmente monocatenario con estructuras locales. |
| ¿Por qué el ARN usa uracilo? | Es una de sus bases habituales y se aparea con adenina. La timina del ADN es un uracilo metilado; esta diferencia también ayuda a distinguir uracilos derivados de daño en ADN. |
| ¿Qué significa 5′→3′? | Designa extremos según carbonos de la pentosa y la dirección de la cadena; la síntesis añade nucleótidos al extremo 3′. |
| ¿Qué hace la ARN polimerasa? | Lee la hebra molde 3′→5′ y sintetiza ARN complementario 5′→3′. |
| ¿Qué es un codón? | Un triplete de ARNm que especifica un aminoácido o terminación. |
| ¿Qué es un anticodón? | Triplete de ARNt que se aparea antiparalelamente con el codón. |
| ¿Qué función tiene el ARNt? | Llevar el aminoácido correspondiente y reconocer el codón mediante su anticodón. |
| ¿Qué ocurre en A, P y E? | A recibe el nuevo ARNt, P sostiene el ARNt con la cadena antes del enlace y E permite salir al descargado. Durante el enlace la cadena pasa a A. |
| ¿Qué es un enlace peptídico? | Enlace covalente entre grupos amino y carboxilo de aminoácidos en la cadena. |
| ¿Por qué AUG es importante? | Codifica Metionina y es el inicio habitual usado aquí; fija el marco de lectura. |
| ¿Qué ocurre en STOP? | Un factor de liberación favorece la liberación del polipéptido; no se añade un aminoácido STOP. |
| ¿Qué es una mutación silenciosa? | Sustitución que conserva el aminoácido del codón; no implica ausencia de cualquier efecto biológico posible. |
| ¿Qué es missense? | Cambia el aminoácido, como AAA/Lys→CAA/Gln. |
| ¿Qué es nonsense? | Convierte un codón de aminoácido en STOP prematuro. |
| ¿Todas provocan enfermedades? | No. Depende de posición, consecuencia molecular y contexto. |
| ¿Cómo puede UV dañar ADN? | Puede inducir lesiones entre bases vecinas y otros daños; si no se reparan correctamente pueden originarse mutaciones. |
| ¿Por qué una solución híbrida? | Combina cálculo verificable y exploración digital con manipulación grupal sin pantalla, dentro del presupuesto propuesto. |

## Fuentes

Referencias ordenadas alfabéticamente por autor o institución:

- Alberts, B. y colaboradores. [From RNA to Protein](https://www.ncbi.nlm.nih.gov/books/NBK26829/), *Molecular Biology of the Cell*, 4.ª edición.
- National Cancer Institute. [Tobacco](https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco).
- National Center for Biotechnology Information. [The Genetic Codes, tabla 1](https://www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi).
- National Human Genome Research Institute. [Ribonucleic Acid Fact Sheet](https://www.genome.gov/about-genomics/educational-resources/fact-sheets/ribonucleic-acid-fact-sheet).
- Organización Mundial de la Salud. [Ultraviolet radiation](https://www.who.int/news-room/fact-sheets/detail/ultraviolet-radiation).

## Anexos y diario de proyecto

La [guía de sesiones](sesiones-47-54.html) contiene espacios F01–F08 para fotografías rotuladas de medición, ensamblaje, acoples, cadenas y ajustes. Registrar fecha real, qué verifica cada fotografía, archivo y autorización cuando aparezcan personas. El [cuaderno de campo](cuaderno-campo.html) tiene 21 filas para tres semanas, con apreciaciones semanales, fallas y cambios. Las capturas del programa no son fotografías de construcción ni evidencia de aprendizaje.

## Conclusiones

El modelo computacional permite reproducir la transcripción, traducción y comparación de sustituciones bajo reglas explícitas. El ejemplo normal produce Met–Lys–Ala–Phe y A→C en base 4 produce Met–Gln–Ala–Phe. Para concluir sobre eficacia educativa faltan construcción, observaciones y mediciones reales. Completen esta sección con resultados y limitaciones del trabajo de tres semanas.

## Resumen final

BioCode aborda la dificultad de visualizar cómo la información del ADN se transcribe y traduce, y cómo una sustitución puntual modifica el producto. Su objetivo es representar estas relaciones con precisión y apoyar decisiones preventivas informadas.

La metodología comprende revisión científica, comparación de alternativas, diseño, programación, pruebas controladas y planificación de validación escolar. La solución híbrida integra una aplicación estática con código genético estándar, ribosoma paso a paso, mutaciones y desafíos, y una maqueta de cartón con tiras deslizantes y tarjetas intercambiables.

La versión de partida dispone de 26 pruebas científicas y 64 comprobaciones de interfaz y comportamiento aprobadas; las regresiones de esta revisión se documentan en el informe de pruebas actualizado. El ejemplo normal produce Met–Lys–Ala–Phe; sustituir A por C en la base 4 produce Met–Gln–Ala–Phe, cambio de sentido.

Permanecen pendientes la construcción física, costos ejecutados, fotografías, ensayos con compañeros y mediciones educativas. Sus registros se dejan vacíos para completarlos con evidencia auténtica.

La conclusión técnica es que una sola base puede modificar un aminoácido, sin que toda mutación implique enfermedad. La eficacia didáctica y la viabilidad material deberán confirmarse con los ensayos previstos antes de formular conclusiones sobre el impacto escolar.
