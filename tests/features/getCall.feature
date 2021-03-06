Feature: Get calls for Users

  Scenario: Get list of users
    Given I call GET on "/api/users?page=2"
    Then I expect status code as "200"
