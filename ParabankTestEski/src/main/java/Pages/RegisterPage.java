package Pages;

import Base.BaseTest;
import org.junit.Assert;
import org.openqa.selenium.By;

public class RegisterPage extends BaseTest {

    By txtFirstName = By.id("customer.firstName");
    By txtLastName = By.id("customer.lastName");
    By txtAddress = By.id("customer.address.street");
    By txtCity = By.id("customer.address.city");
    By txtState = By.id("customer.address.state");
    By txtZipCode = By.id("customer.address.zipCode");
    By txtPhoneNumber = By.id("customer.phoneNumber");
    By txtSSNid = By.id("customer.ssn");
    By txtUserName = By.id("customer.username");
    By lblErrorUserName = By.id("customer.username.errors");
    By txtPassword = By.id("customer.password");
    By txtRepeatedPassword = By.id("repeatedPassword");
    By btnRegister = By.cssSelector("[value='Register']");

    public RegisterPage fillFirstName(String text){
        driver.findElement(txtFirstName).sendKeys(text);
        return this;
    }

    public RegisterPage fillLastName(String text){
        driver.findElement(txtLastName).sendKeys(text);
        return this;
    }

    public RegisterPage fillAddress(String text){
        driver.findElement(txtAddress).sendKeys(text);
        return this;
    }

    public RegisterPage fillCity(String text){
        driver.findElement(txtCity).sendKeys(text);
        return this;
    }

    public RegisterPage fillState(String text){
        driver.findElement(txtState).sendKeys(text);
        return this;
    }

    public RegisterPage fillZipCode(String text){
        driver.findElement(txtZipCode).sendKeys(text);
        return this;
    }

    public RegisterPage fillPhoneNumber(String text){
        driver.findElement(txtPhoneNumber).sendKeys(text);
        return this;
    }

    public RegisterPage fillSSNid(String text){
        driver.findElement(txtSSNid).sendKeys(text);
        return this;
    }

    public RegisterPage fillUserName(String text){
        driver.findElement(txtUserName).sendKeys(text);
        return this;
    }

    public RegisterPage userNameErrorMessageControl(){
        boolean status =  driver.findElement(lblErrorUserName).isDisplayed();
        Assert.assertTrue(status);
        return this;
    }

    public RegisterPage fillPassword(String text){
        driver.findElement(txtPassword).sendKeys(text);
        return this;
    }

    public RegisterPage fillRepeatedPassword(String text){
        driver.findElement(txtRepeatedPassword).sendKeys(text);
        return this;
    }

    public RegisterPage clickRegister(){
        driver.findElement(btnRegister).click();
        return this;
    }
}
