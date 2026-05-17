# Layout Constraints

## Objective

Prevent layout breakage across:
- mobile
- tablet
- desktop
- ultrawide

---

# HARD RULES

NEVER:
- use fixed widths on cards
- use viewport-breaking containers
- allow horizontal scroll
- allow clipped content
- allow oversized typography on small screens

---

# MOBILE RULES

Viewport range:
320px → 767px

Requirements:
- all content visible
- no overflow-x
- no clipped buttons
- readable spacing
- cards stack vertically
- buttons remain accessible
- pricing cards fit container width

---

# TABLET RULES

Viewport:
768px → 1024px

Requirements:
- preserve visual rhythm
- avoid oversized gaps
- avoid compressed cards
- maintain hierarchy

---

# GRID RULES

Use:
grid-template-columns: 
repeat(auto-fit, minmax(280px, 1fr))

Avoid:
hardcoded card widths

---

# TYPOGRAPHY RULES

Clamp large headings.

Use:
clamp(min, preferred, max)

Example:
clamp(2.5rem, 8vw, 6rem)

---

# VALIDATION REQUIRED

Before completion:
- inspect mobile layout
- inspect tablet layout
- inspect desktop layout

Workflow fails if:
- overflow exists
- clipping exists
- buttons inaccessible
- text exits viewport

Return validation report.
