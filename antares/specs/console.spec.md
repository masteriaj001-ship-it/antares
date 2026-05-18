# ESPECIFICACIÓN TÉCNICA: Operational Console | console.html

## 1. Contexto
La **Operational Console (Dashboard)** es el centro interactivo premium del ecosistema ANTARES. Es una interfaz de una sola página (`console.html`) diseñada con un enfoque de "Simplicidad Densa": tres paneles principales simétricos que orquestan datos simulados en tiempo real, latencias y telemetría de red, proporcionando una experiencia táctica de grado militar.

---

## 📐 2. Happy Paths (Casos de Éxito)

### HP-01: Layout de Paneles Tácticos (Desktop ≥ 1024px)
```gherkin
DADO QUE el usuario accede a "console.html" en Desktop (≥ 1024px)
ENTONCES la pantalla se divide con la siguiente estructura de rejilla:
  - Sidebar Offset: Margen izquierdo fijo de 64px (`var(--sidebar-width-desktop)`)
  - Contenedor Principal: 100% de alto de pantalla (`100vh`), ancho de `calc(100% - 64px)`
Y contiene tres secciones perfectamente justificadas en Grid:
  1. PANEL SUPERIOR (Telemetry Header): Altura fija de 60px, borde inferior de cristal sutil.
  2. PANEL CENTRAL (Workspace Grid): Dividido en dos columnas (1.2fr / 1fr):
     - Columna Izquierda (Network Canvas & Agent Grid): Matriz de 3x3 de nodos de agentes + SVG de conexiones de red.
     - Columna Derecha (Live Operational Logger): Terminal simulada que escupe flujos de logs operacionales.
```

### HP-02: Telemetría Dinámica en Tiempo Real (Telemetry Stream)
```gherkin
DADO QUE la Consola está cargada y en estado activo
CUANDO inicia el temporizador de simulación
ENTONCES el sistema calcula dinámicamente y actualiza los indicadores en el Header:
  - LATENCY: Valor entre 0.00025ms y 0.00085ms (variación aleatoria cada 600ms, renderizado en JetBrains Mono).
  - CPU LOAD: Gráfico sutil de barras horizontales CSS fluctuando entre 12% y 48%.
  - ACTIVE AGENTS: Contador digital "03 / 09" con luz pulsante verde.
```

### HP-03: Simulador del Logger Operativo (Simulated Live Terminal)
```gherkin
DADO QUE el Panel de Logger está activo
CUANDO transcurre un intervalo aleatorio entre 800ms y 1800ms
ENTONCES se añade una línea de log estructurada al final de la terminal:
  - Formato: `[HH:MM:SS.mmm] [STATUS] PROTOCOL_ACTION_MESSAGE`
Y la terminal hace scroll automático suave hacia el fondo (`scrollTop = scrollHeight`).
Y el número de líneas está acotado a un máximo de 50 para evitar pérdidas de memoria (Memory Leaks), eliminando la línea superior cuando se excede el límite.
```

### HP-04: Control de Simulación (Pause/Play State)
```gherkin
DADO QUE la simulación de logs y telemetría está activa
CUANDO el usuario hace click en el botón de control "PAUSE (॥)" en el header
ENTONCES la simulación se detiene inmediatamente:
  - Se congelan los logs dinámicos.
  - Se apagan los indicadores pulsantes.
  - El botón cambia de icono a "PLAY (▶)".
Y al hacer click nuevamente en "PLAY (▶)", la simulación se reanuda desde el estado actual.
```

### HP-05: Interacción Táctil de Agentes (Agent Node Click)
```gherkin
DADO QUE el usuario ve la matriz de nodos de agentes
CUANDO hace click sobre un nodo individual
ENTONCES el nodo añade la clase `.selected` con transición de borde índigo acelerada por GPU.
Y el panel lateral de detalles de telemetría (detalles del agente) se desliza revelando metadatos específicos del nodo seleccionado (Consumo, Rendimiento, Hilos activos).
```

---

## 🛡️ 3. Sad Paths (Casos de Falla)

### SP-01: Navegador sin JavaScript (No-JS Fallback)
```gherkin
DADO QUE el navegador tiene JavaScript deshabilitado
CUANDO el usuario visita la consola
ENTONCES la interfaz renderiza de forma estática:
  - Logger muestra el mensaje: "[OFFLINE] OPERATIONAL LOG STREAM SUSPENDED. REQUIRES JS_CORE."
  - Los indicadores muestran "--.---- MS" y estatus de agentes "INACTIVE".
  - Se despliega un aviso de advertencia no invasivo al pie de la terminal.
```

### SP-02: Desbordamiento del Logger (Log Flood Prevention)
```gherkin
DADO QUE la simulación genera múltiples eventos simultáneos
CUANDO se intenta insertar una ráfaga de logs en menos de 100ms
ENTONCES el sistema filtra los eventos mediante un mecanismo de Debounce, agrupando logs similares en una sola línea `[STATUS] MULTIPLE_AGENTS_SYNCED (x4)`.
```

---

## 📋 4. Contratos de Datos & Firmas (Data Interfaces)

Para blindar la implementación contra el *agent drift*, los scripts del frontend de la consola deben estructurarse de manera rígida bajo las siguientes interfaces e inicializadores de objetos en JavaScript:

### 4.1 Firma de Estado del Agente (`AgentState`)
```typescript
interface Agent {
  id: string;          // Formato: 'agt_01', 'agt_02', ...
  name: string;        // Nombre legible (ej. 'Protocol Orchestrator')
  status: 'active' | 'idle' | 'error';
  latency: number;     // En milisegundos
  threads: number;     // Hilos de ejecución (1 a 8)
  memory: number;      // Porcentaje de memoria utilizada (0.00 - 1.00)
}
```

### 4.2 Esquema del Stream de Logs (`LogMessage`)
```typescript
interface LogMessage {
  timestamp: string;   // Formato 'HH:MM:SS.mmm'
  category: 'system' | 'agent' | 'security' | 'network';
  level: 'info' | 'success' | 'warn' | 'error';
  message: string;     // Detalle operacional
}
```

### 4.3 Firma del Orquestador de Simulación (`ConsoleController`)
Toda la lógica de la consola debe ser encapsulada en una clase controladora única expuesta al objeto global `window.AntaresConsole`:

```javascript
class AntaresConsoleController {
  constructor(config) {
    this.isActive = true;
    this.agents = [];
    this.maxLogs = 50;
    this.intervalId = null;
  }
  
  initialize() {}     // Carga inicial y binding de eventos del DOM
  startStream() {}    // Dispara el loop de simulación (setInterval)
  stopStream() {}     // Pausa el loop de simulación
  updateTelemetry() {}// Actualiza los elementos del DOM del header
  pushLog(log) {}     // Inserta un nuevo log en el DOM de forma segura
  selectAgent(id) {}  // Gestiona el estado de nodo seleccionado
}
```
---

## 🚀 5. Restricciones Técnicas UI/UX

*   **Fondo General:** Fijo `--bg-primary` (`#0A0A0F`).
*   **Bordes de Cajas:** `1px solid var(--border-glass)` (`rgba(255,255,255,0.08)`).
*   **Acento Activo:** `--accent-indigo` (`#6366F1`) para hovers y selecciones.
*   **Tipografía de Datos:** `JetBrains Mono` en terminal, telemetría e inputs.
*   **Animación Máxima:** Solo transiciones de `opacity` y `transform: translate3d()/scale()` aplicadas a `.card` y `.node`.
