describe('Login test', () => {
  it('logs the user in successfully', () => {
    cy.find('#grid-first-name').type('Charles')
    cy.find('#grid-last-name').type('Darwin')
    cy.find('#grid-password').type('Password12345')
    cy.find('#grid-city').type('Houston')
    cy.find('#grid-state').select('Texas')
    cy.find('#grid-zip').type('77001')
    cy.find('#login-btn').click()

    // Should redirect to dashboard page
    cy.url().should('include', '/dashboard')
  })
})
