import { Button } from "../../src/components/Button/Button";

describe("Button", () => {
  // ── Mounting & Rendering ──────────────────────────────────────────────────
  it("mounts without errors", () => {
    cy.mount(<Button>Hello</Button>);
    cy.get("button").should("exist");
  });

  it("renders label text", () => {
    cy.mount(<Button>Click me</Button>);
    cy.get("button").should("contain.text", "Click me");
  });

  it("renders primary variant by default", () => {
    cy.mount(<Button>Primary</Button>);
    cy.get("button").should("have.class", "bg-brand");
  });

  it("renders secondary variant", () => {
    cy.mount(<Button variant="secondary">Secondary</Button>);
    cy.get("button").should("have.class", "bg-surface-muted");
  });

  it("renders outline variant", () => {
    cy.mount(<Button variant="outline">Outline</Button>);
    cy.get("button").should("have.class", "border");
    cy.get("button").should("have.class", "border-stroke-strong");
  });

  it("renders ghost variant", () => {
    cy.mount(<Button variant="ghost">Ghost</Button>);
    cy.get("button").should("have.class", "bg-transparent");
  });

  it("renders link variant", () => {
    cy.mount(<Button variant="link">Link</Button>);
    cy.get("button").should("have.class", "text-brand");
    cy.get("button").should("have.class", "hover:underline");
  });

  it("renders danger modifier", () => {
    cy.mount(
      <Button variant="primary" danger>
        Danger Primary
      </Button>
    );
    cy.get("button").should("have.class", "bg-danger");
  });

  it("renders small size", () => {
    cy.mount(<Button size="sm">Small</Button>);
    cy.get("button").should("have.class", "text-xs");
  });

  it("renders large size", () => {
    cy.mount(<Button size="lg">Large</Button>);
    cy.get("button").should("have.class", "rounded-lg");
  });

  it("renders left icon", () => {
    cy.mount(<Button leftIcon={<span data-cy="icon-left">★</span>}>With icon</Button>);
    cy.get("[data-cy='icon-left']").should("exist");
  });

  it("renders right icon", () => {
    cy.mount(<Button rightIcon={<span data-cy="icon-right">→</span>}>With icon</Button>);
    cy.get("[data-cy='icon-right']").should("exist");
  });

  // ── Interactions ──────────────────────────────────────────────────────────
  it("fires onClick callback when clicked", () => {
    const onClick = cy.stub().as("onClick");
    cy.mount(<Button onClick={onClick}>Click</Button>);
    cy.get("button").click();
    cy.get("@onClick").should("have.been.calledOnce");
  });

  it("fires onKeyDown callback when key is pressed", () => {
    const onKeyDown = cy.stub().as("onKeyDown");
    cy.mount(<Button onKeyDown={onKeyDown}>Keyboard</Button>);
    cy.get("button").focus().trigger("keydown", { key: "Enter", code: "Enter", bubbles: true });
    cy.get("@onKeyDown").should("have.been.called");
  });

  // ── Disabled state ────────────────────────────────────────────────────────
  it("has aria-disabled=true when disabled", () => {
    cy.mount(<Button disabled>Disabled</Button>);
    cy.get("button").should("have.attr", "aria-disabled", "true");
  });

  it("does NOT have native disabled attribute (stays focusable)", () => {
    cy.mount(<Button disabled>Disabled</Button>);
    cy.get("button").should("not.be.disabled");
  });

  it("does NOT fire onClick when disabled and clicked", () => {
    const onClick = cy.stub().as("onClick");
    cy.mount(
      <Button disabled onClick={onClick}>
        Disabled
      </Button>
    );
    cy.get("button").click({ force: true });
    cy.get("@onClick").should("not.have.been.called");
  });

  it("applies cursor-not-allowed class when disabled", () => {
    cy.mount(<Button disabled>Disabled</Button>);
    cy.get("button").should("have.class", "cursor-not-allowed");
  });

  // ── Accessibility ─────────────────────────────────────────────────────────
  it("is a focusable button element", () => {
    cy.mount(<Button>Focusable</Button>);
    // Button should be in the tab order (no tabindex=-1)
    cy.get("button").should("not.have.attr", "tabindex", "-1");
  });
});
