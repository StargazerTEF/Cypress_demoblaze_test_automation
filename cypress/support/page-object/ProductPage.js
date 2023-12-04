class ProductPage {

    elements = {
        productName: () => cy.get('h2.name'),
        productPrice: () => cy.get('h3.price-container'),
        productDescription: () => cy.get('div#more-information')
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
}

module.exports = new ProductPage()