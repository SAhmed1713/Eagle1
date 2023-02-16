/// <reference types="Cypress" />
 
describe('My forth Test Suite', function() 
{
 
it('Tables Test case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.log("width:" +Cypress.config('viewportWidth'))
cy.log("height:" +Cypress.config('viewportHeight'))

cy.get('tr td:nth-child(2)').each(($el,Index,$list) => {

    const text=$el.text()
    if(text.includes("Python"))
    {

        cy.get("tr td:nth-child(2)").eq(Index).next().then(function(price)
        {
            const priceText=price.text()
            expect(priceText).to.equal('25')
        })
    }

    
})

})
})