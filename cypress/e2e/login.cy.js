/// <reference types="cypress" />

import LoginPage from '../support/pages/LoginPage';

describe('Teste de Login', () => {
  it('Deve realizar login com sucesso', () => {
    LoginPage.visitarPagina();
    LoginPage.preencherUsuario('057.484.723-50');
    LoginPage.preencherSenha('654321');
    LoginPage.clicarEntrar();
    LoginPage.validarMensagemDeSucesso();
  });
});
