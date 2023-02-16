describe('testingdiff vew ports',()=>{
    before(()=>{

        console.log('running my tests')

    })
    beforeEach(()=>{
        cy.visit('https://www.google.com')
       // cy.visit("https://dlq7l0b00rmgi.cloudfront.net/")
       // cy.get("input[id='amplify-id-:r4:']").type('syed.ahmed@octo.us')
       // cy.get("input[id='amplify-id-:r7:']").type('Tarishah-1713')
       // cy.get('.amplify-button--primary').click()

    })
    it('open in macbook -13', ()=>{
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })
    it('open in macbook -15', ()=>{
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })
   /* it('open in iphone', ()=>{
        cy.viewport('iphobne-x')
        cy.screenshot()
        cy.wait(200)
    })*/
    it('open in iphone-x', ()=>{
        cy.viewport(550, 750)
        cy.screenshot()
        cy.wait(200)
    })


})