/* ==========================================================================
   ANTARES FAQ ACCORDION ENGINE
   ========================================================================== */

const faqData = [
    {
        q: "¿Puedo escalar mi configuración en cualquier momento?",
        a: "Affirmative. La arquitectura soporta elasticidad y permite escalar recursos sin migración. Los cambios se aplican de forma inmediata."
    },
    {
        q: "¿Ofrecen período de evaluación?",
        a: "Todos los protocolos incluyen 14 días de acceso completo. Puedes validar rendimiento, latencia y capacidades de integración."
    },
    {
        q: "¿Qué métodos de integración son soportados?",
        a: "REST API, GraphQL, Webhooks, gRPC y conectores nativos para los principales frameworks de automatización."
    },
    {
        q: "¿Puedo cancelar mi suscripción?",
        a: "Puedes cancelar en cualquier momento desde tu panel de control. Tu acceso continuará hasta el final del período pagado. No hay contratos a largo plazo ni penalizaciones."
    },
    {
        q: "¿El plan Enterprise incluye soporte dedicado?",
        a: "Sí, el plan Enterprise incluye un Customer Success Manager asignado, soporte prioritario 24/7 por chat, email y teléfono, además de sesiones de onboarding personalizadas para tu equipo."
    },
    {
        q: "¿Los precios incluyen impuestos?",
        a: "Los precios mostrados no incluyen impuestos locales. El IVA u otros impuestos aplicables se calcularán automáticamente durante el checkout según tu país de residencia."
    }
];

export const initFaq = () => {
    const faqContainer = document.getElementById('faq-container');

    // SP-03: Protection - Container does not exist
    if (!faqContainer) {
        console.warn('ANTARES FAQ: #faq-container not found in the DOM.');
        return;
    }

    // Clear placeholder content
    faqContainer.innerHTML = '';

    // Track transitioning state to prevent spam clicks (SP-02)
    let isTransitioning = false;

    // HP-01: Dynamically render each FAQ item
    faqData.forEach((itemData, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'faq-item';

        // 1. Create Button (Accessibility compliant - RB-05)
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'faq-question';
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', `faq-answer-${index}`);

        // Question text
        const questionSpan = document.createElement('span');
        questionSpan.textContent = itemData.q;
        button.appendChild(questionSpan);

        // Arrow Icon (Unicode character ▼)
        const arrowSpan = document.createElement('span');
        arrowSpan.className = 'faq-icon faq-icon-arrow';
        arrowSpan.textContent = '▼';
        button.appendChild(arrowSpan);

        itemEl.appendChild(button);

        // 2. Create Answer Panel
        const answerEl = document.createElement('div');
        answerEl.id = `faq-answer-${index}`;
        answerEl.className = 'faq-answer';

        const contentEl = document.createElement('div');
        contentEl.className = 'faq-answer-content';

        const textEl = document.createElement('p');
        textEl.textContent = itemData.a;
        contentEl.appendChild(textEl);

        answerEl.appendChild(contentEl);
        itemEl.appendChild(answerEl);

        // 3. Click handler for accordion state toggle (HP-03, HP-04, SP-02)
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // Click Spam protection
            if (isTransitioning) return;

            const isActive = itemEl.classList.contains('active');

            // Lock transitions briefly to ensure consistency
            isTransitioning = true;
            setTimeout(() => {
                isTransitioning = false;
            }, 300); // Coincide con la duración del fade/rotación

            // Close all items first (HP-03 - Solo un item abierto a la vez)
            const allItems = faqContainer.querySelectorAll('.faq-item');
            allItems.forEach(el => {
                if (el !== itemEl) {
                    el.classList.remove('active');
                    const otherBtn = el.querySelector('.faq-question');
                    if (otherBtn) {
                        otherBtn.setAttribute('aria-expanded', 'false');
                    }
                }
            });

            // Toggle clicked item
            if (isActive) {
                itemEl.classList.remove('active');
                button.setAttribute('aria-expanded', 'false');
            } else {
                itemEl.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
            }
        });

        faqContainer.appendChild(itemEl);
    });

    // Add interactive class to activate CSS rules (SP-01 fallback separation)
    faqContainer.classList.add('faq-interactive');
};
