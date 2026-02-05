# Testes Automatizados - Cypress | Serverest

Este repositório contém testes automatizados E2E (Frontend) e testes de API desenvolvidos com **Cypress** e **JavaScript**, como parte de um desafio técnico de QA.

A aplicação testada é o **Serverest**, uma aplicação de exemplo para estudos e automação de testes.

---

## Tecnologias Utilizadas

- Node.js
- Cypress
- JavaScript
- Git / GitHub

---

## Aplicações Testadas

- Frontend: https://front.serverest.dev  
- API / Swagger: https://serverest.dev  

---

## Estrutura do Projeto

```text
cypress/
 ├─ e2e/
 │   ├─ frontend.cy.js
 │   └─ api.cy.js
 ├─ fixtures/
 ├─ support/
cypress.config.js
package.json
reademe.md

Cenários de Teste – Frontend (E2E)
Foram implementados os seguintes cenários de testes E2E para o frontend da aplicação:

1. Cadastro de usuário com sucesso
Acessa a aplicação

Realiza o cadastro de um novo usuário

Valida o redirecionamento para a página inicial (/home)

Utiliza email dinâmico para evitar conflito de dados

2. Login com usuário válido
Cria um usuário previamente

Realiza logout

Efetua login com credenciais válidas

Valida o acesso à área logada

3. Cadastro com email já existente (cenário negativo)
Realiza o cadastro de um usuário

Tenta cadastrar novamente utilizando o mesmo email

Valida a exibição da mensagem de erro: "Este email já está sendo usado"

Cenários de Teste – API
Foram implementados os seguintes cenários de testes automatizados para a API:

1. Cadastro de usuário via API
Cria um usuário com email dinâmico

Valida status 201

Valida mensagem de sucesso: "Cadastro realizado com sucesso"

2. Login com usuário válido
Cria um usuário previamente

Realiza login com o mesmo usuário

Valida status 200

Valida presença do token (authorization)

Valida mensagem de sucesso: "Login realizado com sucesso"

3. Login com senha inválida (cenário negativo)
Cria um usuário válido

Tenta logar com senha incorreta

Valida status 401

Valida mensagem de erro: "Email e/ou senha inválidos"

Como Executar os Testes
Pré-requisitos
Node.js instalado

Dependências do projeto instaladas

npm install
Executar o Cypress em modo interativo
npx cypress open
Executar o Cypress em modo headless
npx cypress run
Observações
Os testes utilizam dados dinâmicos (Date.now()) para garantir independência entre execuções

Não são utilizados wait fixos, seguindo boas práticas do Cypress

Os cenários simulam o comportamento real do usuário final

Próximos Passos
Refatorar os testes utilizando funções reutilizáveis (custom commands)

Implementar novos cenários de testes para API e frontend

Autor
Paulo Augusto