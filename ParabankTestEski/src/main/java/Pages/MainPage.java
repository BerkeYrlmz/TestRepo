package Pages;

import Base.BaseTest;
import org.junit.Assert;
import org.openqa.selenium.By;

public class MainPage extends BaseTest {

    By lblErrorMessage1 = By.xpath("//*[@id=\"rightPanel\"]/p");
    By lblErrorMessage2 = By.cssSelector("[class='error']");

    public MainPage errorMessageControl(String errorMessage) {
        String text = driver.findElement(lblErrorMessage1).getText();

        Assert.assertEquals(text, errorMessage);
        return this;
    }

    public MainPage errorMessageControl2(String errorMessage) {
        String text = driver.findElement(lblErrorMessage2).getText();

        Assert.assertEquals(text, errorMessage);
        return this;
    }
}