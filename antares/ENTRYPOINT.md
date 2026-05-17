# 🌌 ANTARES | System Entry Point & Agent Playbook

**ESTADO DEL SISTEMA:** OPERACIONAL 🟢
**ARQUITECTURA:** Spec-Driven Development (SDD) & Multi-Agent Orchestration
**FILOSOFÍA:** Minimalismo Editorial, Estética Cinematográfica y Cero Acumulación Visual (Anti-Overdesign)

---

## 1. ¿Qué es ANTARES?
ANTARES es un **ecosistema de desarrollo y diseño gobernado por contratos**. Para evitar el desvío visual ("AI drift"), la inconsistencia tipográfica y el código redundante ("AI slop"), todo el desarrollo se realiza en base a especificaciones funcionales y de contenido estrictamente declaradas antes de programar.

---

## 2. Jerarquía y Prioridad de la Verdad (System Priority Order)
Si existe alguna contradicción entre las directrices del proyecto, se debe respetar este orden de prioridad absoluto:

1. 📄 **`antares/specs/*.spec.md` (Especificaciones Funcionales):** Definen el comportamiento esperado, Happy Paths, Sad Paths y las reglas de negocio exactas. Es la máxima ley del código.
2. 🛡️ **`antares/rules/` (Reglas de Diseño y Seguridad):** Restricciones técnicas invariables (Mobile-first, restricciones avanzadas de movimiento de GSAP, anti-overdesign).
3. 🎨 **`antares/docs/DESIGN_SYSTEM.md`:** La paleta cromática, tokens de espaciado y escala tipográfica de marca.
4. ✍️ **`antares/docs/CONTENT.md`:** El copy y textos oficiales que deben renderizarse. Ningún texto debe hardcodearse fuera de aquí.
5. 📖 **`antares/docs/PRD.md` & `BRAND_GUIDE.md`:** Objetivos estratégicos y el alma tonal del sitio.
6. 🖼️ **`antares/inspiration/`:** Referencias visuales externas (Dribbble, Pinterest, Stitch). Son guías estéticas, **nunca** fuentes de verdad técnica.

---

## 3. Estructura del Ecosistema
```text
/antares
├── ENTRYPOINT.md              <-- Estás aquí (Guía global)
│
├── /specs/                    <-- CONTRATOS DE COMPONENTES (Gherkin)
│   ├── navbar.spec.md
│   └── hero.spec.md
│
├── /docs/                     <-- ESTRATEGIA Y CONTENIDO
│   ├── PRD.md                 <-- Requisitos de producto
│   ├── BRAND_GUIDE.md         <-- Identidad visual
│   ├── DESIGN_SYSTEM.md       <-- Tokens de CSS, tipografía y colores
│   └── CONTENT.md             <-- Textos reales y copy oficial (Cero hardcoding)
│
├── /rules/                    <-- SISTEMA INMUNOLÓGICO (Leyes)
│   ├── css-rules.md           <-- Reglas de CSS nativo
│   ├── javascript-rules.md    <-- Reglas de modularidad JS
│   ├── motion-constraints.md  <-- Restricciones GSAP/CSS (Anti-Overdesign)
│   └── security-rules.md      <-- Permisos del sistema sandbox
│
├── /agents/                   <-- ROLES OPERACIONALES (IA & Humanos)
│   ├── spec-definer.md        <-- Traduce diseño y PRD en Specs y Gherkin
│   ├── atlas.md               <-- Implementa el código físico (Ingeniería)
│   ├── echo.md                <-- Audita y verifica el código contra las Specs
│   └── sentinel.md            <-- Control de seguridad y políticas
│
└── /src/                      <-- CÓDIGO FUENTE ACTIVO
```

---

## 4. El Consejo de Agentes y sus Roles

Para operar en este proyecto, tú (humano o IA) debes asumir o colaborar con los siguientes roles:
* 🎯 **Spec Definer (El Redactor):** Lee el PRD, las referencias visuales de `/inspiration/` y redacta la spec en Gherkin (`/specs/*.spec.md`) antes de codificar.
* 🛠️ **Atlas (El Implementador):** Traduce las especificaciones y el copy de `CONTENT.md` en código HTML/CSS/JS de producción. **Atlas no improvisa ni inventa lógica.**
* 🔍 **Echo (El Auditor):** El revisor implacable. Prueba el sitio escenario por escenario contra la especificación en Gherkin. Si un Happy Path o Sad Path falla, devuelve el código.
* 🛡️ **Sentinel (El Guardián):** Audita la seguridad, rendimiento y adherencia a las políticas del sandbox.

---

## 5. Playbook de Operación (Paso a Paso)

### ¿Cómo crear una nueva sección o componente en ANTARES?

1. **Fase de Contrato (Copy & Spec):**
   * Añade el texto oficial y etiquetas de la nueva sección a [antares/docs/CONTENT.md](file:///home/jaosoft/landing-page-ia/antares/docs/CONTENT.md).
   * Escribe la especificación de comportamiento en `/antares/specs/[seccion].spec.md` usando formato Gherkin (Happy Paths, Sad Paths y Reglas de Negocio).
2. **Fase de Codificación (Atlas):**
   * Escribe el código HTML semántico, CSS responsivo y modular, y JS nativo en `/src`.
   * Todo el CSS debe usar los tokens de `DESIGN_SYSTEM.md`.
   * El JS debe implementar las protecciones para los **Sad Paths** declarados (ej. protección contra doble clic rápido, fallback si no hay JS, control de resize).
3. **Fase de Auditoría (Echo):**
   * Valida que se cumplan al 100% las especificaciones.
   * Realiza un build de producción (`npm run build`) para verificar la compilación limpia de Vite.
4. **Fase de Guardado (Git):**
   * Realiza commits semánticos y limpios para mantener el control de versiones local e internacionalmente.

---

## 🚫 Reglas de Oro Visuales (Anti-Overdesign Constraints)
* **Animaciones:** Toda animación debe durar entre `200ms` y `300ms` con `ease-out` (para UI interactiva) y hasta `1200ms` con `power4.out` para reveals iniciales. **Prohibidos** los efectos de rebote, elasticidad, floats infinitos o mouse followers que rompan la sobriedad editorial.
* **Layouts:** Simetría asimétrica controlada, gran uso de espacio negativo (mínimo 40% en secciones principales) y tipografías ultra-anchas (`Syncopate` para headers) versus limpias (`Inter` para cuerpos de texto).
* **Rendimiento:** LCP objetivo inferior a `1.5s`. Cero dependencias externas.

---

*"La precisión técnica es nuestra estética. El orden de nuestros contratos es nuestra fuerza."*
