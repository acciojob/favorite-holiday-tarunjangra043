//your JS code here. If required.
cy.get('b').should('be.visible').then(($element) => {
    // Log element information for debugging
    cy.log(`Found element: ${$element.text()}`);
});
