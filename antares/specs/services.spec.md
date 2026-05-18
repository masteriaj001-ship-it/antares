# SPEC: Services (Verticales de Operación)
> Basada en el código real de: `index.html` + `src/styles/components/features.css`
> Versión: 2.0 — Mayo 2026 (Diseño Industrial Rígido de Servicios)

## Identidad del componente
Módulo modular rígido que presenta las cuatro verticales estratégicas y de ingeniería de ANTARES. Su diseño rechaza cualquier tipo de estética comercial genérica o "tipo SaaS blando". En su lugar, adopta un layout de grilla industrial, totalmente plano (`border-radius: 0`), delimitado por finas divisiones de `1px` y textos obligatorios verbatim del PRD.

---

## Comportamiento esperado (Happy Path)

### HP-01: Renderizado de la Cuadrícula Industrial
```gherkin
DADO QUE el usuario navega hacia la sección de servicios (#ingenieria)
CUANDO la sección entra en el viewport
ENTONCES se renderiza un contenedor grid de 2x2 en desktop (≥768px) y de 1 columna en mobile
Y cada tarjeta de servicio tiene bordes rígidos rectos (border-radius: 0)
Y las tarjetas se dividen mediante un color de borde táctico rgba(255, 255, 255, 0.05)
Y el fondo de las tarjetas es carbono profundo #080809
```

### HP-02: Elementos de Identificación y Densidad Técnica
```gherkin
DADO QUE una tarjeta de servicio está renderizada en pantalla
CUANDO el usuario inspecciona su cabecera
ENTONCES visualiza un micro-indicador brutalista con el identificador (ej. [ DIV_01 ]) en fuente monospace y oro titanio #C5A880
Y debajo se muestra el título oficial en tipografía Syncopate
Y el cuerpo de la tarjeta contiene la descripción seguida por un bloque titled [ INFORMACIÓN TÉCNICA OBLIGATORIA ]
Y el bloque de información técnica usa JetBrains Mono en 11px con el estado PROTOCOL_STATE: ACTIVO 🟢
```

### HP-03: Interacción de Hover Quirúrgica
```gherkin
DADO QUE el puntero se posiciona sobre una tarjeta de servicio
CUANDO el usuario realiza hover sobre ella
ENTONCES el borde cambia de rgba(255, 255, 255, 0.05) a rgba(197, 168, 128, 0.4) en 200ms
Y el micro-indicador [ DIV_XX ] realiza una traslación horizontal de +4px
Y el fondo mantiene su estado plano #080809
```

---

## Reglas de negocio (RB-01: Textos Verbatim)

### DIV_01 — INGENIERÍA DE SOFTWARE Y APLICACIONES WEB
| Campo | Valor |
|-------|-------|
| Identificador | `[ DIV_01 ]` |
| Descripción | Construcción de interfaces a medida y plataformas web de alto rendimiento. |
| CORE_STACK | VANILLA_JS + VITE |
| CODEBASE | NATIVO / CERO_DEPENDENCIAS_REDUNDANTES |
| PERFORMANCE | ACELERACIÓN_GPU_60FPS |
| PROTOCOL_STATE | ACTIVO 🟢 |

### DIV_02 — ARQUITECTURA DE AUTOMATIZACIÓN Y SISTEMAS AUTÓNOMOS
| Campo | Valor |
|-------|-------|
| Identificador | `[ DIV_02 ]` |
| Descripción | Eliminación de fricción operativa mediante el diseño de flujos de trabajo inteligentes. |
| DEPLOYMENT | PIPELINES_DOCKER + API_ORCHESTRATION |
| INTEGRATION | CADENAS_PROCESAMIENTO_LLM |
| OPERATIONAL_KPI | 0%_MANUAL_LATENCY |
| PROTOCOL_STATE | ACTIVO 🟢 |

### DIV_03 — CONSULTORÍA TECNOLÓGICA Y MITIGACIÓN DE RIESGOS
| Campo | Valor |
|-------|-------|
| Identificador | `[ DIV_03 ]` |
| Descripción | Diagnóstico estructural de ecosistemas digitales existentes. |
| AUDIT_METHODS | CORE_WEB_VITALS + FOUC_DETECTION |
| RISK_VALUATION | TECHNICAL_DEBT_METRICS |
| ROADMAPS | SPECIFICATION_DRIVEN_DEVELOPMENT_PRD |
| PROTOCOL_STATE | ACTIVO 🟢 |

### DIV_04 — SUMINISTRO DE INFRAESTRUCTURA Y LICENCIAMIENTO
| Campo | Valor |
|-------|-------|
| Identificador | `[ DIV_04 ]` |
| Descripción | Provisión técnica de recursos lógicos y físicos para la continuidad empresarial. |
| INFRA_PROVISION | DEDICATED_SERVERS + LOCAL_DEV_ENV |
| MANAGEMENT | LICENSING_COMPLIANCE |
| AVAILABILITY | REDUNDANCY_LEVEL_99.99% |
| PROTOCOL_STATE | ACTIVO 🟢 |

---

## RB-02: Restricciones de Estilo UI

| Propiedad | Valor |
|-----------|-------|
| border-radius | 0 (rigurosamente rectangular) |
| Grosor bordes | 1px |
| Fondo tarjetas | #080809 (carbono profundo) |
| Bordes normales | rgba(255, 255, 255, 0.05) |
| Bordes hover | rgba(197, 168, 128, 0.4) |
| Textos principales | #e9e8e9 |
| Micro-indicadores | #C5A880 (Titanium Gold) |
| Textos muted | #c7c6b5 |

### Tipografías
| Elemento | Tipografía | Tamaño |
|----------|------------|--------|
| Identificadores [ DIV_XX ] | JetBrains Mono | 10px |
| Títulos | Syncopate | 1rem |
| Descripciones | Inter | 0.9375rem |
| Info técnica | JetBrains Mono | 11px |