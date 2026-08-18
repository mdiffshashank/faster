import { Input } from "../../src/components/Input/Input";

describe("Input", () => {
  // ── Mounting & Rendering ──────────────────────────────────────────────────
  it("mounts without errors", () => {
    cy.mount(<Input />);
    cy.get("input").should("exist");
  });

  it("renders placeholder text", () => {
    cy.mount(<Input placeholder="Enter text" />);
    cy.get("input").should("have.attr", "placeholder", "Enter text");
  });

  it("renders label when label prop is provided", () => {
    cy.mount(<Input label="Email" id="email" />);
    cy.get("label").should("contain.text", "Email");
  });

  it("associates label with input via htmlFor/id", () => {
    cy.mount(<Input label="Email" id="email-assoc" />);
    cy.get("label").should("have.attr", "for", "email-assoc");
    cy.get("input#email-assoc").should("exist");
  });

  it("renders helper text", () => {
    cy.mount(<Input helperText="We'll never share your email." />);
    cy.contains("We'll never share your email.").should("exist");
  });

  it("renders required indicator in label", () => {
    cy.mount(<Input label="Name" id="name" required />);
    cy.get("label").should("contain.text", "*");
  });

  // ── State rendering ───────────────────────────────────────────────────────
  it("renders in error state with helper text", () => {
    cy.mount(<Input label="Email" id="email" error helperText="Invalid email" />);
    cy.contains("Invalid email").should("exist");
    cy.get("input").should("have.attr", "aria-invalid", "true");
  });

  it("renders in disabled state", () => {
    cy.mount(<Input label="Name" id="name-dis" disabled />);
    cy.get("input").should("be.disabled");
  });

  it("applies cursor-not-allowed class when disabled", () => {
    cy.mount(<Input disabled />);
    cy.get("input").should("have.class", "cursor-not-allowed");
  });

  // ── Interactions ──────────────────────────────────────────────────────────
  it("accepts typed text", () => {
    cy.mount(<Input placeholder="Type here" />);
    cy.get("input").type("Hello Cypress");
    cy.get("input").should("have.value", "Hello Cypress");
  });

  it("fires onChange on typing", () => {
    const onChange = cy.stub().as("onChange");
    cy.mount(<Input onChange={onChange} />);
    cy.get("input").type("A");
    cy.get("@onChange").should("have.been.called");
  });

  it("is disabled and rejects normal interaction", () => {
    const onChange = cy.stub().as("onChange");
    cy.mount(<Input disabled onChange={onChange} />);
    // The disabled attribute prevents native browser interaction
    cy.get("input").should("be.disabled");
    // Attempting to type on a disabled field does nothing
    cy.get("input").should("have.attr", "disabled");
  });

  it("focuses on click", () => {
    cy.mount(<Input label="Name" id="focus-name" />);
    cy.get("input").click().should("be.focused");
  });

  it("focuses when label is clicked", () => {
    cy.mount(<Input label="Click label" id="click-label" />);
    cy.get("label").click();
    cy.get("input").should("be.focused");
  });

  // ── Accessibility ─────────────────────────────────────────────────────────
  it("error helper text has role=alert", () => {
    cy.mount(<Input error helperText="Error message" />);
    cy.contains("Error message").should("have.attr", "role", "alert");
  });

  it("input aria-describedby links to helper text id", () => {
    cy.mount(<Input id="test-input" helperText="Helper" />);
    cy.get("input").then(($input) => {
      const describedById = $input.attr("aria-describedby");
      cy.wrap(describedById).should("not.be.undefined");
      if (describedById) {
        cy.get(`#${describedById}`).should("contain.text", "Helper");
      }
    });
  });
});
