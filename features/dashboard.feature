@Dashboard tipos de steps
Feature: Dashboard page
  In order to add more value to your customers
  As a non-programmer
  I want display the user's top products

  @DA001 @test
  @smoke @regression
  Scenario Outline: The user access to the dashboard page
    Given the user the login with <username> and <password>
    When the user is on dashboard page
    Then the user sees the following items in the screen
    | item   |
    | header |

    Examples:
    | username | password |
    | agustin  | 123456   |

  @DA002 @test
  Scenario: The user access to the dashboard page
    Given the user the login with "agustin" and "123456"
    When the user is on dashboard page
    Then the user sees the following items in the screen
      | item   |
      | header |

  @DA003 @test
  Scenario: The user access to the dashboard page
    Given the user the login with "agustin" and "123456"
    When the user is on dashboard page
    Then the user sees the following items in the screen
      | item   |
      | header |

  @DA004 @test
  Scenario Outline: The user access to the dashboard page with user <type>
    Given the user the login with <username> and <password>
    When the user is on dashboard page
    Then the user sees the following items in the screen
      | item   |
      | header |

    Examples:
      | username | password | type  |
      | agustin  | 123456   | admin |
      | luciana  | 123455   | user  |