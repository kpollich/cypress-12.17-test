/// <reference types="cypress" />
describe("page", () => {
  it("works", () => {
    cy.task("log", "Hello from the test");
  });
});
