@LoginFeature @slow
Feature: Login page
  The user accesses to the page with yours authentication keys

  @LO001
  @test
  @smoke @regression
  Scenario Outline: The user login in the page
    Given the user accesses the login page
    When the user complete login process with <username> and <password>
    Then the user is on home page

    Examples:
    | username                      | password |
    | agustincammarota@hotmail.com  | facebok1 |


  @LO002
  @test
  @smoke @regression
  Scenario: The user login in the page
    Given the user accesses the login page
    When the user is on login page
    Then the user sees the following items in the screen
      | item              |
      | facebook login    |
      | google login      |
      | twitter login     |
      | input user name   |
      | input password    |
      | button success    |

  @LO003
  @visual-test
  Scenario: The user login in the page
    Given the user accesses the login page
    And the user is on login page
    Then the "Login" screen visual is analysed