/* eslint-disable no-dupe-keys */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const { defineConfig } = require('cypress');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', browserify.default(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    setupNodeEvents,
    baseUrl: 'https://www.verivox.de',
    specPattern: 'cypress/e2e/**/*.{feature,cy.js}',
  },
});
