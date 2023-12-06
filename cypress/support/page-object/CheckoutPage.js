class CheckoutPage {

    elements = {
        checkoutForm: () => cy.get("#orderModal .modal-content"),
        checkoutFormTitle: () => cy.get('#orderModalLabel')
    }

    verifyThatCheckoutFormIsVisible() {
        this.elements.checkoutForm().should('be.visible')
    }

    verifyCheckoutFormTitle(title) {
        this.elements.checkoutFormTitle().should('contain.text', title)
    }
}

module.exports = new CheckoutPage()