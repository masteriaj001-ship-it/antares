# 📐 ESPECIFICACIÓN: Repositorio de Protocolos (Protocols)
`Estado: Aprobado por el CEO`
`Componente: /protocols.html, /src/protocols.js, /src/protocols.css`
`Prioridad: P2 (Páginas de Expansión)`

---

## 🎯 1. Decisiones de Diseño y Estructura Tectónica

### Layout Editorial
Estructura basada en **filas horizontales de ancho completo** divididas por líneas ultra-sutiles de `1px solid rgba(255, 255, 255, 0.05)`.
Se elimina el uso de cards flotantes tradicionales. La información técnica fluye como un diario o bitácora de ingeniería industrial premium (Dark Luxury).

### Contador de Telemetría Superior
Un indicador numérico fijo en la cabecera con tipografía monoespaciada:
`[ PROTOCOLS_ENGAGED: 05 ]`
Este contador muestra el número de protocolos de automatización activos en el sistema y vibra levemente con un sutil glitch estético al cargarse.

### Espacio Negativo Generoso
Un mínimo estricto de **40% de espacio vacío (negativo)** en desktop para preservar la atmósfera cinematográfica premium inspirada en Dune e Interstellar.

---

## 📄 2. Contrato de Datos (Copy y Contenido Técnico)

Para poblar el repositorio de protocolos, se definen los siguientes 5 protocolos oficiales que representan la orquestación inteligente de ANTARES:

### Protocolo 01: CORE_ORCHESTRATION (ATLAS)
*   **Nombre de Protocolo:** `P-01 // ORQUESTADOR IMPLEMENTADOR ATLAS`
*   **Clasificación:** `CRÍTICO — INGENIERÍA DE SOFTWARE`
*   **Descripción:** Orquestación de compilaciones, refactorización y resolución autónoma de colisiones de código en entornos sandbox seguros.
*   **Código/Esquema Técnico (Firma):**
```json
{
  "protocol": "ATLAS_CORE",
  "version": "v2.4-stable",
  "pipeline": ["parse_ast", "resolve_conflicts", "run_linter", "compile"]
}
```

### Protocolo 02: VISUAL_ATMOSPHERE (NYX)
*   **Nombre de Protocolo:** `P-02 // INGENIERÍA DE MOVIMIENTO NYX`
*   **Clasificación:** `ALTA PRIORIDAD — RENDIMIENTO UI/UX`
*   **Descripción:** Renderizado cinematográfico avanzado, orquestación de transiciones con GSAP, aceleración por hardware y prevención de FOUC.
*   **Código/Esquema Técnico (Firma):**
```json
{
  "engine": "CHRONOS_GSAP",
  "easing": "cubic-bezier(0.16, 1, 0.3, 1)",
  "hardware_acceleration": true
}
```

### Protocolo 03: SPEC_AUDIT (ECHO)
*   **Nombre de Protocolo:** `P-03 // AUDITORÍA DE ESPECIFICACIONES ECHO`
*   **Clasificación:** `GARANTÍA — PREVENCIÓN DE REGRESIONES`
*   **Descripción:** Auditoría estricta de firmas de datos de la interfaz, validaciones semánticas e inmunización activa contra desvíos funcionales.
*   **Código/Esquema Técnico (Firma):**
```json
{
  "audit_mode": "STRICT_CONTRACT",
  "lint_targets": ["html", "js_esm", "css_variables"],
  "tolerance": 0.000
}
```

### Protocolo 04: SANDBOX_SECURITY (SENTINEL)
*   **Nombre de Protocolo:** `P-04 // SISTEMA INMUNOLÓGICO SENTINEL`
*   **Clasificación:** `RESTRINGIDO — ACCESO MILITAR`
*   **Descripción:** Aislamiento de ejecución de procesos inseguros, auditoría estática de vulnerabilidades e inmunización en tiempo real.
*   **Código/Esquema Técnico (Firma):**
```json
{
  "sandbox_type": "ISOLATED_THREAD",
  "encryption": "AES_256_GCM",
  "rls_active": true
}
```

### Protocolo 05: COMMUNICATION_ROUTER (HERMES)
*   **Nombre de Protocolo:** `P-05 // ENRUTADOR DE ESTADOS HERMES`
*   **Clasificación:** `OP_SYS — TELEMETRÍA DINÁMICA`
*   **Descripción:** Transmisión y enrutamiento en tiempo real de estados de telemetría, colas de eventos distribuidos de alta frecuencia y baja latencia.
*   **Código/Esquema Técnico (Firma):**
```json
{
  "transport": "gRPC_WEBSOCKET",
  "heartbeat_interval_ms": 600,
  "max_queue_depth": 50
}
```

---

## 🔍 3. Contratos de Comportamiento (Gherkin)

### HP-01: Renderizado del Repositorio de Líneas
```gherkin
DADO QUE el usuario accede a /protocols.html
ENTONCES el sistema lee y renderiza las 5 filas de protocolos definidos
Y oculta por defecto el pseudo-código JSON de detalle (height: 0, opacity: 0)
Y muestra las etiquetas de clasificación ("CRÍTICO", "MILITAR", etc.) en JetBrains Mono
Y aplica un divisor de 1px solid rgba(255, 255, 255, 0.05) entre cada fila.
```

### HP-02: Expansión Vertical Cinematográfica (Accordion Técnico)
```gherkin
DADO QUE el usuario hace clic sobre una fila de protocolo
ENTONCES el bloque de detalle se expande verticalmente
Y la transición es gobernada por el motor CHRONOS (GSAP):
  - Propiedades: height (de 0 a "auto"), opacity (de 0 a 1)
  - Duración: 500ms
  - Easing: "power4.out" (limpio, sin rebotes ni overshoot)
Y si hay otro protocolo abierto, este se cierra automáticamente de forma simultánea.
Y la flecha/indicador visual de la fila rota 90 grados para reflejar el estado abierto.
```

---

## 🛡️ 4. SAD PATHS (Sistema Inmunológico)

### SP-01 (Sin JavaScript / Fallback Semántico)
Si las restricciones de seguridad del navegador desactivan Javascript, o si la librería GSAP no carga a tiempo:
*   Las filas de protocolos deben mostrarse expandidas por defecto mediante estilos CSS nativos.
*   Se aplica un fallback CSS: `.protocol-content { height: auto; opacity: 1; }`.
*   El contenido técnico debe ser 100% legible de inmediato para asegurar accesibilidad universal (SEO friendly).

### SP-02 (Prevención de Interacciones Concurrentes)
Si el usuario hace clics ultra-rápidos y repetidos sobre múltiples filas a la vez:
*   El sistema debe interceptar los eventos y bloquear llamadas redundantes.
*   Se utiliza un validador en `protocols.js` que verifica si GSAP está animando una sección (`gsap.isTweening()`) antes de ejecutar la siguiente apertura o cierre, garantizando que no existan saltos ni lagunas visuales.

---

## ⚙️ 5. Criterios de Aceptación Técnica

1.  **Semántica HTML5:** Uso estricto de etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<article>`).
2.  **Integración de la Barra de Navegación:** El menú de navegación superior debe coincidir exactamente con el de la Consola e Index para permitir navegación fluida entre páginas (`index.html`, `console.html`, `protocols.html`).
3.  **Animaciones CSS / GSAP:** Solo se animarán propiedades controladas por GPU o calculadas de forma segura. El cierre y apertura del acordeón no causará saltos bruscos en el scroll de la página.
4.  **Carga e Integración de Scripts:** Cargar GSAP desde un CDN confiable de forma diferida (`defer` o importado en el ciclo de vida del módulo), con fallback local si es necesario.
