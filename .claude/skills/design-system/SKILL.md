---
name: design-system
description: Airport Pickup Timer design system. Use whenever you build or change UI components, pages or styles.
---

# Design system

The Figma style guide ("Design System & Style Guide" page) is the source of truth. This skill tells you how the code follows it.

## Tokens

- Use only the custom properties in `src/styles/tokens.css`: colours, type, spacing, radius.
- Never write a raw colour (`#hex`, `rgb()`, `hsl()` or named colours) anywhere else. Stylelint rejects it.
- Need a value that doesn't exist? Don't invent one. Ask the team to add it to the Figma style guide first, then to `tokens.css` with the same name.

## Components

- Check `src/components/` before making anything new. Reuse and extend.
- One folder per component: `Button/Button.tsx`, `Button/Button.module.css`, `Button/index.ts`.
- Component names match the Figma component names exactly.
- Props match the Figma component properties:
  - A variant property becomes a union-type prop: `variant: "primary" | "secondary"`
  - A boolean property becomes a boolean prop: `showIcon?: boolean`
  - A text property becomes a string prop: `label: string`
  - An instance-swap property becomes a ReactNode prop: `icon?: React.ReactNode`

### Figma to code map

Fill in this table as components are built. Each row must match Figma exactly.

| Figma component | Figma property | Code prop |
|---|---|---|
| Button | Variant = Primary / Secondary / Ghost | `variant: "primary" \| "secondary" \| "ghost"` |
| Button | Label (text) | `children` |
| Button | Icon (instance swap) | `icon?: React.ReactNode` |
| StatusChip | State = Landed / Immigration / Baggage / Curb | `status: "landed" \| "immigration" \| "baggage" \| "curb"` |
| Countdown | Size = Large / Small | `size: "large" \| "small"` |

## Layout

- Mobile first: base styles for 360px, then `@media (min-width: 48rem)` and up.
- Use `rem` for type and spacing.
- Every interactive component has a visible `:focus-visible` style that uses `--color-focus`.
