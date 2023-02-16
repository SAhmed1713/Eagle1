/// <reference types="cypress" /> 
//import * as Credentials from '../fixtures/example'; 
describe('My first test', function() 
{ 

    this.beforeEach('Test',function(){
        cy.visit('https://automationteststore.com/index.php?rt=account/login') 
        cy.get('#loginFrm_loginname').type('tarishah')
        cy.get('#loginFrm_password').type('Tester-1713')
        cy.get('#loginFrm > fieldset > .btn').click()

    })

    it('login Credentials',function(){
       
        cy.get('.nav-dash > :nth-child(1) > a > .fa').click()

    })

    it('logoout',function(){
       
        cy.get('.nav-dash > :nth-child(2) > a').click()
        

    })
}) 