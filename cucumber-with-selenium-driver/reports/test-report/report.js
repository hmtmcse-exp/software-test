$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("google_calculator.feature");
formatter.feature({
  "line": 3,
  "name": "Check addition in Google calculator content In order to verify that google calculator work correctly As a user of google I should be able to get correct addition result",
  "description": "",
  "id": "check-addition-in-google-calculator-content-in-order-to-verify-that-google-calculator-work-correctly-as-a-user-of-google-i-should-be-able-to-get-correct-addition-result",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@googleCalculator"
    }
  ]
});
formatter.before({
  "duration": 6646354008,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Addition",
  "description": "",
  "id": "check-addition-in-google-calculator-content-in-order-to-verify-that-google-calculator-work-correctly-as-a-user-of-google-i-should-be-able-to-get-correct-addition-result;addition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"2+2\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should get result as \"4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleCalculatorSteps.i_open_google()"
});
formatter.result({
  "duration": 6006148547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2+2",
      "offset": 9
    }
  ],
  "location": "GoogleCalculatorSteps.i_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 5074031532,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"gbqfq\"}\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 10.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5.05 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027BM-PC-37\u0027, ip: \u002710.0.40.137\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\touhid\\AppData\\Local\\Temp\\scoped_dir12936_30416}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bb2f14b5ea965c447e7569d42ed19861\n*** Element info: {Using\u003did, value\u003dgbqfq}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat GoogleCalculatorSteps.i_enter_in_search_textbox(GoogleCalculatorSteps.java:48)\r\n\tat ✽.When I enter \"2+2\" in search textbox(google_calculator.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "GoogleCalculatorSteps.i_should_get_result_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 74229181,
  "status": "passed"
});
});