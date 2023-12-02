const NavigationPage = require("../support/page-object/NavigationPage");
const LoginPage = require("../support/page-object/LoginPage");
describe('Sign up tests', () => {

    beforeEach('Visit base url', () => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('Verify that login form is visible', () => {
        NavigationPage.clickLoginLink()
        LoginPage.verifyThatLoginFormIsVisible()
    })
})
