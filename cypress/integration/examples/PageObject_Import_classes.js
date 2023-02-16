/// <reference types="cypress" />
import LoginPage from '../SMC_POM/loginPage'
import TargetFlightsPage from '../SMC_POM/TargetFlightsPage'
import Tarishah from '../SMC_POM/TarishahPage'


describe('E2E_Testing',function(){
    
    let loginPage
    let targetFlightsPage

    this.beforeEach(function(){
    cy.viewport('macbook-13')
     cy.wait(200)
     loginPage = new LoginPage()
     targetFlightsPage = new TargetFlightsPage()
     loginPage.getHomePage()

    //cy.visit("https://dlq7l0b00rmgi.cloudfront.net/")
})

it('Login_Invalid userName',function(){
    
        cy.fixture('sundayTest1').then(function(testData){
        loginPage.getUSerName().type(testData.invalid_user)
        loginPage.getPassword().type(testData.password)
        loginPage.getSignInBtn().click()
        cy.contains('User does not exist.')
        cy.screenshot()
    })   
})

it('Login_Invalid Password',function(){

   cy.fixture('sundayTest1').then(function(testData){
    loginPage.getUSerName().type(testData.username)
    loginPage.getPassword().type(testData.invalid_password)
    loginPage.getSignInBtn().click();
    cy.contains('Incorrect username or password.')
    cy.screenshot()
   })   
})

it('Login Valid Credentials',function(){
   
    cy.fixture('sundayTest1').then(function(testData){
        loginPage.getUSerName().type(testData.username)
        loginPage.getPassword().type(testData.password)
        loginPage.getSignInBtn().click();
    cy.contains('TSA MSNS')
    cy.get('.tsa-img').should('be.visible')
    cy.screenshot()
})
})

it('Target_Flights_Page_Test',function(){
   
   cy.fixture('sundayTest1').then(function(testData){
   loginPage.getUSerName().type(testData.username)
   loginPage.getPassword().type(testData.password)
   loginPage.getSignInBtn().click()
    targetFlightsPage.click_on_SMCFlights_Link().click()
    targetFlightsPage.click_on_TargetFlights_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_FlightNum_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_FlightNum_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Airline_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Airline_Link().click()
    cy.wait(1000)
   targetFlightsPage.click_on_Equipment_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Equipment_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_DepAirport_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_DepAirport_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_GMTDepTime_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_GMTDepTime_Link().click()
    cy.wait(1000)
   targetFlightsPage.click_on_GMTArrTime_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_GMTArrTime_Link().click()
    cy.wait(1000)
   targetFlightsPage.click_on_ArrivalAirport_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_ArrivalAirport_Link().click()
    cy.wait(1000)
   targetFlightsPage.click_on_LocDepDate_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_LocDepDate_Link().click()
    cy.wait(1000)
   targetFlightsPage.click_on_LocArrDate_Link().click()
    cy.wait(1000)
   targetFlightsPage.click_on_LocArrDate_Link().click()
    cy.wait(1000)
   targetFlightsPage.click_on_Options_Link().click()
    cy.wait(1000)
    cy.go(-2)
    cy.screenshot()
  })
})

it('SMC_Flights_Page_Test',function(){
   // const loginPage = new LoginPage()
   // const targetFlightsPage = new TargetFlightsPage()
    
   cy.fixture('sundayTest1').then(function(testData){
    
   loginPage.getUSerName().type(testData.username)
   loginPage.getPassword().type(testData.password)
   loginPage.getSignInBtn().click()
   cy.get('.tsa-img').should('be.visible')
   cy.wait(1000) 
   cy.get('.usa-button').click()
    cy.wait(1000)
   /* targetFlightsPage.click_on_FlightNum_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_FlightNum_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Airline_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Airline_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Equipment_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Equipment_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_DepAirport_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_DepAirport_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_GMTDepTime_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_GMTDepTime_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_GMTArrTime_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_GMTArrTime_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_ArrivalAirport_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_ArrivalAirport_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_LocDepDate_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_LocDepDate_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_LocArrDate_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_LocArrDate_Link().click()
    cy.wait(1000)
    targetFlightsPage.click_on_Options_Link().click()
    cy.wait(1000)*/
    cy.go(-2)
    cy.screenshot()
})
   
})

})



