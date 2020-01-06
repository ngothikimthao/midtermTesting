$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login phptravel page",
  "description": "",
  "id": "login-page;login-phptravel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open website https://www.phptravels.net/admin",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I input email as thaongo@gmail.com and password as kimthao",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I click submit",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.phptravels.net/admin",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 10993053700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thaongo@gmail.com",
      "offset": 17
    },
    {
      "val": "kimthao",
      "offset": 51
    }
  ],
  "location": "LoginTest.setUserInformation(String,String)"
});
formatter.result({
  "duration": 2411510400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickLoginButton()"
});
formatter.result({
  "duration": 1126364000,
  "status": "passed"
});
});