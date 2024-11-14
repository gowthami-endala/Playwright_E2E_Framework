Feature: Login Tests

  Scenario: Login should be success
    And User enters the username 
    And User enters the password 
    When User click on the login button
    Then Login should be success