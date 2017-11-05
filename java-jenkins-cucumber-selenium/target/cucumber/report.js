$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/google.feature");
formatter.feature({
  "line": 1,
  "name": "Check addition in Google calculator content In order to verify that google calculator work correctly As a user of google I should be able to get correct addition result",
  "description": "",
  "id": "check-addition-in-google-calculator-content-in-order-to-verify-that-google-calculator-work-correctly-as-a-user-of-google-i-should-be-able-to-get-correct-addition-result",
  "keyword": "Feature"
});
formatter.before({
  "duration": 864676250,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Addition",
  "description": "",
  "id": "check-addition-in-google-calculator-content-in-order-to-verify-that-google-calculator-work-correctly-as-a-user-of-google-i-should-be-able-to-get-correct-addition-result;addition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"2+2\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should get result as \"4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSteps.i_open_google()"
});
formatter.result({
  "duration": 3919887076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2+2",
      "offset": 9
    }
  ],
  "location": "GoogleSteps.i_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 135368323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "GoogleSteps.i_should_get_result_as(String)"
});
formatter.result({
  "duration": 2188257205,
  "status": "passed"
});
formatter.after({
  "duration": 11018822,
  "status": "passed"
});
});