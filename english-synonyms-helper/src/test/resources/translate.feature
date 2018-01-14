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
    |intecourtrested|
    |surname|
    |rather|
    |difficult|
    |born|
    |becoming|
    |memberships|
    |off-peak|
    |restricted|
    |facilities|
    |gym|
    |squash|
    |anyway|
    |interested|
    |monthly|
    |lifestyle|
    |exercise|
    |jogging|
    |varies|
    |energetic|
    |injuries|
    |bone|
    |healed|
    |ankle|
    |sore|
    |recover|
    |achieve|
    |recently|
    |charity|
    |while|
    |mentioned|
    |exceptionally|
    |wedding|
    |straight|
    |extremely|
    |reputation|
    |cater|
    |invitation|
    |between|
    |around|
    |depending|
    |entertainment|
    |occasion|
    |apparently|
    |comedian|
    |resident|
    |held|
    |providing|
    |decision|
    |belongings|
    |responsibility|
    |confusion|
    |roaming|
    |deposited|
    |lounge|
    |themselves|
    |according|
    |waiting|
    |humoured|
    |waiting|
    |polite|
    |colleagues|
    |speeches|
    |heard|
    |recycling|
    |flow|
    |production|
    |tend|
    |chopped up|
    |stages|
    |complicated|
    |mixture|
    |thick|
    |pulp|
    |distributed|
    |chemistry|
    |definitely|
    |pulping|
    |divide|
    |contacting|
    |council|
    |wonder|
    |deadline|
    |hair|
    |ancestors|
    |warmth|
    |protection|
    |significant|
    |composed|
    |protein|
    |keratin|
    |rigid|
    |tonnes|
    |strands|
    |blonde|
    |trimming|
    |bulb|
    |shaft|
    |glands|
    |fortunately|
    |impact|
    |noticeable|
    |balanced|
    |vital|
    |boost|
    |blueberries|
