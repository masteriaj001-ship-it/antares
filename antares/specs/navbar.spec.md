# SPEC: Navbar ANTARES
> Basada en el código real de: `src/styles/components/navbar.css` + `index.html`
> Versión: 1.0 — Mayo 2026

## Identidad del componente
Navegación principal fija de ANTARES. Funciona como sistema operativo visual del sitio: guía sin distraer. En desktop funciona como barra simétrica con el logo centrado. En mobile, como drawer lateral derecho de 280px. Nunca es decorativa; siempre es táctica.

---

## Comportamiento esperado (Happy Path)

### HP-01: Carga inicial — Mobile (< 768px)
```gherkin
DADO QUE el usuario visita la página en un dispositivo mobile
CUANDO la página termina de cargar
ENTONCES el navbar aparece fijo en la parte superior
Y es visible el logotipo "ANTARES" a la izquierda (nav-brand-mobile)
Y es visible el icono hamburguesa (3 líneas) a la derecha
Y los enlaces de navegación NO son visibles (están dentro del drawer oculto)
Y el drawer está desplazado fuera de pantalla con translateX(100%)
```

### HP-02: Apertura del drawer — Mobile
```gherkin
DADO QUE el usuario está en mobile con el menú cerrado
CUANDO hace clic en el icono hamburguesa
ENTONCES el drawer lateral desliza desde la derecha con animación 600ms cubic-bezier(0.16, 1, 0.3, 1)
Y el drawer tiene ancho fijo de 280px
Y el drawer ocupa height: 100vh
Y el fondo del drawer es #121315 con borde izquierdo 1px rgba(255,255,255,0.1)
Y el icono hamburguesa se transforma en X (líneas rotan ±45deg)
Y aparece un overlay oscuro detrás del drawer (rgba(18,19,21,0.8) + blur(8px))
```

### HP-03: Cierre del drawer — Mobile
```gherkin
DADO QUE el drawer mobile está abierto
CUANDO el usuario hace clic en el icono X
O hace clic en el overlay oscuro fuera del drawer
ENTONCES el drawer se desliza hacia la derecha hasta desaparecer (600ms inverso)
Y el icono vuelve al estado de hamburguesa
Y el overlay desaparece
```

### HP-04: Navegación — Tablet (768px – 1199px)
```gherkin
DADO QUE el usuario está en tablet (viewport 768px–1199px)
CUANDO la página carga
ENTONCES el drawer mobile NO se usa
Y el navbar tiene una altura fija de 48px
Y el layout usa un grid de 3 columnas: [nav-left] [nav-center] [nav-right]
Y los 4 enlaces están a los lados alineados horizontalmente en una sola fila continua
Y el logotipo "ANTARES" está centrado en el medio
Y el toggle hamburguesa NO es visible (display: none via .mobile-only)
```

### HP-05: Navegación — Desktop (≥ 1200px)
```gherkin
DADO QUE el usuario está en desktop (viewport ≥ 1200px)
CUANDO la página carga
ENTONCES el navbar tiene una altura fija de 48px
Y el layout usa el mismo grid simétrico de 3 columnas
Y la separación (gap) de los enlaces y paddings laterales aumentan (gap: 2.5rem, padding-lateral: 3rem)
Y el logotipo "ANTARES" precedido de ॥ queda bloqueado en el centro del viewport
```

### HP-06: Hover sobre enlaces
```gherkin
DADO QUE el usuario está en tablet o desktop
CUANDO hace hover sobre cualquier enlace de navegación
ENTONCES la opacidad del enlace sube de 0.65 a 1.0
Y aparece un fondo sutil rgba(255,255,255,0.05)
Y la transición dura 300ms
Y NO aparece subrayado ni animación de borde
```

### HP-07: Scroll con scroll hacia abajo
```gherkin
DADO QUE el usuario hace scroll hacia abajo en la página
CUANDO el script de navbar detecta el evento scroll
ENTONCES el navbar permanece fijo en la parte superior (position: fixed)
Y el navbar puede ocultarse si el sistema scroll-hide está activo (class .hidden aplica translateY(-100%))
Y la transición de ocultamiento es 400ms cubic-bezier(0.16, 1, 0.3, 1)
```

---

## Escenarios de error (Sad Path)

### SP-01: Doble clic rápido en hamburguesa
```gherkin
DADO QUE el usuario está en mobile
CUANDO hace clic repetidamente y rápido en el icono del menú
ENTONCES el estado final del drawer es consistente con el último clic
Y la animación del drawer no produce glitches visuales (translateX solapado)
Y la clase "open" en .navbar refleja el estado real del drawer
```

### SP-02: Redimensionamiento con drawer abierto
```gherkin
DADO QUE el drawer mobile está abierto en viewport < 768px
CUANDO el usuario redimensiona la ventana a ≥ 768px
ENTONCES el drawer deja de ser relevante (position: static, transform: none)
Y el navbar adopta automáticamente el layout tablet/desktop por CSS
Y no quedan clases "open" residuales que afecten el layout desktop
```

### SP-03: Sin JavaScript habilitado
```gherkin
DADO QUE el navegador tiene JavaScript deshabilitado
CUANDO el usuario carga la página en mobile
ENTONCES el logo ANTARES es visible
Y el toggle hamburguesa es visible pero no funcional
Y la página es navegable via scroll sin necesidad del menú
Y el contenido principal NO queda oculto permanentemente
```

---

## Reglas de negocio

### RB-01: Estructura de enlaces
- Izquierda: SYSTEMS (`#sistemas`), OPERATIONS (`#operaciones`)
- Centro: Logotipo ANTARES (link a `#inicio`)
- Derecha: INTELLIGENCE (`#inteligencia`), CONTACT (`#contacto`)
- Total: exactamente 4 enlaces + 1 logotipo

### RB-02: Restricciones visuales absolutas
- Sin subrayados animados en hover
- Sin dropdowns o submenús en esta versión
- Sin iconos junto a los enlaces de texto (excepto el ॥ decorativo del logo)
- Sin animaciones de rebote, overshoot o spring en el drawer
- La altura del drawer es siempre 100vh en mobile — NO tiene max-height reducido

### RB-03: Tipografía de marca
- `.nav-brand` y `.nav-brand-mobile`: `Syncopate`, 14px, weight 700, letter-spacing 0.2em
- `.navbar-links a`: `Inter`, 12px, weight 500, letter-spacing 0.15em, UPPERCASE

### RB-04: Sidebar izquierdo (Desktop ≥ 1024px)
- Existe un `.global-sidebar` fijo de 64px de ancho en el borde izquierdo
- Contiene íconos de navegación secundaria
- El hero compensa este espacio con `padding-left: 88px` (64px + 24px gap)
- El navbar en desktop compensa con `padding-left: 64px`

### RB-05: Accesibilidad
- El botón hamburguesa tiene `aria-expanded="false/true"` actualizado por JS
- El botón tiene `aria-label="Abrir menú"` / `"Cerrar menú"`
- Todos los enlaces son focusables via teclado (elementos `<a>` nativos)
