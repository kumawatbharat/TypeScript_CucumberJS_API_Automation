Feature: Post calls for Users

  Scenario: Create new User
    Given I call POST on "/api/users" with payload "createUser"
    Then I expect status code as "201"
    And I verify the response to be "createUserResponse"