package com.hmtmcse;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Touhid on 20/01/2016.
 */
@RunWith(Cucumber.class)
@Cucumber.Options(format={"pretty","html:reports/test-report"},tags= "@smokeTest")
public class CucumberRunner {

}

