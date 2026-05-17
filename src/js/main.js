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

    // 4. Pricing Logic (Premium V2)
    const pricingCards = document.querySelectorAll('.pricing-card');
    const toggleButtons = document.querySelectorAll('.pricing-toggle-btn');
    const priceAmounts = document.querySelectorAll('.pricing-amount');
    let currentBilling = 'monthly';
    let isTransitioning = false;

    if (toggleButtons.length > 0) {
        toggleButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                if (isTransitioning) return;
                isTransitioning = true;
                setTimeout(() => { isTransitioning = false; }, 250);

                const newBilling = btn.dataset.billing;
                if (newBilling === currentBilling) return;
                
                currentBilling = newBilling;

                toggleButtons.forEach(b => {
                    b.classList.toggle('active', b.dataset.billing === currentBilling);
                });

                priceAmounts.forEach(amount => {
                    amount.classList.add('changing');
                    setTimeout(() => {
                        amount.textContent = amount.dataset[currentBilling];
                        amount.classList.remove('changing');
                        amount.classList.add('visible');
                        setTimeout(() => {
                            amount.classList.remove('visible');
                        }, 150);
                    }, 150);
                });
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
