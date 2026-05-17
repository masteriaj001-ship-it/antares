import { gsap, ScrollTrigger } from '../core/gsap-config.js';
import { MOTION } from '../config/motion-tokens.js';
import SplitType from 'split-type';

export const initHeroReveal = () => {
    const heroSection = document.querySelector('.hero');
    const title = document.querySelector('.hero h1');
    if (!heroSection || !title) return;

    // Prevenir Layout Shift y FOUC: Esperar a que las fuentes rendericen
    document.fonts.ready.then(() => {
        // 1. Text Splitting seguro
        const text = new SplitType(title, { types: 'lines, words' });

        // 2. Cinematic Sequence (No ScrollTrigger for the Hero)
        // The hero must ALWAYS animate on load, independent of scroll position
        const tl = gsap.timeline({ 
            delay: 0.1, // Small delay to ensure paint is ready
            onStart: () => {
                // Liberar el CSS bloqueo Anti-FOUC
                document.documentElement.classList.remove('js-loading');
            }
        });

        // 3. Patrón gsap.from() con autoAlpha y clearProps
        tl.from('.tactical-meta', {
            autoAlpha: 0,
            x: -20,
            duration: MOTION.duration.medium,
            clearProps: "all"
        })
        .from(text.words, {
            autoAlpha: 0,
            y: MOTION.y.standard,
            stagger: MOTION.stagger.standard,
            duration: MOTION.duration.cinematic,
            clearProps: "all" // Elimina los inline-styles al terminar
        }, "-=0.4")
        .from('.hero-description', {
            autoAlpha: 0,
            y: MOTION.y.standard,
            duration: MOTION.duration.medium,
            clearProps: "all"
        }, "-=0.9")
        .from('.hero .btn-group', {
            autoAlpha: 0,
            y: MOTION.y.standard,
            duration: MOTION.duration.medium,
            clearProps: "all"
        }, "-=0.6")
        .from('.hero-technical-footer', {
            autoAlpha: 0,
            y: 20,
            duration: MOTION.duration.medium,
            clearProps: "all"
        }, "-=0.8")
        .from('.hero-visual', {
            autoAlpha: 0,
            scale: 0.95,
            duration: MOTION.duration.cinematic,
            ease: MOTION.easing.menu,
            clearProps: "all"
        }, "-=1.2")
        .from('.scroll-indicator', {
            autoAlpha: 0,
            y: 20,
            duration: MOTION.duration.medium,
            clearProps: "all"
        }, "-=0.8");
    });
};
