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

import java.util.concurrent.TimeUnit;

public class GoogleCalculatorSteps {


    WebDriver driver;
    String url = "https://www.google.com";

    @Before
    public void setup() {
        try {
            System.setProperty("webdriver.chrome.driver", "resources/windows/chromedriver_v2.33.exe");
            driver = new ChromeDriver();
            driver.manage().window().maximize();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    @Given("^Go to google url$")
    public void go_to_google_url() {
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.get(url);
    }

    @When("^Enter \"([^\"]*)\" in google search$")
    public void enter_in_google_search(String arg1) {
        WebElement googleTextBox = driver.findElement(By.id("lst-ib"));
        googleTextBox.sendKeys(arg1);


        //Click on searchButton
        WebElement searchButton = driver.findElement(By.className("lsb"));
        searchButton.click();
    }

    @Then("^We will get result \"([^\"]*)\"$")
    public void we_will_get_result(String arg1){
        //Get result from calculator
        WebElement calculatorTextBox = driver.findElement(By.id("cwos"));
        String result = calculatorTextBox.getText();
        Assert.assertEquals(result, arg1);
    }


    @After
    public void closeBrowser() {
        driver.quit();
    }
}
