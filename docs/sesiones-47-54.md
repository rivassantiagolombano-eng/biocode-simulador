# Guía respondida · Sesiones 47–54

Se conservan las preguntas y consignas proporcionadas por el equipo en su orden original. Se distinguen diseño propuesto, resultados técnicos y evidencia real pendiente.

## SESIÓN 47: Identificación del problema abstracto de genética molecular y selección de la solución tecnológica.

**Propósito de la sesión:** Delimitar la dificultad de comprender la síntesis de proteínas y los efectos mutagénicos a escala celular en la I.E. N.° 1146, definiendo los requerimientos técnicos y pedagógicos de un simulador tridimensional interactivo.

### PASO 1: CARÁTULA

**Título del proyecto enfocado en la biología molecular y bioingeniería simulada.**

BioCode: Simulador Interactivo de Síntesis Proteica y Mutaciones. Solución híbrida de biología molecular y bioingeniería simulada: web y modelo tridimensional manipulable. No se fabrican biomoléculas reales.

**Datos informativos completos del equipo y la I.E.**

- Integrantes: Santiago Rivas y Joseph Valderrama.
- Institución: I.E. N.° 1146 “República del Paraguay”.
- Grado: 5.º de secundaria. Área: Ciencia y Tecnología.
- Sección: __________. Docente: __________.
- Fecha de presentación: __________. Año lectivo: __________.
- Los datos no proporcionados se completan por el equipo.

### PASO 2: INTRODUCCIÓN (Contexto e importancia)

**1. ¿De qué manera hábitos no saludables o radiación UV pueden interferir en la síntesis de enzimas y tejidos?**

Exposiciones como humo de tabaco o radiación UV pueden dañar ADN. Si un cambio persiste en un gen o su regulación, puede alterar cantidad o secuencia de proteínas, incluidas enzimas, y afectar funciones celulares y mantenimiento de tejidos. El daño también puede repararse; no toda exposición causa una mutación perjudicial. La nutrición insuficiente puede limitar nutrientes necesarios para síntesis y reparación sin equivaler a mutación. BioCode ilustra una sustitución, no predice efectos clínicos ni modela tejidos.

**2. ¿Por qué es crucial comprender el código genético para prevenir patologías moleculares y promover la fotoprotección?**

Permite explicar por qué un cambio puede modificar una proteína y fundamentar decisiones preventivas. Conocer el código por sí mismo no evita enfermedades; no todas las patologías moleculares son prevenibles. Sombra, ropa, sombrero y protección solar adecuada reducen exposición UV, sin garantizar ausencia de daño. La [cartilla](cartilla-salud.html) conecta conocimiento y decisiones.

**3. ¿Qué mitos existen sobre las mutaciones genéticas o la alimentación en la regeneración física?**

Ejemplos para discutir: “toda mutación causa enfermedad”, “una exposición al sol siempre produce una mutación perjudicial”, “un alimento milagroso repara cualquier mutación” y “comer más proteínas regenera cualquier tejido”. Son afirmaciones incorrectas: los efectos dependen del contexto; una alimentación equilibrada aporta nutrientes, pero no borra selectivamente mutaciones ni asegura regeneración ilimitada. No se afirma haber encuestado al aula sobre estos mitos.

**Delimitación:** necesidad de recursos manipulables para visualizar transcripción, traducción y sustituciones en 5.º de la I.E.; la frecuencia de la dificultad se diagnosticará. Requerimos secuencias intercambiables, orientaciones, código estándar, STOP correcto, A/P/E, entradas validadas y acceso móvil/PC. La maqueta aporta tridimensionalidad; la web representa el proceso esquemáticamente.

## SESIÓN 48: Sustentamos el proceso de transcripción del ADN a ARN mensajero dentro del núcleo celular.

**Propósito de la sesión:** Sustentar cómo la información contenida en el ADN nuclear se transcribe en ARN mensajero mediante la acción enzimática de la ARN polimerasa para establecer la lógica de codificación del simulador.

### PASO 3: INTRODUCCIÓN

**1. Desoxirribosa vs. Ribosa, Timina vs. Uracilo.**

| Aspecto | ADN | ARN |
|---|---|---|
| Azúcar | Desoxirribosa: H en carbono 2′ | Ribosa: OH en carbono 2′ |
| Bases | A, T, C, G | A, U, C, G |
| Base distintiva | Timina | Uracilo |
| Organización habitual | Doble cadena | Una cadena con plegamientos locales |
| Función | Conserva información genética | ARNm lleva información, ARNt transporta aminoácidos, ARNr integra el ribosoma |

