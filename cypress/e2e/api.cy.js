describe('Cadastro de usuario', () => {

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