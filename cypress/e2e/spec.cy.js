import HomePage from '../pageobjects/HomePage';
import LoginPage from '../pageobjects/LoginPage';

describe('template spec', () => {
  it('TC1 - Register User', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    cy.visit('/');
    homePage.navigateToPage('login');
    loginPage.enterSignupName('lucas');
    loginPage.enterSignupEmail('lucas@test.com');
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
  });
});
