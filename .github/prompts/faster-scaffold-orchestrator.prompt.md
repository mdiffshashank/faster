---
name: "Faster Scaffold Orchestrator"
description: "Use when checking scaffold phase readiness, enforcing entry criteria, and recommending the next phase. Trigger phrases: orchestrate faster phases, check phase readiness, what is next phase."
argument-hint: "Optional input: target phase, strict mode, skip-command checks"
agent: "agent"
---

Run an end-to-end scaffold orchestration check for Faster and recommend the next actionable phase.

Read and honor these files first:

- [Requirements](../../doc/faster-lib-requirements.md)
- [Phase 01](./phase-01-bootstrap-vite-react-ts-tailwind.prompt.md)
- [Phase 02](./phase-02-required-configs.prompt.md)
- [Phase 03](./phase-03-generate-semantic-tokens.prompt.md)
- [Phase 04](./phase-04-github-actions-ci-cd.prompt.md)
- [Package manifest](../../package.json)

Primary objective:

- Evaluate each phase entry criteria in order.
- Identify the earliest blocked phase.
- Recommend exactly one next phase to execute now.

Execution rules:

- Execute directly and collect real evidence from repository files, scripts, and lightweight commands.
- Ask for confirmation before making any file edits. This orchestrator is check-first by default.
- If an expected artifact is missing, report it as a blocker with a precise fix recommendation.

Phase entry criteria model:

- Phase 01 ready when Vite + React + TypeScript bootstrap foundation exists, required dependencies (including dev dependencies) are installed, and basic bootstrap sanity checks pass.
- Phase 02 ready when required tooling/config scripts are aligned with the stack and can run (TypeScript, ESLint/Prettier, Tailwind, Vite, Jest/RTL, Cypress, Storybook, and related required configs).
- Phase 03 ready when semantic token structure exists and components can consume tokenized values.
- Phase 04 ready when GitHub Actions workflow covers required gates and release flow.

Validation guidance:

- Prefer minimal, deterministic checks first (file existence, script presence, config sanity).
- Run only the smallest commands needed to validate readiness and report failures clearly.

Output format:

- Current phase status table: phase, status (ready/blocked/complete), evidence
- Earliest blocker: one-line reason
- Recommended next phase: single phase number and name
- Immediate actions: 3 to 7 actionable steps
- Risk notes: what can fail if next phase starts now
