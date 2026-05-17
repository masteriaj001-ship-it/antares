---
name: Antares Tactical
colors:
  surface: '#121314'
  surface-dim: '#121314'
  surface-bright: '#39393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1d'
  surface-container: '#1f2021'
  surface-container-high: '#292a2b'
  surface-container-highest: '#343536'
  on-surface: '#e3e2e3'
  on-surface-variant: '#c4c5d9'
  inverse-surface: '#e3e2e3'
  inverse-on-surface: '#303031'
  outline: '#8e90a2'
  outline-variant: '#434656'
  surface-tint: '#b8c3ff'
  primary: '#b8c3ff'
  on-primary: '#002388'
  primary-container: '#2e5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#124af0'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c7c6c7'
  on-tertiary: '#303031'
  tertiary-container: '#6d6d6e'
  on-tertiary-container: '#f1f0f1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001356'
  on-primary-fixed-variant: '#0035be'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e3e2e3'
  tertiary-fixed-dim: '#c7c6c7'
  on-tertiary-fixed: '#1b1c1d'
  on-tertiary-fixed-variant: '#464748'
  background: '#121314'
  on-background: '#e3e2e3'
  surface-variant: '#343536'
typography:
  display:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  mono-data:
    fontFamily: Courier Prime
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1440px
---

## Brand & Style
The design system is engineered for a premium software agency, evoking a sense of "Atmospheric Precision." The brand personality is clinical, high-performance, and authoritative, drawing inspiration from high-end aerospace interfaces and cinematic tactical displays. 

The visual style blends **Modern Minimalism** with **Surgical Brutalism**. It prioritizes information density and clarity through a dark, low-light environment that reduces eye strain while highlighting critical data points. The emotional response is one of absolute reliability and technical mastery. Key characteristics include razor-thin 1px geometry, monospaced accents, and a "Dune-inspired" textural depth that prevents the interface from feeling sterile.

## Colors
This design system operates on a high-contrast, dark-mode-first palette.

- **Primary (Electric Cobalt):** Reserved for high-priority actions, active states, and critical data highlights. It should be used sparingly to maintain its "vibrant" impact.
- **Secondary (Pure White):** Used for primary typography and icons to ensure maximum legibility against the dark background.
- **Tertiary (Slate Gray):** Utilized for secondary UI elements, borders, and inactive states.
- **Neutral (Deep Charcoal):** The foundation of the interface, used for the base canvas and deep structural layers.

Maintain a "Tactical" ratio: 90% neutrals/slates, 7% white, and 3% cobalt.

## Typography
The typography system relies on **Inter** for its neutral, technical clarity. To achieve the tactical aesthetic, use tight tracking on large headings and wide tracking on all-caps labels.

- **Display & Headlines:** Use high weight (700+) and negative letter spacing to create a dense, "engineered" look.
- **Data Accents:** Use monospaced fonts (Courier Prime) for coordinate data, timestamps, and technical metadata to reinforce the software agency’s precision.
- **Hierarchy:** Maintain high contrast between primary white text and secondary gray metadata.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to ensure content remains centered and controlled, transitioning to a fluid model for mobile.

- **Grid:** Use a 12-column system for desktop with 16px gutters.
- **Rhythm:** All spacing must be multiples of 4px. Use generous outer margins (48px+) to create an "atmospheric" focus on the central content.
- **Precision Lines:** Use 1px Slate Gray borders to define sections rather than relying on background color shifts. This emphasizes the "technical drawing" feel of the UI.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Subtle Grain**, avoiding traditional drop shadows.

- **Surfaces:** Level 0 is Deep Charcoal (#0D0E0F). Level 1 (containers) is Slate Gray (#1B1C1D).
- **Borders:** Instead of shadows, use 1px solid borders. For active or hovered elements, change the border color to Electric Cobalt or Pure White.
- **Texture:** Apply a very fine, low-opacity noise overlay (2-3%) across the background to create a cinematic, "Dune-inspired" tactile quality.
- **Atmospheric Glow:** Use small, soft radial gradients in Electric Cobalt behind key interactive modules to simulate a glowing display screen.

## Shapes
This design system utilizes **Sharp (0px)** geometry exclusively. 

There are no rounded corners. Every button, input field, and card must have 90-degree angles to maintain the "Surgical Precision" and tactical aesthetic. For specific UI decorative elements, use "clipped" corners (45-degree chamfers) to reinforce the aerospace/technical influence.

## Components
- **Buttons:** Sharp 0px corners. Primary buttons use an Electric Cobalt background with White text. Secondary buttons use a 1px White border with transparent background. Use a "crosshair" icon or chevron for call-to-actions.
- **Input Fields:** 1px Slate Gray bottom-border only or full outline. Use monospaced labels for placeholder text.
- **Status Chips:** Rectangular, sharp-edged. Use Cobalt for "Active" and a muted Slate for "Pending."
- **Cards:** Defined by 1px Slate Gray borders. No fill color unless hovered. Hover state should trigger a subtle internal glow or border color shift to White.
- **Technical Readouts:** Small modules containing monospaced data strings (e.g., "SYSTEM_READY // 0x2E5BFF") to act as decorative but brand-aligned dividers.
- **Lists:** Clean, 1px horizontal dividers. No zebra striping; use hover highlights instead.