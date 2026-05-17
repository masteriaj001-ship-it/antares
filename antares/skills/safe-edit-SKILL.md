---
name: safe-edit
description: >
  Protocolo de edición quirúrgica para modificar componentes UI sin romper funcionalidad existente.
  Usar SIEMPRE después de component-audit, al momento de ejecutar cambios en HTML/CSS/JS.
  Trigger obligatorio cuando se van a escribir cambios en archivos existentes del proyecto ANTARES.
  Especialmente crítico para: navbar, pricing, faq, cards, animaciones, y cualquier componente
  con lógica JS asociada. El objetivo es cambiar solo lo necesario y verificar que nada se rompió.
---

# Safe Edit — Protocolo de Edición Quirúrgica

## Principio rector

> Editar lo mínimo necesario para lograr el objetivo.
> Cada línea que no necesita cambiar, NO cambia.

---

## FASE 1 — Preparación (antes de editar)

### 1.1 Confirmar que se corrió component-audit
Si no se corrió → correrlo primero. No hay excepciones.

### 1.2 Snapshot mental del estado actual
Antes de editar, leer completo el bloque de código que se va a modificar.
No editar de memoria ni por suposición. Leer primero, editar después.

### 1.3 Definir el cambio mínimo
Pregunta de control: **¿Cuál es la cantidad mínima de líneas que necesito cambiar para lograr el objetivo?**
Si la respuesta supera 20 líneas en un componente existente → dividir en sub-cambios y confirmar con el usuario.

---

## FASE 2 — Reglas de edición

### 2.1 Regla de preservación de clases
**NUNCA eliminar ni renombrar una clase existente** a menos que:
- Se haya verificado en component-audit que no tiene dependencias JS
- Se actualicen simultáneamente todos los archivos donde aparece

### 2.2 Regla de preservación de estructura DOM
Al reorganizar elementos dentro de un contenedor:
- Mantener los mismos elementos, solo cambiar su orden o wrapping
- No agregar wrappers intermedios sin verificar si JS usa selectores de parentesco
- No cambiar el elemento raíz del componente (`.navbar`, `.pricing-grid`, etc.)

### 2.3 Regla de edición atómica por archivo
Editar de a un archivo a la vez en este orden:
1. `index.html` — estructura
2. `style.css` — estilos (agregar al final de la sección correspondiente, no dispersar)
3. `script.js` — lógica (solo si el audit detectó necesidad)

No intercalar ediciones entre archivos sin completar cada uno.

### 2.4 Regla de adición sobre reemplazo
Preferir **agregar** estilos/clases nuevas sobre **modificar** las existentes cuando sea posible.

```css
/* ❌ Riesgoso — modifica comportamiento existente */
.navbar-links { display: flex; gap: 2rem; justify-content: space-between; }

/* ✓ Más seguro — agrega especificidad solo donde se necesita */
.navbar-links .brand-desktop { order: 2; }
```

### 2.5 Regla de comentario de intención
Cada bloque nuevo de CSS debe tener un comentario de una línea:

```css
/* [safe-edit] Reorden brand-desktop al centro del navbar */
.navbar-links .brand-desktop { order: 2; }
```

Esto permite identificar qué añadió este agente vs código previo.

---

## FASE 3 — Verificación post-edición

### Checklist de regresión obligatorio

Después de cada cambio, verificar mentalmente o declarar explícitamente:

**Mobile (< 768px)**
- [ ] ¿El menú hamburguesa sigue visible?
- [ ] ¿El drawer se abre y cierra correctamente?
- [ ] ¿El overlay funciona?
- [ ] ¿Los links cierran el menú al hacer click?
- [ ] ¿El logo/brand mobile sigue visible?

**Desktop (> 1024px)**
- [ ] ¿El navbar horizontal se ve correctamente?
- [ ] ¿El toggle hamburguesa está oculto?
- [ ] ¿Los links de navegación son visibles?
- [ ] ¿El logo central (brand-desktop) está en posición correcta?

**Interacciones JS**
- [ ] ¿El scroll agrega `.scrolled` al navbar?
- [ ] ¿El toggle agrega/quita `.open` y `.active`?
- [ ] ¿`body.no-scroll` se aplica al abrir menú?

**Visual**
- [ ] ¿No hay elementos que aparecieron o desaparecieron inesperadamente?
- [ ] ¿El spacing y alineación se mantienen?

---

## FASE 4 — Reporte de cambios

Al terminar, declarar un resumen estructurado:

```
CAMBIOS REALIZADOS:
✓ index.html — [descripción exacta de qué cambió]
✓ style.css  — [qué selectores se agregaron/modificaron]
✗ script.js  — No modificado

CLASES PRESERVADAS (sin cambios):
- .navbar, .navbar-toggle, .nav-overlay, .navbar-links (lógica JS intacta)

CHECKLIST DE REGRESIÓN:
- Mobile: ✓ verificado
- Desktop: ✓ verificado  
- JS interactions: ✓ verificado

RIESGOS RESIDUALES:
- [Si existe alguno, declararlo aquí. Si no, escribir "Ninguno detectado"]
```

---

## Casos de abort — cuándo parar y consultar al usuario

Detener la edición y consultar si:

1. El cambio solicitado requiere reestructurar más del 30% del componente
2. Se detecta que una clase que se va a modificar aparece en más de 3 lugares distintos
3. El objetivo del usuario es ambiguo y hay 2+ formas de implementarlo con resultados distintos
4. El componente tiene lógica JS compleja que no estaba documentada en el audit

Mensaje de abort:
> "Detecté que este cambio tiene más alcance del esperado. Antes de continuar necesito confirmar: [pregunta específica]"
