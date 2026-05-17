# SPEC: Hero Section ANTARES
> Basada en el código real de: `src/styles/components/hero.css` + `index.html` + `script.js`
> Versión: 1.0 — Mayo 2026

## Identidad del componente
Sección de declaración de identidad de ANTARES. En los primeros 5 segundos, el visitante debe entender que esto es un estudio de software e IA de carácter táctico y operacional, no una startup genérica. La atmósfera es cinematográfica, editorial, y asimétrica. La columna izquierda concentra el contenido de texto; la columna derecha alberga el visor táctico con imagen e HUD. El espacio negativo y el movimiento contenido son protagonistas.

---

## Comportamiento esperado (Happy Path)

### HP-01: Carga inicial — estructura general
```gherkin
DADO QUE el usuario visita la página de inicio
CUANDO la página termina de cargar y el JS inicializa
ENTONCES la sección hero ocupa min-height: 88vh
Y el fondo tiene una textura HUD de scanlines sutiles (.hud-scanline) con opacidad 0.3
Y el contenido NO es visible durante la carga (html.js-loading oculta elementos con visibility:hidden)
Y una vez que JS remueve la clase "js-loading", los elementos se animan entrando con reveal
Y si JS falla, un timeout de 2500ms libera todos los elementos automáticamente
```

### HP-02: Columna izquierda — contenido táctico
```gherkin
DADO QUE la hero section está cargada correctamente
CUANDO el usuario observa la columna izquierda
ENTONCES es visible la etiqueta táctica "CORE_SYSTEM_ONLINE" con un punto pulsante (.pulse)
Y el punto pulsa con animación de opacidad 2s cubic-bezier(0.4, 0, 0.6, 1) infinite
Y el titular principal es "SISTEMAS QUE PIENSAN" en uppercase, Syncopate, clamp(2.25rem, 4.5vw, 4.25rem)
Y la palabra "PIENSAN" tiene color var(--color-text-muted) para crear contraste bicolor
Y debajo está el párrafo descriptivo en Inter 1rem, line-height 1.6, color var(--color-text-muted)
Y debajo están dos botones: primario "INICIAR OPERACIÓN" y secundario "REVISAR STACK"
Y al fondo hay un footer técnico con 2 métricas animadas: LATENCY y BANDWIDTH
```

### HP-03: Columna derecha — visor táctico (Desktop / Tablet horizontal)
```gherkin
DADO QUE el viewport es ≥ 768px
CUANDO la hero section carga
ENTONCES la columna derecha es visible (.hero-visual con clase .desktop-only no aplica display:none a ≥768px)
Y el .visual-frame tiene aspect-ratio: 4/5, max-width: 430px, margin-left: auto
Y dentro del frame hay 4 crosshairs en las esquinas (brackets decorativos)
Y hay dos gradientes de overlay (bottom-up y left-right) que enmarcan la imagen
Y una línea láser de escaneo (.hud-scanner-line) se mueve verticalmente de arriba a abajo en loop 4s linear
Y la imagen de fondo es IA.jpeg aplicada via background-image en .cinematic-image-placeholder
Y la imagen tiene filter: grayscale(100%) opacity(80%)
Y hay un HUD overlay con texto "SCANNING_OBJECTIVE..." y una barra de progreso animada
```

### HP-04: Layout responsive — Mobile (< 768px)
```gherkin
DADO QUE el usuario está en un dispositivo mobile (viewport < 768px)
CUANDO ve la hero section
ENTONCES el grid cambia a 1 columna (.hero-grid grid-template-columns: 1fr)
Y el visor táctico (.hero-visual) NO es visible (display:none por .desktop-only)
Y el contenido izquierdo ocupa todo el ancho disponible
Y el margin-left de .hero-content es 0px (no el 64px de desktop)
Y el titular se escala proportionalmente vía clamp()
Y no hay scroll horizontal
```

### HP-05: Layout responsive — Tablet/Desktop (≥ 768px)
```gherkin
DADO QUE el usuario está en tablet o desktop (viewport ≥ 768px)
CUANDO ve la hero section
ENTONCES el grid tiene 2 columnas: 1fr 1.05fr
Y la columna izquierda tiene margin-left: 10%
Y la columna derecha (visual-frame) tiene margin-top: 100px para el desplazamiento asimétrico
Y el desplazamiento vertical crea una composición asimétrica intencional
Y en desktop ≥ 1024px el hero tiene padding-left: 88px para compensar el sidebar izquierdo
```

