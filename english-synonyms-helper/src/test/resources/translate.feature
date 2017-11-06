@translate

Feature: Testing Google Translate


  Scenario Outline:
    Given open oxford dictionaries url
    And put the <word> to query box
    And press enter into query box
    And grab the real word
    Given open the url
    When select from english language
    Then select to bangla language
    And put the <word> to input box
    Then press translate button
    Then save the <word> result
    Given open synonyms url
    Then put the synonyms <word> to search box
    Then press submit button
    Then find relevancy list

    Examples:
    |word|
    |technologies|
    |department|
    |thanks|
    |responsible|
    |admissions|
    |process|
    |enrolments|
    |suit|
    |although|
    |introduced|
    |experiencing|
    |tutors|
    |increasing|
    |crashed|
    |takes ages|
    |timetabling|
    |options|
    |never|
    |seemed|
    |efficient|
    |obviously|
    |schedule|
    |decide|
    |prefer|
    |quite|
    |probably|
    |although|
    |intake|
    |processing|
    |afraid|
    |initial|
    |estimate|
    |improve|
    |least|
    |discussed|
    |keen|
    |ahead|
    |mentioned|
    |analyst|
    |identify|
    |different|
    |conference|
    |origins|
    |inorganic|
    |solids|
    |earthenware|
    |crockery|
    |glassware|
    |concrete|
    |dig up|
    |clay|
    |temperature|
    |transformed|
    |rigid|
    |figurines|
    |statues|
    |depicted|
    |centred|
    |grain|
    |drawbacks|
    |brittle|
    |shattered|
    |dropped|
    |despite|
    |minerals|
    |appearance|
    |perfected|
    |porcelain|
    |commodity|
    |spies|
    |merchandise|
    |unravel|
    |alchemist|
    |lead|
    |quartz|
    |sand|
    |crystalline|
    |occurring|
    |widespread|
    |innovative|
    |draughty|
    |volcanic|
    |observed|
    |numerous|
    |intact|
    |harbours|
    |hardening|
    |dissolving|
    |mass|
    |significant|
    |contribution|
