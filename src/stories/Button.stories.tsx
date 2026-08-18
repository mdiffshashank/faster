import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Button } from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "link"],
      description:
        "Visual style of the button. `primary` = filled brand, `secondary` = filled neutral, `outline` = outlined border, `ghost` = transparent hover, `link` = text link.",
      table: {
        category: "Appearance",
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description:
        "Button size — `sm` (Small), `md` (Medium), or `lg` (Large), matching Figma spacing and typography tokens.",
      table: {
        category: "Appearance",
        defaultValue: { summary: "md" },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "Disables click interactions and applies muted styling. Uses `aria-disabled` (not native `disabled`) so the button stays keyboard-focusable.",
      table: {
        category: "State",
        defaultValue: { summary: "false" },
      },
    },
    danger: {
      control: "boolean",
      description: "Applies danger styling accents (red color palette) for destructive actions.",
      table: {
        category: "Appearance",
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "Button label text.",
      table: { category: "Content" },
    },
    leftIcon: {
      control: false,
      description: "Optional React node rendered before the label (aria-hidden).",
      table: { category: "Content" },
    },
    rightIcon: {
      control: false,
      description: "Optional React node rendered after the label (aria-hidden).",
      table: { category: "Content" },
    },
    onClick: {
      description: "Fired on click or Enter / Space key. Blocked when `disabled=true`.",
      table: { category: "Events" },
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Native button type. Defaults to `button` to prevent accidental form submits.",
      table: {
        category: "HTML",
        defaultValue: { summary: "button" },
      },
    },
  },
  args: {
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        component: `
Primary interactive control for the Faster design system.

Supports five visual variants (**primary**, **secondary**, **outline**, **ghost**, **link**), three sizes (**sm**, **md**, **lg**), optional left/right icons, danger variant modifier, and a disabled state that keeps the button keyboard-focusable (\`aria-disabled\`) while blocking all interactions.
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ── Named variants ──────────────────────────────────────────────────────────

/** Primary filled button using the brand color. Highest visual weight. */
export const Primary: Story = {
  args: { variant: "primary", size: "md", children: "Get started" },
};

/** Secondary filled button using neutral backgrounds. Lower visual weight. */
export const Secondary: Story = {
  args: { variant: "secondary", size: "md", children: "Learn more" },
};

/** Outline button with border. Great for medium-emphasis secondary actions. */
export const Outline: Story = {
  args: { variant: "outline", size: "md", children: "Learn more" },
};

/** Ghost button with background only visible on hover. Ideal for tertiary actions. */
export const Ghost: Story = {
  args: { variant: "ghost", size: "md", children: "Cancel" },
};

/** Link button styling for minimal text links. */
export const Link: Story = {
  args: { variant: "link", size: "md", children: "Read terms" },
};

// ── Danger Variant Modifiers ──────────────────────────────────────────────────

/** Danger primary button for high-risk destructive actions. */
export const DangerPrimary: Story = {
  args: { variant: "primary", danger: true, size: "md", children: "Delete Account" },
};

/** Danger outline button for secondary destructive actions. */
export const DangerOutline: Story = {
  args: { variant: "outline", danger: true, size: "md", children: "Discard changes" },
};

/** Danger ghost button for low-emphasis destructive actions. */
export const DangerGhost: Story = {
  args: { variant: "ghost", danger: true, size: "md", children: "Remove item" },
};

/** Danger link button. */
export const DangerLink: Story = {
  args: { variant: "link", danger: true, size: "md", children: "Unsubscribe" },
};

// ── Sizes ───────────────────────────────────────────────────────────────────

/** Small size button — maps to the Figma 'Small' size token (12 px / Caption). */
export const Small: Story = {
  args: { variant: "primary", size: "sm", children: "Small action" },
};

/** Medium size button — maps to the Figma 'Medium' size token (14 px / Body). */
export const Medium: Story = {
  args: { variant: "primary", size: "md", children: "Medium action" },
};

/** Large size button — maps to the Figma 'Large' size token (16 px / Subtitle). */
export const Large: Story = {
  args: { variant: "primary", size: "lg", children: "Large action" },
};

// ── States & Layouts ────────────────────────────────────────────────────────

/**
 * All variants in disabled state, shown side-by-side.
 * Note: `aria-disabled` keeps each button focusable for keyboard users.
 */
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
      <Button variant="link" disabled>
        Link
      </Button>
    </div>
  ),
};

/** Buttons with optional icon slots — left icon, right icon, or both. */
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button
        leftIcon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 5v14M5 12l7-7 7 7" />
          </svg>
        }
      >
        Upload
      </Button>
      <Button
        variant="outline"
        rightIcon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        }
      >
        Continue
      </Button>
      <Button
        variant="ghost"
        leftIcon={<span aria-hidden="true">★</span>}
        rightIcon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        }
      >
        Favourites
      </Button>
    </div>
  ),
};

/** Button with an icon only, no text label. Renders as a perfect square. An explicit `aria-label` must be provided. */
export const IconOnly: Story = {
  args: {
    variant: "outline",
    children: null,
    "aria-label": "Settings",
    leftIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
};

/** All sizes (sm, md, lg) side-by-side for comparison. */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button variant="outline" size="sm">Small Outline</Button>
      <Button variant="outline" size="md">Medium Outline</Button>
      <Button variant="outline" size="lg">Large Outline</Button>
    </div>
  ),
};

/** Full width button container layout. */
export const FullWidth: Story = {
  args: {
    variant: "primary",
    children: "Full Width Button",
    className: "w-full",
  },
  render: (args) => (
    <div style={{ width: "300px" }} className="border border-dashed border-stroke p-4 rounded-lg">
      <Button {...args} />
    </div>
  ),
};

/** Interactive playground for controls validation. */
export const Playground: Story = {
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
    danger: false,
    children: "Playground button",
  },
};
