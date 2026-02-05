describe('Teste Login', () => {
  it('Login com sucesso', () => {
    //Conecta no site
    cy.visit('https://front.serverest.dev')


    //preenche email e senha
    cy.get('[data-testid="email"]').type('paulo@qa.com')
    cy.get('[data-testid="senha"]').type('paulinho123')

    //clica botão entrar
    cy.get('[data-testid="entrar"]').click();
  })
})