@LoginFeature @slow
Feature: Login page
  The user accesses to the page with yours authentication keys

  @LO001
  @test
  Scenario Outline: The user login in the page
    Given the user accesses the login page
    When the user complete login process with <username> and <password>
    Then the user is on home page

    Examples:
    | username | password |
    | agustin  | 123456   |


  @LO002
  @test
  @smoke @regression
  Scenario: The user login in the page
    Given the user accesses the login page
    When the user is on login page
    Then the user sees the following items in the screen
      | item              |
      | title             |
      | description       |
      | input user name   |
      | input password    |
      | button success    |