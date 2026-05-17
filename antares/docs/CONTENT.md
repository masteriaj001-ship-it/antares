# CONTENT.md — Copy oficial de ANTARES
> Fuente de verdad para todo el texto visible en el sitio.
> Los agentes Atlas y Nyx usan este archivo como referencia de contenido.
> El PRD define el tono. Este archivo define las palabras exactas.
> Última actualización: Mayo 2026

---

## 🔲 NAVBAR

| Elemento | Texto |
|---|---|
| Logo / Marca | `ANTARES` |
| Símbolo decorativo del logo (desktop) | `॥` |
| Enlace 1 | `SYSTEMS` → `#sistemas` |
| Enlace 2 | `OPERATIONS` → `#operaciones` |
| Enlace 3 | `INTELLIGENCE` → `#inteligencia` |
| Enlace 4 | `CONTACT` → `#contacto` |
| Aria-label del botón hamburguesa (cerrado) | `Abrir menú` |
| Aria-label del botón hamburguesa (abierto) | `Cerrar menú` |

---

## 🎯 HERO

### Etiqueta táctica (meta)
```
CORE_SYSTEM_ONLINE
```

### Titular principal (H1)
```
SISTEMAS
QUE PIENSAN
```
> Nota: "PIENSAN" usa color `--color-text-muted` para el contraste bicolor.
> La ruptura de línea (`<br>`) entre "QUE" y "PIENSAN" está en el HTML.

### Párrafo descriptivo
```
Desarrollo de software y automatización IA para equipos que operan en el futuro.
Arquitectura técnica sin concesiones.
```

### Botones CTA
| Botón | Texto | Destino | Estilo |
|---|---|---|---|
| Primario | `INICIAR OPERACIÓN` | `#operacion` | `.btn-primary` |
| Secundario | `REVISAR STACK` | `#stack` | `.btn-secondary` |

### HUD Overlay (visor táctico)
```
SCANNING_OBJECTIVE...
```
> Este texto es animado por JS (rotación de strings de estado del sistema).

### Métricas técnicas (footer del hero)
| Label | Valor base | Comportamiento |
|---|---|---|
| `LATENCY` | `0.00042 MS` | Animado por JS con variaciones aleatorias pequeñas |
| `BANDWIDTH` | `900.00 PB/S` | Animado por JS con variaciones aleatorias altas |

> ⚠️ Estos valores son ficcionales/decorativos. Comunican precisión técnica, no datos reales de infraestructura.

---

## 📦 SERVICIOS / CARDS
> Estado: Pendiente de definición de contenido final.
> Placeholder hasta aprobación de copy por el equipo.

### Card 1 — Software
- **Título:** `ARQUITECTURA DE SOFTWARE`
- **Descripción:** *Por definir*
- **Label/Tag:** `SISTEMAS`

### Card 2 — Automatización
- **Título:** `AUTOMATIZACIÓN INTELIGENTE`
- **Descripción:** *Por definir*
- **Label/Tag:** `WORKFLOWS`

### Card 3 — Inteligencia Artificial
- **Título:** `AGENTES DE IA`
- **Descripción:** *Por definir*
- **Label/Tag:** `AI-FIRST`

---

## 💰 PRICING

### Toggle de período
| Estado | Texto |
|---|---|
| Mensual | `MENSUAL` |
| Anual | `ANUAL` |
| Badge descuento | `SAVE 20%` |

### Plan: Starter
- **Nombre:** `STARTER PROTOCOL`
- **Precio mensual base:** `$29`
- **Precio anual (20% off):** `$23`
- **Descripción:** *Por definir*

### Plan: Operations (Recomendado)
- **Nombre:** `OPERATIONS CORE`
- **Precio mensual base:** `$79`
- **Precio anual (20% off):** `$63`
- **Descripción:** *Por definir*
- **Badge:** `RECOMMENDED`

### Plan: Intelligence
- **Nombre:** `INTELLIGENCE SUITE`
- **Precio mensual base:** `$149`
- **Precio anual (20% off):** `$119`
- **Descripción:** *Por definir*

---

## ❓ FAQ

### Pregunta 1
**Q:** `¿Puedo escalar mi configuración en cualquier momento?`
**A:** `Affirmative. La arquitectura soporta elasticidad y permite escalar recursos sin migración. Los cambios se aplican de forma inmediata.`

### Pregunta 2
**Q:** `¿Ofrecen período de evaluación?`
**A:** `Todos los protocolos incluyen 14 días de acceso completo. Puedes validar rendimiento, latencia y capacidades de integración.`

### Pregunta 3
**Q:** `¿Qué métodos de integración son soportados?`
**A:** `REST API, GraphQL, Webhooks, gRPC y conectores nativos para los principales frameworks de automatización.`

### Pregunta 4
**Q:** `¿Puedo cancelar mi suscripción?`
**A:** `Puedes cancelar en cualquier momento desde tu panel de control. Tu acceso continuará hasta el final del período pagado. No hay contratos a largo plazo ni penalizaciones.`

### Pregunta 5
**Q:** `¿El plan Enterprise incluye soporte dedicado?`
**A:** `Sí, el plan Enterprise incluye un Customer Success Manager asignado, soporte prioritario 24/7 por chat, email y teléfono, además de sesiones de onboarding personalizadas para tu equipo.`

### Pregunta 6
**Q:** `¿Los precios incluyen impuestos?`
**A:** `Los precios mostrados no incluyen impuestos locales. El IVA u otros impuestos aplicables se calcularán automáticamente durante el checkout según tu país de residencia.`

---

## 🔻 FOOTER

| Elemento | Texto |
|---|---|
| Marca | `ANTARES` |
| Tagline | *Por definir* |
| Copyright | `© 2026 ANTARES. All rights reserved.` |
| Redes sociales | *Por definir* |

---

## 📋 Reglas editoriales (extracto del PRD)
- Frases cortas, máximo 15-20 palabras en descripciones
- Sin adjetivos vacíos: "revolucionario", "disruptivo", "innovador", "game-changer"
- Sin signos de exclamación
- Sin preguntas retóricas en secciones informativas
- Tono: operacional, preciso, seguro — no entusiasta, no vendedor
- Todo el texto visible en UI es **UPPERCASE** o **sentence case**, nunca Title Case mezclado
