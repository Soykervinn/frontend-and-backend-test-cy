Feature: Pet Store Flow.

Scenario: User Creation. 
    Given I Want create a new user. 
    When I send a POST request with the required information. 
    Then The API responds with status code 200 and the user was created.


Scenario: Get User Info. 
    Given I Want Get user information.  
    When I send a GET request with the username in the path. 
    Then The API responds with status code 200 and return user information.

Scenario: Edit User Info 
    Given I Want modify the user data. 
    When I send a request as is required with the information that i want to modify. 
    And The API responds with status code 200 and the user information was modified.
    Then I send the get user info to validate the updated information.

Scenario: Delete User. 
    Given I Want to Delete an user. 
    When I send a request as is required. 
    Then The API responds with status code 200 and the user was deleted.

Scenario: Create list of users with given array. 
    Given I Want to create a list of users. 
    When I send a request with a list of users as is required. 
    Then The API responds with status code 200 and the users were created.

Scenario: User Login. 
    Given I Want to login an user. 
    When I send a GET request to login the user into the system as is required. 
    Then The API responds succsesfully.