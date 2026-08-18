---
name: "Faster Phase 04 GitHub Actions CI CD"
description: "Use when creating CI/CD workflow for Faster release readiness. Trigger phrases: setup github actions, configure ci cd, add release pipeline."
argument-hint: "Optional constraints: branch filters, release trigger, npm publish policy"
agent: "agent"
---

Run Phase 04 GitHub Actions CI/CD setup for Faster.

Read and honor these files first:

- [Requirements](../../doc/faster-lib-requirements.md)
- [Package manifest](../../package.json)

Primary objective:

- Implement workflow automation covering install, lint, type check, tests, Storybook build, production build, release flow, and rollback workflow.

Defaults to apply unless overridden by prompt arguments:

- Package manager: `npm`
- Release mode: automatic on every `main` push
- ADR location: `doc/adr/` (create if missing)

Execution mode:

- Execute directly. Do not stop at planning.
- Ask for confirmation before adding publish credentials assumptions or release-channel choices.

Implementation requirements:

- Keep workflow understandable and modular.
- Ensure pipeline order reflects local quality gates.
- Include practical failure visibility.
- Create a rollback workflow for failed or bad releases (manual trigger and clear rollback inputs/steps).
- Ensure rollback workflow documentation and usage conditions are explicit in comments or related docs.

Validation requirements:

- Lint workflow syntax and verify referenced scripts exist.
- Report any missing secrets or repo settings needed for publishing.
- Validate rollback workflow syntax, trigger configuration, and required inputs/secrets.

Output format:

- CI/CD workflow summary
- Rollback workflow summary
- Files changed (with reason)
- Validation results
- Required repository secrets/settings checklist
- ADR note created or updated in `doc/adr/`
