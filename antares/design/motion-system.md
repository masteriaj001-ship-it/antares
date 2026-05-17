# ANTARES Motion System

## Purpose

Define a unified motion language for all ANTARES interfaces.

Motion must feel:
- controlled
- cinematic
- intentional
- tactical
- premium
- calm

Motion is used to reinforce hierarchy and atmosphere,
never to entertain.

---

# Motion Philosophy

ANTARES motion behaves like:
- precision machinery
- cinematic interface systems
- high-end industrial technology

NOT like:
- playful consumer apps
- startup landing pages
- gaming dashboards
- neon cyberpunk UIs

---

# Core Principles

## 1. Motion Must Have Purpose

Every animation must:
- improve clarity
- reinforce hierarchy
- guide attention
- communicate state

Never animate for decoration alone.

---

## 2. Motion Must Feel Heavy

ANTARES interfaces should feel:
- deliberate
- stable
- engineered

Avoid:
- elastic movement
- bounce effects
- exaggerated scaling
- fast playful transitions

---

## 3. Motion Must Preserve Calmness

The interface should never feel hyperactive.

Avoid:
- excessive simultaneous animations
- attention competition
- flashy entrances

---

# Approved Properties

Prefer:
- opacity
- transform

Avoid:
- width
- height
- left/right
- top/bottom
- box-shadow animation
- filter animation

Reason:
GPU acceleration and layout stability.

---

# Timing System

## Fast
150ms

Used for:
- hover states
- button feedback

---

## Standard
300ms

Used for:
- cards
- menus
- fades
- toggles

---

## Cinematic
1200ms

Used for:
- reveal systems
- hero appearance
- atmospheric transitions

---

# Easing System

Primary easing:

--easing-cinematic:
cubic-bezier(0.22, 1, 0.36, 1)

Use this as default.

---

# Hover Behavior

Allowed:
- subtle translateY
- opacity refinement
- border emphasis
- soft background shifts

Avoid:
- large scaling
- rotation
- glow explosions

---

# Reveal System

Reveal animations must:
- use opacity + translateY
- remain subtle
- stagger carefully
- preserve readability

---

# Mobile Motion Rules

Reduce:
- distance
- duration
- simultaneous effects

Preserve performance first.

---

# Accessibility

Respect:
prefers-reduced-motion

All major animations must degrade gracefully.

---

# Forbidden Motion

Never use:
- bounce
- rubber-band effects
- infinite floating
- aggressive parallax
- flashy glow pulses
- spinning UI elements

---

# Validation

All new components must:
- reuse timing tokens
- reuse easing tokens
- preserve motion consistency
- pass mobile performance review
