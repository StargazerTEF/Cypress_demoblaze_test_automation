const NavigationPage = require("../support/page-object/NavigationPage");
const HomePage = require("../support/page-object/HomePage");
const FooterPage = require("../support/page-object/FooterPage");
describe('Footer tests', () => {
    let titles
    let footer

    before('Load titles', () => {
        cy.fixture('titles.json').then(data => {
            titles = data
        })
        cy.fixture('footer.json').then(data => {
            footer = data
        })
    })

    beforeEach('Visit base url', () => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('Verify that the footer is visible on the home page', () => {
        NavigationPage.clickHomeLink()
        cy.url().should("eq", Cypress.config().baseUrl + '/index.html')
        HomePage.verifyThatFooterIsVisible()
    })

    it('Verify the titles in footer', () => {
        NavigationPage.clickHomeLink()
        HomePage.verifyThatFooterIsVisible()
        FooterPage.verifyFooterTitles(titles.footerTitles)
    })

    it('Verify the text in footer paragraphs', () => {
        NavigationPage.clickHomeLink()
        HomePage.verifyThatFooterIsVisible()
        FooterPage.verifyFooterParagraphs(footer.paragraphs)
    })

    it('Verify that copyright message is visible', () => {
        NavigationPage.clickHomeLink()
        FooterPage.verifyThatCopyrightMessageIsVisible()
    })
})