class FooterPage {

    elements = {
        signUpLink: () => cy.get('[data-target="#signInModal"]'),
        loginLink: () => cy.get('[data-target="#logInModal"]'),
        nameOfUserLink: () => cy.get('#nameofuser')
    }
}

module.exports = new FooterPage()