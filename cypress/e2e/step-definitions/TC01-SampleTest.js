/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress"/>

import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit {string} page', (pageName) => {
  cy.visit(pageName);
});
