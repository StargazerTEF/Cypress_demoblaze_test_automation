class SignUpPage {

    elements = {
        signUpButton: () => cy.get('[onclick="register()"]')

    }

    clickSignUpButton() {
        this.elements.signUpButton().click()
    }
}

module.exports = new SignUpPage()