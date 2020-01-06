Feature: Login page

    Scenario: Login phptravel page
        Given Open website https://www.phptravels.net/admin
        Then I input email as thaongo@gmail.com and password as kimthao
        Then I click submit
