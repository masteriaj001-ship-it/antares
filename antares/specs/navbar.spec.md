# SPEC: Navbar ANTARES (Industrial 3-Zone Layout)
> Basada en el código refactorizado: `src/styles/components/navbar.css` + `index.html`
> Versión: 2.0 — Mayo 2026

## Identidad del componente
Navbar rígido industrial de 3 zonas: Izquierda (Marca), Centro (Navegación Táctica), Derecha (Acceso de Control). Funciona como panel de control operacional. En desktop usa grid simétrico. En mobile, como drawer lateral derecho.

---

## Arquitectura de 3 Zonas

### Zona Izquierda (Marca)
- Logotipo `ANTARES` en Syncopate, peso 700, letter-spacing 0.2em
- Micro-indicador dinámico: `[ SISTEMA: OPERACIONAL 🟢 ]` en 9px, JetBrains Mono

### Zona Centro (Navegación Táctica)
4 enlaces en mayúsculas con formato técnico:
| Número | Enlace | Destino |
|--------|--------|---------|
| 01 | `// 01. INGENIERÍA` | `#ingenieria` |
| 02 | `// 02. AUTOMATIZACIÓN` | `#automatizacion` |
| 03 | `// 03. CONSULTORÍA` | `#consultoria` |
| 04 | `// 04. INFRAESTRUCTURA` | `#infraestructura` |

### Zona Derecha (Acceso de Control)
Botón único brutalista: `[ INICIAR AUDITORÍA ]`
- Enlace mailto: `mailto:auditoria@antares.engineering?subject=Solicitud de Auditoría Técnica - ANTARES`
- Sin border-radius ( esquinas rectas )
- Borde: `1px solid rgba(197, 168, 128, 0.4)`
- Color oro titanio `#C5A880`
- Hover: fondo oro `#C5A880`, texto `#080809`, sombra difusa

---

## Comportamiento esperado (Happy Path)

### HP-01: Layout Desktop (≥ 768px)
```gherkin
DADO QUE el usuario visita en desktop
ENTONCES el navbar usa grid de 3 columnas: [marca] [nav-center] [cta]
Y la altura es 56px
Y la navegación está centrada con la marca a la izquierda y el CTA a la derecha
```

### HP-02: Hover en Enlaces Centro
```gherkin
DADO QUE el usuario hace hover sobre los enlaces tácticos
CUANDO el cursor pasa sobre el enlace
ENTONCES la opacidad sube de 0.6 a 1.0
Y el color transiciona a oro titanio #C5A880
Y la transición dura 200ms con ease-out
Y NO hay subrayado ni efectos decorativos
```

### HP-03: Botón de Auditoría
```gherkin
DADO QUE el usuario está en desktop
ENTONCES el botón "[ INICIAR AUDITORÍA ]" está a la derecha
Y tiene bordes rectos (border-radius: 0)
Y fondo transparente con borde oro titanio
CUANDO hace hover
ENTONCES el fondo se llena de oro y el texto se oscurece
Y aparece sombra difusa: 0 0 10px rgba(197, 168, 128, 0.3)
```

### HP-04: Mobile Drawer (< 768px)
```gherkin
DADO QUE el usuario está en mobile
ENTONCES el logo "ANTARES" aparece a la izquierda
Y el hamburguesa aparece a la derecha
Y el drawer se abre desde la derecha con translateX(100%)
ENTONCES el drawer contiene:
  - Marca ANTARES con indicador operacional
  - Los 4 enlaces formateados en columna
  - El botón "[ INICIAR AUDITORÍA ]" al final
```

### HP-05: Apertura/Cierre del Drawer
```gherkin
DADO QUE el drawer está cerrado en mobile
CUANDO el usuario hace clic en el hamburguesa
ENTONCES el drawer desliza desde la derecha (600ms cubic-bezier)
Y el icono hamburguesa se transforma en X (±45deg)
Y aparece overlay oscuro detrás
CUANDO hace clic en X o en el overlay
ENTONCES el drawer se cierra
```

### HP-06: Scroll Status
```gherkin
DADO QUE el navbar tiene la clase .scrolled
ENTONCES el fondo se vuelve más opaco (rgba 0.9)
Y el borde inferior aumenta opacidad (0.08)
```

---

## Especificaciones de Estilos

### Variables CSS Requeridas
```css
--font-heading: 'Syncopate', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
--font-main: 'Inter', sans-serif;
--accent-green: #10B981;
--color-primary: #C5A880;
--color-text-muted: #c7c6b5;
```

### Transiciones Permitidas
| Elemento | Propiedad | Duración | Easing |
|----------|-----------|----------|--------|
| Enlaces nav | opacity, color | 200ms | ease-out |
| Botón audit | background, color, box-shadow | 200ms | ease-out |
| Overlay | opacity, visibility | 400ms | ease-out |
| Drawer | transform | 600ms | cubic-bezier(0.16, 1, 0.3, 1) |

---

## Reglas de Negocio

### RB-01: Restricciones Visuales Absolutas
- Sin subrayados animados en hover
- Sin dropdowns o submenús
- Sin border-radius en el botón de auditoría
- El drawer en mobile usa la misma estructura de 3 zonas en columna

### RB-02: Accesibilidad
- El botón hamburguesa tiene `aria-expanded` actualizado por JS
- `aria-label="Abrir menú"` / `"Cerrar menú"`
- Todos los enlaces son focusables vía teclado

### RB-03: Tokens de Color
- Usar `--accent-green: #10B981` para el indicador de estado
- Usar `--color-primary: #C5A880` para elementos en oro titanio
- Usar `--font-mono` para textos técnicos y micro-indicadores

---

## Reglas de Negocio (Anteriores - Obsoletas)

### RB-04 (Obsoleto): Sidebar Izquierdo
- El `.global-sidebar` de 64px sigue existiendo en desktop ≥ 1024px
- El navbar compensa con `padding-left: 64px`

### RB-05 (Obsoleto): Estructura Anterior
- La estructura de 2 enlaces izquierda + 2 derecha + logo centro ya no aplica
- Nueva estructura: 4 enlaces centrados + marca izquierda + CTA derecha