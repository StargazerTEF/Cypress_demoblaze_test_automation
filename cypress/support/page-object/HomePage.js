class HomePage {

    elements = {
        footer: () => cy.get('div#footc'),
    }

    verifyThatFooterIsVisible() {
        this.elements.footer().should('be.visible')
    }
}

module.exports = new HomePage()