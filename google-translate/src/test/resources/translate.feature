@translate

Feature: Testing Google Translate


  Scenario Outline:
    Given open the url
    When select from english language
    Then select to bangla language
    And put the <word> to input box
    Then press translate button
    Then save the <word> result

    Examples:
    |word|
    |about|
    |above|
    |across|
    |after|
    |against|
    |along|
    |among|
    |around|
    |at|
    |before|
    |behind|
    |between|
    |beyond|
    |but|
    |by|
    |concerning|
    |despite|
    |down|
    |during|
    |except|
    |following|
    |for|
    |from|
    |including|
    |into|
    |like|
    |near|
    |off|
    |on|
    |out|
    |over|
    |plus|
    |since|
    |through|
    |throughout|
    |towards|
    |under|
    |until|
    |up|
    |upon|
    |with|
    |within|
    |without|