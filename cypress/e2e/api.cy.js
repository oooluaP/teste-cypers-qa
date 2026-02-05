describe('API - Cadastro de usuario', () => {

  it('Deve criar um usuário com sucesso', () => {
    const email = `paulo_${Date.now()}@qa.com`

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'Paulo Augusto',
        email: email,
        password: '123456',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
    })
  })

})

describe('API - Login de usuario', () => {

  it('Deve realizar login com sucesso', () => {
    const email = `paulo_${Date.now()}@qa.com`
    const password = '123456'

    // Cadastro do usuário
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'Paulo Augusto',
        email: email,
        password: password,
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
    })

    // Login do usuário
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: email,
        password: password
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Login realizado com sucesso')
      expect(response.body).to.have.property('authorization')
    })
  })

})

