class ProductPage {

    elements = {
        productName: () => cy.get('h2.name')
    }

    verifyProductName(productName) {
        this.elements.productName().should('have.text', productName)
    }
}

module.exports = new ProductPage()