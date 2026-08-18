---
applyTo: "**/*.{ts,tsx,js,jsx,css,md,json,yml,yaml}"
description: "Use when implementing or reviewing Faster setup, tokens, components, tests, docs, or CI changes. Enforces no hardcoded colors in components/styles and requires ADR updates for major setup changes. Trigger phrases: faster guardrails, no hardcoded colors, adr required."
---

# Faster Guardrails

## 1) No Hardcoded Colors

Requirements:

- Do not hardcode color literals in component implementation or component-level styles.
- Disallowed examples include hex, rgb/rgba, hsl/hsla, named colors, and arbitrary Tailwind color literals in component markup.
- Use design tokens from repository token sources and semantic token mappings instead.

Allowed usage:

- Token references from repository token files and generated token variables.
- Tailwind classes that are mapped to design tokens through theme extension.

Enforcement behavior:

- If a color literal is introduced in component code or styles, stop and replace it with a tokenized reference.
- In summaries, explicitly state how color usage was tokenized.

## 2) Mandatory ADR Updates For Major Setup Changes

When a change is major setup, an ADR update is required in doc/adr/ (create folder if missing).

Major setup changes include:

- Build tool, bundler, or package manager strategy changes.
- TypeScript strictness or project structure policy changes.
- Testing framework additions, removals, or major config model changes.
- CI/CD workflow stage ordering or release policy changes.
- Token architecture or naming convention changes with migration impact.

Required ADR behavior:

- Create or update an ADR file under doc/adr/ for the change.
- Include context, decision, alternatives considered, impact, and rollback strategy.
- Reference the affected files and scripts.

Pull request and summary behavior:

- If major setup changed and no ADR update exists, treat as blocked until ADR is added.
- Always include an ADR status line in final summaries: created, updated, or not required.
