describe("login functionality testcase",()=>{
	it("postitive login flow",()=>{
		cy.visit("https://practice.expandtesting.com/login");
		cy.get("#username").type('practice');
		cy.get("#password").type('SuperSecretPassword!');
		cy.contains('button', 'Login').click();
		cy.get('#flash').should('contain','You logged into a secure area!');
	})

	it.only("negative flow incorrect passord",()=>{
		cy.visit("https://practice.expandtesting.com/login");
		cy.get("#username").type('practice');
		cy.get("#password").type('SuperSe');
		cy.contains('button', 'Login').click();
		cy.get('#flash').should('contain','Your password is invalid!');

	})

	it.only("negative flow incorrect username",()=>{
		cy.visit("https://practice.expandtesting.com/login");
		cy.get("#username").type('pra');
		cy.get("#password").type('SuperSecretPassword');
		cy.contains('button', 'Login').click();
		cy.get('#flash').should('contain','Your username is invalid!');

	})
})

