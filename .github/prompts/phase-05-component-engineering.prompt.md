---
name: "Faster Phase 05 Component Engineering"
description: "Use when creating or extending production-grade design system components (Button, Input, Dialog, or new custom components) using design system semantic tokens, TypeScript, ARIA accessibility, Jest unit tests, Cypress component tests, and Storybook documentation. Trigger phrases: build component, engineer faster component, add new component, create component, implement component."
argument-hint: "Target component name (e.g., Button, Input, Dialog, Card, Modal, Select) and optional visual variants or states"
agent: "agent"
---

Engineer Phase 05 design system component for the Faster library.

Read and honor these files first:

- [Requirements](../../doc/faster-lib-requirements.md)
- [Figma design spec](../../design/figma-design-spec.md)
- [Semantic tokens json](../../design/tokens/semantic-tokens.json)
- [Tailwind config](../../tailwind.config.ts)
- [Guardrails instructions](../instructions/faster-guardrails.instructions.md)

Primary objective:

- Build or extend a production-ready, fully accessible, design-tokenized React component (e.g. `Button`, `Input`, `Dialog`, or any new design system component) accompanied by Jest unit tests, Cypress component tests, Storybook documentation, and barrel exports.

Defaults to apply unless overridden by prompt arguments:

- Component location: `src/components/<ComponentName>/`
- Story location: `src/stories/<ComponentName>.stories.tsx`
- Export strategy: Barrel export in `src/components/<ComponentName>/index.ts` and `src/components/index.ts`

Execution mode:

- Execute directly. Do not stop at planning.
- Honor localized guardrails: ZERO hardcoded color literals (hex, RGB, HSL, or raw color names) in component markup or styles. Use semantic token-backed Tailwind classes.

Implementation requirements:

1. **Component Architecture & API**:
   - Create `src/components/<ComponentName>/<ComponentName>.tsx`.
   - Use TypeScript interfaces/types extending HTML element attributes (e.g., `React.ButtonHTMLAttributes<HTMLButtonElement>`).
   - Wrap components in `React.forwardRef` to support DOM ref forwarding.
   - Design a predictable prop API supporting visual variants (`variant`), sizes (`size`), state modifiers (`disabled`, `error`, `isLoading`), and custom `className` merging.

2. **Styling & Design Tokens**:
   - Style using Tailwind CSS classes mapped to design system semantic tokens (e.g., `bg-primary`, `text-primary`, `border-error`).
   - Implement states: `default`, `hover`, `focus-visible`, `disabled`, `error`, `active`.

3. **Accessibility (a11y)**:
   - Enforce WAI-ARIA standards: appropriate `role`, `aria-disabled`, `aria-invalid`, `aria-expanded`, `aria-describedby`, `aria-modal` where applicable.
   - Include visible keyboard focus rings (`focus-visible:outline-none focus-visible:ring-2`).
   - Handle keyboard navigation (e.g. `Enter`, `Space`, `Escape`, `Tab` focus trapping for modals/overlays).

4. **Unit Tests (Jest + React Testing Library)**:
   - Create `src/components/<ComponentName>/<ComponentName>.test.tsx`.
   - Cover basic rendering, all visual variants, disabled state behavior, user event interactions (clicks, keyboard focus), and ARIA attributes.

5. **Component Tests (Cypress)**:
   - Create `src/components/<ComponentName>/<ComponentName>.cy.tsx`.
   - Verify mounting, DOM rendering, interactive user flows, and state changes.

6. **Documentation & Interactive Playground (Storybook)**:
   - Create `src/stories/<ComponentName>.stories.tsx`.
   - Export stories for default, variant states, disabled state, error state, and interactive controls (`Playground` story).
   - Ensure zero console errors or warnings in Storybook.

7. **Barrel Export**:
   - Export component and types from `src/components/<ComponentName>/index.ts` and `src/components/index.ts`.

Validation requirements:

- Run type checking: `npm run typecheck`
- Run linting: `npm run lint`
- Run Jest tests: `npm test`
- Run Cypress component verify/run: `npm run cypress:run`
- Run Storybook build smoke check: `npm run storybook:build`

Output format:

- Component engineered & variant summary
- Files created/updated (with reason)
- Guardrail compliance check (zero hardcoded colors confirmation)
- Test and validation outcomes (Jest, Cypress, Storybook)
- Integration instructions for library consumers
