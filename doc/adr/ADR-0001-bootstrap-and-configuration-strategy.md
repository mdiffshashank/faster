# ADR-0001: Bootstrap and Configuration Strategy

## Status
Accepted

## Date
2026-08-18

## Context
The Faster repository needed a production-oriented frontend baseline with clear phase boundaries for setup and configuration. The workflow also required explicit CI/CD and rollback readiness planning, plus enforcement of tokenized styling and structured quality gates.

## Decision
Adopt a four-phase scaffold strategy:
- Phase 01: Vite + React + TypeScript bootstrap and installation of all required runtime/dev dependencies.
- Phase 02: Centralized configuration of TypeScript, ESLint/Prettier, Tailwind, Vite, Jest/RTL, Cypress, Storybook, and related scripts.
- Phase 03: Semantic token generation mapped to primary tokens only.
- Phase 04: GitHub Actions CI/CD setup including rollback workflow.

## Alternatives Considered
- Configure tools during Phase 01: rejected to keep bootstrap minimal and avoid mixed concerns.
- Keep separate Phase 04/05 for Jest and Cypress: rejected after consolidation to reduce duplicate setup paths.

## Impact
- Clear separation between dependency installation and configuration.
- Lower risk of destructive re-bootstrap steps.
- More consistent orchestration and readiness checks.
- Easier PR readiness validation against phased criteria.

## Rollback Strategy
- Revert scaffold/config commits by phase if a tool integration regresses the baseline.
- Re-run only the affected phase prompt after rollback.
- For CI/CD regressions, use Phase 04 rollback workflow to restore the last known good release path.

## Affected Files and Scripts
- package.json scripts for dev/build/typecheck/lint/format/test/cypress/storybook
- Vite, TypeScript, Tailwind, ESLint, Prettier, Jest, Cypress, Storybook config files
- .github prompt files for phase orchestration and readiness checks
