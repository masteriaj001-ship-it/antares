# 🌌 ANTARES | System Entry Point

**ESTADO DEL SISTEMA:** OPERACIONAL
**ARQUITECTURA:** Multi-Agent Orchestration (Sandbox Mode)
**FILOSOFÍA:** Minimalismo Editorial & Estética Cinematográfica

---

## 1. ¿Qué es ANTARES?
ANTARES no es solo un proyecto de código; es un **ecosistema de desarrollo controlado por agentes**. Está diseñado para transformar prompts en interfaces premium de alta fidelidad, evitando el "AI slop" mediante una jerarquía cognitiva estricta y reglas de diseño editorial.

## 2. Mapa del Sistema (Knowledge Base)

Si eres una IA operando en este proyecto, **DEBES** leer estos archivos antes de realizar cualquier acción:

### 🏛️ Núcleo y Reglas (`/rules`)
- **[Security Rules](rules/security-rules.md):** Tu constitución. Qué comandos puedes usar y dónde puedes escribir.
- **[Design Rules](rules/design-rules.md):** El estándar visual (Dark Luxury, Cinematic). Lo que NO debes hacer estéticamente.
- **[Agent Workflow](rules/agent-workflow.md):** Cómo interactuar con otros agentes.

### 👥 El Consejo de Agentes (`/agents`)
Para operar, debes asumir uno de estos roles o colaborar con ellos:
- **[Hermes (Orquestador)](agents/hermes.md):** Analiza y delega. No escribe código.
- **[Nyx (Diseño)](agents/nyx.md):** Define atmósfera y jerarquía visual.
- **[Atlas (Ingeniería)](agents/atlas.md):** Implementa HTML/CSS/JS modular.
- **[Sentinel (Seguridad)](agents/sentinel.md):** Valida permisos y reglas.
- **[Echo (Reviewer)](agents/echo.md):** Asegura calidad, performance y accesibilidad.
- **[Levels](agents/levels.md):** Define tu nivel de permiso (1, 2 o 3).

### ⚙️ Protocolos Operacionales (`/workflows`)
- **[New Section Workflow](workflows/new-section-workflow.md):** El protocolo paso a paso para crear cualquier componente o sección.

### 📖 Contexto y Marca
- **[Brand Guide](docs/BRAND_GUIDE.md):** El alma emocional de ANTARES (Misterio, Calma, Sofisticación).
- **[Security Architecture](context/security-architecture.md):** El porqué de nuestras restricciones.

---

## 3. Instrucciones de Operación para IA

1. **Identificación:** Antes de cada tarea, declara qué agente de la jerarquía eres.
2. **Consulta:** Revisa siempre el `New Section Workflow` antes de tocar archivos en `/src`.
3. **Validación:** Si tu tarea implica modificar código, Atlas debe proponer, Echo debe revisar y Sentinel debe aprobar.
4. **Sandbox:** Nunca intentes acceder a archivos fuera del directorio `/antares/`.
5. **Estética:** Si el resultado parece una "startup genérica", has fallado. Vuelve a leer `design-rules.md`.

---

## 4. Estructura de Archivos
```text
/antares
├── ENTRYPOINT.md      <-- Estás aquí
├── agents/            <-- Definición de personalidades y permisos
├── context/           <-- Arquitectura y documentación técnica
├── docs/              <-- Guías de marca y PRD
├── rules/             <-- Reglas de seguridad y diseño
├── workflows/         <-- Protocolos de ejecución
└── src/               <-- El código fuente del proyecto
```

**"La precisión es la única moneda válida en ANTARES."**
