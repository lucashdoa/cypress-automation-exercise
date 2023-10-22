import HomePage from '../pageobjects/HomePage';
import LoginPage from '../pageobjects/LoginPage';
import DeleteAccountPage from '../pageobjects/DeleteAccountPage';

describe('template spec', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const deleteAccountPage = new DeleteAccountPage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('TC1: Register User', () => {
    homePage.navigateToPage('login');
    loginPage.enterSignupName('lucas');
    loginPage.enterSignupEmail('lucas@testcase1.com');
    loginPage.clickSignupButton();
    loginPage.selectGender('male');
    loginPage.selectBirthDay(22);
    loginPage.selectBirthMonth(10);
    loginPage.selectBirthYear(94);
    loginPage.enterPassword('p4ssw0rd');
    loginPage.enterFirstName('Lucas');
    loginPage.enterLastName('Andrade');
    loginPage.enterAddress('Rua Tupis');
    loginPage.enterState('Minas Gerais');
    loginPage.enterCity('Uberlandia');
    loginPage.enterZipcode('38408000');
    loginPage.enterMobileNumber('32340000');
    loginPage.clickCreateAccount();
    loginPage.clickContinue();
    loginPage.clickDeleteAccount();
    deleteAccountPage.accountDeletedText.should(
      'have.text',
      'Account Deleted!',
    );
    deleteAccountPage.clickContinue();
  });

  it('TC2: Login User with correct email and password', () => {
    homePage.navigateToPage('login');
    loginPage.loginTitle.should('have.text', 'Login to your account');
    loginPage.enterLoginEmail('lucas@testcase2.com');
    loginPage.enterLoginPassword('p4ssw0rd');
    loginPage.clickLogin();
    loginPage.loggedUser.should('have.text', 'lucas');
  });

  it('TC3: Login User with incorrect email and password', () => {
    homePage.navigateToPage('login');
    loginPage.enterLoginEmail('inexistentaccount@mail.com');
    loginPage.enterLoginPassword('wrongpass');
    loginPage.clickLogin();
    loginPage.inlineValidation.should(
      'have.text',
      'Your email or password is incorrect!',
    );
  });
});
