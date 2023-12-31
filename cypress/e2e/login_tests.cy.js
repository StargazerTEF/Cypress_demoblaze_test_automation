const NavigationPage = require("../support/page-object/NavigationPage")
const LoginPage = require("../support/page-object/LoginPage")
const BasePage = require("../support/page-object/BasePage")

describe('Login tests', () => {

        let titles
        let labels
        let alerts
        let credentials

        before('Load titles, labels, alerts and credentials', () => {
            cy.fixture('titles.json').then(data => {
                titles = data
            })
            cy.fixture('labels.json').then(data => {
                labels = data
            })
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

    it('Verify that username input field is visible', () => {
        NavigationPage.clickLoginLink()
        LoginPage.verifyThatUsernameInputFieldIsVisible()
    })

    it('Verify the password label', () => {
        NavigationPage.clickLoginLink()
        LoginPage.verifyPasswordLabel(labels.passwordLabel)
    })

    it('Verify that password input field is visible', () => {
        NavigationPage.clickLoginLink()
        LoginPage.verifyThatPasswordInputFieldIsVisible()
    })

    it('Verify that Login button is visible', () => {
        NavigationPage.clickLoginLink()
        LoginPage.verifyThatLoginButtonIsVisible()
    })

    it('Verify that Login button is enabled', () => {
        NavigationPage.clickLoginLink()
        LoginPage.verifyThatLoginButtonIsEnabled()
    })

    it('Verify that user cannot login without credentials', () => {
        NavigationPage.clickLoginLink()
        LoginPage.clickLoginButton()
        BasePage.windowAlertShouldContain(alerts.alertForBlankLogin)
    })

    it('Verify that user cannot login without password', () => {
        NavigationPage.clickLoginLink()
        LoginPage.fillInUsernameInputField(credentials.newUser)
        LoginPage.clickLoginButton()
        BasePage.windowAlertShouldContain(alerts.alertForBlankLogin)
    })

    it('Verify that user cannot login without username', () => {
        NavigationPage.clickLoginLink()
        LoginPage.fillInPasswordInputField(credentials.validPassword)
        LoginPage.clickLoginButton()
        BasePage.windowAlertShouldContain(alerts.alertForBlankLogin)
    })

    it('Verify that user cannot login with invalid credentials', () => {
        NavigationPage.clickLoginLink()
        LoginPage.fillInUsernameInputField(credentials.invalidUsername)
        LoginPage.fillInPasswordInputField(credentials.invalidPassword)
        LoginPage.clickLoginButton()
        BasePage.windowAlertShouldContain(alerts.alertForUnregisteredUser)
    })

    it('Verify that user can login with valid credentials', () => {
        NavigationPage.clickLoginLink()
        LoginPage.fillInUsernameInputField(credentials.newUser)
        LoginPage.fillInPasswordInputField(credentials.validPassword)
        LoginPage.clickLoginButton()
        NavigationPage.verifyTheWelcomeMessageForLoggedInUser(credentials.newUser)
    })

    it('Verify that Logout link is visible when user is logged in', () => {
        NavigationPage.clickLoginLink()
        LoginPage.fillInUsernameInputField(credentials.newUser)
        LoginPage.fillInPasswordInputField(credentials.validPassword)
        LoginPage.clickLoginButton()
        LoginPage.verifyThatLogOutLinkIsVisible()
    })

    it('Verify that user is logged out', () => {
        NavigationPage.clickLoginLink()
        LoginPage.fillInUsernameInputField(credentials.newUser)
        LoginPage.fillInPasswordInputField(credentials.validPassword)
        LoginPage.clickLoginButton()
        LoginPage.verifyThatLogOutLinkIsVisible()
        LoginPage.clickLogoutLink()
        NavigationPage.verifyThatLoginLinkIsVisible()
    })
})
