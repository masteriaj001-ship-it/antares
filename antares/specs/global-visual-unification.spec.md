# SPEC: Unificación Visual Global Premium

## 1. Contexto
Alineación estética de toda la plataforma web bajo el concepto "Editorial Tech Premium / Glassmorphism + Indigo". El rediseño unifica fondos, cards, botones, tipografía y comportamientos interactivos para que todo el sitio (Hero, Features, Testimonials, Pricing, FAQ y Footer) mantenga una coherencia visual absoluta.

## 2. Decisiones Arquitectónicas (CSS)
- **Variables Globales:** Fondo `body` mapeado a `--bg-primary` (`#0A0A0F`). Tipografía de encabezados (`h1`-`h6`) globalmente en UPPERCASE usando Syncopate.
- **Títulos y Subtítulos de Sección Unificados:** Todos los encabezados de sección (`.section h2`) comparten el escalado `clamp(2rem, 4vw, 3.5rem)`, Syncopate, UPPERCASE y `text-wrap: balance`. Los subtítulos (`.section > .container > p`) usan Inter, `1.1rem` y `max-width: 600px` para una lectura fluida.
- **Rendimiento de Espaciados Globales:** Todas las secciones (`.section`) heredan de forma estricta un `padding: var(--space-10) 0;` (128px en desktop, 64px en móvil), eliminando los overrides manuales y estableciendo un ritmo vertical regular en toda la web.
- **Glassmorphism Centralizado:** Se rediseñó `cards.css` como utilidad base global `.card` que inyecta bordes sutiles de cristal y sombras interactivas índigo (Glow hover).
- **Botones Estándar:** Todos los botones primarios utilizan `--accent-indigo` con efecto glow; los secundarios usan bordes transparentes.

## 3. Especificaciones de Componentes

### 3.1 Hero
- Gradiente radial a 70% 50% con 6% de opacidad para no competir con el contenido.
- **Imagen Cinematográfica Realista:** La sección visual del Hero muestra el archivo `hero-ai.png` con efectos del HUD superpuestos, opacidad de `0.85`, contraste `1.1` y brillo `0.9` para una total fusión con el fondo tecnológico.

### 3.2 Features
- **Fondo:** Gradiente radial a 50% 30% con 8% opacidad.
- **Iconos:** Unicode Geométricos estrictos: `⬡` (Protocol), `◇` (Autonomous), `◈` (Adaptive). Color `--accent-indigo`.
- **Cards:** Adoptan `.card` glassmorphism global con transición en Hover (elevación `translateY(-4px)` y Shadow).

### 3.3 Testimonials
- **Fondo:** Gradiente radial a 30% 70% con 6% opacidad.
- **Avatares:** Círculos con color de fondo `--accent-indigo-light`, y texto tipográfico `--accent-indigo` con iniciales (JG, MG, CR).
- **Badge Activo:** Implementado con tipografía JetBrains Mono, color verde `#10B981` y el dot circular de Unicode `●`.

### 3.4 Footer
- **Fondo:** Sólido `--bg-primary` sin gradientes. Borde superior ultra sutil.
- **Logotipo:** Syncopate, UPPERCASE, letter-spacing generoso.
- **Badge Operativo:** Cápsula con dot pulsante (`animation: pulse-green`) y tipografía monospace técnica "SYSTEM READY".

## 4. Fixes de Estabilidad (Regression Recovery)
- Restauración de la transición `opacity` en `faq.css` (`.faq-answer`) para garantizar despliegues suaves.
- Restauración de `.faq-question:focus-visible` para accesibilidad de teclado (estándar ARIA).
