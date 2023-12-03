class LoginPage {

    elements = {
        loginForm: () => cy.get('div#logInModal .modal-content'),
        loginFormTitle: () => cy.get('#logInModalLabel')
    }

    verifyThatLoginFormIsVisible() {
        this.elements.loginForm().should('be.visible')
    }

    verifyLoginFormTitle(title) {
        this.elements.loginFormTitle().should('have.text', title)
    }
}

module.exports = new LoginPage()