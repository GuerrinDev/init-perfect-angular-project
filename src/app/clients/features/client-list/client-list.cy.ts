import { ClientListComponent } from './client-list.component';

describe('ClientInfoComponent', () => {
  it('mounts', () => {
    cy.mount(ClientListComponent);
  });
  it('client-list text', () => {
    cy.mount(ClientListComponent);
    cy.get('p').should('have.text', 'client-list works!');
  });
});
