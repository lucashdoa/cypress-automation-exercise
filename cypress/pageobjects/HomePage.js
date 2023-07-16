import BasePage from '../pageobjects/BasePage';

class HomePage extends BasePage {
  // Elements
  get testCasesButton() {
    return cy.get('.item.active .test_cases_list');
  }

  // Methods
  clickTestCasesButton() {
    this.testCasesButton.click();
  }
}

export default HomePage;
