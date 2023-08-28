/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

describe('Register', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Validate code', () => {
    LoginPage.goToSignUp();
    RegisterPage.fillFields();
    RegisterPage.clickCreateAccount();
    RegisterPage.insertCode();
    RegisterPage.clickConfirm();
  });
  
})
  