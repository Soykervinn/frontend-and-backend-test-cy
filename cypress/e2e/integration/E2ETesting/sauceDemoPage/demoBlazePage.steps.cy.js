import demoBlazeFlow from "./demoBlazePage"

//1. User Creation to the Demo Blaze Site. 

Given(/^That i want to create an user.$/, () => {
	demoBlazeFlow.VisitPage;
});

When(/^I type the username and passwornd in the sign up form.$/, () => {
	demoBlazeFlow.SignUp;
	demoBlazeFlow.userCreation;

});

Then(/^The user is created.$/, () => {
	return true;
});


//2. Testing E2E Demo Blaze Shop


Given(/^I want to buy some products from Demo Blaze.$/, () => {
	demoBlazeFlow.VisitPage;
});

When(/^I log into my account.$/, () => {
	demoBlazeFlow.loginUser;
});

When(/^add products to my shopping cart.$/, () => {
	demoBlazeFlow.shoppingAction;
});

When(/^complete and confirm the shopping form.$/, () => {
	demoBlazeFlow.shoppingForm;
});

Then(/^I should receive a confirmation of my order with the relevant information.$/, () => {
	demoBlazeFlow.shoppingConfirmation;
});


