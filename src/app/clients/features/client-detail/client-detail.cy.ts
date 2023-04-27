import { ClientDetailComponent } from './client-detail.component';

describe('ClientInfoComponent', () => {
  it('mounts', () => {
    cy.mount(ClientDetailComponent);
  });
  it('client-detail text', () => {
    cy.mount(ClientDetailComponent);
    cy.get('p').should('have.text', 'client-detail works!');
  });
});
