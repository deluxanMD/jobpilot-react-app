import App from "./App";

describe("<App />", () => {
  it("should handles increment", () => {
    cy.mount(<App />);
    cy.get("button").should("have.text", "0");
    cy.get("button").click();
    cy.get("button").should("have.text", "1");
  });
});
