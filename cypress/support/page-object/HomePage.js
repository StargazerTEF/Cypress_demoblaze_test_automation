class HomePage {

    elements = {
        footer: () => cy.get('div#footc'),
        products: () => cy.get('#tbodyid .card')
    }

    verifyThatFooterIsVisible() {
        this.elements.footer().should('be.visible')
    }

    verifyThatProductsAreVisible() {
        this.elements.products().each(($el, index, $list)=>{
            this.elements.products().eq(index).should('be.visible')
        })
    }
}

module.exports = new HomePage()