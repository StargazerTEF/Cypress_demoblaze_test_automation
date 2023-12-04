const NavigationPage = require("../support/page-object/NavigationPage");
const HomePage = require("../support/page-object/HomePage");
describe('Products tests', () => {

    beforeEach('Visit base url', () => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('Verify that products are visible on the home page', () => {
        NavigationPage.clickHomeLink()
        HomePage.verifyThatProductsAreVisible()
    })
})