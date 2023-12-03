const NavigationPage = require("../support/page-object/NavigationPage");
const HomePage = require("../support/page-object/HomePage");
describe('Footer tests', () => {

    beforeEach('Visit base url', () => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('Verify that the footer is visible on the home page', () => {
        NavigationPage.clickHomeLink()
        cy.url().should("eq", Cypress.config().baseUrl + '/index.html')
        HomePage.verifyThatFooterIsVisible()
    })
})