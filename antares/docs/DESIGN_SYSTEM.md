# Design System | Reglas Técnicas UI

Este documento contiene los estándares técnicos para la implementación de la interfaz de ANTARES.

## 1. Grid & Layout
- **Container:** Máximo `1440px`.
- **Columns:** Sistema de 12 columnas.
- **Breakpoints:**
  - Mobile: `< 768px`
  - Tablet: `768px - 1024px`
  - Desktop: `> 1024px`

## 2. Color Palette (Tokens)
- `--bg-primary`: `#020617`
- `--bg-card`: `#0f172a`
- `--text-primary`: `#f8fafc`
- `--text-muted`: `#94a3b8`
- `--accent`: `#818cf8`
- `--border`: `rgba(255, 255, 255, 0.06)`

## 3. UI Components Standards
- **Buttons:**
  - `primary`: Background accent, rounded-md, shadow-indigo.
  - `secondary`: Transparent, border-muted, glassmorphism.
- **Cards:**
  - Padding: `var(--space-7)`.
  - Border-radius: `var(--radius-lg)`.
  - Border: `1px solid var(--border)`.

## 4. CSS Rules
- Usar variables CSS siempre.
- Mobile-first approach obligatorio.
- No usar librerías externas de UI.
