# ESPECIFICACIÓN: Pricing + FAQ Premium V2

## Contexto
Rediseño premium de las secciones Pricing y FAQ siguiendo el sistema ANTARES Spec-Driven Development.

---

## 📐 Happy Paths: PRICING

### HP-01: Fondo de sección
```gherkin
DADO QUE el usuario ve la sección pricing
ENTONCES el fondo es --bg-primary (#0A0A0F)
Y hay un gradiente radial sutil centrado:
  background: radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)
Y NO hay gradientes multicolor ni neones
```

### HP-02: Toggle Mensual/Anual
```gherkin
DADO QUE el usuario ve el toggle
ENTONCES hay dos botones: "MENSUAL" y "ANUAL"
Y el activo tiene:
  - fondo: --accent-indigo (#6366F1)
  - texto: blanco
Y el inactivo tiene:
  - fondo: transparent
  - texto: --color-text-muted
Y hay un badge "AHORRA 20%" junto a "ANUAL"
  - fondo: rgba(99,102,241,0.2)
  - texto: --accent-indigo
Y al hacer click, cambia el estado sin recargar página
Y los precios se actualizan con animación suave (200ms)
```

### HP-03: Cards de precios
```gherkin
DADO QUE el usuario ve las cards
ENTONCES cada card tiene:
  - fondo: rgba(255,255,255,0.03)
  - borde: 1px solid rgba(255,255,255,0.08)
  - border-radius: var(--radius-lg)
Y al hover:
  - borde: 1px solid rgba(99,102,241,0.3)
  - box-shadow: 0 4px 20px rgba(99,102,241,0.15)
  - transform: translateY(-4px)
  - transition: all 300ms ease
Y la card recomendada (ADVANCED) tiene:
  - borde siempre: 1px solid rgba(99,102,241,0.5)
  - box-shadow siempre: 0 4px 24px rgba(99,102,241,0.2)
  - badge "RECOMENDADO" arriba
```

### HP-04: Precios
```gherkin
DADO QUE el usuario ve un precio
ENTONCES el número es:
  - color: blanco puro (#ffffff)
  - font-size: 2.5rem (40px)
  - font-weight: 700
Y "/mes" o "/año" es:
  - color: --color-text-muted
  - font-size: 0.875rem
Y al togglear anual:
  - precio anterior se desvanece (opacity 0, 150ms)
  - precio nuevo aparece (opacity 1, 150ms)
```

### HP-05: Features list
```gherkin
DADO QUE el usuario ve la lista de features
ENTONCES cada item tiene:
  - icono check (✓) en color --accent-indigo
  - texto en color --color-text-muted
  - font-size: 0.875rem
Y items deshabilitados tienen:
  - icono × en color --text-dim
  - texto con opacity 0.5
  - text-decoration: line-through
```

### HP-06: Botones CTA
```gherkin
DADO QUE el usuario ve un botón de plan
ENTONCES el primario (RECOMENDADO) tiene:
  - fondo: --accent-indigo
  - texto: blanco
Y el secundario tiene:
  - fondo: transparent
  - borde: 1px solid rgba(255,255,255,0.2)
  - texto: blanco
```

---

## 📐 Happy Paths: FAQ

### HP-07: Layout 2 columnas (desktop ≥ 1024px)
```gherkin
DADO QUE el viewport es ≥ 1024px
ENTONCES el FAQ tiene grid:
  - grid-template-columns: 1fr 1.2fr
  - gap: var(--space-8)
Y la columna izquierda contiene:
  - Título "Preguntas Frecuentes"
  - Subtítulo descriptivo
  - Card CTA con mailto:contacto@antares.soft
Y la columna derecha contiene el acordeón (max-width: 600px)
```

### HP-08: Layout 1 columna (mobile/tablet < 1024px)
```gherkin
DADO QUE el viewport es < 1024px
ENTONCES el FAQ es 1 columna
Y el título está centrado
Y la card CTA está debajo del acordeón
```

### HP-09: Items del acordeón
```gherkin
DADO QUE el usuario ve un item de FAQ
ENTONCES tiene:
  - fondo: rgba(255,255,255,0.03)
  - borde: 1px solid rgba(255,255,255,0.06)
  - border-radius: var(--radius-md)
Y la pregunta (botón) tiene:
  - padding: var(--space-4) var(--space-5)
  - font: Inter, 1rem, weight 600
Y el icono flecha es:
  - color: --accent-indigo
  - transition: transform 300ms ease
Y cuando está activo (abierto):
  - borde: 1px solid rgba(99,102,241,0.3)
  - icono rota 180deg
```

### HP-10: Respuesta del acordeón
```gherkin
DADO QUE un item está abierto
ENTONCES la respuesta tiene:
  - max-height: 500px (animable)
  - transition: max-height 400ms ease
Y cuando está cerrado:
  - max-height: 0
```

---

## 🛡️ Sad Paths (Protecciones)

### SP-01: Sin JS
```gherkin
DADO QUE JS está deshabilitado
ENTONCES el FAQ muestra todas las respuestas visibles
Y el pricing muestra precios mensuales por defecto
```

### SP-02: Toggle spam
```gherkin
DADO QUE el usuario hace click rápido en el toggle
ENTONCES el estado final es consistente
Y no hay glitches en la animación
```

### SP-03: FAQ container no existe
```gherkin
DADO QUE #faq-container no está en el DOM
ENTONCES JS no lanza error y la página funciona normalmente
```

---

## 📋 Reglas de Negocio

### RB-01: Copy pricing
| Plan | Nombre | Precio Mensual | Precio Anual | Features |
|---|---|---|---|---|
| Starter | ESSENCIAL | $9 | $7 | 5 Workflows, API estándar |
| Pro | ADVANCED | $29 | $23 | Workflows ilimitados, API prioritaria |
| Enterprise | ENTERPRISE | $99 | $79 | Infraestructura dedicada, Soporte 24/7 |

### RB-02: Copy FAQ
Mantener las 6 preguntas existentes de CONTENT.md.

### RB-03: Copy card CTA FAQ
- Título: "¿Aún tienes preguntas?"
- Descripción: "No encuentras la respuesta? Envíanos un email y te responderemos."
- Botón: "ENVIAR EMAIL" → mailto:contacto@antares.soft

### RB-04: Restricciones visuales
- ✅ Glassmorphism sutil (fondo rgba, borde rgba)
- ✅ Glow indigo en hover de cards y botones
- ✅ Gradientes monocromáticos (indigo solo)
- ❌ NO gradientes multicolor
- ❌ NO neones, glow excesivo
- ❌ NO animaciones bounce/elastic

### RB-05: Animaciones permitidas
| Animación | Propiedad | Duración | Easing |
|---|---|---|---|
| Precio cambio | opacity, translateY | 200ms | ease-out |
| Card hover | border-color, box-shadow, transform | 300ms | ease |
| Botón hover | transform, box-shadow | 200ms | ease-out |
| FAQ abrir | max-height | 400ms | ease |
| Flecha rotar | transform rotate | 300ms | ease |

---

## 🔗 Integración

- NO modificar navbar.css, navbar.js, hero.css, hero.js
- Reemplazar pricing existente en #pricing
- Reemplazar FAQ existente en #contacto
- Mantener funcionalidad toggle existente, mejorar visual