$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("translate.feature");
formatter.feature({
  "line": 3,
  "name": "Testing Google Translate",
  "description": "",
  "id": "testing-google-translate",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@translate"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "",
  "description": "",
  "id": "testing-google-translate;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "put the \u003cword\u003e to input box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "save the result",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;",
  "rows": [
    {
      "cells": [
        "word"
      ],
      "line": 15,
      "id": "testing-google-translate;;;1"
    },
    {
      "cells": [
        "book"
      ],
      "line": 16,
      "id": "testing-google-translate;;;2"
    },
    {
      "cells": [
        "bag"
      ],
      "line": 17,
      "id": "testing-google-translate;;;3"
    },
    {
      "cells": [
        "table"
      ],
      "line": 18,
      "id": "testing-google-translate;;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1092129517,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@translate"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "put the book to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "save the result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 8605271760,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 129666550,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 177853890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "book",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 78975610,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 130172061,
  "status": "passed"
});
formatter.match({
  "location": "Steps.save_the_result()"
});
formatter.result({
  "duration": 439253523,
  "status": "passed"
});
formatter.after({
  "duration": 130863350,
  "status": "passed"
});
formatter.before({
  "duration": 367335513,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@translate"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "put the bag to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "save the result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 7577209184,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 127525705,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 180491934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bag",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 72690942,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 79860500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.save_the_result()"
});
formatter.result({
  "duration": 700525556,
  "status": "passed"
});
formatter.after({
  "duration": 98579079,
  "status": "passed"
});
formatter.before({
  "duration": 369541380,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@translate"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "put the table to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "save the result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_url()"
});
