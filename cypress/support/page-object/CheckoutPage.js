class CheckoutPage {

    elements = {
        checkoutFormTitle: () => cy.get('#orderModalLabel')
    }

    verifyCheckoutFormTitle(title) {
        this.elements.checkoutFormTitle().should('contain.text', title)
    }
}

module.exports = new CheckoutPage()