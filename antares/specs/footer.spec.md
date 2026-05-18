# ESPECIFICACIÓN: Footer Premium v1.0

## Contexto
Implementación del Footer global de ANTARES. Actualmente existe un stub mínimo con logo y badge de estado. Esta spec define la versión completa con navegación de links, datos legales y señales de estado del sistema.

---

## 🎯 Objetivo Visual
Footer de estilo "Panel de Control" — minimalista, técnico, con jerarquía clara. No es decorativo, es funcional. Comunica que el sistema está online y en operación.

Referencia visual:
- Borde superior sutil (borde-glass)
- Fondo: `var(--bg-primary)` sin gradientes
- Layout: 4 columnas en desktop → 2 en tablet → 1 en mobile
- Separador bottom con copyright y estado

---

## 📐 Happy Paths

### HP-01: Layout Grid 4 columnas (desktop ≥ 1024px)
```gherkin
DADO QUE el viewport es ≥ 1024px
ENTONCES el .footer-grid tiene:
  - grid-template-columns: 2fr 1fr 1fr 1fr
  - gap: var(--space-8)
  - align-items: start

Y la columna 1 (.footer-brand) contiene:
  - Logo "ANTARES" (font-heading, 1.5rem, letter-spacing: 3px)
  - Tagline: "Arquitectura de Inteligencia Silenciosa"
  - Badge SYSTEM READY con dot pulsante verde

Y la columna 2 (.footer-col) lleva el título "PRODUCTO" con links:
  - SYSTEMS → #sistemas
  - OPERATIONS → #operaciones
  - INTELLIGENCE → #inteligencia
  - PRICING → #pricing

Y la columna 3 (.footer-col) lleva el título "EMPRESA" con links:
  - Sobre ANTARES → #
  - Protocolo → #
  - Blog → #

Y la columna 4 (.footer-col) lleva el título "SOPORTE" con links:
  - Documentación → #
  - Estado del sistema → #
  - Contacto → #contacto
```

### HP-02: Layout 2 columnas (tablet 768px – 1023px)
```gherkin
DADO QUE el viewport es ≥ 768px y < 1024px
ENTONCES el .footer-grid tiene:
  - grid-template-columns: 1fr 1fr
  - gap: var(--space-6)

Y la columna brand ocupa la fila completa (grid-column: 1 / -1)
Y las columnas de links se distribuyen en 2 x 2
```

### HP-03: Layout 1 columna (mobile < 768px)
```gherkin
DADO QUE el viewport es < 768px
ENTONCES el .footer-grid es 1 columna
Y cada sección apilada verticalmente
Y los grupos de links son collapsables (accordion nativo con <details><summary>)
```

### HP-04: Footer Bottom (barra inferior)
```gherkin
DADO QUE el footer está renderizado
ENTONCES la barra inferior (.footer-bottom) contiene:
  - Texto copyright: "© 2026 ANTARES Intelligence. Operando bajo protocolos de precisión."
  - Alineado: space-between en desktop, centrado en mobile
  - Links secundarios: "Privacidad" y "Términos" en el extremo derecho (desktop)
```

### HP-05: Hover de links
```gherkin
DADO QUE el usuario hace hover sobre un link del footer
ENTONCES el color del link pasa de var(--color-text-dim) a var(--color-text-main)
Y hay una transición de 200ms ease
Y NO hay underline, solo cambio de color
```

---

## 🛡️ Sad Paths

### SP-01: Sin JavaScript
```gherkin
DADO QUE el usuario no tiene JS habilitado
ENTONCES los accordions mobile usan <details> semántico nativos
Y todos los links siguen siendo accesibles
```

### SP-02: Viewport muy estrecho (< 360px)
```gherkin
DADO QUE el viewport es < 360px
ENTONCES el logo se escala a 1.2rem
Y ningún elemento produce overflow-x
```

---

## 📋 Reglas de Negocio (Obligatorias)

### RB-01: Copy oficial (fuente: CONTENT.md)

