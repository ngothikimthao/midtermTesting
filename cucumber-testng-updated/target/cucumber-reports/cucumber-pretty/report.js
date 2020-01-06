$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addCustomer.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Created by nththuy at 1/3/20"
    }
  ],
  "line": 2,
  "name": "Add Customer",
  "description": "In order to store user information, I want to have the adding customer feature so that I can add customer easily",
  "id": "add-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Add Customer sucessfully",
  "description": "",
  "id": "add-customer;add-customer-sucessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type first name as \u003cfirstname\u003e, last name as \u003clastname\u003e, post code as \u003cpostcode\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as \u003cfullname\u003e successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-sucessfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "fullname"
      ],
      "line": 13,
      "id": "add-customer;add-customer-sucessfully;;1"
    },
    {
      "cells": [
        "thuy",
        "nguyen",
        "55000",
        "thuy nguyen"
      ],
      "line": 14,
      "id": "add-customer;add-customer-sucessfully;;2"
    },
    {
      "cells": [
        "hoa",
        "hong",
        "55000",
        "hoa hong"
      ],
      "line": 15,
      "id": "add-customer;add-customer-sucessfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 10910920200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add Customer sucessfully",
  "description": "",
  "id": "add-customer;add-customer-sucessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type first name as thuy, last name as nguyen, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as thuy nguyen successfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "thuy",
      "offset": 21
    },
    {
      "val": "nguyen",
      "offset": 40
    },
    {
      "val": "55000",
      "offset": 61
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3763950500,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 142182700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thuy nguyen",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddSuccessfully(String)"
});
formatter.result({
  "duration": 9469231600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3045567300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add Customer sucessfully",
  "description": "",
  "id": "add-customer;add-customer-sucessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type first name as hoa, last name as hong, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as hoa hong successfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hoa",
      "offset": 21
    },
    {
      "val": "hong",
      "offset": 39
    },
    {
      "val": "55000",
      "offset": 58
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3586886800,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 121816800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hoa hong",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddSuccessfully(String)"
});
formatter.result({
  "duration": 9359888600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Add Customer unsucessfully",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as \u003cfirstname\u003e, last name as \u003clastname\u003e, post code as \u003cpostcode\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as \u003cfullname\u003e unsuccessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "fullname"
      ],
      "line": 22,
      "id": "add-customer;add-customer-unsucessfully;;1"
    },
    {
      "cells": [
        "thuy",
        "null",
        "55000",
        "thuy"
      ],
      "line": 23,
      "id": "add-customer;add-customer-unsucessfully;;2"
    },
    {
      "cells": [
        "null",
        "nguyen",
        "55000",
        "nguyen"
      ],
      "line": 24,
      "id": "add-customer;add-customer-unsucessfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3129063500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Add Customer unsucessfully",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as thuy, last name as null, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as thuy unsuccessfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "thuy",
      "offset": 21
    },
    {
      "val": "null",
      "offset": 40
    },
    {
      "val": "55000",
      "offset": 59
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3474141000,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 137299600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thuy",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddUnSuccessfully(String)"
});
formatter.result({
  "duration": 6365212900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3040632900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Add Customer unsucessfully",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as null, last name as nguyen, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as nguyen unsuccessfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 21
    },
    {
      "val": "nguyen",
      "offset": 40
    },
    {
      "val": "55000",
      "offset": 61
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3399601900,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 107743900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nguyen",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddUnSuccessfully(String)"
});
formatter.result({
  "duration": 6294811700,
  "status": "passed"
});
formatter.uri("openAccount.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Created by nththuy at 1/3/20"
    }
  ],
  "line": 2,
  "name": "Open Account",
  "description": "In order to open account, I want to have the adding customer feature so that I can add customer easily",
  "id": "open-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Open Account sucessfully",
  "description": "",
  "id": "open-account;open-account-sucessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I choose account as \u003cfullname\u003e and currency as \u003ccurrency\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click open account",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that user is already open",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "open-account;open-account-sucessfully;",
  "rows": [
    {
      "cells": [
        "fullname",
        "currency"
      ],
      "line": 13,
      "id": "open-account;open-account-sucessfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "Pound"
      ],
      "line": 14,
      "id": "open-account;open-account-sucessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/openAccount",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/openAccount",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 8963437200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Open Account sucessfully",
  "description": "",
  "id": "open-account;open-account-sucessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I choose account as Harry Potter and currency as Pound",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click open account",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that user is already open",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    },
    {
      "val": "Pound",
      "offset": 49
    }
  ],
  "location": "OpenAccountTest.openAccount(String,String)"
});
formatter.result({
  "duration": 406920300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.i_click_open_account()"
});
formatter.result({
  "duration": 97990300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.verifyUserAlreadyOpen()"
});
formatter.result({
  "duration": 45000,
  "status": "passed"
});
});