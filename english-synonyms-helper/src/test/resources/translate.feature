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
    |particular|
    |painting|
    |watercolour|
    |term|
    |exactly|
    |probably|
    |suit|
    |enough|
    |apron|
    |space|
    |straight|
    |recommends|
    |interested|
    |accessories|
    |alone|
    |along|
    |focusing|
    |composition|
    |skilled|
    |designed|
    |professional|
    |opportunity|
    |imagine|
    |community|
    |council|
    |couple|
    |bottles|
    |offered|
    |lying|
    |environmental|
    |project|
    |priority|
    |wooden|
    |fencing|
    |fallen|
    |broken|
    |pathways|
    |narrow|
    |promised|
    |produce|
    |getting|
    |rid|
    |growing|
    |digging|
    |definitely|
    |muddy|
    |moment|
    |gloves|
    |advisable|
    |spades|
    |truck|
    |supplying|
    |event|
    |assigned|
    |directly|
    |vegetable beds|
    |bee|
    |hives|
    |easterly|
    |fence|
    |plan|
    |transport|
    |alongside|
    |i suppose|
    |adventure|
    |playground|
    |repairing|
    |sand|
    |towards|
    |pond|
    |bushes|
    |as i said already|
    |presentation|
    |concentrating|
    |fair enough|
    |concluded|
    |billion|
    |landfill|
    |tons|
    |incredible|
    |households|
    |threw|
    |away|
    |catering|
    |investigate|
    |unique|
    |respect|
    |dioxide|
    |emissions|
    |factories|
    |release|
    |forget|
    |causes|
    |comprehensive|
    |industries|
    |documentaries|
    |exactly|
    |focusing|
    |encouraged|
    |locally|
    |overseas|
    |same|
    |reaches|
    |presentation|
    |consequences|
    |concentrate|
    |farming|
    |avoid|
    |fact|
    |afford|
    |repeat|
    |concerns|
    |recession|
    |encouraging|
    |apparently|
    |supermarkets|
    |attention|
    |statistics|
    |everybody|
    |suspect|
    |waste|
    |personalised|
    |researchers|
    |invented|
    |tiny|
    |manufacture|
    |massachusetts|
    |detect|
    |ethylene|
    |cardboard|
    |quicker|
    |ripeness|
    |eventually|
    |unwanted|
    |neighbourhood|
    |compulsory|
    |organic|
    |inorganic|
    |themselves|
    |craft|
    |practised|
    |kite|
    |appearance|
    |artistic|
    |involved|
    |rituals|
    |priests|
    |sacred|
    |strictly|
    |forbidden|
    |perhaps|
    |imagine|
    |suitable|
    |materials|
    |wings|
    |noisy|
    |indeed|
    |capture|
    |cultures|
    |shapes|
    |diamond|
    |covered|
    |combined|
    |species|
    |museum|
    |surviving|
    |wooden|
    |mask|
    |impressive|
    |craftsmanship|
    |symbolism|
    |harvest|
    |fortune|
    |communicating|
    |expedition|
    |treasured|
    |generation|
    |neighbouring|
    |required|
    |traditional|
    |describe|
    |escape|
    |fortifications|
    |enemy|
    |revival|
    |growing|