Feature: Demo Blaze E2E Testing. 

Scenario: User Creation.
    Given That i want to create an user.
    When I type the username and passwornd in the sign up form.
    Then The user is created.


Scenario: Successful Shopping Flow on Demo Blaze site.
    Given I want to buy some products from Demo Blaze.
    When I log into my account.
    And add products to my shopping cart.
    And complete and confirm the shopping form. 
    Then I should receive a confirmation of my order with the relevant information. 
