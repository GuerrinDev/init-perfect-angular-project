import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  it('mounts', () => {
    cy.mount(HomeComponent);
  });
  it('home text', () => {
    cy.mount(HomeComponent);
    cy.get('p').should('have.text', 'home works!');
  });
});
