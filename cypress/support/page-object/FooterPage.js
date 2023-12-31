class FooterPage {

    elements = {
        footerTitles: () => cy.get('.caption > h4'),
        footerParagraphs: () => cy.get('.caption p'),
        copyrightMessage: () => cy.get('footer p')
    }

    verifyFooterTitles(titles) {
        this.elements.footerTitles().each(($el, index, $list)=>{
            this.elements.footerTitles().eq(index).should('contain.text', titles[index])
        })
    }

    verifyFooterParagraphs(footerParagraphs) {
        this.elements.footerParagraphs().each(($el, index, $list)=>{
            this.elements.footerParagraphs().eq(index).should('contain.text', footerParagraphs[index])
        })
    }

    verifyThatCopyrightMessageIsVisible() {
        this.elements.copyrightMessage().should('be.visible')
    }

    verifyTheCopyrightMessageText(copyrightMessage) {
        this.elements.copyrightMessage().should('have.text', copyrightMessage)
    }
}

module.exports = new FooterPage()