describe('client-detail spec', () => {
  it('should have initial text on detail', () => {
    cy.visit('/clients/2');
    cy.contains('header works!');
    cy.contains('client-detail works!');
    cy.contains('This is client info header');
    cy.contains('button works!');
    cy.contains('client info footer');
    cy.contains('footer works!');
  });
});
