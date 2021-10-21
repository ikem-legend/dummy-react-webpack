describe('Login test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/')
  })

  it('logs the user in successfully', () => {
    cy.get('#grid-first-name').type('Charles')
    cy.get('#grid-last-name').type('Darwin')
    cy.get('#grid-password').type('Password12345')
    cy.get('#grid-city').type('Houston')
    cy.get('#grid-state').select('Texas')
    cy.get('#grid-zip').type('77001')
    cy.get('#login-btn').click()

    // Should redirect to dashboard page
    cy.url().should('include', '/dashboard')
  })
})
