const { describe } = require("mocha")

describe('Cadastro de usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    //Conecta no site
    cy.visit('https://front.serverest.dev')

    //clica no botão cadastre-se
    cy.get('[data-testid="cadastrar"]').click()

    //preenche os dados de cadastro
    cy.get('[data-testid="nome"]').type('Paulo Augusto')
    cy.get('[data-testid="email"]').type('paulo@qa.com')
    cy.get('[data-testid="password"]').type('123456')
    cy.get('[data-testid="cadastrar"]').click()


    //valida se o cadastro foi criado com sucesso e redirecionado para a página home
    cy.url().should('include', '/home')
  })
})

