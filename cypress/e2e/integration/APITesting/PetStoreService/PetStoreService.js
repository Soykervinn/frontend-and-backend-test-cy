const baseUrl = "https://petstore.swagger.io/v2";
import 'cypress-plugin-api';

Cypress.Commands.add("createUser", () => {
    cy.api({
        method: "POST",
        url: `${baseUrl}/user`,
        body: {
            "id": 13,
            "username": "kervinn13",
            "firstName": "Jose",
            "lastName": "Aguilera",
            "email": "joseaguilera@devsu.com",
            "password": "12345",
            "phone": "1173620816",
            "userStatus": 1
          }
    });
});

Cypress.Commands.add("GetUserByUsername", (username) => {
    cy.api({
        method: "GET",
        url: `${baseUrl}/user/${username}`,
    });
});

Cypress.Commands.add("UpdateUser", (username) => {
    cy.api({
        method: "PUT",
        url: `${baseUrl}/user/${username}`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "firstName": "Kervinn",
            "email": "kervinnaguilera@devsu.com"
          }
    });
    
});

Cypress.Commands.add("deleteUser", (username) => {
    cy.api({
        method: "DELETE",
        url: `${baseUrl}/user/${username}`,
    });
});


//Tests Exploratorios

Cypress.Commands.add("createWithArray", () => {
    cy.api({
        method: "POST",
        url: `${baseUrl}/user/createWithArray`,
        body: [
            {
            "id": 10,
            "username": "ramona03",
            "firstName": "Ramona",
            "lastName": "Cedeno",
            "email": "ramona03@devsu.com",
            "password": "12345",
            "phone": "04147655375",
            "userStatus": 1
          },
          {
            "id": 12,
            "username": "stalin24",
            "firstName": "Estalin",
            "lastName": "Aguilera",
            "email": "stalin24@devsu.com",
            "password": "12345",
            "phone": "04165932282",
            "userStatus": 1  
          }
        ]
    });
});

Cypress.Commands.add("loginUser", (username, password) => {
    cy.api({
        method: "GET",
        url: `${baseUrl}/user/login/?username=${username}&password=${password}`,
    });
});