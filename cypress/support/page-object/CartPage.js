class CartPage {

    elements = {
        addedProducts: () => cy.get('#tbodyid > .success'),
        addedProductNames: ()=> cy.get('td:nth-child(2)')
    }

    verifyThatAddedProductsAreVisible() {
        this.elements.addedProducts().each(($el, index, $list)=>{
            this.elements.addedProducts().eq(index).should('be.visible')
        })
    }

    verifyTheNameOfAddedProduct(name) {
            this.elements.addedProductNames().should('contain.text', name)
    }
}

module.exports = new CartPage()