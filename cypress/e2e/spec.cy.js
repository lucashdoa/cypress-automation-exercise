import HomePage from '../pageobjects/HomePage';

describe('template spec', () => {
  it('passes', () => {
    const homePage = new HomePage();
    cy.visit('/');
    homePage.clickTestCasesButton();
    homePage.navigateToPage('products');
  });
});
