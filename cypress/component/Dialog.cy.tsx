import { useState } from "react";
import { Button } from "../../src/components/Button/Button";
import { Dialog } from "../../src/components/Dialog/Dialog";

// Helper — controllable dialog wrapper
function ControlledDialog(props: {
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  initialOpen?: boolean;
}) {
  const [open, setOpen] = useState(props.initialOpen ?? false);
  return (
    <>
      <Button onClick={() => setOpen(true)} data-cy="open-btn">
        Open
      </Button>
      <Dialog
        open={open}
        title={props.title ?? "Test Dialog"}
        onClose={() => setOpen(false)}
        footer={props.footer}
      >
        {props.children ?? "Dialog body content"}
      </Dialog>
    </>
  );
}

describe("Dialog", () => {
  // ── Rendering ─────────────────────────────────────────────────────────────
  it("does NOT render when open=false", () => {
    cy.mount(<ControlledDialog />);
    cy.get("[role='dialog']").should("not.exist");
  });

  it("renders when open=true (after trigger click)", () => {
    cy.mount(<ControlledDialog />);
    cy.get("[data-cy='open-btn']").click();
    cy.get("[role='dialog']").should("be.visible");
  });

  it("renders the title text", () => {
    cy.mount(<ControlledDialog title="My Dialog Title" />);
    cy.get("[data-cy='open-btn']").click();
    cy.contains("My Dialog Title").should("be.visible");
  });

  it("renders body content", () => {
    cy.mount(<ControlledDialog>Custom body text</ControlledDialog>);
    cy.get("[data-cy='open-btn']").click();
    cy.contains("Custom body text").should("be.visible");
  });

  it("renders footer content when provided", () => {
    cy.mount(
      <ControlledDialog footer={<button data-cy="confirm-btn">Confirm</button>} />,
    );
    cy.get("[data-cy='open-btn']").click();
    cy.get("[data-cy='confirm-btn']").should("be.visible");
  });

  // ── Accessibility attributes ───────────────────────────────────────────────
  it("has role=dialog", () => {
    cy.mount(<ControlledDialog />);
    cy.get("[data-cy='open-btn']").click();
    cy.get("[role='dialog']").should("exist");
  });

  it("has aria-modal=true", () => {
    cy.mount(<ControlledDialog />);
    cy.get("[data-cy='open-btn']").click();
    cy.get("[role='dialog']").should("have.attr", "aria-modal", "true");
  });

  it("has aria-labelledby linking to the title", () => {
    cy.mount(<ControlledDialog title="Accessible Title" />);
    cy.get("[data-cy='open-btn']").click();
    cy.get("[role='dialog']").then(($dialog) => {
      const labelId = $dialog.attr("aria-labelledby");
      cy.wrap(labelId).should("not.be.undefined");
      if (labelId) {
        cy.get(`#${labelId}`).should("contain.text", "Accessible Title");
      }
    });
  });

  it("has a close button with accessible label", () => {
    cy.mount(<ControlledDialog />);
    cy.get("[data-cy='open-btn']").click();
    cy.get("[aria-label='Close dialog']").should("exist");
  });

  // ── Close behaviour ────────────────────────────────────────────────────────
  it("closes when close button is clicked", () => {
    cy.mount(<ControlledDialog />);
    cy.get("[data-cy='open-btn']").click();
    cy.get("[role='dialog']").should("be.visible");
    cy.get("[aria-label='Close dialog']").click();
    cy.get("[role='dialog']").should("not.exist");
  });

  it("closes when backdrop is clicked", () => {
    cy.mount(<ControlledDialog />);
    cy.get("[data-cy='open-btn']").click();
    cy.get("[data-testid='dialog-backdrop']").click({ force: true });
    cy.get("[role='dialog']").should("not.exist");
  });

  it("closes when Escape key is pressed", () => {
    cy.mount(<ControlledDialog />);
    cy.get("[data-cy='open-btn']").click();
    cy.get("[role='dialog']").should("be.visible");
    cy.get("body").type("{esc}");
    cy.get("[role='dialog']").should("not.exist");
  });

  it("does NOT close when clicking inside the dialog panel", () => {
    cy.mount(<ControlledDialog>Body content</ControlledDialog>);
    cy.get("[data-cy='open-btn']").click();
    cy.contains("Body content").click();
    cy.get("[role='dialog']").should("be.visible");
  });

  // ── Reopen behaviour ──────────────────────────────────────────────────────
  it("can be opened, closed, and reopened", () => {
    cy.mount(<ControlledDialog />);
    cy.get("[data-cy='open-btn']").click();
    cy.get("[role='dialog']").should("be.visible");
    cy.get("[aria-label='Close dialog']").click();
    cy.get("[role='dialog']").should("not.exist");
    cy.get("[data-cy='open-btn']").click();
    cy.get("[role='dialog']").should("be.visible");
  });
});
