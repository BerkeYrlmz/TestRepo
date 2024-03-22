package Pages;

import Base.BaseTest;
import org.openqa.selenium.By;

public class LoginPage extends BaseTest {

    By txtUsername = By.name("username");
    By txtPassword = By.name("password");
    By btnLogin = By.cssSelector("[value='Log In']");
    By btnRegister = By.cssSelector("[href*='register.htm']");

    public LoginPage fillUsername(String text){
        driver.findElement(txtUsername).sendKeys(text);
        return this;
    }

    public LoginPage fillPassword(String text){
        driver.findElement(txtPassword).sendKeys(text);
        return this;
    }

    public LoginPage clickLogin(){
        driver.findElement(btnLogin).click();
        return this;
    }

    public LoginPage clickRegister(){
        driver.findElement(btnRegister).click();
        return this;
    }
}
