import { HeaderComponent } from './header.component';

describe('FooterComponent', () => {
  it('mounts', () => {
    cy.mount(HeaderComponent);
  });
  it('header text', () => {
    cy.mount(HeaderComponent);
    cy.get('p').should('have.text', 'header works!');
  });
});
