import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  it('mounts', () => {
    cy.mount(FooterComponent);
  });
  it('footer text', () => {
    cy.mount(FooterComponent);
    cy.get('p').should('have.text', 'footer works!');
  });
});
