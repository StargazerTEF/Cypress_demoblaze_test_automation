const NavigationPage = require("../support/page-object/NavigationPage");
const LoginPage = require("../support/page-object/LoginPage");
describe('Sign up tests', () => {
        let titles
        let labels

        before('Load alerts', () => {
            cy.fixture('titles.json').then(data => {
                titles = data
            })
            cy.fixture('labels.json').then(data => {
                labels = data
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

    it('Verify the username label', () => {
        NavigationPage.clickLoginLink()
        LoginPage.verifyUsernameLabel(labels.usernameLabel)
    })
})
