# CSS Rules - ANTARES

## Core Principles
- **Mobile-first:** Siempre diseñar para dispositivos móviles primero y escalar con Media Queries.
- **Design Tokens:** Reutilizar variables definidas en `:root` para mantener la integridad del sistema.
- **Semantic Naming:** Usar nombres de clase que describan la función, no la apariencia (ej: `.nav-link` vs `.blue-text`).
- **Clean Composition:** Priorizar una estructura de estilos limpia y modular.
- **Visual Consistency:** Cualquier nuevo elemento debe alinearse con la estética "Editorial Tech Minimal".

## Technical Constraints
- **Variables CSS:** Uso obligatorio para colores, espaciado (`--space-*`) y radios.
- **Evitar !important:** Prohibido el uso de `!important` para mantener la especificidad bajo control.
- **No Redundancia:** Evitar duplicar declaraciones CSS; usar herencia y clases base.
- **Anti-Generic AI:** Evitar estilos "SaaS AI" genéricos (gradientes exagerados, glassmorphism excesivo, sombras de neón).
- **Modern Layout:** Priorizar CSS Grid y Flexbox.
- **Animaciones:** Usar exclusivamente `cubic-bezier(0.16, 1, 0.3, 1)` para transiciones cinemáticas.
