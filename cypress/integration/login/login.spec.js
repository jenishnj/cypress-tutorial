describe('login', () => {
  it('should be login - 1', () => {
    //visit application
    cy.visit("http://localhost:4100/");
    //click on sign in 
    cy.get(':nth-child(2) > .nav-link').click();
    //enter email 
    cy.get('input[type="email"]').type('test@test.com');
    //enter password
    cy.get('input[type="password"]').type('test');
    //click on signin button
    cy.get('button[type="submit"]').click();
  })

  it.only('should be login -2', () => {
    //visit application
    cy.visit("http://localhost:4100/");
    /* cy.contains('a.nav-link','Sign in').click();
    cy.get('form').within(()=> {
      cy.get('input').first().type('test@test.com');
      cy.get('input').last().type('test');
      //cy.get('button').click();
      cy.root().submit();
    })
    cy.url().should('not.contain','login');
    cy.contains('a.nav-link','Your Feed').should('have.class', 'active');
    cy.contains('a.nav-link','Global Feed').should('not.have.class', 'active'); */
    cy.login();
  })
})