class LoginPage {

    elements = {
        loginForm: () => cy.get('div#logInModal .modal-content'),
        loginFormTitle: () => cy.get('#logInModalLabel'),
        usernameLabel: () => cy.get('label[for="log-name"]'),
        usernameInputField: () => cy.get('#loginusername'),
        passwordLabel: () => cy.get('label[for="log-pass"]'),
        passwordInputField: () => cy.get('#loginpassword'),
        loginButton: () => cy.get('button[onclick="logIn()"]')
    }

    verifyThatLoginFormIsVisible() {
        this.elements.loginForm().should('be.visible')
    }

    verifyLoginFormTitle(title) {
        this.elements.loginFormTitle().should('have.text', title)
    }

    verifyUsernameLabel(label) {
        this.elements.usernameLabel().should('have.text', label)
    }

    verifyThatUsernameInputFieldIsVisible() {
        this.elements.usernameInputField().should('be.visible')
    }

    verifyPasswordLabel(label) {
        this.elements.passwordLabel().eq(0).should('have.text', label)
    }

    verifyThatPasswordInputFieldIsVisible() {
        this.elements.passwordInputField().should('be.visible')
    }

    verifyThatLoginButtonIsVisible() {
        this.elements.loginButton().should('be.visible')
    }

    verifyThatLoginButtonIsEnabled() {
        this.elements.loginButton().should('be.enabled')
    }

    clickLoginButton() {
        this.elements.loginButton().click()
    }
}

module.exports = new LoginPage()