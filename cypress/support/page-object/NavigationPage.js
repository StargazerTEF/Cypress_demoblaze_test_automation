class NavigationPage {

    elements = {
        signUpLink: () => cy.get('[data-target="#signInModal"]'),
        loginLink: () => cy.get('[data-target="#logInModal"]')
    }

    clickSignUpLink() {
        this.elements.signUpLink().click()
    }

    clickLoginLink() {
        this.elements.loginLink().click()
    }
}

module.exports = new NavigationPage()
