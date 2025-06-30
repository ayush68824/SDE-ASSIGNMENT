describe('Personalized Content Dashboard', () => {
  it('loads the dashboard and toggles dark mode', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Personalized Dashboard');
    cy.get('button').contains('☀️').click(); // Toggle dark mode
    cy.get('button').contains('🌙'); // Should now show moon
  });

  it('searches for news', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[placeholder="Search..."]').type('tech');
    cy.get('h3').should('exist');
  });
}); 