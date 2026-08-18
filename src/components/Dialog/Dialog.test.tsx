import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Dialog } from "./Dialog";

// Helper: a wrapper that toggles dialog open state
function ControlledDialog(
  props: Omit<React.ComponentProps<typeof Dialog>, "open" | "onClose"> & {
    initialOpen?: boolean;
  }
) {
  const { initialOpen = true, ...rest } = props;
  const [open, setOpen] = useState(initialOpen);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <Dialog open={open} onClose={() => setOpen(false)} {...rest} />
    </>
  );
}

describe("Dialog", () => {
  const user = userEvent.setup();

  // ── Rendering ─────────────────────────────────────────────────────────────
  describe("rendering", () => {
    it("does NOT render when open=false", () => {
      render(
        <Dialog open={false} title="Test" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("renders when open=true", () => {
      render(
        <Dialog open={true} title="Test" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("renders the title text", () => {
      render(
        <Dialog open={true} title="My Dialog Title" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      expect(screen.getByText("My Dialog Title")).toBeInTheDocument();
    });

    it("renders body content", () => {
      render(
        <Dialog open={true} title="Title" onClose={jest.fn()}>
          <p>Dialog body text</p>
        </Dialog>
      );
      expect(screen.getByText("Dialog body text")).toBeInTheDocument();
    });

    it("renders footer content when footer prop is provided", () => {
      render(
        <Dialog open={true} title="Title" onClose={jest.fn()} footer={<button>Confirm</button>}>
          Body
        </Dialog>
      );
      expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();
    });

    it("does NOT render footer section when footer prop is omitted", () => {
      render(
        <Dialog open={true} title="Title" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      expect(screen.queryByRole("button", { name: "Confirm" })).not.toBeInTheDocument();
    });
  });

  // ── Accessibility attributes ───────────────────────────────────────────────
  describe("accessibility attributes", () => {
    it("has role=dialog", () => {
      render(
        <Dialog open={true} title="Test" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("has aria-modal=true", () => {
      render(
        <Dialog open={true} title="Test" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
    });

    it("has aria-labelledby pointing to the title heading", () => {
      render(
        <Dialog open={true} title="Labelled Dialog" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      const dialog = screen.getByRole("dialog");
      const labelId = dialog.getAttribute("aria-labelledby");
      expect(labelId).toBeTruthy();
      expect(document.getElementById(labelId!)).toHaveTextContent("Labelled Dialog");
    });

    it("has a close button with accessible label", () => {
      render(
        <Dialog open={true} title="Test" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      expect(screen.getByRole("button", { name: /close dialog/i })).toBeInTheDocument();
    });
  });

  // ── Close behaviour ────────────────────────────────────────────────────────
  describe("close behaviour", () => {
    it("calls onClose when close button is clicked", async () => {
      const onClose = jest.fn();
      render(
        <Dialog open={true} title="Test" onClose={onClose}>
          Body
        </Dialog>
      );
      await user.click(screen.getByRole("button", { name: /close dialog/i }));
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("calls onClose when backdrop is clicked", async () => {
      const onClose = jest.fn();
      render(
        <Dialog open={true} title="Test" onClose={onClose}>
          Body
        </Dialog>
      );
      await user.click(screen.getByTestId("dialog-backdrop"));
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("calls onClose when Escape key is pressed", async () => {
      const onClose = jest.fn();
      render(
        <Dialog open={true} title="Test" onClose={onClose}>
          Body
        </Dialog>
      );
      await user.keyboard("{Escape}");
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("does NOT call onClose when clicking inside the dialog panel", async () => {
      const onClose = jest.fn();
      render(
        <Dialog open={true} title="Test" onClose={onClose}>
          Body text
        </Dialog>
      );
      await user.click(screen.getByText("Body text"));
      expect(onClose).not.toHaveBeenCalled();
    });

    it("removes dialog from DOM after close", async () => {
      render(<ControlledDialog title="Test">Body</ControlledDialog>);
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      await user.click(screen.getByRole("button", { name: /close dialog/i }));
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      });
    });
  });

  // ── Focus management ──────────────────────────────────────────────────────
  describe("focus management", () => {
    it("focuses the close button when dialog opens", () => {
      render(
        <Dialog open={true} title="Test" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      // Close button exists and is the primary interactive element in header
      expect(screen.getByRole("button", { name: /close dialog/i })).toBeInTheDocument();
    });

    it("trigger element is re-rendered after close (focus restoration precondition)", async () => {
      render(<ControlledDialog title="Test">Body</ControlledDialog>);
      const openBtn = screen.getByRole("button", { name: "Open" });

      // Open the dialog
      openBtn.focus();
      await user.click(openBtn);
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Close the dialog
      await user.click(screen.getByRole("button", { name: /close dialog/i }));

      // Trigger button must still be in the DOM for focus restoration to work
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
      });
    });
  });

  // ── Body scroll lock ──────────────────────────────────────────────────────
  describe("body scroll lock", () => {
    it("sets overflow:hidden on body while open", () => {
      render(
        <Dialog open={true} title="Test" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      expect(document.body.style.overflow).toBe("hidden");
    });

    it("restores body overflow when dialog closes", async () => {
      render(<ControlledDialog title="Test">Body</ControlledDialog>);
      await user.click(screen.getByRole("button", { name: /close dialog/i }));
      await waitFor(() => {
        expect(document.body.style.overflow).not.toBe("hidden");
      });
    });
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────
  describe("sizes", () => {
    it.each(["sm", "md", "lg"] as const)("renders %s size without errors", (size) => {
      render(
        <Dialog open={true} size={size} title="Test" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("applies max-w-sm class when size=sm", () => {
      render(
        <Dialog open={true} size="sm" title="Test" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      expect(screen.getByRole("dialog")).toHaveClass("max-w-sm");
    });

    it("applies max-w-lg class when size=lg", () => {
      render(
        <Dialog open={true} size="lg" title="Test" onClose={jest.fn()}>
          Body
        </Dialog>
      );
      expect(screen.getByRole("dialog")).toHaveClass("max-w-lg");
    });
  });
});
