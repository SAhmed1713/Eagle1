/// <reference types="cypress" />

//const { get } = require("cypress/types/lodash");

describe('My First Test Suite',function()
{

it('My FirstTest case', function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product:visible').should('have.length',4)
cy.get('.products').as('productLocator')
//cy.get('.products').find('.product').should('have.length',4)
cy.get('@productLocator').find('.product').should('have.length',4)
//cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
//Parent Child chaining:
//cy.get('.products').find('.product').each(($el,Index,$list) => {
    cy.get('@productLocator').find('.product').each(($el,Index,$list) => {
    const textVeg=$el.find('h4.product-name').text()
    if(textVeg.includes('Cashews'))
    {
      cy.wrap($el).find('button').click()
       }
})
//assert if logo text is correctly display:
cy.get('.brand').should('have.text','GREENKART')
cy.get('.brand').then(function(logoelement){
    cy.log(logoelement.text())


})




})

})