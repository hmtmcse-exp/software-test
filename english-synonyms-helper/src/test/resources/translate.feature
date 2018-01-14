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
    |phoning|
    |competition|
    |advert|
    |magazine|
    |certainly|
    |organiser|
    |erm|
    |freedom|
    |guidelines|
    |reduced|
    |particular|
    |surprise|
    |ending|
    |advertising|
    |announce|
    |judged|
    |prizes|
    |fantastic|
    |eventually|
    |stories|
    |brilliant|
    |straight|
    |guess|
    |surprised|
    |crocodiles|
    |restaurant|
    |finished|
    |splash|
    |exciting|
    |scary|
    |wearing|
    |feeding|
    |especially|
    |seals|
    |although|
    |excited|
    |amazed|
    |frightening|
    |unsure|
    |perfectly|
    |impressed|
    |organise|
    |afterwards|
    |conservation|
    |aware|
    |worrying|
    |situation|
    |species|
    |petition|
    |signatures|
    |seriously|
    |discover|
    |learnt|
    |cave|
    |beyond|
    |endangered|
    |overlooked|
    |apologise|
    |entertained|
    |directly|
    |opposite|
    |expecting|
    |hatched|
    |quieter|
    |accent|
    |career|
    |decide|
    |suppose|
    |theory|
    |heavy|
    |field|
    |nearby|
    |cope|
    |lecture|
    |knowledgeable|
    |seminars|
    |frustrating|
    |perhaps|
    |appear|
    |tutor|
    |approachable|
    |dreading|
    |assessment|
    |residence|
    |noisy|
    |somewhere|
    |dash|
    |presentation|
    |sociology|
    |prepare|
    |principles|
    |across|
    |audience|
    |instance|
    |group|
    |bear|
    |supportive|
    |gathering|
    |shocking|
    |relevant|
    |covering|
    |agenda|
    |detailed|
    |summarise|
    |consistent|
    |diagrams|
    |histogram|
    |impression|
    |enthusiastic|
    |energetic|
    |rapidly|
    |unfamiliar|
    |terrified|
    |uncomfortable|
    |absorb|
    |thought|
    |interruptions|
    |encouraged|
    |feedback|
    |ensure|
    |unwelcome|
    |beforehand|
    |prediction|
