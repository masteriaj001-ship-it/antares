# JavaScript Rules - ANTARES

## Core Principles
- **Vanilla JavaScript:** Uso exclusivo de JS nativo. Sin frameworks ni librerías pesadas.
- **Modularity:** Mantener el código organizado en bloques lógicos y legibles.
- **Clarity over Complexity:** Priorizar soluciones simples y directas sobre arquitecturas sobre-ingenierizadas.
- **Readable Code:** El código debe ser fácil de seguir y entender por humanos y otros agentes.

## Technical Constraints
- **Small Functions:** Mantener funciones pequeñas con una única responsabilidad.
- **No Unnecessary Code:** Evitar el "dead code" o lógica que no aporta valor directo a la funcionalidad.
- **No Duplicate Logic:** Abstraer comportamientos repetitivos en funciones reutilizables.
- **Vanilla ES6+:** Aprovechar las capacidades modernas del lenguaje (Destructuring, Arrow functions, Template literals).
- **DOM Protection:** Siempre verificar la existencia de elementos antes de operar sobre ellos.
- **Performance:** Usar `IntersectionObserver` para animaciones y evitar listeners pesados en el evento `scroll`.
