document.addEventListener('DOMContentLoaded', () => {
    // --- Framer-like Scroll Animations ---
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

    // --- Navigation ---
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.navbar-toggle');
    const overlay = document.querySelector('.nav-overlay');

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            const isOpen = navbar.classList.toggle('open');
            toggle.classList.toggle('active');
            toggle.setAttribute('aria-expanded', isOpen);
            document.body.classList.toggle('no-scroll', isOpen);
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            navbar.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        });
    }

    const closeBtn = document.querySelector('.nav-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            navbar.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        });
    });

    // --- Pricing Logic ---
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

    function selectPlan(card) {
        pricingCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        const btn = card.querySelector('.select-plan');
        if (btn) {
            const originalText = btn.textContent;
            btn.textContent = '¡Plan Seleccionado!';
            setTimeout(() => { btn.textContent = originalText; }, 2000);
        }
    }

    pricingCards.forEach(card => {
        card.addEventListener('click', () => selectPlan(card));
    });

    // --- FAQ Logic ---
    const faqContainer = document.getElementById('faq-container');
    const faqs = [
        { q: "¿Puedo escalar mi configuración en cualquier momento?", a: "Affirmative. La arquitectura supporting弹性 (flexibilidad) permite escalar recursos de ejecución sin migración. Los cambios se aplican de forma inmediata." },
        { q: "¿Ofrecen período de evaluación?", a: "Todos los protocolos incluyen 14 días de acceso completo al sistema de orquestación. Puedes validar rendimiento, latencia y capacidades de integración." },
        { q: "¿Qué métodos de integración son soportados?", a: "Soportamos REST API, GraphQL, Webhooks, gRPC y conectores nativos para los principales frameworks de automatización." },
        { q: "¿Hay compromisos de permanencia?", a: "La arquitectura está diseñada para operación libre. Sin contratos a largo plazo. Puedes terminate la operación en cualquier punto sin penalizaciones." }
    ];

    if (faqContainer) {
        faqs.forEach((faq, index) => {
            const item = document.createElement('div');
            item.className = 'faq-item reveal';
            item.style.transitionDelay = `${index * 0.1}s`;

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
                document.querySelectorAll('.faq-item').forEach(i => {
                    i.classList.remove('active');
                    i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                });
                if (!isActive) {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                }
            });

            faqContainer.appendChild(item);
            revealObserver.observe(item);
        });
    }
});