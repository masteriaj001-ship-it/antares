# Advanced Motion Constraints

## Objective
Prevent "AI Overdesign" and maintain ANTARES' premium, calm, and cinematic identity when using advanced animation engines like GSAP.

## Core Philosophy
The interface must feel **alive**, not "animated". 
Motion is used to reinforce hierarchy and physical weight, never to entertain.

---

## 🚫 GSAP MUST NOT:
- Animate `width`, `height`, `padding`, or `margin` (Layout Thrashing).
- Animate `box-shadow` or `filter` properties (Performance heavy).
- Create infinite floating or pulsing effects.
- Use elastic, bounce, or back easings.
- Create exaggerated parallax effects (keep speed ratios tight).
- Animate every single component on screen.
- Hijack the scroll aggressively.
- Use mouse followers or WebGL shaders unless explicitly architected.

## ✅ GSAP MUST:
- Animate **ONLY** `transform` (x, y, scale, rotation) and `opacity`.
- Use `will-change: transform, opacity` sparingly.
- Preserve calm, deliberate motion.
- Respect the cinematic timing established in `motion-system.md` (1.2s for reveals).
- Preserve readability above all else.
- Use stagger effects subtly (delay < 0.1s).
- Revert or cleanup animations on resize if necessary.

## Easing Standard
Always default to:
`ease: "power4.out"` or a custom `cubic-bezier(0.22, 1, 0.36, 1)`.
Never use `power1`, `bounce`, or `elastic`.
