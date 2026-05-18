# PROJECT STATE | ANTARES Platform v2.0-Alpha

Este documento registra el estado de compilación, los hitos alcanzados y las prioridades de desarrollo del proyecto ANTARES.

---

## 🎯 Hitos Alcanzados (v1.6 - Core Landing Completo)

- [x] **Estructura Global Sidebar Offset:** Layout unificado con margen izquierdo responsivo (`margin-left: var(--sidebar-width-desktop)`) evitando desbordamientos horizontales.
- [x] **Hero Section Refactorizada:** Integrada la etiqueta semántica de imagen `hero-ai.png` con efectos cinemáticos de opacidad, contraste y HUD superpuesto.
- [x] **FAQ Accordion Premium:** Alineación dual-axis simétrica (verticalmente centrado, horizontalmente a la izquierda), sin overrides y con soporte de accesibilidad (ARIA) y fallback sin JavaScript.
- [x] **Unificación Visual Global:** Glassmorphism (`.card`) y acento índigo configurados centralmente en toda la landing page (Features, Testimonials, Pricing).
- [x] **Footer Premium de 4 Columnas:** Rejilla totalmente responsiva, dot verde pulsante `SYSTEM READY` y enlaces de navegación y legales estandarizados.
- [x] **Estructura del Ecosistema de Navegación:** Reordenamiento UX completo (Hero ➔ Features ➔ Testimonials ➔ Pricing ➔ FAQ) eliminando enlaces rotos y enlazando los IDs del navbar real (`#sistemas`, `#operaciones`, `#inteligencia`, `#contacto`).

---

## 🧭 Fase 2: Expansión Multi-Página (Hitos Priorizados)

Con el fin de evitar el *agent drift* y cimentar la arquitectura de datos, el equipo de planificación (CEO y Cliente) establece la siguiente prioridad estricta para la Fase 2:

```
[P1: Operational Console (Dashboard)] ➔ [P2: Core Protocols (Docs)] ➔ [P3: Initiate Operations (Wizard Form)]
```

### 1. P1: Operational Console (`console.html`)
*   **Estado:** En fase de Diseño y Especificación Técnica (`/antares/specs/console.spec.md`).
*   **Objetivo:** Crear un centro de control táctico/militar ultra-premium que simule logs en tiempo real, latencias, y reconfiguraciones de redes de agentes con animaciones GPU optimizadas.
*   **Contrato de Diseño:** Estética "Densa pero Simple". No saturar; cada elemento debe denotar ingeniería pesada e intencional.

### 2. P2: Core Protocols (`protocols.html`)
*   **Estado:** Planificado (Fase de Contratos de Datos).
*   **Objetivo:** Portal de documentación con diseño puramente editorial, bloques de código interactivos y diagramas interactivos explicativos de flujos de agentes.

### 3. P3: Initiate Operations (`operations.html`)
*   **Estado:** Planificado.
*   **Objetivo:** Formulario segmentado por pasos (step wizard) premium para captar requerimientos técnicos del cliente y realizar un onboarding interactivo.

---

## 📐 Reglas de Motion & Rendimiento (Fase 2)

-   **GPU Standard:** Las animaciones interactivas del dashboard están restringidas únicamente a propiedades aceleradas por hardware (`transform`, `opacity`).
-   **No Overshoot:** Sin efectos de rebote elásticos (no elásticos tipo muelle). Curvas de aceleración cinemáticas puras (`cubic-bezier(0.16, 1, 0.3, 1)`).
-   **Zero Layout Shift:** Prohibido animar propiedades que gatillen procesos de Reflow/Layout en el navegador (`width`, `height`, `margin`, `padding`, `top`, `left`).