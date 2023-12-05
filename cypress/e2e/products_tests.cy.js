const NavigationPage = require("../support/page-object/NavigationPage")
const HomePage = require("../support/page-object/HomePage")
const ProductPage = require("../support/page-object/ProductPage")
const BasePage = require("../support/page-object/BasePage")

describe('Products tests', () => {

    let products
    let alerts

    before('Load products', () => {
        cy.fixture('products.json').then(data => {
            products = data
        })
        cy.fixture('alerts.json').then(data => {
            alerts = data
        })
    })

    beforeEach('Visit base url', () => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('Verify that products are visible on the home page', () => {
        NavigationPage.clickHomeLink()
        HomePage.verifyThatProductsAreVisible()
    })

    it('Verify the names of phones', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnPhoneCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.verifyTheNamesOfPhones(products.phones)
    })

    it('Verify the prices of phones', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnPhoneCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.verifyThePricesOfPhones(products.phones)
    })

    it('Verify the names of laptops', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnLaptopCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.verifyTheNamesOfLaptops(products.laptops)
    })

    it('Verify the prices of laptops', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnLaptopCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.verifyThePricesOfLaptops(products.laptops)
    })

    it('Verify the names of monitors', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnMonitorCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.verifyTheNamesOfMonitors(products.monitors)
    })

    it('Verify the prices of monitors', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnMonitorCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.verifyThePricesOfMonitors(products.monitors)
    })

    it('Verify the name of a certain phone', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnPhoneCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(3)
        ProductPage.verifyProductName(products.phones[3].name)
    })

    it('Verify the price of a certain phone', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnPhoneCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(6)
        ProductPage.verifyProductPrice(products.phones[6].price)
    })

    it('Verify the name of a certain laptop', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnLaptopCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(5)
        ProductPage.verifyProductName(products.laptops[5].name)
    })

    it('Verify the price of a certain laptop', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnLaptopCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(4)
        ProductPage.verifyProductPrice(products.laptops[4].price)
    })

    it('Verify the name of a certain monitor', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnMonitorCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(1)
        ProductPage.verifyProductName(products.monitors[1].name)
    })

    it('Verify the price of a certain monitor', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnMonitorCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(0)
        ProductPage.verifyProductPrice(products.monitors[0].price)
    })

    it('Verify that product description is visible', () => {
        NavigationPage.clickHomeLink()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(2)
        ProductPage.verifyThatProductDescriptionIsVisible()
    })

    it('Verify that product is added to the cart', () => {
        NavigationPage.clickHomeLink()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(1)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
    })
})