Timina y uracilo se aparean con adenina. El ARN no es ADN incompleto.

**2. ¿Cómo actúa la ARN polimerasa leyendo la hebra molde (3' a 5') y formando el ARNm maduro que sale del núcleo?**

Lee molde 3′→5′ y sintetiza ARN complementario 5′→3′. En eucariotas produce pre-ARNm, cuya maduración incluye caperuza 5′, splicing que elimina intrones y une exones y, generalmente, cola poli-A. Intervienen otras maquinarias; no hace por sí sola todo el procesamiento. El ARNm procesado puede exportarse por poros nucleares. BioCode representa una región procesada sin intrones.

- ADN codificante: 5′-ATG AAA GCT TTT TAA-3′; sustituir T→U.
- ADN molde: 3′-TAC TTT CGA AAA ATT-5′; A→U, T→A, C→G, G→C.
- ARNm: 5′-AUG AAA GCU UUU UAA-3′.

### PASO 4: DETERMINACIÓN DE LA ALTERNATIVA DE SOLUCIÓN TECNOLÓGICA

**1. ¿Por qué los gráficos estáticos del libro no permiten visualizar los errores de lectura del código genético?**

Los gráficos sí pueden representar errores, pero no permiten modificar y ejecutar una secuencia ni manipular el proceso. BioCode complementa esa limitación. Una mutación es un cambio de secuencia, distinto de un error transitorio de lectura del ribosoma: aquí se simula la traducción correcta de secuencias normales o mutadas.

**2. ¿Construirán un Simulador interactivo mecánico-magnético de codón-anticodón y enlace peptídico o un Modelo de electro-ribosoma con detección de mutaciones por código de colores?**

Elegimos la alternativa mecánica de codón–anticodón y enlace peptídico, complementada con la web. Cartón, velcro de soporte y llaves geométricas permiten trabajar sin comprar imanes o electrónica. No construiremos un electro-ribosoma en esta versión. Letras y formas complementan colores; la web calcula los resultados. La selección reduce complejidad y costo.

**3. Expliquen la viabilidad pedagógica y la capacidad del modelo para simular secuencias de nucleótidos de forma intercambiable.**

Las tiras y tarjetas desmontables permiten reemplazar AAA por CAA sin reconstruir el ribosoma. La web admite hasta 600 bases y verifica codones, anticodones y sustituciones. La maqueta facilita exposición grupal sin pantalla. Presupuesto objetivo S/10–20 según recursos disponibles; viabilidad real y aprendizaje se medirán. La comparación entre maqueta estática, electrónica, software e híbrida está en el [informe](proyecto.html).

## SESIÓN 49: Explicación de la traducción en los ribosomas y el impacto de mutaciones.

**Propósito de la sesión:** Argumentar la relación entre el código genético (codones del ARNm), la transferencia de aminoácidos por el ARNt y el ensamblaje de la cadena polipeptídica en el ribosoma para simular los efectos de mutaciones puntuales.

### PASO 5: MEMORIA DE CÁLCULO BIOMOLECULAR

**1. ¿Cómo interaccionan el sitio A, P y E del ribosoma durante la elongación?**

Nuevo ARNt entra en A; P sostiene la cadena antes del enlace peptídico. La cadena se transfiere al ARNt de A. Translocación mueve A→P y P→E; el descargado sale por E. El iniciador entra directamente en P. La disposición visual es E | P | A. STOP requiere factor de liberación, no ARNt.

**2. Determinen la secuencia de aminoácidos para una hebra patrón dada.**

Patrón ARNm: 5′-AUG AAA GCU UUU UAA-3′.

| Codón 5′→3′ | Anticodón ideal 3′→5′ | Producto |
|---|---|---|
| AUG | UAC | Metionina / Met |
| AAA | UUU | Lisina / Lys |
| GCU | CGA | Alanina / Ala |
| UUU | AAA | Fenilalanina / Phe |
| UAA | No corresponde | STOP: liberación |

Cadena prevista y verificada técnicamente: **Met–Lys–Ala–Phe**. STOP no integra la cadena; es un ejemplo didáctico, no una proteína humana identificada.

**3. ¿Qué ocurre si la base 4 cambia de Adenina a Citosina? (Mutación de cambio de sentido o silenciosa).**

Contando desde 1, AUG **AAA** GCU UUU UAA → AUG **CAA** GCU UUU UAA. AAA/Lisina pasa a CAA/Glutamina; anticodón UUU cambia a GUU, ambos 3′→5′. Cadena **Met–Gln–Ala–Phe**: **cambio de sentido (missense)**, no silenciosa. Se conserva el resto de bases y el marco para comparar.

