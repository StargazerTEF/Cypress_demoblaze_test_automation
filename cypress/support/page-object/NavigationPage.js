class NavigationPage {

    elements = {
        signUpLink: () => cy.get('[data-target="#signInModal"]')
    }

    clickSignUpLink() {
        this.elements.signUpLink().click()
    }
}

module.exports = new NavigationPage()
