$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("all.feature");
formatter.feature({
  "line": 2,
  "name": "Here Testing All Keyword which we used in our Feature File",
  "description": "",
  "id": "here-testing-all-keyword-which-we-used-in-our-feature-file",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@allFeatureKeywordTest"
    }
  ]
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
  "name": "cleaning the database",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "initializing the database",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.cleaning_the_database()"
});
formatter.result({
  "duration": 86719551,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.initializing_the_database()"
});
formatter.result({
  "duration": 23753,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "This is Basic Scenario",
  "description": "",
  "id": "here-testing-all-keyword-which-we-used-in-our-feature-file;this-is-basic-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "here i given input",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "when the input processing",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "then i got the result",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.here_i_given_input()"
});
formatter.result({
  "duration": 23167,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.when_the_input_processing()"
});
formatter.result({
  "duration": 19648,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.then_i_got_the_result()"
});
formatter.result({
  "duration": 16422,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Login Functionality",
  "description": "",
  "id": "here-testing-all-keyword-which-we-used-in-our-feature-file;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "going to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user logs in using Username as \u003cusername\u003e and Password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the dashboard not found",
  "keyword": "But "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "here-testing-all-keyword-which-we-used-in-our-feature-file;login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "here-testing-all-keyword-which-we-used-in-our-feature-file;login-functionality;;1"
    },
    {
      "cells": [
        "Tom",
        "password1"
      ],
      "line": 23,
      "id": "here-testing-all-keyword-which-we-used-in-our-feature-file;login-functionality;;2"
    },
    {
      "cells": [
        "Harry",
        "password2"
      ],
      "line": 24,
      "id": "here-testing-all-keyword-which-we-used-in-our-feature-file;login-functionality;;3"
    },
    {
      "cells": [
        "Jerry",
        "password3"
      ],
      "line": 25,
      "id": "here-testing-all-keyword-which-we-used-in-our-feature-file;login-functionality;;4"
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
  "name": "cleaning the database",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "initializing the database",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.cleaning_the_database()"
});
formatter.result({
  "duration": 28738,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.initializing_the_database()"
});
formatter.result({
  "duration": 18475,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login Functionality",
  "description": "",
  "id": "here-testing-all-keyword-which-we-used-in-our-feature-file;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@allFeatureKeywordTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "going to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user logs in using Username as Tom and Password password1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the dashboard not found",
  "keyword": "But "
});
formatter.match({
  "location": "StepDefinition.going_to_the_website()"
});
formatter.result({
  "duration": 41055,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 22581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 56
    }
  ],
  "location": "StepDefinition.user_logs_in_using_Username_as_Tom_and_Password_password(int)"
});
formatter.result({
  "duration": 2249219,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.login_should_be_successful()"
});
formatter.result({
  "duration": 27859,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_dashboard_not_found()"
});
formatter.result({
  "duration": 25219,
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
  "name": "cleaning the database",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "initializing the database",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.cleaning_the_database()"
});
formatter.result({
  "duration": 34896,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.initializing_the_database()"
});
formatter.result({
  "duration": 19647,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login Functionality",
  "description": "",
  "id": "here-testing-all-keyword-which-we-used-in-our-feature-file;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@allFeatureKeywordTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "going to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user logs in using Username as Harry and Password password2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the dashboard not found",
  "keyword": "But "
});
formatter.match({
  "location": "StepDefinition.going_to_the_website()"
});
formatter.result({
  "duration": 26978,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 18182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 58
    }
  ],
  "location": "StepDefinition.user_logs_in_using_Username_as_Harry_and_Password_password(int)"
});
formatter.result({
  "duration": 97359,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.login_should_be_successful()"
});
formatter.result({
  "duration": 15542,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_dashboard_not_found()"
});
formatter.result({
  "duration": 18475,
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
  "name": "cleaning the database",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "initializing the database",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.cleaning_the_database()"
});
formatter.result({
  "duration": 35777,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.initializing_the_database()"
});
formatter.result({
  "duration": 19061,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login Functionality",
  "description": "",
  "id": "here-testing-all-keyword-which-we-used-in-our-feature-file;login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@allFeatureKeywordTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "going to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user logs in using Username as Jerry and Password password3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the dashboard not found",
  "keyword": "But "
});
formatter.match({
  "location": "StepDefinition.going_to_the_website()"
});
formatter.result({
  "duration": 22287,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 18768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 58
    }
  ],
  "location": "StepDefinition.user_logs_in_using_Username_as_Jerry_and_Password_password(int)"
});
formatter.result({
  "duration": 72140,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.login_should_be_successful()"
});
formatter.result({
  "duration": 10850,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_dashboard_not_found()"
});
formatter.result({
  "duration": 10264,
  "status": "passed"
});
});