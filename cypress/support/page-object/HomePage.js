class HomePage {

    elements = {
        footer: () => cy.get('div#footc'),
        products: () => cy.get('#tbodyid .card'),
        phoneCategoryFilter: () => cy.get(`a[onclick="byCat('phone')"]`),
        productNames: () => cy.get('.card-title > a'),
        productPrices: () => cy.get('.card-block > h5'),
        laptopCategoryFilter: () => cy.get(`a[onclick="byCat('notebook')"]`),
        monitorCategoryFilter: () => cy.get(`a[onclick="byCat('monitor')"]`)
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
            this.elements.productNames().eq(index).should('contain.text', phones[index].name)
        })
    }

    verifyThePricesOfPhones(phones) {
        this.elements.productPrices().each(($el, index, $list)=>{
            this.elements.productPrices().eq(index).should('contain.text', phones[index].price)
        })
    }

    clickOnLaptopCategoryFilter() {
        this.elements.laptopCategoryFilter().click()
    }

    verifyTheNamesOfLaptops(laptops) {
        this.elements.productNames().each(($el, index, $list)=>{
            this.elements.productNames().eq(index).should('contain.text', laptops[index].name)
        })
    }

    verifyThePricesOfLaptops(laptops) {
        this.elements.productPrices().each(($el, index, $list)=>{
            this.elements.productPrices().eq(index).should('contain.text', laptops[index].price)
        })
    }

    clickOnMonitorCategoryFilter() {
        this.elements.monitorCategoryFilter().click()
    }

    verifyTheNamesOfMonitors(monitors) {
        this.elements.productNames().each(($el, index, $list)=>{
            this.elements.productNames().eq(index).should('contain.text', monitors[index].name)
        })
    }
}

module.exports = new HomePage()