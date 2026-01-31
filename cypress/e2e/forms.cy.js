describe("Forms functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234"); // نفس البورت
  });

  it("should submit Create Set form with valid input", () => {
    cy.get('[data-cy="createSetName"]').type("My New Set");
    cy.get('[data-cy="createSetButton"]').click();
    cy.contains("My New Set").should("exist");
  });

  it("should show error on empty Create Set form", () => {
    cy.get('[data-cy="createSetButton"]').click();
    cy.contains("Error: Set name cannot be empty").should("exist");
  });

  it("should submit Add Card form with valid input", () => {
    cy.get('[data-cy="addCardFront"]').type("Question?");
    cy.get('[data-cy="addCardBack"]').type("Answer!");
    cy.get('[data-cy="addCardButton"]').click();
    cy.contains("Question?").should("exist");
  });

  it("should show error on empty Add Card form", () => {
    cy.get('[data-cy="addCardButton"]').click();
    cy.contains("Error: Front and Back cannot be empty").should("exist");
  });
});
