describe('AppComponent Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the navigation links', () => {
    cy.get('nav').should('be.visible'); // Ensure the nav element is visible
    cy.contains('nav a', 'Test Lifecycle Hooks').should('be.visible');
    cy.contains('nav a', 'Test interceptor, guard, resolver').should('be.visible');
    cy.contains('nav a', 'Test pass data between component').should('be.visible');
    cy.contains('nav a', 'Test redux').should('be.visible');
  });

  it('should navigate to "/lifecycle" when "Test Lifecycle Hooks" is clicked', () => {
    cy.contains('nav a', 'Test Lifecycle Hooks').click();
    cy.url().should('include', '/lifecycle');
  });

  it('should navigate to "/feature" when "Test interceptor, guard, resolver" is clicked', () => {
    cy.contains('nav a', 'Test interceptor, guard, resolver').click();
    cy.url().should('include', '/feature');
  });

  it('should navigate to "/pass-data" when "Test pass data between component" is clicked', () => {
    cy.contains('nav a', 'Test pass data between component').click();
    cy.url().should('include', '/pass-data');
  });

  it('should navigate to "/test-redux" when "Test redux" is clicked', () => {
    cy.contains('nav a', 'Test redux').click();
    cy.url().should('include', '/test-redux');
  });

  it('should have a router-outlet for content', () => {
    cy.get('router-outlet').should('exist');
  });
});
