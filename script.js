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

    // --- Navigation (Implementación de navbar.spec.md v1.0) ---
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.navbar-toggle');
    const overlay = document.querySelector('.nav-overlay');
    let isMenuAnimating = false; // SP-01: Flag para prevenir spam de clics

    const closeMobileMenu = () => {
        if (!navbar) return;
        navbar.classList.remove('open');
        if (toggle) {
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Abrir menú');
        }
        document.body.classList.remove('no-scroll');
    };

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            // SP-01: Protección contra doble clic rápido
            if (isMenuAnimating) return;
            isMenuAnimating = true;

            const isOpen = navbar.classList.toggle('open');
            toggle.classList.toggle('active');
            
            // RB-05 & HP-05: Actualizar atributos de accesibilidad
            toggle.setAttribute('aria-expanded', isOpen);
            toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
            document.body.classList.toggle('no-scroll', isOpen);

            // Bloquear clics durante la animación del drawer (600ms de transición CSS)
            setTimeout(() => {
                isMenuAnimating = false;
            }, 600);
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            if (isMenuAnimating) return;
            closeMobileMenu();
        });
    }

    const closeBtn = document.querySelector('.nav-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeMobileMenu();
        });
    }

    // HP-07: Comportamiento scrolled con opacidad y borde
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // SP-02: Cerrar menú mobile en redimensionamiento de pantalla (≥ 768px)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && navbar && navbar.classList.contains('open')) {
            closeMobileMenu();
        }
    }, { passive: true });

    // Cerrar menú mobile al hacer clic en enlaces
    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
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