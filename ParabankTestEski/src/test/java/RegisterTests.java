import Base.BaseTest;
import Pages.HomePage;
import Pages.LoginPage;
import Pages.MainPage;
import Pages.RegisterPage;
import org.junit.Test;

public class RegisterTests  extends BaseTest {

    LoginPage loginPage = new LoginPage();
    RegisterPage registerPage = new RegisterPage();
    HomePage homePage = new HomePage();

    @Test
    public void userCreate(){
        String username = "testqa"+createRandomNumber(1000000);

        loginPage
                .clickRegister();

        registerPage
                .fillFirstName("TEST QA")
                .fillLastName("QA TEST")
                .fillAddress("Deneme")
                .fillCity("ISTANBUL")
                .fillState("DENEME")
                .fillZipCode("34000")
                .fillPhoneNumber("42342353432")
                .fillSSNid("2132331")
                .fillUserName(username)
                .fillPassword("123")
                .fillRepeatedPassword("123")
                .clickRegister();

        homePage.usernameControl("Welcome "+username);
    }

    @Test
    public void notValidUser(){
        String username = "TestQa12345";

        loginPage
                .clickRegister();

        registerPage
                .fillFirstName("TEST QA")
                .fillLastName("QA TEST")
                .fillAddress("Deneme")
                .fillCity("ISTANBUL")
                .fillState("DENEME")
                .fillZipCode("34000")
                .fillPhoneNumber("42342353432")
                .fillSSNid("2132331")
                .fillUserName(username)
                .fillPassword("123")
                .fillRepeatedPassword("123")
                .clickRegister()
                .userNameErrorMessageControl();
    }
}
