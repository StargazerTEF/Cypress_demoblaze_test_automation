class LoginPage {

    elements = {
        loginForm: () => cy.get('div#logInModal .modal-content')
    }

    verifyThatLoginFormIsVisible() {
        this.elements.loginForm().should('be.visible')
    }
}

module.exports = new LoginPage()