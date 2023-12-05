class CartPage {

    elements = {
        addedProducts: () => cy.get('#tbodyid > .success'),
        addedProductNames: ()=> cy.get('td:nth-child(2)'),
        totalPrice: ()=> cy.get('#totalp')
    }

    verifyThatAddedProductsAreVisible() {
        this.elements.addedProducts().each(($el, index, $list)=>{
            this.elements.addedProducts().eq(index).should('be.visible')
        })
    }

    verifyTheNameOfAddedProduct(name) {
            this.elements.addedProductNames().should('contain.text', name)
    }

    verifyThePriceOfAddedProduct(name, price) {
        cy.contains(name).next().should('contain.text', price.substring(1))
    }

    verifyThatTheSumOfThePricesOfAddedProductsIsEqualToTheTotalPrice(addedProductsPrices) {
        let sum = 0
        for (let i = 0; i < addedProductsPrices.length; i++) {
            sum += +addedProductsPrices[i].substring(1)
        }
        this.elements.totalPrice().should("have.text", sum)
    }

    removeAddedProduct(name) {
        cy.contains(name).siblings().contains('Delete').click()
    }

    verifyThatTheCartIsEmpty() {
        this.elements.addedProducts().should("not.exist")
    }
}

module.exports = new CartPage()