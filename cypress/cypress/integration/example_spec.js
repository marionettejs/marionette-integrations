describe("Marionette with Cypress", function() {

  before(function () {
    cy.visit("http://127.0.0.1:8080")
  })

  it("should show content", function(){
    cy
      .get(".js-toggle-sources-btn").click()
      .get(".js-sources-container").should("not.have.class", "hide")
  })

  it("should hide content", function(){
    cy
      .get(".js-toggle-sources-btn").click()
      .get(".js-sources-container").should("have.class", "hide")
  })
});