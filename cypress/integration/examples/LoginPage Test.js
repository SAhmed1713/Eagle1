describe('LoginPage Scenarios',function(){

this.beforeEach(function(){
    cy.viewport('macbook-13')
    
     cy.wait(200)
 cy.visit("https://dlq7l0b00rmgi.cloudfront.net/")
 //cy.screenshot();

})

/*
it('Invalid username',function(){
    cy.get("input[id='amplify-id-:r4:']").type('TestUser.@octo.us')
    cy.get("input[id='amplify-id-:r7:']").type('Tarishah-1713')
    cy.get('.amplify-button--primary').click();
    cy.contains('User does not exist.')
    cy.screenshot('Invalid username')
})
it('Invalid Password',function(){
    cy.get("input[id='amplify-id-:r4:']").type('syed.ahmed@octo.us')
    cy.get("input[id='amplify-id-:r7:']").type('Test-123')
    cy.get('.amplify-button--primary').click();
    cy.contains('Incorrect username or password.')
    cy.screenshot('Invalid Password')
})

it('Successful login',function(){
    cy.get("input[id='amplify-id-:r4:']").type('syed.ahmed@octo.us')
    cy.get("input[id='amplify-id-:r7:']").type('Tarishah-1713')
    cy.get('.amplify-button--primary').click();
    cy.contains('TSA MSNS')
    cy.get('.tsa-img').should('be.visible')
    cy.screenshot('Successful login')
   
})
*/

it('Testing drop-down menu',function(){
    cy.get("input[id='amplify-id-:r4:']").type('syed.ahmed@octo.us')
    cy.get("input[id='amplify-id-:r7:']").type('Tarishah-1713')
    cy.get('.amplify-button--primary').click();
    cy.get('[data-testid="navDropDownButton"] > span').click();
    cy.get('#testDropDownOne > :nth-child(1) > .usa-nav__link').click()
   //cy.get("button[data-testid='expander-button-undefined'][css='1']").click()
    
    //below is step to Navigate back.
    //In order to Navigate to another page, use the following;
    //cy.visit('https://www.testpage.com/page2')
    //cy.go(-1)
      
})

it('Click on Red SMC Flights button on home page',function(){
    cy.get("input[id='amplify-id-:r4:']").type('syed.ahmed@octo.us')
    cy.get("input[id='amplify-id-:r7:']").type('Tarishah-1713')
    cy.get('.amplify-button--primary').click();
    cy.get("a[class='usa-button']").click()
    cy.contains('FlightNum').click()
    cy.wait(1000)
    cy.contains('FlightNum').click()
    cy.contains('Airline').click()
    cy.wait(1000)
    cy.contains('Airline').click()
    cy.contains('EquipmentType').click()
    cy.wait(1000)
    cy.contains('EquipmentType').click()
    cy.contains('Dep Airport').click()
    cy.wait(1000)
    cy.contains('Dep Airport').click()
    cy.contains('GMT Dep Time').click()
    cy.wait(1000)
    cy.contains('GMT Dep Time').click()
    cy.contains('GMT Arrival DTS').click()
    cy.wait(1000)
    cy.contains('GMT Arrival DTS').click()
    cy.contains('Arrival Airport').click()
    cy.wait(1000)
    cy.contains('Arrival Airport').click()
    cy.contains('Loc Dep Date').click()
    cy.wait(1000)
    cy.contains('Loc Dep Date').click()
    cy.contains('Loc Arr Date').click()
    cy.wait(1000)
    cy.contains('Loc Arr Date').click()
    cy.wait(1000)
    cy.contains('Options').click()
    cy.wait(3000)
    cy.go(-1)
    cy.contains('sc-hLBbgP sc-ftTHYK eNkUQW hFfxqh').click()

})


})