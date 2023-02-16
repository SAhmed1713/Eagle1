/// <reference types="cypress" />

//const { get } = require("cypress/types/lodash");

describe('My second Test Suite',function()
{

it('My second Test case', function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.products').as('productLocator')


//Parent Child chaining:
//cy.get('.products').find('.product').each(($el,Index,$list) => {
    cy.get('@productLocator').find('.product').each(($el,Index,$list) => {
    const textVeg=$el.find('h4.product-name').text()
    if(textVeg.includes('Cashews'))
    {
      cy.wrap($el).find('button').click()
       }
})

cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()


})

})