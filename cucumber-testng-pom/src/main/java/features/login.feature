Feature: Login admin page

  Scenario: Login travel admin website

    Given Open website https://www.phptravels.net/admin
    When I input username as user@phptravels.com and password as demouser
    Then I click submit
    Then I verify system navigates to the dashboard page


  Scenario Outline: Login travel admin website

    Given Open website <website>
    When I input username as <username> and password as <password>
    Then I click submit
    Then I verify system navigates to the dashboard page
    Examples:
      | website                          | username            | password |
      | https://www.phptravels.net/admin | user@phptravels.com | demouser |