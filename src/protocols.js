document.addEventListener('DOMContentLoaded', () => {
    // Initialize Navigation Controls
    initNavbar();

    // Initialize Protocols Accordion
    initProtocolsAccordion();

    // Subtle Glitch on Telemetry Header
    triggerTelemetryGlitch();
});

/**
 * Responsive Mobile Navbar Hamburger Controller
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const toggleBtn = document.querySelector('.navbar-toggle');
    const overlay = document.querySelector('.nav-overlay');

    if (!toggleBtn || !navbar) return;

    // Toggle menu
    toggleBtn.addEventListener('click', () => {
        const isOpen = navbar.classList.contains('open');
        if (isOpen) {
            navbar.classList.remove('open');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.classList.remove('active');
        } else {
            navbar.classList.add('open');
            toggleBtn.setAttribute('aria-expanded', 'true');
            toggleBtn.classList.add('active');
        }
    });

    // Close menu when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', () => {
            navbar.classList.remove('open');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.classList.remove('active');
        });
    }

    // Handle scroll scroll-hide status
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add .scrolled style when scrolled past 10px
        if (currentScrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Auto-hide navbar on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        lastScrollY = currentScrollY;
    });
}

/**
 * Editorial Accordion Logic governed by GSAP (Chronos Engine)
 */
function initProtocolsAccordion() {
    const rows = document.querySelectorAll('.protocol-row');
    
    rows.forEach(row => {
        const header = row.querySelector('.protocol-header');
        const content = row.querySelector('.protocol-content');
        
        if (!header || !content) return;

        // Progressive Enhancement: Collapse them dynamically on load so they are hidden with JS enabled
        gsap.set(content, { height: 0, opacity: 0 });

        // Add Click listener
        header.addEventListener('click', (e) => {
            // SP-02: Prevención de Interacciones Concurrentes
            // Si el bloque está en medio de una animación de GSAP, ignoramos el clic para evitar colisiones visuales
            if (gsap.isTweening(content)) return;

            const isActive = row.classList.contains('active');

            if (isActive) {
                // Collapse clicked protocol row
                collapseRow(row, content);
            } else {
                // Collapse any other open protocol rows first
                rows.forEach(otherRow => {
                    if (otherRow !== row && otherRow.classList.contains('active')) {
                        const otherContent = otherRow.querySelector('.protocol-content');
                        collapseRow(otherRow, otherContent);
                    }
                });

                // Expand targeted protocol row
                expandRow(row, content);
            }
        });
    });
}

/**
 * GSAP Collapse Animation (500ms duration, power4.out Easing, no bounce)
 */
function collapseRow(row, content) {
    if (!content) return;

    row.classList.remove('active');
    
    gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power4.out',
        overwrite: 'auto'
    });
}

/**
 * GSAP Expand Animation (500ms duration, power4.out Easing, no bounce)
 */
function expandRow(row, content) {
    if (!content) return;

    row.classList.add('active');

    // Force rendering/layout pass by measuring actual height
    gsap.set(content, { height: 'auto' });
    const targetHeight = content.offsetHeight;
    gsap.set(content, { height: 0 }); // reset to 0 to animate it

    gsap.to(content, {
        height: targetHeight,
        opacity: 1,
        duration: 0.5,
        ease: 'power4.out',
        overwrite: 'auto'
    });
}

/**
 * Dynamic glitch Telemetry Indicator decoration
 */
function triggerTelemetryGlitch() {
    const counter = document.getElementById('protocols-engaged-counter');
    if (!counter) return;

    // Apply digital noise rotation every 5 seconds
    setInterval(() => {
        const originalText = '[ PROTOCOLS_ENGAGED: 05 ]';
        const glitchChars = '!@#$%^&*()_+{}[]|;:,.<>?';
        
        let glitchedText = originalText.split('');
        // Randomly modify 2 characters in the string for a split second
        const idx1 = Math.floor(Math.random() * (originalText.length - 6)) + 3;
        const idx2 = Math.floor(Math.random() * (originalText.length - 6)) + 3;
        
        glitchedText[idx1] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        glitchedText[idx2] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        
        counter.textContent = glitchedText.join('');
        counter.style.textShadow = '0 0 5px var(--color-primary), -1px 0 #ff00ff, 1px 0 #00ffff';

        setTimeout(() => {
            counter.textContent = originalText;
            counter.style.textShadow = 'none';
        }, 120);
    }, 4500);
}
