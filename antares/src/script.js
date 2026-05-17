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

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('open');
            toggle.classList.toggle('active');
            document.body.style.overflow = navbar.classList.contains('open') ? 'hidden' : '';
        });
    }

    // --- Pricing Logic ---
    const pricingCards = document.querySelectorAll('.pricing-card');
    const toggleSwitch = document.querySelector('.toggle-switch');
    const billingLabels = document.querySelectorAll('.billing-label');
    const priceAmounts = document.querySelectorAll('.amount');

    if (toggleSwitch) {
        toggleSwitch.addEventListener('click', () => {
            const isAnnual = toggleSwitch.classList.toggle('annual');
            const currentBilling = isAnnual ? 'annual' : 'monthly';

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
        { q: "¿Es posible cambiar de plan en cualquier momento?", a: "Absolutamente. Puedes elevar o ajustar tu suscripción en cualquier instante desde tu panel de control. Los cambios se reflejan de manera inmediata." },
        { q: "¿Cuentan con un período de cortesía?", a: "Deseamos que experimentes la excelencia de AURA sin compromisos. Por ello, todos nuestros planes incluyen 14 días de acceso premium total para que valides nuestra calidad." },
        { q: "¿Qué métodos de pago son aceptados?", a: "Para tu comodidad, aceptamos las principales tarjetas de crédito y débito internacionales, PayPal y soluciones seguras como Apple Pay." },
        { q: "¿Existen contratos de permanencia?", a: "En AURA creemos en la libertad. No existen contratos a largo plazo ni penalizaciones por cancelación." }
    ];

    if (faqContainer) {
        faqs.forEach((faq, index) => {
            const item = document.createElement('div');
            item.className = 'faq-item reveal';
            item.style.transitionDelay = `${index * 0.1}s`;
            
            item.innerHTML = `
                <button class="faq-question">
                    <span>${faq.q}</span>
                    <span class="faq-icon">↓</span>
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