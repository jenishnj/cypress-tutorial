describe('Login without UI', () => {
  it('should able to login', () => {
    cy.request({
      url: "http://localhost:3000/api/users/login",
      method: 'POST',
      body: {
        user: {email: "test@test.com", password: "test"}
      }
    }).its('body')    
    .then(res => localStorage.setItem('jwt', res.user.token));

    cy.visit('/')
  })
})