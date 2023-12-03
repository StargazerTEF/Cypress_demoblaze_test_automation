class LoginPage {

    elements = {
        loginForm: () => cy.get('div#logInModal .modal-content'),
        loginFormTitle: () => cy.get('#logInModalLabel'),
        usernameLabel: () => cy.get('label[for="log-name"]'),
        usernameInputField: () => cy.get('#loginusername'),
        passwordLabel: () => cy.get('label[for="log-pass"]'),
        passwordInputField: () => cy.get('#loginpassword')
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
}

module.exports = new LoginPage()