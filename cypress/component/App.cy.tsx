import App from "../../src/App";

describe("App", () => {
  it("renders the Faster UI heading", () => {
    cy.mount(<App />);
    cy.get("h1").should("contain.text", "Faster UI");
  });
});
