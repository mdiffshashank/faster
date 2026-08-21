import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  const user = userEvent.setup();

  // ── Rendering ────────────────────────────────────────────────────────────
  describe("rendering", () => {
    it("renders with label text", () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
    });

    it("defaults to type=button (prevents accidental form submit)", () => {
      render(<Button>Submit</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });

    it("accepts and passes through custom className", () => {
      render(<Button className="custom-class">Test</Button>);
      expect(screen.getByRole("button")).toHaveClass("custom-class");
    });

    it("renders a left icon", () => {
      render(<Button leftIcon={<span data-testid="icon-left">★</span>}>Star</Button>);
      expect(screen.getByTestId("icon-left")).toBeInTheDocument();
    });

    it("renders a right icon", () => {
      render(<Button rightIcon={<span data-testid="icon-right">→</span>}>Next</Button>);
      expect(screen.getByTestId("icon-right")).toBeInTheDocument();
    });
  });

  // ── Variants ─────────────────────────────────────────────────────────────
  describe("variants", () => {
    it.each(["primary", "secondary", "outline", "link", "ghost"] as const)(
      "renders %s variant without errors",
      (variant) => {
        render(<Button variant={variant}>{variant}</Button>);
        expect(screen.getByRole("button")).toBeInTheDocument();
      }
    );

    it("applies primary brand background class by default", () => {
      render(<Button>Primary</Button>);
      expect(screen.getByRole("button")).toHaveClass("bg-brand");
    });

    it("applies outline border classes", () => {
      render(<Button variant="outline">Outline</Button>);
      expect(screen.getByRole("button")).toHaveClass("border");
      expect(screen.getByRole("button")).toHaveClass("border-stroke-strong");
    });

    it("applies secondary filled classes", () => {
      render(<Button variant="secondary">Secondary</Button>);
      expect(screen.getByRole("button")).toHaveClass("bg-surface-muted");
    });

    it("applies danger primary classes when danger=true", () => {
      render(
        <Button variant="primary" danger>
          Danger Primary
        </Button>
      );
      expect(screen.getByRole("button")).toHaveClass("bg-danger");
    });

    it("applies danger outline classes when danger=true", () => {
      render(
        <Button variant="outline" danger>
          Danger Outline
        </Button>
      );
      expect(screen.getByRole("button")).toHaveClass("border-danger");
      expect(screen.getByRole("button")).toHaveClass("text-danger");
    });
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────
  describe("sizes", () => {
    it.each(["sm", "md", "lg"] as const)("renders %s size without errors", (size) => {
      render(<Button size={size}>{size}</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("applies sm size class when size=sm", () => {
      render(<Button size="sm">Small</Button>);
      expect(screen.getByRole("button")).toHaveClass("px-3");
      expect(screen.getByRole("button")).toHaveClass("text-xs");
    });

    it("applies lg size class when size=lg", () => {
      render(<Button size="lg">Large</Button>);
      expect(screen.getByRole("button")).toHaveClass("rounded-sm");
      expect(screen.getByRole("button")).toHaveClass("px-6");
    });
  });

  // ── Layouts & Custom States ───────────────────────────────────────────────
  describe("layouts and custom states", () => {
    it("renders square dimensions for icon-only buttons", () => {
      render(<Button size="md" leftIcon={<span data-testid="icon">★</span>} aria-label="Star" />);
      expect(screen.getByRole("button")).toHaveClass("w-10");
      expect(screen.getByRole("button")).toHaveClass("h-10");
      expect(screen.getByRole("button")).toHaveClass("p-0");
    });

    it("applies pressed state classes active: modifier", () => {
      render(<Button variant="primary">Pressed</Button>);
      expect(screen.getByRole("button")).toHaveClass("active:bg-brand-pressed");
    });
  });

  // ── Interactions ──────────────────────────────────────────────────────────
  describe("interactions", () => {
    it("calls onClick when clicked", async () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick}>Click</Button>);
      await user.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("calls onClick on Enter key press", async () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick}>Click</Button>);
      screen.getByRole("button").focus();
      await user.keyboard("{Enter}");
      expect(onClick).toHaveBeenCalled();
    });

    it("calls onClick on Space key press", async () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick}>Click</Button>);
      screen.getByRole("button").focus();
      await user.keyboard(" ");
      expect(onClick).toHaveBeenCalled();
    });
  });

  // ── Disabled state ────────────────────────────────────────────────────────
  describe("disabled state", () => {
    it("has aria-disabled=true when disabled", () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
    });

    it("does NOT have native disabled attribute (stays focusable)", () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole("button")).not.toBeDisabled();
    });

    it("does not call onClick when disabled and clicked", async () => {
      const onClick = jest.fn();
      render(
        <Button disabled onClick={onClick}>
          Disabled
        </Button>
      );
      await user.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });

    it("does not call onClick when disabled and Enter pressed", async () => {
      const onClick = jest.fn();
      render(
        <Button disabled onClick={onClick}>
          Disabled
        </Button>
      );
      screen.getByRole("button").focus();
      await user.keyboard("{Enter}");
      expect(onClick).not.toHaveBeenCalled();
    });

    it("does not call onClick when disabled and Space pressed", async () => {
      const onClick = jest.fn();
      render(
        <Button disabled onClick={onClick}>
          Disabled
        </Button>
      );
      screen.getByRole("button").focus();
      await user.keyboard(" ");
      expect(onClick).not.toHaveBeenCalled();
    });

    it("applies disabled styling classes", () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole("button")).toHaveClass("cursor-not-allowed");
    });
  });

  // ── Accessibility ─────────────────────────────────────────────────────────
  describe("accessibility", () => {
    it("is reachable via keyboard (tab)", async () => {
      render(
        <div>
          <span tabIndex={0}>Before</span>
          <Button>Focusable</Button>
        </div>
      );
      await user.tab();
      await user.tab();
      expect(screen.getByRole("button")).toHaveFocus();
    });

    it("disabled button remains in tab order (aria-disabled, not native disabled)", async () => {
      render(<Button disabled>Disabled</Button>);
      await user.tab();
      expect(screen.getByRole("button")).toHaveFocus();
    });

    it("icon wrappers are aria-hidden", () => {
      render(
        <Button leftIcon={<span>★</span>} rightIcon={<span>→</span>}>
          Btn
        </Button>
      );
      const icons = screen.getByRole("button").querySelectorAll('[aria-hidden="true"]');
      expect(icons).toHaveLength(2);
    });
  });
});
