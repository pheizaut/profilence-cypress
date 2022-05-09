// Opens the blog posts and confirms redirection

describe('Confirm cookies', () => {
  beforeEach(() => {
    cy.visit('https://profilence.com/category/blog/')
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

  it('1', () => {
    //
    cy.get('.btn')
      .eq(0)
      .click()
      .url()
      .should('not.be.equal', 'https://profilence.com/category/blog/')
  })

  it('2', () => {
    //
    cy.get('.btn')
      .eq(1)
      .click()
      .url()
      .should('not.be.equal', 'https://profilence.com/category/blog/')
  })

  it('3', () => {
    //
    cy.get('.btn')
      .eq(2)
      .click()
      .url()
      .should('not.be.equal', 'https://profilence.com/category/blog/')
  })

  it('4', () => {
    //
    cy.get('.btn')
      .eq(3)
      .click()
      .url()
      .should('not.be.equal', 'https://profilence.com/category/blog/')
  })

  it('5', () => {
    //
    cy.get('.btn')
      .eq(4)
      .click()
      .url()
      .should('not.be.equal', 'https://profilence.com/category/blog/')
  })
})
