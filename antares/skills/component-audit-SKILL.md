---
name: component-audit
description: >
  Auditar un componente UI existente (navbar, card, modal, pricing, etc.) antes de modificarlo.
  Usar SIEMPRE antes de cualquier cambio en HTML, CSS o JS que involucre un componente ya construido.
  Trigger obligatorio cuando el usuario pide: "reorganizar", "mover", "agregar elemento a", "cambiar orden",
  "editar el navbar/menu/card/pricing/footer", o cualquier modificación sobre código existente.
  No saltarse este paso aunque el cambio parezca simple — los errores de regresión ocurren en cambios "simples".
---

# Component Audit — Protocolo Pre-Modificación

## Propósito
Antes de tocar cualquier componente existente, mapear todas sus dependencias para evitar regresiones.
Un cambio en HTML puede romper selectores JS. Un cambio en clases puede romper estilos responsive.
Este audit es el contrato de seguridad antes de ejecutar cualquier edición.

---

## PASO 1 — Declarar el componente objetivo

Nombrar explícitamente:
- **Componente:** (ej. `navbar`, `pricing-card`, `faq-item`)
- **Archivo HTML:** qué sección/elemento exacto se va a tocar
- **Cambio solicitado:** descripción precisa de lo que el usuario pidió

---

## PASO 2 — Mapa de dependencias HTML

Listar TODAS las clases del componente y sus roles:

```
CLASE                   ROL
.navbar                 Contenedor raíz — JS lo usa para toggle 'open' y 'scrolled'
.navbar-toggle          Botón hamburguesa — JS escucha click aquí
.navbar-nav             Drawer mobile — se muestra/oculta con clase 'open'
.navbar-links           Lista de links — JS cierra menú al hacer click en sus <a>
.brand-desktop          Item logo — visible solo en desktop (CSS lo oculta en mobile)
.nav-overlay            Overlay oscuro — JS escucha click para cerrar menú
```

Formato de tabla. Sin excepciones.

---

## PASO 3 — Mapa de dependencias CSS

Para cada clase listada, verificar en `style.css`:
- ¿Tiene estilos base (mobile)?
- ¿Tiene overrides en media queries (`@media`)?
- ¿Depende de una clase padre o estado (`.navbar.open .navbar-nav`)?

```
CLASE                   CSS BASE    MEDIA QUERY    ESTADO DINÁMICO
.navbar                 ✓           ✓ (>768px)     .navbar.scrolled
.navbar-toggle          ✓           oculto >768px  .navbar-toggle.active
.navbar-nav             ✓ (drawer)  ✓ (horizontal) .navbar.open .navbar-nav
```

---

## PASO 4 — Mapa de dependencias JavaScript

Listar todos los selectores usados en `script.js` para este componente:

```javascript
// Selectores activos para este componente:
const navbar = document.querySelector('.navbar');
const toggle = document.querySelector('.navbar-toggle');
const overlay = document.querySelector('.nav-overlay');
// Clases dinámicas que JS agrega/quita:
// 'open', 'active', 'scrolled', 'no-scroll'
```

Si se va a renombrar una clase o mover un elemento, verificar que ningún selector JS depende de él.

---

## PASO 5 — Checklist de riesgo

Antes de proceder, responder cada punto:

- [ ] ¿El cambio renombra alguna clase existente? → Si sí, actualizar JS también
- [ ] ¿El cambio mueve un elemento de posición en el DOM? → Verificar selectores JS que usan orden o parentesco
- [ ] ¿El cambio agrega/elimina un elemento con clase única? → Verificar que JS no busca esa clase
- [ ] ¿El cambio afecta estructura visible en mobile? → Verificar media queries
- [ ] ¿El cambio afecta estructura visible en desktop? → Verificar media queries
- [ ] ¿El cambio toca elementos con `aria-*` o roles de accesibilidad? → Preservarlos

Si algún checkbox marca riesgo → documentarlo antes de editar.

---

## PASO 6 — Declarar plan de edición

Antes de escribir una sola línea de código, declarar:

```
ARCHIVOS A MODIFICAR:
- index.html → [línea aprox.] — [qué se cambia exactamente]
- style.css   → [selectores afectados] — [qué se cambia]
- script.js   → [si aplica] — [qué se cambia]

ARCHIVOS QUE NO SE TOCAN:
- [listar archivos del proyecto que permanecen intactos]

ESTRUCTURA QUE SE PRESERVA:
- [listar clases/elementos que no se modifican aunque estén cerca del cambio]
```

---

## Regla de oro

> Si el cambio solicitado es solo en HTML, pero una clase del elemento modificado
> aparece en CSS o JS → los tres archivos son parte del scope de revisión.

Nunca editar en aislamiento. Siempre auditar el ecosistema completo del componente.
