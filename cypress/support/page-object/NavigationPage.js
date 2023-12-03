class NavigationPage {

    elements = {
        signUpLink: () => cy.get('[data-target="#signInModal"]'),
        loginLink: () => cy.get('[data-target="#logInModal"]'),
        nameOfUserLink: () => cy.get('#nameofuser')
    }

    clickSignUpLink() {
        this.elements.signUpLink().click()
    }

    clickLoginLink() {
        this.elements.loginLink().click()
    }

    verifyTheWelcomeMessageForLoggedInUser(loggedInUser) {
        this.elements.nameOfUserLink().should('have.text', 'Welcome ' + loggedInUser)
    }
}

module.exports = new NavigationPage()
