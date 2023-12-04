const NavigationPage = require("../support/page-object/NavigationPage")
const HomePage = require("../support/page-object/HomePage")
const ProductPage = require("../support/page-object/ProductPage")
const BasePage = require("../support/page-object/BasePage")
const CartPage = require("../support/page-object/CartPage")
describe('Cart tests', () => {
    let products
    let alerts

    before('Load products and alerts', () => {
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

    it('Verify that added products are visible on the cart page', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnPhoneCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(2)
        ProductPage.verifyProductName(products.phones[2].name)
        ProductPage.verifyProductPrice(products.phones[2].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
        NavigationPage.clickHomeLink()
        HomePage.clickOnLaptopCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(1)
        ProductPage.verifyProductName(products.laptops[1].name)
        ProductPage.verifyProductPrice(products.laptops[1].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
        NavigationPage.clickCartLink()
        CartPage.verifyThatAddedProductsAreVisible()
    })
})