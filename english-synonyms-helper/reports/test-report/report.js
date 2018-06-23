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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the \u003cword\u003e to query box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the \u003cword\u003e to input box",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the \u003cword\u003e result",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms \u003cword\u003e to search box",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;",
  "rows": [
    {
      "cells": [
        "word"
      ],
      "line": 23,
      "id": "testing-google-translate;;;1"
    },
    {
      "cells": [
        "particular"
      ],
      "line": 24,
      "id": "testing-google-translate;;;2"
    },
    {
      "cells": [
        "painting"
      ],
      "line": 25,
      "id": "testing-google-translate;;;3"
    },
    {
      "cells": [
        "watercolour"
      ],
      "line": 26,
      "id": "testing-google-translate;;;4"
    },
    {
      "cells": [
        "term"
      ],
      "line": 27,
      "id": "testing-google-translate;;;5"
    },
    {
      "cells": [
        "exactly"
      ],
      "line": 28,
      "id": "testing-google-translate;;;6"
    },
    {
      "cells": [
        "probably"
      ],
      "line": 29,
      "id": "testing-google-translate;;;7"
    },
    {
      "cells": [
        "suit"
      ],
      "line": 30,
      "id": "testing-google-translate;;;8"
    },
    {
      "cells": [
        "enough"
      ],
      "line": 31,
      "id": "testing-google-translate;;;9"
    },
    {
      "cells": [
        "apron"
      ],
      "line": 32,
      "id": "testing-google-translate;;;10"
    },
    {
      "cells": [
        "space"
      ],
      "line": 33,
      "id": "testing-google-translate;;;11"
    },
    {
      "cells": [
        "straight"
      ],
      "line": 34,
      "id": "testing-google-translate;;;12"
    },
    {
      "cells": [
        "recommends"
      ],
      "line": 35,
      "id": "testing-google-translate;;;13"
    },
    {
      "cells": [
        "interested"
      ],
      "line": 36,
      "id": "testing-google-translate;;;14"
    },
    {
      "cells": [
        "accessories"
      ],
      "line": 37,
      "id": "testing-google-translate;;;15"
    },
    {
      "cells": [
        "alone"
      ],
      "line": 38,
      "id": "testing-google-translate;;;16"
    },
    {
      "cells": [
        "along"
      ],
      "line": 39,
      "id": "testing-google-translate;;;17"
    },
    {
      "cells": [
        "focusing"
      ],
      "line": 40,
      "id": "testing-google-translate;;;18"
    },
    {
      "cells": [
        "composition"
      ],
      "line": 41,
      "id": "testing-google-translate;;;19"
    },
    {
      "cells": [
        "skilled"
      ],
      "line": 42,
      "id": "testing-google-translate;;;20"
    },
    {
      "cells": [
        "designed"
      ],
      "line": 43,
      "id": "testing-google-translate;;;21"
    },
    {
      "cells": [
        "professional"
      ],
      "line": 44,
      "id": "testing-google-translate;;;22"
    },
    {
      "cells": [
        "opportunity"
      ],
      "line": 45,
      "id": "testing-google-translate;;;23"
    },
    {
      "cells": [
        "imagine"
      ],
      "line": 46,
      "id": "testing-google-translate;;;24"
    },
    {
      "cells": [
        "community"
      ],
      "line": 47,
      "id": "testing-google-translate;;;25"
    },
    {
      "cells": [
        "council"
      ],
      "line": 48,
      "id": "testing-google-translate;;;26"
    },
    {
      "cells": [
        "couple"
      ],
      "line": 49,
      "id": "testing-google-translate;;;27"
    },
    {
      "cells": [
        "bottles"
      ],
      "line": 50,
      "id": "testing-google-translate;;;28"
    },
    {
      "cells": [
        "offered"
      ],
      "line": 51,
      "id": "testing-google-translate;;;29"
    },
    {
      "cells": [
        "lying"
      ],
      "line": 52,
      "id": "testing-google-translate;;;30"
    },
    {
      "cells": [
        "environmental"
      ],
      "line": 53,
      "id": "testing-google-translate;;;31"
    },
    {
      "cells": [
        "project"
      ],
      "line": 54,
      "id": "testing-google-translate;;;32"
    },
    {
      "cells": [
        "priority"
      ],
      "line": 55,
      "id": "testing-google-translate;;;33"
    },
    {
      "cells": [
        "wooden"
      ],
      "line": 56,
      "id": "testing-google-translate;;;34"
    },
    {
      "cells": [
        "fencing"
      ],
      "line": 57,
      "id": "testing-google-translate;;;35"
    },
    {
      "cells": [
        "fallen"
      ],
      "line": 58,
      "id": "testing-google-translate;;;36"
    },
    {
      "cells": [
        "broken"
      ],
      "line": 59,
      "id": "testing-google-translate;;;37"
    },
    {
      "cells": [
        "pathways"
      ],
      "line": 60,
      "id": "testing-google-translate;;;38"
    },
    {
      "cells": [
        "narrow"
      ],
      "line": 61,
      "id": "testing-google-translate;;;39"
    },
    {
      "cells": [
        "promised"
      ],
      "line": 62,
      "id": "testing-google-translate;;;40"
    },
    {
      "cells": [
        "produce"
      ],
      "line": 63,
      "id": "testing-google-translate;;;41"
    },
    {
      "cells": [
        "getting"
      ],
      "line": 64,
      "id": "testing-google-translate;;;42"
    },
    {
      "cells": [
        "rid"
      ],
      "line": 65,
      "id": "testing-google-translate;;;43"
    },
    {
      "cells": [
        "growing"
      ],
      "line": 66,
      "id": "testing-google-translate;;;44"
    },
    {
      "cells": [
        "digging"
      ],
      "line": 67,
      "id": "testing-google-translate;;;45"
    },
    {
      "cells": [
        "definitely"
      ],
      "line": 68,
      "id": "testing-google-translate;;;46"
    },
    {
      "cells": [
        "muddy"
      ],
      "line": 69,
      "id": "testing-google-translate;;;47"
    },
    {
      "cells": [
        "moment"
      ],
      "line": 70,
      "id": "testing-google-translate;;;48"
    },
    {
      "cells": [
        "gloves"
      ],
      "line": 71,
      "id": "testing-google-translate;;;49"
    },
    {
      "cells": [
        "advisable"
      ],
      "line": 72,
      "id": "testing-google-translate;;;50"
    },
    {
      "cells": [
        "spades"
      ],
      "line": 73,
      "id": "testing-google-translate;;;51"
    },
    {
      "cells": [
        "truck"
      ],
      "line": 74,
      "id": "testing-google-translate;;;52"
    },
    {
      "cells": [
        "supplying"
      ],
      "line": 75,
      "id": "testing-google-translate;;;53"
    },
    {
      "cells": [
        "event"
      ],
      "line": 76,
      "id": "testing-google-translate;;;54"
    },
    {
      "cells": [
        "assigned"
      ],
      "line": 77,
      "id": "testing-google-translate;;;55"
    },
    {
      "cells": [
        "directly"
      ],
      "line": 78,
      "id": "testing-google-translate;;;56"
    },
    {
      "cells": [
        "vegetable beds"
      ],
      "line": 79,
      "id": "testing-google-translate;;;57"
    },
    {
      "cells": [
        "bee"
      ],
      "line": 80,
      "id": "testing-google-translate;;;58"
    },
    {
      "cells": [
        "hives"
      ],
      "line": 81,
      "id": "testing-google-translate;;;59"
    },
    {
      "cells": [
        "easterly"
      ],
      "line": 82,
      "id": "testing-google-translate;;;60"
    },
    {
      "cells": [
        "fence"
      ],
      "line": 83,
      "id": "testing-google-translate;;;61"
    },
    {
      "cells": [
        "plan"
      ],
      "line": 84,
      "id": "testing-google-translate;;;62"
    },
    {
      "cells": [
        "transport"
      ],
      "line": 85,
      "id": "testing-google-translate;;;63"
    },
    {
      "cells": [
        "alongside"
      ],
      "line": 86,
      "id": "testing-google-translate;;;64"
    },
    {
      "cells": [
        "i suppose"
      ],
      "line": 87,
      "id": "testing-google-translate;;;65"
    },
    {
      "cells": [
        "adventure"
      ],
      "line": 88,
      "id": "testing-google-translate;;;66"
    },
    {
      "cells": [
        "playground"
      ],
      "line": 89,
      "id": "testing-google-translate;;;67"
    },
    {
      "cells": [
        "repairing"
      ],
      "line": 90,
      "id": "testing-google-translate;;;68"
    },
    {
      "cells": [
        "sand"
      ],
      "line": 91,
      "id": "testing-google-translate;;;69"
    },
    {
      "cells": [
        "towards"
      ],
      "line": 92,
      "id": "testing-google-translate;;;70"
    },
    {
      "cells": [
        "pond"
      ],
      "line": 93,
      "id": "testing-google-translate;;;71"
    },
    {
      "cells": [
        "bushes"
      ],
      "line": 94,
      "id": "testing-google-translate;;;72"
    },
    {
      "cells": [
        "as i said already"
      ],
      "line": 95,
      "id": "testing-google-translate;;;73"
    },
    {
      "cells": [
        "presentation"
      ],
      "line": 96,
      "id": "testing-google-translate;;;74"
    },
    {
      "cells": [
        "concentrating"
      ],
      "line": 97,
      "id": "testing-google-translate;;;75"
    },
    {
      "cells": [
        "fair enough"
      ],
      "line": 98,
      "id": "testing-google-translate;;;76"
    },
    {
      "cells": [
        "concluded"
      ],
      "line": 99,
      "id": "testing-google-translate;;;77"
    },
    {
      "cells": [
        "billion"
      ],
      "line": 100,
      "id": "testing-google-translate;;;78"
    },
    {
      "cells": [
        "landfill"
      ],
      "line": 101,
      "id": "testing-google-translate;;;79"
    },
    {
      "cells": [
        "tons"
      ],
      "line": 102,
      "id": "testing-google-translate;;;80"
    },
    {
      "cells": [
        "incredible"
      ],
      "line": 103,
      "id": "testing-google-translate;;;81"
    },
    {
      "cells": [
        "households"
      ],
      "line": 104,
      "id": "testing-google-translate;;;82"
    },
    {
      "cells": [
        "threw"
      ],
      "line": 105,
      "id": "testing-google-translate;;;83"
    },
    {
      "cells": [
        "away"
      ],
      "line": 106,
      "id": "testing-google-translate;;;84"
    },
    {
      "cells": [
        "catering"
      ],
      "line": 107,
      "id": "testing-google-translate;;;85"
    },
    {
      "cells": [
        "investigate"
      ],
      "line": 108,
      "id": "testing-google-translate;;;86"
    },
    {
      "cells": [
        "unique"
      ],
      "line": 109,
      "id": "testing-google-translate;;;87"
    },
    {
      "cells": [
        "respect"
      ],
      "line": 110,
      "id": "testing-google-translate;;;88"
    },
    {
      "cells": [
        "dioxide"
      ],
      "line": 111,
      "id": "testing-google-translate;;;89"
    },
    {
      "cells": [
        "emissions"
      ],
      "line": 112,
      "id": "testing-google-translate;;;90"
    },
    {
      "cells": [
        "factories"
      ],
      "line": 113,
      "id": "testing-google-translate;;;91"
    },
    {
      "cells": [
        "release"
      ],
      "line": 114,
      "id": "testing-google-translate;;;92"
    },
    {
      "cells": [
        "forget"
      ],
      "line": 115,
      "id": "testing-google-translate;;;93"
    },
    {
      "cells": [
        "causes"
      ],
      "line": 116,
      "id": "testing-google-translate;;;94"
    },
    {
      "cells": [
        "comprehensive"
      ],
      "line": 117,
      "id": "testing-google-translate;;;95"
    },
    {
      "cells": [
        "industries"
      ],
      "line": 118,
      "id": "testing-google-translate;;;96"
    },
    {
      "cells": [
        "documentaries"
      ],
      "line": 119,
      "id": "testing-google-translate;;;97"
    },
    {
      "cells": [
        "exactly"
      ],
      "line": 120,
      "id": "testing-google-translate;;;98"
    },
    {
      "cells": [
        "focusing"
      ],
      "line": 121,
      "id": "testing-google-translate;;;99"
    },
    {
      "cells": [
        "encouraged"
      ],
      "line": 122,
      "id": "testing-google-translate;;;100"
    },
    {
      "cells": [
        "locally"
      ],
      "line": 123,
      "id": "testing-google-translate;;;101"
    },
    {
      "cells": [
        "overseas"
      ],
      "line": 124,
      "id": "testing-google-translate;;;102"
    },
    {
      "cells": [
        "same"
      ],
      "line": 125,
      "id": "testing-google-translate;;;103"
    },
    {
      "cells": [
        "reaches"
      ],
      "line": 126,
      "id": "testing-google-translate;;;104"
    },
    {
      "cells": [
        "presentation"
      ],
      "line": 127,
      "id": "testing-google-translate;;;105"
    },
    {
      "cells": [
        "consequences"
      ],
      "line": 128,
      "id": "testing-google-translate;;;106"
    },
    {
      "cells": [
        "concentrate"
      ],
      "line": 129,
      "id": "testing-google-translate;;;107"
    },
    {
      "cells": [
        "farming"
      ],
      "line": 130,
      "id": "testing-google-translate;;;108"
    },
    {
      "cells": [
        "avoid"
      ],
      "line": 131,
      "id": "testing-google-translate;;;109"
    },
    {
      "cells": [
        "fact"
      ],
      "line": 132,
      "id": "testing-google-translate;;;110"
    },
    {
      "cells": [
        "afford"
      ],
      "line": 133,
      "id": "testing-google-translate;;;111"
    },
    {
      "cells": [
        "repeat"
      ],
      "line": 134,
      "id": "testing-google-translate;;;112"
    },
    {
      "cells": [
        "concerns"
      ],
      "line": 135,
      "id": "testing-google-translate;;;113"
    },
    {
      "cells": [
        "recession"
      ],
      "line": 136,
      "id": "testing-google-translate;;;114"
    },
    {
      "cells": [
        "encouraging"
      ],
      "line": 137,
      "id": "testing-google-translate;;;115"
    },
    {
      "cells": [
        "apparently"
      ],
      "line": 138,
      "id": "testing-google-translate;;;116"
    },
    {
      "cells": [
        "supermarkets"
      ],
      "line": 139,
      "id": "testing-google-translate;;;117"
    },
    {
      "cells": [
        "attention"
      ],
      "line": 140,
      "id": "testing-google-translate;;;118"
    },
    {
      "cells": [
        "statistics"
      ],
      "line": 141,
      "id": "testing-google-translate;;;119"
    },
    {
      "cells": [
        "everybody"
      ],
      "line": 142,
      "id": "testing-google-translate;;;120"
    },
    {
      "cells": [
        "suspect"
      ],
      "line": 143,
      "id": "testing-google-translate;;;121"
    },
    {
      "cells": [
        "waste"
      ],
      "line": 144,
      "id": "testing-google-translate;;;122"
    },
    {
      "cells": [
        "personalised"
      ],
      "line": 145,
      "id": "testing-google-translate;;;123"
    },
    {
      "cells": [
        "researchers"
      ],
      "line": 146,
      "id": "testing-google-translate;;;124"
    },
    {
      "cells": [
        "invented"
      ],
      "line": 147,
      "id": "testing-google-translate;;;125"
    },
    {
      "cells": [
        "tiny"
      ],
      "line": 148,
      "id": "testing-google-translate;;;126"
    },
    {
      "cells": [
        "manufacture"
      ],
      "line": 149,
      "id": "testing-google-translate;;;127"
    },
    {
      "cells": [
        "massachusetts"
      ],
      "line": 150,
      "id": "testing-google-translate;;;128"
    },
    {
      "cells": [
        "detect"
      ],
      "line": 151,
      "id": "testing-google-translate;;;129"
    },
    {
      "cells": [
        "ethylene"
      ],
      "line": 152,
      "id": "testing-google-translate;;;130"
    },
    {
      "cells": [
        "cardboard"
      ],
      "line": 153,
      "id": "testing-google-translate;;;131"
    },
    {
      "cells": [
        "quicker"
      ],
      "line": 154,
      "id": "testing-google-translate;;;132"
    },
    {
      "cells": [
        "ripeness"
      ],
      "line": 155,
      "id": "testing-google-translate;;;133"
    },
    {
      "cells": [
        "eventually"
      ],
      "line": 156,
      "id": "testing-google-translate;;;134"
    },
    {
      "cells": [
        "unwanted"
      ],
      "line": 157,
      "id": "testing-google-translate;;;135"
    },
    {
      "cells": [
        "neighbourhood"
      ],
      "line": 158,
      "id": "testing-google-translate;;;136"
    },
    {
      "cells": [
        "compulsory"
      ],
      "line": 159,
      "id": "testing-google-translate;;;137"
    },
    {
      "cells": [
        "organic"
      ],
      "line": 160,
      "id": "testing-google-translate;;;138"
    },
    {
      "cells": [
        "inorganic"
      ],
      "line": 161,
      "id": "testing-google-translate;;;139"
    },
    {
      "cells": [
        "themselves"
      ],
      "line": 162,
      "id": "testing-google-translate;;;140"
    },
    {
      "cells": [
        "craft"
      ],
      "line": 163,
      "id": "testing-google-translate;;;141"
    },
    {
      "cells": [
        "practised"
      ],
      "line": 164,
      "id": "testing-google-translate;;;142"
    },
    {
      "cells": [
        "kite"
      ],
      "line": 165,
      "id": "testing-google-translate;;;143"
    },
    {
      "cells": [
        "appearance"
      ],
      "line": 166,
      "id": "testing-google-translate;;;144"
    },
    {
      "cells": [
        "artistic"
      ],
      "line": 167,
      "id": "testing-google-translate;;;145"
    },
    {
      "cells": [
        "involved"
      ],
      "line": 168,
      "id": "testing-google-translate;;;146"
    },
    {
      "cells": [
        "rituals"
      ],
      "line": 169,
      "id": "testing-google-translate;;;147"
    },
    {
      "cells": [
        "priests"
      ],
      "line": 170,
      "id": "testing-google-translate;;;148"
    },
    {
      "cells": [
        "sacred"
      ],
      "line": 171,
      "id": "testing-google-translate;;;149"
    },
    {
      "cells": [
        "strictly"
      ],
      "line": 172,
      "id": "testing-google-translate;;;150"
    },
    {
      "cells": [
        "forbidden"
      ],
      "line": 173,
      "id": "testing-google-translate;;;151"
    },
    {
      "cells": [
        "perhaps"
      ],
      "line": 174,
      "id": "testing-google-translate;;;152"
    },
    {
      "cells": [
        "imagine"
      ],
      "line": 175,
      "id": "testing-google-translate;;;153"
    },
    {
      "cells": [
        "suitable"
      ],
      "line": 176,
      "id": "testing-google-translate;;;154"
    },
    {
      "cells": [
        "materials"
      ],
      "line": 177,
      "id": "testing-google-translate;;;155"
    },
    {
      "cells": [
        "wings"
      ],
      "line": 178,
      "id": "testing-google-translate;;;156"
    },
    {
      "cells": [
        "noisy"
      ],
      "line": 179,
      "id": "testing-google-translate;;;157"
    },
    {
      "cells": [
        "indeed"
      ],
      "line": 180,
      "id": "testing-google-translate;;;158"
    },
    {
      "cells": [
        "capture"
      ],
      "line": 181,
      "id": "testing-google-translate;;;159"
    },
    {
      "cells": [
        "cultures"
      ],
      "line": 182,
      "id": "testing-google-translate;;;160"
    },
    {
      "cells": [
        "shapes"
      ],
      "line": 183,
      "id": "testing-google-translate;;;161"
    },
    {
      "cells": [
        "diamond"
      ],
      "line": 184,
      "id": "testing-google-translate;;;162"
    },
    {
      "cells": [
        "covered"
      ],
      "line": 185,
      "id": "testing-google-translate;;;163"
    },
    {
      "cells": [
        "combined"
      ],
      "line": 186,
      "id": "testing-google-translate;;;164"
    },
    {
      "cells": [
        "species"
      ],
      "line": 187,
      "id": "testing-google-translate;;;165"
    },
    {
      "cells": [
        "museum"
      ],
      "line": 188,
      "id": "testing-google-translate;;;166"
    },
    {
      "cells": [
        "surviving"
      ],
      "line": 189,
      "id": "testing-google-translate;;;167"
    },
    {
      "cells": [
        "wooden"
      ],
      "line": 190,
      "id": "testing-google-translate;;;168"
    },
    {
      "cells": [
        "mask"
      ],
      "line": 191,
      "id": "testing-google-translate;;;169"
    },
    {
      "cells": [
        "impressive"
      ],
      "line": 192,
      "id": "testing-google-translate;;;170"
    },
    {
      "cells": [
        "craftsmanship"
      ],
      "line": 193,
      "id": "testing-google-translate;;;171"
    },
    {
      "cells": [
        "symbolism"
      ],
      "line": 194,
      "id": "testing-google-translate;;;172"
    },
    {
      "cells": [
        "harvest"
      ],
      "line": 195,
      "id": "testing-google-translate;;;173"
    },
    {
      "cells": [
        "fortune"
      ],
      "line": 196,
      "id": "testing-google-translate;;;174"
    },
    {
      "cells": [
        "communicating"
      ],
      "line": 197,
      "id": "testing-google-translate;;;175"
    },
    {
      "cells": [
        "expedition"
      ],
      "line": 198,
      "id": "testing-google-translate;;;176"
    },
    {
      "cells": [
        "treasured"
      ],
      "line": 199,
      "id": "testing-google-translate;;;177"
    },
    {
      "cells": [
        "generation"
      ],
      "line": 200,
      "id": "testing-google-translate;;;178"
    },
    {
      "cells": [
        "neighbouring"
      ],
      "line": 201,
      "id": "testing-google-translate;;;179"
    },
    {
      "cells": [
        "required"
      ],
      "line": 202,
      "id": "testing-google-translate;;;180"
    },
    {
      "cells": [
        "traditional"
      ],
      "line": 203,
      "id": "testing-google-translate;;;181"
    },
    {
      "cells": [
        "describe"
      ],
      "line": 204,
      "id": "testing-google-translate;;;182"
    },
    {
      "cells": [
        "escape"
      ],
      "line": 205,
      "id": "testing-google-translate;;;183"
    },
    {
      "cells": [
        "fortifications"
      ],
      "line": 206,
      "id": "testing-google-translate;;;184"
    },
    {
      "cells": [
        "enemy"
      ],
      "line": 207,
      "id": "testing-google-translate;;;185"
    },
    {
      "cells": [
        "revival"
      ],
      "line": 208,
      "id": "testing-google-translate;;;186"
    },
    {
      "cells": [
        "growing"
      ],
      "line": 209,
      "id": "testing-google-translate;;;187"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5718534737,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the particular to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the particular to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the particular result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms particular to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8281505292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "particular",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 130156266,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3080712902,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 35733247,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1663971065,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 126961076,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 162326925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "particular",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 78972102,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 59555826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "particular",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 493888738,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 5961982923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "particular",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 77617320,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2187503355,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 118304244,
  "status": "passed"
});
formatter.after({
  "duration": 1161917945,
  "status": "passed"
});
formatter.before({
  "duration": 4958710158,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the painting to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the painting to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the painting result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms painting to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 14035028860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "painting",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 98776878,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2920003276,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 57586023,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 2050904890,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 161039478,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 172378258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "painting",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 65238094,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 328327216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "painting",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 213438166,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3184651050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "painting",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 98853524,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 4532466223,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 30629695,
  "status": "passed"
});
formatter.after({
  "duration": 1127469972,
  "status": "passed"
});
formatter.before({
  "duration": 4926081491,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the watercolour to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the watercolour to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the watercolour result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms watercolour to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8836801745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watercolour",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 138556167,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2435733309,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 54372836,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1106400092,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 107757977,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 173727456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watercolour",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 84113513,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 65148106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watercolour",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5414410841,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3624279904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watercolour",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 97757844,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2771028688,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5035979008,
  "status": "passed"
});
formatter.after({
  "duration": 1194004822,
  "status": "passed"
});
formatter.before({
  "duration": 5020032849,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;5",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the term to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the term to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the term result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms term to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 10035538067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "term",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 106698603,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2521346826,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 40278255,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1082526002,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 94059963,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 178045011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "term",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 74594038,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73802455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "term",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 408648206,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2816351848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "term",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 108076038,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3854602584,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 40795841,
  "status": "passed"
});
formatter.after({
  "duration": 1151967770,
  "status": "passed"
});
formatter.before({
  "duration": 5150492280,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;6",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the exactly to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the exactly to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the exactly result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms exactly to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9758018306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "exactly",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 70044376,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2395746429,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 53652002,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1066373183,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 88855253,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 170759097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "exactly",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 87008639,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 78709897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "exactly",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 341590495,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3259529946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "exactly",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 95506596,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1964878360,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 63237881,
  "status": "passed"
});
formatter.after({
  "duration": 1208682463,
  "status": "passed"
});
formatter.before({
  "duration": 5018447201,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;7",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the probably to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the probably to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the probably result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms probably to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9257490946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "probably",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 93383503,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2175204497,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 40882415,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1991545175,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 143074487,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 204382284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "probably",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 72406092,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 66482719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "probably",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 325572967,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3947110102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "probably",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 90187072,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2436041440,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 62032354,
  "status": "passed"
});
formatter.after({
  "duration": 1151986699,
  "status": "passed"
});
formatter.before({
  "duration": 4994845558,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;8",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the suit to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the suit to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the suit result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms suit to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7336753492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suit",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 92485176,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2133402345,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 61190191,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1150599335,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 127016309,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 184477591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suit",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 63440199,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 76412103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suit",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 415696116,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3085435713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suit",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 99372971,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2685333561,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 46002103,
  "status": "passed"
});
formatter.after({
  "duration": 1147690555,
  "status": "passed"
});
formatter.before({
  "duration": 5023629260,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;9",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the enough to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the enough to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the enough result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms enough to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 10052477815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enough",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 98558115,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2283336701,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 71703566,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1040544805,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 108320246,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 179835769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enough",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 76431032,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73242980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enough",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 459421216,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2779945864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enough",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 83489183,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3352879937,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 49878408,
  "status": "passed"
});
formatter.after({
  "duration": 1158914213,
  "status": "passed"
});
formatter.before({
  "duration": 4949478024,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;10",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the apron to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the apron to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the apron result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms apron to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9452074173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apron",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 98491710,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2649349280,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 52495503,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1093268381,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 113848604,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 185383055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apron",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 56415560,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 58901087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apron",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 314405474,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3270855385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apron",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 87246951,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3171905357,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 35803066,
  "status": "passed"
});
formatter.after({
  "duration": 1156357006,
  "status": "passed"
});
formatter.before({
  "duration": 5021496548,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;11",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the space to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the space to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the space result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms space to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9701317267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "space",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 121752330,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2799344144,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 54178896,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1131261255,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 103269756,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 174980149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "space",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 70444667,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 65339252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "space",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 360601827,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3861733346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "space",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 107772561,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1945678985,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 46580508,
  "status": "passed"
});
formatter.after({
  "duration": 1144486676,
  "status": "passed"
});
formatter.before({
  "duration": 4881994577,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;12",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the straight to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the straight to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the straight result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms straight to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 10429459914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "straight",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 163782556,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 8780043300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 55884632,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1099834391,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 130257114,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 195298165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "straight",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 76239575,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 66243475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "straight",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 375323529,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 4176727154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "straight",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 84126235,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2072948502,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 32504855,
  "status": "passed"
});
formatter.after({
  "duration": 1129242113,
  "status": "passed"
});
formatter.before({
  "duration": 4975540059,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;13",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the recommends to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the recommends to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the recommends result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms recommends to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6600344374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "recommends",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 99687928,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2469323915,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 60249353,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1110828425,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 129195878,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 222553006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "recommends",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 65945585,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 64495539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "recommends",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 303276768,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2939931863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "recommends",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 121599041,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2771028999,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 48159019,
  "status": "passed"
});
formatter.after({
  "duration": 1165222052,
  "status": "passed"
});
formatter.before({
  "duration": 5092248105,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;14",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the interested to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the interested to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the interested result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms interested to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 10506550650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "interested",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 98240676,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2149092813,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 32604153,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1144426788,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 92275101,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 166790012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "interested",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 76361524,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 69509724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "interested",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 363312013,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 4080545649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "interested",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 103508378,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1863775450,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 34052026,
  "status": "passed"
});
formatter.after({
  "duration": 1133257123,
  "status": "passed"
});
formatter.before({
  "duration": 5076476956,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;15",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the accessories to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the accessories to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the accessories result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms accessories to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7889104860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accessories",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 108720537,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2214697996,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 38025766,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1087219955,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 94223183,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 184648878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accessories",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 90496444,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 70404948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accessories",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 388707516,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 4291208155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accessories",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 88032018,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3086462816,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 31847013,
  "status": "passed"
});
formatter.after({
  "duration": 1130600619,
  "status": "passed"
});
formatter.before({
  "duration": 5007063737,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;16",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the alone to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the alone to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the alone result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms alone to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 12357671015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alone",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 77695826,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3152256042,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 46696251,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1591420682,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 145395864,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 193629667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alone",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 62674991,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 57961179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alone",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 321921322,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3066488925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alone",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 105136228,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2343783406,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 41515743,
  "status": "passed"
});
formatter.after({
  "duration": 1100755060,
  "status": "passed"
});
formatter.before({
  "duration": 4993872758,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;17",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the along to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the along to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the along result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms along to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9917410075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "along",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 91251412,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3618614082,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 57439250,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1094155537,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 114607605,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 210658783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "along",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 66094219,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 58102367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "along",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 363705167,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3397865488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "along",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 88589633,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2269899651,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 52509466,
  "status": "passed"
});
formatter.after({
  "duration": 1155505224,
  "status": "passed"
});
formatter.before({
  "duration": 5073625893,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;18",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the focusing to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the focusing to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the focusing result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms focusing to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8669104097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "focusing",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 133401725,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2409361282,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 54480200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1059055928,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 104525241,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 187460223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "focusing",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 67687626,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 54771265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "focusing",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 339206437,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3223863725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "focusing",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 85788217,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1909862886,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 48179499,
  "status": "passed"
});
formatter.after({
  "duration": 1188083622,
  "status": "passed"
});
formatter.before({
  "duration": 5005431854,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;19",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the composition to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the composition to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the composition result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms composition to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6727922022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "composition",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 72097341,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2412612015,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 68728692,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1097143755,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 121132034,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 203451066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "composition",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 100448170,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 63376586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "composition",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 400108048,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3500494778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "composition",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 110639450,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2459293372,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 27104033,
  "status": "passed"
});
formatter.after({
  "duration": 1148604707,
  "status": "passed"
});
formatter.before({
  "duration": 5016581039,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;20",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the skilled to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the skilled to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the skilled result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms skilled to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8211025251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skilled",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 108140581,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2047179393,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 45838574,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1121529843,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 105812688,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 164959535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skilled",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 61829416,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 66407005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skilled",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 354031162,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2936151132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skilled",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 102462347,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1991672399,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 36147812,
  "status": "passed"
});
formatter.after({
  "duration": 1156035532,
  "status": "passed"
});
formatter.before({
  "duration": 4890477951,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;21",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the designed to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the designed to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the designed result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms designed to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8413039613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "designed",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 90376357,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2562789028,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 47609473,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1065396969,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 95960569,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 174401744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "designed",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 68638704,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 63054182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "designed",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 329897658,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3249032708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "designed",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 111319014,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2567637511,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 29808323,
  "status": "passed"
});
formatter.after({
  "duration": 1108477259,
  "status": "passed"
});
formatter.before({
  "duration": 4944547621,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;22",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the professional to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the professional to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the professional result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms professional to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7415683394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "professional",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 88084459,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2374279050,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 44566331,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1103921702,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 111191480,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 211386753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "professional",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 112925763,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73805559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "professional",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 376032572,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3117521350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "professional",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 132432959,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2219002208,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 45417803,
  "status": "passed"
});
formatter.after({
  "duration": 1169673347,
  "status": "passed"
});
formatter.before({
  "duration": 5083703602,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;23",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the opportunity to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the opportunity to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the opportunity result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms opportunity to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7317367005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opportunity",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 110574288,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2261875216,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 54788642,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1128972149,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 127663912,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 180170586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opportunity",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 83450706,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 63822802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opportunity",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 372924888,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 4113409835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opportunity",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 147269474,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2105650710,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 40834318,
  "status": "passed"
});
formatter.after({
  "duration": 1186271452,
  "status": "passed"
});
formatter.before({
  "duration": 4896277512,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;24",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the imagine to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the imagine to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the imagine result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms imagine to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9442238190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imagine",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 109820251,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2359418641,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 47193977,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1081763588,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 111983994,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 177046146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imagine",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 66112527,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 76117626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imagine",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 408154514,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3371005664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imagine",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 75716404,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2535862488,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 33298611,
  "status": "passed"
});
formatter.after({
  "duration": 1153865584,
  "status": "passed"
});
formatter.before({
  "duration": 4868940753,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;25",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the community to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the community to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the community result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms community to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6679698150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "community",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 262094291,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2815563369,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 50027043,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1143566628,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 94229699,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 198625234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "community",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 91339537,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 59328374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "community",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 376758371,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3479370594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "community",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 125209106,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1997597324,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 33264167,
  "status": "passed"
});
formatter.after({
  "duration": 1157534296,
  "status": "passed"
});
formatter.before({
  "duration": 4797200260,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;26",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the council to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the council to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the council result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms council to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8195137118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "council",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 306298499,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2184688597,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 42903418,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1170992756,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 106128266,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 220977597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "council",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 76467027,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 72951605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "council",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 384187954,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 5333664426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "council",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 122061392,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3066996891,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 48810345,
  "status": "passed"
});
formatter.after({
  "duration": 1156141656,
  "status": "passed"
});
formatter.before({
  "duration": 4959019839,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;27",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the couple to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the couple to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the couple result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms couple to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9620540442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "couple",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 77051948,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2388380767,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 58168772,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1069028134,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 101285988,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 192309017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "couple",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 58426323,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 55871599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "couple",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 348167056,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3328318837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "couple",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 84274249,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2544532043,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 34236966,
  "status": "passed"
});
formatter.after({
  "duration": 1146689828,
  "status": "passed"
});
formatter.before({
  "duration": 4981328450,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;28",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the bottles to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the bottles to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the bottles result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms bottles to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9336560485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bottles",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 72019144,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2458215069,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 39122997,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1069500105,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 91242103,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 166270254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bottles",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 59773038,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 59980010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bottles",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 326526527,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3027915785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bottles",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 98890760,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1935329761,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 49507285,
  "status": "passed"
});
formatter.after({
  "duration": 1200670751,
  "status": "passed"
});
formatter.before({
  "duration": 4904567877,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;29",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the offered to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the offered to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the offered result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms offered to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9879648687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "offered",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 100714100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2037474357,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 42851597,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 3746689455,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 158871702,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 183816336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "offered",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 68673768,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 58660292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "offered",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 380995247,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3078982653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "offered",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 96028525,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1956590478,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 36393262,
  "status": "passed"
});
formatter.after({
  "duration": 1179456889,
  "status": "passed"
});
formatter.before({
  "duration": 4937721886,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;30",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the lying to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the lying to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the lying result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms lying to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7957576931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lying",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 92405118,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2801174311,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 41474162,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1076553601,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 106686812,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 204791574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lying",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 79525063,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 76285190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lying",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 15345076128,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3481879083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lying",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 67391907,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2816466040,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5049306210,
  "status": "passed"
});
formatter.after({
  "duration": 1166906686,
  "status": "passed"
});
formatter.before({
  "duration": 4848152006,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;31",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the environmental to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the environmental to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the environmental result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms environmental to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8405773559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "environmental",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 124904077,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2029022636,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 44412421,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1103457489,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 123162037,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 170332430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "environmental",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 90646941,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 72345273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "environmental",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5381658054,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3340844837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "environmental",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 105803069,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2220063755,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 55225859,
  "status": "passed"
});
formatter.after({
  "duration": 1154295353,
  "status": "passed"
});
formatter.before({
  "duration": 4934831414,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;32",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the project to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the project to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the project result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms project to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 11688285163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 101628563,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 4821695887,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 40092694,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1126612916,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 102019234,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 164986842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 69941666,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 65360974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 354972621,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3428553520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 75998470,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1873455350,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 43560950,
  "status": "passed"
});
formatter.after({
  "duration": 1094176327,
  "status": "passed"
});
formatter.before({
  "duration": 5118312312,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;33",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the priority to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the priority to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the priority result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms priority to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 11178833491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priority",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 92084885,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 5261862495,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 60193499,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1105903607,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 97420544,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 140274624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priority",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 66393972,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 65490060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priority",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 1019293707,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 12504776649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priority",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 102780097,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1587868644,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 37535797,
  "status": "passed"
});
formatter.after({
  "duration": 1158607013,
  "status": "passed"
});
formatter.before({
  "duration": 4977210420,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;34",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the wooden to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the wooden to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the wooden result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms wooden to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 10322948734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wooden",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 87839941,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2909375400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 51712919,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1094908022,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 122542983,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 194534200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wooden",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 66047364,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 75982955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wooden",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 364251300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2950804879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wooden",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 77460307,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1804798339,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 38814245,
  "status": "passed"
});
formatter.after({
  "duration": 1149400324,
  "status": "passed"
});
formatter.before({
  "duration": 4984082079,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;35",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the fencing to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the fencing to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the fencing result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms fencing to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 10651938447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fencing",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 107072518,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 4040098280,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 37866580,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1072782489,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 90914733,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 161587472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fencing",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 66243476,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 70399674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fencing",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 374431719,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3341684828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fencing",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 92761656,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2339952095,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 52704647,
  "status": "passed"
});
formatter.after({
  "duration": 1166278012,
  "status": "passed"
});
formatter.before({
  "duration": 5015245495,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;36",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the fallen to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the fallen to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the fallen result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms fallen to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6720653175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fallen",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 74668201,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2102601362,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 45916460,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1108148648,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 118525800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 174410122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fallen",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 57322265,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 74900308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fallen",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 381376299,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3280593002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fallen",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 81586715,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2297977725,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 57582920,
  "status": "passed"
});
formatter.after({
  "duration": 1191786467,
  "status": "passed"
});
formatter.before({
  "duration": 5259199164,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;37",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the broken to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the broken to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the broken result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms broken to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7372623894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "broken",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 86640000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2175925331,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 45689318,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1139104472,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 119823798,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 213542738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "broken",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 83463738,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 102918802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "broken",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 405348134,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3737449254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "broken",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 89532333,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3932808549,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 46171219,
  "status": "passed"
});
formatter.after({
  "duration": 1165939161,
  "status": "passed"
});
formatter.before({
  "duration": 5007414379,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;38",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the pathways to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the pathways to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the pathways result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms pathways to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6795445187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pathways",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 98264879,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3623344960,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 40653412,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1063999675,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 127848853,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 177740293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pathways",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 81733799,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 70741627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pathways",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 384935474,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3326253772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pathways",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 108344450,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2321585264,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 32007130,
  "status": "passed"
});
formatter.after({
  "duration": 1135747925,
  "status": "passed"
});
formatter.before({
  "duration": 5122305291,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;39",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the narrow to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the narrow to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the narrow result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms narrow to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7502573497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "narrow",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 70026068,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 4915212820,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 62999568,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 2424832367,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 128047756,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 180058877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "narrow",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 78677625,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 83377474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "narrow",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 624813935,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3062742328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "narrow",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 113036541,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3036935362,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 43516266,
  "status": "passed"
});
formatter.after({
  "duration": 1175009627,
  "status": "passed"
});
formatter.before({
  "duration": 5167738298,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;40",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the promised to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the promised to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the promised result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms promised to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7440631131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "promised",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 98102590,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2405135886,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 44224688,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1165910923,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 119965606,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 170686176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "promised",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 75982644,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 64668998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "promised",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 382929676,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3870465271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "promised",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 111611319,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2422951000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 48312930,
  "status": "passed"
});
formatter.after({
  "duration": 1248115143,
  "status": "passed"
});
formatter.before({
  "duration": 4879507189,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;41",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the produce to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the produce to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the produce result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms produce to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8113168730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "produce",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 81911293,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3037677916,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 38624341,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1106643680,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 124042987,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 195403047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "produce",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 69914360,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 60686260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "produce",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 377302952,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3250828122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "produce",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 117228734,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2342521404,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 37070653,
  "status": "passed"
});
formatter.after({
  "duration": 1166237362,
  "status": "passed"
});
formatter.before({
  "duration": 4911293073,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;42",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the getting to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the getting to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the getting result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms getting to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 11754061323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getting",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 105894919,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2483611194,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 41063321,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1199220395,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 119772597,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 191217682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getting",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 51901273,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73097758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getting",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 472044651,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3231764349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getting",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 69464110,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1602882962,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 40343418,
  "status": "passed"
});
formatter.after({
  "duration": 1148160664,
  "status": "passed"
});
formatter.before({
  "duration": 4909230489,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;43",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the rid to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the rid to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the rid result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms rid to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 10304276254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rid",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 90418248,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2068276271,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 40575836,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1135105288,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 112357598,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 178306596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rid",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 80088883,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 84635131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rid",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 375027190,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3617149142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rid",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 71630334,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2561846017,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 52262465,
  "status": "passed"
});
formatter.after({
  "duration": 1187273111,
  "status": "passed"
});
formatter.before({
  "duration": 4981280043,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;44",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the growing to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the growing to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the growing result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms growing to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7906957210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "growing",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 71304827,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 1996424069,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 46610297,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1129783592,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 118835173,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 171097328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "growing",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 63607762,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 57878018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "growing",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 321461142,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2805384501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "growing",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 116282620,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3678230106,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 46020101,
  "status": "passed"
});
formatter.after({
  "duration": 1133181409,
  "status": "passed"
});
formatter.before({
  "duration": 4882914937,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;45",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the digging to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the digging to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the digging result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms digging to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7896883845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "digging",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 96129994,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2367160390,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 34897292,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1062090071,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 116707735,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 219947391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "digging",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 73106446,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 82311273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "digging",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 395091690,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3812516815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "digging",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 95038659,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1919466453,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 35663739,
  "status": "passed"
});
formatter.after({
  "duration": 1172436905,
  "status": "passed"
});
formatter.before({
  "duration": 4874881193,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;46",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the definitely to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the definitely to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the definitely result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms definitely to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7660770290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "definitely",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 88697618,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2175055862,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 58272723,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1087978957,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 123262886,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 228183762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "definitely",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 71252696,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 70895538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "definitely",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 365827949,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3345492245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "definitely",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 120767119,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1576199701,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 29138069,
  "status": "passed"
});
formatter.after({
  "duration": 1141326551,
  "status": "passed"
});
formatter.before({
  "duration": 4964101050,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;47",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the muddy to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the muddy to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the muddy result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms muddy to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6081912533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "muddy",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 82197702,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3013923605,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 48299276,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1043130249,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 99269951,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 181633354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "muddy",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 79445935,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 77897524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "muddy",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 422317671,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3394544315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "muddy",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 67327674,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2568955368,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 47539965,
  "status": "passed"
});
formatter.after({
  "duration": 1166017978,
  "status": "passed"
});
formatter.before({
  "duration": 4921295378,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;48",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the moment to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the moment to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the moment result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms moment to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6122826909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "moment",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 103906187,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2315350036,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 55975550,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1185985353,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 100620389,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 172243587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "moment",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 66578603,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 57848850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "moment",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 355852640,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3322119605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "moment",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 84777561,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2293776223,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 46203179,
  "status": "passed"
});
formatter.after({
  "duration": 1193500580,
  "status": "passed"
});
formatter.before({
  "duration": 4840427635,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;49",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the gloves to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the gloves to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the gloves result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms gloves to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6360682195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gloves",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 124024679,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2067201070,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 47256347,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1127374710,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 123445344,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 195695353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gloves",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 67612843,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 66685346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gloves",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 333047234,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3888605583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gloves",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 101953450,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2403393225,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 38838449,
  "status": "passed"
});
formatter.after({
  "duration": 1172316508,
  "status": "passed"
});
formatter.before({
  "duration": 5050432609,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;50",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the advisable to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the advisable to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the advisable result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms advisable to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6206380325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "advisable",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 77799158,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 1985376973,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 43222099,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1108267185,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 91262583,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 164324656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "advisable",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 70829132,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 60305208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "advisable",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 324952051,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3216797816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "advisable",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 94854029,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2355289129,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 33329641,
  "status": "passed"
});
formatter.after({
  "duration": 1142947574,
  "status": "passed"
});
formatter.before({
  "duration": 5047237730,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;51",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the spades to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the spades to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the spades result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms spades to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6327202368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "spades",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 85415233,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3036365645,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 40082143,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1088960755,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 96063900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 205808437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "spades",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 71907125,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 78492684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "spades",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 13030724647,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3155399411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "spades",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 74449747,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2827806062,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5039133237,
  "status": "passed"
});
formatter.after({
  "duration": 1142696228,
  "status": "passed"
});
formatter.before({
  "duration": 4869104593,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;52",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the truck to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the truck to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the truck result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms truck to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7260682723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "truck",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 71895644,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3009413971,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 42374661,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1166951370,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 112901869,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 183710522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "truck",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 72886752,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 70458320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "truck",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 15302879891,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3416774729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "truck",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 108537768,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3204435346,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5061986119,
  "status": "passed"
});
formatter.after({
  "duration": 1191168343,
  "status": "passed"
});
formatter.before({
  "duration": 4952620462,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;53",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the supplying to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the supplying to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the supplying result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms supplying to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8174405468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "supplying",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 104504140,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2817547446,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 45078332,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1124697415,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 119989809,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 165694953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "supplying",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 64863868,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 79161387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "supplying",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 15335125954,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3412332432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "supplying",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 136497927,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2723431317,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5068182558,
  "status": "passed"
});
formatter.after({
  "duration": 1154262771,
  "status": "passed"
});
formatter.before({
  "duration": 4977931254,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;54",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the event to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the event to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the event result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms event to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6290937261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "event",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 98819700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3280028560,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 51500362,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1065554292,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 128549827,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 174875266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "event",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 60698362,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 62567937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "event",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 352861319,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3186561275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "event",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 100064326,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3819559140,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 39314454,
  "status": "passed"
});
formatter.after({
  "duration": 1141078309,
  "status": "passed"
});
formatter.before({
  "duration": 5115093539,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;55",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the assigned to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the assigned to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the assigned result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms assigned to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6711263408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assigned",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 85875102,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2709044121,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 34520273,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1151645986,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 97733019,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 170100635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assigned",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 78475308,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 76795638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assigned",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 399039674,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 4347774213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assigned",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 92319475,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2043416969,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 46793996,
  "status": "passed"
});
formatter.after({
  "duration": 1150757279,
  "status": "passed"
});
formatter.before({
  "duration": 5070556997,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;56",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the directly to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the directly to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the directly result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms directly to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6788231884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "directly",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 74239362,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2984831771,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 48380885,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1097714401,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 85481328,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 174816308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "directly",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 68015305,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 56158630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "directly",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 345773689,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3255275072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "directly",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 102075089,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2260349768,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 34921184,
  "status": "passed"
});
formatter.after({
  "duration": 1139429670,
  "status": "passed"
});
formatter.before({
  "duration": 4948701646,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;57",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the vegetable beds to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the vegetable beds to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the vegetable beds result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms vegetable beds to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7927445272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vegetable beds",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 157243542,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2155736711,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 44824193,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1116942635,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 110939513,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 239404938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vegetable beds",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 69352091,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 71968566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vegetable beds",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 362824837,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3420071388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vegetable beds",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 71092890,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2868533635,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5054547536,
  "status": "passed"
});
formatter.after({
  "duration": 1159541335,
  "status": "passed"
});
formatter.before({
  "duration": 4935150716,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;58",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the bee to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the bee to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the bee result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms bee to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8211401958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bee",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 83424330,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2209404538,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 44860188,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1178699440,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 118410988,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 174133021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bee",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 58145809,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 76073253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bee",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 421459684,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3311150395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bee",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 105674603,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1906608429,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 46284479,
  "status": "passed"
});
formatter.after({
  "duration": 1185625091,
  "status": "passed"
});
formatter.before({
  "duration": 5065086666,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;59",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the hives to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the hives to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the hives result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms hives to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6916192446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hives",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 59252039,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 4637595624,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 40159719,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1133624211,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 97011566,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 165331278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hives",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 68344537,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73846208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hives",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 405539591,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2975451002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hives",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 93901089,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2424913045,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 42639660,
  "status": "passed"
});
formatter.after({
  "duration": 1155095624,
  "status": "passed"
});
formatter.before({
  "duration": 4902834525,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;60",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the easterly to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the easterly to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the easterly result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms easterly to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7679305616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "easterly",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 127442045,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2165735602,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 63589765,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1155330524,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 108742259,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 185894745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "easterly",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 89236304,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 64285154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "easterly",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 376224029,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3231848130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "easterly",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 77612976,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2477969886,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 52382863,
  "status": "passed"
});
formatter.after({
  "duration": 1224762363,
  "status": "passed"
});
formatter.before({
  "duration": 4891377829,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;61",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the fence to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the fence to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the fence result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms fence to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7026463568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fence",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 71044483,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2454418202,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 54574843,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1120514222,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 115323163,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 172950146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fence",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 59067409,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 77786435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fence",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 421317255,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3093839649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fence",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 75111003,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2495978009,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 37784350,
  "status": "passed"
});
formatter.after({
  "duration": 1154308386,
  "status": "passed"
});
formatter.before({
  "duration": 5023851747,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;62",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the plan to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the plan to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the plan result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms plan to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7498763598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "plan",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 80862779,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2217421215,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 39429887,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1092665152,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 115792962,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 228448452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "plan",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 68908978,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 71666330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "plan",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 395369721,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 6749924363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "plan",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 82640504,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2187765251,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 47440978,
  "status": "passed"
});
formatter.after({
  "duration": 1217949041,
  "status": "passed"
});
formatter.before({
  "duration": 4973016676,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;63",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the transport to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the transport to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the transport result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms transport to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9864161467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "transport",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 102737586,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3281634999,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 48114956,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1111520401,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 114135013,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 167827354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "transport",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 66203757,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 74672235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "transport",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 390105432,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3359343238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "transport",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 100996165,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2356595815,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 55034402,
  "status": "passed"
});
formatter.after({
  "duration": 1127596576,
  "status": "passed"
});
formatter.before({
  "duration": 4856371621,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;64",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the alongside to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the alongside to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the alongside result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms alongside to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 10012739799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alongside",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 135720307,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2713397362,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 38801833,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1220937568,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 140722391,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 179546567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alongside",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 71787348,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 67172523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alongside",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 326627686,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3254442529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alongside",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 96444952,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2569741055,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 42786123,
  "status": "passed"
});
formatter.after({
  "duration": 1175815795,
  "status": "passed"
});
formatter.before({
  "duration": 5084555384,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;65",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the i suppose to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the i suppose to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the i suppose result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms i suppose to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9304768085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "i suppose",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 100810605,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3678676943,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 53174136,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1233817313,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 108156096,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 177301215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "i suppose",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 90908837,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 76740404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "i suppose",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 15507011761,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3451443638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "i suppose",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 108497429,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2555609858,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5023941735,
  "status": "passed"
});
formatter.after({
  "duration": 1150996832,
  "status": "passed"
});
formatter.before({
  "duration": 5084805798,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;66",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the adventure to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the adventure to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the adventure result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms adventure to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6530190771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adventure",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 111249817,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2085401270,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 58041858,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1107569623,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 115035823,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 183992898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adventure",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 76330183,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 58559754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adventure",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 425398980,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3313137886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adventure",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 77478304,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3717473191,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 28564628,
  "status": "passed"
});
formatter.after({
  "duration": 1168210890,
  "status": "passed"
});
formatter.before({
  "duration": 5088876663,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;67",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the playground to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the playground to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the playground result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms playground to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8008814776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "playground",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 108014598,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2149369914,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 50633685,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1102225585,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 111051533,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 193299194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "playground",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 76179066,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 66883010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "playground",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 372983845,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 7873345503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "playground",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 95928608,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 4077167381,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 52668962,
  "status": "passed"
});
formatter.after({
  "duration": 1187961362,
  "status": "passed"
});
formatter.before({
  "duration": 4963906801,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;68",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the repairing to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the repairing to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the repairing result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms repairing to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6652761681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "repairing",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 117479149,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3156704235,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 50507702,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1238502267,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 131960987,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 171235102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "repairing",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 72593825,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 69588852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "repairing",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 15360792662,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3043227063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "repairing",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 63159375,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2725647501,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5030585942,
  "status": "passed"
});
formatter.after({
  "duration": 1144106555,
  "status": "passed"
});
formatter.before({
  "duration": 4946302073,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;69",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the sand to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the sand to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the sand result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms sand to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6671027975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sand",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 71906194,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2538801989,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 50868584,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1138185354,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 105514487,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 158827638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sand",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 64476300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 71822102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sand",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 318058670,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 4256097685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sand",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 101765717,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2125994793,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 30646762,
  "status": "passed"
});
formatter.after({
  "duration": 1194225137,
  "status": "passed"
});
formatter.before({
  "duration": 4925508052,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;70",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the towards to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the towards to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the towards result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms towards to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9400415247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "towards",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 63855694,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3213731402,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 50276216,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1132030805,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 123504921,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 165533286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "towards",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 75941374,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 60685639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "towards",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 10328278808,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3453432680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "towards",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 122627385,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2253855437,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 38790662,
  "status": "passed"
});
formatter.after({
  "duration": 1180184239,
  "status": "passed"
});
formatter.before({
  "duration": 4956662468,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;71",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the pond to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the pond to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the pond result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms pond to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9797220431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pond",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 57782445,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2000372984,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 51592211,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1123643937,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 86058181,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 152977807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pond",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 54763197,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 62414337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pond",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 326647235,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3080246207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pond",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 77683724,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2100765921,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 46541100,
  "status": "passed"
});
formatter.after({
  "duration": 1176050694,
  "status": "passed"
});
formatter.before({
  "duration": 4911421538,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;72",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the bushes to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the bushes to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the bushes result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms bushes to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8326764840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bushes",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 55330120,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 4310791995,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 38062382,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1177077486,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 97967919,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 173788895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bushes",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 63457576,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 86099762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bushes",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 15275194350,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3339727125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bushes",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 86939752,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2808490634,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5054677243,
  "status": "passed"
});
formatter.after({
  "duration": 1164083549,
  "status": "passed"
});
formatter.before({
  "duration": 4939196135,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;73",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the as i said already to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the as i said already to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the as i said already result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms as i said already to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6392757901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "as i said already",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 116680428,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2063987263,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 46068508,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1130288454,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 100408452,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 175238320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "as i said already",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 63169925,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 55616530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "as i said already",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 432224713,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3281053181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "as i said already",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 88907693,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2355226448,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 41723025,
  "status": "passed"
});
formatter.after({
  "duration": 1122892694,
  "status": "passed"
});
formatter.before({
  "duration": 4950634833,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;74",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the presentation to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the presentation to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the presentation result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms presentation to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6217931353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "presentation",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 114834126,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2090992619,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 59255453,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1103073644,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 92804478,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 160106087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "presentation",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 78097359,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 65450341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "presentation",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 323614334,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 6234803456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "presentation",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 135340497,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 4018212922,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 43029712,
  "status": "passed"
});
formatter.after({
  "duration": 1151665535,
  "status": "passed"
});
formatter.before({
  "duration": 5009638320,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;75",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the concentrating to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the concentrating to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the concentrating result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms concentrating to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7520801935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concentrating",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 86050423,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2335890851,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 50593345,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1130178607,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 106680916,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 173711629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concentrating",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 86405100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73293559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concentrating",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 351406619,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3078330086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concentrating",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 82613508,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2098441441,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 44835364,
  "status": "passed"
});
formatter.after({
  "duration": 1147586913,
  "status": "passed"
});
formatter.before({
  "duration": 4931663841,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;76",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the fair enough to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the fair enough to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the fair enough result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms fair enough to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6432299186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fair enough",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 81292549,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 1591935164,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 49713327,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1086873037,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 100586566,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 168007951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fair enough",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 87504193,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 68933802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fair enough",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 15216871668,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3006980886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fair enough",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 109227262,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2284807537,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 42294293,
  "status": "passed"
});
formatter.after({
  "duration": 1166619035,
  "status": "passed"
});
formatter.before({
  "duration": 4958480843,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;77",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the concluded to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the concluded to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the concluded result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms concluded to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6540530997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concluded",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 81333509,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2960075180,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 37895748,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1090464794,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 133966165,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 178841869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concluded",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 79234619,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 63084901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concluded",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 423627771,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3366276957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concluded",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 88296396,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1998018715,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 51843867,
  "status": "passed"
});
formatter.after({
  "duration": 1188704538,
  "status": "passed"
});
formatter.before({
  "duration": 5033551508,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;78",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the billion to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the billion to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the billion result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms billion to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 14155249225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "billion",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 70779484,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3484606336,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 44754375,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1096282664,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 98403584,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 173611712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "billion",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 68685870,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 53064909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "billion",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 291884616,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3370210978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "billion",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 82452460,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2171346501,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 30104972,
  "status": "passed"
});
formatter.after({
  "duration": 1126735796,
  "status": "passed"
});
formatter.before({
  "duration": 5012521966,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;79",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the landfill to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the landfill to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the landfill result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms landfill to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9600464462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "landfill",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 123612597,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2760374437,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 57750173,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1091882258,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 130502253,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 171342778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "landfill",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 60251525,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 75733160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "landfill",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5383048832,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3417404955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "landfill",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 90911320,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3360564901,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 39084830,
  "status": "passed"
});
formatter.after({
  "duration": 1197062859,
  "status": "passed"
});
formatter.before({
  "duration": 5007212682,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;80",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the tons to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the tons to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the tons result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms tons to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9255012556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tons",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 61323622,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3233757114,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 33759721,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1601945848,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 99738508,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 160132152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tons",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 304901204,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 62382375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tons",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5352943860,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 5221831861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tons",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 67573124,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 4357639985,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5045893187,
  "status": "passed"
});
formatter.after({
  "duration": 1201322697,
  "status": "passed"
});
formatter.before({
  "duration": 5038954502,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;81",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the incredible to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the incredible to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the incredible result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms incredible to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9985246646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "incredible",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 110859455,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2889948884,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 38920059,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1047517934,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 89963344,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 165328175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "incredible",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 77468064,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 61312761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "incredible",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 343262407,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3645505867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "incredible",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 107159714,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2425409220,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 56552093,
  "status": "passed"
});
formatter.after({
  "duration": 1186648781,
  "status": "passed"
});
formatter.before({
  "duration": 4940524232,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;82",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the households to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the households to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the households result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms households to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 11358309619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "households",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 84244460,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 4711080330,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 49127164,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1060137954,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 98265189,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 191695859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "households",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 73355619,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 82014313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "households",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 362192439,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 7041690444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "households",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 93906053,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2606923418,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 45675044,
  "status": "passed"
});
formatter.after({
  "duration": 1183606881,
  "status": "passed"
});
formatter.before({
  "duration": 4952173316,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;83",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the threw to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the threw to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the threw result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms threw to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 11803306402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "threw",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 110778156,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 4752413304,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 49793695,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1138645534,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 130728774,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 170184726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "threw",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 61500184,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 68325608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "threw",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 417830380,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3306849286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "threw",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 69937632,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3179428341,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 47132226,
  "status": "passed"
});
formatter.after({
  "duration": 1195405219,
  "status": "passed"
});
formatter.before({
  "duration": 5158382353,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;84",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the away to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the away to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the away result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms away to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9127622332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "away",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 103293028,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2244637577,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 34677596,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1887992113,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 85221294,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 153792042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "away",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 50257287,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 57483623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "away",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 511140342,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 4500232883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "away",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 87518467,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 4073265942,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 30667552,
  "status": "passed"
});
formatter.after({
  "duration": 1181135318,
  "status": "passed"
});
formatter.before({
  "duration": 4918983621,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;85",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the catering to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the catering to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the catering result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms catering to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6229263927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "catering",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 97245224,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 4163993252,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 47892469,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1619616360,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 5157775400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 10234390132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "catering",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 84403336,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 5069853229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "catering",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 10292955161,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 4102751549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "catering",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 109626001,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 8851980214,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 48745182,
  "status": "passed"
});
formatter.after({
  "duration": 1135378974,
  "status": "passed"
});
formatter.before({
  "duration": 5028821249,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;86",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the investigate to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the investigate to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the investigate result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms investigate to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7227867874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "investigate",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 123958275,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2039305455,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 42298948,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1060679744,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 87512571,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 168466579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "investigate",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 73054005,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 60948776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "investigate",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 300964081,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3085781080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "investigate",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 100874216,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3020066982,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 34734382,
  "status": "passed"
});
formatter.after({
  "duration": 1140920676,
  "status": "passed"
});
formatter.before({
  "duration": 4966687426,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;87",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the unique to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the unique to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the unique result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms unique to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6700926596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unique",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 81968078,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2001606439,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 49836517,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1149401255,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 109022462,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 156934790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unique",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 60575171,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 75323871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unique",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 319584430,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3492869083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unique",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 88039466,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3170988721,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 44485963,
  "status": "passed"
});
formatter.after({
  "duration": 1147784887,
  "status": "passed"
});
formatter.before({
  "duration": 4973622697,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;88",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the respect to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the respect to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the respect result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms respect to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8794286516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "respect",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 60945673,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2223441092,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 49636062,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1087206612,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 101265509,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 206500413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "respect",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 77051327,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73619067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "respect",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 314146060,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3320109462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "respect",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 84667093,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1972254261,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 32654422,
  "status": "passed"
});
formatter.after({
  "duration": 1175742873,
  "status": "passed"
});
formatter.before({
  "duration": 4875238662,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;89",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the dioxide to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the dioxide to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the dioxide result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms dioxide to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8521018836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dioxide",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 83639370,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2105926259,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 39865242,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 5458903011,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 102655666,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 170596498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dioxide",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 62032665,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 58748107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dioxide",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5358333822,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3113699037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dioxide",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 109626312,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3042893799,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5030457477,
  "status": "passed"
});
formatter.after({
  "duration": 1150366607,
  "status": "passed"
});
formatter.before({
  "duration": 5025103820,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;90",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the emissions to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the emissions to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the emissions result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms emissions to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 11904845287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "emissions",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 75377554,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3320867222,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 31879285,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1200708607,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 97372137,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 204388801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "emissions",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 87230816,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 59683051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "emissions",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 431762983,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3884092225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "emissions",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 123517644,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2394038832,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 39675646,
  "status": "passed"
});
formatter.after({
  "duration": 1186538003,
  "status": "passed"
});
formatter.before({
  "duration": 5051877070,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;91",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the factories to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the factories to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the factories result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms factories to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 10323265554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "factories",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 85087243,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3753332731,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 53067081,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1120728331,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 98702406,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 176557729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "factories",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 75045839,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 71167363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "factories",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 355321711,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2764275255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "factories",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 99238610,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2082866405,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 45722520,
  "status": "passed"
});
formatter.after({
  "duration": 1223715710,
  "status": "passed"
});
formatter.before({
  "duration": 5062810283,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;92",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the release to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the release to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the release result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms release to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8482460591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "release",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 68303887,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2159257098,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 37821896,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1087701856,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 120496534,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 200655856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "release",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 63343074,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 69551615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "release",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 443867281,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3867466193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "release",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 64290428,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1770171322,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 31353632,
  "status": "passed"
});
formatter.after({
  "duration": 1110755815,
  "status": "passed"
});
formatter.before({
  "duration": 4979021968,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;93",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the forget to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the forget to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the forget result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms forget to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 12248061150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "forget",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 94807794,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2905978824,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 39464020,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1034158459,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 111635833,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 193765889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "forget",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 63270773,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 74412822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "forget",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 344206969,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3311912500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "forget",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 78428763,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2258617967,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 37766973,
  "status": "passed"
});
formatter.after({
  "duration": 1133691858,
  "status": "passed"
});
formatter.before({
  "duration": 4969408783,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;94",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the causes to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the causes to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the causes result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms causes to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9283688273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "causes",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 79161698,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2697754679,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 46957526,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1161632466,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 106119888,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 196795377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "causes",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 55969034,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 55198863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "causes",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 344563198,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3208363782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "causes",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 86844489,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2137826024,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 39038284,
  "status": "passed"
});
formatter.after({
  "duration": 1181551434,
  "status": "passed"
});
formatter.before({
  "duration": 4888270766,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;95",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the comprehensive to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the comprehensive to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the comprehensive result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms comprehensive to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6824703963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comprehensive",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 103149668,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3423028886,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 51350795,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1052946994,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 89460343,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 176455949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comprehensive",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 78289126,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73979018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comprehensive",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 392470561,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3491517403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comprehensive",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 96830349,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1620403598,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 42837634,
  "status": "passed"
});
formatter.after({
  "duration": 1144670687,
  "status": "passed"
});
formatter.before({
  "duration": 5141080791,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;96",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the industries to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the industries to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the industries result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms industries to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8724826129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "industries",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 91459935,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 5074165510,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 52715818,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1086654583,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 122008020,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 215749612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "industries",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 71641195,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 57540409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "industries",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 325548453,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3261821845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "industries",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 77243405,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1927525951,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 35336370,
  "status": "passed"
});
formatter.after({
  "duration": 1157407072,
  "status": "passed"
});
formatter.before({
  "duration": 4934232219,
  "status": "passed"
});
formatter.scenario({
  "line": 119,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;97",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the documentaries to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the documentaries to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the documentaries result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms documentaries to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6714267451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "documentaries",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 106176053,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2032999789,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 42994958,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1063299010,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 108720227,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 204158867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "documentaries",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 109429890,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 70453977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "documentaries",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 331387423,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3392016898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "documentaries",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 142560626,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2237493162,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 41667791,
  "status": "passed"
});
formatter.after({
  "duration": 1188595312,
  "status": "passed"
});
formatter.before({
  "duration": 5123325257,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;98",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the exactly to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the exactly to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the exactly result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms exactly to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8902373414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "exactly",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 75377554,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3221992598,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 50041007,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1122842735,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 88965099,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 158741685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "exactly",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 60484873,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 51762257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "exactly",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 300787518,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3101505062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "exactly",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 83482977,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1431687580,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 48716944,
  "status": "passed"
});
formatter.after({
  "duration": 1166881551,
  "status": "passed"
});
formatter.before({
  "duration": 5070546447,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;99",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the focusing to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the focusing to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the focusing result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms focusing to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 11420774535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "focusing",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 91877603,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3050433540,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 68803165,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1066282573,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 117809000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 191189754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "focusing",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 58053960,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 67480654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "focusing",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 378125255,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3149328333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "focusing",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 85908305,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1409483541,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 34628259,
  "status": "passed"
});
formatter.after({
  "duration": 1132017152,
  "status": "passed"
});
formatter.before({
  "duration": 4975897839,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;100",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the encouraged to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the encouraged to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the encouraged result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms encouraged to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8516515719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "encouraged",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 93320201,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3871119390,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 68479829,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1106144402,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 95048279,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 189375413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "encouraged",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 78600980,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 78036850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "encouraged",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 308999375,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3095948157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "encouraged",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 78509752,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2094271590,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 50002839,
  "status": "passed"
});
formatter.after({
  "duration": 1176881995,
  "status": "passed"
});
formatter.before({
  "duration": 4975528888,
  "status": "passed"
});
formatter.scenario({
  "line": 123,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;101",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the locally to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the locally to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the locally result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms locally to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8175625889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locally",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 81957838,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2185163051,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 42184756,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1060016937,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 87121590,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 178114829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locally",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 63751743,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 77684035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locally",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5249777745,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3688268408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locally",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 113218689,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2441976916,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 38938677,
  "status": "passed"
});
formatter.after({
  "duration": 1171511271,
  "status": "passed"
});
formatter.before({
  "duration": 4850459420,
  "status": "passed"
});
formatter.scenario({
  "line": 124,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;102",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the overseas to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the overseas to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the overseas result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms overseas to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8919065541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "overseas",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 96587692,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 4199926334,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 30697341,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1454578628,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 5187377373,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 10256895475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "overseas",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 120539977,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 5076950479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "overseas",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 10236293840,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 5038666231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "overseas",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 99361179,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 8827396773,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 69180803,
  "status": "passed"
});
formatter.after({
  "duration": 1109462782,
  "status": "passed"
});
formatter.before({
  "duration": 4867541286,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;103",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the same to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the same to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the same result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms same to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8340389002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "same",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 95528937,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3698727168,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 44140906,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1057666702,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 85467054,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 157954135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "same",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 54149418,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 53027983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "same",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 351444165,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3803482344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "same",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 101933590,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1966715664,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 54952482,
  "status": "passed"
});
formatter.after({
  "duration": 1179667275,
  "status": "passed"
});
formatter.before({
  "duration": 4938465062,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;104",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the reaches to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the reaches to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the reaches result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms reaches to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6875847787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reaches",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 82046895,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 4341465443,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 50023009,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1080591884,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 114453695,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 189138031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reaches",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 64923446,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73760254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reaches",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 359429191,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2905666350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reaches",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 82787278,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1634925467,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 37149781,
  "status": "passed"
});
formatter.after({
  "duration": 1223285320,
  "status": "passed"
});
formatter.before({
  "duration": 4964029991,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;105",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the presentation to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the presentation to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the presentation result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms presentation to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7609862917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "presentation",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 81783448,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3062162060,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 34737175,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1147947486,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 103544374,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 159470896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "presentation",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 76939308,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 78377563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "presentation",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 363921137,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 5479071152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "presentation",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 80891326,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1487713400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 51132963,
  "status": "passed"
});
formatter.after({
  "duration": 1171919941,
  "status": "passed"
});
formatter.before({
  "duration": 5236104867,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;106",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the consequences to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the consequences to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the consequences result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms consequences to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9328787084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consequences",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 91059954,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3140270280,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 57410391,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1067367082,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 129420538,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 187006870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consequences",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 123466444,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 72147920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consequences",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 327777049,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2870963308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consequences",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 100156796,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3501415758,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 44680213,
  "status": "passed"
});
formatter.after({
  "duration": 1162082716,
  "status": "passed"
});
formatter.before({
  "duration": 4921363024,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;107",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the concentrate to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the concentrate to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the concentrate result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms concentrate to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6581441028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concentrate",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 77063119,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2370633921,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 45921114,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1125411423,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 114067368,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 232504731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concentrate",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 94539381,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 92020963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concentrate",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 402976178,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 4856339660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concentrate",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 127914637,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1875006556,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 30070218,
  "status": "passed"
});
formatter.after({
  "duration": 1157354630,
  "status": "passed"
});
formatter.before({
  "duration": 4976637601,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;108",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the farming to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the farming to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the farming result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms farming to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6589515732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "farming",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 81449251,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2603113828,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 67523785,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1168402346,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 104363574,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 193752236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "farming",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 92419702,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 79829470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "farming",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 345111503,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3533455779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "farming",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 84254391,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2239351256,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 51521151,
  "status": "passed"
});
formatter.after({
  "duration": 1183056093,
  "status": "passed"
});
formatter.before({
  "duration": 4947430955,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;109",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the avoid to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the avoid to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the avoid result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms avoid to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9716101962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avoid",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 89238787,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2052605040,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 32335740,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1294003675,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 85691093,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 157054567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avoid",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 55964380,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 55099566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avoid",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 349912510,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3021955796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avoid",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 87155413,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2757214311,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 32511682,
  "status": "passed"
});
formatter.after({
  "duration": 1132175717,
  "status": "passed"
});
formatter.before({
  "duration": 4954167323,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;110",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the fact to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the fact to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the fact result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms fact to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8650224023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fact",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 58682944,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3479428310,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 50490635,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1072335343,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 90374495,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 157246645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fact",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 64722371,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 77647419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fact",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 316617003,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3803118669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fact",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 69235727,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3186523729,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 41993920,
  "status": "passed"
});
formatter.after({
  "duration": 1171227034,
  "status": "passed"
});
formatter.before({
  "duration": 5001459355,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;111",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the afford to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the afford to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the afford result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms afford to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8335010211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "afford",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 79489688,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3008300293,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 47015552,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1048646816,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 105321168,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 177789010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "afford",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 60707050,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 56703521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "afford",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 312107370,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3527675145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "afford",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 88305396,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2066720101,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 55241995,
  "status": "passed"
});
formatter.after({
  "duration": 1151034069,
  "status": "passed"
});
formatter.before({
  "duration": 5015112065,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;112",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the repeat to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the repeat to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the repeat result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms repeat to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6611828997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "repeat",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 102476932,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2093183048,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 35439701,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1151667397,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 107966812,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 182590328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "repeat",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 57594711,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 58852680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "repeat",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 369280689,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3041439408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "repeat",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 62903995,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2219517932,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 37136127,
  "status": "passed"
});
formatter.after({
  "duration": 1141414677,
  "status": "passed"
});
formatter.before({
  "duration": 4949031808,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;113",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the concerns to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the concerns to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the concerns result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms concerns to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6730017498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concerns",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 95958086,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2107264285,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 64505469,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1174867198,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 94639610,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 183838987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concerns",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 65199616,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 60267971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concerns",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 354799781,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3344281132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "concerns",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 107066932,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1963297367,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 47509245,
  "status": "passed"
});
formatter.after({
  "duration": 1154023218,
  "status": "passed"
});
formatter.before({
  "duration": 4967711116,
  "status": "passed"
});
formatter.scenario({
  "line": 136,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;114",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the recession to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the recession to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the recession result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms recession to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9909864127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "recession",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 122433756,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2024866748,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 52271774,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1111982132,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 86570492,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 189454851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "recession",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 75362969,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 82559515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "recession",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 391926289,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3337811315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "recession",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 81064166,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2011333815,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 26360237,
  "status": "passed"
});
formatter.after({
  "duration": 1155620037,
  "status": "passed"
});
formatter.before({
  "duration": 5019724408,
  "status": "passed"
});
formatter.scenario({
  "line": 137,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;115",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the encouraging to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the encouraging to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the encouraging result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms encouraging to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7069634466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "encouraging",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 116143604,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2055949795,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 51806941,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1085836004,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 113377254,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 180945412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "encouraging",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 98827148,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 60258973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "encouraging",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 377094118,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3729651961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "encouraging",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 104510657,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2299320095,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 32800264,
  "status": "passed"
});
formatter.after({
  "duration": 1174806378,
  "status": "passed"
});
formatter.before({
  "duration": 4849259167,
  "status": "passed"
});
formatter.scenario({
  "line": 138,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;116",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the apparently to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the apparently to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the apparently result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms apparently to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7640946275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apparently",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 72844860,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2286832263,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 59936878,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1088654486,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 90012682,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 185744247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apparently",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 80994347,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 57601538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apparently",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 370282037,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2970399580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apparently",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 93404914,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2009844671,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 54453825,
  "status": "passed"
});
formatter.after({
  "duration": 1188334347,
  "status": "passed"
});
formatter.before({
  "duration": 5014703396,
  "status": "passed"
});
formatter.scenario({
  "line": 139,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;117",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the supermarkets to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the supermarkets to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the supermarkets result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms supermarkets to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6199099067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "supermarkets",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 91798475,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2161174769,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 29681098,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1075939822,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 88950825,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 160300336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "supermarkets",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 67686385,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 54071531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "supermarkets",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5358816654,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3105428844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "supermarkets",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 129244595,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2389513684,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 44968484,
  "status": "passed"
});
formatter.after({
  "duration": 1140770489,
  "status": "passed"
});
formatter.before({
  "duration": 4939244232,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;118",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the attention to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the attention to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the attention result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms attention to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6821028114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "attention",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 93722043,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2650532154,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 50599241,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1175160125,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 96074451,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 193923523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "attention",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 91262272,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 72012938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "attention",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 366143527,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2939103665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "attention",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 96790319,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2528700696,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 41477266,
  "status": "passed"
});
formatter.after({
  "duration": 1188354826,
  "status": "passed"
});
formatter.before({
  "duration": 4932244729,
  "status": "passed"
});
formatter.scenario({
  "line": 141,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;119",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the statistics to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the statistics to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the statistics result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms statistics to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9010036128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "statistics",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 86070283,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2448528341,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 47897744,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1077545950,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 104407326,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 164312864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "statistics",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 64325493,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 52854213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "statistics",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 335867578,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2928610460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "statistics",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 109456575,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2225238367,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 34804511,
  "status": "passed"
});
formatter.after({
  "duration": 1141666953,
  "status": "passed"
});
formatter.before({
  "duration": 5036171085,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;120",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the everybody to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the everybody to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the everybody result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms everybody to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7815273235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "everybody",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 79147734,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2130909991,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 41974681,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1096031939,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 99605698,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 159907803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "everybody",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 83262041,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 57481141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "everybody",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 359209187,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3372251841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "everybody",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 94754421,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2304082625,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 33283095,
  "status": "passed"
});
formatter.after({
  "duration": 1145115972,
  "status": "passed"
});
formatter.before({
  "duration": 4950369524,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;121",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the suspect to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the suspect to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the suspect result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms suspect to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9535518053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suspect",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 102570023,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3720578392,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 45916770,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1071234388,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 111409312,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 187337964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suspect",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 67881876,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 63824664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suspect",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 343750203,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3213939926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suspect",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 72797074,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2622218871,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 32354048,
  "status": "passed"
});
formatter.after({
  "duration": 1129899025,
  "status": "passed"
});
formatter.before({
  "duration": 5134427275,
  "status": "passed"
});
formatter.scenario({
  "line": 144,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;122",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the waste to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the waste to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the waste result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms waste to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 10291026628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "waste",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 78953795,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2503254613,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 33253927,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1097115827,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 102179971,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 186838065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "waste",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 74514601,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 66492338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "waste",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 443245124,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2862537341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "waste",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 67063296,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2357307029,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 53153656,
  "status": "passed"
});
formatter.after({
  "duration": 1150607402,
  "status": "passed"
});
formatter.before({
  "duration": 4977913256,
  "status": "passed"
});
formatter.scenario({
  "line": 145,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;123",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the personalised to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the personalised to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the personalised result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms personalised to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8930429766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "personalised",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 107963708,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2406561108,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 33453762,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1139425635,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 102969693,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 157527779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "personalised",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 84383165,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 53818635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "personalised",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 333806855,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3122052703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "personalised",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 101709242,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2007010675,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 59567928,
  "status": "passed"
});
formatter.after({
  "duration": 1180897936,
  "status": "passed"
});
formatter.before({
  "duration": 5115504690,
  "status": "passed"
});
formatter.scenario({
  "line": 146,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;124",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the researchers to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the researchers to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the researchers result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms researchers to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9947429404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "researchers",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 97640549,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2768563642,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 35336370,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1063115311,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 86869624,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 161804685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "researchers",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 67308435,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 64061115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "researchers",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5291750565,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2862789307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "researchers",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 77477994,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1558776811,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 34519653,
  "status": "passed"
});
formatter.after({
  "duration": 1123670623,
  "status": "passed"
});
formatter.before({
  "duration": 4893794158,
  "status": "passed"
});
formatter.scenario({
  "line": 147,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;125",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the invented to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the invented to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the invented result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms invented to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6168421896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invented",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 112804744,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2269383307,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 44996101,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1230895811,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 100438552,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 179503435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invented",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 66812571,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 61574036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invented",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 370258455,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2842062621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invented",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 118217980,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1378239757,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 49269904,
  "status": "passed"
});
formatter.after({
  "duration": 1163358682,
  "status": "passed"
});
formatter.before({
  "duration": 4870694586,
  "status": "passed"
});
formatter.scenario({
  "line": 148,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;126",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the tiny to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the tiny to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the tiny result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms tiny to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8790540539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tiny",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 78330707,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2990822479,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 54635662,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1102597329,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 117091580,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 171173662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tiny",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 52572458,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 65184411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tiny",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 366126771,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2950122213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tiny",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 77884491,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1480402040,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 34699008,
  "status": "passed"
});
formatter.after({
  "duration": 1159877393,
  "status": "passed"
});
formatter.before({
  "duration": 4955521484,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;127",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the manufacture to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the manufacture to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the manufacture result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms manufacture to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9332429421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacture",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 105245765,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2145127452,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 51944405,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1185797620,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 93158223,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 166021701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacture",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 90976172,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 66751442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacture",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 364481544,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3755372663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacture",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 109921720,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3808606997,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 41903312,
  "status": "passed"
});
formatter.after({
  "duration": 1156620453,
  "status": "passed"
});
formatter.before({
  "duration": 4987698040,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;128",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the massachusetts to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the massachusetts to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the massachusetts result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms massachusetts to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7320786234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "massachusetts",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 84973051,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2061352170,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 35230867,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1162787725,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 107757046,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 187393508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "massachusetts",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 83042657,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 58201043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "massachusetts",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5293200300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3155374276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "massachusetts",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 119072554,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2701550615,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5016833005,
  "status": "passed"
});
formatter.after({
  "duration": 1134876284,
  "status": "passed"
});
formatter.before({
  "duration": 5149559819,
  "status": "passed"
});
formatter.scenario({
  "line": 151,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;129",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the detect to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the detect to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the detect result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms detect to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9193899941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "detect",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 74356037,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3629958137,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 37921815,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1060696500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 113641942,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 201318663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "detect",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 67880323,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 72180502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "detect",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 399183345,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3086701749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "detect",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 85694196,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1868030945,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 37092064,
  "status": "passed"
});
formatter.after({
  "duration": 1148417905,
  "status": "passed"
});
formatter.before({
  "duration": 4930067333,
  "status": "passed"
});
formatter.scenario({
  "line": 152,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;130",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the ethylene to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the ethylene to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the ethylene result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms ethylene to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6509535765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ethylene",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 73333277,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2205198381,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 53652002,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1144545014,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 125861362,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 178174097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ethylene",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 86553735,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 69762001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ethylene",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 285685073,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2714294447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ethylene",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 130472774,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2796665608,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5051138858,
  "status": "passed"
});
formatter.after({
  "duration": 1162728767,
  "status": "passed"
});
formatter.before({
  "duration": 4887402537,
  "status": "passed"
});
formatter.scenario({
  "line": 153,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;131",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the cardboard to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the cardboard to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the cardboard result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms cardboard to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6083599961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cardboard",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 92584783,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2168503815,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 44721483,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1158282746,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 162572995,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 214088871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cardboard",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 90824124,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 70792517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cardboard",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5399555398,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3438273760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cardboard",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 117594270,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1562893600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 37052655,
  "status": "passed"
});
formatter.after({
  "duration": 1156691203,
  "status": "passed"
});
formatter.before({
  "duration": 4960169202,
  "status": "passed"
});
formatter.scenario({
  "line": 154,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;132",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the quicker to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the quicker to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the quicker result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms quicker to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 15536407071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quicker",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 75236056,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3699786232,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 55206620,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1117827929,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 91113016,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 188489809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quicker",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 79327400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 94520143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quicker",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 388786334,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3268541766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quicker",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 102839986,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1814423626,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 61823210,
  "status": "passed"
});
formatter.after({
  "duration": 1166069179,
  "status": "passed"
});
formatter.before({
  "duration": 5081563443,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;133",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the ripeness to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the ripeness to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the ripeness result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms ripeness to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7567543179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ripeness",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 83185396,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2182153422,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 53665966,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1092850092,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 95080240,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 191910588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ripeness",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 77084219,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73866688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ripeness",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 10292765255,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2803913044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ripeness",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 98445475,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1597782203,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 39765945,
  "status": "passed"
});
formatter.after({
  "duration": 1160351536,
  "status": "passed"
});
formatter.before({
  "duration": 5003614099,
  "status": "passed"
});
formatter.scenario({
  "line": 156,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;134",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the eventually to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the eventually to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the eventually result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms eventually to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7697354388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eventually",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 75780327,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2390174939,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 48098199,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1203670760,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 121676307,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 170223824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eventually",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 81166255,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 76518227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eventually",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 339127310,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2733106564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eventually",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 105864819,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3147813435,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 34538581,
  "status": "passed"
});
formatter.after({
  "duration": 1158099667,
  "status": "passed"
});
formatter.before({
  "duration": 4933657848,
  "status": "passed"
});
formatter.scenario({
  "line": 157,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;135",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the unwanted to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the unwanted to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the unwanted result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms unwanted to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6058871608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unwanted",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 66432760,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2308540126,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 61929644,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1243893160,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 121375622,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 184209179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unwanted",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 77023401,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 91472658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unwanted",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 362917307,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 7236529050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unwanted",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 76896486,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2992767458,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 40646274,
  "status": "passed"
});
formatter.after({
  "duration": 1154666786,
  "status": "passed"
});
formatter.before({
  "duration": 4949137001,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;136",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the neighbourhood to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the neighbourhood to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the neighbourhood result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms neighbourhood to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6543567311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neighbourhood",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 82507384,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2138417461,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 54826499,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1255012867,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 125807990,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 181593325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neighbourhood",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 75368555,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 57738692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neighbourhood",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 420575010,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3366059434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neighbourhood",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 135246476,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3022885463,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5030822082,
  "status": "passed"
});
formatter.after({
  "duration": 1269214812,
  "status": "passed"
});
formatter.before({
  "duration": 4959030391,
  "status": "passed"
});
formatter.scenario({
  "line": 159,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;137",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the compulsory to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the compulsory to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the compulsory result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms compulsory to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6705537077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compulsory",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 98063182,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2219575338,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 49778180,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1281115862,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 117549897,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 179976957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compulsory",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 83356374,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 77305465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compulsory",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 355410768,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3383997118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compulsory",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 116919983,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2360457535,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 57229485,
  "status": "passed"
});
formatter.after({
  "duration": 1144483263,
  "status": "passed"
});
formatter.before({
  "duration": 5139358300,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;138",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the organic to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the organic to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the organic result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms organic to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7149284270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "organic",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 78514406,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2549403800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 54408211,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1177413234,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 105002798,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 195360226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "organic",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 85499946,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 74747018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "organic",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 381120299,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3009637390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "organic",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 96448986,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1796771422,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 33114601,
  "status": "passed"
});
formatter.after({
  "duration": 1175036314,
  "status": "passed"
});
formatter.before({
  "duration": 4914689649,
  "status": "passed"
});
formatter.scenario({
  "line": 161,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;139",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the inorganic to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the inorganic to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the inorganic result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms inorganic to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7460964974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inorganic",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 72138921,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2611401710,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 40297804,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1178051527,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 102048092,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 190573803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inorganic",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 71918606,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 65500921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inorganic",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5301331479,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2938896382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inorganic",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 106728392,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1583248543,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 50688919,
  "status": "passed"
});
formatter.after({
  "duration": 1156640623,
  "status": "passed"
});
formatter.before({
  "duration": 4927829427,
  "status": "passed"
});
formatter.scenario({
  "line": 162,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;140",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the themselves to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the themselves to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the themselves result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms themselves to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8069398326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "themselves",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 96390339,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2240352914,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 42316014,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1167789187,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 91632463,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 168279776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "themselves",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 72205947,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 60389610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "themselves",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5338741293,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2870374043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "themselves",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 82601096,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2275784857,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5072879304,
  "status": "passed"
});
formatter.after({
  "duration": 1187753770,
  "status": "passed"
});
formatter.before({
  "duration": 4895711830,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;141",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the craft to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the craft to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the craft result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms craft to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 11739063450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "craft",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 77900317,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3544223912,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 58821029,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1149030443,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 103119569,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 181125698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "craft",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 65974442,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 67425730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "craft",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 336020557,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 4350202643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "craft",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 118045761,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2003725187,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 45948111,
  "status": "passed"
});
formatter.after({
  "duration": 1145834012,
  "status": "passed"
});
formatter.before({
  "duration": 4810655307,
  "status": "passed"
});
formatter.scenario({
  "line": 164,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;142",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the practised to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the practised to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the practised result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms practised to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6977860504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "practised",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 100976926,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2240293956,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 43706482,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1145014192,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 125844606,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 198012385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "practised",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 68358190,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 55676418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "practised",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 349442091,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3113815091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "practised",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 127420945,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1931589368,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5043858220,
  "status": "passed"
});
formatter.after({
  "duration": 1180532089,
  "status": "passed"
});
formatter.before({
  "duration": 4948137826,
  "status": "passed"
});
formatter.scenario({
  "line": 165,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;143",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the kite to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the kite to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the kite result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms kite to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6258055077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kite",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 88426414,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2147949348,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 56423628,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1193725860,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 116257796,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 211599622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kite",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 67905148,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 79015855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kite",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5377322191,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3484489042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kite",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 79024234,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2032596084,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 52648482,
  "status": "passed"
});
formatter.after({
  "duration": 1161699492,
  "status": "passed"
});
formatter.before({
  "duration": 4969104065,
  "status": "passed"
});
formatter.scenario({
  "line": 166,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;144",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the appearance to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the appearance to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the appearance result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms appearance to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6974853979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appearance",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 87027567,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2002723840,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 41951719,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1182610498,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 94880715,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 164856514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appearance",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 83416572,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 64948271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appearance",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 395741774,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3079550197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appearance",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 85085692,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1207433183,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 45255204,
  "status": "passed"
});
formatter.after({
  "duration": 1156573598,
  "status": "passed"
});
formatter.before({
  "duration": 4901261599,
  "status": "passed"
});
formatter.scenario({
  "line": 167,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;145",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the artistic to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the artistic to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the artistic result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms artistic to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7934646163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "artistic",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 108046249,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2254142467,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 40452645,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1166520049,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 131117274,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 218942010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "artistic",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 78954415,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 77657659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "artistic",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 359722428,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2554502387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "artistic",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 95071861,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2000121639,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 56079502,
  "status": "passed"
});
formatter.after({
  "duration": 1186821309,
  "status": "passed"
});
formatter.before({
  "duration": 4936675235,
  "status": "passed"
});
formatter.scenario({
  "line": 168,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;146",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the involved to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the involved to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the involved result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms involved to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8396662133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "involved",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 68208624,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2599025897,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 60850721,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1241727556,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 96588932,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 182692729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "involved",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 85658201,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 66955310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "involved",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 348376200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2770240208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "involved",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 99756195,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1784655953,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 44188693,
  "status": "passed"
});
formatter.after({
  "duration": 1179633762,
  "status": "passed"
});
formatter.before({
  "duration": 4919081677,
  "status": "passed"
});
formatter.scenario({
  "line": 169,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;147",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the rituals to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the rituals to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the rituals result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms rituals to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7803847260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rituals",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 91920425,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2197932638,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 59545586,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1231206424,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 144523603,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 234134753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rituals",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 68045716,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73914785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rituals",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 323268657,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3684512190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rituals",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 95596273,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2483624848,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 44143389,
  "status": "passed"
});
formatter.after({
  "duration": 1199463672,
  "status": "passed"
});
formatter.before({
  "duration": 4895753721,
  "status": "passed"
});
formatter.scenario({
  "line": 170,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;148",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the priests to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the priests to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the priests result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms priests to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6356111432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priests",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 65303258,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2270639103,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 56755032,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1246778668,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 108141511,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 161605160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priests",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 61978672,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 58489004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priests",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5354921730,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3030665690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priests",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 93466043,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2014694086,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 41336388,
  "status": "passed"
});
formatter.after({
  "duration": 1176851586,
  "status": "passed"
});
formatter.before({
  "duration": 4987223276,
  "status": "passed"
});
formatter.scenario({
  "line": 171,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;149",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the sacred to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the sacred to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the sacred result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms sacred to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6362165132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sacred",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 116661811,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2473406881,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 41138725,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1257083828,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 113694072,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 170341740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sacred",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 66330050,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 60996563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sacred",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 357007277,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2966184425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sacred",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 107610273,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1700505204,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 39555870,
  "status": "passed"
});
formatter.after({
  "duration": 1151673293,
  "status": "passed"
});
formatter.before({
  "duration": 5040300286,
  "status": "passed"
});
formatter.scenario({
  "line": 172,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;150",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the strictly to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the strictly to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the strictly result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms strictly to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6471753898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "strictly",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 63652135,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2530827203,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 48065307,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1153989705,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 118113097,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 179792016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "strictly",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 78860394,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 66375664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "strictly",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 367912253,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3079552990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "strictly",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 119147958,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1744788850,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 33929456,
  "status": "passed"
});
formatter.after({
  "duration": 1171488620,
  "status": "passed"
});
formatter.before({
  "duration": 4974867012,
  "status": "passed"
});
formatter.scenario({
  "line": 173,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;151",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the forbidden to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the forbidden to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the forbidden result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms forbidden to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7117615062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "forbidden",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 101594740,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 5010472725,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 65194031,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1187970671,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 94346063,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 184611021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "forbidden",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 89886079,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 63947234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "forbidden",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 396936751,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2661908481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "forbidden",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 96581796,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1554827585,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 39362551,
  "status": "passed"
});
formatter.after({
  "duration": 1150872091,
  "status": "passed"
});
formatter.before({
  "duration": 5093924982,
  "status": "passed"
});
formatter.scenario({
  "line": 174,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;152",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the perhaps to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the perhaps to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the perhaps result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms perhaps to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6824629490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "perhaps",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 83618890,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2263665665,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 60877097,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1324300414,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 119056108,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 178334524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "perhaps",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 78948210,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73693539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "perhaps",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 400302918,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3118190673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "perhaps",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 127702700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1707845421,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 58297237,
  "status": "passed"
});
formatter.after({
  "duration": 1163602270,
  "status": "passed"
});
formatter.before({
  "duration": 5027709743,
  "status": "passed"
});
formatter.scenario({
  "line": 175,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;153",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the imagine to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the imagine to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the imagine result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms imagine to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6162806963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imagine",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 78879633,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3714402743,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 47789138,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1184111744,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 94885680,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 171165284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imagine",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 85196470,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 78622391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imagine",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 338600726,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3147921420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imagine",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 109573560,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1686845978,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 42106870,
  "status": "passed"
});
formatter.after({
  "duration": 1165649028,
  "status": "passed"
});
formatter.before({
  "duration": 5049147334,
  "status": "passed"
});
formatter.scenario({
  "line": 176,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;154",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the suitable to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the suitable to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the suitable result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms suitable to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7242941462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suitable",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 96257530,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2287615468,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 37854788,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1133348352,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 93286067,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 169998235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suitable",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 76739783,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 72575208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suitable",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 324027347,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3240413423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suitable",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 116643192,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1379470419,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 31710169,
  "status": "passed"
});
formatter.after({
  "duration": 1126610433,
  "status": "passed"
});
formatter.before({
  "duration": 5222944608,
  "status": "passed"
});
formatter.scenario({
  "line": 177,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;155",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the materials to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the materials to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the materials result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms materials to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8044891529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 101735307,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2512024395,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 41748780,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1221415745,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 137797166,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 175873820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 85858967,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 76148967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 346052962,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 11730300805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 83203704,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2428864443,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 36004452,
  "status": "passed"
});
formatter.after({
  "duration": 1138283410,
  "status": "passed"
});
formatter.before({
  "duration": 5043041193,
  "status": "passed"
});
formatter.scenario({
  "line": 178,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;156",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the wings to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the wings to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the wings result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms wings to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7001574166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wings",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 102403700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2172333574,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 50099964,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1255870234,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 150723145,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 173048822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wings",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 59979390,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 79279613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wings",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 391037582,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3486310830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wings",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 82057445,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1901798113,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 38655371,
  "status": "passed"
});
formatter.after({
  "duration": 1153014112,
  "status": "passed"
});
formatter.before({
  "duration": 4999385290,
  "status": "passed"
});
formatter.scenario({
  "line": 179,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;157",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the noisy to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the noisy to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the noisy result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms noisy to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6645873266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "noisy",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 85764945,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 1890869553,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 59428292,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1646908436,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 268244806,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 148524339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "noisy",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 54586324,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 125837779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "noisy",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 308559056,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3832890065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "noisy",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 57355468,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1539372945,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 38765838,
  "status": "passed"
});
formatter.after({
  "duration": 1141420263,
  "status": "passed"
});
formatter.before({
  "duration": 4938206269,
  "status": "passed"
});
formatter.scenario({
  "line": 180,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;158",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the indeed to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the indeed to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the indeed result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms indeed to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6206417562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "indeed",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 61092757,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2813512577,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 43766060,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1099993887,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 108687024,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 177313316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "indeed",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 68740173,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 63158133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "indeed",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 422801123,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3158707241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "indeed",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 89623252,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1707001397,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 35943012,
  "status": "passed"
});
formatter.after({
  "duration": 1168067529,
  "status": "passed"
});
formatter.before({
  "duration": 4922056241,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;159",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the capture to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the capture to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the capture result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms capture to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 5853808209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "capture",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 90817608,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2491707619,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 35323337,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1302372235,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 136246892,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 193048159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "capture",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 73800594,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 67938660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "capture",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 377902768,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2944789967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "capture",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 110534879,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1204881251,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 37048932,
  "status": "passed"
});
formatter.after({
  "duration": 1173162084,
  "status": "passed"
});
formatter.before({
  "duration": 4938682894,
  "status": "passed"
});
formatter.scenario({
  "line": 182,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;160",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the cultures to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the cultures to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the cultures result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms cultures to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 5629532711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cultures",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 90629875,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3079051540,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 35035066,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1162934498,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 103151220,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 187460533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cultures",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 67587087,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73014907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cultures",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 318599218,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 4091854951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cultures",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 92323819,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2877494254,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 28766325,
  "status": "passed"
});
formatter.after({
  "duration": 1157561913,
  "status": "passed"
});
formatter.before({
  "duration": 5015298246,
  "status": "passed"
});
formatter.scenario({
  "line": 183,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;161",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the shapes to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the shapes to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the shapes result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms shapes to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8903737196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shapes",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 57111880,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3611375334,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 41184029,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1211326555,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 109720333,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 170832949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shapes",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 67822918,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 75852937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shapes",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 15402451456,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3442860968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shapes",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 104991006,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2702531172,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5035285480,
  "status": "passed"
});
formatter.after({
  "duration": 1164470497,
  "status": "passed"
});
formatter.before({
  "duration": 4896612950,
  "status": "passed"
});
formatter.scenario({
  "line": 184,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;162",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the diamond to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the diamond to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the diamond result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms diamond to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6234572280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diamond",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 62613241,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3158810571,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 60559346,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1244198809,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 97732088,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 160656874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diamond",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 79805577,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 55771682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diamond",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 394079792,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3240280613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diamond",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 86999951,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2641681693,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 53932826,
  "status": "passed"
});
formatter.after({
  "duration": 1185405707,
  "status": "passed"
});
formatter.before({
  "duration": 4901362137,
  "status": "passed"
});
formatter.scenario({
  "line": 185,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;163",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the covered to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the covered to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the covered result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms covered to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6978060030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "covered",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 86463748,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2505189041,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 33751963,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1117725529,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 102718967,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 177570557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "covered",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 58112607,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 55493650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "covered",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 385667478,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3368360952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "covered",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 70422326,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 4455936514,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 42833910,
  "status": "passed"
});
formatter.after({
  "duration": 1168932034,
  "status": "passed"
});
formatter.before({
  "duration": 5004124237,
  "status": "passed"
});
formatter.scenario({
  "line": 186,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;164",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the combined to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the combined to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the combined result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms combined to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9533076899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "combined",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 90233928,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3575771483,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 35062993,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1185267312,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 116815411,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 180545432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "combined",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 79357499,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 60645920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "combined",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 15281716298,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3397937168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "combined",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 82611956,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 3135690519,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5047084440,
  "status": "passed"
});
formatter.after({
  "duration": 1169606011,
  "status": "passed"
});
formatter.before({
  "duration": 4980271559,
  "status": "passed"
});
formatter.scenario({
  "line": 187,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;165",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the species to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the species to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the species result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms species to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6447320952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "species",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 93609404,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2153389890,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 57599366,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1203859735,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 111902383,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 215653730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "species",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 77051327,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 71651436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "species",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 358978011,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3507276139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "species",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 108791596,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2432817703,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 36913640,
  "status": "passed"
});
formatter.after({
  "duration": 1145222095,
  "status": "passed"
});
formatter.before({
  "duration": 4889687919,
  "status": "passed"
});
formatter.scenario({
  "line": 188,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;166",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the museum to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the museum to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the museum result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms museum to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6308153490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "museum",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 90212827,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2077059395,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 59591511,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1123978133,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 100726202,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 218943561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "museum",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 72221462,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 66449517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "museum",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 5370526556,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3274844018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "museum",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 100331807,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1741882241,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 31841738,
  "status": "passed"
});
formatter.after({
  "duration": 1139722595,
  "status": "passed"
});
formatter.before({
  "duration": 4978178875,
  "status": "passed"
});
formatter.scenario({
  "line": 189,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;167",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the surviving to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the surviving to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the surviving result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms surviving to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6687370391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surviving",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 95760734,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2041302255,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 52662446,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1125767961,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 133259915,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 192500473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surviving",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 92270756,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 79924113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surviving",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 375245333,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3288856990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surviving",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 117371473,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2659668404,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 49141438,
  "status": "passed"
});
formatter.after({
  "duration": 1169970307,
  "status": "passed"
});
formatter.before({
  "duration": 5146405900,
  "status": "passed"
});
formatter.scenario({
  "line": 190,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;168",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the wooden to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the wooden to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the wooden result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms wooden to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7452180297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wooden",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 79102120,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2262910077,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 53095629,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1123789779,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 97896239,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 192028814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wooden",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 70888711,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 61577760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wooden",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 357506244,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3055879978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wooden",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 101923661,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1592950165,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 41377968,
  "status": "passed"
});
formatter.after({
  "duration": 1151461046,
  "status": "passed"
});
formatter.before({
  "duration": 5039324383,
  "status": "passed"
});
formatter.scenario({
  "line": 191,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;169",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the mask to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the mask to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the mask result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms mask to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8741938097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mask",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 85467985,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2387656521,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 63546322,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1131703747,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 138679047,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 189483709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mask",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 60274488,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 60756388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mask",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 368760622,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3130868411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mask",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 85136271,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2511724022,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 57866226,
  "status": "passed"
});
formatter.after({
  "duration": 1201684511,
  "status": "passed"
});
formatter.before({
  "duration": 4923549730,
  "status": "passed"
});
formatter.scenario({
  "line": 192,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;170",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the impressive to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the impressive to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the impressive result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms impressive to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7297562229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impressive",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 96267459,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2143945508,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 33856845,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1166415787,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 95313898,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 186289761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impressive",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 71125472,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 57171148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impressive",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 298423319,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3271886521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impressive",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 100435138,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2020465100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 40807942,
  "status": "passed"
});
formatter.after({
  "duration": 1169691966,
  "status": "passed"
});
formatter.before({
  "duration": 4894983239,
  "status": "passed"
});
formatter.scenario({
  "line": 193,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;171",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the craftsmanship to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the craftsmanship to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the craftsmanship result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms craftsmanship to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6588181429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "craftsmanship",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 109210195,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2037517489,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 37923365,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1169491509,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 90739412,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 164304486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "craftsmanship",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 75051735,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 66046433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "craftsmanship",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 329774469,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3245203259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "craftsmanship",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 98650896,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2091616328,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 41359661,
  "status": "passed"
});
formatter.after({
  "duration": 1161042891,
  "status": "passed"
});
formatter.before({
  "duration": 4863784759,
  "status": "passed"
});
formatter.scenario({
  "line": 194,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;172",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the symbolism to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the symbolism to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the symbolism result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms symbolism to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 12088081046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "symbolism",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 86238777,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2992842552,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 40797702,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1319360701,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 158330223,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 196568546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "symbolism",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 86504087,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 57056646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "symbolism",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 289765557,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3284698309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "symbolism",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 102324883,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2530579271,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 46838059,
  "status": "passed"
});
formatter.after({
  "duration": 1154870345,
  "status": "passed"
});
formatter.before({
  "duration": 4992297350,
  "status": "passed"
});
formatter.scenario({
  "line": 195,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;173",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the harvest to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the harvest to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the harvest result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms harvest to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 11058653154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harvest",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 128835305,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3742070286,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 45095398,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1206343089,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 130607756,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 168963064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harvest",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 66274506,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 61988911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harvest",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 389429592,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3482379602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harvest",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 97335832,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1751473706,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 32926868,
  "status": "passed"
});
formatter.after({
  "duration": 1131746257,
  "status": "passed"
});
formatter.before({
  "duration": 5002566826,
  "status": "passed"
});
formatter.scenario({
  "line": 196,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;174",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the fortune to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the fortune to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the fortune result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms fortune to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8992290523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fortune",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 96518805,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3677325884,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 37360787,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1208470216,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 101406696,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 220248696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fortune",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 65477338,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 57394255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fortune",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 417911679,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3313490390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fortune",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 107165609,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2275885395,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 45052266,
  "status": "passed"
});
formatter.after({
  "duration": 1154070383,
  "status": "passed"
});
formatter.before({
  "duration": 5092463455,
  "status": "passed"
});
formatter.scenario({
  "line": 197,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;175",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the communicating to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the communicating to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the communicating result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms communicating to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6446910111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "communicating",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 115542548,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2079897736,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 47912328,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1203538571,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 129059965,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 170064640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "communicating",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 77441688,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 65239335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "communicating",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 405649437,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3190212300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "communicating",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 136511580,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1687229513,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 59143744,
  "status": "passed"
});
formatter.after({
  "duration": 1159771890,
  "status": "passed"
});
formatter.before({
  "duration": 4907542130,
  "status": "passed"
});
formatter.scenario({
  "line": 198,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;176",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the expedition to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the expedition to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the expedition result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms expedition to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7293912135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "expedition",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 96134650,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2089680347,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 36569204,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1272681828,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 135512095,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 170036402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "expedition",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 76188686,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 75831837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "expedition",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 399704964,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3381258384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "expedition",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 104206560,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2525660659,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 42893799,
  "status": "passed"
});
formatter.after({
  "duration": 1148079054,
  "status": "passed"
});
formatter.before({
  "duration": 4902173579,
  "status": "passed"
});
formatter.scenario({
  "line": 199,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;177",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the treasured to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the treasured to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the treasured result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms treasured to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9692458117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "treasured",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 67787233,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 4166359622,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 45570782,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1232792382,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 109457506,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 165629479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "treasured",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 62854346,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 54246232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "treasured",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 301379266,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3364206926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "treasured",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 87204750,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2347534038,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 48027761,
  "status": "passed"
});
formatter.after({
  "duration": 1158421141,
  "status": "passed"
});
formatter.before({
  "duration": 4976734726,
  "status": "passed"
});
formatter.scenario({
  "line": 200,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;178",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the generation to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the generation to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the generation result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms generation to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 12494653325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generation",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 98050460,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2292892170,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 55161626,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1213336697,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 116112885,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 163116026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generation",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 77960516,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 54154693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generation",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 392903743,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3277387882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generation",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 108669647,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2444172309,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 39728398,
  "status": "passed"
});
formatter.after({
  "duration": 1162265795,
  "status": "passed"
});
formatter.before({
  "duration": 5096741292,
  "status": "passed"
});
formatter.scenario({
  "line": 201,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;179",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the neighbouring to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the neighbouring to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the neighbouring result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms neighbouring to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 10140629921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neighbouring",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 142980466,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3603625208,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 44793473,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1289954221,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 142546352,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 196039480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neighbouring",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 101223618,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 61500494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neighbouring",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 393104820,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3253778172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neighbouring",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 89536987,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2744261955,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 5077691482,
  "status": "passed"
});
formatter.after({
  "duration": 1192997579,
  "status": "passed"
});
formatter.before({
  "duration": 4924648202,
  "status": "passed"
});
formatter.scenario({
  "line": 202,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;180",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the required to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the required to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the required result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms required to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9430548767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "required",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 77774954,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3400263509,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 31080875,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1167643345,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 90988585,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 169623388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "required",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 83496320,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 56987448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "required",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 339006603,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2934941571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "required",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 76237092,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1870209272,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 40402996,
  "status": "passed"
});
formatter.after({
  "duration": 1186308068,
  "status": "passed"
});
formatter.before({
  "duration": 4990173016,
  "status": "passed"
});
formatter.scenario({
  "line": 203,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;181",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the traditional to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the traditional to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the traditional result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms traditional to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7725776897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "traditional",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 94758765,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2046407669,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 37477460,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1659735739,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 101766958,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 163563482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "traditional",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 79906114,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73506116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "traditional",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 337270457,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3493209486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "traditional",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 92862504,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2424062815,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 45570472,
  "status": "passed"
});
formatter.after({
  "duration": 1128302516,
  "status": "passed"
});
formatter.before({
  "duration": 4893553053,
  "status": "passed"
});
formatter.scenario({
  "line": 204,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;182",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the describe to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the describe to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the describe result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms describe to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6927628041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "describe",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 68671596,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2767171933,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 41552359,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1229965833,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 130712949,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 203893868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "describe",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 87539257,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 76620627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "describe",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 327293596,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3550440211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "describe",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 84322036,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1517757863,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 46360193,
  "status": "passed"
});
formatter.after({
  "duration": 1120742915,
  "status": "passed"
});
formatter.before({
  "duration": 4944930224,
  "status": "passed"
});
formatter.scenario({
  "line": 205,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;183",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the escape to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the escape to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the escape result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms escape to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 7285124356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "escape",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 83323481,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2200031837,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 33976622,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1260390727,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 113769787,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 168062254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "escape",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 64187408,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 73226843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "escape",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 345079541,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3217729346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "escape",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 83734012,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1886104230,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 36316927,
  "status": "passed"
});
formatter.after({
  "duration": 1174287863,
  "status": "passed"
});
formatter.before({
  "duration": 4952234135,
  "status": "passed"
});
formatter.scenario({
  "line": 206,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;184",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the fortifications to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the fortifications to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the fortifications result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms fortifications to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 9017054250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fortifications",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 112818088,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3863005588,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 43835878,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1183798959,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 84830002,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 154875310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fortifications",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 70323649,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 53008434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fortifications",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 337850724,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 4120151478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fortifications",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 96332933,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2707754502,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 43322017,
  "status": "passed"
});
formatter.after({
  "duration": 1190404998,
  "status": "passed"
});
formatter.before({
  "duration": 4939373628,
  "status": "passed"
});
formatter.scenario({
  "line": 207,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;185",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the enemy to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the enemy to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the enemy result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms enemy to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 6899910850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enemy",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 108181851,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2332333227,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 74069005,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1216759028,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 115781481,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 194022821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enemy",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 60473702,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 62586865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enemy",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 410055429,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3492303401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enemy",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 86560252,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2292364965,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 40964646,
  "status": "passed"
});
formatter.after({
  "duration": 1168311117,
  "status": "passed"
});
formatter.before({
  "duration": 4865194776,
  "status": "passed"
});
formatter.scenario({
  "line": 208,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;186",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the revival to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the revival to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the revival result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms revival to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8077169553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "revival",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 72091445,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2094923537,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 50852759,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1176876720,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 117371784,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 168654933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "revival",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 71810310,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 70498970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "revival",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 315124135,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3002292829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "revival",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 66577051,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 2240507444,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 53921345,
  "status": "passed"
});
formatter.after({
  "duration": 1169139936,
  "status": "passed"
});
formatter.before({
  "duration": 5036061548,
  "status": "passed"
});
formatter.scenario({
  "line": 209,
  "name": "",
  "description": "",
  "id": "testing-google-translate;;;187",
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
  "name": "open oxford dictionaries url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "put the growing to query box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press enter into query box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "grab the real word",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select from english language",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select to bangla language",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "put the growing to input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "press translate button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save the growing result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "open synonyms url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "put the synonyms growing to search box",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "press submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "find relevancy list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openOxfordDictionariesUrl()"
});
formatter.result({
  "duration": 8311326958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "growing",
      "offset": 8
    }
  ],
  "location": "Steps.putTheWordToQueryBox(String)"
});
formatter.result({
  "duration": 77374353,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 2067631150,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 41138415,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1130510321,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 108719296,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 165733741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "growing",
      "offset": 8
    }
  ],
  "location": "Steps.put_the_to_input_box(String)"
});
formatter.result({
  "duration": 71200566,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 59453427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "growing",
      "offset": 9
    }
  ],
  "location": "Steps.save_the_result(String)"
});
formatter.result({
  "duration": 321156424,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 2990969253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "growing",
      "offset": 17
    }
  ],
  "location": "Steps.putTheSynonymsWordToSearchBox(String)"
});
formatter.result({
  "duration": 64599491,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1877303418,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 48407882,
  "status": "passed"
});
formatter.after({
  "duration": 1177520289,
  "status": "passed"
});
});