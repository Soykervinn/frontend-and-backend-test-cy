import './PetStoreService'
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let username = "kervinn13"
let password = 12345

//1. Creacion de Usuario. 

Given(/^I Want create a new user.$/, () => {
	return true;
});

When(/^I send a POST request with the required information.$/, () => {
	cy.createUser().then((response) =>{
        expect(response.body).to.be.not.null
        expect(response.status).to.eq(200)
        expect(response.body).to.deep.include({ code: 200, "type": "unknown"})
        expect(response.body).to.have.property("message")
    })
});

Then(/^The API responds with status code 200 and the user was created.$/, () => {
	return true;
});

//2. Get User info by username. 

Given(/^I Want Get user information.$/, () => {
	return true;
});

When(/^I send a GET request with the username in the path.$/, () => {
	return true;
});

Then(/^The API responds with status code 200 and return user information.$/, () => {
	cy.GetUserByUsername(username).then((response) =>{
        expect(response.status).to.eq(200)
        expect(response.body).to.deep.include({id: 13, username: "kervinn13", firstName: "Jose"})
        expect(response.body).to.deep.include({lastName: "Aguilera", email: "joseaguilera@devsu.com"})
        expect(response.body).to.deep.include({phone: "1173620816", userStatus: 1})
        expect(response.body).to.have.property("password")
    })
});

//3 y 4. Hacer Update del nombre y del correo electronico del usuario. Luego Hacer un Get para buscar al usuario actualizado.


Given(/^I Want modify the user data.$/, () => {
	return true;
});

When(/^I send a request as is required with the information that i want to modify.$/, () => {
	return true;
});

When(/^The API responds with status code 200 and the user information was modified.$/, () => {
	cy.UpdateUser(username).then((response) =>{
        expect(response.body).to.be.not.null
        expect(response.status).to.eq(200)
    })
});

Then(/^I send the get user info to validate the updated information.$/, () => {
	cy.GetUserByUsername(username).then((response) =>{
        expect(response.status).to.eq(200)
        expect(response.body).to.deep.include({id: 13, username: "kervinn13", firstName: "Kervinn"})
        expect(response.body).to.deep.include({lastName: "Aguilera", email: "kervinnaguilera@devsu.com"})
        expect(response.body).to.deep.include({phone: "1173620816", userStatus: 1})
        expect(response.body).to.have.property("password")
    });
});

//5. Delete User  by username.


Given(/^I Want to Delete an user.$/, () => {
	return true;
});

When(/^I send a request as is required.$/, () => {
	cy.deleteUser(username).then((response) =>{
        expect(response.status).to.eq(200)
        expect(response.body).to.deep.include({code: 200, type: "unknown"})
        expect(response.body).to.have.property("message").to.eq(username)
    });
});

Then(/^The API responds with status code 200 and the user was deleted.$/, () => {
	return true;
});

// Dos Tests Exploratiorios. 
//Create list of user 

Given(/^I Want to create a list of users.$/, () => {
	return true;
});

When(/^I send a request with a list of users as is required.$/, () => {
	cy.createWithArray().then((response) =>{
        expect(response.body).to.deep.include({code: 200, type: "unknown", message: "ok"})
    });
});

Then(/^The API responds with status code 200 and the users were created.$/, () => {
	return true;
});

// Login User 


Given(/^I Want to login an user.$/, () => {
	return true;
});

When(/^I send a GET request to login the user into the system as is required.$/, () => {
	cy.loginUser(username, password).then((response) =>{
        expect(response.body).to.be.not.null
        expect(response.status).to.eq(200)
        expect(response.body).to.deep.include({ code: 200, "type": "unknown"})
        expect(response.body).to.have.property("message")
    })
});

Then(/^The API responds succsesfully.$/, () => {
	return true;
});
