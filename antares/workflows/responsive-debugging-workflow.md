# Responsive Debugging Workflow

## Objective
Identify and resolve layout issues on mobile and tablet devices while preserving the desktop cinematic identity.

---

# 1. INSPECTION PHASE
- [ ] Check Media Queries consistency.
- [ ] Verify Navbar mobile positioning (`left: 100%` vs `left: 0`).
- [ ] Verify Hero sizing and padding on small screens.
- [ ] Identify overflow-x causes.
- [ ] Audit z-index stack.

# 2. ROOT CAUSE ANALYSIS
- Document why elements are invisible or broken.

# 3. FIX IMPLEMENTATION
- Apply targeted CSS fixes.
- Avoid global resets that break desktop.

# 4. VALIDATION
- Verify on mobile viewport.
- Verify on tablet viewport.
- Ensure animations still trigger.
