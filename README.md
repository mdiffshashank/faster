# Faster UI

> Production-ready, accessible React component library for the Faster design system.

[![CI](https://github.com/your-org/faster/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/faster/actions/workflows/ci.yml)

---

## Components

| Component | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| `Button`  | Primary / Secondary / Ghost, md / lg sizes, aria-disabled            |
| `Input`   | Label, helper text, error state, disabled, controlled + uncontrolled |
| `Dialog`  | Focus trap, ESC close, backdrop, aria-modal, header / body / footer  |

---

## Getting Started

### Prerequisites

- Node.js ≥ 20
- npm ≥ 10

### Install

```bash
git clone https://github.com/your-org/faster.git
cd faster
npm install
```

---

## Development

### Run the demo app locally

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173) with a live demo of all three components and a dark/light theme toggle.

### Run Storybook

```bash
npm run storybook
```

Opens at [http://localhost:6006](http://localhost:6006).

Each component has:

- Full **Docs** page with prop table (auto-generated from TypeScript)
- Named stories for every variant / state
- **Playground** story — use the Controls panel to tweak any prop live
- **a11y** panel showing WCAG 2.1 AA compliance status
- Toggle the Storybook **background** to dark to preview the dark theme

---

## Testing

### Unit tests (Jest + React Testing Library)

```bash
npm test
```

Tests cover:

- Component rendering (all variants, sizes, states)
- User interactions (click, type, keyboard navigation)
- Accessibility attributes (aria-*, role, focus behaviour)

### Cypress component tests

```bash
npm run cypress:run       # headless (CI-friendly)
npm run cypress:open      # interactive browser
```

---

## Type Check & Lint

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # ESLint
```

---

## Library Build (NPM)

Build the distributable package:

```bash
npm run lib:build
```

This runs two steps:

1. `tsc -p tsconfig.lib.json` — emits TypeScript declarations into `dist/types/`
2. `vite build --config vite.lib.config.ts` — bundles ESM (`faster.es.js`) and CJS (`faster.cjs.js`) into `dist/`

### Output

```
dist/
├── faster.es.js       ESM bundle
├── faster.cjs.js      CommonJS bundle
├── faster.es.js.map
├── faster.cjs.js.map
└── types/
    └── components/
        └── index.d.ts   TypeScript declarations
```

### Using as a package

```tsx
import { Button, Input, Dialog } from "@faster/ui";
```

---

## Design Tokens

All design tokens are extracted from the **TapTap Figma file** and defined as CSS custom properties.

| Layer                          | File                                |
| ------------------------------ | ----------------------------------- |
| Primitive tokens               | `design/tokens/tokens.css`          |
| Semantic tokens (light + dark) | `design/tokens/semantic-tokens.css` |
| Tailwind extension             | `tailwind.config.ts`                |

**Theme support:** Toggle dark mode by adding `class="dark"` to `<html>`. The `useTheme` hook in `src/hooks/useTheme.ts` manages this automatically with `localStorage` persistence.

---

## CI/CD

GitHub Actions runs on every push and PR:

1. Install deps → Lint → Type check → Jest → Cypress → Storybook build → Library build
2. On `main` push: publishes to NPM using the `NPM_TOKEN` secret

---

## Project Structure

```
faster/
├── src/
│   ├── components/
│   │   ├── Button/         Button.tsx, index.ts, Button.test.tsx
│   │   ├── Input/          Input.tsx, index.ts, Input.test.tsx
│   │   ├── Dialog/         Dialog.tsx, useFocusTrap.ts, index.ts, Dialog.test.tsx
│   │   └── index.ts        Library public API
│   ├── hooks/
│   │   └── useTheme.ts     Dark / light theme management
│   └── stories/
│       ├── Button.stories.tsx
│       ├── Input.stories.tsx
│       ├── Dialog.stories.tsx
│       └── DesignTokens.stories.tsx
├── design/
│   └── tokens/             tokens.css, semantic-tokens.css
├── cypress/
│   └── component/          Button.cy.tsx, Input.cy.tsx, Dialog.cy.tsx
├── .storybook/             main.ts, preview.tsx
├── .github/workflows/      ci.yml
└── vite.lib.config.ts      Library build config
```
