---
name: "Faster Phase 03 Semantic Tokens"
description: "Use when generating or restructuring semantic design tokens for Faster. Trigger phrases: generate semantic tokens, build token architecture, map design tokens."
argument-hint: "Optional constraints: naming scheme, token groups, fallback strategy"
agent: "agent"
---

Run Phase 03 semantic token generation for Faster.

Read and honor these files first:

- [Requirements](../../doc/faster-lib-requirements.md)
- [Figma design spec](../../design/figma-design-spec.md)
- [Token source json](../../design/tokens/tokens.json)
- [Token css output](../../design/tokens/tokens.css)
- [Tailwind config](../../tailwind.config.ts)

Primary objective:

- Fetch the latest token source from Figma when needed, then produce a reusable semantic token layer (colors, typography, spacing, radii, borders) and wire it for Tailwind/component usage.

Defaults to apply unless overridden by prompt arguments:

- Package manager: `npm`
- Token naming strategy: tier-role-state (example: `color.bg.primary.hover`)
- ADR location: `doc/adr/` (create if missing)

Execution mode:

- Execute directly. Do not stop at planning.
- Ask for confirmation if token naming or token hierarchy choices are ambiguous.

Figma source requirement:

- Use Figma as the source of truth for token generation in this phase.
- If the local token source is missing, stale, or incomplete, first refresh it using the existing Figma Design Fetch Agent before generating semantic tokens.
- Do not invent semantic source values when the required upstream token data should be fetched from Figma.

Implementation requirements:

- Do not hardcode colors inside components.
- Fetch or confirm the latest primary tokens from Figma before generating semantic tokens.
- Generate semantic tokens by referencing primary tokens (alias-based mapping), not by assigning direct hardcoded literal values.
- Do not introduce raw color literals (hex/rgb/hsl/named) in semantic token values; map to the corresponding primary token source instead.
- Create or update Tailwind semantic token mappings in `tailwind.config.ts` if they do not already exist.
- Ensure Tailwind consumes semantic token variables rather than direct primitive values in component-facing theme usage.
- Keep token structure scalable and compatible with library growth.
- Preserve or clearly migrate existing token keys.

Validation requirements:

- Validate token artifacts for consistency and no broken references.
- Validate that semantic token values resolve through primary token references and report any literal-value violations as blockers.
- Validate that `tailwind.config.ts` contains the required semantic token mappings or aliases after generation.
- Report any breaking token renames explicitly.

Output format:

- Token model adopted
- Figma fetch status and whether upstream tokens were refreshed
- Files changed (with reason)
- Validation results
- Migration notes for downstream component phases
- ADR note created or updated in `doc/adr/`