## SESIÓN 50: Diseño esquemático y planificación del simulador de síntesis proteica.

**Propósito de la sesión:** Diseñar el prototipo interactivo a escala mediante planos estructurales y mecanismos de acople, determinando materiales reciclables, componentes electrónicos básicos, presupuesto, cronograma y medidas de bioseguridad.

### PASO 6: DISEÑO DE LA SOLUCIÓN TECNOLÓGICA

**1. Diseñen la estructura del ribosoma (subunidad mayor y menor), las tarjetas de ARNt con sus anticodones y las cadenas de ARNm deslizantes.**

El [plano](plano-prototipo.html) muestra base 50 × 30 cm y ribosoma 25 × 15 cm (mayor 25 × 8, canal 25 × 5, menor 25 × 2). Tira 49 × 4 cm: cinco casillas de 7 cm más dos lengüetas de 7 cm. Centros E/P/A separados 7 cm; tarjetas 5 × 8 cm sobresalen arriba; aminoácidos Ø 3 cm. Añadir pestaña articulada de acople 7 × 2 cm según guía. Canal frontal 4.5–5 cm; holgura en espesor 2–3 mm ajustable. No es escala molecular. Componentes electrónicos no aplican al mecanismo seleccionado; dispositivo para web se considera disponible.

**2. ¿Qué materiales de bajo impacto ambiental utilizarán en su diseño?**

Cartón limpio reutilizado, cartulina y recortes; EVA opcional sustituible por cartón, velcro, hilo y pegamento frío. Trazar a mano si no hay impresora, reutilizar piezas y separar residuos. Llaves de acople de cartón sobrante.

**3. ¿Qué instrumentos o herramientas de medición utilizarán?**

Regla de 30–50 cm, escuadra, lápiz y regla milimetrada para canal y llaves. Tijeras escolares; cúter únicamente por adulto sobre base de corte. Verificar regla impresa de 7 cm al 100 %.

**4. Elabora una matriz de costos, asignación de tareas por semanas y medidas preventivas durante la elaboración.**

| Material | Cantidad prevista | Estimación S/ | Gasto real/comprobante |
|---|---|---|---|
| Cartón | Base, piezas y llaves | 0 reutilizado | Por completar |
| Cartulina | 2 pliegos | 3 | Por completar |
| EVA opcional | Recortes | 2 | Por completar |
| Velcro | Tramo corto | 3 | Por completar |
| Pegamento frío | Envase | 3 | Por completar |
| Hilo | Tramo | 1 | Por completar |
| Impresiones de piezas | 3–4 hojas | 2 | Por completar |
| Herramientas compartidas | Disponibles | 0 previsto | Por completar si se compra |
| **Total** | | **14 estimado** | **Por registrar** |

No son cotizaciones. Imprimir todos los documentos y cartillas tiene costo adicional por cotizar; pueden leerse digitalmente. No se incluye equipo ni mano de obra.

| Semana | Tareas | Responsables propuestos | Prevención |
|---|---|---|---|
| 1 | Investigación, diagnóstico, plano y revisión web | Santiago: secuencias; Joseph: plano; ambos revisan | Fuentes verificables, no datos sensibles |
| 2 | Corte, riel, llaves, ensamblaje y pruebas | Joseph: montaje; Santiago: cotejo; alternar roles | Adulto para cúter, adhesivo frío, bordes protegidos |
| 3 | Validación, ajustes, fotos, costos, QR y exposición | Ambos: operador/observador y defensa | Consentimiento para fotos, sin ensayos UV/químicos |

No se usan muestras biológicas. Ventilar, recoger recortes y mantener piezas pequeñas lejos de niños. Usar el [cuaderno](cuaderno-campo.html).

## SESIÓN 51: Fabricación y ensamblaje del simulador molecular.

**Propósito de la sesión:** Construir e implementar el modelo interactivo de traducción ribosómica acoplando sus piezas mecánicas o magnéticas según el diseño, verificando el encaje de bases nitrogenadas y aplicando normas de seguridad.

### PASO 7: IMPLEMENTACIÓN DE LA SOLUCIÓN TECNOLÓGICA

**1. Detallen la elaboración de los tripletes de nucleótidos y el riel de deslizamiento del ribosoma.**

