describe('Cadastro de usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    const email = `paulo_${Date.now()}@qa.com`

    // Conecta no site
    cy.visit('https://front.serverest.dev')

    // Clica no botão cadastre-se
    cy.get('[data-testid="cadastrar"]').click()

    // Preenche os dados de cadastro
    cy.get('[data-testid="nome"]').type('Paulo Augusto')
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type('123456')
    cy.get('[data-testid="cadastrar"]').click()

    // Valida se o cadastro foi criado com sucesso
    cy.url().should('include', '/home')
  })
})

describe('Login', () => {
  it('Deve realizar login com usuário válido', () => {
    const email = `paulo_${Date.now()}@qa.com`
    const senha = '123456'

    // Cria o usuário antes de logar
    cy.visit('https://front.serverest.dev')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('Paulo Augusto')
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(senha)
    cy.get('[data-testid="cadastrar"]').click()

    //realizar logout pra testar login   
    cy.get('[data-testid="logout"]').click();
    
    // Realiza login
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(senha)
    cy.get('[data-testid="entrar"]').click()

    // Valida se login foi realizado com sucesso
    cy.url().should('include', '/home')    
  })
})
