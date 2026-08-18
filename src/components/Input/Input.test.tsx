import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  const user = userEvent.setup();

  // ── Rendering ─────────────────────────────────────────────────────────────
  describe("rendering", () => {
    it("renders an input element", () => {
      render(<Input />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("renders a label when label prop is provided", () => {
      render(<Input label="Email address" />);
      expect(screen.getByText("Email address")).toBeInTheDocument();
    });

    it("associates label with input via htmlFor/id", () => {
      render(<Input label="Email" id="email-input" />);
      expect(screen.getByLabelText("Email")).toHaveAttribute("id", "email-input");
    });

    it("auto-generates an id when none is provided (label still links)", () => {
      render(<Input label="Name" />);
      // getByLabelText will throw if label is not associated
      expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });

    it("renders placeholder text", () => {
      render(<Input placeholder="Enter your email" />);
      expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
    });

    it("renders helper text", () => {
      render(<Input helperText="We'll never share your email." />);
      expect(screen.getByText("We'll never share your email.")).toBeInTheDocument();
    });
  });

  // ── States ────────────────────────────────────────────────────────────────
  describe("states", () => {
    it("shows error helper text in error state", () => {
      render(<Input label="Email" id="email" error helperText="Invalid email" />);
      expect(screen.getByText("Invalid email")).toBeInTheDocument();
    });

    it("sets aria-invalid when error=true", () => {
      render(<Input label="Email" id="email" error helperText="Required" />);
      expect(screen.getByLabelText("Email")).toHaveAttribute("aria-invalid", "true");
    });

    it("does NOT set aria-invalid when error=false", () => {
      render(<Input label="Email" id="email" />);
      expect(screen.getByLabelText("Email")).not.toHaveAttribute("aria-invalid");
    });

    it("sets aria-describedby linking input to helper text", () => {
      render(<Input id="email" helperText="Helper text" />);
      const input = screen.getByRole("textbox");
      const helperId = input.getAttribute("aria-describedby");
      expect(helperId).toBeTruthy();
      expect(document.getElementById(helperId!)).toHaveTextContent("Helper text");
    });

    it("is disabled when disabled=true", () => {
      render(<Input label="Name" id="name" disabled />);
      expect(screen.getByLabelText("Name")).toBeDisabled();
    });

    it("does not fire onChange when disabled", async () => {
      const onChange = jest.fn();
      render(<Input label="Name" id="name" disabled onChange={onChange} />);
      await user.type(screen.getByLabelText("Name"), "hello");
      expect(onChange).not.toHaveBeenCalled();
    });

    it("shows required indicator (*) in label", () => {
      render(<Input label="Name" id="name" required />);
      expect(screen.getByText("*")).toBeInTheDocument();
    });

    it("adds screen-reader-only '(required)' text", () => {
      render(<Input label="Name" id="name" required />);
      expect(screen.getByText("(required)")).toBeInTheDocument();
    });
  });

  // ── Interactions ──────────────────────────────────────────────────────────
  describe("interactions", () => {
    it("fires onChange on typing (controlled usage)", async () => {
      const onChange = jest.fn();
      render(<Input label="Name" id="name" value="" onChange={onChange} />);
      await user.type(screen.getByLabelText("Name"), "A");
      expect(onChange).toHaveBeenCalled();
    });

    it("accepts typed text in uncontrolled mode", async () => {
      render(<Input label="Search" id="search" />);
      const input = screen.getByLabelText("Search") as HTMLInputElement;
      await user.type(input, "hello");
      expect(input.value).toBe("hello");
    });

    it("focuses on click", async () => {
      render(<Input label="Name" id="name" />);
      const input = screen.getByLabelText("Name");
      await user.click(input);
      expect(input).toHaveFocus();
    });

    it("focuses when label is clicked (htmlFor association)", async () => {
      render(<Input label="Email" id="email-focus" />);
      await user.click(screen.getByText("Email"));
      expect(screen.getByRole("textbox")).toHaveFocus();
    });
  });

  // ── Accessibility ─────────────────────────────────────────────────────────
  describe("accessibility", () => {
    it("is reachable via keyboard tab", async () => {
      render(<Input label="Email" id="email" />);
      await user.tab();
      expect(screen.getByRole("textbox")).toHaveFocus();
    });

    it("helper text with error has role=alert for screen readers", () => {
      render(<Input id="x" error helperText="Error message" />);
      expect(screen.getByText("Error message")).toHaveAttribute("role", "alert");
    });

    it("helper text without error does NOT have role=alert", () => {
      render(<Input id="x" helperText="Hint text" />);
      expect(screen.getByText("Hint text")).not.toHaveAttribute("role");
    });
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────
  describe("sizes", () => {
    it.each(["sm", "md", "lg"] as const)("renders %s size without errors", (size) => {
      render(<Input size={size} label="Name" id={`name-${size}`} />);
      expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });

    it("applies sm text and padding classes", () => {
      render(<Input size="sm" label="Name" id="name-sm" />);
      expect(screen.getByLabelText("Name")).toHaveClass("px-2.5");
      expect(screen.getByLabelText("Name")).toHaveClass("text-xs");
    });

    it("applies lg text and padding classes", () => {
      render(<Input size="lg" label="Name" id="name-lg" />);
      expect(screen.getByLabelText("Name")).toHaveClass("px-4");
      expect(screen.getByLabelText("Name")).toHaveClass("text-base");
    });
  });
});