Medir/reforzar base, cortar subunidades y preparar canal y separadores. Escribir AUG, AAA/CAA, GCU, UUU, UAA en casillas 7 × 4 cm con orientación. Unir por detrás sin abultar. Colocar llaves dentro de la superficie de la tira, comprobar paso por riel y alinear cada avance 7 cm. Con ribosoma fijo, deslizar tira a izquierda; lectura avanza hacia 3′. Montar tarjetas, aminoácidos y factor. Ver [procedimiento completo](modelo-fisico.html).

**2. Tomen fotografías de los estudiantes armando el simulador.**

**Pendiente de ejecución por Santiago y Joseph.** Preparar fotos F01–F06: medición/corte; riel; llaves; ensamblaje; cadena normal; cadena mutada. Rotular fecha real, actividad, responsables, qué verifica y autorización cuando aparezcan personas. Añadir antes/después de ajustes si ocurren. No se entregan fotografías ficticias.

**3. Realicen ajustes en los encajes magnéticos o mecánicos para asegurar que solo los anticodones complementarios puedan unirse al codón correspondiente.**

El velcro solo sostiene. Proponemos tres llaves geométricas: codón A = triángulo, U = círculo, C = cuadrado, G = trapecio. Anticodón U tiene hueco triangular, A circular, G cuadrado, C trapezoidal. Marca lateral asimétrica impide invertir la tarjeta. La pestaña se baja sobre el codón y se levanta antes de deslizar. Probar cinco tarjetas con cinco codones distintos, sin forzar: 25 combinaciones con 5 acoples y 20 rechazos **previstos**. Registrar falsos acoples y rechazos, ajustar tolerancias y repetir. No afirmar selectividad sin validar físicamente.

## SESIÓN 52: Pruebas de simulación genómica, fidelidad de copia y validación.

**Propósito de la sesión:** Validar la precisión del simulador sometiéndolo a ensayos repetitivos de traducción de secuencias normales y mutadas, verificando la correcta síntesis de la cadena peptídica y ejecutando ajustes de calibración.

### PASO 8: VALIDACIÓN

**Apliquen distintas cadenas sintéticas de ARNm en el simulador y elaboren una tabla de doble entrada para registrar sus simulaciones.**

Registrar fecha, responsables, versión y soporte. Predecir antes de ejecutar; repetir al menos tres recorridos de cada tira física. Mantener orientación y reglas, cambiar una base por vez. La [tabla editable](validacion-real.html) admite más cadenas, problemas, ajustes y repeticiones. No copiar resultados automáticos a observaciones escolares.

| Entrada ARNm 5′→3′ | Predicción | Resultado observado por el equipo | Correcto/incorrecto |
|---|---|---|---|
| AUG AAA GCU UUU UAA | Met–Lys–Ala–Phe; normal | | |
| AUG CAA GCU UUU UAA | Met–Gln–Ala–Phe; missense | | |
| AUG AAG GCU UUU UAA | Met–Lys–Ala–Phe; silenciosa | | |
| AUG UAA GCU UUU UAA | Met; nonsense | | |

**Propuestas de mejora: ¿Qué modificaciones hicieron en el riel o código de colores para mejorar la visualización didáctica?**

No se han comunicado modificaciones físicas realizadas. En el **diseño** se amplió el canal previsto de 4 a 4.5–5 cm y se añadió el acople geométrico; su efecto requiere prueba real. La web conserva letras, colores y orientaciones; los ajustes técnicos de alineación y desborde constan en [pruebas](pruebas.html). Completar tras ejecutar: “Observamos ___; cambiamos ___; repetimos ___ veces; obtuvimos ___; evidencia ___”. No presentar menor atasco como resultado sin medirlo.

## SESIÓN 53: Sustentación del modelo biomolecular y síntesis proteica (Parte 1).

**Propósito de la sesión:** Exponer el prototipo tecnológico y la cartilla científica de toma de decisiones, demostrando en vivo su funcionamiento técnico, fundamentando la biomolécula sintética producida y respondiendo las preguntas del aula.

Santiago explica problema y transcripción; Joseph muestra A/P/E y ambos comparan normal/mutada en maqueta y web. Presentan cartilla y decisión preventiva. Identifican el polipéptido **representado**, no una biomolécula fabricada físicamente. Mostrar evidencias con límites. El [informe](proyecto.html) contiene guion de seis minutos y preguntas de defensa.

Registro posterior: fecha ___; pregunta del aula ___; respuesta ___; fuente consultada ___; mejora sugerida ___. Completar con datos reales.

## SESIÓN 54: Exposición, evaluación del impacto educativo y coevaluación (Parte 2).

**Propósito de la sesión:** Exponer el prototipo tecnológico y la cartilla científica de toma de decisiones, sustentando el valor de la ingeniería en la salud celular y evaluando el impacto preventivo del proyecto en la comunidad educativa.

