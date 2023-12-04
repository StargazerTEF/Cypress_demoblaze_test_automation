class CartPage {

    elements = {
        addedProducts: () => cy.get('#tbodyid > .success')
    }

    verifyThatAddedProductsAreVisible() {
        this.elements.addedProducts().each(($el, index, $list)=>{
            this.elements.addedProducts().eq(index).should('be.visible')
        })
    }
}

module.exports = new CartPage()