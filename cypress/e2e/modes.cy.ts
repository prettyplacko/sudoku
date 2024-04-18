/// <reference types="Cypress"/>
describe('Play mode', () => {
  it('showing different number of empty cells', () => {
	cy.visit('/');
    cy.get('select[name=status__difficulty-select]').should('have.value', 'Easy');
    cy.get('.game__cell.game__cell--filled').should('have.length.greaterThan', 40).and('have.length.lessThan', 81).its('length').as('easyN');
    cy.get('select[name=status__difficulty-select]').select('Medium');
    cy.get('.game__cell.game__cell--filled').should('have.length.lessThan', 81).its('length').as('mediumN');
    cy.get('select[name=status__difficulty-select]').select('Hard');
    cy.get('.game__cell.game__cell--filled').should('have.length.lessThan', 81).its('length').as('hardN').then(function (){
    expect(this.easyN).to.be.greaterThan(this.mediumN);
    expect(this.mediumN).to.be.greaterThan(this.hardN);
    })
  })
})