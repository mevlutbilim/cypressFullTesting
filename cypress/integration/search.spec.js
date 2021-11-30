import *as products from "../fixtures/hats.json"
///<reference types="cypress"/>
describe('search products',()=>{
    before(()=>{
        cy.visit('/')
        cy.login(Cypress.env('username'),Cypress.env('password'))
       

    })
    it('Context B110 | Cuffed Beanie',()=>{
        cy.wait(5000)
        cy.search(products.product1)
        cy.get('.py-2 > .product-title > a').contains('Cuffed')
    })
})