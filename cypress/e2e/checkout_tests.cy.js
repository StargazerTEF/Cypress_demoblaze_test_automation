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
    let buyerData

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
        cy.fixture('buyerData.json').then(data => {
            buyerData = data
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
        CheckoutPage.verifyThatPurchaseButtonIsEnabled()
    })

    it('Verify that user cannot complete a purchase without name and credit card fields being populated', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnPhoneCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(6)
        ProductPage.verifyProductName(products.phones[6].name)
        ProductPage.verifyProductPrice(products.phones[6].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        NavigationPage.clickCartLink()
        CartPage.verifyThatAddedProductsAreVisible()
        CartPage.clickPlaceOrderButton()
        CheckoutPage.clickPurchaseButton()
        BasePage.windowAlertShouldContain(alerts.alertForIncompleteCheckoutInformation)
    })

    it('Verify that user can complete a purchase with name and credit card fields being populated', () => {
        NavigationPage.clickHomeLink()
        HomePage.clickOnMonitorCategoryFilter()
        HomePage.verifyThatProductsAreVisible()
        HomePage.clickProductNameWithIndex(1)
        ProductPage.verifyProductName(products.monitors[1].name)
        ProductPage.verifyProductPrice(products.monitors[1].price)
        ProductPage.verifyThatProductDescriptionIsVisible()
        ProductPage.clickAddToCartButton()
        BasePage.windowAlertShouldContain(alerts.alertForAddToCart)
        NavigationPage.clickCartLink()
        CartPage.verifyThatAddedProductsAreVisible()
        CartPage.clickPlaceOrderButton()
        CheckoutPage.fillInNameInputField(buyerData.name)
        CheckoutPage.fillInCreditCardInputField(buyerData.creditCard)
        CheckoutPage.clickPurchaseButton()
        CheckoutPage.verifyThatConfirmationPopUpDialogIsVisible()
    })
})