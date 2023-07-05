class BasePage {
  // Elements
  get productsNavLink() {
    return cy.get("a[href*='products']");
  }
  get loginNavLink() {
    return cy.get("a[href*='login']");
  }
  get deleteAccountLink() {
    return cy.get("a[href*='delete account']");
  }

  // Methods
  navigateToPage(page) {
    switch (page) {
      case 'products':
        this.productsNavLink.click();
      case 'login':
        this.loginNavLink.click();
    }
  }

  clickDeleteAccount() {
    this.deleteAccountLink.click();
  }
}

export default BasePage;
