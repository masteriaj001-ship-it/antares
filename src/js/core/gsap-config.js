import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOTION } from '../config/motion-tokens.js';

gsap.registerPlugin(ScrollTrigger);

// Core Motion Defaults utilizing System Tokens
gsap.defaults({
  ease: MOTION.easing.cinematic,
  duration: MOTION.duration.cinematic
});

export { gsap, ScrollTrigger };
