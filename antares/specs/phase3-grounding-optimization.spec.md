# 📐 ESPECIFICACIÓN: FASE 3 — Simplificación Comercial, Optimización de Rendimiento y Toma de Tierra
**Estado:** Propuesta de CEO para Aprobación por PO  
**Prioridad:** Crítica (Asegurar Retorno de Inversión y Viabilidad Comercial)  
**Destinatario:** Propietarios de PYMEs, Directores de Sistemas, Administradores de TI  

---

## 🎯 1. La Visión de Negocio: Adiós a la Sobreingeniería, Hola al Valor Real

El PO ha puesto sobre la mesa la verdad más fundamental de los negocios: **El cliente final (dueño de PYME o administrador de TI local) no compra "agentes autónomos", "Gherkin" ni "orquestación distribuida". El cliente compra soluciones concretas a sus problemas de negocio.**

### 🚨 El Diagnóstico
1. **Riesgo Económico (Token Drain):** Permitir interacciones dinámicas en vivo con modelos de IA por parte de visitantes anónimos es financieramente inviable y un vector de ataque.
2. **Abstracción Incomprensible:** Para el dueño de un negocio tradicional, conceptos como *"aislamiento de hilos de Sentinel"* o *"enrutamiento gRPC de Hermes"* suenan a ciencia ficción o sobreingeniería.
3. **La Propuesta de Valor Real de ANTARES:** 
   * "Construimos y optimizamos el software de tu empresa a una fracción del costo y el tiempo tradicional."
   * "Combinamos el poder de la automatización inteligente con la supervisión de ingenieros senior humanos para garantizar cero errores."

---

## 📝 2. Re-alineación de Textos y Mensajes (Toma de Tierra)

Revisaremos todos los textos del ecosistema para traducirlos de "jerga de laboratorio de IA" a "beneficio de negocio claro":

### 🔹 Landing Page (`index.html`)
* **De:** *"Orquestación Multi-Agente Autónoma y Sandbox Inmunizado"*
* **A:** *"Desarrollo de Software de Alto Rendimiento. Automatizado por IA, Certificado por Humanos Senior."*
* **De:** *"Motor de inferencia y reconciliación de AST en tiempo real."*
* **A:** *"Desarrollo ultra-veloz de plataformas web, sistemas internos y bases de datos con 0% de errores críticos."*

### 🔹 Repositorio de Protocolos (`protocols.html`)
* **De:** *"Firmas JSON de orquestación autónoma de agentes en entornos seguros."*
* **A:** *"Estándares de Trabajo: Cómo automatizamos tu desarrollo paso a paso bajo supervisión humana."*
* **Renombrar Roles Tácitos:**
  * **ATLAS (Implementador de Código):** *"Módulo de Construcción y Programación Rápida"*
  * **NYX (Atmósfera Visual):** *"Módulo de Diseño Visual Premium y Experiencia de Usuario"*
  * **ECHO (Auditor de Especificaciones):** *"Módulo de Control de Calidad y Pruebas Automatizadas"*
  * **SENTINEL (Guardián del Sandbox):** *"Módulo de Ciberseguridad y Protección de Datos"*
  * **HERMES (Enrutador de Protocolos):** *"Módulo de Integración y Conexiones de API"*

---

## ⚡ 3. Plan de Optimización y Rendimiento (Opción A)

Para asegurar una experiencia premium que cargue al instante incluso en conexiones móviles modestas de un dueño de negocio en movimiento:

### 🚀 Metas de Performance (Core Web Vitals)
* **LCP (Largest Contentful Paint):** < 1.0 segundos.
* **FID (First Input Delay):** < 50ms.
* **CLS (Cumulative Layout Shift):** 0.00 (Perfecto).
* **Tamaño del Bundle Inicial:** < 150KB (Gzipped).

### 🛠️ Acciones Técnicas
1. **Optimización de Imágenes (LCP):**
   * El banner `hero-ai.png` (de 1.2MB) debe ser optimizado y convertido a formato `.webp` de alta compresión (reduciéndolo a < 80KB) sin pérdida perceptible de calidad.
2. **Render-Blocking CSS/JS:**
   * Cargar de forma diferida (`defer`/`async`) los scripts no críticos de GSAP.
   * Consolidar las hojas de estilos y verificar que no existan selectores redundantes o ineficientes.
3. **Caché y Parámetros del Servidor (Vite):**
   * Configurar políticas de caché estática y pre-compresión para los archivos generados en la carpeta `dist`.

---

## 🔍 4. Criterios de Aceptación (Gherkin de Negocio)

```gherkin
ESCENARIO: Un cliente administrador de TI o dueño de negocio accede a ANTARES
Dado que el usuario no tiene conocimientos técnicos profundos sobre desarrollo de software
Cuando lee los títulos y descripciones de la landing page y protocolos
Entonces entiende con total claridad cómo ANTARES le ahorra dinero y tiempo
Y comprende que hay supervisión humana que garantiza que su software funcione.

ESCENARIO: Velocidad de Carga en Conexiones Móviles
Dado que un cliente potencial abre el sitio web en su smartphone en una red 4G
Cuando se calcula el Largest Contentful Paint (LCP)
Entonces el sitio es completamente interactivo en menos de 1.2 segundos
Y el scroll es suave (sin saltos visuales o retraso en animaciones).
```
