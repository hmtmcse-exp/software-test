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
  "name": "save the \u003cword\u003e result",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "put the synonyms \u003cword\u003e to search box",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;",
  "rows": [
    {
      "cells": [
        "word"
      ],
      "line": 18,
      "id": "testing-google-translate;;;1"
    },
    {
      "cells": [
        "a"
      ],
      "line": 19,
      "id": "testing-google-translate;;;2"
    },
    {
      "cells": [
        "abbotsford"
      ],
      "line": 20,
      "id": "testing-google-translate;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5187187030,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
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
  "name": "put the a to input box",
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
  "name": "save the a result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "put the synonyms a to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 4357381771,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 99379604,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 199682060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 76999163,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 68964445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 384528966,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3320871148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 64767471,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 11746401839,
  "status": "passed"
});
formatter.after({
  "duration": 852034676,
  "status": "passed"
});
formatter.before({
  "duration": 4291326938,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
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
  "name": "put the abbotsford to input box",
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
  "name": "save the abbotsford result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "put the synonyms abbotsford to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 4103463677,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 109468821,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 206312704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abbotsford",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 94498774,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 67827227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abbotsford",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 10322533868,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3503959443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abbotsford",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 75414741,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 11174545377,
  "status": "passed"
});
formatter.after({
  "duration": 823217136,
  "status": "passed"
});
});