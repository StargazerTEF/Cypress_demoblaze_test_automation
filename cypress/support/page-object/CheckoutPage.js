class CheckoutPage {

    elements = {
        checkoutForm: () => cy.get("#orderModal .modal-content"),
        checkoutFormTitle: () => cy.get('#orderModalLabel'),
        purchaseButton: () => cy.get('button[onclick="purchaseOrder()"]')
    }

    verifyThatCheckoutFormIsVisible() {
        this.elements.checkoutForm().should('be.visible')
    }

    verifyCheckoutFormTitle(title) {
        this.elements.checkoutFormTitle().should('contain.text', title)
    }

    verifyThatCheckoutButtonIsEnabled() {
        this.elements.purchaseButton().should('be.enabled')
    }
}

module.exports = new CheckoutPage()