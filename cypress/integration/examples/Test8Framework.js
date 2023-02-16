/// <reference types="Cypress" />
import HomePage from '../pageObject/HomePage'
import ProductPage from '../pageObject/ProductPage'
 
describe('My first framework Test Suite', function() 
{
    before(function(){

        //runs before all tests in the block
        cy.fixture('example').then(function(data){
            this.data=data

        })
    }) 
 
it('First framework',function() {
   const homePage = new HomePage()
   const productpage =new ProductPage()
 
cy.visit('https://rahulshettyacademy.com/angularpractice/')

homePage.getEditBox().type(this.data.name)
homePage.getGender().select(this.data.gender)
homePage.getTwoWayDataBinding().should('have.value',this.data.name)
homePage.getEditBox().should('have.attr','minlength','2')
homePage.getEntrepreneur().should('be.disabled')

homePage.getShopTab().click()




this.data.productName
this.data.productName.forEach(function(element){
   cy.selectProduct(element)
 
})

productpage.checkOutButton().click()
cy.get(':nth-child(4) > :nth-child(5) > .btn').click()

cy.get('#country').type('india')
cy.get('.suggestions > ul > li > a').click()
cy.get('#checkbox2').click({force: true})
cy.get('input[type="submit"]').click()
//cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
cy.get('.alert').then(function(element)
{
    const actualText=element.text()
   expect(actualText.includes("Success")).to.be.true
})

})
})