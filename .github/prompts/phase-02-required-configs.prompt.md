---
name: "Faster Phase 02 Required Configs"
description: "Use when configuring mandatory tooling and project conventions after bootstrap. Trigger phrases: configure faster tooling, setup required configs, align project config."
argument-hint: "Optional constraints: lint rules, ts strictness, module format, path aliases"
agent: "agent"
---

Run Phase 02 required configuration for the Faster library.

Read and honor these files first:

- [Requirements](../../doc/faster-lib-requirements.md)
- [Package manifest](../../package.json)
- [Design token json](../../design/tokens/tokens.json)
- [Design token css](../../design/tokens/tokens.css)

Primary objective:

- Configure required project settings and scripts so later component, test, Storybook, and CI phases can run consistently.

Consolidated flow note:

- In this workflow, all required configuration work is centralized in Phase 02.
- Phase 01 handles bootstrap and dependency installation; Phase 02 hardens and aligns all required configs.

Defaults to apply unless overridden by prompt arguments:

- Package manager: `npm`
- ADR location: `doc/adr/` (create if missing)

Execution mode:

- Execute directly. Do not stop at planning.
- Ask for confirmation before any potentially destructive or opinionated convention changes.

Implementation requirements:

- Align configs with the stated stack and acceptance criteria.
- Specifically configure TypeScript project settings (base tsconfig, strictness, module resolution, and path aliases when used).
- Specifically configure ESLint and Prettier (rules, ignore files, script integration, and compatibility between lint/format workflows).
- Specifically configure Tailwind (content paths, theme extension, token mapping, and PostCSS integration).
- Specifically configure Vite (React plugin, build/library settings as applicable, resolve aliases, and environment handling).
- Specifically configure Jest + React Testing Library (runner config, test environment, setup files, utilities, and scripts).
- Specifically configure Cypress component testing (config, support files, mount wiring, and scripts).
- Specifically configure Storybook (framework config, builder compatibility, story discovery, and scripts).
- Ensure all related scripts in package.json are aligned for local and CI usage.
- Avoid hardcoded component colors in implementation-facing templates.
- Ensure config decisions are explicit and easy to maintain.

Validation requirements:

- Run type/lint/format plus configuration sanity checks relevant to this phase.
- Validation must include one baseline Jest/RTL run, one Cypress setup or smoke verification, and one Storybook start/build verification.
- Report what passed and what remains intentionally deferred.

Output format:

- Configuration decisions made
- Files changed (with reason)
- Commands run and key outcomes
- Deferred decisions that need user confirmation
- ADR note created or updated in `doc/adr/`
