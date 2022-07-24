describe("Appointments", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should book an interview", () => {
    cy.visit("/");
  
    cy.contains("[data-testid=day]", "Monday")
      .click()
      .should("have.class", "day-list__item--selected")
  });

});