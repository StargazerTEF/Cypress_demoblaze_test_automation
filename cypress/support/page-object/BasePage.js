class BasePage {

    windowAlertShouldContain(text) {
        cy.on('window:alert', (message) => {
            expect(message).to.contain(text);
        })
    }
}
module.exports = new BasePage()
