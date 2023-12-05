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

    it('Verify the names of added products', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnPhoneCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(3)
        ProductPage.verifyProductName(products.phones[3].name)
        ProductPage.verifyProductPrice(products.phones[3].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
        NavigationPage.clickHomeLink()
        HomePage.clickOnLaptopCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(4)
        ProductPage.verifyProductName(products.laptops[4].name)
        ProductPage.verifyProductPrice(products.laptops[4].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
        NavigationPage.clickCartLink()
        CartPage.verifyThatAddedProductsAreVisible()
        CartPage.verifyTheNameOfAddedProduct(products.phones[3].name)
        CartPage.verifyTheNameOfAddedProduct(products.laptops[4].name)
    })

    it('Verify the prices of added products', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnPhoneCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(6)
        ProductPage.verifyProductName(products.phones[6].name)
        ProductPage.verifyProductPrice(products.phones[6].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
        NavigationPage.clickHomeLink()
        HomePage.clickOnLaptopCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(5)
        ProductPage.verifyProductName(products.laptops[5].name)
        ProductPage.verifyProductPrice(products.laptops[5].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
        NavigationPage.clickCartLink()
        CartPage.verifyThatAddedProductsAreVisible()
        CartPage.verifyThePriceOfAddedProduct(products.phones[6].name, products.phones[6].price)
        CartPage.verifyThePriceOfAddedProduct(products.laptops[5].name, products.laptops[5].price)
    })

    it('Verify that the sum of the prices of added products is equal to the total price', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnPhoneCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(1)
        ProductPage.verifyProductName(products.phones[1].name)
        ProductPage.verifyProductPrice(products.phones[1].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
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
        CartPage.verifyThePriceOfAddedProduct(products.phones[1].name, products.phones[1].price)
        CartPage.verifyThePriceOfAddedProduct(products.monitors[0].name, products.monitors[0].price)
        CartPage.verifyThatTheSumOfThePricesOfAddedProductsIsEqualToTheTotalPrice([products.phones[1].price, products.monitors[0].price])
    })

    it('Verify that removed products are not visible on the page', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnLaptopCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(3)
        ProductPage.verifyProductName(products.laptops[3].name)
        ProductPage.verifyProductPrice(products.laptops[3].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
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
        CartPage.removeAddedProduct(products.laptops[3].name)
        CartPage.removeAddedProduct(products.monitors[0].name)
        CartPage.verifyThatTheCartIsEmpty()
    })

    it('Verify that the total price is reduced by the price of the removed product', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnPhoneCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(4)
        ProductPage.verifyProductName(products.phones[4].name)
        ProductPage.verifyProductPrice(products.phones[4].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
        NavigationPage.clickHomeLink()
        HomePage.clickOnLaptopCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(2)
        ProductPage.verifyProductName(products.laptops[2].name)
        ProductPage.verifyProductPrice(products.laptops[2].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
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
        CartPage.verifyThePriceOfAddedProduct(products.phones[4].name, products.phones[4].price)
        CartPage.verifyThePriceOfAddedProduct(products.laptops[2].name, products.laptops[2].price)
        CartPage.verifyThePriceOfAddedProduct(products.monitors[0].name, products.monitors[0].price)
        CartPage.verifyThatTheSumOfThePricesOfAddedProductsIsEqualToTheTotalPrice([products.phones[4].price, products.laptops[2].price, products.monitors[0].price])
        CartPage.removeAddedProduct(products.phones[4].name)
        CartPage.verifyThatTheSumOfThePricesOfAddedProductsIsEqualToTheTotalPrice([products.laptops[2].price, products.monitors[0].price])
    })
})