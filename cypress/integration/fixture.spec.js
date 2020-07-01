describe('articles', () => {

  before(() => {
    cy.visit("http://localhost:4100/");
    cy.login();
    cy.fixture('article').as('getArticle');
  })

  it('should create new article', () => {
    cy.contains('a.nav-link','New Post').click();

    cy.fixture('article').then((article) => {

      cy.get('form').within(()=> {
        cy.get('input').first().type(article.title);
        cy.get('input').eq(1).type(article.about);
        cy.get('textarea').type(article.article);
        //cy.get('input').last().type(article.tags + '{enter}');
        cy.get('input').last().type(article.tags).type('{enter}');
        cy.get('button[type="button"]').click();
      })

    })
    
    cy.url().should('contain', 'article');
  })

  it('should create new article - 2', () => {
    cy.contains('a.nav-link','New Post').click();

    cy.get('@getArticle').then((article) => {

      cy.get('form').within(()=> {
        cy.get('input').first().type(article.title);
        cy.get('input').eq(1).type(article.about);
        cy.get('textarea').type(article.article);
        //cy.get('input').last().type(article.tags + '{enter}');
        cy.get('input').last().type(article.tags).type('{enter}');
        cy.get('button[type="button"]').click();
      })

    })
    
    cy.url().should('contain', 'article');
  })

  it.only('should create new article - 3', function() {
    cy.contains('a.nav-link','New Post').click();

    cy.get('form').within(()=> {
      cy.get('input').first().type(this.getArticle.title);
      cy.get('input').eq(1).type(this.getArticle.about);
      cy.get('textarea').type(this.getArticle.article);
      //cy.get('input').last().type(article.tags + '{enter}');
      cy.get('input').last().type(this.getArticle.tags).type('{enter}');
      cy.get('button[type="button"]').click();
    })

    cy.url().should('contain', 'article');
  })
})