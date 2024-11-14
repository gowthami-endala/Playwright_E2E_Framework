Feature: Pet Store API Testing

  Scenario: Retrieve a list of users
    When I send a GET request to the endpoint
    Then the response status code should be 404

  Scenario: Create users using array input
    Given I send a POST  request to the endpoint
    Then the response status code should be successful

  Scenario: updateUser
    Given I send a PUT request to update the existing user
    Then I should receive a response status code 200

  Scenario: Verifying Delete Scenario
    Given I send a DELETE request to the endpoint
    Then the response status code should be 200 success

 Scenario: verifying POST  failed Scenario
    Given I send a POST request with Null data to the endpoint
    Then the response status code should be invalid output response