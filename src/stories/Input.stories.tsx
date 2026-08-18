import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Input } from "../components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description:
        "Visible label text — associated with the input via `htmlFor` / `id` for screen reader support.",
      table: { category: "Content" },
    },
    placeholder: {
      control: "text",
      description: "Placeholder shown when the input is empty.",
      table: { category: "Content" },
    },
    helperText: {
      control: "text",
      description:
        "Descriptive text below the field. Turns red and gains `role=alert` when `error=true`.",
      table: { category: "Content" },
    },
    error: {
      control: "boolean",
      description:
        "Triggers error border colour, `aria-invalid=true`, and colours helperText red.",
      table: {
        category: "State",
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disables editing and applies muted styling.",
      table: {
        category: "State",
        defaultValue: { summary: "false" },
      },
    },
    required: {
      control: "boolean",
      description:
        "Marks the field as required — adds a visible `*` to the label and a screen-reader-only `(required)` text.",
      table: {
        category: "State",
        defaultValue: { summary: "false" },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Size variant of the input field.",
      table: {
        category: "Appearance",
        defaultValue: { summary: "md" },
      },
    },
    value: {
      control: "text",
      description:
        "Controlled value. Leave `undefined` for uncontrolled usage (React manages internal state).",
      table: { category: "Data" },
    },
    id: {
      control: "text",
      description:
        "Explicit `id` for the `<input>`. If omitted, a unique id is auto-generated via `useId`.",
      table: { category: "HTML" },
    },
    onChange: {
      description: "Fires on every keystroke with the native input event.",
      table: { category: "Events" },
    },
  },
  args: {
    onChange: fn(),
  },
  parameters: {
    docs: {
      description: {
        component: `
Text input field for the Faster design system.

Supports a visible **label** (with optional required marker), **placeholder**, **helper text**, and three states: **default**, **error**, and **disabled**.

Full accessibility: label associated via \`htmlFor\`/\`id\`, \`aria-invalid\` on error, \`aria-describedby\` linking to helper text, and \`role=alert\` on error messages for screen readers.

Supports sm, md, and lg size variants, and both **controlled** (\`value\` + \`onChange\`) and \`uncontrolled\` (no \`value\`) usage.
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ── Stories ─────────────────────────────────────────────────────────────────

/** Bare input with no label or helper text. */
export const Default: Story = {
  args: { placeholder: "Enter text…" },
  parameters: {
    docs: { description: { story: "Minimal input — placeholder only, no label or helper text." } },
  },
};

/** Input with an associated label. Clicking the label focuses the input. */
export const WithLabel: Story = {
  args: { label: "Full name", placeholder: "Jane Doe", id: "full-name" },
  parameters: {
    docs: {
      description: {
        story:
          "Label linked to the input via `htmlFor`/`id`. Clicking the label moves focus to the input — essential for a11y.",
      },
    },
  },
};

/** Helper text guides the user without indicating an error. */
export const WithHelperText: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    helperText: "We'll never share your email with anyone.",
    id: "email-helper",
  },
  parameters: {
    docs: {
      description: {
        story: "Helper text provides supporting context below the input. It is linked via `aria-describedby`.",
      },
    },
  },
};

/**
 * Error state — activates red border, `aria-invalid`, and red helper text with `role=alert`.
 */
export const ErrorState: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    value: "not-an-email",
    helperText: "Please enter a valid email address.",
    error: true,
    id: "email-error",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Error state: red border + `aria-invalid=true` + helper text with `role=alert`. Screen readers announce the error immediately.",
      },
    },
  },
};

/** Disabled — the field is non-editable with muted styling. */
export const Disabled: Story = {
  args: {
    label: "Username",
    value: "shashank_trivedi",
    disabled: true,
    id: "username-disabled",
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state — field is non-editable, visually muted, and correctly reported to assistive technology.",
      },
    },
  },
};

/** Required — adds a visible * and a hidden '(required)' for screen readers. */
export const Required: Story = {
  args: {
    label: "Password",
    placeholder: "••••••••",
    required: true,
    id: "password-required",
    type: "password",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Required field: visible `*` marker with `aria-hidden=true` plus a screen-reader-only `(required)` text so all users understand the requirement.",
      },
    },
  },
};

/** All error + required features combined. */
export const RequiredWithError: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    required: true,
    error: true,
    helperText: "Email is required.",
    id: "email-req-error",
  },
  parameters: {
    docs: { description: { story: "Required field in error state — the most complex combination." } },
  },
};

/** Password input - utilizes browser masking by setting type="password". */
export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "••••••••",
    type: "password",
    id: "password-story",
  },
  parameters: {
    docs: { description: { story: "Password input utilizing browser masking (`type='password'`)." } },
  },
};

/** Number input - exposes browser increment/decrement buttons if applicable. */
export const NumberInput: Story = {
  args: {
    label: "Age",
    placeholder: "25",
    type: "number",
    min: 0,
    max: 120,
    id: "age-story",
  },
  parameters: {
    docs: { description: { story: "Number input restricting entry to numeric values with min/max bounds." } },
  },
};

/** Search input - styled with a search type, exposing clear indicators. */
export const Search: Story = {
  args: {
    label: "Search database",
    placeholder: "Search users, transactions, logs...",
    type: "search",
    id: "search-story",
  },
  parameters: {
    docs: { description: { story: "Search input using `type='search'` to support clear controls in compatible browsers." } },
  },
};

/** Story demonstrating layout stability with extremely long labels and helper text wrapping. */
export const WithLongText: Story = {
  args: {
    label: "Confirm your registered, verified and primary email address of record",
    placeholder: "name@company.domain.co.uk",
    helperText: "By submitting this, you confirm that you have read all terms of services, privacy policies, data usage terms, cookies policies and agree to receive marketing notifications from our subsidiaries.",
    id: "long-text-story",
  },
  parameters: {
    docs: { description: { story: "Input displaying text wrap performance under long labels and helper texts." } },
  },
};

/** All sizes (sm, md, lg) side-by-side. */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <Input size="sm" label="Small size" placeholder="sm input" helperText="Helper text for small input" />
      <Input size="md" label="Medium size (default)" placeholder="md input" helperText="Helper text for medium input" />
      <Input size="lg" label="Large size" placeholder="lg input" helperText="Helper text for large input" />
    </div>
  ),
};

/**
 * Interactive playground — use the Controls panel to test every prop.
 */
export const Playground: Story = {
  args: {
    label: "Playground input",
    placeholder: "Type something…",
    helperText: "This is helper text.",
    error: false,
    disabled: false,
    required: false,
    size: "md",
    id: "playground-input",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Full interactive playground. Toggle `error`, `disabled`, `required`, `size` and edit `label` / `helperText` live in the **Controls** panel.",
      },
    },
  },
};
