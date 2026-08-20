---
name: "Faster PR Readiness Acceptance Check"
description: "Use when validating merge readiness against Faster acceptance criteria. Trigger phrases: pr readiness, acceptance check, merge gate review, pre-merge validation."
argument-hint: "Optional input: PR scope, strict mode, run full test matrix"
agent: "agent"
---

Run a pre-merge PR readiness check against Faster acceptance criteria and fail fast on gaps.

Read and honor these files first:

- [Requirements](../../doc/faster-lib-requirements.md)
- [Package manifest](../../package.json)
- [Phase 01](./phase-01-bootstrap-vite-react-ts-tailwind.prompt.md)
- [Phase 02](./phase-02-required-configs.prompt.md)
- [Phase 03](./phase-03-generate-semantic-tokens.prompt.md)
- [Phase 04](./phase-04-github-actions-ci-cd.prompt.md)
- [Phase 05](./phase-05-component-engineering.prompt.md)

Primary objective:

- Verify acceptance criteria and deliverables are satisfied before merge.
- Produce a strict go/no-go readiness decision.

Evaluation scope:

- Component completeness and behavior: Button, Input, Dialog
- Design token usage and no hardcoded colors
- Jest + RTL test readiness (consolidated in Phase 02)
- Cypress test readiness (consolidated in Phase 02)
- Storybook coverage and interaction states
- CI/CD workflow coverage and release readiness
- Repository readiness and required documentation

Validation approach:

- Map every item in acceptance criteria and deliverables checklist to evidence in the repository.
- Run relevant validation commands when available and report pass/fail.
- Flag missing scripts, missing files, and unmet behavior requirements as blockers.

Decision policy:

- READY only when all mandatory acceptance criteria are met.
- BLOCKED if any mandatory criterion lacks evidence or fails validation.

Output format:

- Final decision: READY or BLOCKED
- Blockers list: criterion, evidence, impact, required fix
- Warnings list: non-blocking quality risks
- Criteria matrix: requirement item, status, evidence path
- Merge checklist: exact remaining actions in order