| Elemento | Texto |
|---|---|
| Logo | `ANTARES` |
| Tagline | `Arquitectura de Inteligencia Silenciosa` |
| Badge | `SYSTEM READY` |
| Copyright | `© 2026 ANTARES Intelligence. Operando bajo protocolos de precisión.` |

**Columna PRODUCTO:**
- `SYSTEMS` — `#sistemas`
- `OPERATIONS` — `#operaciones`
- `INTELLIGENCE` — `#inteligencia`
- `PRICING` — `#pricing`

**Columna EMPRESA:**
- `SOBRE ANTARES` — `#`
- `PROTOCOLO` — `#`
- `BLOG` — `#`

**Columna SOPORTE:**
- `DOCUMENTACIÓN` — `#`
- `ESTADO DEL SISTEMA` — `#`
- `CONTACTO` — `#contacto`

### RB-02: Tokens visuales
| Propiedad | Valor |
|---|---|
| Fondo | `var(--bg-primary)` (`#0A0A0F`) |
| Borde top | `1px solid rgba(255, 255, 255, 0.06)` |
| Borde separador bottom | `1px solid rgba(255, 255, 255, 0.04)` |
| Títulos de columna | `var(--color-text-dim)` · monospace · 11px · UPPERCASE · letter-spacing: 2px |
| Links | `var(--color-text-muted)` → hover: `var(--color-text-main)` |
| Copyright | `var(--color-text-dim)` · 12px |
| Badge dot color | `#10B981` (verde) · animación `pulse-green` ya existente |

### RB-03: Tipografía
| Elemento | Fuente | Peso | Tamaño |
|---|---|---|---|
| Logo | `var(--font-heading)` (Syncopate) | 700 | 1.5rem |
| Tagline | `var(--font-main)` (Inter) | 400 | 0.875rem |
| Títulos de columna | JetBrains Mono | 600 | 0.6875rem |
| Links | Inter | 400 | 0.875rem |
| Copyright | Inter | 400 | 0.75rem |

### RB-04: Animaciones permitidas
| Animación | Propiedad | Duración | Easing |
|---|---|---|---|
| Hover links | color | 200ms | ease |
| Badge dot | opacity | 2s | cubic-bezier(0.4, 0, 0.6, 1) |

### RB-05: Restricciones
- ❌ NO gradientes en el footer
- ❌ NO animaciones de entrada (scroll reveal) — el footer debe renderizarse inmediatamente
- ❌ NO usar `!important`
- ❌ NO emojis ni iconos externos (SVG o Unicode geométrico si se necesita)
- ✅ Mobile-first puro
- ✅ Accesibilidad: roles `contentinfo` en `<footer>`, links con texto descriptivo

### RB-06: Estructura HTML semántica
```html
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand"> ... </div>
      <div class="footer-col"> ... </div> <!-- x3 -->
    </div>
    <div class="footer-bottom">
      <p>© ...</p>
      <ul class="footer-legal-links"> ... </ul>
    </div>
  </div>
</footer>
```

### RB-07: Integración con layout global
- El footer ya está fuera del `<main class="main-layout">` → **NO le aplica el margin-left del sidebar**.
- Si existe sidebar en desktop, el footer debe ocupar `100vw` completo (comportamiento actual correcto).
- Verificar que no haya overflow-x producido por el footer en ningún breakpoint.

---

## ✅ Criterios de Aceptación

| ID | Criterio |
|---|---|
| CA-01 | Logo "ANTARES" visible en todos los breakpoints |
| CA-02 | Las 3 columnas de links se renderizan correctamente en desktop |
| CA-03 | En mobile, el contenido es 1 columna sin overflow-x |
| CA-04 | Badge SYSTEM READY pulsa en verde |
| CA-05 | Copyright legible en todos los breakpoints |
| CA-06 | Hover de links funciona correctamente |
| CA-07 | Footer NO rompe el layout del sidebar offset |
| CA-08 | Sin errores en consola relacionados con el footer |
