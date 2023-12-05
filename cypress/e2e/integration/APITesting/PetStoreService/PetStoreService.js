const baseUrl = "https://petstore.swagger.io/v2"

Cypress.Commands.add("createUser", () => {
    cy.request({
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
    cy.request({
        method: "GET",
        url: `${baseUrl}/user/${username}`,
    });
});

Cypress.Commands.add("UpdateUser", (username) => {
    cy.request({
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
    cy.request({
        method: "DELETE",
        url: `${baseUrl}/user/${username}`,
    });
});


//Tests Exploratorios

Cypress.Commands.add("createWithArray", () => {
    cy.request({
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
    cy.request({
        method: "GET",
        url: `${baseUrl}/user/login/?username=${username}&password=${password}`,
    });
});