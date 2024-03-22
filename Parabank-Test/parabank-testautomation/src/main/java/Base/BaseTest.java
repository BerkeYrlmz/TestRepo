package Base;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BaseTest extends BaseLib {

    public static WebDriver driver;

    @Before
    public void BeforeTest(){

        if (browser.equals("Chrome")){
            driver = new ChromeDriver();
        }
        else if (browser.equals("Firefox")){
            driver = new FirefoxDriver();
        }
        else if (browser.equals("Edge")){
            driver = new EdgeDriver();
        }

        driver.get("https://parabank.parasoft.com/parabank/index.htm");
    }

    @After
    public void afterTest(){
        driver.quit();
    }
}
