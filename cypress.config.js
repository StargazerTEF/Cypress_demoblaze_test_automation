const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.demoblaze.com',
    retries: 1,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    pageLoadTimeout:10000
},
    reporter: "mochawesome",
    reporterOptions: {
  reportFilename: "[status]_[datetime]-[name]-report"
}
});

