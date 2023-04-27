describe('home spec', () => {
  it('should have initial text', () => {
    cy.visit('/');
    cy.contains('header works!');
    cy.contains('home works!');
    cy.contains('footer works!');
  });
});
