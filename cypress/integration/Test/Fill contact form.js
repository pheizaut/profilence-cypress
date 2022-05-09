// Fills the contact form and checks the inputs had worked

describe('Fill contact form', () => {
  beforeEach(() => {
    cy.visit('https://profilence.com/contact/')
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

  const getIframeDocument = () => {
    return cy
      .get('iframe[class="hs-form-iframe"]')
      .its('0.contentDocument')
      .should('exist')
  }

  const getIframeBody = () => {
    return getIframeDocument()
      .its('body')
      .should('not.be.undefined')
      .then(cy.wrap)
  }

  it('Actions', () => {
    //

    {
      //iframe
      getIframeBody()
        .find('[name="email"]')
        .click()
        .type('text@email.com')
        .should('have.value', 'text@email.com')

      getIframeBody()
        .find('[name="firstname"]')
        .click()
        .type('text')
        .should('have.value', 'text')

      getIframeBody()
        .find('[name="lastname"]')
        .click()
        .type('text')
        .should('have.value', 'text')

      getIframeBody()
        .find('[name="message"]')
        .click()
        .type('text')
        .should('have.value', 'text')

      getIframeBody().find('[type="checkbox"]').check().should('be.checked')
    }
  })
})
