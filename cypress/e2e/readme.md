# Testes Automatizados - Cypress | Serverest

Este repositório contém testes automatizados E2E (Frontend) desenvolvidos com **Cypress** e **JavaScript**, como parte de um desafio técnico de QA.

A aplicação testada é o **Serverest**, uma aplicação de exemplo para estudos e automação de testes.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Cypress
- JavaScript
- Git / GitHub

---

## 🌐 Aplicações Testadas

- **Frontend:** https://front.serverest.dev  
- **API / Swagger:** https://serverest.dev  

---

## 📂 Estrutura do Projeto

```text
cypress/
 ├─ e2e/
 │   └─ frontend.cy.js
 ├─ fixtures/
 ├─ support/
cypress.config.js
package.json
✅ Cenários de Teste – Frontend (E2E)
Foram implementados os seguintes cenários de testes E2E para o frontend da aplicação:

1️⃣ Cadastro de usuário com sucesso
Acessa a aplicação

Realiza o cadastro de um novo usuário

Valida o redirecionamento para a página inicial (/home)

Utiliza email dinâmico para evitar conflito de dados

2️⃣ Login com usuário válido
Cria um usuário previamente

Realiza logout

Efetua login com credenciais válidas

Valida o acesso à área logada

3️⃣ Cadastro com email já existente (cenário negativo)
Realiza o cadastro de um usuário

Tenta cadastrar novamente utilizando o mesmo email

Valida a exibição da mensagem de erro
"Este email já está sendo usado"

▶️ Como Executar os Testes
Pré-requisitos
Node.js instalado

Dependências do projeto instaladas

npm install
Executar o Cypress em modo interativo
npx cypress open
Executar o Cypress em modo headless
npx cypress run
🧠 Observações
Os testes utilizam dados dinâmicos (Date.now()) para garantir independência entre execuções

Não são utilizados wait fixos, seguindo boas práticas do Cypress

Os cenários simulam o comportamento real do usuário final

📌 Próximos Passos
Implementar cenários de testes automatizados para a API


👤 Autor
Paulo Augusto