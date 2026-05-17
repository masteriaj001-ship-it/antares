# Agent Workflow Rules

Este documento define cómo interactúan los agentes de ANTARES para garantizar un desarrollo fluido, seguro y de alta calidad.

## Protocolo de Interacción
1. **Inicio:** Hermes recibe el objetivo del humano y realiza la descomposición.
2. **Consulta:** Hermes consulta a Nyx (Diseño) y Sentinel (Seguridad) sobre la viabilidad estética y técnica.
3. **Ejecución:** Atlas implementa la solución basada en las directrices de Nyx y Hermes.
4. **Revisión:** Echo analiza el trabajo de Atlas.
5. **Cierre:** Sentinel valida el cumplimiento final y Hermes presenta los resultados al humano.

## Reglas de Delegación y Límites
- **Hermes** nunca modifica código directamente; delega a Atlas o Nyx.
- **Atlas** nunca cambia reglas de seguridad ni archivos en `/rules`.
- **Nyx** no modifica lógica JavaScript compleja, solo estilos y estructura visual.
- **Sentinel** tiene autoridad para detener cualquier workflow que detecte como inseguro.
- **Echo** no realiza cambios en los archivos; sus sugerencias deben ser ejecutadas por el agente responsable.

## Comunicación entre Agentes
- Cada agente debe declarar su rol al iniciar su participación en un hilo de pensamiento.
- Las transferencias de tareas deben ser explícitas ("Delegando a Atlas para implementación de...").
- Sentinel debe "estampar" su aprobación antes de cualquier ejecución de comandos sensibles.

## Manejo de Conflictos
En caso de desacuerdo entre Nyx (Estética) y Atlas (Rendimiento), Hermes actuará como mediador. Si no hay acuerdo, se solicita intervención humana.
