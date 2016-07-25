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
  "duration": 684312916,
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
  "duration": 3983033208,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 90144991,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 15542,
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
  "duration": 52414421,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 86022499,
  "status": "passed"
});
formatter.match({
  "location": "Steps.save_the_result()"
});
formatter.result({
  "duration": 17301,
  "status": "passed"
});
formatter.after({
  "duration": 21896892,
  "status": "passed"
});
formatter.before({
  "duration": 281192808,
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
  "duration": 3826365594,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 84554202,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 25219,
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
  "duration": 48493390,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 89540019,
  "status": "passed"
});
formatter.match({
  "location": "Steps.save_the_result()"
});
formatter.result({
  "duration": 20821,
  "status": "passed"
});
formatter.after({
  "duration": 31726887,
  "status": "passed"
});
formatter.before({
  "duration": 281383126,
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
formatter.result({
  "duration": 3706212741,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 81028471,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 17008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "table",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 50592465,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 84257140,
  "status": "passed"
});
formatter.match({
  "location": "Steps.save_the_result()"
});
formatter.result({
  "duration": 29032,
  "status": "passed"
});
formatter.after({
  "duration": 24651085,
  "status": "passed"
});
});