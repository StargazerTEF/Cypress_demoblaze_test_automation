const NavigationPage = require("../support/page-object/NavigationPage")
const HomePage = require("../support/page-object/HomePage")
const ProductPage = require("../support/page-object/ProductPage")
const BasePage = require("../support/page-object/BasePage")
const CartPage = require("../support/page-object/CartPage")
const CheckoutPage = require("../support/page-object/CheckoutPage")

describe('Checkout tests', () => {

    let products
    let alerts
    let titles

    before('Load products, alerts and titles', () => {
        cy.fixture('products.json').then(data => {
            products = data
        })
        cy.fixture('alerts.json').then(data => {
            alerts = data
        })
        cy.fixture('titles.json').then(data => {
            titles = data
        })
    })

    beforeEach('Visit base url', () => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('Verify that checkout form is visible', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnLaptopCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(3)
        ProductPage.verifyProductName(products.laptops[3].name)
        ProductPage.verifyProductPrice(products.laptops[3].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
        NavigationPage.clickCartLink()
        CartPage.verifyThatAddedProductsAreVisible()
        CartPage.clickPlaceOrderButton()
        CheckoutPage.verifyThatCheckoutFormIsVisible()
    })

    it('Verify the title of the checkout form', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnPhoneCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(1)
        ProductPage.verifyProductName(products.phones[1].name)
        ProductPage.verifyProductPrice(products.phones[1].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
        NavigationPage.clickCartLink()
        CartPage.verifyThatAddedProductsAreVisible()
        CartPage.clickPlaceOrderButton()
        CheckoutPage.verifyCheckoutFormTitle(titles.checkoutFormTitle)
    })

    it('Verify that purchase button is enabled', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnMonitorCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(0)
        ProductPage.verifyProductName(products.monitors[0].name)
        ProductPage.verifyProductPrice(products.monitors[0].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
        NavigationPage.clickCartLink()
        CartPage.verifyThatAddedProductsAreVisible()
        CartPage.clickPlaceOrderButton()
        CheckoutPage.verifyThatCheckoutButtonIsEnabled()
    })
})