import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

/**
 * Created by touhid on 30/05/2016.
 */
public class GoogleCalculatorSteps {


    WebDriver driver;
    String url = "https://www.google.com";

    @Before
    public void setup() {
        System.setProperty("webdriver.chrome.driver","C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe");
//        driver = new ChromeDriver();
//        driver = new FirefoxDriver();
    }


    @Given("^I open google$")
    public void i_open_google() {
        //Set implicit wait of 10 seconds and launch google
//        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
//        driver.get(url);

        WebDriver driver = new ChromeDriver();
        driver.get("http://www.google.com/xhtml");
        try {
            Thread.sleep(5000);  // Let the user actually see something!
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.sendKeys("ChromeDriver");
        searchBox.submit();
        try {
            Thread.sleep(5000);  // Let the user actually see something!
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.quit();

    }

    @When("^I enter \"([^\"]*)\" in search textbox$")
    public void i_enter_in_search_textbox(String arg1) {
        //Write term in google textbox
        WebElement googleTextBox = driver.findElement(By.id("gbqfq"));
        googleTextBox.sendKeys(arg1);


        //Click on searchButton
        WebElement searchButton = driver.findElement(By.id("gbqfb"));
        searchButton.click();
    }

    @Then("^I should get result as \"([^\"]*)\"$")
    public void i_should_get_result_as(String arg1) {
        //Get result from calculator
        WebElement calculatorTextBox = driver.findElement(By.id("cwos"));
        String result = calculatorTextBox.getText();

        //Verify that result of 2+2 is 4
        Assert.assertEquals(result, arg1);
        driver.close();
    }


    @After
    public void closeBrowser() {
        driver.quit();
    }

}
