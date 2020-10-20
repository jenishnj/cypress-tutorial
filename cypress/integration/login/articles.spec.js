describe('articles', () => {

  before(() => {
    cy.visit("http://localhost:4100/");
    cy.contains('a.nav-link','Sign in').click();
    cy.get('form').within(()=> {
      cy.get('input').first().type('test@test.com');
      cy.get('input').last().type('test');
      //cy.get('button').click();
      cy.root().submit();
    })
    cy.url().should('not.contain','login');
    cy.contains('a.nav-link','Your Feed').should('have.class', 'active');
    cy.contains('a.nav-link','Global Feed').should('not.have.class', 'active');
  })

  it('should create new article', () => {
    cy.contains('a.nav-link','New Post').click();
    cy.get('form').within(()=> {
      cy.get('input').first().type('Article Name');
      cy.get('input').eq(1).type('Test article');
      cy.get('textarea').type('test test');
      cy.get('input').last().type('demo');
      cy.get('button[type="button"]').click();
    })
    cy.url().should('contain', 'article');
  })
})