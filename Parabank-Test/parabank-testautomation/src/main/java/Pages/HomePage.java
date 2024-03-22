package Pages;

import Base.BaseTest;
import org.junit.Assert;
import org.openqa.selenium.By;

public class HomePage extends BaseTest {

    By objTitle = By.xpath("//*[@id=\"rightPanel\"]/div/div/h1");
    By lblUsername = By.cssSelector("[id='rightPanel']");

    public HomePage pageControl(String title){
    String text = driver.findElement(objTitle).getText();

    Assert.assertEquals(title, text);
    return this;
    }

    public HomePage usernameControl(String title){
        String text = driver.findElement(lblUsername).getText();

        Assert.assertEquals(title, text);
        return this;
    }
}
