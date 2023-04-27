import { ButtonComponent } from '@ui/button/button.component';

describe('ButtonComponent', () => {
  it('mounts', () => {
    cy.mount(ButtonComponent);
  });
  it('button text', () => {
    cy.mount(ButtonComponent);
    cy.get('p').should('have.text', 'button works!');
  });
});
