/// <reference types="Cypress" />

context(`Issue`, () => {
  beforeEach(() => {
    cy.clock(Date.now(), [
      `setInterval`,
      `clearInterval`,
      `setTimeout`, // causes error: page will not be rendered
      `clearTimeout`, // causes error: HMR fails
    ]);
    cy.visit(`http://localhost:8000`)
  })

  it(`title should contain "Gatsby"`, () => {
    cy.title()
      .should(`contain`, `Gatsby`)
  })
})
