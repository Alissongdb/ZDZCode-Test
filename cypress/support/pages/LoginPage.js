/// <reference types="cypress" />

class LoginPage {
    visitarPagina() {
        cy.visit('/');
    }

    preencherUsuario(usuario) {
        cy.get('#model_Login')
            .type(usuario);
    }

    preencherSenha(senha) {
        cy.get('#model_Password')
            .type(senha);
    }

    clicarEntrar() {
        cy.get('.v-card__actions > button.v-btn > .v-btn__content')
            .click();
    }

    validarMensagemDeSucesso() {
        cy.contains('Enviado com sucesso!')
            .should('be.visible');
    }
}

export default new LoginPage();
