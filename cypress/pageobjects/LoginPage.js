import BasePage from './BasePage';

class LoginPage extends BasePage {
  // Elements
  get signupNameInput() {
    return cy.get('[data-qa="signup-name"]');
  }
  get signupEmailInput() {
    return cy.get('[data-qa="signup-email"]');
  }
  get signupButton() {
    return cy.get('[data-qa="signup-button"]');
  }

  // Methods
  enterSignupName(name) {
    this.signupNameInput.type(name);
  }
  enterSignupEmail(email) {
    this.signupEmailInput.type(email);
  }
  clickSignupButton() {
    this.signupButton.click();
  }
}

export default LoginPage;
