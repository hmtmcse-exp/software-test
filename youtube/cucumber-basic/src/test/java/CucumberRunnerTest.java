/**
 * Created by Touhid Mia on 28/10/2016.
 */

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(format={"pretty","html:reports/test-report"},tags= "@smokeTest")

public class CucumberRunnerTest {



}
