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
  "duration": 5236646965,
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
  "duration": 8542607544,
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
  "duration": 141552762,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 4596634392,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 40843627,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1254969114,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 104479317,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 182420593,
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
  "duration": 75923376,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 59818343,
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
  "duration": 372457882,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3136209656,
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
  "duration": 101283506,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1169189585,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 9087630796,
  "status": "passed"
});
formatter.after({
  "duration": 1146877871,
  "status": "passed"
});
formatter.before({
  "duration": 4912563453,
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
  "duration": 8762857791,
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
  "duration": 90390941,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressEnterIntoQueryBox()"
});
formatter.result({
  "duration": 3893937518,
  "status": "passed"
});
formatter.match({
  "location": "Steps.grabTheRealWord()"
});
formatter.result({
  "duration": 41101488,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_the_url()"
});
formatter.result({
  "duration": 1191245298,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_from_english_language()"
});
formatter.result({
  "duration": 124655525,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_to_bangla_language()"
});
formatter.result({
  "duration": 186105441,
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
  "duration": 73338863,
  "status": "passed"
});
formatter.match({
  "location": "Steps.press_translate_button()"
});
formatter.result({
  "duration": 62432025,
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
  "duration": 356323989,
  "status": "passed"
});
formatter.match({
  "location": "Steps.openSynonymsUrl()"
});
formatter.result({
  "duration": 3432151792,
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
  "duration": 110672032,
  "status": "passed"
});
formatter.match({
  "location": "Steps.pressSubmitButton()"
});
formatter.result({
  "duration": 1724332437,
  "status": "passed"
});
formatter.match({
  "location": "Steps.findRelevancyList()"
});
formatter.result({
  "duration": 196581846284,
  "status": "passed"
});
