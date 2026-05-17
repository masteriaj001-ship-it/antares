# ESPECIFICACIÓN: FAQ Premium V2

## Contexto
Implementación de FAQ con layout de 2 columnas en desktop, siguiendo el diseño premium V2 del sistema ANTARES.

---

## 📐 Happy Paths

### HP-01: Layout 2 columnas (desktop ≥ 1024px)
```gherkin
DADO QUE el viewport es ≥ 1024px
ENTONCES el FAQ tiene grid:
  - grid-template-columns: 1fr 1.2fr
  - gap: var(--space-8)
Y la columna izquierda contiene:
  - Título "Preguntas Frecuentes" (font: var(--font-heading))
  - Subtítulo descriptivo (max-width: 400px)
  - Card CTA con mailto:contacto@antares.soft
Y la columna derecha contiene el acordeón
  - max-width: 600px
  - margin-left: auto
```

### HP-02: Layout 1 columna (mobile/tablet < 1024px)
```gherkin
DADO QUE el viewport es < 1024px
ENTONCES el FAQ es 1 columna
Y el título está centrado
Y el subtítulo está debajo del título
Y el acordeón ocupa todo el ancho
Y la card CTA está debajo del acordeón
```

### HP-03: Renderizado dinámico (DOM rendering)
```gherkin
DADO QUE el usuario visita la sección FAQ
CUANDO el DOM está listo
ENTONCES JavaScript genera los items de FAQ dinámicamente
Y los inserta en #faq-container
```

### HP-04: Apertura de item
```gherkin
DADO QUE un item está cerrado
CUANDO el usuario hace click en la pregunta
ENTONCES el item se abre (max-height: 500px, transition 400ms)
Y el icono rota 180deg
Y se añade clase .active al item
Y solo UN item puede estar abierto a la vez
```

### HP-05: Cierre de item
```gherkin
DADO QUE un item está abierto
CUANDO el usuario hace click en la pregunta de nuevo
O hace click en otro item
ENTONCES el item se cierra (max-height: 0)
Y el icono vuelve a posición original
```

### HP-06: Card CTA
```gherkin
DADO QUE el usuario ve la card CTA
ENTONCES tiene:
  - fondo: rgba(255,255,255,0.05)
  - borde: 1px solid rgba(255,255,255,0.1)
  - border-radius: var(--radius-lg)
Y el botón "ENVIAR EMAIL" tiene:
  - href: mailto:contacto@antares.soft
  - fondo: --accent-indigo
  - hover: box-shadow + translateY(-2px)
```

---

## 🛡️ Sad Paths

### SP-01: JavaScript deshabilitado
```gherkin
DADO QUE JS no funciona
CUANDO el usuario ve la FAQ
ENTONCES todas las respuestas son visibles por defecto
```

### SP-02: Click spam
```gherkin
DADO QUE el usuario hace click repetidamente
CUANDO la animación está en curso
ENTONCES el estado final es consistente
```

### SP-03: Container no existe
```gherkin
DADO QUE #faq-container no está en el DOM
CUANDO JS intenta renderizar
ENTONCES NO lanza error en consola
```

---

## 📋 Reglas de Negocio

### RB-01: Copy oficial
- Título: "Preguntas Frecuentes"
- Subtítulo: "Encuentra respuestas claras sobre nuestros protocolos de automatización e integración."
- Card CTA título: "¿Aún tienes preguntas?"
- Card CTA descripción: "No encuentras la respuesta? Envíanos un email y te responderemos."
- Botón: "ENVIAR EMAIL"

### RB-02: Preguntas (de CONTENT.md)
1. ¿Puedo escalar mi configuración en cualquier momento?
2. ¿Ofrecen período de evaluación?
3. ¿Qué métodos de integración son soportados?
4. ¿Puedo cancelar mi suscripción?
5. ¿El plan Enterprise incluye soporte dedicado?
6. ¿Los precios incluyen impuestos?

### RB-03: Tipografía
| Elemento | Fuente | Peso | Tamaño |
|---|---|---|---|
| Título | Syncopate | 700 | clamp(1.5rem, 3vw, 2.5rem) |
| Subtítulo | Inter | 400 | 1rem |
| Pregunta | Inter | 600 | 1rem |
| Respuesta | Inter | 400 | 0.9375rem |

### RB-04: Animaciones permitidas
| Animación | Propiedad | Duración | Easing |
|---|---|---|---|
| Apertura | max-height | 400ms | ease |
| Icono rotación | transform | 300ms | ease |
| Hover item | border-color | 300ms | ease |
| Botón CTA | transform, box-shadow | 200ms | ease-out |

### RB-05: Restricciones visuales
- Fondo: var(--bg-primary) (#0A0A0F)
- Borde activo: rgba(99,102,241,0.3)
- Icono: --accent-indigo (#6366F1)
- ✅ Glassmorphism sutil
- ✅ Glow indigo en hover
- ❌ NO gradientes multicolor
- ❌ NO neones

### RB-06: Accesibilidad
- Botón de pregunta: `<button>` semántico
- Atributos: `aria-expanded` y `aria-controls`
- Focus visible