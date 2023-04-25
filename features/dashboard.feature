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

    # Keyboards Given When Then And But *
  @DA005 @test
  Scenario: The user access to the dashboard page
    Given the user the login with "agustin" and "123456"
    And the user save your credentials
    When the user is on dashboard page
    Then the user sees the following items in the screen
      | item   |
      | header |

  @DA006 @test
  Scenario: The user access to the dashboard page
    Given the user the login with "agustin" and "123456"
    But the user dont remember your credentials
    When the user is on dashboard page
    Then the user sees the following items in the screen
      | item   |
      | header |

  @DA006 @test
  Scenario: The user access to the dashboard page
    Given the user the login with "agustin" and "123456"
    * the user dont remember your credentials
    When the user is on dashboard page
    Then the user sees the following items in the screen
      | item   |
      | header |


    #El propósito de la Rulepalabra clave es representar una regla comercial que debe implementarse
    Rule: There can be only One

  @DA008 @test
    # Example es igual a Scenario
  Example: The user access to the dashboard page
    Given the user the login with "agustin" and "123456"
    When the user is on dashboard page
    Then the user sees the following items in the screen
      | item   |
      | header |

  # Lo que este en el Background se repite para todos los casos de la feature
 #Background:
 #the user the login with "agustin" and "123456"

  @DA008 @test
  # Example es igual a Scenario
 Scenario: : The user access to the dashboard page
    When the user is on dashboard page
    Then the user sees the following items in the screen
      | item   |
      | header |