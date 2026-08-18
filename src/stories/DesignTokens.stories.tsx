import type { Meta, StoryObj } from "@storybook/react";

// ── Token data ───────────────────────────────────────────────────────────────

const colorTokens = [
  // Brand
  { name: "bg-brand", cssVar: "--color-bg-primary", label: "Brand", category: "Brand" },
  { name: "bg-brand-hover", cssVar: "--color-bg-primary-hover", label: "Brand Hover", category: "Brand" },
  { name: "bg-brand-subtle", cssVar: "--color-bg-primary-subtle", label: "Brand Subtle", category: "Brand" },
  // Surface
  { name: "bg-surface", cssVar: "--color-bg-surface", label: "Surface", category: "Surface" },
  { name: "bg-surface-muted", cssVar: "--color-bg-surface-muted", label: "Surface Muted", category: "Surface" },
  // Content
  { name: "text-content", cssVar: "--color-text-primary", label: "Content", category: "Content" },
  { name: "text-content-muted", cssVar: "--color-text-secondary", label: "Content Muted", category: "Content" },
  { name: "text-content-inverse", cssVar: "--color-text-inverse", label: "Content Inverse", category: "Content" },
  // Stroke
  { name: "border-stroke", cssVar: "--color-border-subtle", label: "Stroke", category: "Stroke" },
  { name: "border-stroke-strong", cssVar: "--color-border-strong", label: "Stroke Strong", category: "Stroke" },
  // Status
  { name: "bg-danger", cssVar: "--color-feedback-danger", label: "Danger", category: "Status" },
  { name: "bg-info", cssVar: "--color-feedback-info", label: "Info", category: "Status" },
  { name: "bg-success", cssVar: "--color-feedback-success", label: "Success", category: "Status" },
  { name: "bg-warning", cssVar: "--color-feedback-warning", label: "Warning", category: "Status" },
  // Disabled
  { name: "bg-disabled-bg", cssVar: "--color-disabled-bg", label: "Disabled Bg", category: "Disabled" },
  { name: "bg-disabled-text", cssVar: "--color-disabled-text", label: "Disabled Text", category: "Disabled" },
  { name: "bg-disabled-border", cssVar: "--color-disabled-border", label: "Disabled Border", category: "Disabled" },
];

const elevationTokens = [
  { name: "shadow-elevation-1", cssVar: "--elevation-level-1", label: "Elevation 1" },
  { name: "shadow-elevation-2", cssVar: "--elevation-level-2", label: "Elevation 2" },
  { name: "shadow-elevation-3", cssVar: "--elevation-level-3", label: "Elevation 3" },
  { name: "shadow-elevation-4", cssVar: "--elevation-level-4", label: "Elevation 4" },
];

const typographyTokens = [
  { label: "H1 / Medium", cls: "text-3xl font-medium leading-tight", sample: "The quick brown fox" },
  { label: "Title / Medium", cls: "text-lg font-medium leading-tight", sample: "The quick brown fox" },
  { label: "Subtitle / Medium", cls: "text-base font-medium leading-normal", sample: "The quick brown fox" },
  { label: "Body / Medium", cls: "text-sm font-medium leading-snug", sample: "The quick brown fox" },
  { label: "Subtitle / Regular", cls: "text-base font-normal leading-normal", sample: "The quick brown fox" },
  { label: "Body / Regular", cls: "text-sm font-normal leading-snug", sample: "The quick brown fox" },
  { label: "Caption / Regular", cls: "text-xs font-normal leading-snug", sample: "The quick brown fox" },
];

// ── Components ───────────────────────────────────────────────────────────────

function ColorGroup({ category, tokens }: { category: string; tokens: typeof colorTokens }) {
  const group = tokens.filter((t) => t.category === category);
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-medium uppercase tracking-wider text-content-muted">{category}</h3>
      <div className="flex flex-wrap gap-3">
        {group.map((token) => (
          <div key={token.name} className="flex flex-col gap-1.5" style={{ minWidth: "100px" }}>
            <div
              className="h-12 w-full rounded-md border border-stroke"
              style={{ backgroundColor: `var(${token.cssVar})` }}
            />
            <div className="space-y-0.5">
              <p className="text-xs font-medium text-content">{token.label}</p>
              <code className="text-xs text-content-muted">{token.cssVar}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DesignTokensPage() {
  const categories = [...new Set(colorTokens.map((t) => t.category))];

  return (
    <div className="min-h-screen bg-surface p-8 font-sans text-content">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="space-y-2 border-b border-stroke pb-6">
          <h1 className="text-3xl font-medium text-content">Design Tokens</h1>
          <p className="text-sm text-content-muted">
            All semantic tokens extracted from the TapTap Figma file. Switch the Storybook
            background to <strong>dark</strong> to see the dark-theme values update automatically.
          </p>
        </div>

        {/* Colors */}
        <section className="space-y-8">
          <h2 className="text-lg font-medium text-content">Colors</h2>
          {categories.map((cat) => (
            <ColorGroup key={cat} category={cat} tokens={colorTokens} />
          ))}
        </section>

        {/* Typography */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-content">Typography Scale</h2>
          <div className="rounded-lg border border-stroke overflow-hidden">
            {typographyTokens.map((t, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-stroke p-4 last:border-b-0"
              >
                <span className={`${t.cls} text-content`}>{t.sample}</span>
                <code className="text-xs text-content-muted">{t.label}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Elevation */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-content">Elevation</h2>
          <div className="flex flex-wrap gap-6">
            {elevationTokens.map((e) => (
              <div key={e.name} className="flex flex-col gap-3 items-center">
                <div
                  className={`${e.name} h-16 w-24 rounded-lg bg-surface`}
                />
                <div className="text-center">
                  <p className="text-xs font-medium text-content">{e.label}</p>
                  <code className="text-xs text-content-muted">{e.cssVar}</code>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// ── Story ────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Foundation/Design Tokens",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A live reference for all Faster design tokens extracted from the **TapTap Figma file**.

All tokens are defined as CSS custom properties and aliased via semantic names in \`design/tokens/semantic-tokens.css\`. Tailwind uses these CSS variables so components pick up theme changes with zero code modifications.

**Toggle the Storybook background to dark** to see the entire token set update automatically.
        `.trim(),
      },
    },
    // Disable a11y for the token reference page — it is documentation, not a user-facing component
    a11y: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const AllTokens: Story = {
  name: "All Tokens",
  render: () => <DesignTokensPage />,
  parameters: {
    docs: {
      description: {
        story: "Visual reference showing all colour swatches, typography scale, and elevation levels.",
      },
    },
  },
};
