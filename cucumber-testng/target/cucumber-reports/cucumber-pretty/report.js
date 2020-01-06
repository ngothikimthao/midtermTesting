$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("selectMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Select Menu",
  "description": "  As a user\r\n  I want to use a selection menu\r\n  So that I can select options which I want",
  "id": "select-menu",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Select menus",
  "description": "",
  "id": "select-menu;select-menus",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open select menu website https://demoqa.com/selectmenu/",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I select Fast in the speed",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "https://demoqa.com/selectmenu/",
      "offset": 25
    }
  ],
  "location": "selectMenuStepsDefinition.open_select_menu_website_https_demoqa_com_selectmenu(String)"
});
formatter.result({
  "duration": 21397552100,
  "error_message": "org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003dnetTimeout\u0026u\u003dhttps%3A//demoqa.com/selectmenu/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003dThe%20server%20at%20demoqa.com%20is%20taking%20too%20long%20to%20respond.\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027PNVD115\u0027, ip: \u002710.211.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 71.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20191202093317, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 7988, moz:profile: C:\\Users\\admin\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 920ac084-c75d-48d2-9965-1c3864128d2b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat stepDefinitions.selectMenuStepsDefinition.open_select_menu_website_https_demoqa_com_selectmenu(selectMenuStepsDefinition.java:23)\r\n\tat ✽.Given Open select menu website https://demoqa.com/selectmenu/(selectMenu.feature:6)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
