// Accepts cookies and confirms that the windows disappeared

describe('Confirm cookies', () => {
  beforeEach(() => {
    cy.visit('https://profilence.com/')
  })

  it('Actions', () => {
    //
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
  })
})
