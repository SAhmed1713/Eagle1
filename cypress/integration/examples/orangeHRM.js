///<reference types="cypress" />

describe('orangeHR Test', function(){

   it('Login Valid Credentials_Test1',function(){
    cy.viewport('macbook-13')
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.url().should('include','dashboard/index')
    cy.get('orangehrm-quick-launch-heading').should('have.have.length', 6)
  // cy.get('.oxd-userdropdown-tab').click()
  // cy.wait(1000)
 // cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
   })
   /*
it('Login Valid Credentials_Test1',function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
   cy.url().should('include','dashboard/index')
   cy.get('.oxd-userdropdown-tab').click()
   cy.wait(1000)
  cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

})
it('Login Valid Credentials_Test1',function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
   cy.url().should('include','dashboard/index')
   cy.get('.oxd-userdropdown-tab').click()
   cy.wait(1000)
  cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

})*/

})

