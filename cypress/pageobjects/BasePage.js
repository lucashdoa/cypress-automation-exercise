class BasePage {
  get productsNavLink() {
    return cy.get("a[href*='products']");
  }

  navigateToPage(page) {
    switch (page) {
      case 'products':
        this.productsNavLink.click();
    }
  }
}

export default BasePage;
