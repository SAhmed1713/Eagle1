class LoginPage
{
    username = "input[id='amplify-id-:r4:']"
    password= "input[id='amplify-id-:r7:']"
    signInBtn= ".amplify-button--primary"
    Logout =  "#testDropDownOne > :nth-child(3) > .usa-nav__link"


    getUSerName(){

       return cy.get(this.username)
    }

    getPassword(){

        return cy.get(this.password)
    }

    getSignInBtn(){

        return cy.get(this.signInBtn)
    }
    getHomePage(){

        cy.visit("https://dlq7l0b00rmgi.cloudfront.net/")
    }

    click_on_Logout_link(){

       return  cy.get(this.Logout)
          
    } 
    verify_Logout(){

       
        return cy.get(button[id='radix-:r9:-trigger-0']).should('contain.text', 'Sign In')
         
     }  

}
export default LoginPage;
