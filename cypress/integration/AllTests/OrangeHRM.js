

describe('testing cypress', function(){

    this.beforeEach('login Credentials',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')  
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
    
        })
   

it('login scenario', function(){
    
cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')

})

it('Admin page',function(){
   
cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
cy.get('.oxd-topbar-header-breadcrumb-module').contains('Admin')

})

    
})