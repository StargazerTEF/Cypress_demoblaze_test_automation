class ProductPage {

    elements = {
        productName: () => cy.get('h2.name'),
        productPrice: () => cy.get('h3.price-container'),
        productDescription: () => cy.get('div#more-information'),
        addToCartButton: () => cy.get('.btn-success')
    }

    verifyProductName(productName) {
        this.elements.productName().should('contain.text', productName)
    }

    verifyProductPrice(productPrice) {
        this.elements.productPrice().should('contain.text', productPrice)
    }

    verifyThatProductDescriptionIsVisible() {
        this.elements.productDescription().should('be.visible')
    }

    clickAddToCartButton() {
        this.elements.addToCartButton().click()
    }
}

module.exports = new ProductPage()