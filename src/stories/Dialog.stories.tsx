import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "storybook/test";
import { useArgs } from "storybook/preview-api";
import { useState } from "react";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import { Dialog } from "../components/Dialog/Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description:
        "Controls dialog visibility. Toggle this in the Controls panel to open / close the dialog interactively.",
      table: {
        category: "State",
        defaultValue: { summary: "false" },
      },
    },
    title: {
      control: "text",
      description:
        "Dialog heading — rendered in the header and announced to screen readers via `aria-labelledby`.",
      table: { category: "Content" },
    },
    children: {
      control: "text",
      description: "Dialog body content. Accepts any React node.",
      table: { category: "Content" },
    },
    footer: {
      control: false,
      description:
        "Optional footer content — typically action buttons. Renders in a bordered footer section.",
      table: { category: "Content" },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Size variant of the dialog panel width constraints.",
      table: {
        category: "Appearance",
        defaultValue: { summary: "md" },
      },
    },
    onClose: {
      description:
        "Fired when the dialog should close: ESC key, backdrop click, or close button click.",
      table: { category: "Events" },
    },
  },
  args: {
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        component: `
Accessible modal dialog for the Faster design system.

Implements the WCAG 2.1 AA modal pattern:
- **Focus trap** — Tab / Shift+Tab cycles within the dialog
- **Focus restore** — returns focus to the trigger element on close
- \`aria-modal="true"\`, \`role="dialog"\`, \`aria-labelledby\`
- **ESC key** closes the dialog
- **Backdrop click** closes the dialog
- **Body scroll lock** — prevents background scroll while open
- Supports **sm**, **md**, and **lg** size width limits.

Use the **Controls** panel to toggle \`open\` and see the dialog appear/disappear in real time.
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ── Stories ─────────────────────────────────────────────────────────────────

/**
 * Default dialog — uses `useArgs` so toggling `open` in the Controls panel
 * actually opens/closes the dialog. Click the button below to try it.
 */
export const Default: Story = {
  args: {
    open: false,
    title: "Confirm action",
    children: "Are you sure you want to proceed? This action cannot be undone.",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Minimal dialog. Toggle `open` in the **Controls** panel — or click **Open dialog** — to see it in action.",
      },
    },
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs<{ open: boolean }>();
    return (
      <div className="flex h-40 items-center justify-center">
        <Button onClick={() => updateArgs({ open: true })}>Open dialog</Button>
        <Dialog
          {...args}
          open={open}
          onClose={() => {
            updateArgs({ open: false });
            args.onClose();
          }}
        />
      </div>
    );
  },
};

/** Dialog with primary + secondary action buttons in the footer slot. */
export const WithFooter: Story = {
  args: {
    open: false,
    title: "Delete item",
    children:
      "This will permanently delete the selected item and all associated data. This action cannot be undone.",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Dialog with a footer slot containing confirm and cancel actions.",
      },
    },
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs<{ open: boolean }>();
    return (
      <div className="flex h-40 items-center justify-center">
        <Button variant="outline" onClick={() => updateArgs({ open: true })}>
          Delete item
        </Button>
        <Dialog
          {...args}
          open={open}
          onClose={() => {
            updateArgs({ open: false });
            args.onClose();
          }}
          footer={
            <>
              <Button
                variant="ghost"
                onClick={() => {
                  updateArgs({ open: false });
                  args.onClose();
                }}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                danger
                onClick={() => {
                  updateArgs({ open: false });
                  args.onClose();
                }}
              >
                Delete
              </Button>
            </>
          }
        />
      </div>
    );
  },
};

/** Dialog with long body content — the body area scrolls independently. */
export const LongContent: Story = {
  args: {
    open: false,
    title: "Terms and Conditions",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "When body content overflows, the dialog body scrolls while the header and footer stay fixed.",
      },
    },
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs<{ open: boolean }>();
    const loremParagraphs = Array.from(
      { length: 6 },
      (_, i) =>
        `Section ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    );
    return (
      <div className="flex h-40 items-center justify-center">
        <Button onClick={() => updateArgs({ open: true })}>Read terms</Button>
        <Dialog
          {...args}
          open={open}
          onClose={() => {
            updateArgs({ open: false });
            args.onClose();
          }}
          footer={
            <Button onClick={() => updateArgs({ open: false })}>I agree</Button>
          }
        >
          <div className="space-y-3">
            {loremParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Dialog>
      </div>
    );
  },
};

