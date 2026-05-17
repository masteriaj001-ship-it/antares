# ANTARES Project State

## Current Status

ANTARES is currently in the **System Stabilization & Orchestration** phase.

### Completed (Validated)
- **Cinematic Navbar**: Modularized in `components/navbar.css`.
- **Editorial Hero**: Modularized in `components/hero.css`.
- **Responsive Layout Stabilization**: Governed by `layout-constraints.md`.
- **Motion System**: Physics defined in `motion-system.md`.
- **Modular CSS Architecture**: Residing in `src/styles/`.
- **Pricing Interaction System**: Functional billing toggle.
- **Semantic Restructuring**: Main/Footer landmarks and accessibility.

## Current Architecture

### Styles (`src/styles/`)
- **Tokens-first**: `base/tokens.css` is the source of truth for variables.
- **Modular components**: Isolation of styles for Navbar, Hero, Pricing, etc.
- **Layout engine**: Centralized grid and container logic.

### Logic (`script.js`)
- Vanilla JS only.
- Intersection Observer for reveal systems.
- State-driven billing toggle.

## Protected Systems (DO NOT TOUCH)

- **Motion Timing**: Standardized in `motion-system.md` (1200ms cinematic).
- **Typography Scale**: Clamp-based and editorial rhythm.
- **Spacing Rhythm**: Tokenized in `tokens.css`.
- **CSS Modularity**: Never re-consolidate into style.css.

## Known Constraints

- **No neon/glow aesthetics**: Focus on dark luxury, not cyberpunk.
- **No generic SaaS UI**: Maintain editorial tech feeling.
- **No layout shifts**: All animations must be GPU-friendly (transform/opacity).

## Current Priority

1. **Features Section**: Align with the new editorial tech narrativa.
2. **Pricing Visual Language**: Refine details in `pricing.css`.
3. **Footer Identity**: Finalize cinematic feeling in `footer.css`.
