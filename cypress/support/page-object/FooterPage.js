class FooterPage {

    elements = {
        footerTitles: () => cy.get('.caption > h4')
    }

    verifyFooterTitles(titles) {
        this.elements.footerTitles().each(($el, index, $list)=>{
            this.elements.footerTitles().eq(index).should('contain.text', titles[index])
        })
    }
}

module.exports = new FooterPage()