# ADR-0002: Semantic Tokens Alias Figma Primary Tokens

## Status
Accepted

## Date
2026-08-18

## Context
Phase 03 requires a semantic token layer generated from Figma-derived primary tokens and exposed through Tailwind-friendly mappings. The repository guardrails also prohibit direct hardcoded color literals in component-facing styling.

## Decision
Create semantic token artifacts that alias primary tokens instead of re-declaring literal values.

Implemented scope:
- Primary tokens remain sourced from Figma and stored in design/tokens/tokens.json and design/tokens/tokens.css.
- Semantic aliases are stored in design/tokens/semantic-tokens.json and design/tokens/semantic-tokens.css.
- Tailwind theme mappings reference semantic CSS variables rather than primitive literals.
- Current semantic generation covers colors, typography, borders, and elevation.
- Explicit spacing and radius tokens are deferred because the current Figma token payload does not expose them as primary token collections.

## Alternatives Considered
- Put literal color values directly into semantic tokens: rejected because it duplicates source of truth.
- Skip Tailwind mapping and use raw CSS variables only: rejected because component-facing theme usage should stay centralized.

## Impact
- Semantic naming is decoupled from primitive token values.
- Tailwind usage can rely on semantic intent instead of primitive names.
- Future Figma token refreshes can update primary values with minimal semantic churn.

## Rollback Strategy
- Revert semantic token files and Tailwind mappings.
- Re-run Phase 03 after the Figma token source is refreshed or corrected.

## Affected Files
- design/tokens/semantic-tokens.json
- design/tokens/semantic-tokens.css
- src/index.css
- tailwind.config.ts
