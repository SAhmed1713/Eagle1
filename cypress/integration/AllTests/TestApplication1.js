/// <reference types="cypress" />
import LoginPage from '../SMC_POM/loginPage'
import TargetFlightsPage from '../SMC_POM/TargetFlightsPage'


describe('login Page Scenarios',function(){
   
   let loginPage
    let targetFlightsPage

    this.beforeEach(function(){
      cy.reload(true)
    cy.viewport('macbook-13')
     cy.wait(200)
     loginPage = new LoginPage()
     targetFlightsPage = new TargetFlightsPage()
     loginPage.getHomePage()
    
})

it('Login_Invalid userName',function(){
    
       cy.fixture('sundayTest1').then(function(testData){
        loginPage.getUSerName().type(testData.invalid_user)
       loginPage.getPassword().type(testData.password)
       loginPage.getSignInBtn().click()
        cy.contains('User does not exist.')
      
    })   
})

it('Login_Invalid Password',function(){

   cy.fixture('sundayTest1').then(function(testData){
    loginPage.getUSerName().type(testData.username)
    loginPage.getPassword().type(testData.invalid_password)
    loginPage.getSignInBtn().click();
    cy.contains('Incorrect username or password.')
    
   })   
})

it('Login Valid Credentials',function(){
   
    cy.fixture('sundayTest1').then(function(testData){
    loginPage.getUSerName().type(testData.username)
    loginPage.getPassword().type(testData.password)
    loginPage.getSignInBtn().click();
    cy.contains('TSA MSNS')
    cy.get('.tsa-img').should('be.visible')
    
})
})
})

describe('Testing pages',function(){

   let loginPage
   let targetFlightsPage

   this.beforeEach(function(){
     cy.reload(true)
   cy.viewport('macbook-13')
    cy.wait(200)
    loginPage = new LoginPage()
    targetFlightsPage = new TargetFlightsPage()
    loginPage.getHomePage()

})

it('Target_Flights_Page_Test',function(){
   
   cy.fixture('sundayTest1').then(function(testData){
   loginPage.getUSerName().type(testData.username)
   loginPage.getPassword().type(testData.password)
   loginPage.getSignInBtn().click()

    targetFlightsPage.click_on_SMCFlights_Link().click()
    targetFlightsPage.click_on_TargetFlights_Link().click()
    
    cy.wait(1000)
    targetFlightsPage.click_on_SMCNumber_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_SMCNumber_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Categories_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Categories_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_FlightNumber_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_FlightNumber_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Airport_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Airport_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_DepartDate_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_DepartDate_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_DepartTime_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_DepartTime_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Status_Link().click()
    cy.wait(3000)
   targetFlightsPage.click_on_Options_Link().click()
    cy.wait(4000)
    cy.go(-2)
    
  })
})

it('SMC_Flights_Page_Test',function(){
   
   cy.fixture('sundayTest1').then(function(testData){
    
   loginPage.getUSerName().type(testData.username)
   loginPage.getPassword().type(testData.password)
   loginPage.getSignInBtn().click()
   cy.get('.tsa-img').should('be.visible')
   cy.wait(1000) 
   cy.get('.usa-button').click()
   targetFlightsPage.click_on_SMCNumber_Link().click()
   cy.wait(1000)
   targetFlightsPage.click_on_SMCNumber_Link().click()
   cy.wait(1000)
   targetFlightsPage.click_on_Categories_Link().click()
   cy.wait(1000)
   targetFlightsPage.click_on_Categories_Link().click()
   cy.wait(1000)
   targetFlightsPage.click_on_FlightNumber_Link().click()
   cy.wait(1000)
   targetFlightsPage.click_on_FlightNumber_Link().click()
   cy.wait(1000)
   targetFlightsPage.click_on_Airport_Link().click()
   cy.wait(1000)
   targetFlightsPage.click_on_Airport_Link().click()
   cy.wait(1000)
   targetFlightsPage.click_on_DepartDate_Link().click()
   cy.wait(1000)
   targetFlightsPage.click_on_DepartDate_Link().click()
   cy.wait(1000)
   targetFlightsPage.click_on_DepartTime_Link().click()
   cy.wait(1000)
   targetFlightsPage.click_on_DepartTime_Link().click()
   cy.wait(1000)

   targetFlightsPage.click_on_Status_Link().click()
   cy.wait(1000)
  
  //targetFlightsPage.click_on_Options_Link().click()
   cy.wait(2000)
   cy.go(-1)
     
})
   
})

it('verifying Mission Details',function(){
   cy.fixture('sundayTest1').then(function(testData){
      loginPage.getUSerName().type(testData.username)
      loginPage.getPassword().type(testData.password)
      loginPage.getSignInBtn().click()
      cy.wait(1000)
      cy.get('.usa-button').click()
      cy.get('#row-0>div:first-child').click()
      cy.wait(3000)
      cy.get('span.text-bold').eq(0).should('contain.text', 'Arrival Date:')
      cy.get('span.text-bold').eq(1).should('contain.text', 'Arrival Time:')
      cy.get('span.text-bold').eq(2).should('contain.text', 'Equipment Type:')
      cy.go(-1)
   })
})
})

describe('logout of Application',function(){

   let loginPage
   let targetFlightsPage

   this.beforeEach(function(){
     cy.reload(true)
   cy.viewport('macbook-13')
    cy.wait(200)
    loginPage = new LoginPage()
    targetFlightsPage = new TargetFlightsPage()
    loginPage.getHomePage()

})

it('logout_from_Application',function(){
 
cy.fixture('sundayTest1').then(function(testData){
   loginPage.getUSerName().type(testData.username)
   loginPage.getPassword().type(testData.password)
   loginPage.getSignInBtn().click()
    targetFlightsPage.click_on_SMCFlights_Link().click()
    loginPage.click_on_Logout_link().click()
  
   })
  
})
 this.afterEach(function(){
   cy.clearCookies()
   cy.reload()

 })
 
})



