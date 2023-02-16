/// <reference types="cypress" />

//const { get } = require("cypress/types/lodash");

describe('My Third Test Suite',function()
{

it('My Third Test case', function(){

cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

//check a checkbox;
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

//uncheck a check box.
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

//to check the multiple checkboxes, first find the common property(locator)for all check boxes.
cy.get('input[type="checkbox"]').check(['option2','option3'])

//static drop-down;
//to select a option from drop-down, user tag "select" and do assertion with .should
cy.get('select').select('option2').should('have.value','option2')
cy.get('#autocomplete').type('ind')

cy.get('.ui-menu-item div').each(($el,Index,$list) => {
  
  if($el.text()==="India")
  {
    cy.wrap($el).click()
   // cy.wrap($el).find('button').click()
     }
})
cy.get('#autocomplete').should('have.value','India')


//visible and Invisible Elements:
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

// check Radio buttons:
cy.get('[value="radio2"]').check().should('be.checked')
})

})