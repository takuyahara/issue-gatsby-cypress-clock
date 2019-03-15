/// <reference types="Cypress" />

context(`Issue`, () => {
  beforeEach(() => {
    cy.clock(Date.now(), [
      `setInterval`, 
      `clearInterval`,
      `setTimeout`, // test passes but image never turns sharp
      `clearTimeout`,
    ]);
    cy.visit(`http://localhost:9000`)
  })

  it(`title should contain "Gatsby"`, () => {
    cy.title()
      .should(`contain`, `Gatsby`)
  })
})
