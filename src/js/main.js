import { initMotionEngine } from './core/motion-engine.js';
import { initHeroReveal } from './animations/hero-reveal.js';
import { initNavbarMotion } from './animations/navbar-motion.js';
import { initTelemetry } from './core/telemetry.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize ANTARES Motion Engine
    initMotionEngine();
    initNavbarMotion();
    initHeroReveal();
    initTelemetry();

    // 2. Legacy Reveal System (Keep for Pricing/FAQ for now)
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.pricing .reveal, .faq .reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Navigation UI Logic migrated to navbar-motion.js

    // 4. Pricing Logic
    const pricingCards = document.querySelectorAll('.pricing-card');
    const toggleSwitch = document.querySelector('.toggle-switch');
    const billingLabels = document.querySelectorAll('.billing-label');
    const priceAmounts = document.querySelectorAll('.amount');

    if (toggleSwitch) {
        toggleSwitch.addEventListener('click', () => {
            const isAnnual = toggleSwitch.classList.toggle('annual');
            const currentBilling = isAnnual ? 'annual' : 'monthly';

            toggleSwitch.setAttribute('aria-pressed', isAnnual);

            billingLabels.forEach(label => {
                label.classList.toggle('active', label.dataset.billing === currentBilling);
            });

            priceAmounts.forEach(amount => {
                amount.style.opacity = '0';
                amount.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    amount.textContent = amount.dataset[currentBilling];
                    amount.style.opacity = '1';
                    amount.style.transform = 'translateY(0)';
                }, 200);
            });
        });
    }

    pricingCards.forEach(card => {
        card.addEventListener('click', () => {
            pricingCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
    });

    // 5. FAQ Logic
    const faqContainer = document.getElementById('faq-container');
    const faqs = [
        { q: "¿Puedo escalar mi configuración en cualquier momento?", a: "Affirmative. La arquitectura permite escalar recursos de ejecución sin migración. Los cambios se aplican de forma inmediata." },
        { q: "¿Ofrecen período de evaluación?", a: "Todos los protocolos incluyen 14 días de acceso completo al sistema de orquestación." },
        { q: "¿Qué métodos de integración son soportados?", a: "Soportamos REST API, GraphQL, Webhooks, gRPC y conectores nativos." },
        { q: "¿Hay compromisos de permanencia?", a: "La arquitectura está diseñada para operación libre. Sin contratos a largo plazo." }
    ];

    if (faqContainer) {
        faqs.forEach((faq, index) => {
            const item = document.createElement('div');
            item.className = 'faq-item reveal';
            
            item.innerHTML = `
                <button type="button" class="faq-question" aria-expanded="false">
                    <span>${faq.q}</span>
                    <span class="faq-icon" aria-hidden="true">↓</span>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-content">${faq.a}</div>
                </div>
            `;

            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });

            faqContainer.appendChild(item);
            revealObserver.observe(item);
        });
    }
});
