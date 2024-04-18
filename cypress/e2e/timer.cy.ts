describe('Timer', () => {
  it('shows 10 seconds', () => {
	cy.visit('/');
    for (let i = 0; i<10;i++){
     cy.contains('.status__time',`00:0${i}`);
   }
  })
  it.only('shows minutes and seconds since the game started', () => {
    cy.clock();
    cy.visit('/');
    cy.contains('.status__time','00:00');
    // tick is not working
    // cy.tick(30000);
    // cy.contains('.status__time','00:30');
  })
})