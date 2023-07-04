import BasePage from '../pageobjects/BasePage';

class HomePage extends BasePage {
  get testCasesButton() {
    return cy.get('.item.active .test_cases_list');
  }

  clickTestCasesButton() {
    this.testCasesButton.click();
  }
}

export default HomePage;
