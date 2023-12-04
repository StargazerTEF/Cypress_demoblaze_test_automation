class ProductPage {

    elements = {
        productName: () => cy.get('h2.name'),
        productPrice: () => cy.get('h3.price-container')
    }

    verifyProductName(productName) {
        this.elements.productName().should('contain.text', productName)
    }

    verifyProductPrice(productPrice) {
        this.elements.productPrice().should('contain.text', productPrice)
    }
}

module.exports = new ProductPage()