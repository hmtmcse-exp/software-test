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
    |retirement|
    |volunteer|
    |activities|
    |involved|
    |residents|
    |certainly|
    |interested|
    |informal|
    |singing|
    |session|
    |generally|
    |gardening|
    |involved|
    |important|
    |residents|
    |certainly|
    |entertainers|
    |visitors|
    |organising|
    |publicity|
    |interviewed|
    |learning|
    |resource|
    |leisure|
    |center|
    |periodical|
    |shelve|
    |magazine|
    |periodical|
    |downstairs|
    |upstairs|
    |opposite|
    |extended|
    |layout|
    |specialist|
    |penshurst|
    |improve|
    |produce|
    |occupations|
    |particular|
    |collection|
    |relevant|
    |documents|
    |wildlife|
    |advice|
    |additional|
    |responsibility|
    |eligible|
    |financial|
    |placement|
    |association|
    |placement|
    |fragile|
    |somewhere|
    |stages|
    |winter|
    |equipment|
    |filming|
    |surprised|
    |managed|
    |luck|
    |actually|
    |recording|
    |deadline|
    |otherwise|
    |training|
    |probably|
    |draft|
    |deciding|
    |appear|
    |casting|
    |association|
    |informative|
    |companies|
    |design|
    |lettering|
    |rough|
    |evaluation|
    |placement|
    |included|
    |benefit|
    |benefited|
    |responsibilities|
    |conservation|
    |understanding|
    |equipment|
    |expense|
    |thought|
    |suggestion|
    |distribution|
    |museum|
    |mentioned|
    |certainly|
    |caledonian|
    |crow|
    |whose|
    |habitat|
    |islands|
    |pacific|
    |exceptionally|
    |resourceful|
    |unknown|
    |sticks|
    |chimpanzees|
    |bang|
    |nuts|
    |stones|
    |edible|
    |vertical|
    |pipe|
    |experiment|
    |wire|
    |casual|
    |impressive|
    |barney|
    |demonstrated|
    |short|
    |amazingly|
    |observing|
    |printed|
    |spider|
    |underwent|
    |react|
    |variety|
    |precaution|
    |beforehand|
    |occasions|
    |approached|
    |prodded|
    |investigation|
    |packing|
    |discarded|
    |confidently|
    |apparently|
    |convinced|
    |experiments|
    |approach|
    |separate|
    |occasions|
    |pierre|
    |woodchip|
    |prodding|
    |significantly|
    |tended|
    |subsequently|
    |dropped|
    |pecked|
    |cognition|
    |responding|
    |intelligence|
    |extent|
    |circumstance|
    |scientist|
    |ecological|
    |evolutionary|
    |advantage|
    |mountainous|
    |investigation|
    |behaviour|
    |beetle|
    |larvae|
    |themselves|
    |diet|