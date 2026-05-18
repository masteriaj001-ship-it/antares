# ESPECIFICACIÓN EDITORIAL: Copiloto de Textos y Nombres — Consola Operativa

## 1. Propósito
Este documento define el contenido, las etiquetas, los logs iniciales y la identidad de los agentes que deben poblar la **Consola Operativa ANTARES**. Los agentes de codificación (`opencode`) deben aplicar estas cadenas de texto de forma exacta en `console.html` y `src/console.js`.

---

## 🎛️ 2. Controles Generales (Header - console.html)

El header de telemetría debe reestructurarse levemente para incorporar las siguientes directrices y textos de grado militar:

| Elemento UI | ID / Selector HTML | Texto / Valor Exacto |
|---|---|---|
| Badge de Estado | `.system-label` | `SISTEMA: OPERACIONAL 🟢` |
| Título Consola | `.logo-mark + span` o H1 | `CONSOLA OPERATIVA ANTARES` |
| Subtítulo de Seguridad | `.telemetry-left` (debajo del título) | `SISTEMA DE TELEMETRÍA DE GRADO MILITAR — ACCESO RESTRINGIDO` |
| Botón de Pausa (Activo) | `#play-pause-btn` (activo) | `[ PAUSAR MONITOREO ]` |
| Botón de Pausa (Inactivo) | `#play-pause-btn` (pausado) | `[ REANUDAR SIMULACIÓN ]` |

---

## 📡 3. Terminal de Logs (Logger - src/console.js & console.html)

El logger operativo dinámico debe utilizar las siguientes configuraciones de texto:

*   **Cabecera de Terminal (`.panel-title`):** `REGISTRO DE OPERACIONES (MÁX. 50 LÍNEAS)`
*   **Log de Inicialización (Log Inicial 1):** `NÚCLEO EN LÍNEA: Inicializando orquestación de agentes...`
*   **Log de Inicialización 2 (Log Conexión):** `CONEXIÓN EXITOSA: Servidor Vite sirviendo en puerto activo.`

---

## 🧩 4. Matriz de Agentes (3x3 Matrix Grid - src/console.js)

Los 9 nodos del simulador se poblarán con las siguientes identidades, roles e inicializaciones. Las identidades no especificadas por el cliente se rellenan con roles operacionales coherentes con el ecosistema ANTARES:

| ID de Nodo | Nombre del Agente | Rol Operativo (Subtítulo) | Estado Inicial |
|---|---|---|---|
| `agt_01` | **ATLAS** | Implementador de Código | `active` |
| `agt_02` | **NYX** | Atmósfera Visual | `active` |
| `agt_03` | **ECHO** | Auditor de Especificaciones | `active` |
| `agt_04` | **SENTINEL** | Guardián del Sandbox | `idle` |
| `agt_05` | **HERMES** | Enrutador de Protocolos | `active` |
| `agt_06` | **CHRONOS** | Motor de Animación GSAP | `active` |
| `agt_07` | **HESTIA** | Gestor de Estado y Cache | `idle` |
| `agt_08` | **ARES** | Optimizador de LCP/GPU | `active` |
| `agt_09` | **ZEPHYR** | Controlador de FOUC/CSS | `error` |

*Nota: En la interfaz del Agent Grid, cada tarjeta de nodo debe mostrar el Nombre del Agente en H3/H2 y su respectivo Rol Operativo debajo para mantener la densidad de información.*

---

## 📊 5. Panel de Detalles (Detail Drawer - console.html & src/console.js)

Cuando un usuario hace clic en un agente de la matriz, el panel lateral derecho (`.agent-detail-panel`) debe poblarse utilizando las siguientes etiquetas formales:

*   **Cabecera del Drawer (`.detail-title`):** `// DETALLES DEL AGENTE SELECCIONADO`
*   **Métrica de Capacidad:** `CAPACIDAD DEL BUFFER:` (Muestra el porcentaje con barra de progreso CSS).
*   **Métrica de Latencia:** `LATENCIA DE RESPUESTA:` (Muestra la variación dinámica en `ms`).
*   **Métrica de Estatus:** `ESTADO DE EJECUCIÓN:` (Muestra `● ACTIVO`, `● INACTIVO` o `● FALLO`).
