class HomePage {

    elements = {
        footer: () => cy.get('div#footc'),
        products: () => cy.get('#tbodyid .card'),
        phoneCategoryFilter: () => cy.get(`a[onclick="byCat('phone')"]`),
        productNames: () => cy.get('.card-title > a')
    }

    verifyThatFooterIsVisible() {
        this.elements.footer().should('be.visible')
    }

    verifyThatProductsAreVisible() {
        this.elements.products().each(($el, index, $list)=>{
            this.elements.products().eq(index).should('be.visible')
        })
    }

    clickOnPhoneCategoryFilter() {
        this.elements.phoneCategoryFilter().click()
    }

    verifyTheNamesOfPhones(phones) {
        this.elements.productNames().each(($el, index, $list)=>{
            this.elements.productNames().eq(index).should('have.text', phones[index].name)
        })
    }
}

module.exports = new HomePage()