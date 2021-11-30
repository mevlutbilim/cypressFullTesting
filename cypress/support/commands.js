/// <reference types="cypress" />
Cypress.Commands.add('login', (email, password) => { 

    cy.get('.ml-1 > .navbar-tool-text').click()
    cy.get('#id_username_reg_pg').type(email)
    cy.get('#id_password_reg_pg').type(password)
    cy.get('#reg_pg_login_form > .text-right > .btn').click()
 })

 Cypress.Commands.add('search',(keyword)=>{
    cy.get('.d-none > .navbar-tool-icon-box').click()
    cy.get('#id_query').type(keyword+'{enter}')

 })
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
