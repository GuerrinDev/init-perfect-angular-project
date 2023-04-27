describe('client-list spec', () => {
  it('should have initial text on list', () => {
    cy.visit('/clients');
    cy.contains('header works!');
    cy.contains('client-list works!');
    cy.contains('footer works!');
  });
});
