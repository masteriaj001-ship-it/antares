# Refactor Workflow

## Objective
Standardize the process of improving existing systems in ANTARES.

## Phases

### 1. Diagnostic Audit
- Identify the bottleneck (Responsive, Performance, or Narrative).
- Review `project-state.md` for protection flags.

### 2. Surgical Modification
- Create a backup or a clear reference of the working state.
- Apply changes ONLY to the specific CSS/JS module.
- Use `safe-edit` principles: minimal changes for maximum impact.

### 3. Cross-Device Validation
- Test in mandatory breakpoints (320px, 768px, 1440px).
- Verify `layout-constraints.md` compliance.
- Check console for errors.

### 4. Integration & Documentation
- Update `component-map.md` if new sub-components were created.
- Record the activity in the project logs.

## Failure Criteria
- **Regression**: If the navbar breaks while editing pricing.
- **Inconsistency**: If motion timings deviate from `motion-system.md`.
- **Blob**: If a component file grows beyond its single responsibility.
