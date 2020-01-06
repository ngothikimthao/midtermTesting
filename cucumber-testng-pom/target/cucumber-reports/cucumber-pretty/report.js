$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login admin page",
  "description": "",
  "id": "login-admin-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login travel admin website",
  "description": "",
  "id": "login-admin-page;login-travel-admin-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open website https://www.phptravels.net/admin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I input username as user@phptravels.com and password as demouser",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click submit",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I verify system navigates to the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.phptravels.net/admin",
      "offset": 13
    }
  ],
  "location": "LoginTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6821562300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user@phptravels.com",
      "offset": 20
    },
    {
      "val": "demouser",
      "offset": 56
    }
  ],
  "location": "LoginTest.select_first_item(String,String)"
});
formatter.result({
  "duration": 382814300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.select_second_item()"
});
formatter.result({
  "duration": 121800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.add_new_item()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Login travel admin website",
  "description": "",
  "id": "login-admin-page;login-travel-admin-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Open website \u003cwebsite\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I input username as \u003cusername\u003e and password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click submit",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify system navigates to the dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-admin-page;login-travel-admin-website;",
  "rows": [
    {
      "cells": [
        "website",
        "username",
        "password"
      ],
      "line": 18,
      "id": "login-admin-page;login-travel-admin-website;;1"
    },
    {
      "cells": [
        "https://www.phptravels.net/admin",
        "user@phptravels.com",
        "demouser"
      ],
      "line": 19,
      "id": "login-admin-page;login-travel-admin-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Login travel admin website",
  "description": "",
  "id": "login-admin-page;login-travel-admin-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Open website https://www.phptravels.net/admin",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I input username as user@phptravels.com and password as demouser",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click submit",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify system navigates to the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.phptravels.net/admin",
      "offset": 13
    }
  ],
  "location": "LoginTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 7243336100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user@phptravels.com",
      "offset": 20
    },
    {
      "val": "demouser",
      "offset": 56
    }
  ],
  "location": "LoginTest.select_first_item(String,String)"
});
formatter.result({
  "duration": 167953300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.select_second_item()"
});
formatter.result({
  "duration": 39800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.add_new_item()"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
});