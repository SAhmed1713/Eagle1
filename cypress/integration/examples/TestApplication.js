describe('E2E_Testing',function(){

       this.beforeEach(function(){
        cy.viewport('macbook-13')
        
         cy.wait(200)
     //cy.visit("https://dlq7l0b00rmgi.cloudfront.net/")
     cy.visit("https://dlq7l0b00rmgi.cloudfront.net/")
     //cy.screenshot();

})
/*
it('Login_Invalid userName',function(){
    cy.get("input[id='amplify-id-:r4:']").type('TestUser.@octo.us')
    cy.get("input[id='amplify-id-:r7:']").type('Tarishah-1713')
    cy.get('.amplify-button--primary').click();
    cy.contains('User does not exist.')
    cy.screenshot('Invalid username')
})

it('Login_Invalid Password',function(){
    cy.get("input[id='amplify-id-:r4:']").type('syed.ahmed@octo.us')
    cy.get("input[id='amplify-id-:r7:']").type('Test-123')
    cy.get('.amplify-button--primary').click();
    cy.contains('Incorrect username or password.')
    cy.screenshot('Invalid Password')
})

it('Login Valid Credentials',function(){
    cy.get("input[id='amplify-id-:r4:']").type('syed.ahmed@octo.us')
    cy.get("input[id='amplify-id-:r7:']").type('Tarishah-1713')
    cy.get('.amplify-button--primary').click();
    cy.contains('TSA MSNS')
    cy.get('.tsa-img').should('be.visible')
   // cy.screenshot('Successful login')
   
})

it('Drop-down menu Test',function(){
   cy.get("input[id='amplify-id-:r4:']").type('syed.ahmed@octo.us')
    cy.get("input[id='amplify-id-:r7:']").type('Tarishah-1713')
     cy.get('.amplify-button--primary').click();
     cy.pause()
    cy.get('[data-testid="navDropDownButton"] > span').click();
    cy.get('#testDropDownOne > :nth-child(1) > .usa-nav__link').click()
    cy.wait(1000)
   
})*/

it('Test all links on SMC Flights page',function(){
    cy.get("input[id='amplify-id-:r4:']").type('syed.ahmed@octo.us')
    cy.get("input[id='amplify-id-:r7:']").type('Tarishah-1713')
    cy.get('.amplify-button--primary').click();

    cy.wait(1000)
    cy.get("button[data-testid='navDropDownButton']").click()
    cy.contains('Target Flights').click()
    cy.wait(2000)
   
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
   // cy.contains('Dep Airport').click()
    cy.wait(1000)
   // cy.contains('Dep Airport').click()
    
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
    cy.go(-2)
   //To go one page back use (-1)
   //To go back to home page (-2)
})
/*
    it('Get the mission details', function(){
    cy.get("input[id='amplify-id-:r4:']").type('syed.ahmed@octo.us')
        cy.get("input[id='amplify-id-:r7:']").type('Tarishah-1713')
        cy.get('.amplify-button--primary').click();
        cy.wait(2000)
        cy.get('[data-testid="navDropDownButton"] > span').click();
        cy.wait(2000)
        cy.get('#testDropDownOne > :nth-child(1) > .usa-nav__link').click()
        cy.wait(2000)
        cy.get('#row-0>div:first-child').click()
        cy.wait(2000)
        cy.get('span.text-bold').eq(0).should('contain.text', 'Arrival')
        cy.get('span.text-bold').eq(1).should('contain.text', 'Arrival Date And Time:')
        cy.get('span.text-bold').eq(2).should('contain.text', 'Equipment Type:')

  })
 
    it('logout from Application', function(){
    
    cy.get("button[id='radix-:r0:-trigger-0']").should('have.text','Sign In')
    cy.screenshot()

  })*/
 
})