# Faster UI

Production-ready, accessible, and themeable React component library built for the Faster design system.

[![CI](https://github.com/mdiffshashank/faster/actions/workflows/ci.yml/badge.svg)](https://github.com/mdiffshashank/faster/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/@mdiffshashank/faster-ui.svg)](https://www.npmjs.com/package/@mdiffshashank/faster-ui)
[![License](https://img.shields.io/npm/l/@mdiffshashank/faster-ui.svg)](https://www.npmjs.com/package/@mdiffshashank/faster-ui)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

---

## Features

- ♿ **Highly Accessible**: Built following WAI-ARIA authoring practices with keyboard focus management and screen-reader support.
- 🎨 **Themeable Design Tokens**: Full support for light and dark modes powered by custom CSS variables.
- ⚡ **Tailwind Native**: Styled with Tailwind CSS classes for rapid styling and customizations.
- 📦 **Modern Bundling**: Pre-compiled into dual ESM and CommonJS modules via `tsup` with fully typed declarations.
- 🧪 **Thoroughly Tested**: Backed by high coverage Jest unit tests and Cypress component-level visual integration tests.

---

## Components

| Component           | Description                            | Features                                                                                                                  |
| :------------------ | :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [`Button`](#button) | Primary interactive triggers.          | Primary, Secondary, Outline, Ghost, and Link styles. Handles keyboard focusability (`aria-disabled`) for disabled states. |
| [`Input`](#input)   | Controlled/Uncontrolled text fields.   | Labels, helper texts, validation error states, and icon placements.                                                       |
| [`Dialog`](#dialog) | Modal overlays for focused user tasks. | Built-in focus trap, backdrop lock, escape key closures, and semantic layout sub-components.                              |

---

## Installation

Install the library and its required peer dependencies:

```bash
npm install @mdiffshashank/faster-ui react react-dom
```

---

## Setup & Integration

Because Faster UI is built on top of **Tailwind CSS** and **CSS custom properties (Design Tokens)**, you need to configure your consumer project as follows:

### 1. Configure Tailwind CSS

Extend your project's `tailwind.config.js` to scan the library for classes and incorporate its custom theme extensions:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}", "./node_modules/@mdiffshashank/faster-ui/dist/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--color-bg-primary)",
          hover: "var(--color-bg-primary-hover)",
          pressed: "var(--color-bg-primary-pressed)",
          subtle: "var(--color-bg-primary-subtle)"
        },
        surface: {
          DEFAULT: "var(--color-bg-surface)",
          muted: "var(--color-bg-surface-muted)"
        },
        content: {
          DEFAULT: "var(--color-text-primary)",
          muted: "var(--color-text-secondary)",
          inverse: "var(--color-text-inverse)"
        },
        stroke: {
          DEFAULT: "var(--color-border-subtle)",
          strong: "var(--color-border-strong)"
        },
        danger: { DEFAULT: "var(--color-feedback-danger)" },
        info: { DEFAULT: "var(--color-feedback-info)" },
        success: { DEFAULT: "var(--color-feedback-success)" },
        warning: { DEFAULT: "var(--color-feedback-warning)" },
        disabled: {
          bg: "var(--color-disabled-bg)",
          text: "var(--color-disabled-text)",
          border: "var(--color-disabled-border)"
        }
      },
      boxShadow: {
        "elevation-1": "var(--elevation-level-1)",
        "elevation-2": "var(--elevation-level-2)",
        "elevation-3": "var(--elevation-level-3)",
        "elevation-4": "var(--elevation-level-4)"
      }
    }
  },
  plugins: []
};

export default config;
```

### 2. Import CSS Variables (Design Tokens)

Ensure the following CSS custom properties (light/dark variables) are imported or declared in your main global CSS entrypoint (e.g., `index.css`):

```css
@import "@mdiffshashank/faster-ui/design/tokens/tokens.css";
@import "@mdiffshashank/faster-ui/design/tokens/semantic-tokens.css";

/* If loading Tailwind in your app */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

_Note: Toggle the dark theme in your app by adding the `dark` class to your root `<html>` element._

---

## Usage Guide

### Button

```tsx
import { Button } from "@mdiffshashank/faster-ui";

export default function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Click Me</Button>
      <Button variant="outline" danger>
        Delete Account
      </Button>
      <Button variant="secondary" disabled>
        Disabled Action
      </Button>
    </div>
  );
}
```

### Input

```tsx
import { Input } from "@mdiffshashank/faster-ui";

export default function Example() {
  return (
    <Input
      label="Email Address"
      type="email"
      placeholder="you@domain.com"
      helperText="We will never share your email."
    />
  );
}
```

### Dialog

```tsx
import { useState } from "react";
import { Dialog, Button } from "@mdiffshashank/faster-ui";

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Header>Confirm Deletion</Dialog.Header>
        <Dialog.Body>
          Are you sure you want to delete this file? This action is permanent.
        </Dialog.Body>
        <Dialog.Footer className="flex justify-end gap-2">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" danger onClick={() => setIsOpen(false)}>
            Delete
          </Button>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}
```

---

## Development

### Running Locally & Storybook

Run the Storybook developer interface containing variant sandboxes and interactive controls:

```bash
npm run dev
```

Storybook launches at [http://localhost:6006](http://localhost:6006).

---

## Testing & QA

Run all local testing validation suites before committing changes (also enforced via pre-commit hooks):

### 1. Jest Unit Tests

Runs fast DOM-level rendering and interaction unit tests via Jest + React Testing Library:

```bash
npm test
```

### 2. Cypress Component Tests

Runs integration-level visual tests in a real browser context:

```bash
npm run cypress:run       # Headless (CI / CLI output)
npm run cypress:open      # Interactive runner UI
```

### 3. Linting and Type Checking

Enforces ESLint specifications and TypeScript compilation:

```bash
npm run lint         # Runs ESLint diagnostics
npm run typecheck    # Runs tsc compilation checks without emitting files
```

---

## Publishing & Build Outputs

Build the library for distribution:

```bash
npm run lib:build
```

This compiles your TypeScript files through `tsup` and generates ESM (`faster.es.js`), CJS (`faster.cjs.js`), and declaration files (`faster.d.ts`) directly inside the `dist/` folder:

```
dist/
├── faster.cjs.js         # CommonJS Entrypoint
├── faster.es.js          # ESM Entrypoint
├── faster.d.ts           # ESM Type Declarations
└── faster.d.cts          # CommonJS Type Declarations
```

---

## CI/CD Pipeline

The project uses GitHub Actions configured in [.github/workflows/ci.yml](file:///.github/workflows/ci.yml) to perform automated quality checks and continuous deployment:

1. **On Pull Request (to main)**: Verifies formatting, runs lints, runs type-checks, executes unit tests, executes Cypress component tests, and runs the library build.
2. **On Push (to main)**: Executes all validation checks and publishes the new release package to NPM using the `NPM_TOKEN` environment secret.