### HP-06: Animaciones de entrada (reveal system)
```gherkin
DADO QUE la página carga con JS activo
CUANDO los elementos del hero entran al viewport
ENTONCES el sistema IntersectionObserver detecta los elementos con clase .reveal
Y al ser intersectados, se añade la clase .visible que dispara la animación CSS
Y los elementos con .stagger-reveal tienen delay escalonado
Y las animaciones usan transform y opacity ÚNICAMENTE (sin layout thrashing)
Y la duración de reveal es 800-1200ms con ease-out (power4.out)
```

---

## Escenarios de error (Sad Path)

### SP-01: Fallo de carga de la imagen IA.jpeg
```gherkin
DADO QUE el .cinematic-image-placeholder usa background-image: url('../../../IA.jpeg')
CUANDO la imagen no carga (archivo faltante, error de ruta)
ENTONCES el placeholder muestra su background-color: #1a1c1c (dark solid)
Y el visor táctico sigue siendo funcional visualmente
Y el láser de escaneo y los crosshairs siguen siendo visibles
Y el HUD overlay sigue siendo legible
Y NO aparece un icono de imagen rota
```

### SP-02: Fallo de JavaScript
```gherkin
DADO QUE el JavaScript falla o se bloquea
CUANDO el timeout de failsafe llega a 2500ms
ENTONCES la clase "js-loading" es removida automáticamente del <html>
Y todos los elementos del hero (h1, meta, descripción, botones) vuelven a ser visibles
Y la página es completamente legible y usable sin animaciones
Y el anti-FOUC garantiza que nunca hay contenido permanentemente invisible
```

### SP-03: Viewport extremo (≤ 320px)
```gherkin
DADO QUE el dispositivo tiene ancho máximo de 320px
CUANDO renderiza la hero section
ENTONCES el titular no desborda horizontalmente (clamp limita el font-size)
Y el párrafo descriptivo se parte en líneas legibles
Y los botones no se superponen ni desbordan
Y no hay scroll horizontal (overflow:hidden en .main-layout)
```

---

## Reglas de negocio

### RB-01: Copy oficial aprobado
- **Etiqueta táctica:** `CORE_SYSTEM_ONLINE`
- **Titular H1:** `SISTEMAS QUE PIENSAN` (bicolor: "PIENSAN" en --color-text-muted)
- **Descripción:** `Desarrollo de software y automatización IA para equipos que operan en el futuro. Arquitectura técnica sin concesiones.`
- **CTA primario:** `INICIAR OPERACIÓN` (link a `#operacion`)
- **CTA secundario:** `REVISAR STACK` (link a `#stack`)
- **HUD text:** `SCANNING_OBJECTIVE...` (animado via JS)

### RB-02: Métricas técnicas (animadas via JS)
- **LATENCY:** animada entre valores aleatorios bajos (ej: 0.00042 MS)
- **BANDWIDTH:** animada entre valores altos (ej: 900.00 PB/S)
- Estas métricas son ficcionales/decorativas — comunican precisión técnica, no datos reales

### RB-03: Restricciones visuales absolutas
- Sin ilustraciones de robots, cerebros, circuitos (la imagen IA.jpeg es la excepción aprobada)
- Sin gradientes multicolor (los overlays son monocromáticos oscuros)
- Sin glow effects ni neones adicionales
- Sin partículas animadas flotantes
- Sin emojis ni iconografía decorativa fuera del sistema HUD
- La textura scanline (.hud-scanline) tiene opacidad máxima de 0.3

### RB-04: Tipografía del hero
- **H1:** `var(--font-heading)` = Syncopate, weight 700, letter-spacing 0.06em, color var(--color-primary)
- **Descripción:** Inter, 1rem, weight 400, color var(--color-text-muted)
- **Etiqueta táctica:** Inter monospace, 12px, weight 600, color var(--color-primary)
- **Stats técnicos:** Inter monospace, 12px, labels con opacity 0.5

### RB-05: Animaciones permitidas
- Reveal de opacidad y translateY al cargar (clase .reveal → .visible via IntersectionObserver)
- Pulsación de .tactical-meta (opacity 1 ↔ 0.5, 2s loop)
- Laser scan line: top 0% → 100% → 0%, 4s linear infinite
- Barra de progreso HUD animada por JS
- Animación de métricas LATENCY y BANDWIDTH por JS (counter random)
- **PROHIBIDO:** bounce, elastic, overshoot, parallax exagerado, mouse followers

### RB-06: Accesibilidad
- El titular es `<h1>` semántico (único H1 de la página)
- La descripción es `<p>` con relación semántica al H1
- Contraste mínimo AA para todo el texto sobre fondo oscuro
- El sistema anti-FOUC garantiza que el contenido sea accesible aunque JS falle
