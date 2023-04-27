import { ClientInfoComponent } from './client-info.component';

describe('ClientInfoComponent', () => {
  it('mounts', () => {
    cy.mount(ClientInfoComponent);
  });
  it('client-info text', () => {
    cy.mount(ClientInfoComponent);
    cy.contains('p', 'This is client info header');
  });
});
