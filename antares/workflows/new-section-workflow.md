# New Section Workflow

## Purpose

Define the operational flow for creating a new section inside ANTARES projects.

This workflow ensures:
- consistency
- modular architecture
- design system compliance
- accessibility
- responsive behavior
- clean agent delegation

---

# 1. INPUT STAGE

The workflow starts when the user requests a new section.

Example:

User Request:
"Create a pricing section with 3 plans"

Hermes receives:
- feature goal
- business intent
- visual intent
- interaction requirements

Hermes MUST clarify ambiguity before delegation.

---

# 2. TASK ANALYSIS (HERMES)

Hermes decomposes the task into specialized responsibilities.

Hermes defines:
- section objective
- required UI components
- interaction complexity
- state requirements
- responsive requirements
- dependencies

Hermes NEVER writes implementation code.

---

# 3. DESIGN PHASE (NYX)

Nyx defines:

- visual hierarchy
- spacing composition
- layout structure
- typography usage
- cinematic consistency
- emotional tone
- animation direction
- responsive visual behavior

Nyx MUST:
- follow design-system tokens
- avoid generic AI-generated aesthetics
- preserve ANTARES identity

Nyx NEVER modifies business logic.

---

# 4. IMPLEMENTATION PHASE (ATLAS)

Atlas implements:

- semantic HTML
- modular CSS
- responsive layouts
- JavaScript interactions
- accessibility structure

Atlas MUST:
- use existing tokens
- avoid duplicated styles
- preserve component consistency
- respect mobile-first principles

Atlas MUST NOT:
- break existing architecture
- introduce unnecessary libraries
- bypass workflow rules

---

# 5. REVIEW PHASE (ECHO)

Echo reviews:

- performance
- readability
- redundancy
- accessibility
- responsiveness
- maintainability

Echo identifies:
- unnecessary complexity
- repeated patterns
- weak semantics
- possible optimizations

Echo NEVER directly edits production code.

---

# 6. SECURITY VALIDATION (SENTINEL)

Sentinel validates:

- safe operations
- scope boundaries
- forbidden operations
- dependency safety
- architecture compliance

Sentinel can BLOCK deployment if violations exist.

---

# 7. FINAL OUTPUT FORMAT

All agents must return structured outputs.

Example:

## Agent
Atlas

## Files Modified
- index.html
- style.css
- script.js

## Components Added
- pricing-section
- pricing-card
- billing-toggle

## Validation Notes
- Mobile responsive
- Uses design tokens
- No external dependencies

---

# 8. COMPLETION CONDITIONS

The workflow is complete only if:

- all validations pass
- responsive behavior is verified
- design consistency is preserved
- no architectural conflicts exist
- accessibility requirements are respected

Otherwise:
RETURN TO REVIEW PHASE
