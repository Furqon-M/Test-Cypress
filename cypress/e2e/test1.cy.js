/// <refrence type="Cypress"

it('Google Search', () => {
    cy.visit('https://google.com')

    cy.get('.a4bIc').type('Automation Step by Step{Enter}')


    // cy.contains('Penelusuran Google').click()
    cy.wait(5000)
    cy.contains('Video').click()
})



