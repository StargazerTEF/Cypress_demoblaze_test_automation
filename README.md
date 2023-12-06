# Cypress_demoblaze_test_automation

This project contains end-to-end tests for Demoblaze web application using Cypress.

### Getting Started
#### Prerequisites

To run this project, you will need to have the following installed on your machine:
+ Node.js
+ Chrome browser

#### Set Up

1. Clone the repository: `git clone https://github.com/StargazerTEF/Cypress_demoblaze_test_automation.git\`
2. Navigate to the project directory
3. Install dependencies: `npm install`

#### Dependencies used

+ cypress
+ mochawesome

#### Running the Tests

To run the tests, follow these steps:

1. Launch Cypress: `npx cypress open` or `npm run open`
2. Select the test: In the Cypress Test Runner GUI, select the test file you want to run from the list of available files.
3. Run the test: Click on the test file to run it. You will see the test run in the GUI, and you can view the results in real-time.

Alternatively, you can run your tests from the command line by running `npx cypress run`. This will run all the tests in your project headless (without a GUI), and you can view the results in the terminal output.

You can also specify a test file or a test suite to run using command line flags. For example `npx cypress run --spec cypress/e2e/login_tests.cy.js` will run only the login_tests.cy.js file, or you can use one of the existing scripts from `package.json`, for example: `npm run login_tests`.