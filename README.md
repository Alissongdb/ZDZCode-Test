# Testes Automatizados com Cypress

Este projeto foi desenvolvido como parte de um teste técnico para a **ZDZCode**. O objetivo é automatizar cenários de teste para o ambiente fictício da aplicação de login disponível em: [Plano Aliados](https://planoaliados.com.br/portal/).

---

## 📋 Descrição do Projeto

O projeto implementa testes automatizados utilizando o **Cypress** com o padrão **Page Objects**, garantindo organização e reutilização de código. O fluxo testado valida o login do usuário no sistema.

---

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes E2E.
- JavaScript - Linguagem de programação.
- Page Objects - Padrão de design para organização de elementos e ações.

---

## 🚀 Estrutura do Projeto

```plaintext
cypress/
├── e2e/
│   └── login.cy.js          # Arquivo contendo os testes automatizados
├── support/
│   └── pages/
│       └── LoginPage.js     # Classe Page Object com os métodos para interagir com a página
└── cypress.config.js        # Configurações do Cypress
