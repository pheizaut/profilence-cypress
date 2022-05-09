// Tests dynamic site interactions and navigation

describe('General tests', () => {
  beforeEach(() => {
    cy.visit('https://profilence.com/')
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

  it('navbar', () => {
    //

    cy.get(
      '[class="nav-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-106 menu-item-has-children"]',
    )
      .click()
      .find('ul')
      .should('be.visible')
      .find('[href="https://profilence.com/company/"]')
      .click()
      .url()
      .should('be.equals', 'https://profilence.com/company/')
  })

  it('scroll', () => {
    cy.get('[class="header headroom headroom--top headroom--not-bottom"]')
    cy.scrollTo('bottom', { duration: 2000 })
    cy.get(
      '[class="header headroom headroom--not-top headroom--unpinned headroom--bottom"]',
    )
  })

  it('swiper', () => {
    cy.get('.element-front-page-hero')
      .find(
        '[class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"]',
      )
      .find('[aria-label="Go to slide 1"]')
      .should('have.class', 'swiper-pagination-bullet-active')

    cy.get('.element-front-page-hero')
      .find('[aria-label="Go to slide 2"]')
      .click()
      .should('have.class', 'swiper-pagination-bullet-active')

    cy.get('.element-front-page-hero')
      .find('[aria-label="Go to slide 3"]')
      .click()
      .should('have.class', 'swiper-pagination-bullet-active')

    cy.get('.element-front-page-hero')
      .find('[aria-label="Go to slide 4"]')
      .click()
      .should('have.class', 'swiper-pagination-bullet-active')

    cy.get('.element-front-page-hero')
      .find('a[href="https://profilence.com/products/"]')
      .click()
      .url()
      .should('be.equals', 'https://profilence.com/products/')
  })

  it('tabs', () => {
    cy.get('[title="Platform"]')
      .click()
      .url()
      .should('be.equals', 'https://profilence.com/products/')

    cy.get('[id="developers"]').should('not.be.visible')

    cy.get('[aria-controls="developers"]').click()

    cy.get('[id="developers"]').should('be.visible')
  })
})
