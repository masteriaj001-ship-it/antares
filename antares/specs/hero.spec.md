# SPEC: Hero Section ANTARES (Manifiesto Operativo)
> Basada en el código real de: `src/styles/components/hero.css` + `index.html`
> Versión: 3.0 — Mayo 2026 (Manifiesto Operativo y Táctico Refactorizado)

## Identidad del componente
Sección de declaración de tesis e identidad operacional de ANTARES. Su objetivo principal es actuar como un filtro de posicionamiento rígido para descartar clientes de bajo presupuesto mediante alta densidad técnica y terminología industrial. Adopta una composición editorial asimétrica de alto impacto con al menos un 40% de espacio negativo, una silueta robótica de alta definición con fondo transparente, un bloque de telemetría inmutable y navegación cinemática fluida.

---

## Comportamiento esperado (Happy Path)

### HP-01: Carga inicial — estructura general
```gherkin
DADO QUE el usuario visita la página de inicio
CUANDO la página termina de cargar y el JS remueve la clase "js-loading"
ENTONCES la sección hero se muestra fija con una altura mínima de 88vh
Y se renderiza una textura HUD de líneas de escaneo (.hud-scanline) con opacidad 0.3
Y la composición aplica un reveal cinemático mediante transiciones de opacidad y escala
```

### HP-02: Columna izquierda — manifiesto y telemetría
```gherkin
DADO QUE el hero está visible en pantalla
CUANDO el usuario analiza la columna izquierda
ENTONCES el antetítulo muestra "[ DEPARTAMENTO DE INGENIERÍA E INFRAESTRUCTURA ]" en formato monospace oro titanio
Y el titular principal (H1) es "SISTEMAS CRÍTICOS, AUTOMATIZACIÓN DE PROCESOS Y CONSULTORÍA DE ALTA GAMA." en Syncopate
Y el subtítulo describe de forma rígida la tesis de no deuda técnica y contratos funcionales
Y se muestra de forma inmutable el bloque de telemetría de stack, rendimiento y estado operacional activo 🟢
Y los dos botones principales ([ EVALUAR INFRAESTRUCTURA ] y [ VER BITÁCORA ]) se muestran alineados horizontalmente
```

### HP-03: Columna derecha — visor y silueta táctica (Desktop ≥ 768px)
```gherkin
DADO QUE el viewport es ≥ 768px
CUANDO el hero carga
ENTONCES la columna derecha renderiza la silueta translúcida "hero-ai.webp"
Y la imagen pesa exactamente 77KB y tiene un canal alfa transparente
Y el visor táctico aplica un drop-shadow difuso con el tono Brushed Titanium Gold
Y el fondo visual se integra perfectamente sobre el degradado oscuro de fondo
```

### HP-04: Navegación cinemática fluida (GSAP/Lenis)
```gherkin
DADO QUE el usuario interactúa con los botones del hero
CUANDO hace clic en "[ EVALUAR INFRAESTRUCTURA ]"
ENTONCES la pantalla se desplaza de forma cinemática y fluida hacia la sección de contratación (#pricing)
CUANDO hace clic en "[ VER BITÁCORA ]"
ENTONCES se desplaza con la misma inercia hacia la sección del portafolio de casos técnicos (#portafolio)
```

---

## Reglas de negocio

### RB-01: Copy oficial aprobado
- **Antetítulo:** `[ DEPARTAMENTO DE INGENIERÍA E INFRAESTRUCTURA ]` (mono/Syncopate, oro titanio `#C5A880`).
- **Titular Principal (H1):** `SISTEMAS CRÍTICOS, AUTOMATIZACIÓN DE PROCESOS Y CONSULTORÍA DE ALTA GAMA.` (Syncopate, uppercase).
- **Subtítulo:** `"Diseñamos, auditamos y desplegamos ecosistemas digitales gobernados por contratos funcionales y optimizados para el rendimiento en producción. Sin improvisación. Sin deuda técnica acumulada."`
- **Bloque de Telemetría:**
  ```text
  [ CORE_STACK: VANILLA_JS + VITE + DOCKER + APIS ]
  [ TARGET_PERFORMANCE: LCP < 1.2s / ZERO_JANK ]
  [ PROTOCOLS_DEPLOYED: ACTIVE 🟢 ]
  ```
- **CTA Primario:** `[ EVALUAR INFRAESTRUCTURA ]` (link a `#pricing`).
- **CTA Secundario:** `[ VER BITÁCORA ]` (link a `#portafolio`).

### RB-02: Restricciones de Maquetación y Espacio Negativo
- Se exige un layout asimétrico de dos columnas en desktop con al menos un 40% de espacio negativo.
- La silueta no debe contener cuadros ni fondos negros que rompan el degradado de base.
- Los botones principales son brutalistas sin bordes redondeados y adoptan la acentuación de Brushed Titanium Gold.
