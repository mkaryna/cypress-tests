describe('Amazon page test suite', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com/')
    })
  
    it('displays Searchbar by default', () => {
        cy.get('#twotabsearchtextbox').should('exist')
    });
});
