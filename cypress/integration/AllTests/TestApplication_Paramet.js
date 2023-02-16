describe('E2E_Testing',function(){

  
    this.beforeEach(function(){
    cy.viewport('macbook-13')
     cy.wait(200)
    cy.visit("https://dlq7l0b00rmgi.cloudfront.net/")
   // cy.screenshot()

})



it('Login_Invalid userName',function(){
        cy.fixture('sundayTest1').then(function(testData){
        cy.get("input[id='amplify-id-:r4:']").type(testData.invalid_user)
        cy.get("input[id='amplify-id-:r7:']").type(testData.password) 
        cy.get('.amplify-button--primary').click();
        cy.contains('User does not exist.')
        cy.screenshot()
    })   
})

it('Login_Invalid Password',function(){
   cy.fixture('sundayTest1').then(function(testData){
    cy.get("input[id='amplify-id-:r4:']").type(testData.username)
    cy.get("input[id='amplify-id-:r7:']").type(testData.invalid_password)
    cy.get('.amplify-button--primary').click();
    cy.contains('Incorrect username or password.')
   // cy.screenshot('Invalid Password')
   cy.screenshot()
   })   
})
it('Login Valid Credentials',function(){
    cy.fixture('sundayTest1').then(function(testData){
    cy.get("input[id='amplify-id-:r4:']").type(testData.username)
    cy.get("input[id='amplify-id-:r7:']").type(testData.password)
    cy.get('.amplify-button--primary').click();
    cy.contains('TSA MSNS')
    cy.get('.tsa-img').should('be.visible')
    //cy.screenshot('Successful login')
    cy.screenshot()
})
   
})

it('Drop-down menu Test',function(){
    cy.fixture('sundayTest1').then(function(testData){
    cy.get("input[id='amplify-id-:r4:']").type(testData.username)
    cy.get("input[id='amplify-id-:r7:']").type(testData.password)
    cy.get('.amplify-button--primary').click();
    cy.get('[data-testid="navDropDownButton"] > span').click();
        cy.wait(2000)
        cy.get('#testDropDownOne > :nth-child(1) > .usa-nav__link').click()
        cy.wait(4000)
   // cy.get('[data-testid="navDropDownButton"] > span').click();
   // cy.get('#testDropDownOne > :nth-child(1) > .usa-nav__link').click()
    cy.wait(1000)
    cy.screenshot()
    })  
})

it('Test all links on SMC Flights page',function(){
    cy.fixture('sundayTest1').then(function(testData){
    cy.get("input[id='amplify-id-:r4:']").type(testData.username)
    cy.get("input[id='amplify-id-:r7:']").type(testData.password)
    cy.get('.amplify-button--primary').click();

    cy.get('[data-testid="navDropDownButton"] > span').click();
    cy.get('#testDropDownOne > :nth-child(1) > .usa-nav__link').click()
    cy.wait(1000)
    //cy.get("a[class='usa-button']").click()
    cy.contains('SMC #').click()
   cy.wait(2000)
   cy.contains('SMC #').click()

    cy.contains('Categories').click()
    cy.wait(1000)
    cy.contains('Categories').click()
    cy.wait(1000)
    cy.contains('Flight #').click()
    cy.wait(1000)
    cy.contains('Flight #').click()
    cy.wait(1000)
    cy.contains('Airport').click()
    cy.wait(1000)
    cy.contains('Airport').click()
    cy.wait(1000)
    cy.contains('Depart Date').click()
    cy.wait(1000)
    cy.contains('Depart Date').click()
    cy.wait(1000)
    cy.contains('Depart Time').click()
    cy.wait(1000)
    cy.contains('Depart Time').click()
    cy.wait(1000)
    cy.contains('Status').click()
    cy.wait(1000)
    cy.contains('Status').click()
    
    cy.contains('Options').click()
    cy.wait(1000)
    //need to remove below line. created error by purpose to verify report screenshot.
    cy.contains('Options').click()
   
    cy.go(-2)
    cy.screenshot()
  })
})
    it('Get the mission details', function(){
        cy.fixture('sundayTest1').then(function(testData){
        cy.get("input[id='amplify-id-:r4:']").type(testData.username)
        cy.get("input[id='amplify-id-:r7:']").type(testData.password)
        cy.get('.amplify-button--primary').click();
        cy.wait(2000)
        cy.get('[data-testid="navDropDownButton"] > span').click();
        cy.wait(2000)
        cy.get('#testDropDownOne > :nth-child(1) > .usa-nav__link').click()
        cy.wait(2000)
        cy.get('#row-0>div:first-child').click()
        cy.wait(2000)
        cy.get('span.text-bold').eq(0).should('contain.text', 'Arrival Date')
        cy.get('span.text-bold').eq(1).should('contain.text', 'Arrival Time:')
        cy.get('span.text-bold').eq(2).should('contain.text', 'Equipment Type:')
        cy.screenshot()
  })
})
 
    it('logout from Application', function(){
    
    cy.get("button[id='radix-:r0:-trigger-0']").should('have.text','Sign In')
    cy.screenshot

  })
   
})


