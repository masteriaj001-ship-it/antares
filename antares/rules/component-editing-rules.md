# Component Editing Rules

## Objective
Preserve the modular integrity and visual stability of ANTARES.

## Mandatory Rules for Agents

### 1. Scope Isolation
- **Edit only target files**: If adjusting the Navbar, ONLY touch `navbar.css`.
- **Verify dependencies**: Check if a change in `base/tokens.css` affects other components.

### 2. Implementation Standards
- **Use Tokens**: Never hardcode colors, fonts, or spacing.
- **GPU-Only Motion**: Use `transform` and `opacity`. No layout-triggering properties.
- **Mobile-First**: Rules must be baseline responsive, with overrides for Desktop only.

### 3. Forbidden Actions
- **No Inline Styles**: All styling must reside in `src/styles/`.
- **No Duplicate Utilities**: Check `component-map.md` before creating new classes.
- **No Layout Shifts**: Maintain fixed heights for interactive elements like the navbar.

## Before Editing Workflow
1. **Identify Module**: Locate the component in `src/styles/components/`.
2. **Audit Constraints**: Read `antares/rules/layout-constraints.md`.
3. **Verify Motion**: Read `antares/design/motion-system.md`.
4. **Local Impact**: Verify if the edit creates horizontal scroll in mobile.
