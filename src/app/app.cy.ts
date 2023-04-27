import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('mounts', () => {
    cy.mount(AppComponent);
  });
  it('found header', () => {
    cy.mount(AppComponent);
    cy.get('app-header').should('exist');
  });
  it('found footer', () => {
    cy.mount(AppComponent);
    cy.get('app-footer').should('exist');
  });
});
