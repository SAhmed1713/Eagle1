Cypress.Commands.add('login', (username, password) =>{
    cy.get("input[id='amplify-id-:r4:']").type(username)
      cy.get("input[id='amplify-id-:r7:']").type(password)
      cy.get('.amplify-button--primary').click();
})



Cypress.Commands.add("selectProduct", (productName) => { 
    cy.get('h4.card-title').each(($e1,index,$list) => {
        if($e1.text().includes(productName)){
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })

})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })