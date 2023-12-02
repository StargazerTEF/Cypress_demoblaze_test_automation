class SignUpPage {

    elements = {
        signUpButton: () => cy.get('[onclick="register()"]'),
        usernameInputField: () => cy.get('#sign-username'),
        passwordInputField: () => cy.get('#sign-password')
    }

    clickSignUpButton() {
        this.elements.signUpButton().click()
    }

    fillInUsernameInputField(username) {
        this.elements.usernameInputField().type(username)
    }

    fillInPasswordInputField(password) {
        this.elements.passwordInputField().type(password)
    }
}

module.exports = new SignUpPage()