/** Dialog containing form input elements. Tests focus cycle inside the focus trap. */
export const WithForm: Story = {
  args: {
    open: false,
    title: "Edit profile",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "A dialog containing input form elements. The focus trap cycles focus correctly through the fields and action buttons.",
      },
    },
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs<{ open: boolean }>();
    return (
      <div className="flex h-40 items-center justify-center">
        <Button onClick={() => updateArgs({ open: true })}>Edit profile</Button>
        <Dialog
          {...args}
          open={open}
          onClose={() => {
            updateArgs({ open: false });
            args.onClose();
          }}
          footer={
            <>
              <Button
                variant="ghost"
                onClick={() => {
                  updateArgs({ open: false });
                  args.onClose();
                }}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  updateArgs({ open: false });
                  args.onClose();
                }}
              >
                Save changes
              </Button>
            </>
          }
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateArgs({ open: false });
            }}
            className="space-y-4"
          >
            <Input label="Name" placeholder="John Doe" required id="form-name" />
            <Input label="Email" type="email" placeholder="john@example.com" required id="form-email" />
          </form>
        </Dialog>
      </div>
    );
  },
};

/** Destructive alert modal — highlights critical decisions with danger states. */
export const Destructive: Story = {
  args: {
    open: false,
    title: "Revoke API access token",
    children: "This will immediately revoke the access token. Any requests using this token will fail. This action cannot be reversed.",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Destructive confirmation dialog using a warning message and a danger primary action.",
      },
    },
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs<{ open: boolean }>();
    return (
      <div className="flex h-40 items-center justify-center">
        <Button variant="outline" onClick={() => updateArgs({ open: true })}>
          Revoke token
        </Button>
        <Dialog
          {...args}
          open={open}
          onClose={() => {
            updateArgs({ open: false });
            args.onClose();
          }}
          footer={
            <>
              <Button
                variant="ghost"
                onClick={() => {
                  updateArgs({ open: false });
                  args.onClose();
                }}
              >
                Keep active
              </Button>
              <Button
                variant="primary"
                danger
                onClick={() => {
                  updateArgs({ open: false });
                  args.onClose();
                }}
              >
                Revoke access
              </Button>
            </>
          }
        />
      </div>
    );
  },
};

/** Simple dialog with informational content and no action buttons in the footer. */
export const NoFooter: Story = {
  args: {
    open: false,
    title: "System notice",
    children: "Maintenance is scheduled for tonight at 23:00 UTC. The platform will remain online, but minor latency variations might occur.",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "A simple informational modal dialog without action buttons in the footer.",
      },
    },
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs<{ open: boolean }>();
    return (
      <div className="flex h-40 items-center justify-center">
        <Button onClick={() => updateArgs({ open: true })}>Read notice</Button>
        <Dialog
          {...args}
          open={open}
          onClose={() => {
            updateArgs({ open: false });
            args.onClose();
          }}
        />
      </div>
    );
  },
};

/** Comparative demo of all sizes (sm, md, lg) side-by-side. */
export const AllSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: "Compare width constraints of small, medium, and large dialogs side-by-side.",
      },
    },
  },
  render: function Render(args) {
    const [size, setSize] = useState<"sm" | "md" | "lg" | null>(null);
    return (
      <div className="flex items-center justify-center gap-3 h-40">
        <Button variant="outline" onClick={() => setSize("sm")}>Small Dialog</Button>
        <Button variant="outline" onClick={() => setSize("md")}>Medium Dialog</Button>
        <Button variant="outline" onClick={() => setSize("lg")}>Large Dialog</Button>
        <Dialog
          {...args}
          open={size !== null}
          size={size || "md"}
          title={`${size ? size.toUpperCase() : ""} Dialog Panel`}
          onClose={() => setSize(null)}
          footer={<Button onClick={() => setSize(null)}>Close</Button>}
        >
          This dialog panel uses the <strong>{size}</strong> width configuration.
        </Dialog>
      </div>
    );
  },
};

/**
 * Interactive playground — all props exposed.
 * Toggle `open` in the Controls panel to open/close the dialog.
 */
export const Playground: Story = {
  args: {
    open: false,
    title: "Playground Dialog",
    children: "Edit the Controls panel below to customise this dialog in real time.",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Full interactive playground. Toggle `open`, edit `title` and `children` in the **Controls** panel.",
      },
    },
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs<{ open: boolean }>();
    return (
      <div className="flex h-40 items-center justify-center">
        <Button onClick={() => updateArgs({ open: true })}>Open playground dialog</Button>
        <Dialog
          {...args}
          open={open}
          onClose={() => {
            updateArgs({ open: false });
            args.onClose();
          }}
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /open playground dialog/i }));
  },
};
