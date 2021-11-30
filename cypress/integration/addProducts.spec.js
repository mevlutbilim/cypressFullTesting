///<reference types="cypress"/>
describe('Cypress Tests with Docker',()=>{
    before(()=>{
        cy.visit('/')
        cy.login(Cypress.env('username'),Cypress.env('password'))
       

    })

    it('Add Product to Cart',()=>{
        cy.get(':nth-child(1) > .d-sm-flex > .py-4 > .btn').click()
        cy.get(':nth-child(1) > .card > .card-img-top > img').click()
        cy.get(':nth-child(75) > .custom-option-label > .custom-option-color').click()
        //cy.get('#size-selector').select('XL')
        
        cy.get('#id_quantity').select('10')
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            cy.get('#addtocartButton').click()
            return false
          })
    })
})