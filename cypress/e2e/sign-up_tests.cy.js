const NavigationPage = require("../support/page-object/NavigationPage");
const SignUpPage = require("../support/page-object/SignUpPage");
const BasePage = require("../support/page-object/BasePage");
describe('Sign up tests', () => {
    let alerts
    let credentials

    before('Load alerts', () => {
        cy.fixture('alerts.json').then(data => {
            alerts = data
        })
        cy.fixture('credentials.json').then(data => {
            credentials = data
        })
    })

    beforeEach('Visit base url', () => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('Verify that user cannot sign up without credentials', () => {
        NavigationPage.clickSignUpLink()
        SignUpPage.clickSignUpButton()
        BasePage.windowAlertShouldContain(alerts.alertForBlankSignUp)
    })

    it('Verify that user cannot sign up without password', () => {
        NavigationPage.clickSignUpLink()
        SignUpPage.fillInUsernameInputField(credentials.randomUser)
        SignUpPage.clickSignUpButton()
        BasePage.windowAlertShouldContain(alerts.alertForBlankSignUp)
    })

    it('Verify that user cannot sign up without username', () => {
        NavigationPage.clickSignUpLink()
        SignUpPage.fillInPasswordInputField(credentials.randomPassword)
        SignUpPage.clickSignUpButton()
        BasePage.windowAlertShouldContain(alerts.alertForBlankSignUp)
    })

    it('Verify alert message for already existing user', () => {
        NavigationPage.clickSignUpLink()
        SignUpPage.fillInUsernameInputField(credentials.randomUser)
        SignUpPage.fillInPasswordInputField(credentials.randomPassword)
        SignUpPage.clickSignUpButton()
        BasePage.windowAlertShouldContain(alerts.alertForExistingUser)
    })
})
