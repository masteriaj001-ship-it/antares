# ESPECIFICACIÓN: FAQ Accordion

## Contexto
Implementación de componente FAQ Accordion dinámico siguiendo diseño Mobile-First y Spec-Driven Development.

## 📐 Happy Paths (Casos de Éxito)

### HP-01: Renderizado dinámico (DOM rendering)
```gherkin
DADO QUE el usuario visita la sección FAQ
CUANDO el DOM está listo
ENTONCES JavaScript genera los items de FAQ dinámicamente
Y los inserta en #faq-container
Y el HTML original del container está VACÍO (solo <div id="faq-container"></div>)
```

### HP-02: Estado cerrado (default)
```gherkin
DADO QUE un item de FAQ está renderizado
CUANDO el usuario lo ve por primera vez
ENTONCES la respuesta está oculta (max-height: 0, overflow: hidden)
Y el icono de flecha apunta hacia abajo (▼)
Y solo la pregunta es visible
```

### HP-03: Apertura de item
```gherkin
DADO QUE un item está cerrado
CUANDO el usuario hace click en la pregunta
ENTONCES el item se abre (max-height: 500px, transition 400ms)
Y el icono rota 180deg (▲)
Y se añade clase .active al item
Y el borde del item cambia a color primario
Y solo UN item puede estar abierto a la vez (los demás se cierran)
```

### HP-04: Cierre de item
```gherkin
DADO QUE un item está abierto
CUANDO el usuario hace click en la pregunta de nuevo
O hace click en otro item
ENTONCES el item se cierra (max-height: 0, transition 400ms)
Y el icono vuelve a apuntar abajo (▼)
Y se remueve clase .active
```

### HP-05: Animación suave
```gherkin
DADO QUE un item se abre o cierra
CUANDO la animación ocurre
ENTONCES usa transition: max-height 0.4s ease, opacity 0.3s ease
Y NO usa display: none/block (rompe animación)
Y NO usa height: auto (no es animable)
```

### HP-06: Responsive
```gherkin
DADO QUE el usuario está en mobile (< 768px)
CUANDO ve la FAQ
ENTONCES el ancho es 100% del contenedor
Y el padding es reducido (16px)
Y la fuente de la pregunta es 16px

DADO QUE el usuario está en tablet/desktop (≥ 768px)
CUANDO ve la FAQ
ENTONCES el max-width es 800px centrado
Y el padding es amplio (24px)
Y la fuente de la pregunta es 18px
```

## 🛡️ Sad Paths (Protección)

### SP-01: JavaScript deshabilitado
```gherkin
DADO QUE JS no funciona
CUANDO el usuario ve la FAQ
ENTONCES todas las respuestas son visibles por defecto (sin acordeón)
Y las preguntas siguen siendo legibles
Y NO hay contenido oculto permanentemente
```
*Implementación: CSS base muestra todo, JS oculta al inicializar.*

### SP-02: Click spam (doble click rápido)
```gherkin
DADO QUE el usuario hace click repetidamente
CUANDO la animación está en curso
ENTONCES el estado final es consistente
Y NO hay glitches visuales
Y NO se acumulan animaciones
```
*Implementación: Debounce o verificar estado antes de animar.*

### SP-03: Container no existe
```gherkin
DADO QUE #faq-container no está en el DOM
CUANDO JS intenta renderizar
ENTONCES NO lanza error en consola
Y el resto de la página funciona normalmente
```
*Implementación: if (!container) { console.warn('FAQ: container no encontrado'); return; }*

## 📋 Reglas de Negocio (Obligatorias)

### RB-01: Copy oficial (de CONTENT.md)
Los textos no deben hardcodearse en el HTML. Se leen desde el objeto `faqData` configurado en `src/js/faq.js`, el cual es una réplica exacta del archivo `CONTENT.md`.

### RB-02: Restricciones visuales
- Fondo item: `var(--bg-card)` (`#16161F`)
- Borde default: `1px solid rgba(255,255,255,0.06)`
- Borde activo: `1px solid var(--accent-cyan)` (`#22D3EE`)
- Sombra activa sutil: `0 4px 12px rgba(34,211,238,0.1)`
- SIN gradientes multicolor, SIN glow excesivo.

### RB-03: Tipografía
| Elemento | Fuente | Peso | Tamaño mobile | Tamaño desktop |
|---|---|---|---|---|
| Pregunta | Inter | 600 | 16px | 18px |
| Respuesta | Inter | 400 | 14px | 16px |
| Icono flecha | Inter | 400 | 14px | 14px |

### RB-04: Animaciones permitidas
| Animación | Propiedad | Duración | Easing |
|---|---|---|---|
| Apertura | max-height | 400ms | ease |
| Icono rotación | transform | 300ms | ease |
| Borde color | border-color | 300ms | ease |
| Sombra | box-shadow | 300ms | ease |

### RB-05: Accesibilidad
- Botón de pregunta: `<button>` semántico (no `<div>` clickable).
- Atributos requeridos: `aria-expanded` y `aria-controls`.
- Focus visible: outline sutil con color primario.

### RB-06: Integración con Sistema
- El FAQ respeta el padding-left del sidebar global en desktop (`88px`).
- Lógica JS contenida en su propio módulo `faq.js`.
- Estilos CSS contenidos en `faq.css`.
