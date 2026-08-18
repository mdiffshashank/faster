---
name: "Faster Phase 01 Bootstrap"
description: "Use when scaffolding the Faster library foundation with Vite, React, and TypeScript baseline initialization. Trigger phrases: bootstrap faster, init vite react ts tailwind, start faster scaffold."
argument-hint: "Optional constraints: package manager, Node version, strictness, folder layout"
agent: "agent"
---

Scaffold Phase 01 for the Faster component library.

Read and honor these files first:

- [Requirements](../../doc/faster-lib-requirements.md)
- [Package manifest](../../package.json)

Primary objective:

- Initialize or align the workspace to a Vite + React + TypeScript baseline foundation suitable for a publishable component library.

Vite bootstrap requirement:

- Use Vite project creation as the default bootstrap path.
- With npm default, run `npm create vite@latest . -- --template react-ts` when initialization is needed.
- If the workspace is already initialized, align existing setup to the Vite React TypeScript template conventions instead of reinitializing destructively.

Defaults to apply unless overridden by prompt arguments:

- Package manager: `npm`
- ADR location: `doc/adr/` (create if missing)

Execution mode:

- Execute directly. Do not stop at planning.
- If a requirement is ambiguous or conflicting, ask for confirmation before making that specific change.

Consolidated flow note:

- Phase 01 is bootstrap-only.
- Install all required dependencies (including dev dependencies such as ESLint, Prettier, Jest/RTL, Cypress, Storybook, and related tooling packages) in Phase 01.
- All configuration work (TypeScript hardening, Tailwind, Vite config details, ESLint/Prettier, Jest/RTL, Cypress, Storybook, and related scripts/configs) is handled in Phase 02.

Implementation requirements:

- Keep changes minimal and incremental.
- Preserve existing files unless updates are required for this phase.
- Ensure TypeScript-first bootstrap structure.
- Add only minimal bootstrap scripts needed to run the initialized app.
- Install all required runtime and dev dependencies needed by later phases.
- Do not perform detailed toolchain configuration in this phase.

Validation requirements:

- Run the smallest meaningful verification commands for this phase.
- Report pass/fail per command with short error summaries.
- Validation should confirm bootstrap health and dependency installation (install + dev/build sanity), while deferring full config validation to Phase 02.

Output format:

- Summary of what was scaffolded
- Files changed (with reason)
- Commands run and key outcomes
- Risks or follow-ups for later phases
- ADR note created or updated in `doc/adr/`
