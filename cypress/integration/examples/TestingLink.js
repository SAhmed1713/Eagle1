describe('LoginPage Scenarios',function(){
    before(function(){

        cy.fixture('loginTest').then(function(data){

            this.data=data
        })
    })
    this.beforeEach(function(){
        cy.viewport('macbook-13')
        
         cy.wait(200)
     //cy.visit("https://dlq7l0b00rmgi.cloudfront.net/")
     cy.visit("https://dlq7l0b00rmgi.cloudfront.net/")
     //cy.screenshot();
    
    })

    it('Testing drop-down menu',function(){
        cy.viewport('macbook-13')
        
        cy.get("input[id='amplify-id-:r4:']").type(this.data.Username)
        cy.get("input[id='amplify-id-:r7:']").type(this.data.password)

        cy.get('.amplify-button--primary').click();
        cy.wait(2000)
        cy.get('[data-testid="navDropDownButton"] > span').click();
        cy.wait(2000)
        cy.get('#testDropDownOne > :nth-child(1) > .usa-nav__link').click()
        cy.wait(4000)
      
        cy.get('#row-0>div:first-child').click()
        cy.wait(3000)
        cy.get('span.text-bold').eq(0).should('contain.text', 'Arrival')
        cy.get('span.text-bold').eq(1).should('contain.text', 'Arrival Date And Time:')
        cy.get('span.text-bold').eq(2).should('contain.text', 'Equipment Type:')
      
          
    })

})