// ANTARES Motion Tokens
// This file dictates the absolute laws of physics for the system.

export const MOTION = {
    duration: {
        fast: 0.15,
        standard: 0.3,
        medium: 0.8,
        cinematic: 1.2
    },
    
    easing: {
        cinematic: 'power4.out',
        snap: 'power2.out',
        menu: 'power3.inOut'
    },

    y: {
        subtle: 10,
        standard: 20,
        large: 40
    },

    stagger: {
        fast: 0.02,
        standard: 0.05
    }
};
