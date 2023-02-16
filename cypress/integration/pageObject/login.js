class LoginPage
{
    getValidUSerName(){

        return cy.get("input[id='amplify-id-:r4:']")
    }

    getValidPassword(){

        return cy.get("input[id='amplify-id-:r7:']")
    }

    getSignInBtn(){

        return cy.get('.amplify-button--primary')
    }

}
export default LoginPage;
