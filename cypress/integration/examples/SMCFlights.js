/// <reference types="Cypress" />

//const { includes } = require("cypress/types/lodash")

 
describe('My forth Test Suite', function() 
{
  
 
it('SMC Flights page',function() {
 
    cy.viewport('macbook-13')
   // cy.screenshot()
    cy.wait(200)
cy.visit("https://dlq7l0b00rmgi.cloudfront.net/")
cy.screenshot()

cy.get("input[id='amplify-id-:r4:']").type('syed.ahmed@octo.us')
cy.get("input[id='amplify-id-:r7:']").type('Tarishah-1713')
cy.get('.amplify-button--primary').click();
//verify if TSA image display on homepage;
cy.get('.tsa-img').should('be.visible')

cy.wait(1000)

cy.get('.usa-button').click()

})
})