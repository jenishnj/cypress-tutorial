describe('login with Cypress Json', () => {
  it('should be login', () => {
    //visit application
    cy.visit("/");
    cy.contains('a.nav-link','Sign in').click();
    cy.get('form').within(()=> {
      cy.get('input').first().type(Cypress.env('email'));
      cy.get('input').last().type(Cypress.env('password'));
      //cy.get('button').click();
      cy.root().submit();
    })
    cy.url().should('not.contain','login');
    cy.contains('a.nav-link','Your Feed').should('have.class', 'active');
    cy.contains('a.nav-link','Global Feed').should('not.have.class', 'active');
  })
})