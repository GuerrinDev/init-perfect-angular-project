import { InputComponent } from '@ui/input/input.component';

describe('InputComponent', () => {
  it('mounts', () => {
    cy.mount(InputComponent);
  });
  it('input text', () => {
    cy.mount(InputComponent);
    cy.get('p').should('have.text', 'input works!');
  });
});
