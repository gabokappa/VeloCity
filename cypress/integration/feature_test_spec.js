describe('Users can see an authorization link on the welcome page', function() {
  it('There is a link for authorization', function() {
    cy.visit('http://localhost:3000')
    cy.contains('HERE')
  })

  it('There is button for viewing bikes', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Click here to view your Bikes')
  })

  it('Clicking view your Bikes redirects to a page with a Bikes element', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Click here to view your Bikes').click()
    cy.contains('Bikes')
  })

  it('Clicking the home button redirects to the home page', function() {
    cy.visit('http://localhost:3000/bikes')
    cy.contains('Home').click()
    cy.url().should('include', 'http://localhost:3000')
  })
})
