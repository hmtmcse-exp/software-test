import com.processor.MyFileWriter;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Element;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.io.File;
import java.util.concurrent.TimeUnit;

/**
 * Created by touhid on 24/07/2016.
 */
public class Steps {


    WebDriver driver;
    String wordLine = "";
    String searchWord = "";

    String name = "ieltsbuddy" + ".csv";

    @Before
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "resources/windows/chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addExtensions(new File("resources/addons/extension_1_13_4.crx"));
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(ChromeOptions.CAPABILITY, options);

        ChromeDriverService service = new ChromeDriverService.Builder()
                .usingDriverExecutable(new File("resources/windows/chromedriver_v2.40.exe"))
                .usingAnyFreePort()
                .build();
        options.merge(capabilities);
        driver =new ChromeDriver(service, options);
    }


    @Given("^open the url$")
    public void open_the_url() {
        driver.get("https://translate.google.com");
    }

    @When("^select from english language$")
    public void select_from_english_language() {
        WebElement englishTab = driver.findElement(By.className("tlid-open-source-language-list"));
        englishTab.click();
        WebElement englishButton = driver.findElement(By.className("language_list_item_wrapper-en"));
        englishButton.click();

    }

    @Then("^select to bangla language$")
    public void select_to_bangla_language() {
        WebElement selectBangla = driver.findElement(By.className("tlid-open-target-language-list"));
        selectBangla.click();
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[2]/div[2]/div[2]/div/div[2]/div[10]/div[2]")).click();
    }

    @Then("^put the ([^\"]*) to input box$")
    public void put_the_to_input_box(String word) {
        WebElement textArea = driver.findElement(By.id("source"));
//        textArea.sendKeys(word);
        textArea.sendKeys(searchWord);
    }

    @Then("^press translate button$")
    public void press_translate_button(){
//        WebElement translateButton = driver.findElement(By.id("gt-submit"));
//        translateButton.click();
    }

    @Then("^save the ([^\"]*) result$")
    public void save_the_result(String word) {

        String result = findElementBy(By.xpath("/html/body/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div/span[1]/span"));
        WebElement webElement = findElementByRObject(By.className("cd-exp-ar"));
        try {
            if (webElement != null) {
                Actions actions = new Actions(driver);
                actions.moveToElement(webElement).perform();
                webElement.click();
            }
        } catch (Exception e) {

        }

        String pFp = findElementBy(By.className("gt-cd-pos"));
        String synonyms = findElementBy(By.className("gt-syn-span"));
        String englishMeaning = findElementBy(By.className("gt-def-row"));

        System.out.println();
        System.out.println("====================== RESULT ======================");
        System.out.println(result);
        System.out.println("word: " + searchWord);


        System.out.println("pFp: " + MyFileWriter.toUpperFirst(pFp));
        System.out.println("synonyms: " + synonyms);
        System.out.println("englishMeaning: " + englishMeaning);
        System.out.println("====================== END RESULT ======================");

        wordLine +=  MyFileWriter.toUpperFirst(searchWord) + "," + result + "," + MyFileWriter.toUpperFirst(pFp) + ",\"" + MyFileWriter.commaToList(synonyms) + "\",\"" + englishMeaning + "\",,";

    }

    private String findElementBy(By by){
        try{
            WebElement result = driver.findElement(by);
            return result.getText();
        }catch (NoSuchElementException n){
            return "";
        }
    }

    private WebElement findElementByRObject(By by){
        try{
            WebElement result = driver.findElement(by);
            return result;
        }catch (NoSuchElementException n){
            return null;
        }
    }

    @After
    public void closeBrowser() {
        driver.quit();
    }

    @Given("^open synonyms url$")
    public void openSynonymsUrl() {
        driver.get("http://www.thesaurus.com");
    }


    @Then("^put the synonyms ([^\"]*) to search box$")
    public void putTheSynonymsWordToSearchBox(String word) {
        WebElement textArea = driver.findElement(By.id("searchAreaInputText"));
//        textArea.sendKeys(word);
        textArea.sendKeys(searchWord);
    }

    @Then("^press submit button$")
    public void pressSubmitButton() {
        WebElement translateButton = driver.findElement(By.id("searchAreaSubmit"));
        translateButton.click();
    }

    @Then("^find relevancy list$")
    public void findRelevancyList() {
        WebElement webElement = findElementByRObject(By.xpath("//*[@id=\"initial-load-content\"]/div/div/div[2]/section[1]/ul"));
        String synonyms = "";
        if (webElement != null){
            String body = webElement.getAttribute("innerHTML");
            int item = 0;
            for (Element element : Jsoup.parse(body).select("li a")) {
                synonyms += element.ownText() + "\n";
                if (item > 5) {
                    wordLine += "\"" + synonyms + "\",";
                    synonyms = "";
                    item = 0;
                }
                item++;
            }
        }
        wordLine += "\"" + synonyms + "\",";
        MyFileWriter.appendToFile(wordLine, "csv\\" + name);
    }

    @Given("^open oxford dictionaries url$")
    public void openOxfordDictionariesUrl() {
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.get("https://en.oxforddictionaries.com/");
    }


    @And("^put the ([^\"]*) to query box$")
    public void putTheWordToQueryBox(String word) {
        WebElement textArea = driver.findElement(By.id("query"));
        textArea.sendKeys(word);
        wordLine +=  MyFileWriter.toUpperFirst(word) + ",";
    }

    @And("^press enter into query box$")
    public void pressEnterIntoQueryBox() {
        WebElement textArea = driver.findElement(By.id("query"));
        textArea.sendKeys(Keys.RETURN);
    }

    @And("^grab the real word$")
    public void grabTheRealWord() {
        String result = findElementBy(By.xpath("//h2[@class=\"hwg\"]/span[@class=\"hw\"]"));
        if (result != null || result.equals("")){
            searchWord = result;
        }
    }
}
