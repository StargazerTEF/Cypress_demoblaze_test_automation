class NavigationPage {

    elements = {
        signUpLink: () => cy.get('[data-target="#signInModal"]'),
        loginLink: () => cy.get('[data-target="#logInModal"]'),
        nameOfUserLink: () => cy.get('#nameofuser'),
        homeLink: () => cy.get('a.nav-link[href="index.html"]')
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

    verifyThatLoginLinkIsVisible() {
        this.elements.loginLink().should('be.visible')
    }

    clickHomeLink() {
        this.elements.homeLink().click()
    }
}

module.exports = new NavigationPage()
