class LoginPage
{
    getUSerName(){

        return cy.get("input[id='amplify-id-:r4:']")
    }

    getPassword(){

        return cy.get("input[id='amplify-id-:r7:']")
    }

    getSignInBtn(){

        return cy.get('.amplify-button--primary')
    }
    getHomePage(){

        cy.visit("https://dlq7l0b00rmgi.cloudfront.net/")
    }

    click_on_Logout_link(){

       return  cy.get('#testDropDownOne > :nth-child(3) > .usa-nav__link')
          
    } 
    verify_Logout(){

       
        return cy.get(button[id='radix-:r9:-trigger-0']).should('contain.text', 'Sign In')
         
     }  

}
export default LoginPage;
