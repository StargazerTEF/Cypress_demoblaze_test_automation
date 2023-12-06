class CheckoutPage {

    elements = {
        checkoutForm: () => cy.get("#orderModal .modal-content"),
        checkoutFormTitle: () => cy.get('#orderModalLabel'),
        purchaseButton: () => cy.get('button[onclick="purchaseOrder()"]'),
        nameInputField: () => cy.get('#name'),
        creditCardInputField: () => cy.get('#card'),
        confirmationPopUpDialog: ()=> cy.get('div.sweet-alert')
    }

    verifyThatCheckoutFormIsVisible() {
        this.elements.checkoutForm().should('be.visible')
    }

    verifyCheckoutFormTitle(title) {
        this.elements.checkoutFormTitle().should('contain.text', title)
    }

    verifyThatPurchaseButtonIsEnabled() {
        this.elements.purchaseButton().should('be.enabled')
    }

    clickPurchaseButton() {
        this.elements.purchaseButton().click()
    }

    fillInNameInputField(name) {
        this.elements.nameInputField().type(name)
    }

    fillInCreditCardInputField(creditCard) {
        this.elements.creditCardInputField().type(creditCard)
    }

    verifyThatConfirmationPopUpDialogIsVisible() {
        this.elements.confirmationPopUpDialog().should('be.visible')
    }
}

module.exports = new CheckoutPage()