import { gsap, ScrollTrigger } from './gsap-config.js';

export const initMotionEngine = () => {
    // Phase 1: Engine initialization
    // Phase 2: Lenis implementation will be injected here
    
    console.log("ANTARES Motion Engine Active");
    
    // Safety cleanup on resize to prevent layout breaking
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });
};
