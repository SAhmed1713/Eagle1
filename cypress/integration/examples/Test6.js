/// <reference types="Cypress" />
 
describe('My sixth Test Suite', function() 
{
 
it('Mouse hover Test case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('.mouse-hover-content').invoke('show')
cy.contains('Top').click()
cy.url().should('include','top')

/*To open the top menu under mousehover and forcefully click on "Top" 
option from drop-down,then use following command:
cy.contains('Top).click({force: true})
Note if you use this command then you don't need to use 1st command, that is
cy.get('.mouse-hover-content').invoke('show').*/


})
})