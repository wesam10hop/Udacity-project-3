describe("Navigation menu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234"); // تأكد نفس البورت اللي Parcel شغال عليه
  });

  it("should go to Card Set page when clicking Card Sets link", () => {
    cy.get('[data-cy="cardSetLink"]').click();
    cy.url().should("include", "/card-set");
  });

  it("should go to About page when clicking About link", () => {
    cy.get('[data-cy="aboutLink"]').click();
    cy.url().should("include", "/about");
  });

  it("should go to Home page when clicking Home link", () => {
    cy.get('[data-cy="homeLink"]').click();
    cy.url().should("include", "/");
  });
});
