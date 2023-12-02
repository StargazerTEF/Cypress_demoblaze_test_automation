class SignUpPage {

    elements = {
        signUpButton: () => cy.get('[onclick="register()"]'),
        usernameInputField: () => cy.get('#sign-username')
    }

    clickSignUpButton() {
        this.elements.signUpButton().click()
    }

    fillInUsernameInputField(text) {
        this.elements.usernameInputField().type(text)
    }
}

module.exports = new SignUpPage()