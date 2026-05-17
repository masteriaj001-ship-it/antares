import { initMotionEngine } from './core/motion-engine.js';
import { initHeroReveal } from './animations/hero-reveal.js';
import { initNavbarMotion } from './animations/navbar-motion.js';
import { initTelemetry } from './core/telemetry.js';
import { initFaq } from './faq.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize ANTARES Motion Engine
    initMotionEngine();
    initNavbarMotion();
    initHeroReveal();
    initTelemetry();
    initFaq();

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

    document.querySelectorAll('.reveal, .stagger-reveal').forEach(el => {
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

    // 5. FAQ Accordion dynamic engine loaded modularly from faq.js

});
