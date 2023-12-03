const NavigationPage = require("../support/page-object/NavigationPage");
const LoginPage = require("../support/page-object/LoginPage");
describe('Sign up tests', () => {
        let titles

        before('Load alerts', () => {
            cy.fixture('titles.json').then(data => {
                titles = data
            })
        })

    beforeEach('Visit base url', () => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('Verify that login form is visible', () => {
        NavigationPage.clickLoginLink()
        LoginPage.verifyThatLoginFormIsVisible()
    })

    it('Verify the login form title', () => {
        NavigationPage.clickLoginLink()
        LoginPage.verifyLoginFormTitle(titles.loginFormTitle)
    })
})