### PASO 9: EVALUACIÓN

**1. ¿De qué manera el simulador facilitará la comprensión del origen molecular de enfermedades mutagénicas y la importancia del cuidado corporal frente a la radiación solar?**

Conecta base, codón y cadena, permitiendo discutir que ciertas mutaciones pueden contribuir a enfermedad según el contexto. La expresión de la guía “enfermedades mutagénicas” se interpreta como enfermedades asociadas a cambios o daño genético, no como enfermedades que sean por sí mismas agentes mutagénicos. No todas las enfermedades tienen esa causa ni toda mutación causa enfermedad. Se espera favorecer comprensión y fotoprotección, sin afirmar que el proyecto reduce enfermedades.

Evaluar con cinco preguntas equivalentes antes/después, códigos anónimos, número de participantes y condiciones. Pedir una decisión preventiva razonada. Calcular aciertos/total × 100 con datos reales, sin generalizar muestra pequeña. Coevaluación: claridad ___; exactitud ___; manejo del modelo ___; evidencia ___; recomendación ___; fecha ___. Contrastar matriz AD y registros.

### PASO 10: RESUMEN FINAL

**Redacten un párrafo breve (máximo 250 palabras) que sintetice:**

- el problema de infraestructura,
- el objetivo del prototipo,
- la metodología utilizada,
- los resultados de la prueba,
- y la conclusión principal.

BioCode responde a la necesidad de recursos didácticos interactivos para visualizar la síntesis proteica en 5.º de la I.E. N.° 1146; las carencias concretas de infraestructura del aula aún deben documentarse. Su objetivo es representar transcripción, traducción y sustituciones puntuales con una web y una maqueta manipulable. La metodología combina revisión científica, comparación de alternativas, diseño dimensional, programación, pruebas técnicas y planificación de ensayos controlados. La versión de partida aprobó 26 pruebas científicas y 64 comprobaciones de interfaz y comportamiento; el informe actualizado registra las regresiones de esta revisión. El patrón produce Met–Lys–Ala–Phe; sustituir A→C en base 4 produce Met–Gln–Ala–Phe, cambio de sentido. Siguen pendientes construcción, gastos reales, fotografías, pruebas físicas y mediciones escolares, sin sustituirlas por resultados automáticos. La conclusión técnica es que una base puede cambiar la cadena, sin que toda mutación implique enfermedad. El valor educativo y la viabilidad material deben confirmarse con observaciones reales; la cartilla fundamenta decisiones preventivas razonables frente a UV y otros agentes.

## Referencias bibliográficas ordenadas alfabéticamente

- Alberts, B. y colaboradores. *Molecular Biology of the Cell*, 4.ª edición. “From RNA to Protein”. [NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/NBK26829/).
- National Cancer Institute. *Tobacco*. [NCI](https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco).
- National Center for Biotechnology Information. *The Genetic Codes*, tabla 1. [NCBI](https://www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi).
- National Human Genome Research Institute. *Ribonucleic Acid (RNA) Fact Sheet*. [NHGRI](https://www.genome.gov/about-genomics/educational-resources/fact-sheets/ribonucleic-acid-fact-sheet).
- Organización Mundial de la Salud. *Ultraviolet radiation*. [OMS](https://www.who.int/news-room/fact-sheets/detail/ultraviolet-radiation).

## Anexos con fotografías rotuladas de las pruebas de validación

Espacios preparados sin imágenes generadas ni resultados atribuidos al equipo.

| Código | Fotografía real por insertar | Fecha real | Qué verifica | Archivo/autorización |
|---|---|---|---|---|
| F01 | Medición y corte | | Medidas y seguridad | |
| F02 | Riel y holgura | | Paso de tira | |
| F03 | Acoples correctos/incorrectos | | Complementariedad | |
| F04 | Estudiantes ensamblando | | Fabricación real | |
| F05 | Traducción normal | | Cadena y liberación | |
| F06 | Traducción mutada | | Lys→Gln y base 4 | |
| F07 | Antes/después, si hay ajuste | | Falla y repetición | |
| F08 | QR público, cuando exista | | Dos teléfonos | |

## Cuaderno de Campo (Diario de proyecto)

El [cuaderno de tres semanas](cuaderno-campo.html) tiene 21 filas con fecha, sesión, actividad, responsable, observación, falla, cambio, resultado y evidencia/foto. Incluye apreciaciones semanales y siguiente decisión. Se completa durante el trabajo, no antes.
