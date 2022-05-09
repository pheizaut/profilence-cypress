// Tests newsletter signup

describe('Newsletter signup', () => {
  beforeEach(() => {
    cy.visit('https://profilence.com/newsletter/')
    {
      //cookies
      cy.get(
        '[id="hs-eu-cookie-confirmation-inner"] [id="hs-eu-confirmation-button"]',
      )
        .click()
        .wait(200)
        .get('[id="hs-eu-cookie-confirmation-inner"]')
        .should('not.be.visible')
      cy.get('[id="cn-accept-cookie"]')
        .click()
        .wait(200)
        .get('[id="cn-accept-cookie"]')
        .should('not.be.visible')
    }
  })

  it('Actions', () => {
    //

    {
      //
      cy.get('[name="EMAIL"]')
        .type('text@email.com')
        .should('have.value', 'text@email.com')

      cy.get('[name="gdpr[45714]"]').check().should('be.checked')
    }
  })
})
